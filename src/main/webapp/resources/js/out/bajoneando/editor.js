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
if(typeof bajoneando.editor.t15599 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.editor.t15599 = (function (owner,entry,new_article,meta15600){
this.owner = owner;
this.entry = entry;
this.new_article = new_article;
this.meta15600 = meta15600;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.editor.t15599.prototype.om$core$IInitState$ = true;

bajoneando.editor.t15599.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id-article","id-article",585979570),new cljs.core.Keyword(null,"id-article","id-article",585979570).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.entry)),new cljs.core.Keyword(null,"subject","subject",-1411880451),new cljs.core.Keyword(null,"subject","subject",-1411880451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.entry)),new cljs.core.Keyword(null,"md-article","md-article",1091226345),new cljs.core.Keyword(null,"md-article","md-article",1091226345).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.entry)),new cljs.core.Keyword(null,"publish-date","publish-date",-786153027),new cljs.core.Keyword(null,"publish-date","publish-date",-786153027).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.entry))], null);
});

bajoneando.editor.t15599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15601){
var self__ = this;
var _15601__$1 = this;
return self__.meta15600;
});

bajoneando.editor.t15599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15601,meta15600__$1){
var self__ = this;
var _15601__$1 = this;
return (new bajoneando.editor.t15599(self__.owner,self__.entry,self__.new_article,meta15600__$1));
});

bajoneando.editor.t15599.cljs$lang$type = true;

bajoneando.editor.t15599.cljs$lang$ctorStr = "bajoneando.editor/t15599";

bajoneando.editor.t15599.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.editor/t15599");
});

bajoneando.editor.__GT_t15599 = (function __GT_t15599(owner__$1,entry__$1,new_article__$1,meta15600){
return (new bajoneando.editor.t15599(owner__$1,entry__$1,new_article__$1,meta15600));
});

}

(new bajoneando.editor.t15599(owner,entry,new_article,cljs.core.PersistentArrayMap.EMPTY));

if(typeof bajoneando.editor.t15602 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.editor.t15602 = (function (owner,entry,new_article,meta15603){
this.owner = owner;
this.entry = entry;
this.new_article = new_article;
this.meta15603 = meta15603;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.editor.t15602.prototype.om$core$IRenderState$ = true;

bajoneando.editor.t15602.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var article = new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.entry);
var get_val = ((function (article,this$__$1){
return (function (ref){
return om.core.get_node.call(null,self__.owner,ref).value;
});})(article,this$__$1))
;
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.entry);
return React.DOM.div(null,React.DOM.form({"className": "form-horizontal"},React.DOM.div({"className": "form-group"},React.DOM.label({"className": "col-sm-2 control-label", "htmlFor": "subject"},"Subject:"),(function (){var attrs15607 = om.dom.input.call(null,{"defaultValue": new cljs.core.Keyword(null,"subject","subject",-1411880451).cljs$core$IFn$_invoke$arity$1(article), "name": "subject", "ref": "subject", "type": "text", "class-name": "form-control"});
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15607))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-10"], null)], null),attrs15607)):{"className": "col-sm-10"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15607))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15607)], null))));
})()),React.DOM.div({"className": "form-group"},React.DOM.label({"className": "col-sm-2 control-label", "htmlFor": "publishDate"},"Publish Date:"),(function (){var attrs15610 = om.dom.input.call(null,{"defaultValue": bajoneando.editor.format_date.call(null,new cljs.core.Keyword(null,"publish-date","publish-date",-786153027).cljs$core$IFn$_invoke$arity$1(article),bajoneando.editor.in_date_formatter), "ref": "publishDate", "name": "publishDate", "type": "text", "class-name": "form-control"});
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15610))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-10"], null)], null),attrs15610)):{"className": "col-sm-10"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15610))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15610)], null))));
})()),React.DOM.div({"className": "form-group"},React.DOM.label({"className": "col-sm-2 control-label", "htmlFor": "article"},"Article:"),(function (){var attrs15613 = om.dom.textarea.call(null,{"placeholder": "Main content of article", "defaultValue": new cljs.core.Keyword(null,"md-article","md-article",1091226345).cljs$core$IFn$_invoke$arity$1(article), "rows": "5", "ref": "article", "name": "article", "type": "text", "class-name": "form-control"});
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15613))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-10"], null)], null),attrs15613)):{"className": "col-sm-10"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15613))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15613)], null))));
})()),React.DOM.div({"className": "form-group"},(function (){var attrs15614 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),mode))?React.DOM.button({"className": "btn btn-primary"},"Add new entry"):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cancel","cancel",-1964088360),mode))?React.DOM.span(null):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166),mode))?cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.button({"className": "btn btn-primary", "onClick": ((function (article,get_val,mode,this$__$1){
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
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15614))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-offset-2","col-sm-10"], null)], null),attrs15614)):{"className": "col-sm-offset-2 col-sm-10"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15614))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15614)], null))));
})())));
});

bajoneando.editor.t15602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15604){
var self__ = this;
var _15604__$1 = this;
return self__.meta15603;
});

bajoneando.editor.t15602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15604,meta15603__$1){
var self__ = this;
var _15604__$1 = this;
return (new bajoneando.editor.t15602(self__.owner,self__.entry,self__.new_article,meta15603__$1));
});

bajoneando.editor.t15602.cljs$lang$type = true;

bajoneando.editor.t15602.cljs$lang$ctorStr = "bajoneando.editor/t15602";

bajoneando.editor.t15602.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.editor/t15602");
});

bajoneando.editor.__GT_t15602 = (function __GT_t15602(owner__$1,entry__$1,new_article__$1,meta15603){
return (new bajoneando.editor.t15602(owner__$1,entry__$1,new_article__$1,meta15603));
});

}

return (new bajoneando.editor.t15602(owner,entry,new_article,cljs.core.PersistentArrayMap.EMPTY));
});
bajoneando.editor.article_view = (function article_view(entry,owner){
if(typeof bajoneando.editor.t15625 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.editor.t15625 = (function (owner,entry,article_view,meta15626){
this.owner = owner;
this.entry = entry;
this.article_view = article_view;
this.meta15626 = meta15626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.editor.t15625.prototype.om$core$IRenderState$ = true;

bajoneando.editor.t15625.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var subject = cljs.core.get.call(null,self__.entry,"subject");
var entry_id = cljs.core.get.call(null,self__.entry,"id");
var raw_publish_date = cljs.core.get.call(null,self__.entry,"publishDate");
var raw_last_updated_date = cljs.core.get.call(null,self__.entry,"lastUpdateDate");
var target = [cljs.core.str("art"),cljs.core.str(entry_id)].join('');
var printable_html = cljs.core.get.call(null,self__.entry,"printableHtml");
var md_article = cljs.core.get.call(null,self__.entry,"article");
bajoneando.editor.edit_map = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"edit","edit",-1641834166),new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"subject","subject",-1411880451),subject,new cljs.core.Keyword(null,"publish-date","publish-date",-786153027),raw_publish_date,new cljs.core.Keyword(null,"md-article","md-article",1091226345),md_article,new cljs.core.Keyword(null,"id-article","id-article",585979570),entry_id], null)], null);

bajoneando.editor.editing_init_state = cljs.core.atom.call(null,bajoneando.editor.edit_map);

return React.DOM.article({"id": entry_id, "className": "blogcontent"},React.DOM.header(null,React.DOM.h1(null,React.DOM.a({"href": [cljs.core.str("/blog/"),cljs.core.str(entry_id),cljs.core.str("/"),cljs.core.str(subject)].join('')},sablono.interpreter.interpret.call(null,subject))),(function (){var attrs15628 = [cljs.core.str("Published on: ")].join('');
return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs15628))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-muted"], null)], null),attrs15628)):{"className": "text-muted"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15628))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,(function (){var publish_date = bajoneando.editor.format_date.call(null,raw_publish_date,bajoneando.editor.date_formatter);
var in_publish_date = bajoneando.editor.format_date.call(null,raw_publish_date,bajoneando.editor.in_date_formatter);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time.publishDate","time.publishDate",1938513816),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dateTime","dateTime",-2108171151),in_publish_date], null),publish_date], null);
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15628),sablono.interpreter.interpret.call(null,(function (){var publish_date = bajoneando.editor.format_date.call(null,raw_publish_date,bajoneando.editor.date_formatter);
var in_publish_date = bajoneando.editor.format_date.call(null,raw_publish_date,bajoneando.editor.in_date_formatter);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time.publishDate","time.publishDate",1938513816),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dateTime","dateTime",-2108171151),in_publish_date], null),publish_date], null);
})())], null))));
})(),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"editing","editing",1365491601),om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691))))?sablono.interpreter.interpret.call(null,om.core.build.call(null,bajoneando.editor.new_article,bajoneando.editor.edit_map)):null),(cljs.core.truth_(om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"editable","editable",1930280326)))?sablono.interpreter.interpret.call(null,React.DOM.div({"id": target},React.DOM.button({"className": "btn btn-danger", "onClick": ((function (subject,entry_id,raw_publish_date,raw_last_updated_date,target,printable_html,md_article,this$__$1){
return (function (e){
e.preventDefault();

return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"editing","editing",1365491601));
});})(subject,entry_id,raw_publish_date,raw_last_updated_date,target,printable_html,md_article,this$__$1))
},"Edit"))):null)),React.DOM.div({"className": "printableHtml", "dangerouslySetInnerHTML": {"__html": printable_html}}),sablono.interpreter.interpret.call(null,(function (){var last_updated = bajoneando.editor.format_date.call(null,raw_last_updated_date,bajoneando.editor.date_time_formatter);
var in_last_updated = bajoneando.editor.format_date.call(null,raw_last_updated_date,bajoneando.editor.in_date_time_formatter);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.text-muted","p.text-muted",1410245564),"Last update: ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time","time",1385887882),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dateTime","dateTime",-2108171151),in_last_updated], null),last_updated], null)], null);
})()));
});

bajoneando.editor.t15625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15627){
var self__ = this;
var _15627__$1 = this;
return self__.meta15626;
});

bajoneando.editor.t15625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15627,meta15626__$1){
var self__ = this;
var _15627__$1 = this;
return (new bajoneando.editor.t15625(self__.owner,self__.entry,self__.article_view,meta15626__$1));
});

bajoneando.editor.t15625.cljs$lang$type = true;

bajoneando.editor.t15625.cljs$lang$ctorStr = "bajoneando.editor/t15625";

bajoneando.editor.t15625.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.editor/t15625");
});

bajoneando.editor.__GT_t15625 = (function __GT_t15625(owner__$1,entry__$1,article_view__$1,meta15626){
return (new bajoneando.editor.t15625(owner__$1,entry__$1,article_view__$1,meta15626));
});

}

return (new bajoneando.editor.t15625(owner,entry,article_view,cljs.core.PersistentArrayMap.EMPTY));
});
bajoneando.editor.articles_view = (function articles_view(app,owner){
if(typeof bajoneando.editor.t15704 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.editor.t15704 = (function (owner,app,articles_view,meta15705){
this.owner = owner;
this.app = app;
this.articles_view = articles_view;
this.meta15705 = meta15705;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.editor.t15704.prototype.om$core$IRenderState$ = true;

bajoneando.editor.t15704.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var entries = new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(state);
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(state);
var editable = new cljs.core.Keyword(null,"editable","editable",1930280326).cljs$core$IFn$_invoke$arity$1(state);
var first_page = new cljs.core.Keyword(null,"first-page","first-page",1317460907).cljs$core$IFn$_invoke$arity$1(state);
var last_page = new cljs.core.Keyword(null,"last-page","last-page",-1966154825).cljs$core$IFn$_invoke$arity$1(state);
var attrs15707 = om.core.build_all.call(null,bajoneando.editor.article_view,entries,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),state], null));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs15707))?sablono.interpreter.attributes.call(null,attrs15707):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs15707))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.nav(null,React.DOM.ul({"className": "pager"},React.DOM.li({"className": "previous"},React.DOM.a({"href": "#", "onClick": ((function (attrs15707,entries,page,editable,first_page,last_page,this$__$1){
return (function (){
return bajoneando.editor.nav_pages.call(null,self__.app,self__.owner,cljs.core.inc);
});})(attrs15707,entries,page,editable,first_page,last_page,this$__$1))
},React.DOM.span({"aria-hidden": true},"\u2190"),"Older")),React.DOM.li({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs15707,entries,page,editable,first_page,last_page,this$__$1){
return (function (){
return bajoneando.editor.nav_pages.call(null,self__.app,self__.owner,cljs.core.dec);
});})(attrs15707,entries,page,editable,first_page,last_page,this$__$1))
},"Newer",React.DOM.span({"aria-hidden": true},"\u2192"))))),(cljs.core.truth_(editable)?sablono.interpreter.interpret.call(null,om.core.build.call(null,bajoneando.editor.new_article,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.app)], null))):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs15707),React.DOM.nav(null,React.DOM.ul({"className": "pager"},React.DOM.li({"className": "previous"},React.DOM.a({"href": "#", "onClick": ((function (attrs15707,entries,page,editable,first_page,last_page,this$__$1){
return (function (){
return bajoneando.editor.nav_pages.call(null,self__.app,self__.owner,cljs.core.inc);
});})(attrs15707,entries,page,editable,first_page,last_page,this$__$1))
},React.DOM.span({"aria-hidden": true},"\u2190"),"Older")),React.DOM.li({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs15707,entries,page,editable,first_page,last_page,this$__$1){
return (function (){
return bajoneando.editor.nav_pages.call(null,self__.app,self__.owner,cljs.core.dec);
});})(attrs15707,entries,page,editable,first_page,last_page,this$__$1))
},"Newer",React.DOM.span({"aria-hidden": true},"\u2192"))))),(cljs.core.truth_(editable)?sablono.interpreter.interpret.call(null,om.core.build.call(null,bajoneando.editor.new_article,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.app)], null))):null)], null))));
});

bajoneando.editor.t15704.prototype.om$core$IWillMount$ = true;

bajoneando.editor.t15704.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var entries_15777 = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entries-chan","entries-chan",-2010769486)], null));
var c__10693__auto___15778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10693__auto___15778,entries_15777,___$1){
return (function (){
var f__10694__auto__ = (function (){var switch__10637__auto__ = ((function (c__10693__auto___15778,entries_15777,___$1){
return (function (state_15733){
var state_val_15734 = (state_15733[(1)]);
if((state_val_15734 === (7))){
var inst_15719 = (state_15733[(2)]);
var inst_15720 = cljs.core.get.call(null,inst_15719,"content");
var inst_15721 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"entries","entries",-86943161),inst_15720);
var inst_15722 = cljs.core.get.call(null,inst_15719,"firstPage");
var inst_15723 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"first-page","first-page",1317460907),inst_15722);
var inst_15724 = cljs.core.get.call(null,inst_15719,"lastPage");
var inst_15725 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"last-page","last-page",-1966154825),inst_15724);
var state_15733__$1 = (function (){var statearr_15735 = state_15733;
(statearr_15735[(7)] = inst_15721);

(statearr_15735[(8)] = inst_15723);

(statearr_15735[(9)] = inst_15725);

return statearr_15735;
})();
var statearr_15736_15779 = state_15733__$1;
(statearr_15736_15779[(2)] = null);

(statearr_15736_15779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15734 === (6))){
var inst_15729 = (state_15733[(2)]);
var state_15733__$1 = state_15733;
var statearr_15737_15780 = state_15733__$1;
(statearr_15737_15780[(2)] = inst_15729);

(statearr_15737_15780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15734 === (5))){
var state_15733__$1 = state_15733;
var statearr_15738_15781 = state_15733__$1;
(statearr_15738_15781[(2)] = null);

(statearr_15738_15781[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15734 === (4))){
var state_15733__$1 = state_15733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15733__$1,(7),entries_15777);
} else {
if((state_val_15734 === (3))){
var inst_15731 = (state_15733[(2)]);
var state_15733__$1 = state_15733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15733__$1,inst_15731);
} else {
if((state_val_15734 === (2))){
var state_15733__$1 = state_15733;
var statearr_15739_15782 = state_15733__$1;
(statearr_15739_15782[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15734 === (1))){
var state_15733__$1 = state_15733;
var statearr_15741_15783 = state_15733__$1;
(statearr_15741_15783[(2)] = null);

(statearr_15741_15783[(1)] = (2));


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
});})(c__10693__auto___15778,entries_15777,___$1))
;
return ((function (switch__10637__auto__,c__10693__auto___15778,entries_15777,___$1){
return (function() {
var state_machine__10638__auto__ = null;
var state_machine__10638__auto____0 = (function (){
var statearr_15745 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15745[(0)] = state_machine__10638__auto__);

(statearr_15745[(1)] = (1));

return statearr_15745;
});
var state_machine__10638__auto____1 = (function (state_15733){
while(true){
var ret_value__10639__auto__ = (function (){try{while(true){
var result__10640__auto__ = switch__10637__auto__.call(null,state_15733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10640__auto__;
}
break;
}
}catch (e15746){if((e15746 instanceof Object)){
var ex__10641__auto__ = e15746;
var statearr_15747_15784 = state_15733;
(statearr_15747_15784[(5)] = ex__10641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15746;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15785 = state_15733;
state_15733 = G__15785;
continue;
} else {
return ret_value__10639__auto__;
}
break;
}
});
state_machine__10638__auto__ = function(state_15733){
switch(arguments.length){
case 0:
return state_machine__10638__auto____0.call(this);
case 1:
return state_machine__10638__auto____1.call(this,state_15733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10638__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10638__auto____0;
state_machine__10638__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10638__auto____1;
return state_machine__10638__auto__;
})()
;})(switch__10637__auto__,c__10693__auto___15778,entries_15777,___$1))
})();
var state__10695__auto__ = (function (){var statearr_15748 = f__10694__auto__.call(null);
(statearr_15748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10693__auto___15778);

return statearr_15748;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10695__auto__);
});})(c__10693__auto___15778,entries_15777,___$1))
);


bajoneando.core.js_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("/blog/entries?page.page="),cljs.core.str(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app))].join(''),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (entries_15777,___$1){
return (function (res){
return cljs.core.async.put_BANG_.call(null,entries_15777,res);
});})(entries_15777,___$1))
], null));

var editable = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editable-chan","editable-chan",361273607)], null));
var c__10693__auto___15786 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10693__auto___15786,editable,___$1){
return (function (){
var f__10694__auto__ = (function (){var switch__10637__auto__ = ((function (c__10693__auto___15786,editable,___$1){
return (function (state_15761){
var state_val_15762 = (state_15761[(1)]);
if((state_val_15762 === (7))){
var inst_15752 = (state_15761[(2)]);
var inst_15753 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editable","editable",1930280326),true);
var state_15761__$1 = (function (){var statearr_15763 = state_15761;
(statearr_15763[(7)] = inst_15752);

(statearr_15763[(8)] = inst_15753);

return statearr_15763;
})();
var statearr_15764_15787 = state_15761__$1;
(statearr_15764_15787[(2)] = null);

(statearr_15764_15787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15762 === (6))){
var inst_15757 = (state_15761[(2)]);
var state_15761__$1 = state_15761;
var statearr_15765_15788 = state_15761__$1;
(statearr_15765_15788[(2)] = inst_15757);

(statearr_15765_15788[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15762 === (5))){
var state_15761__$1 = state_15761;
var statearr_15766_15789 = state_15761__$1;
(statearr_15766_15789[(2)] = null);

(statearr_15766_15789[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15762 === (4))){
var state_15761__$1 = state_15761;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15761__$1,(7),editable);
} else {
if((state_val_15762 === (3))){
var inst_15759 = (state_15761[(2)]);
var state_15761__$1 = state_15761;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15761__$1,inst_15759);
} else {
if((state_val_15762 === (2))){
var state_15761__$1 = state_15761;
var statearr_15767_15790 = state_15761__$1;
(statearr_15767_15790[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15762 === (1))){
var state_15761__$1 = state_15761;
var statearr_15769_15791 = state_15761__$1;
(statearr_15769_15791[(2)] = null);

(statearr_15769_15791[(1)] = (2));


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
});})(c__10693__auto___15786,editable,___$1))
;
return ((function (switch__10637__auto__,c__10693__auto___15786,editable,___$1){
return (function() {
var state_machine__10638__auto__ = null;
var state_machine__10638__auto____0 = (function (){
var statearr_15773 = [null,null,null,null,null,null,null,null,null];
(statearr_15773[(0)] = state_machine__10638__auto__);

(statearr_15773[(1)] = (1));

return statearr_15773;
});
var state_machine__10638__auto____1 = (function (state_15761){
while(true){
var ret_value__10639__auto__ = (function (){try{while(true){
var result__10640__auto__ = switch__10637__auto__.call(null,state_15761);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10640__auto__;
}
break;
}
}catch (e15774){if((e15774 instanceof Object)){
var ex__10641__auto__ = e15774;
var statearr_15775_15792 = state_15761;
(statearr_15775_15792[(5)] = ex__10641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15761);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15793 = state_15761;
state_15761 = G__15793;
continue;
} else {
return ret_value__10639__auto__;
}
break;
}
});
state_machine__10638__auto__ = function(state_15761){
switch(arguments.length){
case 0:
return state_machine__10638__auto____0.call(this);
case 1:
return state_machine__10638__auto____1.call(this,state_15761);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10638__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10638__auto____0;
state_machine__10638__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10638__auto____1;
return state_machine__10638__auto__;
})()
;})(switch__10637__auto__,c__10693__auto___15786,editable,___$1))
})();
var state__10695__auto__ = (function (){var statearr_15776 = f__10694__auto__.call(null);
(statearr_15776[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10693__auto___15786);

return statearr_15776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10695__auto__);
});})(c__10693__auto___15786,editable,___$1))
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

bajoneando.editor.t15704.prototype.om$core$IInitState$ = true;

bajoneando.editor.t15704.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"entries-chan","entries-chan",-2010769486),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"editable-chan","editable-chan",361273607),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"first-page","first-page",1317460907),true,new cljs.core.Keyword(null,"last-page","last-page",-1966154825),false,new cljs.core.Keyword(null,"page","page",849072397),(1),new cljs.core.Keyword(null,"editable","editable",1930280326),false], null);
});

bajoneando.editor.t15704.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15706){
var self__ = this;
var _15706__$1 = this;
return self__.meta15705;
});

bajoneando.editor.t15704.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15706,meta15705__$1){
var self__ = this;
var _15706__$1 = this;
return (new bajoneando.editor.t15704(self__.owner,self__.app,self__.articles_view,meta15705__$1));
});

bajoneando.editor.t15704.cljs$lang$type = true;

bajoneando.editor.t15704.cljs$lang$ctorStr = "bajoneando.editor/t15704";

bajoneando.editor.t15704.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.editor/t15704");
});

bajoneando.editor.__GT_t15704 = (function __GT_t15704(owner__$1,app__$1,articles_view__$1,meta15705){
return (new bajoneando.editor.t15704(owner__$1,app__$1,articles_view__$1,meta15705));
});

}

return (new bajoneando.editor.t15704(owner,app,articles_view,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,bajoneando.editor.articles_view,bajoneando.editor.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("articles")], null));

//# sourceMappingURL=editor.js.map