var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 15:12:03 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Fri, 04 May 2007 21:48:43 GMT\x0aETag: \x224065-42fabea42c4c0-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-4991/4992\x0aContent-Length: 4992\x0aKeep-Alive: timeout=5, max=32\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0a/**\x0a * Copyright (c) 2006, David Spurr (http://www.defusion.org.uk/)\x0a * All rights reserved.\x0a *\x0a * Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:\x0a *\x0a *     * Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.\x0a *     * Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.\x0a *     * Neither the name of the David Spurr nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.\x0a *\x0a * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \x22AS IS\x22 AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.\x0a *\x0a * http://www.opensource.org/licenses/bsd-license.php\x0a *\x0a * See scriptaculous.js for full scriptaculous licence\x0a */\x0a\x0avar CropDraggable=Class.create();\x0aObject.extend(Object.extend(CropDraggable.prototype,Draggable.prototype),{initialize:function(_1){\x0athis.options=Object.extend({drawMethod:function(){\x0a}},arguments[1]||{});\x0athis.element=$(_1);\x0athis.handle=this.element;\x0athis.delta=this.currentDelta();\x0athis.dragging=false;\x0athis.eventMouseDown=this.initDrag.bindAsEventListener(this);\x0aEvent.observe(this.handle,\x22mousedown\x22,this.eventMouseDown);\x0aDraggables.register(this);\x0a},draw:function(_2){\x0avar _3=Position.cumulativeOffset(this.element);\x0avar d=this.currentDelta();\x0a_3[0]-=d[0];\x0a_3[1]-=d[1];\x0avar p=[0,1].map(function(i){\x0areturn (_2[i]-_3[i]-this.offset[i]);\x0a}.bind(this));\x0athis.options.drawMethod(p);\x0a}});\x0avar Cropper={};\x0aCropper.Img=Class.create();\x0aCropper.Img.prototype={initialize:function(_7,_8){\x0athis.options=Object.extend({ratioDim:{x:0,y:0},minWidth:0,minHeight:0,displayOnInit:false,onEndCrop:Prototype.emptyFunction,captureKeys:true},_8||{});\x0aif(this.options.minWidth\x3e0&&this.options.minHeight\x3e0){\x0athis.options.ratioDim.x=this.options.minWidth;\x0athis.options.ratioDim.y=this.options.minHeight;\x0a}\x0athis.img=$(_7);\x0athis.clickCoords={x:0,y:0};\x0athis.dragging=false;\x0athis.resizing=false;\x0athis.isWebKit=/Konqueror|Safari|KHTML/.test(navigator.userAgent);\x0athis.isIE=/MSIE/.test(navigator.userAgent);\x0athis.isOpera8=/Opera\x5cs[1-8]/.test(navigator.userAgent);\x0athis.ratioX=0;\x0athis.ratioY=0;\x0athis.attached=false;\x0a$A(document.getElementsByTagName(\x22script\x22)).each(function(s){\x0aif(s.src.match(/cropper\x5c.js/)){\x0avar _a=s.src.replace(/cropper\x5c.js(.*)?/,\x22\x22);\x0avar _b=document.createElement(\x22link\x22);\x0a_b.rel=\x22stylesheet\x22;\x0a_b.type=\x22text/css\x22;\x0a_b.href=_a+\x22cropper.css\x22;\x0a_b.media=\x22screen\x22;\x0adocument.getElementsByTagName(\x22head\x22)[0].appendChild(_b);\x0a}\x0a});\x0aif(this.options.ratioDim.x\x3e0&&this.options.ratioDim.y\x3e0){\x0avar _c=this.getGCD(this.options.ratioDim.x,this.options.ratioDim.y);\x0athis.ratioX=this.options.ratioDim.x/_c;\x0athis.ratioY=this.options.ratioDim.y/_c;\x0a}\x0athis.subInitialize();\x0aif(this.img.complete||this.isWebKit){\x0athis.onLoad();\x0a}else{\x0aEvent.observe(this.img,\x22load\x22,this.onLoad.bindAsEventListener(this));\x0a}\x0a},getGCD:function(a,b){return 1;\x0aif(b==0){\x0areturn a;\x0a}\x0areturn this.getGCD(b,a%b);\x0a},onLoad:function(){\x0avar _f=\x22imgCrop_\x22;\x0avar _10=this.img.parentNode;\x0avar _11=\x22\x22;\x0aif(this.isOpera8){\x0a_11=\x22 opera8\x22;\x0a}\x0athis.imgWrap=Builder.node(\x22div\x22,{\x22class\x22:_f+\x22wrap\x22+_11});\x0aif(this.isIE){\x0athis.north=Builder.node(\x22div\x22,{\x22class\x22:_f+\x22overlay \x22+_f+\x22north\x22},[Builder.node(\x22span\x22)]);\x0athis.east=Builder.node(\x22div\x22,{\x22class\x22:_f+\x22overlay \x22+_f+\x22east\x22},[Builder.node(\x22span\x22)]);\x0athis.south=Builder.node(\x22div\x22,{\x22class\x22:_f+\x22overlay \x22+_f+\x22south\x22},[Builder.node(\x22span\x22)]);\x0athis.west=Builder.node(\x22div\x22,{\x22class\x22:_f+\x22overlay \x22+_f+\x22west\x22},[Builder.node(\x22span\x22)]);\x0avar _12=[this.north,this.east,this.south,this.west];\x0a}else{\x0athis.overlay=Builder.node(\x22div\x22,{\x22class\x22:_f+\x22overlay\x22});\x0avar _12=[this.overlay];\x0a}\x0athis.dragArea=Builder.node(\x22div\x22,{\x22class\x22:_f+\x22dragArea\x22},_12);\x0athis.handleN=Builder.node(\x22div\x22,{\x22class\x22:_f+\x22handle \x22+_f+\x22handleN\x22});\x0athis.handleNE=Builder.node(\x22div\x22,{\x22class\x22:_f+\x22handle \x22+_f+\x22handleNE\x22});\x0athis.handleE=Builder.node(\x22div\x22,{\x22class\x22:_f+\x22handle \x22+_f+\x22handleE\x22});\x0athis.handleSE=Builder.node(\x22div\x22,{\x22class\x22:_f+\x22handle \x22+_f+\x22handleSE\x22});\x0athis.handleS=Builder.node(\x22div\x22,{\x22class\x22:_f+\x22handle \x22+_f+\x22handleS\x22});\x0athis.handleSW=Builder.node(\x22div\x22,{\x22class\x22:_f+\x22handle \x22+_f+\x22handleSW\x22});\x0athis.handleW=Builder.node(\x22div\x22,{\x22class\x22:_f+\x22handle \x22+_f+\x22handleW\x22});\x0athis.handleNW=Builder.node(\x22div\x22,{\x22class\x22:_f+\x22handle \x22+_f+\x22handleNW\x22});\x0athis.selArea=Builder.node(\x22div\x22,{\x22class\x22:_f+\x22selArea\x22},[Builder.node(\x22div\x22,{\x22class\x22:_f+\x22marqueeHoriz \x22+_f+\x22marqueeNorth\x22},[Builder.node(\x22span\x22)]),Builder.node(\x22div\x22,{\x22class\x22:_f+\x22marqueeVert \x22+_f+\x22marqueeEast\x22},[Builder.node(\x22span\x22)]),Builder.node(\x22div\x22,{\x22class\x22:_f+\x22marqueeHoriz \x22+_f+\x22marqueeSouth\x22},[Builder.node(\x22span\x22)]),Builder.node(\x22div\x22,{\x22class\x22:_f+\x22marqueeVert \x22+_f+\x22marqueeWest\x22},[Builder.node(\x22span\x22)]),this.handleN,this.handleNE,this.handleE,this.handleSE,this.handleS,this.handleSW,this.handleW,this.handleNW,Builder.node(\x22div\x22,{\x22class\x22:_f+\x22clickArea\x22})]);\x0aElement.setStyle($(this.selArea),{backgroundColor:\x22transparent\x22,backgroundRepeat:\x22no-repeat\x22,backgroundPosition:\x220 0\x22});\x0athis.imgWrap.appendChild(this.img);\x0athis.imgWrap.appendChild(this.dragArea);\x0athis.dragArea.appendChild(this.selArea);\x0athis.dragArea.appendChild(Builder.node(\x22div\x22,{\x22class\x22:_f+\x22clickArea\x22}));\x0a_10.appendChild(this.imgWrap);\x0aEvent.observe(this.dragArea,\x22mousedown\x22,this.startDrag.bindAsEventListener(this));\x0aEvent.observe(document,\x22mousemove\x22,this.onDrag.bindAsEventListener(this));\x0aEvent.observe(document,\x22mouseup\x22,this.endCrop.bindAsEventListener(this));\x0avar _13=[this.handleN,this.handleNE,this.handleE,this.handleSE,this.handleS,this.handleSW,this.handleW,this.handleNW];\x0afor(var i=0;i\x3c_13.length;i++){\x0aEvent.observe(_13[i],\x22mousedown\x22,this.startResize.bindAsEventListener(this));\x0a}\x0aif(this.options.captureKeys){\x0aEvent.observe(document,\x22keydown\x22,this.handleKeys.bindAsEventListener(this));\x0a}\x0anew CropDraggable(this.selArea,{drawMethod:this.moveArea.bindAsEventListener(this)});\x0athis.setParams();\x0a},setParams:function(){\x0athis.imgW=this.img.width;\x0athis.imgH=this.img.height;\x0aif(!this.isIE){\x0aElement.setStyle($(this.overlay),{width:this.imgW+\x22px\x22,height:this.imgH+\x22px\x22});\x0aElement.hide($(this.overlay));\x0aElement.setStyle($(this.selArea),{backgroundImage:\x22url(\x22+this.img.src+\x22)\x22});\x0a}else{\x0aElement.setStyle($(this.north),{height:0});\x0aElement.setStyle($(this.east),{width:0,height:0});\x0aElement.setStyle($(this.south),{height:0});\x0aElement.setStyle($(this.west),{width:0,height:0});\x0a}\x0aElement.setStyle($(this.imgWrap),{\x22width\x22:this.imgW+\x22px\x22,\x22height\x22:this.imgH+\x22px\x22});\x0aElement.hide($(this.selArea));\x0avar _15=Position.positionedOffset(this.imgWrap);\x0athis.wrapOffsets={\x22top\x22:_15[1],\x22left\x22:_15[0]};\x0avar _16={x1:0,y1:0,x2:0,y2:0};\x0athis.setAreaCoords(_16);\x0aif(this.options.ratioDim.x\x3e0&&this.options.ratioDim.y\x3e0&&this.options.displayOnInit){\x0a_16.x1=Math.ceil((this.imgW-this.options.ratioDim.x)/2);\x0a_16.y1=Math.ceil((this.imgH-this.options.ratioDim.y)/2);\x0a_16.x2=_16.x1+this.options.ratioDim.x;\x0a_16.y2=_16.y1+this.options.ratioDim.y;\x0aElement.show(this.selArea);\x0athis.drawArea();\x0athis.endCrop();\x0a}\x0athis.attached=true;\x0a},remove:function(){\x0athis.attached=false;\x0athis.imgWrap.parentNode.insertBefore(this.img,this.imgWrap);\x0athis.imgWrap.parentNode.removeChild(this.imgWrap);\x0aEvent.stopObserving(this.dragArea,\x22mousedown\x22,this.startDrag.bindAsEventListener(this));\x0aEvent.stopObserving(document,\x22mousemove\x22,this.onDrag.bindAsEventListener(this));\x0aEvent.stopObserving(document,\x22mouseup\x22,this.endCrop.bindAsEventListener(this));\x0avar _17=[this.handleN,this.handleNE,this.handleE,this.handleSE,this.handleS,this.handleSW,this.handleW,this.handleNW];\x0afor(var i=0;i\x3c_17.length;i++){\x0aEvent.stopObserving(_17[i],\x22mousedown\x22,this.startResize.bindAsEventListener(this));\x0a}\x0aif(this.options.captureKeys){\x0aEvent.stopObserving(document,\x22keydown\x22,this.handleKeys.bindAsEventListener(this));\x0a}\x0a},reset:function(){\x0aif(!this.attached){\x0athis.onLoad();\x0a}else{\x0athis.setParams();\x0a}\x0athis.endCrop();\x0a},handleKeys:function(e){\x0avar dir={x:0,y:0};\x0aif(!this.dragging){\x0aswitch(e.keyCode){\x0acase (37):\x0adir.x=-1;\x0abreak;\x0acase (38):\x0adir.y=-1;\x0abreak;\x0acase (39):\x0adir.x=1;\x0abreak;\x0acase (40):\x0adir.y=1;\x0abreak;\x0a}\x0aif(dir.x!=0||dir.y!=0){\x0aif(e.shiftKey){\x0adir.x*=10;\x0adir.y*=10;\x0a}\x0athis.moveArea([this.areaCoords.x1+dir.x,this.areaCoords.y1+dir.y]);\x0aEvent.stop(e);\x0a}\x0a}\x0a},calcW:function(){\x0areturn (this.areaCoords.x2-this.areaCoords.x1);\x0a},calcH:function(){\x0areturn (this.areaCoords.y2-this.areaCoords.y1);\x0a},moveArea:function(_1b){\x0athis.setAreaCoords({x1:_1b[0],y1:_1b[1],x2:_1b[0]+this.calcW(),y2:_1b[1]+this.calcH()},true);\x0athis.drawArea();\x0a},cloneCoords:function(_1c){\x0areturn {x1:_1c.x1,y1:_1c.y1,x2:_1c.x2,y2:_1c.y2};\x0a},setAreaCoords:function(_1d,_1e,_1f,_20,_21){\x0avar _22=typeof _1e!=\x22undefined\x22?_1e:false;\x0avar _23=typeof _1f!=\x22undefined\x22?_1f:false;\x0aif(_1e){\x0avar _24=_1d.x2-_1d.x1;\x0avar _25=_1d.y2-_1d.y1;\x0aif(_1d.x1\x3c0){\x0a_1d.x1=0;\x0a_1d.x2=_24;\x0a}\x0aif(_1d.y1\x3c0){\x0a_1d.y1=0;\x0a_1d.y2=_25;\x0a}\x0aif(_1d.x2\x3ethis.imgW){\x0a_1d.x2=this.imgW;\x0a_1d.x1=this.imgW-_24;\x0a}\x0aif(_1d.y2\x3ethis.imgH){\x0a_1d.y2=this.imgH;\x0a_1d.y1=this.imgH-_25;\x0a}\x0a}else{\x0aif(_1d.x1\x3c0){\x0a_1d.x1=0;\x0a}\x0aif(_1d.y1\x3c0){\x0a_1d.y1=0;\x0a}\x0aif(_1d.x2\x3ethis.imgW){\x0a_1d.x2=this.imgW;\x0a}\x0aif(_1d.y2\x3ethis.imgH){\x0a_1d.y2=this.imgH;\x0a}\x0aif(typeof (_20)!=\x22undefined\x22){\x0aif(this.ratioX\x3e0){\x0athis.applyRatio(_1d,{x:this.ratioX,y:this.ratioY},_20,_21);\x0a}else{\x0aif(_23){\x0athis.applyRatio(_1d,{x:1,y:1},_20,_21);\x0a}\x0a}\x0avar _26={a1:_1d.x1,a2:_1d.x2};\x0avar _27={a1:_1d.y1,a2:_1d.y2};\x0avar _28=this.options.minWidth;\x0avar _29=this.options.minHeight;\x0aif((_28==0||_29==0)&&_23){\x0aif(_28\x3e0){\x0a_29=_28;\x0a}else{\x0aif(_29\x3e0){\x0a_28=_29;\x0a}\x0a}\x0a}\x0athis.applyMinDimension(_26,_28,_20.x,{min:0,max:this.imgW});\x0athis.applyMinDimension(_27,_29,_20.y,{min:0,max:this.imgH});\x0a_1d={x1:_26.a1,y1:_27.a1,x2:_26.a2,y2:_27.a2};\x0a}\x0a}\x0athis.areaCoords=_1d;\x0a},applyMinDimension:function(_2a,_2b,_2c,_2d){\x0aif((_2a.a2-_2a.a1)\x3c_2b){\x0aif(_2c==1){\x0a_2a.a2=_2a.a1+_2b;\x0a}else{\x0a_2a.a1=_2a.a2-_2b;\x0a}\x0aif(_2a.a1\x3c_2d.min){\x0a_2a.a1=_2d.min;\x0a_2a.a2=_2b;\x0a}else{\x0aif(_2a.a2\x3e_2d.max){\x0a_2a.a1=_2d.max-_2b;\x0a_2a.a2=_2d.max;\x0a}\x0a}\x0a}\x0a},applyRatio:function(_2e,_2f,_30,_31){\x0avar _32;\x0aif(_31==\x22N\x22||_31==\x22S\x22){\x0a_32=this.applyRatioToAxis({a1:_2e.y1,b1:_2e.x1,a2:_2e.y2,b2:_2e.x2},{a:_2f.y,b:_2f.x},{a:_30.y,b:_30.x},{min:0,max:this.imgW});\x0a_2e.x1=_32.b1;\x0a_2e.y1=_32.a1;\x0a_2e.x2=_32.b2;\x0a_2e.y2=_32.a2;\x0a}else{\x0a_32=this.applyRatioToAxis({a1:_2e.x1,b1:_2e.y1,a2:_2e.x2,b2:_2e.y2},{a:_2f.x,b:_2f.y},{a:_30.x,b:_30.y},{min:0,max:this.imgH});\x0a_2e.x1=_32.a1;\x0a_2e.y1=_32.b1;\x0a_2e.x2=_32.a2;\x0a_2e.y2=_32.b2;\x0a}\x0a},applyRatioToAxis:function(_33,_34,_35,_36){\x0avar _37=Object.extend(_33,{});\x0avar _38=_37.a2-_37.a1;\x0avar _3a=Math.floor(_38*_34.b/_34.a);\x0avar _3b;\x0avar _3c;\x0avar _3d=null;\x0aif(_35.b==1){\x0a_3b=_37.b1+_3a;\x0aif(_3b\x3e_36.max){\x0a_3b=_36.max;\x0a_3d=_3b-_37.b1;\x0a}\x0a_37.b2=_3b;\x0a}else{\x0a_3b=_37.b2-_3a;\x0aif(_3b\x3c_36.min){\x0a_3b=_36.min;\x0a_3d=_3b+_37.b2;\x0a}\x0a_37.b1=_3b;\x0a}\x0aif(_3d!=null){\x0a_3c=Math.floor(_3d*_34.a/_34.b);\x0aif(_35.a==1){\x0a_37.a2=_37.a1+_3c;\x0a}else{\x0a_37.a1=_37.a1=_37.a2-_3c;\x0a}\x0a}\x0areturn _37;\x0a},drawArea:function(){\x0aif(!this.isIE){\x0aElement.show($(this.overlay));\x0a}\x0avar _3e=this.calcW();\x0avar _3f=this.calcH();\x0avar _40=this.areaCoords.x2;\x0avar _41=this.areaCoords.y2;\x0avar _42=this.selArea.style;\x0a_42.left=this.areaCoords.x1+\x22px\x22;\x0a_42.top=this.areaCoords.y1+\x22px\x22;\x0a_42.width=_3e+\x22px\x22;\x0a_42.height=_3f+\x22px\x22;\x0avar _43=Math.ceil((_3e-6)/2)+\x22px\x22;\x0avar _44=Math.ceil((_3f-6)/2)+\x22px\x22;\x0athis.handleN.style.left=_43;\x0athis.handleE.style.top=_44;\x0athis.handleS.style.left=_43;\x0athis.handleW.style.top=_44;\x0aif(this.isIE){\x0athis.north.style.height=this.areaCoords.y1+\x22px\x22;\x0avar _45=this.east.style;\x0a_45.top=this.areaCoords.y1+\x22px\x22;\x0a_45.height=_3f+\x22px\x22;\x0a_45.left=_40+\x22px\x22;\x0a_45.width=(this.img.width-_40)+\x22px\x22;\x0avar _46=this.south.style;\x0a_46.top=_41+\x22px\x22;\x0a_46.height=(this.img.height-_41)+\x22px\x22;\x0avar _47=this.west.style;\x0a_47.top=this.areaCoords.y1+\x22px\x22;\x0a_47.height=_3f+\x22px\x22;\x0a_47.width=this.areaCoords.x1+\x22px\x22;\x0a}else{\x0a_42.backgroundPosition=\x22-\x22+this.areaCoords.x1+\x22px \x22+\x22-\x22+this.areaCoords.y1+\x22px\x22;\x0a}\x0athis.subDrawArea();\x0athis.forceReRender();\x0a},forceReRender:function(){\x0aif(this.isIE||this.isWebKit){\x0avar n=document.createTextNode(\x22 \x22);\x0avar d,el,fixEL,i;\x0aif(this.isIE){\x0afixEl=this.selArea;\x0a}else{\x0aif(this.isWebKit){\x0afixEl=document.getElementsByClassName(\x22imgCrop_marqueeSouth\x22,this.imgWrap)[0];\x0ad=Builder.node(\x22div\x22,\x22\x22);\x0ad.style.visibility=\x22hidden\x22;\x0avar _4a=[\x22SE\x22,\x22S\x22,\x22SW\x22];\x0afor(i=0;i\x3c_4a.length;i++){\x0ael=document.getElementsByClassName(\x22imgCrop_handle\x22+_4a[i],this.selArea)[0];\x0aif(el.childNodes.length){\x0ael.removeChild(el.childNodes[0]);\x0a}\x0ael.appendChild(d);\x0a}\x0a}\x0a}\x0afixEl.appendChild(n);\x0afixEl.removeChild(n);\x0a}\x0a},startResize:function(e){\x0athis.startCoords=this.cloneCoords(this.areaCoords);\x0athis.resizing=true;\x0athis.resizeHandle=Element.classNames(Event.element(e)).toString().replace(/([^N|NE|E|SE|S|SW|W|NW])+/,\x22\x22);\x0aEvent.stop(e);\x0a},startDrag:function(e){\x0aElement.show(this.selArea);\x0athis.clickCoords=this.getCurPos(e);\x0athis.setAreaCoords({x1:this.clickCoords.x,y1:this.clickCoords.y,x2:this.clickCoords.x,y2:this.clickCoords.y});\x0athis.dragging=true;\x0athis.onDrag(e);\x0aEvent.stop(e);\x0a},getCurPos:function(e){\x0areturn curPos={x:Event.pointerX(e)-this.wrapOffsets.left,y:Event.pointerY(e)-this.wrapOffsets.top};\x0a},onDrag:function(e){\x0avar _4f=null;\x0aif(this.dragging||this.resizing){\x0avar _50=this.getCurPos(e);\x0avar _51=this.cloneCoords(this.areaCoords);\x0avar _52={x:1,y:1};\x0a}\x0aif(this.dragging){\x0aif(_50.x\x3cthis.clickCoords.x){\x0a_52.x=-1;\x0a}\x0aif(_50.y\x3cthis.clickCoords.y){\x0a_52.y=-1;\x0a}\x0athis.transformCoords(_50.x,this.clickCoords.x,_51,\x22x\x22);\x0athis.transformCoords(_50.y,this.clickCoords.y,_51,\x22y\x22);\x0a}else{\x0aif(this.resizing){\x0a_4f=this.resizeHandle;\x0aif(_4f.match(/E/)){\x0athis.transformCoords(_50.x,this.startCoords.x1,_51,\x22x\x22);\x0aif(_50.x\x3cthis.startCoords.x1){\x0a_52.x=-1;\x0a}\x0a}else{\x0aif(_4f.match(/W/)){\x0athis.transformCoords(_50.x,this.startCoords.x2,_51,\x22x\x22);\x0aif(_50.x\x3cthis.startCoords.x2){\x0a_52.x=-1;\x0a}\x0a}\x0a}\x0aif(_4f.match(/N/)){\x0athis.transformCoords(_50.y,this.startCoords.y2,_51,\x22y\x22);\x0aif(_50.y\x3cthis.startCoords.y2){\x0a_52.y=-1;\x0a}\x0a}else{\x0aif(_4f.match(/S/)){\x0athis.transformCoords(_50.y,this.startCoords.y1,_51,\x22y\x22);\x0aif(_50.y\x3cthis.startCoords.y1){\x0a_52.y=-1;\x0a}\x0a}\x0a}\x0a}\x0a}\x0aif(this.dragging||this.resizing){\x0athis.setAreaCoords(_51,false,e.shiftKey,_52,_4f);\x0athis.drawArea();\x0aEvent.stop(e);\x0a}\x0a},transformCoords:function(_53,_54,_55,_56){\x0avar _57=new Array();\x0aif(_53\x3c_54){\x0a_57[0]=_53;\x0a_57[1]=_54;\x0a}else{\x0a_57[0]=_54;\x0a_57[1]=_53;\x0a}\x0aif(_56==\x22x\x22){\x0a_55.x1=_57[0];\x0a_55.x2=_57[1];\x0a}else{\x0a_55.y1=_57[0];\x0a_55.y2=_57[1];\x0a}\x0a},endCrop:function(){\x0athis.dragging=false;\x0athis.resizing=false;\x0athis.options.onEndCrop(this.areaCoords,{width:this.calcW(),height:this.calcH()});\x0a},subInitialize:function(){\x0a},subDrawArea:function(){\x0a}};\x0aCropper.ImgWithPreview=Class.create();\x0aObject.extend(Object.extend(Cropper.ImgWithPreview.prototype,Cropper.Img.prototype),{subInitialize:function(){\x0athis.hasPreviewImg=false;\x0aif(typeof (this.options.previewWrap)!=\x22undefined\x22&&this.options.minWidth\x3e0&&this.options.minHeight\x3e0){\x0athis.previewWrap=$(this.options.previewWrap);\x0athis.previewImg=this.img.cloneNode(false);\x0athis.options.displayOnInit=true;\x0athis.hasPreviewImg=true;\x0aElement.addClassName(this.previewWrap,\x22imgCrop_previewWrap\x22);\x0aElement.setStyle(this.previewWrap,{width:this.options.minWidth+\x22px\x22,height:this.options.minHeight+\x22px\x22});\x0athis.previewWrap.appendChild(this.previewImg);\x0a}\x0a},subDrawArea:function(){\x0aif(this.hasPreviewImg){\x0avar _58=this.calcW();\x0avar _59=this.calcH();\x0avar _5a={x:this.imgW/_58,y:this.imgH/_59};\x0avar _5b={x:_58/this.options.minWidth,y:_59/this.options.minHeight};\x0avar _5c={w:Math.ceil(this.options.minWidth*_5a.x)+\x22px\x22,h:Math.ceil(this.options.minHeight*_5a.y)+\x22px\x22,x:\x22-\x22+Math.ceil(this.areaCoords.x1/_5b.x)+\x22px\x22,y:\x22-\x22+Math.ceil(this.areaCoords.y1/_5b.y)+\x22px\x22};\x0avar _5d=this.previewImg.style;\x0a_5d.width=_5c.w;\x0a_5d.height=_5c.h;\x0a_5d.left=_5c.x;\x0a_5d.top=_5c.y;\x0a}\x0a}});\x0a'}