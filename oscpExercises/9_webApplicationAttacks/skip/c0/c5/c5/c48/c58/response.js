var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:04:15 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Wed, 23 May 2018 10:05:31 GMT\x0aETag: \x221fb1-56cdcacc8d0c0-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-2550/2551\x0aContent-Length: 2551\x0aKeep-Alive: timeout=5, max=92\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/*!\x0a * imagesLoaded PACKAGED v3.2.0\x0a * JavaScript is all like \x22You images are done yet or what?\x22\x0a * MIT License\x0a */\x0a\x0a(function(){\x22use strict\x22;function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;return-1}function n(e){return function(){return this[e].apply(this,arguments)}}var i=e.prototype,r=this,s=r.EventEmitter;i.getListeners=function(e){var t,n,i=this._getEvents();if(\x22object\x22==typeof e){t={};for(n in i)i.hasOwnProperty(n)&&e.test(n)&&(t[n]=i[n])}else t=i[e]||(i[e]=[]);return t},i.flattenListeners=function(e){var t,n=[];for(t=0;t\x3ce.length;t+=1)n.push(e[t].listener);return n},i.getListenersAsObject=function(e){var t,n=this.getListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},i.addListener=function(e,n){var i,r=this.getListenersAsObject(e),s=\x22object\x22==typeof n;for(i in r)r.hasOwnProperty(i)&&-1===t(r[i],n)&&r[i].push(s?n:{listener:n,once:!1});return this},i.on=n(\x22addListener\x22),i.addOnceListener=function(e,t){return this.addListener(e,{listener:t,once:!0})},i.once=n(\x22addOnceListener\x22),i.defineEvent=function(e){return this.getListeners(e),this},i.defineEvents=function(e){for(var t=0;t\x3ce.length;t+=1)this.defineEvent(e[t]);return this},i.removeListener=function(e,n){var i,r,s=this.getListenersAsObject(e);for(r in s)s.hasOwnProperty(r)&&(i=t(s[r],n),-1!==i&&s[r].splice(i,1));return this},i.off=n(\x22removeListener\x22),i.addListeners=function(e,t){return this.manipulateListeners(!1,e,t)},i.removeListeners=function(e,t){return this.manipulateListeners(!0,e,t)},i.manipulateListeners=function(e,t,n){var i,r,s=e?this.removeListener:this.addListener,o=e?this.removeListeners:this.addListeners;if(\x22object\x22!=typeof t||t instanceof RegExp)for(i=n.length;i--;)s.call(this,t,n[i]);else for(i in t)t.hasOwnProperty(i)&&(r=t[i])&&(\x22function\x22==typeof r?s.call(this,i,r):o.call(this,i,r));return this},i.removeEvent=function(e){var t,n=typeof e,i=this._getEvents();if(\x22string\x22===n)delete i[e];else if(\x22object\x22===n)for(t in i)i.hasOwnProperty(t)&&e.test(t)&&delete i[t];else delete this._events;return this},i.removeAllListeners=n(\x22removeEvent\x22),i.emitEvent=function(e,t){var n,i,r,s,o=this.getListenersAsObject(e);for(r in o)if(o.hasOwnProperty(r))for(i=o[r].length;i--;)n=o[r][i],n.once===!0&&this.removeListener(e,n.listener),s=n.listener.apply(this,t||[]),s===this._getOnceReturnValue()&&this.removeListener(e,n.listener);return this},i.trigger=n(\x22emitEvent\x22),i.emit=function(e){var t=Array.prototype.slice.call(arguments,1);return this.emitEvent(e,t)},i.setOnceReturnValue=function(e){return this._onceReturnValue=e,this},i._getOnceReturnValue=function(){return this.hasOwnProperty(\x22_onceReturnValue\x22)?this._onceReturnValue:!0},i._getEvents=function(){return this._events||(this._events={})},e.noConflict=function(){return r.EventEmitter=s,e},\x22function\x22==typeof define&&define.amd?define(\x22eventEmitter/EventEmitter\x22,[],function(){return e}):\x22object\x22==typeof module&&module.exports?module.exports=e:this.EventEmitter=e}).call(this),function(e){function t(t){var n=e.event;return n.target=n.target||n.srcElement||t,n}var n=document.documentElement,i=function(){};n.addEventListener?i=function(e,t,n){e.addEventListener(t,n,!1)}:n.attachEvent&&(i=function(e,n,i){e[n+i]=i.handleEvent?function(){var n=t(e);i.handleEvent.call(i,n)}:function(){var n=t(e);i.call(e,n)},e.attachEvent(\x22on\x22+n,e[n+i])});var r=function(){};n.removeEventListener?r=function(e,t,n){e.removeEventListener(t,n,!1)}:n.detachEvent&&(r=function(e,t,n){e.detachEvent(\x22on\x22+t,e[t+n]);try{delete e[t+n]}catch(i){e[t+n]=void 0}});var s={bind:i,unbind:r};\x22function\x22==typeof define&&define.amd?define(\x22eventie/eventie\x22,s):e.eventie=s}(this),function(e,t){\x22use strict\x22;\x22function\x22==typeof define&&define.amd?define([\x22eventEmitter/EventEmitter\x22,\x22eventie/eventie\x22],function(n,i){return t(e,n,i)}):\x22object\x22==typeof module&&module.exports?module.exports=t(e,require(\x22wolfy87-eventemitter\x22),require(\x22eventie\x22)):e.imagesLoaded=t(e,e.EventEmitter,e.eventie)}(window,function(e,t,n){function i(e,t){for(var n in t)e[n]=t[n];return e}function r(e){return\x22[object Array]\x22==f.call(e)}function s(e){var t=[];if(r(e))t=e;else if(\x22number\x22==typeof e.length)for(var n=0;n\x3ce.length;n++)t.push(e[n]);else t.push(e);return t}function o(e,t,n){if(!(this instanceof o))return new o(e,t,n);\x22string\x22==typeof e&&(e=document.querySelectorAll(e)),this.elements=s(e),this.options=i({},this.options),\x22function\x22==typeof t?n=t:i(this.options,t),n&&this.on(\x22always\x22,n),this.getImages(),u&&(this.jqDeferred=new u.Deferred);var r=this;setTimeout(function(){r.check()})}function h(e){this.img=e}function a(e,t){this.url=e,this.element=t,this.img=new Image}var u=e.jQuery,c=e.console,f=Object.prototype.toString;o.prototype=new t,o.prototype.options={},o.prototype.getImages=function(){this.images=[];for(var e=0;e\x3cthis.elements.length;e++){var t=this.elements[e];this.addElementImages(t)}},o.prototype.addElementImages=function(e){\x22IMG\x22==e.nodeName&&this.addImage(e),this.options.background===!0&&this.addElementBackgroundImages(e);var t=e.nodeType;if(t&&d[t]){for(var n=e.querySelectorAll(\x22img\x22),i=0;i\x3cn.length;i++){var r=n[i];this.addImage(r)}if(\x22string\x22==typeof this.options.background){var s=e.querySelectorAll(this.options.background);for(i=0;i\x3cs.length;i++){var o=s[i];this.addElementBackgroundImages(o)}}}};var d={1:!0,9:!0,11:!0};o.prototype.addElementBackgroundImages=function(e){for(var t=m(e),n=/url\x5c([\x27\x22]*([^\x27\x22\x5c)]+)[\x27\x22]*\x5c)/gi,i=n.exec(t.backgroundImage);null!==i;){var r=i&&i[1];r&&this.addBackground(r,e),i=n.exec(t.backgroundImage)}};var m=e.getComputedStyle||function(e){return e.currentStyle};return o.prototype.addImage=function(e){var t=new h(e);this.images.push(t)},o.prototype.addBackground=function(e,t){var n=new a(e,t);this.images.push(n)},o.prototype.check=function(){function e(e,n,i){setTimeout(function(){t.progress(e,n,i)})}var t=this;if(this.progressedCount=0,this.hasAnyBroken=!1,!this.images.length)return void this.complete();for(var n=0;n\x3cthis.images.length;n++){var i=this.images[n];i.once(\x22progress\x22,e),i.check()}},o.prototype.progress=function(e,t,n){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!e.isLoaded,this.emit(\x22progress\x22,this,e,t),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,e),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&c&&c.log(\x22progress: \x22+n,e,t)},o.prototype.complete=function(){var e=this.hasAnyBroken?\x22fail\x22:\x22done\x22;if(this.isComplete=!0,this.emit(e,this),this.emit(\x22always\x22,this),this.jqDeferred){var t=this.hasAnyBroken?\x22reject\x22:\x22resolve\x22;this.jqDeferred[t](this)}},h.prototype=new t,h.prototype.check=function(){var e=this.getIsImageComplete();return e?void this.confirm(0!==this.img.naturalWidth,\x22naturalWidth\x22):(this.proxyImage=new Image,n.bind(this.proxyImage,\x22load\x22,this),n.bind(this.proxyImage,\x22error\x22,this),n.bind(this.img,\x22load\x22,this),n.bind(this.img,\x22error\x22,this),void(this.proxyImage.src=this.img.src))},h.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},h.prototype.confirm=function(e,t){this.isLoaded=e,this.emit(\x22progress\x22,this,this.img,t)},h.prototype.handleEvent=function(e){var t=\x22on\x22+e.type;this[t]&&this[t](e)},h.prototype.onload=function(){this.confirm(!0,\x22onload\x22),this.unbindEvents()},h.prototype.onerror=function(){this.confirm(!1,\x22onerror\x22),this.unbindEvents()},h.prototype.unbindEvents=function(){n.unbind(this.proxyImage,\x22load\x22,this),n.unbind(this.proxyImage,\x22error\x22,this),n.unbind(this.img,\x22load\x22,this),n.unbind(this.img,\x22error\x22,this)},a.prototype=new h,a.prototype.check=function(){n.bind(this.img,\x22load\x22,this),n.bind(this.img,\x22error\x22,this),this.img.src=this.url;var e=this.getIsImageComplete();e&&(this.confirm(0!==this.img.naturalWidth,\x22naturalWidth\x22),this.unbindEvents())},a.prototype.unbindEvents=function(){n.unbind(this.img,\x22load\x22,this),n.unbind(this.img,\x22error\x22,this)},a.prototype.confirm=function(e,t){this.isLoaded=e,this.emit(\x22progress\x22,this,this.element,t)},o.makeJQueryPlugin=function(t){t=t||e.jQuery,t&&(u=t,u.fn.imagesLoaded=function(e,t){var n=new o(this,e,t);return n.jqDeferred.promise(u(this))})},o.makeJQueryPlugin(),o});'}