var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:04:34 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Thu, 02 Jan 2014 00:11:14 GMT\x0aETag: \x2215ec-4eef1a1af6c80-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-2046/2047\x0aContent-Length: 2047\x0aKeep-Alive: timeout=5, max=31\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/******************************************************************************************************************************\x0a\x0a * @ Original idea by by Binny V A, Original version: 2.00.A\x0a * @ http://www.openjs.com/scripts/events/keyboard_shortcuts/\x0a * @ Original License : BSD\x0a\x0a * @ jQuery Plugin by Tzury Bar Yochay\x0a        mail: tzury.by@gmail.com\x0a        blog: evalinux.wordpress.com\x0a        face: facebook.com/profile.php?id=513676303\x0a\x0a        (c) Copyrights 2007\x0a\x0a * @ jQuery Plugin version Beta (0.0.2)\x0a * @ License: jQuery-License.\x0a\x0aTODO:\x0a    add queue support (as in gmail) e.g. \x27x\x27 then \x27y\x27, etc.\x0a    add mouse + mouse wheel events.\x0a\x0aUSAGE:\x0a    $.hotkeys.add(\x27Ctrl+c\x27, function(){ alert(\x27copy anyone?\x27);});\x0a    $.hotkeys.add(\x27Ctrl+c\x27, {target:\x27div#editor\x27, type:\x27keyup\x27, propagate: true},function(){ alert(\x27copy anyone?\x27);});\x3e\x0a    $.hotkeys.remove(\x27Ctrl+c\x27);\x0a    $.hotkeys.remove(\x27Ctrl+c\x27, {target:\x27div#editor\x27, type:\x27keypress\x27});\x0a\x0a******************************************************************************************************************************/\x0a(function (jQuery){\x0a    this.version = \x27(beta)(0.0.3)\x27;\x0a\x09this.all = {};\x0a    this.special_keys = {\x0a        27: \x27esc\x27, 9: \x27tab\x27, 32:\x27space\x27, 13: \x27return\x27, 8:\x27backspace\x27, 145: \x27scroll\x27, 20: \x27capslock\x27,\x0a        144: \x27numlock\x27, 19:\x27pause\x27, 45:\x27insert\x27, 36:\x27home\x27, 46:\x27del\x27,35:\x27end\x27, 33: \x27pageup\x27,\x0a        34:\x27pagedown\x27, 37:\x27left\x27, 38:\x27up\x27, 39:\x27right\x27,40:\x27down\x27, 112:\x27f1\x27,113:\x27f2\x27, 114:\x27f3\x27,\x0a        115:\x27f4\x27, 116:\x27f5\x27, 117:\x27f6\x27, 118:\x27f7\x27, 119:\x27f8\x27, 120:\x27f9\x27, 121:\x27f10\x27, 122:\x27f11\x27, 123:\x27f12\x27};\x0a\x0a    this.shift_nums = { \x22`\x22:\x22~\x22, \x221\x22:\x22!\x22, \x222\x22:\x22@\x22, \x223\x22:\x22#\x22, \x224\x22:\x22$\x22, \x225\x22:\x22%\x22, \x226\x22:\x22^\x22, \x227\x22:\x22&\x22,\x0a        \x228\x22:\x22*\x22, \x229\x22:\x22(\x22, \x220\x22:\x22)\x22, \x22-\x22:\x22_\x22, \x22=\x22:\x22+\x22, \x22;\x22:\x22:\x22, \x22\x27\x22:\x22\x5c\x22\x22, \x22,\x22:\x22\x3c\x22,\x0a        \x22.\x22:\x22\x3e\x22,  \x22/\x22:\x22?\x22,  \x22\x5c\x5c\x22:\x22|\x22 };\x0a\x0a    this.add = function(combi, options, callback) {\x0a        if (jQuery.isFunction(options)){\x0a            callback = options;\x0a            options = {};\x0a        }\x0a        var opt = {},\x0a            defaults = {type: \x27keydown\x27, propagate: false, disableInInput: false, target: jQuery(\x27html\x27)[0]},\x0a            that = this;\x0a        opt = jQuery.extend( opt , defaults, options || {} );\x0a        combi = combi.toLowerCase();\x0a\x0a        // inspect if keystroke matches\x0a        var inspector = function(event) {\x0a            // WP: not needed with newer jQuery\x0a            // event = jQuery.event.fix(event); // jQuery event normalization.\x0a            var element = event.target;\x0a            // @ TextNode -\x3e nodeType == 3\x0a            // WP: not needed with newer jQuery\x0a            // element = (element.nodeType==3) ? element.parentNode : element;\x0a\x0a            if ( opt[\x27disableInInput\x27] ) { // Disable shortcut keys in Input, Textarea fields\x0a                var target = jQuery(element);\x0a\x0a\x09\x09\x09\x09if ( ( target.is(\x27input\x27) || target.is(\x27textarea\x27) ) &&\x0a\x09\x09\x09\x09\x09( ! opt.noDisable || ! target.is( opt.noDisable ) ) ) {\x0a\x0a\x09\x09\x09\x09\x09return;\x0a                }\x0a            }\x0a            var code = event.which,\x0a                type = event.type,\x0a                character = String.fromCharCode(code).toLowerCase(),\x0a                special = that.special_keys[code],\x0a                shift = event.shiftKey,\x0a                ctrl = event.ctrlKey,\x0a                alt= event.altKey,\x0a                meta = event.metaKey,\x0a                propagate = true, // default behaivour\x0a                mapPoint = null;\x0a\x0a            // in opera + safari, the event.target is unpredictable.\x0a            // for example: \x27keydown\x27 might be associated with HtmlBodyElement\x0a            // or the element where you last clicked with your mouse.\x0a            // WP: needed for all browsers\x0a            // if (jQuery.browser.opera || jQuery.browser.safari){\x0a                while (!that.all[element] && element.parentNode){\x0a                    element = element.parentNode;\x0a                }\x0a            // }\x0a            var cbMap = that.all[element].events[type].callbackMap;\x0a            if(!shift && !ctrl && !alt && !meta) { // No Modifiers\x0a                mapPoint = cbMap[special] ||  cbMap[character]\x0a\x09\x09\x09}\x0a            // deals with combinaitons (alt|ctrl|shift+anything)\x0a            else{\x0a                var modif = \x27\x27;\x0a                if(alt) modif +=\x27alt+\x27;\x0a                if(ctrl) modif+= \x27ctrl+\x27;\x0a                if(shift) modif += \x27shift+\x27;\x0a                if(meta) modif += \x27meta+\x27;\x0a                // modifiers + special keys or modifiers + characters or modifiers + shift characters\x0a                mapPoint = cbMap[modif+special] || cbMap[modif+character] || cbMap[modif+that.shift_nums[character]]\x0a            }\x0a            if (mapPoint){\x0a                mapPoint.cb(event);\x0a                if(!mapPoint.propagate) {\x0a                    event.stopPropagation();\x0a                    event.preventDefault();\x0a                    return false;\x0a                }\x0a            }\x0a\x09\x09};\x0a        // first hook for this element\x0a        if (!this.all[opt.target]){\x0a            this.all[opt.target] = {events:{}};\x0a        }\x0a        if (!this.all[opt.target].events[opt.type]){\x0a            this.all[opt.target].events[opt.type] = {callbackMap: {}}\x0a            jQuery.event.add(opt.target, opt.type, inspector);\x0a        }\x0a        this.all[opt.target].events[opt.type].callbackMap[combi] =  {cb: callback, propagate:opt.propagate};\x0a        return jQuery;\x0a\x09};\x0a    this.remove = function(exp, opt) {\x0a        opt = opt || {};\x0a        target = opt.target || jQuery(\x27html\x27)[0];\x0a        type = opt.type || \x27keydown\x27;\x0a\x09\x09exp = exp.toLowerCase();\x0a        delete this.all[target].events[type].callbackMap[exp]\x0a        return jQuery;\x0a\x09};\x0a    jQuery.hotkeys = this;\x0a    return jQuery;\x0a})(jQuery);\x0ab){c(h1'}