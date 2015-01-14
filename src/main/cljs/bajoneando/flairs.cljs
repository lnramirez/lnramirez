(ns bajoneando.flairs
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.events :as events]
            [cognitect.transit :as transit]
            [sablono.core :as html :refer-macros [html]])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))

(enable-console-print!)

(def reader (transit/reader :json))

(def ^:private meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(def app-state (atom {:github {:html_url "http://github.com/lnramirez2"
                               :avatar_url ""
                               :name ""
                               :public_repos ""
                               :followers ""} :twitter {}}))

(def ^:private flair-urls
  {:github "https://api.github.com/users/lnramirez"})

(defn js-xhr [{:keys [method url data on-complete]}]
  (let [xhr (XhrIo.)]
    (events/listen xhr goog.net.EventType.COMPLETE
      (fn [e]
        (let [ raw (.getResponseText xhr)
               resp (transit/read reader (.getResponseText xhr))]
          (do
            (println "raw:" raw "transit" resp)
            (on-complete resp)))))
    (. xhr
      (send url (meths method) (when data (pr-str data))
      #js {"Accept" "application/json"}))))

(defn truncate-str [s]
  (cond
    ((count s) > 28) (str (take 28 s) "...")
    :else s))

;(defn update-github [res]
;  (om/update! app [:github] (.-data res)))

(defn flair-rend [app owner]
  (reify
    om/IDidMount
    (did-mount [_]
      (js-xhr {:method :get
               :url (:github flair-urls)
               ;:on-complete (fn [res]
               ;               (om/update! app [:github] (:data res)))}))
               :on-complete (fn [res]
                              (do

                                ;(println "really : " (get res "followers"))
                                (om/update! app [:github] res)))}))
    om/IRenderState
    (render-state [this state]
      (html [:div (get (:github app) "html_url")]))))
      ;(let [github (:github app)]
        ;(html [:div#githubflair
        ;       [:a {:class "sfLink"
        ;            :href (cond
        ;                   (github) (.-html_url github)
        ;                    :else "")}
        ;        [:div {:class "sfTable sfGithub"}
        ;         [:div {:class "sfRow"} "blah3"]]]])))))

(om/root
  flair-rend
  app-state
  {:target (. js/document (getElementById "flairs"))})


