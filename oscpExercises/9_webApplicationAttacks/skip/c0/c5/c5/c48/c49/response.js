var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:11:59 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Mon, 21 Jan 2019 23:03:50 GMT\x0aETag: \x222a97-57fffdfb32180-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-3160/3161\x0aContent-Length: 3161\x0aKeep-Alive: timeout=5, max=96\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a!function(a,b){var c,d=wp.customize,e={};!function(a){var c;a.replaceState&&(c=function(a){var c,e,f;return c=document.createElement(\x22a\x22),c.href=a,e=d.utils.parseQueryString(location.search.substr(1)),f=d.utils.parseQueryString(c.search.substr(1)),f.customize_changeset_uuid=e.customize_changeset_uuid,e.customize_autosaved&&(f.customize_autosaved=\x22on\x22),e.customize_theme&&(f.customize_theme=e.customize_theme),e.customize_messenger_channel&&(f.customize_messenger_channel=e.customize_messenger_channel),c.search=b.param(f),c.href},a.replaceState=function(b){return function(d,f,g){return e=d,b.call(a,d,f,\x22string\x22==typeof g&&g.length\x3e0?c(g):g)}}(a.replaceState),a.pushState=function(b){return function(d,f,g){return e=d,b.call(a,d,f,\x22string\x22==typeof g&&g.length\x3e0?c(g):g)}}(a.pushState),window.addEventListener(\x22popstate\x22,function(a){e=a.state}))}(history),c=function(a,b,c){var d;return function(){var e=arguments;c=c||this,clearTimeout(d),d=setTimeout(function(){d=null,a.apply(c,e)},b)}},d.Preview=d.Messenger.extend({initialize:function(a,e){var f=this,g=document.createElement(\x22a\x22);d.Messenger.prototype.initialize.call(f,a,e),g.href=f.origin(),f.add(\x22scheme\x22,g.protocol.replace(/:$/,\x22\x22)),f.body=b(document.body),f.window=b(window),d.settings.channel&&(f.body.on(\x22click.preview\x22,\x22a\x22,function(a){f.handleLinkClick(a)}),f.body.on(\x22submit.preview\x22,\x22form\x22,function(a){f.handleFormSubmit(a)}),f.window.on(\x22scroll.preview\x22,c(function(){f.send(\x22scroll\x22,f.window.scrollTop())},200)),f.bind(\x22scroll\x22,function(a){f.window.scrollTop(a)}))},handleLinkClick:function(a){var c,e,f=this;if(c=b(a.target).closest(\x22a\x22),!_.isUndefined(c.attr(\x22href\x22))&&(e=\x22#\x22===c.attr(\x22href\x22).substr(0,1),!e&&/^https?:$/.test(c.prop(\x22protocol\x22)))){if(!d.isLinkPreviewable(c[0]))return wp.a11y.speak(d.settings.l10n.linkUnpreviewable),void a.preventDefault();a.preventDefault(),a.shiftKey||f.send(\x22url\x22,c.prop(\x22href\x22))}},handleFormSubmit:function(a){var c,e,f=this;return c=document.createElement(\x22a\x22),e=b(a.target),c.href=e.prop(\x22action\x22),\x22GET\x22===e.prop(\x22method\x22).toUpperCase()&&d.isLinkPreviewable(c)?(a.isDefaultPrevented()||(c.search.length\x3e1&&(c.search+=\x22&\x22),c.search+=e.serialize(),f.send(\x22url\x22,c.href)),void a.preventDefault()):(wp.a11y.speak(d.settings.l10n.formUnpreviewable),void a.preventDefault())}}),d.addLinkPreviewing=function(){var a=\x22a[href], area[href]\x22;b(document.body).find(a).each(function(){d.prepareLinkPreview(this)}),\x22undefined\x22!=typeof MutationObserver?(d.mutationObserver=new MutationObserver(function(c){_.each(c,function(c){b(c.target).find(a).each(function(){d.prepareLinkPreview(this)})})}),d.mutationObserver.observe(document.documentElement,{childList:!0,subtree:!0})):b(document.documentElement).on(\x22click focus mouseover\x22,a,function(){d.prepareLinkPreview(this)})},d.isLinkPreviewable=function(a,b){var c,e,f,g;return f=_.extend({},{allowAdminAjax:!1},b||{}),\x22javascript:\x22===a.protocol||(\x22https:\x22===a.protocol||\x22http:\x22===a.protocol)&&(g=a.host.replace(/:(80|443)$/,\x22\x22),e=document.createElement(\x22a\x22),c=!_.isUndefined(_.find(d.settings.url.allowed,function(b){return e.href=b,e.protocol===a.protocol&&e.host.replace(/:(80|443)$/,\x22\x22)===g&&0===a.pathname.indexOf(e.pathname.replace(/\x5c/$/,\x22\x22))})),!!c&&(!/\x5c/wp-(login|signup)\x5c.php$/.test(a.pathname)&&(/\x5c/wp-admin\x5c/admin-ajax\x5c.php$/.test(a.pathname)?f.allowAdminAjax:!/\x5c/wp-(admin|includes|content)(\x5c/|$)/.test(a.pathname))))},d.prepareLinkPreview=function(a){var c,e=b(a);if(a.hasAttribute(\x22href\x22)&&!e.closest(\x22#wpadminbar\x22).length&&\x22#\x22!==e.attr(\x22href\x22).substr(0,1)&&/^https?:$/.test(a.protocol)&&(d.settings.channel&&\x22https\x22===d.preview.scheme.get()&&\x22http:\x22===a.protocol&&-1!==d.settings.url.allowedHosts.indexOf(a.host)&&(a.protocol=\x22https:\x22),!e.hasClass(\x22wp-playlist-caption\x22))){if(!d.isLinkPreviewable(a))return void(d.settings.channel&&e.addClass(\x22customize-unpreviewable\x22));e.removeClass(\x22customize-unpreviewable\x22),c=d.utils.parseQueryString(a.search.substring(1)),c.customize_changeset_uuid=d.settings.changeset.uuid,d.settings.changeset.autosaved&&(c.customize_autosaved=\x22on\x22),d.settings.theme.active||(c.customize_theme=d.settings.theme.stylesheet),d.settings.channel&&(c.customize_messenger_channel=d.settings.channel),a.search=b.param(c)}},d.addRequestPreviewing=function(){var a=function(a,c,e){var f,g,h,i={};f=document.createElement(\x22a\x22),f.href=a.url,d.isLinkPreviewable(f,{allowAdminAjax:!0})&&(g=d.utils.parseQueryString(f.search.substring(1)),d.each(function(a){a._dirty&&(i[a.id]=a.get())}),_.isEmpty(i)||(h=a.type.toUpperCase(),\x22POST\x22!==h&&(e.setRequestHeader(\x22X-HTTP-Method-Override\x22,h),g._method=h,a.type=\x22POST\x22),a.data?a.data+=\x22&\x22:a.data=\x22\x22,a.data+=b.param({customized:JSON.stringify(i)})),g.customize_changeset_uuid=d.settings.changeset.uuid,d.settings.changeset.autosaved&&(g.customize_autosaved=\x22on\x22),d.settings.theme.active||(g.customize_theme=d.settings.theme.stylesheet),g.customize_preview_nonce=d.settings.nonce.preview,f.search=b.param(g),a.url=f.href)};b.ajaxPrefilter(a)},d.addFormPreviewing=function(){b(document.body).find(\x22form\x22).each(function(){d.prepareFormPreview(this)}),\x22undefined\x22!=typeof MutationObserver&&(d.mutationObserver=new MutationObserver(function(a){_.each(a,function(a){b(a.target).find(\x22form\x22).each(function(){d.prepareFormPreview(this)})})}),d.mutationObserver.observe(document.documentElement,{childList:!0,subtree:!0}))},d.prepareFormPreview=function(a){var c,e={};return a.action||(a.action=location.href),c=document.createElement(\x22a\x22),c.href=a.action,d.settings.channel&&\x22https\x22===d.preview.scheme.get()&&\x22http:\x22===c.protocol&&-1!==d.settings.url.allowedHosts.indexOf(c.host)&&(c.protocol=\x22https:\x22,a.action=c.href),\x22GET\x22===a.method.toUpperCase()&&d.isLinkPreviewable(c)?(b(a).removeClass(\x22customize-unpreviewable\x22),e.customize_changeset_uuid=d.settings.changeset.uuid,d.settings.changeset.autosaved&&(e.customize_autosaved=\x22on\x22),d.settings.theme.active||(e.customize_theme=d.settings.theme.stylesheet),d.settings.channel&&(e.customize_messenger_channel=d.settings.channel),_.each(e,function(c,d){var e=b(a).find(\x27input[name=\x22\x27+d+\x27\x22]\x27);e.length?e.val(c):b(a).prepend(b(\x22\x3cinput\x3e\x22,{type:\x22hidden\x22,name:d,value:c}))}),void(d.settings.channel&&(a.target=\x22_self\x22))):void(d.settings.channel&&b(a).addClass(\x22customize-unpreviewable\x22))},d.keepAliveCurrentUrl=function(){var a=location.pathname,c=location.search.substr(1),e=null,f=[\x22customize_theme\x22,\x22customize_changeset_uuid\x22,\x22customize_messenger_channel\x22,\x22customize_autosaved\x22];return function(){var g,h;return c===location.search.substr(1)&&a===location.pathname?void d.preview.send(\x22keep-alive\x22):(g=document.createElement(\x22a\x22),null===e&&(g.search=c,e=d.utils.parseQueryString(c),_.each(f,function(a){delete e[a]})),g.href=location.href,h=d.utils.parseQueryString(g.search.substr(1)),_.each(f,function(a){delete h[a]}),a===location.pathname&&_.isEqual(e,h)?d.preview.send(\x22keep-alive\x22):(g.search=b.param(h),g.hash=\x22\x22,d.settings.url.self=g.href,d.preview.send(\x22ready\x22,{currentUrl:d.settings.url.self,activePanels:d.settings.activePanels,activeSections:d.settings.activeSections,activeControls:d.settings.activeControls,settingValidities:d.settings.settingValidities})),e=h,c=location.search.substr(1),void(a=location.pathname))}}(),d.settingPreviewHandlers={custom_logo:function(a){b(\x22body\x22).toggleClass(\x22wp-custom-logo\x22,!!a)},custom_css:function(a){b(\x22#wp-custom-css\x22).text(a)},background:function(){var a=\x22\x22,c={};_.each([\x22color\x22,\x22image\x22,\x22preset\x22,\x22position_x\x22,\x22position_y\x22,\x22size\x22,\x22repeat\x22,\x22attachment\x22],function(a){c[a]=d(\x22background_\x22+a)}),b(document.body).toggleClass(\x22custom-background\x22,!(!c.color()&&!c.image())),c.color()&&(a+=\x22background-color: \x22+c.color()+\x22;\x22),c.image()&&(a+=\x27background-image: url(\x22\x27+c.image()+\x27\x22);\x27,a+=\x22background-size: \x22+c.size()+\x22;\x22,a+=\x22background-position: \x22+c.position_x()+\x22 \x22+c.position_y()+\x22;\x22,a+=\x22background-repeat: \x22+c.repeat()+\x22;\x22,a+=\x22background-attachment: \x22+c.attachment()+\x22;\x22),b(\x22#custom-background-css\x22).text(\x22body.custom-background { \x22+a+\x22 }\x22)}},b(function(){var a,c,f;d.settings=window._wpCustomizeSettings,d.settings&&(d.preview=new d.Preview({url:window.location.href,channel:d.settings.channel}),d.addLinkPreviewing(),d.addRequestPreviewing(),d.addFormPreviewing(),c=function(a,b,c){var e=d(a);e?e.set(b):(c=c||!1,e=d.create(a,b,{id:a}),c&&(e._dirty=!0))},d.preview.bind(\x22settings\x22,function(a){b.each(a,c)}),d.preview.trigger(\x22settings\x22,d.settings.values),b.each(d.settings._dirty,function(a,b){var c=d(b);c&&(c._dirty=!0)}),d.preview.bind(\x22setting\x22,function(a){var b=!0;c.apply(null,a.concat(b))}),d.preview.bind(\x22sync\x22,function(a){a.settings&&a[\x22settings-modified-while-loading\x22]&&_.each(_.keys(a.settings),function(b){d.has(b)&&!a[\x22settings-modified-while-loading\x22][b]&&delete a.settings[b]}),b.each(a,function(a,b){d.preview.trigger(a,b)}),d.preview.send(\x22synced\x22)}),d.preview.bind(\x22active\x22,function(){d.preview.send(\x22nonce\x22,d.settings.nonce),d.preview.send(\x22documentTitle\x22,document.title),d.preview.send(\x22scroll\x22,b(window).scrollTop())}),f=function(a){d.settings.changeset.uuid=a,b(document.body).find(\x22a[href], area[href]\x22).each(function(){d.prepareLinkPreview(this)}),b(document.body).find(\x22form\x22).each(function(){d.prepareFormPreview(this)}),history.replaceState&&history.replaceState(e,\x22\x22,location.href)},d.preview.bind(\x22changeset-uuid\x22,f),d.preview.bind(\x22saved\x22,function(a){a.next_changeset_uuid&&f(a.next_changeset_uuid),d.trigger(\x22saved\x22,a)}),d.preview.bind(\x22autosaving\x22,function(){d.settings.changeset.autosaved||(d.settings.changeset.autosaved=!0,b(document.body).find(\x22a[href], area[href]\x22).each(function(){d.prepareLinkPreview(this)}),b(document.body).find(\x22form\x22).each(function(){d.prepareFormPreview(this)}),history.replaceState&&history.replaceState(e,\x22\x22,location.href))}),d.preview.bind(\x22changeset-saved\x22,function(a){_.each(a.saved_changeset_values,function(a,b){var c=d(b);c&&_.isEqual(c.get(),a)&&(c._dirty=!1)})}),d.preview.bind(\x22nonce-refresh\x22,function(a){b.extend(d.settings.nonce,a)}),d.preview.send(\x22ready\x22,{currentUrl:d.settings.url.self,activePanels:d.settings.activePanels,activeSections:d.settings.activeSections,activeControls:d.settings.activeControls,settingValidities:d.settings.settingValidities}),setInterval(d.keepAliveCurrentUrl,d.settings.timeouts.keepAliveSend),d.preview.bind(\x22loading-initiated\x22,function(){b(\x22body\x22).addClass(\x22wp-customizer-unloading\x22)}),d.preview.bind(\x22loading-failed\x22,function(){b(\x22body\x22).removeClass(\x22wp-customizer-unloading\x22)}),a=b.map([\x22color\x22,\x22image\x22,\x22preset\x22,\x22position_x\x22,\x22position_y\x22,\x22size\x22,\x22repeat\x22,\x22attachment\x22],function(a){return\x22background_\x22+a}),d.when.apply(d,a).done(function(){b.each(arguments,function(){this.bind(d.settingPreviewHandlers.background)})}),d(\x22custom_logo\x22,function(a){d.settingPreviewHandlers.custom_logo.call(a,a.get()),a.bind(d.settingPreviewHandlers.custom_logo)}),d(\x22custom_css[\x22+d.settings.theme.stylesheet+\x22]\x22,function(a){a.bind(d.settingPreviewHandlers.custom_css)}),d.trigger(\x22preview-ready\x22))})}(wp,jQuery);'}