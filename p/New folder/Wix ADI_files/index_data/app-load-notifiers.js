function UUID(){}(function(){this.setCookie=function(c_name,value,exdays){var c_value,exdate;return exdate=new Date,exdate.setDate(exdate.getDate()+exdays),c_value=encodeURIComponent(value)+(null==exdays?"":"; expires="+exdate.toUTCString()),document.cookie=c_name+"="+c_value},this.getCookie=function(c_name){var ARRcookies,i,x,y;for(i=void 0,x=void 0,y=void 0,ARRcookies=document.cookie.split(";"),i=0;i<ARRcookies.length;){if(x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("=")),y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1),(x=x.replace(/^\s+|\s+$/g,""))===c_name)return decodeURIComponent(y);i++}}}).call(this),UUID.generate=function(){var rand=UUID._gri,hex=UUID._ha;return hex(rand(32),8)+"-"+hex(rand(16),4)+"-"+hex(16384|rand(12),4)+"-"+hex(32768|rand(14),4)+"-"+hex(rand(48),12)},UUID._gri=function(x){return x<0?NaN:x<=30?0|Math.random()*(1<<x):x<=53?(0|Math.random()*(1<<30))+(0|Math.random()*(1<<x-30))*(1<<30):NaN},UUID._ha=function(num,length){for(var str=num.toString(16),i=length-str.length,z="0";i>0;i>>>=1,z+=z)1&i&&(str=z+str);return str},function(){"use strict";var params,visitsCount;visitsCount=+(getCookie("visitsCount")||0),setCookie("visitsCount",visitsCount+1,365),this.sessionId||(this.sessionId=UUID.generate()),params={};try{params=top.location.search.substring(1).split("&").map(function(el){return el.split("=")}).reduce(function(accum,el){return accum[el[0]]=el[1],accum})}catch(undefined){}this.siteId=params.siteId||UUID.generate(),this.jsLoadingStartedAt=(new Date).getTime()}.call(this),function(){"use strict";var getLog,isDebugEnabled,slice=[].slice;isDebugEnabled=function(){var ref,ref1;try{return window.DEBUG||(null!=(ref=window.parent)?ref.DEBUG:void 0)||(null!=(ref1=window.top)?ref1.DEBUG:void 0)}catch(error1){return error1,window.DEBUG}},getLog=function(){var ref,ref1;try{return(null!=(ref=window.top)&&null!=(ref1=ref.Logger)?ref1._log:void 0)||Logger._log}catch(error1){return error1,Logger._log}},this.Logger=function(){function Logger(_serviceName){this._serviceName=_serviceName}return Logger.prototype._serviceName="",Logger.prototype._pushLog=function(args,type){return null==type&&(type="log"),getLog().push({type:type,serviceName:this._serviceName,args:args})},Logger.prototype.log=function(){var args;if(args=1<=arguments.length?slice.call(arguments,0):[],this._pushLog(arguments,"log"),isDebugEnabled())return console.log.apply(console,[this._serviceName].concat(slice.call(args)))},Logger.prototype.warn=function(){var args;if(args=1<=arguments.length?slice.call(arguments,0):[],this._pushLog(arguments,"warn"),isDebugEnabled())return console.warn.apply(console,[this._serviceName].concat(slice.call(args)))},Logger.prototype.error=function(){var args;if(args=1<=arguments.length?slice.call(arguments,0):[],this._pushLog(arguments,"error"),isDebugEnabled())return console.error.apply(console,[this._serviceName].concat(slice.call(args)))},Logger}(),this.Logger._log=[],window.addEventListener("keydown",function(event){var keyCode;if(!isDebugEnabled())return keyCode=event.keyCode||event.which,76===keyCode&&event.shiftKey&&event.altKey&&(event.metaKey||event.ctrlKey)?(window.DEBUG=!0,_.forEach(getLog(),function(data){var args;return args=Array.prototype.slice.apply(data.args||[]),args.unshift(data.serviceName),console[data.type].apply(console,args)})):void 0})}.call(this),function(){"use strict";var Checkpoint,checkpointsNames,getCurrentTime,listeners,logger,previousCheckpoint;getCurrentTime=function(){return(new Date).getTime()},listeners=[],logger=new Logger("appLoadNotifiers"),Checkpoint=function(){function Checkpoint(name,previousCheckpoint1){this.name=name,this.previousCheckpoint=previousCheckpoint1,this.id=checkpointsNames.indexOf(this.name),this.timestamp=null}return Checkpoint.prototype.hasPrevious=function(){return null!=this.previousCheckpoint},Checkpoint.prototype.isFired=function(){return!!this.timestamp},Checkpoint.prototype.fire=function(){return this.timestamp=getCurrentTime(),logger.log("LOAD: ["+this.name+"] on "+(this.timestamp-window.jsLoadingStartedAt)+" ms"),this.hasPrevious()&&!this.previousCheckpoint.isFired()&&logger.warn("checkpoint '"+this.name+"' is fired without '"+this.previousCheckpoint.name+"'"),listeners.forEach(function(_this){return function(listener){return listener(_this,_this.previousCheckpoint)}}(this))},Checkpoint}(),checkpointsNames=["jsLoadStarted","appIsInitialized","componentsAreConfigured","domLoadFinished","appIsRunning","sentReadyToProtocol","settingsReceivedFromProtocol","tabSelected","translationsLoaded","foldersLoaded","itemsLoaded","first10ImagesLoaded","emptyStateLoaded"],this.appLoadNotifiers={onCheckpoint:function(listener){return listeners.push(listener)}},previousCheckpoint=null,checkpointsNames.forEach(function(checkpointName){var checkpoint;return checkpoint=new Checkpoint(checkpointName,previousCheckpoint),previousCheckpoint=checkpoint,appLoadNotifiers[checkpointName]=function(){return checkpoint.fire()}})}.call(this),function(){"use strict";var canSendItemsLoaded,canSendPathFinder,canSendRequest,eventIndex,isFirstEnter,loadingStartedAt,sendRequest;this.BIURL=/\.wixpress\.com/i.test(document.location.host)||/local\./i.test(document.location.host)?"/images/43.gif?":"//frog.wix.com",loadingStartedAt=(new Date).getTime(),canSendRequest=/local(\.|host)/i.test(document.location.host)||100*Math.random()<10,isFirstEnter="1"===getCookie("visitsCount"),sendRequest=function(params){var image;return image=new Image,image.src=BIURL+"/mg?src=26&"+$.param(params)},canSendItemsLoaded=canSendRequest,this.appLoadNotifiers.onCheckpoint(function(currentCheckpoint){if(canSendItemsLoaded)return["itemsLoaded","emptyStateLoaded"].indexOf(currentCheckpoint.name)>=0?(canSendItemsLoaded=!1,sendRequest({evid:135,loading_time:currentCheckpoint.timestamp-loadingStartedAt})):void 0}),canSendPathFinder=/local(\.|host)/i.test(document.location.host)||100*Math.random()<15,eventIndex=0,this.appLoadNotifiers.onCheckpoint(function(_this){return function(currentCheckpoint,previousCheckpoint){if(null!=previousCheckpoint&&canSendPathFinder)return sendRequest({evid:144,session_id:_this.sessionId,event_id:currentCheckpoint.id,event_index:eventIndex,timestamp_ms:Math.max(0,currentCheckpoint.timestamp-loadingStartedAt),duration_ms:Math.max(0,currentCheckpoint.timestamp-previousCheckpoint.timestamp),is_first_time_usage:isFirstEnter,description:currentCheckpoint.name}),["first10ImagesLoaded","emptyStateLoaded"].indexOf(currentCheckpoint.name)>=0&&(canSendPathFinder=!1),eventIndex++}}(this))}.call(this);