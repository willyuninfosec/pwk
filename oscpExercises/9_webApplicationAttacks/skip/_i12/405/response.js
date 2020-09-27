var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 14:53:10 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 30 Aug 2018 12:40:26 GMT\x0aETag: \x22c8e-574a661196280-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-1266/1267\x0aContent-Length: 1267\x0aKeep-Alive: timeout=5, max=69\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/**\x0a * WordPress inline HTML embed\x0a *\x0a * @since 4.4.0\x0a * @output wp-includes/js/wp-embed.js\x0a *\x0a * This file cannot have ampersands in it. This is to ensure\x0a * it can be embedded in older versions of WordPress.\x0a * See https://core.trac.wordpress.org/changeset/35708.\x0a */\x0a(function ( window, document ) {\x0a\x09\x27use strict\x27;\x0a\x0a\x09var supportedBrowser = false,\x0a\x09\x09loaded = false;\x0a\x0a\x09\x09if ( document.querySelector ) {\x0a\x09\x09\x09if ( window.addEventListener ) {\x0a\x09\x09\x09\x09supportedBrowser = true;\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x0a\x09/** @namespace wp */\x0a\x09window.wp = window.wp || {};\x0a\x0a\x09if ( !! window.wp.receiveEmbedMessage ) {\x0a\x09\x09return;\x0a\x09}\x0a\x0a\x09window.wp.receiveEmbedMessage = function( e ) {\x0a\x09\x09var data = e.data;\x0a\x0a\x09\x09if ( ! data ) {\x0a\x09\x09\x09return;\x0a\x09\x09}\x0a\x0a\x09\x09if ( ! ( data.secret || data.message || data.value ) ) {\x0a\x09\x09\x09return;\x0a\x09\x09}\x0a\x0a\x09\x09if ( /[^a-zA-Z0-9]/.test( data.secret ) ) {\x0a\x09\x09\x09return;\x0a\x09\x09}\x0a\x0a\x09\x09var iframes = document.querySelectorAll( \x27iframe[data-secret=\x22\x27 + data.secret + \x27\x22]\x27 ),\x0a\x09\x09\x09blockquotes = document.querySelectorAll( \x27blockquote[data-secret=\x22\x27 + data.secret + \x27\x22]\x27 ),\x0a\x09\x09\x09i, source, height, sourceURL, targetURL;\x0a\x0a\x09\x09for ( i = 0; i \x3c blockquotes.length; i++ ) {\x0a\x09\x09\x09blockquotes[ i ].style.display = \x27none\x27;\x0a\x09\x09}\x0a\x0a\x09\x09for ( i = 0; i \x3c iframes.length; i++ ) {\x0a\x09\x09\x09source = iframes[ i ];\x0a\x0a\x09\x09\x09if ( e.source !== source.contentWindow ) {\x0a\x09\x09\x09\x09continue;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09source.removeAttribute( \x27style\x27 );\x0a\x0a\x09\x09\x09/* Resize the iframe on request. */\x0a\x09\x09\x09if ( \x27height\x27 === data.message ) {\x0a\x09\x09\x09\x09height = parseInt( data.value, 10 );\x0a\x09\x09\x09\x09if ( height \x3e 1000 ) {\x0a\x09\x09\x09\x09\x09height = 1000;\x0a\x09\x09\x09\x09} else if ( ~~height \x3c 200 ) {\x0a\x09\x09\x09\x09\x09height = 200;\x0a\x09\x09\x09\x09}\x0a\x0a\x09\x09\x09\x09source.height = height;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09/* Link to a specific URL on request. */\x0a\x09\x09\x09if ( \x27link\x27 === data.message ) {\x0a\x09\x09\x09\x09sourceURL = document.createElement( \x27a\x27 );\x0a\x09\x09\x09\x09targetURL = document.createElement( \x27a\x27 );\x0a\x0a\x09\x09\x09\x09sourceURL.href = source.getAttribute( \x27src\x27 );\x0a\x09\x09\x09\x09targetURL.href = data.value;\x0a\x0a\x09\x09\x09\x09/* Only continue if link hostname matches iframe\x27s hostname. */\x0a\x09\x09\x09\x09if ( targetURL.host === sourceURL.host ) {\x0a\x09\x09\x09\x09\x09if ( document.activeElement === source ) {\x0a\x09\x09\x09\x09\x09\x09window.top.location.href = data.value;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09};\x0a\x0a\x09function onLoad() {\x0a\x09\x09if ( loaded ) {\x0a\x09\x09\x09return;\x0a\x09\x09}\x0a\x0a\x09\x09loaded = true;\x0a\x0a\x09\x09var isIE10 = -1 !== navigator.appVersion.indexOf( \x27MSIE 10\x27 ),\x0a\x09\x09\x09isIE11 = !!navigator.userAgent.match( /Trident.*rv:11\x5c./ ),\x0a\x09\x09\x09iframes = document.querySelectorAll( \x27iframe.wp-embedded-content\x27 ),\x0a\x09\x09\x09iframeClone, i, source, secret;\x0a\x0a\x09\x09for ( i = 0; i \x3c iframes.length; i++ ) {\x0a\x09\x09\x09source = iframes[ i ];\x0a\x0a\x09\x09\x09if ( ! source.getAttribute( \x27data-secret\x27 ) ) {\x0a\x09\x09\x09\x09/* Add secret to iframe */\x0a\x09\x09\x09\x09secret = Math.random().toString( 36 ).substr( 2, 10 );\x0a\x09\x09\x09\x09source.src += \x27#?secret=\x27 + secret;\x0a\x09\x09\x09\x09source.setAttribute( \x27data-secret\x27, secret );\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09/* Remove security attribute from iframes in IE10 and IE11. */\x0a\x09\x09\x09if ( ( isIE10 || isIE11 ) ) {\x0a\x09\x09\x09\x09iframeClone = source.cloneNode( true );\x0a\x09\x09\x09\x09iframeClone.removeAttribute( \x27security\x27 );\x0a\x09\x09\x09\x09source.parentNode.replaceChild( iframeClone, source );\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09}\x0a\x0a\x09if ( supportedBrowser ) {\x0a\x09\x09window.addEventListener( \x27message\x27, window.wp.receiveEmbedMessage, false );\x0a\x09\x09document.addEventListener( \x27DOMContentLoaded\x27, onLoad, false );\x0a\x09\x09window.addEventListener( \x27load\x27, onLoad, false );\x0a\x09}\x0a})( window, document );\x0aL\x17g\xf7!'}