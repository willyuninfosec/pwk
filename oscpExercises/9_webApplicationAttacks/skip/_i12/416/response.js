var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 14:53:10 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 28 Jun 2018 02:30:15 GMT\x0aETag: \x2262c2-56faa82e93bc0-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-5410/5411\x0aContent-Length: 5411\x0aKeep-Alive: timeout=5, max=87\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/**\x0a * @output wp-includes/js/wp-lists.js\x0a */\x0a\x0a/* global ajaxurl, wpAjax */\x0a\x0a/**\x0a * @param {jQuery} $ jQuery object.\x0a */\x0a( function( $ ) {\x0avar functions = {\x0a\x09add:     \x27ajaxAdd\x27,\x0a\x09del:     \x27ajaxDel\x27,\x0a\x09dim:     \x27ajaxDim\x27,\x0a\x09process: \x27process\x27,\x0a\x09recolor: \x27recolor\x27\x0a}, wpList;\x0a\x0a/**\x0a * @namespace\x0a */\x0awpList = {\x0a\x0a\x09/**\x0a\x09 * @member {object}\x0a\x09 */\x0a\x09settings: {\x0a\x0a\x09\x09/**\x0a\x09\x09 * URL for Ajax requests.\x0a\x09\x09 *\x0a\x09\x09 * @member {string}\x0a\x09\x09 */\x0a\x09\x09url: ajaxurl,\x0a\x0a\x09\x09/**\x0a\x09\x09 * The HTTP method to use for Ajax requests.\x0a\x09\x09 *\x0a\x09\x09 * @member {string}\x0a\x09\x09 */\x0a\x09\x09type: \x27POST\x27,\x0a\x0a\x09\x09/**\x0a\x09\x09 * ID of the element the parsed Ajax response will be stored in.\x0a\x09\x09 *\x0a\x09\x09 * @member {string}\x0a\x09\x09 */\x0a\x09\x09response: \x27ajax-response\x27,\x0a\x0a\x09\x09/**\x0a\x09\x09 * The type of list.\x0a\x09\x09 *\x0a\x09\x09 * @member {string}\x0a\x09\x09 */\x0a\x09\x09what: \x27\x27,\x0a\x0a\x09\x09/**\x0a\x09\x09 * CSS class name for alternate styling.\x0a\x09\x09 *\x0a\x09\x09 * @member {string}\x0a\x09\x09 */\x0a\x09\x09alt: \x27alternate\x27,\x0a\x0a\x09\x09/**\x0a\x09\x09 * Offset to start alternate styling from.\x0a\x09\x09 *\x0a\x09\x09 * @member {number}\x0a\x09\x09 */\x0a\x09\x09altOffset: 0,\x0a\x0a\x09\x09/**\x0a\x09\x09 * Color used in animation when adding an element.\x0a\x09\x09 *\x0a\x09\x09 * Can be \x27none\x27 to disable the animation.\x0a\x09\x09 *\x0a\x09\x09 * @member {string}\x0a\x09\x09 */\x0a\x09\x09addColor: \x27#ffff33\x27,\x0a\x0a\x09\x09/**\x0a\x09\x09 * Color used in animation when deleting an element.\x0a\x09\x09 *\x0a\x09\x09 * Can be \x27none\x27 to disable the animation.\x0a\x09\x09 *\x0a\x09\x09 * @member {string}\x0a\x09\x09 */\x0a\x09\x09delColor: \x27#faafaa\x27,\x0a\x0a\x09\x09/**\x0a\x09\x09 * Color used in dim add animation.\x0a\x09\x09 *\x0a\x09\x09 * Can be \x27none\x27 to disable the animation.\x0a\x09\x09 *\x0a\x09\x09 * @member {string}\x0a\x09\x09 */\x0a\x09\x09dimAddColor: \x27#ffff33\x27,\x0a\x0a\x09\x09/**\x0a\x09\x09 * Color used in dim delete animation.\x0a\x09\x09 *\x0a\x09\x09 * Can be \x27none\x27 to disable the animation.\x0a\x09\x09 *\x0a\x09\x09 * @member {string}\x0a\x09\x09 */\x0a\x09\x09dimDelColor: \x27#ff3333\x27,\x0a\x0a\x09\x09/**\x0a\x09\x09 * Callback that\x27s run before a request is made.\x0a\x09\x09 *\x0a\x09\x09 * @callback wpList~confirm\x0a\x09\x09 * @param {object}      this\x0a\x09\x09 * @param {HTMLElement} list            The list DOM element.\x0a\x09\x09 * @param {object}      settings        Settings for the current list.\x0a\x09\x09 * @param {string}      action          The type of action to perform: \x27add\x27, \x27delete\x27, or \x27dim\x27.\x0a\x09\x09 * @param {string}      backgroundColor Background color of the list\x27s DOM element.\x0a\x09\x09 * @returns {boolean} Whether to proceed with the action or not.\x0a\x09\x09 */\x0a\x09\x09confirm: null,\x0a\x0a\x09\x09/**\x0a\x09\x09 * Callback that\x27s run before an item gets added to the list.\x0a\x09\x09 *\x0a\x09\x09 * Allows to cancel the request.\x0a\x09\x09 *\x0a\x09\x09 * @callback wpList~addBefore\x0a\x09\x09 * @param {object} settings Settings for the Ajax request.\x0a\x09\x09 * @returns {object|boolean} Settings for the Ajax request or false to abort.\x0a\x09\x09 */\x0a\x09\x09addBefore: null,\x0a\x0a\x09\x09/**\x0a\x09\x09 * Callback that\x27s run after an item got added to the list.\x0a\x09\x09 *\x0a\x09\x09 * @callback wpList~addAfter\x0a\x09\x09 * @param {XML}    returnedResponse Raw response returned from the server.\x0a\x09\x09 * @param {object} settings         Settings for the Ajax request.\x0a\x09\x09 * @param {jqXHR}  settings.xml     jQuery XMLHttpRequest object.\x0a\x09\x09 * @param {string} settings.status  Status of the request: \x27success\x27, \x27notmodified\x27, \x27nocontent\x27, \x27error\x27,\x0a\x09\x09 *                                  \x27timeout\x27, \x27abort\x27, or \x27parsererror\x27.\x0a\x09\x09 * @param {object} settings.parsed  Parsed response object.\x0a\x09\x09 */\x0a\x09\x09addAfter: null,\x0a\x0a\x09\x09/**\x0a\x09\x09 * Callback that\x27s run before an item gets deleted from the list.\x0a\x09\x09 *\x0a\x09\x09 * Allows to cancel the request.\x0a\x09\x09 *\x0a\x09\x09 * @callback wpList~delBefore\x0a\x09\x09 * @param {object}      settings Settings for the Ajax request.\x0a\x09\x09 * @param {HTMLElement} list     The list DOM element.\x0a\x09\x09 * @returns {object|boolean} Settings for the Ajax request or false to abort.\x0a\x09\x09 */\x0a\x09\x09delBefore: null,\x0a\x0a\x09\x09/**\x0a\x09\x09 * Callback that\x27s run after an item got deleted from the list.\x0a\x09\x09 *\x0a\x09\x09 * @callback wpList~delAfter\x0a\x09\x09 * @param {XML}    returnedResponse Raw response returned from the server.\x0a\x09\x09 * @param {object} settings         Settings for the Ajax request.\x0a\x09\x09 * @param {jqXHR}  settings.xml     jQuery XMLHttpRequest object.\x0a\x09\x09 * @param {string} settings.status  Status of the request: \x27success\x27, \x27notmodified\x27, \x27nocontent\x27, \x27error\x27,\x0a\x09\x09 *                                  \x27timeout\x27, \x27abort\x27, or \x27parsererror\x27.\x0a\x09\x09 * @param {object} settings.parsed  Parsed response object.\x0a\x09\x09 */\x0a\x09\x09delAfter: null,\x0a\x0a\x09\x09/**\x0a\x09\x09 * Callback that\x27s run before an item gets dim\x27d.\x0a\x09\x09 *\x0a\x09\x09 * Allows to cancel the request.\x0a\x09\x09 *\x0a\x09\x09 * @callback wpList~dimBefore\x0a\x09\x09 * @param {object} settings Settings for the Ajax request.\x0a\x09\x09 * @returns {object|boolean} Settings for the Ajax request or false to abort.\x0a\x09\x09 */\x0a\x09\x09dimBefore: null,\x0a\x0a\x09\x09/**\x0a\x09\x09 * Callback that\x27s run after an item got dim\x27d.\x0a\x09\x09 *\x0a\x09\x09 * @callback wpList~dimAfter\x0a\x09\x09 * @param {XML}    returnedResponse Raw response returned from the server.\x0a\x09\x09 * @param {object} settings         Settings for the Ajax request.\x0a\x09\x09 * @param {jqXHR}  settings.xml     jQuery XMLHttpRequest object.\x0a\x09\x09 * @param {string} settings.status  Status of the request: \x27success\x27, \x27notmodified\x27, \x27nocontent\x27, \x27error\x27,\x0a\x09\x09 *                                  \x27timeout\x27, \x27abort\x27, or \x27parsererror\x27.\x0a\x09\x09 * @param {object} settings.parsed  Parsed response object.\x0a\x09\x09 */\x0a\x09\x09dimAfter: null\x0a\x09},\x0a\x0a\x09/**\x0a\x09 * Finds a nonce.\x0a\x09 *\x0a\x09 * 1. Nonce in settings.\x0a\x09 * 2. `_ajax_nonce` value in element\x27s href attribute.\x0a\x09 * 3. `_ajax_nonce` input field that is a descendant of element.\x0a\x09 * 4. `_wpnonce` value in element\x27s href attribute.\x0a\x09 * 5. `_wpnonce` input field that is a descendant of element.\x0a\x09 * 6. 0 if none can be found.\x0a\x09 *\x0a\x09 * @param {jQuery} element  Element that triggered the request.\x0a\x09 * @param {object} settings Settings for the Ajax request.\x0a\x09 * @returns {string|number} Nonce\x0a\x09 */\x0a\x09nonce: function( element, settings ) {\x0a\x09\x09var url      = wpAjax.unserialize( element.attr( \x27href\x27 ) ),\x0a\x09\x09\x09$element = $( \x27#\x27 + settings.element );\x0a\x0a\x09\x09return settings.nonce || url._ajax_nonce || $element.find( \x27input[name=\x22_ajax_nonce\x22]\x27 ).val() || url._wpnonce || $element.find( \x27input[name=\x22_wpnonce\x22]\x27 ).val() || 0;\x0a\x09},\x0a\x0a\x09/**\x0a\x09 * Extract list item data from a DOM element.\x0a\x09 *\x0a\x09 * Example 1: data-wp-lists=\x22delete:the-comment-list:comment-{comment_ID}:66cc66:unspam=1\x22\x0a\x09 * Example 2: data-wp-lists=\x22dim:the-comment-list:comment-{comment_ID}:unapproved:e7e7d3:e7e7d3:new=approved\x22\x0a\x09 *\x0a\x09 * Returns an unassociated array with the following data:\x0a\x09 * data[0] - Data identifier: \x27list\x27, \x27add\x27, \x27delete\x27, or \x27dim\x27.\x0a\x09 * data[1] - ID of the corresponding list. If data[0] is \x27list\x27, the type of list (\x27comment\x27, \x27category\x27, etc).\x0a\x09 * data[2] - ID of the parent element of all inputs necessary for the request.\x0a\x09 * data[3] - Hex color to be used in this request. If data[0] is \x27dim\x27, dim class.\x0a\x09 * data[4] - Additional arguments in query syntax that are added to the request. Example: \x27post_id=1234\x27.\x0a\x09 *           If data[0] is \x27dim\x27, dim add color.\x0a\x09 * data[5] - Only available if data[0] is \x27dim\x27, dim delete color.\x0a\x09 * data[6] - Only available if data[0] is \x27dim\x27, additional arguments in query syntax that are added to the request.\x0a\x09 *\x0a\x09 * Result for Example 1:\x0a\x09 * data[0] - delete\x0a\x09 * data[1] - the-comment-list\x0a\x09 * data[2] - comment-{comment_ID}\x0a\x09 * data[3] - 66cc66\x0a\x09 * data[4] - unspam=1\x0a\x09 *\x0a\x09 * @param  {HTMLElement} element The DOM element.\x0a\x09 * @param  {string}      type    The type of data to look for: \x27list\x27, \x27add\x27, \x27delete\x27, or \x27dim\x27.\x0a\x09 * @returns {Array} Extracted list item data.\x0a\x09 */\x0a\x09parseData: function( element, type ) {\x0a\x09\x09var data = [], wpListsData;\x0a\x0a\x09\x09try {\x0a\x09\x09\x09wpListsData = $( element ).data( \x27wp-lists\x27 ) || \x27\x27;\x0a\x09\x09\x09wpListsData = wpListsData.match( new RegExp( type + \x27:[\x5c\x5cS]+\x27 ) );\x0a\x0a\x09\x09\x09if ( wpListsData ) {\x0a\x09\x09\x09\x09data = wpListsData[0].split( \x27:\x27 );\x0a\x09\x09\x09}\x0a\x09\x09} catch ( error ) {}\x0a\x0a\x09\x09return data;\x0a\x09},\x0a\x0a\x09/**\x0a\x09 * Calls a confirm callback to verify the action that is about to be performed.\x0a\x09 *\x0a\x09 * @param {HTMLElement} list     The DOM element.\x0a\x09 * @param {object}      settings Settings for this list.\x0a\x09 * @param {string}      action   The type of action to perform: \x27add\x27, \x27delete\x27, or \x27dim\x27.\x0a\x09 * @returns {object|boolean} Settings if confirmed, false if not.\x0a\x09 */\x0a\x09pre: function( list, settings, action ) {\x0a\x09\x09var $element, backgroundColor, confirmed;\x0a\x0a\x09\x09settings = $.extend( {}, this.wpList.settings, {\x0a\x09\x09\x09element: null,\x0a\x09\x09\x09nonce:   0,\x0a\x09\x09\x09target:  list.get( 0 )\x0a\x09\x09}, settings || {} );\x0a\x0a\x09\x09if ( $.isFunction( settings.confirm ) ) {\x0a\x09\x09\x09$element = $( \x27#\x27 + settings.element );\x0a\x0a\x09\x09\x09if ( \x27add\x27 !== action ) {\x0a\x09\x09\x09\x09backgroundColor = $element.css( \x27backgroundColor\x27 );\x0a\x09\x09\x09\x09$element.css( \x27backgroundColor\x27, \x27#ff9966\x27 );\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09confirmed = settings.confirm.call( this, list, settings, action, backgroundColor );\x0a\x0a\x09\x09\x09if ( \x27add\x27 !== action ) {\x0a\x09\x09\x09\x09$element.css( \x27backgroundColor\x27, backgroundColor );\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09if ( ! confirmed ) {\x0a\x09\x09\x09\x09return false;\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x0a\x09\x09return settings;\x0a\x09},\x0a\x0a\x09/**\x0a\x09 * Adds an item to the list via AJAX.\x0a\x09 *\x0a\x09 * @param {HTMLElement} element  The DOM element.\x0a\x09 * @param {object}      settings Settings for this list.\x0a\x09 * @returns {boolean} Whether the item was added.\x0a\x09 */\x0a\x09ajaxAdd: function( element, settings ) {\x0a\x09\x09var list     = this,\x0a\x09\x09\x09$element = $( element ),\x0a\x09\x09\x09data     = wpList.parseData( $element, \x27add\x27 ),\x0a\x09\x09\x09formValues, formData, parsedResponse, returnedResponse;\x0a\x0a\x09\x09settings = settings || {};\x0a\x09\x09settings = wpList.pre.call( list, $element, settings, \x27add\x27 );\x0a\x0a\x09\x09settings.element  = data[2] || $element.prop( \x27id\x27 ) || settings.element || null;\x0a\x09\x09settings.addColor = data[3] ? \x27#\x27 + data[3] : settings.addColor;\x0a\x0a\x09\x09if ( ! settings ) {\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x0a\x09\x09if ( ! $element.is( \x27[id=\x22\x27 + settings.element + \x27-submit\x22]\x27 ) ) {\x0a\x09\x09\x09return ! wpList.add.call( list, $element, settings );\x0a\x09\x09}\x0a\x0a\x09\x09if ( ! settings.element ) {\x0a\x09\x09\x09return true;\x0a\x09\x09}\x0a\x0a\x09\x09settings.action = \x27add-\x27 + settings.what;\x0a\x09\x09settings.nonce  = wpList.nonce( $element, settings );\x0a\x0a\x09\x09if ( ! wpAjax.validateForm( \x27#\x27 + settings.element ) ) {\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x0a\x09\x09settings.data = $.param( $.extend( {\x0a\x09\x09\x09_ajax_nonce: settings.nonce,\x0a\x09\x09\x09action:      settings.action\x0a\x09\x09}, wpAjax.unserialize( data[4] || \x27\x27 ) ) );\x0a\x0a\x09\x09formValues = $( \x27#\x27 + settings.element + \x27 :input\x27 ).not( \x27[name=\x22_ajax_nonce\x22], [name=\x22_wpnonce\x22], [name=\x22action\x22]\x27 );\x0a\x09\x09formData   = $.isFunction( formValues.fieldSerialize ) ? formValues.fieldSerialize() : formValues.serialize();\x0a\x0a\x09\x09if ( formData ) {\x0a\x09\x09\x09settings.data += \x27&\x27 + formData;\x0a\x09\x09}\x0a\x0a\x09\x09if ( $.isFunction( settings.addBefore ) ) {\x0a\x09\x09\x09settings = settings.addBefore( settings );\x0a\x0a\x09\x09\x09if ( ! settings ) {\x0a\x09\x09\x09\x09return true;\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x0a\x09\x09if ( ! settings.data.match( /_ajax_nonce=[a-f0-9]+/ ) ) {\x0a\x09\x09\x09return true;\x0a\x09\x09}\x0a\x0a\x09\x09settings.success = function( response ) {\x0a\x09\x09\x09parsedResponse   = wpAjax.parseAjaxResponse( response, settings.response, settings.element );\x0a\x09\x09\x09returnedResponse = response;\x0a\x0a\x09\x09\x09if ( ! parsedResponse || parsedResponse.errors ) {\x0a\x09\x09\x09\x09return false;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09if ( true === parsedResponse ) {\x0a\x09\x09\x09\x09return true;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09$.each( parsedResponse.responses, function() {\x0a\x09\x09\x09\x09wpList.add.call( list, this.data, $.extend( {}, settings, { // this.firstChild.nodevalue\x0a\x09\x09\x09\x09\x09position: this.position || 0,\x0a\x09\x09\x09\x09\x09id:       this.id || 0,\x0a\x09\x09\x09\x09\x09oldId:    this.oldId || null\x0a\x09\x09\x09\x09} ) );\x0a\x09\x09\x09} );\x0a\x0a\x09\x09\x09list.wpList.recolor();\x0a\x09\x09\x09$( list ).trigger( \x27wpListAddEnd\x27, [ settings, list.wpList ] );\x0a\x09\x09\x09wpList.clear.call( list, \x27#\x27 + settings.element );\x0a\x09\x09};\x0a\x0a\x09\x09settings.complete = function( jqXHR, status ) {\x0a\x09\x09\x09if ( $.isFunction( settings.addAfter ) ) {\x0a\x09\x09\x09\x09settings.addAfter( returnedResponse, $.extend( {\x0a\x09\x09\x09\x09\x09xml:    jqXHR,\x0a\x09\x09\x09\x09\x09status: status,\x0a\x09\x09\x09\x09\x09parsed: parsedResponse\x0a\x09\x09\x09\x09}, settings ) );\x0a\x09\x09\x09}\x0a\x09\x09};\x0a\x0a\x09\x09$.ajax( settings );\x0a\x0a\x09\x09return false;\x0a\x09},\x0a\x0a\x09/**\x0a\x09 * Delete an item in the list via AJAX.\x0a\x09 *\x0a\x09 * @param {HTMLElement} element  A DOM element containing item data.\x0a\x09 * @param {object}      settings Settings for this list.\x0a\x09 * @returns {boolean} Whether the item was deleted.\x0a\x09 */\x0a\x09ajaxDel: function( element, settings ) {\x0a\x09\x09var list     = this,\x0a\x09\x09\x09$element = $( element ),\x0a\x09\x09\x09data     = wpList.parseData( $element, \x27delete\x27 ),\x0a\x09\x09\x09$eventTarget, parsedResponse, returnedResponse;\x0a\x0a\x09\x09settings = settings || {};\x0a\x09\x09settings = wpList.pre.call( list, $element, settings, \x27delete\x27 );\x0a\x0a\x09\x09settings.element  = data[2] || settings.element || null;\x0a\x09\x09settings.delColor = data[3] ? \x27#\x27 + data[3] : settings.delColor;\x0a\x0a\x09\x09if ( ! settings || ! settings.element ) {\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x0a\x09\x09settings.action = \x27delete-\x27 + settings.what;\x0a\x09\x09settings.nonce  = wpList.nonce( $element, settings );\x0a\x0a\x09\x09settings.data = $.extend( {\x0a\x09\x09\x09_ajax_nonce: settings.nonce,\x0a\x09\x09\x09action:      settings.action,\x0a\x09\x09\x09id:          settings.element.split( \x27-\x27 ).pop()\x0a\x09\x09}, wpAjax.unserialize( data[4] || \x27\x27 ) );\x0a\x0a\x09\x09if ( $.isFunction( settings.delBefore ) ) {\x0a\x09\x09\x09settings = settings.delBefore( settings, list );\x0a\x0a\x09\x09\x09if ( ! settings ) {\x0a\x09\x09\x09\x09return true;\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x0a\x09\x09if ( ! settings.data._ajax_nonce ) {\x0a\x09\x09\x09return true;\x0a\x09\x09}\x0a\x0a\x09\x09$eventTarget = $( \x27#\x27 + settings.element );\x0a\x0a\x09\x09if ( \x27none\x27 !== settings.delColor ) {\x0a\x09\x09\x09$eventTarget.css( \x27backgroundColor\x27, settings.delColor ).fadeOut( 350, function() {\x0a\x09\x09\x09\x09list.wpList.recolor();\x0a\x09\x09\x09\x09$( list ).trigger( \x27wpListDelEnd\x27, [ settings, list.wpList ] );\x0a\x09\x09\x09} );\x0a\x09\x09} else {\x0a\x09\x09\x09list.wpList.recolor();\x0a\x09\x09\x09$( list ).trigger( \x27wpListDelEnd\x27, [ settings, list.wpList ] );\x0a\x09\x09}\x0a\x0a\x09\x09settings.success = function( response ) {\x0a\x09\x09\x09parsedResponse   = wpAjax.parseAjaxResponse( response, settings.response, settings.element );\x0a\x09\x09\x09returnedResponse = response;\x0a\x0a\x09\x09\x09if ( ! parsedResponse || parsedResponse.errors ) {\x0a\x09\x09\x09\x09$eventTarget.stop().stop().css( \x27backgroundColor\x27, \x27#faa\x27 ).show().queue( function() {\x0a\x09\x09\x09\x09\x09list.wpList.recolor();\x0a\x09\x09\x09\x09\x09$( this ).dequeue();\x0a\x09\x09\x09\x09} );\x0a\x0a\x09\x09\x09\x09return false;\x0a\x09\x09\x09}\x0a\x09\x09};\x0a\x0a\x09\x09settings.complete = function( jqXHR, status ) {\x0a\x09\x09\x09if ( $.isFunction( settings.delAfter ) ) {\x0a\x09\x09\x09\x09$eventTarget.queue( function() {\x0a\x09\x09\x09\x09\x09settings.delAfter( returnedResponse, $.extend( {\x0a\x09\x09\x09\x09\x09\x09xml:    jqXHR,\x0a\x09\x09\x09\x09\x09\x09status: status,\x0a\x09\x09\x09\x09\x09\x09parsed: parsedResponse\x0a\x09\x09\x09\x09\x09}, settings ) );\x0a\x09\x09\x09\x09} ).dequeue();\x0a\x09\x09\x09}\x0a\x09\x09};\x0a\x0a\x09\x09$.ajax( settings );\x0a\x0a\x09\x09return false;\x0a\x09},\x0a\x0a\x09/**\x0a\x09 * Dim an item in the list via AJAX.\x0a\x09 *\x0a\x09 * @param {HTMLElement} element  A DOM element containing item data.\x0a\x09 * @param {object}      settings Settings for this list.\x0a\x09 * @returns {boolean} Whether the item was dim\x27ed.\x0a\x09 */\x0a\x09ajaxDim: function( element, settings ) {\x0a\x09\x09var list     = this,\x0a\x09\x09\x09$element = $( element ),\x0a\x09\x09\x09data     = wpList.parseData( $element, \x27dim\x27 ),\x0a\x09\x09\x09$eventTarget, isClass, color, dimColor, parsedResponse, returnedResponse;\x0a\x0a\x09\x09// Prevent hidden links from being clicked by hotkeys.\x0a\x09\x09if ( \x27none\x27 === $element.parent().css( \x27display\x27 ) ) {\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x0a\x09\x09settings = settings || {};\x0a\x09\x09settings = wpList.pre.call( list, $element, settings, \x27dim\x27 );\x0a\x0a\x09\x09settings.element     = data[2] || settings.element || null;\x0a\x09\x09settings.dimClass    = data[3] || settings.dimClass || null;\x0a\x09\x09settings.dimAddColor = data[4] ? \x27#\x27 + data[4] : settings.dimAddColor;\x0a\x09\x09settings.dimDelColor = data[5] ? \x27#\x27 + data[5] : settings.dimDelColor;\x0a\x0a\x09\x09if ( ! settings || ! settings.element || ! settings.dimClass ) {\x0a\x09\x09\x09return true;\x0a\x09\x09}\x0a\x0a\x09\x09settings.action = \x27dim-\x27 + settings.what;\x0a\x09\x09settings.nonce  = wpList.nonce( $element, settings );\x0a\x0a\x09\x09settings.data = $.extend( {\x0a\x09\x09\x09_ajax_nonce: settings.nonce,\x0a\x09\x09\x09action:      settings.action,\x0a\x09\x09\x09id:          settings.element.split( \x27-\x27 ).pop(),\x0a\x09\x09\x09dimClass:    settings.dimClass\x0a\x09\x09}, wpAjax.unserialize( data[6] || \x27\x27 ) );\x0a\x0a\x09\x09if ( $.isFunction( settings.dimBefore ) ) {\x0a\x09\x09\x09settings = settings.dimBefore( settings );\x0a\x0a\x09\x09\x09if ( ! settings ) {\x0a\x09\x09\x09\x09return true;\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x0a\x09\x09$eventTarget = $( \x27#\x27 + settings.element );\x0a\x09\x09isClass      = $eventTarget.toggleClass( settings.dimClass ).is( \x27.\x27 + settings.dimClass );\x0a\x09\x09color        = wpList.getColor( $eventTarget );\x0a\x09\x09dimColor     = isClass ? settings.dimAddColor : settings.dimDelColor;\x0a\x09\x09$eventTarget.toggleClass( settings.dimClass );\x0a\x0a\x09\x09if ( \x27none\x27 !== dimColor ) {\x0a\x09\x09\x09$eventTarget\x0a\x09\x09\x09\x09.animate( { backgroundColor: dimColor }, \x27fast\x27 )\x0a\x09\x09\x09\x09.queue( function() {\x0a\x09\x09\x09\x09\x09$eventTarget.toggleClass( settings.dimClass );\x0a\x09\x09\x09\x09\x09$( this ).dequeue();\x0a\x09\x09\x09\x09} )\x0a\x09\x09\x09\x09.animate( { backgroundColor: color }, {\x0a\x09\x09\x09\x09\x09complete: function() {\x0a\x09\x09\x09\x09\x09\x09$( this ).css( \x27backgroundColor\x27, \x27\x27 );\x0a\x09\x09\x09\x09\x09\x09$( list ).trigger( \x27wpListDimEnd\x27, [ settings, list.wpList ] );\x0a\x09\x09\x09\x09\x09}\x0a\x09\x09\x09\x09} );\x0a\x09\x09} else {\x0a\x09\x09\x09$( list ).trigger( \x27wpListDimEnd\x27, [ settings, list.wpList ] );\x0a\x09\x09}\x0a\x0a\x09\x09if ( ! settings.data._ajax_nonce ) {\x0a\x09\x09\x09return true;\x0a\x09\x09}\x0a\x0a\x09\x09settings.success = function( response ) {\x0a\x09\x09\x09parsedResponse   = wpAjax.parseAjaxResponse( response, settings.response, settings.element );\x0a\x09\x09\x09returnedResponse = response;\x0a\x0a\x09\x09\x09if ( true === parsedResponse ) {\x0a\x09\x09\x09\x09return true;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09if ( ! parsedResponse || parsedResponse.errors ) {\x0a\x09\x09\x09\x09$eventTarget.stop().stop().css( \x27backgroundColor\x27, \x27#ff3333\x27 )[isClass ? \x27removeClass\x27 : \x27addClass\x27]( settings.dimClass ).show().queue( function() {\x0a\x09\x09\x09\x09\x09list.wpList.recolor();\x0a\x09\x09\x09\x09\x09$( this ).dequeue();\x0a\x09\x09\x09\x09} );\x0a\x0a\x09\x09\x09\x09return false;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09/** @property {string} comment_link Link of the comment to be dimmed. */\x0a\x09\x09\x09if ( \x27undefined\x27 !== typeof parsedResponse.responses[0].supplemental.comment_link ) {\x0a\x09\x09\x09\x09var $submittedOn = $element.find( \x27.submitted-on\x27 ),\x0a\x09\x09\x09\x09\x09$commentLink = $submittedOn.find( \x27a\x27 );\x0a\x0a\x09\x09\x09\x09// Comment is approved; link the date field.\x0a\x09\x09\x09\x09if ( \x27\x27 !== parsedResponse.responses[0].supplemental.comment_link ) {\x0a\x09\x09\x09\x09\x09$submittedOn.html( $(\x27\x3ca\x3e\x3c/a\x3e\x27).text( $submittedOn.text() ).prop( \x27href\x27, parsedResponse.responses[0].supplemental.comment_link ) );\x0a\x0a\x09\x09\x09\x09// Comment is not approved; unlink the date field.\x0a\x09\x09\x09\x09} else if ( $commentLink.length ) {\x0a\x09\x09\x09\x09\x09$submittedOn.text( $commentLink.text() );\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x09\x09};\x0a\x0a\x09\x09settings.complete = function( jqXHR, status ) {\x0a\x09\x09\x09if ( $.isFunction( settings.dimAfter ) ) {\x0a\x09\x09\x09\x09$eventTarget.queue( function() {\x0a\x09\x09\x09\x09\x09settings.dimAfter( returnedResponse, $.extend( {\x0a\x09\x09\x09\x09\x09\x09xml:    jqXHR,\x0a\x09\x09\x09\x09\x09\x09status: status,\x0a\x09\x09\x09\x09\x09\x09parsed: parsedResponse\x0a\x09\x09\x09\x09\x09}, settings ) );\x0a\x09\x09\x09\x09} ).dequeue();\x0a\x09\x09\x09}\x0a\x09\x09};\x0a\x0a\x09\x09$.ajax( settings );\x0a\x0a\x09\x09return false;\x0a\x09},\x0a\x0a\x09/**\x0a\x09 * Returns the background color of the passed element.\x0a\x09 *\x0a\x09 * @param {jQuery|string} element Element to check.\x0a\x09 * @returns {string} Background color value in HEX. Default: \x27#ffffff\x27.\x0a\x09 */\x0a\x09getColor: function( element ) {\x0a\x09\x09return $( element ).css( \x27backgroundColor\x27 ) || \x27#ffffff\x27;\x0a\x09},\x0a\x0a\x09/**\x0a\x09 * Adds something.\x0a\x09 *\x0a\x09 * @param {HTMLElement} element  A DOM element containing item data.\x0a\x09 * @param {object}      settings Settings for this list.\x0a\x09 * @returns {boolean} Whether the item was added.\x0a\x09 */\x0a\x09add: function( element, settings ) {\x0a\x09\x09var $list    = $( this ),\x0a\x09\x09\x09$element = $( element ),\x0a\x09\x09\x09old      = false,\x0a\x09\x09\x09position, reference;\x0a\x0a\x09\x09if ( \x27string\x27 === typeof settings ) {\x0a\x09\x09\x09settings = { what: settings };\x0a\x09\x09}\x0a\x0a\x09\x09settings = $.extend( { position: 0, id: 0, oldId: null }, this.wpList.settings, settings );\x0a\x0a\x09\x09if ( ! $element.length || ! settings.what ) {\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x0a\x09\x09if ( settings.oldId ) {\x0a\x09\x09\x09old = $( \x27#\x27 + settings.what + \x27-\x27 + settings.oldId );\x0a\x09\x09}\x0a\x0a\x09\x09if ( settings.id && ( settings.id !== settings.oldId || ! old || ! old.length ) ) {\x0a\x09\x09\x09$( \x27#\x27 + settings.what + \x27-\x27 + settings.id ).remove();\x0a\x09\x09}\x0a\x0a\x09\x09if ( old && old.length ) {\x0a\x09\x09\x09old.before( $element );\x0a\x09\x09\x09old.remove();\x0a\x0a\x09\x09} else if ( isNaN( settings.position ) ) {\x0a\x09\x09\x09position = \x27after\x27;\x0a\x0a\x09\x09\x09if ( \x27-\x27 === settings.position.substr( 0, 1 ) ) {\x0a\x09\x09\x09\x09settings.position = settings.position.substr( 1 );\x0a\x09\x09\x09\x09position = \x27before\x27;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09reference = $list.find( \x27#\x27 + settings.position );\x0a\x0a\x09\x09\x09if ( 1 === reference.length ) {\x0a\x09\x09\x09\x09reference[position]( $element );\x0a\x09\x09\x09} else {\x0a\x09\x09\x09\x09$list.append( $element );\x0a\x09\x09\x09}\x0a\x0a\x09\x09} else if ( \x27comment\x27 !== settings.what || 0 === $( \x27#\x27 + settings.element ).length ) {\x0a\x09\x09\x09if ( settings.position \x3c 0 ) {\x0a\x09\x09\x09\x09$list.prepend( $element );\x0a\x09\x09\x09} else {\x0a\x09\x09\x09\x09$list.append( $element );\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x0a\x09\x09if ( settings.alt ) {\x0a\x09\x09\x09$element.toggleClass( settings.alt, ( $list.children( \x27:visible\x27 ).index( $element[0] ) + settings.altOffset ) % 2 );\x0a\x09\x09}\x0a\x0a\x09\x09if ( \x27none\x27 !== settings.addColor ) {\x0a\x09\x09\x09$element.css( \x27backgroundColor\x27, settings.addColor ).animate( { backgroundColor: wpList.getColor( $element ) }, {\x0a\x09\x09\x09\x09complete: function() {\x0a\x09\x09\x09\x09\x09$( this ).css( \x27backgroundColor\x27, \x27\x27 );\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09} );\x0a\x09\x09}\x0a\x0a\x09\x09// Add event handlers.\x0a\x09\x09$list.each( function( index, list ) {\x0a\x09\x09\x09list.wpList.process( $element );\x0a\x09\x09} );\x0a\x0a\x09\x09return $element;\x0a\x09},\x0a\x0a\x09/**\x0a\x09 * Clears all input fields within the element passed.\x0a\x09 *\x0a\x09 * @param {string} elementId ID of the element to check, including leading #.\x0a\x09 */\x0a\x09clear: function( elementId ) {\x0a\x09\x09var list     = this,\x0a\x09\x09\x09$element = $( elementId ),\x0a\x09\x09\x09type, tagName;\x0a\x0a\x09\x09// Bail if we\x27re within the list.\x0a\x09\x09if ( list.wpList && $element.parents( \x27#\x27 + list.id ).length ) {\x0a\x09\x09\x09return;\x0a\x09\x09}\x0a\x0a\x09\x09// Check each input field.\x0a\x09\x09$element.find( \x27:input\x27 ).each( function( index, input ) {\x0a\x0a\x09\x09\x09// Bail if the form was marked to not to be cleared.\x0a\x09\x09\x09if ( $( input ).parents( \x27.form-no-clear\x27 ).length ) {\x0a\x09\x09\x09\x09return;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09type    = input.type.toLowerCase();\x0a\x09\x09\x09tagName = input.tagName.toLowerCase();\x0a\x0a\x09\x09\x09if ( \x27text\x27 === type || \x27password\x27 === type || \x27textarea\x27 === tagName ) {\x0a\x09\x09\x09\x09input.value = \x27\x27;\x0a\x0a\x09\x09\x09} else if ( \x27checkbox\x27 === type || \x27radio\x27 === type ) {\x0a\x09\x09\x09\x09input.checked = false;\x0a\x0a\x09\x09\x09} else if ( \x27select\x27 === tagName ) {\x0a\x09\x09\x09\x09input.selectedIndex = null;\x0a\x09\x09\x09}\x0a\x09\x09} );\x0a\x09},\x0a\x0a\x09/**\x0a\x09 * Registers event handlers to add, delete, and dim items.\x0a\x09 *\x0a\x09 * @param {string} elementId\x0a\x09 */\x0a\x09process: function( elementId ) {\x0a\x09\x09var list     = this,\x0a\x09\x09\x09$element = $( elementId || document );\x0a\x0a\x09\x09$element.on( \x27submit\x27, \x27form[data-wp-lists^=\x22add:\x27 + list.id + \x27:\x22]\x27, function() {\x0a\x09\x09\x09return list.wpList.add( this );\x0a\x09\x09} );\x0a\x0a\x09\x09$element.on( \x27click\x27, \x27a[data-wp-lists^=\x22add:\x27 + list.id + \x27:\x22], input[data-wp-lists^=\x22add:\x27 + list.id + \x27:\x22]\x27, function() {\x0a\x09\x09\x09return list.wpList.add( this );\x0a\x09\x09} );\x0a\x0a\x09\x09$element.on( \x27click\x27, \x27[data-wp-lists^=\x22delete:\x27 + list.id + \x27:\x22]\x27, function() {\x0a\x09\x09\x09return list.wpList.del( this );\x0a\x09\x09} );\x0a\x0a\x09\x09$element.on( \x27click\x27, \x27[data-wp-lists^=\x22dim:\x27 + list.id + \x27:\x22]\x27, function() {\x0a\x09\x09\x09return list.wpList.dim( this );\x0a\x09\x09} );\x0a\x09},\x0a\x0a\x09/**\x0a\x09 * Updates list item background colors.\x0a\x09 */\x0a\x09recolor: function() {\x0a\x09\x09var list    = this,\x0a\x09\x09\x09evenOdd = [\x27:even\x27, \x27:odd\x27],\x0a\x09\x09\x09items;\x0a\x0a\x09\x09// Bail if there is no alternate class name specified.\x0a\x09\x09if ( ! list.wpList.settings.alt ) {\x0a\x09\x09\x09return;\x0a\x09\x09}\x0a\x0a\x09\x09items = $( \x27.list-item:visible\x27, list );\x0a\x0a\x09\x09if ( ! items.length ) {\x0a\x09\x09\x09items = $( list ).children( \x27:visible\x27 );\x0a\x09\x09}\x0a\x0a\x09\x09if ( list.wpList.settings.altOffset % 2 ) {\x0a\x09\x09\x09evenOdd.reverse();\x0a\x09\x09}\x0a\x0a\x09\x09items.filter( evenOdd[0] ).addClass( list.wpList.settings.alt ).end();\x0a\x09\x09items.filter( evenOdd[1] ).removeClass( list.wpList.settings.alt );\x0a\x09},\x0a\x0a\x09/**\x0a\x09 * Sets up `process()` and `recolor()` functions.\x0a\x09 */\x0a\x09init: function() {\x0a\x09\x09var $list = this;\x0a\x0a\x09\x09$list.wpList.process = function( element ) {\x0a\x09\x09\x09$list.each( function() {\x0a\x09\x09\x09\x09this.wpList.process( element );\x0a\x09\x09\x09} );\x0a\x09\x09};\x0a\x0a\x09\x09$list.wpList.recolor = function() {\x0a\x09\x09\x09$list.each( function() {\x0a\x09\x09\x09\x09this.wpList.recolor();\x0a\x09\x09\x09} );\x0a\x09\x09};\x0a\x09}\x0a};\x0a\x0a/**\x0a * Initializes wpList object.\x0a *\x0a * @param {Object}           settings\x0a * @param {string}           settings.url         URL for ajax calls. Default: ajaxurl.\x0a * @param {string}           settings.type        The HTTP method to use for Ajax requests. Default: \x27POST\x27.\x0a * @param {string}           settings.response    ID of the element the parsed ajax response will be stored in.\x0a *                                                Default: \x27ajax-response\x27.\x0a *\x0a * @param {string}           settings.what        Default: \x27\x27.\x0a * @param {string}           settings.alt         CSS class name for alternate styling. Default: \x27alternate\x27.\x0a * @param {number}           settings.altOffset   Offset to start alternate styling from. Default: 0.\x0a * @param {string}           settings.addColor    Hex code or \x27none\x27 to disable animation. Default: \x27#ffff33\x27.\x0a * @param {string}           settings.delColor    Hex code or \x27none\x27 to disable animation. Default: \x27#faafaa\x27.\x0a * @param {string}           settings.dimAddColor Hex code or \x27none\x27 to disable animation. Default: \x27#ffff33\x27.\x0a * @param {string}           settings.dimDelColor Hex code or \x27none\x27 to disable animation. Default: \x27#ff3333\x27.\x0a *\x0a * @param {wpList~confirm}   settings.confirm     Callback that\x27s run before a request is made. Default: null.\x0a * @param {wpList~addBefore} settings.addBefore   Callback that\x27s run before an item gets added to the list.\x0a *                                                Default: null.\x0a * @param {wpList~addAfter}  settings.addAfter    Callback that\x27s run after an item got added to the list.\x0a *                                                Default: null.\x0a * @param {wpList~delBefore} settings.delBefore   Callback that\x27s run before an item gets deleted from the list.\x0a *                                                Default: null.\x0a * @param {wpList~delAfter}  settings.delAfter    Callback that\x27s run after an item got deleted from the list.\x0a *                                                Default: null.\x0a * @param {wpList~dimBefore} settings.dimBefore   Callback that\x27s run before an item gets dim\x27d. Default: null.\x0a * @param {wpList~dimAfter}  settings.dimAfter    Callback that\x27s run after an item got dim\x27d. Default: null.\x0a * @returns {$.fn} wpList API function.\x0a */\x0a$.fn.wpList = function( settings ) {\x0a\x09this.each( function( index, list ) {\x0a\x09\x09list.wpList = {\x0a\x09\x09\x09settings: $.extend( {}, wpList.settings, { what: wpList.parseData( list, \x27list\x27 )[1] || \x27\x27 }, settings )\x0a\x09\x09};\x0a\x0a\x09\x09$.each( functions, function( func, callback ) {\x0a\x09\x09\x09list.wpList[func] = function( element, setting ) {\x0a\x09\x09\x09\x09return wpList[callback].call( list, element, setting );\x0a\x09\x09\x09};\x0a\x09\x09} );\x0a\x09} );\x0a\x0a\x09wpList.init.call( this );\x0a\x09this.wpList.process();\x0a\x0a\x09return this;\x0a};\x0a} ) ( jQuery );\x0a1'}