// Compiled by ClojureScript 0.0-2816 {}
goog.provide('om_bootstrap.types');
goog.require('cljs.core');
goog.require('schema.core');
var ufv___22762 = schema.utils.use_fn_validation;
var output_schema22757_22763 = schema.core.Any;
var input_schema22758_22764 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);
var input_checker22759_22765 = schema.core.checker.call(null,input_schema22758_22764);
var output_checker22760_22766 = schema.core.checker.call(null,output_schema22757_22763);
/**
* Inputs: [schema :- {s/Any s/Any}]
* 
* Returns all keys from a schema.
*/
om_bootstrap.types.schema_keys = ((function (ufv___22762,output_schema22757_22763,input_schema22758_22764,input_checker22759_22765,output_checker22760_22766){
return (function schema_keys(G__22761){
var validate__6206__auto__ = ufv___22762.get_cell();
if(cljs.core.truth_(validate__6206__auto__)){
var args__6207__auto___22767 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22761], null);
var temp__4126__auto___22768 = input_checker22759_22765.call(null,args__6207__auto___22767);
if(cljs.core.truth_(temp__4126__auto___22768)){
var error__6208__auto___22769 = temp__4126__auto___22768;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__6208__auto___22769)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22769,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___22767,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22758_22764,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var schema__$1 = G__22761;
while(true){
return cljs.core.map.call(null,((function (validate__6206__auto__,ufv___22762,output_schema22757_22763,input_schema22758_22764,input_checker22759_22765,output_checker22760_22766){
return (function (k){
if(schema.core.optional_key_QMARK_.call(null,k)){
return new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(k);
} else {
return k;
}
});})(validate__6206__auto__,ufv___22762,output_schema22757_22763,input_schema22758_22764,input_checker22759_22765,output_checker22760_22766))
,cljs.core.keys.call(null,schema__$1));
break;
}
})();
if(cljs.core.truth_(validate__6206__auto__)){
var temp__4126__auto___22770 = output_checker22760_22766.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___22770)){
var error__6208__auto___22771 = temp__4126__auto___22770;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"schema-keys","schema-keys",947810359,null),cljs.core.pr_str.call(null,error__6208__auto___22771)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22771,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22757_22763,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
});})(ufv___22762,output_schema22757_22763,input_schema22758_22764,input_checker22759_22765,output_checker22760_22766))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.schema_keys),schema.core.make_fn_schema.call(null,output_schema22757_22763,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22758_22764], null)));
var ufv___22777 = schema.utils.use_fn_validation;
var output_schema22772_22778 = schema.core.Any;
var input_schema22773_22779 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null))], null);
var input_checker22774_22780 = schema.core.checker.call(null,input_schema22773_22779);
var output_checker22775_22781 = schema.core.checker.call(null,output_schema22772_22778);
/**
* Inputs: [schema]
* 
* Returns a map schema that accepts the supplied map schema, plus any
* other optional keys that show up in the map. Such a schema can only
* enforce that required keys are missing.
*/
om_bootstrap.types.at_least = ((function (ufv___22777,output_schema22772_22778,input_schema22773_22779,input_checker22774_22780,output_checker22775_22781){
return (function at_least(G__22776){
var validate__6206__auto__ = ufv___22777.get_cell();
if(cljs.core.truth_(validate__6206__auto__)){
var args__6207__auto___22782 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22776], null);
var temp__4126__auto___22783 = input_checker22774_22780.call(null,args__6207__auto___22782);
if(cljs.core.truth_(temp__4126__auto___22783)){
var error__6208__auto___22784 = temp__4126__auto___22783;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__6208__auto___22784)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22784,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___22782,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22773_22779,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var schema__$1 = G__22776;
while(true){
return cljs.core.assoc.call(null,schema__$1,schema.core.Any,schema.core.Any);
break;
}
})();
if(cljs.core.truth_(validate__6206__auto__)){
var temp__4126__auto___22785 = output_checker22775_22781.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___22785)){
var error__6208__auto___22786 = temp__4126__auto___22785;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"at-least","at-least",1907728373,null),cljs.core.pr_str.call(null,error__6208__auto___22786)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22786,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22772_22778,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
});})(ufv___22777,output_schema22772_22778,input_schema22773_22779,input_checker22774_22780,output_checker22775_22781))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.at_least),schema.core.make_fn_schema.call(null,output_schema22772_22778,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22773_22779], null)));
om_bootstrap.types.Component = schema.core.named.call(null,schema.core.Any,"Alias for an om component, since I don't know what type to put here.");
om_bootstrap.types.Renderable = schema.core.named.call(null,schema.core.Any,"Anything that can get rendered.");
/**
* Map of keyword to the proper bootstrap class name.
*/
om_bootstrap.types.class_map = cljs.core.PersistentHashMap.fromArrays(["alert","label","form","progress-bar","modal","navbar","button-toolbar","panel-group","nav","column","row","input-group","panel","well","button-group","button","glyphicon"],["alert","label","form","progress-bar","modal","navbar","btn-toolbar","panel-group","nav","col","row","input-group","panel","well","btn-group","btn","glyphicon"]);
/**
* Map of style keywords -> styles.
*/
om_bootstrap.types.style_map = cljs.core.PersistentHashMap.fromArrays(["success","warning","inline","pills","info","tabs","primary","danger","link","default"],["success","warning","inline","pills","info","tabs","primary","danger","link","default"]);
om_bootstrap.types.size_map = new cljs.core.PersistentArrayMap(null, 4, ["large","lg","medium","md","small","sm","xsmall","xs"], null);
om_bootstrap.types.BSClass = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.class_map));
om_bootstrap.types.BSStyle = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.style_map));
om_bootstrap.types.BSSize = cljs.core.apply.call(null,schema.core.enum$,cljs.core.keys.call(null,om_bootstrap.types.size_map));
om_bootstrap.types.BootstrapClass = new cljs.core.PersistentArrayMap.fromArray([schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590)),om_bootstrap.types.BSClass,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998)),om_bootstrap.types.BSStyle,schema.core.optional_key.call(null,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)),om_bootstrap.types.BSSize], true, false);
/**
* Applies all default bootstrap options to the supplied schema. If
* the incoming schema has one of the the keys from BootstrapClass,
* that wins (even if it's required).
*/
om_bootstrap.types.bootstrap = (function bootstrap(schema__$1){
var bootstrap_schema = cljs.core.apply.call(null,cljs.core.dissoc,om_bootstrap.types.BootstrapClass,cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,cljs.core.select_keys.call(null,schema__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"bs-class","bs-class",1438130590),new cljs.core.Keyword(null,"bs-style","bs-style",1424423998),new cljs.core.Keyword(null,"bs-size","bs-size",1567732754)], null)))));
return om_bootstrap.types.at_least.call(null,cljs.core.merge.call(null,bootstrap_schema,schema__$1));
});
var ufv___22799 = schema.utils.use_fn_validation;
var output_schema22787_22800 = schema.core.pair.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"om-bootstrap options.",new cljs.core.PersistentArrayMap.fromArray([schema.core.Any,schema.core.Any], true, false),"all other props.");
var input_schema22788_22801 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);
var input_schema22793_22802 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"schema","schema",58529736,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"defaults","defaults",-1678408555,null))], null);
var input_checker22789_22803 = schema.core.checker.call(null,input_schema22788_22801);
var output_checker22790_22804 = schema.core.checker.call(null,output_schema22787_22800);
var input_checker22794_22805 = schema.core.checker.call(null,input_schema22793_22802);
var output_checker22795_22806 = schema.core.checker.call(null,output_schema22787_22800);
/**
* Inputs: ([schema opts] [schema opts defaults])
* Returns: (s/pair {s/Any s/Any} "om-bootstrap options." {s/Any s/Any} "all other props.")
* 
* Returns two maps; the first is all of the schema options, the
* second is the REST of the options.
*/
om_bootstrap.types.separate = ((function (ufv___22799,output_schema22787_22800,input_schema22788_22801,input_schema22793_22802,input_checker22789_22803,output_checker22790_22804,input_checker22794_22805,output_checker22795_22806){
return (function() {
var separate = null;
var separate__2 = (function (G__22791,G__22792){
var validate__6206__auto__ = ufv___22799.get_cell();
if(cljs.core.truth_(validate__6206__auto__)){
var args__6207__auto___22807 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22791,G__22792], null);
var temp__4126__auto___22808 = input_checker22789_22803.call(null,args__6207__auto___22807);
if(cljs.core.truth_(temp__4126__auto___22808)){
var error__6208__auto___22809 = temp__4126__auto___22808;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__6208__auto___22809)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22809,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___22807,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22788_22801,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var schema__$1 = G__22791;
var opts = G__22792;
while(true){
return separate.call(null,schema__$1,opts,cljs.core.PersistentArrayMap.EMPTY);
break;
}
})();
if(cljs.core.truth_(validate__6206__auto__)){
var temp__4126__auto___22810 = output_checker22790_22804.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___22810)){
var error__6208__auto___22811 = temp__4126__auto___22810;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__6208__auto___22811)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22811,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22787_22800,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
});
var separate__3 = (function (G__22796,G__22797,G__22798){
var validate__6206__auto__ = ufv___22799.get_cell();
if(cljs.core.truth_(validate__6206__auto__)){
var args__6207__auto___22812 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22796,G__22797,G__22798], null);
var temp__4126__auto___22813 = input_checker22794_22805.call(null,args__6207__auto___22812);
if(cljs.core.truth_(temp__4126__auto___22813)){
var error__6208__auto___22814 = temp__4126__auto___22813;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__6208__auto___22814)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22814,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___22812,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22793_22802,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var schema__$1 = G__22796;
var opts = G__22797;
var defaults = G__22798;
while(true){
var ks = cljs.core.set.call(null,om_bootstrap.types.schema_keys.call(null,om_bootstrap.types.bootstrap.call(null,schema__$1)));
var opts__$1 = cljs.core.merge.call(null,defaults,opts);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1)),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.call(null,cljs.core.comp.call(null,ks,cljs.core.key),opts__$1))], null);
break;
}
})();
if(cljs.core.truth_(validate__6206__auto__)){
var temp__4126__auto___22815 = output_checker22795_22806.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___22815)){
var error__6208__auto___22816 = temp__4126__auto___22815;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"separate","separate",15703118,null),cljs.core.pr_str.call(null,error__6208__auto___22816)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22816,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22787_22800,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
});
separate = function(G__22796,G__22797,G__22798){
switch(arguments.length){
case 2:
return separate__2.call(this,G__22796,G__22797);
case 3:
return separate__3.call(this,G__22796,G__22797,G__22798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
separate.cljs$core$IFn$_invoke$arity$2 = separate__2;
separate.cljs$core$IFn$_invoke$arity$3 = separate__3;
return separate;
})()
;})(ufv___22799,output_schema22787_22800,input_schema22788_22801,input_schema22793_22802,input_checker22789_22803,output_checker22790_22804,input_checker22794_22805,output_checker22795_22806))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.separate),schema.core.make_fn_schema.call(null,output_schema22787_22800,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22788_22801,input_schema22793_22802], null)));
var ufv___22830 = schema.utils.use_fn_validation;
var output_schema22817_22831 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Str,schema.core.Bool], true, false);
var input_schema22818_22832 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,om_bootstrap.types.at_least.call(null,om_bootstrap.types.BootstrapClass),new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);
var input_checker22819_22833 = schema.core.checker.call(null,input_schema22818_22832);
var output_checker22820_22834 = schema.core.checker.call(null,output_schema22817_22831);
/**
* Inputs: [{:keys [bs-class bs-style bs-size]} :- (at-least BootstrapClass)]
* Returns: {s/Str s/Bool}
* 
* Returns input for class-set.
*/
om_bootstrap.types.bs_class_set = ((function (ufv___22830,output_schema22817_22831,input_schema22818_22832,input_checker22819_22833,output_checker22820_22834){
return (function bs_class_set(G__22821){
var validate__6206__auto__ = ufv___22830.get_cell();
if(cljs.core.truth_(validate__6206__auto__)){
var args__6207__auto___22835 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22821], null);
var temp__4126__auto___22836 = input_checker22819_22833.call(null,args__6207__auto___22835);
if(cljs.core.truth_(temp__4126__auto___22836)){
var error__6208__auto___22837 = temp__4126__auto___22836;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__6208__auto___22837)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22837,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___22835,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22818_22832,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var G__22827 = G__22821;
var map__22828 = G__22827;
var map__22828__$1 = ((cljs.core.seq_QMARK_.call(null,map__22828))?cljs.core.apply.call(null,cljs.core.hash_map,map__22828):map__22828);
var bs_size = cljs.core.get.call(null,map__22828__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var bs_style = cljs.core.get.call(null,map__22828__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_class = cljs.core.get.call(null,map__22828__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var G__22827__$1 = G__22827;
while(true){
var map__22829 = G__22827__$1;
var map__22829__$1 = ((cljs.core.seq_QMARK_.call(null,map__22829))?cljs.core.apply.call(null,cljs.core.hash_map,map__22829):map__22829);
var bs_size__$1 = cljs.core.get.call(null,map__22829__$1,new cljs.core.Keyword(null,"bs-size","bs-size",1567732754));
var bs_style__$1 = cljs.core.get.call(null,map__22829__$1,new cljs.core.Keyword(null,"bs-style","bs-style",1424423998));
var bs_class__$1 = cljs.core.get.call(null,map__22829__$1,new cljs.core.Keyword(null,"bs-class","bs-class",1438130590));
var temp__4124__auto__ = om_bootstrap.types.class_map.call(null,bs_class__$1);
if(cljs.core.truth_(temp__4124__auto__)){
var klass = temp__4124__auto__;
var prefix = [cljs.core.str(cljs.core.name.call(null,klass)),cljs.core.str("-")].join('');
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap.fromArray([klass,true], true, false),(function (){var temp__4126__auto__ = om_bootstrap.types.size_map.call(null,bs_size__$1);
if(cljs.core.truth_(temp__4126__auto__)){
var size = temp__4126__auto__;
return new cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,size))].join(''),true], true, false);
} else {
return null;
}
})(),(function (){var temp__4126__auto__ = om_bootstrap.types.style_map.call(null,bs_style__$1);
if(cljs.core.truth_(temp__4126__auto__)){
var style = temp__4126__auto__;
return new cljs.core.PersistentArrayMap.fromArray([[cljs.core.str(prefix),cljs.core.str(cljs.core.name.call(null,style))].join(''),true], true, false);
} else {
return null;
}
})());
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
break;
}
})();
if(cljs.core.truth_(validate__6206__auto__)){
var temp__4126__auto___22838 = output_checker22820_22834.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___22838)){
var error__6208__auto___22839 = temp__4126__auto___22838;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"bs-class-set","bs-class-set",1457832630,null),cljs.core.pr_str.call(null,error__6208__auto___22839)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22839,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22817_22831,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
});})(ufv___22830,output_schema22817_22831,input_schema22818_22832,input_checker22819_22833,output_checker22820_22834))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.types.bs_class_set),schema.core.make_fn_schema.call(null,output_schema22817_22831,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22818_22832], null)));

//# sourceMappingURL=types.js.map