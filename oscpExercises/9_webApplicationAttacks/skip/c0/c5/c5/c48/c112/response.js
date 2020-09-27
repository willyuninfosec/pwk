var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 14:53:10 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 28 Jun 2018 02:30:15 GMT\x0aETag: \x222845-56faa82e93bc0-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-3045/3046\x0aContent-Length: 3046\x0aKeep-Alive: timeout=5, max=13\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/**\x0a * @output wp-includes/js/wp-pointer.js\x0a */\x0a\x0a/* global wpPointerL10n */\x0a\x0a/**\x0a * Initializes the wp-pointer widget using jQuery UI Widget Factory.\x0a */\x0a(function($){\x0a\x09var identifier = 0,\x0a\x09\x09zindex = 9999;\x0a\x0a\x09$.widget(\x27wp.pointer\x27,/** @lends $.widget.wp.pointer.prototype */{\x0a\x09\x09options: {\x0a\x09\x09\x09pointerClass: \x27wp-pointer\x27,\x0a\x09\x09\x09pointerWidth: 320,\x0a\x09\x09\x09content: function() {\x0a\x09\x09\x09\x09return $(this).text();\x0a\x09\x09\x09},\x0a\x09\x09\x09buttons: function( event, t ) {\x0a\x09\x09\x09\x09var close  = ( wpPointerL10n ) ? wpPointerL10n.dismiss : \x27Dismiss\x27,\x0a\x09\x09\x09\x09\x09button = $(\x27\x3ca class=\x22close\x22 href=\x22#\x22\x3e\x27 + close + \x27\x3c/a\x3e\x27);\x0a\x0a\x09\x09\x09\x09return button.bind( \x27click.pointer\x27, function(e) {\x0a\x09\x09\x09\x09\x09e.preventDefault();\x0a\x09\x09\x09\x09\x09t.element.pointer(\x27close\x27);\x0a\x09\x09\x09\x09});\x0a\x09\x09\x09},\x0a\x09\x09\x09position: \x27top\x27,\x0a\x09\x09\x09show: function( event, t ) {\x0a\x09\x09\x09\x09t.pointer.show();\x0a\x09\x09\x09\x09t.opened();\x0a\x09\x09\x09},\x0a\x09\x09\x09hide: function( event, t ) {\x0a\x09\x09\x09\x09t.pointer.hide();\x0a\x09\x09\x09\x09t.closed();\x0a\x09\x09\x09},\x0a\x09\x09\x09document: document\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * A class that represents a WordPress pointer.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.3.0\x0a\x09\x09 * @private\x0a\x09\x09 *\x0a\x09\x09 * @constructs $.widget.wp.pointer\x0a\x09\x09 */\x0a\x09\x09_create: function() {\x0a\x09\x09\x09var positioning,\x0a\x09\x09\x09\x09family;\x0a\x0a\x09\x09\x09this.content = $(\x27\x3cdiv class=\x22wp-pointer-content\x22\x3e\x3c/div\x3e\x27);\x0a\x09\x09\x09this.arrow   = $(\x27\x3cdiv class=\x22wp-pointer-arrow\x22\x3e\x3cdiv class=\x22wp-pointer-arrow-inner\x22\x3e\x3c/div\x3e\x3c/div\x3e\x27);\x0a\x0a\x09\x09\x09family = this.element.parents().add( this.element );\x0a\x09\x09\x09positioning = \x27absolute\x27;\x0a\x0a\x09\x09\x09if ( family.filter(function(){ return \x27fixed\x27 === $(this).css(\x27position\x27); }).length )\x0a\x09\x09\x09\x09positioning = \x27fixed\x27;\x0a\x0a\x09\x09\x09this.pointer = $(\x27\x3cdiv /\x3e\x27)\x0a\x09\x09\x09\x09.append( this.content )\x0a\x09\x09\x09\x09.append( this.arrow )\x0a\x09\x09\x09\x09.attr(\x27id\x27, \x27wp-pointer-\x27 + identifier++)\x0a\x09\x09\x09\x09.addClass( this.options.pointerClass )\x0a\x09\x09\x09\x09.css({\x27position\x27: positioning, \x27width\x27: this.options.pointerWidth+\x27px\x27, \x27display\x27: \x27none\x27})\x0a\x09\x09\x09\x09.appendTo( this.options.document.body );\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Sets an option on the pointer instance.\x0a\x09\x09 *\x0a\x09\x09 * There are 4 special values that do something extra:\x0a\x09\x09 *\x0a\x09\x09 * - `document`     will transfer the pointer to the body of the new document\x0a\x09\x09 *                  specified by the value.\x0a\x09\x09 * - `pointerClass` will change the class of the pointer element.\x0a\x09\x09 * - `position`     will reposition the pointer.\x0a\x09\x09 * - `content`      will update the content of the pointer.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.3.0\x0a\x09\x09 * @private\x0a\x09\x09 *\x0a\x09\x09 * @param {string} key   The key of the option to set.\x0a\x09\x09 * @param {*}      value The value to set the option to.\x0a\x09\x09 */\x0a\x09\x09_setOption: function( key, value ) {\x0a\x09\x09\x09var o   = this.options,\x0a\x09\x09\x09\x09tip = this.pointer;\x0a\x0a\x09\x09\x09// Handle document transfer\x0a\x09\x09\x09if ( key === \x27document\x27 && value !== o.document ) {\x0a\x09\x09\x09\x09tip.detach().appendTo( value.body );\x0a\x0a\x09\x09\x09// Handle class change\x0a\x09\x09\x09} else if ( key === \x27pointerClass\x27 ) {\x0a\x09\x09\x09\x09tip.removeClass( o.pointerClass ).addClass( value );\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09// Call super method.\x0a\x09\x09\x09$.Widget.prototype._setOption.apply( this, arguments );\x0a\x0a\x09\x09\x09// Reposition automatically\x0a\x09\x09\x09if ( key === \x27position\x27 ) {\x0a\x09\x09\x09\x09this.reposition();\x0a\x0a\x09\x09\x09// Update content automatically if pointer is open\x0a\x09\x09\x09} else if ( key === \x27content\x27 && this.active ) {\x0a\x09\x09\x09\x09this.update();\x0a\x09\x09\x09}\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Removes the pointer element from of the DOM.\x0a\x09\x09 *\x0a\x09\x09 * Makes sure that the widget and all associated bindings are destroyed.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.3.0\x0a\x09\x09 */\x0a\x09\x09destroy: function() {\x0a\x09\x09\x09this.pointer.remove();\x0a\x09\x09\x09$.Widget.prototype.destroy.call( this );\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Returns the pointer element.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.3.0\x0a\x09\x09 *\x0a\x09\x09 * @return {Object} Pointer The pointer object.\x0a\x09\x09 */\x0a\x09\x09widget: function() {\x0a\x09\x09\x09return this.pointer;\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Updates the content of the pointer.\x0a\x09\x09 *\x0a\x09\x09 * This function doesn\x27t update the content of the pointer itself. That is done\x0a\x09\x09 * by the `_update` method. This method will make sure that the `_update` method\x0a\x09\x09 * is called with the right content.\x0a\x09\x09 *\x0a\x09\x09 * The content in the options can either be a string or a callback. If it is a\x0a\x09\x09 * callback the result of this callback is used as the content.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.3.0\x0a\x09\x09 *\x0a\x09\x09 * @param {Object} event The event that caused the update.\x0a\x09\x09 *\x0a\x09\x09 * @return {Promise} Resolves when the update has been executed.\x0a\x09\x09 */\x0a\x09\x09update: function( event ) {\x0a\x09\x09\x09var self = this,\x0a\x09\x09\x09\x09o    = this.options,\x0a\x09\x09\x09\x09dfd  = $.Deferred(),\x0a\x09\x09\x09\x09content;\x0a\x0a\x09\x09\x09if ( o.disabled )\x0a\x09\x09\x09\x09return;\x0a\x0a\x09\x09\x09dfd.done( function( content ) {\x0a\x09\x09\x09\x09self._update( event, content );\x0a\x09\x09\x09});\x0a\x0a\x09\x09\x09// Either o.content is a string...\x0a\x09\x09\x09if ( typeof o.content === \x27string\x27 ) {\x0a\x09\x09\x09\x09content = o.content;\x0a\x0a\x09\x09\x09// ...or o.content is a callback.\x0a\x09\x09\x09} else {\x0a\x09\x09\x09\x09content = o.content.call( this.element[0], dfd.resolve, event, this._handoff() );\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09// If content is set, then complete the update.\x0a\x09\x09\x09if ( content )\x0a\x09\x09\x09\x09dfd.resolve( content );\x0a\x0a\x09\x09\x09return dfd.promise();\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Updates the content of the pointer.\x0a\x09\x09 *\x0a\x09\x09 * Will make sure that the pointer is correctly positioned.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.3.0\x0a\x09\x09 * @private\x0a\x09\x09 *\x0a\x09\x09 * @param {Object} event   The event that caused the update.\x0a\x09\x09 * @param {*}      content The content object. Either a string or a jQuery tree.\x0a\x09\x09 */\x0a\x09\x09_update: function( event, content ) {\x0a\x09\x09\x09var buttons,\x0a\x09\x09\x09\x09o = this.options;\x0a\x0a\x09\x09\x09if ( ! content )\x0a\x09\x09\x09\x09return;\x0a\x0a\x09\x09\x09// Kill any animations on the pointer.\x0a\x09\x09\x09this.pointer.stop();\x0a\x09\x09\x09this.content.html( content );\x0a\x0a\x09\x09\x09buttons = o.buttons.call( this.element[0], event, this._handoff() );\x0a\x09\x09\x09if ( buttons ) {\x0a\x09\x09\x09\x09buttons.wrap(\x27\x3cdiv class=\x22wp-pointer-buttons\x22 /\x3e\x27).parent().appendTo( this.content );\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09this.reposition();\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Repositions the pointer.\x0a\x09\x09 *\x0a\x09\x09 * Makes sure the pointer is the correct size for its content and makes sure it\x0a\x09\x09 * is positioned to point to the right element.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.3.0\x0a\x09\x09 */\x0a\x09\x09reposition: function() {\x0a\x09\x09\x09var position;\x0a\x0a\x09\x09\x09if ( this.options.disabled )\x0a\x09\x09\x09\x09return;\x0a\x0a\x09\x09\x09position = this._processPosition( this.options.position );\x0a\x0a\x09\x09\x09// Reposition pointer.\x0a\x09\x09\x09this.pointer.css({\x0a\x09\x09\x09\x09top: 0,\x0a\x09\x09\x09\x09left: 0,\x0a\x09\x09\x09\x09zIndex: zindex++ // Increment the z-index so that it shows above other opened pointers.\x0a\x09\x09\x09}).show().position($.extend({\x0a\x09\x09\x09\x09of: this.element,\x0a\x09\x09\x09\x09collision: \x27fit none\x27\x0a\x09\x09\x09}, position )); // the object comes before this.options.position so the user can override position.of.\x0a\x0a\x09\x09\x09this.repoint();\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Sets the arrow of the pointer to the correct side of the pointer element.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.3.0\x0a\x09\x09 */\x0a\x09\x09repoint: function() {\x0a\x09\x09\x09var o = this.options,\x0a\x09\x09\x09\x09edge;\x0a\x0a\x09\x09\x09if ( o.disabled )\x0a\x09\x09\x09\x09return;\x0a\x0a\x09\x09\x09edge = ( typeof o.position == \x27string\x27 ) ? o.position : o.position.edge;\x0a\x0a\x09\x09\x09// Remove arrow classes.\x0a\x09\x09\x09this.pointer[0].className = this.pointer[0].className.replace( /wp-pointer-[^\x5cs\x27\x22]*/, \x27\x27 );\x0a\x0a\x09\x09\x09// Add arrow class.\x0a\x09\x09\x09this.pointer.addClass( \x27wp-pointer-\x27 + edge );\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Calculates the correct position based on a position in the settings.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.3.0\x0a\x09\x09 * @private\x0a\x09\x09 *\x0a\x09\x09 * @param {string|Object} position Either a side of a pointer or an object\x0a\x09\x09 *                                 containing a pointer.\x0a\x09\x09 *\x0a\x09\x09 * @return {Object} result  An object containing position related data.\x0a\x09\x09 */\x0a\x09\x09_processPosition: function( position ) {\x0a\x09\x09\x09var opposite = {\x0a\x09\x09\x09\x09\x09top: \x27bottom\x27,\x0a\x09\x09\x09\x09\x09bottom: \x27top\x27,\x0a\x09\x09\x09\x09\x09left: \x27right\x27,\x0a\x09\x09\x09\x09\x09right: \x27left\x27\x0a\x09\x09\x09\x09},\x0a\x09\x09\x09\x09result;\x0a\x0a\x09\x09\x09// If the position object is a string, it is shorthand for position.edge.\x0a\x09\x09\x09if ( typeof position == \x27string\x27 ) {\x0a\x09\x09\x09\x09result = {\x0a\x09\x09\x09\x09\x09edge: position + \x27\x27\x0a\x09\x09\x09\x09};\x0a\x09\x09\x09} else {\x0a\x09\x09\x09\x09result = $.extend( {}, position );\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09if ( ! result.edge )\x0a\x09\x09\x09\x09return result;\x0a\x0a\x09\x09\x09if ( result.edge == \x27top\x27 || result.edge == \x27bottom\x27 ) {\x0a\x09\x09\x09\x09result.align = result.align || \x27left\x27;\x0a\x0a\x09\x09\x09\x09result.at = result.at || result.align + \x27 \x27 + opposite[ result.edge ];\x0a\x09\x09\x09\x09result.my = result.my || result.align + \x27 \x27 + result.edge;\x0a\x09\x09\x09} else {\x0a\x09\x09\x09\x09result.align = result.align || \x27top\x27;\x0a\x0a\x09\x09\x09\x09result.at = result.at || opposite[ result.edge ] + \x27 \x27 + result.align;\x0a\x09\x09\x09\x09result.my = result.my || result.edge + \x27 \x27 + result.align;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09return result;\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Opens the pointer.\x0a\x09\x09 *\x0a\x09\x09 * Only opens the pointer widget in case it is closed and not disabled, and\x0a\x09\x09 * calls \x27update\x27 before doing so. Calling update makes sure that the pointer\x0a\x09\x09 * is correctly sized and positioned.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.3.0\x0a\x09\x09 *\x0a\x09\x09 * @param {Object} event The event that triggered the opening of this pointer.\x0a\x09\x09 */\x0a\x09\x09open: function( event ) {\x0a\x09\x09\x09var self = this,\x0a\x09\x09\x09\x09o    = this.options;\x0a\x0a\x09\x09\x09if ( this.active || o.disabled || this.element.is(\x27:hidden\x27) )\x0a\x09\x09\x09\x09return;\x0a\x0a\x09\x09\x09this.update().done( function() {\x0a\x09\x09\x09\x09self._open( event );\x0a\x09\x09\x09});\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Opens and shows the pointer element.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.3.0\x0a\x09\x09 * @private\x0a\x09\x09 *\x0a\x09\x09 * @param {Object} event An event object.\x0a\x09\x09 */\x0a\x09\x09_open: function( event ) {\x0a\x09\x09\x09var self = this,\x0a\x09\x09\x09\x09o    = this.options;\x0a\x0a\x09\x09\x09if ( this.active || o.disabled || this.element.is(\x27:hidden\x27) )\x0a\x09\x09\x09\x09return;\x0a\x0a\x09\x09\x09this.active = true;\x0a\x0a\x09\x09\x09this._trigger( \x27open\x27, event, this._handoff() );\x0a\x0a\x09\x09\x09this._trigger( \x27show\x27, event, this._handoff({\x0a\x09\x09\x09\x09opened: function() {\x0a\x09\x09\x09\x09\x09self._trigger( \x27opened\x27, event, self._handoff() );\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}));\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Closes and hides the pointer element.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.3.0\x0a\x09\x09 *\x0a\x09\x09 * @param {Object} event An event object.\x0a\x09\x09 */\x0a\x09\x09close: function( event ) {\x0a\x09\x09\x09if ( !this.active || this.options.disabled )\x0a\x09\x09\x09\x09return;\x0a\x0a\x09\x09\x09var self = this;\x0a\x09\x09\x09this.active = false;\x0a\x0a\x09\x09\x09this._trigger( \x27close\x27, event, this._handoff() );\x0a\x09\x09\x09this._trigger( \x27hide\x27, event, this._handoff({\x0a\x09\x09\x09\x09closed: function() {\x0a\x09\x09\x09\x09\x09self._trigger( \x27closed\x27, event, self._handoff() );\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}));\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Puts the pointer on top by increasing the z-index.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.3.0\x0a\x09\x09 */\x0a\x09\x09sendToTop: function() {\x0a\x09\x09\x09if ( this.active )\x0a\x09\x09\x09\x09this.pointer.css( \x27z-index\x27, zindex++ );\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Toggles the element between shown and hidden.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.3.0\x0a\x09\x09 *\x0a\x09\x09 * @param {Object} event An event object.\x0a\x09\x09 */\x0a\x09\x09toggle: function( event ) {\x0a\x09\x09\x09if ( this.pointer.is(\x27:hidden\x27) )\x0a\x09\x09\x09\x09this.open( event );\x0a\x09\x09\x09else\x0a\x09\x09\x09\x09this.close( event );\x0a\x09\x09},\x0a\x0a\x09\x09/**\x0a\x09\x09 * Extends the pointer and the widget element with the supplied parameter, which\x0a\x09\x09 * is either an element or a function.\x0a\x09\x09 *\x0a\x09\x09 * @since 3.3.0\x0a\x09\x09 * @private\x0a\x09\x09 *\x0a\x09\x09 * @param {Object} extend The object to be merged into the original object.\x0a\x09\x09 *\x0a\x09\x09 * @return {Object} The extended object.\x0a\x09\x09 */\x0a\x09\x09_handoff: function( extend ) {\x0a\x09\x09\x09return $.extend({\x0a\x09\x09\x09\x09pointer: this.pointer,\x0a\x09\x09\x09\x09element: this.element\x0a\x09\x09\x09}, extend);\x0a\x09\x09}\x0a\x09});\x0a})(jQuery);\x0a'}