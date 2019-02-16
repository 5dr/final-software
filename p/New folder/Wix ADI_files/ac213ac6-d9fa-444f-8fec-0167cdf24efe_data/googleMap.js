define("googleMap",["lodash","coreUtils","santa-components","componentsCore","skins","reactDOM","components"],function(t,e,r,a,o,n,i){return function(t){var e={};function r(a){if(e[a])return e[a].exports;var o=e[a]={i:a,l:!1,exports:{}};return t[a].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(a,o,function(e){return t[e]}.bind(null,o));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=1415)}({0:function(e,r){e.exports=t},1:function(t,r){t.exports=e},11:function(t,e){t.exports=n},1415:function(t,e,r){var a,o;a=[r(2),r(0),r(1),r(11),r(25),r(5),r(1416),r(3)],void 0===(o=function(t,e,r,a,o,n,i,s){"use strict";var p=["da","de","en","es","fr","it","ja","ko","nl","no","pl","pt","ru","sv","tr"],d={pt:"pt-BR"},u=function(t){var r=t.compProp.language,a=t.userLanguage,o="userLang"===r?a:r,n=e.includes(p,o)?o:"en";return d[n]||n};function l(t){return e.transform({address:t.compData.address,addressInfo:t.compData.addressInfo,mapType:t.compProp.mapType,mapInteractive:t.compProp.mapDragging,showZoom:t.compProp.showZoom,showStreetView:t.compProp.showStreetView,showMapType:t.compProp.showMapType,lat:t.compData.latitude,long:t.compData.longitude,ts:t.structure.layout.width+t.structure.layout.height,mapStyle:JSON.stringify(t.compData.mapStyle||[])},function(t,a,o){t[o]=e.isString(a)?r.filterHtmlString(a):a},{})}var c={displayName:"GoogleMap",mixins:[s.mixins.skinBasedComp],statics:{compSpecificIsDomOnlyOverride:function(){return!1}},propTypes:{compData:t.santaTypesDefinitions.Component.compData.isRequired,compProp:t.santaTypesDefinitions.Component.compProp.isRequired,structure:t.santaTypesDefinitions.Component.structure.isRequired,santaBase:t.santaTypesDefinitions.santaBase.isRequired,cannotHideIframeWithinRoundedCorners:t.santaTypesDefinitions.mobile.cannotHideIframeWithinRoundedCorners.isRequired,userLanguage:t.santaTypesDefinitions.WixUserSantaTypes.userLanguage.isRequired},getInitialState:function(){var t={};return this.props.cannotHideIframeWithinRoundedCorners()&&(t.$corners="squared"),this.restartMap(this.props),t},componentDidMount:function(){this.iFrameNode=a.findDOMNode(this.refs.iframe),this.iFrameNode.onload=function(){var t=l(this.props);this.updateMapParams(t)}.bind(this)},componentWillReceiveProps:function(t){var e=l(t);u(this.props)===u(t)?this.updateMapParams(e):this.restartMap(t)},updateMapParams:function(t){a.findDOMNode(this.refs.iframe).contentWindow.postMessage(JSON.stringify(t),"*")},restartMap:function(t){this.iframeUrl=function(t){var a=l(t),o=e.pick(a,["lat","long","address","addressInfo","showZoom","showStreetView","showMapType"]),n=e.reduce(o,function(t,e,r){return t.concat("&"+r+"="+e)},""),i="language="+u(t)+n;return r.urlUtils.joinURL(t.santaBase||"","static/external/googleMap.html?"+i)}(t),this.a11yTitle=r.translationsLoader.getTranslation("component_label",u(t),"COMPONENT_LABEL_googleMapsTitle")},getMapParamsFromProps:l,getSkinProperties:function(){return{"":{tabIndex:0,title:this.a11yTitle,"aria-label":this.a11yTitle},mapContainer:{key:"mapContainer",children:[t.utils.createReactElement("iframe",{ref:"iframe","data-src":this.iframeUrl,width:"100%",height:"100%",frameBorder:"0",scrolling:"no",title:this.a11yTitle,"aria-label":this.a11yTitle})]}}}};return s.compRegistrar.register("wysiwyg.viewer.components.GoogleMap",c),o.translationRequirementsChecker.registerCommonLanguageRequirement("wysiwyg.viewer.components.GoogleMap",function(t,r){return e.get(r,["properties","language"])}),n.skinsMap.addBatch(i),c}.apply(e,a))||(t.exports=o)},1416:function(t,e,r){var a;void 0===(a=function(){"use strict";var t={"wysiwyg.viewer.skins.GoogleMapSkin":{react:[["div","mapContainer",[],{}]],css:{'%[data-state~="squared"],%[data-state~="squared"] %mapContainer':"border-radius:0;","%mapContainer":"position:absolute;top:0;right:0;bottom:0;left:0;"}},"wysiwyg.viewer.skins.map.GoogleMapDefault":{react:[["div","mapContainer",[],{}]],params:{brd:"BG_COLOR_ALPHA",rd:"BORDER_RADIUS",shd:"BOX_SHADOW",brw:"SIZE"},paramsDefaults:{brd:"color_15",rd:"0",shd:"0 1px 4px rgba(0, 0, 0, 0.6)",brw:"0"},css:{'%[data-state~="squared"],%[data-state~="squared"] %mapContainer':"border-radius:0;","%":"background:[brd];[rd]  [shd]","%mapContainer":"display:inline-block;overflow:hidden;[rd]  position:absolute;top:[brw];right:[brw];bottom:[brw];left:[brw];-webkit-mask-image:-webkit-radial-gradient(circle, #fff, #000);mask-image:radial-gradient(circle, #fff, #000);"}},"wysiwyg.viewer.skins.map.GoogleMapLiftedShadow":{react:[["div",null,["_left","_shd"],{}],["div",null,["_right","_shd"],{}],["div","mapContainer",[],{}]],params:{tdr:"URL",brd:"BG_COLOR_ALPHA",rd:"BORDER_RADIUS",shd:"BOX_SHADOW",brw:"SIZE"},paramsDefaults:{tdr:"BASE_THEME_DIRECTORY",brd:"color_15",rd:"0",shd:"0 1px 4px rgba(0, 0, 0, 0.6)",brw:"0"},css:{'%[data-state~="squared"],%[data-state~="squared"] %mapContainer':"border-radius:0;","%_shd":"position:absolute;bottom:-26px;width:165px;height:26px;background-image:url([tdr]liftedshadow_medium.png);background-repeat:no-repeat;","%_left":"left:-20px;background-position:0 0;","%_right":"right:-20px;background-position:100% 0;","%":"background-color:[brd];[rd]  [shd]","%mapContainer":"position:absolute;top:[brw];right:[brw];bottom:[brw];left:[brw];overflow:hidden;"}},"wysiwyg.viewer.skins.map.GoogleMapSloppy":{react:[["div",null,["_brd","_one"],{}],["div",null,["_brd","_two"],{}],["div","mapContainer",[],{}]],params:{tdr:"URL"},paramsDefaults:{tdr:"BASE_THEME_DIRECTORY"},css:{'%[data-state~="squared"],%[data-state~="squared"] %mapContainer':"border-radius:0;","%_brd":"background-image:url([tdr]sloppyframe.png);background-repeat:no-repeat;position:absolute;top:0;right:0;bottom:0;left:0;","%_one":"background-position:0 0;bottom:3px;right:3px;","%_two":"background-position:100% 100%;top:3px;left:3px;","%mapContainer":"position:absolute;top:9px;bottom:9px;left:9px;right:9px;"}}};return t}.apply(e,[]))||(t.exports=a)},2:function(t,e){t.exports=r},25:function(t,e){t.exports=i},3:function(t,e){t.exports=a},5:function(t,e){t.exports=o}})});
//# sourceMappingURL=googleMap.min.js.map