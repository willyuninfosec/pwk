var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 14:53:23 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Sun, 19 Aug 2018 13:33:24 GMT\x0aETag: \x22744-573c9d644b100-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-819/820\x0aContent-Length: 820\x0aKeep-Alive: timeout=5, max=71\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0awindow.wpCookies={each:function(a,b,c){var d,e;if(!a)return 0;if(c=c||a,\x22undefined\x22!=typeof a.length){for(d=0,e=a.length;d\x3ce;d++)if(b.call(c,a[d],d,a)===!1)return 0}else for(d in a)if(a.hasOwnProperty(d)&&b.call(c,a[d],d,a)===!1)return 0;return 1},getHash:function(a){var b,c=this.get(a);return c&&this.each(c.split(\x22&\x22),function(a){a=a.split(\x22=\x22),b=b||{},b[a[0]]=a[1]}),b},setHash:function(a,b,c,d,e,f){var g=\x22\x22;this.each(b,function(a,b){g+=(g?\x22&\x22:\x22\x22)+b+\x22=\x22+a}),this.set(a,g,c,d,e,f)},get:function(a){var b,c,d=document.cookie,e=a+\x22=\x22;if(d){if(c=d.indexOf(\x22; \x22+e),c===-1){if(c=d.indexOf(e),0!==c)return null}else c+=2;return b=d.indexOf(\x22;\x22,c),b===-1&&(b=d.length),decodeURIComponent(d.substring(c+e.length,b))}},set:function(a,b,c,d,e,f){var g=new Date;\x22object\x22==typeof c&&c.toGMTString?c=c.toGMTString():parseInt(c,10)?(g.setTime(g.getTime()+1e3*parseInt(c,10)),c=g.toGMTString()):c=\x22\x22,document.cookie=a+\x22=\x22+encodeURIComponent(b)+(c?\x22; expires=\x22+c:\x22\x22)+(d?\x22; path=\x22+d:\x22\x22)+(e?\x22; domain=\x22+e:\x22\x22)+(f?\x22; secure\x22:\x22\x22)},remove:function(a,b,c,d){this.set(a,\x22\x22,-1e3,b,c,d)}},window.getUserSetting=function(a,b){var c=getAllUserSettings();return c.hasOwnProperty(a)?c[a]:\x22undefined\x22!=typeof b?b:\x22\x22},window.setUserSetting=function(a,b,c){if(\x22object\x22!=typeof userSettings)return!1;var d=userSettings.uid,e=wpCookies.getHash(\x22wp-settings-\x22+d),f=userSettings.url,g=!!userSettings.secure;return a=a.toString().replace(/[^A-Za-z0-9_-]/g,\x22\x22),b=\x22number\x22==typeof b?parseInt(b,10):b.toString().replace(/[^A-Za-z0-9_-]/g,\x22\x22),e=e||{},c?delete e[a]:e[a]=b,wpCookies.setHash(\x22wp-settings-\x22+d,e,31536e3,f,\x22\x22,g),wpCookies.set(\x22wp-settings-time-\x22+d,userSettings.time,31536e3,f,\x22\x22,g),a},window.deleteUserSetting=function(a){return setUserSetting(a,\x22\x22,1)},window.getAllUserSettings=function(){return\x22object\x22!=typeof userSettings?{}:wpCookies.getHash(\x22wp-settings-\x22+userSettings.uid)||{}};'}