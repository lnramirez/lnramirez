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

var ufv___16775 = schema.utils.use_fn_validation;
var output_schema16763_16776 = schema.core.Any;
var input_schema16764_16777 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker16765_16778 = schema.core.checker.call(null,input_schema16764_16777);
var output_checker16766_16779 = schema.core.checker.call(null,output_schema16763_16776);
/**
* Inputs: [app owner]
*/
bajoneando.sandbox.user_input = ((function (ufv___16775,output_schema16763_16776,input_schema16764_16777,input_checker16765_16778,output_checker16766_16779){
return (function user_input(G__16767,G__16768){
var validate__6841__auto__ = ufv___16775.get_cell();
if(cljs.core.truth_(validate__6841__auto__)){
var args__6842__auto___16780 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16767,G__16768], null);
var temp__4126__auto___16781 = input_checker16765_16778.call(null,args__6842__auto___16780);
if(cljs.core.truth_(temp__4126__auto___16781)){
var error__6843__auto___16782 = temp__4126__auto___16781;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"user-input","user-input",1136289105,null),cljs.core.pr_str.call(null,error__6843__auto___16782)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16764_16777,new cljs.core.Keyword(null,"value","value",305978217),args__6842__auto___16780,new cljs.core.Keyword(null,"error","error",-978969032),error__6843__auto___16782], null));
} else {
}
} else {
}

var o__6844__auto__ = (function (){var app = G__16767;
var owner = G__16768;
while(true){
if(typeof bajoneando.sandbox.t16772 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.sandbox.t16772 = (function (owner,validate__6841__auto__,G__16768,input_checker16765,user_input,output_checker16766,G__16767,input_schema16764,app,ufv__,output_schema16763,meta16773){
this.owner = owner;
this.validate__6841__auto__ = validate__6841__auto__;
this.G__16768 = G__16768;
this.input_checker16765 = input_checker16765;
this.user_input = user_input;
this.output_checker16766 = output_checker16766;
this.G__16767 = G__16767;
this.input_schema16764 = input_schema16764;
this.app = app;
this.ufv__ = ufv__;
this.output_schema16763 = output_schema16763;
this.meta16773 = meta16773;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.sandbox.t16772.prototype.om$core$IDisplayName$ = true;

bajoneando.sandbox.t16772.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__6841__auto__,ufv___16775,output_schema16763_16776,input_schema16764_16777,input_checker16765_16778,output_checker16766_16779){
return (function (_){
var self__ = this;
var ___$1 = this;
return "user-input";
});})(validate__6841__auto__,ufv___16775,output_schema16763_16776,input_schema16764_16777,input_checker16765_16778,output_checker16766_16779))
;

bajoneando.sandbox.t16772.prototype.om$core$IRender$ = true;

bajoneando.sandbox.t16772.prototype.om$core$IRender$render$arity$1 = ((function (validate__6841__auto__,ufv___16775,output_schema16763_16776,input_schema16764_16777,input_checker16765_16778,output_checker16766_16779){
return (function (_){
var self__ = this;
var ___$1 = this;
var ref = "user-input";
var k = new cljs.core.Keyword(null,"user-input","user-input",-504242422);
return om.dom.input.call(null,{"onChange": om_tools.dom.format_opts.call(null,((function (ref,k,___$1,validate__6841__auto__,ufv___16775,output_schema16763_16776,input_schema16764_16777,input_checker16765_16778,output_checker16766_16779){
return (function (___$2){
var this$ = om.core.get_node.call(null,self__.owner,ref);
return this$.handleChange();
});})(ref,k,___$1,validate__6841__auto__,ufv___16775,output_schema16763_16776,input_schema16764_16777,input_checker16765_16778,output_checker16766_16779))
), "ref": om_tools.dom.format_opts.call(null,ref)});
});})(validate__6841__auto__,ufv___16775,output_schema16763_16776,input_schema16764_16777,input_checker16765_16778,output_checker16766_16779))
;

bajoneando.sandbox.t16772.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__6841__auto__,ufv___16775,output_schema16763_16776,input_schema16764_16777,input_checker16765_16778,output_checker16766_16779){
return (function (_16774){
var self__ = this;
var _16774__$1 = this;
return self__.meta16773;
});})(validate__6841__auto__,ufv___16775,output_schema16763_16776,input_schema16764_16777,input_checker16765_16778,output_checker16766_16779))
;

bajoneando.sandbox.t16772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__6841__auto__,ufv___16775,output_schema16763_16776,input_schema16764_16777,input_checker16765_16778,output_checker16766_16779){
return (function (_16774,meta16773__$1){
var self__ = this;
var _16774__$1 = this;
return (new bajoneando.sandbox.t16772(self__.owner,self__.validate__6841__auto__,self__.G__16768,self__.input_checker16765,self__.user_input,self__.output_checker16766,self__.G__16767,self__.input_schema16764,self__.app,self__.ufv__,self__.output_schema16763,meta16773__$1));
});})(validate__6841__auto__,ufv___16775,output_schema16763_16776,input_schema16764_16777,input_checker16765_16778,output_checker16766_16779))
;

bajoneando.sandbox.t16772.cljs$lang$type = true;

bajoneando.sandbox.t16772.cljs$lang$ctorStr = "bajoneando.sandbox/t16772";

bajoneando.sandbox.t16772.cljs$lang$ctorPrWriter = ((function (validate__6841__auto__,ufv___16775,output_schema16763_16776,input_schema16764_16777,input_checker16765_16778,output_checker16766_16779){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.sandbox/t16772");
});})(validate__6841__auto__,ufv___16775,output_schema16763_16776,input_schema16764_16777,input_checker16765_16778,output_checker16766_16779))
;

bajoneando.sandbox.__GT_t16772 = ((function (validate__6841__auto__,ufv___16775,output_schema16763_16776,input_schema16764_16777,input_checker16765_16778,output_checker16766_16779){
return (function __GT_t16772(owner__$1,validate__6841__auto____$1,G__16768__$1,input_checker16765__$1,user_input__$1,output_checker16766__$1,G__16767__$1,input_schema16764__$1,app__$1,ufv____$1,output_schema16763__$1,meta16773){
return (new bajoneando.sandbox.t16772(owner__$1,validate__6841__auto____$1,G__16768__$1,input_checker16765__$1,user_input__$1,output_checker16766__$1,G__16767__$1,input_schema16764__$1,app__$1,ufv____$1,output_schema16763__$1,meta16773));
});})(validate__6841__auto__,ufv___16775,output_schema16763_16776,input_schema16764_16777,input_checker16765_16778,output_checker16766_16779))
;

}

return (new bajoneando.sandbox.t16772(owner,validate__6841__auto__,G__16768,input_checker16765_16778,user_input,output_checker16766_16779,G__16767,input_schema16764_16777,app,ufv___16775,output_schema16763_16776,null));
break;
}
})();
if(cljs.core.truth_(validate__6841__auto__)){
var temp__4126__auto___16783 = output_checker16766_16779.call(null,o__6844__auto__);
if(cljs.core.truth_(temp__4126__auto___16783)){
var error__6843__auto___16784 = temp__4126__auto___16783;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"user-input","user-input",1136289105,null),cljs.core.pr_str.call(null,error__6843__auto___16784)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16763_16776,new cljs.core.Keyword(null,"value","value",305978217),o__6844__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__6843__auto___16784], null));
} else {
}
} else {
}

return o__6844__auto__;
});})(ufv___16775,output_schema16763_16776,input_schema16764_16777,input_checker16765_16778,output_checker16766_16779))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,bajoneando.sandbox.user_input),schema.core.make_fn_schema.call(null,output_schema16763_16776,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16764_16777], null)));

bajoneando.sandbox.__GT_user_input = (function() {
var __GT_user_input = null;
var __GT_user_input__1 = (function (cursor__14243__auto__){
return om.core.build.call(null,bajoneando.sandbox.user_input,cursor__14243__auto__);
});
var __GT_user_input__2 = (function (cursor__14243__auto__,m16762){
return om.core.build.call(null,bajoneando.sandbox.user_input,cursor__14243__auto__,m16762);
});
__GT_user_input = function(cursor__14243__auto__,m16762){
switch(arguments.length){
case 1:
return __GT_user_input__1.call(this,cursor__14243__auto__);
case 2:
return __GT_user_input__2.call(this,cursor__14243__auto__,m16762);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_user_input.cljs$core$IFn$_invoke$arity$1 = __GT_user_input__1;
__GT_user_input.cljs$core$IFn$_invoke$arity$2 = __GT_user_input__2;
return __GT_user_input;
})()
;

var ufv___16798 = schema.utils.use_fn_validation;
var output_schema16786_16799 = schema.core.Any;
var input_schema16787_16800 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"_","_",-1201019570,null))], null);
var input_checker16788_16801 = schema.core.checker.call(null,input_schema16787_16800);
var output_checker16789_16802 = schema.core.checker.call(null,output_schema16786_16799);
/**
* Inputs: [app _]
*/
bajoneando.sandbox.auto_complete_view = ((function (ufv___16798,output_schema16786_16799,input_schema16787_16800,input_checker16788_16801,output_checker16789_16802){
return (function auto_complete_view(G__16790,G__16791){
var validate__6841__auto__ = ufv___16798.get_cell();
if(cljs.core.truth_(validate__6841__auto__)){
var args__6842__auto___16803 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16790,G__16791], null);
var temp__4126__auto___16804 = input_checker16788_16801.call(null,args__6842__auto___16803);
if(cljs.core.truth_(temp__4126__auto___16804)){
var error__6843__auto___16805 = temp__4126__auto___16804;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"auto-complete-view","auto-complete-view",1003694523,null),cljs.core.pr_str.call(null,error__6843__auto___16805)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16787_16800,new cljs.core.Keyword(null,"value","value",305978217),args__6842__auto___16803,new cljs.core.Keyword(null,"error","error",-978969032),error__6843__auto___16805], null));
} else {
}
} else {
}

var o__6844__auto__ = (function (){var app = G__16790;
var _ = G__16791;
while(true){
if(typeof bajoneando.sandbox.t16795 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.sandbox.t16795 = (function (input_checker16788,validate__6841__auto__,output_checker16789,_,G__16790,input_schema16787,output_schema16786,auto_complete_view,app,ufv__,G__16791,meta16796){
this.input_checker16788 = input_checker16788;
this.validate__6841__auto__ = validate__6841__auto__;
this.output_checker16789 = output_checker16789;
this._ = _;
this.G__16790 = G__16790;
this.input_schema16787 = input_schema16787;
this.output_schema16786 = output_schema16786;
this.auto_complete_view = auto_complete_view;
this.app = app;
this.ufv__ = ufv__;
this.G__16791 = G__16791;
this.meta16796 = meta16796;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.sandbox.t16795.prototype.om$core$IDisplayName$ = true;

bajoneando.sandbox.t16795.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__6841__auto__,ufv___16798,output_schema16786_16799,input_schema16787_16800,input_checker16788_16801,output_checker16789_16802){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return "auto-complete-view";
});})(validate__6841__auto__,ufv___16798,output_schema16786_16799,input_schema16787_16800,input_checker16788_16801,output_checker16789_16802))
;

bajoneando.sandbox.t16795.prototype.om$core$IRender$ = true;

bajoneando.sandbox.t16795.prototype.om$core$IRender$render$arity$1 = ((function (validate__6841__auto__,ufv___16798,output_schema16786_16799,input_schema16787_16800,input_checker16788_16801,output_checker16789_16802){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,bajoneando.sandbox.user_input,self__.app),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.br({})],null)));
});})(validate__6841__auto__,ufv___16798,output_schema16786_16799,input_schema16787_16800,input_checker16788_16801,output_checker16789_16802))
;

bajoneando.sandbox.t16795.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__6841__auto__,ufv___16798,output_schema16786_16799,input_schema16787_16800,input_checker16788_16801,output_checker16789_16802){
return (function (_16797){
var self__ = this;
var _16797__$1 = this;
return self__.meta16796;
});})(validate__6841__auto__,ufv___16798,output_schema16786_16799,input_schema16787_16800,input_checker16788_16801,output_checker16789_16802))
;

bajoneando.sandbox.t16795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__6841__auto__,ufv___16798,output_schema16786_16799,input_schema16787_16800,input_checker16788_16801,output_checker16789_16802){
return (function (_16797,meta16796__$1){
var self__ = this;
var _16797__$1 = this;
return (new bajoneando.sandbox.t16795(self__.input_checker16788,self__.validate__6841__auto__,self__.output_checker16789,self__._,self__.G__16790,self__.input_schema16787,self__.output_schema16786,self__.auto_complete_view,self__.app,self__.ufv__,self__.G__16791,meta16796__$1));
});})(validate__6841__auto__,ufv___16798,output_schema16786_16799,input_schema16787_16800,input_checker16788_16801,output_checker16789_16802))
;

bajoneando.sandbox.t16795.cljs$lang$type = true;

bajoneando.sandbox.t16795.cljs$lang$ctorStr = "bajoneando.sandbox/t16795";

bajoneando.sandbox.t16795.cljs$lang$ctorPrWriter = ((function (validate__6841__auto__,ufv___16798,output_schema16786_16799,input_schema16787_16800,input_checker16788_16801,output_checker16789_16802){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.sandbox/t16795");
});})(validate__6841__auto__,ufv___16798,output_schema16786_16799,input_schema16787_16800,input_checker16788_16801,output_checker16789_16802))
;

bajoneando.sandbox.__GT_t16795 = ((function (validate__6841__auto__,ufv___16798,output_schema16786_16799,input_schema16787_16800,input_checker16788_16801,output_checker16789_16802){
return (function __GT_t16795(input_checker16788__$1,validate__6841__auto____$1,output_checker16789__$1,___$1,G__16790__$1,input_schema16787__$1,output_schema16786__$1,auto_complete_view__$1,app__$1,ufv____$1,G__16791__$1,meta16796){
return (new bajoneando.sandbox.t16795(input_checker16788__$1,validate__6841__auto____$1,output_checker16789__$1,___$1,G__16790__$1,input_schema16787__$1,output_schema16786__$1,auto_complete_view__$1,app__$1,ufv____$1,G__16791__$1,meta16796));
});})(validate__6841__auto__,ufv___16798,output_schema16786_16799,input_schema16787_16800,input_checker16788_16801,output_checker16789_16802))
;

}

return (new bajoneando.sandbox.t16795(input_checker16788_16801,validate__6841__auto__,output_checker16789_16802,_,G__16790,input_schema16787_16800,output_schema16786_16799,auto_complete_view,app,ufv___16798,G__16791,null));
break;
}
})();
if(cljs.core.truth_(validate__6841__auto__)){
var temp__4126__auto___16806 = output_checker16789_16802.call(null,o__6844__auto__);
if(cljs.core.truth_(temp__4126__auto___16806)){
var error__6843__auto___16807 = temp__4126__auto___16806;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"auto-complete-view","auto-complete-view",1003694523,null),cljs.core.pr_str.call(null,error__6843__auto___16807)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16786_16799,new cljs.core.Keyword(null,"value","value",305978217),o__6844__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__6843__auto___16807], null));
} else {
}
} else {
}

return o__6844__auto__;
});})(ufv___16798,output_schema16786_16799,input_schema16787_16800,input_checker16788_16801,output_checker16789_16802))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,bajoneando.sandbox.auto_complete_view),schema.core.make_fn_schema.call(null,output_schema16786_16799,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16787_16800], null)));

bajoneando.sandbox.__GT_auto_complete_view = (function() {
var __GT_auto_complete_view = null;
var __GT_auto_complete_view__1 = (function (cursor__14243__auto__){
return om.core.build.call(null,bajoneando.sandbox.auto_complete_view,cursor__14243__auto__);
});
var __GT_auto_complete_view__2 = (function (cursor__14243__auto__,m16785){
return om.core.build.call(null,bajoneando.sandbox.auto_complete_view,cursor__14243__auto__,m16785);
});
__GT_auto_complete_view = function(cursor__14243__auto__,m16785){
switch(arguments.length){
case 1:
return __GT_auto_complete_view__1.call(this,cursor__14243__auto__);
case 2:
return __GT_auto_complete_view__2.call(this,cursor__14243__auto__,m16785);
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