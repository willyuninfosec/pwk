var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 14:53:05 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 28 Jun 2018 02:30:15 GMT\x0aETag: \x22335-56faa82e93bc0-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-439/440\x0aContent-Length: 440\x0aKeep-Alive: timeout=5, max=60\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/**\x0a * @output wp-includes/js/zxcvbn-async.js\x0a */\x0a\x0a/* global _zxcvbnSettings */\x0a\x0a/**\x0a * Loads zxcvbn asynchronously by inserting an async script tag before the first\x0a * script tag on the page.\x0a *\x0a * This makes sure zxcvbn isn\x27t blocking loading the page as it is a big\x0a * library. The source for zxcvbn is read from the _zxcvbnSettings global.\x0a */\x0a(function() {\x0a  var async_load = function() {\x0a    var first, s;\x0a    s = document.createElement(\x27script\x27);\x0a    s.src = _zxcvbnSettings.src;\x0a    s.type = \x27text/javascript\x27;\x0a    s.async = true;\x0a    first = document.getElementsByTagName(\x27script\x27)[0];\x0a    return first.parentNode.insertBefore(s, first);\x0a  };\x0a\x0a  if (window.attachEvent != null) {\x0a    window.attachEvent(\x27onload\x27, async_load);\x0a  } else {\x0a    window.addEventListener(\x27load\x27, async_load, false);\x0a  }\x0a}).call(this);\x0a'}