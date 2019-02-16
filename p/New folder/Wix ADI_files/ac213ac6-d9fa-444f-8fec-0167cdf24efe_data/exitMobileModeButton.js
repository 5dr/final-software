define("exitMobileModeButton",["coreUtils","santa-components","componentsCore","skins","buttonCommon"],function(e,t,n,o,i){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(o,i,function(t){return e[t]}.bind(null,i));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1387)}({1:function(t,n){t.exports=e},1387:function(e,t,n){var o,i;o=[n(2),n(1),n(244),n(5),n(1388),n(3)],void 0===(i=function(e,t,n,o,i,r){"use strict";var s=t.linkRenderer;function a(e,t,n){var o=s.renderLink({type:"SwitchMobileViewMode",dataMobile:!1},e,n);return o.style={textAlign:t.align},o}var p={displayName:"ExitMobileModeButton",mixins:[r.mixins.skinBasedComp,n.buttonMixin],propTypes:{compData:e.santaTypesDefinitions.Component.compData.isRequired,compProp:e.santaTypesDefinitions.Component.compProp.isRequired,linkRenderInfo:e.santaTypesDefinitions.Link.renderInfo.isRequired,rootNavigationInfo:e.santaTypesDefinitions.Component.rootNavigationInfo.isRequired},getSkinProperties:function(){var e={link:a.call(this,this.props.linkRenderInfo,this.props.compProp,this.props.rootNavigationInfo),label:{children:[this.props.compData.label],style:this.getLabelStyle(this.props)}};return this.resetMinHeightIfNeeded(e),e}};return r.compRegistrar.register("wysiwyg.common.components.exitmobilemode.viewer.ExitMobileMode",p),o.skinsMap.addBatch(i),p}.apply(t,o))||(e.exports=i)},1388:function(e,t,n){var o;void 0===(o=function(){"use strict";var e={"wysiwyg.common.components.exitmobilemode.viewer.skins.ExitMobileModeSkin":{react:[["a","link",[],{},["span","label",[],{}]]],params:{fnt:"FONT",clr:"TEXT_COLOR"},paramsDefaults:{fnt:"font_8",clr:"color_13"},css:{"%link":"position:absolute;top:0;right:0;bottom:0;left:0;","%label":"[fnt]  color:[clr];white-space:nowrap;text-decoration:underline;"}}};return e}.apply(t,[]))||(e.exports=o)},2:function(e,n){e.exports=t},244:function(e,t){e.exports=i},3:function(e,t){e.exports=n},5:function(e,t){e.exports=o}})});
//# sourceMappingURL=exitMobileModeButton.min.js.map