//>>built
define("dojox/data/ServiceStore",["dojo/_base/declare","dojo/_base/lang","dojo/_base/array"],function(h,g,i){return h("dojox.data.ServiceStore",g.getObject("dojox.data.ClientFilter",0)||null,{service:null,constructor:function(a){this.byId=this.fetchItemByIdentity;this._index={};a&&g.mixin(this,a);this.idAttribute=a&&a.idAttribute||this.schema&&this.schema._idAttr},schema:null,idAttribute:"id",labelAttribute:"label",syncMode:!1,estimateCountFactor:1,getSchema:function(){return this.schema},loadLazyValues:!0,
getValue:function(a,c,b){var d=a[c];return d||(c in a?d:a._loadObject?(dojox.rpc._sync=!0)&&arguments.callee.call(this,dojox.data.ServiceStore.prototype.loadItem({item:a})||{},c,b):b)},getValues:function(a,c){var b=this.getValue(a,c);return b instanceof Array?b:void 0===b?[]:[b]},getAttributes:function(a){var c=[],b;for(b in a)a.hasOwnProperty(b)&&!("_"==b.charAt(0)&&"_"==b.charAt(1))&&c.push(b);return c},hasAttribute:function(a,c){return c in a},containsValue:function(a,c,b){return-1<i.indexOf(this.getValues(a,
c),b)},isItem:function(a){return"object"==typeof a&&a&&!(a instanceof Date)},isItemLoaded:function(a){return a&&!a._loadObject},loadItem:function(a){var c;a.item._loadObject?a.item._loadObject(function(b){c=b;delete c._loadObject;var d=b instanceof Error?a.onError:a.onItem;d&&d.call(a.scope,b)}):a.onItem&&a.onItem.call(a.scope,a.item);return c},_currentId:0,_processResults:function(a,c){if(a&&"object"==typeof a){var b=a.__id;if(!b&&(b=this.idAttribute?a[this.idAttribute]:this._currentId++,void 0!==
b)){var d=this._index[b];if(d){for(var e in d)delete d[e];a=g.mixin(d,a)}a.__id=b;this._index[b]=a}for(var f in a)a[f]=this._processResults(a[f],c).items;b=a.length}return{totalCount:c.request.count==b?(c.request.start||0)+b*this.estimateCountFactor:b,items:a}},close:function(a){return a&&a.abort&&a.abort()},fetch:function(a){a=a||{};if("syncMode"in a?a.syncMode:this.syncMode)dojox.rpc._sync=!0;var c=this,b=a.scope||c,d=this.cachingFetch?this.cachingFetch(a):this._doQuery(a);d.request=a;d.addCallback(function(e){a.clientFetch&&
(e=c.clientSideFetch({query:a.clientFetch,sort:a.sort,start:a.start,count:a.count},e));var f=c._processResults(e,d),e=a.results=f.items;a.onBegin&&a.onBegin.call(b,f.totalCount,a);if(a.onItem)for(f=0;f<e.length;f++)a.onItem.call(b,e[f],a);a.onComplete&&a.onComplete.call(b,a.onItem?null:e,a);return e});d.addErrback(a.onError&&function(c){return a.onError.call(b,c,a)});a.abort=function(){d.cancel()};a.store=this;return a},_doQuery:function(a){return this.service("string"==typeof a.queryStr?a.queryStr:
a.query)},getFeatures:function(){return{"dojo.data.api.Read":!0,"dojo.data.api.Identity":!0,"dojo.data.api.Schema":this.schema}},getLabel:function(a){return this.getValue(a,this.labelAttribute)},getLabelAttributes:function(){return[this.labelAttribute]},getIdentity:function(a){return a.__id},getIdentityAttributes:function(){return[this.idAttribute]},fetchItemByIdentity:function(a){var c=this._index[(a._prefix||"")+a.identity];if(c){if(c._loadObject)return a.item=c,this.loadItem(a);a.onItem&&a.onItem.call(a.scope,
c)}else return this.fetch({query:a.identity,onComplete:a.onItem,onError:a.onError,scope:a.scope}).results;return c}})});