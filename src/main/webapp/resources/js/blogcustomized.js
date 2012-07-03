function prettifyCode(callbackfunc) {
    var pretty = false;
    require(["dojo/query","dojo/dom-class"], function(query,domClass){
        query("pre:not(.prettyprint)").forEach(function(_node) {
            dojo.addClass(_node,"prettyprint");
            dojo.addClass(_node,"codescroll");
            pretty = true;
        });
    });
    if (pretty) {
        callbackfunc();
    }
}
function openAnchorsInTab() {
    require(["dojo/query"], function(query) {
        query("article.blogcontent div  a:not([target='_BLANK'])").attr("target","_BLANK");
    });
}

