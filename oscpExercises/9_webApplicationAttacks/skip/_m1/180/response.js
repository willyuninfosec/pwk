var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:04:59 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 28 Jun 2018 02:30:15 GMT\x0aETag: \x2213c9-56faa82e93bc0-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-1458/1459\x0aContent-Length: 1459\x0aKeep-Alive: timeout=5, max=6\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/**\x0a * @output wp-includes/js/customize-views.js\x0a */\x0a\x0a(function( $, wp, _ ) {\x0a\x0a\x09if ( ! wp || ! wp.customize ) { return; }\x0a\x09var api = wp.customize;\x0a\x0a\x09/**\x0a\x09 * wp.customize.HeaderTool.CurrentView\x0a\x09 *\x0a\x09 * Displays the currently selected header image, or a placeholder in lack\x0a\x09 * thereof.\x0a\x09 *\x0a\x09 * Instantiate with model wp.customize.HeaderTool.currentHeader.\x0a\x09 *\x0a\x09 * @memberOf wp.customize.HeaderTool\x0a\x09 * @alias wp.customize.HeaderTool.CurrentView\x0a\x09 *\x0a\x09 * @constructor\x0a\x09 * @augments wp.Backbone.View\x0a\x09 */\x0a\x09api.HeaderTool.CurrentView = wp.Backbone.View.extend(/** @lends wp.customize.HeaderTool.CurrentView.prototype */{\x0a\x09\x09template: wp.template(\x27header-current\x27),\x0a\x0a\x09\x09initialize: function() {\x0a\x09\x09\x09this.listenTo(this.model, \x27change\x27, this.render);\x0a\x09\x09\x09this.render();\x0a\x09\x09},\x0a\x0a\x09\x09render: function() {\x0a\x09\x09\x09this.$el.html(this.template(this.model.toJSON()));\x0a\x09\x09\x09this.setButtons();\x0a\x09\x09\x09return this;\x0a\x09\x09},\x0a\x0a\x09\x09setButtons: function() {\x0a\x09\x09\x09var elements = $(\x27#customize-control-header_image .actions .remove\x27);\x0a\x09\x09\x09if (this.model.get(\x27choice\x27)) {\x0a\x09\x09\x09\x09elements.show();\x0a\x09\x09\x09} else {\x0a\x09\x09\x09\x09elements.hide();\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09});\x0a\x0a\x0a\x09/**\x0a\x09 * wp.customize.HeaderTool.ChoiceView\x0a\x09 *\x0a\x09 * Represents a choosable header image, be it user-uploaded,\x0a\x09 * theme-suggested or a special Randomize choice.\x0a\x09 *\x0a\x09 * Takes a wp.customize.HeaderTool.ImageModel.\x0a\x09 *\x0a\x09 * Manually changes model wp.customize.HeaderTool.currentHeader via the\x0a\x09 * `select` method.\x0a\x09 *\x0a\x09 * @memberOf wp.customize.HeaderTool\x0a\x09 * @alias wp.customize.HeaderTool.ChoiceView\x0a\x09 *\x0a\x09 * @constructor\x0a\x09 * @augments wp.Backbone.View\x0a\x09 */\x0a\x09api.HeaderTool.ChoiceView = wp.Backbone.View.extend(/** @lends wp.customize.HeaderTool.ChoiceView.prototype */{\x0a\x09\x09template: wp.template(\x27header-choice\x27),\x0a\x0a\x09\x09className: \x27header-view\x27,\x0a\x0a\x09\x09events: {\x0a\x09\x09\x09\x27click .choice,.random\x27: \x27select\x27,\x0a\x09\x09\x09\x27click .close\x27: \x27removeImage\x27\x0a\x09\x09},\x0a\x0a\x09\x09initialize: function() {\x0a\x09\x09\x09var properties = [\x0a\x09\x09\x09\x09this.model.get(\x27header\x27).url,\x0a\x09\x09\x09\x09this.model.get(\x27choice\x27)\x0a\x09\x09\x09];\x0a\x0a\x09\x09\x09this.listenTo(this.model, \x27change:selected\x27, this.toggleSelected);\x0a\x0a\x09\x09\x09if (_.contains(properties, api.get().header_image)) {\x0a\x09\x09\x09\x09api.HeaderTool.currentHeader.set(this.extendedModel());\x0a\x09\x09\x09}\x0a\x09\x09},\x0a\x0a\x09\x09render: function() {\x0a\x09\x09\x09this.$el.html(this.template(this.extendedModel()));\x0a\x0a\x09\x09\x09this.toggleSelected();\x0a\x09\x09\x09return this;\x0a\x09\x09},\x0a\x0a\x09\x09toggleSelected: function() {\x0a\x09\x09\x09this.$el.toggleClass(\x27selected\x27, this.model.get(\x27selected\x27));\x0a\x09\x09},\x0a\x0a\x09\x09extendedModel: function() {\x0a\x09\x09\x09var c = this.model.get(\x27collection\x27);\x0a\x09\x09\x09return _.extend(this.model.toJSON(), {\x0a\x09\x09\x09\x09type: c.type\x0a\x09\x09\x09});\x0a\x09\x09},\x0a\x0a\x09\x09select: function() {\x0a\x09\x09\x09this.preventJump();\x0a\x09\x09\x09this.model.save();\x0a\x09\x09\x09api.HeaderTool.currentHeader.set(this.extendedModel());\x0a\x09\x09},\x0a\x0a\x09\x09preventJump: function() {\x0a\x09\x09\x09var container = $(\x27.wp-full-overlay-sidebar-content\x27),\x0a\x09\x09\x09\x09scroll = container.scrollTop();\x0a\x0a\x09\x09\x09_.defer(function() {\x0a\x09\x09\x09\x09container.scrollTop(scroll);\x0a\x09\x09\x09});\x0a\x09\x09},\x0a\x0a\x09\x09removeImage: function(e) {\x0a\x09\x09\x09e.stopPropagation();\x0a\x09\x09\x09this.model.destroy();\x0a\x09\x09\x09this.remove();\x0a\x09\x09}\x0a\x09});\x0a\x0a\x0a\x09/**\x0a\x09 * wp.customize.HeaderTool.ChoiceListView\x0a\x09 *\x0a\x09 * A container for ChoiceViews. These choices should be of one same type:\x0a\x09 * user-uploaded headers or theme-defined ones.\x0a\x09 *\x0a\x09 * Takes a wp.customize.HeaderTool.ChoiceList.\x0a\x09 *\x0a\x09 * @memberOf wp.customize.HeaderTool\x0a\x09 * @alias wp.customize.HeaderTool.ChoiceListView\x0a\x09 *\x0a\x09 * @constructor\x0a\x09 * @augments wp.Backbone.View\x0a\x09 */\x0a\x09api.HeaderTool.ChoiceListView = wp.Backbone.View.extend(/** @lends wp.customize.HeaderTool.ChoiceListView.prototype */{\x0a\x09\x09initialize: function() {\x0a\x09\x09\x09this.listenTo(this.collection, \x27add\x27, this.addOne);\x0a\x09\x09\x09this.listenTo(this.collection, \x27remove\x27, this.render);\x0a\x09\x09\x09this.listenTo(this.collection, \x27sort\x27, this.render);\x0a\x09\x09\x09this.listenTo(this.collection, \x27change\x27, this.toggleList);\x0a\x09\x09\x09this.render();\x0a\x09\x09},\x0a\x0a\x09\x09render: function() {\x0a\x09\x09\x09this.$el.empty();\x0a\x09\x09\x09this.collection.each(this.addOne, this);\x0a\x09\x09\x09this.toggleList();\x0a\x09\x09},\x0a\x0a\x09\x09addOne: function(choice) {\x0a\x09\x09\x09var view;\x0a\x09\x09\x09choice.set({ collection: this.collection });\x0a\x09\x09\x09view = new api.HeaderTool.ChoiceView({ model: choice });\x0a\x09\x09\x09this.$el.append(view.render().el);\x0a\x09\x09},\x0a\x0a\x09\x09toggleList: function() {\x0a\x09\x09\x09var title = this.$el.parents().prev(\x27.customize-control-title\x27),\x0a\x09\x09\x09\x09randomButton = this.$el.find(\x27.random\x27).parent();\x0a\x09\x09\x09if (this.collection.shouldHideTitle()) {\x0a\x09\x09\x09\x09title.add(randomButton).hide();\x0a\x09\x09\x09} else {\x0a\x09\x09\x09\x09title.add(randomButton).show();\x0a\x09\x09\x09}\x0a\x09\x09}\x0a\x09});\x0a\x0a\x0a\x09/**\x0a\x09 * wp.customize.HeaderTool.CombinedList\x0a\x09 *\x0a\x09 * Aggregates wp.customize.HeaderTool.ChoiceList collections (or any\x0a\x09 * Backbone object, really) and acts as a bus to feed them events.\x0a\x09 *\x0a\x09 * @memberOf wp.customize.HeaderTool\x0a\x09 * @alias wp.customize.HeaderTool.CombinedList\x0a\x09 *\x0a\x09 * @constructor\x0a\x09 * @augments wp.Backbone.View\x0a\x09 */\x0a\x09api.HeaderTool.CombinedList = wp.Backbone.View.extend(/** @lends wp.customize.HeaderTool.CombinedList.prototype */{\x0a\x09\x09initialize: function(collections) {\x0a\x09\x09\x09this.collections = collections;\x0a\x09\x09\x09this.on(\x27all\x27, this.propagate, this);\x0a\x09\x09},\x0a\x09\x09propagate: function(event, arg) {\x0a\x09\x09\x09_.each(this.collections, function(collection) {\x0a\x09\x09\x09\x09collection.trigger(event, arg);\x0a\x09\x09\x09});\x0a\x09\x09}\x0a\x09});\x0a\x0a})( jQuery, window.wp, _ );\x0a'}