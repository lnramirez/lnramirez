// Compiled by ClojureScript 0.0-2816 {}
goog.provide('bajoneando.sandbox');
goog.require('cljs.core');
goog.require('om_tools.dom');
goog.require('sablono.core');
goog.require('goog.events.EventType');
goog.require('om_tools.core');
goog.require('bajoneando.core');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('goog.events');
goog.require('goog.i18n.DateTimeFormat');
goog.require('goog.net.XhrIo');
goog.require('om.core');

var ufv___18508 = schema.utils.use_fn_validation;
var output_schema18496_18509 = schema.core.Any;
var input_schema18497_18510 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);
var input_checker18498_18511 = schema.core.checker.call(null,input_schema18497_18510);
var output_checker18499_18512 = schema.core.checker.call(null,output_schema18496_18509);
/**
* Inputs: [app owner]
*/
bajoneando.sandbox.user_input = ((function (ufv___18508,output_schema18496_18509,input_schema18497_18510,input_checker18498_18511,output_checker18499_18512){
return (function user_input(G__18500,G__18501){
var validate__6843__auto__ = ufv___18508.get_cell();
if(cljs.core.truth_(validate__6843__auto__)){
var args__6844__auto___18513 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18500,G__18501], null);
var temp__4126__auto___18514 = input_checker18498_18511.call(null,args__6844__auto___18513);
if(cljs.core.truth_(temp__4126__auto___18514)){
var error__6845__auto___18515 = temp__4126__auto___18514;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"user-input","user-input",1136289105,null),cljs.core.pr_str.call(null,error__6845__auto___18515)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18497_18510,new cljs.core.Keyword(null,"value","value",305978217),args__6844__auto___18513,new cljs.core.Keyword(null,"error","error",-978969032),error__6845__auto___18515], null));
} else {
}
} else {
}

var o__6846__auto__ = (function (){var app = G__18500;
var owner = G__18501;
while(true){
if(typeof bajoneando.sandbox.t18505 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.sandbox.t18505 = (function (owner,output_checker18499,G__18501,output_schema18496,input_schema18497,user_input,G__18500,input_checker18498,app,ufv__,validate__6843__auto__,meta18506){
this.owner = owner;
this.output_checker18499 = output_checker18499;
this.G__18501 = G__18501;
this.output_schema18496 = output_schema18496;
this.input_schema18497 = input_schema18497;
this.user_input = user_input;
this.G__18500 = G__18500;
this.input_checker18498 = input_checker18498;
this.app = app;
this.ufv__ = ufv__;
this.validate__6843__auto__ = validate__6843__auto__;
this.meta18506 = meta18506;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.sandbox.t18505.prototype.om$core$IDisplayName$ = true;

bajoneando.sandbox.t18505.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__6843__auto__,ufv___18508,output_schema18496_18509,input_schema18497_18510,input_checker18498_18511,output_checker18499_18512){
return (function (_){
var self__ = this;
var ___$1 = this;
return "user-input";
});})(validate__6843__auto__,ufv___18508,output_schema18496_18509,input_schema18497_18510,input_checker18498_18511,output_checker18499_18512))
;

bajoneando.sandbox.t18505.prototype.om$core$IRender$ = true;

bajoneando.sandbox.t18505.prototype.om$core$IRender$render$arity$1 = ((function (validate__6843__auto__,ufv___18508,output_schema18496_18509,input_schema18497_18510,input_checker18498_18511,output_checker18499_18512){
return (function (_){
var self__ = this;
var ___$1 = this;
var ref = "user-input";
var k = new cljs.core.Keyword(null,"user-input","user-input",-504242422);
return om.dom.input.call(null,{"onChange": om_tools.dom.format_opts.call(null,((function (ref,k,___$1,validate__6843__auto__,ufv___18508,output_schema18496_18509,input_schema18497_18510,input_checker18498_18511,output_checker18499_18512){
return (function (___$2){
var this$ = om.core.get_node.call(null,self__.owner,ref);
return this$.handleChange();
});})(ref,k,___$1,validate__6843__auto__,ufv___18508,output_schema18496_18509,input_schema18497_18510,input_checker18498_18511,output_checker18499_18512))
), "ref": om_tools.dom.format_opts.call(null,ref)});
});})(validate__6843__auto__,ufv___18508,output_schema18496_18509,input_schema18497_18510,input_checker18498_18511,output_checker18499_18512))
;

bajoneando.sandbox.t18505.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__6843__auto__,ufv___18508,output_schema18496_18509,input_schema18497_18510,input_checker18498_18511,output_checker18499_18512){
return (function (_18507){
var self__ = this;
var _18507__$1 = this;
return self__.meta18506;
});})(validate__6843__auto__,ufv___18508,output_schema18496_18509,input_schema18497_18510,input_checker18498_18511,output_checker18499_18512))
;

bajoneando.sandbox.t18505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__6843__auto__,ufv___18508,output_schema18496_18509,input_schema18497_18510,input_checker18498_18511,output_checker18499_18512){
return (function (_18507,meta18506__$1){
var self__ = this;
var _18507__$1 = this;
return (new bajoneando.sandbox.t18505(self__.owner,self__.output_checker18499,self__.G__18501,self__.output_schema18496,self__.input_schema18497,self__.user_input,self__.G__18500,self__.input_checker18498,self__.app,self__.ufv__,self__.validate__6843__auto__,meta18506__$1));
});})(validate__6843__auto__,ufv___18508,output_schema18496_18509,input_schema18497_18510,input_checker18498_18511,output_checker18499_18512))
;

bajoneando.sandbox.t18505.cljs$lang$type = true;

bajoneando.sandbox.t18505.cljs$lang$ctorStr = "bajoneando.sandbox/t18505";

bajoneando.sandbox.t18505.cljs$lang$ctorPrWriter = ((function (validate__6843__auto__,ufv___18508,output_schema18496_18509,input_schema18497_18510,input_checker18498_18511,output_checker18499_18512){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.sandbox/t18505");
});})(validate__6843__auto__,ufv___18508,output_schema18496_18509,input_schema18497_18510,input_checker18498_18511,output_checker18499_18512))
;

bajoneando.sandbox.__GT_t18505 = ((function (validate__6843__auto__,ufv___18508,output_schema18496_18509,input_schema18497_18510,input_checker18498_18511,output_checker18499_18512){
return (function __GT_t18505(owner__$1,output_checker18499__$1,G__18501__$1,output_schema18496__$1,input_schema18497__$1,user_input__$1,G__18500__$1,input_checker18498__$1,app__$1,ufv____$1,validate__6843__auto____$1,meta18506){
return (new bajoneando.sandbox.t18505(owner__$1,output_checker18499__$1,G__18501__$1,output_schema18496__$1,input_schema18497__$1,user_input__$1,G__18500__$1,input_checker18498__$1,app__$1,ufv____$1,validate__6843__auto____$1,meta18506));
});})(validate__6843__auto__,ufv___18508,output_schema18496_18509,input_schema18497_18510,input_checker18498_18511,output_checker18499_18512))
;

}

return (new bajoneando.sandbox.t18505(owner,output_checker18499_18512,G__18501,output_schema18496_18509,input_schema18497_18510,user_input,G__18500,input_checker18498_18511,app,ufv___18508,validate__6843__auto__,null));
break;
}
})();
if(cljs.core.truth_(validate__6843__auto__)){
var temp__4126__auto___18516 = output_checker18499_18512.call(null,o__6846__auto__);
if(cljs.core.truth_(temp__4126__auto___18516)){
var error__6845__auto___18517 = temp__4126__auto___18516;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"user-input","user-input",1136289105,null),cljs.core.pr_str.call(null,error__6845__auto___18517)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18496_18509,new cljs.core.Keyword(null,"value","value",305978217),o__6846__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__6845__auto___18517], null));
} else {
}
} else {
}

return o__6846__auto__;
});})(ufv___18508,output_schema18496_18509,input_schema18497_18510,input_checker18498_18511,output_checker18499_18512))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,bajoneando.sandbox.user_input),schema.core.make_fn_schema.call(null,output_schema18496_18509,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18497_18510], null)));

bajoneando.sandbox.__GT_user_input = (function() {
var __GT_user_input = null;
var __GT_user_input__1 = (function (cursor__14245__auto__){
return om.core.build.call(null,bajoneando.sandbox.user_input,cursor__14245__auto__);
});
var __GT_user_input__2 = (function (cursor__14245__auto__,m18495){
return om.core.build.call(null,bajoneando.sandbox.user_input,cursor__14245__auto__,m18495);
});
__GT_user_input = function(cursor__14245__auto__,m18495){
switch(arguments.length){
case 1:
return __GT_user_input__1.call(this,cursor__14245__auto__);
case 2:
return __GT_user_input__2.call(this,cursor__14245__auto__,m18495);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_user_input.cljs$core$IFn$_invoke$arity$1 = __GT_user_input__1;
__GT_user_input.cljs$core$IFn$_invoke$arity$2 = __GT_user_input__2;
return __GT_user_input;
})()
;

var ufv___18531 = schema.utils.use_fn_validation;
var output_schema18519_18532 = schema.core.Any;
var input_schema18520_18533 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"_","_",-1201019570,null))], null);
var input_checker18521_18534 = schema.core.checker.call(null,input_schema18520_18533);
var output_checker18522_18535 = schema.core.checker.call(null,output_schema18519_18532);
/**
* Inputs: [app _]
*/
bajoneando.sandbox.auto_complete_view = ((function (ufv___18531,output_schema18519_18532,input_schema18520_18533,input_checker18521_18534,output_checker18522_18535){
return (function auto_complete_view(G__18523,G__18524){
var validate__6843__auto__ = ufv___18531.get_cell();
if(cljs.core.truth_(validate__6843__auto__)){
var args__6844__auto___18536 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__18523,G__18524], null);
var temp__4126__auto___18537 = input_checker18521_18534.call(null,args__6844__auto___18536);
if(cljs.core.truth_(temp__4126__auto___18537)){
var error__6845__auto___18538 = temp__4126__auto___18537;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"auto-complete-view","auto-complete-view",1003694523,null),cljs.core.pr_str.call(null,error__6845__auto___18538)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema18520_18533,new cljs.core.Keyword(null,"value","value",305978217),args__6844__auto___18536,new cljs.core.Keyword(null,"error","error",-978969032),error__6845__auto___18538], null));
} else {
}
} else {
}

var o__6846__auto__ = (function (){var app = G__18523;
var _ = G__18524;
while(true){
if(typeof bajoneando.sandbox.t18528 !== 'undefined'){
} else {

/**
* @constructor
*/
bajoneando.sandbox.t18528 = (function (input_checker18521,_,G__18524,input_schema18520,auto_complete_view,app,ufv__,validate__6843__auto__,output_schema18519,G__18523,output_checker18522,meta18529){
this.input_checker18521 = input_checker18521;
this._ = _;
this.G__18524 = G__18524;
this.input_schema18520 = input_schema18520;
this.auto_complete_view = auto_complete_view;
this.app = app;
this.ufv__ = ufv__;
this.validate__6843__auto__ = validate__6843__auto__;
this.output_schema18519 = output_schema18519;
this.G__18523 = G__18523;
this.output_checker18522 = output_checker18522;
this.meta18529 = meta18529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
bajoneando.sandbox.t18528.prototype.om$core$IDisplayName$ = true;

bajoneando.sandbox.t18528.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__6843__auto__,ufv___18531,output_schema18519_18532,input_schema18520_18533,input_checker18521_18534,output_checker18522_18535){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return "auto-complete-view";
});})(validate__6843__auto__,ufv___18531,output_schema18519_18532,input_schema18520_18533,input_checker18521_18534,output_checker18522_18535))
;

bajoneando.sandbox.t18528.prototype.om$core$IRender$ = true;

bajoneando.sandbox.t18528.prototype.om$core$IRender$render$arity$1 = ((function (validate__6843__auto__,ufv___18531,output_schema18519_18532,input_schema18520_18533,input_checker18521_18534,output_checker18522_18535){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,bajoneando.sandbox.user_input,self__.app),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.br({})],null)));
});})(validate__6843__auto__,ufv___18531,output_schema18519_18532,input_schema18520_18533,input_checker18521_18534,output_checker18522_18535))
;

bajoneando.sandbox.t18528.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__6843__auto__,ufv___18531,output_schema18519_18532,input_schema18520_18533,input_checker18521_18534,output_checker18522_18535){
return (function (_18530){
var self__ = this;
var _18530__$1 = this;
return self__.meta18529;
});})(validate__6843__auto__,ufv___18531,output_schema18519_18532,input_schema18520_18533,input_checker18521_18534,output_checker18522_18535))
;

bajoneando.sandbox.t18528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__6843__auto__,ufv___18531,output_schema18519_18532,input_schema18520_18533,input_checker18521_18534,output_checker18522_18535){
return (function (_18530,meta18529__$1){
var self__ = this;
var _18530__$1 = this;
return (new bajoneando.sandbox.t18528(self__.input_checker18521,self__._,self__.G__18524,self__.input_schema18520,self__.auto_complete_view,self__.app,self__.ufv__,self__.validate__6843__auto__,self__.output_schema18519,self__.G__18523,self__.output_checker18522,meta18529__$1));
});})(validate__6843__auto__,ufv___18531,output_schema18519_18532,input_schema18520_18533,input_checker18521_18534,output_checker18522_18535))
;

bajoneando.sandbox.t18528.cljs$lang$type = true;

bajoneando.sandbox.t18528.cljs$lang$ctorStr = "bajoneando.sandbox/t18528";

bajoneando.sandbox.t18528.cljs$lang$ctorPrWriter = ((function (validate__6843__auto__,ufv___18531,output_schema18519_18532,input_schema18520_18533,input_checker18521_18534,output_checker18522_18535){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"bajoneando.sandbox/t18528");
});})(validate__6843__auto__,ufv___18531,output_schema18519_18532,input_schema18520_18533,input_checker18521_18534,output_checker18522_18535))
;

bajoneando.sandbox.__GT_t18528 = ((function (validate__6843__auto__,ufv___18531,output_schema18519_18532,input_schema18520_18533,input_checker18521_18534,output_checker18522_18535){
return (function __GT_t18528(input_checker18521__$1,___$1,G__18524__$1,input_schema18520__$1,auto_complete_view__$1,app__$1,ufv____$1,validate__6843__auto____$1,output_schema18519__$1,G__18523__$1,output_checker18522__$1,meta18529){
return (new bajoneando.sandbox.t18528(input_checker18521__$1,___$1,G__18524__$1,input_schema18520__$1,auto_complete_view__$1,app__$1,ufv____$1,validate__6843__auto____$1,output_schema18519__$1,G__18523__$1,output_checker18522__$1,meta18529));
});})(validate__6843__auto__,ufv___18531,output_schema18519_18532,input_schema18520_18533,input_checker18521_18534,output_checker18522_18535))
;

}

return (new bajoneando.sandbox.t18528(input_checker18521_18534,_,G__18524,input_schema18520_18533,auto_complete_view,app,ufv___18531,validate__6843__auto__,output_schema18519_18532,G__18523,output_checker18522_18535,null));
break;
}
})();
if(cljs.core.truth_(validate__6843__auto__)){
var temp__4126__auto___18539 = output_checker18522_18535.call(null,o__6846__auto__);
if(cljs.core.truth_(temp__4126__auto___18539)){
var error__6845__auto___18540 = temp__4126__auto___18539;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"auto-complete-view","auto-complete-view",1003694523,null),cljs.core.pr_str.call(null,error__6845__auto___18540)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema18519_18532,new cljs.core.Keyword(null,"value","value",305978217),o__6846__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__6845__auto___18540], null));
} else {
}
} else {
}

return o__6846__auto__;
});})(ufv___18531,output_schema18519_18532,input_schema18520_18533,input_checker18521_18534,output_checker18522_18535))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,bajoneando.sandbox.auto_complete_view),schema.core.make_fn_schema.call(null,output_schema18519_18532,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema18520_18533], null)));

bajoneando.sandbox.__GT_auto_complete_view = (function() {
var __GT_auto_complete_view = null;
var __GT_auto_complete_view__1 = (function (cursor__14245__auto__){
return om.core.build.call(null,bajoneando.sandbox.auto_complete_view,cursor__14245__auto__);
});
var __GT_auto_complete_view__2 = (function (cursor__14245__auto__,m18518){
return om.core.build.call(null,bajoneando.sandbox.auto_complete_view,cursor__14245__auto__,m18518);
});
__GT_auto_complete_view = function(cursor__14245__auto__,m18518){
switch(arguments.length){
case 1:
return __GT_auto_complete_view__1.call(this,cursor__14245__auto__);
case 2:
return __GT_auto_complete_view__2.call(this,cursor__14245__auto__,m18518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_auto_complete_view.cljs$core$IFn$_invoke$arity$1 = __GT_auto_complete_view__1;
__GT_auto_complete_view.cljs$core$IFn$_invoke$arity$2 = __GT_auto_complete_view__2;
return __GT_auto_complete_view;
})()
;
if(typeof bajoneando.sandbox.app_state !== 'undefined'){
} else {
bajoneando.sandbox.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"user-input","user-input",-504242422),"safasdfs",new cljs.core.Keyword(null,"things","things",1255021880),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Apple","ant","bird","CAR","crayon","cooler","DVD","Dirt","DOG"], null)], null));
}
om.core.root.call(null,bajoneando.sandbox.auto_complete_view,bajoneando.sandbox.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=sandbox.js.map