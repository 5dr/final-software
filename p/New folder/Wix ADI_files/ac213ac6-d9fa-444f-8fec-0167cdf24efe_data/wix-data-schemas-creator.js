(function(e){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=e()}else if(typeof define==="function"&&define.amd){define([],e)}else{var t;if(typeof window!=="undefined"){t=window}else if(typeof global!=="undefined"){t=global}else if(typeof self!=="undefined"){t=self}else{t=this}t.wixDataSchemasCreator=e()}})(function(){var e,t,r;return function(){function e(t,r,n){function i(u,o){if(!r[u]){if(!t[u]){var f="function"==typeof require&&require;if(!o&&f)return f(u,!0);if(a)return a(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var c=r[u]={exports:{}};t[u][0].call(c.exports,function(e){var r=t[u][1][e];return i(r||e)},c,c.exports,e,t,r,n)}return r[u].exports}for(var a="function"==typeof require&&require,u=0;u<n.length;u++)i(n[u]);return i}return e}()({1:[function(e,t,r){t.exports=e("./lib/wix-data-schema-api")},{"./lib/wix-data-schema-api":2}],2:[function(e,t,r){"use strict";var n=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}return function(t,r,n){if(r)e(t.prototype,r);if(n)e(t,n);return t}}();function i(e,t){if(!(e instanceof t)){throw new TypeError("Cannot call a class as a function")}}t.exports=function(){function e(t){i(this,e);this.provider=t}n(e,[{key:"get",value:function e(){var t;return(t=this.provider).get.apply(t,arguments)}},{key:"bulkGet",value:function e(){var t;return(t=this.provider).bulkGet.apply(t,arguments)}},{key:"list",value:function e(){var t;return(t=this.provider).list.apply(t,arguments)}},{key:"save",value:function e(){var t;return(t=this.provider).save.apply(t,arguments)}},{key:"remove",value:function e(){var t;return(t=this.provider).remove.apply(t,arguments)}},{key:"restore",value:function e(){var t;return(t=this.provider).restore.apply(t,arguments)}}]);return e}()},{}],"/lib/create-wix-data-schema-api.js":[function(e,t,r){"use strict";Object.defineProperty(r,"__esModule",{value:true});r.default=i;var n=e("@wix/wix-data-schema-api");function i(e){return new n(a(e))}function a(e){return{get:function t(){return e.getJSON("/wix/schema-api-web.jsw/get.ajax",arguments)},bulkGet:function t(){return e.getJSON("/wix/schema-api-web.jsw/bulkGet.ajax",arguments)},list:function t(){return e.getJSON("/wix/schema-api-web.jsw/list.ajax",arguments)},save:function t(){return e.getJSON("/wix/schema-api-web.jsw/save.ajax",arguments)},remove:function t(){return e.getJSON("/wix/schema-api-web.jsw/remove.ajax",arguments)},restore:function t(){return e.getJSON("/wix/schema-api-web.jsw/restore.ajax",arguments)}}}},{"@wix/wix-data-schema-api":1}]},{},[])("/lib/create-wix-data-schema-api.js")});