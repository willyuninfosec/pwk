var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 14:56:46 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Fri, 17 May 2019 04:49:54 GMT\x0aETag: \x2222ec-5890e1d14c080-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-3418/3419\x0aContent-Length: 3419\x0aKeep-Alive: timeout=5, max=19\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a!function(l){\x22use strict\x22;var t=tinymce.util.Tools.resolve(\x22tinymce.PluginManager\x22),n=tinymce.util.Tools.resolve(\x22tinymce.util.VK\x22),e=function(t){return t.target_list},o=function(t){return t.rel_list},i=function(t){return t.link_class_list},p=function(t){return\x22boolean\x22==typeof t.link_assume_external_targets&&t.link_assume_external_targets},a=function(t){return\x22boolean\x22==typeof t.link_context_toolbar&&t.link_context_toolbar},r=function(t){return t.link_list},k=function(t){return\x22string\x22==typeof t.default_link_target},y=function(t){return t.default_link_target},b=e,_=function(t,e){t.settings.target_list=e},w=function(t){return!1!==e(t)},T=o,C=function(t){return o(t)!==undefined},M=i,O=function(t){return i(t)!==undefined},R=function(t){return!1!==t.link_title},N=function(t){return\x22boolean\x22==typeof t.allow_unsafe_link_target&&t.allow_unsafe_link_target},u=tinymce.util.Tools.resolve(\x22tinymce.dom.DOMUtils\x22),c=tinymce.util.Tools.resolve(\x22tinymce.Env\x22),s=function(t){if(!c.ie||10\x3cc.ie){var e=l.document.createElement(\x22a\x22);e.target=\x22_blank\x22,e.href=t,e.rel=\x22noreferrer noopener\x22;var n=l.document.createEvent(\x22MouseEvents\x22);n.initMouseEvent(\x22click\x22,!0,!0,l.window,0,0,0,0,0,!1,!1,!1,!1,0,null),r=e,a=n,l.document.body.appendChild(r),r.dispatchEvent(a),l.document.body.removeChild(r)}else{var o=l.window.open(\x22\x22,\x22_blank\x22);if(o){o.opener=null;var i=o.document;i.open(),i.write(\x27\x3cmeta http-equiv=\x22refresh\x22 content=\x220; url=\x27+u.DOM.encode(t)+\x27\x22\x3e\x27),i.close()}}var r,a},A=tinymce.util.Tools.resolve(\x22tinymce.util.Tools\x22),f=function(t,e){var n,o,i=[\x22noopener\x22],r=t?t.split(/\x5cs+/):[],a=function(t){return t.filter(function(t){return-1===A.inArray(i,t)})};return(r=e?(n=a(n=r)).length?n.concat(i):i:a(r)).length?(o=r,A.trim(o.sort().join(\x22 \x22))):null},d=function(t,e){return e=e||t.selection.getNode(),v(e)?t.dom.select(\x22a[href]\x22,e)[0]:t.dom.getParent(e,\x22a[href]\x22)},m=function(t){return t&&\x22A\x22===t.nodeName&&t.href},v=function(t){return t&&\x22FIGURE\x22===t.nodeName&&/\x5cbimage\x5cb/i.test(t.className)},g=function(t,e){var n,o;(o=t.dom.select(\x22img\x22,e)[0])&&(n=t.dom.getParents(o,\x22a[href]\x22,e)[0])&&(n.parentNode.insertBefore(o,n),t.dom.remove(n))},h=function(t,e,n){var o,i;(i=t.dom.select(\x22img\x22,e)[0])&&(o=t.dom.create(\x22a\x22,n),i.parentNode.insertBefore(o,i),o.appendChild(i))},L=function(i,r){return function(o){i.undoManager.transact(function(){var t=i.selection.getNode(),e=d(i,t),n={href:o.href,target:o.target?o.target:null,rel:o.rel?o.rel:null,\x22class\x22:o[\x22class\x22]?o[\x22class\x22]:null,title:o.title?o.title:null};C(i.settings)||!1!==N(i.settings)||(n.rel=f(n.rel,\x22_blank\x22===n.target)),o.href===r.href&&(r.attach(),r={}),e?(i.focus(),o.hasOwnProperty(\x22text\x22)&&(\x22innerText\x22in e?e.innerText=o.text:e.textContent=o.text),i.dom.setAttribs(e,n),i.selection.select(e),i.undoManager.add()):v(t)?h(i,t,n):o.hasOwnProperty(\x22text\x22)?i.insertContent(i.dom.createHTML(\x22a\x22,n,i.dom.encode(o.text))):i.execCommand(\x22mceInsertLink\x22,!1,n)})}},P=function(e){return function(){e.undoManager.transact(function(){var t=e.selection.getNode();v(t)?g(e,t):e.execCommand(\x22unlink\x22)})}},x=m,E=function(t){return 0\x3cA.grep(t,m).length},S=function(t){return!(/\x3c/.test(t)&&(!/^\x3ca [^\x3e]+\x3e[^\x3c]+\x3c\x5c/a\x3e$/.test(t)||-1===t.indexOf(\x22href=\x22)))},I=d,K=function(t,e){var n=e?e.innerText||e.textContent:t.getContent({format:\x22text\x22});return n.replace(/\x5cuFEFF/g,\x22\x22)},U=f,D=tinymce.util.Tools.resolve(\x22tinymce.util.Delay\x22),B=tinymce.util.Tools.resolve(\x22tinymce.util.XHR\x22),F={},q=function(t,o,e){var i=function(t,n){return n=n||[],A.each(t,function(t){var e={text:t.text||t.title};t.menu?e.menu=i(t.menu):(e.value=t.value,o&&o(e)),n.push(e)}),n};return i(t,e||[])},V=function(e,t,n){var o=e.selection.getRng();D.setEditorTimeout(e,function(){e.windowManager.confirm(t,function(t){e.selection.setRng(o),n(t)})})},z=function(a,t){var e,l,o,u,n,i,r,c,s,f,d,m={},v=a.selection,g=a.dom,h=function(t){var e=o.find(\x22#text\x22);(!e.value()||t.lastControl&&e.value()===t.lastControl.text())&&e.value(t.control.text()),o.find(\x22#href\x22).value(t.control.value())},x=function(){l||!u||m.text||this.parent().parent().find(\x22#text\x22)[0].value(this.value())};u=S(v.getContent()),e=I(a),m.text=l=K(a.selection,e),m.href=e?g.getAttrib(e,\x22href\x22):\x22\x22,e?m.target=g.getAttrib(e,\x22target\x22):k(a.settings)&&(m.target=y(a.settings)),(d=g.getAttrib(e,\x22rel\x22))&&(m.rel=d),(d=g.getAttrib(e,\x22class\x22))&&(m[\x22class\x22]=d),(d=g.getAttrib(e,\x22title\x22))&&(m.title=d),u&&(n={name:\x22text\x22,type:\x22textbox\x22,size:40,label:\x22Text to display\x22,onchange:function(){m.text=this.value()}}),t&&(i={type:\x22listbox\x22,label:\x22Link list\x22,values:q(t,function(t){t.value=a.convertURL(t.value||t.url,\x22href\x22)},[{text:\x22None\x22,value:\x22\x22}]),onselect:h,value:a.convertURL(m.href,\x22href\x22),onPostRender:function(){i=this}}),w(a.settings)&&(b(a.settings)===undefined&&_(a,[{text:\x22None\x22,value:\x22\x22},{text:\x22New window\x22,value:\x22_blank\x22}]),c={name:\x22target\x22,type:\x22listbox\x22,label:\x22Target\x22,values:q(b(a.settings))}),C(a.settings)&&(r={name:\x22rel\x22,type:\x22listbox\x22,label:\x22Rel\x22,values:q(T(a.settings),function(t){!1===N(a.settings)&&(t.value=U(t.value,\x22_blank\x22===m.target))})}),O(a.settings)&&(s={name:\x22class\x22,type:\x22listbox\x22,label:\x22Class\x22,values:q(M(a.settings),function(t){t.value&&(t.textStyle=function(){return a.formatter.getCssText({inline:\x22a\x22,classes:[t.value]})})})}),R(a.settings)&&(f={name:\x22title\x22,type:\x22textbox\x22,label:\x22Title\x22,value:m.title}),o=a.windowManager.open({title:\x22Insert link\x22,data:m,body:[{name:\x22href\x22,type:\x22filepicker\x22,filetype:\x22file\x22,size:40,autofocus:!0,label:\x22Url\x22,onchange:function(t){var e=t.meta||{};i&&i.value(a.convertURL(this.value(),\x22href\x22)),A.each(t.meta,function(t,e){var n=o.find(\x22#\x22+e);\x22text\x22===e?0===l.length&&(n.value(t),m.text=t):n.value(t)}),e.attach&&(F={href:this.value(),attach:e.attach}),e.text||x.call(this)},onkeyup:x,onpaste:x,onbeforecall:function(t){t.meta=o.toJSON()}},n,f,function(n){var o=[];if(A.each(a.dom.select(\x22a:not([href])\x22),function(t){var e=t.name||t.id;e&&o.push({text:e,value:\x22#\x22+e,selected:-1!==n.indexOf(\x22#\x22+e)})}),o.length)return o.unshift({text:\x22None\x22,value:\x22\x22}),{name:\x22anchor\x22,type:\x22listbox\x22,label:\x22Anchors\x22,values:o,onselect:h}}(m.href),i,r,c,s],onSubmit:function(t){var e=p(a.settings),n=L(a,F),o=P(a),i=A.extend({},m,t.data),r=i.href;r?(u&&i.text!==l||delete i.text,0\x3cr.indexOf(\x22@\x22)&&-1===r.indexOf(\x22//\x22)&&-1===r.indexOf(\x22mailto:\x22)?V(a,\x22The URL you entered seems to be an email address. Do you want to add the required mailto: prefix?\x22,function(t){t&&(i.href=\x22mailto:\x22+r),n(i)}):!0===e&&!/^\x5cw+:/i.test(r)||!1===e&&/^\x5cs*www[\x5c.|\x5cd\x5c.]/i.test(r)?V(a,\x22The URL you entered seems to be an external link. Do you want to add the required http:// prefix?\x22,function(t){t&&(i.href=\x22http://\x22+r),n(i)}):n(i)):o()}})},H=function(t){var e,n,o;n=z,\x22string\x22==typeof(o=r((e=t).settings))?B.send({url:o,success:function(t){n(e,JSON.parse(t))}}):\x22function\x22==typeof o?o(function(t){n(e,t)}):n(e,o)},J=function(t,e){return t.dom.getParent(e,\x22a[href]\x22)},$=function(t){return J(t,t.selection.getStart())},j=function(t,e){if(e){var n=(i=e).getAttribute(\x22data-mce-href\x22)||i.getAttribute(\x22href\x22);if(/^#/.test(n)){var o=t.$(n);o.length&&t.selection.scrollIntoView(o[0],!0)}else s(e.href)}var i},G=function(t){return function(){H(t)}},X=function(t){return function(){j(t,$(t))}},Q=function(r){return function(t){var e,n,o,i;return!!(a(r.settings)&&(!(i=r.plugins.contextmenu)||!i.isContextMenuVisible())&&x(t)&&3===(o=(n=(e=r.selection).getRng()).startContainer).nodeType&&e.isCollapsed()&&0\x3cn.startOffset&&n.startOffset\x3co.data.length)}},W=function(o){o.on(\x22click\x22,function(t){var e=J(o,t.target);e&&n.metaKeyPressed(t)&&(t.preventDefault(),j(o,e))}),o.on(\x22keydown\x22,function(t){var e,n=$(o);n&&13===t.keyCode&&!0===(e=t).altKey&&!1===e.shiftKey&&!1===e.ctrlKey&&!1===e.metaKey&&(t.preventDefault(),j(o,n))})},Y=function(n){return function(){var e=this;n.on(\x22nodechange\x22,function(t){e.active(!n.readonly&&!!I(n,t.element))})}},Z=function(n){return function(){var e=this,t=function(t){E(t.parents)?e.show():e.hide()};E(n.dom.getParents(n.selection.getStart()))||e.hide(),n.on(\x22nodechange\x22,t),e.on(\x22remove\x22,function(){n.off(\x22nodechange\x22,t)})}},tt=function(t){t.addCommand(\x22mceLink\x22,G(t))},et=function(t){t.addShortcut(\x22Meta+K\x22,\x22\x22,G(t))},nt=function(t){t.addButton(\x22link\x22,{active:!1,icon:\x22link\x22,tooltip:\x22Insert/edit link\x22,onclick:G(t),onpostrender:Y(t)}),t.addButton(\x22unlink\x22,{active:!1,icon:\x22unlink\x22,tooltip:\x22Remove link\x22,onclick:P(t),onpostrender:Y(t)}),t.addContextToolbar&&t.addButton(\x22openlink\x22,{icon:\x22newtab\x22,tooltip:\x22Open link\x22,onclick:X(t)})},ot=function(t){t.addMenuItem(\x22openlink\x22,{text:\x22Open link\x22,icon:\x22newtab\x22,onclick:X(t),onPostRender:Z(t),prependToContext:!0}),t.addMenuItem(\x22link\x22,{icon:\x22link\x22,text:\x22Link\x22,shortcut:\x22Meta+K\x22,onclick:G(t),stateSelector:\x22a[href]\x22,context:\x22insert\x22,prependToContext:!0}),t.addMenuItem(\x22unlink\x22,{icon:\x22unlink\x22,text:\x22Remove link\x22,onclick:P(t),stateSelector:\x22a[href]\x22})},it=function(t){t.addContextToolbar&&t.addContextToolbar(Q(t),\x22openlink | link unlink\x22)};t.add(\x22link\x22,function(t){nt(t),ot(t),it(t),W(t),tt(t),et(t)})}(window);P'}