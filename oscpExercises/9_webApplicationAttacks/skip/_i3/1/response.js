var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 14:59:47 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 21 Sep 2017 16:35:48 GMT\x0aETag: \x221157-559b5af446100-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-1221/1222\x0aContent-Length: 1222\x0aKeep-Alive: timeout=5, max=26\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/**\x0a * SWFUpload fallback\x0a *\x0a * @since 4.9.0\x0a */\x0a\x0avar SWFUpload;\x0a\x0a( function () {\x0a\x09function noop() {}\x0a\x0a\x09if (SWFUpload == undefined) {\x0a\x09\x09SWFUpload = function (settings) {\x0a\x09\x09\x09this.initSWFUpload(settings);\x0a\x09\x09};\x0a\x09}\x0a\x0a\x09SWFUpload.prototype.initSWFUpload = function ( settings ) {\x0a\x09\x09function fallback() {\x0a\x09\x09\x09var $ = window.jQuery;\x0a\x09\x09\x09var $placeholder = settings.button_placeholder_id ? $( \x27#\x27 + settings.button_placeholder_id ) : $( settings.button_placeholder );\x0a\x0a\x09\x09\x09if ( ! $placeholder.length ) {\x0a\x09\x09\x09\x09return;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09var $form = $placeholder.closest( \x27form\x27 );\x0a\x0a\x09\x09\x09if ( ! $form.length ) {\x0a\x09\x09\x09\x09$form = $( \x27\x3cform enctype=\x22multipart/form-data\x22 method=\x22post\x22'}