var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:00:03 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Fri, 22 Sep 2017 20:10:48 GMT\x0aETag: \x223d7e-559ccce022200-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-5680/5681\x0aContent-Length: 5681\x0aKeep-Alive: timeout=5, max=64\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a!function(a,b,c){function d(a){function b(a,b,c){var e={chunks:\x22slice_blob\x22,jpgresize:\x22send_binary_string\x22,pngresize:\x22send_binary_string\x22,progress:\x22report_upload_progress\x22,multi_selection:\x22select_multiple\x22,dragdrop:\x22drag_and_drop\x22,drop_element:\x22drag_and_drop\x22,headers:\x22send_custom_headers\x22,urlstream_upload:\x22send_binary_string\x22,canSendBinary:\x22send_binary\x22,triggerDialog:\x22summon_file_dialog\x22};e[a]?d[e[a]]=b:c||(d[a]=b)}var c=a.required_features,d={};return\x22string\x22==typeof c?g.each(c.split(/\x5cs*,\x5cs*/),function(a){b(a,!0)}):\x22object\x22==typeof c?g.each(c,function(a,c){b(c,a)}):c===!0&&(a.chunk_size\x3e0&&(d.slice_blob=!0),!a.resize.enabled&&a.multipart||(d.send_binary_string=!0),g.each(a,function(a,c){b(c,!!a,!0)})),a.runtimes=\x22html5,html4\x22,d}var e=a.setTimeout,f={},g={VERSION:\x222.1.9\x22,STOPPED:1,STARTED:2,QUEUED:1,UPLOADING:2,FAILED:4,DONE:5,GENERIC_ERROR:-100,HTTP_ERROR:-200,IO_ERROR:-300,SECURITY_ERROR:-400,INIT_ERROR:-500,FILE_SIZE_ERROR:-600,FILE_EXTENSION_ERROR:-601,FILE_DUPLICATE_ERROR:-602,IMAGE_FORMAT_ERROR:-700,MEMORY_ERROR:-701,IMAGE_DIMENSIONS_ERROR:-702,mimeTypes:b.mimes,ua:b.ua,typeOf:b.typeOf,extend:b.extend,guid:b.guid,getAll:function(a){var b,c=[];\x22array\x22!==g.typeOf(a)&&(a=[a]);for(var d=a.length;d--;)b=g.get(a[d]),b&&c.push(b);return c.length?c:null},get:b.get,each:b.each,getPos:b.getPos,getSize:b.getSize,xmlEncode:function(a){var b={\x22\x3c\x22:\x22lt\x22,\x22\x3e\x22:\x22gt\x22,\x22&\x22:\x22amp\x22,\x27\x22\x27:\x22quot\x22,\x22\x27\x22:\x22#39\x22},c=/[\x3c\x3e&\x5c\x22\x5c\x27]/g;return a?(\x22\x22+a).replace(c,function(a){return b[a]?\x22&\x22+b[a]+\x22;\x22:a}):a},toArray:b.toArray,inArray:b.inArray,addI18n:b.addI18n,translate:b.translate,isEmptyObj:b.isEmptyObj,hasClass:b.hasClass,addClass:b.addClass,removeClass:b.removeClass,getStyle:b.getStyle,addEvent:b.addEvent,removeEvent:b.removeEvent,removeAllEvents:b.removeAllEvents,cleanName:function(a){var b,c;for(c=[/[\x5c300-\x5c306]/g,\x22A\x22,/[\x5c340-\x5c346]/g,\x22a\x22,/\x5c307/g,\x22C\x22,/\x5c347/g,\x22c\x22,/[\x5c310-\x5c313]/g,\x22E\x22,/[\x5c350-\x5c353]/g,\x22e\x22,/[\x5c314-\x5c317]/g,\x22I\x22,/[\x5c354-\x5c357]/g,\x22i\x22,/\x5c321/g,\x22N\x22,/\x5c361/g,\x22n\x22,/[\x5c322-\x5c330]/g,\x22O\x22,/[\x5c362-\x5c370]/g,\x22o\x22,/[\x5c331-\x5c334]/g,\x22U\x22,/[\x5c371-\x5c374]/g,\x22u\x22],b=0;b\x3cc.length;b+=2)a=a.replace(c[b],c[b+1]);return a=a.replace(/\x5cs+/g,\x22_\x22),a=a.replace(/[^a-z0-9_\x5c-\x5c.]+/gi,\x22\x22)},buildUrl:function(a,b){var c=\x22\x22;return g.each(b,function(a,b){c+=(c?\x22&\x22:\x22\x22)+encodeURIComponent(b)+\x22=\x22+encodeURIComponent(a)}),c&&(a+=(a.indexOf(\x22?\x22)\x3e0?\x22&\x22:\x22?\x22)+c),a},formatSize:function(a){function b(a,b){return Math.round(a*Math.pow(10,b))/Math.pow(10,b)}if(a===c||/\x5cD/.test(a))return g.translate(\x22N/A\x22);var d=Math.pow(1024,4);return a\x3ed?b(a/d,1)+\x22 \x22+g.translate(\x22tb\x22):a\x3e(d/=1024)?b(a/d,1)+\x22 \x22+g.translate(\x22gb\x22):a\x3e(d/=1024)?b(a/d,1)+\x22 \x22+g.translate(\x22mb\x22):a\x3e1024?Math.round(a/1024)+\x22 \x22+g.translate(\x22kb\x22):a+\x22 \x22+g.translate(\x22b\x22)},parseSize:b.parseSizeStr,predictRuntime:function(a,c){var d,e;return d=new g.Uploader(a),e=b.Runtime.thatCan(d.getOption().required_features,c||a.runtimes),d.destroy(),e},addFileFilter:function(a,b){f[a]=b}};g.addFileFilter(\x22mime_types\x22,function(a,b,c){a.length&&!a.regexp.test(b.name)?(this.trigger(\x22Error\x22,{code:g.FILE_EXTENSION_ERROR,message:g.translate(\x22File extension error.\x22),file:b}),c(!1)):c(!0)}),g.addFileFilter(\x22max_file_size\x22,function(a,b,c){var d;a=g.parseSize(a),b.size!==d&&a&&b.size\x3ea?(this.trigger(\x22Error\x22,{code:g.FILE_SIZE_ERROR,message:g.translate(\x22File size error.\x22),file:b}),c(!1)):c(!0)}),g.addFileFilter(\x22prevent_duplicates\x22,function(a,b,c){if(a)for(var d=this.files.length;d--;)if(b.name===this.files[d].name&&b.size===this.files[d].size)return this.trigger(\x22Error\x22,{code:g.FILE_DUPLICATE_ERROR,message:g.translate(\x22Duplicate file error.\x22),file:b}),void c(!1);c(!0)}),g.Uploader=function(a){function h(){var a,b,c=0;if(this.state==g.STARTED){for(b=0;b\x3cD.length;b++)a||D[b].status!=g.QUEUED?c++:(a=D[b],this.trigger(\x22BeforeUpload\x22,a)&&(a.status=g.UPLOADING,this.trigger(\x22UploadFile\x22,a)));c==D.length&&(this.state!==g.STOPPED&&(this.state=g.STOPPED,this.trigger(\x22StateChanged\x22)),this.trigger(\x22UploadComplete\x22,D))}}function i(a){a.percent=a.size\x3e0?Math.ceil(a.loaded/a.size*100):100,j()}function j(){var a,b;for(A.reset(),a=0;a\x3cD.length;a++)b=D[a],b.size!==c?(A.size+=b.origSize,A.loaded+=b.loaded*b.origSize/b.size):A.size=c,b.status==g.DONE?A.uploaded++:b.status==g.FAILED?A.failed++:A.queued++;A.size===c?A.percent=D.length\x3e0?Math.ceil(A.uploaded/D.length*100):0:(A.bytesPerSec=Math.ceil(A.loaded/((+new Date-z||1)/1e3)),A.percent=A.size\x3e0?Math.ceil(A.loaded/A.size*100):0)}function k(){var a=F[0]||G[0];return!!a&&a.getRuntime().uid}function l(a,c){if(a.ruid){var d=b.Runtime.getInfo(a.ruid);if(d)return d.can(c)}return!1}function m(){this.bind(\x22FilesAdded FilesRemoved\x22,function(a){a.trigger(\x22QueueChanged\x22),a.refresh()}),this.bind(\x22CancelUpload\x22,u),this.bind(\x22BeforeUpload\x22,q),this.bind(\x22UploadFile\x22,r),this.bind(\x22UploadProgress\x22,s),this.bind(\x22StateChanged\x22,t),this.bind(\x22QueueChanged\x22,j),this.bind(\x22Error\x22,w),this.bind(\x22FileUploaded\x22,v),this.bind(\x22Destroy\x22,x)}function n(a,c){var d=this,e=0,f=[],h={runtime_order:a.runtimes,required_caps:a.required_features,preferred_caps:E};g.each(a.runtimes.split(/\x5cs*,\x5cs*/),function(b){a[b]&&(h[b]=a[b])}),a.browse_button&&g.each(a.browse_button,function(c){f.push(function(f){var i=new b.FileInput(g.extend({},h,{accept:a.filters.mime_types,name:a.file_data_name,multiple:a.multi_selection,container:a.container,browse_button:c}));i.onready=function(){var a=b.Runtime.getInfo(this.ruid);b.extend(d.features,{chunks:a.can(\x22slice_blob\x22),multipart:a.can(\x22send_multipart\x22),multi_selection:a.can(\x22select_multiple\x22)}),e++,F.push(this),f()},i.onchange=function(){d.addFile(this.files)},i.bind(\x22mouseenter mouseleave mousedown mouseup\x22,function(d){H||(a.browse_button_hover&&(\x22mouseenter\x22===d.type?b.addClass(c,a.browse_button_hover):\x22mouseleave\x22===d.type&&b.removeClass(c,a.browse_button_hover)),a.browse_button_active&&(\x22mousedown\x22===d.type?b.addClass(c,a.browse_button_active):\x22mouseup\x22===d.type&&b.removeClass(c,a.browse_button_active)))}),i.bind(\x22mousedown\x22,function(){d.trigger(\x22Browse\x22)}),i.bind(\x22error runtimeerror\x22,function(){i=null,f()}),i.init()})}),a.drop_element&&g.each(a.drop_element,function(a){f.push(function(c){var f=new b.FileDrop(g.extend({},h,{drop_zone:a}));f.onready=function(){var a=b.Runtime.getInfo(this.ruid);b.extend(d.features,{chunks:a.can(\x22slice_blob\x22),multipart:a.can(\x22send_multipart\x22),dragdrop:a.can(\x22drag_and_drop\x22)}),e++,G.push(this),c()},f.ondrop=function(){d.addFile(this.files)},f.bind(\x22error runtimeerror\x22,function(){f=null,c()}),f.init()})}),b.inSeries(f,function(){\x22function\x22==typeof c&&c(e)})}function o(a,d,e){var f=new b.Image;try{f.onload=function(){return d.width\x3ethis.width&&d.height\x3ethis.height&&d.quality===c&&d.preserve_headers&&!d.crop?(this.destroy(),e(a)):void f.downsize(d.width,d.height,d.crop,d.preserve_headers)},f.onresize=function(){e(this.getAsBlob(a.type,d.quality)),this.destroy()},f.onerror=function(){e(a)},f.load(a)}catch(g){e(a)}}function p(a,c,e){function f(a,b,c){var d=y[a];switch(a){case\x22max_file_size\x22:\x22max_file_size\x22===a&&(y.max_file_size=y.filters.max_file_size=b);break;case\x22chunk_size\x22:(b=g.parseSize(b))&&(y[a]=b,y.send_file_name=!0);break;case\x22multipart\x22:y[a]=b,b||(y.send_file_name=!0);break;case\x22unique_names\x22:y[a]=b,b&&(y.send_file_name=!0);break;case\x22filters\x22:\x22array\x22===g.typeOf(b)&&(b={mime_types:b}),c?g.extend(y.filters,b):y.filters=b,b.mime_types&&(y.filters.mime_types.regexp=function(a){var b=[];return g.each(a,function(a){g.each(a.extensions.split(/,/),function(a){/^\x5cs*\x5c*\x5cs*$/.test(a)?b.push(\x22\x5c\x5c.*\x22):b.push(\x22\x5c\x5c.\x22+a.replace(new RegExp(\x22[\x22+\x22/^$.*+?|()[]{}\x5c\x5c\x22.replace(/./g,\x22\x5c\x5c$&\x22)+\x22]\x22,\x22g\x22),\x22\x5c\x5c$&\x22))})}),new RegExp(\x22(\x22+b.join(\x22|\x22)+\x22)$\x22,\x22i\x22)}(y.filters.mime_types));break;case\x22resize\x22:c?g.extend(y.resize,b,{enabled:!0}):y.resize=b;break;case\x22prevent_duplicates\x22:y.prevent_duplicates=y.filters.prevent_duplicates=!!b;break;case\x22container\x22:case\x22browse_button\x22:case\x22drop_element\x22:b=\x22container\x22===a?g.get(b):g.getAll(b);case\x22runtimes\x22:case\x22multi_selection\x22:y[a]=b,c||(i=!0);break;default:y[a]=b}c||h.trigger(\x22OptionChanged\x22,a,b,d)}var h=this,i=!1;\x22object\x22==typeof a?g.each(a,function(a,b){f(b,a,e)}):f(a,c,e),e?(y.required_features=d(g.extend({},y)),E=d(g.extend({},y,{required_features:!0}))):i&&(h.trigger(\x22Destroy\x22),n.call(h,y,function(a){a?(h.runtime=b.Runtime.getInfo(k()).type,h.trigger(\x22Init\x22,{runtime:h.runtime}),h.trigger(\x22PostInit\x22)):h.trigger(\x22Error\x22,{code:g.INIT_ERROR,message:g.translate(\x22Init error.\x22)})}))}function q(a,b){if(a.settings.unique_names){var c=b.name.match(/\x5c.([^.]+)$/),d=\x22part\x22;c&&(d=c[1]),b.target_name=b.id+\x22.\x22+d}}function r(a,c){function d(){k-- \x3e0?e(f,1e3):(c.loaded=n,a.trigger(\x22Error\x22,{code:g.HTTP_ERROR,message:g.translate(\x22HTTP Error.\x22),file:c,response:B.responseText,status:B.status,responseHeaders:B.getAllResponseHeaders()}))}function f(){var l,o,p,q={};c.status===g.UPLOADING&&a.state!==g.STOPPED&&(a.settings.send_file_name&&(q.name=c.target_name||c.name),j&&m.chunks&&h.size\x3ej?(p=Math.min(j,h.size-n),l=h.slice(n,n+p)):(p=h.size,l=h),j&&m.chunks&&(a.settings.send_chunk_number?(q.chunk=Math.ceil(n/j),q.chunks=Math.ceil(h.size/j)):(q.offset=n,q.total=h.size)),B=new b.XMLHttpRequest,B.upload&&(B.upload.onprogress=function(b){c.loaded=Math.min(c.size,n+b.loaded),a.trigger(\x22UploadProgress\x22,c)}),B.onload=function(){return B.status\x3e=400?void d():(k=a.settings.max_retries,p\x3ch.size?(l.destroy(),n+=p,c.loaded=Math.min(n,h.size),a.trigger(\x22ChunkUploaded\x22,c,{offset:c.loaded,total:h.size,response:B.responseText,status:B.status,responseHeaders:B.getAllResponseHeaders()}),\x22Android Browser\x22===b.Env.browser&&a.trigger(\x22UploadProgress\x22,c)):c.loaded=c.size,l=o=null,void(!n||n\x3e=h.size?(c.size!=c.origSize&&(h.destroy(),h=null),a.trigger(\x22UploadProgress\x22,c),c.status=g.DONE,a.trigger(\x22FileUploaded\x22,c,{response:B.responseText,status:B.status,responseHeaders:B.getAllResponseHeaders()})):e(f,1)))},B.onerror=function(){d()},B.onloadend=function(){this.destroy(),B=null},a.settings.multipart&&m.multipart?(B.open(\x22post\x22,i,!0),g.each(a.settings.headers,function(a,b){B.setRequestHeader(b,a)}),o=new b.FormData,g.each(g.extend(q,a.settings.multipart_params),function(a,b){o.append(b,a)}),o.append(a.settings.file_data_name,l),B.send(o,{runtime_order:a.settings.runtimes,required_caps:a.settings.required_features,preferred_caps:E})):(i=g.buildUrl(a.settings.url,g.extend(q,a.settings.multipart_params)),B.open(\x22post\x22,i,!0),B.setRequestHeader(\x22Content-Type\x22,\x22application/octet-stream\x22),g.each(a.settings.headers,function(a,b){B.setRequestHeader(b,a)}),B.send(l,{runtime_order:a.settings.runtimes,required_caps:a.settings.required_features,preferred_caps:E})))}var h,i=a.settings.url,j=a.settings.chunk_size,k=a.settings.max_retries,m=a.features,n=0;c.loaded&&(n=c.loaded=j?j*Math.floor(c.loaded/j):0),h=c.getSource(),a.settings.resize.enabled&&l(h,\x22send_binary_string\x22)&&~b.inArray(h.type,[\x22image/jpeg\x22,\x22image/png\x22])?o.call(this,h,a.settings.resize,function(a){h=a,c.size=a.size,f()}):f()}function s(a,b){i(b)}function t(a){if(a.state==g.STARTED)z=+new Date;else if(a.state==g.STOPPED)for(var b=a.files.length-1;b\x3e=0;b--)a.files[b].status==g.UPLOADING&&(a.files[b].status=g.QUEUED,j())}function u(){B&&B.abort()}function v(a){j(),e(function(){h.call(a)},1)}function w(a,b){b.code===g.INIT_ERROR?a.destroy():b.code===g.HTTP_ERROR&&(b.file.status=g.FAILED,i(b.file),a.state==g.STARTED&&(a.trigger(\x22CancelUpload\x22),e(function(){h.call(a)},1)))}function x(a){a.stop(),g.each(D,function(a){a.destroy()}),D=[],F.length&&(g.each(F,function(a){a.destroy()}),F=[]),G.length&&(g.each(G,function(a){a.destroy()}),G=[]),E={},H=!1,z=B=null,A.reset()}var y,z,A,B,C=g.guid(),D=[],E={},F=[],G=[],H=!1;y={runtimes:b.Runtime.order,max_retries:0,chunk_size:0,multipart:!0,multi_selection:!0,file_data_name:\x22file\x22,filters:{mime_types:[],prevent_duplicates:!1,max_file_size:0},resize:{enabled:!1,preserve_headers:!0,crop:!1},send_file_name:!0,send_chunk_number:!0},p.call(this,a,null,!0),A=new g.QueueProgress,g.extend(this,{id:C,uid:C,state:g.STOPPED,features:{},runtime:null,files:D,settings:y,total:A,init:function(){var a,c,d=this;return a=d.getOption(\x22preinit\x22),\x22function\x22==typeof a?a(d):g.each(a,function(a,b){d.bind(b,a)}),m.call(d),g.each([\x22container\x22,\x22browse_button\x22,\x22drop_element\x22],function(a){if(null===d.getOption(a))return c={code:g.INIT_ERROR,message:g.translate(\x22\x27%\x27 specified, but cannot be found.\x22)},!1}),c?d.trigger(\x22Error\x22,c):y.browse_button||y.drop_element?void n.call(d,y,function(a){var c=d.getOption(\x22init\x22);\x22function\x22==typeof c?c(d):g.each(c,function(a,b){d.bind(b,a)}),a?(d.runtime=b.Runtime.getInfo(k()).type,d.trigger(\x22Init\x22,{runtime:d.runtime}),d.trigger(\x22PostInit\x22)):d.trigger(\x22Error\x22,{code:g.INIT_ERROR,message:g.translate(\x22Init error.\x22)})}):d.trigger(\x22Error\x22,{code:g.INIT_ERROR,message:g.translate(\x22You must specify either \x27browse_button\x27 or \x27drop_element\x27.\x22)})},setOption:function(a,b){p.call(this,a,b,!this.runtime)},getOption:function(a){return a?y[a]:y},refresh:function(){F.length&&g.each(F,function(a){a.trigger(\x22Refresh\x22)}),this.trigger(\x22Refresh\x22)},start:function(){this.state!=g.STARTED&&(this.state=g.STARTED,this.trigger(\x22StateChanged\x22),h.call(this))},stop:function(){this.state!=g.STOPPED&&(this.state=g.STOPPED,this.trigger(\x22StateChanged\x22),this.trigger(\x22CancelUpload\x22))},disableBrowse:function(){H=arguments[0]===c||arguments[0],F.length&&g.each(F,function(a){a.disable(H)}),this.trigger(\x22DisableBrowse\x22,H)},getFile:function(a){var b;for(b=D.length-1;b\x3e=0;b--)if(D[b].id===a)return D[b]},addFile:function(a,c){function d(a,c){var d=[];b.each(j.settings.filters,function(b,c){f[c]&&d.push(function(d){f[c].call(j,b,a,function(a){d(!a)})})}),b.inSeries(d,c)}function h(a){var f=b.typeOf(a);if(a instanceof b.File){if(!a.ruid&&!a.isDetached()){if(!i)return!1;a.ruid=i,a.connectRuntime(i)}h(new g.File(a))}else a instanceof b.Blob?(h(a.getSource()),a.destroy()):a instanceof g.File?(c&&(a.name=c),l.push(function(b){d(a,function(c){c||(D.push(a),m.push(a),j.trigger(\x22FileFiltered\x22,a)),e(b,1)})})):b.inArray(f,[\x22file\x22,\x22blob\x22])!==-1?h(new b.File(null,a)):\x22node\x22===f&&\x22filelist\x22===b.typeOf(a.files)?b.each(a.files,h):\x22array\x22===f&&(c=null,b.each(a,h))}var i,j=this,l=[],m=[];i=k(),h(a),l.length&&b.inSeries(l,function(){m.length&&j.trigger(\x22FilesAdded\x22,m)})},removeFile:function(a){for(var b=\x22string\x22==typeof a?a:a.id,c=D.length-1;c\x3e=0;c--)if(D[c].id===b)return this.splice(c,1)[0]},splice:function(a,b){var d=D.splice(a===c?0:a,b===c?D.length:b),e=!1;return this.state==g.STARTED&&(g.each(d,function(a){if(a.status===g.UPLOADING)return e=!0,!1}),e&&this.stop()),this.trigger(\x22FilesRemoved\x22,d),g.each(d,function(a){a.destroy()}),e&&this.start(),d},dispatchEvent:function(a){var b,c;if(a=a.toLowerCase(),b=this.hasEventListener(a)){b.sort(function(a,b){return b.priority-a.priority}),c=[].slice.call(arguments),c.shift(),c.unshift(this);for(var d=0;d\x3cb.length;d++)if(b[d].fn.apply(b[d].scope,c)===!1)return!1}return!0},bind:function(a,b,c,d){g.Uploader.prototype.bind.call(this,a,b,d,c)},destroy:function(){this.trigger(\x22Destroy\x22),y=A=null,this.unbindAll()}})},g.Uploader.prototype=b.EventTarget.instance,g.File=function(){function a(a){g.extend(this,{id:g.guid(),name:a.name||a.fileName,type:a.type||\x22\x22,size:a.size||a.fileSize,origSize:a.size||a.fileSize,loaded:0,percent:0,status:g.QUEUED,lastModifiedDate:a.lastModifiedDate||(new Date).toLocaleString(),getNative:function(){var a=this.getSource().getSource();return b.inArray(b.typeOf(a),[\x22blob\x22,\x22file\x22])!==-1?a:null},getSource:function(){return c[this.id]?c[this.id]:null},destroy:function(){var a=this.getSource();a&&(a.destroy(),delete c[this.id])}}),c[this.id]=a}var c={};return a}(),g.QueueProgress=function(){var a=this;a.size=0,a.loaded=0,a.uploaded=0,a.failed=0,a.queued=0,a.percent=0,a.bytesPerSec=0,a.reset=function(){a.size=a.loaded=a.uploaded=a.failed=a.queued=a.percent=a.bytesPerSec=0}},a.plupload=g}(window,mOxie);'}