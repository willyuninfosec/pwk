var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 18:00:29 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Tue, 15 Oct 2019 21:47:32 GMT\x0aETag: \x223e64-594f9ee78aa80-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-4695/4696\x0aContent-Length: 4696\x0aKeep-Alive: timeout=5, max=37\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a /**\x0a *  author:\x09\x09Timothy Groves - http://www.brandspankingnew.net\x0a *\x09version:\x091.2 - 2006-11-17\x0a *              1.3 - 2006-12-04\x0a *              2.0 - 2007-02-07\x0a *              2.1 - 2009-06-13\x0a *\x0a */\x0a\x0avar useBSNns;\x0a\x0aif (useBSNns)\x0a{\x0a\x09if (typeof(bsn) == \x22undefined\x22)\x0a\x09\x09bsn = {}\x0a\x09_bsn = bsn;\x0a}\x0aelse\x0a{\x0a\x09_bsn = this;\x0a}\x0a\x0a\x0a\x0aif (typeof(_bsn.Autosuggest) == \x22undefined\x22)\x0a\x09_bsn.Autosuggest = {}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a_bsn.AutoSuggest = function (fldID, param)\x0a{\x0a\x09// no DOM - give up!\x0a\x09//\x0a\x09if (!document.getElementById)\x0a\x09\x09return false;\x0a\x09\x0a\x09\x0a\x09\x0a\x09\x0a\x09// get field via DOM\x0a\x09//\x0a\x09this.fld = _bsn.DOM.getElement(fldID);\x0a\x0a\x09if (!this.fld)\x0a\x09\x09return false;\x0a\x09\x0a\x09\x0a\x09\x0a\x09\x0a\x09// init variables\x0a\x09//\x0a\x09this.sInput \x09\x09= \x22\x22;\x0a\x09this.nInputChars \x09= 0;\x0a\x09this.aSuggestions \x09= [];\x0a\x09this.iHighlighted \x09= 0;\x0a\x09\x0a\x09\x0a\x09\x0a\x09\x0a\x09// parameters object\x0a\x09//\x0a\x09this.oP = (param) ? param : {};\x0a\x09\x0a\x09// defaults\x09\x0a\x09//\x0a\x09if (!this.oP.minchars)\x09\x09\x09\x09\x09\x09\x09\x09\x09this.oP.minchars = 1;\x0a\x09if (!this.oP.method)\x09\x09\x09\x09\x09\x09\x09\x09\x09this.oP.meth = \x22get\x22;\x0a\x09if (!this.oP.varname)\x09\x09\x09\x09\x09\x09\x09\x09\x09this.oP.varname = \x22input\x22;\x0a\x09if (!this.oP.className)\x09\x09\x09\x09\x09\x09\x09\x09\x09this.oP.className = \x22autosuggest\x22;\x0a\x09if (!this.oP.timeout)\x09\x09\x09\x09\x09\x09\x09\x09\x09this.oP.timeout = 2500;\x0a\x09if (!this.oP.delay)\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09this.oP.delay = 500;\x0a\x09if (!this.oP.offsety)\x09\x09\x09\x09\x09\x09\x09\x09\x09this.oP.offsety = -5;\x0a\x09if (!this.oP.shownoresults)\x09\x09\x09\x09\x09\x09\x09\x09this.oP.shownoresults = true;\x0a\x09if (!this.oP.noresults)\x09\x09\x09\x09\x09\x09\x09\x09\x09this.oP.noresults = \x22No results!\x22;\x0a\x09if (!this.oP.maxheight && this.oP.maxheight !== 0)\x09\x09this.oP.maxheight = 250;\x0a\x09if (!this.oP.cache && this.oP.cache != false)\x09\x09\x09this.oP.cache = true;\x0a\x09\x0a\x09\x0a\x09\x0a\x09\x0a\x09\x0a\x09// set keyup handler for field\x0a\x09// and prevent autocomplete from client\x0a\x09//\x0a\x09var pointer = this;\x0a\x09\x0a\x09// NOTE: not using addEventListener because UpArrow fired twice in Safari\x0a\x09//_bsn.DOM.addEvent( this.fld, \x27keyup\x27, function(ev){ return pointer.onKeyPress(ev); } );\x0a\x09\x0a\x09this.fld.onkeypress \x09= function(ev){ return pointer.onKeyPress(ev); }\x0a\x09this.fld.onkeyup \x09\x09= function(ev){ return pointer.onKeyUp(ev); }\x0a\x09\x0a\x09this.fld.setAttribute(\x22autocomplete\x22,\x22off\x22);\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a_bsn.AutoSuggest.prototype.onKeyPress = function(ev)\x0a{\x0a\x09\x0a\x09var key = (window.event) ? window.event.keyCode : ev.keyCode;\x0a\x09var form = (ev.target) ? ev.target.form : ev.srcElement.form;\x0a\x0a\x0a\x0a\x09// set responses to keydown events in the field\x0a\x09// this allows the user to use the arrow keys to scroll through the results\x0a\x09// ESCAPE clears the list\x0a\x09// TAB sets the current highlighted value\x0a\x09//\x0a\x09var RETURN = 13;\x0a\x09var TAB = 9;\x0a\x09var ESC = 27;\x0a\x09\x0a\x09var bubble = true;\x0a\x0a\x09switch(key)\x0a\x09{\x0a\x0a\x09\x09case RETURN:\x0a\x09\x09\x09// Submit form if cursor is on search field, otherwise - update field to chosen suggestion and execute callback function (submits on some browsers).\x0a\x09\x09\x09if (this.iHighlighted)\x0a\x09\x09\x09\x09bubble = this.setHighlightedValue();\x0a\x09\x09\x09else\x0a\x09\x09\x09{\x0a\x09\x09\x09\x09form.submit();\x0a\x09\x09\x09\x09bubble = false;\x0a\x09\x09\x09}\x0a\x09\x09\x09//bubble = true;\x0a\x09\x09\x09break;\x0a\x0a\x0a\x09\x09case ESC:\x0a\x09\x09\x09this.clearSuggestions();\x0a\x09\x09\x09break;\x0a\x09}\x0a\x0a\x09return bubble;\x0a}\x0a\x0a\x0a\x0a_bsn.AutoSuggest.prototype.onKeyUp = function(ev)\x0a{\x0a\x09var key = (window.event) ? window.event.keyCode : ev.keyCode;\x0a\x09\x0a\x0a\x0a\x09// set responses to keydown events in the field\x0a\x09// this allows the user to use the arrow keys to scroll through the results\x0a\x09// ESCAPE clears the list\x0a\x09// TAB sets the current highlighted value\x0a\x09//\x0a\x0a\x09var ARRUP = 38;\x0a\x09var ARRDN = 40;\x0a\x09\x0a\x09var bubble = true;\x0a\x0a\x09switch(key)\x0a\x09{\x0a\x0a\x0a\x09\x09case ARRUP:\x0a\x09\x09\x09this.changeHighlight(key);\x0a\x09\x09\x09bubble = false;\x0a\x09\x09\x09break;\x0a\x0a\x0a\x09\x09case ARRDN:\x0a\x09\x09\x09this.changeHighlight(key);\x0a\x09\x09\x09bubble = false;\x0a\x09\x09\x09break;\x0a\x09\x09\x0a\x09\x09\x0a\x09\x09default:\x0a\x09\x09\x09this.getSuggestions(this.fld.value);\x0a\x09}\x0a\x0a\x09return bubble;\x0a\x09\x0a\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a_bsn.AutoSuggest.prototype.getSuggestions = function (val)\x0a{\x0a\x09\x0a\x09// if input stays the same, do nothing\x0a\x09//\x0a\x09if (val == this.sInput)\x0a\x09\x09return false;\x0a\x0a\x09\x0a\x09// input length is less than the min required to trigger a request\x0a\x09// reset input string\x0a\x09// do nothing\x0a\x09//\x0a\x09if (val.length \x3c this.oP.minchars)\x0a\x09{\x0a\x09\x09this.sInput = \x22\x22;\x0a\x09\x09return false;\x0a\x09}\x0a\x09\x0a\x09\x0a\x09// if caching enabled, and user is typing (ie. length of input is increasing)\x0a\x09// filter results out of aSuggestions from last request\x0a\x09//\x0a\x09if (val.length\x3ethis.nInputChars && this.aSuggestions.length && this.oP.cache)\x0a\x09{\x0a\x09\x09var arr = [];\x0a\x09\x09for (var i=0;i\x3cthis.aSuggestions.length;i++)\x0a\x09\x09{\x0a\x09\x09\x09if (this.aSuggestions[i].value.substr(0,val.length).toLowerCase() == val.toLowerCase())\x0a\x09\x09\x09\x09arr.push( this.aSuggestions[i] );\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09this.sInput = val;\x0a\x09\x09this.nInputChars = val.length;\x0a\x09\x09this.aSuggestions = arr;\x0a\x09\x09\x0a\x09\x09this.createList(this.aSuggestions);\x0a\x09\x09\x0a\x09\x09\x0a\x09\x09\x0a\x09\x09return false;\x0a\x09}\x0a\x09else\x0a\x09// do new request\x0a\x09//\x0a\x09{\x0a\x09\x09this.sInput = val;\x0a\x09\x09this.nInputChars = val.length;\x0a\x0a\x0a\x09\x09var pointer = this;\x0a\x09\x09clearTimeout(this.ajID);\x0a\x09\x09this.ajID = setTimeout( function() { pointer.doAjaxRequest() }, this.oP.delay );\x0a\x09}\x0a\x0a\x09return false;\x0a}\x0a\x0a\x0a\x0a\x0a\x0a_bsn.AutoSuggest.prototype.doAjaxRequest = function ()\x0a{\x0a\x09\x0a\x09var pointer = this;\x0a\x09\x0a\x09// create ajax request\x0a\x09var url = this.oP.script+this.oP.varname+\x22=\x22+escape(this.fld.value);\x0a\x09var meth = this.oP.meth;\x0a\x09\x0a\x09var onSuccessFunc = function (req) { pointer.setSuggestions(req) };\x0a\x09var onErrorFunc = function (status) { alert(\x22AJAX error: \x22+status); };\x0a\x0a\x09var myAjax = new _bsn.Ajax();\x0a\x09myAjax.makeRequest( url, meth, onSuccessFunc, onErrorFunc );\x0a}\x0a\x0a\x0a\x0a\x0a\x0a_bsn.AutoSuggest.prototype.setSuggestions = function (req)\x0a{\x0a\x09this.aSuggestions = [];\x0a\x09\x0a\x09if (this.oP.json)\x0a\x09{\x0a\x09\x09var jsondata = eval(\x27(\x27 + req.responseText + \x27)\x27);\x0a\x09\x09\x0a\x09\x09for (var i=0;i\x3cjsondata.results.length;i++)\x0a\x09\x09{\x0a\x09\x09\x09this.aSuggestions.push(  { \x27id\x27:jsondata.results[i].id, \x27value\x27:jsondata.results[i].value, \x27info\x27:jsondata.results[i].info }  );\x0a\x09\x09}\x0a\x09}\x0a\x09else\x0a\x09{\x0a\x0a\x09\x09var xml = req.responseXML;\x0a\x09\x0a\x09\x09// traverse xml\x0a\x09\x09//\x0a\x09\x09var results = xml.getElementsByTagName(\x27results\x27)[0].childNodes;\x0a\x0a\x09\x09for (var i=0;i\x3cresults.length;i++)\x0a\x09\x09{\x0a\x09\x09\x09if (results[i].hasChildNodes())\x0a\x09\x09\x09\x09this.aSuggestions.push(  { \x27id\x27:results[i].getAttribute(\x27id\x27), \x27value\x27:results[i].childNodes[0].nodeValue, \x27info\x27:results[i].getAttribute(\x27info\x27) }  );\x0a\x09\x09}\x0a\x09\x0a\x09}\x0a\x09\x0a\x09this.idAs = \x22as_\x22+this.fld.id;\x0a\x09\x0a\x0a\x09this.createList(this.aSuggestions);\x0a\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a_bsn.AutoSuggest.prototype.createList = function(arr)\x0a{\x0a\x09var pointer = this;\x0a\x09\x0a\x09\x0a\x09// get rid of old list\x0a\x09// and clear the list removal timeout\x0a\x09//\x0a\x09_bsn.DOM.removeElement(this.idAs);\x0a\x09this.killTimeout();\x0a\x09\x0a\x09\x0a\x09// create holding div\x0a\x09//\x0a\x09var div = _bsn.DOM.createElement(\x22div\x22, {id:this.idAs, className:this.oP.className});\x09\x0a\x09var container = _bsn.DOM.createElement(\x22div\x22, {className:\x22as_container\x22});\x0a\x0a\x09div.appendChild(container);\x0a\x09\x0a\x09\x0a\x09\x0a\x09\x0a\x09// create and populate ul\x0a\x09//\x0a\x09var ul = _bsn.DOM.createElement(\x22ul\x22, {id:\x22as_ul\x22});\x0a\x09\x0a\x09\x0a\x09\x0a\x09\x0a\x09// loop throught arr of suggestions\x0a\x09// creating an LI element for each suggestion\x0a\x09//\x0a\x09for (var i=0;i\x3carr.length;i++)\x0a\x09{\x0a\x09\x09// format output with the input enclosed in a EM element\x0a\x09\x09// (as HTML, not DOM)\x0a\x09\x09//\x0a\x09\x09var val = arr[i].value;\x0a\x09\x09var st = val.toLowerCase().indexOf( this.sInput.toLowerCase() );\x0a\x09\x09var output = val.substring(0,st) + \x22\x3cem\x3e\x22 + val.substring(st, st+this.sInput.length) + \x22\x3c/em\x3e\x22 + val.substring(st+this.sInput.length);\x0a\x09\x09\x0a\x09\x09\x0a\x09\x09var span \x09\x09= _bsn.DOM.createElement(\x22span\x22, {}, output, true);\x0a\x09\x09if (arr[i].info != \x22\x22)\x0a\x09\x09{\x0a\x09\x09\x09var br\x09\x09\x09= _bsn.DOM.createElement(\x22br\x22, {});\x0a\x09\x09\x09span.appendChild(br);\x0a\x09\x09\x09var small\x09\x09= _bsn.DOM.createElement(\x22small\x22, {}, arr[i].info);\x0a\x09\x09\x09span.appendChild(small);\x0a\x09\x09}\x0a\x09\x09\x0a\x09\x09var a \x09\x09\x09= _bsn.DOM.createElement(\x22a\x22, { href:\x22#\x22 });\x0a\x09\x09\x0a\x09\x09var tl \x09\x09= _bsn.DOM.createElement(\x22span\x22, {className:\x22tl\x22}, \x22 \x22);\x0a\x09\x09var tr \x09\x09= _bsn.DOM.createElement(\x22span\x22, {className:\x22tr\x22}, \x22 \x22);\x0a\x09\x09a.appendChild(tl);\x0a\x09\x09a.appendChild(tr);\x0a\x09\x09\x0a\x09\x09a.appendChild(span);\x0a\x09\x09\x0a\x09\x09a.name = i+1;\x0a\x09\x09a.onclick = function () { pointer.setHighlightedValue(); return false; }\x0a\x09\x09a.onmouseover = function () { pointer.setHighlight(this.name); }\x0a\x09\x09\x0a\x09\x09var li \x09\x09\x09= _bsn.DOM.createElement(  \x22li\x22, {}, a  );\x0a\x09\x09\x0a\x09\x09ul.appendChild( li );\x0a\x09}\x0a\x09\x0a\x09\x0a\x09// no results\x0a\x09//\x0a\x09if (arr.length == 0)\x0a\x09{\x0a\x09\x09var li \x09\x09\x09= _bsn.DOM.createElement(  \x22li\x22, {className:\x22as_warning\x22}, this.oP.noresults  );\x0a\x09\x09\x0a\x09\x09ul.appendChild( li );\x0a\x09}\x0a\x09\x0a\x09\x0a\x09container.appendChild( ul );\x0a\x09\x0a\x09\x0a\x09\x0a\x09// get position of target textfield\x0a\x09// position holding div below it\x0a\x09// set width of holding div to width of field\x0a\x09//\x0a\x09var pos = _bsn.DOM.getPos(this.fld);\x0a\x09\x0a\x09div.style.left \x09\x09= pos.x + \x22px\x22;\x0a\x09div.style.top \x09\x09= ( pos.y + this.fld.offsetHeight + this.oP.offsety ) + \x22px\x22;\x0a\x09div.style.width \x09= this.fld.offsetWidth + \x22px\x22;\x0a\x09\x0a\x09\x0a\x09\x0a\x09// set mouseover functions for div\x0a\x09// when mouse pointer leaves div, set a timeout to remove the list after an interval\x0a\x09// when mouse enters div, kill the timeout so the list won\x27t be removed\x0a\x09//\x0a\x09div.onmouseover \x09= function(){ pointer.killTimeout() }\x0a\x09div.onmouseout \x09\x09= function(){ pointer.resetTimeout() }\x0a\x0a\x0a\x09// add DIV to document\x0a\x09//\x0a\x09document.getElementsByTagName(\x22body\x22)[0].appendChild(div);\x0a\x09\x0a\x09\x0a\x09\x0a\x09// currently no item is highlighted\x0a\x09//\x0a\x09this.iHighlighted = 0;\x0a\x09\x0a\x09\x0a\x09\x0a\x09\x0a\x09\x0a\x09\x0a\x09// remove list after an interval\x0a\x09//\x0a\x09var pointer = this;\x0a\x09this.toID = setTimeout(function () { pointer.clearSuggestions() }, this.oP.timeout);\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a_bsn.AutoSuggest.prototype.changeHighlight = function(key)\x0a{\x09\x0a\x09var list = _bsn.DOM.getElement(\x22as_ul\x22);\x0a\x09if (!list)\x0a\x09\x09return false;\x0a\x09\x0a\x09var n;\x0a\x0a\x09if (key == 40)\x0a\x09\x09n = this.iHighlighted + 1;\x0a\x09else if (key == 38)\x0a\x09\x09n = this.iHighlighted - 1;\x0a\x09\x0a\x09\x0a\x09if (n \x3e list.childNodes.length)\x0a\x09\x09n = list.childNodes.length;\x0a\x09if (n \x3c 1)\x0a\x09\x09n = 1;\x0a\x09\x0a\x09\x0a\x09this.setHighlight(n);\x0a}\x0a\x0a\x0a\x0a_bsn.AutoSuggest.prototype.setHighlight = function(n)\x0a{\x0a\x09var list = _bsn.DOM.getElement(\x22as_ul\x22);\x0a\x09if (!list)\x0a\x09\x09return false;\x0a\x09\x0a\x09if (this.iHighlighted \x3e 0)\x0a\x09\x09this.clearHighlight();\x0a\x09\x0a\x09this.iHighlighted = Number(n);\x0a\x09\x0a\x09list.childNodes[this.iHighlighted-1].className = \x22as_highlight\x22;\x0a\x0a\x0a\x09this.killTimeout();\x0a}\x0a\x0a\x0a_bsn.AutoSuggest.prototype.clearHighlight = function()\x0a{\x0a\x09var list = _bsn.DOM.getElement(\x22as_ul\x22);\x0a\x09if (!list)\x0a\x09\x09return false;\x0a\x09\x0a\x09if (this.iHighlighted \x3e 0)\x0a\x09{\x0a\x09\x09list.childNodes[this.iHighlighted-1].className = \x22\x22;\x0a\x09\x09this.iHighlighted = 0;\x0a\x09}\x0a}\x0a\x0a\x0a_bsn.AutoSuggest.prototype.setHighlightedValue = function ()\x0a{\x0a\x09if (this.iHighlighted)\x0a\x09{\x0a\x09\x09this.sInput = this.fld.value = this.aSuggestions[ this.iHighlighted-1 ].value;\x0a\x09\x09\x0a\x09\x09// move cursor to end of input (safari)\x0a\x09\x09//\x0a\x09\x09this.fld.focus();\x0a\x09\x09if (this.fld.selectionStart)\x0a\x09\x09\x09this.fld.setSelectionRange(this.sInput.length, this.sInput.length);\x0a\x09\x09\x0a\x0a\x09\x09this.clearSuggestions();\x0a\x09\x09\x0a\x09\x09// pass selected object to callback function, if exists\x0a\x09\x09//\x0a\x09\x09if (typeof(this.oP.callback) == \x22function\x22)\x0a\x09\x09\x09this.oP.callback( this.aSuggestions[this.iHighlighted-1] );\x0a\x09\x09\x09\x0a\x09\x09return false;\x0a\x09}\x0a\x09\x0a\x09return true;\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a_bsn.AutoSuggest.prototype.killTimeout = function()\x0a{\x0a\x09clearTimeout(this.toID);\x0a}\x0a\x0a_bsn.AutoSuggest.prototype.resetTimeout = function()\x0a{\x0a\x09clearTimeout(this.toID);\x0a\x09var pointer = this;\x0a\x09this.toID = setTimeout(function () { pointer.clearSuggestions() }, 1000);\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a_bsn.AutoSuggest.prototype.clearSuggestions = function ()\x0a{\x0a\x09\x0a\x09this.killTimeout();\x0a\x09\x0a\x09var ele = _bsn.DOM.getElement(this.idAs);\x0a\x09var pointer = this;\x0a\x09if (ele)\x0a\x09{\x0a\x09\x09var fade = new _bsn.Fader(ele,1,0,250,function () { _bsn.DOM.removeElement(pointer.idAs) });\x0a\x09}\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a// AJAX PROTOTYPE _____________________________________________\x0a\x0a\x0aif (typeof(_bsn.Ajax) == \x22undefined\x22)\x0a\x09_bsn.Ajax = {}\x0a\x0a\x0a\x0a_bsn.Ajax = function ()\x0a{\x0a\x09this.req = {};\x0a\x09this.isIE = false;\x0a}\x0a\x0a\x0a\x0a_bsn.Ajax.prototype.makeRequest = function (url, meth, onComp, onErr)\x0a{\x0a\x09\x0a\x09if (meth != \x22POST\x22)\x0a\x09\x09meth = \x22GET\x22;\x0a\x09\x0a\x09this.onComplete = onComp;\x0a\x09this.onError = onErr;\x0a\x09\x0a\x09var pointer = this;\x0a\x09\x0a\x09// branch for native XMLHttpRequest object\x0a\x09if (window.XMLHttpRequest)\x0a\x09{\x0a\x09\x09this.req = new XMLHttpRequest();\x0a\x09\x09this.req.onreadystatechange = function () { pointer.processReqChange() };\x0a\x09\x09this.req.open(\x22GET\x22, url, true); //\x0a\x09\x09this.req.send(null);\x0a\x09// branch for IE/Windows ActiveX version\x0a\x09}\x0a\x09else if (window.ActiveXObject)\x0a\x09{\x0a\x09\x09this.req = new ActiveXObject(\x22Microsoft.XMLHTTP\x22);\x0a\x09\x09if (this.req)\x0a\x09\x09{\x0a\x09\x09\x09this.req.onreadystatechange = function () { pointer.processReqChange() };\x0a\x09\x09\x09this.req.open(meth, url, true);\x0a\x09\x09\x09this.req.send();\x0a\x09\x09}\x0a\x09}\x0a}\x0a\x0a\x0a_bsn.Ajax.prototype.processReqChange = function()\x0a{\x0a\x09\x0a\x09// only if req shows \x22loaded\x22\x0a\x09if (this.req.readyState == 4) {\x0a\x09\x09// only if \x22OK\x22\x0a\x09\x09if (this.req.status == 200)\x0a\x09\x09{\x0a\x09\x09\x09this.onComplete( this.req );\x0a\x09\x09} else {\x0a\x09\x09\x09this.onError( this.req.status );\x0a\x09\x09}\x0a\x09}\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a// DOM PROTOTYPE _____________________________________________\x0a\x0a\x0aif (typeof(_bsn.DOM) == \x22undefined\x22)\x0a\x09_bsn.DOM = {}\x0a\x0a\x0a\x0a\x0a_bsn.DOM.createElement = function ( type, attr, cont, html )\x0a{\x0a\x09var ne = document.createElement( type );\x0a\x09if (!ne)\x0a\x09\x09return false;\x0a\x09\x09\x0a\x09for (var a in attr)\x0a\x09\x09ne[a] = attr[a];\x0a\x09\x09\x0a\x09if (typeof(cont) == \x22string\x22 && !html)\x0a\x09\x09ne.appendChild( document.createTextNode(cont) );\x0a\x09else if (typeof(cont) == \x22string\x22 && html)\x0a\x09\x09ne.innerHTML = cont;\x0a\x09else if (typeof(cont) == \x22object\x22)\x0a\x09\x09ne.appendChild( cont );\x0a\x0a\x09return ne;\x0a}\x0a\x0a\x0a\x0a\x0a\x0a_bsn.DOM.clearElement = function ( id )\x0a{\x0a\x09var ele = this.getElement( id );\x0a\x09\x0a\x09if (!ele)\x0a\x09\x09return false;\x0a\x09\x0a\x09while (ele.childNodes.length)\x0a\x09\x09ele.removeChild( ele.childNodes[0] );\x0a\x09\x0a\x09return true;\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a_bsn.DOM.removeElement = function ( ele )\x0a{\x0a\x09var e = this.getElement(ele);\x0a\x09\x0a\x09if (!e)\x0a\x09\x09return false;\x0a\x09else if (e.parentNode.removeChild(e))\x0a\x09\x09return true;\x0a\x09else\x0a\x09\x09return false;\x0a}\x0a\x0a\x0a\x0a\x0a\x0a_bsn.DOM.replaceContent = function ( id, cont, html )\x0a{\x0a\x09var ele = this.getElement( id );\x0a\x09\x0a\x09if (!ele)\x0a\x09\x09return false;\x0a\x09\x0a\x09this.clearElement( ele );\x0a\x09\x0a\x09if (typeof(cont) == \x22string\x22 && !html)\x0a\x09\x09ele.appendChild( document.createTextNode(cont) );\x0a\x09else if (typeof(cont) == \x22string\x22 && html)\x0a\x09\x09ele.innerHTML = cont;\x0a\x09else if (typeof(cont) == \x22object\x22)\x0a\x09\x09ele.appendChild( cont );\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a_bsn.DOM.getElement = function ( ele )\x0a{\x0a\x09if (typeof(ele) == \x22undefined\x22)\x0a\x09{\x0a\x09\x09return false;\x0a\x09}\x0a\x09else if (typeof(ele) == \x22string\x22)\x0a\x09{\x0a\x09\x09var re = document.getElementById( ele );\x0a\x09\x09if (!re)\x0a\x09\x09\x09return false;\x0a\x09\x09else if (typeof(re.appendChild) != \x22undefined\x22 ) {\x0a\x09\x09\x09return re;\x0a\x09\x09} else {\x0a\x09\x09\x09return false;\x0a\x09\x09}\x0a\x09}\x0a\x09else if (typeof(ele.appendChild) != \x22undefined\x22)\x0a\x09\x09return ele;\x0a\x09else\x0a\x09\x09return false;\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a_bsn.DOM.appendChildren = function ( id, arr )\x0a{\x0a\x09var ele = this.getElement( id );\x0a\x09\x0a\x09if (!ele)\x0a\x09\x09return false;\x0a\x09\x0a\x09\x0a\x09if (typeof(arr) != \x22object\x22)\x0a\x09\x09return false;\x0a\x09\x09\x0a\x09for (var i=0;i\x3carr.length;i++)\x0a\x09{\x0a\x09\x09var cont = arr[i];\x0a\x09\x09if (typeof(cont) == \x22string\x22)\x0a\x09\x09\x09ele.appendChild( document.createTextNode(cont) );\x0a\x09\x09else if (typeof(cont) == \x22object\x22)\x0a\x09\x09\x09ele.appendChild( cont );\x0a\x09}\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a_bsn.DOM.getPos = function ( ele )\x0a{\x0a\x09var ele = this.getElement(ele);\x0a\x0a\x09var obj = ele;\x0a\x0a\x09var curleft = 0;\x0a\x09if (obj.offsetParent)\x0a\x09{\x0a\x09\x09while (obj.offsetParent)\x0a\x09\x09{\x0a\x09\x09\x09curleft += obj.offsetLeft\x0a\x09\x09\x09obj = obj.offsetParent;\x0a\x09\x09}\x0a\x09}\x0a\x09else if (obj.x)\x0a\x09\x09curleft += obj.x;\x0a\x0a\x0a\x09var obj = ele;\x0a\x09\x0a\x09var curtop = 0;\x0a\x09if (obj.offsetParent)\x0a\x09{\x0a\x09\x09while (obj.offsetParent)\x0a\x09\x09{\x0a\x09\x09\x09curtop += obj.offsetTop\x0a\x09\x09\x09obj = obj.offsetParent;\x0a\x09\x09}\x0a\x09}\x0a\x09else if (obj.y)\x0a\x09\x09curtop += obj.y;\x0a\x0a\x09return {x:curleft, y:curtop}\x0a}\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a\x0a// FADER PROTOTYPE _____________________________________________\x0a\x0a\x0a\x0aif (typeof(_bsn.Fader) == \x22undefined\x22)\x0a\x09_bsn.Fader = {}\x0a\x0a\x0a\x0a\x0a\x0a_bsn.Fader = function (ele, from, to, fadetime, callback)\x0a{\x09\x0a\x09if (!ele)\x0a\x09\x09return false;\x0a\x09\x0a\x09this.ele = ele;\x0a\x09\x0a\x09this.from = from;\x0a\x09this.to = to;\x0a\x09\x0a\x09this.callback = callback;\x0a\x09\x0a\x09this.nDur = fadetime;\x0a\x09\x09\x0a\x09this.nInt = 50;\x0a\x09this.nTime = 0;\x0a\x09\x0a\x09var p = this;\x0a\x09this.nID = setInterval(function() { p._fade() }, this.nInt);\x0a}\x0a\x0a\x0a\x0a\x0a_bsn.Fader.prototype._fade = function()\x0a{\x0a\x09this.nTime += this.nInt;\x0a\x09\x0a\x09var ieop = Math.round( this._tween(this.nTime, this.from, this.to, this.nDur) * 100 );\x0a\x09var op = ieop / 100;\x0a\x09\x0a\x09if (this.ele.filters) // internet explorer\x0a\x09{\x0a\x09\x09try\x0a\x09\x09{\x0a\x09\x09\x09this.ele.filters.item(\x22DXImageTransform.Microsoft.Alpha\x22).opacity = ieop;\x0a\x09\x09} catch (e) { \x0a\x09\x09\x09// If it is not set initially, the browser will throw an error.  This will set it if it is not set yet.\x0a\x09\x09\x09this.ele.style.filter = \x27progid:DXImageTransform.Microsoft.Alpha(opacity=\x27+ieop+\x27)\x27;\x0a\x09\x09}\x0a\x09}\x0a\x09else // other browsers\x0a\x09{\x0a\x09\x09this.ele.style.opacity = op;\x0a\x09}\x0a\x09\x0a\x09\x0a\x09if (this.nTime == this.nDur)\x0a\x09{\x0a\x09\x09clearInterval( this.nID );\x0a\x09\x09if (this.callback != undefined)\x0a\x09\x09\x09this.callback();\x0a\x09}\x0a}\x0a\x0a\x0a\x0a_bsn.Fader.prototype._tween = function(t,b,c,d)\x0a{\x0a\x09return b + ( (c-b) * (t/d) );\x0a}\x0a'}