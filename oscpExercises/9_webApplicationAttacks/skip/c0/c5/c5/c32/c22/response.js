var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:19:46 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Mon, 04 Mar 2019 22:02:52 GMT\x0aETag: \x221637-5834beb003b00-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-1742/1743\x0aContent-Length: 1743\x0aKeep-Alive: timeout=5, max=92\x0aConnection: Keep-Alive\x0aContent-Type: text/css\x0a\x0a/*!\x0a * jQuery UI CSS Framework 1.11.4\x0a * http://jqueryui.com\x0a *\x0a * Copyright jQuery Foundation and other contributors\x0a * Released under the MIT license.\x0a * http://jquery.org/license\x0a *\x0a * http://api.jqueryui.com/category/theming/\x0a */\x0a\x0a/* Layout helpers\x0a----------------------------------*/\x0a.ui-helper-hidden {\x0a\x09display: none;\x0a}\x0a.ui-helper-hidden-accessible {\x0a\x09border: 0;\x0a\x09clip: rect(0 0 0 0);\x0a\x09height: 1px;\x0a\x09margin: -1px;\x0a\x09overflow: hidden;\x0a\x09padding: 0;\x0a\x09position: absolute;\x0a\x09width: 1px;\x0a}\x0a.ui-helper-reset {\x0a\x09margin: 0;\x0a\x09padding: 0;\x0a\x09border: 0;\x0a\x09outline: 0;\x0a\x09line-height: 1.3;\x0a\x09text-decoration: none;\x0a\x09font-size: 100%;\x0a\x09list-style: none;\x0a}\x0a.ui-helper-clearfix:before,\x0a.ui-helper-clearfix:after {\x0a\x09content: \x22\x22;\x0a\x09display: table;\x0a\x09border-collapse: collapse;\x0a}\x0a.ui-helper-clearfix:after {\x0a\x09clear: both;\x0a}\x0a.ui-helper-clearfix {\x0a\x09min-height: 0; /* support: IE7 */\x0a}\x0a.ui-helper-zfix {\x0a\x09width: 100%;\x0a\x09height: 100%;\x0a\x09top: 0;\x0a\x09left: 0;\x0a\x09position: absolute;\x0a\x09opacity: 0;\x0a\x09filter:Alpha(Opacity=0); /* support: IE8 */\x0a}\x0a\x0a.ui-front {\x0a\x09z-index: 100;\x0a}\x0a\x0a\x0a/* Interaction Cues\x0a----------------------------------*/\x0a.ui-state-disabled {\x0a\x09cursor: default !important;\x0a}\x0a\x0a\x0a/* Icons\x0a----------------------------------*/\x0a\x0a/* states and images */\x0a.ui-icon {\x0a\x09display: block;\x0a\x09text-indent: -99999px;\x0a\x09overflow: hidden;\x0a\x09background-repeat: no-repeat;\x0a}\x0a\x0a\x0a/* Misc visuals\x0a----------------------------------*/\x0a\x0a/* Overlays */\x0a.ui-widget-overlay {\x0a\x09position: fixed;\x0a\x09top: 0;\x0a\x09left: 0;\x0a\x09width: 100%;\x0a\x09height: 100%;\x0a}\x0a\x0a/*!\x0a * jQuery UI Resizable 1.11.4\x0a * http://jqueryui.com\x0a *\x0a * Copyright jQuery Foundation and other contributors\x0a * Released under the MIT license.\x0a * http://jquery.org/license\x0a */\x0a.ui-resizable {\x0a\x09position: relative;\x0a}\x0a.ui-resizable-handle {\x0a\x09position: absolute;\x0a\x09font-size: 0.1px;\x0a\x09display: block;\x0a\x09touch-action: none;\x0a}\x0a.ui-resizable-disabled .ui-resizable-handle,\x0a.ui-resizable-autohide .ui-resizable-handle {\x0a\x09display: none;\x0a}\x0a.ui-resizable-n {\x0a\x09cursor: n-resize;\x0a\x09height: 7px;\x0a\x09width: 100%;\x0a\x09top: -5px;\x0a\x09left: 0;\x0a}\x0a.ui-resizable-s {\x0a\x09cursor: s-resize;\x0a\x09height: 7px;\x0a\x09width: 100%;\x0a\x09bottom: -5px;\x0a\x09left: 0;\x0a}\x0a/* rtl:ignore */\x0a.ui-resizable-e {\x0a\x09cursor: e-resize;\x0a\x09width: 7px;\x0a\x09right: -5px;\x0a\x09top: 0;\x0a\x09height: 100%;\x0a}\x0a/* rtl:ignore */\x0a.ui-resizable-w {\x0a\x09cursor: w-resize;\x0a\x09width: 7px;\x0a\x09left: -5px;\x0a\x09top: 0;\x0a\x09height: 100%;\x0a}\x0a/* rtl:ignore */\x0a.ui-resizable-se {\x0a\x09cursor: se-resize;\x0a\x09width: 12px;\x0a\x09height: 12px;\x0a\x09right: 1px;\x0a\x09bottom: 1px;\x0a}\x0a/* rtl:ignore */\x0a.ui-resizable-sw {\x0a\x09cursor: sw-resize;\x0a\x09width: 9px;\x0a\x09height: 9px;\x0a\x09left: -5px;\x0a\x09bottom: -5px;\x0a}\x0a/* rtl:ignore */\x0a.ui-resizable-nw {\x0a\x09cursor: nw-resize;\x0a\x09width: 9px;\x0a\x09height: 9px;\x0a\x09left: -5px;\x0a\x09top: -5px;\x0a}\x0a/* rtl:ignore */\x0a.ui-resizable-ne {\x0a\x09cursor: ne-resize;\x0a\x09width: 9px;\x0a\x09height: 9px;\x0a\x09right: -5px;\x0a\x09top: -5px;\x0a}\x0a\x0a/* WP buttons: see buttons.css. */\x0a\x0a.ui-button {\x0a\x09display: inline-block;\x0a\x09text-decoration: none;\x0a\x09font-size: 13px;\x0a\x09line-height: 26px;\x0a\x09height: 28px;\x0a\x09margin: 0;\x0a\x09padding: 0 10px 1px;\x0a\x09cursor: pointer;\x0a\x09border-width: 1px;\x0a\x09border-style: solid;\x0a\x09-webkit-appearance: none;\x0a\x09border-radius: 3px;\x0a\x09white-space: nowrap;\x0a\x09box-sizing: border-box;\x0a\x09color: #555;\x0a\x09border-color: #cccccc;\x0a\x09background: #f7f7f7;\x0a\x09box-shadow: 0 1px 0 #cccccc;\x0a\x09vertical-align: top;\x0a}\x0a\x0a.ui-button:active,\x0a.ui-button:focus {\x0a\x09outline: none;\x0a}\x0a\x0a/* Remove the dotted border on :focus and the extra padding in Firefox */\x0a.ui-button::-moz-focus-inner {\x0a\x09border-width: 0;\x0a\x09border-style: none;\x0a\x09padding: 0;\x0a}\x0a\x0a.ui-button:hover,\x0a.ui-button:focus {\x0a\x09background: #fafafa;\x0a\x09border-color: #999;\x0a\x09color: #23282d;\x0a}\x0a\x0a.ui-button:focus {\x0a\x09border-color: #5b9dd9;\x0a\x09box-shadow: 0 0 3px rgba(0, 115, 170, 0.8);\x0a}\x0a\x0a.ui-button:active {\x0a\x09background: #eee;\x0a\x09border-color: #999;\x0a\x09box-shadow: inset 0 2px 5px -3px rgba(0, 0, 0, 0.5);\x0a\x09transform: translateY(1px);\x0a}\x0a\x0a.ui-button[disabled],\x0a.ui-button:disabled {\x0a\x09color: #a0a5aa !important;\x0a\x09border-color: #ddd !important;\x0a\x09background: #f7f7f7 !important;\x0a\x09box-shadow: none !important;\x0a\x09text-shadow: 0 1px 0 #fff !important;\x0a\x09cursor: default;\x0a\x09transform: none !important;\x0a}\x0a\x0a@media screen and (max-width: 782px) {\x0a\x0a\x09.ui-button {\x0a\x09\x09padding: 6px 14px;\x0a\x09\x09line-height: normal;\x0a\x09\x09font-size: 14px;\x0a\x09\x09vertical-align: middle;\x0a\x09\x09height: auto;\x0a\x09\x09margin-bottom: 4px;\x0a\x09}\x0a\x0a}\x0a\x0a/* WP Theme */\x0a\x0a.ui-dialog {\x0a\x09position: absolute;\x0a\x09top: 0;\x0a\x09left: 0;\x0a\x09z-index: 100102;\x0a\x09background-color: #fff;\x0a\x09box-shadow: 0 3px 6px rgba(0, 0, 0, 0.3);\x0a}\x0a\x0a.ui-dialog-titlebar {\x0a\x09background: #fcfcfc;\x0a\x09border-bottom: 1px solid #dfdfdf;\x0a\x09height: 36px;\x0a\x09font-size: 18px;\x0a\x09font-weight: 600;\x0a\x09line-height: 36px;\x0a\x09padding: 0 36px 0 16px;\x0a}\x0a\x0a.ui-button.ui-dialog-titlebar-close {\x0a\x09background: none;\x0a\x09border: none;\x0a\x09box-shadow: none;\x0a\x09color: #666;\x0a\x09cursor: pointer;\x0a\x09display: block;\x0a\x09padding: 0;\x0a\x09position: absolute;\x0a\x09top: 0;\x0a\x09right: 0;\x0a\x09width: 36px;\x0a\x09height: 36px;\x0a\x09text-align: center;\x0a}\x0a\x0a.ui-dialog-titlebar-close:before {\x0a\x09font: normal 20px/1 dashicons;\x0a\x09vertical-align: top;\x0a\x09speak: none;\x0a\x09-webkit-font-smoothing: antialiased;\x0a\x09-moz-osx-font-smoothing: grayscale;\x0a\x09line-height: 36px;\x0a\x09width: 36px;\x0a\x09height: 36px;\x0a\x09content: \x22\x5cf158\x22;\x0a}\x0a\x0a.ui-button.ui-dialog-titlebar-close:hover {\x0a\x09color: #00a0d2;\x0a}\x0a\x0a.ui-dialog-titlebar-close .ui-button-text {\x0a\x09display: none;\x0a}\x0a\x0a.ui-dialog-content {\x0a\x09padding: 16px;\x0a\x09overflow: auto;\x0a}\x0a\x0a.ui-dialog-buttonpane {\x0a\x09background: #fcfcfc;\x0a\x09border-top: 1px solid #dfdfdf;\x0a\x09padding: 16px;\x0a}\x0a\x0a.ui-dialog-buttonpane .ui-button {\x0a\x09margin-left: 16px;\x0a}\x0a\x0a.ui-dialog-buttonpane .ui-dialog-buttonset {\x0a\x09float: right;\x0a}\x0a\x0a.ui-draggable .ui-dialog-titlebar {\x0a\x09cursor: move;\x0a}\x0a\x0a.ui-widget-overlay {\x0a\x09position: fixed;\x0a\x09top: 0;\x0a\x09left: 0;\x0a\x09right: 0;\x0a\x09bottom: 0;\x0a\x09min-height: 360px;\x0a\x09background: #000;\x0a\x09opacity: 0.7;\x0a\x09filter: alpha(opacity=70);\x0a\x09z-index: 100101;\x0a}\x0a'}