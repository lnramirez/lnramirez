function prettifyCode(callbackfunc) {
    require(["dojo/query","dojo/dom-class"], function(query,domClass){
        query("pre:not(.prettyprint)").forEach(function(_node) {
            domClass.add(_node,"prettyprint");
            domClass.add(_node,"codescroll");
            if (callbackfunc != 'undefined') {
                callbackfunc();
            }
        });
    });
}
function openAnchorsInTab() {
    require(["dojo/query","dojo/dom-attr"], function(query,domAttr) {
        query("article.blogcontent div  a:not([target='_BLANK'])").forEach(function(_node) {
            domAttr.set(_node,"target","_BLANK")
        });
    });
}

