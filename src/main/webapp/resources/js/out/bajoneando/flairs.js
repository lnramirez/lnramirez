// Compiled by ClojureScript 0.0-2816 {}
goog.provide('bajoneando.flairs');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('sablono.core');
goog.require('bajoneando.core');
goog.require('goog.events');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
bajoneando.flairs.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"github","github",567794498),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"html_url","html_url",-1914714112),"http://github.com/lnramirez2",new cljs.core.Keyword(null,"avatar_url","avatar_url",1520721439),"",new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"public_repos","public_repos",-1544064903),"",new cljs.core.Keyword(null,"followers","followers",1992141885),""], null),new cljs.core.Keyword(null,"twitter","twitter",-589267671),cljs.core.PersistentArrayMap.EMPTY], null));
bajoneando.flairs.flair_urls = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"github","github",567794498),"https://api.github.com/users/lnramirez"], null);
bajoneando.flairs.truncate_str = (function truncate_str(s){
if(cljs.core.truth_(cljs.core.count.call(null,s).call(null,cljs.core._GT_,(28)))){
return [cljs.core.str(cljs.core.take.call(null,(28),s)),cljs.core.str("...")].join('');
} else {
return s;

}
});
bajoneando.flairs.flair_rend = (function flair_rend(app,owner){
if(typeof bajoneando.flairs.t17596 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.flairs.t17596 = (function (owner,app,flair_rend,meta17597){
this.owner = owner;
this.app = app;
this.flair_rend = flair_rend;
this.meta17597 = meta17597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.flairs.t17596.prototype.om$core$IRenderState$ = true;

bajoneando.flairs.t17596.prototype.om$core$IRenderState$render_state$arity$2 = (function (this$,state){
var self__ = this;
var this$__$1 = this;
var github = new cljs.core.Keyword(null,"github","github",567794498).cljs$core$IFn$_invoke$arity$1(self__.app);
return React.DOM.div({"id": "githubflair"},React.DOM.a({"className": "sfLink", "href": cljs.core.get.call(null,github,"html_url")},React.DOM.div({"className": "sfTable sfGithub"},React.DOM.div({"className": "sfRow"},React.DOM.div({"className": "sfCell1"},React.DOM.img({"className": "sfProfilePic", "src": cljs.core.get.call(null,github,"avatar_url"), "width": "48px", "height": "48px"})),React.DOM.div({"className": "sfCell2"},(function (){var attrs17599 = cljs.core.get.call(null,github,"name");
return cljs.core.apply.call(null,React.DOM.div,((cljs.core.map_QMARK_.call(null,attrs17599))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["sfHandle"], null)], null),attrs17599)):{"className": "sfHandle"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs17599))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs17599)], null))));
})(),React.DOM.div({"className": "sfFans"},React.DOM.span({"className": "public_repos", "alt": "Public Repositories", "title": "Public Repositories"},sablono.interpreter.interpret.call(null,cljs.core.get.call(null,github,"public_repos"))),React.DOM.span({"className": "followers", "alt": "Followers", "title": "Followers"},sablono.interpreter.interpret.call(null,cljs.core.get.call(null,github,"followers")))))))));
});

bajoneando.flairs.t17596.prototype.om$core$IDidMount$ = true;

bajoneando.flairs.t17596.prototype.om$core$IDidMount$did_mount$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return bajoneando.core.js_xhr.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),new cljs.core.Keyword(null,"github","github",567794498).cljs$core$IFn$_invoke$arity$1(bajoneando.flairs.flair_urls),new cljs.core.Keyword(null,"on-complete","on-complete",-1531183971),((function (___$1){
return (function (res){
return om.core.update_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"github","github",567794498)], null),res);
});})(___$1))
], null));
});

bajoneando.flairs.t17596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17598){
var self__ = this;
var _17598__$1 = this;
return self__.meta17597;
});

bajoneando.flairs.t17596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17598,meta17597__$1){
var self__ = this;
var _17598__$1 = this;
return (new bajoneando.flairs.t17596(self__.owner,self__.app,self__.flair_rend,meta17597__$1));
});

bajoneando.flairs.t17596.cljs$lang$type = true;

bajoneando.flairs.t17596.cljs$lang$ctorStr = "bajoneando.flairs/t17596";

bajoneando.flairs.t17596.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.flairs/t17596");
});

bajoneando.flairs.__GT_t17596 = (function __GT_t17596(owner__$1,app__$1,flair_rend__$1,meta17597){
return (new bajoneando.flairs.t17596(owner__$1,app__$1,flair_rend__$1,meta17597));
});

}

return (new bajoneando.flairs.t17596(owner,app,flair_rend,cljs.core.PersistentArrayMap.EMPTY));
});
om.core.root.call(null,bajoneando.flairs.flair_rend,bajoneando.flairs.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("githubFlair")], null));

//# sourceMappingURL=flairs.js.map