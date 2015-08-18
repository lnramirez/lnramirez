// Compiled by ClojureScript 0.0-2816 {}
goog.provide('om_bootstrap.mixins');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('om_tools.mixin');
goog.require('om.core');
goog.require('cljs.core.async');
var ufv___16891 = schema.utils.use_fn_validation;
var output_schema16884_16892 = schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY], null));
var input_schema16885_16893 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"target","target",1893533248,null)),schema.core.one.call(null,schema.core.Str,new cljs.core.Symbol(null,"event-type","event-type",1960254340,null)),schema.core.one.call(null,schema.core.make_fn_schema.call(null,schema.core.Any,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null)], null)),new cljs.core.Symbol(null,"callback","callback",935395299,null))], null);
var input_checker16886_16894 = schema.core.checker.call(null,input_schema16885_16893);
var output_checker16887_16895 = schema.core.checker.call(null,output_schema16884_16892);
/**
* Inputs: [target :- s/Any event-type :- s/Str callback :- (sm/=> s/Any s/Any)]
* Returns: (sm/=> s/Any)
* 
* Registers the callback on the supplied target for events of type
* `event-type`. Returns a function of no arguments that, when called,
* unregisters the callback.
*/
om_bootstrap.mixins.event_listener = ((function (ufv___16891,output_schema16884_16892,input_schema16885_16893,input_checker16886_16894,output_checker16887_16895){
return (function event_listener(G__16888,G__16889,G__16890){
var validate__6204__auto__ = ufv___16891.get_cell();
if(cljs.core.truth_(validate__6204__auto__)){
var args__6205__auto___16896 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__16888,G__16889,G__16890], null);
var temp__4126__auto___16897 = input_checker16886_16894.call(null,args__6205__auto___16896);
if(cljs.core.truth_(temp__4126__auto___16897)){
var error__6206__auto___16898 = temp__4126__auto___16897;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__6206__auto___16898)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16898,new cljs.core.Keyword(null,"value","value",305978217),args__6205__auto___16896,new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema16885_16893,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

var o__6207__auto__ = (function (){var target = G__16888;
var event_type = G__16889;
var callback = G__16890;
while(true){
if(cljs.core.truth_(target.addEventListener)){
target.addEventListener(event_type,callback,false);

return ((function (validate__6204__auto__,ufv___16891,output_schema16884_16892,input_schema16885_16893,input_checker16886_16894,output_checker16887_16895){
return (function (){
return target.removeEventListener(event_type,callback,false);
});
;})(validate__6204__auto__,ufv___16891,output_schema16884_16892,input_schema16885_16893,input_checker16886_16894,output_checker16887_16895))
} else {
if(cljs.core.truth_(target.attachEvent)){
var event_type__$1 = [cljs.core.str("on"),cljs.core.str(event_type)].join('');
target.attachEvent(event_type__$1,callback);

return ((function (event_type__$1,validate__6204__auto__,ufv___16891,output_schema16884_16892,input_schema16885_16893,input_checker16886_16894,output_checker16887_16895){
return (function (){
return target.detachEvent(event_type__$1,callback);
});
;})(event_type__$1,validate__6204__auto__,ufv___16891,output_schema16884_16892,input_schema16885_16893,input_checker16886_16894,output_checker16887_16895))
} else {
return ((function (validate__6204__auto__,ufv___16891,output_schema16884_16892,input_schema16885_16893,input_checker16886_16894,output_checker16887_16895){
return (function (){
return null;
});
;})(validate__6204__auto__,ufv___16891,output_schema16884_16892,input_schema16885_16893,input_checker16886_16894,output_checker16887_16895))

}
}
break;
}
})();
if(cljs.core.truth_(validate__6204__auto__)){
var temp__4126__auto___16899 = output_checker16887_16895.call(null,o__6207__auto__);
if(cljs.core.truth_(temp__4126__auto___16899)){
var error__6206__auto___16900 = temp__4126__auto___16899;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"event-listener","event-listener",809979412,null),cljs.core.pr_str.call(null,error__6206__auto___16900)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"error","error",-978969032),error__6206__auto___16900,new cljs.core.Keyword(null,"value","value",305978217),o__6207__auto__,new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema16884_16892,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308)], null));
} else {
}
} else {
}

return o__6207__auto__;
});})(ufv___16891,output_schema16884_16892,input_schema16885_16893,input_checker16886_16894,output_checker16887_16895))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,om_bootstrap.mixins.event_listener),schema.core.make_fn_schema.call(null,output_schema16884_16892,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema16885_16893], null)));
/**
* Handles a sequence of listeners for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_listener_mixin = {"set_listener": (function (target16905,event_type16906,callback16907){
var this16904 = this;
return ((function (this16904){
return (function (owner,target,event_type,callback){
var remove_fn = om_bootstrap.mixins.event_listener.call(null,target,event_type,callback);
return owner.listeners.push(remove_fn);
});})(this16904))
.call(null,this16904,target16905,event_type16906,callback16907);
}), "componentWillUnmount": (function (){
var this16903 = this;
return ((function (this16903){
return (function (owner){
return owner.listeners.map(((function (this16903){
return (function (p1__16901_SHARP_){
return p1__16901_SHARP_.call(null);
});})(this16903))
);
});})(this16903))
.call(null,this16903);
}), "componentWillMount": (function (){
var this16902 = this;
return ((function (this16902){
return (function (owner){
return owner.listeners = [];
});})(this16902))
.call(null,this16902);
})};
/**
* Handles a sequence of timeouts for the component, and removes them
* from the document when the component is unmounted.
*/
om_bootstrap.mixins.set_timeout_mixin = {"set_timeout": (function (f16912,timeout16913){
var this16911 = this;
return ((function (this16911){
return (function (owner,f,timeout){
var timeout__$1 = setTimeout(f,timeout);
return owner.timeouts.push(timeout__$1);
});})(this16911))
.call(null,this16911,f16912,timeout16913);
}), "componentWillUnmount": (function (){
var this16910 = this;
return ((function (this16910){
return (function (owner){
return owner.timeouts.map(((function (this16910){
return (function (p1__16908_SHARP_){
return clearTimeout(p1__16908_SHARP_);
});})(this16910))
);
});})(this16910))
.call(null,this16910);
}), "componentWillMount": (function (){
var this16909 = this;
return ((function (this16909){
return (function (owner){
return owner.timeouts = [];
});})(this16909))
.call(null,this16909);
})};
/**
* Accepts two DOM elements; returns true if the supplied node is
* nested inside the supplied root, false otherwise.
*/
om_bootstrap.mixins.in_root_QMARK_ = (function in_root_QMARK_(node,root){
var node__$1 = node;
while(true){
if((node__$1 == null)){
return false;
} else {
if(cljs.core._EQ_.call(null,root,node__$1)){
return true;
} else {
var G__16914 = node__$1.parentNode;
node__$1 = G__16914;
continue;

}
}
break;
}
});
om_bootstrap.mixins.ESCAPE_KEY = (27);
/**
* For dropdowns, binds a handler for that sets the dropdown-mixin's
* `:open?` state to false if the user clicks outside the owning
* component OR hits the escape key.
*/
om_bootstrap.mixins.bind_root_close_handlers_BANG_ = (function bind_root_close_handlers_BANG_(owner){
var set_state = (owner["setDropdownState"]);
return owner.dropdownListeners = [om_bootstrap.mixins.event_listener.call(null,document,"click",((function (set_state){
return (function (e){
if(om_bootstrap.mixins.in_root_QMARK_.call(null,e.target,om.core.get_node.call(null,owner))){
return null;
} else {
return set_state.call(null,false);
}
});})(set_state))
),om_bootstrap.mixins.event_listener.call(null,document,"keyup",((function (set_state){
return (function (e){
if(cljs.core._EQ_.call(null,om_bootstrap.mixins.ESCAPE_KEY,e.keyCode)){
return set_state.call(null,false);
} else {
return null;
}
});})(set_state))
)];
});
/**
* If they're present on the owning object, removes the listeners
* registered by the dropdown mixin.
*/
om_bootstrap.mixins.unbind_root_close_handlers_BANG_ = (function unbind_root_close_handlers_BANG_(owner){
var temp__4126__auto__ = owner.dropdownListeners;
if(cljs.core.truth_(temp__4126__auto__)){
var listeners = temp__4126__auto__;
cljs.core.map.call(null,((function (listeners,temp__4126__auto__){
return (function (p1__16915_SHARP_){
return p1__16915_SHARP_.call(null);
});})(listeners,temp__4126__auto__))
,listeners);

return owner.dropdownListeners = null;
} else {
return null;
}
});
/**
* Mixin that manages a single piece of state - :open?. If a user
* clicks outside the component's owning dom element OR hits the escape
* key, the state will jump back to false.
* 
* Down the road this may need to register a callback when the state
* changes.
*/
om_bootstrap.mixins.dropdown_mixin = {"setDropdownState": (function (open_QMARK_16920){
var this16919 = this;
return ((function (this16919){
return (function (owner,open_QMARK_){
if(cljs.core.truth_(open_QMARK_)){
om_bootstrap.mixins.bind_root_close_handlers_BANG_.call(null,owner);
} else {
om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
}

return om.core.set_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"open?","open?",1238443125)], null),open_QMARK_);
});})(this16919))
.call(null,this16919,open_QMARK_16920);
}), "isDropdownOpen": (function (){
var this16918 = this;
return ((function (this16918){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"open?","open?",1238443125));
});})(this16918))
.call(null,this16918);
}), "componentWillUnmount": (function (){
var this16917 = this;
return ((function (this16917){
return (function (owner){
return om_bootstrap.mixins.unbind_root_close_handlers_BANG_.call(null,owner);
});})(this16917))
.call(null,this16917);
}), "getInitialState": (function (){
var this16916 = this;
return ((function (this16916){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open?","open?",1238443125),false], null);
});})(this16916))
.call(null,this16916);
})};
/**
* Mixin that enables collapsible Panels. Similar to the Dropdown
* Mixin it only manages a single piece of state - :collapsed?. The Panel
* is opened and closen by clicking on the header.
*/
om_bootstrap.mixins.collapsible_mixin = {"toggleCollapsed": (function (){
var this16923 = this;
return ((function (this16923){
return (function (owner){
return om.core.update_state_BANG_.call(null,owner,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674)], null),cljs.core.not);
});})(this16923))
.call(null,this16923);
}), "isPanelCollapsed": (function (){
var this16922 = this;
return ((function (this16922){
return (function (owner){
return om.core.get_state.call(null,owner,new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674));
});})(this16922))
.call(null,this16922);
}), "getInitialState": (function (){
var this16921 = this;
return ((function (this16921){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"collapsed?","collapsed?",-1661420674),false], null);
});})(this16921))
.call(null,this16921);
})};

//# sourceMappingURL=mixins.js.map