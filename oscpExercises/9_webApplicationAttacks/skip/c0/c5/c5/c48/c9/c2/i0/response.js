var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:04:47 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Wed, 23 May 2018 10:05:31 GMT\x0aETag: \x225bdb-56cdcacc8d0c0-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-7812/7813\x0aContent-Length: 7813\x0aKeep-Alive: timeout=5, max=76\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/*!\x0d\x0a * jQuery Migrate - v1.4.1 - 2016-05-19\x0d\x0a * Copyright jQuery Foundation and other contributors\x0d\x0a */\x0d\x0a(function( jQuery, window, undefined ) {\x0a// See http://bugs.jquery.com/ticket/13335\x0a// \x22use strict\x22;\x0a\x0d\x0a\x0ajQuery.migrateVersion = \x221.4.1\x22;\x0a\x0d\x0a\x0avar warnedAbout = {};\x0a\x0a// List of warnings already given; public read only\x0ajQuery.migrateWarnings = [];\x0a\x0a// Set to true to prevent console output; migrateWarnings still maintained\x0a// jQuery.migrateMute = false;\x0a\x0a// Show a message on the console so devs know we\x27re active\x0aif ( window.console && window.console.log ) {\x0a\x09window.console.log( \x22JQMIGRATE: Migrate is installed\x22 +\x0a\x09\x09( jQuery.migrateMute ? \x22\x22 : \x22 with logging active\x22 ) +\x0a\x09\x09\x22, version \x22 + jQuery.migrateVersion );\x0a}\x0a\x0a// Set to false to disable traces that appear with warnings\x0aif ( jQuery.migrateTrace === undefined ) {\x0a\x09jQuery.migrateTrace = true;\x0a}\x0a\x0a// Forget any warnings we\x27ve already given; public\x0ajQuery.migrateReset = function() {\x0a\x09warnedAbout = {};\x0a\x09jQuery.migrateWarnings.length = 0;\x0a};\x0a\x0afunction migrateWarn( msg) {\x0a\x09var console = window.console;\x0a\x09if ( !warnedAbout[ msg ] ) {\x0a\x09\x09warnedAbout[ msg ] = true;\x0a\x09\x09jQuery.migrateWarnings.push( msg );\x0a\x09\x09if ( console && console.warn && !jQuery.migrateMute ) {\x0a\x09\x09\x09console.warn( \x22JQMIGRATE: \x22 + msg );\x0a\x09\x09\x09if ( jQuery.migrateTrace && console.trace ) {\x0a\x09\x09\x09\x09console.trace();\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09}\x0a}\x0a\x0afunction migrateWarnProp( obj, prop, value, msg ) {\x0a\x09if ( Object.defineProperty ) {\x0a\x09\x09// On ES5 browsers (non-oldIE), warn if the code tries to get prop;\x0a\x09\x09// allow property to be overwritten in case some other plugin wants it\x0a\x09\x09try {\x0a\x09\x09\x09Object.defineProperty( obj, prop, {\x0a\x09\x09\x09\x09configurable: true,\x0a\x09\x09\x09\x09enumerable: true,\x0a\x09\x09\x09\x09get: function() {\x0a\x09\x09\x09\x09\x09migrateWarn( msg );\x0a\x09\x09\x09\x09\x09return value;\x0a\x09\x09\x09\x09},\x0a\x09\x09\x09\x09set: function( newValue ) {\x0a\x09\x09\x09\x09\x09migrateWarn( msg );\x0a\x09\x09\x09\x09\x09value = newValue;\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09});\x0a\x09\x09\x09return;\x0a\x09\x09} catch( err ) {\x0a\x09\x09\x09// IE8 is a dope about Object.defineProperty, can\x27t warn there\x0a\x09\x09}\x0a\x09}\x0a\x0a\x09// Non-ES5 (or broken) browser; just set the property\x0a\x09jQuery._definePropertyBroken = true;\x0a\x09obj[ prop ] = value;\x0a}\x0a\x0aif ( document.compatMode === \x22BackCompat\x22 ) {\x0a\x09// jQuery has never supported or tested Quirks Mode\x0a\x09migrateWarn( \x22jQuery is not compatible with Quirks Mode\x22 );\x0a}\x0a\x0d\x0a\x0avar attrFn = jQuery( \x22\x3cinput/\x3e\x22, { size: 1 } ).attr(\x22size\x22) && jQuery.attrFn,\x0a\x09oldAttr = jQuery.attr,\x0a\x09valueAttrGet = jQuery.attrHooks.value && jQuery.attrHooks.value.get ||\x0a\x09\x09function() { return null; },\x0a\x09valueAttrSet = jQuery.attrHooks.value && jQuery.attrHooks.value.set ||\x0a\x09\x09function() { return undefined; },\x0a\x09rnoType = /^(?:input|button)$/i,\x0a\x09rnoAttrNodeType = /^[238]$/,\x0a\x09rboolean = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,\x0a\x09ruseDefault = /^(?:checked|selected)$/i;\x0a\x0a// jQuery.attrFn\x0amigrateWarnProp( jQuery, \x22attrFn\x22, attrFn || {}, \x22jQuery.attrFn is deprecated\x22 );\x0a\x0ajQuery.attr = function( elem, name, value, pass ) {\x0a\x09var lowerName = name.toLowerCase(),\x0a\x09\x09nType = elem && elem.nodeType;\x0a\x0a\x09if ( pass ) {\x0a\x09\x09// Since pass is used internally, we only warn for new jQuery\x0a\x09\x09// versions where there isn\x27t a pass arg in the formal params\x0a\x09\x09if ( oldAttr.length \x3c 4 ) {\x0a\x09\x09\x09migrateWarn(\x22jQuery.fn.attr( props, pass ) is deprecated\x22);\x0a\x09\x09}\x0a\x09\x09if ( elem && !rnoAttrNodeType.test( nType ) &&\x0a\x09\x09\x09(attrFn ? name in attrFn : jQuery.isFunction(jQuery.fn[name])) ) {\x0a\x09\x09\x09return jQuery( elem )[ name ]( value );\x0a\x09\x09}\x0a\x09}\x0a\x0a\x09// Warn if user tries to set `type`, since it breaks on IE 6/7/8; by checking\x0a\x09// for disconnected elements we don\x27t warn on $( \x22\x3cbutton\x3e\x22, { type: \x22button\x22 } ).\x0a\x09if ( name === \x22type\x22 && value !== undefined && rnoType.test( elem.nodeName ) && elem.parentNode ) {\x0a\x09\x09migrateWarn(\x22Can\x27t change the \x27type\x27 of an input or button in IE 6/7/8\x22);\x0a\x09}\x0a\x0a\x09// Restore boolHook for boolean property/attribute synchronization\x0a\x09if ( !jQuery.attrHooks[ lowerName ] && rboolean.test( lowerName ) ) {\x0a\x09\x09jQuery.attrHooks[ lowerName ] = {\x0a\x09\x09\x09get: function( elem, name ) {\x0a\x09\x09\x09\x09// Align boolean attributes with corresponding properties\x0a\x09\x09\x09\x09// Fall back to attribute presence where some booleans are not supported\x0a\x09\x09\x09\x09var attrNode,\x0a\x09\x09\x09\x09\x09property = jQuery.prop( elem, name );\x0a\x09\x09\x09\x09return property === true || typeof property !== \x22boolean\x22 &&\x0a\x09\x09\x09\x09\x09( attrNode = elem.getAttributeNode(name) ) && attrNode.nodeValue !== false ?\x0a\x0a\x09\x09\x09\x09\x09name.toLowerCase() :\x0a\x09\x09\x09\x09\x09undefined;\x0a\x09\x09\x09},\x0a\x09\x09\x09set: function( elem, value, name ) {\x0a\x09\x09\x09\x09var propName;\x0a\x09\x09\x09\x09if ( value === false ) {\x0a\x09\x09\x09\x09\x09// Remove boolean attributes when set to false\x0a\x09\x09\x09\x09\x09jQuery.removeAttr( elem, name );\x0a\x09\x09\x09\x09} else {\x0a\x09\x09\x09\x09\x09// value is true since we know at this point it\x27s type boolean and not false\x0a\x09\x09\x09\x09\x09// Set boolean attributes to the same name and set the DOM property\x0a\x09\x09\x09\x09\x09propName = jQuery.propFix[ name ] || name;\x0a\x09\x09\x09\x09\x09if ( propName in elem ) {\x0a\x09\x09\x09\x09\x09\x09// Only set the IDL specifically if it already exists on the element\x0a\x09\x09\x09\x09\x09\x09elem[ propName ] = true;\x0a\x09\x09\x09\x09\x09}\x0a\x0a\x09\x09\x09\x09\x09elem.setAttribute( name, name.toLowerCase() );\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09return name;\x0a\x09\x09\x09}\x0a\x09\x09};\x0a\x0a\x09\x09// Warn only for attributes that can remain distinct from their properties post-1.9\x0a\x09\x09if ( ruseDefault.test( lowerName ) ) {\x0a\x09\x09\x09migrateWarn( \x22jQuery.fn.attr(\x27\x22 + lowerName + \x22\x27) might use property instead of attribute\x22 );\x0a\x09\x09}\x0a\x09}\x0a\x0a\x09return oldAttr.call( jQuery, elem, name, value );\x0a};\x0a\x0a// attrHooks: value\x0ajQuery.attrHooks.value = {\x0a\x09get: function( elem, name ) {\x0a\x09\x09var nodeName = ( elem.nodeName || \x22\x22 ).toLowerCase();\x0a\x09\x09if ( nodeName === \x22button\x22 ) {\x0a\x09\x09\x09return valueAttrGet.apply( this, arguments );\x0a\x09\x09}\x0a\x09\x09if ( nodeName !== \x22input\x22 && nodeName !== \x22option\x22 ) {\x0a\x09\x09\x09migrateWarn(\x22jQuery.fn.attr(\x27value\x27) no longer gets properties\x22);\x0a\x09\x09}\x0a\x09\x09return name in elem ?\x0a\x09\x09\x09elem.value :\x0a\x09\x09\x09null;\x0a\x09},\x0a\x09set: function( elem, value ) {\x0a\x09\x09var nodeName = ( elem.nodeName || \x22\x22 ).toLowerCase();\x0a\x09\x09if ( nodeName === \x22button\x22 ) {\x0a\x09\x09\x09return valueAttrSet.apply( this, arguments );\x0a\x09\x09}\x0a\x09\x09if ( nodeName !== \x22input\x22 && nodeName !== \x22option\x22 ) {\x0a\x09\x09\x09migrateWarn(\x22jQuery.fn.attr(\x27value\x27, val) no longer sets properties\x22);\x0a\x09\x09}\x0a\x09\x09// Does not return so that setAttribute is also used\x0a\x09\x09elem.value = value;\x0a\x09}\x0a};\x0a\x0d\x0a\x0avar matched, browser,\x0a\x09oldInit = jQuery.fn.init,\x0a\x09oldFind = jQuery.find,\x0a\x09oldParseJSON = jQuery.parseJSON,\x0a\x09rspaceAngle = /^\x5cs*\x3c/,\x0a\x09rattrHashTest = /\x5c[(\x5cs*[-\x5cw]+\x5cs*)([~|^$*]?=)\x5cs*([-\x5cw#]*?#[-\x5cw#]*)\x5cs*\x5c]/,\x0a\x09rattrHashGlob = /\x5c[(\x5cs*[-\x5cw]+\x5cs*)([~|^$*]?=)\x5cs*([-\x5cw#]*?#[-\x5cw#]*)\x5cs*\x5c]/g,\x0a\x09// Note: XSS check is done below after string is trimmed\x0a\x09rquickExpr = /^([^\x3c]*)(\x3c[\x5cw\x5cW]+\x3e)([^\x3e]*)$/;\x0a\x0a// $(html) \x22looks like html\x22 rule change\x0ajQuery.fn.init = function( selector, context, rootjQuery ) {\x0a\x09var match, ret;\x0a\x0a\x09if ( selector && typeof selector === \x22string\x22 ) {\x0a\x09\x09if ( !jQuery.isPlainObject( context ) &&\x0a\x09\x09\x09\x09(match = rquickExpr.exec( jQuery.trim( selector ) )) && match[ 0 ] ) {\x0a\x0a\x09\x09\x09// This is an HTML string according to the \x22old\x22 rules; is it still?\x0a\x09\x09\x09if ( !rspaceAngle.test( selector ) ) {\x0a\x09\x09\x09\x09migrateWarn(\x22$(html) HTML strings must start with \x27\x3c\x27 character\x22);\x0a\x09\x09\x09}\x0a\x09\x09\x09if ( match[ 3 ] ) {\x0a\x09\x09\x09\x09migrateWarn(\x22$(html) HTML text after last tag is ignored\x22);\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09// Consistently reject any HTML-like string starting with a hash (gh-9521)\x0a\x09\x09\x09// Note that this may break jQuery 1.6.x code that otherwise would work.\x0a\x09\x09\x09if ( match[ 0 ].charAt( 0 ) === \x22#\x22 ) {\x0a\x09\x09\x09\x09migrateWarn(\x22HTML string cannot start with a \x27#\x27 character\x22);\x0a\x09\x09\x09\x09jQuery.error(\x22JQMIGRATE: Invalid selector string (XSS)\x22);\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09// Now process using loose rules; let pre-1.8 play too\x0a\x09\x09\x09// Is this a jQuery context? parseHTML expects a DOM element (#178)\x0a\x09\x09\x09if ( context && context.context && context.context.nodeType ) {\x0a\x09\x09\x09\x09context = context.context;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09if ( jQuery.parseHTML ) {\x0a\x09\x09\x09\x09return oldInit.call( this,\x0a\x09\x09\x09\x09\x09\x09jQuery.parseHTML( match[ 2 ], context && context.ownerDocument ||\x0a\x09\x09\x09\x09\x09\x09\x09context || document, true ), context, rootjQuery );\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09}\x0a\x0a\x09ret = oldInit.apply( this, arguments );\x0a\x0a\x09// Fill in selector and context properties so .live() works\x0a\x09if ( selector && selector.selector !== undefined ) {\x0a\x09\x09// A jQuery object, copy its properties\x0a\x09\x09ret.selector = selector.selector;\x0a\x09\x09ret.context = selector.context;\x0a\x0a\x09} else {\x0a\x09\x09ret.selector = typeof selector === \x22string\x22 ? selector : \x22\x22;\x0a\x09\x09if ( selector ) {\x0a\x09\x09\x09ret.context = selector.nodeType? selector : context || document;\x0a\x09\x09}\x0a\x09}\x0a\x0a\x09return ret;\x0a};\x0ajQuery.fn.init.prototype = jQuery.fn;\x0a\x0ajQuery.find = function( selector ) {\x0a\x09var args = Array.prototype.slice.call( arguments );\x0a\x0a\x09// Support: PhantomJS 1.x\x0a\x09// String#match fails to match when used with a //g RegExp, only on some strings\x0a\x09if ( typeof selector === \x22string\x22 && rattrHashTest.test( selector ) ) {\x0a\x0a\x09\x09// The nonstandard and undocumented unquoted-hash was removed in jQuery 1.12.0\x0a\x09\x09// First see if qS thinks it\x27s a valid selector, if so avoid a false positive\x0a\x09\x09try {\x0a\x09\x09\x09document.querySelector( selector );\x0a\x09\x09} catch ( err1 ) {\x0a\x0a\x09\x09\x09// Didn\x27t *look* valid to qSA, warn and try quoting what we think is the value\x0a\x09\x09\x09selector = selector.replace( rattrHashGlob, function( _, attr, op, value ) {\x0a\x09\x09\x09\x09return \x22[\x22 + attr + op + \x22\x5c\x22\x22 + value + \x22\x5c\x22]\x22;\x0a\x09\x09\x09} );\x0a\x0a\x09\x09\x09// If the regexp *may* have created an invalid selector, don\x27t update it\x0a\x09\x09\x09// Note that there may be false alarms if selector uses jQuery extensions\x0a\x09\x09\x09try {\x0a\x09\x09\x09\x09document.querySelector( selector );\x0a\x09\x09\x09\x09migrateWarn( \x22Attribute selector with \x27#\x27 must be quoted: \x22 + args[ 0 ] );\x0a\x09\x09\x09\x09args[ 0 ] = selector;\x0a\x09\x09\x09} catch ( err2 ) {\x0a\x09\x09\x09\x09migrateWarn( \x22Attribute selector with \x27#\x27 was not fixed: \x22 + args[ 0 ] );\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09}\x0a\x0a\x09return oldFind.apply( this, args );\x0a};\x0a\x0a// Copy properties attached to original jQuery.find method (e.g. .attr, .isXML)\x0avar findProp;\x0afor ( findProp in oldFind ) {\x0a\x09if ( Object.prototype.hasOwnProperty.call( oldFind, findProp ) ) {\x0a\x09\x09jQuery.find[ findProp ] = oldFind[ findProp ];\x0a\x09}\x0a}\x0a\x0a// Let $.parseJSON(falsy_value) return null\x0ajQuery.parseJSON = function( json ) {\x0a\x09if ( !json ) {\x0a\x09\x09migrateWarn(\x22jQuery.parseJSON requires a valid JSON string\x22);\x0a\x09\x09return null;\x0a\x09}\x0a\x09return oldParseJSON.apply( this, arguments );\x0a};\x0a\x0ajQuery.uaMatch = function( ua ) {\x0a\x09ua = ua.toLowerCase();\x0a\x0a\x09var match = /(chrome)[ \x5c/]([\x5cw.]+)/.exec( ua ) ||\x0a\x09\x09/(webkit)[ \x5c/]([\x5cw.]+)/.exec( ua ) ||\x0a\x09\x09/(opera)(?:.*version|)[ \x5c/]([\x5cw.]+)/.exec( ua ) ||\x0a\x09\x09/(msie) ([\x5cw.]+)/.exec( ua ) ||\x0a\x09\x09ua.indexOf(\x22compatible\x22) \x3c 0 && /(mozilla)(?:.*? rv:([\x5cw.]+)|)/.exec( ua ) ||\x0a\x09\x09[];\x0a\x0a\x09return {\x0a\x09\x09browser: match[ 1 ] || \x22\x22,\x0a\x09\x09version: match[ 2 ] || \x220\x22\x0a\x09};\x0a};\x0a\x0a// Don\x27t clobber any existing jQuery.browser in case it\x27s different\x0aif ( !jQuery.browser ) {\x0a\x09matched = jQuery.uaMatch( navigator.userAgent );\x0a\x09browser = {};\x0a\x0a\x09if ( matched.browser ) {\x0a\x09\x09browser[ matched.browser ] = true;\x0a\x09\x09browser.version = matched.version;\x0a\x09}\x0a\x0a\x09// Chrome is Webkit, but Webkit is also Safari.\x0a\x09if ( browser.chrome ) {\x0a\x09\x09browser.webkit = true;\x0a\x09} else if ( browser.webkit ) {\x0a\x09\x09browser.safari = true;\x0a\x09}\x0a\x0a\x09jQuery.browser = browser;\x0a}\x0a\x0a// Warn if the code tries to get jQuery.browser\x0amigrateWarnProp( jQuery, \x22browser\x22, jQuery.browser, \x22jQuery.browser is deprecated\x22 );\x0a\x0a// jQuery.boxModel deprecated in 1.3, jQuery.support.boxModel deprecated in 1.7\x0ajQuery.boxModel = jQuery.support.boxModel = (document.compatMode === \x22CSS1Compat\x22);\x0amigrateWarnProp( jQuery, \x22boxModel\x22, jQuery.boxModel, \x22jQuery.boxModel is deprecated\x22 );\x0amigrateWarnProp( jQuery.support, \x22boxModel\x22, jQuery.support.boxModel, \x22jQuery.support.boxModel is deprecated\x22 );\x0a\x0ajQuery.sub = function() {\x0a\x09function jQuerySub( selector, context ) {\x0a\x09\x09return new jQuerySub.fn.init( selector, context );\x0a\x09}\x0a\x09jQuery.extend( true, jQuerySub, this );\x0a\x09jQuerySub.superclass = this;\x0a\x09jQuerySub.fn = jQuerySub.prototype = this();\x0a\x09jQuerySub.fn.constructor = jQuerySub;\x0a\x09jQuerySub.sub = this.sub;\x0a\x09jQuerySub.fn.init = function init( selector, context ) {\x0a\x09\x09var instance = jQuery.fn.init.call( this, selector, context, rootjQuerySub );\x0a\x09\x09return instance instanceof jQuerySub ?\x0a\x09\x09\x09instance :\x0a\x09\x09\x09jQuerySub( instance );\x0a\x09};\x0a\x09jQuerySub.fn.init.prototype = jQuerySub.fn;\x0a\x09var rootjQuerySub = jQuerySub(document);\x0a\x09migrateWarn( \x22jQuery.sub() is deprecated\x22 );\x0a\x09return jQuerySub;\x0a};\x0a\x0a// The number of elements contained in the matched element set\x0ajQuery.fn.size = function() {\x0a\x09migrateWarn( \x22jQuery.fn.size() is deprecated; use the .length property\x22 );\x0a\x09return this.length;\x0a};\x0a\x0d\x0a\x0avar internalSwapCall = false;\x0a\x0a// If this version of jQuery has .swap(), don\x27t false-alarm on internal uses\x0aif ( jQuery.swap ) {\x0a\x09jQuery.each( [ \x22height\x22, \x22width\x22, \x22reliableMarginRight\x22 ], function( _, name ) {\x0a\x09\x09var oldHook = jQuery.cssHooks[ name ] && jQuery.cssHooks[ name ].get;\x0a\x0a\x09\x09if ( oldHook ) {\x0a\x09\x09\x09jQuery.cssHooks[ name ].get = function() {\x0a\x09\x09\x09\x09var ret;\x0a\x0a\x09\x09\x09\x09internalSwapCall = true;\x0a\x09\x09\x09\x09ret = oldHook.apply( this, arguments );\x0a\x09\x09\x09\x09internalSwapCall = false;\x0a\x09\x09\x09\x09return ret;\x0a\x09\x09\x09};\x0a\x09\x09}\x0a\x09});\x0a}\x0a\x0ajQuery.swap = function( elem, options, callback, args ) {\x0a\x09var ret, name,\x0a\x09\x09old = {};\x0a\x0a\x09if ( !internalSwapCall ) {\x0a\x09\x09migrateWarn( \x22jQuery.swap() is undocumented and deprecated\x22 );\x0a\x09}\x0a\x0a\x09// Remember the old values, and insert the new ones\x0a\x09for ( name in options ) {\x0a\x09\x09old[ name ] = elem.style[ name ];\x0a\x09\x09elem.style[ name ] = options[ name ];\x0a\x09}\x0a\x0a\x09ret = callback.apply( elem, args || [] );\x0a\x0a\x09// Revert the old values\x0a\x09for ( name in options ) {\x0a\x09\x09elem.style[ name ] = old[ name ];\x0a\x09}\x0a\x0a\x09return ret;\x0a};\x0a\x0d\x0a\x0a// Ensure that $.ajax gets the new parseJSON defined in core.js\x0ajQuery.ajaxSetup({\x0a\x09converters: {\x0a\x09\x09\x22text json\x22: jQuery.parseJSON\x0a\x09}\x0a});\x0a\x0d\x0a\x0avar oldFnData = jQuery.fn.data;\x0a\x0ajQuery.fn.data = function( name ) {\x0a\x09var ret, evt,\x0a\x09\x09elem = this[0];\x0a\x0a\x09// Handles 1.7 which has this behavior and 1.8 which doesn\x27t\x0a\x09if ( elem && name === \x22events\x22 && arguments.length === 1 ) {\x0a\x09\x09ret = jQuery.data( elem, name );\x0a\x09\x09evt = jQuery._data( elem, name );\x0a\x09\x09if ( ( ret === undefined || ret === evt ) && evt !== undefined ) {\x0a\x09\x09\x09migrateWarn(\x22Use of jQuery.fn.data(\x27events\x27) is deprecated\x22);\x0a\x09\x09\x09return evt;\x0a\x09\x09}\x0a\x09}\x0a\x09return oldFnData.apply( this, arguments );\x0a};\x0a\x0d\x0a\x0avar rscriptType = /\x5c/(java|ecma)script/i;\x0a\x0a// Since jQuery.clean is used internally on older versions, we only shim if it\x27s missing\x0aif ( !jQuery.clean ) {\x0a\x09jQuery.clean = function( elems, context, fragment, scripts ) {\x0a\x09\x09// Set context per 1.8 logic\x0a\x09\x09context = context || document;\x0a\x09\x09context = !context.nodeType && context[0] || context;\x0a\x09\x09context = context.ownerDocument || context;\x0a\x0a\x09\x09migrateWarn(\x22jQuery.clean() is deprecated\x22);\x0a\x0a\x09\x09var i, elem, handleScript, jsTags,\x0a\x09\x09\x09ret = [];\x0a\x0a\x09\x09jQuery.merge( ret, jQuery.buildFragment( elems, context ).childNodes );\x0a\x0a\x09\x09// Complex logic lifted directly from jQuery 1.8\x0a\x09\x09if ( fragment ) {\x0a\x09\x09\x09// Special handling of each script element\x0a\x09\x09\x09handleScript = function( elem ) {\x0a\x09\x09\x09\x09// Check if we consider it executable\x0a\x09\x09\x09\x09if ( !elem.type || rscriptType.test( elem.type ) ) {\x0a\x09\x09\x09\x09\x09// Detach the script and store it in the scripts array (if provided) or the fragment\x0a\x09\x09\x09\x09\x09// Return truthy to indicate that it has been handled\x0a\x09\x09\x09\x09\x09return scripts ?\x0a\x09\x09\x09\x09\x09\x09scripts.push( elem.parentNode ? elem.parentNode.removeChild( elem ) : elem ) :\x0a\x09\x09\x09\x09\x09\x09fragment.appendChild( elem );\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09};\x0a\x0a\x09\x09\x09for ( i = 0; (elem = ret[i]) != null; i++ ) {\x0a\x09\x09\x09\x09// Check if we\x27re done after handling an executable script\x0a\x09\x09\x09\x09if ( !( jQuery.nodeName( elem, \x22script\x22 ) && handleScript( elem ) ) ) {\x0a\x09\x09\x09\x09\x09// Append to fragment and handle embedded scripts\x0a\x09\x09\x09\x09\x09fragment.appendChild( elem );\x0a\x09\x09\x09\x09\x09if ( typeof elem.getElementsByTagName !== \x22undefined\x22 ) {\x0a\x09\x09\x09\x09\x09\x09// handleScript alters the DOM, so use jQuery.merge to ensure snapshot iteration\x0a\x09\x09\x09\x09\x09\x09jsTags = jQuery.grep( jQuery.merge( [], elem.getElementsByTagName(\x22script\x22) ), handleScript );\x0a\x0a\x09\x09\x09\x09\x09\x09// Splice the scripts into ret after their former ancestor and advance our index beyond them\x0a\x09\x09\x09\x09\x09\x09ret.splice.apply( ret, [i + 1, 0].concat( jsTags ) );\x0a\x09\x09\x09\x09\x09\x09i += jsTags.length;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x0a\x09\x09return ret;\x0a\x09};\x0a}\x0a\x0d\x0avar eventAdd = jQuery.event.add,\x0a\x09eventRemove = jQuery.event.remove,\x0a\x09eventTrigger = jQuery.event.trigger,\x0a\x09oldToggle = jQuery.fn.toggle,\x0a\x09oldLive = jQuery.fn.live,\x0a\x09oldDie = jQuery.fn.die,\x0a\x09oldLoad = jQuery.fn.load,\x0a\x09ajaxEvents = \x22ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess\x22,\x0a\x09rajaxEvent = new RegExp( \x22\x5c\x5cb(?:\x22 + ajaxEvents + \x22)\x5c\x5cb\x22 ),\x0a\x09rhoverHack = /(?:^|\x5cs)hover(\x5c.\x5cS+|)\x5cb/,\x0a\x09hoverHack = function( events ) {\x0a\x09\x09if ( typeof( events ) !== \x22string\x22 || jQuery.event.special.hover ) {\x0a\x09\x09\x09return events;\x0a\x09\x09}\x0a\x09\x09if ( rhoverHack.test( events ) ) {\x0a\x09\x09\x09migrateWarn(\x22\x27hover\x27 pseudo-event is deprecated, use \x27mouseenter mouseleave\x27\x22);\x0a\x09\x09}\x0a\x09\x09return events && events.replace( rhoverHack, \x22mouseenter$1 mouseleave$1\x22 );\x0a\x09};\x0a\x0a// Event props removed in 1.9, put them back if needed; no practical way to warn them\x0aif ( jQuery.event.props && jQuery.event.props[ 0 ] !== \x22attrChange\x22 ) {\x0a\x09jQuery.event.props.unshift( \x22attrChange\x22, \x22attrName\x22, \x22relatedNode\x22, \x22srcElement\x22 );\x0a}\x0a\x0a// Undocumented jQuery.event.handle was \x22deprecated\x22 in jQuery 1.7\x0aif ( jQuery.event.dispatch ) {\x0a\x09migrateWarnProp( jQuery.event, \x22handle\x22, jQuery.event.dispatch, \x22jQuery.event.handle is undocumented and deprecated\x22 );\x0a}\x0a\x0a// Support for \x27hover\x27 pseudo-event and ajax event warnings\x0ajQuery.event.add = function( elem, types, handler, data, selector ){\x0a\x09if ( elem !== document && rajaxEvent.test( types ) ) {\x0a\x09\x09migrateWarn( \x22AJAX events should be attached to document: \x22 + types );\x0a\x09}\x0a\x09eventAdd.call( this, elem, hoverHack( types || \x22\x22 ), handler, data, selector );\x0a};\x0ajQuery.event.remove = function( elem, types, handler, selector, mappedTypes ){\x0a\x09eventRemove.call( this, elem, hoverHack( types ) || \x22\x22, handler, selector, mappedTypes );\x0a};\x0a\x0ajQuery.each( [ \x22load\x22, \x22unload\x22, \x22error\x22 ], function( _, name ) {\x0a\x0a\x09jQuery.fn[ name ] = function() {\x0a\x09\x09var args = Array.prototype.slice.call( arguments, 0 );\x0a\x0a\x09\x09// If this is an ajax load() the first arg should be the string URL;\x0a\x09\x09// technically this could also be the \x22Anything\x22 arg of the event .load()\x0a\x09\x09// which just goes to show why this dumb signature has been deprecated!\x0a\x09\x09// jQuery custom builds that exclude the Ajax module justifiably die here.\x0a\x09\x09if ( name === \x22load\x22 && typeof args[ 0 ] === \x22string\x22 ) {\x0a\x09\x09\x09return oldLoad.apply( this, args );\x0a\x09\x09}\x0a\x0a\x09\x09migrateWarn( \x22jQuery.fn.\x22 + name + \x22() is deprecated\x22 );\x0a\x0a\x09\x09args.splice( 0, 0, name );\x0a\x09\x09if ( arguments.length ) {\x0a\x09\x09\x09return this.bind.apply( this, args );\x0a\x09\x09}\x0a\x0a\x09\x09// Use .triggerHandler here because:\x0a\x09\x09// - load and unload events don\x27t need to bubble, only applied to window or image\x0a\x09\x09// - error event should not bubble to window, although it does pre-1.7\x0a\x09\x09// See http://bugs.jquery.com/ticket/11820\x0a\x09\x09this.triggerHandler.apply( this, args );\x0a\x09\x09return this;\x0a\x09};\x0a\x0a});\x0a\x0ajQuery.fn.toggle = function( fn, fn2 ) {\x0a\x0a\x09// Don\x27t mess with animation or css toggles\x0a\x09if ( !jQuery.isFunction( fn ) || !jQuery.isFunction( fn2 ) ) {\x0a\x09\x09return oldToggle.apply( this, arguments );\x0a\x09}\x0a\x09migrateWarn(\x22jQuery.fn.toggle(handler, handler...) is deprecated\x22);\x0a\x0a\x09// Save reference to arguments for access in closure\x0a\x09var args = arguments,\x0a\x09\x09guid = fn.guid || jQuery.guid++,\x0a\x09\x09i = 0,\x0a\x09\x09toggler = function( event ) {\x0a\x09\x09\x09// Figure out which function to execute\x0a\x09\x09\x09var lastToggle = ( jQuery._data( this, \x22lastToggle\x22 + fn.guid ) || 0 ) % i;\x0a\x09\x09\x09jQuery._data( this, \x22lastToggle\x22 + fn.guid, lastToggle + 1 );\x0a\x0a\x09\x09\x09// Make sure that clicks stop\x0a\x09\x09\x09event.preventDefault();\x0a\x0a\x09\x09\x09// and execute the function\x0a\x09\x09\x09return args[ lastToggle ].apply( this, arguments ) || false;\x0a\x09\x09};\x0a\x0a\x09// link all the functions, so any of them can unbind this click handler\x0a\x09toggler.guid = guid;\x0a\x09while ( i \x3c args.length ) {\x0a\x09\x09args[ i++ ].guid = guid;\x0a\x09}\x0a\x0a\x09return this.click( toggler );\x0a};\x0a\x0ajQuery.fn.live = function( types, data, fn ) {\x0a\x09migrateWarn(\x22jQuery.fn.live() is deprecated\x22);\x0a\x09if ( oldLive ) {\x0a\x09\x09return oldLive.apply( this, arguments );\x0a\x09}\x0a\x09jQuery( this.context ).on( types, this.selector, data, fn );\x0a\x09return this;\x0a};\x0a\x0ajQuery.fn.die = function( types, fn ) {\x0a\x09migrateWarn(\x22jQuery.fn.die() is deprecated\x22);\x0a\x09if ( oldDie ) {\x0a\x09\x09return oldDie.apply( this, arguments );\x0a\x09}\x0a\x09jQuery( this.context ).off( types, this.selector || \x22**\x22, fn );\x0a\x09return this;\x0a};\x0a\x0a// Turn global events into document-triggered events\x0ajQuery.event.trigger = function( event, data, elem, onlyHandlers  ){\x0a\x09if ( !elem && !rajaxEvent.test( event ) ) {\x0a\x09\x09migrateWarn( \x22Global events are undocumented and deprecated\x22 );\x0a\x09}\x0a\x09return eventTrigger.call( this,  event, data, elem || document, onlyHandlers  );\x0a};\x0ajQuery.each( ajaxEvents.split(\x22|\x22),\x0a\x09function( _, name ) {\x0a\x09\x09jQuery.event.special[ name ] = {\x0a\x09\x09\x09setup: function() {\x0a\x09\x09\x09\x09var elem = this;\x0a\x0a\x09\x09\x09\x09// The document needs no shimming; must be !== for oldIE\x0a\x09\x09\x09\x09if ( elem !== document ) {\x0a\x09\x09\x09\x09\x09jQuery.event.add( document, name + \x22.\x22 + jQuery.guid, function() {\x0a\x09\x09\x09\x09\x09\x09jQuery.event.trigger( name, Array.prototype.slice.call( arguments, 1 ), elem, true );\x0a\x09\x09\x09\x09\x09});\x0a\x09\x09\x09\x09\x09jQuery._data( this, name, jQuery.guid++ );\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09return false;\x0a\x09\x09\x09},\x0a\x09\x09\x09teardown: function() {\x0a\x09\x09\x09\x09if ( this !== document ) {\x0a\x09\x09\x09\x09\x09jQuery.event.remove( document, name + \x22.\x22 + jQuery._data( this, name ) );\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09return false;\x0a\x09\x09\x09}\x0a\x09\x09};\x0a\x09}\x0a);\x0a\x0ajQuery.event.special.ready = {\x0a\x09setup: function() {\x0a\x09\x09if ( this === document ) {\x0a\x09\x09\x09migrateWarn( \x22\x27ready\x27 event is deprecated\x22 );\x0a\x09\x09}\x0a\x09}\x0a};\x0a\x0d\x0avar oldSelf = jQuery.fn.andSelf || jQuery.fn.addBack,\x0a\x09oldFnFind = jQuery.fn.find;\x0a\x0ajQuery.fn.andSelf = function() {\x0a\x09migrateWarn(\x22jQuery.fn.andSelf() replaced by jQuery.fn.addBack()\x22);\x0a\x09return oldSelf.apply( this, arguments );\x0a};\x0a\x0ajQuery.fn.find = function( selector ) {\x0a\x09var ret = oldFnFind.apply( this, arguments );\x0a\x09ret.context = this.context;\x0a\x09ret.selector = this.selector ? this.selector + \x22 \x22 + selector : selector;\x0a\x09return ret;\x0a};\x0a\x0d\x0a\x0a// jQuery 1.6 did not support Callbacks, do not warn there\x0aif ( jQuery.Callbacks ) {\x0a\x0a\x09var oldDeferred = jQuery.Deferred,\x0a\x09\x09tuples = [\x0a\x09\x09\x09// action, add listener, callbacks, .then handlers, final state\x0a\x09\x09\x09[ \x22resolve\x22, \x22done\x22, jQuery.Callbacks(\x22once memory\x22),\x0a\x09\x09\x09\x09jQuery.Callbacks(\x22once memory\x22), \x22resolved\x22 ],\x0a\x09\x09\x09[ \x22reject\x22, \x22fail\x22, jQuery.Callbacks(\x22once memory\x22),\x0a\x09\x09\x09\x09jQuery.Callbacks(\x22once memory\x22), \x22rejected\x22 ],\x0a\x09\x09\x09[ \x22notify\x22, \x22progress\x22, jQuery.Callbacks(\x22memory\x22),\x0a\x09\x09\x09\x09jQuery.Callbacks(\x22memory\x22) ]\x0a\x09\x09];\x0a\x0a\x09jQuery.Deferred = function( func ) {\x0a\x09\x09var deferred = oldDeferred(),\x0a\x09\x09\x09promise = deferred.promise();\x0a\x0a\x09\x09deferred.pipe = promise.pipe = function( /* fnDone, fnFail, fnProgress */ ) {\x0a\x09\x09\x09var fns = arguments;\x0a\x0a\x09\x09\x09migrateWarn( \x22deferred.pipe() is deprecated\x22 );\x0a\x0a\x09\x09\x09return jQuery.Deferred(function( newDefer ) {\x0a\x09\x09\x09\x09jQuery.each( tuples, function( i, tuple ) {\x0a\x09\x09\x09\x09\x09var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];\x0a\x09\x09\x09\x09\x09// deferred.done(function() { bind to newDefer or newDefer.resolve })\x0a\x09\x09\x09\x09\x09// deferred.fail(function() { bind to newDefer or newDefer.reject })\x0a\x09\x09\x09\x09\x09// deferred.progress(function() { bind to newDefer or newDefer.notify })\x0a\x09\x09\x09\x09\x09deferred[ tuple[1] ](function() {\x0a\x09\x09\x09\x09\x09\x09var returned = fn && fn.apply( this, arguments );\x0a\x09\x09\x09\x09\x09\x09if ( returned && jQuery.isFunction( returned.promise ) ) {\x0a\x09\x09\x09\x09\x09\x09\x09returned.promise()\x0a\x09\x09\x09\x09\x09\x09\x09\x09.done( newDefer.resolve )\x0a\x09\x09\x09\x09\x09\x09\x09\x09.fail( newDefer.reject )\x0a\x09\x09\x09\x09\x09\x09\x09\x09.progress( newDefer.notify );\x0a\x09\x09\x09\x09\x09\x09} else {\x0a\x09\x09\x09\x09\x09\x09\x09newDefer[ tuple[ 0 ] + \x22With\x22 ](\x0a\x09\x09\x09\x09\x09\x09\x09\x09this === promise ? newDefer.promise() : this,\x0a\x09\x09\x09\x09\x09\x09\x09\x09fn ? [ returned ] : arguments\x0a\x09\x09\x09\x09\x09\x09\x09);\x0a\x09\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09\x09});\x0a\x09\x09\x09\x09});\x0a\x09\x09\x09\x09fns = null;\x0a\x09\x09\x09}).promise();\x0a\x0a\x09\x09};\x0a\x0a\x09\x09deferred.isResolved = function() {\x0a\x09\x09\x09migrateWarn( \x22deferred.isResolved is deprecated\x22 );\x0a\x09\x09\x09return deferred.state() === \x22resolved\x22;\x0a\x09\x09};\x0a\x0a\x09\x09deferred.isRejected = function() {\x0a\x09\x09\x09migrateWarn( \x22deferred.isRejected is deprecated\x22 );\x0a\x09\x09\x09return deferred.state() === \x22rejected\x22;\x0a\x09\x09};\x0a\x0a\x09\x09if ( func ) {\x0a\x09\x09\x09func.call( deferred, deferred );\x0a\x09\x09}\x0a\x0a\x09\x09return deferred;\x0a\x09};\x0a\x0a}\x0d\x0a\x0d\x0a})( jQuery, window );\x0d\x0aselecte\x01.'}