(ns bajoneando.flairs
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.events :as events]
            [sablono.core :as html :refer-macros [html]]
            [bajoneando.core :as bcore])
  )

(enable-console-print!)

(def app-state (atom {:github {:html_url "http://github.com/lnramirez2"
                               :avatar_url ""
                               :name ""
                               :public_repos ""
                               :followers ""} :twitter {}}))

(def ^:private flair-urls
  {:github "https://api.github.com/users/lnramirez"})

(defn truncate-str [s]
  (cond
    ((count s) > 28) (str (take 28 s) "...")
    :else s))

(defn flair-rend [app owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (bcore/js-xhr {:method :get
               :url (:github flair-urls)
               :on-complete (fn [res]
                              (do
                                (om/update! app [:github] res)))}))
    om/IRenderState
    (render-state
      [this state]
      (let [github (:github app)]
           (html [:div#githubflair
                  [:a
                   {:class "sfLink" :href (get github "html_url")}
                   [:div.sfTable.sfGithub
                    [:div.sfRow
                     [:div.sfCell1
                      [:img.sfProfilePic {:src (get github "avatar_url")
                                          :width "48px"
                                          :height "48px"}]]
                     [:div.sfCell2
                      [:div.sfHandle
                       (get github "name")]
                      [:div.sfFans
                       [:span.public_repos {:alt "Public Repositories"
                                            :title "Public Repositories"}
                        (get github "public_repos")]
                       [:span.followers {:alt "Followers"
                                        :title "Followers"}
                        (get github "followers")]]]
                     ]]]])))))

(om/root
  flair-rend
  app-state
  {:target (. js/document (getElementById "githubFlair"))})


