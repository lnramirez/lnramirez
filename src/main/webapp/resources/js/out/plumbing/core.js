// Compiled by ClojureScript 0.0-2816 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__23300__delegate = function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__23300 = function (m,k,f,x1,x2,var_args){
var xs = null;
if (arguments.length > 5) {
var G__23301__i = 0, G__23301__a = new Array(arguments.length -  5);
while (G__23301__i < G__23301__a.length) {G__23301__a[G__23301__i] = arguments[G__23301__i + 5]; ++G__23301__i;}
  xs = new cljs.core.IndexedSeq(G__23301__a,0);
} 
return G__23300__delegate.call(this,m,k,f,x1,x2,xs);};
G__23300.cljs$lang$maxFixedArity = 5;
G__23300.cljs$lang$applyTo = (function (arglist__23302){
var m = cljs.core.first(arglist__23302);
arglist__23302 = cljs.core.next(arglist__23302);
var k = cljs.core.first(arglist__23302);
arglist__23302 = cljs.core.next(arglist__23302);
var f = cljs.core.first(arglist__23302);
arglist__23302 = cljs.core.next(arglist__23302);
var x1 = cljs.core.first(arglist__23302);
arglist__23302 = cljs.core.next(arglist__23302);
var x2 = cljs.core.first(arglist__23302);
var xs = cljs.core.rest(arglist__23302);
return G__23300__delegate(m,k,f,x1,x2,xs);
});
G__23300.cljs$core$IFn$_invoke$arity$variadic = G__23300__delegate;
return G__23300;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
var G__23303 = null;
if (arguments.length > 5) {
var G__23304__i = 0, G__23304__a = new Array(arguments.length -  5);
while (G__23304__i < G__23304__a.length) {G__23304__a[G__23304__i] = arguments[G__23304__i + 5]; ++G__23304__i;}
G__23303 = new cljs.core.IndexedSeq(G__23304__a,0);
}
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, G__23303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__10587__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__23313_23319 = cljs.core.seq.call(null,m);
var chunk__23314_23320 = null;
var count__23315_23321 = (0);
var i__23316_23322 = (0);
while(true){
if((i__23316_23322 < count__23315_23321)){
var vec__23317_23323 = cljs.core._nth.call(null,chunk__23314_23320,i__23316_23322);
var k_23324 = cljs.core.nth.call(null,vec__23317_23323,(0),null);
var v_23325 = cljs.core.nth.call(null,vec__23317_23323,(1),null);
var m23312_23326 = cljs.core.deref.call(null,m_atom__10587__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10587__auto__,cljs.core.assoc_BANG_.call(null,m23312_23326,k_23324,f.call(null,v_23325)));

var G__23327 = seq__23313_23319;
var G__23328 = chunk__23314_23320;
var G__23329 = count__23315_23321;
var G__23330 = (i__23316_23322 + (1));
seq__23313_23319 = G__23327;
chunk__23314_23320 = G__23328;
count__23315_23321 = G__23329;
i__23316_23322 = G__23330;
continue;
} else {
var temp__4126__auto___23331 = cljs.core.seq.call(null,seq__23313_23319);
if(temp__4126__auto___23331){
var seq__23313_23332__$1 = temp__4126__auto___23331;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23313_23332__$1)){
var c__4593__auto___23333 = cljs.core.chunk_first.call(null,seq__23313_23332__$1);
var G__23334 = cljs.core.chunk_rest.call(null,seq__23313_23332__$1);
var G__23335 = c__4593__auto___23333;
var G__23336 = cljs.core.count.call(null,c__4593__auto___23333);
var G__23337 = (0);
seq__23313_23319 = G__23334;
chunk__23314_23320 = G__23335;
count__23315_23321 = G__23336;
i__23316_23322 = G__23337;
continue;
} else {
var vec__23318_23338 = cljs.core.first.call(null,seq__23313_23332__$1);
var k_23339 = cljs.core.nth.call(null,vec__23318_23338,(0),null);
var v_23340 = cljs.core.nth.call(null,vec__23318_23338,(1),null);
var m23312_23341 = cljs.core.deref.call(null,m_atom__10587__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10587__auto__,cljs.core.assoc_BANG_.call(null,m23312_23341,k_23339,f.call(null,v_23340)));

var G__23342 = cljs.core.next.call(null,seq__23313_23332__$1);
var G__23343 = null;
var G__23344 = (0);
var G__23345 = (0);
seq__23313_23319 = G__23342;
chunk__23314_23320 = G__23343;
count__23315_23321 = G__23344;
i__23316_23322 = G__23345;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10587__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__10587__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__23354_23360 = cljs.core.seq.call(null,m);
var chunk__23355_23361 = null;
var count__23356_23362 = (0);
var i__23357_23363 = (0);
while(true){
if((i__23357_23363 < count__23356_23362)){
var vec__23358_23364 = cljs.core._nth.call(null,chunk__23355_23361,i__23357_23363);
var k_23365 = cljs.core.nth.call(null,vec__23358_23364,(0),null);
var v_23366 = cljs.core.nth.call(null,vec__23358_23364,(1),null);
var m23353_23367 = cljs.core.deref.call(null,m_atom__10587__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10587__auto__,cljs.core.assoc_BANG_.call(null,m23353_23367,f.call(null,k_23365),v_23366));

var G__23368 = seq__23354_23360;
var G__23369 = chunk__23355_23361;
var G__23370 = count__23356_23362;
var G__23371 = (i__23357_23363 + (1));
seq__23354_23360 = G__23368;
chunk__23355_23361 = G__23369;
count__23356_23362 = G__23370;
i__23357_23363 = G__23371;
continue;
} else {
var temp__4126__auto___23372 = cljs.core.seq.call(null,seq__23354_23360);
if(temp__4126__auto___23372){
var seq__23354_23373__$1 = temp__4126__auto___23372;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23354_23373__$1)){
var c__4593__auto___23374 = cljs.core.chunk_first.call(null,seq__23354_23373__$1);
var G__23375 = cljs.core.chunk_rest.call(null,seq__23354_23373__$1);
var G__23376 = c__4593__auto___23374;
var G__23377 = cljs.core.count.call(null,c__4593__auto___23374);
var G__23378 = (0);
seq__23354_23360 = G__23375;
chunk__23355_23361 = G__23376;
count__23356_23362 = G__23377;
i__23357_23363 = G__23378;
continue;
} else {
var vec__23359_23379 = cljs.core.first.call(null,seq__23354_23373__$1);
var k_23380 = cljs.core.nth.call(null,vec__23359_23379,(0),null);
var v_23381 = cljs.core.nth.call(null,vec__23359_23379,(1),null);
var m23353_23382 = cljs.core.deref.call(null,m_atom__10587__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10587__auto__,cljs.core.assoc_BANG_.call(null,m23353_23382,f.call(null,k_23380),v_23381));

var G__23383 = cljs.core.next.call(null,seq__23354_23373__$1);
var G__23384 = null;
var G__23385 = (0);
var G__23386 = (0);
seq__23354_23360 = G__23383;
chunk__23355_23361 = G__23384;
count__23356_23362 = G__23385;
i__23357_23363 = G__23386;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10587__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){
var m_atom__10587__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__23393_23397 = cljs.core.seq.call(null,ks);
var chunk__23394_23398 = null;
var count__23395_23399 = (0);
var i__23396_23400 = (0);
while(true){
if((i__23396_23400 < count__23395_23399)){
var k_23401 = cljs.core._nth.call(null,chunk__23394_23398,i__23396_23400);
var m23392_23402 = cljs.core.deref.call(null,m_atom__10587__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10587__auto__,cljs.core.assoc_BANG_.call(null,m23392_23402,k_23401,f.call(null,k_23401)));

var G__23403 = seq__23393_23397;
var G__23404 = chunk__23394_23398;
var G__23405 = count__23395_23399;
var G__23406 = (i__23396_23400 + (1));
seq__23393_23397 = G__23403;
chunk__23394_23398 = G__23404;
count__23395_23399 = G__23405;
i__23396_23400 = G__23406;
continue;
} else {
var temp__4126__auto___23407 = cljs.core.seq.call(null,seq__23393_23397);
if(temp__4126__auto___23407){
var seq__23393_23408__$1 = temp__4126__auto___23407;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23393_23408__$1)){
var c__4593__auto___23409 = cljs.core.chunk_first.call(null,seq__23393_23408__$1);
var G__23410 = cljs.core.chunk_rest.call(null,seq__23393_23408__$1);
var G__23411 = c__4593__auto___23409;
var G__23412 = cljs.core.count.call(null,c__4593__auto___23409);
var G__23413 = (0);
seq__23393_23397 = G__23410;
chunk__23394_23398 = G__23411;
count__23395_23399 = G__23412;
i__23396_23400 = G__23413;
continue;
} else {
var k_23414 = cljs.core.first.call(null,seq__23393_23408__$1);
var m23392_23415 = cljs.core.deref.call(null,m_atom__10587__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10587__auto__,cljs.core.assoc_BANG_.call(null,m23392_23415,k_23414,f.call(null,k_23414)));

var G__23416 = cljs.core.next.call(null,seq__23393_23408__$1);
var G__23417 = null;
var G__23418 = (0);
var G__23419 = (0);
seq__23393_23397 = G__23416;
chunk__23394_23398 = G__23417;
count__23395_23399 = G__23418;
i__23396_23400 = G__23419;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10587__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){
var m_atom__10587__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__23426_23430 = cljs.core.seq.call(null,vs);
var chunk__23427_23431 = null;
var count__23428_23432 = (0);
var i__23429_23433 = (0);
while(true){
if((i__23429_23433 < count__23428_23432)){
var v_23434 = cljs.core._nth.call(null,chunk__23427_23431,i__23429_23433);
var m23425_23435 = cljs.core.deref.call(null,m_atom__10587__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10587__auto__,cljs.core.assoc_BANG_.call(null,m23425_23435,f.call(null,v_23434),v_23434));

var G__23436 = seq__23426_23430;
var G__23437 = chunk__23427_23431;
var G__23438 = count__23428_23432;
var G__23439 = (i__23429_23433 + (1));
seq__23426_23430 = G__23436;
chunk__23427_23431 = G__23437;
count__23428_23432 = G__23438;
i__23429_23433 = G__23439;
continue;
} else {
var temp__4126__auto___23440 = cljs.core.seq.call(null,seq__23426_23430);
if(temp__4126__auto___23440){
var seq__23426_23441__$1 = temp__4126__auto___23440;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23426_23441__$1)){
var c__4593__auto___23442 = cljs.core.chunk_first.call(null,seq__23426_23441__$1);
var G__23443 = cljs.core.chunk_rest.call(null,seq__23426_23441__$1);
var G__23444 = c__4593__auto___23442;
var G__23445 = cljs.core.count.call(null,c__4593__auto___23442);
var G__23446 = (0);
seq__23426_23430 = G__23443;
chunk__23427_23431 = G__23444;
count__23428_23432 = G__23445;
i__23429_23433 = G__23446;
continue;
} else {
var v_23447 = cljs.core.first.call(null,seq__23426_23441__$1);
var m23425_23448 = cljs.core.deref.call(null,m_atom__10587__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10587__auto__,cljs.core.assoc_BANG_.call(null,m23425_23448,f.call(null,v_23447),v_23447));

var G__23449 = cljs.core.next.call(null,seq__23426_23441__$1);
var G__23450 = null;
var G__23451 = (0);
var G__23452 = (0);
seq__23426_23430 = G__23449;
chunk__23427_23431 = G__23450;
count__23428_23432 = G__23451;
i__23429_23433 = G__23452;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10587__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__23453){
var vec__23455 = p__23453;
var k = cljs.core.nth.call(null,vec__23455,(0),null);
var ks = cljs.core.nthnext.call(null,vec__23455,(1));
if(cljs.core.truth_(m)){
var temp__4124__auto__ = (function (){var and__3794__auto__ = ks;
if(and__3794__auto__){
return dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__3794__auto__;
}
})();
if(cljs.core.truth_(temp__4124__auto__)){
var res = temp__4124__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__10587__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__23464_23470 = cljs.core.seq.call(null,x);
var chunk__23465_23471 = null;
var count__23466_23472 = (0);
var i__23467_23473 = (0);
while(true){
if((i__23467_23473 < count__23466_23472)){
var vec__23468_23474 = cljs.core._nth.call(null,chunk__23465_23471,i__23467_23473);
var k_23475 = cljs.core.nth.call(null,vec__23468_23474,(0),null);
var v_23476 = cljs.core.nth.call(null,vec__23468_23474,(1),null);
var m23463_23477 = cljs.core.deref.call(null,m_atom__10587__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10587__auto__,cljs.core.assoc_BANG_.call(null,m23463_23477,((typeof k_23475 === 'string')?cljs.core.keyword.call(null,k_23475):k_23475),keywordize_map.call(null,v_23476)));

var G__23478 = seq__23464_23470;
var G__23479 = chunk__23465_23471;
var G__23480 = count__23466_23472;
var G__23481 = (i__23467_23473 + (1));
seq__23464_23470 = G__23478;
chunk__23465_23471 = G__23479;
count__23466_23472 = G__23480;
i__23467_23473 = G__23481;
continue;
} else {
var temp__4126__auto___23482 = cljs.core.seq.call(null,seq__23464_23470);
if(temp__4126__auto___23482){
var seq__23464_23483__$1 = temp__4126__auto___23482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23464_23483__$1)){
var c__4593__auto___23484 = cljs.core.chunk_first.call(null,seq__23464_23483__$1);
var G__23485 = cljs.core.chunk_rest.call(null,seq__23464_23483__$1);
var G__23486 = c__4593__auto___23484;
var G__23487 = cljs.core.count.call(null,c__4593__auto___23484);
var G__23488 = (0);
seq__23464_23470 = G__23485;
chunk__23465_23471 = G__23486;
count__23466_23472 = G__23487;
i__23467_23473 = G__23488;
continue;
} else {
var vec__23469_23489 = cljs.core.first.call(null,seq__23464_23483__$1);
var k_23490 = cljs.core.nth.call(null,vec__23469_23489,(0),null);
var v_23491 = cljs.core.nth.call(null,vec__23469_23489,(1),null);
var m23463_23492 = cljs.core.deref.call(null,m_atom__10587__auto__);
cljs.core.reset_BANG_.call(null,m_atom__10587__auto__,cljs.core.assoc_BANG_.call(null,m23463_23492,((typeof k_23490 === 'string')?cljs.core.keyword.call(null,k_23490):k_23490),keywordize_map.call(null,v_23491)));

var G__23493 = cljs.core.next.call(null,seq__23464_23483__$1);
var G__23494 = null;
var G__23495 = (0);
var G__23496 = (0);
seq__23464_23470 = G__23493;
chunk__23465_23471 = G__23494;
count__23466_23472 = G__23495;
i__23467_23473 = G__23496;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__10587__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,keywordize_map,x);
} else {
return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){
var temp__4124__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4124__auto__)){
var pair__10656__auto__ = temp__4124__auto__;
return cljs.core.val.call(null,pair__10656__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__23497 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__23498 = cljs.core.next.call(null,ks);
m = G__23497;
ks = G__23498;
continue;
} else {
return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__3806__auto__ = m;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4562__auto__ = (function iter__23507(s__23508){
return (new cljs.core.LazySeq(null,(function (){
var s__23508__$1 = s__23508;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23508__$1);
if(temp__4126__auto__){
var s__23508__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23508__$2)){
var c__4560__auto__ = cljs.core.chunk_first.call(null,s__23508__$2);
var size__4561__auto__ = cljs.core.count.call(null,c__4560__auto__);
var b__23510 = cljs.core.chunk_buffer.call(null,size__4561__auto__);
if((function (){var i__23509 = (0);
while(true){
if((i__23509 < size__4561__auto__)){
var vec__23513 = cljs.core._nth.call(null,c__4560__auto__,i__23509);
var k = cljs.core.nth.call(null,vec__23513,(0),null);
var v = cljs.core.nth.call(null,vec__23513,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__23510,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__23515 = (i__23509 + (1));
i__23509 = G__23515;
continue;
} else {
var G__23516 = (i__23509 + (1));
i__23509 = G__23516;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23510),iter__23507.call(null,cljs.core.chunk_rest.call(null,s__23508__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23510),null);
}
} else {
var vec__23514 = cljs.core.first.call(null,s__23508__$2);
var k = cljs.core.nth.call(null,vec__23514,(0),null);
var v = cljs.core.nth.call(null,vec__23514,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__23507.call(null,cljs.core.rest.call(null,s__23508__$2)));
} else {
var G__23517 = cljs.core.rest.call(null,s__23508__$2);
s__23508__$1 = G__23517;
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
return iter__4562__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;
if (arguments.length > 1) {
var G__23518__i = 0, G__23518__a = new Array(arguments.length -  1);
while (G__23518__i < G__23518__a.length) {G__23518__a[G__23518__i] = arguments[G__23518__i + 1]; ++G__23518__i;}
  kvs = new cljs.core.IndexedSeq(G__23518__a,0);
} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__23519){
var m = cljs.core.first(arglist__23519);
var kvs = cljs.core.rest(arglist__23519);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;
if (arguments.length > 3) {
var G__23520__i = 0, G__23520__a = new Array(arguments.length -  3);
while (G__23520__i < G__23520__a.length) {G__23520__a[G__23520__i] = arguments[G__23520__i + 3]; ++G__23520__i;}
  args = new cljs.core.IndexedSeq(G__23520__a,0);
} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__23521){
var m = cljs.core.first(arglist__23521);
arglist__23521 = cljs.core.next(arglist__23521);
var key_seq = cljs.core.first(arglist__23521);
arglist__23521 = cljs.core.next(arglist__23521);
var f = cljs.core.first(arglist__23521);
var args = cljs.core.rest(arglist__23521);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4126__auto__ = cljs.core.next.call(null,s);
if(temp__4126__auto__){
var n = temp__4126__auto__;
return aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){
var temp__4126__auto__ = cljs.core.seq.call(null,xs);
if(temp__4126__auto__){
var xs__$1 = temp__4126__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__4562__auto__ = ((function (s){
return (function iter__23526(s__23527){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__23527__$1 = s__23527;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__23527__$1);
if(temp__4126__auto__){
var s__23527__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__23527__$2)){
var c__4560__auto__ = cljs.core.chunk_first.call(null,s__23527__$2);
var size__4561__auto__ = cljs.core.count.call(null,c__4560__auto__);
var b__23529 = cljs.core.chunk_buffer.call(null,size__4561__auto__);
if((function (){var i__23528 = (0);
while(true){
if((i__23528 < size__4561__auto__)){
var x = cljs.core._nth.call(null,c__4560__auto__,i__23528);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__23529,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__23530 = (i__23528 + (1));
i__23528 = G__23530;
continue;
} else {
var G__23531 = (i__23528 + (1));
i__23528 = G__23531;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23529),iter__23526.call(null,cljs.core.chunk_rest.call(null,s__23527__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__23529),null);
}
} else {
var x = cljs.core.first.call(null,s__23527__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,iter__23526.call(null,cljs.core.rest.call(null,s__23527__$2)));
} else {
var G__23532 = cljs.core.rest.call(null,s__23527__$2);
s__23527__$1 = G__23532;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__4562__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;
if (arguments.length > 0) {
var G__23533__i = 0, G__23533__a = new Array(arguments.length -  0);
while (G__23533__i < G__23533__a.length) {G__23533__a[G__23533__i] = arguments[G__23533__i + 0]; ++G__23533__i;}
  colls = new cljs.core.IndexedSeq(G__23533__a,0);
} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__23534){
var colls = cljs.core.seq(arglist__23534);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});
var conj_when__3 = (function() { 
var G__23535__delegate = function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__23536 = conj_when.call(null,coll,x);
var G__23537 = cljs.core.first.call(null,xs);
var G__23538 = cljs.core.next.call(null,xs);
coll = G__23536;
x = G__23537;
xs = G__23538;
continue;
} else {
return conj_when.call(null,coll,x);
}
break;
}
};
var G__23535 = function (coll,x,var_args){
var xs = null;
if (arguments.length > 2) {
var G__23539__i = 0, G__23539__a = new Array(arguments.length -  2);
while (G__23539__i < G__23539__a.length) {G__23539__a[G__23539__i] = arguments[G__23539__i + 2]; ++G__23539__i;}
  xs = new cljs.core.IndexedSeq(G__23539__a,0);
} 
return G__23535__delegate.call(this,coll,x,xs);};
G__23535.cljs$lang$maxFixedArity = 2;
G__23535.cljs$lang$applyTo = (function (arglist__23540){
var coll = cljs.core.first(arglist__23540);
arglist__23540 = cljs.core.next(arglist__23540);
var x = cljs.core.first(arglist__23540);
var xs = cljs.core.rest(arglist__23540);
return G__23535__delegate(coll,x,xs);
});
G__23535.cljs$core$IFn$_invoke$arity$variadic = G__23535__delegate;
return G__23535;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
var G__23541 = null;
if (arguments.length > 2) {
var G__23542__i = 0, G__23542__a = new Array(arguments.length -  2);
while (G__23542__i < G__23542__a.length) {G__23542__a[G__23542__i] = arguments[G__23542__i + 2]; ++G__23542__i;}
G__23541 = new cljs.core.IndexedSeq(G__23542__a,0);
}
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, G__23541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__23544__delegate = function (a,f,args){
return swap_pair_BANG_.call(null,a,(function (p1__23543_SHARP_){
return cljs.core.apply.call(null,f,p1__23543_SHARP_,args);
}));
};
var G__23544 = function (a,f,var_args){
var args = null;
if (arguments.length > 2) {
var G__23545__i = 0, G__23545__a = new Array(arguments.length -  2);
while (G__23545__i < G__23545__a.length) {G__23545__a[G__23545__i] = arguments[G__23545__i + 2]; ++G__23545__i;}
  args = new cljs.core.IndexedSeq(G__23545__a,0);
} 
return G__23544__delegate.call(this,a,f,args);};
G__23544.cljs$lang$maxFixedArity = 2;
G__23544.cljs$lang$applyTo = (function (arglist__23546){
var a = cljs.core.first(arglist__23546);
arglist__23546 = cljs.core.next(arglist__23546);
var f = cljs.core.first(arglist__23546);
var args = cljs.core.rest(arglist__23546);
return G__23544__delegate(a,f,args);
});
G__23544.cljs$core$IFn$_invoke$arity$variadic = G__23544__delegate;
return G__23544;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
var G__23547 = null;
if (arguments.length > 2) {
var G__23548__i = 0, G__23548__a = new Array(arguments.length -  2);
while (G__23548__i < G__23548__a.length) {G__23548__a[G__23548__i] = arguments[G__23548__i + 2]; ++G__23548__i;}
G__23547 = new cljs.core.IndexedSeq(G__23548__a,0);
}
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, G__23547);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){
return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__23549__delegate = function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__23549 = function (f,arg,var_args){
var args = null;
if (arguments.length > 2) {
var G__23550__i = 0, G__23550__a = new Array(arguments.length -  2);
while (G__23550__i < G__23550__a.length) {G__23550__a[G__23550__i] = arguments[G__23550__i + 2]; ++G__23550__i;}
  args = new cljs.core.IndexedSeq(G__23550__a,0);
} 
return G__23549__delegate.call(this,f,arg,args);};
G__23549.cljs$lang$maxFixedArity = 2;
G__23549.cljs$lang$applyTo = (function (arglist__23551){
var f = cljs.core.first(arglist__23551);
arglist__23551 = cljs.core.next(arglist__23551);
var arg = cljs.core.first(arglist__23551);
var args = cljs.core.rest(arglist__23551);
return G__23549__delegate(f,arg,args);
});
G__23549.cljs$core$IFn$_invoke$arity$variadic = G__23549__delegate;
return G__23549;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
var G__23552 = null;
if (arguments.length > 2) {
var G__23553__i = 0, G__23553__a = new Array(arguments.length -  2);
while (G__23553__i < G__23553__a.length) {G__23553__a[G__23553__i] = arguments[G__23553__i + 2]; ++G__23553__i;}
G__23552 = new cljs.core.IndexedSeq(G__23553__a,0);
}
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, G__23552);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map