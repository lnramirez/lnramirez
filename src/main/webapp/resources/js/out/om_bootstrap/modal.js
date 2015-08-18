// Compiled by ClojureScript 0.0-2816 {}
goog.provide('om_bootstrap.modal');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('om.core');
/**
* Options for the modal.
*/
om_bootstrap.modal.Modal = new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"header","header",119441134),schema.core.Any,new cljs.core.Keyword(null,"footer","footer",1606445390),schema.core.Any,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"keyboard?","keyboard?",-2034212401)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"visible?","visible?",2129863715)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"animate?","animate?",-1559039739)),schema.core.Bool], true, false);

var component_fnk__11389__auto___22729 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema22711 = schema.core.Any;
var input_schema22712 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map22710","map22710",1214826992,null))], null);
var input_checker22713 = schema.core.checker.call(null,input_schema22712);
var output_checker22714 = schema.core.checker.call(null,output_schema22711);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714){
return (function constructor22708(G__22715){
var validate__6206__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__6206__auto__)){
var args__6207__auto___22730 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22715], null);
var temp__4126__auto___22731 = input_checker22713.call(null,args__6207__auto___22730);
if(cljs.core.truth_(temp__4126__auto___22731)){
var error__6208__auto___22732 = temp__4126__auto___22731;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor22708","constructor22708",-495501245,null),cljs.core.pr_str.call(null,error__6208__auto___22732)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22732,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___22730,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22712,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var map22710 = G__22715;
while(true){
if(cljs.core.map_QMARK_.call(null,map22710)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map22710)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map22710,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map22710,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.modal.t22721 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.modal.t22721 = (function (constructor22708,owner,validate__6206__auto__,G__22715,input_schema22712,map22710,input_checker22713,state,output_checker22714,ufv__,output_schema22711,meta22722){
this.constructor22708 = constructor22708;
this.owner = owner;
this.validate__6206__auto__ = validate__6206__auto__;
this.G__22715 = G__22715;
this.input_schema22712 = input_schema22712;
this.map22710 = map22710;
this.input_checker22713 = input_checker22713;
this.state = state;
this.output_checker22714 = output_checker22714;
this.ufv__ = ufv__;
this.output_schema22711 = output_schema22711;
this.meta22722 = meta22722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.modal.t22721.prototype.om$core$IDisplayName$ = true;

om_bootstrap.modal.t22721.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__6206__auto__,ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714){
return (function (_){
var self__ = this;
var ___$1 = this;
return "modal*";
});})(state,owner,validate__6206__auto__,ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714))
;

om_bootstrap.modal.t22721.prototype.om$core$IRender$ = true;

om_bootstrap.modal.t22721.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__6206__auto__,ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__22724 = om.core.get_props.call(null,self__.owner);
var map__22724__$1 = ((cljs.core.seq_QMARK_.call(null,map__22724))?cljs.core.apply.call(null,cljs.core.hash_map,map__22724):map__22724);
var children = cljs.core.get.call(null,map__22724__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__22724__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var vec__22725 = om_bootstrap.types.separate.call(null,om_bootstrap.modal.Modal,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"modal"], null));
var bs = cljs.core.nth.call(null,vec__22725,(0),null);
var props = cljs.core.nth.call(null,vec__22725,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"modal","modal",-1031880850),true,new cljs.core.Keyword(null,"fade","fade",1167694157),true,new cljs.core.Keyword(null,"in","in",-1531184865),om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null))], null);
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "modal-dialog"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "modal-content"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,3,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.apply.call(null,React.DOM.div,{"className": "modal-header"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[(cljs.core.truth_(new cljs.core.Keyword(null,"close-button?","close-button?",-1030817687).cljs$core$IFn$_invoke$arity$1(bs))?React.DOM.button({"onClick": om_tools.dom.format_opts.call(null,((function (map__22724,map__22724__$1,children,opts,vec__22725,bs,props,classes,___$1,state,owner,validate__6206__auto__,ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714){
return (function (___$2){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),false);
});})(map__22724,map__22724__$1,children,opts,vec__22725,bs,props,classes,___$1,state,owner,validate__6206__auto__,ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714))
), "aria-hidden": true, "className": "close", "type": "button"},"\u00D7"):null),om_bootstrap.util.clone_with_props.call(null,new cljs.core.Keyword(null,"header","header",119441134).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"modal-title"], null))],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "modal-body"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))),cljs.core.apply.call(null,React.DOM.div,{"className": "modal-footer"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"footer","footer",1606445390).cljs$core$IFn$_invoke$arity$1(bs)],null))))],null))))],null))))],null)));
});})(state,owner,validate__6206__auto__,ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714))
;

om_bootstrap.modal.t22721.prototype.om$core$IWillReceiveProps$ = true;

om_bootstrap.modal.t22721.prototype.om$core$IWillReceiveProps$will_receive_props$arity$2 = ((function (state,owner,validate__6206__auto__,ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714){
return (function (this$,next_props){
var self__ = this;
var this$__$1 = this;
var last_props = om.core.get_props.call(null,self__.owner);
var last_visible_QMARK_ = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null));
var next_visible_QMARK_ = cljs.core.get_in.call(null,next_props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null));
if(cljs.core.not_EQ_.call(null,last_visible_QMARK_,next_visible_QMARK_)){
return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null),next_visible_QMARK_);
} else {
return null;
}
});})(state,owner,validate__6206__auto__,ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714))
;

om_bootstrap.modal.t22721.prototype.om$core$IInitState$ = true;

om_bootstrap.modal.t22721.prototype.om$core$IInitState$init_state$arity$1 = ((function (state,owner,validate__6206__auto__,ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714){
return (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"visible?","visible?",2129863715),cljs.core.get_in.call(null,om.core.get_props.call(null,self__.owner),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.Keyword(null,"visible?","visible?",2129863715)], null))], null);
});})(state,owner,validate__6206__auto__,ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714))
;

om_bootstrap.modal.t22721.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__6206__auto__,ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714){
return (function (_22723){
var self__ = this;
var _22723__$1 = this;
return self__.meta22722;
});})(state,owner,validate__6206__auto__,ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714))
;

om_bootstrap.modal.t22721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__6206__auto__,ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714){
return (function (_22723,meta22722__$1){
var self__ = this;
var _22723__$1 = this;
return (new om_bootstrap.modal.t22721(self__.constructor22708,self__.owner,self__.validate__6206__auto__,self__.G__22715,self__.input_schema22712,self__.map22710,self__.input_checker22713,self__.state,self__.output_checker22714,self__.ufv__,self__.output_schema22711,meta22722__$1));
});})(state,owner,validate__6206__auto__,ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714))
;

om_bootstrap.modal.t22721.cljs$lang$type = true;

om_bootstrap.modal.t22721.cljs$lang$ctorStr = "om-bootstrap.modal/t22721";

om_bootstrap.modal.t22721.cljs$lang$ctorPrWriter = ((function (state,owner,validate__6206__auto__,ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"om-bootstrap.modal/t22721");
});})(state,owner,validate__6206__auto__,ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714))
;

om_bootstrap.modal.__GT_t22721 = ((function (state,owner,validate__6206__auto__,ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714){
return (function __GT_t22721(constructor22708__$1,owner__$1,validate__6206__auto____$1,G__22715__$1,input_schema22712__$1,map22710__$1,input_checker22713__$1,state__$1,output_checker22714__$1,ufv____$1,output_schema22711__$1,meta22722){
return (new om_bootstrap.modal.t22721(constructor22708__$1,owner__$1,validate__6206__auto____$1,G__22715__$1,input_schema22712__$1,map22710__$1,input_checker22713__$1,state__$1,output_checker22714__$1,ufv____$1,output_schema22711__$1,meta22722));
});})(state,owner,validate__6206__auto__,ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714))
;

}

return (new om_bootstrap.modal.t22721(constructor22708,owner,validate__6206__auto__,G__22715,input_schema22712,map22710,input_checker22713,state,output_checker22714,ufv__,output_schema22711,null));
break;
}
})();
if(cljs.core.truth_(validate__6206__auto__)){
var temp__4126__auto___22733 = output_checker22714.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___22733)){
var error__6208__auto___22734 = temp__4126__auto___22733;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor22708","constructor22708",-495501245,null),cljs.core.pr_str.call(null,error__6208__auto___22734)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22734,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22711,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
});})(ufv__,output_schema22711,input_schema22712,input_checker22713,output_checker22714))
,schema.core.make_fn_schema.call(null,output_schema22711,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22712], null)));
})();
/**
* Component that renders a Modal. Manages it's own toggle state
* @param {...*} var_args
*/
om_bootstrap.modal.modal_STAR_ = ((function (component_fnk__11389__auto___22729){
return (function() { 
var modal_STAR___delegate = function (data__11390__auto__,owner22707,p__22726){
var vec__22728 = p__22726;
var opts__11391__auto__ = cljs.core.nth.call(null,vec__22728,(0),null);
return component_fnk__11389__auto___22729.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner22707),new cljs.core.Keyword(null,"opts","opts",155075701),opts__11391__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner22707,new cljs.core.Keyword(null,"data","data",-232669377),data__11390__auto__], null));
};
var modal_STAR_ = function (data__11390__auto__,owner22707,var_args){
var p__22726 = null;
if (arguments.length > 2) {
var G__22735__i = 0, G__22735__a = new Array(arguments.length -  2);
while (G__22735__i < G__22735__a.length) {G__22735__a[G__22735__i] = arguments[G__22735__i + 2]; ++G__22735__i;}
  p__22726 = new cljs.core.IndexedSeq(G__22735__a,0);
} 
return modal_STAR___delegate.call(this,data__11390__auto__,owner22707,p__22726);};
modal_STAR_.cljs$lang$maxFixedArity = 2;
modal_STAR_.cljs$lang$applyTo = (function (arglist__22736){
var data__11390__auto__ = cljs.core.first(arglist__22736);
arglist__22736 = cljs.core.next(arglist__22736);
var owner22707 = cljs.core.first(arglist__22736);
var p__22726 = cljs.core.rest(arglist__22736);
return modal_STAR___delegate(data__11390__auto__,owner22707,p__22726);
});
modal_STAR_.cljs$core$IFn$_invoke$arity$variadic = modal_STAR___delegate;
return modal_STAR_;
})()
;})(component_fnk__11389__auto___22729))
;

om_bootstrap.modal.__GT_modal_STAR_ = (function() {
var __GT_modal_STAR_ = null;
var __GT_modal_STAR___1 = (function (cursor__11358__auto__){
return om.core.build.call(null,om_bootstrap.modal.modal_STAR_,cursor__11358__auto__);
});
var __GT_modal_STAR___2 = (function (cursor__11358__auto__,m22709){
return om.core.build.call(null,om_bootstrap.modal.modal_STAR_,cursor__11358__auto__,m22709);
});
__GT_modal_STAR_ = function(cursor__11358__auto__,m22709){
switch(arguments.length){
case 1:
return __GT_modal_STAR___1.call(this,cursor__11358__auto__);
case 2:
return __GT_modal_STAR___2.call(this,cursor__11358__auto__,m22709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_modal_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_modal_STAR___1;
__GT_modal_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_modal_STAR___2;
return __GT_modal_STAR_;
})()
;
var ufv___22743 = schema.utils.use_fn_validation;
var output_schema22737_22744 = schema.core.Any;
var input_schema22738_22745 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.modal.Modal,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker22739_22746 = schema.core.checker.call(null,input_schema22738_22745);
var output_checker22740_22747 = schema.core.checker.call(null,output_schema22737_22744);
/**
* Inputs: [opts :- Modal & children]
* @param {...*} var_args
*/
om_bootstrap.modal.modal = ((function (ufv___22743,output_schema22737_22744,input_schema22738_22745,input_checker22739_22746,output_checker22740_22747){
return (function() { 
var modal__delegate = function (G__22741,rest22742){
var validate__6206__auto__ = ufv___22743.get_cell();
if(cljs.core.truth_(validate__6206__auto__)){
var args__6207__auto___22748 = cljs.core.list_STAR_.call(null,G__22741,rest22742);
var temp__4126__auto___22749 = input_checker22739_22746.call(null,args__6207__auto___22748);
if(cljs.core.truth_(temp__4126__auto___22749)){
var error__6208__auto___22750 = temp__4126__auto___22749;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"modal","modal",608650677,null),cljs.core.pr_str.call(null,error__6208__auto___22750)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22750,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___22748,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22738_22745,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var opts = G__22741;
var children = rest22742;
while(true){
return om_bootstrap.modal.__GT_modal_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__6206__auto__)){
var temp__4126__auto___22751 = output_checker22740_22747.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___22751)){
var error__6208__auto___22752 = temp__4126__auto___22751;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"modal","modal",608650677,null),cljs.core.pr_str.call(null,error__6208__auto___22752)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22752,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22737_22744,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
};
var modal = function (G__22741,var_args){
var rest22742 = null;
if (arguments.length > 1) {
var G__22753__i = 0, G__22753__a = new Array(arguments.length -  1);
while (G__22753__i < G__22753__a.length) {G__22753__a[G__22753__i] = arguments[G__22753__i + 1]; ++G__22753__i;}
  rest22742 = new cljs.core.IndexedSeq(G__22753__a,0);
} 
return modal__delegate.call(this,G__22741,rest22742);};
modal.cljs$lang$maxFixedArity = 1;
modal.cljs$lang$applyTo = (function (arglist__22754){
var G__22741 = cljs.core.first(arglist__22754);
var rest22742 = cljs.core.rest(arglist__22754);
return modal__delegate(G__22741,rest22742);
});
modal.cljs$core$IFn$_invoke$arity$variadic = modal__delegate;
return modal;
})()
;})(ufv___22743,output_schema22737_22744,input_schema22738_22745,input_checker22739_22746,output_checker22740_22747))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.modal.modal),schema.core.make_fn_schema.call(null,output_schema22737_22744,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22738_22745], null)));

//# sourceMappingURL=modal.js.map