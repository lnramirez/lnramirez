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
var shape = (function (){var obj19737 = {"lat":cljs.core.get.call(null,visit,"latitude"),"lng":cljs.core.get.call(null,visit,"longitude")};
return obj19737;
})();
var info_content = [cljs.core.str("Date: "),cljs.core.str(bajoneando.summary.date_time_formatter.format((new Date(cljs.core.get.call(null,visit,"date"))))),cljs.core.str(" (UTC)")].join('');
var last_visit = (new MQA.Poi(shape));
last_visit.setRolloverContent(info_content);

last_visit.setInfoContentHTML(info_content);

map.removeAllShapes();

map.addShape(last_visit);

map.bestFit();

return map.setZoomLevel((13));
});
bajoneando.summary.update_last = (function update_last(state){
return bajoneando.core.js_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("/visit/update")].join(''),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (upd_visit){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"visit-chan","visit-chan",-1645971306).cljs$core$IFn$_invoke$arity$1(state),upd_visit);
})], null));
});
bajoneando.summary.update_previous = (function update_previous(state){
return bajoneando.core.js_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uxrl","uxrl",-2099507108),[cljs.core.str("/visit/previous/"),cljs.core.str(cljs.core.get.call(null,new cljs.core.Keyword(null,"visit","visit",-1830616046).cljs$core$IFn$_invoke$arity$1(state),"date"))].join(''),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),(function (upd_visit){
return cljs.core.async.put_BANG_.call(null,new cljs.core.Keyword(null,"visit-chan","visit-chan",-1645971306).cljs$core$IFn$_invoke$arity$1(state),upd_visit);
})], null));
});
bajoneando.summary.app_state = cljs.core.atom.call(null);
bajoneando.summary.map_view = (function map_view(app,owner){
if(typeof bajoneando.summary.t19784 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.summary.t19784 = (function (owner,app,map_view,meta19785){
this.owner = owner;
this.app = app;
this.map_view = map_view;
this.meta19785 = meta19785;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.summary.t19784.prototype.om$core$IRenderState$ = true;

bajoneando.summary.t19784.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
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

bajoneando.summary.t19784.prototype.om$core$IWillMount$ = true;

bajoneando.summary.t19784.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var visit_chan = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visit-chan","visit-chan",-1645971306)], null));
var options = (function (){var obj19796 = {"elt":document.getElementById("map"),"zoom":(13),"mtype":"osm","bestFitMargin":(0),"zoomOnDoubleClick":true};
return obj19796;
})();
var TileMap = MQA.TileMap;
var SmallZoom = MQA.SmallZoom;
var MapCornerPlacement = MQA.MapCornerPlacement;
var MapCorner = MQA.MapCorner;
var Size = MQA.Size;
var map = (new TileMap(options));
var c__10693__auto___19830 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10693__auto___19830,visit_chan,options,TileMap,SmallZoom,MapCornerPlacement,MapCorner,Size,map,___$1){
return (function (){
var f__10694__auto__ = (function (){var switch__10637__auto__ = ((function (c__10693__auto___19830,visit_chan,options,TileMap,SmallZoom,MapCornerPlacement,MapCorner,Size,map,___$1){
return (function (state_19814){
var state_val_19815 = (state_19814[(1)]);
if((state_val_19815 === (7))){
var inst_19800 = (state_19814[(2)]);
var inst_19801 = cljs.core.get.call(null,inst_19800,"lastVisit");
var inst_19802 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"visit","visit",-1830616046),inst_19801);
var inst_19803 = cljs.core.get.call(null,inst_19800,"hits");
var inst_19804 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"hits","hits",-2120002930),inst_19803);
var inst_19805 = cljs.core.get.call(null,inst_19800,"lastVisit");
var inst_19806 = bajoneando.summary.draw_map.call(null,map,inst_19805);
var state_19814__$1 = (function (){var statearr_19816 = state_19814;
(statearr_19816[(7)] = inst_19802);

(statearr_19816[(8)] = inst_19804);

(statearr_19816[(9)] = inst_19806);

return statearr_19816;
})();
var statearr_19817_19831 = state_19814__$1;
(statearr_19817_19831[(2)] = null);

(statearr_19817_19831[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (6))){
var inst_19810 = (state_19814[(2)]);
var state_19814__$1 = state_19814;
var statearr_19818_19832 = state_19814__$1;
(statearr_19818_19832[(2)] = inst_19810);

(statearr_19818_19832[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (5))){
var state_19814__$1 = state_19814;
var statearr_19819_19833 = state_19814__$1;
(statearr_19819_19833[(2)] = null);

(statearr_19819_19833[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (4))){
var state_19814__$1 = state_19814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19814__$1,(7),visit_chan);
} else {
if((state_val_19815 === (3))){
var inst_19812 = (state_19814[(2)]);
var state_19814__$1 = state_19814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19814__$1,inst_19812);
} else {
if((state_val_19815 === (2))){
var state_19814__$1 = state_19814;
var statearr_19820_19834 = state_19814__$1;
(statearr_19820_19834[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_19815 === (1))){
var state_19814__$1 = state_19814;
var statearr_19822_19835 = state_19814__$1;
(statearr_19822_19835[(2)] = null);

(statearr_19822_19835[(1)] = (2));


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
});})(c__10693__auto___19830,visit_chan,options,TileMap,SmallZoom,MapCornerPlacement,MapCorner,Size,map,___$1))
;
return ((function (switch__10637__auto__,c__10693__auto___19830,visit_chan,options,TileMap,SmallZoom,MapCornerPlacement,MapCorner,Size,map,___$1){
return (function() {
var state_machine__10638__auto__ = null;
var state_machine__10638__auto____0 = (function (){
var statearr_19826 = [null,null,null,null,null,null,null,null,null,null];
(statearr_19826[(0)] = state_machine__10638__auto__);

(statearr_19826[(1)] = (1));

return statearr_19826;
});
var state_machine__10638__auto____1 = (function (state_19814){
while(true){
var ret_value__10639__auto__ = (function (){try{while(true){
var result__10640__auto__ = switch__10637__auto__.call(null,state_19814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10640__auto__;
}
break;
}
}catch (e19827){if((e19827 instanceof Object)){
var ex__10641__auto__ = e19827;
var statearr_19828_19836 = state_19814;
(statearr_19828_19836[(5)] = ex__10641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e19827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19837 = state_19814;
state_19814 = G__19837;
continue;
} else {
return ret_value__10639__auto__;
}
break;
}
});
state_machine__10638__auto__ = function(state_19814){
switch(arguments.length){
case 0:
return state_machine__10638__auto____0.call(this);
case 1:
return state_machine__10638__auto____1.call(this,state_19814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10638__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10638__auto____0;
state_machine__10638__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10638__auto____1;
return state_machine__10638__auto__;
})()
;})(switch__10637__auto__,c__10693__auto___19830,visit_chan,options,TileMap,SmallZoom,MapCornerPlacement,MapCorner,Size,map,___$1))
})();
var state__10695__auto__ = (function (){var statearr_19829 = f__10694__auto__.call(null);
(statearr_19829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10693__auto___19830);

return statearr_19829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10695__auto__);
});})(c__10693__auto___19830,visit_chan,options,TileMap,SmallZoom,MapCornerPlacement,MapCorner,Size,map,___$1))
);


return bajoneando.summary.update_last.call(null,om.core.get_state.call(null,self__.owner));
});

bajoneando.summary.t19784.prototype.om$core$IInitState$ = true;

bajoneando.summary.t19784.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"visit","visit",-1830616046),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hits","hits",-2120002930),(0),new cljs.core.Keyword(null,"visit-chan","visit-chan",-1645971306),cljs.core.async.chan.call(null)], null);
});

bajoneando.summary.t19784.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19786){
var self__ = this;
var _19786__$1 = this;
return self__.meta19785;
});

bajoneando.summary.t19784.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19786,meta19785__$1){
var self__ = this;
var _19786__$1 = this;
return (new bajoneando.summary.t19784(self__.owner,self__.app,self__.map_view,meta19785__$1));
});

bajoneando.summary.t19784.cljs$lang$type = true;

bajoneando.summary.t19784.cljs$lang$ctorStr = "bajoneando.summary/t19784";

bajoneando.summary.t19784.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.summary/t19784");
});

bajoneando.summary.__GT_t19784 = (function __GT_t19784(owner__$1,app__$1,map_view__$1,meta19785){
return (new bajoneando.summary.t19784(owner__$1,app__$1,map_view__$1,meta19785));
});

}

return (new bajoneando.summary.t19784(owner,app,map_view,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,bajoneando.summary.map_view,bajoneando.summary.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("summary")], null));

//# sourceMappingURL=summary.js.map