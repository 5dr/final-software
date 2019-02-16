define("messageView",["lodash","santa-components","componentsCore","prop-types","skins","components"],function(t,e,i,o,n,r){return function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1553)}({0:function(e,i){e.exports=t},1553:function(t,e,i){var o,n;o=[i(2),i(0),i(4),i(25),i(5),i(1554),i(3)],void 0===(n=function(t,e,i,o,n,r,a){"use strict";function s(){return this.createChildComponent({label:"OK",id:"ok"},"wysiwyg.viewer.components.SiteButton","okButton",{skinPart:"okButton",compProp:{align:"center"},onClick:this.props.compProp.onCloseCallback})}var p={displayName:"MessageView",mixins:[a.mixins.skinBasedComp,a.mixins.createChildComponentMixin],propTypes:e.defaults({compProp:i.object},t.utils.santaTypesUtils.getSantaTypesByDefinition(o.siteButton)),getSkinProperties:function(){return{"":{style:{display:"block",position:"absolute"}},blockingLayer:{},dialog:{},title:{children:this.props.compProp.title},description:{dangerouslySetInnerHTML:{__html:this.props.compProp.description||""}},okButton:s.call(this)}}};return a.compRegistrar.register("wysiwyg.viewer.components.MessageView",p),n.skinsMap.addBatch(r),p}.apply(e,o))||(t.exports=n)},1554:function(t,e,i){var o;void 0===(o=function(){"use strict";var t={"wysiwyg.viewer.skins.MessageViewSkin":{react:[["div","blockingLayer",[],{},["div","dialog",[],{},["strong","title",[],{}],["p","description",[],{}],["div","okButton",[],{},["div","caption",[],{}]]]]],exports:{okButton:{skin:"wysiwyg.viewer.skins.button.SiteButtonBlueSkin"}},params:{rd:"BORDER_RADIUS",bg:"BG_COLOR"},paramsDefaults:{rd:"5px",bg:"#000"},paramsMutators:{bg:{type:"alpha",value:.75}},css:{"%":'position:fixed !important;width:100%;height:100%;z-index:99;color:#404040;font-size:14px;font-family:"Helvetica Neue", "HelveticaNeueW01-55Roma", "HelveticaNeueW02-55Roma", "HelveticaNeueW10-55Roma", Helvetica, Arial, sans-serif;',"%blockingLayer":"background-color:[bg];position:fixed;top:0;right:0;bottom:0;left:0;visibility:visible;zoom:1;overflow:auto;height:100%;width:100%;","%dialog":"[rd]  position:fixed;top:35%;left:50%;margin-left:-240px;width:480px;background:#fdfdfd;","%title":"padding:0 10px;line-height:34px;border-bottom:1px solid #ccc;display:block;font-size:15px;font-style:normal;font-variant:normal;font-weight:700;","%description":"max-height:650px;min-height:10px;height:auto;padding:10px;","%okButton":"float:right;margin:10px;"}},"wysiwyg.viewer.skins.MobileMessageViewSkin":{react:[["div","blockingLayer",[],{},["div","dialog",[],{},["strong","title",[],{}],["p","description",[],{}],["div","okButton",[],{}]]]],exports:{okButton:{skin:"wysiwyg.viewer.skins.button.SiteButtonBlueSkin"}},params:{rd:"BORDER_RADIUS",bg:"BG_COLOR"},paramsDefaults:{rd:"5px",bg:"#000000"},paramsMutators:{bg:{type:"alpha",value:.75}},css:{"%":'position:fixed;width:100%;height:100%;z-index:99;color:#404040;font-size:14px;font-family:"Helvetica Neue", "HelveticaNeueW01-55Roma", "HelveticaNeueW02-55Roma", "HelveticaNeueW10-55Roma", Helvetica, Arial, sans-serif;',"%blockingLayer":"background-color:[bg];position:fixed;top:0;right:0;bottom:0;left:0;visibility:visible;zoom:1;overflow:auto;","%dialog":"[rd]  position:absolute;top:35%;left:50%;margin-left:-140px;width:280px;background:#fdfdfd;","%title":"padding:0 10px;line-height:34px;border-bottom:1px solid #ccc;display:block;font-size:15px;font-style:normal;font-variant:normal;font-weight:700;","%description":"max-height:650px;min-height:10px;height:auto;padding:10px;","%okButton":"float:right;margin:10px;"}}};return t}.apply(e,[]))||(t.exports=o)},2:function(t,i){t.exports=e},25:function(t,e){t.exports=r},3:function(t,e){t.exports=i},4:function(t,e){t.exports=o},5:function(t,e){t.exports=n}})});
//# sourceMappingURL=messageView.min.js.map