var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:04:44 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Sat, 07 Nov 2015 12:37:26 GMT\x0aETag: \x22396-523f29f58ad80-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-550/551\x0aContent-Length: 551\x0aKeep-Alive: timeout=5, max=2\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/*!\x0a * jQuery UI Effects Clip 1.11.4\x0a * http://jqueryui.com\x0a *\x0a * Copyright jQuery Foundation and other contributors\x0a * Released under the MIT license.\x0a * http://jquery.org/license\x0a *\x0a * http://api.jqueryui.com/clip-effect/\x0a */\x0a!function(a){\x22function\x22==typeof define&&define.amd?define([\x22jquery\x22,\x22./effect\x22],a):a(jQuery)}(function(a){return a.effects.effect.clip=function(b,c){var d,e,f,g=a(this),h=[\x22position\x22,\x22top\x22,\x22bottom\x22,\x22left\x22,\x22right\x22,\x22height\x22,\x22width\x22],i=a.effects.setMode(g,b.mode||\x22hide\x22),j=\x22show\x22===i,k=b.direction||\x22vertical\x22,l=\x22vertical\x22===k,m=l?\x22height\x22:\x22width\x22,n=l?\x22top\x22:\x22left\x22,o={};a.effects.save(g,h),g.show(),d=a.effects.createWrapper(g).css({overflow:\x22hidden\x22}),e=\x22IMG\x22===g[0].tagName?d:g,f=e[m](),j&&(e.css(m,0),e.css(n,f/2)),o[m]=j?f:0,o[n]=j?0:f/2,e.animate(o,{queue:!1,duration:b.duration,easing:b.easing,complete:function(){j||g.hide(),a.effects.restore(g,h),a.effects.removeWrapper(g),c()}})}});'}