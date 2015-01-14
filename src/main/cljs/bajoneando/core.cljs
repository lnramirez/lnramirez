(ns bajoneando.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true])
  (:import  [goog.net XhrIo]))

(enable-console-print!)

(def app-state (atom {:text "Hello orochi!"}))

(om/root
  (fn [app owner]
    (reify om/IRender
      (render [_]
        (dom/h1 nil (:text app)))))
  app-state
  {:target (. js/document (getElementById "app"))})
