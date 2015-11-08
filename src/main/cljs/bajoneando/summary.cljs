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

(def date-time-formatter (DateTimeFormat. "dd-MMM-yyyy HH:mm"))

(defn draw-map [map visit]
  (let [shape (js-obj "lat" (get visit "latitude")
                      "lng" (get visit "longitude"))
        info-content (str "Date: " (.format date-time-formatter (js/Date. (get visit "date"))) " (UTC)")
        last-visit (new js/MQA.Poi shape)
        cust-icon (new js/MQA.Icon
                       "https://www.mapquestapi.com/staticmap/geticon?uri=poi-1.png"
                       20
                       29)]
    (.setRolloverContent last-visit info-content)
    (.setInfoContentHTML last-visit info-content)
    (.setIcon last-visit cust-icon)
    (.removeAllShapes map)
    (.addShape map last-visit)
    (.bestFit map)
    (.setZoomLevel map 13)))

(defn update-last [state]
  (bcore/js-xhr {:method :get
                 :url "/visit/update"
                 :on-complete (fn [upd-visit]
                                (put! (:visit-chan state) upd-visit))}))

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
       :hits 0
       :visit-chan (chan)})
    om/IWillMount
    (will-mount
              [_]
              (let [visit-chan (om/get-state owner [:visit-chan])
                    options (js-obj "elt" (. js/document (getElementById "map"))
                                    "zoom" 13
                                    "mtype" "osm"
                                    "bestFitMargin" 0
                                    "zoomOnDoubleClick" true)
                    Size (.-Size js/MQA)
                    map (new js/MQA.TileMap options)]
                (.withModule js/MQA "smallzoom" "mousewheel"
                             (fn [_]
                               (.addControl map
                                            (new js/MQA.SmallZoom)
                                            (new js/MQA.MapCornerPlacement
                                                 (-> js/MQA (.-MapCorner) (.-TOP_LEFT))
                                                 (new js/MQA.Size 5 5))
                                            )
                               (.enableMouseWheelZoom map))
                             )
                (go (while true
                      (let [upd-visit (<! visit-chan)]
                        (do
                          (om/set-state! owner :visit (get upd-visit "lastVisit"))
                          (om/set-state! owner :hits (get upd-visit "hits"))
                          (draw-map map (get upd-visit "lastVisit"))))))
                (update-last (om/get-state owner))))
    om/IRenderState
    (render-state [this state]
      (let [hits (:hits state)]
        (html
         [:div
          [:section
           [:div.row
            [:div.col-md-12
             [:h2 "Summary"]
             (str "Hits: " hits)]]]
          [:section
                  [:div.row
                   [:div.col-md-12
                    [:h2 "Last Visit"]]]
                  [:div.row
                   [:div.col-md-2 ]
                   [:div.col-md-8
                    [:nav
                     [:ul.pager
                      [:li.previous
                       [:a
                        {:href "#"
                         :on-click (fn [e]
                                     (.preventDefault e)
                                     (update-previous state))}
                        "Previous"]]
                      [:li.next
                       [:a.disabled
                        {:href "#"
                         :on-click (fn [e]
                                     (.preventDefault e)
                                     (update-previous state))
                         }
                        "Next"]]]]
                    [:a.updateanchor.glyphicon.glyphicon-refresh
                     {:href "#"
                      :on-click (fn [e]
                                   (.preventDefault e)
                                   (update-last state))}]
                    [:span#updating.updating]
                    ]]]]
                 )))))

(om/root map-view app-state {:target (. js/document (getElementById "summary"))})
