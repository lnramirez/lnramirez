(ns bajoneando.visits
  (:require [goog.events :as events]
            [cognitect.transit :as transit]
            [bajoneando.core :as bcore]))

(enable-console-print!)

(def writer (transit/writer :json-verbose))

(defn add-visit [position]
      (let [latitude  (.-latitude js/position.coords)
            longitude (.-longitude js/position.coords)
            locationPermit true]
           (bcore/js-xhr {:method :post
                          :url    "/visit/add"
                          :data   (transit/write writer {
                                            "latitude"    latitude
                                            "longitude"   longitude
                                            "locationPermit" locationPermit
                                            })
                          })))



(defn no-location []
      (bcore/js-xhr {:method :post
                     :url "/visit/add"
                     :data (transit/write writer {"locationPermit" false})}))

(do
  (if-let [locator (.-geolocation js/navigator)]
    (.getCurrentPosition locator add-visit no-location)))
