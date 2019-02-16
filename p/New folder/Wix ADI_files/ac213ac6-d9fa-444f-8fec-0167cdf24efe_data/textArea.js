define("textArea",["lodash","santa-components","componentsCore","skins","textCommon"],function(t,e,i,o,n){return function(t){var e={};function i(o){if(e[o])return e[o].exports;var n=e[o]={i:o,l:!1,exports:{}};return t[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1772)}({0:function(e,i){e.exports=t},1772:function(t,e,i){var o,n;o=[i(0),i(41),i(2),i(5),i(1773),i(3)],void 0===(n=function(t,e,i,o,n,a){"use strict";var r=e.labelUtils,s=function(t,e){switch(t){case"left":return{paddingLeft:e,paddingRight:10};case"right":return{paddingLeft:10,paddingRight:e};case"center":return{paddingRight:e,paddingLeft:e}}},l=function(t){return i.mixins.validatableMixin.getPublicState(t)},p={displayName:"TextArea",mixins:[a.mixins.skinBasedComp,i.mixins.runTimeCompData,e.textScaleMixin,i.mixins.inputFocusMixin,i.mixins.validatableMixin.validatable,i.mixins.compStateMixin(l)],propTypes:{compData:i.santaTypesDefinitions.Component.compData,compProp:i.santaTypesDefinitions.Component.compProp,shouldResetComponent:i.santaTypesDefinitions.RenderFlags.shouldResetComponent,isMobileView:i.santaTypesDefinitions.isMobileView},statics:{behaviors:t.assign({},i.mixins.inputFocusMixin.INPUT_FOCUS_BEHAVIORS,i.mixins.validatableMixin.VALIDATABLE_BEHAVIORS)},focus:function(){this.refs.textarea.focus()},blur:function(){this.refs.textarea.blur()},setCustomValidity:function(t){this.refs.textarea.setCustomValidity(t)},getInitialState:function(){return t.assign(this.getCssState(this.props),l(),{value:this.props.compData.value})},getCssState:function(t){return{$validation:t.compProp.message?"invalid":"valid"}},componentWillReceiveProps:function(e){e.shouldResetComponent&&e.shouldResetComponent!==this.props.shouldResetComponent&&this.hideValidityIndication();var i=this.getCssState(e);t.has(e.compData,"value")&&e.compData.value!==this.state.value&&(i.value=e.compData.value),this.setState(i)},onClick:function(t){this.props.compProp.isPreset&&t.target.select()},onKeyDown:function(t){this.handleAction("keyPress",t),t.stopPropagation()},onChange:function(t){var e=t.target.value;e!==this.state.value&&(this.setState({value:e},function(){this.updateData({value:e})}.bind(this)),this.latestChangeEvent=t)},onFocus:function(t){this.handleAction("focus",t)},onBlur:function(t){this.handleAction("blur",t),this.latestChangeEvent&&(this.handleAction("change",this.latestChangeEvent),this.latestChangeEvent=null),this.showValidityIndication()},measureComponent:function(t){var e=this.refs.label,i=r.measureComponentWithLabel(this.props.compProp,e,this.props.compData);if(i)return[{node:t,type:"css",changes:{height:i}}]},getSkinProperties:function(){var e=this.props,i=e.compProp,o=e.isMobileView,n=e.compData,a=e.compTheme,l={"with-validation-indication":this.shouldShowValidityIndication(),required:r.showRequired(n,i,a)};l[this.props.compProp.textAlignment+"-direction"]=!0;var p={compId:this.props.id,inputId:"textarea"},c=t.merge(r.getBaseInputWithLabelSkinProperties({compProp:i,rawFontSyle:this.getFontSize("fntlbl"),isMobileView:o,compData:n,id:p}),{"":{className:this.classSet(l),disabled:i.isDisabled,"data-disabled":i.isDisabled},textarea:{value:this.state.value,maxLength:n.maxLength,placeholder:i.placeholder,onChange:i.onChange||this.onChange,onClick:this.onClick,onKeyDown:this.onKeyDown,onFocus:this.onFocus,onBlur:i.onBlur||this.onBlur,disabled:i.isDisabled,required:i.required,readOnly:i.readOnly,tabIndex:i.tabIndex,className:"has-custom-focus"},errorMessage:i.message?{children:i.message,style:{whiteSpace:"normal"}}:{style:{display:"none"}}});return c.textarea=t.merge({style:t.merge(this.getFontSize("fnt"),s(i.textAlignment,i.textPadding))},c.textarea,{"data-preview":t.isFunction(this.getComponentPreviewState)&&this.getComponentPreviewState()}),c}};return a.compRegistrar.register("wixapps.integration.components.inputs.TextArea",p).register("wysiwyg.viewer.components.inputs.TextAreaInput",p),o.skinsMap.addBatch(n),p}.apply(e,o))||(t.exports=n)},1773:function(t,e,i){var o;void 0===(o=function(){"use strict";var t={"wysiwyg.viewer.skins.appinputs.AppsTextAreaInputSkin":{react:[["label","label",[],{}],["textarea","textarea",[],{}],["p","errorMessage",[],{}],["div",null,["_err"],{}]],params:{fntlbl:"FONT",txtlbl:"TEXT_COLOR"},paramsDefaults:{fntlbl:"font_8",txtlbl:"color_15"},css:{"%":"position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;","%textarea":"resize:none;width:100% !important;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:auto;","% p":"display:none;position:absolute;",'%[data-state~="invalid"] %textarea':"color:#d00;border-color:#d00;","% textarea:focus":"color:#444  !important;border-color:#000 !important;","%_err":"position:absolute;top:50%;left:0;height:1px;width:1px;",'%[data-state~="invalid"] %_err:before':'color:#fff;background:#d00;border:2px solid #fff;border-radius:50%;box-shadow:0 1px 3px rgba(0, 0, 0, 0.5);text-align:center;font-size:12px;content:"!";position:absolute;top:5px;left:-15px;width:20px;height:20px;line-height:20px !important;','%[data-state~="invalid"] %_err:after':'color:#fff;font-size:10px;text-shadow:1px 1px 3px rgba(0, 0, 0, 0.5);content:"►";position:absolute;top:10px;left:8px;',"%label":"[fntlbl]  color:[txtlbl];word-break:break-word;display:inline-block;line-height:1;"}},"wysiwyg.viewer.skins.appinputs.AppsTextAreaInputSkinNoValidation":{react:[["label","label",[],{}],["textarea","textarea",[],{}],["p","errorMessage",[],{}],["div",null,["_err"],{}]],params:{fntlbl:"FONT",txtlbl:"TEXT_COLOR"},paramsDefaults:{fntlbl:"font_8",txtlbl:"color_15"},css:{"%":"position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;","%textarea":"resize:none;width:100% !important;-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:auto;","% p":"display:none;position:absolute;",'%[data-state~="invalid"] %textarea':"color:#d00;border-color:#d00;","% textarea:focus":"color:#444  !important;border-color:#000 !important;","%_err":"position:absolute;top:50%;left:0;height:1px;width:1px;",'%[data-state~="invalid"] %_err:before':'color:#fff;background:#d00;border:2px solid #fff;border-radius:50%;box-shadow:0 1px 3px rgba(0, 0, 0, 0.5);text-align:center;font-size:12px;content:"!";position:absolute;top:5px;left:-15px;width:20px;height:20px;line-height:20px !important;','%[data-state~="invalid"] %_err:after':'color:#fff;font-size:10px;text-shadow:1px 1px 3px rgba(0, 0, 0, 0.5);content:"►";position:absolute;top:10px;left:8px;',"%label":"[fntlbl]  color:[txtlbl];word-break:break-word;display:inline-block;line-height:1;"}}};return t}.apply(e,[]))||(t.exports=o)},2:function(t,i){t.exports=e},3:function(t,e){t.exports=i},41:function(t,e){t.exports=n},5:function(t,e){t.exports=o}})});
//# sourceMappingURL=textArea.min.js.map