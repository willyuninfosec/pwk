var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:04:42 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 03 Nov 2016 05:40:34 GMT\x0aETag: \x222580-5405eff119880-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-2843/2844\x0aContent-Length: 2844\x0aKeep-Alive: timeout=5, max=86\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/*!\x0a * jQuery UI Menu 1.11.4\x0a * http://jqueryui.com\x0a *\x0a * Copyright jQuery Foundation and other contributors\x0a * Released under the MIT license.\x0a * http://jquery.org/license\x0a *\x0a * http://api.jqueryui.com/menu/\x0a */\x0a!function(a){\x22function\x22==typeof define&&define.amd?define([\x22jquery\x22,\x22./core\x22,\x22./widget\x22,\x22./position\x22],a):a(jQuery)}(function(a){return a.widget(\x22ui.menu\x22,{version:\x221.11.4\x22,defaultElement:\x22\x3cul\x3e\x22,delay:300,options:{icons:{submenu:\x22ui-icon-carat-1-e\x22},items:\x22\x3e *\x22,menus:\x22ul\x22,position:{my:\x22left-1 top\x22,at:\x22right top\x22},role:\x22menu\x22,blur:null,focus:null,select:null},_create:function(){this.activeMenu=this.element,this.mouseHandled=!1,this.element.uniqueId().addClass(\x22ui-menu ui-widget ui-widget-content\x22).toggleClass(\x22ui-menu-icons\x22,!!this.element.find(\x22.ui-icon\x22).length).attr({role:this.options.role,tabIndex:0}),this.options.disabled&&this.element.addClass(\x22ui-state-disabled\x22).attr(\x22aria-disabled\x22,\x22true\x22),this._on({\x22mousedown .ui-menu-item\x22:function(a){a.preventDefault()},\x22click .ui-menu-item\x22:function(b){var c=a(b.target);!this.mouseHandled&&c.not(\x22.ui-state-disabled\x22).length&&(this.select(b),b.isPropagationStopped()||(this.mouseHandled=!0),c.has(\x22.ui-menu\x22).length?this.expand(b):!this.element.is(\x22:focus\x22)&&a(this.document[0].activeElement).closest(\x22.ui-menu\x22).length&&(this.element.trigger(\x22focus\x22,[!0]),this.active&&1===this.active.parents(\x22.ui-menu\x22).length&&clearTimeout(this.timer)))},\x22mouseenter .ui-menu-item\x22:function(b){if(!this.previousFilter){var c=a(b.currentTarget);c.siblings(\x22.ui-state-active\x22).removeClass(\x22ui-state-active\x22),this.focus(b,c)}},mouseleave:\x22collapseAll\x22,\x22mouseleave .ui-menu\x22:\x22collapseAll\x22,focus:function(a,b){var c=this.active||this.element.find(this.options.items).eq(0);b||this.focus(a,c)},blur:function(b){this._delay(function(){a.contains(this.element[0],this.document[0].activeElement)||this.collapseAll(b)})},keydown:\x22_keydown\x22}),this.refresh(),this._on(this.document,{click:function(a){this._closeOnDocumentClick(a)&&this.collapseAll(a),this.mouseHandled=!1}})},_destroy:function(){this.element.removeAttr(\x22aria-activedescendant\x22).find(\x22.ui-menu\x22).addBack().removeClass(\x22ui-menu ui-widget ui-widget-content ui-menu-icons ui-front\x22).removeAttr(\x22role\x22).removeAttr(\x22tabIndex\x22).removeAttr(\x22aria-labelledby\x22).removeAttr(\x22aria-expanded\x22).removeAttr(\x22aria-hidden\x22).removeAttr(\x22aria-disabled\x22).removeUniqueId().show(),this.element.find(\x22.ui-menu-item\x22).removeClass(\x22ui-menu-item\x22).removeAttr(\x22role\x22).removeAttr(\x22aria-disabled\x22).removeUniqueId().removeClass(\x22ui-state-hover\x22).removeAttr(\x22tabIndex\x22).removeAttr(\x22role\x22).removeAttr(\x22aria-haspopup\x22).children().each(function(){var b=a(this);b.data(\x22ui-menu-submenu-carat\x22)&&b.remove()}),this.element.find(\x22.ui-menu-divider\x22).removeClass(\x22ui-menu-divider ui-widget-content\x22)},_keydown:function(b){var c,d,e,f,g=!0;switch(b.keyCode){case a.ui.keyCode.PAGE_UP:this.previousPage(b);break;case a.ui.keyCode.PAGE_DOWN:this.nextPage(b);break;case a.ui.keyCode.HOME:this._move(\x22first\x22,\x22first\x22,b);break;case a.ui.keyCode.END:this._move(\x22last\x22,\x22last\x22,b);break;case a.ui.keyCode.UP:this.previous(b);break;case a.ui.keyCode.DOWN:this.next(b);break;case a.ui.keyCode.LEFT:this.collapse(b);break;case a.ui.keyCode.RIGHT:this.active&&!this.active.is(\x22.ui-state-disabled\x22)&&this.expand(b);break;case a.ui.keyCode.ENTER:case a.ui.keyCode.SPACE:this._activate(b);break;case a.ui.keyCode.ESCAPE:this.collapse(b);break;default:g=!1,d=this.previousFilter||\x22\x22,e=String.fromCharCode(b.keyCode),f=!1,clearTimeout(this.filterTimer),e===d?f=!0:e=d+e,c=this._filterMenuItems(e),c=f&&c.index(this.active.next())!==-1?this.active.nextAll(\x22.ui-menu-item\x22):c,c.length||(e=String.fromCharCode(b.keyCode),c=this._filterMenuItems(e)),c.length?(this.focus(b,c),this.previousFilter=e,this.filterTimer=this._delay(function(){delete this.previousFilter},1e3)):delete this.previousFilter}g&&b.preventDefault()},_activate:function(a){this.active.is(\x22.ui-state-disabled\x22)||(this.active.is(\x22[aria-haspopup=\x27true\x27]\x22)?this.expand(a):this.select(a))},refresh:function(){var b,c,d=this,e=this.options.icons.submenu,f=this.element.find(this.options.menus);this.element.toggleClass(\x22ui-menu-icons\x22,!!this.element.find(\x22.ui-icon\x22).length),f.filter(\x22:not(.ui-menu)\x22).addClass(\x22ui-menu ui-widget ui-widget-content ui-front\x22).hide().attr({role:this.options.role,\x22aria-hidden\x22:\x22true\x22,\x22aria-expanded\x22:\x22false\x22}).each(function(){var b=a(this),c=b.parent(),d=a(\x22\x3cspan\x3e\x22).addClass(\x22ui-menu-icon ui-icon \x22+e).data(\x22ui-menu-submenu-carat\x22,!0);c.attr(\x22aria-haspopup\x22,\x22true\x22).prepend(d),b.attr(\x22aria-labelledby\x22,c.attr(\x22id\x22))}),b=f.add(this.element),c=b.find(this.options.items),c.not(\x22.ui-menu-item\x22).each(function(){var b=a(this);d._isDivider(b)&&b.addClass(\x22ui-widget-content ui-menu-divider\x22)}),c.not(\x22.ui-menu-item, .ui-menu-divider\x22).addClass(\x22ui-menu-item\x22).uniqueId().attr({tabIndex:-1,role:this._itemRole()}),c.filter(\x22.ui-state-disabled\x22).attr(\x22aria-disabled\x22,\x22true\x22),this.active&&!a.contains(this.element[0],this.active[0])&&this.blur()},_itemRole:function(){return{menu:\x22menuitem\x22,listbox:\x22option\x22}[this.options.role]},_setOption:function(a,b){\x22icons\x22===a&&this.element.find(\x22.ui-menu-icon\x22).removeClass(this.options.icons.submenu).addClass(b.submenu),\x22disabled\x22===a&&this.element.toggleClass(\x22ui-state-disabled\x22,!!b).attr(\x22aria-disabled\x22,b),this._super(a,b)},focus:function(a,b){var c,d;this.blur(a,a&&\x22focus\x22===a.type),this._scrollIntoView(b),this.active=b.first(),d=this.active.addClass(\x22ui-state-focus\x22).removeClass(\x22ui-state-active\x22),this.options.role&&this.element.attr(\x22aria-activedescendant\x22,d.attr(\x22id\x22)),this.active.parent().closest(\x22.ui-menu-item\x22).addClass(\x22ui-state-active\x22),a&&\x22keydown\x22===a.type?this._close():this.timer=this._delay(function(){this._close()},this.delay),c=b.children(\x22.ui-menu\x22),c.length&&a&&/^mouse/.test(a.type)&&this._startOpening(c),this.activeMenu=b.parent(),this._trigger(\x22focus\x22,a,{item:b})},_scrollIntoView:function(b){var c,d,e,f,g,h;this._hasScroll()&&(c=parseFloat(a.css(this.activeMenu[0],\x22borderTopWidth\x22))||0,d=parseFloat(a.css(this.activeMenu[0],\x22paddingTop\x22))||0,e=b.offset().top-this.activeMenu.offset().top-c-d,f=this.activeMenu.scrollTop(),g=this.activeMenu.height(),h=b.outerHeight(),e\x3c0?this.activeMenu.scrollTop(f+e):e+h\x3eg&&this.activeMenu.scrollTop(f+e-g+h))},blur:function(a,b){b||clearTimeout(this.timer),this.active&&(this.active.removeClass(\x22ui-state-focus\x22),this.active=null,this._trigger(\x22blur\x22,a,{item:this.active}))},_startOpening:function(a){clearTimeout(this.timer),\x22true\x22===a.attr(\x22aria-hidden\x22)&&(this.timer=this._delay(function(){this._close(),this._open(a)},this.delay))},_open:function(b){var c=a.extend({of:this.active},this.options.position);clearTimeout(this.timer),this.element.find(\x22.ui-menu\x22).not(b.parents(\x22.ui-menu\x22)).hide().attr(\x22aria-hidden\x22,\x22true\x22),b.show().removeAttr(\x22aria-hidden\x22).attr(\x22aria-expanded\x22,\x22true\x22).position(c)},collapseAll:function(b,c){clearTimeout(this.timer),this.timer=this._delay(function(){var d=c?this.element:a(b&&b.target).closest(this.element.find(\x22.ui-menu\x22));d.length||(d=this.element),this._close(d),this.blur(b),this.activeMenu=d},this.delay)},_close:function(a){a||(a=this.active?this.active.parent():this.element),a.find(\x22.ui-menu\x22).hide().attr(\x22aria-hidden\x22,\x22true\x22).attr(\x22aria-expanded\x22,\x22false\x22).end().find(\x22.ui-state-active\x22).not(\x22.ui-state-focus\x22).removeClass(\x22ui-state-active\x22)},_closeOnDocumentClick:function(b){return!a(b.target).closest(\x22.ui-menu\x22).length},_isDivider:function(a){return!/[^\x5c-\x5cu2014\x5cu2013\x5cs]/.test(a.text())},collapse:function(a){var b=this.active&&this.active.parent().closest(\x22.ui-menu-item\x22,this.element);b&&b.length&&(this._close(),this.focus(a,b))},expand:function(a){var b=this.active&&this.active.children(\x22.ui-menu \x22).find(this.options.items).first();b&&b.length&&(this._open(b.parent()),this._delay(function(){this.focus(a,b)}))},next:function(a){this._move(\x22next\x22,\x22first\x22,a)},previous:function(a){this._move(\x22prev\x22,\x22last\x22,a)},isFirstItem:function(){return this.active&&!this.active.prevAll(\x22.ui-menu-item\x22).length},isLastItem:function(){return this.active&&!this.active.nextAll(\x22.ui-menu-item\x22).length},_move:function(a,b,c){var d;this.active&&(d=\x22first\x22===a||\x22last\x22===a?this.active[\x22first\x22===a?\x22prevAll\x22:\x22nextAll\x22](\x22.ui-menu-item\x22).eq(-1):this.active[a+\x22All\x22](\x22.ui-menu-item\x22).eq(0)),d&&d.length&&this.active||(d=this.activeMenu.find(this.options.items)[b]()),this.focus(c,d)},nextPage:function(b){var c,d,e;return this.active?void(this.isLastItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.nextAll(\x22.ui-menu-item\x22).each(function(){return c=a(this),c.offset().top-d-e\x3c0}),this.focus(b,c)):this.focus(b,this.activeMenu.find(this.options.items)[this.active?\x22last\x22:\x22first\x22]()))):void this.next(b)},previousPage:function(b){var c,d,e;return this.active?void(this.isFirstItem()||(this._hasScroll()?(d=this.active.offset().top,e=this.element.height(),this.active.prevAll(\x22.ui-menu-item\x22).each(function(){return c=a(this),c.offset().top-d+e\x3e0}),this.focus(b,c)):this.focus(b,this.activeMenu.find(this.options.items).first()))):void this.next(b)},_hasScroll:function(){return this.element.outerHeight()\x3cthis.element.prop(\x22scrollHeight\x22)},select:function(b){this.active=this.active||a(b.target).closest(\x22.ui-menu-item\x22);var c={item:this.active};this.active.has(\x22.ui-menu\x22).length||this.collapseAll(b,!0),this._trigger(\x22select\x22,b,c)},_filterMenuItems:function(b){var c=b.replace(/[\x5c-\x5c[\x5c]{}()*+?.,\x5c\x5c\x5c^$|#\x5cs]/g,\x22\x5c\x5c$&\x22),d=new RegExp(\x22^\x22+c,\x22i\x22);return this.activeMenu.find(this.options.items).filter(\x22.ui-menu-item\x22).filter(function(){return d.test(a.trim(a(this).text()))})}})});v$a'}