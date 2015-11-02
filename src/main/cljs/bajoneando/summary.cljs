(ns bajoneando.summary
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]
           goog.date.DateTime
           [goog.i18n DateTimeFormat]
           [goog.i18n DateTimeParse]
           )
  (:require [cljs.core.async :refer [put! <! chan]]
            [cognitect.transit :as transit]
            [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [goog.events :as events]
            [sablono.core :as html :refer-macros [html]]
            [bajoneando.core :as bcore]
            [maq :as m]
            ))

(enable-console-print!)

(defn draw-map [map visit]
  (let [shape (js-obj "lat" (get visit "latitude")
                      "lng" (get visit "longitude"))
        info-content (str "Date: " (get visit "date"))
        last-visit (new js/MQA.Poi shape)]
    (.setRolloverContent last-visit info-content)
    (.setInfoContentHTML last-visit info-content)
    (.removeAllShapes map)
    (.addShape map last-visit)
    (.bestFit map)
    (.setZoomLevel map 13)))

(defn update-previous [state]
  (bcore/js-xhr {:method :get
                 :url (str "/visit/previous/" (get (:visit state) "date"))
                 :on-complete (fn [upd-visit]
                                (put! (:visit-chan state) upd-visit))}))

(def app-state (atom))

(defn map-view [app owner]
  (reify
    om/IInitState
    (init-state [_]
      {:visit {}
       :visit-chan (chan)})
    om/IWillMount
    (will-mount
        [_]
      (let [visit (om/get-state owner [:visit-chan])
            options (js-obj "elt" (. js/document (getElementById "map"))
                            "zoom" 13
                            "mtype" "osm"
                            "bestFitMargin" 0
                            "zoomOnDoubleClick" true)
            TileMap (.-TileMap js/MQA)
            SmallZoom (.-SmallZoom js/MQA)
            MapCornerPlacement (.-MapCornerPlacement js/MQA)
            MapCorner (.-MapCorner js/MQA)
            Size (.-Size js/MQA)
            map (TileMap. options)]
        (go (while true
              (let [upd (<! visit)]
                (do
                  (om/set-state! owner :visit (get upd "lastVisit"))
                  ;(pr intln (get upd "lastVisit"))
                  (draw-map map (get upd "lastVisit"))))))
        (bcore/js-xhr {:method :get
                       :url "/visit/update"
                       :on-complete (fn [upd-visit]
                                      (put! visit upd-visit))})))
    om/IRenderState
    (render-state [this state]
      (let [visit (:visit state)]
           (html [:section
                  [:div.row
                   [:div.col-md-12
                    [:h2 "Last Visit"]]]
                  [:div.row
                   [:div.col-md-2 ]
                   [:div.col-md-8
                    [:ul.pager
                     [:li.previous
                      [:button.btn.btn-primary
                       {:on-click (fn [e]
                                    (.preventDefault e)
                                    (update-previous state))}
                       "Previous"]]
                     [:li.next
                      [:button.btn.btn-primary
                       {:on-click (fn [e]
                                    (.preventDefault e)
                                    (update-previous state))
                        }
                       "Next"]]]
                    [:a.updateanchor.glyphicon.glyphicon-refresh
                     {:href "#"
                      :on-click #()}]
                    [:span#updating.updating]
                    ]]]
                 )))))

(om/root map-view app-state {:target (. js/document (getElementById "summary"))})
