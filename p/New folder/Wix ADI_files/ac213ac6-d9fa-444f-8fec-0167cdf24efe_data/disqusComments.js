define("disqusComments",["lodash","coreUtils","santa-components","componentsCore","skins"],function(e,t,s,i,n){return function(e){var t={};function s(i){if(t[i])return t[i].exports;var n=t[i]={i:i,l:!1,exports:{}};return e[i].call(n.exports,n,n.exports,s),n.l=!0,n.exports}return s.m=e,s.c=t,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s(s.s=992)}({0:function(t,s){t.exports=e},1:function(e,s){e.exports=t},2:function(e,t){e.exports=s},3:function(e,t){e.exports=i},5:function(e,t){e.exports=n},992:function(e,t,s){var i,n;i=[s(2),s(0),s(1),s(5),s(993),s(3)],void 0===(n=function(e,t,s,i,n,o){"use strict";var r=s.urlUtils,a={displayName:"DisqusComments",propTypes:{compData:e.santaTypesDefinitions.Component.compData.isRequired,id:e.santaTypesDefinitions.Component.id.isRequired,languageCode:e.santaTypesDefinitions.RendererModel.languageCode.isRequired,santaBase:e.santaTypesDefinitions.santaBase,rootPageTitle:e.santaTypesDefinitions.rootPageTitle,currentUrl:e.santaTypesDefinitions.currentUrl.isRequired,isExperimentOpen:e.santaTypesDefinitions.isExperimentOpen.isRequired},mixins:[o.mixins.skinBasedComp,o.mixins.postMessageCompMixin,o.mixins.uniquePageIdMixin],getDisqusInstanceId:function(){return this.getDisqusId&&this.getDisqusId()||this.getUniquePageId()},getIframeSrc:function(){var e=this.getDisqusInstanceId(),s={disqusId:this.props.compData.disqusId?this.props.compData.disqusId:"wixdemo123",pageUrl:t.isString(this.props.currentUrl)?this.props.currentUrl:this.props.currentUrl.full,pageTitle:this.props.rootPageTitle,compId:this.props.id,disqusInstanceId:e};return this.props.santaBase+"/static/external/disqusComments.html?"+r.toQueryString(s)},getSkinProperties:function(){var e=!!this.props.compData.disqusId;return{"":{style:{height:this.state.$disqusCommentsDesiredHeight?this.state.$disqusCommentsDesiredHeight:""}},disqusCommentsHolder:{"data-src":this.getIframeSrc(),key:this.getDisqusInstanceId(),style:{height:this.state.$disqusCommentsDesiredHeight?this.state.$disqusCommentsDesiredHeight:""}},disqusCommentsPreviewOverlay:{style:{display:"none"}},noDisqusIdMessage:{style:{display:e?"none":""},children:this.getTranslation("disqusComments_notDisqusIdMessage")}}},componentWillReceiveProps:function(e){this.setState({$disqusId:e.compData.disqusId})},getTranslation:function(e){return this.translatedKeys[e]||e},getInitialState:function(){return this.translatedKeys=s.translationsLoader.getTranslationAllKeys("disqusComments",this.props.languageCode,{}),{$disqusId:this.props.compData.disqusId,$disqusCommentsDesiredHeight:200}},onDisqusCommentsHolderMsg:function(e){this.prevHeight=this.state.$disqusCommentsDesiredHeight,this.setState({$disqusCommentsDesiredHeight:e.height}),this.prevHeight!==e.height&&this.registerReLayout()},componentDidMount:function(){this.setPostMessageHandler(this.props.id,this.onDisqusCommentsHolderMsg)}};return o.compRegistrar.register("wysiwyg.common.components.disquscomments.viewer.DisqusComments",a),i.skinsMap.addBatch(n),a}.apply(t,i))||(e.exports=n)},993:function(e,t,s){var i;void 0===(i=function(){"use strict";var e={"wysiwyg.common.components.disquscomments.viewer.skins.DisqusCommentsSkin":{react:[["iframe","disqusCommentsHolder",[],{frameBorder:0,scrolling:"no",allowtransparency:"true"}],["div","disqusCommentsPreviewOverlay",[],{}],["div","noDisqusIdMessage",[],{}]],css:{"%":"position:relative;min-height:407px;","%disqusCommentsHolder":"width:100%;","%disqusCommentsPreviewOverlay":"position:absolute;top:0;bottom:0;left:0;right:0;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;","%noDisqusIdMessage":'font-family:"Helvetica Neue", "HelveticaNeueW01-45Roma", "HelveticaNeueW02-45Roma", "HelveticaNeueW10-45Roma", Helvetica, Arial, sans-serif;position:absolute;top:0;bottom:0;left:0;right:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background-color:rgba(255, 255, 255, 0.8);font-size:15px;text-align:center;color:#2b5672;'}}};return e}.apply(t,[]))||(e.exports=i)}})});
//# sourceMappingURL=disqusComments.min.js.map