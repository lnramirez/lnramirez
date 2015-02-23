(ns bajoneando.sandbox
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:import [goog.net XhrIo]
           goog.net.EventType
           [goog.events EventType]
           [goog.i18n DateTimeFormat])
  (:require [cljs.core.async :refer [put! <! chan]]
            [cognitect.transit :as transit]
            [om.core :as om :include-macros true]
            [om-tools.dom :as dom :include-macros true]
            [om-tools.core :refer-macros [defcomponent]]
            [goog.events :as events]
            [sablono.core :as html :refer-macros [html]]
            [bajoneando.core :as bcore]))

(defcomponent user-input [app owner]
              (render
                [_]
                (let [ref "user-input"
                      k :user-input]
                     (dom/input {:ref ref
                                 :on-change (fn [_]
                                                (let [this (om/get-node owner ref)]
                                                     (.handleChange this)))}))))

(defcomponent auto-complete-view [app _]
              (render
                [_]
                (dom/div
                  (om/build user-input app)
                  (dom/br {}))))

(defonce app-state
         (atom {:user-input "safasdfs"
                :things ["Apple"
                         "ant"
                         "bird"
                         "CAR"
                         "crayon"
                         "cooler"
                         "DVD"
                         "Dirt"
                         "DOG"]}))

(om/root
  auto-complete-view
  app-state
  {:target (. js/document (getElementById "app"))})