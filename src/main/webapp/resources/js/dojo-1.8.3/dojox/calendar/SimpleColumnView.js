//>>built
require({cache:{"url:dojox/calendar/templates/SimpleColumnView.html":'<div data-dojo-attach-events="keydown:_onKeyDown">\t\n\t<div data-dojo-attach-point="header" class="dojoxCalendarHeader">\n\t\t<div class="dojoxCalendarYearColumnHeader" data-dojo-attach-point="yearColumnHeader">\n\t\t\t<table><tr><td><span data-dojo-attach-point="yearColumnHeaderContent"></span></td></tr></table>\t\t\n\t\t</div>\n\t\t<div data-dojo-attach-point="columnHeader" class="dojoxCalendarColumnHeader">\n\t\t\t<table data-dojo-attach-point="columnHeaderTable" class="dojoxCalendarColumnHeaderTable" cellpadding="0" cellspacing="0"></table>\n\t\t</div>\n\t</div>\t\n\t<div data-dojo-attach-point="vScrollBar" class="dojoxCalendarVScrollBar">\n\t\t<div data-dojo-attach-point="vScrollBarContent" style="visibility:hidden;position:relative; width:1px; height:1px;" ></div>\n\t</div>\t\n\t<div data-dojo-attach-point="scrollContainer" class="dojoxCalendarScrollContainer">\n\t\t<div data-dojo-attach-point="sheetContainer" style="position:relative;left:0;right:0;margin:0;padding:0">\n\t\t\t<div data-dojo-attach-point="rowHeader" class="dojoxCalendarRowHeader">\n\t\t\t\t<table data-dojo-attach-point="rowHeaderTable" class="dojoxCalendarRowHeaderTable" cellpadding="0" cellspacing="0"></table>\n\t\t\t</div>\n\t\t\t<div data-dojo-attach-point="grid" class="dojoxCalendarGrid">\n\t\t\t\t<table data-dojo-attach-point="gridTable" class="dojoxCalendarGridTable" cellpadding="0" cellspacing="0" style="width:100%"></table>\n\t\t\t</div>\n\t\t\t<div data-dojo-attach-point="itemContainer" class="dojoxCalendarContainer" data-dojo-attach-event="mousedown:_onGridMouseDown,mouseup:_onGridMouseUp,ondblclick:_onGridDoubleClick,touchstart:_onGridTouchStart,touchmove:_onGridTouchMove,touchend:_onGridTouchEnd">\n\t\t\t\t<table data-dojo-attach-point="itemContainerTable" class="dojoxCalendarContainerTable" cellpadding="0" cellspacing="0" style="width:100%"></table>\n\t\t\t</div>\n\t\t</div> \n\t</div>\n</div>\n\n'}});
define("dojox/calendar/SimpleColumnView","./ViewBase,dijit/_TemplatedMixin,./_VerticalScrollBarBase,dojo/text!./templates/SimpleColumnView.html,dojo/_base/declare,dojo/_base/event,dojo/_base/lang,dojo/_base/array,dojo/_base/sniff,dojo/_base/fx,dojo/_base/html,dojo/on,dojo/dom,dojo/dom-class,dojo/dom-style,dojo/dom-geometry,dojo/dom-construct,dojo/mouse,dojo/query,dojox/html/metrics".split(","),function(u,v,w,x,y,n,o,E,r,z,A,p,F,i,k,s,m,B,l,C){return y("dojox.calendar.SimpleColumnView",[u,v],{baseClass:"dojoxCalendarSimpleColumnView",
templateString:x,viewKind:"columns",_setTabIndexAttr:"domNode",renderData:null,startDate:null,columnCount:7,minHours:8,maxHours:18,hourSize:100,timeSlotDuration:15,verticalRenderer:null,percentOverlap:70,horizontalGap:4,_columnHeaderHandlers:null,constructor:function(){this.invalidatingProperties="columnCount,startDate,minHours,maxHours,hourSize,verticalRenderer,rowHeaderTimePattern,columnHeaderDatePattern,timeSlotDuration,percentOverlap,horizontalGap,scrollBarRTLPosition,itemToRendererKindFunc,layoutPriorityFunction,formatItemTimeFunc,textDir,items".split(",");
this._columnHeaderHandlers=[]},destroy:function(a){this._cleanupColumnHeader();this.scrollBar&&this.scrollBar.destroy(a);this.inherited(arguments)},_scrollBar_onScroll:function(a){this._setScrollPosition(a)},buildRendering:function(){this.inherited(arguments);if(this.vScrollBar)this.scrollBar=new w({content:this.vScrollBarContent},this.vScrollBar),this.scrollBar.on("scroll",o.hitch(this,this._scrollBar_onScroll)),this._viewHandles.push(p(this.scrollContainer,B.wheel,dojo.hitch(this,this._mouseWheelScrollHander)))},
postscript:function(){this.inherited(arguments);this._initialized=!0;this.invalidRendering||this.refreshRendering()},_setVerticalRendererAttr:function(a){this._destroyRenderersByKind("vertical");this._set("verticalRenderer",a)},_createRenderData:function(){var a={};a.minHours=this.get("minHours");a.maxHours=this.get("maxHours");a.hourSize=this.get("hourSize");a.hourCount=a.maxHours-a.minHours;a.slotDuration=this.get("timeSlotDuration");a.slotSize=Math.ceil(a.hourSize/(60/a.slotDuration));a.hourSize=
a.slotSize*(60/a.slotDuration);a.sheetHeight=a.hourSize*a.hourCount;a.scrollbarWidth=C.getScrollbar().w+1;a.dateLocaleModule=this.dateLocaleModule;a.dateClassObj=this.dateClassObj;a.dateModule=this.dateModule;a.dates=[];a.columnCount=this.get("columnCount");var b=this.get("startDate");null==b&&(b=new a.dateClassObj);this.startDate=b=this.floorToDay(b,!1,a);for(var c=0;c<a.columnCount;c++)a.dates.push(b),b=a.dateModule.add(b,"day",1),b=this.floorToDay(b,!1,a);a.startTime=new a.dateClassObj(a.dates[0]);
a.startTime.setHours(a.minHours);a.endTime=new a.dateClassObj(a.dates[a.columnCount-1]);a.endTime.setHours(a.maxHours);if(this.displayedItemsInvalidated)this.displayedItemsInvalidated=!1,this._computeVisibleItems(a),this._isEditing&&this._endItemEditing(null,!1);else if(this.renderData)a.items=this.renderData.items;return a},_validateProperties:function(){this.inherited(arguments);var a=this.minHours;if(0>a||24<a||isNaN(a))this.minHours=0;a=this.maxHours;if(0>a||24<a||isNaN(a))this.minHours=24;if(this.minHours>
this.maxHours){var b=this.maxHours;this.maxHours=this.minHours;this.maxHours=b}if(1>a-this.minHours)this.minHours=0,this.maxHours=24;if(1>this.columnCount||isNaN(this.columnCount))this.columnCount=1;if(0>this.percentOverlap||100<this.percentOverlap||isNaN(this.percentOverlap))this.percentOverlap=70;if(5>this.hourSize||isNaN(this.hourSize))this.hourSize=10;a=this.timeSlotDuration;1>a||60<a||isNaN(a)},_setStartDateAttr:function(a){this.displayedItemsInvalidated=!0;this._set("startDate",a)},_setColumnCountAttr:function(a){this.displayedItemsInvalidated=
!0;this._set("columnCount",a)},__fixEvt:function(a){a.sheet="primary";a.source=this;return a},_formatRowHeaderLabel:function(a){return this.renderData.dateLocaleModule.format(a,{selector:"time",timePattern:this.rowHeaderTimePattern})},_formatColumnHeaderLabel:function(a){return this.renderData.dateLocaleModule.format(a,{selector:"date",datePattern:this.columnHeaderDatePattern,formatLength:"medium"})},startTimeOfDay:null,scrollBarRTLPosition:"left",_getStartTimeOfDay:function(){var a=(this.get("maxHours")-
this.get("minHours"))*this._getScrollPosition()/this.renderData.sheetHeight;return{hours:this.renderData.minHours+Math.floor(a),minutes:60*(a-Math.floor(a))}},_getEndTimeOfDay:function(){var a=(this.get("maxHours")-this.get("minHours"))*(this._getScrollPosition()+this.scrollContainer.offsetHeight)/this.renderData.sheetHeight;return{hours:this.renderData.minHours+Math.floor(a),minutes:60*(a-Math.floor(a))}},_setStartTimeOfDayAttr:function(a){this._setStartTimeOfDay(a.hours,a.minutes,a.duration,a.easing)},
_getStartTimeOfDayAttr:function(){return this._getStartTimeOfDay()},_setStartTimeOfDay:function(a,b,c,e){var d=this.renderData,a=a||d.minHours,b=b||0,c=c||0;0>b?b=0:59<b&&(b=59);0>a?a=0:24<a&&(a=24);var a=60*a+b,b=60*d.minHours,h=60*d.maxHours;a<b?a=b:a>h&&(a=h);a=(a-b)*d.sheetHeight/(h-b);a=Math.min(d.sheetHeight-this.scrollContainer.offsetHeight,a);this._scrollToPosition(a,c,e)},_scrollToPosition:function(a,b,c){if(b){this._scrollAnimation&&this._scrollAnimation.stop();var e=this._getScrollPosition(),
b=Math.abs((a-e)*b/this.renderData.sheetHeight);this._scrollAnimation=new z.Animation({curve:[e,a],duration:b,easing:c,onAnimate:o.hitch(this,function(a){this._setScrollImpl(a)})});this._scrollAnimation.play()}else this._setScrollImpl(a)},_setScrollImpl:function(a){this._setScrollPosition(a);this.scrollBar&&this.scrollBar.set("value",a)},ensureVisibility:function(a,b,c,e,d){e=void 0==e?this.renderData.slotDuration:e;if(this.scrollable&&this.autoScroll){var a=60*a.getHours()+a.getMinutes()-e,b=60*
b.getHours()+b.getMinutes()+e,e=this._getStartTimeOfDay(),h=this._getEndTimeOfDay(),e=60*e.hours+e.minutes,h=60*h.hours+h.minutes,f=!1,g=null;switch(c){case "start":f=a>=e&&a<=h;g=a;break;case "end":f=b>=e&&b<=h;g=b-(h-e);break;case "both":f=a>=e&&b<=h,g=a}f||this._setStartTimeOfDay(Math.floor(g/60),g%60,d)}},scrollView:function(a){var b=this._getStartTimeOfDay(),b=60*b.hours+b.minutes+a*this.timeSlotDuration;this._setStartTimeOfDay(Math.floor(b/60),b%60)},_mouseWheelScrollHander:function(a){this.scrollView(0<
a.wheelDelta?-1:1)},refreshRendering:function(){if(this._initialized){this._validateProperties();var a=this.renderData,b=this._createRenderData();this.renderData=b;this._createRendering(b,a);this._layoutRenderers(b)}},_createRendering:function(a,b){k.set(this.sheetContainer,"height",a.sheetHeight+"px");this._configureScrollBar(a);this._buildColumnHeader(a,b);this._buildRowHeader(a,b);this._buildGrid(a,b);this._buildItemContainer(a,b)},_configureScrollBar:function(a){r("ie")&&this.scrollBar&&k.set(this.scrollBar.domNode,
"width",a.scrollbarWidth+1+"px");var b=this.isLeftToRight()?!0:"right"==this.scrollBarRTLPosition,c=b?"right":"left",e=b?"left":"right";this.scrollBar&&(this.scrollBar.set("maximum",a.sheetHeight),k.set(this.scrollBar.domNode,c,0),k.set(this.scrollBar.domNode,b?"left":"right","auto"));k.set(this.scrollContainer,c,a.scrollbarWidth+"px");k.set(this.scrollContainer,e,"0");k.set(this.header,c,a.scrollbarWidth+"px");k.set(this.header,e,"0");this.buttonContainer&&null!=this.owner&&this.owner.currentView==
this&&(k.set(this.buttonContainer,c,a.scrollbarWidth+"px"),k.set(this.buttonContainer,e,"0"))},_columnHeaderClick:function(a){n.stop(a);var b=l("td",this.columnHeaderTable).indexOf(a.currentTarget);this._onColumnHeaderClick({index:b,date:this.renderData.dates[b],triggerEvent:a})},_buildColumnHeader:function(a,b){var c=this.columnHeaderTable;if(c){var e=a.columnCount-(b?b.columnCount:0);if(8==r("ie"))if(null==this._colTableSave)this._colTableSave=o.clone(c);else if(0>e)this._cleanupColumnHeader(),
this.columnHeader.removeChild(c),m.destroy(c),this.columnHeaderTable=c=o.clone(this._colTableSave),this.columnHeader.appendChild(c),e=a.columnCount;var d=l("tbody",c),h=l("tr",c),f,d=1==d.length?d[0]:A.create("tbody",null,c),h=1==h.length?h[0]:m.create("tr",null,d);if(0<e)for(d=0;d<e;d++){f=m.create("td",null,h);var g=[];g.push(p(f,"click",o.hitch(this,this._columnHeaderClick)));r("touch")?(g.push(p(f,"touchstart",function(a){n.stop(a);i.add(a.currentTarget,"Active")})),g.push(p(f,"touchend",function(a){n.stop(a);
i.remove(a.currentTarget,"Active")}))):(g.push(p(f,"mousedown",function(a){n.stop(a);i.add(a.currentTarget,"Active")})),g.push(p(f,"mouseup",function(a){n.stop(a);i.remove(a.currentTarget,"Active")})),g.push(p(f,"mouseover",function(a){n.stop(a);i.add(a.currentTarget,"Hover")})),g.push(p(f,"mouseout",function(a){n.stop(a);i.remove(a.currentTarget,"Hover")})));this._columnHeaderHandlers.push(g)}else{e=-e;for(d=0;d<e;d++){f=h.lastChild;h.removeChild(f);m.destroy(f);for(f=this._columnHeaderHandlers.pop();0<
f.length;)f.pop().remove()}}l("td",c).forEach(function(b,c){b.className="";0==c?i.add(b,"first-child"):c==this.renderData.columnCount-1&&i.add(b,"last-child");var d=a.dates[c];this._setText(b,this._formatColumnHeaderLabel(d));this.styleColumnHeaderCell(b,d,a)},this);this.yearColumnHeaderContent&&this._setText(this.yearColumnHeaderContent,a.dateLocaleModule.format(a.dates[0],{selector:"date",datePattern:"yyyy"}))}},_cleanupColumnHeader:function(){for(;0<this._columnHeaderHandlers.length;)for(var a=
this._columnHeaderHandlers.pop();0<a.length;)a.pop().remove()},styleColumnHeaderCell:function(a,b){if(this.isToday(b))return i.add(a,"dojoxCalendarToday");if(this.isWeekEnd(b))return i.add(a,"dojoxCalendarWeekend")},_buildRowHeader:function(a,b){var c=this.rowHeaderTable;if(c){k.set(c,"height",a.sheetHeight+"px");var e=l("tbody",c),d,e=1==e.length?e[0]:m.create("tbody",null,c),h=a.hourCount-(b?b.hourCount:0);if(0<h)for(var f=0;f<h;f++)d=m.create("tr",null,e),m.create("td",null,d);else{h=-h;for(f=
0;f<h;f++)e.removeChild(e.lastChild)}var g=new Date(2E3,0,1,0,0,0);l("tr",c).forEach(function(b,c){var d=l("td",b)[0];d.className="";var e=a.hourSize;7==r("ie")&&(e-=2);k.set(b,"height",e+"px");g.setHours(this.renderData.minHours+c);this.styleRowHeaderCell(d,g.getHours(),a);this._setText(d,this._formatRowHeaderLabel(g))},this)}},styleRowHeaderCell:function(){},_buildGrid:function(a,b){var c=this.gridTable;if(c){k.set(c,"height",a.sheetHeight+"px");var e=Math.floor(60/a.slotDuration)*a.hourCount,d=
e-(b?Math.floor(60/b.slotDuration)*b.hourCount:0),h=0<d,f=a.columnCount-(b?b.columnCount:0);if(8==r("ie"))if(null==this._gridTableSave)this._gridTableSave=o.clone(c);else if(0>f)this.grid.removeChild(c),m.destroy(c),this.gridTable=c=o.clone(this._gridTableSave),this.grid.appendChild(c),f=a.columnCount,d=e,h=!0;var g=l("tbody",c),g=1==g.length?g[0]:m.create("tbody",null,c);if(h)for(var j=0;j<d;j++)m.create("tr",null,g);else{d=-d;for(j=0;j<d;j++)g.removeChild(g.lastChild)}var D=Math.floor(60/a.slotDuration)*
a.hourCount-d,t=h||0<f,f=t?f:-f;l("tr",c).forEach(function(b,c){if(t)for(var d=c>=D?a.columnCount:f,c=0;c<d;c++)m.create("td",null,b);else for(c=0;c<f;c++)b.removeChild(b.lastChild)});l("tr",c).forEach(function(b,c){k.set(b,"height",a.slotSize+"px");0==c?i.add(b,"first-child"):c==e-1&&i.add(b,"last-child");var d=c*this.renderData.slotDuration%60;l("td",b).forEach(function(b,c){b.className="";0==c?i.add(b,"first-child"):c==this.renderData.columnCount-1&&i.add(b,"last-child");this.styleGridColumn(b,
a.dates[c],a);switch(d){case 0:i.add(b,"hour");break;case 30:i.add(b,"halfhour");break;case 15:case 45:i.add(b,"quarterhour")}},this)},this)}},styleGridColumn:function(a,b){if(this.isToday(b))return i.add(a,"dojoxCalendarToday");if(this.isWeekEnd(b))return i.add(a,"dojoxCalendarWeekend")},_buildItemContainer:function(a,b){var c=this.itemContainerTable;if(c){var e=[];k.set(c,"height",a.sheetHeight+"px");var d=a.columnCount-(b?b.columnCount:0);if(8==r("ie"))if(null==this._itemTableSave)this._itemTableSave=
o.clone(c);else if(0>d)this.itemContainer.removeChild(c),this._recycleItemRenderers(!0),m.destroy(c),this.itemContainerTable=c=o.clone(this._itemTableSave),this.itemContainer.appendChild(c),d=a.columnCount;var h=l("tbody",c),f=l("tr",c),h=1==h.length?h[0]:m.create("tbody",null,c),f=1==f.length?f[0]:m.create("tr",null,h);if(0<d)for(var g=0;g<d;g++)h=m.create("td",null,f),m.create("div",{className:"dojoxCalendarContainerColumn"},h);else{d=-d;for(g=0;g<d;g++)f.removeChild(f.lastChild)}l("td>div",c).forEach(function(b){k.set(b,
{height:a.sheetHeight+"px"});e.push(b)},this);a.cells=e}},_overlapLayoutPass2:function(a){var b,c,e,d;e=a[a.length-1];for(c=0;c<e.length;c++)e[c].extent=1;for(b=0;b<a.length-1;b++){e=a[b];for(c=0;c<e.length;c++)if(d=e[c],-1==d.extent){d.extent=1;for(var h=0,f=!1,g=b+1;g<a.length&&!f;g++){for(var j=a[g],i=0;i<j.length&&!f;i++){var k=j[i];d.start<k.end&&k.start<d.end&&(f=!0)}f||h++}d.extent+=h}}},_defaultItemToRendererKindFunc:function(){return"vertical"},_layoutInterval:function(a,b,c,e,d){var h=[];
a.colW=this.itemContainer.offsetWidth/a.columnCount;for(var f=0;f<d.length;f++){var g=d[f];"vertical"==this._itemToRendererKind(g)&&h.push(g)}0<h.length&&this._layoutVerticalItems(a,b,c,e,h)},_layoutVerticalItems:function(a,b,c,e,d){if(null!=this.verticalRenderer){for(var b=a.cells[b],h=[],f=0;f<d.length;f++){var g=d[f],j=this.computeRangeOverlap(a,g.startTime,g.endTime,c,e),i=this.computeProjectionOnDate(a,c,j[0],a.sheetHeight),l=this.computeProjectionOnDate(a,c,j[1],a.sheetHeight);l>i&&(g=o.mixin({start:i,
end:l,range:j,item:g},g),h.push(g))}c=this.computeOverlapping(h,this._overlapLayoutPass2).numLanes;e=this.percentOverlap/100;for(f=0;f<h.length;f++){g=h[f];i=g.lane;j=g.extent;0==e?(d=1==c?a.colW:(a.colW-(c-1)*this.horizontalGap)/c,i*=d+this.horizontalGap,d=1==j?d:d*j+(j-1)*this.horizontalGap,d=100*d/a.colW,i=100*i/a.colW):(d=1==c?100:100/(c-(c-1)*e),i*=d-e*d,d=1==j?d:d*(j-(j-1)*e));j=this._createRenderer(g,"vertical",this.verticalRenderer,"dojoxCalendarVertical");k.set(j.container,{top:g.start+"px",
left:i+"%",width:d+"%",height:g.end-g.start+1+"px"});var i=this.isItemBeingEdited(g),l=this.isItemSelected(g),n=this.isItemHovered(g),p=this.isItemFocused(g),q=j.renderer;q.set("hovered",n);q.set("selected",l);q.set("edited",i);q.set("focused",this.showFocus?p:!1);q.set("moveEnabled",this.isItemMoveEnabled(g,"vertical"));q.set("resizeEnabled",this.isItemResizeEnabled(g,"vertical"));this.applyRendererZIndex(g,j,n,l,i,p);q.updateRendering&&q.updateRendering(d,g.end-g.start+1);m.place(j.container,b);
k.set(j.container,"display","block")}}},_sortItemsFunction:function(a,b){var c=this.dateModule.compare(a.startTime,b.startTime);0==c&&(c=-1*this.dateModule.compare(a.endTime,b.endTime));return this.isLeftToRight()?c:-c},getTime:function(a,b,c,e){null!=a&&(c=s.position(this.itemContainer,!0),a.touches?(e=void 0==e?0:e,b=a.touches[e].pageX-c.x,c=a.touches[e].pageY-c.y):(b=a.pageX-c.x,c=a.pageY-c.y));a=s.getContentBox(this.itemContainer);this.isLeftToRight()||(b=a.w-b);0>b?b=0:b>a.w&&(b=a.w-1);0>c?c=
0:c>a.h&&(c=a.h-1);b=Math.floor(b/(s.getMarginBox(this.itemContainer).w/this.renderData.columnCount));c=this.getTimeOfDay(c,this.renderData);a=null;b<this.renderData.dates.length&&(a=this.newDate(this.renderData.dates[b]),a=this.floorToDay(a,!0),a.setHours(c.hours),a.setMinutes(c.minutes));return a},_onGridMouseUp:function(a){this.inherited(arguments);if(this._gridMouseDown)this._gridMouseDown=!1,this._onGridClick({date:this.getTime(a),triggerEvent:a})},_onGridTouchStart:function(a){this.inherited(arguments);
var b=this._gridProps;b.moved=!1;b.start=a.touches[0].screenY;b.scrollTop=this._getScrollPosition()},_onGridTouchMove:function(a){this.inherited(arguments);if(1<a.touches.length&&!this._isEditing)n.stop(a);else if(this._gridProps&&!this._isEditing){var b=a.touches[0].screenX,c=a.touches[0].screenY,e=this._edProps;if(!e||e&&(25<Math.abs(b-e.start.x)||25<Math.abs(c-e.start.y)))this._gridProps.moved=!0,b=this._gridProps.scrollTop-(a.touches[0].screenY-this._gridProps.start),c=this.itemContainer.offsetHeight-
this.scrollContainer.offsetHeight,0>b?(this._gridProps.start=a.touches[0].screenY,this._setScrollImpl(0),this._gridProps.scrollTop=0):b>c?(this._gridProps.start=a.touches[0].screenY,this._setScrollImpl(c),this._gridProps.scrollTop=c):this._setScrollImpl(b)}},_onGridTouchEnd:function(a){this.inherited(arguments);var b=this._gridProps;if(b){if(!this._isEditing&&!b.moved&&(!b.fromItem&&!b.editingOnStart&&this.selectFromEvent(a,null,null,!0),!b.fromItem))this._pendingDoubleTap&&this._pendingDoubleTap.grid?
(this._onGridDoubleClick({date:this.getTime(this._gridProps.event),triggerEvent:this._gridProps.event}),clearTimeout(this._pendingDoubleTap.timer),delete this._pendingDoubleTap):(this._onGridClick({date:this.getTime(this._gridProps.event),triggerEvent:this._gridProps.event}),this._pendingDoubleTap={grid:!0,timer:setTimeout(o.hitch(this,function(){delete this._pendingDoubleTap}),this.doubleTapDelay)});this._gridProps=null}},_onColumnHeaderClick:function(a){this._dispatchCalendarEvt(a,"onColumnHeaderClick")},
onColumnHeaderClick:function(){},getTimeOfDay:function(a,b){var c=60*b.minHours,c=c+a*(60*b.maxHours-c)/b.sheetHeight;return{hours:Math.floor(c/60),minutes:Math.floor(c%60)}},_isItemInView:function(a){var b=this.inherited(arguments);if(b){var c=this.renderData;if(c.dateModule.difference(a.startTime,a.endTime,"millisecond")>36E5*(24-c.maxHours+c.minHours))return!0;var e=60*a.startTime.getHours()+a.startTime.getMinutes(),d=60*a.endTime.getHours()+a.endTime.getMinutes(),h=60*c.minHours,c=60*c.maxHours;
if(0<e&&e<h||e>c&&1440>=e||0<d&&d<h||d>c&&1440>=d)return!1}return b},_ensureItemInView:function(a){var b,c=a.startTime,e=a.endTime,d=this.renderData,h=d.dateModule,f=Math.abs(h.difference(a.startTime,a.endTime,"millisecond"));if(f>36E5*(24-d.maxHours+d.minHours))return!1;var c=60*c.getHours()+c.getMinutes(),e=60*e.getHours()+e.getMinutes(),g=60*d.minHours,i=60*d.maxHours;if(0<c&&c<g)this.floorToDay(a.startTime,!0,d),a.startTime.setHours(d.minHours),a.endTime=h.add(a.startTime,"millisecond",f),b=!0;
else if(c>i&&1440>=c)this.floorToDay(a.startTime,!0,d),a.startTime=h.add(a.startTime,"day",1),a.startTime.setHours(d.minHours),a.endTime=h.add(a.startTime,"millisecond",f),b=!0;if(0<e&&e<g)this.floorToDay(a.endTime,!0,d),a.endTime=h.add(a.endTime,"day",-1),a.endTime.setHours(d.maxHours),a.startTime=h.add(a.endTime,"millisecond",-f),b=!0;else if(e>i&&1440>=e)this.floorToDay(a.endTime,!0,d),a.endTime.setHours(d.maxHours),a.startTime=h.add(a.endTime,"millisecond",-f),b=!0;return b=b||this.inherited(arguments)},
_onScrollTimer_tick:function(){this._scrollToPosition(this._getScrollPosition()+this._scrollProps.scrollStep)},snapUnit:"minute",snapSteps:15,minDurationUnit:"minute",minDurationSteps:15,liveLayout:!1,stayInView:!0,allowStartEndSwap:!0,allowResizeLessThan24H:!0})});