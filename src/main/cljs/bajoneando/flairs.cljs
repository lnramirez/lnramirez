(ns bajoneando.flairs
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]
            [goog.events :as events]
            [cognitect.transit :as t]
            [sablono.core :as html :refer-macros [html]])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]))

(enable-console-print!)

(def r (t/reader :json))

(def ^:private meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(def app-state (atom {:github {:html_url ""
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
        (on-complete (t/read r (.getResponseText xhr)))))
    (. xhr
      (send url (meths method) (when data (pr-str data))
      #js {"Content-Type" "application/json"}))))

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
               :on-complete (fn [res] (println "server response: " res))}))
    om/IRenderState
    (render-state [this state]
      (let [github (:github app)]
        (html [:div#githubflair
               [:a {:class "sfLink" :href (.-html_url github)}
                [:div {:class "sfTable sfGithub"}
                 [:div {:class "sfRow"} "blah3"]]]])))))

(om/root
  flair-rend
  app-state
  {:target (. js/document (getElementById "flairs"))})


