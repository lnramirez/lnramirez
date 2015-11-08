// Compiled by ClojureScript 0.0-2816 {}
goog.provide('bajoneando.sandbox');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('sablono.core');
goog.require('goog.events.EventType');
goog.require('om_tools.core');
goog.require('bajoneando.core');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('goog.events');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.net.XhrIo');
goog.require('om.core');

var ufv___17615 = schema.utils.use_fn_validation;
var output_schema17603_17616 = schema.core.Any;
var input_schema17604_17617 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker17605_17618 = schema.core.checker.call(null,input_schema17604_17617);
var output_checker17606_17619 = schema.core.checker.call(null,output_schema17603_17616);
/**
* Inputs: [app owner]
*/
bajoneando.sandbox.user_input = ((function (ufv___17615,output_schema17603_17616,input_schema17604_17617,input_checker17605_17618,output_checker17606_17619){
return (function user_input(G__17607,G__17608){
var validate__6841__auto__ = ufv___17615.get_cell();
if(cljs.core.truth_(validate__6841__auto__)){
var args__6842__auto___17620 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17607,G__17608], null);
var temp__4126__auto___17621 = input_checker17605_17618.call(null,args__6842__auto___17620);
if(cljs.core.truth_(temp__4126__auto___17621)){
var error__6843__auto___17622 = temp__4126__auto___17621;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"user-input","user-input",1136289105,null),cljs.core.pr_str.call(null,error__6843__auto___17622)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17604_17617,new cljs.core.Keyword(null,"value","value",305978217),args__6842__auto___17620,new cljs.core.Keyword(null,"error","error",-978969032),error__6843__auto___17622], null));
} else {
}
} else {
}

var o__6844__auto__ = (function (){var app = G__17607;
var owner = G__17608;
while(true){
if(typeof bajoneando.sandbox.t17612 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.sandbox.t17612 = (function (output_schema17603,owner,G__17608,input_schema17604,validate__6841__auto__,output_checker17606,user_input,G__17607,input_checker17605,app,ufv__,meta17613){
this.output_schema17603 = output_schema17603;
this.owner = owner;
this.G__17608 = G__17608;
this.input_schema17604 = input_schema17604;
this.validate__6841__auto__ = validate__6841__auto__;
this.output_checker17606 = output_checker17606;
this.user_input = user_input;
this.G__17607 = G__17607;
this.input_checker17605 = input_checker17605;
this.app = app;
this.ufv__ = ufv__;
this.meta17613 = meta17613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.sandbox.t17612.prototype.om$core$IDisplayName$ = true;

bajoneando.sandbox.t17612.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__6841__auto__,ufv___17615,output_schema17603_17616,input_schema17604_17617,input_checker17605_17618,output_checker17606_17619){
return (function (_){
var self__ = this;
var ___$1 = this;
return "user-input";
});})(validate__6841__auto__,ufv___17615,output_schema17603_17616,input_schema17604_17617,input_checker17605_17618,output_checker17606_17619))
;

bajoneando.sandbox.t17612.prototype.om$core$IRender$ = true;

bajoneando.sandbox.t17612.prototype.om$core$IRender$render$arity$1 = ((function (validate__6841__auto__,ufv___17615,output_schema17603_17616,input_schema17604_17617,input_checker17605_17618,output_checker17606_17619){
return (function (_){
var self__ = this;
var ___$1 = this;
var ref = "user-input";
var k = new cljs.core.Keyword(null,"user-input","user-input",-504242422);
return om.dom.input.call(null,{"onChange": om_tools.dom.format_opts.call(null,((function (ref,k,___$1,validate__6841__auto__,ufv___17615,output_schema17603_17616,input_schema17604_17617,input_checker17605_17618,output_checker17606_17619){
return (function (___$2){
var this$ = om.core.get_node.call(null,self__.owner,ref);
return this$.handleChange();
});})(ref,k,___$1,validate__6841__auto__,ufv___17615,output_schema17603_17616,input_schema17604_17617,input_checker17605_17618,output_checker17606_17619))
), "ref": om_tools.dom.format_opts.call(null,ref)});
});})(validate__6841__auto__,ufv___17615,output_schema17603_17616,input_schema17604_17617,input_checker17605_17618,output_checker17606_17619))
;

bajoneando.sandbox.t17612.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__6841__auto__,ufv___17615,output_schema17603_17616,input_schema17604_17617,input_checker17605_17618,output_checker17606_17619){
return (function (_17614){
var self__ = this;
var _17614__$1 = this;
return self__.meta17613;
});})(validate__6841__auto__,ufv___17615,output_schema17603_17616,input_schema17604_17617,input_checker17605_17618,output_checker17606_17619))
;

bajoneando.sandbox.t17612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__6841__auto__,ufv___17615,output_schema17603_17616,input_schema17604_17617,input_checker17605_17618,output_checker17606_17619){
return (function (_17614,meta17613__$1){
var self__ = this;
var _17614__$1 = this;
return (new bajoneando.sandbox.t17612(self__.output_schema17603,self__.owner,self__.G__17608,self__.input_schema17604,self__.validate__6841__auto__,self__.output_checker17606,self__.user_input,self__.G__17607,self__.input_checker17605,self__.app,self__.ufv__,meta17613__$1));
});})(validate__6841__auto__,ufv___17615,output_schema17603_17616,input_schema17604_17617,input_checker17605_17618,output_checker17606_17619))
;

bajoneando.sandbox.t17612.cljs$lang$type = true;

bajoneando.sandbox.t17612.cljs$lang$ctorStr = "bajoneando.sandbox/t17612";

bajoneando.sandbox.t17612.cljs$lang$ctorPrWriter = ((function (validate__6841__auto__,ufv___17615,output_schema17603_17616,input_schema17604_17617,input_checker17605_17618,output_checker17606_17619){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.sandbox/t17612");
});})(validate__6841__auto__,ufv___17615,output_schema17603_17616,input_schema17604_17617,input_checker17605_17618,output_checker17606_17619))
;

bajoneando.sandbox.__GT_t17612 = ((function (validate__6841__auto__,ufv___17615,output_schema17603_17616,input_schema17604_17617,input_checker17605_17618,output_checker17606_17619){
return (function __GT_t17612(output_schema17603__$1,owner__$1,G__17608__$1,input_schema17604__$1,validate__6841__auto____$1,output_checker17606__$1,user_input__$1,G__17607__$1,input_checker17605__$1,app__$1,ufv____$1,meta17613){
return (new bajoneando.sandbox.t17612(output_schema17603__$1,owner__$1,G__17608__$1,input_schema17604__$1,validate__6841__auto____$1,output_checker17606__$1,user_input__$1,G__17607__$1,input_checker17605__$1,app__$1,ufv____$1,meta17613));
});})(validate__6841__auto__,ufv___17615,output_schema17603_17616,input_schema17604_17617,input_checker17605_17618,output_checker17606_17619))
;

}

return (new bajoneando.sandbox.t17612(output_schema17603_17616,owner,G__17608,input_schema17604_17617,validate__6841__auto__,output_checker17606_17619,user_input,G__17607,input_checker17605_17618,app,ufv___17615,null));
break;
}
})();
if(cljs.core.truth_(validate__6841__auto__)){
var temp__4126__auto___17623 = output_checker17606_17619.call(null,o__6844__auto__);
if(cljs.core.truth_(temp__4126__auto___17623)){
var error__6843__auto___17624 = temp__4126__auto___17623;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"user-input","user-input",1136289105,null),cljs.core.pr_str.call(null,error__6843__auto___17624)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17603_17616,new cljs.core.Keyword(null,"value","value",305978217),o__6844__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__6843__auto___17624], null));
} else {
}
} else {
}

return o__6844__auto__;
});})(ufv___17615,output_schema17603_17616,input_schema17604_17617,input_checker17605_17618,output_checker17606_17619))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,bajoneando.sandbox.user_input),schema.core.make_fn_schema.call(null,output_schema17603_17616,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17604_17617], null)));

bajoneando.sandbox.__GT_user_input = (function() {
var __GT_user_input = null;
var __GT_user_input__1 = (function (cursor__14243__auto__){
return om.core.build.call(null,bajoneando.sandbox.user_input,cursor__14243__auto__);
});
var __GT_user_input__2 = (function (cursor__14243__auto__,m17602){
return om.core.build.call(null,bajoneando.sandbox.user_input,cursor__14243__auto__,m17602);
});
__GT_user_input = function(cursor__14243__auto__,m17602){
switch(arguments.length){
case 1:
return __GT_user_input__1.call(this,cursor__14243__auto__);
case 2:
return __GT_user_input__2.call(this,cursor__14243__auto__,m17602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_user_input.cljs$core$IFn$_invoke$arity$1 = __GT_user_input__1;
__GT_user_input.cljs$core$IFn$_invoke$arity$2 = __GT_user_input__2;
return __GT_user_input;
})()
;

var ufv___17638 = schema.utils.use_fn_validation;
var output_schema17626_17639 = schema.core.Any;
var input_schema17627_17640 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"_","_",-1201019570,null))], null);
var input_checker17628_17641 = schema.core.checker.call(null,input_schema17627_17640);
var output_checker17629_17642 = schema.core.checker.call(null,output_schema17626_17639);
/**
* Inputs: [app _]
*/
bajoneando.sandbox.auto_complete_view = ((function (ufv___17638,output_schema17626_17639,input_schema17627_17640,input_checker17628_17641,output_checker17629_17642){
return (function auto_complete_view(G__17630,G__17631){
var validate__6841__auto__ = ufv___17638.get_cell();
if(cljs.core.truth_(validate__6841__auto__)){
var args__6842__auto___17643 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__17630,G__17631], null);
var temp__4126__auto___17644 = input_checker17628_17641.call(null,args__6842__auto___17643);
if(cljs.core.truth_(temp__4126__auto___17644)){
var error__6843__auto___17645 = temp__4126__auto___17644;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"auto-complete-view","auto-complete-view",1003694523,null),cljs.core.pr_str.call(null,error__6843__auto___17645)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema17627_17640,new cljs.core.Keyword(null,"value","value",305978217),args__6842__auto___17643,new cljs.core.Keyword(null,"error","error",-978969032),error__6843__auto___17645], null));
} else {
}
} else {
}

var o__6844__auto__ = (function (){var app = G__17630;
var _ = G__17631;
while(true){
if(typeof bajoneando.sandbox.t17635 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.sandbox.t17635 = (function (output_checker17629,output_schema17626,input_checker17628,G__17631,input_schema17627,validate__6841__auto__,_,auto_complete_view,G__17630,app,ufv__,meta17636){
this.output_checker17629 = output_checker17629;
this.output_schema17626 = output_schema17626;
this.input_checker17628 = input_checker17628;
this.G__17631 = G__17631;
this.input_schema17627 = input_schema17627;
this.validate__6841__auto__ = validate__6841__auto__;
this._ = _;
this.auto_complete_view = auto_complete_view;
this.G__17630 = G__17630;
this.app = app;
this.ufv__ = ufv__;
this.meta17636 = meta17636;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.sandbox.t17635.prototype.om$core$IDisplayName$ = true;

bajoneando.sandbox.t17635.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__6841__auto__,ufv___17638,output_schema17626_17639,input_schema17627_17640,input_checker17628_17641,output_checker17629_17642){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return "auto-complete-view";
});})(validate__6841__auto__,ufv___17638,output_schema17626_17639,input_schema17627_17640,input_checker17628_17641,output_checker17629_17642))
;

bajoneando.sandbox.t17635.prototype.om$core$IRender$ = true;

bajoneando.sandbox.t17635.prototype.om$core$IRender$render$arity$1 = ((function (validate__6841__auto__,ufv___17638,output_schema17626_17639,input_schema17627_17640,input_checker17628_17641,output_checker17629_17642){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,bajoneando.sandbox.user_input,self__.app),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.br({})],null)));
});})(validate__6841__auto__,ufv___17638,output_schema17626_17639,input_schema17627_17640,input_checker17628_17641,output_checker17629_17642))
;

bajoneando.sandbox.t17635.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__6841__auto__,ufv___17638,output_schema17626_17639,input_schema17627_17640,input_checker17628_17641,output_checker17629_17642){
return (function (_17637){
var self__ = this;
var _17637__$1 = this;
return self__.meta17636;
});})(validate__6841__auto__,ufv___17638,output_schema17626_17639,input_schema17627_17640,input_checker17628_17641,output_checker17629_17642))
;

bajoneando.sandbox.t17635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__6841__auto__,ufv___17638,output_schema17626_17639,input_schema17627_17640,input_checker17628_17641,output_checker17629_17642){
return (function (_17637,meta17636__$1){
var self__ = this;
var _17637__$1 = this;
return (new bajoneando.sandbox.t17635(self__.output_checker17629,self__.output_schema17626,self__.input_checker17628,self__.G__17631,self__.input_schema17627,self__.validate__6841__auto__,self__._,self__.auto_complete_view,self__.G__17630,self__.app,self__.ufv__,meta17636__$1));
});})(validate__6841__auto__,ufv___17638,output_schema17626_17639,input_schema17627_17640,input_checker17628_17641,output_checker17629_17642))
;

bajoneando.sandbox.t17635.cljs$lang$type = true;

bajoneando.sandbox.t17635.cljs$lang$ctorStr = "bajoneando.sandbox/t17635";

bajoneando.sandbox.t17635.cljs$lang$ctorPrWriter = ((function (validate__6841__auto__,ufv___17638,output_schema17626_17639,input_schema17627_17640,input_checker17628_17641,output_checker17629_17642){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.sandbox/t17635");
});})(validate__6841__auto__,ufv___17638,output_schema17626_17639,input_schema17627_17640,input_checker17628_17641,output_checker17629_17642))
;

bajoneando.sandbox.__GT_t17635 = ((function (validate__6841__auto__,ufv___17638,output_schema17626_17639,input_schema17627_17640,input_checker17628_17641,output_checker17629_17642){
return (function __GT_t17635(output_checker17629__$1,output_schema17626__$1,input_checker17628__$1,G__17631__$1,input_schema17627__$1,validate__6841__auto____$1,___$1,auto_complete_view__$1,G__17630__$1,app__$1,ufv____$1,meta17636){
return (new bajoneando.sandbox.t17635(output_checker17629__$1,output_schema17626__$1,input_checker17628__$1,G__17631__$1,input_schema17627__$1,validate__6841__auto____$1,___$1,auto_complete_view__$1,G__17630__$1,app__$1,ufv____$1,meta17636));
});})(validate__6841__auto__,ufv___17638,output_schema17626_17639,input_schema17627_17640,input_checker17628_17641,output_checker17629_17642))
;

}

return (new bajoneando.sandbox.t17635(output_checker17629_17642,output_schema17626_17639,input_checker17628_17641,G__17631,input_schema17627_17640,validate__6841__auto__,_,auto_complete_view,G__17630,app,ufv___17638,null));
break;
}
})();
if(cljs.core.truth_(validate__6841__auto__)){
var temp__4126__auto___17646 = output_checker17629_17642.call(null,o__6844__auto__);
if(cljs.core.truth_(temp__4126__auto___17646)){
var error__6843__auto___17647 = temp__4126__auto___17646;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"auto-complete-view","auto-complete-view",1003694523,null),cljs.core.pr_str.call(null,error__6843__auto___17647)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema17626_17639,new cljs.core.Keyword(null,"value","value",305978217),o__6844__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__6843__auto___17647], null));
} else {
}
} else {
}

return o__6844__auto__;
});})(ufv___17638,output_schema17626_17639,input_schema17627_17640,input_checker17628_17641,output_checker17629_17642))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,bajoneando.sandbox.auto_complete_view),schema.core.make_fn_schema.call(null,output_schema17626_17639,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema17627_17640], null)));

bajoneando.sandbox.__GT_auto_complete_view = (function() {
var __GT_auto_complete_view = null;
var __GT_auto_complete_view__1 = (function (cursor__14243__auto__){
return om.core.build.call(null,bajoneando.sandbox.auto_complete_view,cursor__14243__auto__);
});
var __GT_auto_complete_view__2 = (function (cursor__14243__auto__,m17625){
return om.core.build.call(null,bajoneando.sandbox.auto_complete_view,cursor__14243__auto__,m17625);
});
__GT_auto_complete_view = function(cursor__14243__auto__,m17625){
switch(arguments.length){
case 1:
return __GT_auto_complete_view__1.call(this,cursor__14243__auto__);
case 2:
return __GT_auto_complete_view__2.call(this,cursor__14243__auto__,m17625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_auto_complete_view.cljs$core$IFn$_invoke$arity$1 = __GT_auto_complete_view__1;
__GT_auto_complete_view.cljs$core$IFn$_invoke$arity$2 = __GT_auto_complete_view__2;
return __GT_auto_complete_view;
})()
;
if(typeof bajoneando.sandbox.app_state !== 'undefined'){
} else {
bajoneando.sandbox.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),"safasdfs",new cljs.core.Keyword(null,"things","things",1255021880),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Apple","ant","bird","CAR","crayon","cooler","DVD","Dirt","DOG"], null)], null));
}
om.core.root.call(null,bajoneando.sandbox.auto_complete_view,bajoneando.sandbox.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=sandbox.js.map