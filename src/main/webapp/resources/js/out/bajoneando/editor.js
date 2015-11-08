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
if(typeof bajoneando.editor.t17395 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.editor.t17395 = (function (owner,entry,new_article,meta17396){
this.owner = owner;
this.entry = entry;
this.new_article = new_article;
this.meta17396 = meta17396;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.editor.t17395.prototype.om$core$IInitState$ = true;

bajoneando.editor.t17395.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id-article","id-article",585979570),new cljs.core.Keyword(null,"id-article","id-article",585979570).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.entry)),new cljs.core.Keyword(null,"subject","subject",-1411880451),new cljs.core.Keyword(null,"subject","subject",-1411880451).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.entry)),new cljs.core.Keyword(null,"md-article","md-article",1091226345),new cljs.core.Keyword(null,"md-article","md-article",1091226345).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.entry)),new cljs.core.Keyword(null,"publish-date","publish-date",-786153027),new cljs.core.Keyword(null,"publish-date","publish-date",-786153027).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.entry))], null);
});

bajoneando.editor.t17395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17397){
var self__ = this;
var _17397__$1 = this;
return self__.meta17396;
});

bajoneando.editor.t17395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17397,meta17396__$1){
var self__ = this;
var _17397__$1 = this;
return (new bajoneando.editor.t17395(self__.owner,self__.entry,self__.new_article,meta17396__$1));
});

bajoneando.editor.t17395.cljs$lang$type = true;

bajoneando.editor.t17395.cljs$lang$ctorStr = "bajoneando.editor/t17395";

bajoneando.editor.t17395.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.editor/t17395");
});

bajoneando.editor.__GT_t17395 = (function __GT_t17395(owner__$1,entry__$1,new_article__$1,meta17396){
return (new bajoneando.editor.t17395(owner__$1,entry__$1,new_article__$1,meta17396));
});

}

(new bajoneando.editor.t17395(owner,entry,new_article,cljs.core.PersistentArrayMap.EMPTY));

if(typeof bajoneando.editor.t17398 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.editor.t17398 = (function (owner,entry,new_article,meta17399){
this.owner = owner;
this.entry = entry;
this.new_article = new_article;
this.meta17399 = meta17399;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.editor.t17398.prototype.om$core$IRenderState$ = true;

bajoneando.editor.t17398.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var article = new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.entry);
var get_val = ((function (article,this$__$1){
return (function (ref){
return om.core.get_node.call(null,self__.owner,ref).value;
});})(article,this$__$1))
;
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.entry);
return React.DOM.div(null,React.DOM.form({"className": "form-horizontal"},React.DOM.div({"className": "form-group"},React.DOM.label({"className": "col-sm-2 control-label", "htmlFor": "subject"},"Subject:"),(function (){var attrs17403 = om.dom.input.call(null,{"defaultValue": new cljs.core.Keyword(null,"subject","subject",-1411880451).cljs$core$IFn$_invoke$arity$1(article), "name": "subject", "ref": "subject", "type": "text", "class-name": "form-control"});
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs17403))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-10"], null)], null),attrs17403)):{"className": "col-sm-10"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17403))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17403)], null))));
})()),React.DOM.div({"className": "form-group"},React.DOM.label({"className": "col-sm-2 control-label", "htmlFor": "publishDate"},"Publish Date:"),(function (){var attrs17406 = om.dom.input.call(null,{"defaultValue": bajoneando.editor.format_date.call(null,new cljs.core.Keyword(null,"publish-date","publish-date",-786153027).cljs$core$IFn$_invoke$arity$1(article),bajoneando.editor.in_date_formatter), "ref": "publishDate", "name": "publishDate", "type": "text", "class-name": "form-control"});
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs17406))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-10"], null)], null),attrs17406)):{"className": "col-sm-10"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17406))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17406)], null))));
})()),React.DOM.div({"className": "form-group"},React.DOM.label({"className": "col-sm-2 control-label", "htmlFor": "article"},"Article:"),(function (){var attrs17409 = om.dom.textarea.call(null,{"placeholder": "Main content of article", "defaultValue": new cljs.core.Keyword(null,"md-article","md-article",1091226345).cljs$core$IFn$_invoke$arity$1(article), "rows": "5", "ref": "article", "name": "article", "type": "text", "class-name": "form-control"});
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs17409))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-10"], null)], null),attrs17409)):{"className": "col-sm-10"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17409))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17409)], null))));
})()),React.DOM.div({"className": "form-group"},(function (){var attrs17410 = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"new","new",-2085437848),mode))?React.DOM.button({"className": "btn btn-primary"},"Add new entry"):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"cancel","cancel",-1964088360),mode))?React.DOM.span(null):((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"edit","edit",-1641834166),mode))?cljs.core.into_array.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.button({"className": "btn btn-primary", "onClick": ((function (article,get_val,mode,this$__$1){
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
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs17410))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["col-sm-offset-2","col-sm-10"], null)], null),attrs17410)):{"className": "col-sm-offset-2 col-sm-10"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17410))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17410)], null))));
})())));
});

bajoneando.editor.t17398.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17400){
var self__ = this;
var _17400__$1 = this;
return self__.meta17399;
});

bajoneando.editor.t17398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17400,meta17399__$1){
var self__ = this;
var _17400__$1 = this;
return (new bajoneando.editor.t17398(self__.owner,self__.entry,self__.new_article,meta17399__$1));
});

bajoneando.editor.t17398.cljs$lang$type = true;

bajoneando.editor.t17398.cljs$lang$ctorStr = "bajoneando.editor/t17398";

bajoneando.editor.t17398.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.editor/t17398");
});

bajoneando.editor.__GT_t17398 = (function __GT_t17398(owner__$1,entry__$1,new_article__$1,meta17399){
return (new bajoneando.editor.t17398(owner__$1,entry__$1,new_article__$1,meta17399));
});

}

return (new bajoneando.editor.t17398(owner,entry,new_article,cljs.core.PersistentArrayMap.EMPTY));
});
bajoneando.editor.article_view = (function article_view(entry,owner){
if(typeof bajoneando.editor.t17421 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.editor.t17421 = (function (owner,entry,article_view,meta17422){
this.owner = owner;
this.entry = entry;
this.article_view = article_view;
this.meta17422 = meta17422;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.editor.t17421.prototype.om$core$IRenderState$ = true;

bajoneando.editor.t17421.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
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

return React.DOM.article({"id": entry_id, "className": "blogcontent"},React.DOM.header(null,React.DOM.h1(null,React.DOM.a({"href": [cljs.core.str("/blog/"),cljs.core.str(entry_id),cljs.core.str("/"),cljs.core.str(subject)].join('')},sablono.interpreter.interpret.call(null,subject))),(function (){var attrs17424 = [cljs.core.str("Published on: ")].join('');
return cljs.core.apply.call(null,React.DOM.p,((cljs.core.map_QMARK_.call(null,attrs17424))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["text-muted"], null)], null),attrs17424)):{"className": "text-muted"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17424))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,(function (){var publish_date = bajoneando.editor.format_date.call(null,raw_publish_date,bajoneando.editor.date_formatter);
var in_publish_date = bajoneando.editor.format_date.call(null,raw_publish_date,bajoneando.editor.in_date_formatter);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"time.publishDate","time.publishDate",1938513816),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dateTime","dateTime",-2108171151),in_publish_date], null),publish_date], null);
})())], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17424),sablono.interpreter.interpret.call(null,(function (){var publish_date = bajoneando.editor.format_date.call(null,raw_publish_date,bajoneando.editor.date_formatter);
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

bajoneando.editor.t17421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17423){
var self__ = this;
var _17423__$1 = this;
return self__.meta17422;
});

bajoneando.editor.t17421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17423,meta17422__$1){
var self__ = this;
var _17423__$1 = this;
return (new bajoneando.editor.t17421(self__.owner,self__.entry,self__.article_view,meta17422__$1));
});

bajoneando.editor.t17421.cljs$lang$type = true;

bajoneando.editor.t17421.cljs$lang$ctorStr = "bajoneando.editor/t17421";

bajoneando.editor.t17421.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.editor/t17421");
});

bajoneando.editor.__GT_t17421 = (function __GT_t17421(owner__$1,entry__$1,article_view__$1,meta17422){
return (new bajoneando.editor.t17421(owner__$1,entry__$1,article_view__$1,meta17422));
});

}

return (new bajoneando.editor.t17421(owner,entry,article_view,cljs.core.PersistentArrayMap.EMPTY));
});
bajoneando.editor.articles_view = (function articles_view(app,owner){
if(typeof bajoneando.editor.t17500 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.editor.t17500 = (function (owner,app,articles_view,meta17501){
this.owner = owner;
this.app = app;
this.articles_view = articles_view;
this.meta17501 = meta17501;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.editor.t17500.prototype.om$core$IRenderState$ = true;

bajoneando.editor.t17500.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var entries = new cljs.core.Keyword(null,"entries","entries",-86943161).cljs$core$IFn$_invoke$arity$1(state);
var page = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(state);
var editable = new cljs.core.Keyword(null,"editable","editable",1930280326).cljs$core$IFn$_invoke$arity$1(state);
var first_page = new cljs.core.Keyword(null,"first-page","first-page",1317460907).cljs$core$IFn$_invoke$arity$1(state);
var last_page = new cljs.core.Keyword(null,"last-page","last-page",-1966154825).cljs$core$IFn$_invoke$arity$1(state);
var attrs17503 = om.core.build_all.call(null,bajoneando.editor.article_view,entries,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init-state","init-state",1450863212),state], null));
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs17503))?sablono.interpreter.attributes.call(null,attrs17503):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17503))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.nav(null,React.DOM.ul({"className": "pager"},React.DOM.li({"className": "previous"},React.DOM.a({"href": "#", "onClick": ((function (attrs17503,entries,page,editable,first_page,last_page,this$__$1){
return (function (){
return bajoneando.editor.nav_pages.call(null,self__.app,self__.owner,cljs.core.inc);
});})(attrs17503,entries,page,editable,first_page,last_page,this$__$1))
},React.DOM.span({"aria-hidden": true},"\u2190"),"Older")),React.DOM.li({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs17503,entries,page,editable,first_page,last_page,this$__$1){
return (function (){
return bajoneando.editor.nav_pages.call(null,self__.app,self__.owner,cljs.core.dec);
});})(attrs17503,entries,page,editable,first_page,last_page,this$__$1))
},"Newer",React.DOM.span({"aria-hidden": true},"\u2192"))))),(cljs.core.truth_(editable)?sablono.interpreter.interpret.call(null,om.core.build.call(null,bajoneando.editor.new_article,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.app)], null))):null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17503),React.DOM.nav(null,React.DOM.ul({"className": "pager"},React.DOM.li({"className": "previous"},React.DOM.a({"href": "#", "onClick": ((function (attrs17503,entries,page,editable,first_page,last_page,this$__$1){
return (function (){
return bajoneando.editor.nav_pages.call(null,self__.app,self__.owner,cljs.core.inc);
});})(attrs17503,entries,page,editable,first_page,last_page,this$__$1))
},React.DOM.span({"aria-hidden": true},"\u2190"),"Older")),React.DOM.li({"className": "next"},React.DOM.a({"href": "#", "onClick": ((function (attrs17503,entries,page,editable,first_page,last_page,this$__$1){
return (function (){
return bajoneando.editor.nav_pages.call(null,self__.app,self__.owner,cljs.core.dec);
});})(attrs17503,entries,page,editable,first_page,last_page,this$__$1))
},"Newer",React.DOM.span({"aria-hidden": true},"\u2192"))))),(cljs.core.truth_(editable)?sablono.interpreter.interpret.call(null,om.core.build.call(null,bajoneando.editor.new_article,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"article","article",-21685045),new cljs.core.Keyword(null,"article","article",-21685045).cljs$core$IFn$_invoke$arity$1(self__.app),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(self__.app)], null))):null)], null))));
});

bajoneando.editor.t17500.prototype.om$core$IWillMount$ = true;

bajoneando.editor.t17500.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
var entries_17573 = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"entries-chan","entries-chan",-2010769486)], null));
var c__10693__auto___17574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10693__auto___17574,entries_17573,___$1){
return (function (){
var f__10694__auto__ = (function (){var switch__10637__auto__ = ((function (c__10693__auto___17574,entries_17573,___$1){
return (function (state_17529){
var state_val_17530 = (state_17529[(1)]);
if((state_val_17530 === (7))){
var inst_17515 = (state_17529[(2)]);
var inst_17516 = cljs.core.get.call(null,inst_17515,"content");
var inst_17517 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"entries","entries",-86943161),inst_17516);
var inst_17518 = cljs.core.get.call(null,inst_17515,"firstPage");
var inst_17519 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"first-page","first-page",1317460907),inst_17518);
var inst_17520 = cljs.core.get.call(null,inst_17515,"lastPage");
var inst_17521 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"last-page","last-page",-1966154825),inst_17520);
var state_17529__$1 = (function (){var statearr_17531 = state_17529;
(statearr_17531[(7)] = inst_17517);

(statearr_17531[(8)] = inst_17521);

(statearr_17531[(9)] = inst_17519);

return statearr_17531;
})();
var statearr_17532_17575 = state_17529__$1;
(statearr_17532_17575[(2)] = null);

(statearr_17532_17575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (6))){
var inst_17525 = (state_17529[(2)]);
var state_17529__$1 = state_17529;
var statearr_17533_17576 = state_17529__$1;
(statearr_17533_17576[(2)] = inst_17525);

(statearr_17533_17576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (5))){
var state_17529__$1 = state_17529;
var statearr_17534_17577 = state_17529__$1;
(statearr_17534_17577[(2)] = null);

(statearr_17534_17577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (4))){
var state_17529__$1 = state_17529;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17529__$1,(7),entries_17573);
} else {
if((state_val_17530 === (3))){
var inst_17527 = (state_17529[(2)]);
var state_17529__$1 = state_17529;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17529__$1,inst_17527);
} else {
if((state_val_17530 === (2))){
var state_17529__$1 = state_17529;
var statearr_17535_17578 = state_17529__$1;
(statearr_17535_17578[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17530 === (1))){
var state_17529__$1 = state_17529;
var statearr_17537_17579 = state_17529__$1;
(statearr_17537_17579[(2)] = null);

(statearr_17537_17579[(1)] = (2));


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
});})(c__10693__auto___17574,entries_17573,___$1))
;
return ((function (switch__10637__auto__,c__10693__auto___17574,entries_17573,___$1){
return (function() {
var state_machine__10638__auto__ = null;
var state_machine__10638__auto____0 = (function (){
var statearr_17541 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17541[(0)] = state_machine__10638__auto__);

(statearr_17541[(1)] = (1));

return statearr_17541;
});
var state_machine__10638__auto____1 = (function (state_17529){
while(true){
var ret_value__10639__auto__ = (function (){try{while(true){
var result__10640__auto__ = switch__10637__auto__.call(null,state_17529);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10640__auto__;
}
break;
}
}catch (e17542){if((e17542 instanceof Object)){
var ex__10641__auto__ = e17542;
var statearr_17543_17580 = state_17529;
(statearr_17543_17580[(5)] = ex__10641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17529);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17581 = state_17529;
state_17529 = G__17581;
continue;
} else {
return ret_value__10639__auto__;
}
break;
}
});
state_machine__10638__auto__ = function(state_17529){
switch(arguments.length){
case 0:
return state_machine__10638__auto____0.call(this);
case 1:
return state_machine__10638__auto____1.call(this,state_17529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10638__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10638__auto____0;
state_machine__10638__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10638__auto____1;
return state_machine__10638__auto__;
})()
;})(switch__10637__auto__,c__10693__auto___17574,entries_17573,___$1))
})();
var state__10695__auto__ = (function (){var statearr_17544 = f__10694__auto__.call(null);
(statearr_17544[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10693__auto___17574);

return statearr_17544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10695__auto__);
});})(c__10693__auto___17574,entries_17573,___$1))
);


bajoneando.core.js_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),[cljs.core.str("/blog/entries?page.page="),cljs.core.str(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(self__.app))].join(''),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (entries_17573,___$1){
return (function (res){
return cljs.core.async.put_BANG_.call(null,entries_17573,res);
});})(entries_17573,___$1))
], null));

var editable = om.core.get_state.call(null,self__.owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editable-chan","editable-chan",361273607)], null));
var c__10693__auto___17582 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10693__auto___17582,editable,___$1){
return (function (){
var f__10694__auto__ = (function (){var switch__10637__auto__ = ((function (c__10693__auto___17582,editable,___$1){
return (function (state_17557){
var state_val_17558 = (state_17557[(1)]);
if((state_val_17558 === (7))){
var inst_17548 = (state_17557[(2)]);
var inst_17549 = om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"editable","editable",1930280326),true);
var state_17557__$1 = (function (){var statearr_17559 = state_17557;
(statearr_17559[(7)] = inst_17549);

(statearr_17559[(8)] = inst_17548);

return statearr_17559;
})();
var statearr_17560_17583 = state_17557__$1;
(statearr_17560_17583[(2)] = null);

(statearr_17560_17583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17558 === (6))){
var inst_17553 = (state_17557[(2)]);
var state_17557__$1 = state_17557;
var statearr_17561_17584 = state_17557__$1;
(statearr_17561_17584[(2)] = inst_17553);

(statearr_17561_17584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17558 === (5))){
var state_17557__$1 = state_17557;
var statearr_17562_17585 = state_17557__$1;
(statearr_17562_17585[(2)] = null);

(statearr_17562_17585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17558 === (4))){
var state_17557__$1 = state_17557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17557__$1,(7),editable);
} else {
if((state_val_17558 === (3))){
var inst_17555 = (state_17557[(2)]);
var state_17557__$1 = state_17557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17557__$1,inst_17555);
} else {
if((state_val_17558 === (2))){
var state_17557__$1 = state_17557;
var statearr_17563_17586 = state_17557__$1;
(statearr_17563_17586[(1)] = (4));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17558 === (1))){
var state_17557__$1 = state_17557;
var statearr_17565_17587 = state_17557__$1;
(statearr_17565_17587[(2)] = null);

(statearr_17565_17587[(1)] = (2));


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
});})(c__10693__auto___17582,editable,___$1))
;
return ((function (switch__10637__auto__,c__10693__auto___17582,editable,___$1){
return (function() {
var state_machine__10638__auto__ = null;
var state_machine__10638__auto____0 = (function (){
var statearr_17569 = [null,null,null,null,null,null,null,null,null];
(statearr_17569[(0)] = state_machine__10638__auto__);

(statearr_17569[(1)] = (1));

return statearr_17569;
});
var state_machine__10638__auto____1 = (function (state_17557){
while(true){
var ret_value__10639__auto__ = (function (){try{while(true){
var result__10640__auto__ = switch__10637__auto__.call(null,state_17557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10640__auto__;
}
break;
}
}catch (e17570){if((e17570 instanceof Object)){
var ex__10641__auto__ = e17570;
var statearr_17571_17588 = state_17557;
(statearr_17571_17588[(5)] = ex__10641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17589 = state_17557;
state_17557 = G__17589;
continue;
} else {
return ret_value__10639__auto__;
}
break;
}
});
state_machine__10638__auto__ = function(state_17557){
switch(arguments.length){
case 0:
return state_machine__10638__auto____0.call(this);
case 1:
return state_machine__10638__auto____1.call(this,state_17557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10638__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10638__auto____0;
state_machine__10638__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10638__auto____1;
return state_machine__10638__auto__;
})()
;})(switch__10637__auto__,c__10693__auto___17582,editable,___$1))
})();
var state__10695__auto__ = (function (){var statearr_17572 = f__10694__auto__.call(null);
(statearr_17572[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10693__auto___17582);

return statearr_17572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10695__auto__);
});})(c__10693__auto___17582,editable,___$1))
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

bajoneando.editor.t17500.prototype.om$core$IInitState$ = true;

bajoneando.editor.t17500.prototype.om$core$IInitState$init_state$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"entries","entries",-86943161),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"entries-chan","entries-chan",-2010769486),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"editable-chan","editable-chan",361273607),cljs.core.async.chan.call(null),new cljs.core.Keyword(null,"first-page","first-page",1317460907),true,new cljs.core.Keyword(null,"last-page","last-page",-1966154825),false,new cljs.core.Keyword(null,"page","page",849072397),(1),new cljs.core.Keyword(null,"editable","editable",1930280326),false], null);
});

bajoneando.editor.t17500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17502){
var self__ = this;
var _17502__$1 = this;
return self__.meta17501;
});

bajoneando.editor.t17500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17502,meta17501__$1){
var self__ = this;
var _17502__$1 = this;
return (new bajoneando.editor.t17500(self__.owner,self__.app,self__.articles_view,meta17501__$1));
});

bajoneando.editor.t17500.cljs$lang$type = true;

bajoneando.editor.t17500.cljs$lang$ctorStr = "bajoneando.editor/t17500";

bajoneando.editor.t17500.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.editor/t17500");
});

bajoneando.editor.__GT_t17500 = (function __GT_t17500(owner__$1,app__$1,articles_view__$1,meta17501){
return (new bajoneando.editor.t17500(owner__$1,app__$1,articles_view__$1,meta17501));
});

}

return (new bajoneando.editor.t17500(owner,app,articles_view,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,bajoneando.editor.articles_view,bajoneando.editor.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("articles")], null));

//# sourceMappingURL=editor.js.map