var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:04:42 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 03 Nov 2016 05:40:34 GMT\x0aETag: \x22346c-5405eff119880-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-5224/5225\x0aContent-Length: 5225\x0aKeep-Alive: timeout=5, max=99\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/*!\x0a * jQuery UI Effects 1.11.4\x0a * http://jqueryui.com\x0a *\x0a * Copyright jQuery Foundation and other contributors\x0a * Released under the MIT license.\x0a * http://jquery.org/license\x0a *\x0a * http://api.jqueryui.com/category/effects-core/\x0a */\x0a!function(a){\x22function\x22==typeof define&&define.amd?define([\x22jquery\x22],a):a(jQuery)}(function(a){var b=\x22ui-effects-\x22,c=a;/*!\x0a * jQuery Color Animations v2.1.2\x0a * https://github.com/jquery/jquery-color\x0a *\x0a * Copyright 2014 jQuery Foundation and other contributors\x0a * Released under the MIT license.\x0a * http://jquery.org/license\x0a *\x0a * Date: Wed Jan 16 08:47:09 2013 -0600\x0a */\x0areturn a.effects={effect:{}},function(a,b){function c(a,b,c){var d=l[b.type]||{};return null==a?c||!b.def?null:b.def:(a=d.floor?~~a:parseFloat(a),isNaN(a)?b.def:d.mod?(a+d.mod)%d.mod:0\x3ea?0:d.max\x3ca?d.max:a)}function d(b){var c=j(),d=c._rgba=[];return b=b.toLowerCase(),o(i,function(a,e){var f,g=e.re.exec(b),h=g&&e.parse(g),i=e.space||\x22rgba\x22;if(h)return f=c[i](h),c[k[i].cache]=f[k[i].cache],d=c._rgba=f._rgba,!1}),d.length?(\x220,0,0,0\x22===d.join()&&a.extend(d,f.transparent),c):f[b]}function e(a,b,c){return c=(c+1)%1,6*c\x3c1?a+(b-a)*c*6:2*c\x3c1?b:3*c\x3c2?a+(b-a)*(2/3-c)*6:a}var f,g=\x22backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor\x22,h=/^([\x5c-+])=\x5cs*(\x5cd+\x5c.?\x5cd*)/,i=[{re:/rgba?\x5c(\x5cs*(\x5cd{1,3})\x5cs*,\x5cs*(\x5cd{1,3})\x5cs*,\x5cs*(\x5cd{1,3})\x5cs*(?:,\x5cs*(\x5cd?(?:\x5c.\x5cd+)?)\x5cs*)?\x5c)/,parse:function(a){return[a[1],a[2],a[3],a[4]]}},{re:/rgba?\x5c(\x5cs*(\x5cd+(?:\x5c.\x5cd+)?)\x5c%\x5cs*,\x5cs*(\x5cd+(?:\x5c.\x5cd+)?)\x5c%\x5cs*,\x5cs*(\x5cd+(?:\x5c.\x5cd+)?)\x5c%\x5cs*(?:,\x5cs*(\x5cd?(?:\x5c.\x5cd+)?)\x5cs*)?\x5c)/,parse:function(a){return[2.55*a[1],2.55*a[2],2.55*a[3],a[4]]}},{re:/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,parse:function(a){return[parseInt(a[1],16),parseInt(a[2],16),parseInt(a[3],16)]}},{re:/#([a-f0-9])([a-f0-9])([a-f0-9])/,parse:function(a){return[parseInt(a[1]+a[1],16),parseInt(a[2]+a[2],16),parseInt(a[3]+a[3],16)]}},{re:/hsla?\x5c(\x5cs*(\x5cd+(?:\x5c.\x5cd+)?)\x5cs*,\x5cs*(\x5cd+(?:\x5c.\x5cd+)?)\x5c%\x5cs*,\x5cs*(\x5cd+(?:\x5c.\x5cd+)?)\x5c%\x5cs*(?:,\x5cs*(\x5cd?(?:\x5c.\x5cd+)?)\x5cs*)?\x5c)/,space:\x22hsla\x22,parse:function(a){return[a[1],a[2]/100,a[3]/100,a[4]]}}],j=a.Color=function(b,c,d,e){return new a.Color.fn.parse(b,c,d,e)},k={rgba:{props:{red:{idx:0,type:\x22byte\x22},green:{idx:1,type:\x22byte\x22},blue:{idx:2,type:\x22byte\x22}}},hsla:{props:{hue:{idx:0,type:\x22degrees\x22},saturation:{idx:1,type:\x22percent\x22},lightness:{idx:2,type:\x22percent\x22}}}},l={\x22byte\x22:{floor:!0,max:255},percent:{max:1},degrees:{mod:360,floor:!0}},m=j.support={},n=a(\x22\x3cp\x3e\x22)[0],o=a.each;n.style.cssText=\x22background-color:rgba(1,1,1,.5)\x22,m.rgba=n.style.backgroundColor.indexOf(\x22rgba\x22)\x3e-1,o(k,function(a,b){b.cache=\x22_\x22+a,b.props.alpha={idx:3,type:\x22percent\x22,def:1}}),j.fn=a.extend(j.prototype,{parse:function(e,g,h,i){if(e===b)return this._rgba=[null,null,null,null],this;(e.jquery||e.nodeType)&&(e=a(e).css(g),g=b);var l=this,m=a.type(e),n=this._rgba=[];return g!==b&&(e=[e,g,h,i],m=\x22array\x22),\x22string\x22===m?this.parse(d(e)||f._default):\x22array\x22===m?(o(k.rgba.props,function(a,b){n[b.idx]=c(e[b.idx],b)}),this):\x22object\x22===m?(e instanceof j?o(k,function(a,b){e[b.cache]&&(l[b.cache]=e[b.cache].slice())}):o(k,function(b,d){var f=d.cache;o(d.props,function(a,b){if(!l[f]&&d.to){if(\x22alpha\x22===a||null==e[a])return;l[f]=d.to(l._rgba)}l[f][b.idx]=c(e[a],b,!0)}),l[f]&&a.inArray(null,l[f].slice(0,3))\x3c0&&(l[f][3]=1,d.from&&(l._rgba=d.from(l[f])))}),this):void 0},is:function(a){var b=j(a),c=!0,d=this;return o(k,function(a,e){var f,g=b[e.cache];return g&&(f=d[e.cache]||e.to&&e.to(d._rgba)||[],o(e.props,function(a,b){if(null!=g[b.idx])return c=g[b.idx]===f[b.idx]})),c}),c},_space:function(){var a=[],b=this;return o(k,function(c,d){b[d.cache]&&a.push(c)}),a.pop()},transition:function(a,b){var d=j(a),e=d._space(),f=k[e],g=0===this.alpha()?j(\x22transparent\x22):this,h=g[f.cache]||f.to(g._rgba),i=h.slice();return d=d[f.cache],o(f.props,function(a,e){var f=e.idx,g=h[f],j=d[f],k=l[e.type]||{};null!==j&&(null===g?i[f]=j:(k.mod&&(j-g\x3ek.mod/2?g+=k.mod:g-j\x3ek.mod/2&&(g-=k.mod)),i[f]=c((j-g)*b+g,e)))}),this[e](i)},blend:function(b){if(1===this._rgba[3])return this;var c=this._rgba.slice(),d=c.pop(),e=j(b)._rgba;return j(a.map(c,function(a,b){return(1-d)*e[b]+d*a}))},toRgbaString:function(){var b=\x22rgba(\x22,c=a.map(this._rgba,function(a,b){return null==a?b\x3e2?1:0:a});return 1===c[3]&&(c.pop(),b=\x22rgb(\x22),b+c.join()+\x22)\x22},toHslaString:function(){var b=\x22hsla(\x22,c=a.map(this.hsla(),function(a,b){return null==a&&(a=b\x3e2?1:0),b&&b\x3c3&&(a=Math.round(100*a)+\x22%\x22),a});return 1===c[3]&&(c.pop(),b=\x22hsl(\x22),b+c.join()+\x22)\x22},toHexString:function(b){var c=this._rgba.slice(),d=c.pop();return b&&c.push(~~(255*d)),\x22#\x22+a.map(c,function(a){return a=(a||0).toString(16),1===a.length?\x220\x22+a:a}).join(\x22\x22)},toString:function(){return 0===this._rgba[3]?\x22transparent\x22:this.toRgbaString()}}),j.fn.parse.prototype=j.fn,k.hsla.to=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b,c,d=a[0]/255,e=a[1]/255,f=a[2]/255,g=a[3],h=Math.max(d,e,f),i=Math.min(d,e,f),j=h-i,k=h+i,l=.5*k;return b=i===h?0:d===h?60*(e-f)/j+360:e===h?60*(f-d)/j+120:60*(d-e)/j+240,c=0===j?0:l\x3c=.5?j/k:j/(2-k),[Math.round(b)%360,c,l,null==g?1:g]},k.hsla.from=function(a){if(null==a[0]||null==a[1]||null==a[2])return[null,null,null,a[3]];var b=a[0]/360,c=a[1],d=a[2],f=a[3],g=d\x3c=.5?d*(1+c):d+c-d*c,h=2*d-g;return[Math.round(255*e(h,g,b+1/3)),Math.round(255*e(h,g,b)),Math.round(255*e(h,g,b-1/3)),f]},o(k,function(d,e){var f=e.props,g=e.cache,i=e.to,k=e.from;j.fn[d]=function(d){if(i&&!this[g]&&(this[g]=i(this._rgba)),d===b)return this[g].slice();var e,h=a.type(d),l=\x22array\x22===h||\x22object\x22===h?d:arguments,m=this[g].slice();return o(f,function(a,b){var d=l[\x22object\x22===h?a:b.idx];null==d&&(d=m[b.idx]),m[b.idx]=c(d,b)}),k?(e=j(k(m)),e[g]=m,e):j(m)},o(f,function(b,c){j.fn[b]||(j.fn[b]=function(e){var f,g=a.type(e),i=\x22alpha\x22===b?this._hsla?\x22hsla\x22:\x22rgba\x22:d,j=this[i](),k=j[c.idx];return\x22undefined\x22===g?k:(\x22function\x22===g&&(e=e.call(this,k),g=a.type(e)),null==e&&c.empty?this:(\x22string\x22===g&&(f=h.exec(e),f&&(e=k+parseFloat(f[2])*(\x22+\x22===f[1]?1:-1))),j[c.idx]=e,this[i](j)))})})}),j.hook=function(b){var c=b.split(\x22 \x22);o(c,function(b,c){a.cssHooks[c]={set:function(b,e){var f,g,h=\x22\x22;if(\x22transparent\x22!==e&&(\x22string\x22!==a.type(e)||(f=d(e)))){if(e=j(f||e),!m.rgba&&1!==e._rgba[3]){for(g=\x22backgroundColor\x22===c?b.parentNode:b;(\x22\x22===h||\x22transparent\x22===h)&&g&&g.style;)try{h=a.css(g,\x22backgroundColor\x22),g=g.parentNode}catch(i){}e=e.blend(h&&\x22transparent\x22!==h?h:\x22_default\x22)}e=e.toRgbaString()}try{b.style[c]=e}catch(i){}}},a.fx.step[c]=function(b){b.colorInit||(b.start=j(b.elem,c),b.end=j(b.end),b.colorInit=!0),a.cssHooks[c].set(b.elem,b.start.transition(b.end,b.pos))}})},j.hook(g),a.cssHooks.borderColor={expand:function(a){var b={};return o([\x22Top\x22,\x22Right\x22,\x22Bottom\x22,\x22Left\x22],function(c,d){b[\x22border\x22+d+\x22Color\x22]=a}),b}},f=a.Color.names={aqua:\x22#00ffff\x22,black:\x22#000000\x22,blue:\x22#0000ff\x22,fuchsia:\x22#ff00ff\x22,gray:\x22#808080\x22,green:\x22#008000\x22,lime:\x22#00ff00\x22,maroon:\x22#800000\x22,navy:\x22#000080\x22,olive:\x22#808000\x22,purple:\x22#800080\x22,red:\x22#ff0000\x22,silver:\x22#c0c0c0\x22,teal:\x22#008080\x22,white:\x22#ffffff\x22,yellow:\x22#ffff00\x22,transparent:[null,null,null,0],_default:\x22#ffffff\x22}}(c),function(){function b(b){var c,d,e=b.ownerDocument.defaultView?b.ownerDocument.defaultView.getComputedStyle(b,null):b.currentStyle,f={};if(e&&e.length&&e[0]&&e[e[0]])for(d=e.length;d--;)c=e[d],\x22string\x22==typeof e[c]&&(f[a.camelCase(c)]=e[c]);else for(c in e)\x22string\x22==typeof e[c]&&(f[c]=e[c]);return f}function d(b,c){var d,e,g={};for(d in c)e=c[d],b[d]!==e&&(f[d]||!a.fx.step[d]&&isNaN(parseFloat(e))||(g[d]=e));return g}var e=[\x22add\x22,\x22remove\x22,\x22toggle\x22],f={border:1,borderBottom:1,borderColor:1,borderLeft:1,borderRight:1,borderTop:1,borderWidth:1,margin:1,padding:1};a.each([\x22borderLeftStyle\x22,\x22borderRightStyle\x22,\x22borderBottomStyle\x22,\x22borderTopStyle\x22],function(b,d){a.fx.step[d]=function(a){(\x22none\x22!==a.end&&!a.setAttr||1===a.pos&&!a.setAttr)&&(c.style(a.elem,d,a.end),a.setAttr=!0)}}),a.fn.addBack||(a.fn.addBack=function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}),a.effects.animateClass=function(c,f,g,h){var i=a.speed(f,g,h);return this.queue(function(){var f,g=a(this),h=g.attr(\x22class\x22)||\x22\x22,j=i.children?g.find(\x22*\x22).addBack():g;j=j.map(function(){var c=a(this);return{el:c,start:b(this)}}),f=function(){a.each(e,function(a,b){c[b]&&g[b+\x22Class\x22](c[b])})},f(),j=j.map(function(){return this.end=b(this.el[0]),this.diff=d(this.start,this.end),this}),g.attr(\x22class\x22,h),j=j.map(function(){var b=this,c=a.Deferred(),d=a.extend({},i,{queue:!1,complete:function(){c.resolve(b)}});return this.el.animate(this.diff,d),c.promise()}),a.when.apply(a,j.get()).done(function(){f(),a.each(arguments,function(){var b=this.el;a.each(this.diff,function(a){b.css(a,\x22\x22)})}),i.complete.call(g[0])})})},a.fn.extend({addClass:function(b){return function(c,d,e,f){return d?a.effects.animateClass.call(this,{add:c},d,e,f):b.apply(this,arguments)}}(a.fn.addClass),removeClass:function(b){return function(c,d,e,f){return arguments.length\x3e1?a.effects.animateClass.call(this,{remove:c},d,e,f):b.apply(this,arguments)}}(a.fn.removeClass),toggleClass:function(b){return function(c,d,e,f,g){return\x22boolean\x22==typeof d||void 0===d?e?a.effects.animateClass.call(this,d?{add:c}:{remove:c},e,f,g):b.apply(this,arguments):a.effects.animateClass.call(this,{toggle:c},d,e,f)}}(a.fn.toggleClass),switchClass:function(b,c,d,e,f){return a.effects.animateClass.call(this,{add:c,remove:b},d,e,f)}})}(),function(){function c(b,c,d,e){return a.isPlainObject(b)&&(c=b,b=b.effect),b={effect:b},null==c&&(c={}),a.isFunction(c)&&(e=c,d=null,c={}),(\x22number\x22==typeof c||a.fx.speeds[c])&&(e=d,d=c,c={}),a.isFunction(d)&&(e=d,d=null),c&&a.extend(b,c),d=d||c.duration,b.duration=a.fx.off?0:\x22number\x22==typeof d?d:d in a.fx.speeds?a.fx.speeds[d]:a.fx.speeds._default,b.complete=e||c.complete,b}function d(b){return!(b&&\x22number\x22!=typeof b&&!a.fx.speeds[b])||(\x22string\x22==typeof b&&!a.effects.effect[b]||(!!a.isFunction(b)||\x22object\x22==typeof b&&!b.effect))}a.extend(a.effects,{version:\x221.11.4\x22,save:function(a,c){for(var d=0;d\x3cc.length;d++)null!==c[d]&&a.data(b+c[d],a[0].style[c[d]])},restore:function(a,c){var d,e;for(e=0;e\x3cc.length;e++)null!==c[e]&&(d=a.data(b+c[e]),void 0===d&&(d=\x22\x22),a.css(c[e],d))},setMode:function(a,b){return\x22toggle\x22===b&&(b=a.is(\x22:hidden\x22)?\x22show\x22:\x22hide\x22),b},getBaseline:function(a,b){var c,d;switch(a[0]){case\x22top\x22:c=0;break;case\x22middle\x22:c=.5;break;case\x22bottom\x22:c=1;break;default:c=a[0]/b.height}switch(a[1]){case\x22left\x22:d=0;break;case\x22center\x22:d=.5;break;case\x22right\x22:d=1;break;default:d=a[1]/b.width}return{x:d,y:c}},createWrapper:function(b){if(b.parent().is(\x22.ui-effects-wrapper\x22))return b.parent();var c={width:b.outerWidth(!0),height:b.outerHeight(!0),\x22float\x22:b.css(\x22float\x22)},d=a(\x22\x3cdiv\x3e\x3c/div\x3e\x22).addClass(\x22ui-effects-wrapper\x22).css({fontSize:\x22100%\x22,background:\x22transparent\x22,border:\x22none\x22,margin:0,padding:0}),e={width:b.width(),height:b.height()},f=document.activeElement;try{f.id}catch(g){f=document.body}return b.wrap(d),(b[0]===f||a.contains(b[0],f))&&a(f).focus(),d=b.parent(),\x22static\x22===b.css(\x22position\x22)?(d.css({position:\x22relative\x22}),b.css({position:\x22relative\x22})):(a.extend(c,{position:b.css(\x22position\x22),zIndex:b.css(\x22z-index\x22)}),a.each([\x22top\x22,\x22left\x22,\x22bottom\x22,\x22right\x22],function(a,d){c[d]=b.css(d),isNaN(parseInt(c[d],10))&&(c[d]=\x22auto\x22)}),b.css({position:\x22relative\x22,top:0,left:0,right:\x22auto\x22,bottom:\x22auto\x22})),b.css(e),d.css(c).show()},removeWrapper:function(b){var c=document.activeElement;return b.parent().is(\x22.ui-effects-wrapper\x22)&&(b.parent().replaceWith(b),(b[0]===c||a.contains(b[0],c))&&a(c).focus()),b},setTransition:function(b,c,d,e){return e=e||{},a.each(c,function(a,c){var f=b.cssUnit(c);f[0]\x3e0&&(e[c]=f[0]*d+f[1])}),e}}),a.fn.extend({effect:function(){function b(b){function c(){a.isFunction(f)&&f.call(e[0]),a.isFunction(b)&&b()}var e=a(this),f=d.complete,h=d.mode;(e.is(\x22:hidden\x22)?\x22hide\x22===h:\x22show\x22===h)?(e[h](),c()):g.call(e[0],d,c)}var d=c.apply(this,arguments),e=d.mode,f=d.queue,g=a.effects.effect[d.effect];return a.fx.off||!g?e?this[e](d.duration,d.complete):this.each(function(){d.complete&&d.complete.call(this)}):f===!1?this.each(b):this.queue(f||\x22fx\x22,b)},show:function(a){return function(b){if(d(b))return a.apply(this,arguments);var e=c.apply(this,arguments);return e.mode=\x22show\x22,this.effect.call(this,e)}}(a.fn.show),hide:function(a){return function(b){if(d(b))return a.apply(this,arguments);var e=c.apply(this,arguments);return e.mode=\x22hide\x22,this.effect.call(this,e)}}(a.fn.hide),toggle:function(a){return function(b){if(d(b)||\x22boolean\x22==typeof b)return a.apply(this,arguments);var e=c.apply(this,arguments);return e.mode=\x22toggle\x22,this.effect.call(this,e)}}(a.fn.toggle),cssUnit:function(b){var c=this.css(b),d=[];return a.each([\x22em\x22,\x22px\x22,\x22%\x22,\x22pt\x22],function(a,b){c.indexOf(b)\x3e0&&(d=[parseFloat(c),b])}),d}})}(),function(){var b={};a.each([\x22Quad\x22,\x22Cubic\x22,\x22Quart\x22,\x22Quint\x22,\x22Expo\x22],function(a,c){b[c]=function(b){return Math.pow(b,a+2)}}),a.extend(b,{Sine:function(a){return 1-Math.cos(a*Math.PI/2)},Circ:function(a){return 1-Math.sqrt(1-a*a)},Elastic:function(a){return 0===a||1===a?a:-Math.pow(2,8*(a-1))*Math.sin((80*(a-1)-7.5)*Math.PI/15)},Back:function(a){return a*a*(3*a-2)},Bounce:function(a){for(var b,c=4;a\x3c((b=Math.pow(2,--c))-1)/11;);return 1/Math.pow(4,3-c)-7.5625*Math.pow((3*b-2)/22-a,2)}}),a.each(b,function(b,c){a.easing[\x22easeIn\x22+b]=c,a.easing[\x22easeOut\x22+b]=function(a){return 1-c(1-a)},a.easing[\x22easeInOut\x22+b]=function(a){return a\x3c.5?c(2*a)/2:1-c(a*-2+2)/2}})}(),a.effects});'}