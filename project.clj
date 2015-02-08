(defproject bajoneando "0.1.0-SNAPSHOT"
  :description "Bajoneando Website gimmicks"
  :url "http://www.bajoneando.com"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2322"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 ;; Om components
                 [om "0.8.0-alpha1"]
                 [sablono "0.2.20"]
                 ;; Comm
                 [com.cognitect/transit-cljs "0.8.199"]]

  :plugins [[lein-cljsbuild "1.0.4-SNAPSHOT"]]

  :source-paths ["src/main/cljs"]

  :cljsbuild {
               :builds [{:id "dev"
                         :source-paths ["src/main/cljs"]
                         :compiler {
                                     :output-to  "src/main/webapp/resources/js/bajoneando.js"
                                     :output-dir "src/main/webapp/resources/js/out"
                                     :optimizations :none
                                     :source-map true}}]})