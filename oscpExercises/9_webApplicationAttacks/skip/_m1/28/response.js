var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:11:19 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Mon, 22 Apr 2019 12:40:04 GMT\x0aETag: \x2228ff-5871dc47ed100-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-3573/3574\x0aContent-Length: 3574\x0aConnection: close\x0aContent-Type: application/javascript\x0a\x0athis.wp=this.wp||{},this.wp.annotations=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){\x22undefined\x22!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:\x22Module\x22}),Object.defineProperty(t,\x22__esModule\x22,{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&\x22object\x22==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,\x22default\x22,{enumerable:!0,value:t}),2&n&&\x22string\x22!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,\x22a\x22,n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p=\x22\x22,e(e.s=370)}({1:function(t,n){!function(){t.exports=this.wp.i18n}()},15:function(t,n,e){\x22use strict\x22;function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e.d(n,\x22a\x22,function(){return r})},17:function(t,n,e){\x22use strict\x22;var r=e(34);function o(t){return function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n\x3ct.length;n++)e[n]=t[n];return e}}(t)||Object(r.a)(t)||function(){throw new TypeError(\x22Invalid attempt to spread non-iterable instance\x22)}()}e.d(n,\x22a\x22,function(){return o})},2:function(t,n){!function(){t.exports=this.lodash}()},20:function(t,n){!function(){t.exports=this.wp.richText}()},21:function(t,n,e){\x22use strict\x22;function r(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},a=Object.keys(t);for(r=0;r\x3ca.length;r++)e=a[r],n.indexOf(e)\x3e=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r\x3ca.length;r++)e=a[r],n.indexOf(e)\x3e=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}e.d(n,\x22a\x22,function(){return r})},26:function(t,n){!function(){t.exports=this.wp.hooks}()},30:function(t,n,e){\x22use strict\x22;var r,o;function a(t){return[t]}function i(){var t={clear:function(){t.head=null}};return t}function u(t,n,e){var r;if(t.length!==n.length)return!1;for(r=e;r\x3ct.length;r++)if(t[r]!==n[r])return!1;return!0}r={},o=\x22undefined\x22!=typeof WeakMap,n.a=function(t,n){var e,c;function f(){e=o?new WeakMap:i()}function l(){var e,r,o,a,i,f=arguments.length;for(a=new Array(f),o=0;o\x3cf;o++)a[o]=arguments[o];for(i=n.apply(null,a),(e=c(i)).isUniqueByDependants||(e.lastDependants&&!u(i,e.lastDependants,0)&&e.clear(),e.lastDependants=i),r=e.head;r;){if(u(r.args,a,1))return r!==e.head&&(r.prev.next=r.next,r.next&&(r.next.prev=r.prev),r.next=e.head,r.prev=null,e.head.prev=r,e.head=r),r.val;r=r.next}return r={val:t.apply(null,a)},a[0]=null,r.args=a,e.head&&(e.head.prev=r,r.next=e.head),e.head=r,r.val}return n||(n=a),c=o?function(t){var n,o,a,u,c,f=e,l=!0;for(n=0;n\x3ct.length;n++){if(o=t[n],!(c=o)||\x22object\x22!=typeof c){l=!1;break}f.has(o)?f=f.get(o):(a=new WeakMap,f.set(o,a),f=a)}return f.has(r)||((u=i()).isUniqueByDependants=l,f.set(r,u)),f.get(r)}:function(){return e},l.getDependants=n,l.clear=f,f(),l}},34:function(t,n,e){\x22use strict\x22;function r(t){if(Symbol.iterator in Object(t)||\x22[object Arguments]\x22===Object.prototype.toString.call(t))return Array.from(t)}e.d(n,\x22a\x22,function(){return r})},370:function(t,n,e){\x22use strict\x22;e.r(n);var r={};e.r(r),e.d(r,\x22__experimentalGetAnnotationsForBlock\x22,function(){return b}),e.d(r,\x22__experimentalGetAllAnnotationsForBlock\x22,function(){return g}),e.d(r,\x22__experimentalGetAnnotationsForRichText\x22,function(){return O}),e.d(r,\x22__experimentalGetAnnotations\x22,function(){return m});var o={};e.r(o),e.d(o,\x22__experimentalAddAnnotation\x22,function(){return x}),e.d(o,\x22__experimentalRemoveAnnotation\x22,function(){return A}),e.d(o,\x22__experimentalUpdateAnnotationRange\x22,function(){return _}),e.d(o,\x22__experimentalRemoveAnnotationsBySource\x22,function(){return j});var a=e(5),i=e(15),u=e(17),c=e(7),f=e(2);function l(t,n){var e=t.filter(n);return t.length===e.length?t:e}var s=function(){var t,n=arguments.length\x3e0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length\x3e1?arguments[1]:void 0;switch(e.type){case\x22ANNOTATION_ADD\x22:var r=e.blockClientId,o={id:e.id,blockClientId:r,richTextIdentifier:e.richTextIdentifier,source:e.source,selector:e.selector,range:e.range};if(\x22range\x22===o.selector&&(t=o.range,!(Object(f.isNumber)(t.start)&&Object(f.isNumber)(t.end)&&t.start\x3c=t.end)))return n;var a=Object(f.get)(n,r,[]);return Object(c.a)({},n,Object(i.a)({},r,[].concat(Object(u.a)(a),[o])));case\x22ANNOTATION_REMOVE\x22:return Object(f.mapValues)(n,function(t){return l(t,function(t){return t.id!==e.annotationId})});case\x22ANNOTATION_UPDATE_RANGE\x22:return Object(f.mapValues)(n,function(t){var n=!1,r=t.map(function(t){return t.id===e.annotationId?(n=!0,Object(c.a)({},t,{range:{start:e.start,end:e.end}})):t});return n?r:t});case\x22ANNOTATION_REMOVE_SOURCE\x22:return Object(f.mapValues)(n,function(t){return l(t,function(t){return t.source!==e.source})})}return n},p=e(21),d=e(30),v=[],b=Object(d.a)(function(t,n){return Object(f.get)(t,n,[]).filter(function(t){return\x22block\x22===t.selector})},function(t,n){return[Object(f.get)(t,n,v)]}),g=function(t,n){return Object(f.get)(t,n,v)},O=Object(d.a)(function(t,n,e){return Object(f.get)(t,n,[]).filter(function(t){return\x22range\x22===t.selector&&e===t.richTextIdentifier}).map(function(t){var n=t.range,e=Object(p.a)(t,[\x22range\x22]);return Object(c.a)({},n,e)})},function(t,n){return[Object(f.get)(t,n,v)]});function m(t){return Object(f.flatMap)(t,function(t){return t})}var y=e(65),h=e.n(y);function x(t){var n=t.blockClientId,e=t.richTextIdentifier,r=void 0===e?null:e,o=t.range,a=void 0===o?null:o,i=t.selector,u=void 0===i?\x22range\x22:i,c=t.source,f=void 0===c?\x22default\x22:c,l=t.id,s={type:\x22ANNOTATION_ADD\x22,id:void 0===l?h()():l,blockClientId:n,richTextIdentifier:r,source:f,selector:u};return\x22range\x22===u&&(s.range=a),s}function A(t){return{type:\x22ANNOTATION_REMOVE\x22,annotationId:t}}function _(t,n,e){return{type:\x22ANNOTATION_UPDATE_RANGE\x22,annotationId:t,start:n,end:e}}function j(t){return{type:\x22ANNOTATION_REMOVE_SOURCE\x22,source:t}}Object(a.registerStore)(\x22core/annotations\x22,{reducer:s,selectors:r,actions:o});var T=e(20),N=e(41),w=e.n(N),I=e(1),E=\x22core/annotation\x22,R=\x22annotation-text-\x22;var k=w()(function(t){var n=t.annotations;return function(t,e){if(0===n.length)return t;var r={formats:t,text:e};return(r=function(t){return(arguments.length\x3e1&&void 0!==arguments[1]?arguments[1]:[]).forEach(function(n){var e=n.start,r=n.end;e\x3et.text.length&&(e=t.text.length),r\x3et.text.length&&(r=t.text.length);var o=R+n.source,a=R+n.id;t=Object(T.applyFormat)(t,{type:E,attributes:{className:o,id:a}},e,r)}),t}(r,n)).formats}}),S=w()(function(t){return{annotations:t}}),P={name:E,title:Object(I.__)(\x22Annotation\x22),tagName:\x22mark\x22,className:\x22annotation-text\x22,attributes:{className:\x22class\x22,id:\x22id\x22},edit:function(){return null},__experimentalGetPropsForEditableTreePreparation:function(t,n){var e=n.richTextIdentifier,r=n.blockClientId;return S(t(\x22core/annotations\x22).__experimentalGetAnnotationsForRichText(r,e))},__experimentalCreatePrepareEditableTree:k,__experimentalGetPropsForEditableTreeChangeHandler:function(t){return{removeAnnotation:t(\x22core/annotations\x22).__experimentalRemoveAnnotation,updateAnnotationRange:t(\x22core/annotations\x22).__experimentalUpdateAnnotationRange}},__experimentalCreateOnChangeEditableValue:function(t){return function(n){var e=function(t){var n={};return t.forEach(function(t,e){(t=(t=t||[]).filter(function(t){return t.type===E})).forEach(function(t){var r=t.attributes.id;r=r.replace(R,\x22\x22),n.hasOwnProperty(r)||(n[r]={start:e}),n[r].end=e+1})}),n}(n),r=t.removeAnnotation,o=t.updateAnnotationRange;!function(t,n,e){var r=e.removeAnnotation,o=e.updateAnnotationRange;t.forEach(function(t){var e=n[t.id];if(e){var a=t.start,i=t.end;a===e.start&&i===e.end||o(t.id,e.start,e.end)}else r(t.id)})}(t.annotations,e,{removeAnnotation:r,updateAnnotationRange:o})}}},C=P.name,D=Object(p.a)(P,[\x22name\x22]);Object(T.registerFormatType)(C,D);var M=e(26);Object(M.addFilter)(\x22editor.BlockListBlock\x22,\x22core/annotations\x22,function(t){return Object(a.withSelect)(function(t,n){var e=n.clientId;return{className:t(\x22core/annotations\x22).__experimentalGetAnnotationsForBlock(e).map(function(t){return\x22is-annotated-by-\x22+t.source}).join(\x22 \x22)}})(t)})},41:function(t,n,e){t.exports=function(t,n){var e,r,o,a=0;function i(){var n,i,u=r,c=arguments.length;t:for(;u;){if(u.args.length===arguments.length){for(i=0;i\x3cc;i++)if(u.args[i]!==arguments[i]){u=u.next;continue t}return u!==r&&(u===o&&(o=u.prev),u.prev.next=u.next,u.next&&(u.next.prev=u.prev),u.next=r,u.prev=null,r.prev=u,r=u),u.val}u=u.next}for(n=new Array(c),i=0;i\x3cc;i++)n[i]=arguments[i];return u={args:n,val:t.apply(null,n)},r?(r.prev=u,u.next=r):o=u,a===e?(o=o.prev).next=null:a++,r=u,u.val}return n&&n.maxSize&&(e=n.maxSize),i.clear=function(){r=null,o=null,a=0},i}},5:function(t,n){!function(){t.exports=this.wp.data}()},65:function(t,n,e){var r=e(87),o=e(88);t.exports=function(t,n,e){var a=n&&e||0;\x22string\x22==typeof t&&(n=\x22binary\x22===t?new Array(16):null,t=null);var i=(t=t||{}).random||(t.rng||r)();if(i[6]=15&i[6]|64,i[8]=63&i[8]|128,n)for(var u=0;u\x3c16;++u)n[a+u]=i[u];return n||o(i)}},7:function(t,n,e){\x22use strict\x22;e.d(n,\x22a\x22,function(){return o});var r=e(15);function o(t){for(var n=1;n\x3carguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},o=Object.keys(e);\x22function\x22==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.forEach(function(n){Object(r.a)(t,n,e[n])})}return t}},87:function(t,n){var e=\x22undefined\x22!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||\x22undefined\x22!=typeof msCrypto&&\x22function\x22==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(e){var r=new Uint8Array(16);t.exports=function(){return e(r),r}}else{var o=new Array(16);t.exports=function(){for(var t,n=0;n\x3c16;n++)0==(3&n)&&(t=4294967296*Math.random()),o[n]=t\x3e\x3e\x3e((3&n)\x3c\x3c3)&255;return o}}},88:function(t,n){for(var e=[],r=0;r\x3c256;++r)e[r]=(r+256).toString(16).substr(1);t.exports=function(t,n){var r=n||0,o=e;return[o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],\x22-\x22,o[t[r++]],o[t[r++]],\x22-\x22,o[t[r++]],o[t[r++]],\x22-\x22,o[t[r++]],o[t[r++]],\x22-\x22,o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]],o[t[r++]]].join(\x22\x22)}}});'}