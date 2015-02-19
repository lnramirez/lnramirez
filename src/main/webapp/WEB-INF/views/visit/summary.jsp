<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Visits Statistics</title>
        <script src="http://open.mapquestapi.com/sdk/js/v7.0.s/mqa.toolkit.js?key=Fmjtd%7Cluur216znd%2C8x%3Do5-90tn9f"></script>
        <script src="${yadateutil}"></script>
        <script>
            var cur;
            function drawMap(map,lastVisit,hits) {
                var fadeArgs = {node: "updating",duration:1000};
                require(["dojo/dom-prop","dojo/date/locale","dojo/_base/fx", "dojo/fx","dojo/dom","dojo/query", "dojo/dom-style"],
                        function(domProp,locale,baseFx, fx, dom, query, style) {
                    style.set("updating","opacity","0");
                    domProp.set("updating","innerHTML","Updating...");
                    domProp.set("hits","innerHTML",hits);
                    var anim = fx.chain([
                        baseFx.fadeIn(fadeArgs),
                        baseFx.fadeOut(fadeArgs)
                    ]);
                    anim.play();
                    var lastVisitPOI = new MQA.Poi({lat:lastVisit.latitude, lng:lastVisit.longitude});
                    var infoContent = 'Date: ' + lastVisit.date;
                    lastVisitPOI.setRolloverContent(infoContent);
                    lastVisitPOI.setInfoContentHTML(infoContent);
                    map.removeAllShapes();
                    map.addShape(lastVisitPOI);
                    map.bestFit();
                    map.setZoomLevel(13);
                });
            }
            function updateLatestVisit(map) {
                require(["dojo/request/xhr"],function(xhr) {
                    var deferred = xhr.get("${pageContext.request.contextPath}/visit/update",{handleAs: "json"});
                    deferred.then (function(_summary) {
                        var lastVisit = _summary.lastVisit;
                        if (lastVisit != null) {
                            cur = lastVisit;
                            drawMap(map,lastVisit,_summary.hits);
                        }
                    });
                });
            }
            function previousVisit(map) {
                 require(["dojo/request/xhr"],function(xhr) {
                    var deferred = xhr.get("${pageContext.request.contextPath}/visit/previous/" + cur.date,{handleAs: "json"});
                    deferred.then (function(summary) {
                        var lastVisit = summary.lastVisit;
                        if (lastVisit != null) {
                            cur = lastVisit;
                            drawMap(map,lastVisit,summary.hits);
                        }
                     });
                 });
            }
            require(["dojo/query","dojo/domReady!","dojo/on","dojo/_base/event"], function(query,ready,on,event){
                /*Create an object for options*/ 
                var options={
                    elt:document.getElementById('map'),       /*ID of element on the page where you want the map added*/ 
                    zoom:13,                                  /*initial zoom level of the map*/ 
                    mtype:'osm',                              /*map type (osm)*/ 
                    bestFitMargin:0,                          /*margin offset from the map viewport when applying a bestfit on shapes*/ 
                    zoomOnDoubleClick:true                    /*zoom in when double-clicking on map*/ 
                };

                /*Construct an instance of MQA.TileMap with the options object*/ 
                var map = new MQA.TileMap(options);
                MQA.withModule('smallzoom', function() {

                    map.addControl(
                    new MQA.SmallZoom(),
                    new MQA.MapCornerPlacement(MQA.MapCorner.TOP_LEFT, new MQA.Size(5,5))
                    );

                });          
                MQA.withModule('mousewheel', function() {
                    map.enableMouseWheelZoom();
                });
                updateLatestVisit(map);
                query(".updateanchor").forEach(function(node) {
                    on(node,"click",function(_event) {
                        event.stop(_event);
                        updateLatestVisit(map);
                    });
                });
                query("a.previousanchor").forEach(function(node) {
                    on(node,"click",function(_event) {
                        event.stop(_event);
                        previousVisit(map);
                    });
                });
            }); 
        </script>
    </head>
    <body>
    <div class="row">
        <div class="col-md-12">
            <h1>Visits Statistics</h1>
        </div>
    </div>
    <section>
        <div class="row">
            <div class="col-md-12">
                <h2>Summary</h2>
                Hits: <span id="hits" class="hits"></span>
            </div>
        </div>
    </section>

    <section>
        <div class="row">
            <div class="col-md-12">
                <h2>Last Visit</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <ul class="pager">
                    <li class="previous"><a href="#" class="previousanchor">Previous</a></li>
                    <li class="next disabled">
                        <a href="#">Next</a>
                    </li>
                </ul>
                <a class="updateanchor glyphicon glyphicon-refresh" href="#"></a>
                <span id="updating" class="updating"></span>

                <div id="map" style="width:750px; height:300px;"></div>
            </div>
        </div>

    </section>
    </body>
</html>
