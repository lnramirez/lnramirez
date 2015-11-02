// Compiled by ClojureScript 0.0-2816 {}
goog.provide('bajoneando.summary');
goog.require('cljs.core');
goog.require('goog.date.DateTime');
goog.require('om_tools.dom');
goog.require('sablono.core');
goog.require('goog.events.EventType');
goog.require('om_tools.core');
goog.require('goog.i18n.DateTimeParse');
goog.require('bajoneando.core');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('goog.events');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.net.XhrIo');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
bajoneando.summary.draw_map = (function draw_map(map,visit){
var shape = (function (){var obj17504 = {"lat":cljs.core.get.call(null,visit,"latitude"),"lng":cljs.core.get.call(null,visit,"longitude")};
return obj17504;
})();
var info_content = [cljs.core.str("Date: "),cljs.core.str(cljs.core.get.call(null,visit,"date"))].join('');
var last_visit = (new MQA.Poi(shape));
last_visit.setRolloverContent(info_content);

last_visit.setInfoContentHTML(info_content);

map.removeAllShapes();

map.addShape(last_visit);

map.bestFit();

return map.setZoomLevel((13));
});
bajoneando.summary.update_previous = (function update_previous(state){
return bajoneando.core.js_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("/visit/previous/"),cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"visit","visit",-1830616046).cljs$core$IFn$_invoke$arity$1(state),"date"))].join(''),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (upd_visit){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"visit-chan","visit-chan",-1645971306).cljs$core$IFn$_invoke$arity$1(state),upd_visit);
})], null));
});
bajoneando.summary.app_state = cljs.core.atom.call(null);
bajoneando.summary.map_view = (function map_view(app,owner){
if(typeof bajoneando.summary.t17547 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.summary.t17547 = (function (owner,app,map_view,meta17548){
this.owner = owner;
this.app = app;
this.map_view = map_view;
this.meta17548 = meta17548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.summary.t17547.prototype.om$core$IRenderState$ = true;

bajoneando.summary.t17547.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var visit = new cljs.core.Keyword(null,"visit","visit",-1830616046).cljs$core$IFn$_invoke$arity$1(state);
return React.DOM.section(null,React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},React.DOM.h2(null,"Last Visit"))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-2"}),React.DOM.div({"className": "col-md-8"},React.DOM.ul({"className": "pager"},React.DOM.li({"className": "previous"},React.DOM.button({"className": "btn btn-primary", "onClick": ((function (visit,this$__$1){
return (function (e){
e.preventDefault();

return bajoneando.summary.update_previous.call(null,state);
});})(visit,this$__$1))
},"Previous")),React.DOM.li({"className": "next"},React.DOM.button({"className": "btn btn-primary", "onClick": ((function (visit,this$__$1){
return (function (e){
e.preventDefault();

return bajoneando.summary.update_previous.call(null,state);
});})(visit,this$__$1))
},"Next"))),React.DOM.a({"className": "updateanchor glyphicon glyphicon-refresh", "href": "#", "onClick": ((function (visit,this$__$1){
return (function (){
return cljs.core.List.EMPTY;
});})(visit,this$__$1))
}),React.DOM.span({"className": "updating", "id": "updating"}))));
});

bajoneando.summary.t17547.prototype.om$core$IWillMount$ = true;

bajoneando.summary.t17547.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var visit = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visit-chan","visit-chan",-1645971306)], null));
var options = (function (){var obj17557 = {"elt":document.getElementById("map"),"zoom":(13),"mtype":"osm","bestFitMargin":(0),"zoomOnDoubleClick":true};
return obj17557;
})();
var TileMap = MQA.TileMap;
var SmallZoom = MQA.SmallZoom;
var MapCornerPlacement = MQA.MapCornerPlacement;
var MapCorner = MQA.MapCorner;
var Size = MQA.Size;
var map = (new TileMap(options));
var c__10693__auto___17589 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10693__auto___17589,visit,options,TileMap,SmallZoom,MapCornerPlacement,MapCorner,Size,map,___$1){
return (function (){
var f__10694__auto__ = (function (){var switch__10637__auto__ = ((function (c__10693__auto___17589,visit,options,TileMap,SmallZoom,MapCornerPlacement,MapCorner,Size,map,___$1){
return (function (state_17573){
var state_val_17574 = (state_17573[(1)]);
if((state_val_17574 === (7))){
var inst_17561 = (state_17573[(2)]);
var inst_17562 = cljs.core.get.call(null,inst_17561,"lastVisit");
var inst_17563 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"visit","visit",-1830616046),inst_17562);
var inst_17564 = cljs.core.get.call(null,inst_17561,"lastVisit");
var inst_17565 = bajoneando.summary.draw_map.call(null,map,inst_17564);
var state_17573__$1 = (function (){var statearr_17575 = state_17573;
(statearr_17575[(7)] = inst_17563);

(statearr_17575[(8)] = inst_17565);

return statearr_17575;
})();
var statearr_17576_17590 = state_17573__$1;
(statearr_17576_17590[(2)] = null);

(statearr_17576_17590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17574 === (6))){
var inst_17569 = (state_17573[(2)]);
var state_17573__$1 = state_17573;
var statearr_17577_17591 = state_17573__$1;
(statearr_17577_17591[(2)] = inst_17569);

(statearr_17577_17591[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17574 === (5))){
var state_17573__$1 = state_17573;
var statearr_17578_17592 = state_17573__$1;
(statearr_17578_17592[(2)] = null);

(statearr_17578_17592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17574 === (4))){
var state_17573__$1 = state_17573;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17573__$1,(7),visit);
} else {
if((state_val_17574 === (3))){
var inst_17571 = (state_17573[(2)]);
var state_17573__$1 = state_17573;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17573__$1,inst_17571);
} else {
if((state_val_17574 === (2))){
var state_17573__$1 = state_17573;
var statearr_17579_17593 = state_17573__$1;
(statearr_17579_17593[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17574 === (1))){
var state_17573__$1 = state_17573;
var statearr_17581_17594 = state_17573__$1;
(statearr_17581_17594[(2)] = null);

(statearr_17581_17594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__10693__auto___17589,visit,options,TileMap,SmallZoom,MapCornerPlacement,MapCorner,Size,map,___$1))
;
return ((function (switch__10637__auto__,c__10693__auto___17589,visit,options,TileMap,SmallZoom,MapCornerPlacement,MapCorner,Size,map,___$1){
return (function() {
var state_machine__10638__auto__ = null;
var state_machine__10638__auto____0 = (function (){
var statearr_17585 = [null,null,null,null,null,null,null,null,null];
(statearr_17585[(0)] = state_machine__10638__auto__);

(statearr_17585[(1)] = (1));

return statearr_17585;
});
var state_machine__10638__auto____1 = (function (state_17573){
while(true){
var ret_value__10639__auto__ = (function (){try{while(true){
var result__10640__auto__ = switch__10637__auto__.call(null,state_17573);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10640__auto__;
}
break;
}
}catch (e17586){if((e17586 instanceof Object)){
var ex__10641__auto__ = e17586;
var statearr_17587_17595 = state_17573;
(statearr_17587_17595[(5)] = ex__10641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17573);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17586;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17596 = state_17573;
state_17573 = G__17596;
continue;
} else {
return ret_value__10639__auto__;
}
break;
}
});
state_machine__10638__auto__ = function(state_17573){
switch(arguments.length){
case 0:
return state_machine__10638__auto____0.call(this);
case 1:
return state_machine__10638__auto____1.call(this,state_17573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10638__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10638__auto____0;
state_machine__10638__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10638__auto____1;
return state_machine__10638__auto__;
})()
;})(switch__10637__auto__,c__10693__auto___17589,visit,options,TileMap,SmallZoom,MapCornerPlacement,MapCorner,Size,map,___$1))
})();
var state__10695__auto__ = (function (){var statearr_17588 = f__10694__auto__.call(null);
(statearr_17588[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10693__auto___17589);

return statearr_17588;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10695__auto__);
});})(c__10693__auto___17589,visit,options,TileMap,SmallZoom,MapCornerPlacement,MapCorner,Size,map,___$1))
);


return bajoneando.core.js_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/visit/update",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (visit,options,TileMap,SmallZoom,MapCornerPlacement,MapCorner,Size,map,___$1){
return (function (upd_visit){
return cljs.core.async.put_BANG_.call(null,visit,upd_visit);
});})(visit,options,TileMap,SmallZoom,MapCornerPlacement,MapCorner,Size,map,___$1))
], null));
});

bajoneando.summary.t17547.prototype.om$core$IInitState$ = true;

bajoneando.summary.t17547.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"visit","visit",-1830616046),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"visit-chan","visit-chan",-1645971306),cljs.core.async.chan.call(null)], null);
});

bajoneando.summary.t17547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17549){
var self__ = this;
var _17549__$1 = this;
return self__.meta17548;
});

bajoneando.summary.t17547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17549,meta17548__$1){
var self__ = this;
var _17549__$1 = this;
return (new bajoneando.summary.t17547(self__.owner,self__.app,self__.map_view,meta17548__$1));
});

bajoneando.summary.t17547.cljs$lang$type = true;

bajoneando.summary.t17547.cljs$lang$ctorStr = "bajoneando.summary/t17547";

bajoneando.summary.t17547.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.summary/t17547");
});

bajoneando.summary.__GT_t17547 = (function __GT_t17547(owner__$1,app__$1,map_view__$1,meta17548){
return (new bajoneando.summary.t17547(owner__$1,app__$1,map_view__$1,meta17548));
});

}

return (new bajoneando.summary.t17547(owner,app,map_view,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,bajoneando.summary.map_view,bajoneando.summary.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("summary")], null));

//# sourceMappingURL=summary.js.map