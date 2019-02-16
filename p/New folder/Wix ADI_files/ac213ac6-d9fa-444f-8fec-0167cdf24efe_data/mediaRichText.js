define("mediaRichText",["lodash","coreUtils","santa-components","componentsCore","utils","santaProps","compUtils","create-react-class"],function(e,t,n,i,o,r,a,s){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1544)}({0:function(t,n){t.exports=e},1:function(e,n){e.exports=t},15:function(e,t){e.exports=r},1544:function(e,t,n){var i,o;i=[n(0),n(3),n(1),n(18),n(20),n(15),n(2),n(1545),n(1547),n(1548)],void 0===(o=function(e,t,n,i,o,r,a,s,p,l){"use strict";var c=o({displayName:"wixMusicEmbed",mixins:[l],render:function(){return a.utils.createReactElement("iframe",y(this.getIframeProps()))}}),m=n.fragment,u=a.utils.textComponentsUtils,d={wline:"div"};function h(e,t){try{return function(e,t){var n=JSON.parse(e.replace(/&quot;/g,'"'));return n.url=t,n}(e,t)}catch(t){return void this.props.siteAPI.reportBI(s.MEDIA_RICH_TEXT_WRONG_COMP_DATA,{wixCompJson:e,errorDesc:t.message,errorStack:t.stack})}}function y(t){return e.assign(t,{wixComp:!0})}function f(t){return e.isFunction(t.type)&&t.props.wixComp}function g(e){return e.replace(/^#/,"")}function v(t){var n,i,o,r=this.props.siteData,a=this.props.id,s=this._getMediaRichTextComponentWidth(),p=(n=t,i=s,(o=e.get(n,"structure.layout",{})).width&&(o.width=Math.min(i,o.width)),e.assign({},n.structure,{dataItem:n.compData,propertiesItem:n.compProp,layout:o,id:n.structure.id,type:n.structure.componentType,structure:n.structure})),l=p.id;r.registerMediaRichTextInnerComponent(a,l,p)}var w={displayName:"MediaRichText",mixins:[a.mixins.textCompMixin],propTypes:{rootNavigationInfo:a.santaTypesDefinitions.Component.rootNavigationInfo.isRequired},allowIframes:!0,convertCompDataTextToHTML:function(t){this.componentDataQueryList=e.map(t.compData.componentDataList||[],g),this._compData=t.compData,this._componentHtml=this._componentHtml.replace(/\n|\r|\t/g,""),this._componentHtml=u.convertDataQueryLinksIntoHtmlAnchors(this._componentHtml,t.compData.linkList,e.partialRight(n.linkRenderer.renderLink,t.siteData,t.rootNavigationInfo)),this._componentHtml=u.mobileTextTransformIfNeeded(this._componentHtml,{brightness:e.get(t,"compProp.brightness"),isMobileView:t.siteData.isMobileView(),scale:e.get(t,"structure.layout.scale"),fontGetter:t.siteData.getFont.bind(t.siteData),colorGetter:t.siteData.getColor.bind(t.siteData)}),this.renderedDataQueries={},this._componentHtml=this._convertComponentsPlaceHoldersToRenderedComponents(this._componentHtml),e.size(this.renderedDataQueries)!==e.size(this.componentDataQueryList)&&e(this.componentDataQueryList).without(e.keys(this.renderedDataQueries)).forEach(function(e){this.props.siteAPI.reportBI(s.MEDIA_RICH_MISSING_COMPONENT_PLACEHOLDER,{dataQuery:"#"+e})}.bind(this)),this._registerReLayoutFunc=t.registerReLayout},_addToCompDataListIfMissing:function(t){var n=g(t);e.includes(this.componentDataQueryList,n)||this.componentDataQueryList.push(n)},_convertNodeFragmentToReactElements:function(t,n){if(t.nodeType===m.Node.ELEMENT_NODE){var i=e.reduce(t.attributes,function(t,n){return"style"===n.name?t.style=e.reduce(n.value.split(";"),function(t,n){var i=n.split(":");return 2===i.length&&(t[e.camelCase(i[0])]=i[1]),t},{}):"class"===n.name?t.className=n.value:"frameborder"===n.name?t.frameBorder=n.value:e.startsWith(n.name,"data-")?t[n.name]=n.value:t[e.camelCase(n.name)]=n.value,t},{});if(function(t,n){return t&&!e.has(d,n.tagName.toLowerCase())}(i.wixComp,t)){var o=h.call(this,i.wixComp,i.src);return o?this._handleInnerComps(o,i):""}var r=function(e){return e.childNodes&&1===e.childNodes.length&&e.childNodes[0].nodeType===m.Node.TEXT_NODE}(t)?t.textContent:e.flatMap(t.childNodes,this._convertNodeFragmentToReactElements);if(e.isArray(r)&&r.length&&e.every(r,f))return r;var s=e.includes(this.voidElements,t.tagName.toLowerCase())?i:e.assign(i,{children:r});return a.utils.createReactElement((p=t.tagName.toLowerCase(),d[p]||p),e.defaults(s,{key:""+t.tagName+n}))}var p;return t.nodeType===m.Node.TEXT_NODE?t.textContent:""},voidElements:["area","base","basefont","bgsound","br","col","command","embed","frame","hr","image","img","input","isindex","keygen","link","menuitem","meta","nextid","param","source","track","wbr"],_convertComponentsPlaceHoldersToRenderedComponents:function(t){var n=m.document.createElement("div");return n.innerHTML=t,e.map(n.childNodes,this._convertNodeFragmentToReactElements)},_validateAndFixGalleryCompData:function(t,n){var i,o,r=e.clone(t),a=p.buildGalleryJsonFromCkData(n,this._compData.innerCompsData,t.style);return e.assign(r,a),i=r,o=e.cloneDeep(i.compData),i.compData.items=e.map(i.compData.items,function(t){return e.assign({galleryData:o},t)}),r},_createInnerComponentProperties:function(t,n){var i=this._createInnerComponentBasicProperties(t,n);return"wysiwyg.viewer.components.WPhoto"===n.componentType||"wysiwyg.viewer.components.Video"===n.componentType?function(t,n){return e.has(t,"post-cover-photo")&&(n.addItemProp=!0),n}(n,i):p.isGalleryComponent(n.componentType)?this._validateAndFixGalleryCompData(i,n):(this.props.siteAPI.reportBI(s.MEDIA_RICH_TEXT_UNSUPPORTED_COMPONENT,{wixCompJson:n}),i)},_getMediaRichTextComponentWidth:function(){return function(){var e=this.props.siteData.measureMap;return e&&(this._lastMeasuredWidth=e.width[this.props.id]),this._lastMeasuredWidth}.call(this)||e.get(this.props,"style.width")||630},_createInnerComponentBasicProperties:function(t,n){var i=function(t){var n=t.id||"innerComp_"+t.dataQuery.replace("#","");return e.assign(t,{id:n})}(n),o=e.get(this._compData.innerCompsData,i.dataQuery),a=void 0;if("wysiwyg.viewer.components.WPhoto"===i.componentType){if(i.linkDataQuery){var s=i.linkDataQuery.slice(1);o.link=e.find(this._compData.linkList,{id:s})}a={displayMode:"fitWidthStrict"}}else"wysiwyg.viewer.components.Video"===i.componentType&&(a={showControls:"temp_show",enablejsapi:1});var p=r.componentPropsBuilder.getCompProps(t,i,this.props.siteAPI,this.props.rootId,null,{compData:o,compProp:a});return p.key=p.key||n.key,delete p.ref,p.registerReLayout=this._registerReLayoutFunc||this.registerReLayout,function(e,t){var n=e.style;n.marginTop="10px",n.marginBottom="10px",n.marginLeft=t.marginLeft,n.marginRight=t.marginRight,n.position="static"}(p,i),function(e,t){var n=t.style;e.floatValue?(n.float=e.floatValue,n.display="",n.clear=""):(n.display=e.display,n.clear="both",n.float="")}(i,p),this._calcInnerCompWidthAndHeight(i,p),p},_calcInnerCompWidthAndHeight:function(t,n){var i=this._getMediaRichTextComponentWidth(),o=i,r=n.compData&&n.compData.width,a=t.width;e.isNumber(a)?o=this._getWidthMultiplier(t)*i:e.isNumber(r)&&(o=Math.min(r,i)),n.style.width=o,t.dimsRatio?n.style.height=n.style.width*t.dimsRatio:"wysiwyg.viewer.components.Video"===t.componentType&&(n.style.height=.5625*n.style.width)},_getWidthMultiplier:function(e){return this.props.siteData.isMobileView()?.99:e.width},_handleInnerComps:function(e,t){return"htmlComp"===e.componentType?this._handleHtmlComp(e,t):"music"===e.componentType?this._handleMusicComp(e,t):this._handleInnerSantaComponent(e)},_handleInnerSantaComponent:function(e){var t=i.compFactory.getCompReactClass(e.componentType),n=this._createInnerComponentProperties(t,e);return this.renderedDataQueries[g(e.dataQuery)]=1,this._addToCompDataListIfMissing(e.dataQuery),v.call(this,n),i.compFactory.getCompClass(e.componentType,!0)(y(n))},_handleHtmlComp:function(e,t){var n=this.props.siteData.serviceTopology.staticHTMLComponentUrl,i=void 0;"website"===e.type?i="//"+e.websiteUrl.replace(/^(https?:)?\/\//,""):i=("temp"===e.urlStatus?"//0.htmlcomponentservice.com/":n)+e.relativeUrl;if("center"===e.align?t.style={display:"block",clear:"both",margin:"0 auto"}:t.style={float:e.align},t.src=i,t.sandbox="allow-scripts allow-same-origin allow-popups",this.props.siteData.isMobileView()&&e.dimsRatio){if(t.width="99%",e.dimsRatio>1){var o=.99*(this._getMediaRichTextComponentWidth()?parseInt(this._getMediaRichTextComponentWidth(),10):1)*e.dimsRatio;t.height=o}}else t.width=e.width;return a.utils.createReactElement("iframe",y(t))},_handleMusicComp:function(t,n){var i=e.get(this.props.siteData,["serviceTopology","scriptsLocationMap","wix-music-embed"]),o=/^[\w\-]+$/i,r=o.test(t.paymentId)||""===t.paymentId;if(o.test(t.albumId)&&o.test(t.presetId)&&r)return n.src=i+"/index.html?albumId="+t.albumId+"&paymentsId="+t.paymentId+"&presetId="+t.presetId+"&playerId="+t.playerId+"&hideDetailedTrackInfo=true",this.props.siteData.isMobileView()&&(n.src+="&isMobile=true"),n.sandbox="allow-scripts allow-same-origin allow-popups",n.playerId=t.playerId,delete n.wixComp,n.width="100%",a.utils.createReactElement(c,n)},componentWillUnmount:function(){this.props.siteData.clearMediaRichTextInnerComponents(this.props.id)}};return t.compRegistrar.register("wysiwyg.viewer.components.MediaRichText",w),w}.apply(t,i))||(e.exports=o)},1545:function(e,t,n){var i,o;i=[n(1546),n(0),n(1)],void 0===(o=function(e,t,n){"use strict";return t.forEach(e,function(e,t){e.errorName=t}),n.loggingUtils.logger.register("mediaRichText","error",e),e}.apply(t,i))||(e.exports=o)},1546:function(e){e.exports={MEDIA_RICH_TEXT_WRONG_COMP_DATA:{errorCode:32e3,severity:"fatal",params:{p1:"wixCompJson",p2:"errorDesc",p3:"errorStack"}},MEDIA_RICH_TEXT_UNSUPPORTED_COMPONENT:{errorCode:32001,severity:"fatal",params:{p1:"wixCompJson"}},MEDIA_RICH_MISSING_COMPONENT_PLACEHOLDER:{errorCode:32002,severity:"fatal",params:{p1:"dataQuery"}}}},1547:function(e,t,n){var i,o;i=[n(0),n(1),n(8)],void 0===(o=function(e,t,n){"use strict";var i="wysiwyg.viewer.components.MatrixGallery",o="wysiwyg.viewer.skins.gallerymatrix.BlogMatrixGallery",r="wysiwyg.viewer.components.SlideShowGallery",a="skins.viewer.gallery.BlogSlideShow",s=[i,r],p=.75;function l(e){return e===i}function c(e){return e===r}function m(e,t){var n=0;if(l(t.componentType)){var i=t.cols,o=t.rows,r=2*t.margin,a=Math.round((e-(i-1)*r)/i),s=p*a;n=Math.round(s*o)+(o-1)*r+26}else c(t.componentType)&&(n=Math.round(p*e));return n}function u(e,t){var n=e.width;return{width:n,height:m(n,t),position:"relative"}}return{buildGalleryJsonFromCkData:function(i,r,s){var p=i.componentType,m=e.assign({dataQuery:i.dataQuery,propertyQuery:i.dataQuery,componentType:i.componentType,type:"Component",style:u(s,i),compData:{type:"ImageList",items:e.map(i.imageList,function(t){var n=e.get(r,t.dataQuery);return e.assign({},t,n,{type:"Image",id:t.id+t.uri,isRef:!1,metaData:{isHidden:!1,isPreset:!0,schemaVersion:"1.0"}})}),metaData:{isPreset:!0,schemaVersion:"1.0",isHidden:!1}}},function(e){var n={};return l(e.componentType)?n={skin:o,compProp:{type:"MatrixGalleryProperties",metaData:{schemaVersion:"1.0"},expandEnabled:!0,imageMode:e.fixedSize?"clipImage":"flexibleWidthFixed",numCols:e.cols,maxRows:e.rows,incRows:2,margin:2*e.margin,alignText:"left"}}:c(e.componentType)?n={skin:a,compProp:{autoplay:e.autoplay,autoplayInterval:e.autoplayInterval,bidirectional:!1,expandEnabled:!0,imageMode:"flexibleWidthFixed",metaData:{schemaVersion:"1.0"},reverse:!1,showAutoplay:!0,showCounter:!0,showExpand:!1,showNavigation:!0,showSocial:!1,transDuration:1,transition:"swipeHorizontal",type:"SlideShowGalleryProperties"}}:t.log.error("Unknown gallery type: "+e.componentType),n}(i));return c(p)&&(m.styleId=n.santaTypes.shortenStyleId(a)),l(p)&&(m.styleId=n.santaTypes.shortenStyleId(o)),m},isGalleryComponent:function(t){return e.includes(s,t)}}}.apply(t,i))||(e.exports=o)},1548:function(e,t,n){var i,o;i=[n(0)],void 0===(o=function(e){"use strict";return{getInitialState:function(){return{height:this.props.height}},onPlayerMessage:function(e){"resizeOfWixMusicIframe"===e.data.event&&e.data.playerId===this.props.playerId&&this.setState({height:e.data.size.maxHeight})},componentDidMount:function(){window.addEventListener("message",this.onPlayerMessage)},componentWillUnmount:function(){window.removeEventListener("message",this.onPlayerMessage)},getIframeProps:function(){return e.assign({},this.props,{height:this.state.height})}}}.apply(t,i))||(e.exports=o)},18:function(e,t){e.exports=a},2:function(e,t){e.exports=n},20:function(e,t){e.exports=s},3:function(e,t){e.exports=i},8:function(e,t){e.exports=o}})});
//# sourceMappingURL=mediaRichText.min.js.map