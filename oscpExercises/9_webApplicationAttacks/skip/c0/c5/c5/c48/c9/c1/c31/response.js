var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:04:38 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 03 Nov 2016 05:40:34 GMT\x0aETag: \x222aeb-5405eff119880-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-3092/3093\x0aContent-Length: 3093\x0aKeep-Alive: timeout=5, max=81\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/*!\x0a * jQuery UI Slider 1.11.4\x0a * http://jqueryui.com\x0a *\x0a * Copyright jQuery Foundation and other contributors\x0a * Released under the MIT license.\x0a * http://jquery.org/license\x0a *\x0a * http://api.jqueryui.com/slider/\x0a */\x0a!function(a){\x22function\x22==typeof define&&define.amd?define([\x22jquery\x22,\x22./core\x22,\x22./mouse\x22,\x22./widget\x22],a):a(jQuery)}(function(a){return a.widget(\x22ui.slider\x22,a.ui.mouse,{version:\x221.11.4\x22,widgetEventPrefix:\x22slide\x22,options:{animate:!1,distance:0,max:100,min:0,orientation:\x22horizontal\x22,range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this.element.addClass(\x22ui-slider ui-slider-\x22+this.orientation+\x22 ui-widget ui-widget-content ui-corner-all\x22),this._refresh(),this._setOption(\x22disabled\x22,this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var b,c,d=this.options,e=this.element.find(\x22.ui-slider-handle\x22).addClass(\x22ui-state-default ui-corner-all\x22),f=\x22\x3cspan class=\x27ui-slider-handle ui-state-default ui-corner-all\x27 tabindex=\x270\x27\x3e\x3c/span\x3e\x22,g=[];for(c=d.values&&d.values.length||1,e.length\x3ec&&(e.slice(c).remove(),e=e.slice(0,c)),b=e.length;b\x3cc;b++)g.push(f);this.handles=e.add(a(g.join(\x22\x22)).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(b){a(this).data(\x22ui-slider-handle-index\x22,b)})},_createRange:function(){var b=this.options,c=\x22\x22;b.range?(b.range===!0&&(b.values?b.values.length&&2!==b.values.length?b.values=[b.values[0],b.values[0]]:a.isArray(b.values)&&(b.values=b.values.slice(0)):b.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass(\x22ui-slider-range-min ui-slider-range-max\x22).css({left:\x22\x22,bottom:\x22\x22}):(this.range=a(\x22\x3cdiv\x3e\x3c/div\x3e\x22).appendTo(this.element),c=\x22ui-slider-range ui-widget-header ui-corner-all\x22),this.range.addClass(c+(\x22min\x22===b.range||\x22max\x22===b.range?\x22 ui-slider-range-\x22+b.range:\x22\x22))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass(\x22ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all\x22),this._mouseDestroy()},_mouseCapture:function(b){var c,d,e,f,g,h,i,j,k=this,l=this.options;return!l.disabled&&(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),c={x:b.pageX,y:b.pageY},d=this._normValueFromMouse(c),e=this._valueMax()-this._valueMin()+1,this.handles.each(function(b){var c=Math.abs(d-k.values(b));(e\x3ec||e===c&&(b===k._lastChangedValue||k.values(b)===l.min))&&(e=c,f=a(this),g=b)}),h=this._start(b,g),h!==!1&&(this._mouseSliding=!0,this._handleIndex=g,f.addClass(\x22ui-state-active\x22).focus(),i=f.offset(),j=!a(b.target).parents().addBack().is(\x22.ui-slider-handle\x22),this._clickOffset=j?{left:0,top:0}:{left:b.pageX-i.left-f.width()/2,top:b.pageY-i.top-f.height()/2-(parseInt(f.css(\x22borderTopWidth\x22),10)||0)-(parseInt(f.css(\x22borderBottomWidth\x22),10)||0)+(parseInt(f.css(\x22marginTop\x22),10)||0)},this.handles.hasClass(\x22ui-state-hover\x22)||this._slide(b,g,d),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(a){var b={x:a.pageX,y:a.pageY},c=this._normValueFromMouse(b);return this._slide(a,this._handleIndex,c),!1},_mouseStop:function(a){return this.handles.removeClass(\x22ui-state-active\x22),this._mouseSliding=!1,this._stop(a,this._handleIndex),this._change(a,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation=\x22vertical\x22===this.options.orientation?\x22vertical\x22:\x22horizontal\x22},_normValueFromMouse:function(a){var b,c,d,e,f;return\x22horizontal\x22===this.orientation?(b=this.elementSize.width,c=a.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(b=this.elementSize.height,c=a.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),d=c/b,d\x3e1&&(d=1),d\x3c0&&(d=0),\x22vertical\x22===this.orientation&&(d=1-d),e=this._valueMax()-this._valueMin(),f=this._valueMin()+d*e,this._trimAlignValue(f)},_start:function(a,b){var c={handle:this.handles[b],value:this.value()};return this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger(\x22start\x22,a,c)},_slide:function(a,b,c){var d,e,f;this.options.values&&this.options.values.length?(d=this.values(b?0:1),2===this.options.values.length&&this.options.range===!0&&(0===b&&c\x3ed||1===b&&c\x3cd)&&(c=d),c!==this.values(b)&&(e=this.values(),e[b]=c,f=this._trigger(\x22slide\x22,a,{handle:this.handles[b],value:c,values:e}),d=this.values(b?0:1),f!==!1&&this.values(b,c))):c!==this.value()&&(f=this._trigger(\x22slide\x22,a,{handle:this.handles[b],value:c}),f!==!1&&this.value(c))},_stop:function(a,b){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._trigger(\x22stop\x22,a,c)},_change:function(a,b){if(!this._keySliding&&!this._mouseSliding){var c={handle:this.handles[b],value:this.value()};this.options.values&&this.options.values.length&&(c.value=this.values(b),c.values=this.values()),this._lastChangedValue=b,this._trigger(\x22change\x22,a,c)}},value:function(a){return arguments.length?(this.options.value=this._trimAlignValue(a),this._refreshValue(),void this._change(null,0)):this._value()},values:function(b,c){var d,e,f;if(arguments.length\x3e1)return this.options.values[b]=this._trimAlignValue(c),this._refreshValue(),void this._change(null,b);if(!arguments.length)return this._values();if(!a.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(b):this.value();for(d=this.options.values,e=arguments[0],f=0;f\x3cd.length;f+=1)d[f]=this._trimAlignValue(e[f]),this._change(null,f);this._refreshValue()},_setOption:function(b,c){var d,e=0;switch(\x22range\x22===b&&this.options.range===!0&&(\x22min\x22===c?(this.options.value=this._values(0),this.options.values=null):\x22max\x22===c&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),a.isArray(this.options.values)&&(e=this.options.values.length),\x22disabled\x22===b&&this.element.toggleClass(\x22ui-state-disabled\x22,!!c),this._super(b,c),b){case\x22orientation\x22:this._detectOrientation(),this.element.removeClass(\x22ui-slider-horizontal ui-slider-vertical\x22).addClass(\x22ui-slider-\x22+this.orientation),this._refreshValue(),this.handles.css(\x22horizontal\x22===c?\x22bottom\x22:\x22left\x22,\x22\x22);break;case\x22value\x22:this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case\x22values\x22:for(this._animateOff=!0,this._refreshValue(),d=0;d\x3ce;d+=1)this._change(null,d);this._animateOff=!1;break;case\x22step\x22:case\x22min\x22:case\x22max\x22:this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case\x22range\x22:this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var a=this.options.value;return a=this._trimAlignValue(a)},_values:function(a){var b,c,d;if(arguments.length)return b=this.options.values[a],b=this._trimAlignValue(b);if(this.options.values&&this.options.values.length){for(c=this.options.values.slice(),d=0;d\x3cc.length;d+=1)c[d]=this._trimAlignValue(c[d]);return c}return[]},_trimAlignValue:function(a){if(a\x3c=this._valueMin())return this._valueMin();if(a\x3e=this._valueMax())return this._valueMax();var b=this.options.step\x3e0?this.options.step:1,c=(a-this._valueMin())%b,d=a-c;return 2*Math.abs(c)\x3e=b&&(d+=c\x3e0?b:-b),parseFloat(d.toFixed(5))},_calculateNewMax:function(){var a=this.options.max,b=this._valueMin(),c=this.options.step,d=Math.floor(+(a-b).toFixed(this._precision())/c)*c;a=d+b,this.max=parseFloat(a.toFixed(this._precision()))},_precision:function(){var a=this._precisionOf(this.options.step);return null!==this.options.min&&(a=Math.max(a,this._precisionOf(this.options.min))),a},_precisionOf:function(a){var b=a.toString(),c=b.indexOf(\x22.\x22);return c===-1?0:b.length-c-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshValue:function(){var b,c,d,e,f,g=this.options.range,h=this.options,i=this,j=!this._animateOff&&h.animate,k={};this.options.values&&this.options.values.length?this.handles.each(function(d){c=(i.values(d)-i._valueMin())/(i._valueMax()-i._valueMin())*100,k[\x22horizontal\x22===i.orientation?\x22left\x22:\x22bottom\x22]=c+\x22%\x22,a(this).stop(1,1)[j?\x22animate\x22:\x22css\x22](k,h.animate),i.options.range===!0&&(\x22horizontal\x22===i.orientation?(0===d&&i.range.stop(1,1)[j?\x22animate\x22:\x22css\x22]({left:c+\x22%\x22},h.animate),1===d&&i.range[j?\x22animate\x22:\x22css\x22]({width:c-b+\x22%\x22},{queue:!1,duration:h.animate})):(0===d&&i.range.stop(1,1)[j?\x22animate\x22:\x22css\x22]({bottom:c+\x22%\x22},h.animate),1===d&&i.range[j?\x22animate\x22:\x22css\x22]({height:c-b+\x22%\x22},{queue:!1,duration:h.animate}))),b=c}):(d=this.value(),e=this._valueMin(),f=this._valueMax(),c=f!==e?(d-e)/(f-e)*100:0,k[\x22horizontal\x22===this.orientation?\x22left\x22:\x22bottom\x22]=c+\x22%\x22,this.handle.stop(1,1)[j?\x22animate\x22:\x22css\x22](k,h.animate),\x22min\x22===g&&\x22horizontal\x22===this.orientation&&this.range.stop(1,1)[j?\x22animate\x22:\x22css\x22]({width:c+\x22%\x22},h.animate),\x22max\x22===g&&\x22horizontal\x22===this.orientation&&this.range[j?\x22animate\x22:\x22css\x22]({width:100-c+\x22%\x22},{queue:!1,duration:h.animate}),\x22min\x22===g&&\x22vertical\x22===this.orientation&&this.range.stop(1,1)[j?\x22animate\x22:\x22css\x22]({height:c+\x22%\x22},h.animate),\x22max\x22===g&&\x22vertical\x22===this.orientation&&this.range[j?\x22animate\x22:\x22css\x22]({height:100-c+\x22%\x22},{queue:!1,duration:h.animate}))},_handleEvents:{keydown:function(b){var c,d,e,f,g=a(b.target).data(\x22ui-slider-handle-index\x22);switch(b.keyCode){case a.ui.keyCode.HOME:case a.ui.keyCode.END:case a.ui.keyCode.PAGE_UP:case a.ui.keyCode.PAGE_DOWN:case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(b.preventDefault(),!this._keySliding&&(this._keySliding=!0,a(b.target).addClass(\x22ui-state-active\x22),c=this._start(b,g),c===!1))return}switch(f=this.options.step,d=e=this.options.values&&this.options.values.length?this.values(g):this.value(),b.keyCode){case a.ui.keyCode.HOME:e=this._valueMin();break;case a.ui.keyCode.END:e=this._valueMax();break;case a.ui.keyCode.PAGE_UP:e=this._trimAlignValue(d+(this._valueMax()-this._valueMin())/this.numPages);break;case a.ui.keyCode.PAGE_DOWN:e=this._trimAlignValue(d-(this._valueMax()-this._valueMin())/this.numPages);break;case a.ui.keyCode.UP:case a.ui.keyCode.RIGHT:if(d===this._valueMax())return;e=this._trimAlignValue(d+f);break;case a.ui.keyCode.DOWN:case a.ui.keyCode.LEFT:if(d===this._valueMin())return;e=this._trimAlignValue(d-f)}this._slide(b,g,e)},keyup:function(b){var c=a(b.target).data(\x22ui-slider-handle-index\x22);this._keySliding&&(this._keySliding=!1,this._stop(b,c),this._change(b,c),a(b.target).removeClass(\x22ui-state-active\x22))}}})});'}