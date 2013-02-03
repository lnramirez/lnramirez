//>>built
define("dojo/hash","./_base/kernel,require,./_base/config,./_base/connect,./_base/lang,./ready,./sniff".split(","),function(d,v,p,h,i,w,j){function q(a,f){var b=a.indexOf(f);return 0<=b?a.substring(b+1):""}function c(){return q(location.href,"#")}function l(){h.publish("/dojo/hashchange",[c()])}function s(){c()!==b&&(b=c(),l())}function t(a){if(e)if(e.isTransitioning())setTimeout(i.hitch(null,t,a),m);else{var b=e.iframe.location.href,c=b.indexOf("?");e.iframe.location.replace(b.substring(0,c)+"?"+
a)}else location.replace("#"+a),!u&&s()}function x(){function a(){b=c();h=g?b:q(r.href,"?");n=!1;o=null}var f=document.createElement("iframe"),e=p.dojoBlankHtmlUrl||v.toUrl("./resources/blank.html");f.id="dojo-hash-iframe";f.src=e+"?"+c();f.style.display="none";document.body.appendChild(f);this.iframe=d.global["dojo-hash-iframe"];var h,n,o,j,g,r=this.iframe.location;this.isTransitioning=function(){return n};this.pollLocation=function(){if(!g)try{var d=q(r.href,"?");if(document.title!=j)j=this.iframe.document.title=
document.title}catch(p){g=!0,console.error("dojo.hash: Error adding history entry. Server unreachable.")}var k=c();if(n&&b===k)if(g||d===o)a(),l();else{setTimeout(i.hitch(this,this.pollLocation),0);return}else if(!(b===k&&(g||h===d))){if(b!==k){b=k;n=!0;o=k;f.src=e+"?"+o;g=!1;setTimeout(i.hitch(this,this.pollLocation),0);return}if(!g)location.href="#"+r.search.substring(1),a(),l()}setTimeout(i.hitch(this,this.pollLocation),m)};a();setTimeout(i.hitch(this,this.pollLocation),m)}d.hash=function(a,b){if(!arguments.length)return c();
"#"==a.charAt(0)&&(a=a.substring(1));b?t(a):location.href="#"+a;return a};var b,e,u,m=p.hashPollFrequency||100;w(function(){"onhashchange"in d.global&&(!j("ie")||8<=j("ie")&&"BackCompat"!=document.compatMode)?u=h.connect(d.global,"onhashchange",l):document.addEventListener?(b=c(),setInterval(s,m)):document.attachEvent&&(e=new x)});return d.hash});