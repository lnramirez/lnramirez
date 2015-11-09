// Compiled by ClojureScript 0.0-2816 {}
goog.provide('bajoneando.editor');
goog.require('cljs.core');
goog.require('goog.date.DateTime');
goog.require('om_tools.dom');
goog.require('sablono.core');
goog.require('goog.events.EventType');
goog.require('om_tools.core');
goog.require('goog.i18n.DateTimeParse');
goog.require('bajoneando.core');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('goog.events');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.net.XhrIo');
goog.require('om.core');
bajoneando.editor.writer = cognitect.transit.writer.call(null,new cljs.core.Keyword(null,"json-verbose","json-verbose",-542533531));
bajoneando.editor.reader = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));
bajoneando.editor.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page","page",849072397),(1),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"new","new",-2085437848),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"subject","subject",-1411880451),"hello world",new cljs.core.Keyword(null,"publish-date","publish-date",-786153027),null,new cljs.core.Keyword(null,"md-article","md-article",1091226345),null,new cljs.core.Keyword(null,"id-article","id-article",585979570),null], null)], null));
bajoneando.editor.date_formatter = (new goog.i18n.DateTimeFormat("dd-MMM-yyyy"));
bajoneando.editor.in_date_formatter = (new goog.i18n.DateTimeFormat("yyyy-MM-dd"));
bajoneando.editor.in_date_parser = (new goog.i18n.DateTimeParse("yyyy-MM-dd"));
bajoneando.editor.date_time_formatter = (new goog.i18n.DateTimeFormat("dd-MMM-yyyy HH:mm"));
bajoneando.editor.in_date_time_formatter = (new goog.i18n.DateTimeFormat("yyyy-MM-dd HH:mm"));
bajoneando.editor.format_date = (function format_date(raw_date,formatter){
if((raw_date == null)){
return "";
} else {
return formatter.format((new Date(raw_date)));
}
});
bajoneando.editor.parse_date = (function parse_date(txt,parser){
var date = (new goog.date.DateTime());
parser.parse(txt,date);

return date.getTime();
});
bajoneando.editor.nav_pages = (function nav_pages(app,owner,op){
var entries = om.core.get_state.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entries-chan","entries-chan",-2010769486)], null));
var page = op.call(null,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app)));
return bajoneando.core.js_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("/blog/entries?page.page="),cljs.core.str(page)].join(''),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (entries,page){
return (function (res){
cljs.core.async.put_BANG_.call(null,entries,res);

return om.core.update_BANG_.call(null,app,new cljs.core.Keyword(null,"page","page",849072397),page);
});})(entries,page))
], null));
});
bajoneando.editor.new_article = (function new_article(entry,owner){
if(typeof bajoneando.editor.t24379 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.editor.t24379 = (function (owner,entry,new_article,meta24380){
this.owner = owner;
this.entry = entry;
this.new_article = new_article;
this.meta24380 = meta24380;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.editor.t24379.prototype.om$core$IInitState$ = true;

bajoneando.editor.t24379.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id-article","id-article",585979570),new cljs.core.Keyword(null,"id-article","id-article",585979570).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.entry)),new cljs.core.Keyword(null,"subject","subject",-1411880451),new cljs.core.Keyword(null,"subject","subject",-1411880451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.entry)),new cljs.core.Keyword(null,"md-article","md-article",1091226345),new cljs.core.Keyword(null,"md-article","md-article",1091226345).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.entry)),new cljs.core.Keyword(null,"publish-date","publish-date",-786153027),new cljs.core.Keyword(null,"publish-date","publish-date",-786153027).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.entry))], null);
});

bajoneando.editor.t24379.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24381){
var self__ = this;
var _24381__$1 = this;
return self__.meta24380;
});

bajoneando.editor.t24379.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24381,meta24380__$1){
var self__ = this;
var _24381__$1 = this;
return (new bajoneando.editor.t24379(self__.owner,self__.entry,self__.new_article,meta24380__$1));
});

bajoneando.editor.t24379.cljs$lang$type = true;

bajoneando.editor.t24379.cljs$lang$ctorStr = "bajoneando.editor/t24379";

bajoneando.editor.t24379.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.editor/t24379");
});

bajoneando.editor.__GT_t24379 = (function __GT_t24379(owner__$1,entry__$1,new_article__$1,meta24380){
return (new bajoneando.editor.t24379(owner__$1,entry__$1,new_article__$1,meta24380));
});

}

(new bajoneando.editor.t24379(owner,entry,new_article,cljs.core.PersistentArrayMap.EMPTY));

if(typeof bajoneando.editor.t24382 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.editor.t24382 = (function (owner,entry,new_article,meta24383){
this.owner = owner;
this.entry = entry;
this.new_article = new_article;
this.meta24383 = meta24383;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.editor.t24382.prototype.om$core$IRenderState$ = true;

bajoneando.editor.t24382.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var article = new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.entry);
var get_val = ((function (article,this$__$1){
return (function (ref){
return om.core.get_node.call(null,self__.owner,ref).value;
});})(article,this$__$1))
;
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.entry);
return React.DOM.div(null,React.DOM.form({"className": "form-horizontal"},React.DOM.div({"className": "form-group"},React.DOM.label({"className": "col-sm-2 control-label", "htmlFor": "subject"},"Subject:"),(function (){var attrs24387 = om.dom.input.call(null,{"defaultValue": new cljs.core.Keyword(null,"subject","subject",-1411880451).cljs$core$IFn$_invoke$arity$1(article), "name": "subject", "ref": "subject", "type": "text", "class-name": "form-control"});
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs24387))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-10"], null)], null),attrs24387)):{"className": "col-sm-10"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24387))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24387)], null))));
})()),React.DOM.div({"className": "form-group"},React.DOM.label({"className": "col-sm-2 control-label", "htmlFor": "publishDate"},"Publish Date:"),(function (){var attrs24390 = om.dom.input.call(null,{"defaultValue": bajoneando.editor.format_date.call(null,new cljs.core.Keyword(null,"publish-date","publish-date",-786153027).cljs$core$IFn$_invoke$arity$1(article),bajoneando.editor.in_date_formatter), "ref": "publishDate", "name": "publishDate", "type": "text", "class-name": "form-control"});
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs24390))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-10"], null)], null),attrs24390)):{"className": "col-sm-10"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24390))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24390)], null))));
})()),React.DOM.div({"className": "form-group"},React.DOM.label({"className": "col-sm-2 control-label", "htmlFor": "article"},"Article:"),(function (){var attrs24393 = om.dom.textarea.call(null,{"placeholder": "Main content of article", "defaultValue": new cljs.core.Keyword(null,"md-article","md-article",1091226345).cljs$core$IFn$_invoke$arity$1(article), "rows": "5", "ref": "article", "name": "article", "type": "text", "class-name": "form-control"});
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs24393))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-10"], null)], null),attrs24393)):{"className": "col-sm-10"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24393))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24393)], null))));
})()),React.DOM.div({"className": "form-group"},(function (){var attrs24394 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),mode))?React.DOM.button({"className": "btn btn-primary"},"Add new entry"):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cancel","cancel",-1964088360),mode))?React.DOM.span(null):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166),mode))?cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.button({"className": "btn btn-primary", "onClick": ((function (article,get_val,mode,this$__$1){
return (function (e){
e.preventDefault();

return bajoneando.core.js_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("/blog/"),cljs.core.str(new cljs.core.Keyword(null,"id-article","id-article",585979570).cljs$core$IFn$_invoke$arity$1(article))].join(''),new cljs.core.Keyword(null,"data","data",-232669377),cognitect.transit.write.call(null,bajoneando.editor.writer,new cljs.core.PersistentArrayMap(null, 4, ["id",new cljs.core.Keyword(null,"id-article","id-article",585979570).cljs$core$IFn$_invoke$arity$1(article),"subject",get_val.call(null,"subject"),"article",get_val.call(null,"article"),"publishDate",bajoneando.editor.parse_date.call(null,get_val.call(null,"publishDate"),bajoneando.editor.in_date_parser)], null))], null));
});})(article,get_val,mode,this$__$1))
},"Update"),React.DOM.button({"className": "btn btn-default", "onClick": ((function (article,get_val,mode,this$__$1){
return (function (e){
e.preventDefault();

return om.core.update_BANG_.call(null,self__.entry,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
});})(article,get_val,mode,this$__$1))
},"Cancel")], null)):null)));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs24394))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-offset-2","col-sm-10"], null)], null),attrs24394)):{"className": "col-sm-offset-2 col-sm-10"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24394))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24394)], null))));
})())));
});

bajoneando.editor.t24382.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24384){
var self__ = this;
var _24384__$1 = this;
return self__.meta24383;
});

bajoneando.editor.t24382.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24384,meta24383__$1){
var self__ = this;
var _24384__$1 = this;
return (new bajoneando.editor.t24382(self__.owner,self__.entry,self__.new_article,meta24383__$1));
});

bajoneando.editor.t24382.cljs$lang$type = true;

bajoneando.editor.t24382.cljs$lang$ctorStr = "bajoneando.editor/t24382";

bajoneando.editor.t24382.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.editor/t24382");
});

bajoneando.editor.__GT_t24382 = (function __GT_t24382(owner__$1,entry__$1,new_article__$1,meta24383){
return (new bajoneando.editor.t24382(owner__$1,entry__$1,new_article__$1,meta24383));
});

}

return (new bajoneando.editor.t24382(owner,entry,new_article,cljs.core.PersistentArrayMap.EMPTY));
});
bajoneando.editor.article_view = (function article_view(entry,owner){
if(typeof bajoneando.editor.t24406 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.editor.t24406 = (function (owner,entry,article_view,meta24407){
this.owner = owner;
this.entry = entry;
this.article_view = article_view;
this.meta24407 = meta24407;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.editor.t24406.prototype.om$core$IRenderState$ = true;

bajoneando.editor.t24406.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var subject = cljs.core.get.call(null,self__.entry,"subject");
var entry_id = cljs.core.get.call(null,self__.entry,"id");
var publish_date = bajoneando.editor.format_date.call(null,cljs.core.get.call(null,self__.entry,"publishDate"),bajoneando.editor.date_time_formatter);
var last_updated = bajoneando.editor.format_date.call(null,cljs.core.get.call(null,self__.entry,"lastUpdateDate"),bajoneando.editor.date_time_formatter);
var target = [cljs.core.str("art"),cljs.core.str(entry_id)].join('');
var printable_html = cljs.core.get.call(null,self__.entry,"printableHtml");
var md_article = cljs.core.get.call(null,self__.entry,"article");
bajoneando.editor.edit_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"subject","subject",-1411880451),subject,new cljs.core.Keyword(null,"publish-date","publish-date",-786153027),cljs.core.get.call(null,self__.entry,"publishDate"),new cljs.core.Keyword(null,"md-article","md-article",1091226345),md_article,new cljs.core.Keyword(null,"id-article","id-article",585979570),entry_id], null)], null);

bajoneando.editor.editing_init_state = cljs.core.atom.call(null,bajoneando.editor.edit_map);

return React.DOM.article({"id": entry_id, "key": entry_id, "className": "blogcontent"},React.DOM.header(null,React.DOM.h1(null,React.DOM.a({"href": [cljs.core.str("/blog/"),cljs.core.str(entry_id),cljs.core.str("/"),cljs.core.str(subject)].join('')},sablono.interpreter.interpret.call(null,subject))),(function (){var attrs24409 = [cljs.core.str("Published on: "),cljs.core.str(publish_date)].join('');
return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs24409))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-muted"], null)], null),attrs24409)):{"className": "text-muted"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24409))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24409)], null))));
})(),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"editing","editing",1365491601),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691))))?sablono.interpreter.interpret.call(null,om.core.build.call(null,bajoneando.editor.new_article,bajoneando.editor.edit_map)):null),(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editable","editable",1930280326)))?sablono.interpreter.interpret.call(null,React.DOM.div({"id": target},React.DOM.button({"className": "btn btn-danger", "onClick": ((function (subject,entry_id,publish_date,last_updated,target,printable_html,md_article,this$__$1){
return (function (e){
e.preventDefault();

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"editing","editing",1365491601));
});})(subject,entry_id,publish_date,last_updated,target,printable_html,md_article,this$__$1))
},"Edit"))):null)),React.DOM.div({"className": "printableHtml", "dangerouslySetInnerHTML": {"__html": printable_html}}),(function (){var attrs24412 = [cljs.core.str("Last update: "),cljs.core.str(last_updated)].join('');
return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs24412))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-muted"], null)], null),attrs24412)):{"className": "text-muted"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24412))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24412)], null))));
})());
});

bajoneando.editor.t24406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24408){
var self__ = this;
var _24408__$1 = this;
return self__.meta24407;
});

bajoneando.editor.t24406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24408,meta24407__$1){
var self__ = this;
var _24408__$1 = this;
return (new bajoneando.editor.t24406(self__.owner,self__.entry,self__.article_view,meta24407__$1));
});

bajoneando.editor.t24406.cljs$lang$type = true;

bajoneando.editor.t24406.cljs$lang$ctorStr = "bajoneando.editor/t24406";

bajoneando.editor.t24406.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.editor/t24406");
});

bajoneando.editor.__GT_t24406 = (function __GT_t24406(owner__$1,entry__$1,article_view__$1,meta24407){
return (new bajoneando.editor.t24406(owner__$1,entry__$1,article_view__$1,meta24407));
});

}

return (new bajoneando.editor.t24406(owner,entry,article_view,cljs.core.PersistentArrayMap.EMPTY));
});
bajoneando.editor.articles_view = (function articles_view(app,owner){
if(typeof bajoneando.editor.t24486 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.editor.t24486 = (function (owner,app,articles_view,meta24487){
this.owner = owner;
this.app = app;
this.articles_view = articles_view;
this.meta24487 = meta24487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.editor.t24486.prototype.om$core$IRenderState$ = true;

bajoneando.editor.t24486.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var entries = new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(state);
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(state);
var editable = new cljs.core.Keyword(null,"editable","editable",1930280326).cljs$core$IFn$_invoke$arity$1(state);
var first_page = new cljs.core.Keyword(null,"first-page","first-page",1317460907).cljs$core$IFn$_invoke$arity$1(state);
var last_page = new cljs.core.Keyword(null,"last-page","last-page",-1966154825).cljs$core$IFn$_invoke$arity$1(state);
var attrs24489 = om.core.build_all.call(null,bajoneando.editor.article_view,entries,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),state], null));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs24489))?sablono.interpreter.attributes.call(null,attrs24489):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs24489))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.nav(null,React.DOM.ul({"className": "pager"},React.DOM.li({"className": "previous"},React.DOM.a({"href": "#", "onClick": ((function (attrs24489,entries,page,editable,first_page,last_page,this$__$1){
return (function (){
return bajoneando.editor.nav_pages.call(null,self__.app,self__.owner,cljs.core.inc);
});})(attrs24489,entries,page,editable,first_page,last_page,this$__$1))
},React.DOM.span({"aria-hidden": true},"\u2190"),"Older")),React.DOM.li({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs24489,entries,page,editable,first_page,last_page,this$__$1){
return (function (){
return bajoneando.editor.nav_pages.call(null,self__.app,self__.owner,cljs.core.dec);
});})(attrs24489,entries,page,editable,first_page,last_page,this$__$1))
},"Newer",React.DOM.span({"aria-hidden": true},"\u2192"))))),(cljs.core.truth_(editable)?sablono.interpreter.interpret.call(null,om.core.build.call(null,bajoneando.editor.new_article,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.app)], null))):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs24489),React.DOM.nav(null,React.DOM.ul({"className": "pager"},React.DOM.li({"className": "previous"},React.DOM.a({"href": "#", "onClick": ((function (attrs24489,entries,page,editable,first_page,last_page,this$__$1){
return (function (){
return bajoneando.editor.nav_pages.call(null,self__.app,self__.owner,cljs.core.inc);
});})(attrs24489,entries,page,editable,first_page,last_page,this$__$1))
},React.DOM.span({"aria-hidden": true},"\u2190"),"Older")),React.DOM.li({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs24489,entries,page,editable,first_page,last_page,this$__$1){
return (function (){
return bajoneando.editor.nav_pages.call(null,self__.app,self__.owner,cljs.core.dec);
});})(attrs24489,entries,page,editable,first_page,last_page,this$__$1))
},"Newer",React.DOM.span({"aria-hidden": true},"\u2192"))))),(cljs.core.truth_(editable)?sablono.interpreter.interpret.call(null,om.core.build.call(null,bajoneando.editor.new_article,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.app)], null))):null)], null))));
});

bajoneando.editor.t24486.prototype.om$core$IWillMount$ = true;

bajoneando.editor.t24486.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var entries_24559 = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entries-chan","entries-chan",-2010769486)], null));
var c__10695__auto___24560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10695__auto___24560,entries_24559,___$1){
return (function (){
var f__10696__auto__ = (function (){var switch__10639__auto__ = ((function (c__10695__auto___24560,entries_24559,___$1){
return (function (state_24515){
var state_val_24516 = (state_24515[(1)]);
if((state_val_24516 === (7))){
var inst_24501 = (state_24515[(2)]);
var inst_24502 = cljs.core.get.call(null,inst_24501,"content");
var inst_24503 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"entries","entries",-86943161),inst_24502);
var inst_24504 = cljs.core.get.call(null,inst_24501,"firstPage");
var inst_24505 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"first-page","first-page",1317460907),inst_24504);
var inst_24506 = cljs.core.get.call(null,inst_24501,"lastPage");
var inst_24507 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"last-page","last-page",-1966154825),inst_24506);
var state_24515__$1 = (function (){var statearr_24517 = state_24515;
(statearr_24517[(7)] = inst_24503);

(statearr_24517[(8)] = inst_24507);

(statearr_24517[(9)] = inst_24505);

return statearr_24517;
})();
var statearr_24518_24561 = state_24515__$1;
(statearr_24518_24561[(2)] = null);

(statearr_24518_24561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24516 === (6))){
var inst_24511 = (state_24515[(2)]);
var state_24515__$1 = state_24515;
var statearr_24519_24562 = state_24515__$1;
(statearr_24519_24562[(2)] = inst_24511);

(statearr_24519_24562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24516 === (5))){
var state_24515__$1 = state_24515;
var statearr_24520_24563 = state_24515__$1;
(statearr_24520_24563[(2)] = null);

(statearr_24520_24563[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24516 === (4))){
var state_24515__$1 = state_24515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24515__$1,(7),entries_24559);
} else {
if((state_val_24516 === (3))){
var inst_24513 = (state_24515[(2)]);
var state_24515__$1 = state_24515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24515__$1,inst_24513);
} else {
if((state_val_24516 === (2))){
var state_24515__$1 = state_24515;
var statearr_24521_24564 = state_24515__$1;
(statearr_24521_24564[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24516 === (1))){
var state_24515__$1 = state_24515;
var statearr_24523_24565 = state_24515__$1;
(statearr_24523_24565[(2)] = null);

(statearr_24523_24565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__10695__auto___24560,entries_24559,___$1))
;
return ((function (switch__10639__auto__,c__10695__auto___24560,entries_24559,___$1){
return (function() {
var state_machine__10640__auto__ = null;
var state_machine__10640__auto____0 = (function (){
var statearr_24527 = [null,null,null,null,null,null,null,null,null,null];
(statearr_24527[(0)] = state_machine__10640__auto__);

(statearr_24527[(1)] = (1));

return statearr_24527;
});
var state_machine__10640__auto____1 = (function (state_24515){
while(true){
var ret_value__10641__auto__ = (function (){try{while(true){
var result__10642__auto__ = switch__10639__auto__.call(null,state_24515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10642__auto__;
}
break;
}
}catch (e24528){if((e24528 instanceof Object)){
var ex__10643__auto__ = e24528;
var statearr_24529_24566 = state_24515;
(statearr_24529_24566[(5)] = ex__10643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24528;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24567 = state_24515;
state_24515 = G__24567;
continue;
} else {
return ret_value__10641__auto__;
}
break;
}
});
state_machine__10640__auto__ = function(state_24515){
switch(arguments.length){
case 0:
return state_machine__10640__auto____0.call(this);
case 1:
return state_machine__10640__auto____1.call(this,state_24515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10640__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10640__auto____0;
state_machine__10640__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10640__auto____1;
return state_machine__10640__auto__;
})()
;})(switch__10639__auto__,c__10695__auto___24560,entries_24559,___$1))
})();
var state__10697__auto__ = (function (){var statearr_24530 = f__10696__auto__.call(null);
(statearr_24530[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10695__auto___24560);

return statearr_24530;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10697__auto__);
});})(c__10695__auto___24560,entries_24559,___$1))
);


bajoneando.core.js_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("/blog/entries?page.page="),cljs.core.str(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app))].join(''),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (entries_24559,___$1){
return (function (res){
return cljs.core.async.put_BANG_.call(null,entries_24559,res);
});})(entries_24559,___$1))
], null));

var editable = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editable-chan","editable-chan",361273607)], null));
var c__10695__auto___24568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10695__auto___24568,editable,___$1){
return (function (){
var f__10696__auto__ = (function (){var switch__10639__auto__ = ((function (c__10695__auto___24568,editable,___$1){
return (function (state_24543){
var state_val_24544 = (state_24543[(1)]);
if((state_val_24544 === (7))){
var inst_24534 = (state_24543[(2)]);
var inst_24535 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editable","editable",1930280326),true);
var state_24543__$1 = (function (){var statearr_24545 = state_24543;
(statearr_24545[(7)] = inst_24535);

(statearr_24545[(8)] = inst_24534);

return statearr_24545;
})();
var statearr_24546_24569 = state_24543__$1;
(statearr_24546_24569[(2)] = null);

(statearr_24546_24569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (6))){
var inst_24539 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
var statearr_24547_24570 = state_24543__$1;
(statearr_24547_24570[(2)] = inst_24539);

(statearr_24547_24570[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (5))){
var state_24543__$1 = state_24543;
var statearr_24548_24571 = state_24543__$1;
(statearr_24548_24571[(2)] = null);

(statearr_24548_24571[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (4))){
var state_24543__$1 = state_24543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24543__$1,(7),editable);
} else {
if((state_val_24544 === (3))){
var inst_24541 = (state_24543[(2)]);
var state_24543__$1 = state_24543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24543__$1,inst_24541);
} else {
if((state_val_24544 === (2))){
var state_24543__$1 = state_24543;
var statearr_24549_24572 = state_24543__$1;
(statearr_24549_24572[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24544 === (1))){
var state_24543__$1 = state_24543;
var statearr_24551_24573 = state_24543__$1;
(statearr_24551_24573[(2)] = null);

(statearr_24551_24573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__10695__auto___24568,editable,___$1))
;
return ((function (switch__10639__auto__,c__10695__auto___24568,editable,___$1){
return (function() {
var state_machine__10640__auto__ = null;
var state_machine__10640__auto____0 = (function (){
var statearr_24555 = [null,null,null,null,null,null,null,null,null];
(statearr_24555[(0)] = state_machine__10640__auto__);

(statearr_24555[(1)] = (1));

return statearr_24555;
});
var state_machine__10640__auto____1 = (function (state_24543){
while(true){
var ret_value__10641__auto__ = (function (){try{while(true){
var result__10642__auto__ = switch__10639__auto__.call(null,state_24543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10642__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10642__auto__;
}
break;
}
}catch (e24556){if((e24556 instanceof Object)){
var ex__10643__auto__ = e24556;
var statearr_24557_24574 = state_24543;
(statearr_24557_24574[(5)] = ex__10643__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10641__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24575 = state_24543;
state_24543 = G__24575;
continue;
} else {
return ret_value__10641__auto__;
}
break;
}
});
state_machine__10640__auto__ = function(state_24543){
switch(arguments.length){
case 0:
return state_machine__10640__auto____0.call(this);
case 1:
return state_machine__10640__auto____1.call(this,state_24543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10640__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10640__auto____0;
state_machine__10640__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10640__auto____1;
return state_machine__10640__auto__;
})()
;})(switch__10639__auto__,c__10695__auto___24568,editable,___$1))
})();
var state__10697__auto__ = (function (){var statearr_24558 = f__10696__auto__.call(null);
(statearr_24558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10695__auto___24568);

return statearr_24558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10697__auto__);
});})(c__10695__auto___24568,editable,___$1))
);


return bajoneando.core.js_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),"/blog/can-edit",new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (editable,___$1){
return (function (res){
if(cljs.core._EQ_.call(null,res,"Editable")){
return cljs.core.async.put_BANG_.call(null,editable,true);
} else {
return null;
}
});})(editable,___$1))
], null));
});

bajoneando.editor.t24486.prototype.om$core$IInitState$ = true;

bajoneando.editor.t24486.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"entries-chan","entries-chan",-2010769486),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"editable-chan","editable-chan",361273607),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"first-page","first-page",1317460907),true,new cljs.core.Keyword(null,"last-page","last-page",-1966154825),false,new cljs.core.Keyword(null,"page","page",849072397),(1),new cljs.core.Keyword(null,"editable","editable",1930280326),false], null);
});

bajoneando.editor.t24486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24488){
var self__ = this;
var _24488__$1 = this;
return self__.meta24487;
});

bajoneando.editor.t24486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24488,meta24487__$1){
var self__ = this;
var _24488__$1 = this;
return (new bajoneando.editor.t24486(self__.owner,self__.app,self__.articles_view,meta24487__$1));
});

bajoneando.editor.t24486.cljs$lang$type = true;

bajoneando.editor.t24486.cljs$lang$ctorStr = "bajoneando.editor/t24486";

bajoneando.editor.t24486.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.editor/t24486");
});

bajoneando.editor.__GT_t24486 = (function __GT_t24486(owner__$1,app__$1,articles_view__$1,meta24487){
return (new bajoneando.editor.t24486(owner__$1,app__$1,articles_view__$1,meta24487));
});

}

return (new bajoneando.editor.t24486(owner,app,articles_view,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,bajoneando.editor.articles_view,bajoneando.editor.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("articles")], null));

//# sourceMappingURL=editor.js.map