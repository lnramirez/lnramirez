//>>built
define("dojox/geo/charting/widget/Map","dojo/_base/kernel,dojo/_base/lang,dojo/_base/declare,dojo/_base/html,dojo/dom-geometry,dijit/_Widget,../Map".split(","),function(h,e,d,i,c,f,g){return d("dojox.geo.charting.widget.Map",f,{shapeData:"",dataStore:null,dataBindingAttribute:"",dataBindingValueFunction:null,markerData:"",series:"",adjustMapCenterOnResize:null,adjustMapScaleOnResize:null,animateOnResize:null,onFeatureClick:null,onFeatureOver:null,enableMouseSupport:null,enableTouchSupport:null,enableMouseZoom:null,
enableMousePan:null,enableKeyboardSupport:!1,showTooltips:!1,enableFeatureZoom:null,colorAnimationDuration:0,mouseClickThreshold:2,_mouseInteractionSupport:null,_touchInteractionSupport:null,_keyboardInteractionSupport:null,constructor:function(){this.map=null},startup:function(){this.inherited(arguments);this.map&&this.map.fitToMapContents()},postMixInProperties:function(){this.inherited(arguments)},create:function(a,c){this.inherited(arguments)},getInnerMap:function(){return this.map},buildRendering:function(){this.inherited(arguments);
if(this.shapeData){this.map=new g(this.domNode,this.shapeData);this.markerData&&0<this.markerData.length&&this.map.setMarkerData(this.markerData);this.dataStore&&(this.dataBindingValueFunction&&this.map.setDataBindingValueFunction(this.dataBindingValueFunction),this.map.setDataStore(this.dataStore,this.dataBindingAttribute));this.series&&0<this.series.length&&this.map.addSeries(this.series);if(this.onFeatureClick)this.map.onFeatureClick=this.onFeatureClick;if(this.onFeatureOver)this.map.onFeatureOver=
this.onFeatureOver;if(this.enableMouseSupport){if(!dojox.geo.charting.MouseInteractionSupport)throw Error("Can't find dojox.geo.charting.MouseInteractionSupport. Didn't you forget to dojo.require() it?");var a={};a.enablePan=this.enableMousePan;a.enableZoom=this.enableMouseZoom;a.mouseClickThreshold=this.mouseClickThreshold;this._mouseInteractionSupport=new dojox.geo.charting.MouseInteractionSupport(this.map,a);this._mouseInteractionSupport.connect()}if(this.enableTouchSupport){if(!dojox.geo.charting.TouchInteractionSupport)throw Error("Can't find dojox.geo.charting.TouchInteractionSupport. Didn't you forget to dojo.require() it?");
this._touchInteractionSupport=new dojox.geo.charting.TouchInteractionSupport(this.map,{});this._touchInteractionSupport.connect()}if(this.enableKeyboardSupport){if(!dojox.geo.charting.KeyboardInteractionSupport)throw Error("Can't find dojox.geo.charting.KeyboardInteractionSupport. Didn't you forget to dojo.require() it?");this._keyboardInteractionSupport=new dojox.geo.charting.KeyboardInteractionSupport(this.map,{});this._keyboardInteractionSupport.connect()}this.map.showTooltips=this.showTooltips;
this.map.enableFeatureZoom=this.enableFeatureZoom;this.map.colorAnimationDuration=this.colorAnimationDuration}},resize:function(a,d){var b;switch(arguments.length){case 1:b=e.mixin({},a);c.setMarginBox(this.domNode,b);break;case 2:b={w:arguments[0],h:arguments[1]},c.setMarginBox(this.domNode,b)}this.map&&this.map.resize(this.adjustMapCenterOnResize,this.adjustMapScaleOnResize,this.animateOnResize)}})});