var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 14:53:12 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Wed, 16 Nov 2016 23:26:31 GMT\x0aETag: \x22116e-541736723d7c0-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-1605/1606\x0aContent-Length: 1606\x0aKeep-Alive: timeout=5, max=45\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a!function(a,b){function c(b,c){var d;\x22function\x22==typeof a.Event?d=new Event(c):(d=document.createEvent(\x22Event\x22),d.initEvent(c,!0,!0)),b.dispatchEvent(d)}function d(){this.handlers={nativeVideo:new f,youtube:new g}}function e(){}var f,g;a.wp=a.wp||{},\x22addEventListener\x22in a&&(d.prototype={initialize:function(){if(this.supportsVideo())for(var a in this.handlers){var d=this.handlers[a];if(\x22test\x22in d&&d.test(b)){this.activeHandler=d.initialize.call(d,b),c(document,\x22wp-custom-header-video-loaded\x22);break}}},supportsVideo:function(){return!(a.innerWidth\x3cb.minWidth||a.innerHeight\x3cb.minHeight)},BaseVideoHandler:e},e.prototype={initialize:function(b){var c=this,d=document.createElement(\x22button\x22);this.settings=b,this.container=document.getElementById(\x22wp-custom-header\x22),this.button=d,d.setAttribute(\x22type\x22,\x22button\x22),d.setAttribute(\x22id\x22,\x22wp-custom-header-video-button\x22),d.setAttribute(\x22class\x22,\x22wp-custom-header-video-button wp-custom-header-video-play\x22),d.innerHTML=b.l10n.play,d.addEventListener(\x22click\x22,function(){c.isPaused()?c.play():c.pause()}),this.container.addEventListener(\x22play\x22,function(){d.className=\x22wp-custom-header-video-button wp-custom-header-video-play\x22,d.innerHTML=b.l10n.pause,\x22a11y\x22in a.wp&&a.wp.a11y.speak(b.l10n.playSpeak)}),this.container.addEventListener(\x22pause\x22,function(){d.className=\x22wp-custom-header-video-button wp-custom-header-video-pause\x22,d.innerHTML=b.l10n.play,\x22a11y\x22in a.wp&&a.wp.a11y.speak(b.l10n.pauseSpeak)}),this.ready()},ready:function(){},isPaused:function(){},pause:function(){},play:function(){},setVideo:function(a){var b,c=this.container.getElementsByClassName(\x22customize-partial-edit-shortcut\x22);c.length&&(b=this.container.removeChild(c[0])),this.container.innerHTML=\x22\x22,this.container.appendChild(a),b&&this.container.appendChild(b)},showControls:function(){this.container.contains(this.button)||this.container.appendChild(this.button)},test:function(){return!1},trigger:function(a){c(this.container,a)}},e.extend=function(a){function b(){var a=e.apply(this,arguments);return a}var c;b.prototype=Object.create(e.prototype),b.prototype.constructor=b;for(c in a)b.prototype[c]=a[c];return b},f=e.extend({test:function(a){var b=document.createElement(\x22video\x22);return b.canPlayType(a.mimeType)},ready:function(){var a=this,b=document.createElement(\x22video\x22);b.id=\x22wp-custom-header-video\x22,b.autoplay=\x22autoplay\x22,b.loop=\x22loop\x22,b.muted=\x22muted\x22,b.width=this.settings.width,b.height=this.settings.height,b.addEventListener(\x22play\x22,function(){a.trigger(\x22play\x22)}),b.addEventListener(\x22pause\x22,function(){a.trigger(\x22pause\x22)}),b.addEventListener(\x22canplay\x22,function(){a.showControls()}),this.video=b,a.setVideo(b),b.src=this.settings.videoUrl},isPaused:function(){return this.video.paused},pause:function(){this.video.pause()},play:function(){this.video.play()}}),g=e.extend({test:function(a){return\x22video/x-youtube\x22===a.mimeType},ready:function(){var b=this;if(\x22YT\x22in a)YT.ready(b.loadVideo.bind(b));else{var c=document.createElement(\x22script\x22);c.src=\x22https://www.youtube.com/iframe_api\x22,c.onload=function(){YT.ready(b.loadVideo.bind(b))},document.getElementsByTagName(\x22head\x22)[0].appendChild(c)}},loadVideo:function(){var a=this,b=document.createElement(\x22div\x22),c=/^.*(?:(?:youtu\x5c.be\x5c/|v\x5c/|vi\x5c/|u\x5c/\x5cw\x5c/|embed\x5c/)|(?:(?:watch)?\x5c?v(?:i)?=|\x5c&v(?:i)?=))([^#\x5c&\x5c?]*).*/;b.id=\x22wp-custom-header-video\x22,a.setVideo(b),a.player=new YT.Player(b,{height:this.settings.height,width:this.settings.width,videoId:this.settings.videoUrl.match(c)[1],events:{onReady:function(b){b.target.mute(),a.showControls()},onStateChange:function(b){YT.PlayerState.PLAYING===b.data?a.trigger(\x22play\x22):YT.PlayerState.PAUSED===b.data?a.trigger(\x22pause\x22):YT.PlayerState.ENDED===b.data&&b.target.playVideo()}},playerVars:{autoplay:1,controls:0,disablekb:1,fs:0,iv_load_policy:3,loop:1,modestbranding:1,playsinline:1,rel:0,showinfo:0}})},isPaused:function(){return YT.PlayerState.PAUSED===this.player.getPlayerState()},pause:function(){this.player.pauseVideo()},play:function(){this.player.playVideo()}}),a.wp.customHeader=new d,document.addEventListener(\x22DOMContentLoaded\x22,a.wp.customHeader.initialize.bind(a.wp.customHeader),!1),\x22customize\x22in a.wp&&(a.wp.customize.selectiveRefresh.bind(\x22render-partials-response\x22,function(a){\x22custom_header_settings\x22in a&&(b=a.custom_header_settings)}),a.wp.customize.selectiveRefresh.bind(\x22partial-content-rendered\x22,function(b){\x22custom_header\x22===b.partial.id&&a.wp.customHeader.initialize()})))}(window,window._wpCustomHeaderSettings||{});'}