var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:12:44 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Mon, 06 Aug 2018 19:33:28 GMT\x0aETag: \x221c40-572c95a07b200-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-2478/2479\x0aContent-Length: 2479\x0aKeep-Alive: timeout=5, max=5\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a\x22undefined\x22!=typeof jQuery?(\x22undefined\x22==typeof jQuery.fn.hoverIntent&&!function(a){a.fn.hoverIntent=function(b,c,d){var e={interval:100,sensitivity:6,timeout:0};e=\x22object\x22==typeof b?a.extend(e,b):a.isFunction(c)?a.extend(e,{over:b,out:c,selector:d}):a.extend(e,{over:b,out:b,selector:c});var f,g,h,i,j=function(a){f=a.pageX,g=a.pageY},k=function(b,c){return c.hoverIntent_t=clearTimeout(c.hoverIntent_t),Math.sqrt((h-f)*(h-f)+(i-g)*(i-g))\x3ce.sensitivity?(a(c).off(\x22mousemove.hoverIntent\x22,j),c.hoverIntent_s=!0,e.over.apply(c,[b])):(h=f,i=g,void(c.hoverIntent_t=setTimeout(function(){k(b,c)},e.interval)))},l=function(a,b){return b.hoverIntent_t=clearTimeout(b.hoverIntent_t),b.hoverIntent_s=!1,e.out.apply(b,[a])},m=function(b){var c=a.extend({},b),d=this;d.hoverIntent_t&&(d.hoverIntent_t=clearTimeout(d.hoverIntent_t)),\x22mouseenter\x22===b.type?(h=c.pageX,i=c.pageY,a(d).on(\x22mousemove.hoverIntent\x22,j),d.hoverIntent_s||(d.hoverIntent_t=setTimeout(function(){k(c,d)},e.interval))):(a(d).off(\x22mousemove.hoverIntent\x22,j),d.hoverIntent_s&&(d.hoverIntent_t=setTimeout(function(){l(c,d)},e.timeout)))};return this.on({\x22mouseenter.hoverIntent\x22:m,\x22mouseleave.hoverIntent\x22:m},e.selector)}}(jQuery),jQuery(document).ready(function(a){var b,c,d,e=a(\x22#wpadminbar\x22),f=!1;b=function(b,c){var d=a(c),e=d.attr(\x22tabindex\x22);e&&d.attr(\x22tabindex\x22,\x220\x22).attr(\x22tabindex\x22,e)},c=function(b){e.find(\x22li.menupop\x22).on(\x22click.wp-mobile-hover\x22,function(c){var d=a(this);d.parent().is(\x22#wp-admin-bar-root-default\x22)&&!d.hasClass(\x22hover\x22)?(c.preventDefault(),e.find(\x22li.menupop.hover\x22).removeClass(\x22hover\x22),d.addClass(\x22hover\x22)):d.hasClass(\x22hover\x22)?a(c.target).closest(\x22div\x22).hasClass(\x22ab-sub-wrapper\x22)||(c.stopPropagation(),c.preventDefault(),d.removeClass(\x22hover\x22)):(c.stopPropagation(),c.preventDefault(),d.addClass(\x22hover\x22)),b&&(a(\x22li.menupop\x22).off(\x22click.wp-mobile-hover\x22),f=!1)})},d=function(){var b=/Mobile\x5c/.+Safari/.test(navigator.userAgent)?\x22touchstart\x22:\x22click\x22;a(document.body).on(b+\x22.wp-mobile-hover\x22,function(b){a(b.target).closest(\x22#wpadminbar\x22).length||e.find(\x22li.menupop.hover\x22).removeClass(\x22hover\x22)})},e.removeClass(\x22nojq\x22).removeClass(\x22nojs\x22),\x22ontouchstart\x22in window?(e.on(\x22touchstart\x22,function(){c(!0),f=!0}),d()):/IEMobile\x5c/[1-9]/.test(navigator.userAgent)&&(c(),d()),e.find(\x22li.menupop\x22).hoverIntent({over:function(){f||a(this).addClass(\x22hover\x22)},out:function(){f||a(this).removeClass(\x22hover\x22)},timeout:180,sensitivity:7,interval:100}),window.location.hash&&window.scrollBy(0,-32),a(\x22#wp-admin-bar-get-shortlink\x22).click(function(b){b.preventDefault(),a(this).addClass(\x22selected\x22).children(\x22.shortlink-input\x22).blur(function(){a(this).parents(\x22#wp-admin-bar-get-shortlink\x22).removeClass(\x22selected\x22)}).focus().select()}),a(\x22#wpadminbar li.menupop \x3e .ab-item\x22).bind(\x22keydown.adminbar\x22,function(c){if(13==c.which){var d=a(c.target),e=d.closest(\x22.ab-sub-wrapper\x22),f=d.parent().hasClass(\x22hover\x22);c.stopPropagation(),c.preventDefault(),e.length||(e=a(\x22#wpadminbar .quicklinks\x22)),e.find(\x22.menupop\x22).removeClass(\x22hover\x22),f||d.parent().toggleClass(\x22hover\x22),d.siblings(\x22.ab-sub-wrapper\x22).find(\x22.ab-item\x22).each(b)}}).each(b),a(\x22#wpadminbar .ab-item\x22).bind(\x22keydown.adminbar\x22,function(c){if(27==c.which){var d=a(c.target);c.stopPropagation(),c.preventDefault(),d.closest(\x22.hover\x22).removeClass(\x22hover\x22).children(\x22.ab-item\x22).focus(),d.siblings(\x22.ab-sub-wrapper\x22).find(\x22.ab-item\x22).each(b)}}),e.click(function(b){\x22wpadminbar\x22!=b.target.id&&\x22wp-admin-bar-top-secondary\x22!=b.target.id||(e.find(\x22li.menupop.hover\x22).removeClass(\x22hover\x22),a(\x22html, body\x22).animate({scrollTop:0},\x22fast\x22),b.preventDefault())}),a(\x22.screen-reader-shortcut\x22).keydown(function(b){var c,d;13==b.which&&(c=a(this).attr(\x22href\x22),d=navigator.userAgent.toLowerCase(),d.indexOf(\x22applewebkit\x22)!=-1&&c&&\x22#\x22==c.charAt(0)&&setTimeout(function(){a(c).focus()},100))}),a(\x22#adminbar-search\x22).on({focus:function(){a(\x22#adminbarsearch\x22).addClass(\x22adminbar-focused\x22)},blur:function(){a(\x22#adminbarsearch\x22).removeClass(\x22adminbar-focused\x22)}}),\x22sessionStorage\x22in window&&a(\x22#wp-admin-bar-logout a\x22).click(function(){try{for(var a in sessionStorage)a.indexOf(\x22wp-autosave-\x22)!=-1&&sessionStorage.removeItem(a)}catch(b){}}),navigator.userAgent&&document.body.className.indexOf(\x22no-font-face\x22)===-1&&/Android (1.0|1.1|1.5|1.6|2.0|2.1)|Nokia|Opera Mini|w(eb)?OSBrowser|webOS|UCWEB|Windows Phone OS 7|XBLWP7|ZuneWP7|MSIE 7/.test(navigator.userAgent)&&(document.body.className+=\x22 no-font-face\x22)})):!function(a,b){var c,d=function(a,b,c){a&&\x22function\x22==typeof a.addEventListener?a.addEventListener(b,c,!1):a&&\x22function\x22==typeof a.attachEvent&&a.attachEvent(\x22on\x22+b,function(){return c.call(a,window.event)})},e=new RegExp(\x22\x5c\x5cbhover\x5c\x5cb\x22,\x22g\x22),f=[],g=new RegExp(\x22\x5c\x5cbselected\x5c\x5cb\x22,\x22g\x22),h=function(a){for(var b=f.length;b--;)if(f[b]&&a==f[b][1])return f[b][0];return!1},i=function(b){for(var d,i,j,k,l,m,n=[],o=0;b&&b!=c&&b!=a;)\x22LI\x22==b.nodeName.toUpperCase()&&(n[n.length]=b,i=h(b),i&&clearTimeout(i),b.className=b.className?b.className.replace(e,\x22\x22)+\x22 hover\x22:\x22hover\x22,k=b),b=b.parentNode;if(k&&k.parentNode&&(l=k.parentNode,l&&\x22UL\x22==l.nodeName.toUpperCase()))for(d=l.childNodes.length;d--;)m=l.childNodes[d],m!=k&&(m.className=m.className?m.className.replace(g,\x22\x22):\x22\x22);for(d=f.length;d--;){for(j=!1,o=n.length;o--;)n[o]==f[d][1]&&(j=!0);j||(f[d][1].className=f[d][1].className?f[d][1].className.replace(e,\x22\x22):\x22\x22)}},j=function(b){for(;b&&b!=c&&b!=a;)\x22LI\x22==b.nodeName.toUpperCase()&&!function(a){var b=setTimeout(function(){a.className=a.className?a.className.replace(e,\x22\x22):\x22\x22},500);f[f.length]=[b,a]}(b),b=b.parentNode},k=function(b){for(var d,e,f,h=b.target||b.srcElement;;){if(!h||h==a||h==c)return;if(h.id&&\x22wp-admin-bar-get-shortlink\x22==h.id)break;h=h.parentNode}for(b.preventDefault&&b.preventDefault(),b.returnValue=!1,-1==h.className.indexOf(\x22selected\x22)&&(h.className+=\x22 selected\x22),d=0,e=h.childNodes.length;d\x3ce;d++)if(f=h.childNodes[d],f.className&&-1!=f.className.indexOf(\x22shortlink-input\x22)){f.focus(),f.select(),f.onblur=function(){h.className=h.className?h.className.replace(g,\x22\x22):\x22\x22};break}return!1},l=function(a){var b,c,d,e,f,g;if(!(\x22wpadminbar\x22!=a.id&&\x22wp-admin-bar-top-secondary\x22!=a.id||(b=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,b\x3c1)))for(g=b\x3e800?130:100,c=Math.min(12,Math.round(b/g)),d=b\x3e800?Math.round(b/30):Math.round(b/20),e=[],f=0;b;)b-=d,b\x3c0&&(b=0),e.push(b),setTimeout(function(){window.scrollTo(0,e.shift())},f*c),f++};d(b,\x22load\x22,function(){c=a.getElementById(\x22wpadminbar\x22),a.body&&c&&(a.body.appendChild(c),c.className&&(c.className=c.className.replace(/nojs/,\x22\x22)),d(c,\x22mouseover\x22,function(a){i(a.target||a.srcElement)}),d(c,\x22mouseout\x22,function(a){j(a.target||a.srcElement)}),d(c,\x22click\x22,k),d(c,\x22click\x22,function(a){l(a.target||a.srcElement)}),d(document.getElementById(\x22wp-admin-bar-logout\x22),\x22click\x22,function(){if(\x22sessionStorage\x22in window)try{for(var a in sessionStorage)a.indexOf(\x22wp-autosave-\x22)!=-1&&sessionStorage.removeItem(a)}catch(b){}})),b.location.hash&&b.scrollBy(0,-32),navigator.userAgent&&document.body.className.indexOf(\x22no-font-face\x22)===-1&&/Android (1.0|1.1|1.5|1.6|2.0|2.1)|Nokia|Opera Mini|w(eb)?OSBrowser|webOS|UCWEB|Windows Phone OS 7|XBLWP7|ZuneWP7|MSIE 7/.test(navigator.userAgent)&&(document.body.className+=\x22 no-font-face\x22)})}(document,window);'}