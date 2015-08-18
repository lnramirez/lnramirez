// Compiled by ClojureScript 0.0-2816 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('sablono.interpreter');
goog.require('sablono.util');
goog.require('clojure.walk');
goog.require('clojure.string');
/**
* Add an optional attribute argument to a function that returns a element vector.
*/
sablono.core.wrap_attrs = (function wrap_attrs(func){
return (function() { 
var G__27944__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__27943 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__27943,(0),null);
var body = cljs.core.nthnext.call(null,vec__27943,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__27944 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27945__i = 0, G__27945__a = new Array(arguments.length -  0);
while (G__27945__i < G__27945__a.length) {G__27945__a[G__27945__i] = arguments[G__27945__i + 0]; ++G__27945__i;}
  args = new cljs.core.IndexedSeq(G__27945__a,0);
} 
return G__27944__delegate.call(this,args);};
G__27944.cljs$lang$maxFixedArity = 0;
G__27944.cljs$lang$applyTo = (function (arglist__27946){
var args = cljs.core.seq(arglist__27946);
return G__27944__delegate(args);
});
G__27944.cljs$core$IFn$_invoke$arity$variadic = G__27944__delegate;
return G__27944;
})()
;
});
sablono.core.update_arglists = (function update_arglists(arglists){
var iter__4562__auto__ = (function iter__27951(s__27952){
return (new cljs.core.LazySeq(null,(function (){
var s__27952__$1 = s__27952;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27952__$1);
if(temp__4126__auto__){
var s__27952__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27952__$2)){
var c__4560__auto__ = cljs.core.chunk_first.call(null,s__27952__$2);
var size__4561__auto__ = cljs.core.count.call(null,c__4560__auto__);
var b__27954 = cljs.core.chunk_buffer.call(null,size__4561__auto__);
if((function (){var i__27953 = (0);
while(true){
if((i__27953 < size__4561__auto__)){
var args = cljs.core._nth.call(null,c__4560__auto__,i__27953);
cljs.core.chunk_append.call(null,b__27954,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__27955 = (i__27953 + (1));
i__27953 = G__27955;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27954),iter__27951.call(null,cljs.core.chunk_rest.call(null,s__27952__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27954),null);
}
} else {
var args = cljs.core.first.call(null,s__27952__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),iter__27951.call(null,cljs.core.rest.call(null,s__27952__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4562__auto__.call(null,arglists);
});
/**
* Render the React `component` as an HTML string.
*/
sablono.core.render = (function render(component){
return React.renderComponentToString(component);
});
/**
* Include a list of external stylesheet files.
* @param {...*} var_args
*/
sablono.core.include_css = (function() { 
var include_css__delegate = function (styles){
var iter__4562__auto__ = (function iter__27960(s__27961){
return (new cljs.core.LazySeq(null,(function (){
var s__27961__$1 = s__27961;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27961__$1);
if(temp__4126__auto__){
var s__27961__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27961__$2)){
var c__4560__auto__ = cljs.core.chunk_first.call(null,s__27961__$2);
var size__4561__auto__ = cljs.core.count.call(null,c__4560__auto__);
var b__27963 = cljs.core.chunk_buffer.call(null,size__4561__auto__);
if((function (){var i__27962 = (0);
while(true){
if((i__27962 < size__4561__auto__)){
var style = cljs.core._nth.call(null,c__4560__auto__,i__27962);
cljs.core.chunk_append.call(null,b__27963,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__27964 = (i__27962 + (1));
i__27962 = G__27964;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27963),iter__27960.call(null,cljs.core.chunk_rest.call(null,s__27961__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27963),null);
}
} else {
var style = cljs.core.first.call(null,s__27961__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),iter__27960.call(null,cljs.core.rest.call(null,s__27961__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4562__auto__.call(null,styles);
};
var include_css = function (var_args){
var styles = null;
if (arguments.length > 0) {
var G__27965__i = 0, G__27965__a = new Array(arguments.length -  0);
while (G__27965__i < G__27965__a.length) {G__27965__a[G__27965__i] = arguments[G__27965__i + 0]; ++G__27965__i;}
  styles = new cljs.core.IndexedSeq(G__27965__a,0);
} 
return include_css__delegate.call(this,styles);};
include_css.cljs$lang$maxFixedArity = 0;
include_css.cljs$lang$applyTo = (function (arglist__27966){
var styles = cljs.core.seq(arglist__27966);
return include_css__delegate(styles);
});
include_css.cljs$core$IFn$_invoke$arity$variadic = include_css__delegate;
return include_css;
})()
;
/**
* Include the JavaScript library at `src`.
*/
sablono.core.include_js = (function include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
* Include Facebook's React JavaScript library.
*/
sablono.core.include_react = (function include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.9.0.js");
});
/**
* Wraps some content in a HTML hyperlink with the supplied URL.
* @param {...*} var_args
*/
sablono.core.link_to27967 = (function() { 
var link_to27967__delegate = function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
};
var link_to27967 = function (url,var_args){
var content = null;
if (arguments.length > 1) {
var G__27968__i = 0, G__27968__a = new Array(arguments.length -  1);
while (G__27968__i < G__27968__a.length) {G__27968__a[G__27968__i] = arguments[G__27968__i + 1]; ++G__27968__i;}
  content = new cljs.core.IndexedSeq(G__27968__a,0);
} 
return link_to27967__delegate.call(this,url,content);};
link_to27967.cljs$lang$maxFixedArity = 1;
link_to27967.cljs$lang$applyTo = (function (arglist__27969){
var url = cljs.core.first(arglist__27969);
var content = cljs.core.rest(arglist__27969);
return link_to27967__delegate(url,content);
});
link_to27967.cljs$core$IFn$_invoke$arity$variadic = link_to27967__delegate;
return link_to27967;
})()
;

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to27967);
/**
* Wraps some content in a HTML hyperlink with the supplied e-mail
* address. If no content provided use the e-mail address as content.
* @param {...*} var_args
*/
sablono.core.mail_to27970 = (function() { 
var mail_to27970__delegate = function (e_mail,p__27971){
var vec__27973 = p__27971;
var content = cljs.core.nth.call(null,vec__27973,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__3806__auto__ = content;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return e_mail;
}
})()], null);
};
var mail_to27970 = function (e_mail,var_args){
var p__27971 = null;
if (arguments.length > 1) {
var G__27974__i = 0, G__27974__a = new Array(arguments.length -  1);
while (G__27974__i < G__27974__a.length) {G__27974__a[G__27974__i] = arguments[G__27974__i + 1]; ++G__27974__i;}
  p__27971 = new cljs.core.IndexedSeq(G__27974__a,0);
} 
return mail_to27970__delegate.call(this,e_mail,p__27971);};
mail_to27970.cljs$lang$maxFixedArity = 1;
mail_to27970.cljs$lang$applyTo = (function (arglist__27975){
var e_mail = cljs.core.first(arglist__27975);
var p__27971 = cljs.core.rest(arglist__27975);
return mail_to27970__delegate(e_mail,p__27971);
});
mail_to27970.cljs$core$IFn$_invoke$arity$variadic = mail_to27970__delegate;
return mail_to27970;
})()
;

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to27970);
/**
* Wrap a collection in an unordered list.
*/
sablono.core.unordered_list27976 = (function unordered_list27976(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4562__auto__ = (function iter__27981(s__27982){
return (new cljs.core.LazySeq(null,(function (){
var s__27982__$1 = s__27982;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27982__$1);
if(temp__4126__auto__){
var s__27982__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27982__$2)){
var c__4560__auto__ = cljs.core.chunk_first.call(null,s__27982__$2);
var size__4561__auto__ = cljs.core.count.call(null,c__4560__auto__);
var b__27984 = cljs.core.chunk_buffer.call(null,size__4561__auto__);
if((function (){var i__27983 = (0);
while(true){
if((i__27983 < size__4561__auto__)){
var x = cljs.core._nth.call(null,c__4560__auto__,i__27983);
cljs.core.chunk_append.call(null,b__27984,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27985 = (i__27983 + (1));
i__27983 = G__27985;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27984),iter__27981.call(null,cljs.core.chunk_rest.call(null,s__27982__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27984),null);
}
} else {
var x = cljs.core.first.call(null,s__27982__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__27981.call(null,cljs.core.rest.call(null,s__27982__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4562__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list27976);
/**
* Wrap a collection in an ordered list.
*/
sablono.core.ordered_list27986 = (function ordered_list27986(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4562__auto__ = (function iter__27991(s__27992){
return (new cljs.core.LazySeq(null,(function (){
var s__27992__$1 = s__27992;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__27992__$1);
if(temp__4126__auto__){
var s__27992__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27992__$2)){
var c__4560__auto__ = cljs.core.chunk_first.call(null,s__27992__$2);
var size__4561__auto__ = cljs.core.count.call(null,c__4560__auto__);
var b__27994 = cljs.core.chunk_buffer.call(null,size__4561__auto__);
if((function (){var i__27993 = (0);
while(true){
if((i__27993 < size__4561__auto__)){
var x = cljs.core._nth.call(null,c__4560__auto__,i__27993);
cljs.core.chunk_append.call(null,b__27994,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27995 = (i__27993 + (1));
i__27993 = G__27995;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27994),iter__27991.call(null,cljs.core.chunk_rest.call(null,s__27992__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27994),null);
}
} else {
var x = cljs.core.first.call(null,s__27992__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),iter__27991.call(null,cljs.core.rest.call(null,s__27992__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4562__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list27986);
/**
* Create an image element.
*/
sablono.core.image27996 = (function() {
var image27996 = null;
var image27996__1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});
var image27996__2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});
image27996 = function(src,alt){
switch(arguments.length){
case 1:
return image27996__1.call(this,src);
case 2:
return image27996__2.call(this,src,alt);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
image27996.cljs$core$IFn$_invoke$arity$1 = image27996__1;
image27996.cljs$core$IFn$_invoke$arity$2 = image27996__2;
return image27996;
})()
;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image27996);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
* Create a field name from the supplied argument the current field group.
*/
sablono.core.make_name = (function make_name(name){
return cljs.core.reduce.call(null,(function (p1__27997_SHARP_,p2__27998_SHARP_){
return [cljs.core.str(p1__27997_SHARP_),cljs.core.str("["),cljs.core.str(p2__27998_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Create a field id from the supplied argument and current field group.
*/
sablono.core.make_id = (function make_id(name){
return cljs.core.reduce.call(null,(function (p1__27999_SHARP_,p2__28000_SHARP_){
return [cljs.core.str(p1__27999_SHARP_),cljs.core.str("-"),cljs.core.str(p2__28000_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
* Creates a new <input> element.
*/
sablono.core.input_field_STAR_ = (function input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
* Creates a color input field.
*/
sablono.core.color_field28001 = (function() {
var color_field28001 = null;
var color_field28001__1 = (function (name__16061__auto__){
return color_field28001.call(null,name__16061__auto__,null);
});
var color_field28001__2 = (function (name__16061__auto__,value__16062__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__16061__auto__,value__16062__auto__);
});
color_field28001 = function(name__16061__auto__,value__16062__auto__){
switch(arguments.length){
case 1:
return color_field28001__1.call(this,name__16061__auto__);
case 2:
return color_field28001__2.call(this,name__16061__auto__,value__16062__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
color_field28001.cljs$core$IFn$_invoke$arity$1 = color_field28001__1;
color_field28001.cljs$core$IFn$_invoke$arity$2 = color_field28001__2;
return color_field28001;
})()
;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field28001);

/**
* Creates a date input field.
*/
sablono.core.date_field28002 = (function() {
var date_field28002 = null;
var date_field28002__1 = (function (name__16061__auto__){
return date_field28002.call(null,name__16061__auto__,null);
});
var date_field28002__2 = (function (name__16061__auto__,value__16062__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__16061__auto__,value__16062__auto__);
});
date_field28002 = function(name__16061__auto__,value__16062__auto__){
switch(arguments.length){
case 1:
return date_field28002__1.call(this,name__16061__auto__);
case 2:
return date_field28002__2.call(this,name__16061__auto__,value__16062__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
date_field28002.cljs$core$IFn$_invoke$arity$1 = date_field28002__1;
date_field28002.cljs$core$IFn$_invoke$arity$2 = date_field28002__2;
return date_field28002;
})()
;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field28002);

/**
* Creates a datetime input field.
*/
sablono.core.datetime_field28003 = (function() {
var datetime_field28003 = null;
var datetime_field28003__1 = (function (name__16061__auto__){
return datetime_field28003.call(null,name__16061__auto__,null);
});
var datetime_field28003__2 = (function (name__16061__auto__,value__16062__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__16061__auto__,value__16062__auto__);
});
datetime_field28003 = function(name__16061__auto__,value__16062__auto__){
switch(arguments.length){
case 1:
return datetime_field28003__1.call(this,name__16061__auto__);
case 2:
return datetime_field28003__2.call(this,name__16061__auto__,value__16062__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_field28003.cljs$core$IFn$_invoke$arity$1 = datetime_field28003__1;
datetime_field28003.cljs$core$IFn$_invoke$arity$2 = datetime_field28003__2;
return datetime_field28003;
})()
;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field28003);

/**
* Creates a datetime-local input field.
*/
sablono.core.datetime_local_field28004 = (function() {
var datetime_local_field28004 = null;
var datetime_local_field28004__1 = (function (name__16061__auto__){
return datetime_local_field28004.call(null,name__16061__auto__,null);
});
var datetime_local_field28004__2 = (function (name__16061__auto__,value__16062__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__16061__auto__,value__16062__auto__);
});
datetime_local_field28004 = function(name__16061__auto__,value__16062__auto__){
switch(arguments.length){
case 1:
return datetime_local_field28004__1.call(this,name__16061__auto__);
case 2:
return datetime_local_field28004__2.call(this,name__16061__auto__,value__16062__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
datetime_local_field28004.cljs$core$IFn$_invoke$arity$1 = datetime_local_field28004__1;
datetime_local_field28004.cljs$core$IFn$_invoke$arity$2 = datetime_local_field28004__2;
return datetime_local_field28004;
})()
;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field28004);

/**
* Creates a email input field.
*/
sablono.core.email_field28005 = (function() {
var email_field28005 = null;
var email_field28005__1 = (function (name__16061__auto__){
return email_field28005.call(null,name__16061__auto__,null);
});
var email_field28005__2 = (function (name__16061__auto__,value__16062__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__16061__auto__,value__16062__auto__);
});
email_field28005 = function(name__16061__auto__,value__16062__auto__){
switch(arguments.length){
case 1:
return email_field28005__1.call(this,name__16061__auto__);
case 2:
return email_field28005__2.call(this,name__16061__auto__,value__16062__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
email_field28005.cljs$core$IFn$_invoke$arity$1 = email_field28005__1;
email_field28005.cljs$core$IFn$_invoke$arity$2 = email_field28005__2;
return email_field28005;
})()
;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28005);

/**
* Creates a file input field.
*/
sablono.core.file_field28006 = (function() {
var file_field28006 = null;
var file_field28006__1 = (function (name__16061__auto__){
return file_field28006.call(null,name__16061__auto__,null);
});
var file_field28006__2 = (function (name__16061__auto__,value__16062__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__16061__auto__,value__16062__auto__);
});
file_field28006 = function(name__16061__auto__,value__16062__auto__){
switch(arguments.length){
case 1:
return file_field28006__1.call(this,name__16061__auto__);
case 2:
return file_field28006__2.call(this,name__16061__auto__,value__16062__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
file_field28006.cljs$core$IFn$_invoke$arity$1 = file_field28006__1;
file_field28006.cljs$core$IFn$_invoke$arity$2 = file_field28006__2;
return file_field28006;
})()
;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field28006);

/**
* Creates a hidden input field.
*/
sablono.core.hidden_field28007 = (function() {
var hidden_field28007 = null;
var hidden_field28007__1 = (function (name__16061__auto__){
return hidden_field28007.call(null,name__16061__auto__,null);
});
var hidden_field28007__2 = (function (name__16061__auto__,value__16062__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__16061__auto__,value__16062__auto__);
});
hidden_field28007 = function(name__16061__auto__,value__16062__auto__){
switch(arguments.length){
case 1:
return hidden_field28007__1.call(this,name__16061__auto__);
case 2:
return hidden_field28007__2.call(this,name__16061__auto__,value__16062__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
hidden_field28007.cljs$core$IFn$_invoke$arity$1 = hidden_field28007__1;
hidden_field28007.cljs$core$IFn$_invoke$arity$2 = hidden_field28007__2;
return hidden_field28007;
})()
;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28007);

/**
* Creates a month input field.
*/
sablono.core.month_field28008 = (function() {
var month_field28008 = null;
var month_field28008__1 = (function (name__16061__auto__){
return month_field28008.call(null,name__16061__auto__,null);
});
var month_field28008__2 = (function (name__16061__auto__,value__16062__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__16061__auto__,value__16062__auto__);
});
month_field28008 = function(name__16061__auto__,value__16062__auto__){
switch(arguments.length){
case 1:
return month_field28008__1.call(this,name__16061__auto__);
case 2:
return month_field28008__2.call(this,name__16061__auto__,value__16062__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
month_field28008.cljs$core$IFn$_invoke$arity$1 = month_field28008__1;
month_field28008.cljs$core$IFn$_invoke$arity$2 = month_field28008__2;
return month_field28008;
})()
;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field28008);

/**
* Creates a number input field.
*/
sablono.core.number_field28009 = (function() {
var number_field28009 = null;
var number_field28009__1 = (function (name__16061__auto__){
return number_field28009.call(null,name__16061__auto__,null);
});
var number_field28009__2 = (function (name__16061__auto__,value__16062__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__16061__auto__,value__16062__auto__);
});
number_field28009 = function(name__16061__auto__,value__16062__auto__){
switch(arguments.length){
case 1:
return number_field28009__1.call(this,name__16061__auto__);
case 2:
return number_field28009__2.call(this,name__16061__auto__,value__16062__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
number_field28009.cljs$core$IFn$_invoke$arity$1 = number_field28009__1;
number_field28009.cljs$core$IFn$_invoke$arity$2 = number_field28009__2;
return number_field28009;
})()
;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field28009);

/**
* Creates a password input field.
*/
sablono.core.password_field28010 = (function() {
var password_field28010 = null;
var password_field28010__1 = (function (name__16061__auto__){
return password_field28010.call(null,name__16061__auto__,null);
});
var password_field28010__2 = (function (name__16061__auto__,value__16062__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__16061__auto__,value__16062__auto__);
});
password_field28010 = function(name__16061__auto__,value__16062__auto__){
switch(arguments.length){
case 1:
return password_field28010__1.call(this,name__16061__auto__);
case 2:
return password_field28010__2.call(this,name__16061__auto__,value__16062__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
password_field28010.cljs$core$IFn$_invoke$arity$1 = password_field28010__1;
password_field28010.cljs$core$IFn$_invoke$arity$2 = password_field28010__2;
return password_field28010;
})()
;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28010);

/**
* Creates a range input field.
*/
sablono.core.range_field28011 = (function() {
var range_field28011 = null;
var range_field28011__1 = (function (name__16061__auto__){
return range_field28011.call(null,name__16061__auto__,null);
});
var range_field28011__2 = (function (name__16061__auto__,value__16062__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__16061__auto__,value__16062__auto__);
});
range_field28011 = function(name__16061__auto__,value__16062__auto__){
switch(arguments.length){
case 1:
return range_field28011__1.call(this,name__16061__auto__);
case 2:
return range_field28011__2.call(this,name__16061__auto__,value__16062__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
range_field28011.cljs$core$IFn$_invoke$arity$1 = range_field28011__1;
range_field28011.cljs$core$IFn$_invoke$arity$2 = range_field28011__2;
return range_field28011;
})()
;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field28011);

/**
* Creates a search input field.
*/
sablono.core.search_field28012 = (function() {
var search_field28012 = null;
var search_field28012__1 = (function (name__16061__auto__){
return search_field28012.call(null,name__16061__auto__,null);
});
var search_field28012__2 = (function (name__16061__auto__,value__16062__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__16061__auto__,value__16062__auto__);
});
search_field28012 = function(name__16061__auto__,value__16062__auto__){
switch(arguments.length){
case 1:
return search_field28012__1.call(this,name__16061__auto__);
case 2:
return search_field28012__2.call(this,name__16061__auto__,value__16062__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
search_field28012.cljs$core$IFn$_invoke$arity$1 = search_field28012__1;
search_field28012.cljs$core$IFn$_invoke$arity$2 = search_field28012__2;
return search_field28012;
})()
;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field28012);

/**
* Creates a tel input field.
*/
sablono.core.tel_field28013 = (function() {
var tel_field28013 = null;
var tel_field28013__1 = (function (name__16061__auto__){
return tel_field28013.call(null,name__16061__auto__,null);
});
var tel_field28013__2 = (function (name__16061__auto__,value__16062__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__16061__auto__,value__16062__auto__);
});
tel_field28013 = function(name__16061__auto__,value__16062__auto__){
switch(arguments.length){
case 1:
return tel_field28013__1.call(this,name__16061__auto__);
case 2:
return tel_field28013__2.call(this,name__16061__auto__,value__16062__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tel_field28013.cljs$core$IFn$_invoke$arity$1 = tel_field28013__1;
tel_field28013.cljs$core$IFn$_invoke$arity$2 = tel_field28013__2;
return tel_field28013;
})()
;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field28013);

/**
* Creates a text input field.
*/
sablono.core.text_field28014 = (function() {
var text_field28014 = null;
var text_field28014__1 = (function (name__16061__auto__){
return text_field28014.call(null,name__16061__auto__,null);
});
var text_field28014__2 = (function (name__16061__auto__,value__16062__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__16061__auto__,value__16062__auto__);
});
text_field28014 = function(name__16061__auto__,value__16062__auto__){
switch(arguments.length){
case 1:
return text_field28014__1.call(this,name__16061__auto__);
case 2:
return text_field28014__2.call(this,name__16061__auto__,value__16062__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_field28014.cljs$core$IFn$_invoke$arity$1 = text_field28014__1;
text_field28014.cljs$core$IFn$_invoke$arity$2 = text_field28014__2;
return text_field28014;
})()
;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28014);

/**
* Creates a time input field.
*/
sablono.core.time_field28015 = (function() {
var time_field28015 = null;
var time_field28015__1 = (function (name__16061__auto__){
return time_field28015.call(null,name__16061__auto__,null);
});
var time_field28015__2 = (function (name__16061__auto__,value__16062__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__16061__auto__,value__16062__auto__);
});
time_field28015 = function(name__16061__auto__,value__16062__auto__){
switch(arguments.length){
case 1:
return time_field28015__1.call(this,name__16061__auto__);
case 2:
return time_field28015__2.call(this,name__16061__auto__,value__16062__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
time_field28015.cljs$core$IFn$_invoke$arity$1 = time_field28015__1;
time_field28015.cljs$core$IFn$_invoke$arity$2 = time_field28015__2;
return time_field28015;
})()
;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field28015);

/**
* Creates a url input field.
*/
sablono.core.url_field28016 = (function() {
var url_field28016 = null;
var url_field28016__1 = (function (name__16061__auto__){
return url_field28016.call(null,name__16061__auto__,null);
});
var url_field28016__2 = (function (name__16061__auto__,value__16062__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__16061__auto__,value__16062__auto__);
});
url_field28016 = function(name__16061__auto__,value__16062__auto__){
switch(arguments.length){
case 1:
return url_field28016__1.call(this,name__16061__auto__);
case 2:
return url_field28016__2.call(this,name__16061__auto__,value__16062__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
url_field28016.cljs$core$IFn$_invoke$arity$1 = url_field28016__1;
url_field28016.cljs$core$IFn$_invoke$arity$2 = url_field28016__2;
return url_field28016;
})()
;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field28016);

/**
* Creates a week input field.
*/
sablono.core.week_field28017 = (function() {
var week_field28017 = null;
var week_field28017__1 = (function (name__16061__auto__){
return week_field28017.call(null,name__16061__auto__,null);
});
var week_field28017__2 = (function (name__16061__auto__,value__16062__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__16061__auto__,value__16062__auto__);
});
week_field28017 = function(name__16061__auto__,value__16062__auto__){
switch(arguments.length){
case 1:
return week_field28017__1.call(this,name__16061__auto__);
case 2:
return week_field28017__2.call(this,name__16061__auto__,value__16062__auto__);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
week_field28017.cljs$core$IFn$_invoke$arity$1 = week_field28017__1;
week_field28017.cljs$core$IFn$_invoke$arity$2 = week_field28017__2;
return week_field28017;
})()
;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field28017);
sablono.core.file_upload = sablono.core.file_field;
/**
* Creates a check box.
*/
sablono.core.check_box28018 = (function() {
var check_box28018 = null;
var check_box28018__1 = (function (name){
return check_box28018.call(null,name,null);
});
var check_box28018__2 = (function (name,checked_QMARK_){
return check_box28018.call(null,name,checked_QMARK_,"true");
});
var check_box28018__3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
check_box28018 = function(name,checked_QMARK_,value){
switch(arguments.length){
case 1:
return check_box28018__1.call(this,name);
case 2:
return check_box28018__2.call(this,name,checked_QMARK_);
case 3:
return check_box28018__3.call(this,name,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
check_box28018.cljs$core$IFn$_invoke$arity$1 = check_box28018__1;
check_box28018.cljs$core$IFn$_invoke$arity$2 = check_box28018__2;
check_box28018.cljs$core$IFn$_invoke$arity$3 = check_box28018__3;
return check_box28018;
})()
;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28018);
/**
* Creates a radio button.
*/
sablono.core.radio_button28019 = (function() {
var radio_button28019 = null;
var radio_button28019__1 = (function (group){
return radio_button28019.call(null,group,null);
});
var radio_button28019__2 = (function (group,checked_QMARK_){
return radio_button28019.call(null,group,checked_QMARK_,"true");
});
var radio_button28019__3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});
radio_button28019 = function(group,checked_QMARK_,value){
switch(arguments.length){
case 1:
return radio_button28019__1.call(this,group);
case 2:
return radio_button28019__2.call(this,group,checked_QMARK_);
case 3:
return radio_button28019__3.call(this,group,checked_QMARK_,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
radio_button28019.cljs$core$IFn$_invoke$arity$1 = radio_button28019__1;
radio_button28019.cljs$core$IFn$_invoke$arity$2 = radio_button28019__2;
radio_button28019.cljs$core$IFn$_invoke$arity$3 = radio_button28019__3;
return radio_button28019;
})()
;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28019);
/**
* Creates a seq of option tags from a collection.
*/
sablono.core.select_options28020 = (function() {
var select_options28020 = null;
var select_options28020__1 = (function (coll){
return select_options28020.call(null,coll,null);
});
var select_options28020__2 = (function (coll,selected){
var iter__4562__auto__ = (function iter__28029(s__28030){
return (new cljs.core.LazySeq(null,(function (){
var s__28030__$1 = s__28030;
while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__28030__$1);
if(temp__4126__auto__){
var s__28030__$2 = temp__4126__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28030__$2)){
var c__4560__auto__ = cljs.core.chunk_first.call(null,s__28030__$2);
var size__4561__auto__ = cljs.core.count.call(null,c__4560__auto__);
var b__28032 = cljs.core.chunk_buffer.call(null,size__4561__auto__);
if((function (){var i__28031 = (0);
while(true){
if((i__28031 < size__4561__auto__)){
var x = cljs.core._nth.call(null,c__4560__auto__,i__28031);
cljs.core.chunk_append.call(null,b__28032,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28035 = x;
var text = cljs.core.nth.call(null,vec__28035,(0),null);
var val = cljs.core.nth.call(null,vec__28035,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28035,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options28020.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__28037 = (i__28031 + (1));
i__28031 = G__28037;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28032),iter__28029.call(null,cljs.core.chunk_rest.call(null,s__28030__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28032),null);
}
} else {
var x = cljs.core.first.call(null,s__28030__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28036 = x;
var text = cljs.core.nth.call(null,vec__28036,(0),null);
var val = cljs.core.nth.call(null,vec__28036,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28036,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),select_options28020.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),iter__28029.call(null,cljs.core.rest.call(null,s__28030__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4562__auto__.call(null,coll);
});
select_options28020 = function(coll,selected){
switch(arguments.length){
case 1:
return select_options28020__1.call(this,coll);
case 2:
return select_options28020__2.call(this,coll,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
select_options28020.cljs$core$IFn$_invoke$arity$1 = select_options28020__1;
select_options28020.cljs$core$IFn$_invoke$arity$2 = select_options28020__2;
return select_options28020;
})()
;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28020);
/**
* Creates a drop-down box using the <select> tag.
*/
sablono.core.drop_down28038 = (function() {
var drop_down28038 = null;
var drop_down28038__2 = (function (name,options){
return drop_down28038.call(null,name,options,null);
});
var drop_down28038__3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});
drop_down28038 = function(name,options,selected){
switch(arguments.length){
case 2:
return drop_down28038__2.call(this,name,options);
case 3:
return drop_down28038__3.call(this,name,options,selected);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drop_down28038.cljs$core$IFn$_invoke$arity$2 = drop_down28038__2;
drop_down28038.cljs$core$IFn$_invoke$arity$3 = drop_down28038__3;
return drop_down28038;
})()
;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28038);
/**
* Creates a text area element.
*/
sablono.core.text_area28039 = (function() {
var text_area28039 = null;
var text_area28039__1 = (function (name){
return text_area28039.call(null,name,null);
});
var text_area28039__2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
text_area28039 = function(name,value){
switch(arguments.length){
case 1:
return text_area28039__1.call(this,name);
case 2:
return text_area28039__2.call(this,name,value);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
text_area28039.cljs$core$IFn$_invoke$arity$1 = text_area28039__1;
text_area28039.cljs$core$IFn$_invoke$arity$2 = text_area28039__2;
return text_area28039;
})()
;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28039);
/**
* Creates a label for an input field with the supplied name.
*/
sablono.core.label28040 = (function label28040(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28040);
/**
* Creates a submit button.
*/
sablono.core.submit_button28041 = (function submit_button28041(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28041);
/**
* Creates a form reset button.
*/
sablono.core.reset_button28042 = (function reset_button28042(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28042);
/**
* Create a form that points to a particular method and route.
* e.g. (form-to [:put "/post"]
* ...)
* @param {...*} var_args
*/
sablono.core.form_to28043 = (function() { 
var form_to28043__delegate = function (p__28044,body){
var vec__28046 = p__28044;
var method = cljs.core.nth.call(null,vec__28046,(0),null);
var action = cljs.core.nth.call(null,vec__28046,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
};
var form_to28043 = function (p__28044,var_args){
var body = null;
if (arguments.length > 1) {
var G__28047__i = 0, G__28047__a = new Array(arguments.length -  1);
while (G__28047__i < G__28047__a.length) {G__28047__a[G__28047__i] = arguments[G__28047__i + 1]; ++G__28047__i;}
  body = new cljs.core.IndexedSeq(G__28047__a,0);
} 
return form_to28043__delegate.call(this,p__28044,body);};
form_to28043.cljs$lang$maxFixedArity = 1;
form_to28043.cljs$lang$applyTo = (function (arglist__28048){
var p__28044 = cljs.core.first(arglist__28048);
var body = cljs.core.rest(arglist__28048);
return form_to28043__delegate(p__28044,body);
});
form_to28043.cljs$core$IFn$_invoke$arity$variadic = form_to28043__delegate;
return form_to28043;
})()
;

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28043);

//# sourceMappingURL=core.js.map