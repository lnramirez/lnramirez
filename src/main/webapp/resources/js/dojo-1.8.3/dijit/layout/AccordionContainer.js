//>>built
require({cache:{"url:dijit/layout/templates/AccordionButton.html":'<div data-dojo-attach-event=\'onclick:_onTitleClick\' class=\'dijitAccordionTitle\' role="presentation">\n\t<div data-dojo-attach-point=\'titleNode,focusNode\' data-dojo-attach-event=\'onkeypress:_onTitleKeyPress\'\n\t\t\tclass=\'dijitAccordionTitleFocus\' role="tab" aria-expanded="false"\n\t\t><span class=\'dijitInline dijitAccordionArrow\' role="presentation"></span\n\t\t><span class=\'arrowTextUp\' role="presentation">+</span\n\t\t><span class=\'arrowTextDown\' role="presentation">-</span\n\t\t><img src="${_blankGif}" alt="" class="dijitIcon" data-dojo-attach-point=\'iconNode\' style="vertical-align: middle" role="presentation"/>\n\t\t<span role="presentation" data-dojo-attach-point=\'titleTextNode\' class=\'dijitAccordionText\'></span>\n\t</div>\n</div>\n'}});
define("dijit/layout/AccordionContainer","require,dojo/_base/array,dojo/_base/declare,dojo/_base/event,dojo/_base/fx,dojo/dom,dojo/dom-attr,dojo/dom-class,dojo/dom-construct,dojo/dom-geometry,dojo/keys,dojo/_base/lang,dojo/sniff,dojo/topic,../focus,../_base/manager,dojo/ready,../_Widget,../_Container,../_TemplatedMixin,../_CssStateMixin,./StackContainer,./ContentPane,dojo/text!./templates/AccordionButton.html".split(","),function(s,k,f,n,t,u,o,v,g,h,e,j,p,w,x,y,z,l,m,A,q,B,D,C){var m=f("dijit.layout._AccordionButton",
[l,A,q],{templateString:C,label:"",_setLabelAttr:{node:"titleTextNode",type:"innerHTML"},title:"",_setTitleAttr:{node:"titleTextNode",type:"attribute",attribute:"title"},iconClassAttr:"",_setIconClassAttr:{node:"iconNode",type:"class"},baseClass:"dijitAccordionTitle",getParent:function(){return this.parent},buildRendering:function(){this.inherited(arguments);var a=this.id.replace(" ","_");o.set(this.titleTextNode,"id",a+"_title");this.focusNode.setAttribute("aria-labelledby",o.get(this.titleTextNode,
"id"));u.setSelectable(this.domNode,!1)},getTitleHeight:function(){return h.getMarginSize(this.domNode).h},_onTitleClick:function(){this.getParent().selectChild(this.contentWidget,!0);x.focus(this.focusNode)},_onTitleKeyPress:function(a){return this.getParent()._onKeyPress(a,this.contentWidget)},_setSelectedAttr:function(a){this._set("selected",a);this.focusNode.setAttribute("aria-expanded",a?"true":"false");this.focusNode.setAttribute("aria-selected",a?"true":"false");this.focusNode.setAttribute("tabIndex",
a?"0":"-1")}}),r=f("dijit.layout._AccordionInnerContainer",[l,q],{baseClass:"dijitAccordionInnerContainer",isLayoutContainer:!0,buildRendering:function(){this.domNode=g.place("<div class='"+this.baseClass+"' role='presentation'>",this.contentWidget.domNode,"after");var a=this.contentWidget,b=j.isString(this.buttonWidget)?j.getObject(this.buttonWidget):this.buttonWidget;this.button=a._buttonWidget=(new b({contentWidget:a,label:a.title,title:a.tooltip,dir:a.dir,lang:a.lang,textDir:a.textDir,iconClass:a.iconClass,
id:a.id+"_button",parent:this.parent})).placeAt(this.domNode);this.containerNode=g.place("<div class='dijitAccordionChildWrapper' style='display:none'>",this.domNode);g.place(this.contentWidget.domNode,this.containerNode)},postCreate:function(){this.inherited(arguments);var a=this.button;this._contentWidgetWatches=[this.contentWidget.watch("title",j.hitch(this,function(b,c,d){a.set("label",d)})),this.contentWidget.watch("tooltip",j.hitch(this,function(b,c,d){a.set("title",d)})),this.contentWidget.watch("iconClass",
j.hitch(this,function(b,c,d){a.set("iconClass",d)}))]},_setSelectedAttr:function(a){this._set("selected",a);this.button.set("selected",a);if(a&&(a=this.contentWidget,a.onSelected))a.onSelected()},startup:function(){this.contentWidget.startup()},destroy:function(){this.button.destroyRecursive();k.forEach(this._contentWidgetWatches||[],function(a){a.unwatch()});delete this.contentWidget._buttonWidget;delete this.contentWidget._wrapperWidget;this.inherited(arguments)},destroyDescendants:function(a){this.contentWidget.destroyRecursive(a)}}),
f=f("dijit.layout.AccordionContainer",B,{duration:y.defaultDuration,buttonWidget:m,baseClass:"dijitAccordionContainer",buildRendering:function(){this.inherited(arguments);this.domNode.style.overflow="hidden";this.domNode.setAttribute("role","tablist")},startup:function(){this._started||(this.inherited(arguments),this.selectedChildWidget&&this.selectedChildWidget._wrapperWidget.set("selected",!0))},layout:function(){var a=this.selectedChildWidget;if(a){var b=a._wrapperWidget.domNode,c=h.getMarginExtents(b),
b=h.getPadBorderExtents(b),d=a._wrapperWidget.containerNode,f=h.getMarginExtents(d),d=h.getPadBorderExtents(d),e=this._contentBox,i=0;k.forEach(this.getChildren(),function(b){b!=a&&(i+=h.getMarginSize(b._wrapperWidget.domNode).h)});this._verticalSpace=e.h-i-c.h-b.h-f.h-d.h-a._buttonWidget.getTitleHeight();this._containerContentBox={h:this._verticalSpace,w:this._contentBox.w-c.w-b.w-f.w-d.w};a&&a.resize(this._containerContentBox)}},_setupChild:function(a){a._wrapperWidget=r({contentWidget:a,buttonWidget:this.buttonWidget,
id:a.id+"_wrapper",dir:a.dir,lang:a.lang,textDir:a.textDir,parent:this});this.inherited(arguments)},addChild:function(a,b){if(this._started){var c=this.containerNode;if(b&&"number"==typeof b){var d=l.prototype.getChildren.call(this);if(d&&d.length>=b)c=d[b-1].domNode,b="after"}g.place(a.domNode,c,b);a._started||a.startup();this._setupChild(a);w.publish(this.id+"-addChild",a,b);this.layout();this.selectedChildWidget||this.selectChild(a)}else this.inherited(arguments)},removeChild:function(a){a._wrapperWidget&&
(g.place(a.domNode,a._wrapperWidget.domNode,"after"),a._wrapperWidget.destroy(),delete a._wrapperWidget);v.remove(a.domNode,"dijitHidden");this.inherited(arguments)},getChildren:function(){return k.map(this.inherited(arguments),function(a){return"dijit.layout._AccordionInnerContainer"==a.declaredClass?a.contentWidget:a},this)},destroy:function(){this._animation&&this._animation.stop();k.forEach(this.getChildren(),function(a){a._wrapperWidget?a._wrapperWidget.destroy():a.destroyRecursive()});this.inherited(arguments)},
_showChild:function(a){a._wrapperWidget.containerNode.style.display="block";return this.inherited(arguments)},_hideChild:function(a){a._wrapperWidget.containerNode.style.display="none";this.inherited(arguments)},_transition:function(a,b,c){8>p("ie")&&(c=!1);this._animation&&(this._animation.stop(!0),delete this._animation);var d=this;if(a){a._wrapperWidget.set("selected",!0);var f=this._showChild(a);this.doLayout&&a.resize&&a.resize(this._containerContentBox)}b&&(b._wrapperWidget.set("selected",!1),
c||this._hideChild(b));if(c){var e=a._wrapperWidget.containerNode,i=b._wrapperWidget.containerNode,c=a._wrapperWidget.containerNode,a=h.getMarginExtents(c),c=h.getPadBorderExtents(c),g=a.h+c.h;i.style.height=d._verticalSpace-g+"px";this._animation=new t.Animation({node:e,duration:this.duration,curve:[1,this._verticalSpace-g-1],onAnimate:function(a){a=Math.floor(a);e.style.height=a+"px";i.style.height=d._verticalSpace-g-a+"px"},onEnd:function(){delete d._animation;e.style.height="auto";b._wrapperWidget.containerNode.style.display=
"none";i.style.height="auto";d._hideChild(b)}});this._animation.onStop=this._animation.onEnd;this._animation.play()}return f},_onKeyPress:function(a,b){if(!this.disabled&&!(a.altKey||!b&&!a.ctrlKey)){var c=a.charOrCode;if(b&&(c==e.LEFT_ARROW||c==e.UP_ARROW)||a.ctrlKey&&c==e.PAGE_UP)this._adjacent(!1)._buttonWidget._onTitleClick(),n.stop(a);else if(b&&(c==e.RIGHT_ARROW||c==e.DOWN_ARROW)||a.ctrlKey&&(c==e.PAGE_DOWN||c==e.TAB))this._adjacent(!0)._buttonWidget._onTitleClick(),n.stop(a)}}});p("dijit-legacy-requires")&&
z(0,function(){s(["dijit/layout/AccordionPane"])});f._InnerContainer=r;f._Button=m;return f});