<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@taglib prefix="spring" uri="http://www.springframework.org/tags" %>
<spring:url value="/resources/js/yadateutil.js" var="yadateutil" />
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Visits Statistics</title>
        <script src="http://open.mapquestapi.com/sdk/js/v7.0.s/mqa.toolkit.js"></script>
        <script src="${yadateutil}"></script>
        <script>
            var cur;
            function drawMap(map,lastVisit,hits) {
                var fadeArgs = {node: "updating",duration:1000};
                require(["dojo/_base/fx", "dojo/dom","dojo/query", "dojo/dom-style","dojo/dom-prop"], function(baseFx, dom, query, style,domProp) {
                    style.set("updating","opacity","0");
                    prop.set(".updating","innerHTML","Updating...");
                    /*var anim = fx.chain([
                        baseFx.fadeIn(fadeArgs),
                        baseFx.fadeOut(fadeArgs)
                    ]);
                    anim.play();  */
                    prop.set(".hits","innerHTML",hits);
                });
                var lastVisitPOI = new MQA.Poi({lat:lastVisit.latitude, lng:lastVisit.longitude});
                var infoContent = 'Date (UTC): ' + toUTCAndFormatted(lastVisit.date,'dd-MMM-yyyy HH:mm')
                lastVisitPOI.setRolloverContent(infoContent);
                lastVisitPOI.setInfoContentHTML(infoContent);
                map.removeAllShapes();
                map.addShape(lastVisitPOI);
                map.bestFit();
                map.setZoomLevel(13);
            }
            function updateLatestVisit(map) {
                var xhrArgs = {
                    handleAs: "json",
                    load: function(data) {return data;},
                    error: function(error) {return error;}
                }
                require(["dojo/request/xhr"],function(xhr) {
                    var deferred = xhr.get("${pageContext.request.contextPath}/visit/update",xhrArgs);
                    deferred.then (function(_summary) {
                        var lastVisit = _summary.lastVisit;
                        cur = lastVisit;
                        drawMap(map,lastVisit,_summary.hits);
                    });
                });
            }
            function previousVisit(map) {
                 var xhrArgs = {
                     headers: { "Content-Type": "application/json"},
                     handleAs: "json",
                     load: function(data) {return data;},
                     error: function(error) {return error;}
                 }
                 require(["dojo/request/xhr"],function(xhr) {
                    var deferred = xhr.get("${pageContext.request.contextPath}/visit/previous/" + cur.date,xhrArgs);
                    deferred.then (function(summary) {
                        var lastVisit = summary.lastVisit;
                        cur = lastVisit;
                        drawMap(map,lastVisit,summary.hits);
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
                query("a.updateanchor").forEach(function(node) {
                    on(node,"click",function(_event) {
                        event.stop(_event);
                        updateLatestVisit(map);
                    });
                });
                query("a.previousanchor").forEach(function(node) {
                    on(node,"onclick",function(_event) {
                        event.stop(_event);
                        previousVisit(map);
                    });
                });
            }); 
        </script>
    </head>
    <body>
        <h1>Visits Statistics</h1>
        
        <section>
            <h2>Summary</h2>
            Hits: <span id="hits" class="hits"></span>
        </section>
        
        <section>
            <h2>Last Visit</h2>
            <p>
                <a href="#" class="updateanchor">Update Last Visit</a>
                <span id="updating" class="updating"></span>
                <a href="#" class="previousanchor">Previous Visit</a>
                <span id="previous" class="previous"></span>
                <span id="fetching" class="fetching"></span>
            </p>
            <div id="map" style="width:800px; height:300px;"></div>
        </section>
    </body>
</html>
