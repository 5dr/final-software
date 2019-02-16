define("facebookComments",["lodash","santa-components","componentsCore","skins","coreUtilsLib","socialCommon"],function(e,t,o,n,i,r){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=1389)}({0:function(t,o){t.exports=e},1389:function(e,t,o){var n,i;n=[o(2),o(16),o(0),o(53),o(5),o(1390),o(3)],void 0===(i=function(e,t,o,n,i,r,s){"use strict";var a=["xfbml.render","xfbml.resize","comment.create","comment.remove"],c={displayName:"WFacebookComment",mixins:[s.mixins.skinBasedComp,t.timersMixins.timeoutsMixin,n.facebookComponentMixin,n.socialCompMixin],scriptDesc:null,propTypes:{id:e.santaTypesDefinitions.Component.id.isRequired,isMobileView:e.santaTypesDefinitions.isMobileView.isRequired,compData:e.santaTypesDefinitions.Component.compData.isRequired,compProp:e.santaTypesDefinitions.Component.compProp.isRequired,registerReLayoutPending:e.santaTypesDefinitions.Layout.registerReLayoutPending.isRequired},measureComponent:function(e){var t=e.querySelector("iframe");return t?[{node:e,type:"css",changes:{height:Math.max(e.offsetHeight,t.offsetHeight)}}]:[]},getInitialState:function(){return{ready:!1,lastEventTimeStamp:Date.now()}},commentsAreReady:function(){this.props.registerReLayoutPending(this.props.id),this.setState({lastEventTimeStamp:Date.now()})},subscribeToFacebookEvents:function(){o.forEach(a,function(e){window.FB.Event.subscribe(e,this.commentsAreReady)}.bind(this))},getHref:function(){return this.getSocialUrl()},componentDidMount:function(){window.fbAsyncInit=this.subscribeToFacebookEvents,window.FB&&this.subscribeToFacebookEvents()},componentWillUnmount:function(){window.FB&&o.forEach(a,function(e){window.FB.Event.unsubscribe(e,this.commentsAreReady)}.bind(this))},getSkinProperties:function(){return{facebook:{children:e.utils.createReactElement("div",{className:"fb-comments","data-href":this.getHref(),"data-width":this.props.isMobileView?320:this.props.compProp.width,"data-numposts":this.props.compProp.numPosts,"data-colorscheme":this.props.compProp.colorScheme,"data-mobile":!1})}}}};return s.compRegistrar.register("wysiwyg.viewer.components.WFacebookComment",c),i.skinsMap.addBatch(r),c}.apply(t,n))||(e.exports=i)},1390:function(e,t,o){var n;void 0===(n=function(){"use strict";var e={"skins.core.FacebookCommentSkin":{react:[["div","fb-root",[],{}],["div","facebook",[],{}],["div","facebookPreviewBlocker",[],{}]],params:{tdr:"URL"},paramsDefaults:{tdr:"BASE_THEME_DIRECTORY"},css:{"%fb-root":"display:none;",'%[data-state~="dark"]':"background:url([tdr]dark-facebook-comments.png) no-repeat;",'%[data-state~="light"]':"background:url([tdr]bright-facebook-comments.png) no-repeat;",'%[data-state~="mobileView"][data-state~="dark"]':"background:url([tdr]mobile-dark-facebook-comments.jpg) no-repeat;",'%[data-state~="mobileView"][data-state~="light"]':"background:url([tdr]mobile-bright-facebook-comments.jpg) no-repeat;",'%[data-state~="disabled"]':"pointer-events:none;"}}};return e}.apply(t,[]))||(e.exports=n)},16:function(e,t){e.exports=i},2:function(e,o){e.exports=t},3:function(e,t){e.exports=o},5:function(e,t){e.exports=n},53:function(e,t){e.exports=r}})});
//# sourceMappingURL=facebookComments.min.js.map