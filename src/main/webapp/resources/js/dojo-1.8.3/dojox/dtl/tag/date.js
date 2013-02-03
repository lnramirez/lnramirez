//>>built
define("dojox/dtl/tag/date",["dojo/_base/lang","../_base","../utils/date"],function(c,d,e){c.getObject("dojox.dtl.tag.date",!0);dojox.dtl.tag.date.NowNode=function(a,b){this._format=a;this.format=new e.DateFormat(a);this.contents=b};c.extend(d.tag.date.NowNode,{render:function(a,b){this.contents.set(this.format.format(new Date));return this.contents.render(a,b)},unrender:function(a,b){return this.contents.unrender(a,b)},clone:function(a){return new this.constructor(this._format,this.contents.clone(a))}});
dojox.dtl.tag.date.now=function(a,b){var c=b.split_contents();if(2!=c.length)throw Error("'now' statement takes one argument");return new dojox.dtl.tag.date.NowNode(c[1].slice(1,-1),a.create_text_node())};return dojox.dtl.tag.date});