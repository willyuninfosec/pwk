var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 14:53:14 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Wed, 13 Jan 2016 17:22:27 GMT\x0aETag: \x226f7-5293a6a035ac0-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-780/781\x0aContent-Length: 781\x0aKeep-Alive: timeout=5, max=95\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a!function(a){function b(){var b,d=a(\x22#wp-auth-check\x22),f=a(\x22#wp-auth-check-form\x22),g=e.find(\x22.wp-auth-fallback-expired\x22),h=!1;f.length&&(a(window).on(\x22beforeunload.wp-auth-check\x22,function(a){a.originalEvent.returnValue=window.authcheckL10n.beforeunload}),b=a(\x27\x3ciframe id=\x22wp-auth-check-frame\x22 frameborder=\x220\x22\x3e\x27).attr(\x22title\x22,g.text()),b.on(\x22load\x22,function(){var b,i;h=!0,f.removeClass(\x22loading\x22);try{i=a(this).contents().find(\x22body\x22),b=i.height()}catch(j){return e.addClass(\x22fallback\x22),d.css(\x22max-height\x22,\x22\x22),f.remove(),void g.focus()}b?i&&i.hasClass(\x22interim-login-success\x22)?c():d.css(\x22max-height\x22,b+40+\x22px\x22):i&&i.length||(e.addClass(\x22fallback\x22),d.css(\x22max-height\x22,\x22\x22),f.remove(),g.focus())}).attr(\x22src\x22,f.data(\x22src\x22)),f.append(b)),a(\x22body\x22).addClass(\x22modal-open\x22),e.removeClass(\x22hidden\x22),b?(b.focus(),setTimeout(function(){h||(e.addClass(\x22fallback\x22),f.remove(),g.focus())},1e4)):g.focus()}function c(){a(window).off(\x22beforeunload.wp-auth-check\x22),\x22undefined\x22==typeof adminpage||\x22post-php\x22!==adminpage&&\x22post-new-php\x22!==adminpage||\x22undefined\x22==typeof wp||!wp.heartbeat||(a(document).off(\x22heartbeat-tick.wp-auth-check\x22),wp.heartbeat.connectNow()),e.fadeOut(200,function(){e.addClass(\x22hidden\x22).css(\x22display\x22,\x22\x22),a(\x22#wp-auth-check-frame\x22).remove(),a(\x22body\x22).removeClass(\x22modal-open\x22)})}function d(){var a=parseInt(window.authcheckL10n.interval,10)||180;f=(new Date).getTime()+1e3*a}var e,f;a(document).on(\x22heartbeat-tick.wp-auth-check\x22,function(a,f){\x22wp-auth-check\x22in f&&(d(),!f[\x22wp-auth-check\x22]&&e.hasClass(\x22hidden\x22)?b():f[\x22wp-auth-check\x22]&&!e.hasClass(\x22hidden\x22)&&c())}).on(\x22heartbeat-send.wp-auth-check\x22,function(a,b){(new Date).getTime()\x3ef&&(b[\x22wp-auth-check\x22]=!0)}).ready(function(){d(),e=a(\x22#wp-auth-check-wrap\x22),e.find(\x22.wp-auth-check-close\x22).on(\x22click\x22,function(){c()})})}(jQuery);'}