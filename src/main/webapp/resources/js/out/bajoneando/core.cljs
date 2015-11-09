(ns bajoneando.core
  (:require [cognitect.transit :as transit]
            [goog.events :as events])
  (:import [goog.net XhrIo]
     goog.net.EventType
     [goog.events EventType]))

(def reader (transit/reader :json))

(def ^:private meths
  {:get "GET"
   :put "PUT"
   :post "POST"
   :delete "DELETE"})

(defn js-xhr [{:keys [method url data on-complete]}]
      (let [xhr (XhrIo.)]
        (when on-complete
             (events/listen xhr goog.net.EventType.COMPLETE
                            (fn [e]
                              (when (.isSuccess xhr)
                                (let [ raw (.getResponseText xhr)
                                          resp (transit/read reader (.getResponseText xhr))]
                                      (on-complete resp)))
                              )))
        (. xhr (send url (meths method) (when data data)
                    #js {"Accept" "application/json"
                         "Content-Type" "application/json"}))))
