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
bajoneando.summary.date_time_formatter = (new goog.i18n.DateTimeFormat("dd-MMM-yyyy HH:mm"));
bajoneando.summary.draw_map = (function draw_map(map,visit){
var shape = (function (){var obj18656 = {"lat":cljs.core.get.call(null,visit,"latitude"),"lng":cljs.core.get.call(null,visit,"longitude")};
return obj18656;
})();
var info_content = [cljs.core.str("Date: "),cljs.core.str(bajoneando.summary.date_time_formatter.format((new Date(cljs.core.get.call(null,visit,"date"))))),cljs.core.str(" (UTC)")].join('');
var last_visit = (new MQA.Poi(shape));
var cust_icon = (new MQA.Icon("https://www.mapquestapi.com/staticmap/geticon?uri=poi-1.png",(20),(29)));
last_visit.setRolloverContent(info_content);

last_visit.setInfoContentHTML(info_content);

last_visit.setIcon(cust_icon);

map.removeAllShapes();

map.addShape(last_visit);

map.bestFit();

return map.setZoomLevel((13));
});
bajoneando.summary.update_last = (function update_last(state){
return bajoneando.core.js_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/visit/update",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (upd_visit){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"visit-chan","visit-chan",-1645971306).cljs$core$IFn$_invoke$arity$1(state),upd_visit);
})], null));
});
bajoneando.summary.update_previous = (function update_previous(state){
return bajoneando.core.js_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("/visit/previous/"),cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"visit","visit",-1830616046).cljs$core$IFn$_invoke$arity$1(state),"date"))].join(''),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (upd_visit){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"visit-chan","visit-chan",-1645971306).cljs$core$IFn$_invoke$arity$1(state),upd_visit);
})], null));
});
bajoneando.summary.app_state = cljs.core.atom.call(null);
bajoneando.summary.map_view = (function map_view(app,owner){
if(typeof bajoneando.summary.t18703 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.summary.t18703 = (function (owner,app,map_view,meta18704){
this.owner = owner;
this.app = app;
this.map_view = map_view;
this.meta18704 = meta18704;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.summary.t18703.prototype.om$core$IRenderState$ = true;

bajoneando.summary.t18703.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var hits = new cljs.core.Keyword(null,"hits","hits",-2120002930).cljs$core$IFn$_invoke$arity$1(state);
return React.DOM.div(null,React.DOM.section(null,React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},React.DOM.h2(null,"Summary"),sablono.interpreter.interpret.call(null,[cljs.core.str("Hits: "),cljs.core.str(hits)].join(''))))),React.DOM.section(null,React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-12"},React.DOM.h2(null,"Last Visit"))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-md-2"}),React.DOM.div({"className": "col-md-8"},React.DOM.nav(null,React.DOM.ul({"className": "pager"},React.DOM.li({"className": "previous"},React.DOM.a({"href": "#", "onClick": ((function (hits,this$__$1){
return (function (e){
e.preventDefault();

return bajoneando.summary.update_previous.call(null,state);
});})(hits,this$__$1))
},"Previous")),React.DOM.li({"className": "next"},React.DOM.a({"className": "disabled", "href": "#", "onClick": ((function (hits,this$__$1){
return (function (e){
e.preventDefault();

return bajoneando.summary.update_previous.call(null,state);
});})(hits,this$__$1))
},"Next")))),React.DOM.a({"className": "updateanchor glyphicon glyphicon-refresh", "href": "#", "onClick": ((function (hits,this$__$1){
return (function (e){
e.preventDefault();

return bajoneando.summary.update_last.call(null,state);
});})(hits,this$__$1))
}),React.DOM.span({"className": "updating", "id": "updating"})))));
});

bajoneando.summary.t18703.prototype.om$core$IWillMount$ = true;

bajoneando.summary.t18703.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var visit_chan = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visit-chan","visit-chan",-1645971306)], null));
var options = (function (){var obj18715 = {"elt":document.getElementById("map"),"zoom":(13),"mtype":"osm","bestFitMargin":(0),"zoomOnDoubleClick":true};
return obj18715;
})();
var Size = MQA.Size;
var map = (new MQA.TileMap(options));
MQA.withModule("smallzoom","mousewheel",((function (visit_chan,options,Size,map,___$1){
return (function (___$2){
map.addControl((new MQA.SmallZoom()),(new MQA.MapCornerPlacement(MQA.MapCorner.TOP_LEFT,(new MQA.Size((5),(5))))));

return map.enableMouseWheelZoom();
});})(visit_chan,options,Size,map,___$1))
);

var c__10695__auto___18749 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10695__auto___18749,visit_chan,options,Size,map,___$1){
return (function (){
var f__10696__auto__ = (function (){var switch__10639__auto__ = ((function (c__10695__auto___18749,visit_chan,options,Size,map,___$1){
return (function (state_18733){
var state_val_18734 = (state_18733[(1)]);
if((state_val_18734 === (7))){
var inst_18719 = (state_18733[(2)]);
var inst_18720 = cljs.core.get.call(null,inst_18719,"lastVisit");
var inst_18721 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"visit","visit",-1830616046),inst_18720);
var inst_18722 = cljs.core.get.call(null,inst_18719,"hits");
var inst_18723 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hits","hits",-2120002930),inst_18722);
var inst_18724 = cljs.core.get.call(null,inst_18719,"lastVisit");
var inst_18725 = bajoneando.summary.draw_map.call(null,map,inst_18724);
var state_18733__$1 = (function (){var statearr_18735 = state_18733;
(statearr_18735[(7)] = inst_18721);

(statearr_18735[(8)] = inst_18723);

(statearr_18735[(9)] = inst_18725);

return statearr_18735;
})();
var statearr_18736_18750 = state_18733__$1;
(statearr_18736_18750[(2)] = null);

(statearr_18736_18750[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (6))){
var inst_18729 = (state_18733[(2)]);
var state_18733__$1 = state_18733;
var statearr_18737_18751 = state_18733__$1;
(statearr_18737_18751[(2)] = inst_18729);

(statearr_18737_18751[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (5))){
var state_18733__$1 = state_18733;
var statearr_18738_18752 = state_18733__$1;
(statearr_18738_18752[(2)] = null);

(statearr_18738_18752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (4))){
var state_18733__$1 = state_18733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18733__$1,(7),visit_chan);
} else {
if((state_val_18734 === (3))){
var inst_18731 = (state_18733[(2)]);
var state_18733__$1 = state_18733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18733__$1,inst_18731);
} else {
if((state_val_18734 === (2))){
var state_18733__$1 = state_18733;
var statearr_18739_18753 = state_18733__$1;
(statearr_18739_18753[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18734 === (1))){
var state_18733__$1 = state_18733;
var statearr_18741_18754 = state_18733__$1;
(statearr_18741_18754[(2)] = null);

(statearr_18741_18754[(1)] = (2));


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
});})(c__10695__auto___18749,visit_chan,options,Size,map,___$1))
;
return ((function (switch__10639__auto__,c__10695__auto___18749,visit_chan,options,Size,map,___$1){
return (function() {
var state_machine__10640__auto__ = null;
var state_machine__10640__auto____0 = (function (){
var statearr_18745 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18745[(0)] = state_machine__10640__auto__);

(statearr_18745[(1)] = (1));

return statearr_18745;
});
var state_machine__10640__auto____1 = (function (state_18733){
while(true){
var ret_value__10641__auto__ = (function (){try{while(true){
var result__10642__auto__ = switch__10639__auto__.call(null,state_18733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10642__auto__;
}
break;
}
}catch (e18746){if((e18746 instanceof Object)){
var ex__10643__auto__ = e18746;
var statearr_18747_18755 = state_18733;
(statearr_18747_18755[(5)] = ex__10643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18756 = state_18733;
state_18733 = G__18756;
continue;
} else {
return ret_value__10641__auto__;
}
break;
}
});
state_machine__10640__auto__ = function(state_18733){
switch(arguments.length){
case 0:
return state_machine__10640__auto____0.call(this);
case 1:
return state_machine__10640__auto____1.call(this,state_18733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10640__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10640__auto____0;
state_machine__10640__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10640__auto____1;
return state_machine__10640__auto__;
})()
;})(switch__10639__auto__,c__10695__auto___18749,visit_chan,options,Size,map,___$1))
})();
var state__10697__auto__ = (function (){var statearr_18748 = f__10696__auto__.call(null);
(statearr_18748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10695__auto___18749);

return statearr_18748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10697__auto__);
});})(c__10695__auto___18749,visit_chan,options,Size,map,___$1))
);


return bajoneando.summary.update_last.call(null,om.core.get_state.call(null,self__.owner));
});

bajoneando.summary.t18703.prototype.om$core$IInitState$ = true;

bajoneando.summary.t18703.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"visit","visit",-1830616046),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hits","hits",-2120002930),(0),new cljs.core.Keyword(null,"visit-chan","visit-chan",-1645971306),cljs.core.async.chan.call(null)], null);
});

bajoneando.summary.t18703.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18705){
var self__ = this;
var _18705__$1 = this;
return self__.meta18704;
});

bajoneando.summary.t18703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18705,meta18704__$1){
var self__ = this;
var _18705__$1 = this;
return (new bajoneando.summary.t18703(self__.owner,self__.app,self__.map_view,meta18704__$1));
});

bajoneando.summary.t18703.cljs$lang$type = true;

bajoneando.summary.t18703.cljs$lang$ctorStr = "bajoneando.summary/t18703";

bajoneando.summary.t18703.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.summary/t18703");
});

bajoneando.summary.__GT_t18703 = (function __GT_t18703(owner__$1,app__$1,map_view__$1,meta18704){
return (new bajoneando.summary.t18703(owner__$1,app__$1,map_view__$1,meta18704));
});

}

return (new bajoneando.summary.t18703(owner,app,map_view,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,bajoneando.summary.map_view,bajoneando.summary.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("summary")], null));

//# sourceMappingURL=summary.js.map