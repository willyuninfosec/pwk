var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 14:53:10 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 28 Jun 2018 02:30:15 GMT\x0aETag: \x223ca-56faa82e93bc0-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-460/461\x0aContent-Length: 461\x0aKeep-Alive: timeout=5, max=17\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/**\x0a * @output wp-includes/js/wp-list-revisions.js\x0a */\x0a\x0a(function(w) {\x0a\x09var init = function() {\x0a\x09\x09var pr = document.getElementById(\x27post-revisions\x27),\x0a\x09\x09inputs = pr ? pr.getElementsByTagName(\x27input\x27) : [];\x0a\x09\x09pr.onclick = function() {\x0a\x09\x09\x09var i, checkCount = 0, side;\x0a\x09\x09\x09for ( i = 0; i \x3c inputs.length; i++ ) {\x0a\x09\x09\x09\x09checkCount += inputs[i].checked ? 1 : 0;\x0a\x09\x09\x09\x09side = inputs[i].getAttribute(\x27name\x27);\x0a\x09\x09\x09\x09if ( ! inputs[i].checked &&\x0a\x09\x09\x09\x09( \x27left\x27 == side && 1 \x3e checkCount || \x27right\x27 == side && 1 \x3c checkCount && ( ! inputs[i-1] || ! inputs[i-1].checked ) ) &&\x0a\x09\x09\x09\x09! ( inputs[i+1] && inputs[i+1].checked && \x27right\x27 == inputs[i+1].getAttribute(\x27name\x27) ) )\x0a\x09\x09\x09\x09\x09inputs[i].style.visibility = \x27hidden\x27;\x0a\x09\x09\x09\x09else if ( \x27left\x27 == side || \x27right\x27 == side )\x0a\x09\x09\x09\x09\x09inputs[i].style.visibility = \x27visible\x27;\x0a\x09\x09\x09}\x0a\x09\x09};\x0a\x09\x09pr.onclick();\x0a\x09};\x0a\x09if ( w && w.addEventListener )\x0a\x09\x09w.addEventListener(\x27load\x27, init, false);\x0a\x09else if ( w && w.attachEvent )\x0a\x09\x09w.attachEvent(\x27onload\x27, init);\x0a})(window);\x0a\xbb\xf6\x0b\xdb\x19'}