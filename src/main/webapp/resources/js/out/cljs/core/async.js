// Compiled by ClojureScript 0.0-2816 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){
if(typeof cljs.core.async.t24730 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24730 = (function (f,fn_handler,meta24731){
this.f = f;
this.fn_handler = fn_handler;
this.meta24731 = meta24731;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24730.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24730.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t24730.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t24730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24732){
var self__ = this;
var _24732__$1 = this;
return self__.meta24731;
});

cljs.core.async.t24730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24732,meta24731__$1){
var self__ = this;
var _24732__$1 = this;
return (new cljs.core.async.t24730(self__.f,self__.fn_handler,meta24731__$1));
});

cljs.core.async.t24730.cljs$lang$type = true;

cljs.core.async.t24730.cljs$lang$ctorStr = "cljs.core.async/t24730";

cljs.core.async.t24730.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"cljs.core.async/t24730");
});

cljs.core.async.__GT_t24730 = (function __GT_t24730(f__$1,fn_handler__$1,meta24731){
return (new cljs.core.async.t24730(f__$1,fn_handler__$1,meta24731));
});

}

return (new cljs.core.async.t24730(f,fn_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){
var G__24734 = buff;
if(G__24734){
var bit__4487__auto__ = null;
if(cljs.core.truth_((function (){var or__3806__auto__ = bit__4487__auto__;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return G__24734.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__24734.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24734);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__24734);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){
return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){
return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){
return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){
return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_24735 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_24735);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_24735,ret){
return (function (){
return fn1.call(null,val_24735);
});})(val_24735,ret))
);
}
} else {
}

return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4124__auto__)){
var ret = temp__4124__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});
var put_BANG___3 = (function (port,val,fn1){
return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4124__auto__)){
var retb = temp__4124__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}

return ret;
} else {
return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){
var a = (new Array(n));
var n__4693__auto___24736 = n;
var x_24737 = (0);
while(true){
if((x_24737 < n__4693__auto___24736)){
(a[x_24737] = (0));

var G__24738 = (x_24737 + (1));
x_24737 = G__24738;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__24739 = (i + (1));
i = G__24739;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t24743 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24743 = (function (flag,alt_flag,meta24744){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta24744 = meta24744;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24743.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24743.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t24743.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t24743.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_24745){
var self__ = this;
var _24745__$1 = this;
return self__.meta24744;
});})(flag))
;

cljs.core.async.t24743.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_24745,meta24744__$1){
var self__ = this;
var _24745__$1 = this;
return (new cljs.core.async.t24743(self__.flag,self__.alt_flag,meta24744__$1));
});})(flag))
;

cljs.core.async.t24743.cljs$lang$type = true;

cljs.core.async.t24743.cljs$lang$ctorStr = "cljs.core.async/t24743";

cljs.core.async.t24743.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"cljs.core.async/t24743");
});})(flag))
;

cljs.core.async.__GT_t24743 = ((function (flag){
return (function __GT_t24743(flag__$1,alt_flag__$1,meta24744){
return (new cljs.core.async.t24743(flag__$1,alt_flag__$1,meta24744));
});})(flag))
;

}

return (new cljs.core.async.t24743(flag,alt_flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){
if(typeof cljs.core.async.t24749 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24749 = (function (cb,flag,alt_handler,meta24750){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta24750 = meta24750;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24749.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24749.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t24749.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t24749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24751){
var self__ = this;
var _24751__$1 = this;
return self__.meta24750;
});

cljs.core.async.t24749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24751,meta24750__$1){
var self__ = this;
var _24751__$1 = this;
return (new cljs.core.async.t24749(self__.cb,self__.flag,self__.alt_handler,meta24750__$1));
});

cljs.core.async.t24749.cljs$lang$type = true;

cljs.core.async.t24749.cljs$lang$ctorStr = "cljs.core.async/t24749";

cljs.core.async.t24749.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"cljs.core.async/t24749");
});

cljs.core.async.__GT_t24749 = (function __GT_t24749(cb__$1,flag__$1,alt_handler__$1,meta24750){
return (new cljs.core.async.t24749(cb__$1,flag__$1,alt_handler__$1,meta24750));
});

}

return (new cljs.core.async.t24749(cb,flag,alt_handler,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24752_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24752_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__24753_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__24753_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3806__auto__ = wport;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return port;
}
})()], null));
} else {
var G__24754 = (i + (1));
i = G__24754;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3806__auto__ = ret;
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4126__auto__ = (function (){var and__3794__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3794__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3794__auto__;
}
})();
if(cljs.core.truth_(temp__4126__auto__)){
var got = temp__4126__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__24755){
var map__24757 = p__24755;
var map__24757__$1 = ((cljs.core.seq_QMARK_.call(null,map__24757))?cljs.core.apply.call(null,cljs.core.hash_map,map__24757):map__24757);
var opts = map__24757__$1;
throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__24755 = null;
if (arguments.length > 1) {
var G__24758__i = 0, G__24758__a = new Array(arguments.length -  1);
while (G__24758__i < G__24758__a.length) {G__24758__a[G__24758__i] = arguments[G__24758__i + 1]; ++G__24758__i;}
  p__24755 = new cljs.core.IndexedSeq(G__24758__a,0);
} 
return alts_BANG___delegate.call(this,ports,p__24755);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__24759){
var ports = cljs.core.first(arglist__24759);
var p__24755 = cljs.core.rest(arglist__24759);
return alts_BANG___delegate(ports,p__24755);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){
return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){
var c__12720__auto___24854 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12720__auto___24854){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (c__12720__auto___24854){
return (function (state_24830){
var state_val_24831 = (state_24830[(1)]);
if((state_val_24831 === (7))){
var inst_24826 = (state_24830[(2)]);
var state_24830__$1 = state_24830;
var statearr_24832_24855 = state_24830__$1;
(statearr_24832_24855[(2)] = inst_24826);

(statearr_24832_24855[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24831 === (1))){
var state_24830__$1 = state_24830;
var statearr_24833_24856 = state_24830__$1;
(statearr_24833_24856[(2)] = null);

(statearr_24833_24856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24831 === (4))){
var inst_24809 = (state_24830[(7)]);
var inst_24809__$1 = (state_24830[(2)]);
var inst_24810 = (inst_24809__$1 == null);
var state_24830__$1 = (function (){var statearr_24834 = state_24830;
(statearr_24834[(7)] = inst_24809__$1);

return statearr_24834;
})();
if(cljs.core.truth_(inst_24810)){
var statearr_24835_24857 = state_24830__$1;
(statearr_24835_24857[(1)] = (5));

} else {
var statearr_24836_24858 = state_24830__$1;
(statearr_24836_24858[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24831 === (13))){
var state_24830__$1 = state_24830;
var statearr_24837_24859 = state_24830__$1;
(statearr_24837_24859[(2)] = null);

(statearr_24837_24859[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24831 === (6))){
var inst_24809 = (state_24830[(7)]);
var state_24830__$1 = state_24830;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24830__$1,(11),to,inst_24809);
} else {
if((state_val_24831 === (3))){
var inst_24828 = (state_24830[(2)]);
var state_24830__$1 = state_24830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24830__$1,inst_24828);
} else {
if((state_val_24831 === (12))){
var state_24830__$1 = state_24830;
var statearr_24838_24860 = state_24830__$1;
(statearr_24838_24860[(2)] = null);

(statearr_24838_24860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24831 === (2))){
var state_24830__$1 = state_24830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24830__$1,(4),from);
} else {
if((state_val_24831 === (11))){
var inst_24819 = (state_24830[(2)]);
var state_24830__$1 = state_24830;
if(cljs.core.truth_(inst_24819)){
var statearr_24839_24861 = state_24830__$1;
(statearr_24839_24861[(1)] = (12));

} else {
var statearr_24840_24862 = state_24830__$1;
(statearr_24840_24862[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24831 === (9))){
var state_24830__$1 = state_24830;
var statearr_24841_24863 = state_24830__$1;
(statearr_24841_24863[(2)] = null);

(statearr_24841_24863[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24831 === (5))){
var state_24830__$1 = state_24830;
if(cljs.core.truth_(close_QMARK_)){
var statearr_24842_24864 = state_24830__$1;
(statearr_24842_24864[(1)] = (8));

} else {
var statearr_24843_24865 = state_24830__$1;
(statearr_24843_24865[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24831 === (14))){
var inst_24824 = (state_24830[(2)]);
var state_24830__$1 = state_24830;
var statearr_24844_24866 = state_24830__$1;
(statearr_24844_24866[(2)] = inst_24824);

(statearr_24844_24866[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24831 === (10))){
var inst_24816 = (state_24830[(2)]);
var state_24830__$1 = state_24830;
var statearr_24845_24867 = state_24830__$1;
(statearr_24845_24867[(2)] = inst_24816);

(statearr_24845_24867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24831 === (8))){
var inst_24813 = cljs.core.async.close_BANG_.call(null,to);
var state_24830__$1 = state_24830;
var statearr_24846_24868 = state_24830__$1;
(statearr_24846_24868[(2)] = inst_24813);

(statearr_24846_24868[(1)] = (10));


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
}
}
}
}
}
}
}
});})(c__12720__auto___24854))
;
return ((function (switch__12664__auto__,c__12720__auto___24854){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_24850 = [null,null,null,null,null,null,null,null];
(statearr_24850[(0)] = state_machine__12665__auto__);

(statearr_24850[(1)] = (1));

return statearr_24850;
});
var state_machine__12665__auto____1 = (function (state_24830){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_24830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e24851){if((e24851 instanceof Object)){
var ex__12668__auto__ = e24851;
var statearr_24852_24869 = state_24830;
(statearr_24852_24869[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24870 = state_24830;
state_24830 = G__24870;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_24830){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_24830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(switch__12664__auto__,c__12720__auto___24854))
})();
var state__12722__auto__ = (function (){var statearr_24853 = f__12721__auto__.call(null);
(statearr_24853[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto___24854);

return statearr_24853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(c__12720__auto___24854))
);


return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25054){
var vec__25055 = p__25054;
var v = cljs.core.nth.call(null,vec__25055,(0),null);
var p = cljs.core.nth.call(null,vec__25055,(1),null);
var job = vec__25055;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12720__auto___25237 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12720__auto___25237,res,vec__25055,v,p,job,jobs,results){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (c__12720__auto___25237,res,vec__25055,v,p,job,jobs,results){
return (function (state_25060){
var state_val_25061 = (state_25060[(1)]);
if((state_val_25061 === (2))){
var inst_25057 = (state_25060[(2)]);
var inst_25058 = cljs.core.async.close_BANG_.call(null,res);
var state_25060__$1 = (function (){var statearr_25062 = state_25060;
(statearr_25062[(7)] = inst_25057);

return statearr_25062;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25060__$1,inst_25058);
} else {
if((state_val_25061 === (1))){
var state_25060__$1 = state_25060;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25060__$1,(2),res,v);
} else {
return null;
}
}
});})(c__12720__auto___25237,res,vec__25055,v,p,job,jobs,results))
;
return ((function (switch__12664__auto__,c__12720__auto___25237,res,vec__25055,v,p,job,jobs,results){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_25066 = [null,null,null,null,null,null,null,null];
(statearr_25066[(0)] = state_machine__12665__auto__);

(statearr_25066[(1)] = (1));

return statearr_25066;
});
var state_machine__12665__auto____1 = (function (state_25060){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_25060);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e25067){if((e25067 instanceof Object)){
var ex__12668__auto__ = e25067;
var statearr_25068_25238 = state_25060;
(statearr_25068_25238[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25067;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25239 = state_25060;
state_25060 = G__25239;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_25060){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_25060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(switch__12664__auto__,c__12720__auto___25237,res,vec__25055,v,p,job,jobs,results))
})();
var state__12722__auto__ = (function (){var statearr_25069 = f__12721__auto__.call(null);
(statearr_25069[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto___25237);

return statearr_25069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(c__12720__auto___25237,res,vec__25055,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25070){
var vec__25071 = p__25070;
var v = cljs.core.nth.call(null,vec__25071,(0),null);
var p = cljs.core.nth.call(null,vec__25071,(1),null);
var job = vec__25071;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4693__auto___25240 = n;
var __25241 = (0);
while(true){
if((__25241 < n__4693__auto___25240)){
var G__25072_25242 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25072_25242) {
case "async":
var c__12720__auto___25244 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25241,c__12720__auto___25244,G__25072_25242,n__4693__auto___25240,jobs,results,process,async){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (__25241,c__12720__auto___25244,G__25072_25242,n__4693__auto___25240,jobs,results,process,async){
return (function (state_25085){
var state_val_25086 = (state_25085[(1)]);
if((state_val_25086 === (7))){
var inst_25081 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
var statearr_25087_25245 = state_25085__$1;
(statearr_25087_25245[(2)] = inst_25081);

(statearr_25087_25245[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (6))){
var state_25085__$1 = state_25085;
var statearr_25088_25246 = state_25085__$1;
(statearr_25088_25246[(2)] = null);

(statearr_25088_25246[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (5))){
var state_25085__$1 = state_25085;
var statearr_25089_25247 = state_25085__$1;
(statearr_25089_25247[(2)] = null);

(statearr_25089_25247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (4))){
var inst_25075 = (state_25085[(2)]);
var inst_25076 = async.call(null,inst_25075);
var state_25085__$1 = state_25085;
if(cljs.core.truth_(inst_25076)){
var statearr_25090_25248 = state_25085__$1;
(statearr_25090_25248[(1)] = (5));

} else {
var statearr_25091_25249 = state_25085__$1;
(statearr_25091_25249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25086 === (3))){
var inst_25083 = (state_25085[(2)]);
var state_25085__$1 = state_25085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25085__$1,inst_25083);
} else {
if((state_val_25086 === (2))){
var state_25085__$1 = state_25085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25085__$1,(4),jobs);
} else {
if((state_val_25086 === (1))){
var state_25085__$1 = state_25085;
var statearr_25092_25250 = state_25085__$1;
(statearr_25092_25250[(2)] = null);

(statearr_25092_25250[(1)] = (2));


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
});})(__25241,c__12720__auto___25244,G__25072_25242,n__4693__auto___25240,jobs,results,process,async))
;
return ((function (__25241,switch__12664__auto__,c__12720__auto___25244,G__25072_25242,n__4693__auto___25240,jobs,results,process,async){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_25096 = [null,null,null,null,null,null,null];
(statearr_25096[(0)] = state_machine__12665__auto__);

(statearr_25096[(1)] = (1));

return statearr_25096;
});
var state_machine__12665__auto____1 = (function (state_25085){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_25085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e25097){if((e25097 instanceof Object)){
var ex__12668__auto__ = e25097;
var statearr_25098_25251 = state_25085;
(statearr_25098_25251[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25097;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25252 = state_25085;
state_25085 = G__25252;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_25085){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_25085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(__25241,switch__12664__auto__,c__12720__auto___25244,G__25072_25242,n__4693__auto___25240,jobs,results,process,async))
})();
var state__12722__auto__ = (function (){var statearr_25099 = f__12721__auto__.call(null);
(statearr_25099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto___25244);

return statearr_25099;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(__25241,c__12720__auto___25244,G__25072_25242,n__4693__auto___25240,jobs,results,process,async))
);


break;
case "compute":
var c__12720__auto___25253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25241,c__12720__auto___25253,G__25072_25242,n__4693__auto___25240,jobs,results,process,async){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (__25241,c__12720__auto___25253,G__25072_25242,n__4693__auto___25240,jobs,results,process,async){
return (function (state_25112){
var state_val_25113 = (state_25112[(1)]);
if((state_val_25113 === (7))){
var inst_25108 = (state_25112[(2)]);
var state_25112__$1 = state_25112;
var statearr_25114_25254 = state_25112__$1;
(statearr_25114_25254[(2)] = inst_25108);

(statearr_25114_25254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (6))){
var state_25112__$1 = state_25112;
var statearr_25115_25255 = state_25112__$1;
(statearr_25115_25255[(2)] = null);

(statearr_25115_25255[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (5))){
var state_25112__$1 = state_25112;
var statearr_25116_25256 = state_25112__$1;
(statearr_25116_25256[(2)] = null);

(statearr_25116_25256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (4))){
var inst_25102 = (state_25112[(2)]);
var inst_25103 = process.call(null,inst_25102);
var state_25112__$1 = state_25112;
if(cljs.core.truth_(inst_25103)){
var statearr_25117_25257 = state_25112__$1;
(statearr_25117_25257[(1)] = (5));

} else {
var statearr_25118_25258 = state_25112__$1;
(statearr_25118_25258[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25113 === (3))){
var inst_25110 = (state_25112[(2)]);
var state_25112__$1 = state_25112;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25112__$1,inst_25110);
} else {
if((state_val_25113 === (2))){
var state_25112__$1 = state_25112;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25112__$1,(4),jobs);
} else {
if((state_val_25113 === (1))){
var state_25112__$1 = state_25112;
var statearr_25119_25259 = state_25112__$1;
(statearr_25119_25259[(2)] = null);

(statearr_25119_25259[(1)] = (2));


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
});})(__25241,c__12720__auto___25253,G__25072_25242,n__4693__auto___25240,jobs,results,process,async))
;
return ((function (__25241,switch__12664__auto__,c__12720__auto___25253,G__25072_25242,n__4693__auto___25240,jobs,results,process,async){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_25123 = [null,null,null,null,null,null,null];
(statearr_25123[(0)] = state_machine__12665__auto__);

(statearr_25123[(1)] = (1));

return statearr_25123;
});
var state_machine__12665__auto____1 = (function (state_25112){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_25112);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e25124){if((e25124 instanceof Object)){
var ex__12668__auto__ = e25124;
var statearr_25125_25260 = state_25112;
(statearr_25125_25260[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25112);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25261 = state_25112;
state_25112 = G__25261;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_25112){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_25112);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(__25241,switch__12664__auto__,c__12720__auto___25253,G__25072_25242,n__4693__auto___25240,jobs,results,process,async))
})();
var state__12722__auto__ = (function (){var statearr_25126 = f__12721__auto__.call(null);
(statearr_25126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto___25253);

return statearr_25126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(__25241,c__12720__auto___25253,G__25072_25242,n__4693__auto___25240,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25262 = (__25241 + (1));
__25241 = G__25262;
continue;
} else {
}
break;
}

var c__12720__auto___25263 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12720__auto___25263,jobs,results,process,async){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (c__12720__auto___25263,jobs,results,process,async){
return (function (state_25148){
var state_val_25149 = (state_25148[(1)]);
if((state_val_25149 === (9))){
var inst_25141 = (state_25148[(2)]);
var state_25148__$1 = (function (){var statearr_25150 = state_25148;
(statearr_25150[(7)] = inst_25141);

return statearr_25150;
})();
var statearr_25151_25264 = state_25148__$1;
(statearr_25151_25264[(2)] = null);

(statearr_25151_25264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (8))){
var inst_25134 = (state_25148[(8)]);
var inst_25139 = (state_25148[(2)]);
var state_25148__$1 = (function (){var statearr_25152 = state_25148;
(statearr_25152[(9)] = inst_25139);

return statearr_25152;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25148__$1,(9),results,inst_25134);
} else {
if((state_val_25149 === (7))){
var inst_25144 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
var statearr_25153_25265 = state_25148__$1;
(statearr_25153_25265[(2)] = inst_25144);

(statearr_25153_25265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (6))){
var inst_25129 = (state_25148[(10)]);
var inst_25134 = (state_25148[(8)]);
var inst_25134__$1 = cljs.core.async.chan.call(null,(1));
var inst_25135 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25136 = [inst_25129,inst_25134__$1];
var inst_25137 = (new cljs.core.PersistentVector(null,2,(5),inst_25135,inst_25136,null));
var state_25148__$1 = (function (){var statearr_25154 = state_25148;
(statearr_25154[(8)] = inst_25134__$1);

return statearr_25154;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25148__$1,(8),jobs,inst_25137);
} else {
if((state_val_25149 === (5))){
var inst_25132 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25148__$1 = state_25148;
var statearr_25155_25266 = state_25148__$1;
(statearr_25155_25266[(2)] = inst_25132);

(statearr_25155_25266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (4))){
var inst_25129 = (state_25148[(10)]);
var inst_25129__$1 = (state_25148[(2)]);
var inst_25130 = (inst_25129__$1 == null);
var state_25148__$1 = (function (){var statearr_25156 = state_25148;
(statearr_25156[(10)] = inst_25129__$1);

return statearr_25156;
})();
if(cljs.core.truth_(inst_25130)){
var statearr_25157_25267 = state_25148__$1;
(statearr_25157_25267[(1)] = (5));

} else {
var statearr_25158_25268 = state_25148__$1;
(statearr_25158_25268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25149 === (3))){
var inst_25146 = (state_25148[(2)]);
var state_25148__$1 = state_25148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25148__$1,inst_25146);
} else {
if((state_val_25149 === (2))){
var state_25148__$1 = state_25148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25148__$1,(4),from);
} else {
if((state_val_25149 === (1))){
var state_25148__$1 = state_25148;
var statearr_25159_25269 = state_25148__$1;
(statearr_25159_25269[(2)] = null);

(statearr_25159_25269[(1)] = (2));


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
}
}
});})(c__12720__auto___25263,jobs,results,process,async))
;
return ((function (switch__12664__auto__,c__12720__auto___25263,jobs,results,process,async){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_25163 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25163[(0)] = state_machine__12665__auto__);

(statearr_25163[(1)] = (1));

return statearr_25163;
});
var state_machine__12665__auto____1 = (function (state_25148){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_25148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e25164){if((e25164 instanceof Object)){
var ex__12668__auto__ = e25164;
var statearr_25165_25270 = state_25148;
(statearr_25165_25270[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25164;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25271 = state_25148;
state_25148 = G__25271;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_25148){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_25148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(switch__12664__auto__,c__12720__auto___25263,jobs,results,process,async))
})();
var state__12722__auto__ = (function (){var statearr_25166 = f__12721__auto__.call(null);
(statearr_25166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto___25263);

return statearr_25166;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(c__12720__auto___25263,jobs,results,process,async))
);


var c__12720__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12720__auto__,jobs,results,process,async){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (c__12720__auto__,jobs,results,process,async){
return (function (state_25204){
var state_val_25205 = (state_25204[(1)]);
if((state_val_25205 === (7))){
var inst_25200 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
var statearr_25206_25272 = state_25204__$1;
(statearr_25206_25272[(2)] = inst_25200);

(statearr_25206_25272[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (20))){
var state_25204__$1 = state_25204;
var statearr_25207_25273 = state_25204__$1;
(statearr_25207_25273[(2)] = null);

(statearr_25207_25273[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (1))){
var state_25204__$1 = state_25204;
var statearr_25208_25274 = state_25204__$1;
(statearr_25208_25274[(2)] = null);

(statearr_25208_25274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (4))){
var inst_25169 = (state_25204[(7)]);
var inst_25169__$1 = (state_25204[(2)]);
var inst_25170 = (inst_25169__$1 == null);
var state_25204__$1 = (function (){var statearr_25209 = state_25204;
(statearr_25209[(7)] = inst_25169__$1);

return statearr_25209;
})();
if(cljs.core.truth_(inst_25170)){
var statearr_25210_25275 = state_25204__$1;
(statearr_25210_25275[(1)] = (5));

} else {
var statearr_25211_25276 = state_25204__$1;
(statearr_25211_25276[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (15))){
var inst_25182 = (state_25204[(8)]);
var state_25204__$1 = state_25204;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25204__$1,(18),to,inst_25182);
} else {
if((state_val_25205 === (21))){
var inst_25195 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
var statearr_25212_25277 = state_25204__$1;
(statearr_25212_25277[(2)] = inst_25195);

(statearr_25212_25277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (13))){
var inst_25197 = (state_25204[(2)]);
var state_25204__$1 = (function (){var statearr_25213 = state_25204;
(statearr_25213[(9)] = inst_25197);

return statearr_25213;
})();
var statearr_25214_25278 = state_25204__$1;
(statearr_25214_25278[(2)] = null);

(statearr_25214_25278[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (6))){
var inst_25169 = (state_25204[(7)]);
var state_25204__$1 = state_25204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25204__$1,(11),inst_25169);
} else {
if((state_val_25205 === (17))){
var inst_25190 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
if(cljs.core.truth_(inst_25190)){
var statearr_25215_25279 = state_25204__$1;
(statearr_25215_25279[(1)] = (19));

} else {
var statearr_25216_25280 = state_25204__$1;
(statearr_25216_25280[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (3))){
var inst_25202 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25204__$1,inst_25202);
} else {
if((state_val_25205 === (12))){
var inst_25179 = (state_25204[(10)]);
var state_25204__$1 = state_25204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25204__$1,(14),inst_25179);
} else {
if((state_val_25205 === (2))){
var state_25204__$1 = state_25204;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25204__$1,(4),results);
} else {
if((state_val_25205 === (19))){
var state_25204__$1 = state_25204;
var statearr_25217_25281 = state_25204__$1;
(statearr_25217_25281[(2)] = null);

(statearr_25217_25281[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (11))){
var inst_25179 = (state_25204[(2)]);
var state_25204__$1 = (function (){var statearr_25218 = state_25204;
(statearr_25218[(10)] = inst_25179);

return statearr_25218;
})();
var statearr_25219_25282 = state_25204__$1;
(statearr_25219_25282[(2)] = null);

(statearr_25219_25282[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (9))){
var state_25204__$1 = state_25204;
var statearr_25220_25283 = state_25204__$1;
(statearr_25220_25283[(2)] = null);

(statearr_25220_25283[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (5))){
var state_25204__$1 = state_25204;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25221_25284 = state_25204__$1;
(statearr_25221_25284[(1)] = (8));

} else {
var statearr_25222_25285 = state_25204__$1;
(statearr_25222_25285[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (14))){
var inst_25184 = (state_25204[(11)]);
var inst_25182 = (state_25204[(8)]);
var inst_25182__$1 = (state_25204[(2)]);
var inst_25183 = (inst_25182__$1 == null);
var inst_25184__$1 = cljs.core.not.call(null,inst_25183);
var state_25204__$1 = (function (){var statearr_25223 = state_25204;
(statearr_25223[(11)] = inst_25184__$1);

(statearr_25223[(8)] = inst_25182__$1);

return statearr_25223;
})();
if(inst_25184__$1){
var statearr_25224_25286 = state_25204__$1;
(statearr_25224_25286[(1)] = (15));

} else {
var statearr_25225_25287 = state_25204__$1;
(statearr_25225_25287[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (16))){
var inst_25184 = (state_25204[(11)]);
var state_25204__$1 = state_25204;
var statearr_25226_25288 = state_25204__$1;
(statearr_25226_25288[(2)] = inst_25184);

(statearr_25226_25288[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (10))){
var inst_25176 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
var statearr_25227_25289 = state_25204__$1;
(statearr_25227_25289[(2)] = inst_25176);

(statearr_25227_25289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (18))){
var inst_25187 = (state_25204[(2)]);
var state_25204__$1 = state_25204;
var statearr_25228_25290 = state_25204__$1;
(statearr_25228_25290[(2)] = inst_25187);

(statearr_25228_25290[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25205 === (8))){
var inst_25173 = cljs.core.async.close_BANG_.call(null,to);
var state_25204__$1 = state_25204;
var statearr_25229_25291 = state_25204__$1;
(statearr_25229_25291[(2)] = inst_25173);

(statearr_25229_25291[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12720__auto__,jobs,results,process,async))
;
return ((function (switch__12664__auto__,c__12720__auto__,jobs,results,process,async){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_25233 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25233[(0)] = state_machine__12665__auto__);

(statearr_25233[(1)] = (1));

return statearr_25233;
});
var state_machine__12665__auto____1 = (function (state_25204){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_25204);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e25234){if((e25234 instanceof Object)){
var ex__12668__auto__ = e25234;
var statearr_25235_25292 = state_25204;
(statearr_25235_25292[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25204);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25234;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25293 = state_25204;
state_25204 = G__25293;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_25204){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_25204);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(switch__12664__auto__,c__12720__auto__,jobs,results,process,async))
})();
var state__12722__auto__ = (function (){var statearr_25236 = f__12721__auto__.call(null);
(statearr_25236[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto__);

return statearr_25236;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(c__12720__auto__,jobs,results,process,async))
);

return c__12720__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){
return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){
return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){
return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){
return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__12720__auto___25394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12720__auto___25394,tc,fc){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (c__12720__auto___25394,tc,fc){
return (function (state_25369){
var state_val_25370 = (state_25369[(1)]);
if((state_val_25370 === (7))){
var inst_25365 = (state_25369[(2)]);
var state_25369__$1 = state_25369;
var statearr_25371_25395 = state_25369__$1;
(statearr_25371_25395[(2)] = inst_25365);

(statearr_25371_25395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (1))){
var state_25369__$1 = state_25369;
var statearr_25372_25396 = state_25369__$1;
(statearr_25372_25396[(2)] = null);

(statearr_25372_25396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (4))){
var inst_25346 = (state_25369[(7)]);
var inst_25346__$1 = (state_25369[(2)]);
var inst_25347 = (inst_25346__$1 == null);
var state_25369__$1 = (function (){var statearr_25373 = state_25369;
(statearr_25373[(7)] = inst_25346__$1);

return statearr_25373;
})();
if(cljs.core.truth_(inst_25347)){
var statearr_25374_25397 = state_25369__$1;
(statearr_25374_25397[(1)] = (5));

} else {
var statearr_25375_25398 = state_25369__$1;
(statearr_25375_25398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (13))){
var state_25369__$1 = state_25369;
var statearr_25376_25399 = state_25369__$1;
(statearr_25376_25399[(2)] = null);

(statearr_25376_25399[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (6))){
var inst_25346 = (state_25369[(7)]);
var inst_25352 = p.call(null,inst_25346);
var state_25369__$1 = state_25369;
if(cljs.core.truth_(inst_25352)){
var statearr_25377_25400 = state_25369__$1;
(statearr_25377_25400[(1)] = (9));

} else {
var statearr_25378_25401 = state_25369__$1;
(statearr_25378_25401[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (3))){
var inst_25367 = (state_25369[(2)]);
var state_25369__$1 = state_25369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25369__$1,inst_25367);
} else {
if((state_val_25370 === (12))){
var state_25369__$1 = state_25369;
var statearr_25379_25402 = state_25369__$1;
(statearr_25379_25402[(2)] = null);

(statearr_25379_25402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (2))){
var state_25369__$1 = state_25369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25369__$1,(4),ch);
} else {
if((state_val_25370 === (11))){
var inst_25346 = (state_25369[(7)]);
var inst_25356 = (state_25369[(2)]);
var state_25369__$1 = state_25369;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25369__$1,(8),inst_25356,inst_25346);
} else {
if((state_val_25370 === (9))){
var state_25369__$1 = state_25369;
var statearr_25380_25403 = state_25369__$1;
(statearr_25380_25403[(2)] = tc);

(statearr_25380_25403[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (5))){
var inst_25349 = cljs.core.async.close_BANG_.call(null,tc);
var inst_25350 = cljs.core.async.close_BANG_.call(null,fc);
var state_25369__$1 = (function (){var statearr_25381 = state_25369;
(statearr_25381[(8)] = inst_25349);

return statearr_25381;
})();
var statearr_25382_25404 = state_25369__$1;
(statearr_25382_25404[(2)] = inst_25350);

(statearr_25382_25404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (14))){
var inst_25363 = (state_25369[(2)]);
var state_25369__$1 = state_25369;
var statearr_25383_25405 = state_25369__$1;
(statearr_25383_25405[(2)] = inst_25363);

(statearr_25383_25405[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (10))){
var state_25369__$1 = state_25369;
var statearr_25384_25406 = state_25369__$1;
(statearr_25384_25406[(2)] = fc);

(statearr_25384_25406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25370 === (8))){
var inst_25358 = (state_25369[(2)]);
var state_25369__$1 = state_25369;
if(cljs.core.truth_(inst_25358)){
var statearr_25385_25407 = state_25369__$1;
(statearr_25385_25407[(1)] = (12));

} else {
var statearr_25386_25408 = state_25369__$1;
(statearr_25386_25408[(1)] = (13));

}

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
}
}
}
}
}
}
}
});})(c__12720__auto___25394,tc,fc))
;
return ((function (switch__12664__auto__,c__12720__auto___25394,tc,fc){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_25390 = [null,null,null,null,null,null,null,null,null];
(statearr_25390[(0)] = state_machine__12665__auto__);

(statearr_25390[(1)] = (1));

return statearr_25390;
});
var state_machine__12665__auto____1 = (function (state_25369){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_25369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e25391){if((e25391 instanceof Object)){
var ex__12668__auto__ = e25391;
var statearr_25392_25409 = state_25369;
(statearr_25392_25409[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25410 = state_25369;
state_25369 = G__25410;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_25369){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_25369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(switch__12664__auto__,c__12720__auto___25394,tc,fc))
})();
var state__12722__auto__ = (function (){var statearr_25393 = f__12721__auto__.call(null);
(statearr_25393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto___25394);

return statearr_25393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(c__12720__auto___25394,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){
var c__12720__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12720__auto__){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (c__12720__auto__){
return (function (state_25457){
var state_val_25458 = (state_25457[(1)]);
if((state_val_25458 === (7))){
var inst_25453 = (state_25457[(2)]);
var state_25457__$1 = state_25457;
var statearr_25459_25475 = state_25457__$1;
(statearr_25459_25475[(2)] = inst_25453);

(statearr_25459_25475[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25458 === (6))){
var inst_25446 = (state_25457[(7)]);
var inst_25443 = (state_25457[(8)]);
var inst_25450 = f.call(null,inst_25443,inst_25446);
var inst_25443__$1 = inst_25450;
var state_25457__$1 = (function (){var statearr_25460 = state_25457;
(statearr_25460[(8)] = inst_25443__$1);

return statearr_25460;
})();
var statearr_25461_25476 = state_25457__$1;
(statearr_25461_25476[(2)] = null);

(statearr_25461_25476[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25458 === (5))){
var inst_25443 = (state_25457[(8)]);
var state_25457__$1 = state_25457;
var statearr_25462_25477 = state_25457__$1;
(statearr_25462_25477[(2)] = inst_25443);

(statearr_25462_25477[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25458 === (4))){
var inst_25446 = (state_25457[(7)]);
var inst_25446__$1 = (state_25457[(2)]);
var inst_25447 = (inst_25446__$1 == null);
var state_25457__$1 = (function (){var statearr_25463 = state_25457;
(statearr_25463[(7)] = inst_25446__$1);

return statearr_25463;
})();
if(cljs.core.truth_(inst_25447)){
var statearr_25464_25478 = state_25457__$1;
(statearr_25464_25478[(1)] = (5));

} else {
var statearr_25465_25479 = state_25457__$1;
(statearr_25465_25479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25458 === (3))){
var inst_25455 = (state_25457[(2)]);
var state_25457__$1 = state_25457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25457__$1,inst_25455);
} else {
if((state_val_25458 === (2))){
var state_25457__$1 = state_25457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25457__$1,(4),ch);
} else {
if((state_val_25458 === (1))){
var inst_25443 = init;
var state_25457__$1 = (function (){var statearr_25466 = state_25457;
(statearr_25466[(8)] = inst_25443);

return statearr_25466;
})();
var statearr_25467_25480 = state_25457__$1;
(statearr_25467_25480[(2)] = null);

(statearr_25467_25480[(1)] = (2));


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
});})(c__12720__auto__))
;
return ((function (switch__12664__auto__,c__12720__auto__){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_25471 = [null,null,null,null,null,null,null,null,null];
(statearr_25471[(0)] = state_machine__12665__auto__);

(statearr_25471[(1)] = (1));

return statearr_25471;
});
var state_machine__12665__auto____1 = (function (state_25457){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_25457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e25472){if((e25472 instanceof Object)){
var ex__12668__auto__ = e25472;
var statearr_25473_25481 = state_25457;
(statearr_25473_25481[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25472;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25482 = state_25457;
state_25457 = G__25482;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_25457){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_25457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(switch__12664__auto__,c__12720__auto__))
})();
var state__12722__auto__ = (function (){var statearr_25474 = f__12721__auto__.call(null);
(statearr_25474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto__);

return statearr_25474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(c__12720__auto__))
);

return c__12720__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){
return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){
var c__12720__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12720__auto__){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (c__12720__auto__){
return (function (state_25556){
var state_val_25557 = (state_25556[(1)]);
if((state_val_25557 === (7))){
var inst_25538 = (state_25556[(2)]);
var state_25556__$1 = state_25556;
var statearr_25558_25581 = state_25556__$1;
(statearr_25558_25581[(2)] = inst_25538);

(statearr_25558_25581[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (1))){
var inst_25532 = cljs.core.seq.call(null,coll);
var inst_25533 = inst_25532;
var state_25556__$1 = (function (){var statearr_25559 = state_25556;
(statearr_25559[(7)] = inst_25533);

return statearr_25559;
})();
var statearr_25560_25582 = state_25556__$1;
(statearr_25560_25582[(2)] = null);

(statearr_25560_25582[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (4))){
var inst_25533 = (state_25556[(7)]);
var inst_25536 = cljs.core.first.call(null,inst_25533);
var state_25556__$1 = state_25556;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25556__$1,(7),ch,inst_25536);
} else {
if((state_val_25557 === (13))){
var inst_25550 = (state_25556[(2)]);
var state_25556__$1 = state_25556;
var statearr_25561_25583 = state_25556__$1;
(statearr_25561_25583[(2)] = inst_25550);

(statearr_25561_25583[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (6))){
var inst_25541 = (state_25556[(2)]);
var state_25556__$1 = state_25556;
if(cljs.core.truth_(inst_25541)){
var statearr_25562_25584 = state_25556__$1;
(statearr_25562_25584[(1)] = (8));

} else {
var statearr_25563_25585 = state_25556__$1;
(statearr_25563_25585[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (3))){
var inst_25554 = (state_25556[(2)]);
var state_25556__$1 = state_25556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25556__$1,inst_25554);
} else {
if((state_val_25557 === (12))){
var state_25556__$1 = state_25556;
var statearr_25564_25586 = state_25556__$1;
(statearr_25564_25586[(2)] = null);

(statearr_25564_25586[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (2))){
var inst_25533 = (state_25556[(7)]);
var state_25556__$1 = state_25556;
if(cljs.core.truth_(inst_25533)){
var statearr_25565_25587 = state_25556__$1;
(statearr_25565_25587[(1)] = (4));

} else {
var statearr_25566_25588 = state_25556__$1;
(statearr_25566_25588[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (11))){
var inst_25547 = cljs.core.async.close_BANG_.call(null,ch);
var state_25556__$1 = state_25556;
var statearr_25567_25589 = state_25556__$1;
(statearr_25567_25589[(2)] = inst_25547);

(statearr_25567_25589[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (9))){
var state_25556__$1 = state_25556;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25568_25590 = state_25556__$1;
(statearr_25568_25590[(1)] = (11));

} else {
var statearr_25569_25591 = state_25556__$1;
(statearr_25569_25591[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (5))){
var inst_25533 = (state_25556[(7)]);
var state_25556__$1 = state_25556;
var statearr_25570_25592 = state_25556__$1;
(statearr_25570_25592[(2)] = inst_25533);

(statearr_25570_25592[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (10))){
var inst_25552 = (state_25556[(2)]);
var state_25556__$1 = state_25556;
var statearr_25571_25593 = state_25556__$1;
(statearr_25571_25593[(2)] = inst_25552);

(statearr_25571_25593[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25557 === (8))){
var inst_25533 = (state_25556[(7)]);
var inst_25543 = cljs.core.next.call(null,inst_25533);
var inst_25533__$1 = inst_25543;
var state_25556__$1 = (function (){var statearr_25572 = state_25556;
(statearr_25572[(7)] = inst_25533__$1);

return statearr_25572;
})();
var statearr_25573_25594 = state_25556__$1;
(statearr_25573_25594[(2)] = null);

(statearr_25573_25594[(1)] = (2));


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
}
}
}
}
}
}
});})(c__12720__auto__))
;
return ((function (switch__12664__auto__,c__12720__auto__){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_25577 = [null,null,null,null,null,null,null,null];
(statearr_25577[(0)] = state_machine__12665__auto__);

(statearr_25577[(1)] = (1));

return statearr_25577;
});
var state_machine__12665__auto____1 = (function (state_25556){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_25556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e25578){if((e25578 instanceof Object)){
var ex__12668__auto__ = e25578;
var statearr_25579_25595 = state_25556;
(statearr_25579_25595[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25578;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25596 = state_25556;
state_25556 = G__25596;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_25556){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_25556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(switch__12664__auto__,c__12720__auto__))
})();
var state__12722__auto__ = (function (){var statearr_25580 = f__12721__auto__.call(null);
(statearr_25580[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto__);

return statearr_25580;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(c__12720__auto__))
);

return c__12720__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj25598 = {};
return obj25598;
})();

cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){
if((function (){var and__3794__auto__ = _;
if(and__3794__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__3794__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4450__auto__ = (((_ == null))?null:_);
return (function (){var or__3806__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4450__auto__)]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj25600 = {};
return obj25600;
})();

cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__3794__auto__ = m;
if(and__3794__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__3794__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4450__auto__ = (((m == null))?null:m);
return (function (){var or__3806__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4450__auto__)]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){
if((function (){var and__3794__auto__ = m;
if(and__3794__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__3794__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4450__auto__ = (((m == null))?null:m);
return (function (){var or__3806__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4450__auto__)]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){
if((function (){var and__3794__auto__ = m;
if(and__3794__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__3794__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4450__auto__ = (((m == null))?null:m);
return (function (){var or__3806__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4450__auto__)]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t25822 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t25822 = (function (cs,ch,mult,meta25823){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta25823 = meta25823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25822.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t25822.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t25822.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t25822.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t25822.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t25822.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t25822.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_25824){
var self__ = this;
var _25824__$1 = this;
return self__.meta25823;
});})(cs))
;

cljs.core.async.t25822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_25824,meta25823__$1){
var self__ = this;
var _25824__$1 = this;
return (new cljs.core.async.t25822(self__.cs,self__.ch,self__.mult,meta25823__$1));
});})(cs))
;

cljs.core.async.t25822.cljs$lang$type = true;

cljs.core.async.t25822.cljs$lang$ctorStr = "cljs.core.async/t25822";

cljs.core.async.t25822.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"cljs.core.async/t25822");
});})(cs))
;

cljs.core.async.__GT_t25822 = ((function (cs){
return (function __GT_t25822(cs__$1,ch__$1,mult__$1,meta25823){
return (new cljs.core.async.t25822(cs__$1,ch__$1,mult__$1,meta25823));
});})(cs))
;

}

return (new cljs.core.async.t25822(cs,ch,mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__12720__auto___26043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12720__auto___26043,cs,m,dchan,dctr,done){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (c__12720__auto___26043,cs,m,dchan,dctr,done){
return (function (state_25955){
var state_val_25956 = (state_25955[(1)]);
if((state_val_25956 === (7))){
var inst_25951 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_25957_26044 = state_25955__$1;
(statearr_25957_26044[(2)] = inst_25951);

(statearr_25957_26044[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (20))){
var inst_25856 = (state_25955[(7)]);
var inst_25866 = cljs.core.first.call(null,inst_25856);
var inst_25867 = cljs.core.nth.call(null,inst_25866,(0),null);
var inst_25868 = cljs.core.nth.call(null,inst_25866,(1),null);
var state_25955__$1 = (function (){var statearr_25958 = state_25955;
(statearr_25958[(8)] = inst_25867);

return statearr_25958;
})();
if(cljs.core.truth_(inst_25868)){
var statearr_25959_26045 = state_25955__$1;
(statearr_25959_26045[(1)] = (22));

} else {
var statearr_25960_26046 = state_25955__$1;
(statearr_25960_26046[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (27))){
var inst_25898 = (state_25955[(9)]);
var inst_25827 = (state_25955[(10)]);
var inst_25896 = (state_25955[(11)]);
var inst_25903 = (state_25955[(12)]);
var inst_25903__$1 = cljs.core._nth.call(null,inst_25896,inst_25898);
var inst_25904 = cljs.core.async.put_BANG_.call(null,inst_25903__$1,inst_25827,done);
var state_25955__$1 = (function (){var statearr_25961 = state_25955;
(statearr_25961[(12)] = inst_25903__$1);

return statearr_25961;
})();
if(cljs.core.truth_(inst_25904)){
var statearr_25962_26047 = state_25955__$1;
(statearr_25962_26047[(1)] = (30));

} else {
var statearr_25963_26048 = state_25955__$1;
(statearr_25963_26048[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (1))){
var state_25955__$1 = state_25955;
var statearr_25964_26049 = state_25955__$1;
(statearr_25964_26049[(2)] = null);

(statearr_25964_26049[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (24))){
var inst_25856 = (state_25955[(7)]);
var inst_25873 = (state_25955[(2)]);
var inst_25874 = cljs.core.next.call(null,inst_25856);
var inst_25836 = inst_25874;
var inst_25837 = null;
var inst_25838 = (0);
var inst_25839 = (0);
var state_25955__$1 = (function (){var statearr_25965 = state_25955;
(statearr_25965[(13)] = inst_25839);

(statearr_25965[(14)] = inst_25838);

(statearr_25965[(15)] = inst_25836);

(statearr_25965[(16)] = inst_25873);

(statearr_25965[(17)] = inst_25837);

return statearr_25965;
})();
var statearr_25966_26050 = state_25955__$1;
(statearr_25966_26050[(2)] = null);

(statearr_25966_26050[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (39))){
var state_25955__$1 = state_25955;
var statearr_25970_26051 = state_25955__$1;
(statearr_25970_26051[(2)] = null);

(statearr_25970_26051[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (4))){
var inst_25827 = (state_25955[(10)]);
var inst_25827__$1 = (state_25955[(2)]);
var inst_25828 = (inst_25827__$1 == null);
var state_25955__$1 = (function (){var statearr_25971 = state_25955;
(statearr_25971[(10)] = inst_25827__$1);

return statearr_25971;
})();
if(cljs.core.truth_(inst_25828)){
var statearr_25972_26052 = state_25955__$1;
(statearr_25972_26052[(1)] = (5));

} else {
var statearr_25973_26053 = state_25955__$1;
(statearr_25973_26053[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (15))){
var inst_25839 = (state_25955[(13)]);
var inst_25838 = (state_25955[(14)]);
var inst_25836 = (state_25955[(15)]);
var inst_25837 = (state_25955[(17)]);
var inst_25852 = (state_25955[(2)]);
var inst_25853 = (inst_25839 + (1));
var tmp25967 = inst_25838;
var tmp25968 = inst_25836;
var tmp25969 = inst_25837;
var inst_25836__$1 = tmp25968;
var inst_25837__$1 = tmp25969;
var inst_25838__$1 = tmp25967;
var inst_25839__$1 = inst_25853;
var state_25955__$1 = (function (){var statearr_25974 = state_25955;
(statearr_25974[(13)] = inst_25839__$1);

(statearr_25974[(14)] = inst_25838__$1);

(statearr_25974[(18)] = inst_25852);

(statearr_25974[(15)] = inst_25836__$1);

(statearr_25974[(17)] = inst_25837__$1);

return statearr_25974;
})();
var statearr_25975_26054 = state_25955__$1;
(statearr_25975_26054[(2)] = null);

(statearr_25975_26054[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (21))){
var inst_25877 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_25979_26055 = state_25955__$1;
(statearr_25979_26055[(2)] = inst_25877);

(statearr_25979_26055[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (31))){
var inst_25903 = (state_25955[(12)]);
var inst_25907 = done.call(null,null);
var inst_25908 = cljs.core.async.untap_STAR_.call(null,m,inst_25903);
var state_25955__$1 = (function (){var statearr_25980 = state_25955;
(statearr_25980[(19)] = inst_25907);

return statearr_25980;
})();
var statearr_25981_26056 = state_25955__$1;
(statearr_25981_26056[(2)] = inst_25908);

(statearr_25981_26056[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (32))){
var inst_25898 = (state_25955[(9)]);
var inst_25897 = (state_25955[(20)]);
var inst_25896 = (state_25955[(11)]);
var inst_25895 = (state_25955[(21)]);
var inst_25910 = (state_25955[(2)]);
var inst_25911 = (inst_25898 + (1));
var tmp25976 = inst_25897;
var tmp25977 = inst_25896;
var tmp25978 = inst_25895;
var inst_25895__$1 = tmp25978;
var inst_25896__$1 = tmp25977;
var inst_25897__$1 = tmp25976;
var inst_25898__$1 = inst_25911;
var state_25955__$1 = (function (){var statearr_25982 = state_25955;
(statearr_25982[(9)] = inst_25898__$1);

(statearr_25982[(20)] = inst_25897__$1);

(statearr_25982[(22)] = inst_25910);

(statearr_25982[(11)] = inst_25896__$1);

(statearr_25982[(21)] = inst_25895__$1);

return statearr_25982;
})();
var statearr_25983_26057 = state_25955__$1;
(statearr_25983_26057[(2)] = null);

(statearr_25983_26057[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (40))){
var inst_25923 = (state_25955[(23)]);
var inst_25927 = done.call(null,null);
var inst_25928 = cljs.core.async.untap_STAR_.call(null,m,inst_25923);
var state_25955__$1 = (function (){var statearr_25984 = state_25955;
(statearr_25984[(24)] = inst_25927);

return statearr_25984;
})();
var statearr_25985_26058 = state_25955__$1;
(statearr_25985_26058[(2)] = inst_25928);

(statearr_25985_26058[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (33))){
var inst_25914 = (state_25955[(25)]);
var inst_25916 = cljs.core.chunked_seq_QMARK_.call(null,inst_25914);
var state_25955__$1 = state_25955;
if(inst_25916){
var statearr_25986_26059 = state_25955__$1;
(statearr_25986_26059[(1)] = (36));

} else {
var statearr_25987_26060 = state_25955__$1;
(statearr_25987_26060[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (13))){
var inst_25846 = (state_25955[(26)]);
var inst_25849 = cljs.core.async.close_BANG_.call(null,inst_25846);
var state_25955__$1 = state_25955;
var statearr_25988_26061 = state_25955__$1;
(statearr_25988_26061[(2)] = inst_25849);

(statearr_25988_26061[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (22))){
var inst_25867 = (state_25955[(8)]);
var inst_25870 = cljs.core.async.close_BANG_.call(null,inst_25867);
var state_25955__$1 = state_25955;
var statearr_25989_26062 = state_25955__$1;
(statearr_25989_26062[(2)] = inst_25870);

(statearr_25989_26062[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (36))){
var inst_25914 = (state_25955[(25)]);
var inst_25918 = cljs.core.chunk_first.call(null,inst_25914);
var inst_25919 = cljs.core.chunk_rest.call(null,inst_25914);
var inst_25920 = cljs.core.count.call(null,inst_25918);
var inst_25895 = inst_25919;
var inst_25896 = inst_25918;
var inst_25897 = inst_25920;
var inst_25898 = (0);
var state_25955__$1 = (function (){var statearr_25990 = state_25955;
(statearr_25990[(9)] = inst_25898);

(statearr_25990[(20)] = inst_25897);

(statearr_25990[(11)] = inst_25896);

(statearr_25990[(21)] = inst_25895);

return statearr_25990;
})();
var statearr_25991_26063 = state_25955__$1;
(statearr_25991_26063[(2)] = null);

(statearr_25991_26063[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (41))){
var inst_25914 = (state_25955[(25)]);
var inst_25930 = (state_25955[(2)]);
var inst_25931 = cljs.core.next.call(null,inst_25914);
var inst_25895 = inst_25931;
var inst_25896 = null;
var inst_25897 = (0);
var inst_25898 = (0);
var state_25955__$1 = (function (){var statearr_25992 = state_25955;
(statearr_25992[(9)] = inst_25898);

(statearr_25992[(20)] = inst_25897);

(statearr_25992[(27)] = inst_25930);

(statearr_25992[(11)] = inst_25896);

(statearr_25992[(21)] = inst_25895);

return statearr_25992;
})();
var statearr_25993_26064 = state_25955__$1;
(statearr_25993_26064[(2)] = null);

(statearr_25993_26064[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (43))){
var state_25955__$1 = state_25955;
var statearr_25994_26065 = state_25955__$1;
(statearr_25994_26065[(2)] = null);

(statearr_25994_26065[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (29))){
var inst_25939 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_25995_26066 = state_25955__$1;
(statearr_25995_26066[(2)] = inst_25939);

(statearr_25995_26066[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (44))){
var inst_25948 = (state_25955[(2)]);
var state_25955__$1 = (function (){var statearr_25996 = state_25955;
(statearr_25996[(28)] = inst_25948);

return statearr_25996;
})();
var statearr_25997_26067 = state_25955__$1;
(statearr_25997_26067[(2)] = null);

(statearr_25997_26067[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (6))){
var inst_25887 = (state_25955[(29)]);
var inst_25886 = cljs.core.deref.call(null,cs);
var inst_25887__$1 = cljs.core.keys.call(null,inst_25886);
var inst_25888 = cljs.core.count.call(null,inst_25887__$1);
var inst_25889 = cljs.core.reset_BANG_.call(null,dctr,inst_25888);
var inst_25894 = cljs.core.seq.call(null,inst_25887__$1);
var inst_25895 = inst_25894;
var inst_25896 = null;
var inst_25897 = (0);
var inst_25898 = (0);
var state_25955__$1 = (function (){var statearr_25998 = state_25955;
(statearr_25998[(29)] = inst_25887__$1);

(statearr_25998[(9)] = inst_25898);

(statearr_25998[(20)] = inst_25897);

(statearr_25998[(30)] = inst_25889);

(statearr_25998[(11)] = inst_25896);

(statearr_25998[(21)] = inst_25895);

return statearr_25998;
})();
var statearr_25999_26068 = state_25955__$1;
(statearr_25999_26068[(2)] = null);

(statearr_25999_26068[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (28))){
var inst_25914 = (state_25955[(25)]);
var inst_25895 = (state_25955[(21)]);
var inst_25914__$1 = cljs.core.seq.call(null,inst_25895);
var state_25955__$1 = (function (){var statearr_26000 = state_25955;
(statearr_26000[(25)] = inst_25914__$1);

return statearr_26000;
})();
if(inst_25914__$1){
var statearr_26001_26069 = state_25955__$1;
(statearr_26001_26069[(1)] = (33));

} else {
var statearr_26002_26070 = state_25955__$1;
(statearr_26002_26070[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (25))){
var inst_25898 = (state_25955[(9)]);
var inst_25897 = (state_25955[(20)]);
var inst_25900 = (inst_25898 < inst_25897);
var inst_25901 = inst_25900;
var state_25955__$1 = state_25955;
if(cljs.core.truth_(inst_25901)){
var statearr_26003_26071 = state_25955__$1;
(statearr_26003_26071[(1)] = (27));

} else {
var statearr_26004_26072 = state_25955__$1;
(statearr_26004_26072[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (34))){
var state_25955__$1 = state_25955;
var statearr_26005_26073 = state_25955__$1;
(statearr_26005_26073[(2)] = null);

(statearr_26005_26073[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (17))){
var state_25955__$1 = state_25955;
var statearr_26006_26074 = state_25955__$1;
(statearr_26006_26074[(2)] = null);

(statearr_26006_26074[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (3))){
var inst_25953 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25955__$1,inst_25953);
} else {
if((state_val_25956 === (12))){
var inst_25882 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_26007_26075 = state_25955__$1;
(statearr_26007_26075[(2)] = inst_25882);

(statearr_26007_26075[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (2))){
var state_25955__$1 = state_25955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25955__$1,(4),ch);
} else {
if((state_val_25956 === (23))){
var state_25955__$1 = state_25955;
var statearr_26008_26076 = state_25955__$1;
(statearr_26008_26076[(2)] = null);

(statearr_26008_26076[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (35))){
var inst_25937 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_26009_26077 = state_25955__$1;
(statearr_26009_26077[(2)] = inst_25937);

(statearr_26009_26077[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (19))){
var inst_25856 = (state_25955[(7)]);
var inst_25860 = cljs.core.chunk_first.call(null,inst_25856);
var inst_25861 = cljs.core.chunk_rest.call(null,inst_25856);
var inst_25862 = cljs.core.count.call(null,inst_25860);
var inst_25836 = inst_25861;
var inst_25837 = inst_25860;
var inst_25838 = inst_25862;
var inst_25839 = (0);
var state_25955__$1 = (function (){var statearr_26010 = state_25955;
(statearr_26010[(13)] = inst_25839);

(statearr_26010[(14)] = inst_25838);

(statearr_26010[(15)] = inst_25836);

(statearr_26010[(17)] = inst_25837);

return statearr_26010;
})();
var statearr_26011_26078 = state_25955__$1;
(statearr_26011_26078[(2)] = null);

(statearr_26011_26078[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (11))){
var inst_25836 = (state_25955[(15)]);
var inst_25856 = (state_25955[(7)]);
var inst_25856__$1 = cljs.core.seq.call(null,inst_25836);
var state_25955__$1 = (function (){var statearr_26012 = state_25955;
(statearr_26012[(7)] = inst_25856__$1);

return statearr_26012;
})();
if(inst_25856__$1){
var statearr_26013_26079 = state_25955__$1;
(statearr_26013_26079[(1)] = (16));

} else {
var statearr_26014_26080 = state_25955__$1;
(statearr_26014_26080[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (9))){
var inst_25884 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_26015_26081 = state_25955__$1;
(statearr_26015_26081[(2)] = inst_25884);

(statearr_26015_26081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (5))){
var inst_25834 = cljs.core.deref.call(null,cs);
var inst_25835 = cljs.core.seq.call(null,inst_25834);
var inst_25836 = inst_25835;
var inst_25837 = null;
var inst_25838 = (0);
var inst_25839 = (0);
var state_25955__$1 = (function (){var statearr_26016 = state_25955;
(statearr_26016[(13)] = inst_25839);

(statearr_26016[(14)] = inst_25838);

(statearr_26016[(15)] = inst_25836);

(statearr_26016[(17)] = inst_25837);

return statearr_26016;
})();
var statearr_26017_26082 = state_25955__$1;
(statearr_26017_26082[(2)] = null);

(statearr_26017_26082[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (14))){
var state_25955__$1 = state_25955;
var statearr_26018_26083 = state_25955__$1;
(statearr_26018_26083[(2)] = null);

(statearr_26018_26083[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (45))){
var inst_25945 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_26019_26084 = state_25955__$1;
(statearr_26019_26084[(2)] = inst_25945);

(statearr_26019_26084[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (26))){
var inst_25887 = (state_25955[(29)]);
var inst_25941 = (state_25955[(2)]);
var inst_25942 = cljs.core.seq.call(null,inst_25887);
var state_25955__$1 = (function (){var statearr_26020 = state_25955;
(statearr_26020[(31)] = inst_25941);

return statearr_26020;
})();
if(inst_25942){
var statearr_26021_26085 = state_25955__$1;
(statearr_26021_26085[(1)] = (42));

} else {
var statearr_26022_26086 = state_25955__$1;
(statearr_26022_26086[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (16))){
var inst_25856 = (state_25955[(7)]);
var inst_25858 = cljs.core.chunked_seq_QMARK_.call(null,inst_25856);
var state_25955__$1 = state_25955;
if(inst_25858){
var statearr_26023_26087 = state_25955__$1;
(statearr_26023_26087[(1)] = (19));

} else {
var statearr_26024_26088 = state_25955__$1;
(statearr_26024_26088[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (38))){
var inst_25934 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_26025_26089 = state_25955__$1;
(statearr_26025_26089[(2)] = inst_25934);

(statearr_26025_26089[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (30))){
var state_25955__$1 = state_25955;
var statearr_26026_26090 = state_25955__$1;
(statearr_26026_26090[(2)] = null);

(statearr_26026_26090[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (10))){
var inst_25839 = (state_25955[(13)]);
var inst_25837 = (state_25955[(17)]);
var inst_25845 = cljs.core._nth.call(null,inst_25837,inst_25839);
var inst_25846 = cljs.core.nth.call(null,inst_25845,(0),null);
var inst_25847 = cljs.core.nth.call(null,inst_25845,(1),null);
var state_25955__$1 = (function (){var statearr_26027 = state_25955;
(statearr_26027[(26)] = inst_25846);

return statearr_26027;
})();
if(cljs.core.truth_(inst_25847)){
var statearr_26028_26091 = state_25955__$1;
(statearr_26028_26091[(1)] = (13));

} else {
var statearr_26029_26092 = state_25955__$1;
(statearr_26029_26092[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (18))){
var inst_25880 = (state_25955[(2)]);
var state_25955__$1 = state_25955;
var statearr_26030_26093 = state_25955__$1;
(statearr_26030_26093[(2)] = inst_25880);

(statearr_26030_26093[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (42))){
var state_25955__$1 = state_25955;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25955__$1,(45),dchan);
} else {
if((state_val_25956 === (37))){
var inst_25827 = (state_25955[(10)]);
var inst_25914 = (state_25955[(25)]);
var inst_25923 = (state_25955[(23)]);
var inst_25923__$1 = cljs.core.first.call(null,inst_25914);
var inst_25924 = cljs.core.async.put_BANG_.call(null,inst_25923__$1,inst_25827,done);
var state_25955__$1 = (function (){var statearr_26031 = state_25955;
(statearr_26031[(23)] = inst_25923__$1);

return statearr_26031;
})();
if(cljs.core.truth_(inst_25924)){
var statearr_26032_26094 = state_25955__$1;
(statearr_26032_26094[(1)] = (39));

} else {
var statearr_26033_26095 = state_25955__$1;
(statearr_26033_26095[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25956 === (8))){
var inst_25839 = (state_25955[(13)]);
var inst_25838 = (state_25955[(14)]);
var inst_25841 = (inst_25839 < inst_25838);
var inst_25842 = inst_25841;
var state_25955__$1 = state_25955;
if(cljs.core.truth_(inst_25842)){
var statearr_26034_26096 = state_25955__$1;
(statearr_26034_26096[(1)] = (10));

} else {
var statearr_26035_26097 = state_25955__$1;
(statearr_26035_26097[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12720__auto___26043,cs,m,dchan,dctr,done))
;
return ((function (switch__12664__auto__,c__12720__auto___26043,cs,m,dchan,dctr,done){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_26039 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26039[(0)] = state_machine__12665__auto__);

(statearr_26039[(1)] = (1));

return statearr_26039;
});
var state_machine__12665__auto____1 = (function (state_25955){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_25955);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e26040){if((e26040 instanceof Object)){
var ex__12668__auto__ = e26040;
var statearr_26041_26098 = state_25955;
(statearr_26041_26098[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25955);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26040;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26099 = state_25955;
state_25955 = G__26099;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_25955){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_25955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(switch__12664__auto__,c__12720__auto___26043,cs,m,dchan,dctr,done))
})();
var state__12722__auto__ = (function (){var statearr_26042 = f__12721__auto__.call(null);
(statearr_26042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto___26043);

return statearr_26042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(c__12720__auto___26043,cs,m,dchan,dctr,done))
);


return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){
return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

cljs.core.async.Mix = (function (){var obj26101 = {};
return obj26101;
})();

cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){
if((function (){var and__3794__auto__ = m;
if(and__3794__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__3794__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4450__auto__ = (((m == null))?null:m);
return (function (){var or__3806__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4450__auto__)]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){
if((function (){var and__3794__auto__ = m;
if(and__3794__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__3794__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4450__auto__ = (((m == null))?null:m);
return (function (){var or__3806__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4450__auto__)]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){
if((function (){var and__3794__auto__ = m;
if(and__3794__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__3794__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4450__auto__ = (((m == null))?null:m);
return (function (){var or__3806__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4450__auto__)]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){
if((function (){var and__3794__auto__ = m;
if(and__3794__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__3794__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4450__auto__ = (((m == null))?null:m);
return (function (){var or__3806__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4450__auto__)]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){
if((function (){var and__3794__auto__ = m;
if(and__3794__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__3794__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4450__auto__ = (((m == null))?null:m);
return (function (){var or__3806__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4450__auto__)]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__26102){
var map__26107 = p__26102;
var map__26107__$1 = ((cljs.core.seq_QMARK_.call(null,map__26107))?cljs.core.apply.call(null,cljs.core.hash_map,map__26107):map__26107);
var opts = map__26107__$1;
var statearr_26108_26111 = state;
(statearr_26108_26111[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__26107,map__26107__$1,opts){
return (function (val){
var statearr_26109_26112 = state;
(statearr_26109_26112[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26107,map__26107__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4126__auto__)){
var cb = temp__4126__auto__;
var statearr_26110_26113 = state;
(statearr_26110_26113[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__26102 = null;
if (arguments.length > 3) {
var G__26114__i = 0, G__26114__a = new Array(arguments.length -  3);
while (G__26114__i < G__26114__a.length) {G__26114__a[G__26114__i] = arguments[G__26114__i + 3]; ++G__26114__i;}
  p__26102 = new cljs.core.IndexedSeq(G__26114__a,0);
} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__26102);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__26115){
var state = cljs.core.first(arglist__26115);
arglist__26115 = cljs.core.next(arglist__26115);
var cont_block = cljs.core.first(arglist__26115);
arglist__26115 = cljs.core.next(arglist__26115);
var ports = cljs.core.first(arglist__26115);
var p__26102 = cljs.core.rest(arglist__26115);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__26102);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t26235 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26235 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26236){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26236 = meta26236;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26235.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t26235.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26235.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26235.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26235.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26235.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26235.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26235.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26235.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26237){
var self__ = this;
var _26237__$1 = this;
return self__.meta26236;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26237,meta26236__$1){
var self__ = this;
var _26237__$1 = this;
return (new cljs.core.async.t26235(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26236__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t26235.cljs$lang$type = true;

cljs.core.async.t26235.cljs$lang$ctorStr = "cljs.core.async/t26235";

cljs.core.async.t26235.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"cljs.core.async/t26235");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t26235 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t26235(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26236){
return (new cljs.core.async.t26235(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26236));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t26235(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12720__auto___26354 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12720__auto___26354,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (c__12720__auto___26354,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_26307){
var state_val_26308 = (state_26307[(1)]);
if((state_val_26308 === (7))){
var inst_26251 = (state_26307[(7)]);
var inst_26256 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26251);
var state_26307__$1 = state_26307;
var statearr_26309_26355 = state_26307__$1;
(statearr_26309_26355[(2)] = inst_26256);

(statearr_26309_26355[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (20))){
var inst_26266 = (state_26307[(8)]);
var state_26307__$1 = state_26307;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26307__$1,(23),out,inst_26266);
} else {
if((state_val_26308 === (1))){
var inst_26241 = (state_26307[(9)]);
var inst_26241__$1 = calc_state.call(null);
var inst_26242 = cljs.core.seq_QMARK_.call(null,inst_26241__$1);
var state_26307__$1 = (function (){var statearr_26310 = state_26307;
(statearr_26310[(9)] = inst_26241__$1);

return statearr_26310;
})();
if(inst_26242){
var statearr_26311_26356 = state_26307__$1;
(statearr_26311_26356[(1)] = (2));

} else {
var statearr_26312_26357 = state_26307__$1;
(statearr_26312_26357[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (24))){
var inst_26259 = (state_26307[(10)]);
var inst_26251 = inst_26259;
var state_26307__$1 = (function (){var statearr_26313 = state_26307;
(statearr_26313[(7)] = inst_26251);

return statearr_26313;
})();
var statearr_26314_26358 = state_26307__$1;
(statearr_26314_26358[(2)] = null);

(statearr_26314_26358[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (4))){
var inst_26241 = (state_26307[(9)]);
var inst_26247 = (state_26307[(2)]);
var inst_26248 = cljs.core.get.call(null,inst_26247,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26249 = cljs.core.get.call(null,inst_26247,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26250 = cljs.core.get.call(null,inst_26247,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26251 = inst_26241;
var state_26307__$1 = (function (){var statearr_26315 = state_26307;
(statearr_26315[(11)] = inst_26250);

(statearr_26315[(12)] = inst_26248);

(statearr_26315[(13)] = inst_26249);

(statearr_26315[(7)] = inst_26251);

return statearr_26315;
})();
var statearr_26316_26359 = state_26307__$1;
(statearr_26316_26359[(2)] = null);

(statearr_26316_26359[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (15))){
var state_26307__$1 = state_26307;
var statearr_26317_26360 = state_26307__$1;
(statearr_26317_26360[(2)] = null);

(statearr_26317_26360[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (21))){
var inst_26259 = (state_26307[(10)]);
var inst_26251 = inst_26259;
var state_26307__$1 = (function (){var statearr_26318 = state_26307;
(statearr_26318[(7)] = inst_26251);

return statearr_26318;
})();
var statearr_26319_26361 = state_26307__$1;
(statearr_26319_26361[(2)] = null);

(statearr_26319_26361[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (13))){
var inst_26303 = (state_26307[(2)]);
var state_26307__$1 = state_26307;
var statearr_26320_26362 = state_26307__$1;
(statearr_26320_26362[(2)] = inst_26303);

(statearr_26320_26362[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (22))){
var inst_26301 = (state_26307[(2)]);
var state_26307__$1 = state_26307;
var statearr_26321_26363 = state_26307__$1;
(statearr_26321_26363[(2)] = inst_26301);

(statearr_26321_26363[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (6))){
var inst_26305 = (state_26307[(2)]);
var state_26307__$1 = state_26307;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26307__$1,inst_26305);
} else {
if((state_val_26308 === (25))){
var state_26307__$1 = state_26307;
var statearr_26322_26364 = state_26307__$1;
(statearr_26322_26364[(2)] = null);

(statearr_26322_26364[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (17))){
var inst_26281 = (state_26307[(14)]);
var state_26307__$1 = state_26307;
var statearr_26323_26365 = state_26307__$1;
(statearr_26323_26365[(2)] = inst_26281);

(statearr_26323_26365[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (3))){
var inst_26241 = (state_26307[(9)]);
var state_26307__$1 = state_26307;
var statearr_26324_26366 = state_26307__$1;
(statearr_26324_26366[(2)] = inst_26241);

(statearr_26324_26366[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (12))){
var inst_26262 = (state_26307[(15)]);
var inst_26281 = (state_26307[(14)]);
var inst_26267 = (state_26307[(16)]);
var inst_26281__$1 = inst_26262.call(null,inst_26267);
var state_26307__$1 = (function (){var statearr_26325 = state_26307;
(statearr_26325[(14)] = inst_26281__$1);

return statearr_26325;
})();
if(cljs.core.truth_(inst_26281__$1)){
var statearr_26326_26367 = state_26307__$1;
(statearr_26326_26367[(1)] = (17));

} else {
var statearr_26327_26368 = state_26307__$1;
(statearr_26327_26368[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (2))){
var inst_26241 = (state_26307[(9)]);
var inst_26244 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26241);
var state_26307__$1 = state_26307;
var statearr_26328_26369 = state_26307__$1;
(statearr_26328_26369[(2)] = inst_26244);

(statearr_26328_26369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (23))){
var inst_26292 = (state_26307[(2)]);
var state_26307__$1 = state_26307;
if(cljs.core.truth_(inst_26292)){
var statearr_26329_26370 = state_26307__$1;
(statearr_26329_26370[(1)] = (24));

} else {
var statearr_26330_26371 = state_26307__$1;
(statearr_26330_26371[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (19))){
var inst_26289 = (state_26307[(2)]);
var state_26307__$1 = state_26307;
if(cljs.core.truth_(inst_26289)){
var statearr_26331_26372 = state_26307__$1;
(statearr_26331_26372[(1)] = (20));

} else {
var statearr_26332_26373 = state_26307__$1;
(statearr_26332_26373[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (11))){
var inst_26266 = (state_26307[(8)]);
var inst_26272 = (inst_26266 == null);
var state_26307__$1 = state_26307;
if(cljs.core.truth_(inst_26272)){
var statearr_26333_26374 = state_26307__$1;
(statearr_26333_26374[(1)] = (14));

} else {
var statearr_26334_26375 = state_26307__$1;
(statearr_26334_26375[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (9))){
var inst_26259 = (state_26307[(10)]);
var inst_26259__$1 = (state_26307[(2)]);
var inst_26260 = cljs.core.get.call(null,inst_26259__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26261 = cljs.core.get.call(null,inst_26259__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26262 = cljs.core.get.call(null,inst_26259__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var state_26307__$1 = (function (){var statearr_26335 = state_26307;
(statearr_26335[(15)] = inst_26262);

(statearr_26335[(17)] = inst_26261);

(statearr_26335[(10)] = inst_26259__$1);

return statearr_26335;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_26307__$1,(10),inst_26260);
} else {
if((state_val_26308 === (5))){
var inst_26251 = (state_26307[(7)]);
var inst_26254 = cljs.core.seq_QMARK_.call(null,inst_26251);
var state_26307__$1 = state_26307;
if(inst_26254){
var statearr_26336_26376 = state_26307__$1;
(statearr_26336_26376[(1)] = (7));

} else {
var statearr_26337_26377 = state_26307__$1;
(statearr_26337_26377[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (14))){
var inst_26267 = (state_26307[(16)]);
var inst_26274 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26267);
var state_26307__$1 = state_26307;
var statearr_26338_26378 = state_26307__$1;
(statearr_26338_26378[(2)] = inst_26274);

(statearr_26338_26378[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (26))){
var inst_26297 = (state_26307[(2)]);
var state_26307__$1 = state_26307;
var statearr_26339_26379 = state_26307__$1;
(statearr_26339_26379[(2)] = inst_26297);

(statearr_26339_26379[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (16))){
var inst_26277 = (state_26307[(2)]);
var inst_26278 = calc_state.call(null);
var inst_26251 = inst_26278;
var state_26307__$1 = (function (){var statearr_26340 = state_26307;
(statearr_26340[(7)] = inst_26251);

(statearr_26340[(18)] = inst_26277);

return statearr_26340;
})();
var statearr_26341_26380 = state_26307__$1;
(statearr_26341_26380[(2)] = null);

(statearr_26341_26380[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (10))){
var inst_26266 = (state_26307[(8)]);
var inst_26267 = (state_26307[(16)]);
var inst_26265 = (state_26307[(2)]);
var inst_26266__$1 = cljs.core.nth.call(null,inst_26265,(0),null);
var inst_26267__$1 = cljs.core.nth.call(null,inst_26265,(1),null);
var inst_26268 = (inst_26266__$1 == null);
var inst_26269 = cljs.core._EQ_.call(null,inst_26267__$1,change);
var inst_26270 = (inst_26268) || (inst_26269);
var state_26307__$1 = (function (){var statearr_26342 = state_26307;
(statearr_26342[(8)] = inst_26266__$1);

(statearr_26342[(16)] = inst_26267__$1);

return statearr_26342;
})();
if(cljs.core.truth_(inst_26270)){
var statearr_26343_26381 = state_26307__$1;
(statearr_26343_26381[(1)] = (11));

} else {
var statearr_26344_26382 = state_26307__$1;
(statearr_26344_26382[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (18))){
var inst_26262 = (state_26307[(15)]);
var inst_26261 = (state_26307[(17)]);
var inst_26267 = (state_26307[(16)]);
var inst_26284 = cljs.core.empty_QMARK_.call(null,inst_26262);
var inst_26285 = inst_26261.call(null,inst_26267);
var inst_26286 = cljs.core.not.call(null,inst_26285);
var inst_26287 = (inst_26284) && (inst_26286);
var state_26307__$1 = state_26307;
var statearr_26345_26383 = state_26307__$1;
(statearr_26345_26383[(2)] = inst_26287);

(statearr_26345_26383[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26308 === (8))){
var inst_26251 = (state_26307[(7)]);
var state_26307__$1 = state_26307;
var statearr_26346_26384 = state_26307__$1;
(statearr_26346_26384[(2)] = inst_26251);

(statearr_26346_26384[(1)] = (9));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12720__auto___26354,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12664__auto__,c__12720__auto___26354,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_26350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26350[(0)] = state_machine__12665__auto__);

(statearr_26350[(1)] = (1));

return statearr_26350;
});
var state_machine__12665__auto____1 = (function (state_26307){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_26307);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e26351){if((e26351 instanceof Object)){
var ex__12668__auto__ = e26351;
var statearr_26352_26385 = state_26307;
(statearr_26352_26385[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26307);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26386 = state_26307;
state_26307 = G__26386;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_26307){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_26307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(switch__12664__auto__,c__12720__auto___26354,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12722__auto__ = (function (){var statearr_26353 = f__12721__auto__.call(null);
(statearr_26353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto___26354);

return statearr_26353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(c__12720__auto___26354,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

cljs.core.async.Pub = (function (){var obj26388 = {};
return obj26388;
})();

cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__3794__auto__ = p;
if(and__3794__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__3794__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4450__auto__ = (((p == null))?null:p);
return (function (){var or__3806__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4450__auto__)]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){
if((function (){var and__3794__auto__ = p;
if(and__3794__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__3794__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4450__auto__ = (((p == null))?null:p);
return (function (){var or__3806__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4450__auto__)]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){
if((function (){var and__3794__auto__ = p;
if(and__3794__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__3794__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4450__auto__ = (((p == null))?null:p);
return (function (){var or__3806__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4450__auto__)]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){
if((function (){var and__3794__auto__ = p;
if(and__3794__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__3794__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4450__auto__ = (((p == null))?null:p);
return (function (){var or__3806__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4450__auto__)]);
if(or__3806__auto__){
return or__3806__auto__;
} else {
var or__3806__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__3806__auto____$1){
return or__3806__auto____$1;
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;

/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){
return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3806__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3806__auto__)){
return or__3806__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3806__auto__,mults){
return (function (p1__26389_SHARP_){
if(cljs.core.truth_(p1__26389_SHARP_.call(null,topic))){
return p1__26389_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__26389_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3806__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t26512 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t26512 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta26513){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta26513 = meta26513;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t26512.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t26512.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t26512.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4126__auto__)){
var m = temp__4126__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t26512.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t26512.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t26512.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t26512.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t26512.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_26514){
var self__ = this;
var _26514__$1 = this;
return self__.meta26513;
});})(mults,ensure_mult))
;

cljs.core.async.t26512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_26514,meta26513__$1){
var self__ = this;
var _26514__$1 = this;
return (new cljs.core.async.t26512(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta26513__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t26512.cljs$lang$type = true;

cljs.core.async.t26512.cljs$lang$ctorStr = "cljs.core.async/t26512";

cljs.core.async.t26512.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"cljs.core.async/t26512");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t26512 = ((function (mults,ensure_mult){
return (function __GT_t26512(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26513){
return (new cljs.core.async.t26512(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta26513));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t26512(ensure_mult,mults,buf_fn,topic_fn,ch,pub,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12720__auto___26634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12720__auto___26634,mults,ensure_mult,p){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (c__12720__auto___26634,mults,ensure_mult,p){
return (function (state_26586){
var state_val_26587 = (state_26586[(1)]);
if((state_val_26587 === (7))){
var inst_26582 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
var statearr_26588_26635 = state_26586__$1;
(statearr_26588_26635[(2)] = inst_26582);

(statearr_26588_26635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (20))){
var state_26586__$1 = state_26586;
var statearr_26589_26636 = state_26586__$1;
(statearr_26589_26636[(2)] = null);

(statearr_26589_26636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (1))){
var state_26586__$1 = state_26586;
var statearr_26590_26637 = state_26586__$1;
(statearr_26590_26637[(2)] = null);

(statearr_26590_26637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (24))){
var inst_26565 = (state_26586[(7)]);
var inst_26574 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_26565);
var state_26586__$1 = state_26586;
var statearr_26591_26638 = state_26586__$1;
(statearr_26591_26638[(2)] = inst_26574);

(statearr_26591_26638[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (4))){
var inst_26517 = (state_26586[(8)]);
var inst_26517__$1 = (state_26586[(2)]);
var inst_26518 = (inst_26517__$1 == null);
var state_26586__$1 = (function (){var statearr_26592 = state_26586;
(statearr_26592[(8)] = inst_26517__$1);

return statearr_26592;
})();
if(cljs.core.truth_(inst_26518)){
var statearr_26593_26639 = state_26586__$1;
(statearr_26593_26639[(1)] = (5));

} else {
var statearr_26594_26640 = state_26586__$1;
(statearr_26594_26640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (15))){
var inst_26559 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
var statearr_26595_26641 = state_26586__$1;
(statearr_26595_26641[(2)] = inst_26559);

(statearr_26595_26641[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (21))){
var inst_26579 = (state_26586[(2)]);
var state_26586__$1 = (function (){var statearr_26596 = state_26586;
(statearr_26596[(9)] = inst_26579);

return statearr_26596;
})();
var statearr_26597_26642 = state_26586__$1;
(statearr_26597_26642[(2)] = null);

(statearr_26597_26642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (13))){
var inst_26541 = (state_26586[(10)]);
var inst_26543 = cljs.core.chunked_seq_QMARK_.call(null,inst_26541);
var state_26586__$1 = state_26586;
if(inst_26543){
var statearr_26598_26643 = state_26586__$1;
(statearr_26598_26643[(1)] = (16));

} else {
var statearr_26599_26644 = state_26586__$1;
(statearr_26599_26644[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (22))){
var inst_26571 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
if(cljs.core.truth_(inst_26571)){
var statearr_26600_26645 = state_26586__$1;
(statearr_26600_26645[(1)] = (23));

} else {
var statearr_26601_26646 = state_26586__$1;
(statearr_26601_26646[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (6))){
var inst_26567 = (state_26586[(11)]);
var inst_26517 = (state_26586[(8)]);
var inst_26565 = (state_26586[(7)]);
var inst_26565__$1 = topic_fn.call(null,inst_26517);
var inst_26566 = cljs.core.deref.call(null,mults);
var inst_26567__$1 = cljs.core.get.call(null,inst_26566,inst_26565__$1);
var state_26586__$1 = (function (){var statearr_26602 = state_26586;
(statearr_26602[(11)] = inst_26567__$1);

(statearr_26602[(7)] = inst_26565__$1);

return statearr_26602;
})();
if(cljs.core.truth_(inst_26567__$1)){
var statearr_26603_26647 = state_26586__$1;
(statearr_26603_26647[(1)] = (19));

} else {
var statearr_26604_26648 = state_26586__$1;
(statearr_26604_26648[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (25))){
var inst_26576 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
var statearr_26605_26649 = state_26586__$1;
(statearr_26605_26649[(2)] = inst_26576);

(statearr_26605_26649[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (17))){
var inst_26541 = (state_26586[(10)]);
var inst_26550 = cljs.core.first.call(null,inst_26541);
var inst_26551 = cljs.core.async.muxch_STAR_.call(null,inst_26550);
var inst_26552 = cljs.core.async.close_BANG_.call(null,inst_26551);
var inst_26553 = cljs.core.next.call(null,inst_26541);
var inst_26527 = inst_26553;
var inst_26528 = null;
var inst_26529 = (0);
var inst_26530 = (0);
var state_26586__$1 = (function (){var statearr_26606 = state_26586;
(statearr_26606[(12)] = inst_26527);

(statearr_26606[(13)] = inst_26530);

(statearr_26606[(14)] = inst_26528);

(statearr_26606[(15)] = inst_26552);

(statearr_26606[(16)] = inst_26529);

return statearr_26606;
})();
var statearr_26607_26650 = state_26586__$1;
(statearr_26607_26650[(2)] = null);

(statearr_26607_26650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (3))){
var inst_26584 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26586__$1,inst_26584);
} else {
if((state_val_26587 === (12))){
var inst_26561 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
var statearr_26608_26651 = state_26586__$1;
(statearr_26608_26651[(2)] = inst_26561);

(statearr_26608_26651[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (2))){
var state_26586__$1 = state_26586;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26586__$1,(4),ch);
} else {
if((state_val_26587 === (23))){
var state_26586__$1 = state_26586;
var statearr_26609_26652 = state_26586__$1;
(statearr_26609_26652[(2)] = null);

(statearr_26609_26652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (19))){
var inst_26567 = (state_26586[(11)]);
var inst_26517 = (state_26586[(8)]);
var inst_26569 = cljs.core.async.muxch_STAR_.call(null,inst_26567);
var state_26586__$1 = state_26586;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26586__$1,(22),inst_26569,inst_26517);
} else {
if((state_val_26587 === (11))){
var inst_26527 = (state_26586[(12)]);
var inst_26541 = (state_26586[(10)]);
var inst_26541__$1 = cljs.core.seq.call(null,inst_26527);
var state_26586__$1 = (function (){var statearr_26610 = state_26586;
(statearr_26610[(10)] = inst_26541__$1);

return statearr_26610;
})();
if(inst_26541__$1){
var statearr_26611_26653 = state_26586__$1;
(statearr_26611_26653[(1)] = (13));

} else {
var statearr_26612_26654 = state_26586__$1;
(statearr_26612_26654[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (9))){
var inst_26563 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
var statearr_26613_26655 = state_26586__$1;
(statearr_26613_26655[(2)] = inst_26563);

(statearr_26613_26655[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (5))){
var inst_26524 = cljs.core.deref.call(null,mults);
var inst_26525 = cljs.core.vals.call(null,inst_26524);
var inst_26526 = cljs.core.seq.call(null,inst_26525);
var inst_26527 = inst_26526;
var inst_26528 = null;
var inst_26529 = (0);
var inst_26530 = (0);
var state_26586__$1 = (function (){var statearr_26614 = state_26586;
(statearr_26614[(12)] = inst_26527);

(statearr_26614[(13)] = inst_26530);

(statearr_26614[(14)] = inst_26528);

(statearr_26614[(16)] = inst_26529);

return statearr_26614;
})();
var statearr_26615_26656 = state_26586__$1;
(statearr_26615_26656[(2)] = null);

(statearr_26615_26656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (14))){
var state_26586__$1 = state_26586;
var statearr_26619_26657 = state_26586__$1;
(statearr_26619_26657[(2)] = null);

(statearr_26619_26657[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (16))){
var inst_26541 = (state_26586[(10)]);
var inst_26545 = cljs.core.chunk_first.call(null,inst_26541);
var inst_26546 = cljs.core.chunk_rest.call(null,inst_26541);
var inst_26547 = cljs.core.count.call(null,inst_26545);
var inst_26527 = inst_26546;
var inst_26528 = inst_26545;
var inst_26529 = inst_26547;
var inst_26530 = (0);
var state_26586__$1 = (function (){var statearr_26620 = state_26586;
(statearr_26620[(12)] = inst_26527);

(statearr_26620[(13)] = inst_26530);

(statearr_26620[(14)] = inst_26528);

(statearr_26620[(16)] = inst_26529);

return statearr_26620;
})();
var statearr_26621_26658 = state_26586__$1;
(statearr_26621_26658[(2)] = null);

(statearr_26621_26658[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (10))){
var inst_26527 = (state_26586[(12)]);
var inst_26530 = (state_26586[(13)]);
var inst_26528 = (state_26586[(14)]);
var inst_26529 = (state_26586[(16)]);
var inst_26535 = cljs.core._nth.call(null,inst_26528,inst_26530);
var inst_26536 = cljs.core.async.muxch_STAR_.call(null,inst_26535);
var inst_26537 = cljs.core.async.close_BANG_.call(null,inst_26536);
var inst_26538 = (inst_26530 + (1));
var tmp26616 = inst_26527;
var tmp26617 = inst_26528;
var tmp26618 = inst_26529;
var inst_26527__$1 = tmp26616;
var inst_26528__$1 = tmp26617;
var inst_26529__$1 = tmp26618;
var inst_26530__$1 = inst_26538;
var state_26586__$1 = (function (){var statearr_26622 = state_26586;
(statearr_26622[(17)] = inst_26537);

(statearr_26622[(12)] = inst_26527__$1);

(statearr_26622[(13)] = inst_26530__$1);

(statearr_26622[(14)] = inst_26528__$1);

(statearr_26622[(16)] = inst_26529__$1);

return statearr_26622;
})();
var statearr_26623_26659 = state_26586__$1;
(statearr_26623_26659[(2)] = null);

(statearr_26623_26659[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (18))){
var inst_26556 = (state_26586[(2)]);
var state_26586__$1 = state_26586;
var statearr_26624_26660 = state_26586__$1;
(statearr_26624_26660[(2)] = inst_26556);

(statearr_26624_26660[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26587 === (8))){
var inst_26530 = (state_26586[(13)]);
var inst_26529 = (state_26586[(16)]);
var inst_26532 = (inst_26530 < inst_26529);
var inst_26533 = inst_26532;
var state_26586__$1 = state_26586;
if(cljs.core.truth_(inst_26533)){
var statearr_26625_26661 = state_26586__$1;
(statearr_26625_26661[(1)] = (10));

} else {
var statearr_26626_26662 = state_26586__$1;
(statearr_26626_26662[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12720__auto___26634,mults,ensure_mult,p))
;
return ((function (switch__12664__auto__,c__12720__auto___26634,mults,ensure_mult,p){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_26630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26630[(0)] = state_machine__12665__auto__);

(statearr_26630[(1)] = (1));

return statearr_26630;
});
var state_machine__12665__auto____1 = (function (state_26586){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_26586);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e26631){if((e26631 instanceof Object)){
var ex__12668__auto__ = e26631;
var statearr_26632_26663 = state_26586;
(statearr_26632_26663[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26586);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26664 = state_26586;
state_26586 = G__26664;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_26586){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_26586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(switch__12664__auto__,c__12720__auto___26634,mults,ensure_mult,p))
})();
var state__12722__auto__ = (function (){var statearr_26633 = f__12721__auto__.call(null);
(statearr_26633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto___26634);

return statearr_26633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(c__12720__auto___26634,mults,ensure_mult,p))
);


return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){
return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){
return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__12720__auto___26801 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12720__auto___26801,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (c__12720__auto___26801,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_26771){
var state_val_26772 = (state_26771[(1)]);
if((state_val_26772 === (7))){
var state_26771__$1 = state_26771;
var statearr_26773_26802 = state_26771__$1;
(statearr_26773_26802[(2)] = null);

(statearr_26773_26802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (1))){
var state_26771__$1 = state_26771;
var statearr_26774_26803 = state_26771__$1;
(statearr_26774_26803[(2)] = null);

(statearr_26774_26803[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (4))){
var inst_26735 = (state_26771[(7)]);
var inst_26737 = (inst_26735 < cnt);
var state_26771__$1 = state_26771;
if(cljs.core.truth_(inst_26737)){
var statearr_26775_26804 = state_26771__$1;
(statearr_26775_26804[(1)] = (6));

} else {
var statearr_26776_26805 = state_26771__$1;
(statearr_26776_26805[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (15))){
var inst_26767 = (state_26771[(2)]);
var state_26771__$1 = state_26771;
var statearr_26777_26806 = state_26771__$1;
(statearr_26777_26806[(2)] = inst_26767);

(statearr_26777_26806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (13))){
var inst_26760 = cljs.core.async.close_BANG_.call(null,out);
var state_26771__$1 = state_26771;
var statearr_26778_26807 = state_26771__$1;
(statearr_26778_26807[(2)] = inst_26760);

(statearr_26778_26807[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (6))){
var state_26771__$1 = state_26771;
var statearr_26779_26808 = state_26771__$1;
(statearr_26779_26808[(2)] = null);

(statearr_26779_26808[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (3))){
var inst_26769 = (state_26771[(2)]);
var state_26771__$1 = state_26771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26771__$1,inst_26769);
} else {
if((state_val_26772 === (12))){
var inst_26757 = (state_26771[(8)]);
var inst_26757__$1 = (state_26771[(2)]);
var inst_26758 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_26757__$1);
var state_26771__$1 = (function (){var statearr_26780 = state_26771;
(statearr_26780[(8)] = inst_26757__$1);

return statearr_26780;
})();
if(cljs.core.truth_(inst_26758)){
var statearr_26781_26809 = state_26771__$1;
(statearr_26781_26809[(1)] = (13));

} else {
var statearr_26782_26810 = state_26771__$1;
(statearr_26782_26810[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (2))){
var inst_26734 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_26735 = (0);
var state_26771__$1 = (function (){var statearr_26783 = state_26771;
(statearr_26783[(7)] = inst_26735);

(statearr_26783[(9)] = inst_26734);

return statearr_26783;
})();
var statearr_26784_26811 = state_26771__$1;
(statearr_26784_26811[(2)] = null);

(statearr_26784_26811[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (11))){
var inst_26735 = (state_26771[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_26771,(10),Object,null,(9));
var inst_26744 = chs__$1.call(null,inst_26735);
var inst_26745 = done.call(null,inst_26735);
var inst_26746 = cljs.core.async.take_BANG_.call(null,inst_26744,inst_26745);
var state_26771__$1 = state_26771;
var statearr_26785_26812 = state_26771__$1;
(statearr_26785_26812[(2)] = inst_26746);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26771__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (9))){
var inst_26735 = (state_26771[(7)]);
var inst_26748 = (state_26771[(2)]);
var inst_26749 = (inst_26735 + (1));
var inst_26735__$1 = inst_26749;
var state_26771__$1 = (function (){var statearr_26786 = state_26771;
(statearr_26786[(7)] = inst_26735__$1);

(statearr_26786[(10)] = inst_26748);

return statearr_26786;
})();
var statearr_26787_26813 = state_26771__$1;
(statearr_26787_26813[(2)] = null);

(statearr_26787_26813[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (5))){
var inst_26755 = (state_26771[(2)]);
var state_26771__$1 = (function (){var statearr_26788 = state_26771;
(statearr_26788[(11)] = inst_26755);

return statearr_26788;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26771__$1,(12),dchan);
} else {
if((state_val_26772 === (14))){
var inst_26757 = (state_26771[(8)]);
var inst_26762 = cljs.core.apply.call(null,f,inst_26757);
var state_26771__$1 = state_26771;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26771__$1,(16),out,inst_26762);
} else {
if((state_val_26772 === (16))){
var inst_26764 = (state_26771[(2)]);
var state_26771__$1 = (function (){var statearr_26789 = state_26771;
(statearr_26789[(12)] = inst_26764);

return statearr_26789;
})();
var statearr_26790_26814 = state_26771__$1;
(statearr_26790_26814[(2)] = null);

(statearr_26790_26814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (10))){
var inst_26739 = (state_26771[(2)]);
var inst_26740 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_26771__$1 = (function (){var statearr_26791 = state_26771;
(statearr_26791[(13)] = inst_26739);

return statearr_26791;
})();
var statearr_26792_26815 = state_26771__$1;
(statearr_26792_26815[(2)] = inst_26740);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26771__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (8))){
var inst_26753 = (state_26771[(2)]);
var state_26771__$1 = state_26771;
var statearr_26793_26816 = state_26771__$1;
(statearr_26793_26816[(2)] = inst_26753);

(statearr_26793_26816[(1)] = (5));


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
}
}
}
}
}
}
}
}
}
});})(c__12720__auto___26801,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12664__auto__,c__12720__auto___26801,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_26797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26797[(0)] = state_machine__12665__auto__);

(statearr_26797[(1)] = (1));

return statearr_26797;
});
var state_machine__12665__auto____1 = (function (state_26771){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_26771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e26798){if((e26798 instanceof Object)){
var ex__12668__auto__ = e26798;
var statearr_26799_26817 = state_26771;
(statearr_26799_26817[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26818 = state_26771;
state_26771 = G__26818;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_26771){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_26771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(switch__12664__auto__,c__12720__auto___26801,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12722__auto__ = (function (){var statearr_26800 = f__12721__auto__.call(null);
(statearr_26800[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto___26801);

return statearr_26800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(c__12720__auto___26801,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){
return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12720__auto___26926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12720__auto___26926,out){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (c__12720__auto___26926,out){
return (function (state_26902){
var state_val_26903 = (state_26902[(1)]);
if((state_val_26903 === (7))){
var inst_26882 = (state_26902[(7)]);
var inst_26881 = (state_26902[(8)]);
var inst_26881__$1 = (state_26902[(2)]);
var inst_26882__$1 = cljs.core.nth.call(null,inst_26881__$1,(0),null);
var inst_26883 = cljs.core.nth.call(null,inst_26881__$1,(1),null);
var inst_26884 = (inst_26882__$1 == null);
var state_26902__$1 = (function (){var statearr_26904 = state_26902;
(statearr_26904[(9)] = inst_26883);

(statearr_26904[(7)] = inst_26882__$1);

(statearr_26904[(8)] = inst_26881__$1);

return statearr_26904;
})();
if(cljs.core.truth_(inst_26884)){
var statearr_26905_26927 = state_26902__$1;
(statearr_26905_26927[(1)] = (8));

} else {
var statearr_26906_26928 = state_26902__$1;
(statearr_26906_26928[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (1))){
var inst_26873 = cljs.core.vec.call(null,chs);
var inst_26874 = inst_26873;
var state_26902__$1 = (function (){var statearr_26907 = state_26902;
(statearr_26907[(10)] = inst_26874);

return statearr_26907;
})();
var statearr_26908_26929 = state_26902__$1;
(statearr_26908_26929[(2)] = null);

(statearr_26908_26929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (4))){
var inst_26874 = (state_26902[(10)]);
var state_26902__$1 = state_26902;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26902__$1,(7),inst_26874);
} else {
if((state_val_26903 === (6))){
var inst_26898 = (state_26902[(2)]);
var state_26902__$1 = state_26902;
var statearr_26909_26930 = state_26902__$1;
(statearr_26909_26930[(2)] = inst_26898);

(statearr_26909_26930[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (3))){
var inst_26900 = (state_26902[(2)]);
var state_26902__$1 = state_26902;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26902__$1,inst_26900);
} else {
if((state_val_26903 === (2))){
var inst_26874 = (state_26902[(10)]);
var inst_26876 = cljs.core.count.call(null,inst_26874);
var inst_26877 = (inst_26876 > (0));
var state_26902__$1 = state_26902;
if(cljs.core.truth_(inst_26877)){
var statearr_26911_26931 = state_26902__$1;
(statearr_26911_26931[(1)] = (4));

} else {
var statearr_26912_26932 = state_26902__$1;
(statearr_26912_26932[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (11))){
var inst_26874 = (state_26902[(10)]);
var inst_26891 = (state_26902[(2)]);
var tmp26910 = inst_26874;
var inst_26874__$1 = tmp26910;
var state_26902__$1 = (function (){var statearr_26913 = state_26902;
(statearr_26913[(11)] = inst_26891);

(statearr_26913[(10)] = inst_26874__$1);

return statearr_26913;
})();
var statearr_26914_26933 = state_26902__$1;
(statearr_26914_26933[(2)] = null);

(statearr_26914_26933[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (9))){
var inst_26882 = (state_26902[(7)]);
var state_26902__$1 = state_26902;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26902__$1,(11),out,inst_26882);
} else {
if((state_val_26903 === (5))){
var inst_26896 = cljs.core.async.close_BANG_.call(null,out);
var state_26902__$1 = state_26902;
var statearr_26915_26934 = state_26902__$1;
(statearr_26915_26934[(2)] = inst_26896);

(statearr_26915_26934[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (10))){
var inst_26894 = (state_26902[(2)]);
var state_26902__$1 = state_26902;
var statearr_26916_26935 = state_26902__$1;
(statearr_26916_26935[(2)] = inst_26894);

(statearr_26916_26935[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26903 === (8))){
var inst_26883 = (state_26902[(9)]);
var inst_26874 = (state_26902[(10)]);
var inst_26882 = (state_26902[(7)]);
var inst_26881 = (state_26902[(8)]);
var inst_26886 = (function (){var c = inst_26883;
var v = inst_26882;
var vec__26879 = inst_26881;
var cs = inst_26874;
return ((function (c,v,vec__26879,cs,inst_26883,inst_26874,inst_26882,inst_26881,state_val_26903,c__12720__auto___26926,out){
return (function (p1__26819_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__26819_SHARP_);
});
;})(c,v,vec__26879,cs,inst_26883,inst_26874,inst_26882,inst_26881,state_val_26903,c__12720__auto___26926,out))
})();
var inst_26887 = cljs.core.filterv.call(null,inst_26886,inst_26874);
var inst_26874__$1 = inst_26887;
var state_26902__$1 = (function (){var statearr_26917 = state_26902;
(statearr_26917[(10)] = inst_26874__$1);

return statearr_26917;
})();
var statearr_26918_26936 = state_26902__$1;
(statearr_26918_26936[(2)] = null);

(statearr_26918_26936[(1)] = (2));


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
}
}
}
}
});})(c__12720__auto___26926,out))
;
return ((function (switch__12664__auto__,c__12720__auto___26926,out){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_26922 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26922[(0)] = state_machine__12665__auto__);

(statearr_26922[(1)] = (1));

return statearr_26922;
});
var state_machine__12665__auto____1 = (function (state_26902){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_26902);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e26923){if((e26923 instanceof Object)){
var ex__12668__auto__ = e26923;
var statearr_26924_26937 = state_26902;
(statearr_26924_26937[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26902);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26938 = state_26902;
state_26902 = G__26938;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_26902){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_26902);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(switch__12664__auto__,c__12720__auto___26926,out))
})();
var state__12722__auto__ = (function (){var statearr_26925 = f__12721__auto__.call(null);
(statearr_26925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto___26926);

return statearr_26925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(c__12720__auto___26926,out))
);


return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){
return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12720__auto___27031 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12720__auto___27031,out){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (c__12720__auto___27031,out){
return (function (state_27008){
var state_val_27009 = (state_27008[(1)]);
if((state_val_27009 === (7))){
var inst_26990 = (state_27008[(7)]);
var inst_26990__$1 = (state_27008[(2)]);
var inst_26991 = (inst_26990__$1 == null);
var inst_26992 = cljs.core.not.call(null,inst_26991);
var state_27008__$1 = (function (){var statearr_27010 = state_27008;
(statearr_27010[(7)] = inst_26990__$1);

return statearr_27010;
})();
if(inst_26992){
var statearr_27011_27032 = state_27008__$1;
(statearr_27011_27032[(1)] = (8));

} else {
var statearr_27012_27033 = state_27008__$1;
(statearr_27012_27033[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27009 === (1))){
var inst_26985 = (0);
var state_27008__$1 = (function (){var statearr_27013 = state_27008;
(statearr_27013[(8)] = inst_26985);

return statearr_27013;
})();
var statearr_27014_27034 = state_27008__$1;
(statearr_27014_27034[(2)] = null);

(statearr_27014_27034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27009 === (4))){
var state_27008__$1 = state_27008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27008__$1,(7),ch);
} else {
if((state_val_27009 === (6))){
var inst_27003 = (state_27008[(2)]);
var state_27008__$1 = state_27008;
var statearr_27015_27035 = state_27008__$1;
(statearr_27015_27035[(2)] = inst_27003);

(statearr_27015_27035[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27009 === (3))){
var inst_27005 = (state_27008[(2)]);
var inst_27006 = cljs.core.async.close_BANG_.call(null,out);
var state_27008__$1 = (function (){var statearr_27016 = state_27008;
(statearr_27016[(9)] = inst_27005);

return statearr_27016;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27008__$1,inst_27006);
} else {
if((state_val_27009 === (2))){
var inst_26985 = (state_27008[(8)]);
var inst_26987 = (inst_26985 < n);
var state_27008__$1 = state_27008;
if(cljs.core.truth_(inst_26987)){
var statearr_27017_27036 = state_27008__$1;
(statearr_27017_27036[(1)] = (4));

} else {
var statearr_27018_27037 = state_27008__$1;
(statearr_27018_27037[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27009 === (11))){
var inst_26985 = (state_27008[(8)]);
var inst_26995 = (state_27008[(2)]);
var inst_26996 = (inst_26985 + (1));
var inst_26985__$1 = inst_26996;
var state_27008__$1 = (function (){var statearr_27019 = state_27008;
(statearr_27019[(10)] = inst_26995);

(statearr_27019[(8)] = inst_26985__$1);

return statearr_27019;
})();
var statearr_27020_27038 = state_27008__$1;
(statearr_27020_27038[(2)] = null);

(statearr_27020_27038[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27009 === (9))){
var state_27008__$1 = state_27008;
var statearr_27021_27039 = state_27008__$1;
(statearr_27021_27039[(2)] = null);

(statearr_27021_27039[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27009 === (5))){
var state_27008__$1 = state_27008;
var statearr_27022_27040 = state_27008__$1;
(statearr_27022_27040[(2)] = null);

(statearr_27022_27040[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27009 === (10))){
var inst_27000 = (state_27008[(2)]);
var state_27008__$1 = state_27008;
var statearr_27023_27041 = state_27008__$1;
(statearr_27023_27041[(2)] = inst_27000);

(statearr_27023_27041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27009 === (8))){
var inst_26990 = (state_27008[(7)]);
var state_27008__$1 = state_27008;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27008__$1,(11),out,inst_26990);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12720__auto___27031,out))
;
return ((function (switch__12664__auto__,c__12720__auto___27031,out){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_27027 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27027[(0)] = state_machine__12665__auto__);

(statearr_27027[(1)] = (1));

return statearr_27027;
});
var state_machine__12665__auto____1 = (function (state_27008){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_27008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e27028){if((e27028 instanceof Object)){
var ex__12668__auto__ = e27028;
var statearr_27029_27042 = state_27008;
(statearr_27029_27042[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27028;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27043 = state_27008;
state_27008 = G__27043;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_27008){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_27008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(switch__12664__auto__,c__12720__auto___27031,out))
})();
var state__12722__auto__ = (function (){var statearr_27030 = f__12721__auto__.call(null);
(statearr_27030[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto___27031);

return statearr_27030;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(c__12720__auto___27031,out))
);


return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){
if(typeof cljs.core.async.t27051 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27051 = (function (ch,f,map_LT_,meta27052){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27052 = meta27052;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27051.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27051.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t27051.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27051.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t27054 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27054 = (function (fn1,_,meta27052,map_LT_,f,ch,meta27055){
this.fn1 = fn1;
this._ = _;
this.meta27052 = meta27052;
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27055 = meta27055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27054.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t27054.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t27054.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27044_SHARP_){
return f1.call(null,(((p1__27044_SHARP_ == null))?null:self__.f.call(null,p1__27044_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t27054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27056){
var self__ = this;
var _27056__$1 = this;
return self__.meta27055;
});})(___$1))
;

cljs.core.async.t27054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27056,meta27055__$1){
var self__ = this;
var _27056__$1 = this;
return (new cljs.core.async.t27054(self__.fn1,self__._,self__.meta27052,self__.map_LT_,self__.f,self__.ch,meta27055__$1));
});})(___$1))
;

cljs.core.async.t27054.cljs$lang$type = true;

cljs.core.async.t27054.cljs$lang$ctorStr = "cljs.core.async/t27054";

cljs.core.async.t27054.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"cljs.core.async/t27054");
});})(___$1))
;

cljs.core.async.__GT_t27054 = ((function (___$1){
return (function __GT_t27054(fn1__$1,___$2,meta27052__$1,map_LT___$1,f__$1,ch__$1,meta27055){
return (new cljs.core.async.t27054(fn1__$1,___$2,meta27052__$1,map_LT___$1,f__$1,ch__$1,meta27055));
});})(___$1))
;

}

return (new cljs.core.async.t27054(fn1,___$1,self__.meta27052,self__.map_LT_,self__.f,self__.ch,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3794__auto__ = ret;
if(cljs.core.truth_(and__3794__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3794__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t27051.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27051.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27051.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27051.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27053){
var self__ = this;
var _27053__$1 = this;
return self__.meta27052;
});

cljs.core.async.t27051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27053,meta27052__$1){
var self__ = this;
var _27053__$1 = this;
return (new cljs.core.async.t27051(self__.ch,self__.f,self__.map_LT_,meta27052__$1));
});

cljs.core.async.t27051.cljs$lang$type = true;

cljs.core.async.t27051.cljs$lang$ctorStr = "cljs.core.async/t27051";

cljs.core.async.t27051.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"cljs.core.async/t27051");
});

cljs.core.async.__GT_t27051 = (function __GT_t27051(ch__$1,f__$1,map_LT___$1,meta27052){
return (new cljs.core.async.t27051(ch__$1,f__$1,map_LT___$1,meta27052));
});

}

return (new cljs.core.async.t27051(ch,f,map_LT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){
if(typeof cljs.core.async.t27060 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27060 = (function (ch,f,map_GT_,meta27061){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27061 = meta27061;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27060.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27060.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t27060.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27060.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27060.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27060.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27062){
var self__ = this;
var _27062__$1 = this;
return self__.meta27061;
});

cljs.core.async.t27060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27062,meta27061__$1){
var self__ = this;
var _27062__$1 = this;
return (new cljs.core.async.t27060(self__.ch,self__.f,self__.map_GT_,meta27061__$1));
});

cljs.core.async.t27060.cljs$lang$type = true;

cljs.core.async.t27060.cljs$lang$ctorStr = "cljs.core.async/t27060";

cljs.core.async.t27060.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"cljs.core.async/t27060");
});

cljs.core.async.__GT_t27060 = (function __GT_t27060(ch__$1,f__$1,map_GT___$1,meta27061){
return (new cljs.core.async.t27060(ch__$1,f__$1,map_GT___$1,meta27061));
});

}

return (new cljs.core.async.t27060(ch,f,map_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){
if(typeof cljs.core.async.t27066 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t27066 = (function (ch,p,filter_GT_,meta27067){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27067 = meta27067;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27066.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t27066.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t27066.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t27066.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t27066.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t27066.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t27066.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t27066.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27068){
var self__ = this;
var _27068__$1 = this;
return self__.meta27067;
});

cljs.core.async.t27066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27068,meta27067__$1){
var self__ = this;
var _27068__$1 = this;
return (new cljs.core.async.t27066(self__.ch,self__.p,self__.filter_GT_,meta27067__$1));
});

cljs.core.async.t27066.cljs$lang$type = true;

cljs.core.async.t27066.cljs$lang$ctorStr = "cljs.core.async/t27066";

cljs.core.async.t27066.cljs$lang$ctorPrWriter = (function (this__4393__auto__,writer__4394__auto__,opt__4395__auto__){
return cljs.core._write.call(null,writer__4394__auto__,"cljs.core.async/t27066");
});

cljs.core.async.__GT_t27066 = (function __GT_t27066(ch__$1,p__$1,filter_GT___$1,meta27067){
return (new cljs.core.async.t27066(ch__$1,p__$1,filter_GT___$1,meta27067));
});

}

return (new cljs.core.async.t27066(ch,p,filter_GT_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){
return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12720__auto___27151 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12720__auto___27151,out){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (c__12720__auto___27151,out){
return (function (state_27130){
var state_val_27131 = (state_27130[(1)]);
if((state_val_27131 === (7))){
var inst_27126 = (state_27130[(2)]);
var state_27130__$1 = state_27130;
var statearr_27132_27152 = state_27130__$1;
(statearr_27132_27152[(2)] = inst_27126);

(statearr_27132_27152[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (1))){
var state_27130__$1 = state_27130;
var statearr_27133_27153 = state_27130__$1;
(statearr_27133_27153[(2)] = null);

(statearr_27133_27153[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (4))){
var inst_27112 = (state_27130[(7)]);
var inst_27112__$1 = (state_27130[(2)]);
var inst_27113 = (inst_27112__$1 == null);
var state_27130__$1 = (function (){var statearr_27134 = state_27130;
(statearr_27134[(7)] = inst_27112__$1);

return statearr_27134;
})();
if(cljs.core.truth_(inst_27113)){
var statearr_27135_27154 = state_27130__$1;
(statearr_27135_27154[(1)] = (5));

} else {
var statearr_27136_27155 = state_27130__$1;
(statearr_27136_27155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (6))){
var inst_27112 = (state_27130[(7)]);
var inst_27117 = p.call(null,inst_27112);
var state_27130__$1 = state_27130;
if(cljs.core.truth_(inst_27117)){
var statearr_27137_27156 = state_27130__$1;
(statearr_27137_27156[(1)] = (8));

} else {
var statearr_27138_27157 = state_27130__$1;
(statearr_27138_27157[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (3))){
var inst_27128 = (state_27130[(2)]);
var state_27130__$1 = state_27130;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27130__$1,inst_27128);
} else {
if((state_val_27131 === (2))){
var state_27130__$1 = state_27130;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27130__$1,(4),ch);
} else {
if((state_val_27131 === (11))){
var inst_27120 = (state_27130[(2)]);
var state_27130__$1 = state_27130;
var statearr_27139_27158 = state_27130__$1;
(statearr_27139_27158[(2)] = inst_27120);

(statearr_27139_27158[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (9))){
var state_27130__$1 = state_27130;
var statearr_27140_27159 = state_27130__$1;
(statearr_27140_27159[(2)] = null);

(statearr_27140_27159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (5))){
var inst_27115 = cljs.core.async.close_BANG_.call(null,out);
var state_27130__$1 = state_27130;
var statearr_27141_27160 = state_27130__$1;
(statearr_27141_27160[(2)] = inst_27115);

(statearr_27141_27160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (10))){
var inst_27123 = (state_27130[(2)]);
var state_27130__$1 = (function (){var statearr_27142 = state_27130;
(statearr_27142[(8)] = inst_27123);

return statearr_27142;
})();
var statearr_27143_27161 = state_27130__$1;
(statearr_27143_27161[(2)] = null);

(statearr_27143_27161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27131 === (8))){
var inst_27112 = (state_27130[(7)]);
var state_27130__$1 = state_27130;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27130__$1,(11),out,inst_27112);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__12720__auto___27151,out))
;
return ((function (switch__12664__auto__,c__12720__auto___27151,out){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_27147 = [null,null,null,null,null,null,null,null,null];
(statearr_27147[(0)] = state_machine__12665__auto__);

(statearr_27147[(1)] = (1));

return statearr_27147;
});
var state_machine__12665__auto____1 = (function (state_27130){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_27130);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e27148){if((e27148 instanceof Object)){
var ex__12668__auto__ = e27148;
var statearr_27149_27162 = state_27130;
(statearr_27149_27162[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27130);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27148;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27163 = state_27130;
state_27130 = G__27163;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_27130){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_27130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(switch__12664__auto__,c__12720__auto___27151,out))
})();
var state__12722__auto__ = (function (){var statearr_27150 = f__12721__auto__.call(null);
(statearr_27150[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto___27151);

return statearr_27150;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(c__12720__auto___27151,out))
);


return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){
return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){
var c__12720__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12720__auto__){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (c__12720__auto__){
return (function (state_27329){
var state_val_27330 = (state_27329[(1)]);
if((state_val_27330 === (7))){
var inst_27325 = (state_27329[(2)]);
var state_27329__$1 = state_27329;
var statearr_27331_27372 = state_27329__$1;
(statearr_27331_27372[(2)] = inst_27325);

(statearr_27331_27372[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (20))){
var inst_27295 = (state_27329[(7)]);
var inst_27306 = (state_27329[(2)]);
var inst_27307 = cljs.core.next.call(null,inst_27295);
var inst_27281 = inst_27307;
var inst_27282 = null;
var inst_27283 = (0);
var inst_27284 = (0);
var state_27329__$1 = (function (){var statearr_27332 = state_27329;
(statearr_27332[(8)] = inst_27283);

(statearr_27332[(9)] = inst_27282);

(statearr_27332[(10)] = inst_27281);

(statearr_27332[(11)] = inst_27306);

(statearr_27332[(12)] = inst_27284);

return statearr_27332;
})();
var statearr_27333_27373 = state_27329__$1;
(statearr_27333_27373[(2)] = null);

(statearr_27333_27373[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (1))){
var state_27329__$1 = state_27329;
var statearr_27334_27374 = state_27329__$1;
(statearr_27334_27374[(2)] = null);

(statearr_27334_27374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (4))){
var inst_27270 = (state_27329[(13)]);
var inst_27270__$1 = (state_27329[(2)]);
var inst_27271 = (inst_27270__$1 == null);
var state_27329__$1 = (function (){var statearr_27335 = state_27329;
(statearr_27335[(13)] = inst_27270__$1);

return statearr_27335;
})();
if(cljs.core.truth_(inst_27271)){
var statearr_27336_27375 = state_27329__$1;
(statearr_27336_27375[(1)] = (5));

} else {
var statearr_27337_27376 = state_27329__$1;
(statearr_27337_27376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (15))){
var state_27329__$1 = state_27329;
var statearr_27341_27377 = state_27329__$1;
(statearr_27341_27377[(2)] = null);

(statearr_27341_27377[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (21))){
var state_27329__$1 = state_27329;
var statearr_27342_27378 = state_27329__$1;
(statearr_27342_27378[(2)] = null);

(statearr_27342_27378[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (13))){
var inst_27283 = (state_27329[(8)]);
var inst_27282 = (state_27329[(9)]);
var inst_27281 = (state_27329[(10)]);
var inst_27284 = (state_27329[(12)]);
var inst_27291 = (state_27329[(2)]);
var inst_27292 = (inst_27284 + (1));
var tmp27338 = inst_27283;
var tmp27339 = inst_27282;
var tmp27340 = inst_27281;
var inst_27281__$1 = tmp27340;
var inst_27282__$1 = tmp27339;
var inst_27283__$1 = tmp27338;
var inst_27284__$1 = inst_27292;
var state_27329__$1 = (function (){var statearr_27343 = state_27329;
(statearr_27343[(8)] = inst_27283__$1);

(statearr_27343[(14)] = inst_27291);

(statearr_27343[(9)] = inst_27282__$1);

(statearr_27343[(10)] = inst_27281__$1);

(statearr_27343[(12)] = inst_27284__$1);

return statearr_27343;
})();
var statearr_27344_27379 = state_27329__$1;
(statearr_27344_27379[(2)] = null);

(statearr_27344_27379[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (22))){
var state_27329__$1 = state_27329;
var statearr_27345_27380 = state_27329__$1;
(statearr_27345_27380[(2)] = null);

(statearr_27345_27380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (6))){
var inst_27270 = (state_27329[(13)]);
var inst_27279 = f.call(null,inst_27270);
var inst_27280 = cljs.core.seq.call(null,inst_27279);
var inst_27281 = inst_27280;
var inst_27282 = null;
var inst_27283 = (0);
var inst_27284 = (0);
var state_27329__$1 = (function (){var statearr_27346 = state_27329;
(statearr_27346[(8)] = inst_27283);

(statearr_27346[(9)] = inst_27282);

(statearr_27346[(10)] = inst_27281);

(statearr_27346[(12)] = inst_27284);

return statearr_27346;
})();
var statearr_27347_27381 = state_27329__$1;
(statearr_27347_27381[(2)] = null);

(statearr_27347_27381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (17))){
var inst_27295 = (state_27329[(7)]);
var inst_27299 = cljs.core.chunk_first.call(null,inst_27295);
var inst_27300 = cljs.core.chunk_rest.call(null,inst_27295);
var inst_27301 = cljs.core.count.call(null,inst_27299);
var inst_27281 = inst_27300;
var inst_27282 = inst_27299;
var inst_27283 = inst_27301;
var inst_27284 = (0);
var state_27329__$1 = (function (){var statearr_27348 = state_27329;
(statearr_27348[(8)] = inst_27283);

(statearr_27348[(9)] = inst_27282);

(statearr_27348[(10)] = inst_27281);

(statearr_27348[(12)] = inst_27284);

return statearr_27348;
})();
var statearr_27349_27382 = state_27329__$1;
(statearr_27349_27382[(2)] = null);

(statearr_27349_27382[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (3))){
var inst_27327 = (state_27329[(2)]);
var state_27329__$1 = state_27329;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27329__$1,inst_27327);
} else {
if((state_val_27330 === (12))){
var inst_27315 = (state_27329[(2)]);
var state_27329__$1 = state_27329;
var statearr_27350_27383 = state_27329__$1;
(statearr_27350_27383[(2)] = inst_27315);

(statearr_27350_27383[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (2))){
var state_27329__$1 = state_27329;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27329__$1,(4),in$);
} else {
if((state_val_27330 === (23))){
var inst_27323 = (state_27329[(2)]);
var state_27329__$1 = state_27329;
var statearr_27351_27384 = state_27329__$1;
(statearr_27351_27384[(2)] = inst_27323);

(statearr_27351_27384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (19))){
var inst_27310 = (state_27329[(2)]);
var state_27329__$1 = state_27329;
var statearr_27352_27385 = state_27329__$1;
(statearr_27352_27385[(2)] = inst_27310);

(statearr_27352_27385[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (11))){
var inst_27295 = (state_27329[(7)]);
var inst_27281 = (state_27329[(10)]);
var inst_27295__$1 = cljs.core.seq.call(null,inst_27281);
var state_27329__$1 = (function (){var statearr_27353 = state_27329;
(statearr_27353[(7)] = inst_27295__$1);

return statearr_27353;
})();
if(inst_27295__$1){
var statearr_27354_27386 = state_27329__$1;
(statearr_27354_27386[(1)] = (14));

} else {
var statearr_27355_27387 = state_27329__$1;
(statearr_27355_27387[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (9))){
var inst_27317 = (state_27329[(2)]);
var inst_27318 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27329__$1 = (function (){var statearr_27356 = state_27329;
(statearr_27356[(15)] = inst_27317);

return statearr_27356;
})();
if(cljs.core.truth_(inst_27318)){
var statearr_27357_27388 = state_27329__$1;
(statearr_27357_27388[(1)] = (21));

} else {
var statearr_27358_27389 = state_27329__$1;
(statearr_27358_27389[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (5))){
var inst_27273 = cljs.core.async.close_BANG_.call(null,out);
var state_27329__$1 = state_27329;
var statearr_27359_27390 = state_27329__$1;
(statearr_27359_27390[(2)] = inst_27273);

(statearr_27359_27390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (14))){
var inst_27295 = (state_27329[(7)]);
var inst_27297 = cljs.core.chunked_seq_QMARK_.call(null,inst_27295);
var state_27329__$1 = state_27329;
if(inst_27297){
var statearr_27360_27391 = state_27329__$1;
(statearr_27360_27391[(1)] = (17));

} else {
var statearr_27361_27392 = state_27329__$1;
(statearr_27361_27392[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (16))){
var inst_27313 = (state_27329[(2)]);
var state_27329__$1 = state_27329;
var statearr_27362_27393 = state_27329__$1;
(statearr_27362_27393[(2)] = inst_27313);

(statearr_27362_27393[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27330 === (10))){
var inst_27282 = (state_27329[(9)]);
var inst_27284 = (state_27329[(12)]);
var inst_27289 = cljs.core._nth.call(null,inst_27282,inst_27284);
var state_27329__$1 = state_27329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27329__$1,(13),out,inst_27289);
} else {
if((state_val_27330 === (18))){
var inst_27295 = (state_27329[(7)]);
var inst_27304 = cljs.core.first.call(null,inst_27295);
var state_27329__$1 = state_27329;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27329__$1,(20),out,inst_27304);
} else {
if((state_val_27330 === (8))){
var inst_27283 = (state_27329[(8)]);
var inst_27284 = (state_27329[(12)]);
var inst_27286 = (inst_27284 < inst_27283);
var inst_27287 = inst_27286;
var state_27329__$1 = state_27329;
if(cljs.core.truth_(inst_27287)){
var statearr_27363_27394 = state_27329__$1;
(statearr_27363_27394[(1)] = (10));

} else {
var statearr_27364_27395 = state_27329__$1;
(statearr_27364_27395[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12720__auto__))
;
return ((function (switch__12664__auto__,c__12720__auto__){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_27368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27368[(0)] = state_machine__12665__auto__);

(statearr_27368[(1)] = (1));

return statearr_27368;
});
var state_machine__12665__auto____1 = (function (state_27329){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_27329);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e27369){if((e27369 instanceof Object)){
var ex__12668__auto__ = e27369;
var statearr_27370_27396 = state_27329;
(statearr_27370_27396[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27329);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27397 = state_27329;
state_27329 = G__27397;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_27329){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_27329);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(switch__12664__auto__,c__12720__auto__))
})();
var state__12722__auto__ = (function (){var statearr_27371 = f__12721__auto__.call(null);
(statearr_27371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto__);

return statearr_27371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(c__12720__auto__))
);

return c__12720__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){
return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){
return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){
return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12720__auto___27494 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12720__auto___27494,out){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (c__12720__auto___27494,out){
return (function (state_27469){
var state_val_27470 = (state_27469[(1)]);
if((state_val_27470 === (7))){
var inst_27464 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
var statearr_27471_27495 = state_27469__$1;
(statearr_27471_27495[(2)] = inst_27464);

(statearr_27471_27495[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (1))){
var inst_27446 = null;
var state_27469__$1 = (function (){var statearr_27472 = state_27469;
(statearr_27472[(7)] = inst_27446);

return statearr_27472;
})();
var statearr_27473_27496 = state_27469__$1;
(statearr_27473_27496[(2)] = null);

(statearr_27473_27496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (4))){
var inst_27449 = (state_27469[(8)]);
var inst_27449__$1 = (state_27469[(2)]);
var inst_27450 = (inst_27449__$1 == null);
var inst_27451 = cljs.core.not.call(null,inst_27450);
var state_27469__$1 = (function (){var statearr_27474 = state_27469;
(statearr_27474[(8)] = inst_27449__$1);

return statearr_27474;
})();
if(inst_27451){
var statearr_27475_27497 = state_27469__$1;
(statearr_27475_27497[(1)] = (5));

} else {
var statearr_27476_27498 = state_27469__$1;
(statearr_27476_27498[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (6))){
var state_27469__$1 = state_27469;
var statearr_27477_27499 = state_27469__$1;
(statearr_27477_27499[(2)] = null);

(statearr_27477_27499[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (3))){
var inst_27466 = (state_27469[(2)]);
var inst_27467 = cljs.core.async.close_BANG_.call(null,out);
var state_27469__$1 = (function (){var statearr_27478 = state_27469;
(statearr_27478[(9)] = inst_27466);

return statearr_27478;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27469__$1,inst_27467);
} else {
if((state_val_27470 === (2))){
var state_27469__$1 = state_27469;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27469__$1,(4),ch);
} else {
if((state_val_27470 === (11))){
var inst_27449 = (state_27469[(8)]);
var inst_27458 = (state_27469[(2)]);
var inst_27446 = inst_27449;
var state_27469__$1 = (function (){var statearr_27479 = state_27469;
(statearr_27479[(7)] = inst_27446);

(statearr_27479[(10)] = inst_27458);

return statearr_27479;
})();
var statearr_27480_27500 = state_27469__$1;
(statearr_27480_27500[(2)] = null);

(statearr_27480_27500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (9))){
var inst_27449 = (state_27469[(8)]);
var state_27469__$1 = state_27469;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27469__$1,(11),out,inst_27449);
} else {
if((state_val_27470 === (5))){
var inst_27449 = (state_27469[(8)]);
var inst_27446 = (state_27469[(7)]);
var inst_27453 = cljs.core._EQ_.call(null,inst_27449,inst_27446);
var state_27469__$1 = state_27469;
if(inst_27453){
var statearr_27482_27501 = state_27469__$1;
(statearr_27482_27501[(1)] = (8));

} else {
var statearr_27483_27502 = state_27469__$1;
(statearr_27483_27502[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (10))){
var inst_27461 = (state_27469[(2)]);
var state_27469__$1 = state_27469;
var statearr_27484_27503 = state_27469__$1;
(statearr_27484_27503[(2)] = inst_27461);

(statearr_27484_27503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27470 === (8))){
var inst_27446 = (state_27469[(7)]);
var tmp27481 = inst_27446;
var inst_27446__$1 = tmp27481;
var state_27469__$1 = (function (){var statearr_27485 = state_27469;
(statearr_27485[(7)] = inst_27446__$1);

return statearr_27485;
})();
var statearr_27486_27504 = state_27469__$1;
(statearr_27486_27504[(2)] = null);

(statearr_27486_27504[(1)] = (2));


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
}
}
}
}
});})(c__12720__auto___27494,out))
;
return ((function (switch__12664__auto__,c__12720__auto___27494,out){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_27490 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27490[(0)] = state_machine__12665__auto__);

(statearr_27490[(1)] = (1));

return statearr_27490;
});
var state_machine__12665__auto____1 = (function (state_27469){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_27469);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e27491){if((e27491 instanceof Object)){
var ex__12668__auto__ = e27491;
var statearr_27492_27505 = state_27469;
(statearr_27492_27505[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27469);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27506 = state_27469;
state_27469 = G__27506;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_27469){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_27469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(switch__12664__auto__,c__12720__auto___27494,out))
})();
var state__12722__auto__ = (function (){var statearr_27493 = f__12721__auto__.call(null);
(statearr_27493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto___27494);

return statearr_27493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(c__12720__auto___27494,out))
);


return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){
return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12720__auto___27641 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12720__auto___27641,out){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (c__12720__auto___27641,out){
return (function (state_27611){
var state_val_27612 = (state_27611[(1)]);
if((state_val_27612 === (7))){
var inst_27607 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
var statearr_27613_27642 = state_27611__$1;
(statearr_27613_27642[(2)] = inst_27607);

(statearr_27613_27642[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (1))){
var inst_27574 = (new Array(n));
var inst_27575 = inst_27574;
var inst_27576 = (0);
var state_27611__$1 = (function (){var statearr_27614 = state_27611;
(statearr_27614[(7)] = inst_27576);

(statearr_27614[(8)] = inst_27575);

return statearr_27614;
})();
var statearr_27615_27643 = state_27611__$1;
(statearr_27615_27643[(2)] = null);

(statearr_27615_27643[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (4))){
var inst_27579 = (state_27611[(9)]);
var inst_27579__$1 = (state_27611[(2)]);
var inst_27580 = (inst_27579__$1 == null);
var inst_27581 = cljs.core.not.call(null,inst_27580);
var state_27611__$1 = (function (){var statearr_27616 = state_27611;
(statearr_27616[(9)] = inst_27579__$1);

return statearr_27616;
})();
if(inst_27581){
var statearr_27617_27644 = state_27611__$1;
(statearr_27617_27644[(1)] = (5));

} else {
var statearr_27618_27645 = state_27611__$1;
(statearr_27618_27645[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (15))){
var inst_27601 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
var statearr_27619_27646 = state_27611__$1;
(statearr_27619_27646[(2)] = inst_27601);

(statearr_27619_27646[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (13))){
var state_27611__$1 = state_27611;
var statearr_27620_27647 = state_27611__$1;
(statearr_27620_27647[(2)] = null);

(statearr_27620_27647[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (6))){
var inst_27576 = (state_27611[(7)]);
var inst_27597 = (inst_27576 > (0));
var state_27611__$1 = state_27611;
if(cljs.core.truth_(inst_27597)){
var statearr_27621_27648 = state_27611__$1;
(statearr_27621_27648[(1)] = (12));

} else {
var statearr_27622_27649 = state_27611__$1;
(statearr_27622_27649[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (3))){
var inst_27609 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27611__$1,inst_27609);
} else {
if((state_val_27612 === (12))){
var inst_27575 = (state_27611[(8)]);
var inst_27599 = cljs.core.vec.call(null,inst_27575);
var state_27611__$1 = state_27611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27611__$1,(15),out,inst_27599);
} else {
if((state_val_27612 === (2))){
var state_27611__$1 = state_27611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27611__$1,(4),ch);
} else {
if((state_val_27612 === (11))){
var inst_27591 = (state_27611[(2)]);
var inst_27592 = (new Array(n));
var inst_27575 = inst_27592;
var inst_27576 = (0);
var state_27611__$1 = (function (){var statearr_27623 = state_27611;
(statearr_27623[(10)] = inst_27591);

(statearr_27623[(7)] = inst_27576);

(statearr_27623[(8)] = inst_27575);

return statearr_27623;
})();
var statearr_27624_27650 = state_27611__$1;
(statearr_27624_27650[(2)] = null);

(statearr_27624_27650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (9))){
var inst_27575 = (state_27611[(8)]);
var inst_27589 = cljs.core.vec.call(null,inst_27575);
var state_27611__$1 = state_27611;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27611__$1,(11),out,inst_27589);
} else {
if((state_val_27612 === (5))){
var inst_27579 = (state_27611[(9)]);
var inst_27576 = (state_27611[(7)]);
var inst_27584 = (state_27611[(11)]);
var inst_27575 = (state_27611[(8)]);
var inst_27583 = (inst_27575[inst_27576] = inst_27579);
var inst_27584__$1 = (inst_27576 + (1));
var inst_27585 = (inst_27584__$1 < n);
var state_27611__$1 = (function (){var statearr_27625 = state_27611;
(statearr_27625[(12)] = inst_27583);

(statearr_27625[(11)] = inst_27584__$1);

return statearr_27625;
})();
if(cljs.core.truth_(inst_27585)){
var statearr_27626_27651 = state_27611__$1;
(statearr_27626_27651[(1)] = (8));

} else {
var statearr_27627_27652 = state_27611__$1;
(statearr_27627_27652[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (14))){
var inst_27604 = (state_27611[(2)]);
var inst_27605 = cljs.core.async.close_BANG_.call(null,out);
var state_27611__$1 = (function (){var statearr_27629 = state_27611;
(statearr_27629[(13)] = inst_27604);

return statearr_27629;
})();
var statearr_27630_27653 = state_27611__$1;
(statearr_27630_27653[(2)] = inst_27605);

(statearr_27630_27653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (10))){
var inst_27595 = (state_27611[(2)]);
var state_27611__$1 = state_27611;
var statearr_27631_27654 = state_27611__$1;
(statearr_27631_27654[(2)] = inst_27595);

(statearr_27631_27654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27612 === (8))){
var inst_27584 = (state_27611[(11)]);
var inst_27575 = (state_27611[(8)]);
var tmp27628 = inst_27575;
var inst_27575__$1 = tmp27628;
var inst_27576 = inst_27584;
var state_27611__$1 = (function (){var statearr_27632 = state_27611;
(statearr_27632[(7)] = inst_27576);

(statearr_27632[(8)] = inst_27575__$1);

return statearr_27632;
})();
var statearr_27633_27655 = state_27611__$1;
(statearr_27633_27655[(2)] = null);

(statearr_27633_27655[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__12720__auto___27641,out))
;
return ((function (switch__12664__auto__,c__12720__auto___27641,out){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_27637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27637[(0)] = state_machine__12665__auto__);

(statearr_27637[(1)] = (1));

return statearr_27637;
});
var state_machine__12665__auto____1 = (function (state_27611){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_27611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e27638){if((e27638 instanceof Object)){
var ex__12668__auto__ = e27638;
var statearr_27639_27656 = state_27611;
(statearr_27639_27656[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27638;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27657 = state_27611;
state_27611 = G__27657;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_27611){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_27611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(switch__12664__auto__,c__12720__auto___27641,out))
})();
var state__12722__auto__ = (function (){var statearr_27640 = f__12721__auto__.call(null);
(statearr_27640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto___27641);

return statearr_27640;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(c__12720__auto___27641,out))
);


return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){
return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__12720__auto___27800 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12720__auto___27800,out){
return (function (){
var f__12721__auto__ = (function (){var switch__12664__auto__ = ((function (c__12720__auto___27800,out){
return (function (state_27770){
var state_val_27771 = (state_27770[(1)]);
if((state_val_27771 === (7))){
var inst_27766 = (state_27770[(2)]);
var state_27770__$1 = state_27770;
var statearr_27772_27801 = state_27770__$1;
(statearr_27772_27801[(2)] = inst_27766);

(statearr_27772_27801[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27771 === (1))){
var inst_27729 = [];
var inst_27730 = inst_27729;
var inst_27731 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27770__$1 = (function (){var statearr_27773 = state_27770;
(statearr_27773[(7)] = inst_27731);

(statearr_27773[(8)] = inst_27730);

return statearr_27773;
})();
var statearr_27774_27802 = state_27770__$1;
(statearr_27774_27802[(2)] = null);

(statearr_27774_27802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27771 === (4))){
var inst_27734 = (state_27770[(9)]);
var inst_27734__$1 = (state_27770[(2)]);
var inst_27735 = (inst_27734__$1 == null);
var inst_27736 = cljs.core.not.call(null,inst_27735);
var state_27770__$1 = (function (){var statearr_27775 = state_27770;
(statearr_27775[(9)] = inst_27734__$1);

return statearr_27775;
})();
if(inst_27736){
var statearr_27776_27803 = state_27770__$1;
(statearr_27776_27803[(1)] = (5));

} else {
var statearr_27777_27804 = state_27770__$1;
(statearr_27777_27804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27771 === (15))){
var inst_27760 = (state_27770[(2)]);
var state_27770__$1 = state_27770;
var statearr_27778_27805 = state_27770__$1;
(statearr_27778_27805[(2)] = inst_27760);

(statearr_27778_27805[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27771 === (13))){
var state_27770__$1 = state_27770;
var statearr_27779_27806 = state_27770__$1;
(statearr_27779_27806[(2)] = null);

(statearr_27779_27806[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27771 === (6))){
var inst_27730 = (state_27770[(8)]);
var inst_27755 = inst_27730.length;
var inst_27756 = (inst_27755 > (0));
var state_27770__$1 = state_27770;
if(cljs.core.truth_(inst_27756)){
var statearr_27780_27807 = state_27770__$1;
(statearr_27780_27807[(1)] = (12));

} else {
var statearr_27781_27808 = state_27770__$1;
(statearr_27781_27808[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27771 === (3))){
var inst_27768 = (state_27770[(2)]);
var state_27770__$1 = state_27770;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27770__$1,inst_27768);
} else {
if((state_val_27771 === (12))){
var inst_27730 = (state_27770[(8)]);
var inst_27758 = cljs.core.vec.call(null,inst_27730);
var state_27770__$1 = state_27770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27770__$1,(15),out,inst_27758);
} else {
if((state_val_27771 === (2))){
var state_27770__$1 = state_27770;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27770__$1,(4),ch);
} else {
if((state_val_27771 === (11))){
var inst_27734 = (state_27770[(9)]);
var inst_27738 = (state_27770[(10)]);
var inst_27748 = (state_27770[(2)]);
var inst_27749 = [];
var inst_27750 = inst_27749.push(inst_27734);
var inst_27730 = inst_27749;
var inst_27731 = inst_27738;
var state_27770__$1 = (function (){var statearr_27782 = state_27770;
(statearr_27782[(11)] = inst_27748);

(statearr_27782[(7)] = inst_27731);

(statearr_27782[(12)] = inst_27750);

(statearr_27782[(8)] = inst_27730);

return statearr_27782;
})();
var statearr_27783_27809 = state_27770__$1;
(statearr_27783_27809[(2)] = null);

(statearr_27783_27809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27771 === (9))){
var inst_27730 = (state_27770[(8)]);
var inst_27746 = cljs.core.vec.call(null,inst_27730);
var state_27770__$1 = state_27770;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27770__$1,(11),out,inst_27746);
} else {
if((state_val_27771 === (5))){
var inst_27734 = (state_27770[(9)]);
var inst_27738 = (state_27770[(10)]);
var inst_27731 = (state_27770[(7)]);
var inst_27738__$1 = f.call(null,inst_27734);
var inst_27739 = cljs.core._EQ_.call(null,inst_27738__$1,inst_27731);
var inst_27740 = cljs.core.keyword_identical_QMARK_.call(null,inst_27731,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27741 = (inst_27739) || (inst_27740);
var state_27770__$1 = (function (){var statearr_27784 = state_27770;
(statearr_27784[(10)] = inst_27738__$1);

return statearr_27784;
})();
if(cljs.core.truth_(inst_27741)){
var statearr_27785_27810 = state_27770__$1;
(statearr_27785_27810[(1)] = (8));

} else {
var statearr_27786_27811 = state_27770__$1;
(statearr_27786_27811[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27771 === (14))){
var inst_27763 = (state_27770[(2)]);
var inst_27764 = cljs.core.async.close_BANG_.call(null,out);
var state_27770__$1 = (function (){var statearr_27788 = state_27770;
(statearr_27788[(13)] = inst_27763);

return statearr_27788;
})();
var statearr_27789_27812 = state_27770__$1;
(statearr_27789_27812[(2)] = inst_27764);

(statearr_27789_27812[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27771 === (10))){
var inst_27753 = (state_27770[(2)]);
var state_27770__$1 = state_27770;
var statearr_27790_27813 = state_27770__$1;
(statearr_27790_27813[(2)] = inst_27753);

(statearr_27790_27813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27771 === (8))){
var inst_27734 = (state_27770[(9)]);
var inst_27738 = (state_27770[(10)]);
var inst_27730 = (state_27770[(8)]);
var inst_27743 = inst_27730.push(inst_27734);
var tmp27787 = inst_27730;
var inst_27730__$1 = tmp27787;
var inst_27731 = inst_27738;
var state_27770__$1 = (function (){var statearr_27791 = state_27770;
(statearr_27791[(7)] = inst_27731);

(statearr_27791[(14)] = inst_27743);

(statearr_27791[(8)] = inst_27730__$1);

return statearr_27791;
})();
var statearr_27792_27814 = state_27770__$1;
(statearr_27792_27814[(2)] = null);

(statearr_27792_27814[(1)] = (2));


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
}
}
}
}
}
}
}
}
});})(c__12720__auto___27800,out))
;
return ((function (switch__12664__auto__,c__12720__auto___27800,out){
return (function() {
var state_machine__12665__auto__ = null;
var state_machine__12665__auto____0 = (function (){
var statearr_27796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27796[(0)] = state_machine__12665__auto__);

(statearr_27796[(1)] = (1));

return statearr_27796;
});
var state_machine__12665__auto____1 = (function (state_27770){
while(true){
var ret_value__12666__auto__ = (function (){try{while(true){
var result__12667__auto__ = switch__12664__auto__.call(null,state_27770);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12667__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12667__auto__;
}
break;
}
}catch (e27797){if((e27797 instanceof Object)){
var ex__12668__auto__ = e27797;
var statearr_27798_27815 = state_27770;
(statearr_27798_27815[(5)] = ex__12668__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27770);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27797;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12666__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27816 = state_27770;
state_27770 = G__27816;
continue;
} else {
return ret_value__12666__auto__;
}
break;
}
});
state_machine__12665__auto__ = function(state_27770){
switch(arguments.length){
case 0:
return state_machine__12665__auto____0.call(this);
case 1:
return state_machine__12665__auto____1.call(this,state_27770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__12665__auto____0;
state_machine__12665__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__12665__auto____1;
return state_machine__12665__auto__;
})()
;})(switch__12664__auto__,c__12720__auto___27800,out))
})();
var state__12722__auto__ = (function (){var statearr_27799 = f__12721__auto__.call(null);
(statearr_27799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__12720__auto___27800);

return statearr_27799;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12722__auto__);
});})(c__12720__auto___27800,out))
);


return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map