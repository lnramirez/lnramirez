(ns bajoneando.editor
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:import [goog.i18n DateTimeFormat])
  (:require [cljs.core.async :refer [put! <! chan]]
            [cognitect.transit :as transit]
            [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.events :as events]
            [sablono.core :as html :refer-macros [html]]
            [bajoneando.core :as bcore]))

(def writer (transit/writer :json-verbose))
(def reader (transit/reader :json))

(def initial-state (transit/read reader (transit/write writer {
                                                               "id"  "some id"
                                                               "subject" "my subject"
                                                               "printableHtml" "<p>Bajonear is a salvadorean-spanish verb</p>"
                                                               "publishDate" "2015-01-18"
                                                               })))

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

(defn articles-render [app owner]
      (reify
        om/IInitState
        (init-state
          [_]
          {:entries []
           :entries-chan  (chan)
           :first-page true
           :last-page false
           :page 1})
        om/IWillMount
        (will-mount
          [_]
          (let [entries (om/get-state owner [:entries-chan])]
               (go (while true
                          (let [res (<! entries)]
                               (do
                                 (om/set-state! owner :entries (get res "content"))
                                 (om/set-state! owner :first-page (get res "firstPage"))
                                 (om/set-state! owner :last-page (get res "lastPage")))
                               )))
               (bcore/js-xhr {:method :get
                              :url (str "/blog/entries?page.page=" (:page app))
                              :on-complete (fn [res]
                                               (put! entries res))})))
        om/IRenderState
        (render-state
          [this state]
          (let [entries (:entries state)
                page (:page state)
                first-page (:first-page state)
                last-page (:last-page state)]
               (html [:div
                      (for [entry entries]
                           [:article
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
                                    publish-date])
                              ]]
                            [:div.printableHtml
                             {:dangerouslySetInnerHTML #js {:__html (get entry "printableHtml")}}
                             ]
                            (let [in-date (js/Date. (get entry "lastUpdateDate"))
                                  last-updated (.format date-time-formatter in-date)
                                  in-last-updated (.format in-date-time-formatter in-date)]
                                 [:p.text-muted
                                  "Last update: "
                                  [:time
                                   {:dateTime in-last-updated}
                                   last-updated]])
                            ])

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
  articles-render
  app-state
  {:target (. js/document (getElementById "articles"))})
