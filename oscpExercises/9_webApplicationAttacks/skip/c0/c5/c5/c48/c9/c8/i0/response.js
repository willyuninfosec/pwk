var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:04:34 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 23 Aug 2012 00:04:18 GMT\x0aETag: \x22701-4c7e399c26480-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-930/931\x0aContent-Length: 931\x0aKeep-Alive: timeout=5, max=59\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a(function(a){this.version=\x22(beta)(0.0.3)\x22;this.all={};this.special_keys={27:\x22esc\x22,9:\x22tab\x22,32:\x22space\x22,13:\x22return\x22,8:\x22backspace\x22,145:\x22scroll\x22,20:\x22capslock\x22,144:\x22numlock\x22,19:\x22pause\x22,45:\x22insert\x22,36:\x22home\x22,46:\x22del\x22,35:\x22end\x22,33:\x22pageup\x22,34:\x22pagedown\x22,37:\x22left\x22,38:\x22up\x22,39:\x22right\x22,40:\x22down\x22,112:\x22f1\x22,113:\x22f2\x22,114:\x22f3\x22,115:\x22f4\x22,116:\x22f5\x22,117:\x22f6\x22,118:\x22f7\x22,119:\x22f8\x22,120:\x22f9\x22,121:\x22f10\x22,122:\x22f11\x22,123:\x22f12\x22};this.shift_nums={\x22`\x22:\x22~\x22,\x221\x22:\x22!\x22,\x222\x22:\x22@\x22,\x223\x22:\x22#\x22,\x224\x22:\x22$\x22,\x225\x22:\x22%\x22,\x226\x22:\x22^\x22,\x227\x22:\x22&\x22,\x228\x22:\x22*\x22,\x229\x22:\x22(\x22,\x220\x22:\x22)\x22,\x22-\x22:\x22_\x22,\x22=\x22:\x22+\x22,\x22;\x22:\x22:\x22,\x22\x27\x22:\x27\x22\x27,\x22,\x22:\x22\x3c\x22,\x22.\x22:\x22\x3e\x22,\x22/\x22:\x22?\x22,\x22\x5c\x5c\x22:\x22|\x22};this.add=function(c,b,h){if(a.isFunction(b)){h=b;b={}}var d={},f={type:\x22keydown\x22,propagate:false,disableInInput:false,target:a(\x22html\x22)[0]},e=this;d=a.extend(d,f,b||{});c=c.toLowerCase();var g=function(j){var o=j.target;if(d.disableInInput){var s=a(o);if(s.is(\x22input\x22)||s.is(\x22textarea\x22)){return}}var l=j.which,u=j.type,r=String.fromCharCode(l).toLowerCase(),t=e.special_keys[l],m=j.shiftKey,i=j.ctrlKey,p=j.altKey,w=j.metaKey,q=true,k=null;while(!e.all[o]&&o.parentNode){o=o.parentNode}var v=e.all[o].events[u].callbackMap;if(!m&&!i&&!p&&!w){k=v[t]||v[r]}else{var n=\x22\x22;if(p){n+=\x22alt+\x22}if(i){n+=\x22ctrl+\x22}if(m){n+=\x22shift+\x22}if(w){n+=\x22meta+\x22}k=v[n+t]||v[n+r]||v[n+e.shift_nums[r]]}if(k){k.cb(j);if(!k.propagate){j.stopPropagation();j.preventDefault();return false}}};if(!this.all[d.target]){this.all[d.target]={events:{}}}if(!this.all[d.target].events[d.type]){this.all[d.target].events[d.type]={callbackMap:{}};a.event.add(d.target,d.type,g)}this.all[d.target].events[d.type].callbackMap[c]={cb:h,propagate:d.propagate};return a};this.remove=function(c,b){b=b||{};target=b.target||a(\x22html\x22)[0];type=b.type||\x22keydown\x22;c=c.toLowerCase();delete this.all[target].events[type].callbackMap[c];return a};a.hotkeys=this;return a})(jQuery);'}