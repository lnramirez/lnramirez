(ns bajoneando.editor
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.events :as events]
            [sablono.core :as html :refer-macros [html]]
            [bajoneando.core :as bcore]))

(def app-state (atom {:entries [{:id "some id"
                                  :subject "my subject"
                                  :printableHtml "<p>Bajonear is a salvadorean-spanish verb</p>"
                                  :publishDate "2015-01-18"
                                  :lastUpdate nil}]}))

(defn articles-render [app owner]
      (reify
        om/IRenderState
        (render-state
          [this state]
          (let [entries (:entries app)]
               (doseq [entry entries]
                      (html [:article
                             {:id (get entry "id")
                              :class "blogcontent"}
                             [:header
                              [:h1
                               [:a {:href (str "/blog/" (get entry "id") "/" (get entry "subject"))}
                                (get entry "subject")]]
                              [:p.text-muted
                               (str "Published on")
                               [:time.publishDate
                                {:datetime (get entry "publishDate")
                                 :format "yyyy-mm-dd"}
                                (get entry "publishDate")]]]
                             [:div.printableHtml
                              (get entry "printableHtml")]
                             (when (get entry "lastUpdate")
                                   [:p.text-muted
                                    [:time.lastUpdateDate
                                     {:datetime (get entry "lastUpdate")
                                      :format "yyyy-mm-dd"}
                                     (get entry "lastUpdate")]])]))))))

(om/root
  articles-render
  app-state
  {:target (. js/document (getElementById "articles"))})
