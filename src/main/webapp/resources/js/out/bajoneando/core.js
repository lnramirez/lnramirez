// Compiled by ClojureScript 0.0-2816 {}
goog.provide('bajoneando.core');
goog.require('cljs.core');
goog.require('goog.events.EventType');
goog.require('goog.net.XhrIo');
goog.require('goog.events');
goog.require('cognitect.transit');
bajoneando.core.reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
bajoneando.core.meths = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"get","get",1683182755),"GET",new cljs.core.Keyword(null,"put","put",1299772570),"PUT",new cljs.core.Keyword(null,"post","post",269697687),"POST",new cljs.core.Keyword(null,"delete","delete",-1768633620),"DELETE"], null);
cljs.core.enable_console_print_BANG_.call(null);
bajoneando.core.js_xhr = (function js_xhr(p__17370){
var map__17372 = p__17370;
var map__17372__$1 = ((cljs.core.seq_QMARK_.call(null,map__17372))?cljs.core.apply.call(null,cljs.core.hash_map,map__17372):map__17372);
var on_complete = cljs.core.get.call(null,map__17372__$1,new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971));
var data = cljs.core.get.call(null,map__17372__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var url = cljs.core.get.call(null,map__17372__$1,new cljs.core.Keyword(null,"url","url",276297046));
var method = cljs.core.get.call(null,map__17372__$1,new cljs.core.Keyword(null,"method","method",55703592));
cljs.core.println.call(null,url);

var xhr = (new goog.net.XhrIo());
if(cljs.core.truth_(on_complete)){
goog.events.listen(xhr,goog.net.EventType.COMPLETE,((function (xhr,map__17372,map__17372__$1,on_complete,data,url,method){
return (function (e){
var raw = xhr.getResponseText();
var resp = cognitect.transit.read.call(null,bajoneando.core.reader,xhr.getResponseText());
return on_complete.call(null,resp);
});})(xhr,map__17372,map__17372__$1,on_complete,data,url,method))
);
} else {
cljs.core.println.call(null,url," invoked succesfully");
}

return xhr.send(url,bajoneando.core.meths.call(null,method),(cljs.core.truth_(data)?data:null),{"Content-Type": "application/json", "Accept": "application/json"});
});

//# sourceMappingURL=core.js.map