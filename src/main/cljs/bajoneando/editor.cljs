(ns bajoneando.editor
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]
           [goog.i18n DateTimeFormat])
  (:require [cljs.core.async :refer [put! <! chan]]
            [cognitect.transit :as transit]
            [om.core :as om :include-macros true]
            [goog.events :as events]
            [sablono.core :as html :refer-macros [html]]
            [bajoneando.core :as bcore]))

(def writer (transit/writer :json-verbose))
(def reader (transit/reader :json))

(def app-state (atom {:page 1}))

(def date-formatter (DateTimeFormat. "dd-MMM-yyyy"))
(def in-date-formatter (DateTimeFormat. "yyyy-MM-dd"))
(def date-time-formatter (DateTimeFormat. "dd-MMM-yyyy HH:mm"))
(def in-date-time-formatter (DateTimeFormat. "yyyy-MM-dd HH:mm"))

(defn nav-pages [app owner op]
      (let [entries (om/get-state owner [:entries-chan])
            page (op (:page @app))]
           (bcore/js-xhr {:method :get
                          :url (str "/blog/entries?page.page=" page)
                          :on-complete (fn [res]
                                           (do
                                             (put! entries res)
                                             (om/update! app :page page)))})))

(defn can-edit [{:keys [method url on-complete]}]
      (let [xhr (XhrIo.)]
           (if on-complete
             (events/listen xhr goog.net.EventType.COMPLETE
                            (fn [e]
                                (let [status (.getStatus xhr)]
                                     (if (= status 200)
                                       (do
                                         (on-complete)))))))
           (. xhr
              (send url (bcore/meths method)))))

(defn article-view [entry owner]
      (reify
        om/IRenderState
        (render-state [this state]
                      (html [:article
                             {:id (get entry "subject")
                              :class "blogcontent"}
                             [:header
                              [:h1
                               [:a {:href (str "/blog/" (get entry "id") "/" (get entry "subject"))}
                                (get entry "subject")]]
                              [:p.text-muted
                               (str "Published on: ")
                               (let [in-date (js/Date. (get entry "publishDate"))
                                     publish-date (.format date-formatter in-date)
                                     in-publish-date (.format in-date-formatter in-date)]
                                    [:time.publishDate
                                     {:dateTime in-publish-date}
                                     publish-date])]
                              (if (om/get-state owner :editable)
                                (html [:button.btn.btn-danger "Edit"]))]
                             [:div.printableHtml
                              {:dangerouslySetInnerHTML #js {:__html (get entry "printableHtml")}}]
                             (let [in-date (js/Date. (get entry "lastUpdateDate"))
                                   last-updated (.format date-time-formatter in-date)
                                   in-last-updated (.format in-date-time-formatter in-date)]
                                  [:p.text-muted
                                   "Last update: "
                                   [:time
                                    {:dateTime in-last-updated}
                                    last-updated]])]))))

(defn articles-view [app owner]
      (reify
        om/IInitState
        (init-state
          [_]
          {:entries []
           :entries-chan  (chan)
           :editable-chan (chan)
           :first-page true
           :last-page false
           :page 1
           :editable false})
        om/IWillMount
        (will-mount
          [_]
          (let [entries (om/get-state owner [:entries-chan])]
               (go (while true
                          (let [res (<! entries)]
                               (do
                                 (om/set-state! owner :entries (get res "content"))
                                 (om/set-state! owner :first-page (get res "firstPage"))
                                 (om/set-state! owner :last-page (get res "lastPage"))))))
               (bcore/js-xhr {:method :get
                              :url (str "/blog/entries?page.page=" (:page app))
                              :on-complete (fn [res]
                                               (put! entries res))}))
          (let [editable (om/get-state owner [:editable-chan])]
               (go (while true
                          (let [edit (<! editable)]
                               (om/set-state! owner :editable true))))
               (can-edit {:method :get
                          :url "/blog/can-edit"
                          :on-complete (fn []
                                           (do
                                             (put! editable true)))})))
        om/IRenderState
        (render-state
          [this state]
          (let [entries (:entries state)
                page (:page state)
                editable (:editable state)
                first-page (:first-page state)
                last-page (:last-page state)]
               (html [:div
                      (om/build-all article-view entries {:init-state state})
                      [:nav
                       [:ul.pager
                        [:li.previous
                         {:class (if last-page
                                   "disabled")}
                         [:a
                          {:href "#"
                           :on-click #(nav-pages app owner inc)}
                          [:span
                           {:aria-hidden true}
                           "←"]
                          "Older"]]
                        [:li.next
                         {:class (if first-page
                                   "disabled")}
                         [:a
                          {:href "#"
                           :on-click #(nav-pages app owner dec)}
                          "Newer"
                          [:span
                           {:aria-hidden true}
                           "→"]]
                         ]]]

                      ])))))

(om/root
  articles-view
  app-state
  {:target (. js/document (getElementById "articles"))})
