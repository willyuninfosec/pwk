var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 14:53:12 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Fri, 15 Jan 2016 04:02:28 GMT\x0aETag: \x22bcc-5295778bb7d00-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-1131/1132\x0aContent-Length: 1132\x0aKeep-Alive: timeout=5, max=89\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0awindow.wp=window.wp||{},function(a){wp.Backbone={},wp.Backbone.Subviews=function(a,b){this.view=a,this._views=_.isArray(b)?{\x22\x22:b}:b||{}},wp.Backbone.Subviews.extend=Backbone.Model.extend,_.extend(wp.Backbone.Subviews.prototype,{all:function(){return _.flatten(_.values(this._views))},get:function(a){return a=a||\x22\x22,this._views[a]},first:function(a){var b=this.get(a);return b&&b.length?b[0]:null},set:function(a,b,c){var d,e;return _.isString(a)||(c=b,b=a,a=\x22\x22),c=c||{},b=_.isArray(b)?b:[b],d=this.get(a),e=b,d&&(c.add?_.isUndefined(c.at)?e=d.concat(b):(e=d,e.splice.apply(e,[c.at,0].concat(b))):(_.each(e,function(a){a.__detach=!0}),_.each(d,function(a){a.__detach?a.$el.detach():a.remove()}),_.each(e,function(a){delete a.__detach}))),this._views[a]=e,_.each(b,function(b){var c=b.Views||wp.Backbone.Subviews,d=b.views=b.views||new c(b);d.parent=this.view,d.selector=a},this),c.silent||this._attach(a,b,_.extend({ready:this._isReady()},c)),this},add:function(a,b,c){return _.isString(a)||(c=b,b=a,a=\x22\x22),this.set(a,b,_.extend({add:!0},c))},unset:function(a,b,c){var d;return _.isString(a)||(c=b,b=a,a=\x22\x22),b=b||[],(d=this.get(a))&&(b=_.isArray(b)?b:[b],this._views[a]=b.length?_.difference(d,b):[]),c&&c.silent||_.invoke(b,\x22remove\x22),this},detach:function(){return a(_.pluck(this.all(),\x22el\x22)).detach(),this},render:function(){var a={ready:this._isReady()};return _.each(this._views,function(b,c){this._attach(c,b,a)},this),this.rendered=!0,this},remove:function(a){return a&&a.silent||(this.parent&&this.parent.views&&this.parent.views.unset(this.selector,this.view,{silent:!0}),delete this.parent,delete this.selector),_.invoke(this.all(),\x22remove\x22),this._views=[],this},replace:function(a,b){return a.html(b),this},insert:function(a,b,c){var d,e=c&&c.at;return _.isNumber(e)&&(d=a.children()).length\x3ee?d.eq(e).before(b):a.append(b),this},ready:function(){this.view.trigger(\x22ready\x22),_.chain(this.all()).map(function(a){return a.views}).flatten().where({attached:!0}).invoke(\x22ready\x22)},_attach:function(a,b,c){var d,e=a?this.view.$(a):this.view.$el;return e.length?(d=_.chain(b).pluck(\x22views\x22).flatten().value(),_.each(d,function(a){a.rendered||(a.view.render(),a.rendered=!0)},this),this[c.add?\x22insert\x22:\x22replace\x22](e,_.pluck(b,\x22el\x22),c),_.each(d,function(a){a.attached=!0,c.ready&&a.ready()},this),this):this},_isReady:function(){for(var a=this.view.el;a;){if(a===document.body)return!0;a=a.parentNode}return!1}}),wp.Backbone.View=Backbone.View.extend({Subviews:wp.Backbone.Subviews,constructor:function(a){this.views=new this.Subviews(this,this.views),this.on(\x22ready\x22,this.ready,this),this.options=a||{},Backbone.View.apply(this,arguments)},remove:function(){var a=Backbone.View.prototype.remove.apply(this,arguments);return this.views&&this.views.remove(),a},render:function(){var a;return this.prepare&&(a=this.prepare()),this.views.detach(),this.template&&(a=a||{},this.trigger(\x22prepare\x22,a),this.$el.html(this.template(a))),this.views.render(),this},prepare:function(){return this.options},ready:function(){}})}(jQuery);'}