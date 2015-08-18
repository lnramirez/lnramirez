// Compiled by ClojureScript 0.0-2816 {}
goog.provide('om_bootstrap.util');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('om.core');
goog.require('goog.object');
/**
* Returns a map that consists of the rest of the maps conj-ed onto
* the first.  If a key occurs in more than one map, the mapping(s)
* from the latter (left-to-right) will be combined with the mapping in
* the result by looking up the proper merge function and in the
* supplied map of key -> merge-fn and using that for the big merge. If
* a key doesn't have a merge function, the right value wins (as with
* merge).
*/
om_bootstrap.util.merge_with_fns = (function merge_with_fns(k__GT_fn,maps){
var merge_entry = (function merge_entry(m,e){
var k = cljs.core.key.call(null,e);
var v = cljs.core.val.call(null,e);
var temp__4124__auto__ = (function (){var and__3794__auto__ = cljs.core.contains_QMARK_.call(null,m,k);
if(and__3794__auto__){
return k__GT_fn.call(null,k);
} else {
return and__3794__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var f = temp__4124__auto__;
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),v));
} else {
return cljs.core.assoc.call(null,m,k,v);
}
});
var merge = (function merge(m1,m2){
return cljs.core.reduce.call(null,merge_entry,(function (){var or__3806__auto__ = m1;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),cljs.core.seq.call(null,m2));
});
return cljs.core.reduce.call(null,merge,cljs.core.PersistentArrayMap.EMPTY,maps);
});
var ufv___22847 = schema.utils.use_fn_validation;
var output_schema22842_22848 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Any], null);
var input_schema22843_22849 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);
var input_checker22844_22850 = schema.core.checker.call(null,input_schema22843_22849);
var output_checker22845_22851 = schema.core.checker.call(null,output_schema22842_22848);
/**
* Inputs: [x :- s/Any]
* Returns: [s/Any]
*/
om_bootstrap.util.collectify = ((function (ufv___22847,output_schema22842_22848,input_schema22843_22849,input_checker22844_22850,output_checker22845_22851){
return (function collectify(G__22846){
var validate__6206__auto__ = ufv___22847.get_cell();
if(cljs.core.truth_(validate__6206__auto__)){
var args__6207__auto___22852 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22846], null);
var temp__4126__auto___22853 = input_checker22844_22850.call(null,args__6207__auto___22852);
if(cljs.core.truth_(temp__4126__auto___22853)){
var error__6208__auto___22854 = temp__4126__auto___22853;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__6208__auto___22854)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22854,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___22852,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22843_22849,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var x = G__22846;
while(true){
if(cljs.core.sequential_QMARK_.call(null,x)){
return x;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}
break;
}
})();
if(cljs.core.truth_(validate__6206__auto__)){
var temp__4126__auto___22855 = output_checker22845_22851.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___22855)){
var error__6208__auto___22856 = temp__4126__auto___22855;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"collectify","collectify",-1779603030,null),cljs.core.pr_str.call(null,error__6208__auto___22856)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22856,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22842_22848,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
});})(ufv___22847,output_schema22842_22848,input_schema22843_22849,input_checker22844_22850,output_checker22845_22851))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.collectify),schema.core.make_fn_schema.call(null,output_schema22842_22848,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22843_22849], null)));
/**
* This is the same as om.core/get-props. We added it to get around
* the new precondition in Om 0.8.0.
*/
om_bootstrap.util.get_props = (function get_props(x){
return (x.props["__om_cursor"]);
});
var ufv___22862 = schema.utils.use_fn_validation;
var output_schema22857_22863 = schema.core.Bool;
var input_schema22858_22864 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"x","x",-555367584,null))], null);
var input_checker22859_22865 = schema.core.checker.call(null,input_schema22858_22864);
var output_checker22860_22866 = schema.core.checker.call(null,output_schema22857_22863);
/**
* Inputs: [x]
* Returns: s/Bool
*/
om_bootstrap.util.om_component_QMARK_ = ((function (ufv___22862,output_schema22857_22863,input_schema22858_22864,input_checker22859_22865,output_checker22860_22866){
return (function om_component_QMARK_(G__22861){
var validate__6206__auto__ = ufv___22862.get_cell();
if(cljs.core.truth_(validate__6206__auto__)){
var args__6207__auto___22867 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22861], null);
var temp__4126__auto___22868 = input_checker22859_22865.call(null,args__6207__auto___22867);
if(cljs.core.truth_(temp__4126__auto___22868)){
var error__6208__auto___22869 = temp__4126__auto___22868;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),cljs.core.pr_str.call(null,error__6208__auto___22869)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22869,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___22867,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22858_22864,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var x = G__22861;
while(true){
return cljs.core.boolean$.call(null,om_bootstrap.util.get_props.call(null,x));
break;
}
})();
if(cljs.core.truth_(validate__6206__auto__)){
var temp__4126__auto___22870 = output_checker22860_22866.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___22870)){
var error__6208__auto___22871 = temp__4126__auto___22870;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"om-component?","om-component?",534068525,null),cljs.core.pr_str.call(null,error__6208__auto___22871)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22871,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22857_22863,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
});})(ufv___22862,output_schema22857_22863,input_schema22858_22864,input_checker22859_22865,output_checker22860_22866))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.om_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema22857_22863,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22858_22864], null)));
var ufv___22877 = schema.utils.use_fn_validation;
var output_schema22872_22878 = schema.core.Bool;
var input_schema22873_22879 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);
var input_checker22874_22880 = schema.core.checker.call(null,input_schema22873_22879);
var output_checker22875_22881 = schema.core.checker.call(null,output_schema22872_22878);
/**
* Inputs: [child]
* Returns: s/Bool
* 
* TODO: Once Om updates its externs to include this file, we can
* remove the janky aget call.
*/
om_bootstrap.util.strict_valid_component_QMARK_ = ((function (ufv___22877,output_schema22872_22878,input_schema22873_22879,input_checker22874_22880,output_checker22875_22881){
return (function strict_valid_component_QMARK_(G__22876){
var validate__6206__auto__ = ufv___22877.get_cell();
if(cljs.core.truth_(validate__6206__auto__)){
var args__6207__auto___22882 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22876], null);
var temp__4126__auto___22883 = input_checker22874_22880.call(null,args__6207__auto___22882);
if(cljs.core.truth_(temp__4126__auto___22883)){
var error__6208__auto___22884 = temp__4126__auto___22883;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__6208__auto___22884)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22884,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___22882,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22873_22879,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var child = G__22876;
while(true){
return (React["isValidElement"]).call(null,child);
break;
}
})();
if(cljs.core.truth_(validate__6206__auto__)){
var temp__4126__auto___22885 = output_checker22875_22881.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___22885)){
var error__6208__auto___22886 = temp__4126__auto___22885;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"strict-valid-component?","strict-valid-component?",130165335,null),cljs.core.pr_str.call(null,error__6208__auto___22886)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22886,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22872_22878,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
});})(ufv___22877,output_schema22872_22878,input_schema22873_22879,input_checker22874_22880,output_checker22875_22881))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.strict_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema22872_22878,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22873_22879], null)));
var ufv___22892 = schema.utils.use_fn_validation;
var output_schema22887_22893 = schema.core.Bool;
var input_schema22888_22894 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"child","child",-2030468224,null))], null);
var input_checker22889_22895 = schema.core.checker.call(null,input_schema22888_22894);
var output_checker22890_22896 = schema.core.checker.call(null,output_schema22887_22893);
/**
* Inputs: [child]
* Returns: s/Bool
* 
* Returns true if the supplied argument is a valid React component,
* false otherwise.
*/
om_bootstrap.util.valid_component_QMARK_ = ((function (ufv___22892,output_schema22887_22893,input_schema22888_22894,input_checker22889_22895,output_checker22890_22896){
return (function valid_component_QMARK_(G__22891){
var validate__6206__auto__ = ufv___22892.get_cell();
if(cljs.core.truth_(validate__6206__auto__)){
var args__6207__auto___22897 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22891], null);
var temp__4126__auto___22898 = input_checker22889_22895.call(null,args__6207__auto___22897);
if(cljs.core.truth_(temp__4126__auto___22898)){
var error__6208__auto___22899 = temp__4126__auto___22898;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__6208__auto___22899)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22899,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___22897,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22888_22894,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var child = G__22891;
while(true){
var or__3806__auto__ = typeof child === 'string';
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = typeof child === 'number';
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
return om_bootstrap.util.strict_valid_component_QMARK_.call(null,child);
}
}
break;
}
})();
if(cljs.core.truth_(validate__6206__auto__)){
var temp__4126__auto___22900 = output_checker22890_22896.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___22900)){
var error__6208__auto___22901 = temp__4126__auto___22900;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"valid-component?","valid-component?",-519675438,null),cljs.core.pr_str.call(null,error__6208__auto___22901)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22901,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22887_22893,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
});})(ufv___22892,output_schema22887_22893,input_schema22888_22894,input_checker22889_22895,output_checker22890_22896))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema22887_22893,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22888_22894], null)));
var ufv___22907 = schema.utils.use_fn_validation;
var output_schema22902_22908 = schema.core.Bool;
var input_schema22903_22909 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"children","children",699969545,null))], null);
var input_checker22904_22910 = schema.core.checker.call(null,input_schema22903_22909);
var output_checker22905_22911 = schema.core.checker.call(null,output_schema22902_22908);
/**
* Inputs: [children]
* Returns: s/Bool
* 
* Returns true if the supplied sequence contains some valid React component,
* false otherwise.
*/
om_bootstrap.util.some_valid_component_QMARK_ = ((function (ufv___22907,output_schema22902_22908,input_schema22903_22909,input_checker22904_22910,output_checker22905_22911){
return (function some_valid_component_QMARK_(G__22906){
var validate__6206__auto__ = ufv___22907.get_cell();
if(cljs.core.truth_(validate__6206__auto__)){
var args__6207__auto___22912 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22906], null);
var temp__4126__auto___22913 = input_checker22904_22910.call(null,args__6207__auto___22912);
if(cljs.core.truth_(temp__4126__auto___22913)){
var error__6208__auto___22914 = temp__4126__auto___22913;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__6208__auto___22914)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22914,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___22912,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22903_22909,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var children = G__22906;
while(true){
return cljs.core.boolean$.call(null,cljs.core.some.call(null,om_bootstrap.util.valid_component_QMARK_,children));
break;
}
})();
if(cljs.core.truth_(validate__6206__auto__)){
var temp__4126__auto___22915 = output_checker22905_22911.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___22915)){
var error__6208__auto___22916 = temp__4126__auto___22915;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"some-valid-component?","some-valid-component?",-171767082,null),cljs.core.pr_str.call(null,error__6208__auto___22916)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22916,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22902_22908,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
});})(ufv___22907,output_schema22902_22908,input_schema22903_22909,input_checker22904_22910,output_checker22905_22911))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.util.some_valid_component_QMARK_),schema.core.make_fn_schema.call(null,output_schema22902_22908,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22903_22909], null)));
/**
* Generates a new function that calls each supplied side-effecting
* function.
*/
om_bootstrap.util.chain_fns = (function chain_fns(l,r){
if(cljs.core.truth_((function (){var and__3794__auto__ = l;
if(cljs.core.truth_(and__3794__auto__)){
return r;
} else {
return and__3794__auto__;
}
})())){
return (function() { 
var G__22917__delegate = function (args){
cljs.core.apply.call(null,l,args);

return cljs.core.apply.call(null,r,args);
};
var G__22917 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__22918__i = 0, G__22918__a = new Array(arguments.length -  0);
while (G__22918__i < G__22918__a.length) {G__22918__a[G__22918__i] = arguments[G__22918__i + 0]; ++G__22918__i;}
  args = new cljs.core.IndexedSeq(G__22918__a,0);
} 
return G__22917__delegate.call(this,args);};
G__22917.cljs$lang$maxFixedArity = 0;
G__22917.cljs$lang$applyTo = (function (arglist__22919){
var args = cljs.core.seq(arglist__22919);
return G__22917__delegate(args);
});
G__22917.cljs$core$IFn$_invoke$arity$variadic = G__22917__delegate;
return G__22917;
})()
;
} else {
var or__3806__auto__ = l;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return r;
}
}
});
/**
* Map of React keyword to a custom function for its merge. Tries to
* do a decent job with event handlers as well; currently only
* handles :on-select :on-click, :on-blur, kebab-cased as om-tools
* prefers.
*/
om_bootstrap.util.react_merges = (function (){var merge_class = (function (l,r){
return [cljs.core.str(l),cljs.core.str(" "),cljs.core.str(r)].join('');
});
var orig_fn = ((function (merge_class){
return (function (l,r){
var or__3806__auto__ = l;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return r;
}
});})(merge_class))
;
var empty_fn = ((function (merge_class,orig_fn){
return (function (_,___$1){
return null;
});})(merge_class,orig_fn))
;
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"ref","ref",1289896967),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"on-select","on-select",-192407950),new cljs.core.Keyword(null,"class","class",-2030961996)],[empty_fn,empty_fn,orig_fn,om_bootstrap.util.chain_fns,om_bootstrap.util.chain_fns,merge_class,cljs.core.merge,om_bootstrap.util.chain_fns,merge_class]);
})();
/**
* Merges two maps that represent React properties. Merges occur
* according to the functions defined in `react-merges`.
* @param {...*} var_args
*/
om_bootstrap.util.merge_props = (function() { 
var merge_props__delegate = function (prop_maps){
var react_merge = (function react_merge(xs){
return om_bootstrap.util.merge_with_fns.call(null,om_bootstrap.util.react_merges,xs);
});
var normalize_class = (function normalize_class(m){
if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996))){
return react_merge.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.dissoc.call(null,m,new cljs.core.Keyword(null,"class","class",-2030961996)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(m)], null)], null));
} else {
return m;
}
});
var ret = react_merge.call(null,cljs.core.map.call(null,normalize_class,prop_maps));
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ret))){
return cljs.core.dissoc.call(null,ret,new cljs.core.Keyword(null,"key","key",-1516042587));
} else {
return ret;
}
};
var merge_props = function (var_args){
var prop_maps = null;
if (arguments.length > 0) {
var G__22920__i = 0, G__22920__a = new Array(arguments.length -  0);
while (G__22920__i < G__22920__a.length) {G__22920__a[G__22920__i] = arguments[G__22920__i + 0]; ++G__22920__i;}
  prop_maps = new cljs.core.IndexedSeq(G__22920__a,0);
} 
return merge_props__delegate.call(this,prop_maps);};
merge_props.cljs$lang$maxFixedArity = 0;
merge_props.cljs$lang$applyTo = (function (arglist__22921){
var prop_maps = cljs.core.seq(arglist__22921);
return merge_props__delegate(prop_maps);
});
merge_props.cljs$core$IFn$_invoke$arity$variadic = merge_props__delegate;
return merge_props;
})()
;
/**
* Returns a basic, shallow copy of the supplied JS object.
*/
om_bootstrap.util.copy_js = (function copy_js(arr){
var ret = (function (){var obj22929 = {};
return obj22929;
})();
var seq__22930_22934 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,arr));
var chunk__22931_22935 = null;
var count__22932_22936 = (0);
var i__22933_22937 = (0);
while(true){
if((i__22933_22937 < count__22932_22936)){
var k_22938 = cljs.core._nth.call(null,chunk__22931_22935,i__22933_22937);
if(cljs.core.truth_(arr.hasOwnProperty(k_22938))){
(ret[k_22938] = (arr[k_22938]));
} else {
}

var G__22939 = seq__22930_22934;
var G__22940 = chunk__22931_22935;
var G__22941 = count__22932_22936;
var G__22942 = (i__22933_22937 + (1));
seq__22930_22934 = G__22939;
chunk__22931_22935 = G__22940;
count__22932_22936 = G__22941;
i__22933_22937 = G__22942;
continue;
} else {
var temp__4126__auto___22943 = cljs.core.seq.call(null,seq__22930_22934);
if(temp__4126__auto___22943){
var seq__22930_22944__$1 = temp__4126__auto___22943;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__22930_22944__$1)){
var c__4593__auto___22945 = cljs.core.chunk_first.call(null,seq__22930_22944__$1);
var G__22946 = cljs.core.chunk_rest.call(null,seq__22930_22944__$1);
var G__22947 = c__4593__auto___22945;
var G__22948 = cljs.core.count.call(null,c__4593__auto___22945);
var G__22949 = (0);
seq__22930_22934 = G__22946;
chunk__22931_22935 = G__22947;
count__22932_22936 = G__22948;
i__22933_22937 = G__22949;
continue;
} else {
var k_22950 = cljs.core.first.call(null,seq__22930_22944__$1);
if(cljs.core.truth_(arr.hasOwnProperty(k_22950))){
(ret[k_22950] = (arr[k_22950]));
} else {
}

var G__22951 = cljs.core.next.call(null,seq__22930_22944__$1);
var G__22952 = null;
var G__22953 = (0);
var G__22954 = (0);
seq__22930_22934 = G__22951;
chunk__22931_22935 = G__22952;
count__22932_22936 = G__22953;
i__22933_22937 = G__22954;
continue;
}
} else {
}
}
break;
}

return ret;
});
om_bootstrap.util.create_element = (function() {
var create_element = null;
var create_element__1 = (function (child){
return create_element.call(null,child,null);
});
var create_element__2 = (function (child,props){
return React.createElement(child.type,props);
});
create_element = function(child,props){
switch(arguments.length){
case 1:
return create_element__1.call(this,child);
case 2:
return create_element__2.call(this,child,props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
create_element.cljs$core$IFn$_invoke$arity$1 = create_element__1;
create_element.cljs$core$IFn$_invoke$arity$2 = create_element__2;
return create_element;
})()
;
/**
* Merges the supplied extra properties into the underlying Om cursor
* and calls the constructor to clone the React component.
* 
* Requires that the supplied child has an Om cursor attached to it!
*/
om_bootstrap.util.clone_om = (function clone_om(child,extra_props){
var om_props = om_bootstrap.util.get_props.call(null,child);
var props = {};
var cloned_child = goog.object.clone(child);
goog.object.extend(props,child.props,{"__om_cursor": ((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,om_props):om_bootstrap.util.merge_props.call(null,om_props,extra_props))});

goog.object.extend(cloned_child,{"props": props});

return cloned_child;
});
/**
* This function is called if the React component child was NOT
* generated by Om. Merges the supplied properties into the -props
* field of the supplied React component and creates a shallow copy.
*/
om_bootstrap.util.clone_basic_react = (function clone_basic_react(child,extra_props){
var props = cljs.core.js__GT_clj.call(null,child.props,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
var new_props = cljs.core.merge.call(null,((cljs.core.fn_QMARK_.call(null,extra_props))?extra_props.call(null,props):om_bootstrap.util.merge_props.call(null,props,extra_props)),(function (){var temp__4126__auto__ = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(temp__4126__auto__)){
var children = temp__4126__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"children","children",-940561982),children], null);
} else {
return null;
}
})());
return om_bootstrap.util.create_element.call(null,child,cljs.core.clj__GT_js.call(null,new_props));
});
/**
* Returns a shallow copy of the supplied component (child); the copy
* will have any props provided by extra-props merged in. Props are
* merged in the same manner as merge-props, so props like :class will
* be merged intelligently.
* 
* extra-props can be a function of the old props that returns new
* props, OR it can be a map of props.
* 
* If the supplied child is an Om component, any supplied extra
* properties will be merged into the underlying cursor and accessible
* in the Om constructor.
*/
om_bootstrap.util.clone_with_props = (function() {
var clone_with_props = null;
var clone_with_props__1 = (function (child){
return clone_with_props.call(null,child,cljs.core.PersistentArrayMap.EMPTY);
});
var clone_with_props__2 = (function (child,extra_props){
if(cljs.core.not.call(null,om_bootstrap.util.strict_valid_component_QMARK_.call(null,child))){
return child;
} else {
if(om_bootstrap.util.om_component_QMARK_.call(null,child)){
return om_bootstrap.util.clone_om.call(null,child,extra_props);
} else {
if((cljs.core.map_QMARK_.call(null,extra_props)) && (cljs.core.empty_QMARK_.call(null,extra_props))){
return om_bootstrap.util.create_element.call(null,child,child.props);
} else {
return om_bootstrap.util.clone_basic_react.call(null,child,extra_props);

}
}
}
});
clone_with_props = function(child,extra_props){
switch(arguments.length){
case 1:
return clone_with_props__1.call(this,child);
case 2:
return clone_with_props__2.call(this,child,extra_props);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
clone_with_props.cljs$core$IFn$_invoke$arity$1 = clone_with_props__1;
clone_with_props.cljs$core$IFn$_invoke$arity$2 = clone_with_props__2;
return clone_with_props;
})()
;

//# sourceMappingURL=util.js.map