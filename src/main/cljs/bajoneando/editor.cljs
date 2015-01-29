(ns bajoneando.editor
  (:require-macros [cljs.core.async.macros :refer [go]])
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

(defn earlier-pages [app owner]
      (let [entries (om/get-state owner [:entries-chan])
            page (inc (:page @app))]
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
           :page 1})
        om/IWillMount
        (will-mount
          [_]
          (let [entries (om/get-state owner [:entries-chan])]
               (go (while true
                          (let [res (<! entries)]
                               (om/set-state! owner :entries (get res "content"))
                               )))
               (bcore/js-xhr {:method :get
                              :url (str "/blog/entries?page.page=" (:page app))
                              :on-complete (fn [res]
                                               (put! entries res))})))
        om/IRenderState
        (render-state
          [this state]
          (let [entries (:entries state)
                page (:page state)]
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
                              [:time.publishDate
                               {:dateTime (get entry "publishDate")
                                :format "yyyy-mm-dd"}
                               (get entry "publishDate")]]]
                            [:div.printableHtml
                             {:dangerouslySetInnerHTML #js {:__html (get entry "printableHtml")}}
                             ]])
                      [:ul.pager
                       [:li.previous
                        [:a.previous
                         {:on-click #(earlier-pages app owner)}
                         "Previous Entries"]
                        ]
                       [:li.next
                        [:a.later
                         ;{:on-click }
                         "Later Entries"]]]
                      ])
               ))))

(om/root
  articles-render
  app-state
  {:target (. js/document (getElementById "articles"))})
