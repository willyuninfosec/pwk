var res = {'data':'HTTP/1.1 200 Partial Content\x0aDate: Sun, 20 Sep 2020 14:53:27 GMT\x0aServer: Apache/2.4.29 (Ubuntu)\x0aLast-Modified: Sun, 28 Jun 2015 14:51:30 GMT\x0aETag: \x22cd3-519951bc0e080-gzip\x22\x0aAccept-Ranges: bytes\x0aVary: Accept-Encoding\x0aContent-Encoding: gzip\x0aContent-Range: bytes 0-1141/1142\x0aContent-Length: 1142\x0aKeep-Alive: timeout=5, max=66\x0aConnection: Keep-Alive\x0aContent-Type: application/javascript\x0a\x0afunction sack(file){this.xmlhttp=null,this.resetData=function(){this.method=\x22POST\x22,this.queryStringSeparator=\x22?\x22,this.argumentSeparator=\x22&\x22,this.URLString=\x22\x22,this.encodeURIString=!0,this.execute=!1,this.element=null,this.elementObj=null,this.requestFile=file,this.vars=new Object,this.responseStatus=new Array(2)},this.resetFunctions=function(){this.onLoading=function(){},this.onLoaded=function(){},this.onInteractive=function(){},this.onCompletion=function(){},this.onError=function(){},this.onFail=function(){}},this.reset=function(){this.resetFunctions(),this.resetData()},this.createAJAX=function(){try{this.xmlhttp=new ActiveXObject(\x22Msxml2.XMLHTTP\x22)}catch(a){try{this.xmlhttp=new ActiveXObject(\x22Microsoft.XMLHTTP\x22)}catch(b){this.xmlhttp=null}}this.xmlhttp||(\x22undefined\x22!=typeof XMLHttpRequest?this.xmlhttp=new XMLHttpRequest:this.failed=!0)},this.setVar=function(a,b){this.vars[a]=Array(b,!1)},this.encVar=function(a,b,c){return 1==c?Array(encodeURIComponent(a),encodeURIComponent(b)):void(this.vars[encodeURIComponent(a)]=Array(encodeURIComponent(b),!0))},this.processURLString=function(a,b){for(encoded=encodeURIComponent(this.argumentSeparator),regexp=new RegExp(this.argumentSeparator+\x22|\x22+encoded),varArray=a.split(regexp),i=0;i\x3cvarArray.length;i++)urlVars=varArray[i].split(\x22=\x22),1==b?this.encVar(urlVars[0],urlVars[1]):this.setVar(urlVars[0],urlVars[1])},this.createURLString=function(a){this.encodeURIString&&this.URLString.length&&this.processURLString(this.URLString,!0),a&&(this.URLString.length?this.URLString+=this.argumentSeparator+a:this.URLString=a),this.setVar(\x22rndval\x22,(new Date).getTime()),urlstringtemp=new Array;for(key in this.vars)0==this.vars[key][1]&&1==this.encodeURIString&&(encoded=this.encVar(key,this.vars[key][0],!0),delete this.vars[key],this.vars[encoded[0]]=Array(encoded[1],!0),key=encoded[0]),urlstringtemp[urlstringtemp.length]=key+\x22=\x22+this.vars[key][0];a?this.URLString+=this.argumentSeparator+urlstringtemp.join(this.argumentSeparator):this.URLString+=urlstringtemp.join(this.argumentSeparator)},this.runResponse=function(){eval(this.response)},this.runAJAX=function(a){if(this.failed)this.onFail();else if(this.createURLString(a),this.element&&(this.elementObj=document.getElementById(this.element)),this.xmlhttp){var b=this;if(\x22GET\x22==this.method)totalurlstring=this.requestFile+this.queryStringSeparator+this.URLString,this.xmlhttp.open(this.method,totalurlstring,!0);else{this.xmlhttp.open(this.method,this.requestFile,!0);try{this.xmlhttp.setRequestHeader(\x22Content-Type\x22,\x22application/x-www-form-urlencoded\x22)}catch(c){}}this.xmlhttp.onreadystatechange=function(){switch(b.xmlhttp.readyState){case 1:b.onLoading();break;case 2:b.onLoaded();break;case 3:b.onInteractive();break;case 4:b.response=b.xmlhttp.responseText,b.responseXML=b.xmlhttp.responseXML,b.responseStatus[0]=b.xmlhttp.status,b.responseStatus[1]=b.xmlhttp.statusText,b.execute&&b.runResponse(),b.elementObj&&(elemNodeName=b.elementObj.nodeName,elemNodeName.toLowerCase(),\x22input\x22==elemNodeName||\x22select\x22==elemNodeName||\x22option\x22==elemNodeName||\x22textarea\x22==elemNodeName?b.elementObj.value=b.response:b.elementObj.innerHTML=b.response),\x22200\x22==b.responseStatus[0]?b.onCompletion():b.onError(),b.URLString=\x22\x22}},this.xmlhttp.send(this.URLString)}},this.reset(),this.createAJAX()}'}