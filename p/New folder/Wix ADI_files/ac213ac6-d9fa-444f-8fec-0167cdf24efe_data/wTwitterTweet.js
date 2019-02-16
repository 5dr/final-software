define("wTwitterTweet",["lodash","coreUtils","santa-components","componentsCore","skins","components","socialCommon"],function(e,t,n,i,r,o,s){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1902)}({0:function(t,n){t.exports=e},1:function(e,n){e.exports=t},1902:function(e,t,n){var i,r;i=[n(2),n(0),n(1),n(53),n(25),n(5),n(1903),n(3)],void 0===(r=function(e,t,n,i,r,o,s,a){"use strict";var p=n.urlUtils,u={displayName:"WTwitterTweet",propTypes:{id:e.santaTypesDefinitions.Component.id.isRequired,rootId:e.santaTypesDefinitions.Component.rootId,compData:e.santaTypesDefinitions.Component.compData.isRequired,isMobileView:e.santaTypesDefinitions.isMobileView,santaBase:e.santaTypesDefinitions.santaBase.isRequired,origin:e.santaTypesDefinitions.Location.origin},static:{useSantaTypes:!0},mixins:[a.mixins.skinBasedComp,i.twitterComponentMixin,i.socialCompMixin],getIFrameSrc:function(){var e={href:"https://twitter.com/share",lang:this.getLanguage(),url:this.getSocialUrl("masterPage"===this.props.rootId),text:this.props.compData.defaultText,related:this.props.compData.accountToFollow,compId:this.props.id,origin:this.props.origin,widgetType:"TWEET"};return this.props.isMobileView&&(e.size="l"),this.props.santaBase+"/static/external/twitter.html?"+p.toQueryString(e)},getIframeTitleName:function(){return"component_label_ twitterTweetTitle"}};return a.compRegistrar.register("wysiwyg.viewer.components.WTwitterTweet",u),r.translationRequirementsChecker.registerCommonLanguageRequirement("wysiwyg.viewer.components.WTwitterTweet",function(e,n){return t.get(n,["properties","dataLang"])}),o.skinsMap.addBatch(s),u}.apply(t,i))||(e.exports=r)},1903:function(e,t,n){var i;void 0===(i=function(){"use strict";var e={"skins.core.TwitterTweetSkin":{react:[["iframe","iframe",[],{allowtransparency:"true",frameBorder:0,scrolling:"no",allowFullScreen:!0}]],css:{}}};return e}.apply(t,[]))||(e.exports=i)},2:function(e,t){e.exports=n},25:function(e,t){e.exports=o},3:function(e,t){e.exports=i},5:function(e,t){e.exports=r},53:function(e,t){e.exports=s}})});
//# sourceMappingURL=wTwitterTweet.min.js.map