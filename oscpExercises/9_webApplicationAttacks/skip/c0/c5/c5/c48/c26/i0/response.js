var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:12:44 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 28 Jun 2018 02:30:15 GMT\x0aETag: \x22a63-56faa82e93bc0-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-1119/1120\x0aContent-Length: 1120\x0aKeep-Alive: timeout=5, max=78\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/**\x0a * Thin jQuery.ajax wrapper for WP REST API requests.\x0a *\x0a * Currently only applies to requests that do not use the `wp-api.js` Backbone\x0a * client library, though this may change.  Serves several purposes:\x0a *\x0a * - Allows overriding these requests as needed by customized WP installations.\x0a * - Sends the REST API nonce as a request header.\x0a * - Allows specifying only an endpoint namespace/path instead of a full URL.\x0a *\x0a * @since     4.9.0\x0a * @output wp-includes/js/api-request.js\x0a */\x0a\x0a( function( $ ) {\x0a\x09var wpApiSettings = window.wpApiSettings;\x0a\x0a\x09function apiRequest( options ) {\x0a\x09\x09options = apiRequest.buildAjaxOptions( options );\x0a\x09\x09return apiRequest.transport( options );\x0a\x09}\x0a\x0a\x09apiRequest.buildAjaxOptions = function( options ) {\x0a\x09\x09var url = options.url;\x0a\x09\x09var path = options.path;\x0a\x09\x09var namespaceTrimmed, endpointTrimmed, apiRoot;\x0a\x09\x09var headers, addNonceHeader, headerName;\x0a\x0a\x09\x09if (\x0a\x09\x09\x09typeof options.namespace === \x27string\x27 &&\x0a\x09\x09\x09typeof options.endpoint === \x27string\x27\x0a\x09\x09) {\x0a\x09\x09\x09namespaceTrimmed = options.namespace.replace( /^\x5c/|\x5c/$/g, \x27\x27 );\x0a\x09\x09\x09endpointTrimmed = options.endpoint.replace( /^\x5c//, \x27\x27 );\x0a\x09\x09\x09if ( endpointTrimmed ) {\x0a\x09\x09\x09\x09path = namespaceTrimmed + \x27/\x27 + endpointTrimmed;\x0a\x09\x09\x09} else {\x0a\x09\x09\x09\x09path = namespaceTrimmed;\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09\x09if ( typeof path === \x27string\x27 ) {\x0a\x09\x09\x09apiRoot = wpApiSettings.root;\x0a\x09\x09\x09path = path.replace( /^\x5c//, \x27\x27 );\x0a\x0a\x09\x09\x09// API root may already include query parameter prefix if site is\x0a\x09\x09\x09// configured to use plain permalinks.\x0a\x09\x09\x09if ( \x27string\x27 === typeof apiRoot && -1 !== apiRoot.indexOf( \x27?\x27 ) ) {\x0a\x09\x09\x09\x09path = path.replace( \x27?\x27, \x27&\x27 );\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09url = apiRoot + path;\x0a\x09\x09}\x0a\x0a\x09\x09// If ?_wpnonce=... is present, no need to add a nonce header.\x0a\x09\x09addNonceHeader = ! ( options.data && options.data._wpnonce );\x0a\x0a\x09\x09headers = options.headers || {};\x0a\x0a\x09\x09// If an \x27X-WP-Nonce\x27 header (or any case-insensitive variation\x0a\x09\x09// thereof) was specified, no need to add a nonce header.\x0a\x09\x09if ( addNonceHeader ) {\x0a\x09\x09\x09for ( headerName in headers ) {\x0a\x09\x09\x09\x09if ( headers.hasOwnProperty( headerName ) ) {\x0a\x09\x09\x09\x09\x09if ( headerName.toLowerCase() === \x27x-wp-nonce\x27 ) {\x0a\x09\x09\x09\x09\x09\x09addNonceHeader = false;\x0a\x09\x09\x09\x09\x09\x09break;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x0a\x09\x09if ( addNonceHeader ) {\x0a\x09\x09\x09// Do not mutate the original headers object, if any.\x0a\x09\x09\x09headers = $.extend( {\x0a\x09\x09\x09\x09\x27X-WP-Nonce\x27: wpApiSettings.nonce\x0a\x09\x09\x09}, headers );\x0a\x09\x09}\x0a\x0a\x09\x09// Do not mutate the original options object.\x0a\x09\x09options = $.extend( {}, options, {\x0a\x09\x09\x09headers: headers,\x0a\x09\x09\x09url: url\x0a\x09\x09} );\x0a\x0a\x09\x09delete options.path;\x0a\x09\x09delete options.namespace;\x0a\x09\x09delete options.endpoint;\x0a\x0a\x09\x09return options;\x0a\x09};\x0a\x0a\x09apiRequest.transport = $.ajax;\x0a\x0a\x09/** @namespace wp */\x0a\x09window.wp = window.wp || {};\x0a\x09window.wp.apiRequest = apiRequest;\x0a} )( jQuery );\x0a'}