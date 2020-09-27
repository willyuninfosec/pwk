var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:12:01 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 28 Jun 2018 02:30:15 GMT\x0aETag: \x221edc-56faa82e93bc0-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-2691/2692\x0aContent-Length: 2692\x0aKeep-Alive: timeout=5, max=96\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/**\x0a * @output wp-includes/js/customize-loader.js\x0a */\x0a\x0a/* global _wpCustomizeLoaderSettings */\x0a\x0a/**\x0a * Expose a public API that allows the customizer to be\x0a * loaded on any page.\x0a *\x0a * @namespace wp\x0a */\x0awindow.wp = window.wp || {};\x0a\x0a(function( exports, $ ){\x0a\x09var api = wp.customize,\x0a\x09\x09Loader;\x0a\x0a\x09$.extend( $.support, {\x0a\x09\x09history: !! ( window.history && history.pushState ),\x0a\x09\x09hashchange: (\x27onhashchange\x27 in window) && (document.documentMode === undefined || document.documentMode \x3e 7)\x0a\x09});\x0a\x0a\x09/**\x0a\x09 * Allows the Customizer to be overlayed on any page.\x0a\x09 *\x0a\x09 * By default, any element in the body with the load-customize class will open\x0a\x09 * an iframe overlay with the URL specified.\x0a\x09 *\x0a\x09 *     e.g. \x3ca class=\x22load-customize\x22 href=\x22\x3c?php echo wp_customize_url(); ?\x3e\x22\x3eOpen Customizer\x3c/a\x3e\x0a\x09 *\x0a\x09 * @memberOf wp.customize\x0a\x09 *\x0a\x09 * @class\x0a\x09 * @augments wp.customize.Events\x0a\x09 */\x0a\x09Loader = $.extend( {}, api.Events,/** @lends wp.customize.Loader.prototype */{\x0a\x09\x09/**\x0a\x09\x09 * Setup the Loader; triggered on document#ready.\x0a\x09\x09 */\x0a\x09\x09initialize: function() {\x0a\x09\x09\x09this.body = $( document.body );\x0a\x0a\x09\x09\x09// Ensure the loader is supported.\x0a\x09\x09\x09// Check for settings, postMessage support, and whether we require CORS support.\x0a\x09\x09\x09if ( ! Loader.settings || ! $.support.postMessage || ( ! $.support.cors && Loader.settings.isCrossDomain ) ) {\x0a\x09\x09\x09\x09return;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09this.window  = $( window );\x0a\x09\x09\x09this.element = $( \x27\x3cdiv id=\x22customize-container\x22 /\x3e\x27 ).appendTo( this.body );\x0a\x0a\x09\x09\x09// Bind events for opening and closing the overlay.\x0a\x09\x09\x09this.bind( \x27open\x27, this.overlay.show );\x0a\x09\x09\x09this.bind( \x27close\x27, this.overlay.hide );\x0a\x0a\x09\x09\x09// Any element in the body with the `load-customize` class opens\x0a\x09\x09\x09// the Customizer.\x0a\x09\x09\x09$(\x27#wpbody\x27).on( \x27click\x27, \x27.load-customize\x27, function( event ) {\x0a\x09\x09\x09\x09event.preventDefault();\x0a\x0a\x09\x09\x09\x09// Store a reference to the link that opened the Customizer.\x0a\x09\x09\x09\x09Loader.link = $(this);\x0a\x09\x09\x09\x09// Load the theme.\x0a\x09\x09\x09\x09Loader.open( Loader.link.attr(\x27href\x27) );\x0a\x09\x09\x09});\x0a\x0a\x09\x09\x09// Add navigation listeners.\x0a\x09\x09\x09if ( $.support.history ) {\x0a\x09\x09\x09\x09this.window.on( \x27popstate\x27, Loader.popstate );\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09if ( $.support.hashchange ) {\x0a\x09\x09\x09\x09this.window.on( \x27hashchange\x27, Loader.hashchange );\x0a\x09\x09\x09\x09this.window.triggerHandler( \x27hashchange\x27 );\x0a\x09\x09\x09}\x0a\x09\x09},\x0a\x0a\x09\x09popstate: function( e ) {\x0a\x09\x09\x09var state = e.originalEvent.state;\x0a\x09\x09\x09if ( state && state.customize ) {\x0a\x09\x09\x09\x09Loader.open( state.customize );\x0a\x09\x09\x09} else if ( Loader.active ) {\x0a\x09\x09\x09\x09Loader.close();\x0a\x09\x09\x09}\x0a\x09\x09},\x0a\x0a\x09\x09hashchange: function() {\x0a\x09\x09\x09var hash = window.location.toString().split(\x27#\x27)[1];\x0a\x0a\x09\x09\x09if ( hash && 0 === hash.indexOf( \x27wp_customize=on\x27 ) ) {\x0a\x09\x09\x09\x09Loader.open( Loader.settings.url + \x27?\x27 + hash );\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09if ( ! hash && ! $.support.history ) {\x0a\x09\x09\x09\x09Loader.close();\x0a\x09\x09\x09}\x0a\x09\x09},\x0a\x0a\x09\x09beforeunload: function () {\x0a\x09\x09\x09if ( ! Loader.saved() ) {\x0a\x09\x09\x09\x09return Loader.settings.l10n.saveAlert;\x0a\x09\x09\x09}\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Open the Customizer overlay for a specific URL.\x0a\x09\x09 *\x0a\x09\x09 * @param  string src URL to load in the Customizer.\x0a\x09\x09 */\x0a\x09\x09open: function( src ) {\x0a\x0a\x09\x09\x09if ( this.active ) {\x0a\x09\x09\x09\x09return;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09// Load the full page on mobile devices.\x0a\x09\x09\x09if ( Loader.settings.browser.mobile ) {\x0a\x09\x09\x09\x09return window.location = src;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09// Store the document title prior to opening the Live Preview\x0a\x09\x09\x09this.originalDocumentTitle = document.title;\x0a\x0a\x09\x09\x09this.active = true;\x0a\x09\x09\x09this.body.addClass(\x27customize-loading\x27);\x0a\x0a\x09\x09\x09/*\x0a\x09\x09\x09 * Track the dirtiness state (whether the drafted changes have been published)\x0a\x09\x09\x09 * of the Customizer in the iframe. This is used to decide whether to display\x0a\x09\x09\x09 * an AYS alert if the user tries to close the window before saving changes.\x0a\x09\x09\x09 */\x0a\x09\x09\x09this.saved = new api.Value( true );\x0a\x0a\x09\x09\x09this.iframe = $( \x27\x3ciframe /\x3e\x27, { \x27src\x27: src, \x27title\x27: Loader.settings.l10n.mainIframeTitle } ).appendTo( this.element );\x0a\x09\x09\x09this.iframe.one( \x27load\x27, this.loaded );\x0a\x0a\x09\x09\x09// Create a postMessage connection with the iframe.\x0a\x09\x09\x09this.messenger = new api.Messenger({\x0a\x09\x09\x09\x09url: src,\x0a\x09\x09\x09\x09channel: \x27loader\x27,\x0a\x09\x09\x09\x09targetWindow: this.iframe[0].contentWindow\x0a\x09\x09\x09});\x0a\x0a\x09\x09\x09// Expose the changeset UUID on the parent window\x27s URL so that the customized state can survive a refresh.\x0a\x09\x09\x09if ( history.replaceState ) {\x0a\x09\x09\x09\x09this.messenger.bind( \x27changeset-uuid\x27, function( changesetUuid ) {\x0a\x09\x09\x09\x09\x09var urlParser = document.createElement( \x27a\x27 );\x0a\x09\x09\x09\x09\x09urlParser.href = location.href;\x0a\x09\x09\x09\x09\x09urlParser.search = $.param( _.extend(\x0a\x09\x09\x09\x09\x09\x09api.utils.parseQueryString( urlParser.search.substr( 1 ) ),\x0a\x09\x09\x09\x09\x09\x09{ changeset_uuid: changesetUuid }\x0a\x09\x09\x09\x09\x09) );\x0a\x09\x09\x09\x09\x09history.replaceState( { customize: urlParser.href }, \x27\x27, urlParser.href );\x0a\x09\x09\x09\x09} );\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09// Wait for the connection from the iframe before sending any postMessage events.\x0a\x09\x09\x09this.messenger.bind( \x27ready\x27, function() {\x0a\x09\x09\x09\x09Loader.messenger.send( \x27back\x27 );\x0a\x09\x09\x09});\x0a\x0a\x09\x09\x09this.messenger.bind( \x27close\x27, function() {\x0a\x09\x09\x09\x09if ( $.support.history ) {\x0a\x09\x09\x09\x09\x09history.back();\x0a\x09\x09\x09\x09} else if ( $.support.hashchange ) {\x0a\x09\x09\x09\x09\x09window.location.hash = \x27\x27;\x0a\x09\x09\x09\x09} else {\x0a\x09\x09\x09\x09\x09Loader.close();\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09});\x0a\x0a\x09\x09\x09// Prompt AYS dialog when navigating away\x0a\x09\x09\x09$( window ).on( \x27beforeunload\x27, this.beforeunload );\x0a\x0a\x09\x09\x09this.messenger.bind( \x27saved\x27, function () {\x0a\x09\x09\x09\x09Loader.saved( true );\x0a\x09\x09\x09} );\x0a\x09\x09\x09this.messenger.bind( \x27change\x27, function () {\x0a\x09\x09\x09\x09Loader.saved( false );\x0a\x09\x09\x09} );\x0a\x0a\x09\x09\x09this.messenger.bind( \x27title\x27, function( newTitle ){\x0a\x09\x09\x09\x09window.document.title = newTitle;\x0a\x09\x09\x09});\x0a\x0a\x09\x09\x09this.pushState( src );\x0a\x0a\x09\x09\x09this.trigger( \x27open\x27 );\x0a\x09\x09},\x0a\x0a\x09\x09pushState: function ( src ) {\x0a\x09\x09\x09var hash = src.split( \x27?\x27 )[1];\x0a\x0a\x09\x09\x09// Ensure we don\x27t call pushState if the user hit the forward button.\x0a\x09\x09\x09if ( $.support.history && window.location.href !== src ) {\x0a\x09\x09\x09\x09history.pushState( { customize: src }, \x27\x27, src );\x0a\x09\x09\x09} else if ( ! $.support.history && $.support.hashchange && hash ) {\x0a\x09\x09\x09\x09window.location.hash = \x27wp_customize=on&\x27 + hash;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09this.trigger( \x27open\x27 );\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Callback after the Customizer has been opened.\x0a\x09\x09 */\x0a\x09\x09opened: function() {\x0a\x09\x09\x09Loader.body.addClass( \x27customize-active full-overlay-active\x27 ).attr( \x27aria-busy\x27, \x27true\x27 );\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Close the Customizer overlay.\x0a\x09\x09 */\x0a\x09\x09close: function() {\x0a\x09\x09\x09var self = this, onConfirmClose;\x0a\x09\x09\x09if ( ! self.active ) {\x0a\x09\x09\x09\x09return;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09onConfirmClose = function( confirmed ) {\x0a\x09\x09\x09\x09if ( confirmed ) {\x0a\x09\x09\x09\x09\x09self.active = false;\x0a\x09\x09\x09\x09\x09self.trigger( \x27close\x27 );\x0a\x0a\x09\x09\x09\x09\x09// Restore document title prior to opening the Live Preview\x0a\x09\x09\x09\x09\x09if ( self.originalDocumentTitle ) {\x0a\x09\x09\x09\x09\x09\x09document.title = self.originalDocumentTitle;\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09} else {\x0a\x0a\x09\x09\x09\x09\x09// Go forward since Customizer is exited by history.back()\x0a\x09\x09\x09\x09\x09history.forward();\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09\x09self.messenger.unbind( \x27confirmed-close\x27, onConfirmClose );\x0a\x09\x09\x09};\x0a\x09\x09\x09self.messenger.bind( \x27confirmed-close\x27, onConfirmClose );\x0a\x0a\x09\x09\x09Loader.messenger.send( \x27confirm-close\x27 );\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Callback after the Customizer has been closed.\x0a\x09\x09 */\x0a\x09\x09closed: function() {\x0a\x09\x09\x09Loader.iframe.remove();\x0a\x09\x09\x09Loader.messenger.destroy();\x0a\x09\x09\x09Loader.iframe    = null;\x0a\x09\x09\x09Loader.messenger = null;\x0a\x09\x09\x09Loader.saved     = null;\x0a\x09\x09\x09Loader.body.removeClass( \x27customize-active full-overlay-active\x27 ).removeClass( \x27customize-loading\x27 );\x0a\x09\x09\x09$( window ).off( \x27beforeunload\x27, Loader.beforeunload );\x0a\x09\x09\x09/*\x0a\x09\x09\x09 * Return focus to the link that opened the Customizer overlay after\x0a\x09\x09\x09 * the body element visibility is restored.\x0a\x09\x09\x09 */\x0a\x09\x09\x09if ( Loader.link ) {\x0a\x09\x09\x09\x09Loader.link.focus();\x0a\x09\x09\x09}\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Callback for the `load` event on the Customizer iframe.\x0a\x09\x09 */\x0a\x09\x09loaded: function() {\x0a\x09\x09\x09Loader.body.removeClass( \x27customize-loading\x27 ).attr( \x27aria-busy\x27, \x27false\x27 );\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Overlay hide/show utility methods.\x0a\x09\x09 */\x0a\x09\x09overlay: {\x0a\x09\x09\x09show: function() {\x0a\x09\x09\x09\x09this.element.fadeIn( 200, Loader.opened );\x0a\x09\x09\x09},\x0a\x0a\x09\x09\x09hide: function() {\x0a\x09\x09\x09\x09this.element.fadeOut( 200, Loader.closed );\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09});\x0a\x0a\x09// Bootstrap the Loader on document#ready.\x0a\x09$( function() {\x0a\x09\x09Loader.settings = _wpCustomizeLoaderSettings;\x0a\x09\x09Loader.initialize();\x0a\x09});\x0a\x0a\x09// Expose the API publicly on window.wp.customize.Loader\x0a\x09api.Loader = Loader;\x0a})( wp, jQuery );\x0a'}