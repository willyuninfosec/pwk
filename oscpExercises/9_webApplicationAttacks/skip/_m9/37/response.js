var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:04:38 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 03 Nov 2016 05:40:34 GMT\x0aETag: \x2210a2-5405eff119880-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-1331/1332\x0aContent-Length: 1332\x0aKeep-Alive: timeout=5, max=29\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/*!\x0a * jQuery UI Selectable 1.11.4\x0a * http://jqueryui.com\x0a *\x0a * Copyright jQuery Foundation and other contributors\x0a * Released under the MIT license.\x0a * http://jquery.org/license\x0a *\x0a * http://api.jqueryui.com/selectable/\x0a */\x0a!function(a){\x22function\x22==typeof define&&define.amd?define([\x22jquery\x22,\x22./core\x22,\x22./mouse\x22,\x22./widget\x22],a):a(jQuery)}(function(a){return a.widget(\x22ui.selectable\x22,a.ui.mouse,{version:\x221.11.4\x22,options:{appendTo:\x22body\x22,autoRefresh:!0,distance:0,filter:\x22*\x22,tolerance:\x22touch\x22,selected:null,selecting:null,start:null,stop:null,unselected:null,unselecting:null},_create:function(){var b,c=this;this.element.addClass(\x22ui-selectable\x22),this.dragged=!1,this.refresh=function(){b=a(c.options.filter,c.element[0]),b.addClass(\x22ui-selectee\x22),b.each(function(){var b=a(this),c=b.offset();a.data(this,\x22selectable-item\x22,{element:this,$element:b,left:c.left,top:c.top,right:c.left+b.outerWidth(),bottom:c.top+b.outerHeight(),startselected:!1,selected:b.hasClass(\x22ui-selected\x22),selecting:b.hasClass(\x22ui-selecting\x22),unselecting:b.hasClass(\x22ui-unselecting\x22)})})},this.refresh(),this.selectees=b.addClass(\x22ui-selectee\x22),this._mouseInit(),this.helper=a(\x22\x3cdiv class=\x27ui-selectable-helper\x27\x3e\x3c/div\x3e\x22)},_destroy:function(){this.selectees.removeClass(\x22ui-selectee\x22).removeData(\x22selectable-item\x22),this.element.removeClass(\x22ui-selectable ui-selectable-disabled\x22),this._mouseDestroy()},_mouseStart:function(b){var c=this,d=this.options;this.opos=[b.pageX,b.pageY],this.options.disabled||(this.selectees=a(d.filter,this.element[0]),this._trigger(\x22start\x22,b),a(d.appendTo).append(this.helper),this.helper.css({left:b.pageX,top:b.pageY,width:0,height:0}),d.autoRefresh&&this.refresh(),this.selectees.filter(\x22.ui-selected\x22).each(function(){var d=a.data(this,\x22selectable-item\x22);d.startselected=!0,b.metaKey||b.ctrlKey||(d.$element.removeClass(\x22ui-selected\x22),d.selected=!1,d.$element.addClass(\x22ui-unselecting\x22),d.unselecting=!0,c._trigger(\x22unselecting\x22,b,{unselecting:d.element}))}),a(b.target).parents().addBack().each(function(){var d,e=a.data(this,\x22selectable-item\x22);if(e)return d=!b.metaKey&&!b.ctrlKey||!e.$element.hasClass(\x22ui-selected\x22),e.$element.removeClass(d?\x22ui-unselecting\x22:\x22ui-selected\x22).addClass(d?\x22ui-selecting\x22:\x22ui-unselecting\x22),e.unselecting=!d,e.selecting=d,e.selected=d,d?c._trigger(\x22selecting\x22,b,{selecting:e.element}):c._trigger(\x22unselecting\x22,b,{unselecting:e.element}),!1}))},_mouseDrag:function(b){if(this.dragged=!0,!this.options.disabled){var c,d=this,e=this.options,f=this.opos[0],g=this.opos[1],h=b.pageX,i=b.pageY;return f\x3eh&&(c=h,h=f,f=c),g\x3ei&&(c=i,i=g,g=c),this.helper.css({left:f,top:g,width:h-f,height:i-g}),this.selectees.each(function(){var c=a.data(this,\x22selectable-item\x22),j=!1;c&&c.element!==d.element[0]&&(\x22touch\x22===e.tolerance?j=!(c.left\x3eh||c.right\x3cf||c.top\x3ei||c.bottom\x3cg):\x22fit\x22===e.tolerance&&(j=c.left\x3ef&&c.right\x3ch&&c.top\x3eg&&c.bottom\x3ci),j?(c.selected&&(c.$element.removeClass(\x22ui-selected\x22),c.selected=!1),c.unselecting&&(c.$element.removeClass(\x22ui-unselecting\x22),c.unselecting=!1),c.selecting||(c.$element.addClass(\x22ui-selecting\x22),c.selecting=!0,d._trigger(\x22selecting\x22,b,{selecting:c.element}))):(c.selecting&&((b.metaKey||b.ctrlKey)&&c.startselected?(c.$element.removeClass(\x22ui-selecting\x22),c.selecting=!1,c.$element.addClass(\x22ui-selected\x22),c.selected=!0):(c.$element.removeClass(\x22ui-selecting\x22),c.selecting=!1,c.startselected&&(c.$element.addClass(\x22ui-unselecting\x22),c.unselecting=!0),d._trigger(\x22unselecting\x22,b,{unselecting:c.element}))),c.selected&&(b.metaKey||b.ctrlKey||c.startselected||(c.$element.removeClass(\x22ui-selected\x22),c.selected=!1,c.$element.addClass(\x22ui-unselecting\x22),c.unselecting=!0,d._trigger(\x22unselecting\x22,b,{unselecting:c.element})))))}),!1}},_mouseStop:function(b){var c=this;return this.dragged=!1,a(\x22.ui-unselecting\x22,this.element[0]).each(function(){var d=a.data(this,\x22selectable-item\x22);d.$element.removeClass(\x22ui-unselecting\x22),d.unselecting=!1,d.startselected=!1,c._trigger(\x22unselected\x22,b,{unselected:d.element})}),a(\x22.ui-selecting\x22,this.element[0]).each(function(){var d=a.data(this,\x22selectable-item\x22);d.$element.removeClass(\x22ui-selecting\x22).addClass(\x22ui-selected\x22),d.selecting=!1,d.selected=!0,d.startselected=!0,c._trigger(\x22selected\x22,b,{selected:d.element})}),this._trigger(\x22stop\x22,b),this.helper.remove(),!1}})});'}