(ns bajoneando.editor
  (:require [cognitect.transit :as transit]
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

(def app-state (atom {:entries []
                      :page 1}))

(defn articles-render [app owner]
      (reify
        om/IDidMount
        (did-mount
          [_]
          (bcore/js-xhr {:method :get
                         :url (str "/blog/entries?page.page=" (:page app))
                         :on-complete (fn [res]
                                          (do
                                            (om/update! app [:entries] (get res "content"))))}))
        om/IRenderState
        (render-state
          [this state]
          (let [entries (:entries app)
                page (:page app)]
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
                         ;{:on-click }
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
