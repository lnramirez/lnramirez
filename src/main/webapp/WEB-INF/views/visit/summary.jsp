<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Visits Statistics</title>
        <script src="http://open.mapquestapi.com/sdk/js/v7.0.s/mqa.toolkit.js"></script>
        <script>
            require(["dojo/domReady!"], function(){
                /*An example of using the MQA.EventUtil to hook into the window load event and execute defined function 
                passed in as the last parameter. You could alternatively create a plain function here and have it 
                executed whenever you like (e.g. <body onload="yourfunction">).*/ 

                MQA.EventUtil.observe(window, 'load', function() {

                    /*Create an object for options*/ 
                    var options={
                        elt:document.getElementById('map'),       /*ID of element on the page where you want the map added*/ 
                        zoom:13,                                  /*initial zoom level of the map*/ 
                        latLng:{lat:${lastVisit.latitude}, lng:${lastVisit.longitude}},   /*center of map in latitude/longitude */ 
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
                });
            }); 
        </script>        
    </head>
    <body>
        <h1>Visits Statistics</h1>
        <h2>Summary</h2>
        <section>
            Hits: ${hits}
        </section>
        <h2>Last Visit</h2>
        <section>
            <div id="map" style="width:800px; height:300px;"></div>
        </section>
    </body>
</html>
