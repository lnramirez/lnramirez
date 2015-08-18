// Compiled by ClojureScript 0.0-2816 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__6236__6237__auto__){
var G__22965 = p1__6236__6237__auto__;
if(G__22965){
var bit__4487__auto__ = null;
if(cljs.core.truth_((function (){var or__3806__auto__ = bit__4487__auto__;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return G__22965.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__22965.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__22965);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__22965);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__22966_SHARP_){
return (cljs.core.val.call(null,p1__22966_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__22968 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__22968,(0),null);
var v = cljs.core.nth.call(null,vec__22968,(1),null);
var p = vec__22968;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___22974 = schema.utils.use_fn_validation;
var output_schema22969_22975 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema22970_22976 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker22971_22977 = schema.core.checker.call(null,input_schema22970_22976);
var output_checker22972_22978 = schema.core.checker.call(null,output_schema22969_22975);
/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___22974,output_schema22969_22975,input_schema22970_22976,input_checker22971_22977,output_checker22972_22978){
return (function unwrap_schema_form_key(G__22973){
var validate__6206__auto__ = ufv___22974.get_cell();
if(cljs.core.truth_(validate__6206__auto__)){
var args__6207__auto___22979 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22973], null);
var temp__4126__auto___22980 = input_checker22971_22977.call(null,args__6207__auto___22979);
if(cljs.core.truth_(temp__4126__auto___22980)){
var error__6208__auto___22981 = temp__4126__auto___22980;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6208__auto___22981)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22981,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___22979,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22970_22976,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var k = G__22973;
while(true){
if(schema.core.specific_key_QMARK_.call(null,k)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__6206__auto__)){
var temp__4126__auto___22982 = output_checker22972_22978.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___22982)){
var error__6208__auto___22983 = temp__4126__auto___22982;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__6208__auto___22983)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22983,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22969_22975,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
});})(ufv___22974,output_schema22969_22975,input_schema22970_22976,input_checker22971_22977,output_checker22972_22978))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema22969_22975,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22970_22976], null)));
var ufv___22989 = schema.utils.use_fn_validation;
var output_schema22984_22990 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema22985_22991 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker22986_22992 = schema.core.checker.call(null,input_schema22985_22991);
var output_checker22987_22993 = schema.core.checker.call(null,output_schema22984_22990);
/**
* Inputs: [s]
* Returns: {s/Keyword s/Bool}
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___22989,output_schema22984_22990,input_schema22985_22991,input_checker22986_22992,output_checker22987_22993){
return (function explicit_schema_key_map(G__22988){
var validate__6206__auto__ = ufv___22989.get_cell();
if(cljs.core.truth_(validate__6206__auto__)){
var args__6207__auto___22994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__22988], null);
var temp__4126__auto___22995 = input_checker22986_22992.call(null,args__6207__auto___22994);
if(cljs.core.truth_(temp__4126__auto___22995)){
var error__6208__auto___22996 = temp__4126__auto___22995;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6208__auto___22996)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22996,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___22994,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema22985_22991,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var s = G__22988;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__6206__auto__)){
var temp__4126__auto___22997 = output_checker22987_22993.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___22997)){
var error__6208__auto___22998 = temp__4126__auto___22997;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__6208__auto___22998)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___22998,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22984_22990,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
});})(ufv___22989,output_schema22984_22990,input_schema22985_22991,input_checker22986_22992,output_checker22987_22993))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema22984_22990,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema22985_22991], null)));
var ufv___23004 = schema.utils.use_fn_validation;
var output_schema22999_23005 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema23000_23006 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker23001_23007 = schema.core.checker.call(null,input_schema23000_23006);
var output_checker23002_23008 = schema.core.checker.call(null,output_schema22999_23005);
/**
* Inputs: [s :- {s/Keyword s/Bool}]
* Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___23004,output_schema22999_23005,input_schema23000_23006,input_checker23001_23007,output_checker23002_23008){
return (function split_schema_keys(G__23003){
var validate__6206__auto__ = ufv___23004.get_cell();
if(cljs.core.truth_(validate__6206__auto__)){
var args__6207__auto___23009 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23003], null);
var temp__4126__auto___23010 = input_checker23001_23007.call(null,args__6207__auto___23009);
if(cljs.core.truth_(temp__4126__auto___23010)){
var error__6208__auto___23011 = temp__4126__auto___23010;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6208__auto___23011)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___23011,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___23009,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23000_23006,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var s = G__23003;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__6206__auto__)){
var temp__4126__auto___23012 = output_checker23002_23008.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___23012)){
var error__6208__auto___23013 = temp__4126__auto___23012;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__6208__auto___23013)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___23013,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema22999_23005,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
});})(ufv___23004,output_schema22999_23005,input_schema23000_23006,input_checker23001_23007,output_checker23002_23008))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema22999_23005,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23000_23006], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__23017){
var vec__23018 = p__23017;
var k = cljs.core.nth.call(null,vec__23018,(0),null);
var v = cljs.core.nth.call(null,vec__23018,(1),null);
var pk = key_project.call(null,k);
var temp__4124__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4124__auto__)){
var vec__23019 = temp__4124__auto__;
var ok = cljs.core.nth.call(null,vec__23019,(0),null);
var ov = cljs.core.nth.call(null,vec__23019,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;
if (arguments.length > 3) {
var G__23020__i = 0, G__23020__a = new Array(arguments.length -  3);
while (G__23020__i < G__23020__a.length) {G__23020__a[G__23020__i] = arguments[G__23020__i + 3]; ++G__23020__i;}
  maps = new cljs.core.IndexedSeq(G__23020__a,0);
} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__23021){
var key_project = cljs.core.first(arglist__23021);
arglist__23021 = cljs.core.next(arglist__23021);
var key_combine = cljs.core.first(arglist__23021);
arglist__23021 = cljs.core.next(arglist__23021);
var val_combine = cljs.core.first(arglist__23021);
var maps = cljs.core.rest(arglist__23021);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___23029 = schema.utils.use_fn_validation;
var output_schema23023_23030 = plumbing.fnk.schema.InputSchema;
var input_schema23024_23031 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker23025_23032 = schema.core.checker.call(null,input_schema23024_23031);
var output_checker23026_23033 = schema.core.checker.call(null,output_schema23023_23030);
/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___23029,output_schema23023_23030,input_schema23024_23031,input_checker23025_23032,output_checker23026_23033){
return (function union_input_schemata(G__23027,G__23028){
var validate__6206__auto__ = ufv___23029.get_cell();
if(cljs.core.truth_(validate__6206__auto__)){
var args__6207__auto___23034 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23027,G__23028], null);
var temp__4126__auto___23035 = input_checker23025_23032.call(null,args__6207__auto___23034);
if(cljs.core.truth_(temp__4126__auto___23035)){
var error__6208__auto___23036 = temp__4126__auto___23035;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6208__auto___23036)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___23036,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___23034,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23024_23031,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var i1 = G__23027;
var i2 = G__23028;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__6206__auto__,ufv___23029,output_schema23023_23030,input_schema23024_23031,input_checker23025_23032,output_checker23026_23033){
return (function (p1__23022_SHARP_){
if(schema.core.specific_key_QMARK_.call(null,p1__23022_SHARP_)){
return schema.core.explicit_schema_key.call(null,p1__23022_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__6206__auto__,ufv___23029,output_schema23023_23030,input_schema23024_23031,input_checker23025_23032,output_checker23026_23033))
,((function (validate__6206__auto__,ufv___23029,output_schema23023_23030,input_schema23024_23031,input_checker23025_23032,output_checker23026_23033){
return (function (k1,k2){
if(schema.core.required_key_QMARK_.call(null,k1)){
return k1;
} else {
if(schema.core.required_key_QMARK_.call(null,k2)){
return k2;
} else {
if(schema.core.optional_key_QMARK_.call(null,k1)){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__6206__auto__,ufv___23029,output_schema23023_23030,input_schema23024_23031,input_checker23025_23032,output_checker23026_23033))
,((function (validate__6206__auto__,ufv___23029,output_schema23023_23030,input_schema23024_23031,input_checker23025_23032,output_checker23026_23033){
return (function (s1,s2){
if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2))){
return union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__6206__auto__,ufv___23029,output_schema23023_23030,input_schema23024_23031,input_checker23025_23032,output_checker23026_23033))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__6206__auto__)){
var temp__4126__auto___23037 = output_checker23026_23033.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___23037)){
var error__6208__auto___23038 = temp__4126__auto___23037;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__6208__auto___23038)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___23038,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23023_23030,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
});})(ufv___23029,output_schema23023_23030,input_schema23024_23031,input_checker23025_23032,output_checker23026_23033))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema23023_23030,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23024_23031], null)));
var ufv___23044 = schema.utils.use_fn_validation;
var output_schema23039_23045 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema23040_23046 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker23041_23047 = schema.core.checker.call(null,input_schema23040_23046);
var output_checker23042_23048 = schema.core.checker.call(null,output_schema23039_23045);
/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___23044,output_schema23039_23045,input_schema23040_23046,input_checker23041_23047,output_checker23042_23048){
return (function required_toplevel_keys(G__23043){
var validate__6206__auto__ = ufv___23044.get_cell();
if(cljs.core.truth_(validate__6206__auto__)){
var args__6207__auto___23049 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23043], null);
var temp__4126__auto___23050 = input_checker23041_23047.call(null,args__6207__auto___23049);
if(cljs.core.truth_(temp__4126__auto___23050)){
var error__6208__auto___23051 = temp__4126__auto___23050;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6208__auto___23051)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___23051,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___23049,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23040_23046,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var input_schema = G__23043;
while(true){
return cljs.core.keep.call(null,((function (validate__6206__auto__,ufv___23044,output_schema23039_23045,input_schema23040_23046,input_checker23041_23047,output_checker23042_23048){
return (function (k){
if(schema.core.required_key_QMARK_.call(null,k)){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__6206__auto__,ufv___23044,output_schema23039_23045,input_schema23040_23046,input_checker23041_23047,output_checker23042_23048))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__6206__auto__)){
var temp__4126__auto___23052 = output_checker23042_23048.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___23052)){
var error__6208__auto___23053 = temp__4126__auto___23052;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__6208__auto___23053)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___23053,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23039_23045,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
});})(ufv___23044,output_schema23039_23045,input_schema23040_23046,input_checker23041_23047,output_checker23042_23048))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema23039_23045,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23040_23046], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4562__auto__ = (function iter__23062(s__23063){
return (new cljs.core.LazySeq(null,(function (){
var s__23063__$1 = s__23063;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23063__$1);
if(temp__4126__auto__){
var s__23063__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23063__$2)){
var c__4560__auto__ = cljs.core.chunk_first.call(null,s__23063__$2);
var size__4561__auto__ = cljs.core.count.call(null,c__4560__auto__);
var b__23065 = cljs.core.chunk_buffer.call(null,size__4561__auto__);
if((function (){var i__23064 = (0);
while(true){
if((i__23064 < size__4561__auto__)){
var vec__23068 = cljs.core._nth.call(null,c__4560__auto__,i__23064);
var k = cljs.core.nth.call(null,vec__23068,(0),null);
var v = cljs.core.nth.call(null,vec__23068,(1),null);
cljs.core.chunk_append.call(null,b__23065,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));

var G__23070 = (i__23064 + (1));
i__23064 = G__23070;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23065),iter__23062.call(null,cljs.core.chunk_rest.call(null,s__23063__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23065),null);
}
} else {
var vec__23069 = cljs.core.first.call(null,s__23063__$2);
var k = cljs.core.nth.call(null,vec__23069,(0),null);
var v = cljs.core.nth.call(null,vec__23069,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__23062.call(null,cljs.core.rest.call(null,s__23063__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4562__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4562__auto__ = (function iter__23079(s__23080){
return (new cljs.core.LazySeq(null,(function (){
var s__23080__$1 = s__23080;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23080__$1);
if(temp__4126__auto__){
var s__23080__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23080__$2)){
var c__4560__auto__ = cljs.core.chunk_first.call(null,s__23080__$2);
var size__4561__auto__ = cljs.core.count.call(null,c__4560__auto__);
var b__23082 = cljs.core.chunk_buffer.call(null,size__4561__auto__);
if((function (){var i__23081 = (0);
while(true){
if((i__23081 < size__4561__auto__)){
var vec__23085 = cljs.core._nth.call(null,c__4560__auto__,i__23081);
var k = cljs.core.nth.call(null,vec__23085,(0),null);
var v = cljs.core.nth.call(null,vec__23085,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__23082,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__23087 = (i__23081 + (1));
i__23081 = G__23087;
continue;
} else {
var G__23088 = (i__23081 + (1));
i__23081 = G__23088;
continue;
}
} else {
var G__23089 = (i__23081 + (1));
i__23081 = G__23089;
continue;
}
} else {
var G__23090 = (i__23081 + (1));
i__23081 = G__23090;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23082),iter__23079.call(null,cljs.core.chunk_rest.call(null,s__23080__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23082),null);
}
} else {
var vec__23086 = cljs.core.first.call(null,s__23080__$2);
var k = cljs.core.nth.call(null,vec__23086,(0),null);
var v = cljs.core.nth.call(null,vec__23086,(1),null);
if(schema.core.specific_key_QMARK_.call(null,k)){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if((required_QMARK_) || (present_QMARK_)){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__23079.call(null,cljs.core.rest.call(null,s__23080__$2)));
} else {
var G__23091 = cljs.core.rest.call(null,s__23080__$2);
s__23080__$1 = G__23091;
continue;
}
} else {
var G__23092 = cljs.core.rest.call(null,s__23080__$2);
s__23080__$1 = G__23092;
continue;
}
} else {
var G__23093 = cljs.core.rest.call(null,s__23080__$2);
s__23080__$1 = G__23093;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4562__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___23116 = schema.utils.use_fn_validation;
var output_schema23094_23117 = schema.core.Any;
var input_schema23095_23118 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker23096_23119 = schema.core.checker.call(null,input_schema23095_23118);
var output_checker23097_23120 = schema.core.checker.call(null,output_schema23094_23117);
/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___23116,output_schema23094_23117,input_schema23095_23118,input_checker23096_23119,output_checker23097_23120){
return (function compose_schemata(G__23098,G__23099){
var validate__6206__auto__ = true;
if(validate__6206__auto__){
var args__6207__auto___23121 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23098,G__23099], null);
var temp__4126__auto___23122 = input_checker23096_23119.call(null,args__6207__auto___23121);
if(cljs.core.truth_(temp__4126__auto___23122)){
var error__6208__auto___23123 = temp__4126__auto___23122;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6208__auto___23123)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___23123,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___23121,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23095_23118,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var G__23110 = G__23098;
var vec__23112 = G__23110;
var i2 = cljs.core.nth.call(null,vec__23112,(0),null);
var o2 = cljs.core.nth.call(null,vec__23112,(1),null);
var G__23111 = G__23099;
var vec__23113 = G__23111;
var i1 = cljs.core.nth.call(null,vec__23113,(0),null);
var o1 = cljs.core.nth.call(null,vec__23113,(1),null);
var G__23110__$1 = G__23110;
var G__23111__$1 = G__23111;
while(true){
var vec__23114 = G__23110__$1;
var i2__$1 = cljs.core.nth.call(null,vec__23114,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__23114,(1),null);
var vec__23115 = G__23111__$1;
var i1__$1 = cljs.core.nth.call(null,vec__23115,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__23115,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__6206__auto__){
var temp__4126__auto___23124 = output_checker23097_23120.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___23124)){
var error__6208__auto___23125 = temp__4126__auto___23124;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__6208__auto___23125)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___23125,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23094_23117,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
});})(ufv___23116,output_schema23094_23117,input_schema23095_23118,input_checker23096_23119,output_checker23097_23120))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema23094_23117,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23095_23118], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___23204 = schema.utils.use_fn_validation;
var output_schema23126_23205 = schema.core.Any;
var input_schema23127_23206 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker23128_23207 = schema.core.checker.call(null,input_schema23127_23206);
var output_checker23129_23208 = schema.core.checker.call(null,output_schema23126_23205);
/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___23204,output_schema23126_23205,input_schema23127_23206,input_checker23128_23207,output_checker23129_23208){
return (function split_schema(G__23130,G__23131){
var validate__6206__auto__ = ufv___23204.get_cell();
if(cljs.core.truth_(validate__6206__auto__)){
var args__6207__auto___23209 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23130,G__23131], null);
var temp__4126__auto___23210 = input_checker23128_23207.call(null,args__6207__auto___23209);
if(cljs.core.truth_(temp__4126__auto___23210)){
var error__6208__auto___23211 = temp__4126__auto___23210;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6208__auto___23211)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___23211,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___23209,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23127_23206,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var s = G__23130;
var ks = G__23131;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__4562__auto__ = ((function (ks__$1,validate__6206__auto__,ufv___23204,output_schema23126_23205,input_schema23127_23206,input_checker23128_23207,output_checker23129_23208){
return (function iter__23168(s__23169){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__6206__auto__,ufv___23204,output_schema23126_23205,input_schema23127_23206,input_checker23128_23207,output_checker23129_23208){
return (function (){
var s__23169__$1 = s__23169;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23169__$1);
if(temp__4126__auto__){
var s__23169__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23169__$2)){
var c__4560__auto__ = cljs.core.chunk_first.call(null,s__23169__$2);
var size__4561__auto__ = cljs.core.count.call(null,c__4560__auto__);
var b__23171 = cljs.core.chunk_buffer.call(null,size__4561__auto__);
if((function (){var i__23170 = (0);
while(true){
if((i__23170 < size__4561__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__4560__auto__,i__23170);
cljs.core.chunk_append.call(null,b__23171,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4562__auto__ = ((function (i__23170,in_QMARK_,c__4560__auto__,size__4561__auto__,b__23171,s__23169__$2,temp__4126__auto__,ks__$1,validate__6206__auto__,ufv___23204,output_schema23126_23205,input_schema23127_23206,input_checker23128_23207,output_checker23129_23208){
return (function iter__23188(s__23189){
return (new cljs.core.LazySeq(null,((function (i__23170,in_QMARK_,c__4560__auto__,size__4561__auto__,b__23171,s__23169__$2,temp__4126__auto__,ks__$1,validate__6206__auto__,ufv___23204,output_schema23126_23205,input_schema23127_23206,input_checker23128_23207,output_checker23129_23208){
return (function (){
var s__23189__$1 = s__23189;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23189__$1);
if(temp__4126__auto____$1){
var s__23189__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23189__$2)){
var c__4560__auto____$1 = cljs.core.chunk_first.call(null,s__23189__$2);
var size__4561__auto____$1 = cljs.core.count.call(null,c__4560__auto____$1);
var b__23191 = cljs.core.chunk_buffer.call(null,size__4561__auto____$1);
if((function (){var i__23190 = (0);
while(true){
if((i__23190 < size__4561__auto____$1)){
var vec__23194 = cljs.core._nth.call(null,c__4560__auto____$1,i__23190);
var k = cljs.core.nth.call(null,vec__23194,(0),null);
var v = cljs.core.nth.call(null,vec__23194,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__23191,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23212 = (i__23190 + (1));
i__23190 = G__23212;
continue;
} else {
var G__23213 = (i__23190 + (1));
i__23190 = G__23213;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23191),iter__23188.call(null,cljs.core.chunk_rest.call(null,s__23189__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23191),null);
}
} else {
var vec__23195 = cljs.core.first.call(null,s__23189__$2);
var k = cljs.core.nth.call(null,vec__23195,(0),null);
var v = cljs.core.nth.call(null,vec__23195,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23188.call(null,cljs.core.rest.call(null,s__23189__$2)));
} else {
var G__23214 = cljs.core.rest.call(null,s__23189__$2);
s__23189__$1 = G__23214;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__23170,in_QMARK_,c__4560__auto__,size__4561__auto__,b__23171,s__23169__$2,temp__4126__auto__,ks__$1,validate__6206__auto__,ufv___23204,output_schema23126_23205,input_schema23127_23206,input_checker23128_23207,output_checker23129_23208))
,null,null));
});})(i__23170,in_QMARK_,c__4560__auto__,size__4561__auto__,b__23171,s__23169__$2,temp__4126__auto__,ks__$1,validate__6206__auto__,ufv___23204,output_schema23126_23205,input_schema23127_23206,input_checker23128_23207,output_checker23129_23208))
;
return iter__4562__auto__.call(null,s);
})()));

var G__23215 = (i__23170 + (1));
i__23170 = G__23215;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23171),iter__23168.call(null,cljs.core.chunk_rest.call(null,s__23169__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23171),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__23169__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4562__auto__ = ((function (in_QMARK_,s__23169__$2,temp__4126__auto__,ks__$1,validate__6206__auto__,ufv___23204,output_schema23126_23205,input_schema23127_23206,input_checker23128_23207,output_checker23129_23208){
return (function iter__23196(s__23197){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__23169__$2,temp__4126__auto__,ks__$1,validate__6206__auto__,ufv___23204,output_schema23126_23205,input_schema23127_23206,input_checker23128_23207,output_checker23129_23208){
return (function (){
var s__23197__$1 = s__23197;
while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__23197__$1);
if(temp__4126__auto____$1){
var s__23197__$2 = temp__4126__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23197__$2)){
var c__4560__auto__ = cljs.core.chunk_first.call(null,s__23197__$2);
var size__4561__auto__ = cljs.core.count.call(null,c__4560__auto__);
var b__23199 = cljs.core.chunk_buffer.call(null,size__4561__auto__);
if((function (){var i__23198 = (0);
while(true){
if((i__23198 < size__4561__auto__)){
var vec__23202 = cljs.core._nth.call(null,c__4560__auto__,i__23198);
var k = cljs.core.nth.call(null,vec__23202,(0),null);
var v = cljs.core.nth.call(null,vec__23202,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
cljs.core.chunk_append.call(null,b__23199,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23216 = (i__23198 + (1));
i__23198 = G__23216;
continue;
} else {
var G__23217 = (i__23198 + (1));
i__23198 = G__23217;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23199),iter__23196.call(null,cljs.core.chunk_rest.call(null,s__23197__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23199),null);
}
} else {
var vec__23203 = cljs.core.first.call(null,s__23197__$2);
var k = cljs.core.nth.call(null,vec__23203,(0),null);
var v = cljs.core.nth.call(null,vec__23203,(1),null);
if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k))))){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23196.call(null,cljs.core.rest.call(null,s__23197__$2)));
} else {
var G__23218 = cljs.core.rest.call(null,s__23197__$2);
s__23197__$1 = G__23218;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__23169__$2,temp__4126__auto__,ks__$1,validate__6206__auto__,ufv___23204,output_schema23126_23205,input_schema23127_23206,input_checker23128_23207,output_checker23129_23208))
,null,null));
});})(in_QMARK_,s__23169__$2,temp__4126__auto__,ks__$1,validate__6206__auto__,ufv___23204,output_schema23126_23205,input_schema23127_23206,input_checker23128_23207,output_checker23129_23208))
;
return iter__4562__auto__.call(null,s);
})()),iter__23168.call(null,cljs.core.rest.call(null,s__23169__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__6206__auto__,ufv___23204,output_schema23126_23205,input_schema23127_23206,input_checker23128_23207,output_checker23129_23208))
,null,null));
});})(ks__$1,validate__6206__auto__,ufv___23204,output_schema23126_23205,input_schema23127_23206,input_checker23128_23207,output_checker23129_23208))
;
return iter__4562__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__6206__auto__)){
var temp__4126__auto___23219 = output_checker23129_23208.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___23219)){
var error__6208__auto___23220 = temp__4126__auto___23219;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__6208__auto___23220)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___23220,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23126_23205,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
});})(ufv___23204,output_schema23126_23205,input_schema23127_23206,input_checker23128_23207,output_checker23129_23208))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema23126_23205,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23127_23206], null)));
var ufv___23251 = schema.utils.use_fn_validation;
var output_schema23221_23252 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema23222_23253 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker23223_23254 = schema.core.checker.call(null,input_schema23222_23253);
var output_checker23224_23255 = schema.core.checker.call(null,output_schema23221_23252);
/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___23251,output_schema23221_23252,input_schema23222_23253,input_checker23223_23254,output_checker23224_23255){
return (function sequence_schemata(G__23225,G__23226){
var validate__6206__auto__ = ufv___23251.get_cell();
if(cljs.core.truth_(validate__6206__auto__)){
var args__6207__auto___23256 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__23225,G__23226], null);
var temp__4126__auto___23257 = input_checker23223_23254.call(null,args__6207__auto___23256);
if(cljs.core.truth_(temp__4126__auto___23257)){
var error__6208__auto___23258 = temp__4126__auto___23257;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6208__auto___23258)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___23258,new cljs.core.Keyword(null,"value","value",305978217),args__6207__auto___23256,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema23222_23253,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6209__auto__ = (function (){var G__23242 = G__23225;
var vec__23244 = G__23242;
var i1 = cljs.core.nth.call(null,vec__23244,(0),null);
var o1 = cljs.core.nth.call(null,vec__23244,(1),null);
var G__23243 = G__23226;
var vec__23245 = G__23243;
var k = cljs.core.nth.call(null,vec__23245,(0),null);
var vec__23246 = cljs.core.nth.call(null,vec__23245,(1),null);
var i2 = cljs.core.nth.call(null,vec__23246,(0),null);
var o2 = cljs.core.nth.call(null,vec__23246,(1),null);
var G__23242__$1 = G__23242;
var G__23243__$1 = G__23243;
while(true){
var vec__23247 = G__23242__$1;
var i1__$1 = cljs.core.nth.call(null,vec__23247,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__23247,(1),null);
var vec__23248 = G__23243__$1;
var k__$1 = cljs.core.nth.call(null,vec__23248,(0),null);
var vec__23249 = cljs.core.nth.call(null,vec__23248,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__23249,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__23249,(1),null);
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__23250 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__23250,(0),null);
var unused = cljs.core.nth.call(null,vec__23250,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__6206__auto__)){
var temp__4126__auto___23259 = output_checker23224_23255.call(null,o__6209__auto__);
if(cljs.core.truth_(temp__4126__auto___23259)){
var error__6208__auto___23260 = temp__4126__auto___23259;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__6208__auto___23260)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6208__auto___23260,new cljs.core.Keyword(null,"value","value",305978217),o__6209__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema23221_23252,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6209__auto__;
});})(ufv___23251,output_schema23221_23252,input_schema23222_23253,input_checker23223_23254,output_checker23224_23255))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema23221_23252,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema23222_23253], null)));

//# sourceMappingURL=schema.js.map