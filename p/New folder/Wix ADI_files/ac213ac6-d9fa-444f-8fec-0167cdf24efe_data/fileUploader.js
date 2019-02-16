define("fileUploader",["lodash","coreUtils","santa-components","componentsCore","prop-types","skins","reactDOM","textCommon"],function(e,t,i,o,n,s,r,l){return function(e){var t={};function i(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=e,i.c=t,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(o,n,function(t){return e[t]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1397)}({0:function(t,i){t.exports=e},1:function(e,i){e.exports=t},11:function(e,t){e.exports=r},1397:function(e,t,i){var o,n;o=[i(1398),i(1399),i(5),i(1400),i(3)],void 0===(n=function(e,t,i,o,n){"use strict";var s={fileUploader:e,uploadName:t};return n.compRegistrar.register("wysiwyg.viewer.components.inputs.FileUploader",s.fileUploader).register("wysiwyg.viewer.components.inputs.uploadName",s.uploadName),i.skinsMap.addBatch(o),s}.apply(t,o))||(e.exports=n)},1398:function(e,t,i){var o,n;o=[i(2),i(0),i(11),i(3),i(41),i(1)],void 0===(n=function(e,t,i,o,n,s){"use strict";var r=n.labelUtils,l=e.santaTypesDefinitions,a=s.fileUploadManager,p={NOT_STARTED:"NOT_STARTED",STARTED:"STARTED",FAILED:"FAILED",DONE:"DONE"};function d(i){return t.assign(e.mixins.validatableWithSyncMixin.getPublicState(i),{value:t.get(i,["value"],[]),uploadStatus:t.get(i,"uploadStatus",p.NOT_STARTED),serverMessage:t.get(i,"serverMessage","")})}return{displayName:"FileUploader",mixins:[o.mixins.skinBasedComp,n.textScaleMixin,e.mixins.inputFocusMixin,e.mixins.validatableWithSyncMixin.validatableWithSync,e.mixins.compStateMixin(d),o.mixins.createChildComponentMixin],statics:{behaviors:t.assign({reset:{methodName:"reset"}},e.mixins.inputFocusMixin.INPUT_FOCUS_BEHAVIORS,e.mixins.validatableWithSyncMixin.VALIDATABLE_WITH_SYNC_BEHAVIORS)},propTypes:{compData:e.santaTypesDefinitions.Component.compData.isRequired,scale:e.santaTypesDefinitions.Component.scale,compProp:e.santaTypesDefinitions.Component.compProp.isRequired,siteMediaToken:l.RendererModel.siteMediaToken.isRequired,mediaAuthToken:l.RendererModel.mediaAuthToken.isRequired,userId:e.santaTypesDefinitions.RendererModel.userId.isRequired,isPreviewMode:e.santaTypesDefinitions.isPreviewMode.isRequired,isExperimentOpen:e.santaTypesDefinitions.isExperimentOpen,windowKeyboardEvent:e.santaTypesDefinitions.SiteAspects.windowKeyboardEvent.isRequired,shouldResetComponent:e.santaTypesDefinitions.RenderFlags.shouldResetComponent.isRequired,isMobileView:e.santaTypesDefinitions.isMobileView},getInitialState:function(){return this.uploadCounter=0,d()},isUploading:function(){return this.state.uploadStatus===p.STARTED},componentDidMount:function(){this.props.windowKeyboardEvent.registerToKeyDownWithFocus(this,this.refs.chooseFileButton)},componentWillReceiveProps:function(e){e.shouldResetComponent&&this.props.shouldResetComponent!==e.shouldResetComponent&&(this.hideValidityIndication(),this.removeFile(!1))},onKeyDown:function(e){if(!this.props.compProp.isDisabled&&t.includes([13,32],e.keyCode)){var i=t.includes(e.target.className,"chooseFileButton"),o=t.includes(e.target.classList[0],"uploadName");i?(this.refs.fileInput.click(),this.refs.chooseFileButton.blur()):o&&this.removeFile()}},focus:function(){this.refs.chooseFileButton.focus()},blur:function(){this.refs.chooseFileButton.blur()},createFileNodes:function(e){var i=this.props.compProp.showPlaceholder,o=this.props.compProp.filesAlignment,n=this.props.compData.placeholderLabel,s=t.cloneDeep(this.state.value),r={isPlaceholder:!!t.isEmpty(s)&&i,alignment:o,previewState:e,errorState:this.hasErrorIndication()&&this.shouldShowValidityIndication(),removeFunction:this.removeFile,scale:this.props.scale,uploading:this.isUploading()};return t.isEmpty(s)&&(e&&t.includes(e.split(" "),"regular")?(s.push({name:"Example.txt"}),r.isPlaceholder=!1):(n=""===n?" ":n,s.push({name:n}),i&&" "!==n||(r.hidePlaceholder=!0))),t.map(s,function(e,t){return this.createChildComponent({id:"uploadName"+t,fileName:e.name},"wysiwyg.viewer.components.inputs.uploadName","uploadName",r)}.bind(this))},removeFile:function(e){this.isUploading()||(e=t.isNil(e)||e,this.setState(d(),function(){i.findDOMNode(this.refs.fileInput).value="",e&&this.handleAction(s.siteConstants.ACTION_TYPES.CHANGE)}))},setUserCallback:function(e){this.userCallback=e},clearUserCallback:function(){this.userCallback=null},applyUserCallback:function(e,t){this.userCallback&&this.userCallback(e,t),this.clearUserCallback()},reset:function(){this.resetValidity(),this.setState(d(),function(){i.findDOMNode(this.refs.fileInput).value="",this.uploadCounter++,this.applyUserCallback(null,{errorCode:-1,errorDescription:"Upload Reset"})})},shouldExecuteUploadCb:function(e){return e===this.uploadCounter},getUploadCompleteCB:function(e){return function(t){if(this.shouldExecuteUploadCb(e)){var i=t[0];"Image"===this.props.compProp.filesType&&(i.uri=i.file_name,i.title=i.file_name),"Document"===this.props.compProp.filesType&&(i.uri=i.file_name,i.filename=i.original_file_name),this.uploadCounter++,this.setState({uploadStatus:p.DONE},function(){this.handleAction(s.siteConstants.ACTION_TYPES.VALIDATE),this.applyUserCallback(i,null)})}}.bind(this)},getUploadFailedCB:function(e){return function(t){if(this.shouldExecuteUploadCb(e)){var i={errorCode:t.error_code,errorDescription:t.error_description};this.uploadCounter++,this.setState({uploadStatus:p.FAILED,serverMessage:i.errorDescription},function(){this.handleAction(s.siteConstants.ACTION_TYPES.VALIDATE),this.applyUserCallback(null,i)})}}.bind(this)},isReadyToUpload:function(){return!(this.isUploading()||t.isEmpty(this.state.value)||(e=this.getValidity(),i=t.get(e,"valid"),o=t.get(e,"fileNotUploaded"),!i&&!o));var e,i,o},uploadFiles:function(e){if(this.isReadyToUpload()){var i=this.props.compProp.filesType;this.setUserCallback(e);var o=this.getUploadCompleteCB(this.uploadCounter),n=this.getUploadFailedCB(this.uploadCounter),s=this.props.siteMediaToken,r=this.props.mediaAuthToken,l=this.props.isPreviewMode,d=this.props.userId,c=this.props.isExperimentOpen;this.setState({uploadStatus:p.STARTED},function(){t.forEach(this.refs.fileInput.files,function(e){a.uploadFile({file:e,siteMediaToken:s,fileType:i,uploadCompleteCB:o,uploadFailedCB:n,authToken:r,isPreviewMode:l,userId:d,isExperimentOpen:c})})})}else e&&e(null,{errorCode:-1,errorDescription:"No File To Upload"})},onFileSelectionChange:function(){if(this.refs.fileInput.files.length>0){var e=t.map(this.refs.fileInput.files,function(e){return{name:e.name,size:e.size}});this.setState({value:e,uploadStatus:p.NOT_STARTED},function(){this.handleAction(s.siteConstants.ACTION_TYPES.CHANGE)})}},getAcceptableFileTypes:function(){switch(this.props.compProp.filesType){case"Image":return".jpeg,.png,.jpg";case"Document":return".pdf,.doc,.docx,.ppt,.pptx,.xls,.xlsx,.odp,.odt,.epub"}},handleButtonFocus:function(e){this.handleAction(s.siteConstants.ACTION_TYPES.FOCUS,e)},handleButtonBlur:function(e){this.handleAction(s.siteConstants.ACTION_TYPES.BLUR,e)},hasErrorIndication:function(){if(this.isValid())return!1;var e=this.getValidity();return t.some(t.omit(e,"fileNotUploaded","valid"))||this.state.uploadStatus===p.FAILED},measureComponent:function(e){var t=this.refs,i=t.files,o=t.buttonLabel,n=t.chooseFileButton,s=t.label,l=window.getComputedStyle(i),a=window.getComputedStyle(n),p=parseInt(a.borderLeftWidth,10)+parseInt(a.borderRightWidth,10),d=parseInt(l.height,10)+parseInt(l.marginTop,10)+Math.max(o.offsetHeight,23)+p+s.offsetHeight,c=Math.max(o.offsetWidth+p+16+20,e.offsetWidth),u=r.measureComponentWithLabel(this.props.compProp,s,this.props.compData);return[{type:"css",node:e,changes:{minHeight:d,width:c,height:u?Math.max(u,d):Math.max(d,e.offsetHeight)}}]},getSkinProperties:function(){var e=this.props.compData,i=this.props.compProp,o=this.props.compTheme,n={required:r.showRequired(e,i,o)},s={"no-label":""===e.buttonLabel};s[i.buttonAlignment]=!0;var l=this.getComponentPreviewState()||this.props.previewState,a=!!this.props.compProp.isDisabled||this.isUploading(),p={compId:this.props.id,inputId:"fileInput"};return t.merge(r.getBaseInputWithLabelSkinProperties({compProp:i,rawFontSyle:this.getFontSize("fntlbl"),isMobileView:this.props.isMobileView,compData:e,id:p}),{"":{className:this.classSet(n)},chooseFileButton:{className:this.classSet(s),onClick:function(){a||(this.refs.fileInput.click(),this.refs.chooseFileButton.blur())}.bind(this),onFocus:a?null:this.handleButtonFocus,onBlur:a?null:this.handleButtonBlur,"data-preview":l,"data-disabled":a,"data-error":this.hasErrorIndication()&&this.shouldShowValidityIndication()},buttonLabel:{children:[e.buttonLabel],style:this.getFontSize("btn_fnt")},fileInput:{onChange:this.onFileSelectionChange,accept:this.getAcceptableFileTypes(),required:i.required},files:{children:this.createFileNodes(l),"data-preview":l}})}}}.apply(t,o))||(e.exports=n)},1399:function(e,t,i){var o,n;o=[i(2),i(4),i(0),i(41),i(3)],void 0===(n=function(e,t,i,o,n){"use strict";return{displayName:"UploadName",mixins:[n.mixins.skinBasedComp,o.textScaleMixin],propTypes:i.assign({compData:e.santaTypesDefinitions.Component.compData.isRequired,compProp:e.santaTypesDefinitions.Component.compProp.isRequired,alignment:t.string.isRequired,removeFunction:t.func,isPlaceholder:t.bool.isRequired,scale:t.number.isRequired,previewState:t.string,errorState:t.bool,uploading:t.bool,windowKeyboardEvent:e.santaTypesDefinitions.SiteAspects.windowKeyboardEvent.isRequired}),componentDidMount:function(){var e=this.props.id.split("uploadName")[0];this.props.windowKeyboardEvent.registerToKeyDownWithFocus({props:{id:e}},this.refs["x-icon"])},getSkinProperties:function(){var e=this.props.compData,t={};t["align-"+this.props.alignment]=!0,t["hide-placeholder"]=this.props.hidePlaceholder;var i=!!this.props.compProp.isDisabled||this.props.uploading,o=this.getComponentPreviewState()||this.props.previewState,n=this.props.errorState;return{"":{className:this.classSet(t),"data-preview":o,"data-error":n},"x-icon":{style:this.props.isPlaceholder?{display:"none"}:{},onClick:function(){this.props.removeFunction&&!this.props.uploading&&this.props.removeFunction(e.fileName)}.bind(this),"data-preview":o,"data-disabled":i},"file-name":{className:this.classSet({"file-name-placeholder":this.props.isPlaceholder}),children:[e.fileName],"data-preview":o,"data-disabled":i,style:this.getFontSize("file_fnt",this.props.scale)}}}}}.apply(t,o))||(e.exports=n)},1400:function(e,t,i){var o;void 0===(o=function(){"use strict";var e={"wysiwyg.viewer.skins.FileUploaderDefaultSkin":{react:[["label","label",[],{}],["input","fileInput",[],{type:"file",ref:"fileInput"}],["div","chooseFileButton",[],{tabIndex:0},["svg",null,[],{width:"15px",height:"15px",viewBox:"0 0 15 15",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},["g","Page-1",[],{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},["g","plusIcon",[],{},["rect","Rectangle-2",[],{x:"6",y:"1",width:"3",height:"13"}],["rect","Rectangle",[],{x:"1",y:"6",width:"13",height:"3"}]]]],["span","buttonLabel",[],{}]],["div","files",[],{}]],exports:{uploadName:{skin:"wysiwyg.viewer.skins.UploadNameDefaultSkin"}},params:{btn_bg:"BG_COLOR_ALPHA",btn_brd:"BORDER_COLOR_ALPHA",btn_brw:"BORDER_SIZE",btn_rd:"BORDER_RADIUS",btn_shd:"BOX_SHADOW",btn_txt:"TEXT_COLOR",btn_fnt:"FONT",btn_bg_h:"BG_COLOR_ALPHA",btn_brd_h:"BORDER_COLOR_ALPHA",btn_brw_h:"BORDER_SIZE",btn_txt_h:"TEXT_COLOR",bg_f:"BG_COLOR_ALPHA",brd_f:"BORDER_COLOR_ALPHA",brw_f:"BORDER_SIZE",txt_f:"TEXT_COLOR",bg_d:"BG_COLOR_ALPHA",brd_d:"BORDER_COLOR_ALPHA",brw_d:"BORDER_SIZE",txt_d:"TEXT_COLOR",bg_e:"BG_COLOR_ALPHA",brd_e:"BORDER_COLOR_ALPHA",brw_e:"BORDER_SIZE",txt_e:"TEXT_COLOR",fntlbl:"FONT",txtlbl:"TEXT_COLOR",txtlblrq:"COLOR_ALPHA"},paramsDefaults:{btn_bg:"color_1",btn_brd:"color_6",btn_brw:"1px",btn_rd:"0",btn_shd:"0 0 0 rgba(0, 0, 0, 0)",btn_txt:"color_6",btn_fnt:"font_9",btn_bg_h:"color_1",btn_brd_h:"color_6",btn_brw_h:"1px",btn_txt_h:"color_6",bg_f:"color_18",brd_f:"color_6",brw_f:"0",txt_f:"color_28",bg_d:"color_18",brd_d:"color_6",brw_d:"1px",txt_d:"color_6",bg_e:"color_1",brd_e:"color_6",brw_e:"1px",txt_e:"color_6",fntlbl:"font_8",txtlbl:"color_15",txtlblrq:"transparent"},css:{"%":"display:-webkit-box;display:-webkit-flex;display:flex;height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;","%fileInput":"bottom:0;opacity:0;position:absolute;height:0;","%chooseFileButton":"position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:100%;padding-left:10px;padding-right:10px;cursor:pointer;background-color:[btn_bg];border:solid [btn_brd] [btn_brw];[btn_rd]  [btn_shd]","%chooseFileButton %plusIcon":"fill:[btn_txt];","%chooseFileButton %buttonLabel":"[btn_fnt]    color:[btn_txt];display:inline-block;position:relative;white-space:nowrap;",'%chooseFileButton:hover,%chooseFileButton[data-preview~="hover"]':"background-color:[btn_bg_h];border:solid [btn_brd_h] [btn_brw_h];",'%chooseFileButton:hover %plusIcon,%chooseFileButton[data-preview~="hover"] %plusIcon':"fill:[btn_txt_h];",'%chooseFileButton:hover %buttonLabel,%chooseFileButton[data-preview~="hover"] %buttonLabel':"color:[btn_txt_h];",'%chooseFileButton:focus,%chooseFileButton[data-preview~="focus"]':"background-color:[bg_f];border:solid [brd_f] [brw_f];",'%chooseFileButton:focus %plusIcon,%chooseFileButton[data-preview~="focus"] %plusIcon':"fill:[txt_f];",'%chooseFileButton:focus %buttonLabel,%chooseFileButton[data-preview~="focus"] %buttonLabel':"color:[txt_f];",'%chooseFileButton[data-disabled="true"],%chooseFileButton[data-preview~="disabled"]':"background-color:[bg_d];border:solid [brd_d] [brw_d];cursor:default;",'%chooseFileButton[data-disabled="true"] %plusIcon,%chooseFileButton[data-preview~="disabled"] %plusIcon':"fill:[txt_d];",'%chooseFileButton[data-disabled="true"] %buttonLabel,%chooseFileButton[data-preview~="disabled"] %buttonLabel':"color:[txt_d];",'%chooseFileButton[data-error="true"],%chooseFileButton[data-preview~="error"]':"background-color:[bg_e];border:solid [brd_e] [brw_e];",'%chooseFileButton[data-error="true"] %plusIcon,%chooseFileButton[data-preview~="error"] %plusIcon':"fill:[txt_e];",'%chooseFileButton[data-error="true"] %buttonLabel,%chooseFileButton[data-preview~="error"] %buttonLabel':"color:[txt_e];","%files":"width:100%;margin-top:14px;min-width:90px;","%_ltr %buttonLabel":"padding-left:8px;","%_rtl":"direction:rtl;","%_rtl %buttonLabel":"padding-right:8px;direction:ltr;","%_no-label %buttonLabel":"padding-right:0;padding-left:0;","%label":"[fntlbl]  color:[txtlbl];word-break:break-word;display:inline-block;line-height:1;","%_required %label::after":'content:" *";color:[txtlblrq];'}},"wysiwyg.viewer.skins.UploadNameDefaultSkin":{react:[["svg","x-icon",[],{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 15 15",width:"15",height:"15"},["path",null,[],{d:"M7.5 14C11 14 14 11 14 7.5S11 1 7.5 1 1 4 1 7.5 4 14 7.5 14zm0 1C3.5 15 0 11.6 0 7.5 0 3.5 3.4 0 7.5 0c4 0 7.5 3.4 7.5 7.5 0 4-3.4 7.5-7.5 7.5z"}],["path",null,[],{d:"M8.2 7.5L11 4.7l-.7-.7-2.8 2.8L4.7 4l-.7.7 2.8 2.8L4 10.3l.7.7 2.8-2.8 2.8 2.8.7-.7"}]],["div","file-name",[],{}]],params:{x_file_txt_h:"TEXT_COLOR",file_bg_h:"BG_COLOR_ALPHA",x_file_txt_e:"TEXT_COLOR",x_file_txt:"TEXT_COLOR",x_file_txt_f:"BG_COLOR_ALPHA",x_file_txt_d:"TEXT_COLOR",file_fnt:"FONT"},paramsDefaults:{x_file_txt_h:"color_6",file_bg_h:"color_16",x_file_txt_e:"color_6",x_file_txt:"color_6",x_file_txt_f:"color_6",x_file_txt_d:"color_6",file_fnt:"font_9"},css:{"%":"display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start;min-height:17px;",'%:hover %x-icon,%[data-preview~="hover"] %x-icon':"fill:[x_file_txt_h];",'%:hover %file-name,%[data-preview~="hover"] %file-name':"background-color:[file_bg_h];color:[x_file_txt_h];",'%[data-error="true"] %x-icon,%[data-preview~="error"] %x-icon':"fill:[x_file_txt_e];",'%[data-error="true"] %file-name,%[data-preview~="error"] %file-name':"color:[x_file_txt_e];","%x-icon":"display:inline-block;cursor:pointer;height:17px;width:17px;min-width:16px;position:relative;fill:[x_file_txt];",'%x-icon:focus,%x-icon[data-preview~="focus"]':"fill:[x_file_txt_f];",'%x-icon[data-disabled="true"],%x-icon[data-preview~="disabled"]':"fill:[x_file_txt_d];","%file-name":"display:inline-block;text-overflow:ellipsis;overflow:hidden;white-space:nowrap;color:[x_file_txt];direction:ltr;padding-right:3px;[file_fnt]","%file-name:hover":"overflow:visible;",'%file-name[data-disabled="true"],%file-name[data-preview~="disabled"]':"color:[x_file_txt_d];","%_file-name-placeholder":"opacity:0.7;","%_hide-placeholder":"visibility:hidden;","%_align-right":"direction:rtl;","%_align-right %x-icon":"margin-left:8px;","%_align-left %x-icon":"margin-right:8px;","%_align-center":"-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;","%_align-center %x-icon":"margin-right:8px;"}}};return e}.apply(t,[]))||(e.exports=o)},2:function(e,t){e.exports=i},3:function(e,t){e.exports=o},4:function(e,t){e.exports=n},41:function(e,t){e.exports=l},5:function(e,t){e.exports=s}})});
//# sourceMappingURL=fileUploader.min.js.map