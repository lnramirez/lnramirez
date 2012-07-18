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
            function updateLatestVisit(map) {
                var fadeArgs = {node: "updating",duration:1000};                
                var xhrArgs = {
                    url: "${pageContext.request.contextPath}/visit/update",
                    handleAs: "json",
                    load: function(data) {return data;},
                    error: function(error) {return error;}
                }
                var deferred = dojo.xhrGet(xhrArgs);
                deferred.then (function(summary) {
                    var lastVisit = summary.lastVisit;
                    require(["dojo/_base/fx", "dojo/fx", "dojo/dom","dojo/query", "dojo/dom-style"], function(baseFx, fx, dom, query, style) {
                        style.set("updating","opacity","0");
                        query(".updating").attr("innerHTML","Updating...");
                        var anim = fx.chain([                            
                            baseFx.fadeIn(fadeArgs),
                            baseFx.fadeOut(fadeArgs)
                        ]);
                        anim.play();
                        query(".hits").attr("innerHTML",summary.hits);
                    });
                    var lastVisitPOI = new MQA.Poi({lat:lastVisit.latitude, lng:lastVisit.longitude});
                    var infoContent = 'Date (UTC): ' + toUTCAndFormatted(lastVisit.date,'dd-MMM-yyyy HH:mm')
                    lastVisitPOI.setRolloverContent(infoContent);
                    lastVisitPOI.setInfoContentHTML(infoContent);
                    map.removeAllShapes();
                    map.addShape(lastVisitPOI);
                    map.bestFit();
                    map.setZoomLevel(13);
                });
            }
            
            require(["dojo/query","dojo/domReady!"], function(query){
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
                    dojo.connect(node,"onclick",function(event) {
                        dojo.stopEvent(event);
                        updateLatestVisit(map);
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
                <a href="#" class="updateanchor">Update Last Visit</a> <span id="updating" class="updating"></span>
            </p>
            <div id="map" style="width:800px; height:300px;"></div>
        </section>
    </body>
</html>
