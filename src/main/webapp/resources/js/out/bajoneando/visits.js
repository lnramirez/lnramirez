// Compiled by ClojureScript 0.0-2816 {}
goog.provide('bajoneando.visits');
goog.require('cljs.core');
goog.require('bajoneando.core');
goog.require('cognitect.transit');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
bajoneando.visits.writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json-verbose","json-verbose",-542533531));
bajoneando.visits.add_visit = (function add_visit(position){
var latitude = position.coords.latitude;
var longitude = position.coords.longitude;
var locationPermit = true;
return bajoneando.core.js_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/visit/add",new cljs.core.Keyword(null,"data","data",-232669377),cognitect.transit.write.call(null,bajoneando.visits.writer,new cljs.core.PersistentArrayMap(null, 3, ["latitude",latitude,"longitude",longitude,"locationPermit",locationPermit], null))], null));
});
bajoneando.visits.no_location = (function no_location(){
return bajoneando.core.js_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),"/visit/add",new cljs.core.Keyword(null,"data","data",-232669377),cognitect.transit.write.call(null,bajoneando.visits.writer,new cljs.core.PersistentArrayMap(null, 1, ["locationPermit",false], null))], null));
});
var temp__4124__auto___15909 = navigator.geolocation;
if(cljs.core.truth_(temp__4124__auto___15909)){
var locator_15910 = temp__4124__auto___15909;
locator_15910.getCurrentPosition(bajoneando.visits.add_visit,bajoneando.visits.no_location);
} else {
}

//# sourceMappingURL=visits.js.map