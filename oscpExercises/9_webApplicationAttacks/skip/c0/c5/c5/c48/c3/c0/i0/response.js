var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:12:03 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 20 Dec 2012 15:55:32 GMT\x0aETag: \x22b85-4d14ac2c02500-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-992/993\x0aContent-Length: 993\x0aKeep-Alive: timeout=5, max=17\x0aConnection: Keep-Alive\x0aContent-Type: text/css\x0a\x0a.imgCrop_wrap {\x0a\x09/* width: 500px;   @done_in_js */\x0a\x09/* height: 375px;  @done_in_js */\x0a\x09position: relative;\x0a\x09cursor: crosshair;\x0a}\x0a\x0a/* an extra classname is applied for Opera \x3c 9.0 to fix its lack of opacity support */\x0a.imgCrop_wrap.opera8 .imgCrop_overlay,\x0a.imgCrop_wrap.opera8 .imgCrop_clickArea { \x0a\x09background-color: transparent;\x0a}\x0a\x0a/* fix for IE displaying all boxes at line-height by default, although they are still 1 pixel high until we combine them with the pointless span */\x0a.imgCrop_wrap,\x0a.imgCrop_wrap * {\x0a\x09font-size: 0;\x0a}\x0a\x0a.imgCrop_overlay {\x0a\x09background-color: #000;\x0a\x09opacity: 0.5;\x0a\x09filter:alpha(opacity=50);\x0a\x09position: absolute;\x0a\x09width: 100%;\x0a\x09height: 100%;\x0a}\x0a\x0a.imgCrop_selArea {\x0a\x09position: absolute;\x0a\x09/* @done_in_js \x0a\x09top: 20px;\x0a\x09left: 20px;\x0a\x09width: 200px;\x0a\x09height: 200px;\x0a\x09background: transparent url(castle.jpg) no-repeat  -210px -110px;\x0a\x09*/\x0a\x09cursor: move;\x0a\x09z-index: 2;\x0a}\x0a\x0a/* clickArea is all a fix for IE 5.5 & 6 to allow the user to click on the given area */\x0a.imgCrop_clickArea {\x0a\x09width: 100%;\x0a\x09height: 100%;\x0a\x09background-color: #FFF;\x0a\x09opacity: 0.01;\x0a\x09filter:alpha(opacity=01);\x0a}\x0a\x0a.imgCrop_marqueeHoriz {\x0a\x09position: absolute;\x0a\x09width: 100%;\x0a\x09height: 1px;\x0a\x09background: transparent url(marqueeHoriz.gif) repeat-x 0 0;\x0a\x09z-index: 3;\x0a}\x0a\x0a.imgCrop_marqueeVert {\x0a\x09position: absolute;\x0a\x09height: 100%;\x0a\x09width: 1px;\x0a\x09background: transparent url(marqueeVert.gif) repeat-y 0 0;\x0a\x09z-index: 3;\x0a}\x0a\x0a.imgCrop_marqueeNorth { top: 0; left: 0; }\x0a.imgCrop_marqueeEast  { top: 0; right: 0; }\x0a.imgCrop_marqueeSouth { bottom: 0px; left: 0; }\x0a.imgCrop_marqueeWest  { top: 0; left: 0; }\x0a\x0a\x0a.imgCrop_handle {\x0a\x09position: absolute;\x0a\x09border: 1px solid #333;\x0a\x09width: 6px;\x0a\x09height: 6px;\x0a\x09background: #FFF;\x0a\x09opacity: 0.5;\x0a\x09filter:alpha(opacity=50);\x0a\x09z-index: 4;\x0a}\x0a\x0a/* fix IE 5 box model */\x0a* html .imgCrop_handle {\x0a\x09width: 8px;\x0a\x09height: 8px;\x0a\x09wid\x5cth: 6px;\x0a\x09hei\x5cght: 6px;\x0a}\x0a\x0a.imgCrop_handleN {\x0a\x09top: -3px;\x0a\x09left: 0;\x0a\x09/* margin-left: 49%;    @done_in_js */\x0a\x09cursor: n-resize;\x0a}\x0a\x0a.imgCrop_handleNE { \x0a\x09top: -3px;\x0a\x09right: -3px;\x0a\x09cursor: ne-resize;\x0a}\x0a\x0a.imgCrop_handleE {\x0a\x09top: 0;\x0a\x09right: -3px;\x0a\x09/* margin-top: 49%;    @done_in_js */\x0a\x09cursor: e-resize;\x0a}\x0a\x0a.imgCrop_handleSE {\x0a\x09right: -3px;\x0a\x09bottom: -3px;\x0a\x09cursor: se-resize;\x0a}\x0a\x0a.imgCrop_handleS {\x0a\x09right: 0;\x0a\x09bottom: -3px;\x0a\x09/* margin-right: 49%; @done_in_js */\x0a\x09cursor: s-resize;\x0a}\x0a\x0a.imgCrop_handleSW {\x0a\x09left: -3px;\x0a\x09bottom: -3px;\x0a\x09cursor: sw-resize;\x0a}\x0a\x0a.imgCrop_handleW {\x0a\x09top: 0;\x0a\x09left: -3px;\x0a\x09/* margin-top: 49%;  @done_in_js */\x0a\x09cursor: e-resize;\x0a}\x0a\x0a.imgCrop_handleNW {\x0a\x09top: -3px;\x0a\x09left: -3px;\x0a\x09cursor: nw-resize;\x0a}\x0a\x0a/**\x0a * Create an area to click & drag around on as the default browser behaviour is to let you drag the image \x0a */\x0a.imgCrop_dragArea {\x0a\x09width: 100%;\x0a\x09height: 100%;\x0a\x09z-index: 200;\x0a\x09position: absolute;\x0a\x09top: 0;\x0a\x09left: 0;\x0a}\x0a\x0a.imgCrop_previewWrap {\x0a\x09/* width: 200px;  @done_in_js */\x0a\x09/* height: 200px; @done_in_js */\x0a\x09overflow: hidden;\x0a\x09position: relative;\x0a}\x0a\x0a.imgCrop_previewWrap img {\x0a\x09position: absolute;\x0a}'}