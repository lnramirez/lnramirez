(defproject bajoneando "0.2.0-SNAPSHOT"
  :description "Bajoneando Website gimmicks"
  :url "http://www.bajoneando.com"

  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2816"]
                 [org.clojure/core.async "0.1.346.0-17112a-alpha"]
                 ;; Om components
                 [org.omcljs/om "0.8.8"]
                 [sablono "0.2.20"]
                 [prismatic/om-tools "0.3.3"]
                 ;; Comm
                 [com.cognitect/transit-cljs "0.8.199"]]

  :plugins [[lein-cljsbuild "1.0.4"]]

  :source-paths ["src/main/cljs"]

  :cljsbuild {
               :builds [{:id "dev"
                         :source-paths ["src/main/cljs"]
                         :compiler {
                                    :output-to  "src/main/webapp/resources/js/bajoneando.js"
                                    :output-dir "src/main/webapp/resources/js/out"
                                    :optimizations :none
                                    :source-map true
                                    :foreign-libs [{:file "http://open.mapquestapi.com/sdk/js/v7.0.s/mqa.toolkit.js?key=Fmjtd%7Cluur216znd%2C8x%3Do5-90tn9f"
                                                    :provides ["maq"]}]}}]})
