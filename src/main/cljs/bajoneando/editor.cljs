(ns bajoneando.editor
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]
           [goog.i18n DateTimeFormat])
  (:require [cljs.core.async :refer [put! <! chan]]
            [cognitect.transit :as transit]
            [om.core :as om :include-macros true]
            [om.dom :as dom]
            [goog.events :as events]
            [sablono.core :as html :refer-macros [html]]
            [bajoneando.core :as bcore]))

(def writer (transit/writer :json-verbose))
(def reader (transit/reader :json))

(def app-state (atom {:page 1
                      :mode :new
                      :article {:subject "hello world"
                                :publish-date nil
                                :md-article nil
                                :id-article nil}}))

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

(defn new-article [entry owner]
      (reify
        om/IRenderState
        (render-state
          [this state]
          (let [article (:article entry)
                mode (:mode entry)]
               (println entry)
               (html [:div
                      [:form.form-horizontal
                       [:div.form-group
                        [:label.col-sm-2.control-label {:for "subject"}
                         "Subject:"]
                        [:div.col-sm-10
                         (dom/input #js {:class "form-control"
                                         :type "text"
                                         :name "subject"
                                         :value (:subject article)})
                         ]]
                       [:div.form-group
                        [:label.col-sm-2.control-label {:for "publishDate"}
                         "Publish Date:"]
                        [:div.col-sm-10
                         (dom/input #js {:class "form-control"
                                         :type "text"
                                         :name "publishDate"
                                         :value (:publish-date article)})]]
                       [:div.form-group
                        [:label.col-sm-2.control-label {:for "article"}
                         "Article:"]
                        [:div.col-sm-10
                         (dom/textarea #js {:class "form-control"
                                            :type "text"
                                            :name "article"
                                            :rows "5"
                                            :value (:md-article article)
                                            :placeholder "Main content of article"})]]
                       [:div.form-group
                        [:div.col-sm-offset-2.col-sm-10
                         (if (= :new mode)
                           (html
                             [:button.btn.btn-primary
                              "Add new entry"])
                           (do
                             (println mode)
                             (html
                               [:button.btn.btn-primary
                                {:on-click (fn [e]
                                               (.preventDefault e)
                                               )}
                                "Update art" ]
                               [:button.btn.btn-default
                                {:on-click (fn [e]
                                               (.preventDefault e)
                                               )}
                                "Cancel"]
                               [:div
                                (om/get-state owner :article)])))]]]])))))

(defn article-view [entry owner]
      (reify
        om/IRenderState
        (render-state [this state]
                      (let [subject (get entry "subject")
                            entry-id (get entry "id")
                            raw-publish-date (get entry "publishDate")
                            raw-last-updated-date (get entry "lastUpdateDate")
                            target (str "art" entry-id)
                            printable-html (get entry "printableHtml")
                            md-article (get entry "article")]
                           (def edit-map {:mode :edit
                                          :article {:subject subject
                                                    :publish-date raw-publish-date
                                                    :md-article md-article
                                                    :id-article entry-id}})
                           (def editing-init-state
                             (atom edit-map))
                           (html [:article
                                  {:id    entry-id
                                   :class "blogcontent"}
                                  [:header
                                   [:h1
                                    [:a {:href (str "/blog/" entry-id "/" subject)}
                                     subject]]
                                   [:p.text-muted
                                    (str "Published on: ")
                                    (let [in-date (js/Date. raw-publish-date)
                                          publish-date (.format date-formatter in-date)
                                          in-publish-date (.format in-date-formatter in-date)]
                                         [:time.publishDate
                                          {:dateTime in-publish-date}
                                          publish-date])]
                                   (if (= :editing (om/get-state owner :mode))
                                     (om/build new-article edit-map))
                                   (if (om/get-state owner :editable)
                                     (html [:div
                                            {:id target}
                                            [:button.btn.btn-danger
                                             {:on-click (fn [e]
                                                            (.preventDefault e)
                                                            (om/set-state! owner :mode :editing))}
                                             "Edit"]]))]
                                  [:div.printableHtml
                                   {:dangerouslySetInnerHTML #js {:__html printable-html}}]
                                  (let [in-date (js/Date. raw-last-updated-date)
                                        last-updated (.format date-time-formatter in-date)
                                        in-last-updated (.format in-date-time-formatter in-date)]
                                       [:p.text-muted
                                        "Last update: "
                                        [:time
                                         {:dateTime in-last-updated}
                                         last-updated]])]))
                      )))

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
           :editable false
           })
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
               (bcore/js-xhr  {:method :get
                               :url "/blog/can-edit"
                               :on-complete (fn [res]
                                            (if (= res "Editable")
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
                      (if editable
                        (om/build new-article {:article {}
                                               :mode :new}))
                      ])))))

(om/root
  articles-view
  app-state
  {:target (. js/document (getElementById "articles"))})
