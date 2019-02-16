!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("fedops-logger",[],e):"object"==typeof exports?exports["fedops-logger"]=e():t["fedops-logger"]=e()}("undefined"!=typeof self?self:this,function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="https://static.parastorage.com/services/fedops-logger/1.0.0/",n.p="undefined"!=typeof window&&window.__STATICS_BASE_URL__||n.p,n(n.s=4)}([function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return o});var r={},o=function(){return"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof WorkerGlobalScope?WorkerGlobalScope:r}}).call(this,n(3))},function(t,e,n){"use strict";n.d(e,"d",function(){return o}),n.d(e,"b",function(){return a}),n.d(e,"e",function(){return s}),n.d(e,"c",function(){return u});var r=n(0);function o(){Object(r.a)().fedops=Object(r.a)().fedops||{},Object(r.a)().fedops.apps=Object(r.a)().fedops.apps||{}}function i(t){return((Object(r.a)().fedops||{}).apps||{})[t]}function a(t){var e=i(t);return e?e.appLoadingPhaseData:null}function s(t,e){var n=Object(r.a)().fedops.apps;n[t]=n[t]||{},n[t].appLoadingPhaseData=e}function u(t){return(i(t)||{}).startLoadTime||0}e.a={initApp:function(t){Object(r.a)().fedops.apps[t]=Object(r.a)().fedops.apps[t]||{}},getStartLoadTime:function(t){var e=i(t);return e?e.startLoadTime:null},setStartLoadTime:function(t,e){return i(t).startLoadTime=e}}},function(t,e,n){"use strict";n.r(e);var r=n(0),o="https://frog.wix.com/fed",i="0.0.0",a={fetch:function(t){return(new(0,Object(r.a)().Image)).src=t}};var s={mapToQuery:function(t){var e=[];for(var n in t)t.hasOwnProperty(n)&&e.push(n+"="+encodeURIComponent(t[n]));return e.join("&")}};var u={image:"image",beacon:"beacon",fetch:"fetch"};function c(t){var e=void 0;switch(t){case u.beacon:e=p;break;case u.fetch:e=l;break;case u.image:e=f;break;default:e="undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope||!Object(r.a)().Image?l:f}return e}function f(t,e){return a.fetch(t+"?"+s.mapToQuery(e))}function p(t,e){var n=t+"?"+s.mapToQuery(e);return new Promise(function(t,e){return function(t){return!("undefined"==typeof navigator||!navigator||!navigator.sendBeacon)&&navigator.sendBeacon(t)}(n)?t(n):e(n)}).catch(function(){return f(t,e)}).catch(function(){return l(t,e)})}function l(t,e){return fetch(t+"?"+s.mapToQuery(e),{credentials:"include",method:"GET"}).then(function(t){if(!t.ok)throw Error(t.status);return t})}var d=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.baseUrl=e,this.publisher=n,this.publisher||(this.publisher=c())}return t.prototype.getBaseUrl=function(){return this.baseUrl},t.prototype.getPublisher=function(){return this.publisher},t.prototype.report=function(t){return t?this.publisher(this.baseUrl,t):null},t}();var h=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:void 0;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data=e}return t.prototype.isActive=function(){return!0},t.prototype.export=function(){return this.data},t}();var b=function(){function t(){var e=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.items=[],n&&(void 0===n.length?[n]:n).forEach(function(t){return e.addItem(t)})}return t.prototype.clone=function(){return new t(this.items.slice())},t.prototype.addItem=function(t){return this.items.push(t instanceof h?t:new h(t)),this},t.prototype.mergeItems=function(){for(var t={},e=0;e<this.items.length;e++){var n=this.items[e];if(!n.isActive()){t=null;break}var r=n.export();for(var o in r)r.hasOwnProperty(o)&&(t[o]=r[o])}return t},t}(),m=function(){return void 0!==Object(r.a)()&&Object(r.a)().location},y={getHost:function(){return m()&&Object(r.a)().location.host},isFedopsDev:function(){return((m()||{}).search||"").indexOf("fedops=dev")>-1}},g={getNavigation:function(){return void 0!==Object(r.a)()&&Object(r.a)().performance?Object(r.a)().performance.navigation:{}},getResources:function(){var t=[];try{return Object(r.a)()&&Object(r.a)().performance&&Object(r.a)().performance.getEntriesByType&&Object(r.a)().performance.getEntriesByType("resource")||t}catch(e){return t}},getTiming:function(){return Object(r.a)()&&Object(r.a)().performance?Object(r.a)().performance.timing:{}},clearResourceTimings:function(){Object(r.a)()&&Object(r.a)().performance&&Object(r.a)().performance.clearResourceTimings&&Object(r.a)().performance.clearResourceTimings()},now:function(){return Object(r.a)()&&Object(r.a)().performance&&Object(r.a)().performance.now?Object(r.a)().performance.now():"undefined"!=typeof performance&&performance&&performance.now?performance.now():(new Date).getTime()},mark:function(t){y.isFedopsDev()&&Object(r.a)()&&Object(r.a)().performance&&Object(r.a)().performance.mark&&Object(r.a)().performance.mark(t)},measure:function(t,e,n){y.isFedopsDev()&&Object(r.a)()&&Object(r.a)().performance&&Object(r.a)().performance.measure&&Object(r.a)().performance.measure(t,e,n)}};var w=function(t){function e(n,r){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,{src:72,evid:n,session_id:r,_:(new Date).getTime()}))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(h);var O={xmlhttprequest:{count:"countXhr",unsupported:"unsprtXhr",duration:"timeXhr",total:"sizeXhr",longest:"longXhr",http2:"h2Xhr"},script:{count:"countJs",unsupported:"unsprtJs",duration:"timeJs",total:"sizeJs",cached:"cachedJs",http2:"h2Js"},link:{count:"countCss",unsupported:"unsprtCss",duration:"timeCss",total:"sizeCss",cached:"cachedCss",http2:"h2Css"},img:{count:"countImg",unsupported:"unsprtImg",duration:"timeImg",total:"sizeImg",cached:"cachedImages",http2:"h2Images"}},v={link:function(t){return/(.\.css$|.\.css?.)/g.test(t.name)}},j=function(t){return t.responseEnd-t.startTime};function _(t,e){var n=v[e];return t.filter(function(t){return e===t.initiatorType&&(!n||n(t))})}function T(t){return!t.name.match(/http(s)?:\/\/frog.wix.com\//)}function x(t){return function(t){var e=y.getHost();return e&&-1===t.indexOf(e)}(t.name)&&0===t.transferSize&&0===t.requestStart}function I(t){var e=t.filter(function(t){return!x(t)});return Object.keys(O).reduce(function(n,r){var o=_(t,r),i=_(e,r),a=O[r];return n[a.count]=i.length,n[a.duration]=function(t){if(0===t.length)return 0;var e={startTime:1/0,responseEnd:0};return t.forEach(function(t){e.startTime>t.startTime&&(e.startTime=t.startTime),e.responseEnd<t.responseEnd&&(e.responseEnd=t.responseEnd)}),e.responseEnd-e.startTime}(i),n[a.total]=function(t){return t.reduce(function(t,e){return t+e.transferSize},0)}(i),n[a.unsupported]=function(t){var e=t.length;if(0===e)return 0;var n=t.filter(x).length;return Math.round(n/e*100)}(o),n[a.http2]=function(t){if(0===t.length)return 0;var e=!1,n=Math.round(t.filter(function(t){return e=e||"nextHopProtocol"in t,"h2"===t.nextHopProtocol}).length/t.length*100);return e?n:NaN}(o),a.longest&&(n[a.longest]=function(t){if(0===t.length)return 0;var e=t.reduce(function(t,e){return j(e)>=j(t)?e:t});return j(e)}(i)),a.cached&&(n[a.cached]=function(t){if(0===t.length)return 0;var e=t.filter(function(t){return 0===t.transferSize});return Math.round(e.length/t.length*100)}(i)),n},{})}function S(t){return{url:t.name,downloadDuration:t.responseEnd-t.startTime,bytesTransferred:t.transferSize,isHTTP2:"h2"===t.nextHopProtocol}}var E=function(t){function e(n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,18,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.performNetworkAnalysis=function(t){if(0===t.length)return null;var e=g.now(),n=t.filter(T),r=I(n);r.overhead=g.now()-e;var o=function(t){return Object.keys(t).reduce(function(e,n){var r=parseInt(t[n]);return isNaN(r)||"number"!=typeof r||(e[n]=r),e},{})}(r);if(console.debug&&y.isFedopsDev()){var i=function(t){var e=t.reduce(function(t,e){return x(e)?t.unsupported.push(e):t.supported.push(e),t},{supported:[],unsupported:[]});return Object.keys(O).reduce(function(t,n){return t[n]={},t[n].supported=_(e.supported,n).map(function(t){return S(t)}),t[n].unsupported=_(e.unsupported,n).map(function(t){return S(t)}),t},{})}(n);console.debug("[fedops network analysis] [bytes analysis]\n"+JSON.stringify(o,null,4)),console.debug("[fedops network analysis] [resources breakdown]\n",i)}return o},e}(w);var P=13,k=function(t){function e(n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,P,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(w),L=n(1);function N(t){return L.a.getStartLoadTime(t)||0}var C={appLoadTime:function(t){return g.now()-N(t)},loadStarted:function(t){L.a.setStartLoadTime(t,g.now())},firstRequestDuration:function(t){return N(t)}};var R=function(t){function e(n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var r=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,{duration:Math.floor(C.appLoadTime(n))}));return r.appName=n,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.setFirstRequestDuration=function(){return this.data.frd=Math.floor(C.firstRequestDuration(this.appName)),this},e}(h);var A=17,H=function(t){function e(n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,A,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(w);var D=function(t,e){return("0"+e).slice(-2)+"_"+t},F=function(t){function e(n){var r=n.data,o=n.name,i=n.startLoadTime;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var a=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,{})),s=g.now();return r?(a.data.name=D(r.name,r.index),a.data.duration=Math.floor(s-r.phaseStartTime),a.index=r.index):(a.data.name=D("codeParsingPhase",0),a.data.duration=Math.floor(s-i),a.index=0),a.now=s,a.name=o,a}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.getNextData=function(){return{phaseStartTime:this.now,index:this.index+1,name:this.name}},e}(h);var M=function(t){function e(n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,11,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(w);var U=15,z=function(t){function e(n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,U,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(w);var G=16,J=function(t){function e(n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,G,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(w),q=function(t){try{return Object(r.a)().localStorage&&Object(r.a)().localStorage.getItem(t)}catch(t){}},B=function(t,e){try{return Object(r.a)().localStorage&&Object(r.a)().localStorage.setItem(t,e)}catch(t){}},W={getSessionId:function(){var t=void 0!==Object(r.a)()&&Object(r.a)().fedops&&Object(r.a)().fedops.sessionId;return t=(t=t||q("fedops.logger.sessionId"))||this.generateGuid(),B("fedops.logger.sessionId",t),t},generateGuid:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"===t?e:3&e|8).toString(16)})}},X=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();var Q=function(t,e){if(t)return t(e)},V=function(){function t(e,n,r,o){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var i={sessionId:W.getSessionId(),disableAutoLoadFinish:!1,interactionTimeout:null,timeoutHook:null,startHook:null,endHook:null},a=Object.assign({},i,o);this.appName=e,this.appVersion=n,this.reporter=r,this.params={sessionId:a.sessionId},this.disableAutoLoadFinish=a.disableAutoLoadFinish,this.dataSource=new b({appName:e}),this._outgoingInteractions={},this.interactionTimeout=a.interactionTimeout,this.timeoutHook=a.timeoutHook,this.startHook=a.startHook,this.endHook=a.endHook}return t.prototype._report=function(t){return this.reporter.report(t.mergeItems())},t.prototype.getAppName=function(){return this.appName},t.prototype.getAppVersion=function(){return this.appVersion},t.prototype.getReporter=function(){return this.reporter},t.prototype.getParam=function(t){return this.params[t]},t.prototype._isDisableAutoLoadFinish=function(){return this.disableAutoLoadFinish},t.prototype.isDisableAutoLoadFinish=function(){return this._isDisableAutoLoadFinish()},t.prototype.reportNetworkAnalysis=function(){var t=this,e=g.getResources();setTimeout(function(){try{var n=new E(t.sessionId),r=n.performNetworkAnalysis(e);if(!r)return;var o=t.dataSource.clone().addItem(n).addItem(r);t._report(o)}catch(t){console.error("[fedops] Failed to report resource metrics",t)}},1e3)},t.prototype.appLoaded=function(){if(!this._appLoadedCalled){Object(r.a)()&&Object(r.a)().fedops&&"function"==typeof Object(r.a)().fedops.clearLoadTimeout&&Object(r.a)().fedops.clearLoadTimeout();var t=Object(L.b)(this.appName);t&&this._report(this.dataSource.clone().addItem(new F({data:t,startLoadTime:Object(L.c)(this.appName)})).addItem(new k(this.sessionId)));var e=this.dataSource.clone().addItem(new M(this.sessionId)).addItem(new R(this.appName).setFirstRequestDuration());return this._appLoadedCalled=!0,g.mark("[fedops] app-loaded"),g.measure("[fedops] app-loaded","navigationStart","[fedops] app-loaded"),this.reportNetworkAnalysis(),this._report(e)}},t.prototype.interactionStarted=function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.interactionTimeout,o=n.startHook,i=n.timeoutHook;g.mark(t+" started");var a=this.dataSource.clone().addItem({name:t}).addItem(new z(this.sessionId));return this._outgoingInteractions[t]={timestamp:g.now(),timeout:r||this.interactionTimeout},this._report(a),Q(o||this.startHook,{name:t}),{timeoutId:function(){if(r||e.interactionTimeout)return setTimeout(function(){var n=e.dataSource.clone().addItem({interactionName:t}).addItem({errorType:"timeout"}).addItem(new H(e.sessionId));e._report(n),Q(i||e.timeoutHook,{name:t,timeout:r||e.interactionTimeout})},r||e.interactionTimeout)}()}},t.prototype.interactionEnded=function(t){var e=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=n.timeoutId,i=n.endHook;g.mark(t+" ended"),g.measure(t+" duration",t+" started",t+" ended"),o&&clearTimeout(o);var a=Object(r.a)(),s=this._outgoingInteractions[t]||a.fedops&&a.fedops.apps&&a.fedops.apps[e.appName]&&a.fedops.apps[e.appName].interactions&&a.fedops.apps[e.appName].interactions[t],u=s?Math.floor(g.now()-s.timestamp):"";Q(i||this.endHook,{name:t,duration:u,timeout:this._outgoingInteractions[t]&&this._outgoingInteractions[t].timeout});var c=this.dataSource.clone().addItem({name:t}).addItem({duration:u}).addItem(new J(this.sessionId));delete this._outgoingInteractions[t],this._report(c)},t.prototype.appLoadingPhaseStart=function(t){if(!this._appLoadedCalled){var e=new F({name:t,data:Object(L.b)(this.appName),startLoadTime:Object(L.c)(this.appName)}),n=this.dataSource.clone().addItem(e).addItem(new k(this.sessionId));return Object(L.e)(this.appName,e.getNextData()),this._report(n)}},t.prototype.appLoadingPhase=function(t){var e=this.dataSource.clone().addItem({name:t}).addItem(new k(this.sessionId)).addItem(new R);return this._report(e)},X(t,[{key:"sessionId",get:function(){return this.getParam("sessionId")}}]),t}();var $=function(t){function e(n){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,14,n))}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e}(w);var K=function(t){function e(n,r,o,i){var a=i.sessionId,s=i.disableAutoLoadFinish;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var u=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,t.call(this,n,r,o,{sessionId:a,disableAutoLoadFinish:s}));return L.a.initApp(u.appName),u}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),e.prototype.appLoadStarted=function(){C.loadStarted(this.appName);var t=this.dataSource.clone().addItem(new $(this.sessionId));return this._report(t)},e.prototype.clearResourceTimings=function(){g.clearResourceTimings()},e}(V);n.d(e,"create",function(){return Z}),n.d(e,"setFactory",function(){return tt});var Y=d;function Z(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!t)return null;Object(L.d)();var n=Object(r.a)().__CI_APP_VERSION__||i,a=function(t,e){try{return new Y(t,e)}catch(n){return Y(t,e)}}(e.baseUrl||o,c(e.publisher));return e.isWidgetLogger?new K(t,n,a,e):new V(t,n,a,e)}function tt(t){Y=t}},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(2),i=n(0);Object(r.d)(),Object(i.a)().fedops.logger={create:o.create},Object(i.a)().fedops.widgetLogger={create:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.baseUrl,r=void 0===n?null:n,i=e.appId,a=void 0===i?null:i;return Object(o.create)(t,{baseUrl:r,appId:a,isWidgetLogger:!0})}}}])});
//# sourceMappingURL=fedops-logger.bundle.min.js.map