//>>built
define("dojo/_base/xhr","./kernel,./sniff,require,../io-query,../dom,../dom-form,./Deferred,./config,./json,./lang,./array,../on,../aspect,../request/watch,../request/xhr,../request/util".split(","),function(b,u,C,m,v,j,w,D,q,l,x,E,r,k,s,y){b._xhrObj=s._create;var o=b.config;b.objectToQuery=m.objectToQuery;b.queryToObject=m.queryToObject;b.fieldToObject=j.fieldToObject;b.formToObject=j.toObject;b.formToQuery=j.toQuery;b.formToJson=j.toJson;b._blockAsync=!1;var n=b._contentHandlers=b.contentHandlers=
{text:function(a){return a.responseText},json:function(a){return q.fromJson(a.responseText||null)},"json-comment-filtered":function(a){var a=a.responseText,b=a.indexOf("/*"),f=a.lastIndexOf("*/");if(-1==b||-1==f)throw Error("JSON was not comment filtered");return q.fromJson(a.substring(b+2,f))},javascript:function(a){return b.eval(a.responseText)},xml:function(a){var b=a.responseXML;if(u("ie")&&(!b||!b.documentElement)){var f=function(a){return"MSXML"+a+".DOMDocument"},f=["Microsoft.XMLDOM",f(6),
f(4),f(3),f(2)];x.some(f,function(f){try{var c=new ActiveXObject(f);c.async=!1;c.loadXML(a.responseText);b=c}catch(g){return!1}return!0})}return b},"json-comment-optional":function(a){return a.responseText&&/^[^{\[]*\/\*/.test(a.responseText)?n["json-comment-filtered"](a):n.json(a)}};b._ioSetArgs=function(a,d,f,z){var c={args:a,url:a.url},g=null;if(a.form){var g=v.byId(a.form),h=g.getAttributeNode("action");c.url=c.url||(h?h.value:null);g=j.toObject(g)}h=[{}];g&&h.push(g);a.content&&h.push(a.content);
a.preventCache&&h.push({"dojo.preventCache":(new Date).valueOf()});c.query=m.objectToQuery(l.mixin.apply(null,h));c.handleAs=a.handleAs||"text";var i=new w(function(a){a.canceled=!0;d&&d(a);var b=a.ioArgs.error;if(!b)b=Error("request cancelled"),b.dojoType="cancel",a.ioArgs.error=b;return b});i.addCallback(f);var p=a.load;p&&l.isFunction(p)&&i.addCallback(function(b){return p.call(a,b,c)});var e=a.error;e&&l.isFunction(e)&&i.addErrback(function(b){return e.call(a,b,c)});var k=a.handle;k&&l.isFunction(k)&&
i.addBoth(function(b){return k.call(a,b,c)});i.addErrback(function(a){return z(a,i)});o.ioPublish&&b.publish&&!1!==c.args.ioPublish&&(i.addCallbacks(function(a){b.publish("/dojo/io/load",[i,a]);return a},function(a){b.publish("/dojo/io/error",[i,a]);return a}),i.addBoth(function(a){b.publish("/dojo/io/done",[i,a]);return a}));i.ioArgs=c;return i};var A=function(a){a=n[a.ioArgs.handleAs](a.ioArgs.xhr);return void 0===a?null:a},B=function(a,b){b.ioArgs.args.failOk||console.error(a);return a},t=function(a){0>=
e&&(e=0,o.ioPublish&&b.publish&&(!a||a&&!1!==a.ioArgs.args.ioPublish)&&b.publish("/dojo/io/stop"))},e=0;r.after(k,"_onAction",function(){e-=1});r.after(k,"_onInFlight",t);b._ioCancelAll=k.cancelAll;b._ioNotifyStart=function(a){o.ioPublish&&b.publish&&!1!==a.ioArgs.args.ioPublish&&(e||b.publish("/dojo/io/start"),e+=1,b.publish("/dojo/io/send",[a]))};b._ioWatch=function(a,b,f,e){a.ioArgs.options=a.ioArgs.args;l.mixin(a,{response:a.ioArgs,isValid:function(){return b(a)},isReady:function(){return f(a)},
handleResponse:function(){return e(a)}});k(a);t(a)};b._ioAddQueryToUrl=function(a){if(a.query.length)a.url+=(-1==a.url.indexOf("?")?"?":"&")+a.query,a.query=null};b.xhr=function(a,d,f){var e,c=b._ioSetArgs(d,function(){e&&e.cancel()},A,B),g=c.ioArgs;"postData"in d?g.query=d.postData:"putData"in d?g.query=d.putData:"rawBody"in d?g.query=d.rawBody:(2<arguments.length&&!f||-1==="POST|PUT".indexOf(a.toUpperCase()))&&b._ioAddQueryToUrl(g);var h={method:a,handleAs:"text",timeout:d.timeout,withCredentials:d.withCredentials,
ioArgs:g};if("undefined"!==typeof d.headers)h.headers=d.headers;if("undefined"!==typeof d.contentType){if(!h.headers)h.headers={};h.headers["Content-Type"]=d.contentType}if("undefined"!==typeof g.query)h.data=g.query;if("undefined"!==typeof d.sync)h.sync=d.sync;b._ioNotifyStart(c);try{e=s(g.url,h,!0)}catch(i){return c.cancel(),c}c.ioArgs.xhr=e.response.xhr;e.then(function(){c.resolve(c)}).otherwise(function(a){g.error=a;if(a.response)a.status=a.response.status,a.responseText=a.response.text,a.xhr=
a.response.xhr;c.reject(a)});return c};b.xhrGet=function(a){return b.xhr("GET",a)};b.rawXhrPost=b.xhrPost=function(a){return b.xhr("POST",a,!0)};b.rawXhrPut=b.xhrPut=function(a){return b.xhr("PUT",a,!0)};b.xhrDelete=function(a){return b.xhr("DELETE",a)};b._isDocumentOk=function(a){return y.checkStatus(a.status)};b._getText=function(a){var d;b.xhrGet({url:a,sync:!0,load:function(a){d=a}});return d};l.mixin(b.xhr,{_xhrObj:b._xhrObj,fieldToObject:j.fieldToObject,formToObject:j.toObject,objectToQuery:m.objectToQuery,
formToQuery:j.toQuery,formToJson:j.toJson,queryToObject:m.queryToObject,contentHandlers:n,_ioSetArgs:b._ioSetArgs,_ioCancelAll:b._ioCancelAll,_ioNotifyStart:b._ioNotifyStart,_ioWatch:b._ioWatch,_ioAddQueryToUrl:b._ioAddQueryToUrl,_isDocumentOk:b._isDocumentOk,_getText:b._getText,get:b.xhrGet,post:b.xhrPost,put:b.xhrPut,del:b.xhrDelete});return b.xhr});