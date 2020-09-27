var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:12:01 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 28 Jun 2018 02:30:15 GMT\x0aETag: \x221aa0-56faa82e93bc0-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-1961/1962\x0aContent-Length: 1962\x0aKeep-Alive: timeout=5, max=14\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/**\x0a * @output wp-includes/js/customize-models.js\x0a */\x0a\x0a/* global _wpCustomizeHeader */\x0a(function( $, wp ) {\x0a\x09var api = wp.customize;\x0a\x09/** @namespace wp.customize.HeaderTool */\x0a\x09api.HeaderTool = {};\x0a\x0a\x0a\x09/**\x0a\x09 * wp.customize.HeaderTool.ImageModel\x0a\x09 *\x0a\x09 * A header image. This is where saves via the Customizer API are\x0a\x09 * abstracted away, plus our own AJAX calls to add images to and remove\x0a\x09 * images from the user\x27s recently uploaded images setting on the server.\x0a\x09 * These calls are made regardless of whether the user actually saves new\x0a\x09 * Customizer settings.\x0a\x09 *\x0a\x09 * @memberOf wp.customize.HeaderTool\x0a\x09 * @alias wp.customize.HeaderTool.ImageModel\x0a\x09 *\x0a\x09 * @constructor\x0a\x09 * @augments Backbone.Model\x0a\x09 */\x0a\x09api.HeaderTool.ImageModel = Backbone.Model.extend(/** @lends wp.customize.HeaderTool.ImageModel.prototype */{\x0a\x09\x09defaults: function() {\x0a\x09\x09\x09return {\x0a\x09\x09\x09\x09header: {\x0a\x09\x09\x09\x09\x09attachment_id: 0,\x0a\x09\x09\x09\x09\x09url: \x27\x27,\x0a\x09\x09\x09\x09\x09timestamp: _.now(),\x0a\x09\x09\x09\x09\x09thumbnail_url: \x27\x27\x0a\x09\x09\x09\x09},\x0a\x09\x09\x09\x09choice: \x27\x27,\x0a\x09\x09\x09\x09selected: false,\x0a\x09\x09\x09\x09random: false\x0a\x09\x09\x09};\x0a\x09\x09},\x0a\x0a\x09\x09initialize: function() {\x0a\x09\x09\x09this.on(\x27hide\x27, this.hide, this);\x0a\x09\x09},\x0a\x0a\x09\x09hide: function() {\x0a\x09\x09\x09this.set(\x27choice\x27, \x27\x27);\x0a\x09\x09\x09api(\x27header_image\x27).set(\x27remove-header\x27);\x0a\x09\x09\x09api(\x27header_image_data\x27).set(\x27remove-header\x27);\x0a\x09\x09},\x0a\x0a\x09\x09destroy: function() {\x0a\x09\x09\x09var data = this.get(\x27header\x27),\x0a\x09\x09\x09\x09curr = api.HeaderTool.currentHeader.get(\x27header\x27).attachment_id;\x0a\x0a\x09\x09\x09// If the image we\x27re removing is also the current header, unset\x0a\x09\x09\x09// the latter\x0a\x09\x09\x09if (curr && data.attachment_id === curr) {\x0a\x09\x09\x09\x09api.HeaderTool.currentHeader.trigger(\x27hide\x27);\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09wp.ajax.post( \x27custom-header-remove\x27, {\x0a\x09\x09\x09\x09nonce: _wpCustomizeHeader.nonces.remove,\x0a\x09\x09\x09\x09wp_customize: \x27on\x27,\x0a\x09\x09\x09\x09theme: api.settings.theme.stylesheet,\x0a\x09\x09\x09\x09attachment_id: data.attachment_id\x0a\x09\x09\x09});\x0a\x0a\x09\x09\x09this.trigger(\x27destroy\x27, this, this.collection);\x0a\x09\x09},\x0a\x0a\x09\x09save: function() {\x0a\x09\x09\x09if (this.get(\x27random\x27)) {\x0a\x09\x09\x09\x09api(\x27header_image\x27).set(this.get(\x27header\x27).random);\x0a\x09\x09\x09\x09api(\x27header_image_data\x27).set(this.get(\x27header\x27).random);\x0a\x09\x09\x09} else {\x0a\x09\x09\x09\x09if (this.get(\x27header\x27).defaultName) {\x0a\x09\x09\x09\x09\x09api(\x27header_image\x27).set(this.get(\x27header\x27).url);\x0a\x09\x09\x09\x09\x09api(\x27header_image_data\x27).set(this.get(\x27header\x27).defaultName);\x0a\x09\x09\x09\x09} else {\x0a\x09\x09\x09\x09\x09api(\x27header_image\x27).set(this.get(\x27header\x27).url);\x0a\x09\x09\x09\x09\x09api(\x27header_image_data\x27).set(this.get(\x27header\x27));\x0a\x09\x09\x09\x09}\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09api.HeaderTool.combinedList.trigger(\x27control:setImage\x27, this);\x0a\x09\x09},\x0a\x0a\x09\x09importImage: function() {\x0a\x09\x09\x09var data = this.get(\x27header\x27);\x0a\x09\x09\x09if (data.attachment_id === undefined) {\x0a\x09\x09\x09\x09return;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09wp.ajax.post( \x27custom-header-add\x27, {\x0a\x09\x09\x09\x09nonce: _wpCustomizeHeader.nonces.add,\x0a\x09\x09\x09\x09wp_customize: \x27on\x27,\x0a\x09\x09\x09\x09theme: api.settings.theme.stylesheet,\x0a\x09\x09\x09\x09attachment_id: data.attachment_id\x0a\x09\x09\x09} );\x0a\x09\x09},\x0a\x0a\x09\x09shouldBeCropped: function() {\x0a\x09\x09\x09if (this.get(\x27themeFlexWidth\x27) === true &&\x0a\x09\x09\x09\x09\x09\x09this.get(\x27themeFlexHeight\x27) === true) {\x0a\x09\x09\x09\x09return false;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09if (this.get(\x27themeFlexWidth\x27) === true &&\x0a\x09\x09\x09\x09this.get(\x27themeHeight\x27) === this.get(\x27imageHeight\x27)) {\x0a\x09\x09\x09\x09return false;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09if (this.get(\x27themeFlexHeight\x27) === true &&\x0a\x09\x09\x09\x09this.get(\x27themeWidth\x27) === this.get(\x27imageWidth\x27)) {\x0a\x09\x09\x09\x09return false;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09if (this.get(\x27themeWidth\x27) === this.get(\x27imageWidth\x27) &&\x0a\x09\x09\x09\x09this.get(\x27themeHeight\x27) === this.get(\x27imageHeight\x27)) {\x0a\x09\x09\x09\x09return false;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09if (this.get(\x27imageWidth\x27) \x3c= this.get(\x27themeWidth\x27)) {\x0a\x09\x09\x09\x09return false;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09return true;\x0a\x09\x09}\x0a\x09});\x0a\x0a\x0a\x09/**\x0a\x09 * wp.customize.HeaderTool.ChoiceList\x0a\x09 *\x0a\x09 * @memberOf wp.customize.HeaderTool\x0a\x09 * @alias wp.customize.HeaderTool.ChoiceList\x0a\x09 *\x0a\x09 * @constructor\x0a\x09 * @augments Backbone.Collection\x0a\x09 */\x0a\x09api.HeaderTool.ChoiceList = Backbone.Collection.extend({\x0a\x09\x09model: api.HeaderTool.ImageModel,\x0a\x0a\x09\x09// Ordered from most recently used to least\x0a\x09\x09comparator: function(model) {\x0a\x09\x09\x09return -model.get(\x27header\x27).timestamp;\x0a\x09\x09},\x0a\x0a\x09\x09initialize: function() {\x0a\x09\x09\x09var current = api.HeaderTool.currentHeader.get(\x27choice\x27).replace(/^https?:\x5c/\x5c//, \x27\x27),\x0a\x09\x09\x09\x09isRandom = this.isRandomChoice(api.get().header_image);\x0a\x0a\x09\x09\x09// Overridable by an extending class\x0a\x09\x09\x09if (!this.type) {\x0a\x09\x09\x09\x09this.type = \x27uploaded\x27;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09// Overridable by an extending class\x0a\x09\x09\x09if (typeof this.data === \x27undefined\x27) {\x0a\x09\x09\x09\x09this.data = _wpCustomizeHeader.uploads;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09if (isRandom) {\x0a\x09\x09\x09\x09// So that when adding data we don\x27t hide regular images\x0a\x09\x09\x09\x09current = api.get().header_image;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09this.on(\x27control:setImage\x27, this.setImage, this);\x0a\x09\x09\x09this.on(\x27control:removeImage\x27, this.removeImage, this);\x0a\x09\x09\x09this.on(\x27add\x27, this.maybeRemoveOldCrop, this);\x0a\x09\x09\x09this.on(\x27add\x27, this.maybeAddRandomChoice, this);\x0a\x0a\x09\x09\x09_.each(this.data, function(elt, index) {\x0a\x09\x09\x09\x09if (!elt.attachment_id) {\x0a\x09\x09\x09\x09\x09elt.defaultName = index;\x0a\x09\x09\x09\x09}\x0a\x0a\x09\x09\x09\x09if (typeof elt.timestamp === \x27undefined\x27) {\x0a\x09\x09\x09\x09\x09elt.timestamp = 0;\x0a\x09\x09\x09\x09}\x0a\x0a\x09\x09\x09\x09this.add({\x0a\x09\x09\x09\x09\x09header: elt,\x0a\x09\x09\x09\x09\x09choice: elt.url.split(\x27/\x27).pop(),\x0a\x09\x09\x09\x09\x09selected: current === elt.url.replace(/^https?:\x5c/\x5c//, \x27\x27)\x0a\x09\x09\x09\x09}, { silent: true });\x0a\x09\x09\x09}, this);\x0a\x0a\x09\x09\x09if (this.size() \x3e 0) {\x0a\x09\x09\x09\x09this.addRandomChoice(current);\x0a\x09\x09\x09}\x0a\x09\x09},\x0a\x0a\x09\x09maybeRemoveOldCrop: function( model ) {\x0a\x09\x09\x09var newID = model.get( \x27header\x27 ).attachment_id || false,\x0a\x09\x09\x09 \x09oldCrop;\x0a\x0a\x09\x09\x09// Bail early if we don\x27t have a new attachment ID.\x0a\x09\x09\x09if ( ! newID ) {\x0a\x09\x09\x09\x09return;\x0a\x09\x09\x09}\x0a\x0a\x09\x09\x09oldCrop = this.find( function( item ) {\x0a\x09\x09\x09\x09return ( item.cid !== model.cid && item.get( \x27header\x27 ).attachment_id === newID );\x0a\x09\x09\x09} );\x0a\x0a\x09\x09\x09// If we found an old crop, remove it from the collection.\x0a\x09\x09\x09if ( oldCrop ) {\x0a\x09\x09\x09\x09this.remove( oldCrop );\x0a\x09\x09\x09}\x0a\x09\x09},\x0a\x0a\x09\x09maybeAddRandomChoice: function() {\x0a\x09\x09\x09if (this.size() === 1) {\x0a\x09\x09\x09\x09this.addRandomChoice();\x0a\x09\x09\x09}\x0a\x09\x09},\x0a\x0a\x09\x09addRandomChoice: function(initialChoice) {\x0a\x09\x09\x09var isRandomSameType = RegExp(this.type).test(initialChoice),\x0a\x09\x09\x09\x09randomChoice = \x27random-\x27 + this.type + \x27-image\x27;\x0a\x0a\x09\x09\x09this.add({\x0a\x09\x09\x09\x09header: {\x0a\x09\x09\x09\x09\x09timestamp: 0,\x0a\x09\x09\x09\x09\x09random: randomChoice,\x0a\x09\x09\x09\x09\x09width: 245,\x0a\x09\x09\x09\x09\x09height: 41\x0a\x09\x09\x09\x09},\x0a\x09\x09\x09\x09choice: randomChoice,\x0a\x09\x09\x09\x09random: true,\x0a\x09\x09\x09\x09selected: isRandomSameType\x0a\x09\x09\x09});\x0a\x09\x09},\x0a\x0a\x09\x09isRandomChoice: function(choice) {\x0a\x09\x09\x09return (/^random-(uploaded|default)-image$/).test(choice);\x0a\x09\x09},\x0a\x0a\x09\x09shouldHideTitle: function() {\x0a\x09\x09\x09return this.size() \x3c 2;\x0a\x09\x09},\x0a\x0a\x09\x09setImage: function(model) {\x0a\x09\x09\x09this.each(function(m) {\x0a\x09\x09\x09\x09m.set(\x27selected\x27, false);\x0a\x09\x09\x09});\x0a\x0a\x09\x09\x09if (model) {\x0a\x09\x09\x09\x09model.set(\x27selected\x27, true);\x0a\x09\x09\x09}\x0a\x09\x09},\x0a\x0a\x09\x09removeImage: function() {\x0a\x09\x09\x09this.each(function(m) {\x0a\x09\x09\x09\x09m.set(\x27selected\x27, false);\x0a\x09\x09\x09});\x0a\x09\x09}\x0a\x09});\x0a\x0a\x0a\x09/**\x0a\x09 * wp.customize.HeaderTool.DefaultsList\x0a\x09 *\x0a\x09 * @memberOf wp.customize.HeaderTool\x0a\x09 * @alias wp.customize.HeaderTool.DefaultsList\x0a\x09 *\x0a\x09 * @constructor\x0a\x09 * @augments wp.customize.HeaderTool.ChoiceList\x0a\x09 * @augments Backbone.Collection\x0a\x09 */\x0a\x09api.HeaderTool.DefaultsList = api.HeaderTool.ChoiceList.extend({\x0a\x09\x09initialize: function() {\x0a\x09\x09\x09this.type = \x27default\x27;\x0a\x09\x09\x09this.data = _wpCustomizeHeader.defaults;\x0a\x09\x09\x09api.HeaderTool.ChoiceList.prototype.initialize.apply(this);\x0a\x09\x09}\x0a\x09});\x0a\x0a})( jQuery, window.wp );\x0a=f\xe1'}