var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:12:19 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 03 Nov 2016 05:40:34 GMT\x0aETag: \x22160e-5405eff119880-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-2247/2248\x0aContent-Length: 2248\x0aKeep-Alive: timeout=5, max=99\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0awindow.autosave=function(){return!0},function(a,b){function c(){function c(b){var c,d,e,f=(new Date).getTime(),h=[],i=g();return i&&i.isDirty()&&!i.isHidden()&&f-3e3\x3ek&&(i.save(),k=f),e={post_id:a(\x22#post_ID\x22).val()||0,post_type:a(\x22#post_type\x22).val()||\x22\x22,post_author:a(\x22#post_author\x22).val()||\x22\x22,post_title:a(\x22#title\x22).val()||\x22\x22,content:a(\x22#content\x22).val()||\x22\x22,excerpt:a(\x22#excerpt\x22).val()||\x22\x22},\x22local\x22===b?e:(a(\x27input[id^=\x22in-category-\x22]:checked\x27).each(function(){h.push(this.value)}),e.catslist=h.join(\x22,\x22),(c=a(\x22#post_name\x22).val())&&(e.post_name=c),(d=a(\x22#parent_id\x22).val())&&(e.parent_id=d),a(\x22#comment_status\x22).prop(\x22checked\x22)&&(e.comment_status=\x22open\x22),a(\x22#ping_status\x22).prop(\x22checked\x22)&&(e.ping_status=\x22open\x22),\x221\x22===a(\x22#auto_draft\x22).val()&&(e.auto_draft=\x221\x22),e)}function d(b){return\x22object\x22==typeof b?(b.post_title||\x22\x22)+\x22::\x22+(b.content||\x22\x22)+\x22::\x22+(b.excerpt||\x22\x22):(a(\x22#title\x22).val()||\x22\x22)+\x22::\x22+(a(\x22#content\x22).val()||\x22\x22)+\x22::\x22+(a(\x22#excerpt\x22).val()||\x22\x22)}function e(){l.trigger(\x22autosave-disable-buttons\x22),setTimeout(f,5e3)}function f(){l.trigger(\x22autosave-enable-buttons\x22)}function g(){return\x22undefined\x22!=typeof tinymce&&tinymce.get(\x22content\x22)}function h(){function e(){var a=Math.random().toString(),c=!1;try{b.sessionStorage.setItem(\x22wp-test\x22,a),c=b.sessionStorage.getItem(\x22wp-test\x22)===a,b.sessionStorage.removeItem(\x22wp-test\x22)}catch(d){}return v=c,c}function f(){var a=!1;return v&&t&&(a=sessionStorage.getItem(\x22wp-autosave-\x22+t),a=a?JSON.parse(a):{}),a}function h(a){var b;return!(!v||!t)&&(b=\x22wp-autosave-\x22+t,sessionStorage.setItem(b,JSON.stringify(a)),null!==sessionStorage.getItem(b))}function i(){var a=f();return!(!a||!u)&&(a[\x22post_\x22+u]||!1)}function k(a){var b=f();if(!b||!u)return!1;if(a)b[\x22post_\x22+u]=a;else{if(!b.hasOwnProperty(\x22post_\x22+u))return!1;delete b[\x22post_\x22+u]}return h(b)}function m(){y=!0}function n(){y=!1}function o(b){var e,f,g=!1;return!(y||!v)&&(b?(e=i()||{},a.extend(e,b)):e=c(\x22local\x22),f=d(e),\x22undefined\x22==typeof x&&(x=j),f!==x&&(e.save_time=(new Date).getTime(),e.status=a(\x22#post_status\x22).val()||\x22\x22,g=k(e),g&&(x=f),g))}function p(){u=a(\x22#post_ID\x22).val()||0,a(\x22#wp-content-wrap\x22).hasClass(\x22tmce-active\x22)?l.on(\x22tinymce-editor-init.autosave\x22,function(){b.setTimeout(function(){r()},1500)}):r(),w=b.setInterval(o,15e3),a(\x22form#post\x22).on(\x22submit.autosave-local\x22,function(){var c=g(),d=a(\x22#post_ID\x22).val()||0;c&&!c.isHidden()?c.on(\x22submit\x22,function(){o({post_title:a(\x22#title\x22).val()||\x22\x22,content:a(\x22#content\x22).val()||\x22\x22,excerpt:a(\x22#excerpt\x22).val()||\x22\x22})}):o({post_title:a(\x22#title\x22).val()||\x22\x22,content:a(\x22#content\x22).val()||\x22\x22,excerpt:a(\x22#excerpt\x22).val()||\x22\x22});var e=\x22https:\x22===b.location.protocol;wpCookies.set(\x22wp-saving-post\x22,d+\x22-check\x22,86400,!1,!1,e)})}function q(a,b){function c(a){return a.toString().replace(/[\x5cx20\x5ct\x5cr\x5cn\x5cf]+/g,\x22\x22)}return c(a||\x22\x22)===c(b||\x22\x22)}function r(){var b,c,d,e,f=i(),g=wpCookies.get(\x22wp-saving-post\x22),h=a(\x22#has-newer-autosave\x22).parent(\x22.notice\x22),j=a(\x22.wp-header-end\x22);return g===u+\x22-saved\x22?(wpCookies.remove(\x22wp-saving-post\x22),void k(!1)):void(f&&(b=a(\x22#content\x22).val()||\x22\x22,c=a(\x22#title\x22).val()||\x22\x22,d=a(\x22#excerpt\x22).val()||\x22\x22,q(b,f.content)&&q(c,f.post_title)&&q(d,f.excerpt)||(j.length||(j=a(\x22.wrap h1, .wrap h2\x22).first()),e=a(\x22#local-storage-notice\x22).insertAfter(j).addClass(\x22notice-warning\x22),h.length?h.slideUp(150,function(){e.slideDown(150)}):e.slideDown(200),e.find(\x22.restore-backup\x22).on(\x22click.autosave-local\x22,function(){s(f),e.fadeTo(250,0,function(){e.slideUp(150)})}))))}function s(b){var c;return!!b&&(x=d(b),a(\x22#title\x22).val()!==b.post_title&&a(\x22#title\x22).focus().val(b.post_title||\x22\x22),a(\x22#excerpt\x22).val(b.excerpt||\x22\x22),c=g(),c&&!c.isHidden()&&\x22undefined\x22!=typeof switchEditors?(c.settings.wpautop&&b.content&&(b.content=switchEditors.wpautop(b.content)),c.undoManager.transact(function(){c.setContent(b.content||\x22\x22),c.nodeChanged()})):(a(\x22#content-html\x22).click(),a(\x22#content\x22).focus(),document.execCommand(\x22selectAll\x22),document.execCommand(\x22insertText\x22,!1,b.content||\x22\x22)),!0)}var t,u,v,w,x,y=!1;return t=\x22undefined\x22!=typeof b.autosaveL10n&&b.autosaveL10n.blog_id,e()&&t&&(a(\x22#content\x22).length||a(\x22#excerpt\x22).length)&&l.ready(p),{hasStorage:v,getSavedPostData:i,save:o,suspend:m,resume:n}}function i(){function g(){q=!0,b.clearTimeout(r),r=b.setTimeout(function(){q=!1},1e4)}function h(){v=!0}function i(){v=!1}function k(b){p(),q=!1,t=s,s=\x22\x22,l.trigger(\x22after-autosave\x22,[b]),f(),b.success&&a(\x22#auto_draft\x22).val(\x22\x22)}function m(){u=0,wp.heartbeat.connectNow()}function n(){return d()!==j}function o(){var f,h;return!(v||q||!b.autosave())&&(!((new Date).getTime()\x3cu)&&(f=c(),h=d(f),\x22undefined\x22==typeof t&&(t=j),h!==t&&(s=h,g(),e(),l.trigger(\x22wpcountwords\x22,[f.content]).trigger(\x22before-autosave\x22,[f]),f._wpnonce=a(\x22#_wpnonce\x22).val()||\x22\x22,f)))}function p(){u=(new Date).getTime()+1e3*autosaveL10n.autosaveInterval||6e4}var q,r,s,t,u=0,v=!1;return l.on(\x22heartbeat-send.autosave\x22,function(a,b){var c=o();c&&(b.wp_autosave=c)}).on(\x22heartbeat-tick.autosave\x22,function(a,b){b.wp_autosave&&k(b.wp_autosave)}).on(\x22heartbeat-connection-lost.autosave\x22,function(b,c,d){if(\x22timeout\x22===c||603===d){var f=a(\x22#lost-connection-notice\x22);wp.autosave.local.hasStorage||f.find(\x22.hide-if-no-sessionstorage\x22).hide(),f.show(),e()}}).on(\x22heartbeat-connection-restored.autosave\x22,function(){a(\x22#lost-connection-notice\x22).hide(),f()}).ready(function(){p()}),{tempBlockSave:g,triggerSave:m,postChanged:n,suspend:h,resume:i}}var j,k=0,l=a(document);return l.on(\x22tinymce-editor-init.autosave\x22,function(a,c){\x22content\x22===c.id&&b.setTimeout(function(){c.save(),j=d()},1e3)}).ready(function(){j=d()}),{getPostData:c,getCompareString:d,disableButtons:e,enableButtons:f,local:h(),server:i()}}b.wp=b.wp||{},b.wp.autosave=c()}(jQuery,window);\xd6\xbb`l!'}