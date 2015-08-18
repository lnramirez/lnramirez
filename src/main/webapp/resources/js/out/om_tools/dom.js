// Compiled by ClojureScript 0.0-2816 {}
goog.provide('om_tools.dom');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('clojure.string');
/**
* Converts kebab-case to camelCase
*/
om_tools.dom.camel_case = (function camel_case(s){
return clojure.string.replace.call(null,s,/-(\w)/,cljs.core.comp.call(null,clojure.string.upper_case,cljs.core.second));
});
/**
* Converts attributes that are kebab-case and should be camelCase
*/
om_tools.dom.opt_key_case = (function opt_key_case(attr){
if(cljs.core.truth_((function (){var or__3806__auto__ = (cljs.core.count.call(null,attr) < (5));
if(or__3806__auto__){
return or__3806__auto__;
} else {
var G__23559 = cljs.core.subs.call(null,attr,(0),(5));
switch (G__23559) {
case "data-":
case "aria-":
return true;

break;
default:
return false;

}
}
})())){
return attr;
} else {
return om_tools.dom.camel_case.call(null,attr);
}
});
/**
* Converts aliased attributes
*/
om_tools.dom.opt_key_alias = (function opt_key_alias(opt){
var G__23562 = (((opt instanceof cljs.core.Keyword))?opt.fqn:null);
switch (G__23562) {
case "for":
return new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720);

break;
case "class":
return new cljs.core.Keyword(null,"className","className",-1983287057);

break;
default:
return opt;

}
});
/**
* Returns potentially formatted name for DOM element attribute.
* Converts kebab-case to camelCase.
*/
om_tools.dom.format_opt_key = (function format_opt_key(opt_key){
return cljs.core.keyword.call(null,om_tools.dom.opt_key_case.call(null,cljs.core.name.call(null,om_tools.dom.opt_key_alias.call(null,opt_key))));
});
/**
* Returns potentially modified value for DOM element attribute.
* Recursively formats map values (ie :style attribute)
*/
om_tools.dom.format_opt_val = (function format_opt_val(opt_val){
if(cljs.core.map_QMARK_.call(null,opt_val)){
return om_tools.dom.format_opts.call(null,opt_val);
} else {
return opt_val;

}
});
/**
* Returns JavaScript object for React DOM attributes from opts map
*/
om_tools.dom.format_opts = (function format_opts(opts){
if(cljs.core.map_QMARK_.call(null,opts)){
return cljs.core.clj__GT_js.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p__23566){
var vec__23567 = p__23566;
var k = cljs.core.nth.call(null,vec__23567,(0),null);
var v = cljs.core.nth.call(null,vec__23567,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opt_key.call(null,k),om_tools.dom.format_opt_val.call(null,v)], null);
}),opts)));
} else {
return opts;
}
});
om_tools.dom.possible_coll_QMARK_ = (function possible_coll_QMARK_(form){
return (cljs.core.coll_QMARK_.call(null,form)) || ((form instanceof cljs.core.Symbol)) || (cljs.core.list_QMARK_.call(null,form));
});
om_tools.dom.valid_element_QMARK_ = (function valid_element_QMARK_(x){
return (function (){var or__3806__auto__ = React.isValidElement;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return React.isValidComponent;
}
})().call(null,x);
});
om_tools.dom.js_opts_QMARK_ = (function js_opts_QMARK_(x){
return (cljs.core.object_QMARK_.call(null,x)) && (!(om_tools.dom.valid_element_QMARK_.call(null,x)));
});
/**
* Returns a vector of [opts children] for from first and second
* argument given to DOM function
*/
om_tools.dom.element_args = (function element_args(opts,children){
if((opts == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,children], null);
} else {
if(cljs.core.map_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [om_tools.dom.format_opts.call(null,opts),children], null);
} else {
if(om_tools.dom.js_opts_QMARK_.call(null,opts)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [opts,children], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.cons.call(null,opts,children)], null);

}
}
}
});
om_tools.dom.element = (function element(ctor,opts,children){
var vec__23569 = om_tools.dom.element_args.call(null,opts,children);
var opts__$1 = cljs.core.nth.call(null,vec__23569,(0),null);
var children__$1 = cljs.core.nth.call(null,vec__23569,(1),null);
return cljs.core.apply.call(null,ctor,cljs.core.flatten.call(null,cljs.core.cons.call(null,opts__$1,children__$1)));
});
/**
* @param {...*} var_args
*/
om_tools.dom.a = (function() {
var a = null;
var a__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.a,null,null);
});
var a__2 = (function() { 
var G__23570__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.a,opts__8990__auto__,children__8991__auto__);
};
var G__23570 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23571__i = 0, G__23571__a = new Array(arguments.length -  1);
while (G__23571__i < G__23571__a.length) {G__23571__a[G__23571__i] = arguments[G__23571__i + 1]; ++G__23571__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23571__a,0);
} 
return G__23570__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23570.cljs$lang$maxFixedArity = 1;
G__23570.cljs$lang$applyTo = (function (arglist__23572){
var opts__8990__auto__ = cljs.core.first(arglist__23572);
var children__8991__auto__ = cljs.core.rest(arglist__23572);
return G__23570__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23570.cljs$core$IFn$_invoke$arity$variadic = G__23570__delegate;
return G__23570;
})()
;
a = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return a__0.call(this);
default:
var G__23573 = null;
if (arguments.length > 1) {
var G__23574__i = 0, G__23574__a = new Array(arguments.length -  1);
while (G__23574__i < G__23574__a.length) {G__23574__a[G__23574__i] = arguments[G__23574__i + 1]; ++G__23574__i;}
G__23573 = new cljs.core.IndexedSeq(G__23574__a,0);
}
return a__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23573);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
a.cljs$lang$maxFixedArity = 1;
a.cljs$lang$applyTo = a__2.cljs$lang$applyTo;
a.cljs$core$IFn$_invoke$arity$0 = a__0;
a.cljs$core$IFn$_invoke$arity$variadic = a__2.cljs$core$IFn$_invoke$arity$variadic;
return a;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.abbr = (function() {
var abbr = null;
var abbr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.abbr,null,null);
});
var abbr__2 = (function() { 
var G__23575__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.abbr,opts__8990__auto__,children__8991__auto__);
};
var G__23575 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23576__i = 0, G__23576__a = new Array(arguments.length -  1);
while (G__23576__i < G__23576__a.length) {G__23576__a[G__23576__i] = arguments[G__23576__i + 1]; ++G__23576__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23576__a,0);
} 
return G__23575__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23575.cljs$lang$maxFixedArity = 1;
G__23575.cljs$lang$applyTo = (function (arglist__23577){
var opts__8990__auto__ = cljs.core.first(arglist__23577);
var children__8991__auto__ = cljs.core.rest(arglist__23577);
return G__23575__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23575.cljs$core$IFn$_invoke$arity$variadic = G__23575__delegate;
return G__23575;
})()
;
abbr = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return abbr__0.call(this);
default:
var G__23578 = null;
if (arguments.length > 1) {
var G__23579__i = 0, G__23579__a = new Array(arguments.length -  1);
while (G__23579__i < G__23579__a.length) {G__23579__a[G__23579__i] = arguments[G__23579__i + 1]; ++G__23579__i;}
G__23578 = new cljs.core.IndexedSeq(G__23579__a,0);
}
return abbr__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
abbr.cljs$lang$maxFixedArity = 1;
abbr.cljs$lang$applyTo = abbr__2.cljs$lang$applyTo;
abbr.cljs$core$IFn$_invoke$arity$0 = abbr__0;
abbr.cljs$core$IFn$_invoke$arity$variadic = abbr__2.cljs$core$IFn$_invoke$arity$variadic;
return abbr;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.address = (function() {
var address = null;
var address__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.address,null,null);
});
var address__2 = (function() { 
var G__23580__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.address,opts__8990__auto__,children__8991__auto__);
};
var G__23580 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23581__i = 0, G__23581__a = new Array(arguments.length -  1);
while (G__23581__i < G__23581__a.length) {G__23581__a[G__23581__i] = arguments[G__23581__i + 1]; ++G__23581__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23581__a,0);
} 
return G__23580__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23580.cljs$lang$maxFixedArity = 1;
G__23580.cljs$lang$applyTo = (function (arglist__23582){
var opts__8990__auto__ = cljs.core.first(arglist__23582);
var children__8991__auto__ = cljs.core.rest(arglist__23582);
return G__23580__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23580.cljs$core$IFn$_invoke$arity$variadic = G__23580__delegate;
return G__23580;
})()
;
address = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return address__0.call(this);
default:
var G__23583 = null;
if (arguments.length > 1) {
var G__23584__i = 0, G__23584__a = new Array(arguments.length -  1);
while (G__23584__i < G__23584__a.length) {G__23584__a[G__23584__i] = arguments[G__23584__i + 1]; ++G__23584__i;}
G__23583 = new cljs.core.IndexedSeq(G__23584__a,0);
}
return address__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23583);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
address.cljs$lang$maxFixedArity = 1;
address.cljs$lang$applyTo = address__2.cljs$lang$applyTo;
address.cljs$core$IFn$_invoke$arity$0 = address__0;
address.cljs$core$IFn$_invoke$arity$variadic = address__2.cljs$core$IFn$_invoke$arity$variadic;
return address;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.area = (function() {
var area = null;
var area__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.area,null,null);
});
var area__2 = (function() { 
var G__23585__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.area,opts__8990__auto__,children__8991__auto__);
};
var G__23585 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23586__i = 0, G__23586__a = new Array(arguments.length -  1);
while (G__23586__i < G__23586__a.length) {G__23586__a[G__23586__i] = arguments[G__23586__i + 1]; ++G__23586__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23586__a,0);
} 
return G__23585__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23585.cljs$lang$maxFixedArity = 1;
G__23585.cljs$lang$applyTo = (function (arglist__23587){
var opts__8990__auto__ = cljs.core.first(arglist__23587);
var children__8991__auto__ = cljs.core.rest(arglist__23587);
return G__23585__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23585.cljs$core$IFn$_invoke$arity$variadic = G__23585__delegate;
return G__23585;
})()
;
area = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return area__0.call(this);
default:
var G__23588 = null;
if (arguments.length > 1) {
var G__23589__i = 0, G__23589__a = new Array(arguments.length -  1);
while (G__23589__i < G__23589__a.length) {G__23589__a[G__23589__i] = arguments[G__23589__i + 1]; ++G__23589__i;}
G__23588 = new cljs.core.IndexedSeq(G__23589__a,0);
}
return area__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23588);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
area.cljs$lang$maxFixedArity = 1;
area.cljs$lang$applyTo = area__2.cljs$lang$applyTo;
area.cljs$core$IFn$_invoke$arity$0 = area__0;
area.cljs$core$IFn$_invoke$arity$variadic = area__2.cljs$core$IFn$_invoke$arity$variadic;
return area;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.article = (function() {
var article = null;
var article__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.article,null,null);
});
var article__2 = (function() { 
var G__23590__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.article,opts__8990__auto__,children__8991__auto__);
};
var G__23590 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23591__i = 0, G__23591__a = new Array(arguments.length -  1);
while (G__23591__i < G__23591__a.length) {G__23591__a[G__23591__i] = arguments[G__23591__i + 1]; ++G__23591__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23591__a,0);
} 
return G__23590__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23590.cljs$lang$maxFixedArity = 1;
G__23590.cljs$lang$applyTo = (function (arglist__23592){
var opts__8990__auto__ = cljs.core.first(arglist__23592);
var children__8991__auto__ = cljs.core.rest(arglist__23592);
return G__23590__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23590.cljs$core$IFn$_invoke$arity$variadic = G__23590__delegate;
return G__23590;
})()
;
article = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return article__0.call(this);
default:
var G__23593 = null;
if (arguments.length > 1) {
var G__23594__i = 0, G__23594__a = new Array(arguments.length -  1);
while (G__23594__i < G__23594__a.length) {G__23594__a[G__23594__i] = arguments[G__23594__i + 1]; ++G__23594__i;}
G__23593 = new cljs.core.IndexedSeq(G__23594__a,0);
}
return article__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
article.cljs$lang$maxFixedArity = 1;
article.cljs$lang$applyTo = article__2.cljs$lang$applyTo;
article.cljs$core$IFn$_invoke$arity$0 = article__0;
article.cljs$core$IFn$_invoke$arity$variadic = article__2.cljs$core$IFn$_invoke$arity$variadic;
return article;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.aside = (function() {
var aside = null;
var aside__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.aside,null,null);
});
var aside__2 = (function() { 
var G__23595__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.aside,opts__8990__auto__,children__8991__auto__);
};
var G__23595 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23596__i = 0, G__23596__a = new Array(arguments.length -  1);
while (G__23596__i < G__23596__a.length) {G__23596__a[G__23596__i] = arguments[G__23596__i + 1]; ++G__23596__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23596__a,0);
} 
return G__23595__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23595.cljs$lang$maxFixedArity = 1;
G__23595.cljs$lang$applyTo = (function (arglist__23597){
var opts__8990__auto__ = cljs.core.first(arglist__23597);
var children__8991__auto__ = cljs.core.rest(arglist__23597);
return G__23595__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23595.cljs$core$IFn$_invoke$arity$variadic = G__23595__delegate;
return G__23595;
})()
;
aside = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return aside__0.call(this);
default:
var G__23598 = null;
if (arguments.length > 1) {
var G__23599__i = 0, G__23599__a = new Array(arguments.length -  1);
while (G__23599__i < G__23599__a.length) {G__23599__a[G__23599__i] = arguments[G__23599__i + 1]; ++G__23599__i;}
G__23598 = new cljs.core.IndexedSeq(G__23599__a,0);
}
return aside__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23598);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
aside.cljs$lang$maxFixedArity = 1;
aside.cljs$lang$applyTo = aside__2.cljs$lang$applyTo;
aside.cljs$core$IFn$_invoke$arity$0 = aside__0;
aside.cljs$core$IFn$_invoke$arity$variadic = aside__2.cljs$core$IFn$_invoke$arity$variadic;
return aside;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.audio = (function() {
var audio = null;
var audio__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.audio,null,null);
});
var audio__2 = (function() { 
var G__23600__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.audio,opts__8990__auto__,children__8991__auto__);
};
var G__23600 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23601__i = 0, G__23601__a = new Array(arguments.length -  1);
while (G__23601__i < G__23601__a.length) {G__23601__a[G__23601__i] = arguments[G__23601__i + 1]; ++G__23601__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23601__a,0);
} 
return G__23600__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23600.cljs$lang$maxFixedArity = 1;
G__23600.cljs$lang$applyTo = (function (arglist__23602){
var opts__8990__auto__ = cljs.core.first(arglist__23602);
var children__8991__auto__ = cljs.core.rest(arglist__23602);
return G__23600__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23600.cljs$core$IFn$_invoke$arity$variadic = G__23600__delegate;
return G__23600;
})()
;
audio = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return audio__0.call(this);
default:
var G__23603 = null;
if (arguments.length > 1) {
var G__23604__i = 0, G__23604__a = new Array(arguments.length -  1);
while (G__23604__i < G__23604__a.length) {G__23604__a[G__23604__i] = arguments[G__23604__i + 1]; ++G__23604__i;}
G__23603 = new cljs.core.IndexedSeq(G__23604__a,0);
}
return audio__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
audio.cljs$lang$maxFixedArity = 1;
audio.cljs$lang$applyTo = audio__2.cljs$lang$applyTo;
audio.cljs$core$IFn$_invoke$arity$0 = audio__0;
audio.cljs$core$IFn$_invoke$arity$variadic = audio__2.cljs$core$IFn$_invoke$arity$variadic;
return audio;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.b = (function() {
var b = null;
var b__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.b,null,null);
});
var b__2 = (function() { 
var G__23605__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.b,opts__8990__auto__,children__8991__auto__);
};
var G__23605 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23606__i = 0, G__23606__a = new Array(arguments.length -  1);
while (G__23606__i < G__23606__a.length) {G__23606__a[G__23606__i] = arguments[G__23606__i + 1]; ++G__23606__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23606__a,0);
} 
return G__23605__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23605.cljs$lang$maxFixedArity = 1;
G__23605.cljs$lang$applyTo = (function (arglist__23607){
var opts__8990__auto__ = cljs.core.first(arglist__23607);
var children__8991__auto__ = cljs.core.rest(arglist__23607);
return G__23605__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23605.cljs$core$IFn$_invoke$arity$variadic = G__23605__delegate;
return G__23605;
})()
;
b = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return b__0.call(this);
default:
var G__23608 = null;
if (arguments.length > 1) {
var G__23609__i = 0, G__23609__a = new Array(arguments.length -  1);
while (G__23609__i < G__23609__a.length) {G__23609__a[G__23609__i] = arguments[G__23609__i + 1]; ++G__23609__i;}
G__23608 = new cljs.core.IndexedSeq(G__23609__a,0);
}
return b__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23608);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
b.cljs$lang$maxFixedArity = 1;
b.cljs$lang$applyTo = b__2.cljs$lang$applyTo;
b.cljs$core$IFn$_invoke$arity$0 = b__0;
b.cljs$core$IFn$_invoke$arity$variadic = b__2.cljs$core$IFn$_invoke$arity$variadic;
return b;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.base = (function() {
var base = null;
var base__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.base,null,null);
});
var base__2 = (function() { 
var G__23610__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.base,opts__8990__auto__,children__8991__auto__);
};
var G__23610 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23611__i = 0, G__23611__a = new Array(arguments.length -  1);
while (G__23611__i < G__23611__a.length) {G__23611__a[G__23611__i] = arguments[G__23611__i + 1]; ++G__23611__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23611__a,0);
} 
return G__23610__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23610.cljs$lang$maxFixedArity = 1;
G__23610.cljs$lang$applyTo = (function (arglist__23612){
var opts__8990__auto__ = cljs.core.first(arglist__23612);
var children__8991__auto__ = cljs.core.rest(arglist__23612);
return G__23610__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23610.cljs$core$IFn$_invoke$arity$variadic = G__23610__delegate;
return G__23610;
})()
;
base = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return base__0.call(this);
default:
var G__23613 = null;
if (arguments.length > 1) {
var G__23614__i = 0, G__23614__a = new Array(arguments.length -  1);
while (G__23614__i < G__23614__a.length) {G__23614__a[G__23614__i] = arguments[G__23614__i + 1]; ++G__23614__i;}
G__23613 = new cljs.core.IndexedSeq(G__23614__a,0);
}
return base__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
base.cljs$lang$maxFixedArity = 1;
base.cljs$lang$applyTo = base__2.cljs$lang$applyTo;
base.cljs$core$IFn$_invoke$arity$0 = base__0;
base.cljs$core$IFn$_invoke$arity$variadic = base__2.cljs$core$IFn$_invoke$arity$variadic;
return base;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.bdi = (function() {
var bdi = null;
var bdi__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdi,null,null);
});
var bdi__2 = (function() { 
var G__23615__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.bdi,opts__8990__auto__,children__8991__auto__);
};
var G__23615 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23616__i = 0, G__23616__a = new Array(arguments.length -  1);
while (G__23616__i < G__23616__a.length) {G__23616__a[G__23616__i] = arguments[G__23616__i + 1]; ++G__23616__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23616__a,0);
} 
return G__23615__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23615.cljs$lang$maxFixedArity = 1;
G__23615.cljs$lang$applyTo = (function (arglist__23617){
var opts__8990__auto__ = cljs.core.first(arglist__23617);
var children__8991__auto__ = cljs.core.rest(arglist__23617);
return G__23615__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23615.cljs$core$IFn$_invoke$arity$variadic = G__23615__delegate;
return G__23615;
})()
;
bdi = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return bdi__0.call(this);
default:
var G__23618 = null;
if (arguments.length > 1) {
var G__23619__i = 0, G__23619__a = new Array(arguments.length -  1);
while (G__23619__i < G__23619__a.length) {G__23619__a[G__23619__i] = arguments[G__23619__i + 1]; ++G__23619__i;}
G__23618 = new cljs.core.IndexedSeq(G__23619__a,0);
}
return bdi__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bdi.cljs$lang$maxFixedArity = 1;
bdi.cljs$lang$applyTo = bdi__2.cljs$lang$applyTo;
bdi.cljs$core$IFn$_invoke$arity$0 = bdi__0;
bdi.cljs$core$IFn$_invoke$arity$variadic = bdi__2.cljs$core$IFn$_invoke$arity$variadic;
return bdi;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.bdo = (function() {
var bdo = null;
var bdo__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.bdo,null,null);
});
var bdo__2 = (function() { 
var G__23620__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.bdo,opts__8990__auto__,children__8991__auto__);
};
var G__23620 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23621__i = 0, G__23621__a = new Array(arguments.length -  1);
while (G__23621__i < G__23621__a.length) {G__23621__a[G__23621__i] = arguments[G__23621__i + 1]; ++G__23621__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23621__a,0);
} 
return G__23620__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23620.cljs$lang$maxFixedArity = 1;
G__23620.cljs$lang$applyTo = (function (arglist__23622){
var opts__8990__auto__ = cljs.core.first(arglist__23622);
var children__8991__auto__ = cljs.core.rest(arglist__23622);
return G__23620__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23620.cljs$core$IFn$_invoke$arity$variadic = G__23620__delegate;
return G__23620;
})()
;
bdo = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return bdo__0.call(this);
default:
var G__23623 = null;
if (arguments.length > 1) {
var G__23624__i = 0, G__23624__a = new Array(arguments.length -  1);
while (G__23624__i < G__23624__a.length) {G__23624__a[G__23624__i] = arguments[G__23624__i + 1]; ++G__23624__i;}
G__23623 = new cljs.core.IndexedSeq(G__23624__a,0);
}
return bdo__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
bdo.cljs$lang$maxFixedArity = 1;
bdo.cljs$lang$applyTo = bdo__2.cljs$lang$applyTo;
bdo.cljs$core$IFn$_invoke$arity$0 = bdo__0;
bdo.cljs$core$IFn$_invoke$arity$variadic = bdo__2.cljs$core$IFn$_invoke$arity$variadic;
return bdo;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.big = (function() {
var big = null;
var big__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.big,null,null);
});
var big__2 = (function() { 
var G__23625__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.big,opts__8990__auto__,children__8991__auto__);
};
var G__23625 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23626__i = 0, G__23626__a = new Array(arguments.length -  1);
while (G__23626__i < G__23626__a.length) {G__23626__a[G__23626__i] = arguments[G__23626__i + 1]; ++G__23626__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23626__a,0);
} 
return G__23625__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23625.cljs$lang$maxFixedArity = 1;
G__23625.cljs$lang$applyTo = (function (arglist__23627){
var opts__8990__auto__ = cljs.core.first(arglist__23627);
var children__8991__auto__ = cljs.core.rest(arglist__23627);
return G__23625__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23625.cljs$core$IFn$_invoke$arity$variadic = G__23625__delegate;
return G__23625;
})()
;
big = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return big__0.call(this);
default:
var G__23628 = null;
if (arguments.length > 1) {
var G__23629__i = 0, G__23629__a = new Array(arguments.length -  1);
while (G__23629__i < G__23629__a.length) {G__23629__a[G__23629__i] = arguments[G__23629__i + 1]; ++G__23629__i;}
G__23628 = new cljs.core.IndexedSeq(G__23629__a,0);
}
return big__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
big.cljs$lang$maxFixedArity = 1;
big.cljs$lang$applyTo = big__2.cljs$lang$applyTo;
big.cljs$core$IFn$_invoke$arity$0 = big__0;
big.cljs$core$IFn$_invoke$arity$variadic = big__2.cljs$core$IFn$_invoke$arity$variadic;
return big;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.blockquote = (function() {
var blockquote = null;
var blockquote__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.blockquote,null,null);
});
var blockquote__2 = (function() { 
var G__23630__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.blockquote,opts__8990__auto__,children__8991__auto__);
};
var G__23630 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23631__i = 0, G__23631__a = new Array(arguments.length -  1);
while (G__23631__i < G__23631__a.length) {G__23631__a[G__23631__i] = arguments[G__23631__i + 1]; ++G__23631__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23631__a,0);
} 
return G__23630__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23630.cljs$lang$maxFixedArity = 1;
G__23630.cljs$lang$applyTo = (function (arglist__23632){
var opts__8990__auto__ = cljs.core.first(arglist__23632);
var children__8991__auto__ = cljs.core.rest(arglist__23632);
return G__23630__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23630.cljs$core$IFn$_invoke$arity$variadic = G__23630__delegate;
return G__23630;
})()
;
blockquote = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return blockquote__0.call(this);
default:
var G__23633 = null;
if (arguments.length > 1) {
var G__23634__i = 0, G__23634__a = new Array(arguments.length -  1);
while (G__23634__i < G__23634__a.length) {G__23634__a[G__23634__i] = arguments[G__23634__i + 1]; ++G__23634__i;}
G__23633 = new cljs.core.IndexedSeq(G__23634__a,0);
}
return blockquote__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
blockquote.cljs$lang$maxFixedArity = 1;
blockquote.cljs$lang$applyTo = blockquote__2.cljs$lang$applyTo;
blockquote.cljs$core$IFn$_invoke$arity$0 = blockquote__0;
blockquote.cljs$core$IFn$_invoke$arity$variadic = blockquote__2.cljs$core$IFn$_invoke$arity$variadic;
return blockquote;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.body = (function() {
var body = null;
var body__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.body,null,null);
});
var body__2 = (function() { 
var G__23635__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.body,opts__8990__auto__,children__8991__auto__);
};
var G__23635 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23636__i = 0, G__23636__a = new Array(arguments.length -  1);
while (G__23636__i < G__23636__a.length) {G__23636__a[G__23636__i] = arguments[G__23636__i + 1]; ++G__23636__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23636__a,0);
} 
return G__23635__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23635.cljs$lang$maxFixedArity = 1;
G__23635.cljs$lang$applyTo = (function (arglist__23637){
var opts__8990__auto__ = cljs.core.first(arglist__23637);
var children__8991__auto__ = cljs.core.rest(arglist__23637);
return G__23635__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23635.cljs$core$IFn$_invoke$arity$variadic = G__23635__delegate;
return G__23635;
})()
;
body = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return body__0.call(this);
default:
var G__23638 = null;
if (arguments.length > 1) {
var G__23639__i = 0, G__23639__a = new Array(arguments.length -  1);
while (G__23639__i < G__23639__a.length) {G__23639__a[G__23639__i] = arguments[G__23639__i + 1]; ++G__23639__i;}
G__23638 = new cljs.core.IndexedSeq(G__23639__a,0);
}
return body__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
body.cljs$lang$maxFixedArity = 1;
body.cljs$lang$applyTo = body__2.cljs$lang$applyTo;
body.cljs$core$IFn$_invoke$arity$0 = body__0;
body.cljs$core$IFn$_invoke$arity$variadic = body__2.cljs$core$IFn$_invoke$arity$variadic;
return body;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.br = (function() {
var br = null;
var br__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.br,null,null);
});
var br__2 = (function() { 
var G__23640__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.br,opts__8990__auto__,children__8991__auto__);
};
var G__23640 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23641__i = 0, G__23641__a = new Array(arguments.length -  1);
while (G__23641__i < G__23641__a.length) {G__23641__a[G__23641__i] = arguments[G__23641__i + 1]; ++G__23641__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23641__a,0);
} 
return G__23640__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23640.cljs$lang$maxFixedArity = 1;
G__23640.cljs$lang$applyTo = (function (arglist__23642){
var opts__8990__auto__ = cljs.core.first(arglist__23642);
var children__8991__auto__ = cljs.core.rest(arglist__23642);
return G__23640__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23640.cljs$core$IFn$_invoke$arity$variadic = G__23640__delegate;
return G__23640;
})()
;
br = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return br__0.call(this);
default:
var G__23643 = null;
if (arguments.length > 1) {
var G__23644__i = 0, G__23644__a = new Array(arguments.length -  1);
while (G__23644__i < G__23644__a.length) {G__23644__a[G__23644__i] = arguments[G__23644__i + 1]; ++G__23644__i;}
G__23643 = new cljs.core.IndexedSeq(G__23644__a,0);
}
return br__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
br.cljs$lang$maxFixedArity = 1;
br.cljs$lang$applyTo = br__2.cljs$lang$applyTo;
br.cljs$core$IFn$_invoke$arity$0 = br__0;
br.cljs$core$IFn$_invoke$arity$variadic = br__2.cljs$core$IFn$_invoke$arity$variadic;
return br;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.button = (function() {
var button = null;
var button__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.button,null,null);
});
var button__2 = (function() { 
var G__23645__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.button,opts__8990__auto__,children__8991__auto__);
};
var G__23645 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23646__i = 0, G__23646__a = new Array(arguments.length -  1);
while (G__23646__i < G__23646__a.length) {G__23646__a[G__23646__i] = arguments[G__23646__i + 1]; ++G__23646__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23646__a,0);
} 
return G__23645__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23645.cljs$lang$maxFixedArity = 1;
G__23645.cljs$lang$applyTo = (function (arglist__23647){
var opts__8990__auto__ = cljs.core.first(arglist__23647);
var children__8991__auto__ = cljs.core.rest(arglist__23647);
return G__23645__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23645.cljs$core$IFn$_invoke$arity$variadic = G__23645__delegate;
return G__23645;
})()
;
button = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return button__0.call(this);
default:
var G__23648 = null;
if (arguments.length > 1) {
var G__23649__i = 0, G__23649__a = new Array(arguments.length -  1);
while (G__23649__i < G__23649__a.length) {G__23649__a[G__23649__i] = arguments[G__23649__i + 1]; ++G__23649__i;}
G__23648 = new cljs.core.IndexedSeq(G__23649__a,0);
}
return button__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
button.cljs$lang$maxFixedArity = 1;
button.cljs$lang$applyTo = button__2.cljs$lang$applyTo;
button.cljs$core$IFn$_invoke$arity$0 = button__0;
button.cljs$core$IFn$_invoke$arity$variadic = button__2.cljs$core$IFn$_invoke$arity$variadic;
return button;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.canvas = (function() {
var canvas = null;
var canvas__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.canvas,null,null);
});
var canvas__2 = (function() { 
var G__23650__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.canvas,opts__8990__auto__,children__8991__auto__);
};
var G__23650 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23651__i = 0, G__23651__a = new Array(arguments.length -  1);
while (G__23651__i < G__23651__a.length) {G__23651__a[G__23651__i] = arguments[G__23651__i + 1]; ++G__23651__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23651__a,0);
} 
return G__23650__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23650.cljs$lang$maxFixedArity = 1;
G__23650.cljs$lang$applyTo = (function (arglist__23652){
var opts__8990__auto__ = cljs.core.first(arglist__23652);
var children__8991__auto__ = cljs.core.rest(arglist__23652);
return G__23650__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23650.cljs$core$IFn$_invoke$arity$variadic = G__23650__delegate;
return G__23650;
})()
;
canvas = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return canvas__0.call(this);
default:
var G__23653 = null;
if (arguments.length > 1) {
var G__23654__i = 0, G__23654__a = new Array(arguments.length -  1);
while (G__23654__i < G__23654__a.length) {G__23654__a[G__23654__i] = arguments[G__23654__i + 1]; ++G__23654__i;}
G__23653 = new cljs.core.IndexedSeq(G__23654__a,0);
}
return canvas__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
canvas.cljs$lang$maxFixedArity = 1;
canvas.cljs$lang$applyTo = canvas__2.cljs$lang$applyTo;
canvas.cljs$core$IFn$_invoke$arity$0 = canvas__0;
canvas.cljs$core$IFn$_invoke$arity$variadic = canvas__2.cljs$core$IFn$_invoke$arity$variadic;
return canvas;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.caption = (function() {
var caption = null;
var caption__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.caption,null,null);
});
var caption__2 = (function() { 
var G__23655__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.caption,opts__8990__auto__,children__8991__auto__);
};
var G__23655 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23656__i = 0, G__23656__a = new Array(arguments.length -  1);
while (G__23656__i < G__23656__a.length) {G__23656__a[G__23656__i] = arguments[G__23656__i + 1]; ++G__23656__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23656__a,0);
} 
return G__23655__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23655.cljs$lang$maxFixedArity = 1;
G__23655.cljs$lang$applyTo = (function (arglist__23657){
var opts__8990__auto__ = cljs.core.first(arglist__23657);
var children__8991__auto__ = cljs.core.rest(arglist__23657);
return G__23655__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23655.cljs$core$IFn$_invoke$arity$variadic = G__23655__delegate;
return G__23655;
})()
;
caption = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return caption__0.call(this);
default:
var G__23658 = null;
if (arguments.length > 1) {
var G__23659__i = 0, G__23659__a = new Array(arguments.length -  1);
while (G__23659__i < G__23659__a.length) {G__23659__a[G__23659__i] = arguments[G__23659__i + 1]; ++G__23659__i;}
G__23658 = new cljs.core.IndexedSeq(G__23659__a,0);
}
return caption__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
caption.cljs$lang$maxFixedArity = 1;
caption.cljs$lang$applyTo = caption__2.cljs$lang$applyTo;
caption.cljs$core$IFn$_invoke$arity$0 = caption__0;
caption.cljs$core$IFn$_invoke$arity$variadic = caption__2.cljs$core$IFn$_invoke$arity$variadic;
return caption;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.cite = (function() {
var cite = null;
var cite__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.cite,null,null);
});
var cite__2 = (function() { 
var G__23660__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.cite,opts__8990__auto__,children__8991__auto__);
};
var G__23660 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23661__i = 0, G__23661__a = new Array(arguments.length -  1);
while (G__23661__i < G__23661__a.length) {G__23661__a[G__23661__i] = arguments[G__23661__i + 1]; ++G__23661__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23661__a,0);
} 
return G__23660__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23660.cljs$lang$maxFixedArity = 1;
G__23660.cljs$lang$applyTo = (function (arglist__23662){
var opts__8990__auto__ = cljs.core.first(arglist__23662);
var children__8991__auto__ = cljs.core.rest(arglist__23662);
return G__23660__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23660.cljs$core$IFn$_invoke$arity$variadic = G__23660__delegate;
return G__23660;
})()
;
cite = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return cite__0.call(this);
default:
var G__23663 = null;
if (arguments.length > 1) {
var G__23664__i = 0, G__23664__a = new Array(arguments.length -  1);
while (G__23664__i < G__23664__a.length) {G__23664__a[G__23664__i] = arguments[G__23664__i + 1]; ++G__23664__i;}
G__23663 = new cljs.core.IndexedSeq(G__23664__a,0);
}
return cite__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cite.cljs$lang$maxFixedArity = 1;
cite.cljs$lang$applyTo = cite__2.cljs$lang$applyTo;
cite.cljs$core$IFn$_invoke$arity$0 = cite__0;
cite.cljs$core$IFn$_invoke$arity$variadic = cite__2.cljs$core$IFn$_invoke$arity$variadic;
return cite;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.code = (function() {
var code = null;
var code__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.code,null,null);
});
var code__2 = (function() { 
var G__23665__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.code,opts__8990__auto__,children__8991__auto__);
};
var G__23665 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23666__i = 0, G__23666__a = new Array(arguments.length -  1);
while (G__23666__i < G__23666__a.length) {G__23666__a[G__23666__i] = arguments[G__23666__i + 1]; ++G__23666__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23666__a,0);
} 
return G__23665__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23665.cljs$lang$maxFixedArity = 1;
G__23665.cljs$lang$applyTo = (function (arglist__23667){
var opts__8990__auto__ = cljs.core.first(arglist__23667);
var children__8991__auto__ = cljs.core.rest(arglist__23667);
return G__23665__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23665.cljs$core$IFn$_invoke$arity$variadic = G__23665__delegate;
return G__23665;
})()
;
code = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return code__0.call(this);
default:
var G__23668 = null;
if (arguments.length > 1) {
var G__23669__i = 0, G__23669__a = new Array(arguments.length -  1);
while (G__23669__i < G__23669__a.length) {G__23669__a[G__23669__i] = arguments[G__23669__i + 1]; ++G__23669__i;}
G__23668 = new cljs.core.IndexedSeq(G__23669__a,0);
}
return code__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
code.cljs$lang$maxFixedArity = 1;
code.cljs$lang$applyTo = code__2.cljs$lang$applyTo;
code.cljs$core$IFn$_invoke$arity$0 = code__0;
code.cljs$core$IFn$_invoke$arity$variadic = code__2.cljs$core$IFn$_invoke$arity$variadic;
return code;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.col = (function() {
var col = null;
var col__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.col,null,null);
});
var col__2 = (function() { 
var G__23670__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.col,opts__8990__auto__,children__8991__auto__);
};
var G__23670 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23671__i = 0, G__23671__a = new Array(arguments.length -  1);
while (G__23671__i < G__23671__a.length) {G__23671__a[G__23671__i] = arguments[G__23671__i + 1]; ++G__23671__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23671__a,0);
} 
return G__23670__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23670.cljs$lang$maxFixedArity = 1;
G__23670.cljs$lang$applyTo = (function (arglist__23672){
var opts__8990__auto__ = cljs.core.first(arglist__23672);
var children__8991__auto__ = cljs.core.rest(arglist__23672);
return G__23670__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23670.cljs$core$IFn$_invoke$arity$variadic = G__23670__delegate;
return G__23670;
})()
;
col = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return col__0.call(this);
default:
var G__23673 = null;
if (arguments.length > 1) {
var G__23674__i = 0, G__23674__a = new Array(arguments.length -  1);
while (G__23674__i < G__23674__a.length) {G__23674__a[G__23674__i] = arguments[G__23674__i + 1]; ++G__23674__i;}
G__23673 = new cljs.core.IndexedSeq(G__23674__a,0);
}
return col__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23673);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
col.cljs$lang$maxFixedArity = 1;
col.cljs$lang$applyTo = col__2.cljs$lang$applyTo;
col.cljs$core$IFn$_invoke$arity$0 = col__0;
col.cljs$core$IFn$_invoke$arity$variadic = col__2.cljs$core$IFn$_invoke$arity$variadic;
return col;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.colgroup = (function() {
var colgroup = null;
var colgroup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.colgroup,null,null);
});
var colgroup__2 = (function() { 
var G__23675__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.colgroup,opts__8990__auto__,children__8991__auto__);
};
var G__23675 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23676__i = 0, G__23676__a = new Array(arguments.length -  1);
while (G__23676__i < G__23676__a.length) {G__23676__a[G__23676__i] = arguments[G__23676__i + 1]; ++G__23676__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23676__a,0);
} 
return G__23675__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23675.cljs$lang$maxFixedArity = 1;
G__23675.cljs$lang$applyTo = (function (arglist__23677){
var opts__8990__auto__ = cljs.core.first(arglist__23677);
var children__8991__auto__ = cljs.core.rest(arglist__23677);
return G__23675__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23675.cljs$core$IFn$_invoke$arity$variadic = G__23675__delegate;
return G__23675;
})()
;
colgroup = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return colgroup__0.call(this);
default:
var G__23678 = null;
if (arguments.length > 1) {
var G__23679__i = 0, G__23679__a = new Array(arguments.length -  1);
while (G__23679__i < G__23679__a.length) {G__23679__a[G__23679__i] = arguments[G__23679__i + 1]; ++G__23679__i;}
G__23678 = new cljs.core.IndexedSeq(G__23679__a,0);
}
return colgroup__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
colgroup.cljs$lang$maxFixedArity = 1;
colgroup.cljs$lang$applyTo = colgroup__2.cljs$lang$applyTo;
colgroup.cljs$core$IFn$_invoke$arity$0 = colgroup__0;
colgroup.cljs$core$IFn$_invoke$arity$variadic = colgroup__2.cljs$core$IFn$_invoke$arity$variadic;
return colgroup;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.data = (function() {
var data = null;
var data__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.data,null,null);
});
var data__2 = (function() { 
var G__23680__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.data,opts__8990__auto__,children__8991__auto__);
};
var G__23680 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23681__i = 0, G__23681__a = new Array(arguments.length -  1);
while (G__23681__i < G__23681__a.length) {G__23681__a[G__23681__i] = arguments[G__23681__i + 1]; ++G__23681__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23681__a,0);
} 
return G__23680__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23680.cljs$lang$maxFixedArity = 1;
G__23680.cljs$lang$applyTo = (function (arglist__23682){
var opts__8990__auto__ = cljs.core.first(arglist__23682);
var children__8991__auto__ = cljs.core.rest(arglist__23682);
return G__23680__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23680.cljs$core$IFn$_invoke$arity$variadic = G__23680__delegate;
return G__23680;
})()
;
data = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return data__0.call(this);
default:
var G__23683 = null;
if (arguments.length > 1) {
var G__23684__i = 0, G__23684__a = new Array(arguments.length -  1);
while (G__23684__i < G__23684__a.length) {G__23684__a[G__23684__i] = arguments[G__23684__i + 1]; ++G__23684__i;}
G__23683 = new cljs.core.IndexedSeq(G__23684__a,0);
}
return data__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23683);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
data.cljs$lang$maxFixedArity = 1;
data.cljs$lang$applyTo = data__2.cljs$lang$applyTo;
data.cljs$core$IFn$_invoke$arity$0 = data__0;
data.cljs$core$IFn$_invoke$arity$variadic = data__2.cljs$core$IFn$_invoke$arity$variadic;
return data;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.datalist = (function() {
var datalist = null;
var datalist__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.datalist,null,null);
});
var datalist__2 = (function() { 
var G__23685__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.datalist,opts__8990__auto__,children__8991__auto__);
};
var G__23685 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23686__i = 0, G__23686__a = new Array(arguments.length -  1);
while (G__23686__i < G__23686__a.length) {G__23686__a[G__23686__i] = arguments[G__23686__i + 1]; ++G__23686__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23686__a,0);
} 
return G__23685__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23685.cljs$lang$maxFixedArity = 1;
G__23685.cljs$lang$applyTo = (function (arglist__23687){
var opts__8990__auto__ = cljs.core.first(arglist__23687);
var children__8991__auto__ = cljs.core.rest(arglist__23687);
return G__23685__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23685.cljs$core$IFn$_invoke$arity$variadic = G__23685__delegate;
return G__23685;
})()
;
datalist = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return datalist__0.call(this);
default:
var G__23688 = null;
if (arguments.length > 1) {
var G__23689__i = 0, G__23689__a = new Array(arguments.length -  1);
while (G__23689__i < G__23689__a.length) {G__23689__a[G__23689__i] = arguments[G__23689__i + 1]; ++G__23689__i;}
G__23688 = new cljs.core.IndexedSeq(G__23689__a,0);
}
return datalist__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datalist.cljs$lang$maxFixedArity = 1;
datalist.cljs$lang$applyTo = datalist__2.cljs$lang$applyTo;
datalist.cljs$core$IFn$_invoke$arity$0 = datalist__0;
datalist.cljs$core$IFn$_invoke$arity$variadic = datalist__2.cljs$core$IFn$_invoke$arity$variadic;
return datalist;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.dd = (function() {
var dd = null;
var dd__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dd,null,null);
});
var dd__2 = (function() { 
var G__23690__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.dd,opts__8990__auto__,children__8991__auto__);
};
var G__23690 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23691__i = 0, G__23691__a = new Array(arguments.length -  1);
while (G__23691__i < G__23691__a.length) {G__23691__a[G__23691__i] = arguments[G__23691__i + 1]; ++G__23691__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23691__a,0);
} 
return G__23690__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23690.cljs$lang$maxFixedArity = 1;
G__23690.cljs$lang$applyTo = (function (arglist__23692){
var opts__8990__auto__ = cljs.core.first(arglist__23692);
var children__8991__auto__ = cljs.core.rest(arglist__23692);
return G__23690__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23690.cljs$core$IFn$_invoke$arity$variadic = G__23690__delegate;
return G__23690;
})()
;
dd = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return dd__0.call(this);
default:
var G__23693 = null;
if (arguments.length > 1) {
var G__23694__i = 0, G__23694__a = new Array(arguments.length -  1);
while (G__23694__i < G__23694__a.length) {G__23694__a[G__23694__i] = arguments[G__23694__i + 1]; ++G__23694__i;}
G__23693 = new cljs.core.IndexedSeq(G__23694__a,0);
}
return dd__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dd.cljs$lang$maxFixedArity = 1;
dd.cljs$lang$applyTo = dd__2.cljs$lang$applyTo;
dd.cljs$core$IFn$_invoke$arity$0 = dd__0;
dd.cljs$core$IFn$_invoke$arity$variadic = dd__2.cljs$core$IFn$_invoke$arity$variadic;
return dd;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.del = (function() {
var del = null;
var del__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.del,null,null);
});
var del__2 = (function() { 
var G__23695__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.del,opts__8990__auto__,children__8991__auto__);
};
var G__23695 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23696__i = 0, G__23696__a = new Array(arguments.length -  1);
while (G__23696__i < G__23696__a.length) {G__23696__a[G__23696__i] = arguments[G__23696__i + 1]; ++G__23696__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23696__a,0);
} 
return G__23695__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23695.cljs$lang$maxFixedArity = 1;
G__23695.cljs$lang$applyTo = (function (arglist__23697){
var opts__8990__auto__ = cljs.core.first(arglist__23697);
var children__8991__auto__ = cljs.core.rest(arglist__23697);
return G__23695__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23695.cljs$core$IFn$_invoke$arity$variadic = G__23695__delegate;
return G__23695;
})()
;
del = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return del__0.call(this);
default:
var G__23698 = null;
if (arguments.length > 1) {
var G__23699__i = 0, G__23699__a = new Array(arguments.length -  1);
while (G__23699__i < G__23699__a.length) {G__23699__a[G__23699__i] = arguments[G__23699__i + 1]; ++G__23699__i;}
G__23698 = new cljs.core.IndexedSeq(G__23699__a,0);
}
return del__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
del.cljs$lang$maxFixedArity = 1;
del.cljs$lang$applyTo = del__2.cljs$lang$applyTo;
del.cljs$core$IFn$_invoke$arity$0 = del__0;
del.cljs$core$IFn$_invoke$arity$variadic = del__2.cljs$core$IFn$_invoke$arity$variadic;
return del;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.dfn = (function() {
var dfn = null;
var dfn__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dfn,null,null);
});
var dfn__2 = (function() { 
var G__23700__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.dfn,opts__8990__auto__,children__8991__auto__);
};
var G__23700 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23701__i = 0, G__23701__a = new Array(arguments.length -  1);
while (G__23701__i < G__23701__a.length) {G__23701__a[G__23701__i] = arguments[G__23701__i + 1]; ++G__23701__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23701__a,0);
} 
return G__23700__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23700.cljs$lang$maxFixedArity = 1;
G__23700.cljs$lang$applyTo = (function (arglist__23702){
var opts__8990__auto__ = cljs.core.first(arglist__23702);
var children__8991__auto__ = cljs.core.rest(arglist__23702);
return G__23700__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23700.cljs$core$IFn$_invoke$arity$variadic = G__23700__delegate;
return G__23700;
})()
;
dfn = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return dfn__0.call(this);
default:
var G__23703 = null;
if (arguments.length > 1) {
var G__23704__i = 0, G__23704__a = new Array(arguments.length -  1);
while (G__23704__i < G__23704__a.length) {G__23704__a[G__23704__i] = arguments[G__23704__i + 1]; ++G__23704__i;}
G__23703 = new cljs.core.IndexedSeq(G__23704__a,0);
}
return dfn__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dfn.cljs$lang$maxFixedArity = 1;
dfn.cljs$lang$applyTo = dfn__2.cljs$lang$applyTo;
dfn.cljs$core$IFn$_invoke$arity$0 = dfn__0;
dfn.cljs$core$IFn$_invoke$arity$variadic = dfn__2.cljs$core$IFn$_invoke$arity$variadic;
return dfn;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.div = (function() {
var div = null;
var div__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.div,null,null);
});
var div__2 = (function() { 
var G__23705__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.div,opts__8990__auto__,children__8991__auto__);
};
var G__23705 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23706__i = 0, G__23706__a = new Array(arguments.length -  1);
while (G__23706__i < G__23706__a.length) {G__23706__a[G__23706__i] = arguments[G__23706__i + 1]; ++G__23706__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23706__a,0);
} 
return G__23705__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23705.cljs$lang$maxFixedArity = 1;
G__23705.cljs$lang$applyTo = (function (arglist__23707){
var opts__8990__auto__ = cljs.core.first(arglist__23707);
var children__8991__auto__ = cljs.core.rest(arglist__23707);
return G__23705__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23705.cljs$core$IFn$_invoke$arity$variadic = G__23705__delegate;
return G__23705;
})()
;
div = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return div__0.call(this);
default:
var G__23708 = null;
if (arguments.length > 1) {
var G__23709__i = 0, G__23709__a = new Array(arguments.length -  1);
while (G__23709__i < G__23709__a.length) {G__23709__a[G__23709__i] = arguments[G__23709__i + 1]; ++G__23709__i;}
G__23708 = new cljs.core.IndexedSeq(G__23709__a,0);
}
return div__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23708);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
div.cljs$lang$maxFixedArity = 1;
div.cljs$lang$applyTo = div__2.cljs$lang$applyTo;
div.cljs$core$IFn$_invoke$arity$0 = div__0;
div.cljs$core$IFn$_invoke$arity$variadic = div__2.cljs$core$IFn$_invoke$arity$variadic;
return div;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.dl = (function() {
var dl = null;
var dl__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dl,null,null);
});
var dl__2 = (function() { 
var G__23710__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.dl,opts__8990__auto__,children__8991__auto__);
};
var G__23710 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23711__i = 0, G__23711__a = new Array(arguments.length -  1);
while (G__23711__i < G__23711__a.length) {G__23711__a[G__23711__i] = arguments[G__23711__i + 1]; ++G__23711__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23711__a,0);
} 
return G__23710__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23710.cljs$lang$maxFixedArity = 1;
G__23710.cljs$lang$applyTo = (function (arglist__23712){
var opts__8990__auto__ = cljs.core.first(arglist__23712);
var children__8991__auto__ = cljs.core.rest(arglist__23712);
return G__23710__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23710.cljs$core$IFn$_invoke$arity$variadic = G__23710__delegate;
return G__23710;
})()
;
dl = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return dl__0.call(this);
default:
var G__23713 = null;
if (arguments.length > 1) {
var G__23714__i = 0, G__23714__a = new Array(arguments.length -  1);
while (G__23714__i < G__23714__a.length) {G__23714__a[G__23714__i] = arguments[G__23714__i + 1]; ++G__23714__i;}
G__23713 = new cljs.core.IndexedSeq(G__23714__a,0);
}
return dl__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dl.cljs$lang$maxFixedArity = 1;
dl.cljs$lang$applyTo = dl__2.cljs$lang$applyTo;
dl.cljs$core$IFn$_invoke$arity$0 = dl__0;
dl.cljs$core$IFn$_invoke$arity$variadic = dl__2.cljs$core$IFn$_invoke$arity$variadic;
return dl;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.dt = (function() {
var dt = null;
var dt__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.dt,null,null);
});
var dt__2 = (function() { 
var G__23715__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.dt,opts__8990__auto__,children__8991__auto__);
};
var G__23715 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23716__i = 0, G__23716__a = new Array(arguments.length -  1);
while (G__23716__i < G__23716__a.length) {G__23716__a[G__23716__i] = arguments[G__23716__i + 1]; ++G__23716__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23716__a,0);
} 
return G__23715__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23715.cljs$lang$maxFixedArity = 1;
G__23715.cljs$lang$applyTo = (function (arglist__23717){
var opts__8990__auto__ = cljs.core.first(arglist__23717);
var children__8991__auto__ = cljs.core.rest(arglist__23717);
return G__23715__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23715.cljs$core$IFn$_invoke$arity$variadic = G__23715__delegate;
return G__23715;
})()
;
dt = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return dt__0.call(this);
default:
var G__23718 = null;
if (arguments.length > 1) {
var G__23719__i = 0, G__23719__a = new Array(arguments.length -  1);
while (G__23719__i < G__23719__a.length) {G__23719__a[G__23719__i] = arguments[G__23719__i + 1]; ++G__23719__i;}
G__23718 = new cljs.core.IndexedSeq(G__23719__a,0);
}
return dt__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dt.cljs$lang$maxFixedArity = 1;
dt.cljs$lang$applyTo = dt__2.cljs$lang$applyTo;
dt.cljs$core$IFn$_invoke$arity$0 = dt__0;
dt.cljs$core$IFn$_invoke$arity$variadic = dt__2.cljs$core$IFn$_invoke$arity$variadic;
return dt;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.em = (function() {
var em = null;
var em__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.em,null,null);
});
var em__2 = (function() { 
var G__23720__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.em,opts__8990__auto__,children__8991__auto__);
};
var G__23720 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23721__i = 0, G__23721__a = new Array(arguments.length -  1);
while (G__23721__i < G__23721__a.length) {G__23721__a[G__23721__i] = arguments[G__23721__i + 1]; ++G__23721__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23721__a,0);
} 
return G__23720__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23720.cljs$lang$maxFixedArity = 1;
G__23720.cljs$lang$applyTo = (function (arglist__23722){
var opts__8990__auto__ = cljs.core.first(arglist__23722);
var children__8991__auto__ = cljs.core.rest(arglist__23722);
return G__23720__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23720.cljs$core$IFn$_invoke$arity$variadic = G__23720__delegate;
return G__23720;
})()
;
em = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return em__0.call(this);
default:
var G__23723 = null;
if (arguments.length > 1) {
var G__23724__i = 0, G__23724__a = new Array(arguments.length -  1);
while (G__23724__i < G__23724__a.length) {G__23724__a[G__23724__i] = arguments[G__23724__i + 1]; ++G__23724__i;}
G__23723 = new cljs.core.IndexedSeq(G__23724__a,0);
}
return em__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
em.cljs$lang$maxFixedArity = 1;
em.cljs$lang$applyTo = em__2.cljs$lang$applyTo;
em.cljs$core$IFn$_invoke$arity$0 = em__0;
em.cljs$core$IFn$_invoke$arity$variadic = em__2.cljs$core$IFn$_invoke$arity$variadic;
return em;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.embed = (function() {
var embed = null;
var embed__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.embed,null,null);
});
var embed__2 = (function() { 
var G__23725__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.embed,opts__8990__auto__,children__8991__auto__);
};
var G__23725 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23726__i = 0, G__23726__a = new Array(arguments.length -  1);
while (G__23726__i < G__23726__a.length) {G__23726__a[G__23726__i] = arguments[G__23726__i + 1]; ++G__23726__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23726__a,0);
} 
return G__23725__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23725.cljs$lang$maxFixedArity = 1;
G__23725.cljs$lang$applyTo = (function (arglist__23727){
var opts__8990__auto__ = cljs.core.first(arglist__23727);
var children__8991__auto__ = cljs.core.rest(arglist__23727);
return G__23725__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23725.cljs$core$IFn$_invoke$arity$variadic = G__23725__delegate;
return G__23725;
})()
;
embed = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return embed__0.call(this);
default:
var G__23728 = null;
if (arguments.length > 1) {
var G__23729__i = 0, G__23729__a = new Array(arguments.length -  1);
while (G__23729__i < G__23729__a.length) {G__23729__a[G__23729__i] = arguments[G__23729__i + 1]; ++G__23729__i;}
G__23728 = new cljs.core.IndexedSeq(G__23729__a,0);
}
return embed__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23728);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
embed.cljs$lang$maxFixedArity = 1;
embed.cljs$lang$applyTo = embed__2.cljs$lang$applyTo;
embed.cljs$core$IFn$_invoke$arity$0 = embed__0;
embed.cljs$core$IFn$_invoke$arity$variadic = embed__2.cljs$core$IFn$_invoke$arity$variadic;
return embed;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.fieldset = (function() {
var fieldset = null;
var fieldset__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.fieldset,null,null);
});
var fieldset__2 = (function() { 
var G__23730__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.fieldset,opts__8990__auto__,children__8991__auto__);
};
var G__23730 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23731__i = 0, G__23731__a = new Array(arguments.length -  1);
while (G__23731__i < G__23731__a.length) {G__23731__a[G__23731__i] = arguments[G__23731__i + 1]; ++G__23731__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23731__a,0);
} 
return G__23730__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23730.cljs$lang$maxFixedArity = 1;
G__23730.cljs$lang$applyTo = (function (arglist__23732){
var opts__8990__auto__ = cljs.core.first(arglist__23732);
var children__8991__auto__ = cljs.core.rest(arglist__23732);
return G__23730__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23730.cljs$core$IFn$_invoke$arity$variadic = G__23730__delegate;
return G__23730;
})()
;
fieldset = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return fieldset__0.call(this);
default:
var G__23733 = null;
if (arguments.length > 1) {
var G__23734__i = 0, G__23734__a = new Array(arguments.length -  1);
while (G__23734__i < G__23734__a.length) {G__23734__a[G__23734__i] = arguments[G__23734__i + 1]; ++G__23734__i;}
G__23733 = new cljs.core.IndexedSeq(G__23734__a,0);
}
return fieldset__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
fieldset.cljs$lang$maxFixedArity = 1;
fieldset.cljs$lang$applyTo = fieldset__2.cljs$lang$applyTo;
fieldset.cljs$core$IFn$_invoke$arity$0 = fieldset__0;
fieldset.cljs$core$IFn$_invoke$arity$variadic = fieldset__2.cljs$core$IFn$_invoke$arity$variadic;
return fieldset;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.figcaption = (function() {
var figcaption = null;
var figcaption__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figcaption,null,null);
});
var figcaption__2 = (function() { 
var G__23735__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.figcaption,opts__8990__auto__,children__8991__auto__);
};
var G__23735 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23736__i = 0, G__23736__a = new Array(arguments.length -  1);
while (G__23736__i < G__23736__a.length) {G__23736__a[G__23736__i] = arguments[G__23736__i + 1]; ++G__23736__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23736__a,0);
} 
return G__23735__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23735.cljs$lang$maxFixedArity = 1;
G__23735.cljs$lang$applyTo = (function (arglist__23737){
var opts__8990__auto__ = cljs.core.first(arglist__23737);
var children__8991__auto__ = cljs.core.rest(arglist__23737);
return G__23735__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23735.cljs$core$IFn$_invoke$arity$variadic = G__23735__delegate;
return G__23735;
})()
;
figcaption = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return figcaption__0.call(this);
default:
var G__23738 = null;
if (arguments.length > 1) {
var G__23739__i = 0, G__23739__a = new Array(arguments.length -  1);
while (G__23739__i < G__23739__a.length) {G__23739__a[G__23739__i] = arguments[G__23739__i + 1]; ++G__23739__i;}
G__23738 = new cljs.core.IndexedSeq(G__23739__a,0);
}
return figcaption__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figcaption.cljs$lang$maxFixedArity = 1;
figcaption.cljs$lang$applyTo = figcaption__2.cljs$lang$applyTo;
figcaption.cljs$core$IFn$_invoke$arity$0 = figcaption__0;
figcaption.cljs$core$IFn$_invoke$arity$variadic = figcaption__2.cljs$core$IFn$_invoke$arity$variadic;
return figcaption;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.figure = (function() {
var figure = null;
var figure__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.figure,null,null);
});
var figure__2 = (function() { 
var G__23740__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.figure,opts__8990__auto__,children__8991__auto__);
};
var G__23740 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23741__i = 0, G__23741__a = new Array(arguments.length -  1);
while (G__23741__i < G__23741__a.length) {G__23741__a[G__23741__i] = arguments[G__23741__i + 1]; ++G__23741__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23741__a,0);
} 
return G__23740__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23740.cljs$lang$maxFixedArity = 1;
G__23740.cljs$lang$applyTo = (function (arglist__23742){
var opts__8990__auto__ = cljs.core.first(arglist__23742);
var children__8991__auto__ = cljs.core.rest(arglist__23742);
return G__23740__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23740.cljs$core$IFn$_invoke$arity$variadic = G__23740__delegate;
return G__23740;
})()
;
figure = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return figure__0.call(this);
default:
var G__23743 = null;
if (arguments.length > 1) {
var G__23744__i = 0, G__23744__a = new Array(arguments.length -  1);
while (G__23744__i < G__23744__a.length) {G__23744__a[G__23744__i] = arguments[G__23744__i + 1]; ++G__23744__i;}
G__23743 = new cljs.core.IndexedSeq(G__23744__a,0);
}
return figure__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23743);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figure.cljs$lang$maxFixedArity = 1;
figure.cljs$lang$applyTo = figure__2.cljs$lang$applyTo;
figure.cljs$core$IFn$_invoke$arity$0 = figure__0;
figure.cljs$core$IFn$_invoke$arity$variadic = figure__2.cljs$core$IFn$_invoke$arity$variadic;
return figure;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.footer = (function() {
var footer = null;
var footer__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.footer,null,null);
});
var footer__2 = (function() { 
var G__23745__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.footer,opts__8990__auto__,children__8991__auto__);
};
var G__23745 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23746__i = 0, G__23746__a = new Array(arguments.length -  1);
while (G__23746__i < G__23746__a.length) {G__23746__a[G__23746__i] = arguments[G__23746__i + 1]; ++G__23746__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23746__a,0);
} 
return G__23745__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23745.cljs$lang$maxFixedArity = 1;
G__23745.cljs$lang$applyTo = (function (arglist__23747){
var opts__8990__auto__ = cljs.core.first(arglist__23747);
var children__8991__auto__ = cljs.core.rest(arglist__23747);
return G__23745__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23745.cljs$core$IFn$_invoke$arity$variadic = G__23745__delegate;
return G__23745;
})()
;
footer = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return footer__0.call(this);
default:
var G__23748 = null;
if (arguments.length > 1) {
var G__23749__i = 0, G__23749__a = new Array(arguments.length -  1);
while (G__23749__i < G__23749__a.length) {G__23749__a[G__23749__i] = arguments[G__23749__i + 1]; ++G__23749__i;}
G__23748 = new cljs.core.IndexedSeq(G__23749__a,0);
}
return footer__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
footer.cljs$lang$maxFixedArity = 1;
footer.cljs$lang$applyTo = footer__2.cljs$lang$applyTo;
footer.cljs$core$IFn$_invoke$arity$0 = footer__0;
footer.cljs$core$IFn$_invoke$arity$variadic = footer__2.cljs$core$IFn$_invoke$arity$variadic;
return footer;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.form = (function() {
var form = null;
var form__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.form,null,null);
});
var form__2 = (function() { 
var G__23750__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.form,opts__8990__auto__,children__8991__auto__);
};
var G__23750 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23751__i = 0, G__23751__a = new Array(arguments.length -  1);
while (G__23751__i < G__23751__a.length) {G__23751__a[G__23751__i] = arguments[G__23751__i + 1]; ++G__23751__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23751__a,0);
} 
return G__23750__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23750.cljs$lang$maxFixedArity = 1;
G__23750.cljs$lang$applyTo = (function (arglist__23752){
var opts__8990__auto__ = cljs.core.first(arglist__23752);
var children__8991__auto__ = cljs.core.rest(arglist__23752);
return G__23750__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23750.cljs$core$IFn$_invoke$arity$variadic = G__23750__delegate;
return G__23750;
})()
;
form = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return form__0.call(this);
default:
var G__23753 = null;
if (arguments.length > 1) {
var G__23754__i = 0, G__23754__a = new Array(arguments.length -  1);
while (G__23754__i < G__23754__a.length) {G__23754__a[G__23754__i] = arguments[G__23754__i + 1]; ++G__23754__i;}
G__23753 = new cljs.core.IndexedSeq(G__23754__a,0);
}
return form__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23753);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
form.cljs$lang$maxFixedArity = 1;
form.cljs$lang$applyTo = form__2.cljs$lang$applyTo;
form.cljs$core$IFn$_invoke$arity$0 = form__0;
form.cljs$core$IFn$_invoke$arity$variadic = form__2.cljs$core$IFn$_invoke$arity$variadic;
return form;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h1 = (function() {
var h1 = null;
var h1__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h1,null,null);
});
var h1__2 = (function() { 
var G__23755__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.h1,opts__8990__auto__,children__8991__auto__);
};
var G__23755 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23756__i = 0, G__23756__a = new Array(arguments.length -  1);
while (G__23756__i < G__23756__a.length) {G__23756__a[G__23756__i] = arguments[G__23756__i + 1]; ++G__23756__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23756__a,0);
} 
return G__23755__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23755.cljs$lang$maxFixedArity = 1;
G__23755.cljs$lang$applyTo = (function (arglist__23757){
var opts__8990__auto__ = cljs.core.first(arglist__23757);
var children__8991__auto__ = cljs.core.rest(arglist__23757);
return G__23755__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23755.cljs$core$IFn$_invoke$arity$variadic = G__23755__delegate;
return G__23755;
})()
;
h1 = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return h1__0.call(this);
default:
var G__23758 = null;
if (arguments.length > 1) {
var G__23759__i = 0, G__23759__a = new Array(arguments.length -  1);
while (G__23759__i < G__23759__a.length) {G__23759__a[G__23759__i] = arguments[G__23759__i + 1]; ++G__23759__i;}
G__23758 = new cljs.core.IndexedSeq(G__23759__a,0);
}
return h1__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h1.cljs$lang$maxFixedArity = 1;
h1.cljs$lang$applyTo = h1__2.cljs$lang$applyTo;
h1.cljs$core$IFn$_invoke$arity$0 = h1__0;
h1.cljs$core$IFn$_invoke$arity$variadic = h1__2.cljs$core$IFn$_invoke$arity$variadic;
return h1;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h2 = (function() {
var h2 = null;
var h2__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h2,null,null);
});
var h2__2 = (function() { 
var G__23760__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.h2,opts__8990__auto__,children__8991__auto__);
};
var G__23760 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23761__i = 0, G__23761__a = new Array(arguments.length -  1);
while (G__23761__i < G__23761__a.length) {G__23761__a[G__23761__i] = arguments[G__23761__i + 1]; ++G__23761__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23761__a,0);
} 
return G__23760__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23760.cljs$lang$maxFixedArity = 1;
G__23760.cljs$lang$applyTo = (function (arglist__23762){
var opts__8990__auto__ = cljs.core.first(arglist__23762);
var children__8991__auto__ = cljs.core.rest(arglist__23762);
return G__23760__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23760.cljs$core$IFn$_invoke$arity$variadic = G__23760__delegate;
return G__23760;
})()
;
h2 = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return h2__0.call(this);
default:
var G__23763 = null;
if (arguments.length > 1) {
var G__23764__i = 0, G__23764__a = new Array(arguments.length -  1);
while (G__23764__i < G__23764__a.length) {G__23764__a[G__23764__i] = arguments[G__23764__i + 1]; ++G__23764__i;}
G__23763 = new cljs.core.IndexedSeq(G__23764__a,0);
}
return h2__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h2.cljs$lang$maxFixedArity = 1;
h2.cljs$lang$applyTo = h2__2.cljs$lang$applyTo;
h2.cljs$core$IFn$_invoke$arity$0 = h2__0;
h2.cljs$core$IFn$_invoke$arity$variadic = h2__2.cljs$core$IFn$_invoke$arity$variadic;
return h2;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h3 = (function() {
var h3 = null;
var h3__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h3,null,null);
});
var h3__2 = (function() { 
var G__23765__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.h3,opts__8990__auto__,children__8991__auto__);
};
var G__23765 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23766__i = 0, G__23766__a = new Array(arguments.length -  1);
while (G__23766__i < G__23766__a.length) {G__23766__a[G__23766__i] = arguments[G__23766__i + 1]; ++G__23766__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23766__a,0);
} 
return G__23765__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23765.cljs$lang$maxFixedArity = 1;
G__23765.cljs$lang$applyTo = (function (arglist__23767){
var opts__8990__auto__ = cljs.core.first(arglist__23767);
var children__8991__auto__ = cljs.core.rest(arglist__23767);
return G__23765__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23765.cljs$core$IFn$_invoke$arity$variadic = G__23765__delegate;
return G__23765;
})()
;
h3 = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return h3__0.call(this);
default:
var G__23768 = null;
if (arguments.length > 1) {
var G__23769__i = 0, G__23769__a = new Array(arguments.length -  1);
while (G__23769__i < G__23769__a.length) {G__23769__a[G__23769__i] = arguments[G__23769__i + 1]; ++G__23769__i;}
G__23768 = new cljs.core.IndexedSeq(G__23769__a,0);
}
return h3__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h3.cljs$lang$maxFixedArity = 1;
h3.cljs$lang$applyTo = h3__2.cljs$lang$applyTo;
h3.cljs$core$IFn$_invoke$arity$0 = h3__0;
h3.cljs$core$IFn$_invoke$arity$variadic = h3__2.cljs$core$IFn$_invoke$arity$variadic;
return h3;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h4 = (function() {
var h4 = null;
var h4__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h4,null,null);
});
var h4__2 = (function() { 
var G__23770__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.h4,opts__8990__auto__,children__8991__auto__);
};
var G__23770 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23771__i = 0, G__23771__a = new Array(arguments.length -  1);
while (G__23771__i < G__23771__a.length) {G__23771__a[G__23771__i] = arguments[G__23771__i + 1]; ++G__23771__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23771__a,0);
} 
return G__23770__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23770.cljs$lang$maxFixedArity = 1;
G__23770.cljs$lang$applyTo = (function (arglist__23772){
var opts__8990__auto__ = cljs.core.first(arglist__23772);
var children__8991__auto__ = cljs.core.rest(arglist__23772);
return G__23770__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23770.cljs$core$IFn$_invoke$arity$variadic = G__23770__delegate;
return G__23770;
})()
;
h4 = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return h4__0.call(this);
default:
var G__23773 = null;
if (arguments.length > 1) {
var G__23774__i = 0, G__23774__a = new Array(arguments.length -  1);
while (G__23774__i < G__23774__a.length) {G__23774__a[G__23774__i] = arguments[G__23774__i + 1]; ++G__23774__i;}
G__23773 = new cljs.core.IndexedSeq(G__23774__a,0);
}
return h4__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h4.cljs$lang$maxFixedArity = 1;
h4.cljs$lang$applyTo = h4__2.cljs$lang$applyTo;
h4.cljs$core$IFn$_invoke$arity$0 = h4__0;
h4.cljs$core$IFn$_invoke$arity$variadic = h4__2.cljs$core$IFn$_invoke$arity$variadic;
return h4;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h5 = (function() {
var h5 = null;
var h5__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h5,null,null);
});
var h5__2 = (function() { 
var G__23775__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.h5,opts__8990__auto__,children__8991__auto__);
};
var G__23775 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23776__i = 0, G__23776__a = new Array(arguments.length -  1);
while (G__23776__i < G__23776__a.length) {G__23776__a[G__23776__i] = arguments[G__23776__i + 1]; ++G__23776__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23776__a,0);
} 
return G__23775__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23775.cljs$lang$maxFixedArity = 1;
G__23775.cljs$lang$applyTo = (function (arglist__23777){
var opts__8990__auto__ = cljs.core.first(arglist__23777);
var children__8991__auto__ = cljs.core.rest(arglist__23777);
return G__23775__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23775.cljs$core$IFn$_invoke$arity$variadic = G__23775__delegate;
return G__23775;
})()
;
h5 = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return h5__0.call(this);
default:
var G__23778 = null;
if (arguments.length > 1) {
var G__23779__i = 0, G__23779__a = new Array(arguments.length -  1);
while (G__23779__i < G__23779__a.length) {G__23779__a[G__23779__i] = arguments[G__23779__i + 1]; ++G__23779__i;}
G__23778 = new cljs.core.IndexedSeq(G__23779__a,0);
}
return h5__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h5.cljs$lang$maxFixedArity = 1;
h5.cljs$lang$applyTo = h5__2.cljs$lang$applyTo;
h5.cljs$core$IFn$_invoke$arity$0 = h5__0;
h5.cljs$core$IFn$_invoke$arity$variadic = h5__2.cljs$core$IFn$_invoke$arity$variadic;
return h5;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.h6 = (function() {
var h6 = null;
var h6__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.h6,null,null);
});
var h6__2 = (function() { 
var G__23780__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.h6,opts__8990__auto__,children__8991__auto__);
};
var G__23780 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23781__i = 0, G__23781__a = new Array(arguments.length -  1);
while (G__23781__i < G__23781__a.length) {G__23781__a[G__23781__i] = arguments[G__23781__i + 1]; ++G__23781__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23781__a,0);
} 
return G__23780__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23780.cljs$lang$maxFixedArity = 1;
G__23780.cljs$lang$applyTo = (function (arglist__23782){
var opts__8990__auto__ = cljs.core.first(arglist__23782);
var children__8991__auto__ = cljs.core.rest(arglist__23782);
return G__23780__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23780.cljs$core$IFn$_invoke$arity$variadic = G__23780__delegate;
return G__23780;
})()
;
h6 = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return h6__0.call(this);
default:
var G__23783 = null;
if (arguments.length > 1) {
var G__23784__i = 0, G__23784__a = new Array(arguments.length -  1);
while (G__23784__i < G__23784__a.length) {G__23784__a[G__23784__i] = arguments[G__23784__i + 1]; ++G__23784__i;}
G__23783 = new cljs.core.IndexedSeq(G__23784__a,0);
}
return h6__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
h6.cljs$lang$maxFixedArity = 1;
h6.cljs$lang$applyTo = h6__2.cljs$lang$applyTo;
h6.cljs$core$IFn$_invoke$arity$0 = h6__0;
h6.cljs$core$IFn$_invoke$arity$variadic = h6__2.cljs$core$IFn$_invoke$arity$variadic;
return h6;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.head = (function() {
var head = null;
var head__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.head,null,null);
});
var head__2 = (function() { 
var G__23785__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.head,opts__8990__auto__,children__8991__auto__);
};
var G__23785 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23786__i = 0, G__23786__a = new Array(arguments.length -  1);
while (G__23786__i < G__23786__a.length) {G__23786__a[G__23786__i] = arguments[G__23786__i + 1]; ++G__23786__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23786__a,0);
} 
return G__23785__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23785.cljs$lang$maxFixedArity = 1;
G__23785.cljs$lang$applyTo = (function (arglist__23787){
var opts__8990__auto__ = cljs.core.first(arglist__23787);
var children__8991__auto__ = cljs.core.rest(arglist__23787);
return G__23785__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23785.cljs$core$IFn$_invoke$arity$variadic = G__23785__delegate;
return G__23785;
})()
;
head = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return head__0.call(this);
default:
var G__23788 = null;
if (arguments.length > 1) {
var G__23789__i = 0, G__23789__a = new Array(arguments.length -  1);
while (G__23789__i < G__23789__a.length) {G__23789__a[G__23789__i] = arguments[G__23789__i + 1]; ++G__23789__i;}
G__23788 = new cljs.core.IndexedSeq(G__23789__a,0);
}
return head__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
head.cljs$lang$maxFixedArity = 1;
head.cljs$lang$applyTo = head__2.cljs$lang$applyTo;
head.cljs$core$IFn$_invoke$arity$0 = head__0;
head.cljs$core$IFn$_invoke$arity$variadic = head__2.cljs$core$IFn$_invoke$arity$variadic;
return head;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.header = (function() {
var header = null;
var header__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.header,null,null);
});
var header__2 = (function() { 
var G__23790__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.header,opts__8990__auto__,children__8991__auto__);
};
var G__23790 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23791__i = 0, G__23791__a = new Array(arguments.length -  1);
while (G__23791__i < G__23791__a.length) {G__23791__a[G__23791__i] = arguments[G__23791__i + 1]; ++G__23791__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23791__a,0);
} 
return G__23790__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23790.cljs$lang$maxFixedArity = 1;
G__23790.cljs$lang$applyTo = (function (arglist__23792){
var opts__8990__auto__ = cljs.core.first(arglist__23792);
var children__8991__auto__ = cljs.core.rest(arglist__23792);
return G__23790__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23790.cljs$core$IFn$_invoke$arity$variadic = G__23790__delegate;
return G__23790;
})()
;
header = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return header__0.call(this);
default:
var G__23793 = null;
if (arguments.length > 1) {
var G__23794__i = 0, G__23794__a = new Array(arguments.length -  1);
while (G__23794__i < G__23794__a.length) {G__23794__a[G__23794__i] = arguments[G__23794__i + 1]; ++G__23794__i;}
G__23793 = new cljs.core.IndexedSeq(G__23794__a,0);
}
return header__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
header.cljs$lang$maxFixedArity = 1;
header.cljs$lang$applyTo = header__2.cljs$lang$applyTo;
header.cljs$core$IFn$_invoke$arity$0 = header__0;
header.cljs$core$IFn$_invoke$arity$variadic = header__2.cljs$core$IFn$_invoke$arity$variadic;
return header;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.hr = (function() {
var hr = null;
var hr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.hr,null,null);
});
var hr__2 = (function() { 
var G__23795__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.hr,opts__8990__auto__,children__8991__auto__);
};
var G__23795 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23796__i = 0, G__23796__a = new Array(arguments.length -  1);
while (G__23796__i < G__23796__a.length) {G__23796__a[G__23796__i] = arguments[G__23796__i + 1]; ++G__23796__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23796__a,0);
} 
return G__23795__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23795.cljs$lang$maxFixedArity = 1;
G__23795.cljs$lang$applyTo = (function (arglist__23797){
var opts__8990__auto__ = cljs.core.first(arglist__23797);
var children__8991__auto__ = cljs.core.rest(arglist__23797);
return G__23795__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23795.cljs$core$IFn$_invoke$arity$variadic = G__23795__delegate;
return G__23795;
})()
;
hr = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return hr__0.call(this);
default:
var G__23798 = null;
if (arguments.length > 1) {
var G__23799__i = 0, G__23799__a = new Array(arguments.length -  1);
while (G__23799__i < G__23799__a.length) {G__23799__a[G__23799__i] = arguments[G__23799__i + 1]; ++G__23799__i;}
G__23798 = new cljs.core.IndexedSeq(G__23799__a,0);
}
return hr__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23798);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hr.cljs$lang$maxFixedArity = 1;
hr.cljs$lang$applyTo = hr__2.cljs$lang$applyTo;
hr.cljs$core$IFn$_invoke$arity$0 = hr__0;
hr.cljs$core$IFn$_invoke$arity$variadic = hr__2.cljs$core$IFn$_invoke$arity$variadic;
return hr;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.html = (function() {
var html = null;
var html__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.html,null,null);
});
var html__2 = (function() { 
var G__23800__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.html,opts__8990__auto__,children__8991__auto__);
};
var G__23800 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23801__i = 0, G__23801__a = new Array(arguments.length -  1);
while (G__23801__i < G__23801__a.length) {G__23801__a[G__23801__i] = arguments[G__23801__i + 1]; ++G__23801__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23801__a,0);
} 
return G__23800__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23800.cljs$lang$maxFixedArity = 1;
G__23800.cljs$lang$applyTo = (function (arglist__23802){
var opts__8990__auto__ = cljs.core.first(arglist__23802);
var children__8991__auto__ = cljs.core.rest(arglist__23802);
return G__23800__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23800.cljs$core$IFn$_invoke$arity$variadic = G__23800__delegate;
return G__23800;
})()
;
html = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return html__0.call(this);
default:
var G__23803 = null;
if (arguments.length > 1) {
var G__23804__i = 0, G__23804__a = new Array(arguments.length -  1);
while (G__23804__i < G__23804__a.length) {G__23804__a[G__23804__i] = arguments[G__23804__i + 1]; ++G__23804__i;}
G__23803 = new cljs.core.IndexedSeq(G__23804__a,0);
}
return html__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
html.cljs$lang$maxFixedArity = 1;
html.cljs$lang$applyTo = html__2.cljs$lang$applyTo;
html.cljs$core$IFn$_invoke$arity$0 = html__0;
html.cljs$core$IFn$_invoke$arity$variadic = html__2.cljs$core$IFn$_invoke$arity$variadic;
return html;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.i = (function() {
var i = null;
var i__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.i,null,null);
});
var i__2 = (function() { 
var G__23805__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.i,opts__8990__auto__,children__8991__auto__);
};
var G__23805 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23806__i = 0, G__23806__a = new Array(arguments.length -  1);
while (G__23806__i < G__23806__a.length) {G__23806__a[G__23806__i] = arguments[G__23806__i + 1]; ++G__23806__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23806__a,0);
} 
return G__23805__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23805.cljs$lang$maxFixedArity = 1;
G__23805.cljs$lang$applyTo = (function (arglist__23807){
var opts__8990__auto__ = cljs.core.first(arglist__23807);
var children__8991__auto__ = cljs.core.rest(arglist__23807);
return G__23805__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23805.cljs$core$IFn$_invoke$arity$variadic = G__23805__delegate;
return G__23805;
})()
;
i = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return i__0.call(this);
default:
var G__23808 = null;
if (arguments.length > 1) {
var G__23809__i = 0, G__23809__a = new Array(arguments.length -  1);
while (G__23809__i < G__23809__a.length) {G__23809__a[G__23809__i] = arguments[G__23809__i + 1]; ++G__23809__i;}
G__23808 = new cljs.core.IndexedSeq(G__23809__a,0);
}
return i__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
i.cljs$lang$maxFixedArity = 1;
i.cljs$lang$applyTo = i__2.cljs$lang$applyTo;
i.cljs$core$IFn$_invoke$arity$0 = i__0;
i.cljs$core$IFn$_invoke$arity$variadic = i__2.cljs$core$IFn$_invoke$arity$variadic;
return i;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.iframe = (function() {
var iframe = null;
var iframe__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.iframe,null,null);
});
var iframe__2 = (function() { 
var G__23810__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.iframe,opts__8990__auto__,children__8991__auto__);
};
var G__23810 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23811__i = 0, G__23811__a = new Array(arguments.length -  1);
while (G__23811__i < G__23811__a.length) {G__23811__a[G__23811__i] = arguments[G__23811__i + 1]; ++G__23811__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23811__a,0);
} 
return G__23810__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23810.cljs$lang$maxFixedArity = 1;
G__23810.cljs$lang$applyTo = (function (arglist__23812){
var opts__8990__auto__ = cljs.core.first(arglist__23812);
var children__8991__auto__ = cljs.core.rest(arglist__23812);
return G__23810__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23810.cljs$core$IFn$_invoke$arity$variadic = G__23810__delegate;
return G__23810;
})()
;
iframe = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return iframe__0.call(this);
default:
var G__23813 = null;
if (arguments.length > 1) {
var G__23814__i = 0, G__23814__a = new Array(arguments.length -  1);
while (G__23814__i < G__23814__a.length) {G__23814__a[G__23814__i] = arguments[G__23814__i + 1]; ++G__23814__i;}
G__23813 = new cljs.core.IndexedSeq(G__23814__a,0);
}
return iframe__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
iframe.cljs$lang$maxFixedArity = 1;
iframe.cljs$lang$applyTo = iframe__2.cljs$lang$applyTo;
iframe.cljs$core$IFn$_invoke$arity$0 = iframe__0;
iframe.cljs$core$IFn$_invoke$arity$variadic = iframe__2.cljs$core$IFn$_invoke$arity$variadic;
return iframe;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.img = (function() {
var img = null;
var img__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.img,null,null);
});
var img__2 = (function() { 
var G__23815__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.img,opts__8990__auto__,children__8991__auto__);
};
var G__23815 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23816__i = 0, G__23816__a = new Array(arguments.length -  1);
while (G__23816__i < G__23816__a.length) {G__23816__a[G__23816__i] = arguments[G__23816__i + 1]; ++G__23816__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23816__a,0);
} 
return G__23815__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23815.cljs$lang$maxFixedArity = 1;
G__23815.cljs$lang$applyTo = (function (arglist__23817){
var opts__8990__auto__ = cljs.core.first(arglist__23817);
var children__8991__auto__ = cljs.core.rest(arglist__23817);
return G__23815__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23815.cljs$core$IFn$_invoke$arity$variadic = G__23815__delegate;
return G__23815;
})()
;
img = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return img__0.call(this);
default:
var G__23818 = null;
if (arguments.length > 1) {
var G__23819__i = 0, G__23819__a = new Array(arguments.length -  1);
while (G__23819__i < G__23819__a.length) {G__23819__a[G__23819__i] = arguments[G__23819__i + 1]; ++G__23819__i;}
G__23818 = new cljs.core.IndexedSeq(G__23819__a,0);
}
return img__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
img.cljs$lang$maxFixedArity = 1;
img.cljs$lang$applyTo = img__2.cljs$lang$applyTo;
img.cljs$core$IFn$_invoke$arity$0 = img__0;
img.cljs$core$IFn$_invoke$arity$variadic = img__2.cljs$core$IFn$_invoke$arity$variadic;
return img;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ins = (function() {
var ins = null;
var ins__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ins,null,null);
});
var ins__2 = (function() { 
var G__23820__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.ins,opts__8990__auto__,children__8991__auto__);
};
var G__23820 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23821__i = 0, G__23821__a = new Array(arguments.length -  1);
while (G__23821__i < G__23821__a.length) {G__23821__a[G__23821__i] = arguments[G__23821__i + 1]; ++G__23821__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23821__a,0);
} 
return G__23820__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23820.cljs$lang$maxFixedArity = 1;
G__23820.cljs$lang$applyTo = (function (arglist__23822){
var opts__8990__auto__ = cljs.core.first(arglist__23822);
var children__8991__auto__ = cljs.core.rest(arglist__23822);
return G__23820__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23820.cljs$core$IFn$_invoke$arity$variadic = G__23820__delegate;
return G__23820;
})()
;
ins = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return ins__0.call(this);
default:
var G__23823 = null;
if (arguments.length > 1) {
var G__23824__i = 0, G__23824__a = new Array(arguments.length -  1);
while (G__23824__i < G__23824__a.length) {G__23824__a[G__23824__i] = arguments[G__23824__i + 1]; ++G__23824__i;}
G__23823 = new cljs.core.IndexedSeq(G__23824__a,0);
}
return ins__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ins.cljs$lang$maxFixedArity = 1;
ins.cljs$lang$applyTo = ins__2.cljs$lang$applyTo;
ins.cljs$core$IFn$_invoke$arity$0 = ins__0;
ins.cljs$core$IFn$_invoke$arity$variadic = ins__2.cljs$core$IFn$_invoke$arity$variadic;
return ins;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.kbd = (function() {
var kbd = null;
var kbd__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.kbd,null,null);
});
var kbd__2 = (function() { 
var G__23825__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.kbd,opts__8990__auto__,children__8991__auto__);
};
var G__23825 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23826__i = 0, G__23826__a = new Array(arguments.length -  1);
while (G__23826__i < G__23826__a.length) {G__23826__a[G__23826__i] = arguments[G__23826__i + 1]; ++G__23826__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23826__a,0);
} 
return G__23825__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23825.cljs$lang$maxFixedArity = 1;
G__23825.cljs$lang$applyTo = (function (arglist__23827){
var opts__8990__auto__ = cljs.core.first(arglist__23827);
var children__8991__auto__ = cljs.core.rest(arglist__23827);
return G__23825__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23825.cljs$core$IFn$_invoke$arity$variadic = G__23825__delegate;
return G__23825;
})()
;
kbd = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return kbd__0.call(this);
default:
var G__23828 = null;
if (arguments.length > 1) {
var G__23829__i = 0, G__23829__a = new Array(arguments.length -  1);
while (G__23829__i < G__23829__a.length) {G__23829__a[G__23829__i] = arguments[G__23829__i + 1]; ++G__23829__i;}
G__23828 = new cljs.core.IndexedSeq(G__23829__a,0);
}
return kbd__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
kbd.cljs$lang$maxFixedArity = 1;
kbd.cljs$lang$applyTo = kbd__2.cljs$lang$applyTo;
kbd.cljs$core$IFn$_invoke$arity$0 = kbd__0;
kbd.cljs$core$IFn$_invoke$arity$variadic = kbd__2.cljs$core$IFn$_invoke$arity$variadic;
return kbd;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.keygen = (function() {
var keygen = null;
var keygen__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.keygen,null,null);
});
var keygen__2 = (function() { 
var G__23830__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.keygen,opts__8990__auto__,children__8991__auto__);
};
var G__23830 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23831__i = 0, G__23831__a = new Array(arguments.length -  1);
while (G__23831__i < G__23831__a.length) {G__23831__a[G__23831__i] = arguments[G__23831__i + 1]; ++G__23831__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23831__a,0);
} 
return G__23830__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23830.cljs$lang$maxFixedArity = 1;
G__23830.cljs$lang$applyTo = (function (arglist__23832){
var opts__8990__auto__ = cljs.core.first(arglist__23832);
var children__8991__auto__ = cljs.core.rest(arglist__23832);
return G__23830__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23830.cljs$core$IFn$_invoke$arity$variadic = G__23830__delegate;
return G__23830;
})()
;
keygen = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return keygen__0.call(this);
default:
var G__23833 = null;
if (arguments.length > 1) {
var G__23834__i = 0, G__23834__a = new Array(arguments.length -  1);
while (G__23834__i < G__23834__a.length) {G__23834__a[G__23834__i] = arguments[G__23834__i + 1]; ++G__23834__i;}
G__23833 = new cljs.core.IndexedSeq(G__23834__a,0);
}
return keygen__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
keygen.cljs$lang$maxFixedArity = 1;
keygen.cljs$lang$applyTo = keygen__2.cljs$lang$applyTo;
keygen.cljs$core$IFn$_invoke$arity$0 = keygen__0;
keygen.cljs$core$IFn$_invoke$arity$variadic = keygen__2.cljs$core$IFn$_invoke$arity$variadic;
return keygen;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.label = (function() {
var label = null;
var label__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.label,null,null);
});
var label__2 = (function() { 
var G__23835__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.label,opts__8990__auto__,children__8991__auto__);
};
var G__23835 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23836__i = 0, G__23836__a = new Array(arguments.length -  1);
while (G__23836__i < G__23836__a.length) {G__23836__a[G__23836__i] = arguments[G__23836__i + 1]; ++G__23836__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23836__a,0);
} 
return G__23835__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23835.cljs$lang$maxFixedArity = 1;
G__23835.cljs$lang$applyTo = (function (arglist__23837){
var opts__8990__auto__ = cljs.core.first(arglist__23837);
var children__8991__auto__ = cljs.core.rest(arglist__23837);
return G__23835__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23835.cljs$core$IFn$_invoke$arity$variadic = G__23835__delegate;
return G__23835;
})()
;
label = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return label__0.call(this);
default:
var G__23838 = null;
if (arguments.length > 1) {
var G__23839__i = 0, G__23839__a = new Array(arguments.length -  1);
while (G__23839__i < G__23839__a.length) {G__23839__a[G__23839__i] = arguments[G__23839__i + 1]; ++G__23839__i;}
G__23838 = new cljs.core.IndexedSeq(G__23839__a,0);
}
return label__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
label.cljs$lang$maxFixedArity = 1;
label.cljs$lang$applyTo = label__2.cljs$lang$applyTo;
label.cljs$core$IFn$_invoke$arity$0 = label__0;
label.cljs$core$IFn$_invoke$arity$variadic = label__2.cljs$core$IFn$_invoke$arity$variadic;
return label;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.legend = (function() {
var legend = null;
var legend__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.legend,null,null);
});
var legend__2 = (function() { 
var G__23840__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.legend,opts__8990__auto__,children__8991__auto__);
};
var G__23840 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23841__i = 0, G__23841__a = new Array(arguments.length -  1);
while (G__23841__i < G__23841__a.length) {G__23841__a[G__23841__i] = arguments[G__23841__i + 1]; ++G__23841__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23841__a,0);
} 
return G__23840__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23840.cljs$lang$maxFixedArity = 1;
G__23840.cljs$lang$applyTo = (function (arglist__23842){
var opts__8990__auto__ = cljs.core.first(arglist__23842);
var children__8991__auto__ = cljs.core.rest(arglist__23842);
return G__23840__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23840.cljs$core$IFn$_invoke$arity$variadic = G__23840__delegate;
return G__23840;
})()
;
legend = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return legend__0.call(this);
default:
var G__23843 = null;
if (arguments.length > 1) {
var G__23844__i = 0, G__23844__a = new Array(arguments.length -  1);
while (G__23844__i < G__23844__a.length) {G__23844__a[G__23844__i] = arguments[G__23844__i + 1]; ++G__23844__i;}
G__23843 = new cljs.core.IndexedSeq(G__23844__a,0);
}
return legend__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
legend.cljs$lang$maxFixedArity = 1;
legend.cljs$lang$applyTo = legend__2.cljs$lang$applyTo;
legend.cljs$core$IFn$_invoke$arity$0 = legend__0;
legend.cljs$core$IFn$_invoke$arity$variadic = legend__2.cljs$core$IFn$_invoke$arity$variadic;
return legend;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.li = (function() {
var li = null;
var li__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.li,null,null);
});
var li__2 = (function() { 
var G__23845__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.li,opts__8990__auto__,children__8991__auto__);
};
var G__23845 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23846__i = 0, G__23846__a = new Array(arguments.length -  1);
while (G__23846__i < G__23846__a.length) {G__23846__a[G__23846__i] = arguments[G__23846__i + 1]; ++G__23846__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23846__a,0);
} 
return G__23845__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23845.cljs$lang$maxFixedArity = 1;
G__23845.cljs$lang$applyTo = (function (arglist__23847){
var opts__8990__auto__ = cljs.core.first(arglist__23847);
var children__8991__auto__ = cljs.core.rest(arglist__23847);
return G__23845__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23845.cljs$core$IFn$_invoke$arity$variadic = G__23845__delegate;
return G__23845;
})()
;
li = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return li__0.call(this);
default:
var G__23848 = null;
if (arguments.length > 1) {
var G__23849__i = 0, G__23849__a = new Array(arguments.length -  1);
while (G__23849__i < G__23849__a.length) {G__23849__a[G__23849__i] = arguments[G__23849__i + 1]; ++G__23849__i;}
G__23848 = new cljs.core.IndexedSeq(G__23849__a,0);
}
return li__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
li.cljs$lang$maxFixedArity = 1;
li.cljs$lang$applyTo = li__2.cljs$lang$applyTo;
li.cljs$core$IFn$_invoke$arity$0 = li__0;
li.cljs$core$IFn$_invoke$arity$variadic = li__2.cljs$core$IFn$_invoke$arity$variadic;
return li;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.link = (function() {
var link = null;
var link__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.link,null,null);
});
var link__2 = (function() { 
var G__23850__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.link,opts__8990__auto__,children__8991__auto__);
};
var G__23850 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23851__i = 0, G__23851__a = new Array(arguments.length -  1);
while (G__23851__i < G__23851__a.length) {G__23851__a[G__23851__i] = arguments[G__23851__i + 1]; ++G__23851__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23851__a,0);
} 
return G__23850__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23850.cljs$lang$maxFixedArity = 1;
G__23850.cljs$lang$applyTo = (function (arglist__23852){
var opts__8990__auto__ = cljs.core.first(arglist__23852);
var children__8991__auto__ = cljs.core.rest(arglist__23852);
return G__23850__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23850.cljs$core$IFn$_invoke$arity$variadic = G__23850__delegate;
return G__23850;
})()
;
link = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return link__0.call(this);
default:
var G__23853 = null;
if (arguments.length > 1) {
var G__23854__i = 0, G__23854__a = new Array(arguments.length -  1);
while (G__23854__i < G__23854__a.length) {G__23854__a[G__23854__i] = arguments[G__23854__i + 1]; ++G__23854__i;}
G__23853 = new cljs.core.IndexedSeq(G__23854__a,0);
}
return link__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23853);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
link.cljs$lang$maxFixedArity = 1;
link.cljs$lang$applyTo = link__2.cljs$lang$applyTo;
link.cljs$core$IFn$_invoke$arity$0 = link__0;
link.cljs$core$IFn$_invoke$arity$variadic = link__2.cljs$core$IFn$_invoke$arity$variadic;
return link;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.main = (function() {
var main = null;
var main__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.main,null,null);
});
var main__2 = (function() { 
var G__23855__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.main,opts__8990__auto__,children__8991__auto__);
};
var G__23855 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23856__i = 0, G__23856__a = new Array(arguments.length -  1);
while (G__23856__i < G__23856__a.length) {G__23856__a[G__23856__i] = arguments[G__23856__i + 1]; ++G__23856__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23856__a,0);
} 
return G__23855__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23855.cljs$lang$maxFixedArity = 1;
G__23855.cljs$lang$applyTo = (function (arglist__23857){
var opts__8990__auto__ = cljs.core.first(arglist__23857);
var children__8991__auto__ = cljs.core.rest(arglist__23857);
return G__23855__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23855.cljs$core$IFn$_invoke$arity$variadic = G__23855__delegate;
return G__23855;
})()
;
main = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return main__0.call(this);
default:
var G__23858 = null;
if (arguments.length > 1) {
var G__23859__i = 0, G__23859__a = new Array(arguments.length -  1);
while (G__23859__i < G__23859__a.length) {G__23859__a[G__23859__i] = arguments[G__23859__i + 1]; ++G__23859__i;}
G__23858 = new cljs.core.IndexedSeq(G__23859__a,0);
}
return main__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
main.cljs$lang$maxFixedArity = 1;
main.cljs$lang$applyTo = main__2.cljs$lang$applyTo;
main.cljs$core$IFn$_invoke$arity$0 = main__0;
main.cljs$core$IFn$_invoke$arity$variadic = main__2.cljs$core$IFn$_invoke$arity$variadic;
return main;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.map = (function() {
var map = null;
var map__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.map,null,null);
});
var map__2 = (function() { 
var G__23860__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.map,opts__8990__auto__,children__8991__auto__);
};
var G__23860 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23861__i = 0, G__23861__a = new Array(arguments.length -  1);
while (G__23861__i < G__23861__a.length) {G__23861__a[G__23861__i] = arguments[G__23861__i + 1]; ++G__23861__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23861__a,0);
} 
return G__23860__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23860.cljs$lang$maxFixedArity = 1;
G__23860.cljs$lang$applyTo = (function (arglist__23862){
var opts__8990__auto__ = cljs.core.first(arglist__23862);
var children__8991__auto__ = cljs.core.rest(arglist__23862);
return G__23860__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23860.cljs$core$IFn$_invoke$arity$variadic = G__23860__delegate;
return G__23860;
})()
;
map = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return map__0.call(this);
default:
var G__23863 = null;
if (arguments.length > 1) {
var G__23864__i = 0, G__23864__a = new Array(arguments.length -  1);
while (G__23864__i < G__23864__a.length) {G__23864__a[G__23864__i] = arguments[G__23864__i + 1]; ++G__23864__i;}
G__23863 = new cljs.core.IndexedSeq(G__23864__a,0);
}
return map__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$lang$maxFixedArity = 1;
map.cljs$lang$applyTo = map__2.cljs$lang$applyTo;
map.cljs$core$IFn$_invoke$arity$0 = map__0;
map.cljs$core$IFn$_invoke$arity$variadic = map__2.cljs$core$IFn$_invoke$arity$variadic;
return map;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.mark = (function() {
var mark = null;
var mark__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.mark,null,null);
});
var mark__2 = (function() { 
var G__23865__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.mark,opts__8990__auto__,children__8991__auto__);
};
var G__23865 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23866__i = 0, G__23866__a = new Array(arguments.length -  1);
while (G__23866__i < G__23866__a.length) {G__23866__a[G__23866__i] = arguments[G__23866__i + 1]; ++G__23866__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23866__a,0);
} 
return G__23865__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23865.cljs$lang$maxFixedArity = 1;
G__23865.cljs$lang$applyTo = (function (arglist__23867){
var opts__8990__auto__ = cljs.core.first(arglist__23867);
var children__8991__auto__ = cljs.core.rest(arglist__23867);
return G__23865__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23865.cljs$core$IFn$_invoke$arity$variadic = G__23865__delegate;
return G__23865;
})()
;
mark = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return mark__0.call(this);
default:
var G__23868 = null;
if (arguments.length > 1) {
var G__23869__i = 0, G__23869__a = new Array(arguments.length -  1);
while (G__23869__i < G__23869__a.length) {G__23869__a[G__23869__i] = arguments[G__23869__i + 1]; ++G__23869__i;}
G__23868 = new cljs.core.IndexedSeq(G__23869__a,0);
}
return mark__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mark.cljs$lang$maxFixedArity = 1;
mark.cljs$lang$applyTo = mark__2.cljs$lang$applyTo;
mark.cljs$core$IFn$_invoke$arity$0 = mark__0;
mark.cljs$core$IFn$_invoke$arity$variadic = mark__2.cljs$core$IFn$_invoke$arity$variadic;
return mark;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.marquee = (function() {
var marquee = null;
var marquee__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.marquee,null,null);
});
var marquee__2 = (function() { 
var G__23870__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.marquee,opts__8990__auto__,children__8991__auto__);
};
var G__23870 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23871__i = 0, G__23871__a = new Array(arguments.length -  1);
while (G__23871__i < G__23871__a.length) {G__23871__a[G__23871__i] = arguments[G__23871__i + 1]; ++G__23871__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23871__a,0);
} 
return G__23870__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23870.cljs$lang$maxFixedArity = 1;
G__23870.cljs$lang$applyTo = (function (arglist__23872){
var opts__8990__auto__ = cljs.core.first(arglist__23872);
var children__8991__auto__ = cljs.core.rest(arglist__23872);
return G__23870__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23870.cljs$core$IFn$_invoke$arity$variadic = G__23870__delegate;
return G__23870;
})()
;
marquee = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return marquee__0.call(this);
default:
var G__23873 = null;
if (arguments.length > 1) {
var G__23874__i = 0, G__23874__a = new Array(arguments.length -  1);
while (G__23874__i < G__23874__a.length) {G__23874__a[G__23874__i] = arguments[G__23874__i + 1]; ++G__23874__i;}
G__23873 = new cljs.core.IndexedSeq(G__23874__a,0);
}
return marquee__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
marquee.cljs$lang$maxFixedArity = 1;
marquee.cljs$lang$applyTo = marquee__2.cljs$lang$applyTo;
marquee.cljs$core$IFn$_invoke$arity$0 = marquee__0;
marquee.cljs$core$IFn$_invoke$arity$variadic = marquee__2.cljs$core$IFn$_invoke$arity$variadic;
return marquee;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.menu = (function() {
var menu = null;
var menu__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menu,null,null);
});
var menu__2 = (function() { 
var G__23875__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.menu,opts__8990__auto__,children__8991__auto__);
};
var G__23875 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23876__i = 0, G__23876__a = new Array(arguments.length -  1);
while (G__23876__i < G__23876__a.length) {G__23876__a[G__23876__i] = arguments[G__23876__i + 1]; ++G__23876__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23876__a,0);
} 
return G__23875__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23875.cljs$lang$maxFixedArity = 1;
G__23875.cljs$lang$applyTo = (function (arglist__23877){
var opts__8990__auto__ = cljs.core.first(arglist__23877);
var children__8991__auto__ = cljs.core.rest(arglist__23877);
return G__23875__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23875.cljs$core$IFn$_invoke$arity$variadic = G__23875__delegate;
return G__23875;
})()
;
menu = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return menu__0.call(this);
default:
var G__23878 = null;
if (arguments.length > 1) {
var G__23879__i = 0, G__23879__a = new Array(arguments.length -  1);
while (G__23879__i < G__23879__a.length) {G__23879__a[G__23879__i] = arguments[G__23879__i + 1]; ++G__23879__i;}
G__23878 = new cljs.core.IndexedSeq(G__23879__a,0);
}
return menu__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
menu.cljs$lang$maxFixedArity = 1;
menu.cljs$lang$applyTo = menu__2.cljs$lang$applyTo;
menu.cljs$core$IFn$_invoke$arity$0 = menu__0;
menu.cljs$core$IFn$_invoke$arity$variadic = menu__2.cljs$core$IFn$_invoke$arity$variadic;
return menu;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.menuitem = (function() {
var menuitem = null;
var menuitem__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.menuitem,null,null);
});
var menuitem__2 = (function() { 
var G__23880__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.menuitem,opts__8990__auto__,children__8991__auto__);
};
var G__23880 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23881__i = 0, G__23881__a = new Array(arguments.length -  1);
while (G__23881__i < G__23881__a.length) {G__23881__a[G__23881__i] = arguments[G__23881__i + 1]; ++G__23881__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23881__a,0);
} 
return G__23880__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23880.cljs$lang$maxFixedArity = 1;
G__23880.cljs$lang$applyTo = (function (arglist__23882){
var opts__8990__auto__ = cljs.core.first(arglist__23882);
var children__8991__auto__ = cljs.core.rest(arglist__23882);
return G__23880__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23880.cljs$core$IFn$_invoke$arity$variadic = G__23880__delegate;
return G__23880;
})()
;
menuitem = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return menuitem__0.call(this);
default:
var G__23883 = null;
if (arguments.length > 1) {
var G__23884__i = 0, G__23884__a = new Array(arguments.length -  1);
while (G__23884__i < G__23884__a.length) {G__23884__a[G__23884__i] = arguments[G__23884__i + 1]; ++G__23884__i;}
G__23883 = new cljs.core.IndexedSeq(G__23884__a,0);
}
return menuitem__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
menuitem.cljs$lang$maxFixedArity = 1;
menuitem.cljs$lang$applyTo = menuitem__2.cljs$lang$applyTo;
menuitem.cljs$core$IFn$_invoke$arity$0 = menuitem__0;
menuitem.cljs$core$IFn$_invoke$arity$variadic = menuitem__2.cljs$core$IFn$_invoke$arity$variadic;
return menuitem;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.meta = (function() {
var meta = null;
var meta__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meta,null,null);
});
var meta__2 = (function() { 
var G__23885__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.meta,opts__8990__auto__,children__8991__auto__);
};
var G__23885 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23886__i = 0, G__23886__a = new Array(arguments.length -  1);
while (G__23886__i < G__23886__a.length) {G__23886__a[G__23886__i] = arguments[G__23886__i + 1]; ++G__23886__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23886__a,0);
} 
return G__23885__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23885.cljs$lang$maxFixedArity = 1;
G__23885.cljs$lang$applyTo = (function (arglist__23887){
var opts__8990__auto__ = cljs.core.first(arglist__23887);
var children__8991__auto__ = cljs.core.rest(arglist__23887);
return G__23885__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23885.cljs$core$IFn$_invoke$arity$variadic = G__23885__delegate;
return G__23885;
})()
;
meta = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return meta__0.call(this);
default:
var G__23888 = null;
if (arguments.length > 1) {
var G__23889__i = 0, G__23889__a = new Array(arguments.length -  1);
while (G__23889__i < G__23889__a.length) {G__23889__a[G__23889__i] = arguments[G__23889__i + 1]; ++G__23889__i;}
G__23888 = new cljs.core.IndexedSeq(G__23889__a,0);
}
return meta__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
meta.cljs$lang$maxFixedArity = 1;
meta.cljs$lang$applyTo = meta__2.cljs$lang$applyTo;
meta.cljs$core$IFn$_invoke$arity$0 = meta__0;
meta.cljs$core$IFn$_invoke$arity$variadic = meta__2.cljs$core$IFn$_invoke$arity$variadic;
return meta;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.meter = (function() {
var meter = null;
var meter__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.meter,null,null);
});
var meter__2 = (function() { 
var G__23890__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.meter,opts__8990__auto__,children__8991__auto__);
};
var G__23890 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23891__i = 0, G__23891__a = new Array(arguments.length -  1);
while (G__23891__i < G__23891__a.length) {G__23891__a[G__23891__i] = arguments[G__23891__i + 1]; ++G__23891__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23891__a,0);
} 
return G__23890__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23890.cljs$lang$maxFixedArity = 1;
G__23890.cljs$lang$applyTo = (function (arglist__23892){
var opts__8990__auto__ = cljs.core.first(arglist__23892);
var children__8991__auto__ = cljs.core.rest(arglist__23892);
return G__23890__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23890.cljs$core$IFn$_invoke$arity$variadic = G__23890__delegate;
return G__23890;
})()
;
meter = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return meter__0.call(this);
default:
var G__23893 = null;
if (arguments.length > 1) {
var G__23894__i = 0, G__23894__a = new Array(arguments.length -  1);
while (G__23894__i < G__23894__a.length) {G__23894__a[G__23894__i] = arguments[G__23894__i + 1]; ++G__23894__i;}
G__23893 = new cljs.core.IndexedSeq(G__23894__a,0);
}
return meter__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23893);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
meter.cljs$lang$maxFixedArity = 1;
meter.cljs$lang$applyTo = meter__2.cljs$lang$applyTo;
meter.cljs$core$IFn$_invoke$arity$0 = meter__0;
meter.cljs$core$IFn$_invoke$arity$variadic = meter__2.cljs$core$IFn$_invoke$arity$variadic;
return meter;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.nav = (function() {
var nav = null;
var nav__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.nav,null,null);
});
var nav__2 = (function() { 
var G__23895__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.nav,opts__8990__auto__,children__8991__auto__);
};
var G__23895 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23896__i = 0, G__23896__a = new Array(arguments.length -  1);
while (G__23896__i < G__23896__a.length) {G__23896__a[G__23896__i] = arguments[G__23896__i + 1]; ++G__23896__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23896__a,0);
} 
return G__23895__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23895.cljs$lang$maxFixedArity = 1;
G__23895.cljs$lang$applyTo = (function (arglist__23897){
var opts__8990__auto__ = cljs.core.first(arglist__23897);
var children__8991__auto__ = cljs.core.rest(arglist__23897);
return G__23895__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23895.cljs$core$IFn$_invoke$arity$variadic = G__23895__delegate;
return G__23895;
})()
;
nav = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return nav__0.call(this);
default:
var G__23898 = null;
if (arguments.length > 1) {
var G__23899__i = 0, G__23899__a = new Array(arguments.length -  1);
while (G__23899__i < G__23899__a.length) {G__23899__a[G__23899__i] = arguments[G__23899__i + 1]; ++G__23899__i;}
G__23898 = new cljs.core.IndexedSeq(G__23899__a,0);
}
return nav__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
nav.cljs$lang$maxFixedArity = 1;
nav.cljs$lang$applyTo = nav__2.cljs$lang$applyTo;
nav.cljs$core$IFn$_invoke$arity$0 = nav__0;
nav.cljs$core$IFn$_invoke$arity$variadic = nav__2.cljs$core$IFn$_invoke$arity$variadic;
return nav;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.noscript = (function() {
var noscript = null;
var noscript__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.noscript,null,null);
});
var noscript__2 = (function() { 
var G__23900__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.noscript,opts__8990__auto__,children__8991__auto__);
};
var G__23900 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23901__i = 0, G__23901__a = new Array(arguments.length -  1);
while (G__23901__i < G__23901__a.length) {G__23901__a[G__23901__i] = arguments[G__23901__i + 1]; ++G__23901__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23901__a,0);
} 
return G__23900__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23900.cljs$lang$maxFixedArity = 1;
G__23900.cljs$lang$applyTo = (function (arglist__23902){
var opts__8990__auto__ = cljs.core.first(arglist__23902);
var children__8991__auto__ = cljs.core.rest(arglist__23902);
return G__23900__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23900.cljs$core$IFn$_invoke$arity$variadic = G__23900__delegate;
return G__23900;
})()
;
noscript = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return noscript__0.call(this);
default:
var G__23903 = null;
if (arguments.length > 1) {
var G__23904__i = 0, G__23904__a = new Array(arguments.length -  1);
while (G__23904__i < G__23904__a.length) {G__23904__a[G__23904__i] = arguments[G__23904__i + 1]; ++G__23904__i;}
G__23903 = new cljs.core.IndexedSeq(G__23904__a,0);
}
return noscript__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23903);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
noscript.cljs$lang$maxFixedArity = 1;
noscript.cljs$lang$applyTo = noscript__2.cljs$lang$applyTo;
noscript.cljs$core$IFn$_invoke$arity$0 = noscript__0;
noscript.cljs$core$IFn$_invoke$arity$variadic = noscript__2.cljs$core$IFn$_invoke$arity$variadic;
return noscript;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.object = (function() {
var object = null;
var object__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.object,null,null);
});
var object__2 = (function() { 
var G__23905__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.object,opts__8990__auto__,children__8991__auto__);
};
var G__23905 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23906__i = 0, G__23906__a = new Array(arguments.length -  1);
while (G__23906__i < G__23906__a.length) {G__23906__a[G__23906__i] = arguments[G__23906__i + 1]; ++G__23906__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23906__a,0);
} 
return G__23905__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23905.cljs$lang$maxFixedArity = 1;
G__23905.cljs$lang$applyTo = (function (arglist__23907){
var opts__8990__auto__ = cljs.core.first(arglist__23907);
var children__8991__auto__ = cljs.core.rest(arglist__23907);
return G__23905__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23905.cljs$core$IFn$_invoke$arity$variadic = G__23905__delegate;
return G__23905;
})()
;
object = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return object__0.call(this);
default:
var G__23908 = null;
if (arguments.length > 1) {
var G__23909__i = 0, G__23909__a = new Array(arguments.length -  1);
while (G__23909__i < G__23909__a.length) {G__23909__a[G__23909__i] = arguments[G__23909__i + 1]; ++G__23909__i;}
G__23908 = new cljs.core.IndexedSeq(G__23909__a,0);
}
return object__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
object.cljs$lang$maxFixedArity = 1;
object.cljs$lang$applyTo = object__2.cljs$lang$applyTo;
object.cljs$core$IFn$_invoke$arity$0 = object__0;
object.cljs$core$IFn$_invoke$arity$variadic = object__2.cljs$core$IFn$_invoke$arity$variadic;
return object;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ol = (function() {
var ol = null;
var ol__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ol,null,null);
});
var ol__2 = (function() { 
var G__23910__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.ol,opts__8990__auto__,children__8991__auto__);
};
var G__23910 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23911__i = 0, G__23911__a = new Array(arguments.length -  1);
while (G__23911__i < G__23911__a.length) {G__23911__a[G__23911__i] = arguments[G__23911__i + 1]; ++G__23911__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23911__a,0);
} 
return G__23910__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23910.cljs$lang$maxFixedArity = 1;
G__23910.cljs$lang$applyTo = (function (arglist__23912){
var opts__8990__auto__ = cljs.core.first(arglist__23912);
var children__8991__auto__ = cljs.core.rest(arglist__23912);
return G__23910__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23910.cljs$core$IFn$_invoke$arity$variadic = G__23910__delegate;
return G__23910;
})()
;
ol = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return ol__0.call(this);
default:
var G__23913 = null;
if (arguments.length > 1) {
var G__23914__i = 0, G__23914__a = new Array(arguments.length -  1);
while (G__23914__i < G__23914__a.length) {G__23914__a[G__23914__i] = arguments[G__23914__i + 1]; ++G__23914__i;}
G__23913 = new cljs.core.IndexedSeq(G__23914__a,0);
}
return ol__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ol.cljs$lang$maxFixedArity = 1;
ol.cljs$lang$applyTo = ol__2.cljs$lang$applyTo;
ol.cljs$core$IFn$_invoke$arity$0 = ol__0;
ol.cljs$core$IFn$_invoke$arity$variadic = ol__2.cljs$core$IFn$_invoke$arity$variadic;
return ol;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.optgroup = (function() {
var optgroup = null;
var optgroup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.optgroup,null,null);
});
var optgroup__2 = (function() { 
var G__23915__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.optgroup,opts__8990__auto__,children__8991__auto__);
};
var G__23915 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23916__i = 0, G__23916__a = new Array(arguments.length -  1);
while (G__23916__i < G__23916__a.length) {G__23916__a[G__23916__i] = arguments[G__23916__i + 1]; ++G__23916__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23916__a,0);
} 
return G__23915__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23915.cljs$lang$maxFixedArity = 1;
G__23915.cljs$lang$applyTo = (function (arglist__23917){
var opts__8990__auto__ = cljs.core.first(arglist__23917);
var children__8991__auto__ = cljs.core.rest(arglist__23917);
return G__23915__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23915.cljs$core$IFn$_invoke$arity$variadic = G__23915__delegate;
return G__23915;
})()
;
optgroup = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return optgroup__0.call(this);
default:
var G__23918 = null;
if (arguments.length > 1) {
var G__23919__i = 0, G__23919__a = new Array(arguments.length -  1);
while (G__23919__i < G__23919__a.length) {G__23919__a[G__23919__i] = arguments[G__23919__i + 1]; ++G__23919__i;}
G__23918 = new cljs.core.IndexedSeq(G__23919__a,0);
}
return optgroup__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
optgroup.cljs$lang$maxFixedArity = 1;
optgroup.cljs$lang$applyTo = optgroup__2.cljs$lang$applyTo;
optgroup.cljs$core$IFn$_invoke$arity$0 = optgroup__0;
optgroup.cljs$core$IFn$_invoke$arity$variadic = optgroup__2.cljs$core$IFn$_invoke$arity$variadic;
return optgroup;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.output = (function() {
var output = null;
var output__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.output,null,null);
});
var output__2 = (function() { 
var G__23920__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.output,opts__8990__auto__,children__8991__auto__);
};
var G__23920 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23921__i = 0, G__23921__a = new Array(arguments.length -  1);
while (G__23921__i < G__23921__a.length) {G__23921__a[G__23921__i] = arguments[G__23921__i + 1]; ++G__23921__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23921__a,0);
} 
return G__23920__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23920.cljs$lang$maxFixedArity = 1;
G__23920.cljs$lang$applyTo = (function (arglist__23922){
var opts__8990__auto__ = cljs.core.first(arglist__23922);
var children__8991__auto__ = cljs.core.rest(arglist__23922);
return G__23920__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23920.cljs$core$IFn$_invoke$arity$variadic = G__23920__delegate;
return G__23920;
})()
;
output = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return output__0.call(this);
default:
var G__23923 = null;
if (arguments.length > 1) {
var G__23924__i = 0, G__23924__a = new Array(arguments.length -  1);
while (G__23924__i < G__23924__a.length) {G__23924__a[G__23924__i] = arguments[G__23924__i + 1]; ++G__23924__i;}
G__23923 = new cljs.core.IndexedSeq(G__23924__a,0);
}
return output__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
output.cljs$lang$maxFixedArity = 1;
output.cljs$lang$applyTo = output__2.cljs$lang$applyTo;
output.cljs$core$IFn$_invoke$arity$0 = output__0;
output.cljs$core$IFn$_invoke$arity$variadic = output__2.cljs$core$IFn$_invoke$arity$variadic;
return output;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.p = (function() {
var p = null;
var p__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.p,null,null);
});
var p__2 = (function() { 
var G__23925__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.p,opts__8990__auto__,children__8991__auto__);
};
var G__23925 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23926__i = 0, G__23926__a = new Array(arguments.length -  1);
while (G__23926__i < G__23926__a.length) {G__23926__a[G__23926__i] = arguments[G__23926__i + 1]; ++G__23926__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23926__a,0);
} 
return G__23925__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23925.cljs$lang$maxFixedArity = 1;
G__23925.cljs$lang$applyTo = (function (arglist__23927){
var opts__8990__auto__ = cljs.core.first(arglist__23927);
var children__8991__auto__ = cljs.core.rest(arglist__23927);
return G__23925__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23925.cljs$core$IFn$_invoke$arity$variadic = G__23925__delegate;
return G__23925;
})()
;
p = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return p__0.call(this);
default:
var G__23928 = null;
if (arguments.length > 1) {
var G__23929__i = 0, G__23929__a = new Array(arguments.length -  1);
while (G__23929__i < G__23929__a.length) {G__23929__a[G__23929__i] = arguments[G__23929__i + 1]; ++G__23929__i;}
G__23928 = new cljs.core.IndexedSeq(G__23929__a,0);
}
return p__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
p.cljs$lang$maxFixedArity = 1;
p.cljs$lang$applyTo = p__2.cljs$lang$applyTo;
p.cljs$core$IFn$_invoke$arity$0 = p__0;
p.cljs$core$IFn$_invoke$arity$variadic = p__2.cljs$core$IFn$_invoke$arity$variadic;
return p;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.param = (function() {
var param = null;
var param__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.param,null,null);
});
var param__2 = (function() { 
var G__23930__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.param,opts__8990__auto__,children__8991__auto__);
};
var G__23930 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23931__i = 0, G__23931__a = new Array(arguments.length -  1);
while (G__23931__i < G__23931__a.length) {G__23931__a[G__23931__i] = arguments[G__23931__i + 1]; ++G__23931__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23931__a,0);
} 
return G__23930__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23930.cljs$lang$maxFixedArity = 1;
G__23930.cljs$lang$applyTo = (function (arglist__23932){
var opts__8990__auto__ = cljs.core.first(arglist__23932);
var children__8991__auto__ = cljs.core.rest(arglist__23932);
return G__23930__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23930.cljs$core$IFn$_invoke$arity$variadic = G__23930__delegate;
return G__23930;
})()
;
param = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return param__0.call(this);
default:
var G__23933 = null;
if (arguments.length > 1) {
var G__23934__i = 0, G__23934__a = new Array(arguments.length -  1);
while (G__23934__i < G__23934__a.length) {G__23934__a[G__23934__i] = arguments[G__23934__i + 1]; ++G__23934__i;}
G__23933 = new cljs.core.IndexedSeq(G__23934__a,0);
}
return param__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23933);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
param.cljs$lang$maxFixedArity = 1;
param.cljs$lang$applyTo = param__2.cljs$lang$applyTo;
param.cljs$core$IFn$_invoke$arity$0 = param__0;
param.cljs$core$IFn$_invoke$arity$variadic = param__2.cljs$core$IFn$_invoke$arity$variadic;
return param;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.pre = (function() {
var pre = null;
var pre__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.pre,null,null);
});
var pre__2 = (function() { 
var G__23935__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.pre,opts__8990__auto__,children__8991__auto__);
};
var G__23935 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23936__i = 0, G__23936__a = new Array(arguments.length -  1);
while (G__23936__i < G__23936__a.length) {G__23936__a[G__23936__i] = arguments[G__23936__i + 1]; ++G__23936__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23936__a,0);
} 
return G__23935__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23935.cljs$lang$maxFixedArity = 1;
G__23935.cljs$lang$applyTo = (function (arglist__23937){
var opts__8990__auto__ = cljs.core.first(arglist__23937);
var children__8991__auto__ = cljs.core.rest(arglist__23937);
return G__23935__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23935.cljs$core$IFn$_invoke$arity$variadic = G__23935__delegate;
return G__23935;
})()
;
pre = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return pre__0.call(this);
default:
var G__23938 = null;
if (arguments.length > 1) {
var G__23939__i = 0, G__23939__a = new Array(arguments.length -  1);
while (G__23939__i < G__23939__a.length) {G__23939__a[G__23939__i] = arguments[G__23939__i + 1]; ++G__23939__i;}
G__23938 = new cljs.core.IndexedSeq(G__23939__a,0);
}
return pre__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pre.cljs$lang$maxFixedArity = 1;
pre.cljs$lang$applyTo = pre__2.cljs$lang$applyTo;
pre.cljs$core$IFn$_invoke$arity$0 = pre__0;
pre.cljs$core$IFn$_invoke$arity$variadic = pre__2.cljs$core$IFn$_invoke$arity$variadic;
return pre;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.progress = (function() {
var progress = null;
var progress__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.progress,null,null);
});
var progress__2 = (function() { 
var G__23940__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.progress,opts__8990__auto__,children__8991__auto__);
};
var G__23940 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23941__i = 0, G__23941__a = new Array(arguments.length -  1);
while (G__23941__i < G__23941__a.length) {G__23941__a[G__23941__i] = arguments[G__23941__i + 1]; ++G__23941__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23941__a,0);
} 
return G__23940__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23940.cljs$lang$maxFixedArity = 1;
G__23940.cljs$lang$applyTo = (function (arglist__23942){
var opts__8990__auto__ = cljs.core.first(arglist__23942);
var children__8991__auto__ = cljs.core.rest(arglist__23942);
return G__23940__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23940.cljs$core$IFn$_invoke$arity$variadic = G__23940__delegate;
return G__23940;
})()
;
progress = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return progress__0.call(this);
default:
var G__23943 = null;
if (arguments.length > 1) {
var G__23944__i = 0, G__23944__a = new Array(arguments.length -  1);
while (G__23944__i < G__23944__a.length) {G__23944__a[G__23944__i] = arguments[G__23944__i + 1]; ++G__23944__i;}
G__23943 = new cljs.core.IndexedSeq(G__23944__a,0);
}
return progress__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
progress.cljs$lang$maxFixedArity = 1;
progress.cljs$lang$applyTo = progress__2.cljs$lang$applyTo;
progress.cljs$core$IFn$_invoke$arity$0 = progress__0;
progress.cljs$core$IFn$_invoke$arity$variadic = progress__2.cljs$core$IFn$_invoke$arity$variadic;
return progress;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.q = (function() {
var q = null;
var q__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.q,null,null);
});
var q__2 = (function() { 
var G__23945__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.q,opts__8990__auto__,children__8991__auto__);
};
var G__23945 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23946__i = 0, G__23946__a = new Array(arguments.length -  1);
while (G__23946__i < G__23946__a.length) {G__23946__a[G__23946__i] = arguments[G__23946__i + 1]; ++G__23946__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23946__a,0);
} 
return G__23945__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23945.cljs$lang$maxFixedArity = 1;
G__23945.cljs$lang$applyTo = (function (arglist__23947){
var opts__8990__auto__ = cljs.core.first(arglist__23947);
var children__8991__auto__ = cljs.core.rest(arglist__23947);
return G__23945__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23945.cljs$core$IFn$_invoke$arity$variadic = G__23945__delegate;
return G__23945;
})()
;
q = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return q__0.call(this);
default:
var G__23948 = null;
if (arguments.length > 1) {
var G__23949__i = 0, G__23949__a = new Array(arguments.length -  1);
while (G__23949__i < G__23949__a.length) {G__23949__a[G__23949__i] = arguments[G__23949__i + 1]; ++G__23949__i;}
G__23948 = new cljs.core.IndexedSeq(G__23949__a,0);
}
return q__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
q.cljs$lang$maxFixedArity = 1;
q.cljs$lang$applyTo = q__2.cljs$lang$applyTo;
q.cljs$core$IFn$_invoke$arity$0 = q__0;
q.cljs$core$IFn$_invoke$arity$variadic = q__2.cljs$core$IFn$_invoke$arity$variadic;
return q;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.rp = (function() {
var rp = null;
var rp__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rp,null,null);
});
var rp__2 = (function() { 
var G__23950__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.rp,opts__8990__auto__,children__8991__auto__);
};
var G__23950 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23951__i = 0, G__23951__a = new Array(arguments.length -  1);
while (G__23951__i < G__23951__a.length) {G__23951__a[G__23951__i] = arguments[G__23951__i + 1]; ++G__23951__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23951__a,0);
} 
return G__23950__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23950.cljs$lang$maxFixedArity = 1;
G__23950.cljs$lang$applyTo = (function (arglist__23952){
var opts__8990__auto__ = cljs.core.first(arglist__23952);
var children__8991__auto__ = cljs.core.rest(arglist__23952);
return G__23950__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23950.cljs$core$IFn$_invoke$arity$variadic = G__23950__delegate;
return G__23950;
})()
;
rp = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return rp__0.call(this);
default:
var G__23953 = null;
if (arguments.length > 1) {
var G__23954__i = 0, G__23954__a = new Array(arguments.length -  1);
while (G__23954__i < G__23954__a.length) {G__23954__a[G__23954__i] = arguments[G__23954__i + 1]; ++G__23954__i;}
G__23953 = new cljs.core.IndexedSeq(G__23954__a,0);
}
return rp__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rp.cljs$lang$maxFixedArity = 1;
rp.cljs$lang$applyTo = rp__2.cljs$lang$applyTo;
rp.cljs$core$IFn$_invoke$arity$0 = rp__0;
rp.cljs$core$IFn$_invoke$arity$variadic = rp__2.cljs$core$IFn$_invoke$arity$variadic;
return rp;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.rt = (function() {
var rt = null;
var rt__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rt,null,null);
});
var rt__2 = (function() { 
var G__23955__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.rt,opts__8990__auto__,children__8991__auto__);
};
var G__23955 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23956__i = 0, G__23956__a = new Array(arguments.length -  1);
while (G__23956__i < G__23956__a.length) {G__23956__a[G__23956__i] = arguments[G__23956__i + 1]; ++G__23956__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23956__a,0);
} 
return G__23955__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23955.cljs$lang$maxFixedArity = 1;
G__23955.cljs$lang$applyTo = (function (arglist__23957){
var opts__8990__auto__ = cljs.core.first(arglist__23957);
var children__8991__auto__ = cljs.core.rest(arglist__23957);
return G__23955__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23955.cljs$core$IFn$_invoke$arity$variadic = G__23955__delegate;
return G__23955;
})()
;
rt = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return rt__0.call(this);
default:
var G__23958 = null;
if (arguments.length > 1) {
var G__23959__i = 0, G__23959__a = new Array(arguments.length -  1);
while (G__23959__i < G__23959__a.length) {G__23959__a[G__23959__i] = arguments[G__23959__i + 1]; ++G__23959__i;}
G__23958 = new cljs.core.IndexedSeq(G__23959__a,0);
}
return rt__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rt.cljs$lang$maxFixedArity = 1;
rt.cljs$lang$applyTo = rt__2.cljs$lang$applyTo;
rt.cljs$core$IFn$_invoke$arity$0 = rt__0;
rt.cljs$core$IFn$_invoke$arity$variadic = rt__2.cljs$core$IFn$_invoke$arity$variadic;
return rt;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ruby = (function() {
var ruby = null;
var ruby__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ruby,null,null);
});
var ruby__2 = (function() { 
var G__23960__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.ruby,opts__8990__auto__,children__8991__auto__);
};
var G__23960 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23961__i = 0, G__23961__a = new Array(arguments.length -  1);
while (G__23961__i < G__23961__a.length) {G__23961__a[G__23961__i] = arguments[G__23961__i + 1]; ++G__23961__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23961__a,0);
} 
return G__23960__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23960.cljs$lang$maxFixedArity = 1;
G__23960.cljs$lang$applyTo = (function (arglist__23962){
var opts__8990__auto__ = cljs.core.first(arglist__23962);
var children__8991__auto__ = cljs.core.rest(arglist__23962);
return G__23960__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23960.cljs$core$IFn$_invoke$arity$variadic = G__23960__delegate;
return G__23960;
})()
;
ruby = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return ruby__0.call(this);
default:
var G__23963 = null;
if (arguments.length > 1) {
var G__23964__i = 0, G__23964__a = new Array(arguments.length -  1);
while (G__23964__i < G__23964__a.length) {G__23964__a[G__23964__i] = arguments[G__23964__i + 1]; ++G__23964__i;}
G__23963 = new cljs.core.IndexedSeq(G__23964__a,0);
}
return ruby__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ruby.cljs$lang$maxFixedArity = 1;
ruby.cljs$lang$applyTo = ruby__2.cljs$lang$applyTo;
ruby.cljs$core$IFn$_invoke$arity$0 = ruby__0;
ruby.cljs$core$IFn$_invoke$arity$variadic = ruby__2.cljs$core$IFn$_invoke$arity$variadic;
return ruby;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.s = (function() {
var s = null;
var s__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.s,null,null);
});
var s__2 = (function() { 
var G__23965__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.s,opts__8990__auto__,children__8991__auto__);
};
var G__23965 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23966__i = 0, G__23966__a = new Array(arguments.length -  1);
while (G__23966__i < G__23966__a.length) {G__23966__a[G__23966__i] = arguments[G__23966__i + 1]; ++G__23966__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23966__a,0);
} 
return G__23965__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23965.cljs$lang$maxFixedArity = 1;
G__23965.cljs$lang$applyTo = (function (arglist__23967){
var opts__8990__auto__ = cljs.core.first(arglist__23967);
var children__8991__auto__ = cljs.core.rest(arglist__23967);
return G__23965__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23965.cljs$core$IFn$_invoke$arity$variadic = G__23965__delegate;
return G__23965;
})()
;
s = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return s__0.call(this);
default:
var G__23968 = null;
if (arguments.length > 1) {
var G__23969__i = 0, G__23969__a = new Array(arguments.length -  1);
while (G__23969__i < G__23969__a.length) {G__23969__a[G__23969__i] = arguments[G__23969__i + 1]; ++G__23969__i;}
G__23968 = new cljs.core.IndexedSeq(G__23969__a,0);
}
return s__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
s.cljs$lang$maxFixedArity = 1;
s.cljs$lang$applyTo = s__2.cljs$lang$applyTo;
s.cljs$core$IFn$_invoke$arity$0 = s__0;
s.cljs$core$IFn$_invoke$arity$variadic = s__2.cljs$core$IFn$_invoke$arity$variadic;
return s;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.samp = (function() {
var samp = null;
var samp__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.samp,null,null);
});
var samp__2 = (function() { 
var G__23970__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.samp,opts__8990__auto__,children__8991__auto__);
};
var G__23970 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23971__i = 0, G__23971__a = new Array(arguments.length -  1);
while (G__23971__i < G__23971__a.length) {G__23971__a[G__23971__i] = arguments[G__23971__i + 1]; ++G__23971__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23971__a,0);
} 
return G__23970__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23970.cljs$lang$maxFixedArity = 1;
G__23970.cljs$lang$applyTo = (function (arglist__23972){
var opts__8990__auto__ = cljs.core.first(arglist__23972);
var children__8991__auto__ = cljs.core.rest(arglist__23972);
return G__23970__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23970.cljs$core$IFn$_invoke$arity$variadic = G__23970__delegate;
return G__23970;
})()
;
samp = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return samp__0.call(this);
default:
var G__23973 = null;
if (arguments.length > 1) {
var G__23974__i = 0, G__23974__a = new Array(arguments.length -  1);
while (G__23974__i < G__23974__a.length) {G__23974__a[G__23974__i] = arguments[G__23974__i + 1]; ++G__23974__i;}
G__23973 = new cljs.core.IndexedSeq(G__23974__a,0);
}
return samp__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
samp.cljs$lang$maxFixedArity = 1;
samp.cljs$lang$applyTo = samp__2.cljs$lang$applyTo;
samp.cljs$core$IFn$_invoke$arity$0 = samp__0;
samp.cljs$core$IFn$_invoke$arity$variadic = samp__2.cljs$core$IFn$_invoke$arity$variadic;
return samp;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.script = (function() {
var script = null;
var script__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.script,null,null);
});
var script__2 = (function() { 
var G__23975__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.script,opts__8990__auto__,children__8991__auto__);
};
var G__23975 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23976__i = 0, G__23976__a = new Array(arguments.length -  1);
while (G__23976__i < G__23976__a.length) {G__23976__a[G__23976__i] = arguments[G__23976__i + 1]; ++G__23976__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23976__a,0);
} 
return G__23975__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23975.cljs$lang$maxFixedArity = 1;
G__23975.cljs$lang$applyTo = (function (arglist__23977){
var opts__8990__auto__ = cljs.core.first(arglist__23977);
var children__8991__auto__ = cljs.core.rest(arglist__23977);
return G__23975__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23975.cljs$core$IFn$_invoke$arity$variadic = G__23975__delegate;
return G__23975;
})()
;
script = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return script__0.call(this);
default:
var G__23978 = null;
if (arguments.length > 1) {
var G__23979__i = 0, G__23979__a = new Array(arguments.length -  1);
while (G__23979__i < G__23979__a.length) {G__23979__a[G__23979__i] = arguments[G__23979__i + 1]; ++G__23979__i;}
G__23978 = new cljs.core.IndexedSeq(G__23979__a,0);
}
return script__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23978);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
script.cljs$lang$maxFixedArity = 1;
script.cljs$lang$applyTo = script__2.cljs$lang$applyTo;
script.cljs$core$IFn$_invoke$arity$0 = script__0;
script.cljs$core$IFn$_invoke$arity$variadic = script__2.cljs$core$IFn$_invoke$arity$variadic;
return script;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.section = (function() {
var section = null;
var section__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.section,null,null);
});
var section__2 = (function() { 
var G__23980__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.section,opts__8990__auto__,children__8991__auto__);
};
var G__23980 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23981__i = 0, G__23981__a = new Array(arguments.length -  1);
while (G__23981__i < G__23981__a.length) {G__23981__a[G__23981__i] = arguments[G__23981__i + 1]; ++G__23981__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23981__a,0);
} 
return G__23980__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23980.cljs$lang$maxFixedArity = 1;
G__23980.cljs$lang$applyTo = (function (arglist__23982){
var opts__8990__auto__ = cljs.core.first(arglist__23982);
var children__8991__auto__ = cljs.core.rest(arglist__23982);
return G__23980__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23980.cljs$core$IFn$_invoke$arity$variadic = G__23980__delegate;
return G__23980;
})()
;
section = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return section__0.call(this);
default:
var G__23983 = null;
if (arguments.length > 1) {
var G__23984__i = 0, G__23984__a = new Array(arguments.length -  1);
while (G__23984__i < G__23984__a.length) {G__23984__a[G__23984__i] = arguments[G__23984__i + 1]; ++G__23984__i;}
G__23983 = new cljs.core.IndexedSeq(G__23984__a,0);
}
return section__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
section.cljs$lang$maxFixedArity = 1;
section.cljs$lang$applyTo = section__2.cljs$lang$applyTo;
section.cljs$core$IFn$_invoke$arity$0 = section__0;
section.cljs$core$IFn$_invoke$arity$variadic = section__2.cljs$core$IFn$_invoke$arity$variadic;
return section;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.select = (function() {
var select = null;
var select__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.select,null,null);
});
var select__2 = (function() { 
var G__23985__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.select,opts__8990__auto__,children__8991__auto__);
};
var G__23985 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23986__i = 0, G__23986__a = new Array(arguments.length -  1);
while (G__23986__i < G__23986__a.length) {G__23986__a[G__23986__i] = arguments[G__23986__i + 1]; ++G__23986__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23986__a,0);
} 
return G__23985__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23985.cljs$lang$maxFixedArity = 1;
G__23985.cljs$lang$applyTo = (function (arglist__23987){
var opts__8990__auto__ = cljs.core.first(arglist__23987);
var children__8991__auto__ = cljs.core.rest(arglist__23987);
return G__23985__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23985.cljs$core$IFn$_invoke$arity$variadic = G__23985__delegate;
return G__23985;
})()
;
select = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return select__0.call(this);
default:
var G__23988 = null;
if (arguments.length > 1) {
var G__23989__i = 0, G__23989__a = new Array(arguments.length -  1);
while (G__23989__i < G__23989__a.length) {G__23989__a[G__23989__i] = arguments[G__23989__i + 1]; ++G__23989__i;}
G__23988 = new cljs.core.IndexedSeq(G__23989__a,0);
}
return select__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select.cljs$lang$maxFixedArity = 1;
select.cljs$lang$applyTo = select__2.cljs$lang$applyTo;
select.cljs$core$IFn$_invoke$arity$0 = select__0;
select.cljs$core$IFn$_invoke$arity$variadic = select__2.cljs$core$IFn$_invoke$arity$variadic;
return select;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.small = (function() {
var small = null;
var small__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.small,null,null);
});
var small__2 = (function() { 
var G__23990__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.small,opts__8990__auto__,children__8991__auto__);
};
var G__23990 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23991__i = 0, G__23991__a = new Array(arguments.length -  1);
while (G__23991__i < G__23991__a.length) {G__23991__a[G__23991__i] = arguments[G__23991__i + 1]; ++G__23991__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23991__a,0);
} 
return G__23990__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23990.cljs$lang$maxFixedArity = 1;
G__23990.cljs$lang$applyTo = (function (arglist__23992){
var opts__8990__auto__ = cljs.core.first(arglist__23992);
var children__8991__auto__ = cljs.core.rest(arglist__23992);
return G__23990__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23990.cljs$core$IFn$_invoke$arity$variadic = G__23990__delegate;
return G__23990;
})()
;
small = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return small__0.call(this);
default:
var G__23993 = null;
if (arguments.length > 1) {
var G__23994__i = 0, G__23994__a = new Array(arguments.length -  1);
while (G__23994__i < G__23994__a.length) {G__23994__a[G__23994__i] = arguments[G__23994__i + 1]; ++G__23994__i;}
G__23993 = new cljs.core.IndexedSeq(G__23994__a,0);
}
return small__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
small.cljs$lang$maxFixedArity = 1;
small.cljs$lang$applyTo = small__2.cljs$lang$applyTo;
small.cljs$core$IFn$_invoke$arity$0 = small__0;
small.cljs$core$IFn$_invoke$arity$variadic = small__2.cljs$core$IFn$_invoke$arity$variadic;
return small;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.source = (function() {
var source = null;
var source__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.source,null,null);
});
var source__2 = (function() { 
var G__23995__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.source,opts__8990__auto__,children__8991__auto__);
};
var G__23995 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__23996__i = 0, G__23996__a = new Array(arguments.length -  1);
while (G__23996__i < G__23996__a.length) {G__23996__a[G__23996__i] = arguments[G__23996__i + 1]; ++G__23996__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__23996__a,0);
} 
return G__23995__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__23995.cljs$lang$maxFixedArity = 1;
G__23995.cljs$lang$applyTo = (function (arglist__23997){
var opts__8990__auto__ = cljs.core.first(arglist__23997);
var children__8991__auto__ = cljs.core.rest(arglist__23997);
return G__23995__delegate(opts__8990__auto__,children__8991__auto__);
});
G__23995.cljs$core$IFn$_invoke$arity$variadic = G__23995__delegate;
return G__23995;
})()
;
source = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return source__0.call(this);
default:
var G__23998 = null;
if (arguments.length > 1) {
var G__23999__i = 0, G__23999__a = new Array(arguments.length -  1);
while (G__23999__i < G__23999__a.length) {G__23999__a[G__23999__i] = arguments[G__23999__i + 1]; ++G__23999__i;}
G__23998 = new cljs.core.IndexedSeq(G__23999__a,0);
}
return source__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__23998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
source.cljs$lang$maxFixedArity = 1;
source.cljs$lang$applyTo = source__2.cljs$lang$applyTo;
source.cljs$core$IFn$_invoke$arity$0 = source__0;
source.cljs$core$IFn$_invoke$arity$variadic = source__2.cljs$core$IFn$_invoke$arity$variadic;
return source;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.span = (function() {
var span = null;
var span__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.span,null,null);
});
var span__2 = (function() { 
var G__24000__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.span,opts__8990__auto__,children__8991__auto__);
};
var G__24000 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24001__i = 0, G__24001__a = new Array(arguments.length -  1);
while (G__24001__i < G__24001__a.length) {G__24001__a[G__24001__i] = arguments[G__24001__i + 1]; ++G__24001__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24001__a,0);
} 
return G__24000__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24000.cljs$lang$maxFixedArity = 1;
G__24000.cljs$lang$applyTo = (function (arglist__24002){
var opts__8990__auto__ = cljs.core.first(arglist__24002);
var children__8991__auto__ = cljs.core.rest(arglist__24002);
return G__24000__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24000.cljs$core$IFn$_invoke$arity$variadic = G__24000__delegate;
return G__24000;
})()
;
span = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return span__0.call(this);
default:
var G__24003 = null;
if (arguments.length > 1) {
var G__24004__i = 0, G__24004__a = new Array(arguments.length -  1);
while (G__24004__i < G__24004__a.length) {G__24004__a[G__24004__i] = arguments[G__24004__i + 1]; ++G__24004__i;}
G__24003 = new cljs.core.IndexedSeq(G__24004__a,0);
}
return span__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
span.cljs$lang$maxFixedArity = 1;
span.cljs$lang$applyTo = span__2.cljs$lang$applyTo;
span.cljs$core$IFn$_invoke$arity$0 = span__0;
span.cljs$core$IFn$_invoke$arity$variadic = span__2.cljs$core$IFn$_invoke$arity$variadic;
return span;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.strong = (function() {
var strong = null;
var strong__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.strong,null,null);
});
var strong__2 = (function() { 
var G__24005__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.strong,opts__8990__auto__,children__8991__auto__);
};
var G__24005 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24006__i = 0, G__24006__a = new Array(arguments.length -  1);
while (G__24006__i < G__24006__a.length) {G__24006__a[G__24006__i] = arguments[G__24006__i + 1]; ++G__24006__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24006__a,0);
} 
return G__24005__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24005.cljs$lang$maxFixedArity = 1;
G__24005.cljs$lang$applyTo = (function (arglist__24007){
var opts__8990__auto__ = cljs.core.first(arglist__24007);
var children__8991__auto__ = cljs.core.rest(arglist__24007);
return G__24005__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24005.cljs$core$IFn$_invoke$arity$variadic = G__24005__delegate;
return G__24005;
})()
;
strong = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return strong__0.call(this);
default:
var G__24008 = null;
if (arguments.length > 1) {
var G__24009__i = 0, G__24009__a = new Array(arguments.length -  1);
while (G__24009__i < G__24009__a.length) {G__24009__a[G__24009__i] = arguments[G__24009__i + 1]; ++G__24009__i;}
G__24008 = new cljs.core.IndexedSeq(G__24009__a,0);
}
return strong__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
strong.cljs$lang$maxFixedArity = 1;
strong.cljs$lang$applyTo = strong__2.cljs$lang$applyTo;
strong.cljs$core$IFn$_invoke$arity$0 = strong__0;
strong.cljs$core$IFn$_invoke$arity$variadic = strong__2.cljs$core$IFn$_invoke$arity$variadic;
return strong;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.style = (function() {
var style = null;
var style__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.style,null,null);
});
var style__2 = (function() { 
var G__24010__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.style,opts__8990__auto__,children__8991__auto__);
};
var G__24010 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24011__i = 0, G__24011__a = new Array(arguments.length -  1);
while (G__24011__i < G__24011__a.length) {G__24011__a[G__24011__i] = arguments[G__24011__i + 1]; ++G__24011__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24011__a,0);
} 
return G__24010__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24010.cljs$lang$maxFixedArity = 1;
G__24010.cljs$lang$applyTo = (function (arglist__24012){
var opts__8990__auto__ = cljs.core.first(arglist__24012);
var children__8991__auto__ = cljs.core.rest(arglist__24012);
return G__24010__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24010.cljs$core$IFn$_invoke$arity$variadic = G__24010__delegate;
return G__24010;
})()
;
style = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return style__0.call(this);
default:
var G__24013 = null;
if (arguments.length > 1) {
var G__24014__i = 0, G__24014__a = new Array(arguments.length -  1);
while (G__24014__i < G__24014__a.length) {G__24014__a[G__24014__i] = arguments[G__24014__i + 1]; ++G__24014__i;}
G__24013 = new cljs.core.IndexedSeq(G__24014__a,0);
}
return style__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24013);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
style.cljs$lang$maxFixedArity = 1;
style.cljs$lang$applyTo = style__2.cljs$lang$applyTo;
style.cljs$core$IFn$_invoke$arity$0 = style__0;
style.cljs$core$IFn$_invoke$arity$variadic = style__2.cljs$core$IFn$_invoke$arity$variadic;
return style;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.sub = (function() {
var sub = null;
var sub__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sub,null,null);
});
var sub__2 = (function() { 
var G__24015__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.sub,opts__8990__auto__,children__8991__auto__);
};
var G__24015 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24016__i = 0, G__24016__a = new Array(arguments.length -  1);
while (G__24016__i < G__24016__a.length) {G__24016__a[G__24016__i] = arguments[G__24016__i + 1]; ++G__24016__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24016__a,0);
} 
return G__24015__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24015.cljs$lang$maxFixedArity = 1;
G__24015.cljs$lang$applyTo = (function (arglist__24017){
var opts__8990__auto__ = cljs.core.first(arglist__24017);
var children__8991__auto__ = cljs.core.rest(arglist__24017);
return G__24015__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24015.cljs$core$IFn$_invoke$arity$variadic = G__24015__delegate;
return G__24015;
})()
;
sub = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return sub__0.call(this);
default:
var G__24018 = null;
if (arguments.length > 1) {
var G__24019__i = 0, G__24019__a = new Array(arguments.length -  1);
while (G__24019__i < G__24019__a.length) {G__24019__a[G__24019__i] = arguments[G__24019__i + 1]; ++G__24019__i;}
G__24018 = new cljs.core.IndexedSeq(G__24019__a,0);
}
return sub__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$lang$maxFixedArity = 1;
sub.cljs$lang$applyTo = sub__2.cljs$lang$applyTo;
sub.cljs$core$IFn$_invoke$arity$0 = sub__0;
sub.cljs$core$IFn$_invoke$arity$variadic = sub__2.cljs$core$IFn$_invoke$arity$variadic;
return sub;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.summary = (function() {
var summary = null;
var summary__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.summary,null,null);
});
var summary__2 = (function() { 
var G__24020__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.summary,opts__8990__auto__,children__8991__auto__);
};
var G__24020 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24021__i = 0, G__24021__a = new Array(arguments.length -  1);
while (G__24021__i < G__24021__a.length) {G__24021__a[G__24021__i] = arguments[G__24021__i + 1]; ++G__24021__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24021__a,0);
} 
return G__24020__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24020.cljs$lang$maxFixedArity = 1;
G__24020.cljs$lang$applyTo = (function (arglist__24022){
var opts__8990__auto__ = cljs.core.first(arglist__24022);
var children__8991__auto__ = cljs.core.rest(arglist__24022);
return G__24020__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24020.cljs$core$IFn$_invoke$arity$variadic = G__24020__delegate;
return G__24020;
})()
;
summary = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return summary__0.call(this);
default:
var G__24023 = null;
if (arguments.length > 1) {
var G__24024__i = 0, G__24024__a = new Array(arguments.length -  1);
while (G__24024__i < G__24024__a.length) {G__24024__a[G__24024__i] = arguments[G__24024__i + 1]; ++G__24024__i;}
G__24023 = new cljs.core.IndexedSeq(G__24024__a,0);
}
return summary__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
summary.cljs$lang$maxFixedArity = 1;
summary.cljs$lang$applyTo = summary__2.cljs$lang$applyTo;
summary.cljs$core$IFn$_invoke$arity$0 = summary__0;
summary.cljs$core$IFn$_invoke$arity$variadic = summary__2.cljs$core$IFn$_invoke$arity$variadic;
return summary;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.sup = (function() {
var sup = null;
var sup__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.sup,null,null);
});
var sup__2 = (function() { 
var G__24025__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.sup,opts__8990__auto__,children__8991__auto__);
};
var G__24025 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24026__i = 0, G__24026__a = new Array(arguments.length -  1);
while (G__24026__i < G__24026__a.length) {G__24026__a[G__24026__i] = arguments[G__24026__i + 1]; ++G__24026__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24026__a,0);
} 
return G__24025__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24025.cljs$lang$maxFixedArity = 1;
G__24025.cljs$lang$applyTo = (function (arglist__24027){
var opts__8990__auto__ = cljs.core.first(arglist__24027);
var children__8991__auto__ = cljs.core.rest(arglist__24027);
return G__24025__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24025.cljs$core$IFn$_invoke$arity$variadic = G__24025__delegate;
return G__24025;
})()
;
sup = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return sup__0.call(this);
default:
var G__24028 = null;
if (arguments.length > 1) {
var G__24029__i = 0, G__24029__a = new Array(arguments.length -  1);
while (G__24029__i < G__24029__a.length) {G__24029__a[G__24029__i] = arguments[G__24029__i + 1]; ++G__24029__i;}
G__24028 = new cljs.core.IndexedSeq(G__24029__a,0);
}
return sup__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24028);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sup.cljs$lang$maxFixedArity = 1;
sup.cljs$lang$applyTo = sup__2.cljs$lang$applyTo;
sup.cljs$core$IFn$_invoke$arity$0 = sup__0;
sup.cljs$core$IFn$_invoke$arity$variadic = sup__2.cljs$core$IFn$_invoke$arity$variadic;
return sup;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.table = (function() {
var table = null;
var table__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.table,null,null);
});
var table__2 = (function() { 
var G__24030__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.table,opts__8990__auto__,children__8991__auto__);
};
var G__24030 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24031__i = 0, G__24031__a = new Array(arguments.length -  1);
while (G__24031__i < G__24031__a.length) {G__24031__a[G__24031__i] = arguments[G__24031__i + 1]; ++G__24031__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24031__a,0);
} 
return G__24030__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24030.cljs$lang$maxFixedArity = 1;
G__24030.cljs$lang$applyTo = (function (arglist__24032){
var opts__8990__auto__ = cljs.core.first(arglist__24032);
var children__8991__auto__ = cljs.core.rest(arglist__24032);
return G__24030__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24030.cljs$core$IFn$_invoke$arity$variadic = G__24030__delegate;
return G__24030;
})()
;
table = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return table__0.call(this);
default:
var G__24033 = null;
if (arguments.length > 1) {
var G__24034__i = 0, G__24034__a = new Array(arguments.length -  1);
while (G__24034__i < G__24034__a.length) {G__24034__a[G__24034__i] = arguments[G__24034__i + 1]; ++G__24034__i;}
G__24033 = new cljs.core.IndexedSeq(G__24034__a,0);
}
return table__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24033);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
table.cljs$lang$maxFixedArity = 1;
table.cljs$lang$applyTo = table__2.cljs$lang$applyTo;
table.cljs$core$IFn$_invoke$arity$0 = table__0;
table.cljs$core$IFn$_invoke$arity$variadic = table__2.cljs$core$IFn$_invoke$arity$variadic;
return table;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.tbody = (function() {
var tbody = null;
var tbody__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tbody,null,null);
});
var tbody__2 = (function() { 
var G__24035__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.tbody,opts__8990__auto__,children__8991__auto__);
};
var G__24035 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24036__i = 0, G__24036__a = new Array(arguments.length -  1);
while (G__24036__i < G__24036__a.length) {G__24036__a[G__24036__i] = arguments[G__24036__i + 1]; ++G__24036__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24036__a,0);
} 
return G__24035__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24035.cljs$lang$maxFixedArity = 1;
G__24035.cljs$lang$applyTo = (function (arglist__24037){
var opts__8990__auto__ = cljs.core.first(arglist__24037);
var children__8991__auto__ = cljs.core.rest(arglist__24037);
return G__24035__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24035.cljs$core$IFn$_invoke$arity$variadic = G__24035__delegate;
return G__24035;
})()
;
tbody = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return tbody__0.call(this);
default:
var G__24038 = null;
if (arguments.length > 1) {
var G__24039__i = 0, G__24039__a = new Array(arguments.length -  1);
while (G__24039__i < G__24039__a.length) {G__24039__a[G__24039__i] = arguments[G__24039__i + 1]; ++G__24039__i;}
G__24038 = new cljs.core.IndexedSeq(G__24039__a,0);
}
return tbody__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tbody.cljs$lang$maxFixedArity = 1;
tbody.cljs$lang$applyTo = tbody__2.cljs$lang$applyTo;
tbody.cljs$core$IFn$_invoke$arity$0 = tbody__0;
tbody.cljs$core$IFn$_invoke$arity$variadic = tbody__2.cljs$core$IFn$_invoke$arity$variadic;
return tbody;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.td = (function() {
var td = null;
var td__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.td,null,null);
});
var td__2 = (function() { 
var G__24040__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.td,opts__8990__auto__,children__8991__auto__);
};
var G__24040 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24041__i = 0, G__24041__a = new Array(arguments.length -  1);
while (G__24041__i < G__24041__a.length) {G__24041__a[G__24041__i] = arguments[G__24041__i + 1]; ++G__24041__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24041__a,0);
} 
return G__24040__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24040.cljs$lang$maxFixedArity = 1;
G__24040.cljs$lang$applyTo = (function (arglist__24042){
var opts__8990__auto__ = cljs.core.first(arglist__24042);
var children__8991__auto__ = cljs.core.rest(arglist__24042);
return G__24040__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24040.cljs$core$IFn$_invoke$arity$variadic = G__24040__delegate;
return G__24040;
})()
;
td = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return td__0.call(this);
default:
var G__24043 = null;
if (arguments.length > 1) {
var G__24044__i = 0, G__24044__a = new Array(arguments.length -  1);
while (G__24044__i < G__24044__a.length) {G__24044__a[G__24044__i] = arguments[G__24044__i + 1]; ++G__24044__i;}
G__24043 = new cljs.core.IndexedSeq(G__24044__a,0);
}
return td__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
td.cljs$lang$maxFixedArity = 1;
td.cljs$lang$applyTo = td__2.cljs$lang$applyTo;
td.cljs$core$IFn$_invoke$arity$0 = td__0;
td.cljs$core$IFn$_invoke$arity$variadic = td__2.cljs$core$IFn$_invoke$arity$variadic;
return td;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.tfoot = (function() {
var tfoot = null;
var tfoot__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tfoot,null,null);
});
var tfoot__2 = (function() { 
var G__24045__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.tfoot,opts__8990__auto__,children__8991__auto__);
};
var G__24045 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24046__i = 0, G__24046__a = new Array(arguments.length -  1);
while (G__24046__i < G__24046__a.length) {G__24046__a[G__24046__i] = arguments[G__24046__i + 1]; ++G__24046__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24046__a,0);
} 
return G__24045__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24045.cljs$lang$maxFixedArity = 1;
G__24045.cljs$lang$applyTo = (function (arglist__24047){
var opts__8990__auto__ = cljs.core.first(arglist__24047);
var children__8991__auto__ = cljs.core.rest(arglist__24047);
return G__24045__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24045.cljs$core$IFn$_invoke$arity$variadic = G__24045__delegate;
return G__24045;
})()
;
tfoot = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return tfoot__0.call(this);
default:
var G__24048 = null;
if (arguments.length > 1) {
var G__24049__i = 0, G__24049__a = new Array(arguments.length -  1);
while (G__24049__i < G__24049__a.length) {G__24049__a[G__24049__i] = arguments[G__24049__i + 1]; ++G__24049__i;}
G__24048 = new cljs.core.IndexedSeq(G__24049__a,0);
}
return tfoot__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tfoot.cljs$lang$maxFixedArity = 1;
tfoot.cljs$lang$applyTo = tfoot__2.cljs$lang$applyTo;
tfoot.cljs$core$IFn$_invoke$arity$0 = tfoot__0;
tfoot.cljs$core$IFn$_invoke$arity$variadic = tfoot__2.cljs$core$IFn$_invoke$arity$variadic;
return tfoot;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.th = (function() {
var th = null;
var th__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.th,null,null);
});
var th__2 = (function() { 
var G__24050__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.th,opts__8990__auto__,children__8991__auto__);
};
var G__24050 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24051__i = 0, G__24051__a = new Array(arguments.length -  1);
while (G__24051__i < G__24051__a.length) {G__24051__a[G__24051__i] = arguments[G__24051__i + 1]; ++G__24051__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24051__a,0);
} 
return G__24050__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24050.cljs$lang$maxFixedArity = 1;
G__24050.cljs$lang$applyTo = (function (arglist__24052){
var opts__8990__auto__ = cljs.core.first(arglist__24052);
var children__8991__auto__ = cljs.core.rest(arglist__24052);
return G__24050__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24050.cljs$core$IFn$_invoke$arity$variadic = G__24050__delegate;
return G__24050;
})()
;
th = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return th__0.call(this);
default:
var G__24053 = null;
if (arguments.length > 1) {
var G__24054__i = 0, G__24054__a = new Array(arguments.length -  1);
while (G__24054__i < G__24054__a.length) {G__24054__a[G__24054__i] = arguments[G__24054__i + 1]; ++G__24054__i;}
G__24053 = new cljs.core.IndexedSeq(G__24054__a,0);
}
return th__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
th.cljs$lang$maxFixedArity = 1;
th.cljs$lang$applyTo = th__2.cljs$lang$applyTo;
th.cljs$core$IFn$_invoke$arity$0 = th__0;
th.cljs$core$IFn$_invoke$arity$variadic = th__2.cljs$core$IFn$_invoke$arity$variadic;
return th;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.thead = (function() {
var thead = null;
var thead__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.thead,null,null);
});
var thead__2 = (function() { 
var G__24055__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.thead,opts__8990__auto__,children__8991__auto__);
};
var G__24055 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24056__i = 0, G__24056__a = new Array(arguments.length -  1);
while (G__24056__i < G__24056__a.length) {G__24056__a[G__24056__i] = arguments[G__24056__i + 1]; ++G__24056__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24056__a,0);
} 
return G__24055__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24055.cljs$lang$maxFixedArity = 1;
G__24055.cljs$lang$applyTo = (function (arglist__24057){
var opts__8990__auto__ = cljs.core.first(arglist__24057);
var children__8991__auto__ = cljs.core.rest(arglist__24057);
return G__24055__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24055.cljs$core$IFn$_invoke$arity$variadic = G__24055__delegate;
return G__24055;
})()
;
thead = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return thead__0.call(this);
default:
var G__24058 = null;
if (arguments.length > 1) {
var G__24059__i = 0, G__24059__a = new Array(arguments.length -  1);
while (G__24059__i < G__24059__a.length) {G__24059__a[G__24059__i] = arguments[G__24059__i + 1]; ++G__24059__i;}
G__24058 = new cljs.core.IndexedSeq(G__24059__a,0);
}
return thead__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24058);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
thead.cljs$lang$maxFixedArity = 1;
thead.cljs$lang$applyTo = thead__2.cljs$lang$applyTo;
thead.cljs$core$IFn$_invoke$arity$0 = thead__0;
thead.cljs$core$IFn$_invoke$arity$variadic = thead__2.cljs$core$IFn$_invoke$arity$variadic;
return thead;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.time = (function() {
var time = null;
var time__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.time,null,null);
});
var time__2 = (function() { 
var G__24060__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.time,opts__8990__auto__,children__8991__auto__);
};
var G__24060 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24061__i = 0, G__24061__a = new Array(arguments.length -  1);
while (G__24061__i < G__24061__a.length) {G__24061__a[G__24061__i] = arguments[G__24061__i + 1]; ++G__24061__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24061__a,0);
} 
return G__24060__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24060.cljs$lang$maxFixedArity = 1;
G__24060.cljs$lang$applyTo = (function (arglist__24062){
var opts__8990__auto__ = cljs.core.first(arglist__24062);
var children__8991__auto__ = cljs.core.rest(arglist__24062);
return G__24060__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24060.cljs$core$IFn$_invoke$arity$variadic = G__24060__delegate;
return G__24060;
})()
;
time = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return time__0.call(this);
default:
var G__24063 = null;
if (arguments.length > 1) {
var G__24064__i = 0, G__24064__a = new Array(arguments.length -  1);
while (G__24064__i < G__24064__a.length) {G__24064__a[G__24064__i] = arguments[G__24064__i + 1]; ++G__24064__i;}
G__24063 = new cljs.core.IndexedSeq(G__24064__a,0);
}
return time__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time.cljs$lang$maxFixedArity = 1;
time.cljs$lang$applyTo = time__2.cljs$lang$applyTo;
time.cljs$core$IFn$_invoke$arity$0 = time__0;
time.cljs$core$IFn$_invoke$arity$variadic = time__2.cljs$core$IFn$_invoke$arity$variadic;
return time;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.title = (function() {
var title = null;
var title__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.title,null,null);
});
var title__2 = (function() { 
var G__24065__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.title,opts__8990__auto__,children__8991__auto__);
};
var G__24065 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24066__i = 0, G__24066__a = new Array(arguments.length -  1);
while (G__24066__i < G__24066__a.length) {G__24066__a[G__24066__i] = arguments[G__24066__i + 1]; ++G__24066__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24066__a,0);
} 
return G__24065__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24065.cljs$lang$maxFixedArity = 1;
G__24065.cljs$lang$applyTo = (function (arglist__24067){
var opts__8990__auto__ = cljs.core.first(arglist__24067);
var children__8991__auto__ = cljs.core.rest(arglist__24067);
return G__24065__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24065.cljs$core$IFn$_invoke$arity$variadic = G__24065__delegate;
return G__24065;
})()
;
title = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return title__0.call(this);
default:
var G__24068 = null;
if (arguments.length > 1) {
var G__24069__i = 0, G__24069__a = new Array(arguments.length -  1);
while (G__24069__i < G__24069__a.length) {G__24069__a[G__24069__i] = arguments[G__24069__i + 1]; ++G__24069__i;}
G__24068 = new cljs.core.IndexedSeq(G__24069__a,0);
}
return title__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
title.cljs$lang$maxFixedArity = 1;
title.cljs$lang$applyTo = title__2.cljs$lang$applyTo;
title.cljs$core$IFn$_invoke$arity$0 = title__0;
title.cljs$core$IFn$_invoke$arity$variadic = title__2.cljs$core$IFn$_invoke$arity$variadic;
return title;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.tr = (function() {
var tr = null;
var tr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tr,null,null);
});
var tr__2 = (function() { 
var G__24070__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.tr,opts__8990__auto__,children__8991__auto__);
};
var G__24070 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24071__i = 0, G__24071__a = new Array(arguments.length -  1);
while (G__24071__i < G__24071__a.length) {G__24071__a[G__24071__i] = arguments[G__24071__i + 1]; ++G__24071__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24071__a,0);
} 
return G__24070__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24070.cljs$lang$maxFixedArity = 1;
G__24070.cljs$lang$applyTo = (function (arglist__24072){
var opts__8990__auto__ = cljs.core.first(arglist__24072);
var children__8991__auto__ = cljs.core.rest(arglist__24072);
return G__24070__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24070.cljs$core$IFn$_invoke$arity$variadic = G__24070__delegate;
return G__24070;
})()
;
tr = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return tr__0.call(this);
default:
var G__24073 = null;
if (arguments.length > 1) {
var G__24074__i = 0, G__24074__a = new Array(arguments.length -  1);
while (G__24074__i < G__24074__a.length) {G__24074__a[G__24074__i] = arguments[G__24074__i + 1]; ++G__24074__i;}
G__24073 = new cljs.core.IndexedSeq(G__24074__a,0);
}
return tr__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tr.cljs$lang$maxFixedArity = 1;
tr.cljs$lang$applyTo = tr__2.cljs$lang$applyTo;
tr.cljs$core$IFn$_invoke$arity$0 = tr__0;
tr.cljs$core$IFn$_invoke$arity$variadic = tr__2.cljs$core$IFn$_invoke$arity$variadic;
return tr;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.track = (function() {
var track = null;
var track__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.track,null,null);
});
var track__2 = (function() { 
var G__24075__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.track,opts__8990__auto__,children__8991__auto__);
};
var G__24075 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24076__i = 0, G__24076__a = new Array(arguments.length -  1);
while (G__24076__i < G__24076__a.length) {G__24076__a[G__24076__i] = arguments[G__24076__i + 1]; ++G__24076__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24076__a,0);
} 
return G__24075__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24075.cljs$lang$maxFixedArity = 1;
G__24075.cljs$lang$applyTo = (function (arglist__24077){
var opts__8990__auto__ = cljs.core.first(arglist__24077);
var children__8991__auto__ = cljs.core.rest(arglist__24077);
return G__24075__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24075.cljs$core$IFn$_invoke$arity$variadic = G__24075__delegate;
return G__24075;
})()
;
track = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return track__0.call(this);
default:
var G__24078 = null;
if (arguments.length > 1) {
var G__24079__i = 0, G__24079__a = new Array(arguments.length -  1);
while (G__24079__i < G__24079__a.length) {G__24079__a[G__24079__i] = arguments[G__24079__i + 1]; ++G__24079__i;}
G__24078 = new cljs.core.IndexedSeq(G__24079__a,0);
}
return track__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
track.cljs$lang$maxFixedArity = 1;
track.cljs$lang$applyTo = track__2.cljs$lang$applyTo;
track.cljs$core$IFn$_invoke$arity$0 = track__0;
track.cljs$core$IFn$_invoke$arity$variadic = track__2.cljs$core$IFn$_invoke$arity$variadic;
return track;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.u = (function() {
var u = null;
var u__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.u,null,null);
});
var u__2 = (function() { 
var G__24080__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.u,opts__8990__auto__,children__8991__auto__);
};
var G__24080 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24081__i = 0, G__24081__a = new Array(arguments.length -  1);
while (G__24081__i < G__24081__a.length) {G__24081__a[G__24081__i] = arguments[G__24081__i + 1]; ++G__24081__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24081__a,0);
} 
return G__24080__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24080.cljs$lang$maxFixedArity = 1;
G__24080.cljs$lang$applyTo = (function (arglist__24082){
var opts__8990__auto__ = cljs.core.first(arglist__24082);
var children__8991__auto__ = cljs.core.rest(arglist__24082);
return G__24080__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24080.cljs$core$IFn$_invoke$arity$variadic = G__24080__delegate;
return G__24080;
})()
;
u = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return u__0.call(this);
default:
var G__24083 = null;
if (arguments.length > 1) {
var G__24084__i = 0, G__24084__a = new Array(arguments.length -  1);
while (G__24084__i < G__24084__a.length) {G__24084__a[G__24084__i] = arguments[G__24084__i + 1]; ++G__24084__i;}
G__24083 = new cljs.core.IndexedSeq(G__24084__a,0);
}
return u__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
u.cljs$lang$maxFixedArity = 1;
u.cljs$lang$applyTo = u__2.cljs$lang$applyTo;
u.cljs$core$IFn$_invoke$arity$0 = u__0;
u.cljs$core$IFn$_invoke$arity$variadic = u__2.cljs$core$IFn$_invoke$arity$variadic;
return u;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ul = (function() {
var ul = null;
var ul__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ul,null,null);
});
var ul__2 = (function() { 
var G__24085__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.ul,opts__8990__auto__,children__8991__auto__);
};
var G__24085 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24086__i = 0, G__24086__a = new Array(arguments.length -  1);
while (G__24086__i < G__24086__a.length) {G__24086__a[G__24086__i] = arguments[G__24086__i + 1]; ++G__24086__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24086__a,0);
} 
return G__24085__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24085.cljs$lang$maxFixedArity = 1;
G__24085.cljs$lang$applyTo = (function (arglist__24087){
var opts__8990__auto__ = cljs.core.first(arglist__24087);
var children__8991__auto__ = cljs.core.rest(arglist__24087);
return G__24085__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24085.cljs$core$IFn$_invoke$arity$variadic = G__24085__delegate;
return G__24085;
})()
;
ul = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return ul__0.call(this);
default:
var G__24088 = null;
if (arguments.length > 1) {
var G__24089__i = 0, G__24089__a = new Array(arguments.length -  1);
while (G__24089__i < G__24089__a.length) {G__24089__a[G__24089__i] = arguments[G__24089__i + 1]; ++G__24089__i;}
G__24088 = new cljs.core.IndexedSeq(G__24089__a,0);
}
return ul__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ul.cljs$lang$maxFixedArity = 1;
ul.cljs$lang$applyTo = ul__2.cljs$lang$applyTo;
ul.cljs$core$IFn$_invoke$arity$0 = ul__0;
ul.cljs$core$IFn$_invoke$arity$variadic = ul__2.cljs$core$IFn$_invoke$arity$variadic;
return ul;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.var$ = (function() {
var var$ = null;
var var$__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.var$,null,null);
});
var var$__2 = (function() { 
var G__24090__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.var$,opts__8990__auto__,children__8991__auto__);
};
var G__24090 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24091__i = 0, G__24091__a = new Array(arguments.length -  1);
while (G__24091__i < G__24091__a.length) {G__24091__a[G__24091__i] = arguments[G__24091__i + 1]; ++G__24091__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24091__a,0);
} 
return G__24090__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24090.cljs$lang$maxFixedArity = 1;
G__24090.cljs$lang$applyTo = (function (arglist__24092){
var opts__8990__auto__ = cljs.core.first(arglist__24092);
var children__8991__auto__ = cljs.core.rest(arglist__24092);
return G__24090__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24090.cljs$core$IFn$_invoke$arity$variadic = G__24090__delegate;
return G__24090;
})()
;
var$ = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return var$__0.call(this);
default:
var G__24093 = null;
if (arguments.length > 1) {
var G__24094__i = 0, G__24094__a = new Array(arguments.length -  1);
while (G__24094__i < G__24094__a.length) {G__24094__a[G__24094__i] = arguments[G__24094__i + 1]; ++G__24094__i;}
G__24093 = new cljs.core.IndexedSeq(G__24094__a,0);
}
return var$__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
var$.cljs$lang$maxFixedArity = 1;
var$.cljs$lang$applyTo = var$__2.cljs$lang$applyTo;
var$.cljs$core$IFn$_invoke$arity$0 = var$__0;
var$.cljs$core$IFn$_invoke$arity$variadic = var$__2.cljs$core$IFn$_invoke$arity$variadic;
return var$;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.video = (function() {
var video = null;
var video__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.video,null,null);
});
var video__2 = (function() { 
var G__24095__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.video,opts__8990__auto__,children__8991__auto__);
};
var G__24095 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24096__i = 0, G__24096__a = new Array(arguments.length -  1);
while (G__24096__i < G__24096__a.length) {G__24096__a[G__24096__i] = arguments[G__24096__i + 1]; ++G__24096__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24096__a,0);
} 
return G__24095__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24095.cljs$lang$maxFixedArity = 1;
G__24095.cljs$lang$applyTo = (function (arglist__24097){
var opts__8990__auto__ = cljs.core.first(arglist__24097);
var children__8991__auto__ = cljs.core.rest(arglist__24097);
return G__24095__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24095.cljs$core$IFn$_invoke$arity$variadic = G__24095__delegate;
return G__24095;
})()
;
video = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return video__0.call(this);
default:
var G__24098 = null;
if (arguments.length > 1) {
var G__24099__i = 0, G__24099__a = new Array(arguments.length -  1);
while (G__24099__i < G__24099__a.length) {G__24099__a[G__24099__i] = arguments[G__24099__i + 1]; ++G__24099__i;}
G__24098 = new cljs.core.IndexedSeq(G__24099__a,0);
}
return video__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
video.cljs$lang$maxFixedArity = 1;
video.cljs$lang$applyTo = video__2.cljs$lang$applyTo;
video.cljs$core$IFn$_invoke$arity$0 = video__0;
video.cljs$core$IFn$_invoke$arity$variadic = video__2.cljs$core$IFn$_invoke$arity$variadic;
return video;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.wbr = (function() {
var wbr = null;
var wbr__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.wbr,null,null);
});
var wbr__2 = (function() { 
var G__24100__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.wbr,opts__8990__auto__,children__8991__auto__);
};
var G__24100 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24101__i = 0, G__24101__a = new Array(arguments.length -  1);
while (G__24101__i < G__24101__a.length) {G__24101__a[G__24101__i] = arguments[G__24101__i + 1]; ++G__24101__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24101__a,0);
} 
return G__24100__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24100.cljs$lang$maxFixedArity = 1;
G__24100.cljs$lang$applyTo = (function (arglist__24102){
var opts__8990__auto__ = cljs.core.first(arglist__24102);
var children__8991__auto__ = cljs.core.rest(arglist__24102);
return G__24100__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24100.cljs$core$IFn$_invoke$arity$variadic = G__24100__delegate;
return G__24100;
})()
;
wbr = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return wbr__0.call(this);
default:
var G__24103 = null;
if (arguments.length > 1) {
var G__24104__i = 0, G__24104__a = new Array(arguments.length -  1);
while (G__24104__i < G__24104__a.length) {G__24104__a[G__24104__i] = arguments[G__24104__i + 1]; ++G__24104__i;}
G__24103 = new cljs.core.IndexedSeq(G__24104__a,0);
}
return wbr__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
wbr.cljs$lang$maxFixedArity = 1;
wbr.cljs$lang$applyTo = wbr__2.cljs$lang$applyTo;
wbr.cljs$core$IFn$_invoke$arity$0 = wbr__0;
wbr.cljs$core$IFn$_invoke$arity$variadic = wbr__2.cljs$core$IFn$_invoke$arity$variadic;
return wbr;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.circle = (function() {
var circle = null;
var circle__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.circle,null,null);
});
var circle__2 = (function() { 
var G__24105__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.circle,opts__8990__auto__,children__8991__auto__);
};
var G__24105 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24106__i = 0, G__24106__a = new Array(arguments.length -  1);
while (G__24106__i < G__24106__a.length) {G__24106__a[G__24106__i] = arguments[G__24106__i + 1]; ++G__24106__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24106__a,0);
} 
return G__24105__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24105.cljs$lang$maxFixedArity = 1;
G__24105.cljs$lang$applyTo = (function (arglist__24107){
var opts__8990__auto__ = cljs.core.first(arglist__24107);
var children__8991__auto__ = cljs.core.rest(arglist__24107);
return G__24105__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24105.cljs$core$IFn$_invoke$arity$variadic = G__24105__delegate;
return G__24105;
})()
;
circle = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return circle__0.call(this);
default:
var G__24108 = null;
if (arguments.length > 1) {
var G__24109__i = 0, G__24109__a = new Array(arguments.length -  1);
while (G__24109__i < G__24109__a.length) {G__24109__a[G__24109__i] = arguments[G__24109__i + 1]; ++G__24109__i;}
G__24108 = new cljs.core.IndexedSeq(G__24109__a,0);
}
return circle__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
circle.cljs$lang$maxFixedArity = 1;
circle.cljs$lang$applyTo = circle__2.cljs$lang$applyTo;
circle.cljs$core$IFn$_invoke$arity$0 = circle__0;
circle.cljs$core$IFn$_invoke$arity$variadic = circle__2.cljs$core$IFn$_invoke$arity$variadic;
return circle;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.ellipse = (function() {
var ellipse = null;
var ellipse__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.ellipse,null,null);
});
var ellipse__2 = (function() { 
var G__24110__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.ellipse,opts__8990__auto__,children__8991__auto__);
};
var G__24110 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24111__i = 0, G__24111__a = new Array(arguments.length -  1);
while (G__24111__i < G__24111__a.length) {G__24111__a[G__24111__i] = arguments[G__24111__i + 1]; ++G__24111__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24111__a,0);
} 
return G__24110__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24110.cljs$lang$maxFixedArity = 1;
G__24110.cljs$lang$applyTo = (function (arglist__24112){
var opts__8990__auto__ = cljs.core.first(arglist__24112);
var children__8991__auto__ = cljs.core.rest(arglist__24112);
return G__24110__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24110.cljs$core$IFn$_invoke$arity$variadic = G__24110__delegate;
return G__24110;
})()
;
ellipse = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return ellipse__0.call(this);
default:
var G__24113 = null;
if (arguments.length > 1) {
var G__24114__i = 0, G__24114__a = new Array(arguments.length -  1);
while (G__24114__i < G__24114__a.length) {G__24114__a[G__24114__i] = arguments[G__24114__i + 1]; ++G__24114__i;}
G__24113 = new cljs.core.IndexedSeq(G__24114__a,0);
}
return ellipse__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ellipse.cljs$lang$maxFixedArity = 1;
ellipse.cljs$lang$applyTo = ellipse__2.cljs$lang$applyTo;
ellipse.cljs$core$IFn$_invoke$arity$0 = ellipse__0;
ellipse.cljs$core$IFn$_invoke$arity$variadic = ellipse__2.cljs$core$IFn$_invoke$arity$variadic;
return ellipse;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.g = (function() {
var g = null;
var g__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.g,null,null);
});
var g__2 = (function() { 
var G__24115__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.g,opts__8990__auto__,children__8991__auto__);
};
var G__24115 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24116__i = 0, G__24116__a = new Array(arguments.length -  1);
while (G__24116__i < G__24116__a.length) {G__24116__a[G__24116__i] = arguments[G__24116__i + 1]; ++G__24116__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24116__a,0);
} 
return G__24115__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24115.cljs$lang$maxFixedArity = 1;
G__24115.cljs$lang$applyTo = (function (arglist__24117){
var opts__8990__auto__ = cljs.core.first(arglist__24117);
var children__8991__auto__ = cljs.core.rest(arglist__24117);
return G__24115__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24115.cljs$core$IFn$_invoke$arity$variadic = G__24115__delegate;
return G__24115;
})()
;
g = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return g__0.call(this);
default:
var G__24118 = null;
if (arguments.length > 1) {
var G__24119__i = 0, G__24119__a = new Array(arguments.length -  1);
while (G__24119__i < G__24119__a.length) {G__24119__a[G__24119__i] = arguments[G__24119__i + 1]; ++G__24119__i;}
G__24118 = new cljs.core.IndexedSeq(G__24119__a,0);
}
return g__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
g.cljs$lang$maxFixedArity = 1;
g.cljs$lang$applyTo = g__2.cljs$lang$applyTo;
g.cljs$core$IFn$_invoke$arity$0 = g__0;
g.cljs$core$IFn$_invoke$arity$variadic = g__2.cljs$core$IFn$_invoke$arity$variadic;
return g;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.line = (function() {
var line = null;
var line__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.line,null,null);
});
var line__2 = (function() { 
var G__24120__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.line,opts__8990__auto__,children__8991__auto__);
};
var G__24120 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24121__i = 0, G__24121__a = new Array(arguments.length -  1);
while (G__24121__i < G__24121__a.length) {G__24121__a[G__24121__i] = arguments[G__24121__i + 1]; ++G__24121__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24121__a,0);
} 
return G__24120__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24120.cljs$lang$maxFixedArity = 1;
G__24120.cljs$lang$applyTo = (function (arglist__24122){
var opts__8990__auto__ = cljs.core.first(arglist__24122);
var children__8991__auto__ = cljs.core.rest(arglist__24122);
return G__24120__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24120.cljs$core$IFn$_invoke$arity$variadic = G__24120__delegate;
return G__24120;
})()
;
line = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return line__0.call(this);
default:
var G__24123 = null;
if (arguments.length > 1) {
var G__24124__i = 0, G__24124__a = new Array(arguments.length -  1);
while (G__24124__i < G__24124__a.length) {G__24124__a[G__24124__i] = arguments[G__24124__i + 1]; ++G__24124__i;}
G__24123 = new cljs.core.IndexedSeq(G__24124__a,0);
}
return line__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
line.cljs$lang$maxFixedArity = 1;
line.cljs$lang$applyTo = line__2.cljs$lang$applyTo;
line.cljs$core$IFn$_invoke$arity$0 = line__0;
line.cljs$core$IFn$_invoke$arity$variadic = line__2.cljs$core$IFn$_invoke$arity$variadic;
return line;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.path = (function() {
var path = null;
var path__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.path,null,null);
});
var path__2 = (function() { 
var G__24125__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.path,opts__8990__auto__,children__8991__auto__);
};
var G__24125 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24126__i = 0, G__24126__a = new Array(arguments.length -  1);
while (G__24126__i < G__24126__a.length) {G__24126__a[G__24126__i] = arguments[G__24126__i + 1]; ++G__24126__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24126__a,0);
} 
return G__24125__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24125.cljs$lang$maxFixedArity = 1;
G__24125.cljs$lang$applyTo = (function (arglist__24127){
var opts__8990__auto__ = cljs.core.first(arglist__24127);
var children__8991__auto__ = cljs.core.rest(arglist__24127);
return G__24125__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24125.cljs$core$IFn$_invoke$arity$variadic = G__24125__delegate;
return G__24125;
})()
;
path = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return path__0.call(this);
default:
var G__24128 = null;
if (arguments.length > 1) {
var G__24129__i = 0, G__24129__a = new Array(arguments.length -  1);
while (G__24129__i < G__24129__a.length) {G__24129__a[G__24129__i] = arguments[G__24129__i + 1]; ++G__24129__i;}
G__24128 = new cljs.core.IndexedSeq(G__24129__a,0);
}
return path__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
path.cljs$lang$maxFixedArity = 1;
path.cljs$lang$applyTo = path__2.cljs$lang$applyTo;
path.cljs$core$IFn$_invoke$arity$0 = path__0;
path.cljs$core$IFn$_invoke$arity$variadic = path__2.cljs$core$IFn$_invoke$arity$variadic;
return path;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.polyline = (function() {
var polyline = null;
var polyline__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polyline,null,null);
});
var polyline__2 = (function() { 
var G__24130__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.polyline,opts__8990__auto__,children__8991__auto__);
};
var G__24130 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24131__i = 0, G__24131__a = new Array(arguments.length -  1);
while (G__24131__i < G__24131__a.length) {G__24131__a[G__24131__i] = arguments[G__24131__i + 1]; ++G__24131__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24131__a,0);
} 
return G__24130__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24130.cljs$lang$maxFixedArity = 1;
G__24130.cljs$lang$applyTo = (function (arglist__24132){
var opts__8990__auto__ = cljs.core.first(arglist__24132);
var children__8991__auto__ = cljs.core.rest(arglist__24132);
return G__24130__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24130.cljs$core$IFn$_invoke$arity$variadic = G__24130__delegate;
return G__24130;
})()
;
polyline = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return polyline__0.call(this);
default:
var G__24133 = null;
if (arguments.length > 1) {
var G__24134__i = 0, G__24134__a = new Array(arguments.length -  1);
while (G__24134__i < G__24134__a.length) {G__24134__a[G__24134__i] = arguments[G__24134__i + 1]; ++G__24134__i;}
G__24133 = new cljs.core.IndexedSeq(G__24134__a,0);
}
return polyline__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
polyline.cljs$lang$maxFixedArity = 1;
polyline.cljs$lang$applyTo = polyline__2.cljs$lang$applyTo;
polyline.cljs$core$IFn$_invoke$arity$0 = polyline__0;
polyline.cljs$core$IFn$_invoke$arity$variadic = polyline__2.cljs$core$IFn$_invoke$arity$variadic;
return polyline;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.rect = (function() {
var rect = null;
var rect__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.rect,null,null);
});
var rect__2 = (function() { 
var G__24135__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.rect,opts__8990__auto__,children__8991__auto__);
};
var G__24135 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24136__i = 0, G__24136__a = new Array(arguments.length -  1);
while (G__24136__i < G__24136__a.length) {G__24136__a[G__24136__i] = arguments[G__24136__i + 1]; ++G__24136__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24136__a,0);
} 
return G__24135__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24135.cljs$lang$maxFixedArity = 1;
G__24135.cljs$lang$applyTo = (function (arglist__24137){
var opts__8990__auto__ = cljs.core.first(arglist__24137);
var children__8991__auto__ = cljs.core.rest(arglist__24137);
return G__24135__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24135.cljs$core$IFn$_invoke$arity$variadic = G__24135__delegate;
return G__24135;
})()
;
rect = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return rect__0.call(this);
default:
var G__24138 = null;
if (arguments.length > 1) {
var G__24139__i = 0, G__24139__a = new Array(arguments.length -  1);
while (G__24139__i < G__24139__a.length) {G__24139__a[G__24139__i] = arguments[G__24139__i + 1]; ++G__24139__i;}
G__24138 = new cljs.core.IndexedSeq(G__24139__a,0);
}
return rect__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
rect.cljs$lang$maxFixedArity = 1;
rect.cljs$lang$applyTo = rect__2.cljs$lang$applyTo;
rect.cljs$core$IFn$_invoke$arity$0 = rect__0;
rect.cljs$core$IFn$_invoke$arity$variadic = rect__2.cljs$core$IFn$_invoke$arity$variadic;
return rect;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.svg = (function() {
var svg = null;
var svg__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.svg,null,null);
});
var svg__2 = (function() { 
var G__24140__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.svg,opts__8990__auto__,children__8991__auto__);
};
var G__24140 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24141__i = 0, G__24141__a = new Array(arguments.length -  1);
while (G__24141__i < G__24141__a.length) {G__24141__a[G__24141__i] = arguments[G__24141__i + 1]; ++G__24141__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24141__a,0);
} 
return G__24140__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24140.cljs$lang$maxFixedArity = 1;
G__24140.cljs$lang$applyTo = (function (arglist__24142){
var opts__8990__auto__ = cljs.core.first(arglist__24142);
var children__8991__auto__ = cljs.core.rest(arglist__24142);
return G__24140__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24140.cljs$core$IFn$_invoke$arity$variadic = G__24140__delegate;
return G__24140;
})()
;
svg = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return svg__0.call(this);
default:
var G__24143 = null;
if (arguments.length > 1) {
var G__24144__i = 0, G__24144__a = new Array(arguments.length -  1);
while (G__24144__i < G__24144__a.length) {G__24144__a[G__24144__i] = arguments[G__24144__i + 1]; ++G__24144__i;}
G__24143 = new cljs.core.IndexedSeq(G__24144__a,0);
}
return svg__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
svg.cljs$lang$maxFixedArity = 1;
svg.cljs$lang$applyTo = svg__2.cljs$lang$applyTo;
svg.cljs$core$IFn$_invoke$arity$0 = svg__0;
svg.cljs$core$IFn$_invoke$arity$variadic = svg__2.cljs$core$IFn$_invoke$arity$variadic;
return svg;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.text = (function() {
var text = null;
var text__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.text,null,null);
});
var text__2 = (function() { 
var G__24145__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.text,opts__8990__auto__,children__8991__auto__);
};
var G__24145 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24146__i = 0, G__24146__a = new Array(arguments.length -  1);
while (G__24146__i < G__24146__a.length) {G__24146__a[G__24146__i] = arguments[G__24146__i + 1]; ++G__24146__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24146__a,0);
} 
return G__24145__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24145.cljs$lang$maxFixedArity = 1;
G__24145.cljs$lang$applyTo = (function (arglist__24147){
var opts__8990__auto__ = cljs.core.first(arglist__24147);
var children__8991__auto__ = cljs.core.rest(arglist__24147);
return G__24145__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24145.cljs$core$IFn$_invoke$arity$variadic = G__24145__delegate;
return G__24145;
})()
;
text = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return text__0.call(this);
default:
var G__24148 = null;
if (arguments.length > 1) {
var G__24149__i = 0, G__24149__a = new Array(arguments.length -  1);
while (G__24149__i < G__24149__a.length) {G__24149__a[G__24149__i] = arguments[G__24149__i + 1]; ++G__24149__i;}
G__24148 = new cljs.core.IndexedSeq(G__24149__a,0);
}
return text__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text.cljs$lang$maxFixedArity = 1;
text.cljs$lang$applyTo = text__2.cljs$lang$applyTo;
text.cljs$core$IFn$_invoke$arity$0 = text__0;
text.cljs$core$IFn$_invoke$arity$variadic = text__2.cljs$core$IFn$_invoke$arity$variadic;
return text;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.defs = (function() {
var defs = null;
var defs__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.defs,null,null);
});
var defs__2 = (function() { 
var G__24150__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.defs,opts__8990__auto__,children__8991__auto__);
};
var G__24150 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24151__i = 0, G__24151__a = new Array(arguments.length -  1);
while (G__24151__i < G__24151__a.length) {G__24151__a[G__24151__i] = arguments[G__24151__i + 1]; ++G__24151__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24151__a,0);
} 
return G__24150__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24150.cljs$lang$maxFixedArity = 1;
G__24150.cljs$lang$applyTo = (function (arglist__24152){
var opts__8990__auto__ = cljs.core.first(arglist__24152);
var children__8991__auto__ = cljs.core.rest(arglist__24152);
return G__24150__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24150.cljs$core$IFn$_invoke$arity$variadic = G__24150__delegate;
return G__24150;
})()
;
defs = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return defs__0.call(this);
default:
var G__24153 = null;
if (arguments.length > 1) {
var G__24154__i = 0, G__24154__a = new Array(arguments.length -  1);
while (G__24154__i < G__24154__a.length) {G__24154__a[G__24154__i] = arguments[G__24154__i + 1]; ++G__24154__i;}
G__24153 = new cljs.core.IndexedSeq(G__24154__a,0);
}
return defs__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
defs.cljs$lang$maxFixedArity = 1;
defs.cljs$lang$applyTo = defs__2.cljs$lang$applyTo;
defs.cljs$core$IFn$_invoke$arity$0 = defs__0;
defs.cljs$core$IFn$_invoke$arity$variadic = defs__2.cljs$core$IFn$_invoke$arity$variadic;
return defs;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.linearGradient = (function() {
var linearGradient = null;
var linearGradient__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.linearGradient,null,null);
});
var linearGradient__2 = (function() { 
var G__24155__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.linearGradient,opts__8990__auto__,children__8991__auto__);
};
var G__24155 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24156__i = 0, G__24156__a = new Array(arguments.length -  1);
while (G__24156__i < G__24156__a.length) {G__24156__a[G__24156__i] = arguments[G__24156__i + 1]; ++G__24156__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24156__a,0);
} 
return G__24155__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24155.cljs$lang$maxFixedArity = 1;
G__24155.cljs$lang$applyTo = (function (arglist__24157){
var opts__8990__auto__ = cljs.core.first(arglist__24157);
var children__8991__auto__ = cljs.core.rest(arglist__24157);
return G__24155__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24155.cljs$core$IFn$_invoke$arity$variadic = G__24155__delegate;
return G__24155;
})()
;
linearGradient = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return linearGradient__0.call(this);
default:
var G__24158 = null;
if (arguments.length > 1) {
var G__24159__i = 0, G__24159__a = new Array(arguments.length -  1);
while (G__24159__i < G__24159__a.length) {G__24159__a[G__24159__i] = arguments[G__24159__i + 1]; ++G__24159__i;}
G__24158 = new cljs.core.IndexedSeq(G__24159__a,0);
}
return linearGradient__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
linearGradient.cljs$lang$maxFixedArity = 1;
linearGradient.cljs$lang$applyTo = linearGradient__2.cljs$lang$applyTo;
linearGradient.cljs$core$IFn$_invoke$arity$0 = linearGradient__0;
linearGradient.cljs$core$IFn$_invoke$arity$variadic = linearGradient__2.cljs$core$IFn$_invoke$arity$variadic;
return linearGradient;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.polygon = (function() {
var polygon = null;
var polygon__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.polygon,null,null);
});
var polygon__2 = (function() { 
var G__24160__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.polygon,opts__8990__auto__,children__8991__auto__);
};
var G__24160 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24161__i = 0, G__24161__a = new Array(arguments.length -  1);
while (G__24161__i < G__24161__a.length) {G__24161__a[G__24161__i] = arguments[G__24161__i + 1]; ++G__24161__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24161__a,0);
} 
return G__24160__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24160.cljs$lang$maxFixedArity = 1;
G__24160.cljs$lang$applyTo = (function (arglist__24162){
var opts__8990__auto__ = cljs.core.first(arglist__24162);
var children__8991__auto__ = cljs.core.rest(arglist__24162);
return G__24160__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24160.cljs$core$IFn$_invoke$arity$variadic = G__24160__delegate;
return G__24160;
})()
;
polygon = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return polygon__0.call(this);
default:
var G__24163 = null;
if (arguments.length > 1) {
var G__24164__i = 0, G__24164__a = new Array(arguments.length -  1);
while (G__24164__i < G__24164__a.length) {G__24164__a[G__24164__i] = arguments[G__24164__i + 1]; ++G__24164__i;}
G__24163 = new cljs.core.IndexedSeq(G__24164__a,0);
}
return polygon__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
polygon.cljs$lang$maxFixedArity = 1;
polygon.cljs$lang$applyTo = polygon__2.cljs$lang$applyTo;
polygon.cljs$core$IFn$_invoke$arity$0 = polygon__0;
polygon.cljs$core$IFn$_invoke$arity$variadic = polygon__2.cljs$core$IFn$_invoke$arity$variadic;
return polygon;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.radialGradient = (function() {
var radialGradient = null;
var radialGradient__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.radialGradient,null,null);
});
var radialGradient__2 = (function() { 
var G__24165__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.radialGradient,opts__8990__auto__,children__8991__auto__);
};
var G__24165 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24166__i = 0, G__24166__a = new Array(arguments.length -  1);
while (G__24166__i < G__24166__a.length) {G__24166__a[G__24166__i] = arguments[G__24166__i + 1]; ++G__24166__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24166__a,0);
} 
return G__24165__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24165.cljs$lang$maxFixedArity = 1;
G__24165.cljs$lang$applyTo = (function (arglist__24167){
var opts__8990__auto__ = cljs.core.first(arglist__24167);
var children__8991__auto__ = cljs.core.rest(arglist__24167);
return G__24165__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24165.cljs$core$IFn$_invoke$arity$variadic = G__24165__delegate;
return G__24165;
})()
;
radialGradient = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return radialGradient__0.call(this);
default:
var G__24168 = null;
if (arguments.length > 1) {
var G__24169__i = 0, G__24169__a = new Array(arguments.length -  1);
while (G__24169__i < G__24169__a.length) {G__24169__a[G__24169__i] = arguments[G__24169__i + 1]; ++G__24169__i;}
G__24168 = new cljs.core.IndexedSeq(G__24169__a,0);
}
return radialGradient__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24168);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radialGradient.cljs$lang$maxFixedArity = 1;
radialGradient.cljs$lang$applyTo = radialGradient__2.cljs$lang$applyTo;
radialGradient.cljs$core$IFn$_invoke$arity$0 = radialGradient__0;
radialGradient.cljs$core$IFn$_invoke$arity$variadic = radialGradient__2.cljs$core$IFn$_invoke$arity$variadic;
return radialGradient;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.stop = (function() {
var stop = null;
var stop__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.stop,null,null);
});
var stop__2 = (function() { 
var G__24170__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.stop,opts__8990__auto__,children__8991__auto__);
};
var G__24170 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24171__i = 0, G__24171__a = new Array(arguments.length -  1);
while (G__24171__i < G__24171__a.length) {G__24171__a[G__24171__i] = arguments[G__24171__i + 1]; ++G__24171__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24171__a,0);
} 
return G__24170__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24170.cljs$lang$maxFixedArity = 1;
G__24170.cljs$lang$applyTo = (function (arglist__24172){
var opts__8990__auto__ = cljs.core.first(arglist__24172);
var children__8991__auto__ = cljs.core.rest(arglist__24172);
return G__24170__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24170.cljs$core$IFn$_invoke$arity$variadic = G__24170__delegate;
return G__24170;
})()
;
stop = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return stop__0.call(this);
default:
var G__24173 = null;
if (arguments.length > 1) {
var G__24174__i = 0, G__24174__a = new Array(arguments.length -  1);
while (G__24174__i < G__24174__a.length) {G__24174__a[G__24174__i] = arguments[G__24174__i + 1]; ++G__24174__i;}
G__24173 = new cljs.core.IndexedSeq(G__24174__a,0);
}
return stop__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
stop.cljs$lang$maxFixedArity = 1;
stop.cljs$lang$applyTo = stop__2.cljs$lang$applyTo;
stop.cljs$core$IFn$_invoke$arity$0 = stop__0;
stop.cljs$core$IFn$_invoke$arity$variadic = stop__2.cljs$core$IFn$_invoke$arity$variadic;
return stop;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.tspan = (function() {
var tspan = null;
var tspan__0 = (function (){
return om_tools.dom.element.call(null,React.DOM.tspan,null,null);
});
var tspan__2 = (function() { 
var G__24175__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,React.DOM.tspan,opts__8990__auto__,children__8991__auto__);
};
var G__24175 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24176__i = 0, G__24176__a = new Array(arguments.length -  1);
while (G__24176__i < G__24176__a.length) {G__24176__a[G__24176__i] = arguments[G__24176__i + 1]; ++G__24176__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24176__a,0);
} 
return G__24175__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24175.cljs$lang$maxFixedArity = 1;
G__24175.cljs$lang$applyTo = (function (arglist__24177){
var opts__8990__auto__ = cljs.core.first(arglist__24177);
var children__8991__auto__ = cljs.core.rest(arglist__24177);
return G__24175__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24175.cljs$core$IFn$_invoke$arity$variadic = G__24175__delegate;
return G__24175;
})()
;
tspan = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return tspan__0.call(this);
default:
var G__24178 = null;
if (arguments.length > 1) {
var G__24179__i = 0, G__24179__a = new Array(arguments.length -  1);
while (G__24179__i < G__24179__a.length) {G__24179__a[G__24179__i] = arguments[G__24179__i + 1]; ++G__24179__i;}
G__24178 = new cljs.core.IndexedSeq(G__24179__a,0);
}
return tspan__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tspan.cljs$lang$maxFixedArity = 1;
tspan.cljs$lang$applyTo = tspan__2.cljs$lang$applyTo;
tspan.cljs$core$IFn$_invoke$arity$0 = tspan__0;
tspan.cljs$core$IFn$_invoke$arity$variadic = tspan__2.cljs$core$IFn$_invoke$arity$variadic;
return tspan;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.input = (function() {
var input = null;
var input__0 = (function (){
return om_tools.dom.element.call(null,om.dom.input,null,null);
});
var input__2 = (function() { 
var G__24180__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,om.dom.input,opts__8990__auto__,children__8991__auto__);
};
var G__24180 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24181__i = 0, G__24181__a = new Array(arguments.length -  1);
while (G__24181__i < G__24181__a.length) {G__24181__a[G__24181__i] = arguments[G__24181__i + 1]; ++G__24181__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24181__a,0);
} 
return G__24180__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24180.cljs$lang$maxFixedArity = 1;
G__24180.cljs$lang$applyTo = (function (arglist__24182){
var opts__8990__auto__ = cljs.core.first(arglist__24182);
var children__8991__auto__ = cljs.core.rest(arglist__24182);
return G__24180__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24180.cljs$core$IFn$_invoke$arity$variadic = G__24180__delegate;
return G__24180;
})()
;
input = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return input__0.call(this);
default:
var G__24183 = null;
if (arguments.length > 1) {
var G__24184__i = 0, G__24184__a = new Array(arguments.length -  1);
while (G__24184__i < G__24184__a.length) {G__24184__a[G__24184__i] = arguments[G__24184__i + 1]; ++G__24184__i;}
G__24183 = new cljs.core.IndexedSeq(G__24184__a,0);
}
return input__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
input.cljs$lang$maxFixedArity = 1;
input.cljs$lang$applyTo = input__2.cljs$lang$applyTo;
input.cljs$core$IFn$_invoke$arity$0 = input__0;
input.cljs$core$IFn$_invoke$arity$variadic = input__2.cljs$core$IFn$_invoke$arity$variadic;
return input;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.textarea = (function() {
var textarea = null;
var textarea__0 = (function (){
return om_tools.dom.element.call(null,om.dom.textarea,null,null);
});
var textarea__2 = (function() { 
var G__24185__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,om.dom.textarea,opts__8990__auto__,children__8991__auto__);
};
var G__24185 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24186__i = 0, G__24186__a = new Array(arguments.length -  1);
while (G__24186__i < G__24186__a.length) {G__24186__a[G__24186__i] = arguments[G__24186__i + 1]; ++G__24186__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24186__a,0);
} 
return G__24185__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24185.cljs$lang$maxFixedArity = 1;
G__24185.cljs$lang$applyTo = (function (arglist__24187){
var opts__8990__auto__ = cljs.core.first(arglist__24187);
var children__8991__auto__ = cljs.core.rest(arglist__24187);
return G__24185__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24185.cljs$core$IFn$_invoke$arity$variadic = G__24185__delegate;
return G__24185;
})()
;
textarea = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return textarea__0.call(this);
default:
var G__24188 = null;
if (arguments.length > 1) {
var G__24189__i = 0, G__24189__a = new Array(arguments.length -  1);
while (G__24189__i < G__24189__a.length) {G__24189__a[G__24189__i] = arguments[G__24189__i + 1]; ++G__24189__i;}
G__24188 = new cljs.core.IndexedSeq(G__24189__a,0);
}
return textarea__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
textarea.cljs$lang$maxFixedArity = 1;
textarea.cljs$lang$applyTo = textarea__2.cljs$lang$applyTo;
textarea.cljs$core$IFn$_invoke$arity$0 = textarea__0;
textarea.cljs$core$IFn$_invoke$arity$variadic = textarea__2.cljs$core$IFn$_invoke$arity$variadic;
return textarea;
})()
;

/**
* @param {...*} var_args
*/
om_tools.dom.option = (function() {
var option = null;
var option__0 = (function (){
return om_tools.dom.element.call(null,om.dom.option,null,null);
});
var option__2 = (function() { 
var G__24190__delegate = function (opts__8990__auto__,children__8991__auto__){
return om_tools.dom.element.call(null,om.dom.option,opts__8990__auto__,children__8991__auto__);
};
var G__24190 = function (opts__8990__auto__,var_args){
var children__8991__auto__ = null;
if (arguments.length > 1) {
var G__24191__i = 0, G__24191__a = new Array(arguments.length -  1);
while (G__24191__i < G__24191__a.length) {G__24191__a[G__24191__i] = arguments[G__24191__i + 1]; ++G__24191__i;}
  children__8991__auto__ = new cljs.core.IndexedSeq(G__24191__a,0);
} 
return G__24190__delegate.call(this,opts__8990__auto__,children__8991__auto__);};
G__24190.cljs$lang$maxFixedArity = 1;
G__24190.cljs$lang$applyTo = (function (arglist__24192){
var opts__8990__auto__ = cljs.core.first(arglist__24192);
var children__8991__auto__ = cljs.core.rest(arglist__24192);
return G__24190__delegate(opts__8990__auto__,children__8991__auto__);
});
G__24190.cljs$core$IFn$_invoke$arity$variadic = G__24190__delegate;
return G__24190;
})()
;
option = function(opts__8990__auto__,var_args){
var children__8991__auto__ = var_args;
switch(arguments.length){
case 0:
return option__0.call(this);
default:
var G__24193 = null;
if (arguments.length > 1) {
var G__24194__i = 0, G__24194__a = new Array(arguments.length -  1);
while (G__24194__i < G__24194__a.length) {G__24194__a[G__24194__i] = arguments[G__24194__i + 1]; ++G__24194__i;}
G__24193 = new cljs.core.IndexedSeq(G__24194__a,0);
}
return option__2.cljs$core$IFn$_invoke$arity$variadic(opts__8990__auto__, G__24193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
option.cljs$lang$maxFixedArity = 1;
option.cljs$lang$applyTo = option__2.cljs$lang$applyTo;
option.cljs$core$IFn$_invoke$arity$0 = option__0;
option.cljs$core$IFn$_invoke$arity$variadic = option__2.cljs$core$IFn$_invoke$arity$variadic;
return option;
})()
;
om_tools.dom.class_set = (function class_set(m){

var temp__4126__auto__ = cljs.core.seq.call(null,cljs.core.distinct.call(null,cljs.core.map.call(null,cljs.core.name,cljs.core.keys.call(null,cljs.core.filter.call(null,cljs.core.val,m)))));
if(temp__4126__auto__){
var ks = temp__4126__auto__;
return clojure.string.join.call(null," ",ks);
} else {
return null;
}
});

//# sourceMappingURL=dom.js.map