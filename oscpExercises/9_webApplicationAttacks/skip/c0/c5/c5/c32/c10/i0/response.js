var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:20:46 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Mon, 04 Mar 2019 22:02:52 GMT\x0aETag: \x22e34-5834beb003b00-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-1077/1078\x0aContent-Length: 1078\x0aKeep-Alive: timeout=5, max=76\x0aConnection: Keep-Alive\x0aContent-Type: text/css\x0a\x0a.customize-partial-refreshing {\x0a\x09opacity: 0.25;\x0a\x09transition: opacity 0.25s;\x0a\x09cursor: progress;\x0a}\x0a\x0a/* Override highlight when refreshing */\x0a.customize-partial-refreshing.widget-customizer-highlighted-widget {\x0a\x09box-shadow: none;\x0a}\x0a\x0a/* Make shortcut buttons essentially invisible */\x0a.widget .customize-partial-edit-shortcut,\x0a.customize-partial-edit-shortcut {\x0a\x09position: absolute;\x0a\x09float: right;\x0a\x09width: 1px; /* required to have a size to be focusable in Safari */\x0a\x09height: 1px;\x0a\x09padding: 0;\x0a\x09margin: -1px -1px 0 0;\x0a\x09border: 0;\x0a\x09background: transparent;\x0a\x09color: transparent;\x0a\x09box-shadow: none;\x0a\x09outline: none;\x0a\x09z-index: 5;\x0a}\x0a\x0a/**\x0a * Styles for the actual shortcut\x0a *\x0a * Note that some properties are overly verbose to prevent theme interference.\x0a */\x0a.widget .customize-partial-edit-shortcut button,\x0a.customize-partial-edit-shortcut button {\x0a\x09position: absolute;\x0a\x09right: -30px;\x0a\x09top: 2px;\x0a\x09color: #fff;\x0a\x09width: 30px;\x0a\x09height: 30px;\x0a\x09min-width: 30px;\x0a\x09min-height: 30px;\x0a\x09line-height: 1em !important;\x0a\x09font-size: 18px;\x0a\x09z-index: 5;\x0a\x09background: #0085ba !important;\x0a\x09border-radius: 50%;\x0a\x09border: 2px solid #fff;\x0a\x09box-shadow: 0 2px 1px rgba(46, 68, 83, 0.15);\x0a\x09text-align: center;\x0a\x09cursor: pointer;\x0a\x09box-sizing: border-box;\x0a\x09padding: 3px;\x0a\x09animation-fill-mode: both;\x0a\x09animation-duration: .4s;\x0a\x09opacity: 0;\x0a\x09pointer-events: none;\x0a\x09text-shadow:\x0a\x09\x090 -1px 1px #006799,\x0a\x09\x09-1px 0 1px #006799,\x0a\x09\x090 1px 1px #006799,\x0a\x09\x091px 0 1px #006799;\x0a}\x0a.wp-custom-header .customize-partial-edit-shortcut button {\x0a\x09right: 2px\x0a}\x0a\x0a.customize-partial-edit-shortcut button svg {\x0a\x09fill: #fff;\x0a\x09min-width: 20px;\x0a\x09min-height: 20px;\x0a\x09width: 20px;\x0a\x09height: 20px;\x0a\x09margin: auto;\x0a}\x0a\x0a.customize-partial-edit-shortcut button:hover {\x0a\x09background: #008ec2 !important; /* matches primary buttons */\x0a}\x0a\x0a.customize-partial-edit-shortcut button:focus {\x0a\x09box-shadow: 0 0 0 2px #008ec2;\x0a}\x0a\x0abody.customize-partial-edit-shortcuts-shown .customize-partial-edit-shortcut button {\x0a\x09animation-name: customize-partial-edit-shortcut-bounce-appear;\x0a\x09pointer-events: auto;\x0a}\x0abody.customize-partial-edit-shortcuts-hidden .customize-partial-edit-shortcut button {\x0a\x09animation-name: customize-partial-edit-shortcut-bounce-disappear;\x0a\x09pointer-events: none;\x0a}\x0a\x0a.page-sidebar-collapsed .customize-partial-edit-shortcut button,\x0a.customize-partial-edit-shortcut-hidden .customize-partial-edit-shortcut button {\x0a\x09visibility: hidden;\x0a}\x0a\x0a@keyframes customize-partial-edit-shortcut-bounce-appear {\x0a\x09from, 20%, 40%, 60%, 80%, to {\x0a\x09\x09animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\x0a\x09}\x0a\x090% {\x0a\x09\x09opacity: 0;\x0a\x09\x09transform: scale3d(.3, .3, .3);\x0a\x09}\x0a\x0920% {\x0a\x09\x09transform: scale3d(1.1, 1.1, 1.1);\x0a\x09}\x0a\x0940% {\x0a\x09\x09transform: scale3d(.9, .9, .9);\x0a\x09}\x0a\x0960% {\x0a\x09\x09opacity: 1;\x0a\x09\x09transform: scale3d(1.03, 1.03, 1.03);\x0a\x09}\x0a\x0980% {\x0a\x09\x09transform: scale3d(.97, .97, .97);\x0a\x09}\x0a\x09to {\x0a\x09\x09opacity: 1;\x0a\x09\x09transform: scale3d(1, 1, 1);\x0a\x09}\x0a}\x0a\x0a@keyframes customize-partial-edit-shortcut-bounce-disappear {\x0a\x09from, 20%, 40%, 60%, 80%, to {\x0a\x09\x09animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);\x0a\x09}\x0a\x090% {\x0a\x09\x09opacity: 1;\x0a\x09\x09transform: scale3d(1, 1, 1);\x0a\x09}\x0a\x0920% {\x0a\x09\x09transform: scale3d(.97, .97, .97);\x0a\x09}\x0a\x0940% {\x0a\x09\x09opacity: 1;\x0a\x09\x09transform: scale3d(1.03, 1.03, 1.03);\x0a\x09}\x0a\x0960% {\x0a\x09\x09transform: scale3d(.9, .9, .9);\x0a\x09}\x0a\x0980% {\x0a\x09\x09transform: scale3d(1.1, 1.1, 1.1);\x0a\x09}\x0a\x09to {\x0a\x09\x09opacity: 0;\x0a\x09\x09transform: scale3d(.3, .3, .3);\x0a\x09}\x0a}\x0a\x0a@media screen and (max-width: 800px) {\x0a\x09.widget .customize-partial-edit-shortcut button,\x0a\x09.customize-partial-edit-shortcut button {\x0a\x09\x09right: -32px;\x0a\x09}\x0a}\x0a\x0a@media screen and (max-width: 320px) {\x0a\x09.widget .customize-partial-edit-shortcut button,\x0a\x09.customize-partial-edit-shortcut button {\x0a\x09\x09right: -30px;\x0a\x09}\x0a}\x0aW\xb1\x96g\xba\x82z\xff5ZF'}