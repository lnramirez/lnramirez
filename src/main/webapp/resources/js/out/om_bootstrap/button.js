// Compiled by ClojureScript 0.0-2816 {}
goog.provide('om_bootstrap.button');
goog.require('cljs.core');
goog.require('om_bootstrap.types');
goog.require('schema.core');
goog.require('om_bootstrap.util');
goog.require('om_tools.dom');
goog.require('om_tools.mixin');
goog.require('om_tools.core');
goog.require('om_bootstrap.mixins');
goog.require('om.core');
om_bootstrap.button.Button = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"active?","active?",459499776)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"block?","block?",1102479923)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004)),schema.core.Bool], true, false));
om_bootstrap.button.ButtonGroup = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"justified?","justified?",-1045366764)),schema.core.Bool], true, false));
var ufv___16644 = schema.utils.use_fn_validation;
var output_schema16638_16645 = schema.core.Any;
var input_schema16639_16646 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),schema.core.maybe.call(null,schema.core.Bool),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false)], null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker16640_16647 = schema.core.checker.call(null,input_schema16639_16646);
var output_checker16641_16648 = schema.core.checker.call(null,output_schema16638_16645);
/**
* Inputs: [opts :- {:classes {s/Any s/Any}, :disabled? (s/maybe s/Bool), :props {s/Any s/Any}} children]
*/
om_bootstrap.button.render_anchor = ((function (ufv___16644,output_schema16638_16645,input_schema16639_16646,input_checker16640_16647,output_checker16641_16648){
return (function render_anchor(G__16642,G__16643){
var validate__6204__auto__ = ufv___16644.get_cell();
if(cljs.core.truth_(validate__6204__auto__)){
var args__6205__auto___16649 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16642,G__16643], null);
var temp__4126__auto___16650 = input_checker16640_16647.call(null,args__6205__auto___16649);
if(cljs.core.truth_(temp__4126__auto___16650)){
var error__6206__auto___16651 = temp__4126__auto___16650;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__6206__auto___16651)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16651,new cljs.core.Keyword(null,"value","value",305978217),args__6205__auto___16649,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16639_16646,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6207__auto__ = (function (){var opts = G__16642;
var children = G__16643;
while(true){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts),"#"),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,cljs.core.assoc.call(null,new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(opts))),new cljs.core.Keyword(null,"role","role",-736691072),"button"], null);
return om_tools.dom.element.call(null,React.DOM.a,om_bootstrap.util.merge_props.call(null,props,new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(opts)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__6204__auto__)){
var temp__4126__auto___16652 = output_checker16641_16648.call(null,o__6207__auto__);
if(cljs.core.truth_(temp__4126__auto___16652)){
var error__6206__auto___16653 = temp__4126__auto___16652;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"render-anchor","render-anchor",-1892709609,null),cljs.core.pr_str.call(null,error__6206__auto___16653)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16653,new cljs.core.Keyword(null,"value","value",305978217),o__6207__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16638_16645,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6207__auto__;
});})(ufv___16644,output_schema16638_16645,input_schema16639_16646,input_checker16640_16647,output_checker16641_16648))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.render_anchor),schema.core.make_fn_schema.call(null,output_schema16638_16645,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16639_16646], null)));
var ufv___16662 = schema.utils.use_fn_validation;
var output_schema16654_16663 = om_bootstrap.types.Component;
var input_schema16655_16664 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.Button,new cljs.core.Symbol(null,"props","props",2093813254,null)),schema.core.Any], null);
var input_checker16656_16665 = schema.core.checker.call(null,input_schema16655_16664);
var output_checker16657_16666 = schema.core.checker.call(null,output_schema16654_16663);
/**
* Inputs: [props :- Button & children]
* Returns: t/Component
* 
* Renders a button.
* @param {...*} var_args
*/
om_bootstrap.button.button = ((function (ufv___16662,output_schema16654_16663,input_schema16655_16664,input_checker16656_16665,output_checker16657_16666){
return (function() { 
var button__delegate = function (G__16658,rest16659){
var validate__6204__auto__ = ufv___16662.get_cell();
if(cljs.core.truth_(validate__6204__auto__)){
var args__6205__auto___16667 = cljs.core.list_STAR_.call(null,G__16658,rest16659);
var temp__4126__auto___16668 = input_checker16656_16665.call(null,args__6205__auto___16667);
if(cljs.core.truth_(temp__4126__auto___16668)){
var error__6206__auto___16669 = temp__4126__auto___16668;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__6206__auto___16669)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16669,new cljs.core.Keyword(null,"value","value",305978217),args__6205__auto___16667,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16655_16664,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6207__auto__ = (function (){var props = G__16658;
var children = rest16659;
while(true){
var vec__16661 = om_bootstrap.types.separate.call(null,om_bootstrap.button.Button,props,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button",new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),"default",new cljs.core.Keyword(null,"type","type",1174270348),"button"], null));
var bs = cljs.core.nth.call(null,vec__16661,(0),null);
var props__$1 = cljs.core.nth.call(null,vec__16661,(1),null);
var klasses = (cljs.core.truth_(new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs))?cljs.core.PersistentArrayMap.EMPTY:om_bootstrap.types.bs_class_set.call(null,bs));
var klasses__$1 = cljs.core.merge.call(null,klasses,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-block","btn-block",967079535),new cljs.core.Keyword(null,"block?","block?",1102479923).cljs$core$IFn$_invoke$arity$1(bs)], null));
if(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))){
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),new cljs.core.Keyword(null,"active?","active?",459499776).cljs$core$IFn$_invoke$arity$1(bs)], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children)],null))));
} else {
if(cljs.core.truth_((function (){var or__3806__auto__ = new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(props__$1);
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004).cljs$core$IFn$_invoke$arity$1(bs);
}
})())){
return om_bootstrap.button.render_anchor.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"props","props",453281727),props__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"classes","classes",2037804510),klasses__$1], null),children);
} else {
return om_tools.dom.element.call(null,React.DOM.button,om_bootstrap.util.merge_props.call(null,props__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,klasses__$1),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(bs)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));

}
}
break;
}
})();
if(cljs.core.truth_(validate__6204__auto__)){
var temp__4126__auto___16670 = output_checker16657_16666.call(null,o__6207__auto__);
if(cljs.core.truth_(temp__4126__auto___16670)){
var error__6206__auto___16671 = temp__4126__auto___16670;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button","button",-1197855826,null),cljs.core.pr_str.call(null,error__6206__auto___16671)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16671,new cljs.core.Keyword(null,"value","value",305978217),o__6207__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16654_16663,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6207__auto__;
};
var button = function (G__16658,var_args){
var rest16659 = null;
if (arguments.length > 1) {
var G__16672__i = 0, G__16672__a = new Array(arguments.length -  1);
while (G__16672__i < G__16672__a.length) {G__16672__a[G__16672__i] = arguments[G__16672__i + 1]; ++G__16672__i;}
  rest16659 = new cljs.core.IndexedSeq(G__16672__a,0);
} 
return button__delegate.call(this,G__16658,rest16659);};
button.cljs$lang$maxFixedArity = 1;
button.cljs$lang$applyTo = (function (arglist__16673){
var G__16658 = cljs.core.first(arglist__16673);
var rest16659 = cljs.core.rest(arglist__16673);
return button__delegate(G__16658,rest16659);
});
button.cljs$core$IFn$_invoke$arity$variadic = button__delegate;
return button;
})()
;})(ufv___16662,output_schema16654_16663,input_schema16655_16664,input_checker16656_16665,output_checker16657_16666))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button),schema.core.make_fn_schema.call(null,output_schema16654_16663,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16655_16664], null)));
var ufv___16682 = schema.utils.use_fn_validation;
var output_schema16674_16683 = om_bootstrap.types.Component;
var input_schema16675_16684 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker16676_16685 = schema.core.checker.call(null,input_schema16675_16684);
var output_checker16677_16686 = schema.core.checker.call(null,output_schema16674_16683);
/**
* Inputs: [opts & children]
* Returns: t/Component
* 
* Renders a button toolbar.
* @param {...*} var_args
*/
om_bootstrap.button.toolbar = ((function (ufv___16682,output_schema16674_16683,input_schema16675_16684,input_checker16676_16685,output_checker16677_16686){
return (function() { 
var toolbar__delegate = function (G__16678,rest16679){
var validate__6204__auto__ = ufv___16682.get_cell();
if(cljs.core.truth_(validate__6204__auto__)){
var args__6205__auto___16687 = cljs.core.list_STAR_.call(null,G__16678,rest16679);
var temp__4126__auto___16688 = input_checker16676_16685.call(null,args__6205__auto___16687);
if(cljs.core.truth_(temp__4126__auto___16688)){
var error__6206__auto___16689 = temp__4126__auto___16688;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__6206__auto___16689)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16689,new cljs.core.Keyword(null,"value","value",305978217),args__6205__auto___16687,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16675_16684,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6207__auto__ = (function (){var opts = G__16678;
var children = rest16679;
while(true){
var vec__16681 = om_bootstrap.types.separate.call(null,cljs.core.PersistentArrayMap.EMPTY,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-toolbar"], null));
var bs = cljs.core.nth.call(null,vec__16681,(0),null);
var props = cljs.core.nth.call(null,vec__16681,(1),null);
return cljs.core.apply.call(null,React.DOM.div,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,om_bootstrap.types.bs_class_set.call(null,bs))), "role": "toolbar"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
break;
}
})();
if(cljs.core.truth_(validate__6204__auto__)){
var temp__4126__auto___16690 = output_checker16677_16686.call(null,o__6207__auto__);
if(cljs.core.truth_(temp__4126__auto___16690)){
var error__6206__auto___16691 = temp__4126__auto___16690;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"toolbar","toolbar",467742462,null),cljs.core.pr_str.call(null,error__6206__auto___16691)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16691,new cljs.core.Keyword(null,"value","value",305978217),o__6207__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16674_16683,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6207__auto__;
};
var toolbar = function (G__16678,var_args){
var rest16679 = null;
if (arguments.length > 1) {
var G__16692__i = 0, G__16692__a = new Array(arguments.length -  1);
while (G__16692__i < G__16692__a.length) {G__16692__a[G__16692__i] = arguments[G__16692__i + 1]; ++G__16692__i;}
  rest16679 = new cljs.core.IndexedSeq(G__16692__a,0);
} 
return toolbar__delegate.call(this,G__16678,rest16679);};
toolbar.cljs$lang$maxFixedArity = 1;
toolbar.cljs$lang$applyTo = (function (arglist__16693){
var G__16678 = cljs.core.first(arglist__16693);
var rest16679 = cljs.core.rest(arglist__16693);
return toolbar__delegate(G__16678,rest16679);
});
toolbar.cljs$core$IFn$_invoke$arity$variadic = toolbar__delegate;
return toolbar;
})()
;})(ufv___16682,output_schema16674_16683,input_schema16675_16684,input_checker16676_16685,output_checker16677_16686))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.toolbar),schema.core.make_fn_schema.call(null,output_schema16674_16683,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16675_16684], null)));
var ufv___16702 = schema.utils.use_fn_validation;
var output_schema16694_16703 = om_bootstrap.types.Component;
var input_schema16695_16704 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.ButtonGroup,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker16696_16705 = schema.core.checker.call(null,input_schema16695_16704);
var output_checker16697_16706 = schema.core.checker.call(null,output_schema16694_16703);
/**
* Inputs: [opts :- ButtonGroup & children]
* Returns: t/Component
* 
* Renders the supplied children in a wrapping button-group div.
* @param {...*} var_args
*/
om_bootstrap.button.button_group = ((function (ufv___16702,output_schema16694_16703,input_schema16695_16704,input_checker16696_16705,output_checker16697_16706){
return (function() { 
var button_group__delegate = function (G__16698,rest16699){
var validate__6204__auto__ = ufv___16702.get_cell();
if(cljs.core.truth_(validate__6204__auto__)){
var args__6205__auto___16707 = cljs.core.list_STAR_.call(null,G__16698,rest16699);
var temp__4126__auto___16708 = input_checker16696_16705.call(null,args__6205__auto___16707);
if(cljs.core.truth_(temp__4126__auto___16708)){
var error__6206__auto___16709 = temp__4126__auto___16708;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__6206__auto___16709)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16709,new cljs.core.Keyword(null,"value","value",305978217),args__6205__auto___16707,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16695_16704,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6207__auto__ = (function (){var opts = G__16698;
var children = rest16699;
while(true){
var vec__16701 = om_bootstrap.types.separate.call(null,om_bootstrap.button.ButtonGroup,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),"button-group"], null));
var bs = cljs.core.nth.call(null,vec__16701,(0),null);
var props = cljs.core.nth.call(null,vec__16701,(1),null);
var classes = cljs.core.merge.call(null,om_bootstrap.types.bs_class_set.call(null,bs),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"btn-group","btn-group",114866246),cljs.core.not.call(null,new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs)),new cljs.core.Keyword(null,"btn-group-vertical","btn-group-vertical",-1273565878),new cljs.core.Keyword(null,"vertical?","vertical?",-1522630444).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"btn-group-justified","btn-group-justified",1401722505),new cljs.core.Keyword(null,"justified?","justified?",-1045366764).cljs$core$IFn$_invoke$arity$1(bs)], null));
return om_tools.dom.element.call(null,React.DOM.div,om_bootstrap.util.merge_props.call(null,props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null)),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)));
break;
}
})();
if(cljs.core.truth_(validate__6204__auto__)){
var temp__4126__auto___16710 = output_checker16697_16706.call(null,o__6207__auto__);
if(cljs.core.truth_(temp__4126__auto___16710)){
var error__6206__auto___16711 = temp__4126__auto___16710;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"button-group","button-group",108385979,null),cljs.core.pr_str.call(null,error__6206__auto___16711)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16711,new cljs.core.Keyword(null,"value","value",305978217),o__6207__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16694_16703,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6207__auto__;
};
var button_group = function (G__16698,var_args){
var rest16699 = null;
if (arguments.length > 1) {
var G__16712__i = 0, G__16712__a = new Array(arguments.length -  1);
while (G__16712__i < G__16712__a.length) {G__16712__a[G__16712__i] = arguments[G__16712__i + 1]; ++G__16712__i;}
  rest16699 = new cljs.core.IndexedSeq(G__16712__a,0);
} 
return button_group__delegate.call(this,G__16698,rest16699);};
button_group.cljs$lang$maxFixedArity = 1;
button_group.cljs$lang$applyTo = (function (arglist__16713){
var G__16698 = cljs.core.first(arglist__16713);
var rest16699 = cljs.core.rest(arglist__16713);
return button_group__delegate(G__16698,rest16699);
});
button_group.cljs$core$IFn$_invoke$arity$variadic = button_group__delegate;
return button_group;
})()
;})(ufv___16702,output_schema16694_16703,input_schema16695_16704,input_checker16696_16705,output_checker16697_16706))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.button_group),schema.core.make_fn_schema.call(null,output_schema16694_16703,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16695_16704], null)));
om_bootstrap.button.DropdownButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031)),schema.core.Bool], true, false));
om_bootstrap.button.render_nav_item = (function render_nav_item(props,open_QMARK_,children){
var classes = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"dropdown","dropdown",1343185805),true,new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return cljs.core.apply.call(null,React.DOM.li,{"className": om_tools.dom.format_opts.call(null,om_tools.dom.class_set.call(null,classes))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null))));
});
om_bootstrap.button.render_button_group = (function render_button_group(props,open_QMARK_,children){
var group_classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(props)], null);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,group_classes)], null),children);
});
om_bootstrap.button.MenuItem = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([new cljs.core.Keyword(null,"key","key",-1516042587),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"header?","header?",-106649173)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"divider?","divider?",1882560157)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));

var component_fnk__11387__auto___16736 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema16718 = schema.core.Any;
var input_schema16719 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map16717","map16717",1256908271,null))], null);
var input_checker16720 = schema.core.checker.call(null,input_schema16719);
var output_checker16721 = schema.core.checker.call(null,output_schema16718);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema16718,input_schema16719,input_checker16720,output_checker16721){
return (function constructor16715(G__16722){
var validate__6204__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__6204__auto__)){
var args__6205__auto___16737 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16722], null);
var temp__4126__auto___16738 = input_checker16720.call(null,args__6205__auto___16737);
if(cljs.core.truth_(temp__4126__auto___16738)){
var error__6206__auto___16739 = temp__4126__auto___16738;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16715","constructor16715",-1000073201,null),cljs.core.pr_str.call(null,error__6206__auto___16739)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16739,new cljs.core.Keyword(null,"value","value",305978217),args__6205__auto___16737,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16719,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6207__auto__ = (function (){var map16717 = G__16722;
while(true){
if(cljs.core.map_QMARK_.call(null,map16717)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map16717)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map16717,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t16728 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t16728 = (function (input_checker16720,owner,output_schema16718,output_checker16721,constructor16715,map16717,validate__6204__auto__,G__16722,ufv__,input_schema16719,meta16729){
this.input_checker16720 = input_checker16720;
this.owner = owner;
this.output_schema16718 = output_schema16718;
this.output_checker16721 = output_checker16721;
this.constructor16715 = constructor16715;
this.map16717 = map16717;
this.validate__6204__auto__ = validate__6204__auto__;
this.G__16722 = G__16722;
this.ufv__ = ufv__;
this.input_schema16719 = input_schema16719;
this.meta16729 = meta16729;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t16728.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t16728.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (owner,validate__6204__auto__,ufv__,output_schema16718,input_schema16719,input_checker16720,output_checker16721){
return (function (_){
var self__ = this;
var ___$1 = this;
return "menu-item*";
});})(owner,validate__6204__auto__,ufv__,output_schema16718,input_schema16719,input_checker16720,output_checker16721))
;

om_bootstrap.button.t16728.prototype.om$core$IRender$ = true;

om_bootstrap.button.t16728.prototype.om$core$IRender$render$arity$1 = ((function (owner,validate__6204__auto__,ufv__,output_schema16718,input_schema16719,input_checker16720,output_checker16721){
return (function (_){
var self__ = this;
var ___$1 = this;
var map__16731 = om.core.get_props.call(null,self__.owner);
var map__16731__$1 = ((cljs.core.seq_QMARK_.call(null,map__16731))?cljs.core.apply.call(null,cljs.core.hash_map,map__16731):map__16731);
var children = cljs.core.get.call(null,map__16731__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__16731__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var vec__16732 = om_bootstrap.types.separate.call(null,om_bootstrap.button.MenuItem,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__16732,(0),null);
var props = cljs.core.nth.call(null,vec__16732,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-header","dropdown-header",-1451449167),new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"divider","divider",1265972657),new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(bs)], null);
var handle_click = ((function (map__16731,map__16731__$1,children,opts,vec__16732,bs,props,classes,___$1,owner,validate__6204__auto__,ufv__,output_schema16718,input_schema16719,input_checker16720,output_checker16721){
return (function (e){
var temp__4126__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var on_select = temp__4126__auto__;
e.preventDefault();

return on_select.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs));
} else {
return null;
}
});})(map__16731,map__16731__$1,children,opts,vec__16732,bs,props,classes,___$1,owner,validate__6204__auto__,ufv__,output_schema16718,input_schema16719,input_checker16720,output_checker16721))
;
var children__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"header?","header?",-106649173).cljs$core$IFn$_invoke$arity$1(bs))?children:cljs.core.apply.call(null,React.DOM.a,{"tabIndex": "-1", "title": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)), "href": om_tools.dom.format_opts.call(null,new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(bs)), "onClick": om_tools.dom.format_opts.call(null,handle_click)},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children],null)))));
var li_attrs = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"presentation",new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes)], null),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var k = temp__4126__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
} else {
return null;
}
})());
return om_tools.dom.element.call(null,React.DOM.li,om_bootstrap.util.merge_props.call(null,props,li_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[children__$1],null)));
});})(owner,validate__6204__auto__,ufv__,output_schema16718,input_schema16719,input_checker16720,output_checker16721))
;

om_bootstrap.button.t16728.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (owner,validate__6204__auto__,ufv__,output_schema16718,input_schema16719,input_checker16720,output_checker16721){
return (function (_16730){
var self__ = this;
var _16730__$1 = this;
return self__.meta16729;
});})(owner,validate__6204__auto__,ufv__,output_schema16718,input_schema16719,input_checker16720,output_checker16721))
;

om_bootstrap.button.t16728.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (owner,validate__6204__auto__,ufv__,output_schema16718,input_schema16719,input_checker16720,output_checker16721){
return (function (_16730,meta16729__$1){
var self__ = this;
var _16730__$1 = this;
return (new om_bootstrap.button.t16728(self__.input_checker16720,self__.owner,self__.output_schema16718,self__.output_checker16721,self__.constructor16715,self__.map16717,self__.validate__6204__auto__,self__.G__16722,self__.ufv__,self__.input_schema16719,meta16729__$1));
});})(owner,validate__6204__auto__,ufv__,output_schema16718,input_schema16719,input_checker16720,output_checker16721))
;

om_bootstrap.button.t16728.cljs$lang$type = true;

om_bootstrap.button.t16728.cljs$lang$ctorStr = "om-bootstrap.button/t16728";

om_bootstrap.button.t16728.cljs$lang$ctorPrWriter = ((function (owner,validate__6204__auto__,ufv__,output_schema16718,input_schema16719,input_checker16720,output_checker16721){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"om-bootstrap.button/t16728");
});})(owner,validate__6204__auto__,ufv__,output_schema16718,input_schema16719,input_checker16720,output_checker16721))
;

om_bootstrap.button.__GT_t16728 = ((function (owner,validate__6204__auto__,ufv__,output_schema16718,input_schema16719,input_checker16720,output_checker16721){
return (function __GT_t16728(input_checker16720__$1,owner__$1,output_schema16718__$1,output_checker16721__$1,constructor16715__$1,map16717__$1,validate__6204__auto____$1,G__16722__$1,ufv____$1,input_schema16719__$1,meta16729){
return (new om_bootstrap.button.t16728(input_checker16720__$1,owner__$1,output_schema16718__$1,output_checker16721__$1,constructor16715__$1,map16717__$1,validate__6204__auto____$1,G__16722__$1,ufv____$1,input_schema16719__$1,meta16729));
});})(owner,validate__6204__auto__,ufv__,output_schema16718,input_schema16719,input_checker16720,output_checker16721))
;

}

return (new om_bootstrap.button.t16728(input_checker16720,owner,output_schema16718,output_checker16721,constructor16715,map16717,validate__6204__auto__,G__16722,ufv__,input_schema16719,null));
break;
}
})();
if(cljs.core.truth_(validate__6204__auto__)){
var temp__4126__auto___16740 = output_checker16721.call(null,o__6207__auto__);
if(cljs.core.truth_(temp__4126__auto___16740)){
var error__6206__auto___16741 = temp__4126__auto___16740;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16715","constructor16715",-1000073201,null),cljs.core.pr_str.call(null,error__6206__auto___16741)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16741,new cljs.core.Keyword(null,"value","value",305978217),o__6207__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16718,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6207__auto__;
});})(ufv__,output_schema16718,input_schema16719,input_checker16720,output_checker16721))
,schema.core.make_fn_schema.call(null,output_schema16718,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16719], null)));
})();
/**
* Generates an Om component of a menu item. Done this way so that
* wrapping dropdowns will have access to the Om state.
* @param {...*} var_args
*/
om_bootstrap.button.menu_item_STAR_ = ((function (component_fnk__11387__auto___16736){
return (function() { 
var menu_item_STAR___delegate = function (data__11388__auto__,owner16714,p__16733){
var vec__16735 = p__16733;
var opts__11389__auto__ = cljs.core.nth.call(null,vec__16735,(0),null);
return component_fnk__11387__auto___16736.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"opts","opts",155075701),opts__11389__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner16714,new cljs.core.Keyword(null,"data","data",-232669377),data__11388__auto__], null));
};
var menu_item_STAR_ = function (data__11388__auto__,owner16714,var_args){
var p__16733 = null;
if (arguments.length > 2) {
var G__16742__i = 0, G__16742__a = new Array(arguments.length -  2);
while (G__16742__i < G__16742__a.length) {G__16742__a[G__16742__i] = arguments[G__16742__i + 2]; ++G__16742__i;}
  p__16733 = new cljs.core.IndexedSeq(G__16742__a,0);
} 
return menu_item_STAR___delegate.call(this,data__11388__auto__,owner16714,p__16733);};
menu_item_STAR_.cljs$lang$maxFixedArity = 2;
menu_item_STAR_.cljs$lang$applyTo = (function (arglist__16743){
var data__11388__auto__ = cljs.core.first(arglist__16743);
arglist__16743 = cljs.core.next(arglist__16743);
var owner16714 = cljs.core.first(arglist__16743);
var p__16733 = cljs.core.rest(arglist__16743);
return menu_item_STAR___delegate(data__11388__auto__,owner16714,p__16733);
});
menu_item_STAR_.cljs$core$IFn$_invoke$arity$variadic = menu_item_STAR___delegate;
return menu_item_STAR_;
})()
;})(component_fnk__11387__auto___16736))
;

om_bootstrap.button.__GT_menu_item_STAR_ = (function() {
var __GT_menu_item_STAR_ = null;
var __GT_menu_item_STAR___1 = (function (cursor__11356__auto__){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__11356__auto__);
});
var __GT_menu_item_STAR___2 = (function (cursor__11356__auto__,m16716){
return om.core.build.call(null,om_bootstrap.button.menu_item_STAR_,cursor__11356__auto__,m16716);
});
__GT_menu_item_STAR_ = function(cursor__11356__auto__,m16716){
switch(arguments.length){
case 1:
return __GT_menu_item_STAR___1.call(this,cursor__11356__auto__);
case 2:
return __GT_menu_item_STAR___2.call(this,cursor__11356__auto__,m16716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_menu_item_STAR___1;
__GT_menu_item_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_menu_item_STAR___2;
return __GT_menu_item_STAR_;
})()
;
var ufv___16750 = schema.utils.use_fn_validation;
var output_schema16744_16751 = om_bootstrap.types.Component;
var input_schema16745_16752 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.MenuItem,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker16746_16753 = schema.core.checker.call(null,input_schema16745_16752);
var output_checker16747_16754 = schema.core.checker.call(null,output_schema16744_16751);
/**
* Inputs: [opts :- MenuItem & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.button.menu_item = ((function (ufv___16750,output_schema16744_16751,input_schema16745_16752,input_checker16746_16753,output_checker16747_16754){
return (function() { 
var menu_item__delegate = function (G__16748,rest16749){
var validate__6204__auto__ = ufv___16750.get_cell();
if(cljs.core.truth_(validate__6204__auto__)){
var args__6205__auto___16755 = cljs.core.list_STAR_.call(null,G__16748,rest16749);
var temp__4126__auto___16756 = input_checker16746_16753.call(null,args__6205__auto___16755);
if(cljs.core.truth_(temp__4126__auto___16756)){
var error__6206__auto___16757 = temp__4126__auto___16756;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__6206__auto___16757)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16757,new cljs.core.Keyword(null,"value","value",305978217),args__6205__auto___16755,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16745_16752,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6207__auto__ = (function (){var opts = G__16748;
var children = rest16749;
while(true){
return om_bootstrap.button.__GT_menu_item_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__6204__auto__)){
var temp__4126__auto___16758 = output_checker16747_16754.call(null,o__6207__auto__);
if(cljs.core.truth_(temp__4126__auto___16758)){
var error__6206__auto___16759 = temp__4126__auto___16758;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"menu-item","menu-item",269419754,null),cljs.core.pr_str.call(null,error__6206__auto___16759)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16759,new cljs.core.Keyword(null,"value","value",305978217),o__6207__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16744_16751,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6207__auto__;
};
var menu_item = function (G__16748,var_args){
var rest16749 = null;
if (arguments.length > 1) {
var G__16760__i = 0, G__16760__a = new Array(arguments.length -  1);
while (G__16760__i < G__16760__a.length) {G__16760__a[G__16760__i] = arguments[G__16760__i + 1]; ++G__16760__i;}
  rest16749 = new cljs.core.IndexedSeq(G__16760__a,0);
} 
return menu_item__delegate.call(this,G__16748,rest16749);};
menu_item.cljs$lang$maxFixedArity = 1;
menu_item.cljs$lang$applyTo = (function (arglist__16761){
var G__16748 = cljs.core.first(arglist__16761);
var rest16749 = cljs.core.rest(arglist__16761);
return menu_item__delegate(G__16748,rest16749);
});
menu_item.cljs$core$IFn$_invoke$arity$variadic = menu_item__delegate;
return menu_item;
})()
;})(ufv___16750,output_schema16744_16751,input_schema16745_16752,input_checker16746_16753,output_checker16747_16754))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.menu_item),schema.core.make_fn_schema.call(null,output_schema16744_16751,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16745_16752], null)));
om_bootstrap.button.DropdownMenu = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
var ufv___16771 = schema.utils.use_fn_validation;
var output_schema16763_16772 = om_bootstrap.types.Component;
var input_schema16764_16773 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownMenu,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker16765_16774 = schema.core.checker.call(null,input_schema16764_16773);
var output_checker16766_16775 = schema.core.checker.call(null,output_schema16763_16772);
/**
* Inputs: [opts :- DropdownMenu & children]
* Returns: t/Component
* @param {...*} var_args
*/
om_bootstrap.button.dropdown_menu = ((function (ufv___16771,output_schema16763_16772,input_schema16764_16773,input_checker16765_16774,output_checker16766_16775){
return (function() { 
var dropdown_menu__delegate = function (G__16767,rest16768){
var validate__6204__auto__ = ufv___16771.get_cell();
if(cljs.core.truth_(validate__6204__auto__)){
var args__6205__auto___16776 = cljs.core.list_STAR_.call(null,G__16767,rest16768);
var temp__4126__auto___16777 = input_checker16765_16774.call(null,args__6205__auto___16776);
if(cljs.core.truth_(temp__4126__auto___16777)){
var error__6206__auto___16778 = temp__4126__auto___16777;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__6206__auto___16778)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16778,new cljs.core.Keyword(null,"value","value",305978217),args__6205__auto___16776,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16764_16773,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6207__auto__ = (function (){var opts = G__16767;
var children = rest16768;
while(true){
var vec__16770 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownMenu,opts);
var bs = cljs.core.nth.call(null,vec__16770,(0),null);
var props = cljs.core.nth.call(null,vec__16770,(1),null);
var classes = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dropdown-menu","dropdown-menu",564975486),true,new cljs.core.Keyword(null,"dropdown-menu-right","dropdown-menu-right",-1532579541),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs)], null);
var ul_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,classes),new cljs.core.Keyword(null,"role","role",-736691072),"menu"], null);
return om_tools.dom.element.call(null,React.DOM.ul,om_bootstrap.util.merge_props.call(null,props,ul_attrs),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var temp__4124__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4124__auto__)){
var on_select = temp__4124__auto__;
return cljs.core.map.call(null,((function (on_select,temp__4124__auto__,vec__16770,bs,props,classes,ul_attrs,validate__6204__auto__,ufv___16771,output_schema16763_16772,input_schema16764_16773,input_checker16765_16774,output_checker16766_16775){
return (function (p1__16762_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__16762_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),on_select], null));
});})(on_select,temp__4124__auto__,vec__16770,bs,props,classes,ul_attrs,validate__6204__auto__,ufv___16771,output_schema16763_16772,input_schema16764_16773,input_checker16765_16774,output_checker16766_16775))
,children);
} else {
return children;
}
})()],null)));
break;
}
})();
if(cljs.core.truth_(validate__6204__auto__)){
var temp__4126__auto___16779 = output_checker16766_16775.call(null,o__6207__auto__);
if(cljs.core.truth_(temp__4126__auto___16779)){
var error__6206__auto___16780 = temp__4126__auto___16779;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown-menu","dropdown-menu",-2089460283,null),cljs.core.pr_str.call(null,error__6206__auto___16780)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16780,new cljs.core.Keyword(null,"value","value",305978217),o__6207__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16763_16772,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6207__auto__;
};
var dropdown_menu = function (G__16767,var_args){
var rest16768 = null;
if (arguments.length > 1) {
var G__16781__i = 0, G__16781__a = new Array(arguments.length -  1);
while (G__16781__i < G__16781__a.length) {G__16781__a[G__16781__i] = arguments[G__16781__i + 1]; ++G__16781__i;}
  rest16768 = new cljs.core.IndexedSeq(G__16781__a,0);
} 
return dropdown_menu__delegate.call(this,G__16767,rest16768);};
dropdown_menu.cljs$lang$maxFixedArity = 1;
dropdown_menu.cljs$lang$applyTo = (function (arglist__16782){
var G__16767 = cljs.core.first(arglist__16782);
var rest16768 = cljs.core.rest(arglist__16782);
return dropdown_menu__delegate(G__16767,rest16768);
});
dropdown_menu.cljs$core$IFn$_invoke$arity$variadic = dropdown_menu__delegate;
return dropdown_menu;
})()
;})(ufv___16771,output_schema16763_16772,input_schema16764_16773,input_checker16765_16774,output_checker16766_16775))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown_menu),schema.core.make_fn_schema.call(null,output_schema16763_16772,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16764_16773], null)));
om_bootstrap.button.dropdown_STAR_$descriptor = (function (){var descriptor__11358__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__11358__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__11358__auto__;
})();

var component_fnk__11387__auto___16806 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema16788 = schema.core.Any;
var input_schema16789 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map16787","map16787",-1693949029,null))], null);
var input_checker16790 = schema.core.checker.call(null,input_schema16789);
var output_checker16791 = schema.core.checker.call(null,output_schema16788);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791){
return (function constructor16785(G__16792){
var validate__6204__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__6204__auto__)){
var args__6205__auto___16807 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16792], null);
var temp__4126__auto___16808 = input_checker16790.call(null,args__6205__auto___16807);
if(cljs.core.truth_(temp__4126__auto___16808)){
var error__6206__auto___16809 = temp__4126__auto___16808;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16785","constructor16785",-897503699,null),cljs.core.pr_str.call(null,error__6206__auto___16809)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16809,new cljs.core.Keyword(null,"value","value",305978217),args__6205__auto___16807,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16789,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6207__auto__ = (function (){var map16787 = G__16792;
while(true){
if(cljs.core.map_QMARK_.call(null,map16787)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map16787)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map16787,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map16787,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t16798 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t16798 = (function (G__16792,output_checker16791,owner,input_checker16790,constructor16785,validate__6204__auto__,state,output_schema16788,map16787,ufv__,input_schema16789,meta16799){
this.G__16792 = G__16792;
this.output_checker16791 = output_checker16791;
this.owner = owner;
this.input_checker16790 = input_checker16790;
this.constructor16785 = constructor16785;
this.validate__6204__auto__ = validate__6204__auto__;
this.state = state;
this.output_schema16788 = output_schema16788;
this.map16787 = map16787;
this.ufv__ = ufv__;
this.input_schema16789 = input_schema16789;
this.meta16799 = meta16799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t16798.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t16798.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791){
return (function (_){
var self__ = this;
var ___$1 = this;
return "dropdown*";
});})(state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791))
;

om_bootstrap.button.t16798.prototype.om$core$IRender$ = true;

om_bootstrap.button.t16798.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__16801 = om.core.get_props.call(null,self__.owner);
var map__16801__$1 = ((cljs.core.seq_QMARK_.call(null,map__16801))?cljs.core.apply.call(null,cljs.core.hash_map,map__16801):map__16801);
var children = cljs.core.get.call(null,map__16801__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__16801__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var vec__16802 = om_bootstrap.types.separate.call(null,om_bootstrap.button.DropdownButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"#"], null));
var bs = cljs.core.nth.call(null,vec__16802,(0),null);
var props = cljs.core.nth.call(null,vec__16802,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var render_fn = cljs.core.partial.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs))?om_bootstrap.button.render_nav_item:om_bootstrap.button.render_button_group),bs,open_QMARK_);
var button_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"key","key",-1516042587),(0),new cljs.core.Keyword(null,"nav-dropdown?","nav-dropdown?",2070486004),new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__16801,map__16801__$1,children,opts,vec__16802,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__16801,map__16801__$1,children,opts,vec__16802,bs,props,set_dropdown,render_fn,___$1,state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791))
], null);
var update_child_props = ((function (open_QMARK_,map__16801,map__16801__$1,children,opts,vec__16802,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791){
return (function (props__$1){
var handle = (cljs.core.truth_((function (){var or__3806__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"opts","opts",155075701).cljs$core$IFn$_invoke$arity$1(props__$1));
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
}
})())?((function (open_QMARK_,map__16801,map__16801__$1,children,opts,vec__16802,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791){
return (function (key){
var temp__4124__auto__ = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4124__auto__)){
var os = temp__4124__auto__;
return os.call(null,key);
} else {
return set_dropdown.call(null,false);
}
});})(open_QMARK_,map__16801,map__16801__$1,children,opts,vec__16802,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791))
:null);
return cljs.core.update_in.call(null,props__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opts","opts",155075701)], null),om_bootstrap.util.merge_props,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-select","on-select",-192407950),handle], null));
});})(open_QMARK_,map__16801,map__16801__$1,children,opts,vec__16802,bs,props,set_dropdown,render_fn,button_props,___$1,state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791))
;
return render_fn.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_bootstrap.button.button.call(null,om_bootstrap.util.merge_props.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"nav-item?","nav-item?",-1419487031),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),button_props),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs)," ",React.DOM.span({"className": "caret"})),om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"key","key",-1516042587),(1)], null),cljs.core.map.call(null,((function (open_QMARK_,map__16801,map__16801__$1,children,opts,vec__16802,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791){
return (function (p1__16783_SHARP_){
return om_bootstrap.util.clone_with_props.call(null,p1__16783_SHARP_,update_child_props);
});})(open_QMARK_,map__16801,map__16801__$1,children,opts,vec__16802,bs,props,set_dropdown,render_fn,button_props,update_child_props,___$1,state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791))
,children))], null));
});})(state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791))
;

om_bootstrap.button.t16798.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791){
return (function (_16800){
var self__ = this;
var _16800__$1 = this;
return self__.meta16799;
});})(state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791))
;

om_bootstrap.button.t16798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791){
return (function (_16800,meta16799__$1){
var self__ = this;
var _16800__$1 = this;
return (new om_bootstrap.button.t16798(self__.G__16792,self__.output_checker16791,self__.owner,self__.input_checker16790,self__.constructor16785,self__.validate__6204__auto__,self__.state,self__.output_schema16788,self__.map16787,self__.ufv__,self__.input_schema16789,meta16799__$1));
});})(state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791))
;

om_bootstrap.button.t16798.cljs$lang$type = true;

om_bootstrap.button.t16798.cljs$lang$ctorStr = "om-bootstrap.button/t16798";

om_bootstrap.button.t16798.cljs$lang$ctorPrWriter = ((function (state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"om-bootstrap.button/t16798");
});})(state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791))
;

om_bootstrap.button.__GT_t16798 = ((function (state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791){
return (function __GT_t16798(G__16792__$1,output_checker16791__$1,owner__$1,input_checker16790__$1,constructor16785__$1,validate__6204__auto____$1,state__$1,output_schema16788__$1,map16787__$1,ufv____$1,input_schema16789__$1,meta16799){
return (new om_bootstrap.button.t16798(G__16792__$1,output_checker16791__$1,owner__$1,input_checker16790__$1,constructor16785__$1,validate__6204__auto____$1,state__$1,output_schema16788__$1,map16787__$1,ufv____$1,input_schema16789__$1,meta16799));
});})(state,owner,validate__6204__auto__,ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791))
;

}

return (new om_bootstrap.button.t16798(G__16792,output_checker16791,owner,input_checker16790,constructor16785,validate__6204__auto__,state,output_schema16788,map16787,ufv__,input_schema16789,null));
break;
}
})();
if(cljs.core.truth_(validate__6204__auto__)){
var temp__4126__auto___16810 = output_checker16791.call(null,o__6207__auto__);
if(cljs.core.truth_(temp__4126__auto___16810)){
var error__6206__auto___16811 = temp__4126__auto___16810;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16785","constructor16785",-897503699,null),cljs.core.pr_str.call(null,error__6206__auto___16811)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16811,new cljs.core.Keyword(null,"value","value",305978217),o__6207__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16788,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6207__auto__;
});})(ufv__,output_schema16788,input_schema16789,input_checker16790,output_checker16791))
,schema.core.make_fn_schema.call(null,output_schema16788,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16789], null)));
})();
/**
* Generates a dropdown button component responsible for its own
* toggled state. The open? toggling is handled through a dropdown
* mixin.
* @param {...*} var_args
*/
om_bootstrap.button.dropdown_STAR_ = ((function (component_fnk__11387__auto___16806){
return (function() { 
var dropdown_STAR___delegate = function (data__11388__auto__,owner16784,p__16803){
var vec__16805 = p__16803;
var opts__11389__auto__ = cljs.core.nth.call(null,vec__16805,(0),null);
return component_fnk__11387__auto___16806.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner16784),new cljs.core.Keyword(null,"opts","opts",155075701),opts__11389__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner16784,new cljs.core.Keyword(null,"data","data",-232669377),data__11388__auto__], null));
};
var dropdown_STAR_ = function (data__11388__auto__,owner16784,var_args){
var p__16803 = null;
if (arguments.length > 2) {
var G__16812__i = 0, G__16812__a = new Array(arguments.length -  2);
while (G__16812__i < G__16812__a.length) {G__16812__a[G__16812__i] = arguments[G__16812__i + 2]; ++G__16812__i;}
  p__16803 = new cljs.core.IndexedSeq(G__16812__a,0);
} 
return dropdown_STAR___delegate.call(this,data__11388__auto__,owner16784,p__16803);};
dropdown_STAR_.cljs$lang$maxFixedArity = 2;
dropdown_STAR_.cljs$lang$applyTo = (function (arglist__16813){
var data__11388__auto__ = cljs.core.first(arglist__16813);
arglist__16813 = cljs.core.next(arglist__16813);
var owner16784 = cljs.core.first(arglist__16813);
var p__16803 = cljs.core.rest(arglist__16813);
return dropdown_STAR___delegate(data__11388__auto__,owner16784,p__16803);
});
dropdown_STAR_.cljs$core$IFn$_invoke$arity$variadic = dropdown_STAR___delegate;
return dropdown_STAR_;
})()
;})(component_fnk__11387__auto___16806))
;

om_bootstrap.button.__GT_dropdown_STAR_ = (function() {
var __GT_dropdown_STAR_ = null;
var __GT_dropdown_STAR___1 = (function (cursor__11356__auto__){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__11356__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null));
});
var __GT_dropdown_STAR___2 = (function (cursor__11356__auto__,m16786){
return om.core.build.call(null,om_bootstrap.button.dropdown_STAR_,cursor__11356__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.dropdown_STAR_$descriptor], null),m16786));
});
__GT_dropdown_STAR_ = function(cursor__11356__auto__,m16786){
switch(arguments.length){
case 1:
return __GT_dropdown_STAR___1.call(this,cursor__11356__auto__);
case 2:
return __GT_dropdown_STAR___2.call(this,cursor__11356__auto__,m16786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_dropdown_STAR___1;
__GT_dropdown_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_dropdown_STAR___2;
return __GT_dropdown_STAR_;
})()
;
var ufv___16820 = schema.utils.use_fn_validation;
var output_schema16814_16821 = om_bootstrap.types.Component;
var input_schema16815_16822 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.DropdownButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker16816_16823 = schema.core.checker.call(null,input_schema16815_16822);
var output_checker16817_16824 = schema.core.checker.call(null,output_schema16814_16821);
/**
* Inputs: [opts :- DropdownButton & children]
* Returns: t/Component
* 
* Returns a dropdown button component. The component manages its own
* dropdown state.
* @param {...*} var_args
*/
om_bootstrap.button.dropdown = ((function (ufv___16820,output_schema16814_16821,input_schema16815_16822,input_checker16816_16823,output_checker16817_16824){
return (function() { 
var dropdown__delegate = function (G__16818,rest16819){
var validate__6204__auto__ = ufv___16820.get_cell();
if(cljs.core.truth_(validate__6204__auto__)){
var args__6205__auto___16825 = cljs.core.list_STAR_.call(null,G__16818,rest16819);
var temp__4126__auto___16826 = input_checker16816_16823.call(null,args__6205__auto___16825);
if(cljs.core.truth_(temp__4126__auto___16826)){
var error__6206__auto___16827 = temp__4126__auto___16826;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__6206__auto___16827)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16827,new cljs.core.Keyword(null,"value","value",305978217),args__6205__auto___16825,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16815_16822,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6207__auto__ = (function (){var opts = G__16818;
var children = rest16819;
while(true){
return om_bootstrap.button.__GT_dropdown_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__6204__auto__)){
var temp__4126__auto___16828 = output_checker16817_16824.call(null,o__6207__auto__);
if(cljs.core.truth_(temp__4126__auto___16828)){
var error__6206__auto___16829 = temp__4126__auto___16828;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"dropdown","dropdown",-1311249964,null),cljs.core.pr_str.call(null,error__6206__auto___16829)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16829,new cljs.core.Keyword(null,"value","value",305978217),o__6207__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16814_16821,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6207__auto__;
};
var dropdown = function (G__16818,var_args){
var rest16819 = null;
if (arguments.length > 1) {
var G__16830__i = 0, G__16830__a = new Array(arguments.length -  1);
while (G__16830__i < G__16830__a.length) {G__16830__a[G__16830__i] = arguments[G__16830__i + 1]; ++G__16830__i;}
  rest16819 = new cljs.core.IndexedSeq(G__16830__a,0);
} 
return dropdown__delegate.call(this,G__16818,rest16819);};
dropdown.cljs$lang$maxFixedArity = 1;
dropdown.cljs$lang$applyTo = (function (arglist__16831){
var G__16818 = cljs.core.first(arglist__16831);
var rest16819 = cljs.core.rest(arglist__16831);
return dropdown__delegate(G__16818,rest16819);
});
dropdown.cljs$core$IFn$_invoke$arity$variadic = dropdown__delegate;
return dropdown;
})()
;})(ufv___16820,output_schema16814_16821,input_schema16815_16822,input_checker16816_16823,output_checker16817_16824))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.dropdown),schema.core.make_fn_schema.call(null,output_schema16814_16821,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16815_16822], null)));
om_bootstrap.button.SplitButton = om_bootstrap.types.bootstrap.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181)),schema.core.Bool,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"title","title",636505583)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"href","href",-793805698)),schema.core.Str,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238)),om_bootstrap.types.Renderable,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-click","on-click",1632826543)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),schema.core.optional_key.call(null,new cljs.core.Keyword(null,"on-select","on-select",-192407950)),schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null))], true, false));
om_bootstrap.button.split_STAR_$descriptor = (function (){var descriptor__11358__auto__ = om.core.specify_state_methods_BANG_.call(null,cljs.core.clj__GT_js.call(null,om.core.pure_methods));
(descriptor__11358__auto__["mixins"] = [om_bootstrap.mixins.dropdown_mixin]);

return descriptor__11358__auto__;
})();

var component_fnk__11387__auto___16854 = (function (){var ufv__ = schema.utils.use_fn_validation;
var output_schema16836 = schema.core.Any;
var input_schema16837 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Any,new cljs.core.Keyword(null,"state","state",-1988618099),schema.core.Any,new cljs.core.Keyword(null,"owner","owner",-392611939),schema.core.Any], true, false),new cljs.core.Symbol(null,"map16835","map16835",766892565,null))], null);
var input_checker16838 = schema.core.checker.call(null,input_schema16837);
var output_checker16839 = schema.core.checker.call(null,output_schema16836);
return schema.core.schematize_fn.call(null,((function (ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839){
return (function constructor16833(G__16840){
var validate__6204__auto__ = ufv__.get_cell();
if(cljs.core.truth_(validate__6204__auto__)){
var args__6205__auto___16855 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16840], null);
var temp__4126__auto___16856 = input_checker16838.call(null,args__6205__auto___16855);
if(cljs.core.truth_(temp__4126__auto___16856)){
var error__6206__auto___16857 = temp__4126__auto___16856;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16833","constructor16833",1154408801,null),cljs.core.pr_str.call(null,error__6206__auto___16857)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16857,new cljs.core.Keyword(null,"value","value",305978217),args__6205__auto___16855,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16837,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6207__auto__ = (function (){var map16835 = G__16840;
while(true){
if(cljs.core.map_QMARK_.call(null,map16835)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"fnk called on non-map: %s",map16835)));
}

var owner = plumbing.fnk.schema.safe_get.call(null,map16835,new cljs.core.Keyword(null,"owner","owner",-392611939),cljs.core.PersistentVector.EMPTY);
var state = plumbing.fnk.schema.safe_get.call(null,map16835,new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.PersistentVector.EMPTY);
if(typeof om_bootstrap.button.t16846 !== 'undefined'){
} else {

/**
* @constructor
*/
om_bootstrap.button.t16846 = (function (constructor16833,owner,G__16840,input_checker16838,input_schema16837,validate__6204__auto__,output_checker16839,state,map16835,output_schema16836,ufv__,meta16847){
this.constructor16833 = constructor16833;
this.owner = owner;
this.G__16840 = G__16840;
this.input_checker16838 = input_checker16838;
this.input_schema16837 = input_schema16837;
this.validate__6204__auto__ = validate__6204__auto__;
this.output_checker16839 = output_checker16839;
this.state = state;
this.map16835 = map16835;
this.output_schema16836 = output_schema16836;
this.ufv__ = ufv__;
this.meta16847 = meta16847;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
om_bootstrap.button.t16846.prototype.om$core$IDisplayName$ = true;

om_bootstrap.button.t16846.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (state,owner,validate__6204__auto__,ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839){
return (function (_){
var self__ = this;
var ___$1 = this;
return "split*";
});})(state,owner,validate__6204__auto__,ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839))
;

om_bootstrap.button.t16846.prototype.om$core$IRender$ = true;

om_bootstrap.button.t16846.prototype.om$core$IRender$render$arity$1 = ((function (state,owner,validate__6204__auto__,ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839){
return (function (_){
var self__ = this;
var ___$1 = this;
var open_QMARK_ = (self__.owner["isDropdownOpen"]).call(null);
var map__16849 = om.core.get_props.call(null,self__.owner);
var map__16849__$1 = ((cljs.core.seq_QMARK_.call(null,map__16849))?cljs.core.apply.call(null,cljs.core.hash_map,map__16849):map__16849);
var children = cljs.core.get.call(null,map__16849__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var opts = cljs.core.get.call(null,map__16849__$1,new cljs.core.Keyword(null,"opts","opts",155075701));
var vec__16850 = om_bootstrap.types.separate.call(null,om_bootstrap.button.SplitButton,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238),"Toggle dropdown"], null));
var bs = cljs.core.nth.call(null,vec__16850,(0),null);
var props = cljs.core.nth.call(null,vec__16850,(1),null);
var set_dropdown = (self__.owner["setDropdownState"]);
var btn_props = cljs.core.partial.call(null,om_bootstrap.util.merge_props,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"id","id",-1388402092)));
var btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),"button",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__16849,map__16849__$1,children,opts,vec__16850,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__6204__auto__,ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839){
return (function (e){
if(cljs.core.truth_(open_QMARK_)){
set_dropdown.call(null,false);
} else {
}

var temp__4126__auto__ = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto__)){
var f = temp__4126__auto__;
return f.call(null,e);
} else {
return null;
}
});})(open_QMARK_,map__16849,map__16849__$1,children,opts,vec__16850,bs,props,set_dropdown,btn_props,___$1,state,owner,validate__6204__auto__,ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839))
], null)),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(bs));
var drop_btn = om_bootstrap.button.button.call(null,btn_props.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"ref","ref",1289896967),"dropdownButton",new cljs.core.Keyword(null,"class","class",-2030961996),"dropdown-toggle",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open_QMARK_,map__16849,map__16849__$1,children,opts,vec__16850,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__6204__auto__,ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839){
return (function (e){
e.preventDefault();

return set_dropdown.call(null,cljs.core.not.call(null,open_QMARK_));
});})(open_QMARK_,map__16849,map__16849__$1,children,opts,vec__16850,bs,props,set_dropdown,btn_props,btn,___$1,state,owner,validate__6204__auto__,ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839))
], null)),cljs.core.apply.call(null,React.DOM.span,{"className": "sr-only"},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"dropdown-title","dropdown-title",1850134238).cljs$core$IFn$_invoke$arity$1(bs)],null)))),React.DOM.span({"className": "caret"}));
var menu = om_bootstrap.button.dropdown_menu.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),"menu",new cljs.core.Keyword(null,"aria-labelledby","aria-labelledby",1817118667),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493),new cljs.core.Keyword(null,"pull-right?","pull-right?",5308493).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"on-select","on-select",-192407950),((function (open_QMARK_,map__16849,map__16849__$1,children,opts,vec__16850,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__6204__auto__,ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839){
return (function (k){
var temp__4126__auto___16858 = new cljs.core.Keyword(null,"on-select","on-select",-192407950).cljs$core$IFn$_invoke$arity$1(bs);
if(cljs.core.truth_(temp__4126__auto___16858)){
var f_16859 = temp__4126__auto___16858;
f_16859.call(null,k);
} else {
}

return set_dropdown.call(null,false);
});})(open_QMARK_,map__16849,map__16849__$1,children,opts,vec__16850,bs,props,set_dropdown,btn_props,btn,drop_btn,___$1,state,owner,validate__6204__auto__,ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839))
], null),children);
return om_bootstrap.button.button_group.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bs-size","bs-size",1567732754),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754).cljs$core$IFn$_invoke$arity$1(bs),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"class","class",-2030961996),om_tools.dom.class_set.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),open_QMARK_,new cljs.core.Keyword(null,"dropup","dropup",-1031053231),new cljs.core.Keyword(null,"dropup?","dropup?",-1170011428).cljs$core$IFn$_invoke$arity$1(bs)], null))], null),btn,drop_btn,menu);
});})(state,owner,validate__6204__auto__,ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839))
;

om_bootstrap.button.t16846.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (state,owner,validate__6204__auto__,ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839){
return (function (_16848){
var self__ = this;
var _16848__$1 = this;
return self__.meta16847;
});})(state,owner,validate__6204__auto__,ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839))
;

om_bootstrap.button.t16846.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (state,owner,validate__6204__auto__,ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839){
return (function (_16848,meta16847__$1){
var self__ = this;
var _16848__$1 = this;
return (new om_bootstrap.button.t16846(self__.constructor16833,self__.owner,self__.G__16840,self__.input_checker16838,self__.input_schema16837,self__.validate__6204__auto__,self__.output_checker16839,self__.state,self__.map16835,self__.output_schema16836,self__.ufv__,meta16847__$1));
});})(state,owner,validate__6204__auto__,ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839))
;

om_bootstrap.button.t16846.cljs$lang$type = true;

om_bootstrap.button.t16846.cljs$lang$ctorStr = "om-bootstrap.button/t16846";

om_bootstrap.button.t16846.cljs$lang$ctorPrWriter = ((function (state,owner,validate__6204__auto__,ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"om-bootstrap.button/t16846");
});})(state,owner,validate__6204__auto__,ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839))
;

om_bootstrap.button.__GT_t16846 = ((function (state,owner,validate__6204__auto__,ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839){
return (function __GT_t16846(constructor16833__$1,owner__$1,G__16840__$1,input_checker16838__$1,input_schema16837__$1,validate__6204__auto____$1,output_checker16839__$1,state__$1,map16835__$1,output_schema16836__$1,ufv____$1,meta16847){
return (new om_bootstrap.button.t16846(constructor16833__$1,owner__$1,G__16840__$1,input_checker16838__$1,input_schema16837__$1,validate__6204__auto____$1,output_checker16839__$1,state__$1,map16835__$1,output_schema16836__$1,ufv____$1,meta16847));
});})(state,owner,validate__6204__auto__,ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839))
;

}

return (new om_bootstrap.button.t16846(constructor16833,owner,G__16840,input_checker16838,input_schema16837,validate__6204__auto__,output_checker16839,state,map16835,output_schema16836,ufv__,null));
break;
}
})();
if(cljs.core.truth_(validate__6204__auto__)){
var temp__4126__auto___16860 = output_checker16839.call(null,o__6207__auto__);
if(cljs.core.truth_(temp__4126__auto___16860)){
var error__6206__auto___16861 = temp__4126__auto___16860;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"constructor16833","constructor16833",1154408801,null),cljs.core.pr_str.call(null,error__6206__auto___16861)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16861,new cljs.core.Keyword(null,"value","value",305978217),o__6207__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16836,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6207__auto__;
});})(ufv__,output_schema16836,input_schema16837,input_checker16838,output_checker16839))
,schema.core.make_fn_schema.call(null,output_schema16836,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16837], null)));
})();
/**
* Generates a split button component responsible for its own
* toggled state. The open? toggling is handled through a dropdown
* mixin.
* @param {...*} var_args
*/
om_bootstrap.button.split_STAR_ = ((function (component_fnk__11387__auto___16854){
return (function() { 
var split_STAR___delegate = function (data__11388__auto__,owner16832,p__16851){
var vec__16853 = p__16851;
var opts__11389__auto__ = cljs.core.nth.call(null,vec__16853,(0),null);
return component_fnk__11387__auto___16854.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"state","state",-1988618099),om_tools.core.state_proxy.call(null,owner16832),new cljs.core.Keyword(null,"opts","opts",155075701),opts__11389__auto__,new cljs.core.Keyword(null,"owner","owner",-392611939),owner16832,new cljs.core.Keyword(null,"data","data",-232669377),data__11388__auto__], null));
};
var split_STAR_ = function (data__11388__auto__,owner16832,var_args){
var p__16851 = null;
if (arguments.length > 2) {
var G__16862__i = 0, G__16862__a = new Array(arguments.length -  2);
while (G__16862__i < G__16862__a.length) {G__16862__a[G__16862__i] = arguments[G__16862__i + 2]; ++G__16862__i;}
  p__16851 = new cljs.core.IndexedSeq(G__16862__a,0);
} 
return split_STAR___delegate.call(this,data__11388__auto__,owner16832,p__16851);};
split_STAR_.cljs$lang$maxFixedArity = 2;
split_STAR_.cljs$lang$applyTo = (function (arglist__16863){
var data__11388__auto__ = cljs.core.first(arglist__16863);
arglist__16863 = cljs.core.next(arglist__16863);
var owner16832 = cljs.core.first(arglist__16863);
var p__16851 = cljs.core.rest(arglist__16863);
return split_STAR___delegate(data__11388__auto__,owner16832,p__16851);
});
split_STAR_.cljs$core$IFn$_invoke$arity$variadic = split_STAR___delegate;
return split_STAR_;
})()
;})(component_fnk__11387__auto___16854))
;

om_bootstrap.button.__GT_split_STAR_ = (function() {
var __GT_split_STAR_ = null;
var __GT_split_STAR___1 = (function (cursor__11356__auto__){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__11356__auto__,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null));
});
var __GT_split_STAR___2 = (function (cursor__11356__auto__,m16834){
return om.core.build.call(null,om_bootstrap.button.split_STAR_,cursor__11356__auto__,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"descriptor","descriptor",76122018),om_bootstrap.button.split_STAR_$descriptor], null),m16834));
});
__GT_split_STAR_ = function(cursor__11356__auto__,m16834){
switch(arguments.length){
case 1:
return __GT_split_STAR___1.call(this,cursor__11356__auto__);
case 2:
return __GT_split_STAR___2.call(this,cursor__11356__auto__,m16834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_split_STAR_.cljs$core$IFn$_invoke$arity$1 = __GT_split_STAR___1;
__GT_split_STAR_.cljs$core$IFn$_invoke$arity$2 = __GT_split_STAR___2;
return __GT_split_STAR_;
})()
;
var ufv___16870 = schema.utils.use_fn_validation;
var output_schema16864_16871 = schema.core.Any;
var input_schema16865_16872 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.button.SplitButton,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.Any], null);
var input_checker16866_16873 = schema.core.checker.call(null,input_schema16865_16872);
var output_checker16867_16874 = schema.core.checker.call(null,output_schema16864_16871);
/**
* Inputs: [opts :- SplitButton & children]
* @param {...*} var_args
*/
om_bootstrap.button.split = ((function (ufv___16870,output_schema16864_16871,input_schema16865_16872,input_checker16866_16873,output_checker16867_16874){
return (function() { 
var split__delegate = function (G__16868,rest16869){
var validate__6204__auto__ = ufv___16870.get_cell();
if(cljs.core.truth_(validate__6204__auto__)){
var args__6205__auto___16875 = cljs.core.list_STAR_.call(null,G__16868,rest16869);
var temp__4126__auto___16876 = input_checker16866_16873.call(null,args__6205__auto___16875);
if(cljs.core.truth_(temp__4126__auto___16876)){
var error__6206__auto___16877 = temp__4126__auto___16876;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__6206__auto___16877)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16877,new cljs.core.Keyword(null,"value","value",305978217),args__6205__auto___16875,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16865_16872,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6207__auto__ = (function (){var opts = G__16868;
var children = rest16869;
while(true){
return om_bootstrap.button.__GT_split_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"opts","opts",155075701),opts,new cljs.core.Keyword(null,"children","children",-940561982),children], null));
break;
}
})();
if(cljs.core.truth_(validate__6204__auto__)){
var temp__4126__auto___16878 = output_checker16867_16874.call(null,o__6207__auto__);
if(cljs.core.truth_(temp__4126__auto___16878)){
var error__6206__auto___16879 = temp__4126__auto___16878;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split","split",1041096409,null),cljs.core.pr_str.call(null,error__6206__auto___16879)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16879,new cljs.core.Keyword(null,"value","value",305978217),o__6207__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16864_16871,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6207__auto__;
};
var split = function (G__16868,var_args){
var rest16869 = null;
if (arguments.length > 1) {
var G__16880__i = 0, G__16880__a = new Array(arguments.length -  1);
while (G__16880__i < G__16880__a.length) {G__16880__a[G__16880__i] = arguments[G__16880__i + 1]; ++G__16880__i;}
  rest16869 = new cljs.core.IndexedSeq(G__16880__a,0);
} 
return split__delegate.call(this,G__16868,rest16869);};
split.cljs$lang$maxFixedArity = 1;
split.cljs$lang$applyTo = (function (arglist__16881){
var G__16868 = cljs.core.first(arglist__16881);
var rest16869 = cljs.core.rest(arglist__16881);
return split__delegate(G__16868,rest16869);
});
split.cljs$core$IFn$_invoke$arity$variadic = split__delegate;
return split;
})()
;})(ufv___16870,output_schema16864_16871,input_schema16865_16872,input_checker16866_16873,output_checker16867_16874))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.button.split),schema.core.make_fn_schema.call(null,output_schema16864_16871,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16865_16872], null)));

//# sourceMappingURL=button.js.map