(ns bajoneando.core
  (:require [cognitect.transit :as transit]
            [goog.events :as events])
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

(defn js-xhr [{:keys [method url data on-complete]}]
      (do
        (println "tada:" data))
      (let [xhr (XhrIo.)]
           (if on-complete
             (events/listen xhr goog.net.EventType.COMPLETE
                            (fn [e]
                                (let [ raw (.getResponseText xhr)
                                      resp (transit/read reader (.getResponseText xhr))]
                                     (do
                                       (on-complete resp)))))
             (println url " invoked succesfully"))
           (. xhr
              (send url (meths method) (when data data)
                    #js {"Accept" "application/json"
                         "Content-Type" "application/json"}))))
