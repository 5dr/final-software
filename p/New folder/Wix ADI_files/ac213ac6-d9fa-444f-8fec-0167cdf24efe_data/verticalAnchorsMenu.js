define("verticalAnchorsMenu",["lodash","coreUtils","santa-components","componentsCore","prop-types","skins","zepto","reactDOM","create-react-class","verticalMenu"],function(e,t,i,n,o,r,l,s,a,c){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,i),o.l=!0,o.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1887)}({0:function(t,i){t.exports=e},1:function(e,i){e.exports=t},10:function(e,t){e.exports=l},11:function(e,t){e.exports=s},1887:function(e,t,i){var n,o;n=[i(1888),i(566),i(5),i(565),i(3)],void 0===(o=function(e,t,i,n,o){"use strict";var r={verticalAnchorsMenuComp:e,verticalAnchorsMenuItem:t};return o.compRegistrar.register("wysiwyg.common.components.verticalanchorsmenu.viewer.VerticalAnchorsMenu",r.verticalAnchorsMenuComp).register("wysiwyg.common.components.verticalanchorsmenu.viewer.VerticalAnchorsMenuItem",r.verticalAnchorsMenuItem),i.skinsMap.addBatch(n),r}.apply(t,n))||(e.exports=o)},1888:function(e,t,i){var n,o;function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}n=[i(2),i(11),i(0),i(20),i(1889),i(565),i(1891),i(1893)],void 0===(o=function(e,t,i,n,o,l,s,a){"use strict";var c=function(t,n){var o=n.getStyleData,s=n.themeData,a=n.siteZoomRatio,c=n.invertedZoomRatio,m=n.orientationZoomFix,p=n.mobileZoom,_=n.scriptsLocationMap,u=o(t),h={siteZoomRatio:a,invertedZoomRatio:c,orientationZoomFix:m,mobileZoom:p},d={scriptsLocationMap:_},b=function(e){return l[e]},k=b(u.skin),f=i.get(u,"style.properties",{});return k?r({},t,e.utils.skinsRenderer.createSkinCss(k,f,s,t,h,d,b)):null},m={getStyleData:e.santaTypesDefinitions.Component.getStyleData,themeData:e.santaTypesDefinitions.Theme.THEME_DATA,siteZoomRatio:e.santaTypesDefinitions.Mobile.siteZoomRatio,invertedZoomRatio:e.santaTypesDefinitions.Mobile.invertedZoomRatio,orientationZoomFix:e.santaTypesDefinitions.Mobile.orientationZoomFix,mobileZoom:e.santaTypesDefinitions.Mobile.mobileZoom,scriptsLocationMap:e.santaTypesDefinitions.ServiceTopology.scriptsLocationMap};c.cssTypes=m;var p=function(t,n){var o=n.getStyleData,s=n.generalTheme,a=o?i.reduce(t,function(e,t){return i.assign(e,r({},t,o(t)))},{}):t;return e.utils.collectFontsFromLoadedCompStyles(a,s,function(e){return l[e]})},_={getStyleData:e.santaTypesDefinitions.Component.getStyleData,generalTheme:e.santaTypesDefinitions.Theme.THEME_DATA};p.fontsTypes=_;var u=[3,6,10],h=[],d=n(s),b=n(a);return{displayName:"VerticalAnchorsMenu",statics:{getCompCss:c,getCompFonts:p,shouldLayout:{activeAnchor:!1}},propTypes:i.assign({compProp:e.santaTypesDefinitions.Component.compProp.isRequired,compData:e.santaTypesDefinitions.Component.compData.isRequired,skin:e.santaTypesDefinitions.Component.skin.isRequired,primaryPageId:e.santaTypesDefinitions.primaryPageId.isRequired,isTabletDevice:e.santaTypesDefinitions.Device.isTabletDevice,reportBI:e.santaTypesDefinitions.reportBI,registerLayoutFunc:e.santaTypesDefinitions.Layout.registerLayoutFunc.isRequired,registerToMeanColor:e.santaTypesDefinitions.VerticalAnchorsMenu.registerToMeanColor,unregisterToMeanColor:e.santaTypesDefinitions.VerticalAnchorsMenu.unregisterToMeanColor,registerToActiveAnchor:e.santaTypesDefinitions.VerticalAnchorsMenu.registerToActiveAnchor,unregisterToActiveAnchor:e.santaTypesDefinitions.VerticalAnchorsMenu.unregisterToActiveAnchor,getOverlappingBackgroundBrightness:e.santaTypesDefinitions.VerticalAnchorsMenu.getOverlappingBackgroundBrightness,activeAnchor:e.santaTypesDefinitions.VerticalAnchorsMenu.activeAnchor},e.utils.santaTypesUtils.getSantaTypesByDefinition(s)),getInitialState:function(){return{overlappingBackgroundBrightness:null}},measureComponent:function(e,t){var n=t(e),o=n.find("[class*=link]"),r=n.find("[class*=label]"),l=n.find("[class*=symbol]"),s=o.length,a=l.width(),c=Math.ceil(o.height()*s),m=i(r).map(function(e){return t(e).width()}).max()+a;return[{type:"css",node:e,changes:{width:Math.max(e.offsetWidth,m),height:Math.max(e.offsetHeight,c),minWidth:m,minHeight:c}}]},componentDidMount:function(){this.props.registerToActiveAnchor(this),this.props.registerLayoutFunc(t.findDOMNode(this),this.measureComponent),this.props.compProp.autoColor&&this.props.registerToMeanColor(this.handleBackgroundBrightness)},componentWillUnmount:function(){this.props.unregisterToActiveAnchor(this),this.props.unregisterToMeanColor(this.handleBackgroundBrightness)},componentWillReceiveProps:function(e){var t,n;this.props.compProp.autoColor&&!e.compProp.autoColor?e.unregisterToMeanColor(this.handleBackgroundBrightness):e.compProp.autoColor&&!this.props.compProp.autoColor&&e.registerToMeanColor(this.handleBackgroundBrightness),i.get(e.activeAnchor,"activeAnchorComp.id","")!==i.get(this.props.activeAnchor,"activeAnchorComp.id","")&&(t=this.props.reportBI,(n=e.activeAnchor)&&(i.forEach(h,function(e){clearTimeout(e)}),h=i.map(u,function(e){return setTimeout(function(){t(o.TIME_IN_FOLD,{activeFold:n.index,totalFolds:n.total,timeInFold:e})},1e3*e)})))},handleBackgroundBrightness:function(){var e=this.props.getOverlappingBackgroundBrightness();this.props.compProp.autoColor&&this.state.overlappingBackgroundBrightness!==e&&this.setState({overlappingBackgroundBrightness:e})},isSelected:function(e){return i.get(this.props.activeAnchor,"activeAnchorComp.id","")===e},render:function(){var t,n=i.assign({},this.props,{isSelectedFn:this.isSelected,svgShapeName:(t=this.props.skin,i.includes(t,"VerticalAnchorsMenuLinkedNoTextSkin")?"fullCircle":"circle")});this.props.compProp.autoColor&&i.get(this,"props.structure.layout.fixedPosition")&&(n.overlappingBackgroundBrightness=this.state.overlappingBackgroundBrightness);var o,r=(o=n.skin,i.includes(o,"verticalanchorsmenu")?d:i.includes(o,"verticalmenu")?b:e.utils.createReactElement("div",null,["AnchorMenuSkin Not Found"]));return e.utils.createReactElement(r,n)}}}.apply(t,n))||(e.exports=o)},1889:function(e,t,i){var n,o;n=[i(1890),i(1)],void 0===(o=function(e,t){"use strict";return t.loggingUtils.logger.register("verticalAnchorsMenu","event",e),e}.apply(t,n))||(e.exports=o)},1890:function(e){e.exports={TIME_IN_FOLD:{eventId:354,adapter:"ugc-viewer",wixSiteSampleRatio:1,params:{active_fold:"activeFold",total_folds:"totalFolds",time_in_fold:"timeInFold"}}}},1891:function(e,t,i){var n,o;n=[i(2),i(0),i(4),i(1),i(3),i(566)],void 0===(o=function(e,t,i,n,o,r){"use strict";return{displayName:"VerticalAnchorsBaseMenu",mixins:[o.mixins.skinBasedComp,o.mixins.skinInfo],propTypes:{compProp:e.santaTypesDefinitions.Component.compProp.isRequired,styleId:e.santaTypesDefinitions.Component.styleId.isRequired,structure:e.santaTypesDefinitions.Component.structure.isRequired,primaryPageId:e.santaTypesDefinitions.primaryPageId.isRequired,browser:e.santaTypesDefinitions.Browser.browser.isRequired,isTabletDevice:e.santaTypesDefinitions.Device.isTabletDevice.isRequired,linkRenderInfo:e.santaTypesDefinitions.Link.renderInfo,rootNavigationInfo:e.santaTypesDefinitions.Component.rootNavigationInfo,getAnchorLinkItems:e.santaTypesDefinitions.VerticalAnchorsMenu.getAnchorLinkItems.isRequired,isSelectedFn:i.func.isRequired,overlappingBackgroundBrightness:i.number,svgShapeName:i.string},getDefaultProps:function(){return{svgShapeName:"circle"}},getMenuButtons:function(i){var o=this.getSkinExports();return t.map(i,function(i){var l=this.props.isSelectedFn(i.id),s={key:i.id,anchorLink:n.linkRenderer.renderLink(i,this.props.linkRenderInfo,this.props.rootNavigationInfo),anchorData:i,browser:this.props.browser,styleId:this.props.styleId,disabled:o.disableClickOnHiddenElement,isTablet:this.props.isTabletDevice(),primaryPageId:this.props.primaryPageId,svgShapeName:this.props.svgShapeName,hoverElementClass:o.hoverElementClass,isActive:l};if(this.props.compProp.autoColor&&t.get(this.props.structure,"layout.fixedPosition")){var a=this.getParams(["symbolAndTextColor","selectedColor"]),c=a.symbolAndTextColor.value,m=a.selectedColor.value,p=c.values.hsv[2],_=m.values.hsv[2];s.colorBrightness=l?_:p,s.hoveredOrSelectedColorBrightness=_,s.backgroundBrightness=this.props.overlappingBackgroundBrightness}return e.utils.createReactElement(r,s)}.bind(this))},addConnectingLinesIfNeeded:function(i){if(!this.getSkinExports()||!0!==this.getSkinExports().hasConnectingLines)return i;var n=[];return t.forEach(i,function(t){n.push(e.utils.createReactElement("div",{className:this.props.styleId+"_line"})),n.push(t)}.bind(this)),t.tail(n)},getMenuClasses:function(){var e=this.props.styleId,t=[];return t.push(e+"_orientation-"+this.props.compProp.orientation),t.push(e+"_text-align-"+this.props.compProp.itemsAlignment),t.join(" ")},getSkinProperties:function(){var e=this.getMenuButtons(this.props.getAnchorLinkItems());return e=this.addConnectingLinesIfNeeded(e),{"":{tagName:"nav"},menuContainer:{className:this.getMenuClasses(),children:e}}}}}.apply(t,n))||(e.exports=o)},1892:function(e,t,i){var n;void 0===(n=function(){"use strict";return{circle:{svg:{width:"12",height:"12",viewBox:"0 0 24 24"},content:'<circle cx="12" cy="12" r="10"/>'},fullCircle:{svg:{width:"24",height:"24",viewBox:"0 0 48 48"},content:'<circle class="external" cx="24" cy="24" r="22" /><circle class="border" cx="24" cy="24" r="10" /><circle class="inner" cx="24" cy="24" r="10" />'}}}.apply(t,[]))||(e.exports=n)},1893:function(e,t){e.exports=c},2:function(e,t){e.exports=i},20:function(e,t){e.exports=a},3:function(e,t){e.exports=n},4:function(e,t){e.exports=o},5:function(e,t){e.exports=r},565:function(e,t,i){var n;void 0===(n=function(){"use strict";var e={"wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuLinkedNoTextSkin":{react:[["ul","menuContainer",[],{}]],exports:{hoverElementClass:"symbol",hasConnectingLines:!0},params:{symbolColor:"BG_COLOR_ALPHA",symbolColorSelected:"BG_COLOR_ALPHA",symbolAndTextColor:"BG_COLOR_ALPHA",selectedColor:"BG_COLOR_ALPHA"},paramsDefaults:{symbolColor:"color_15",symbolColorSelected:"color_2",symbolAndTextColor:["symbolColor"],selectedColor:["symbolColorSelected"]},css:{"%menuContainer":"display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;width:100%;height:100%;","%menuContainer %_item":"position:relative;height:26px;width:26px;min-height:10px;    position:relative;","%menuContainer %_item %_link":"display:-webkit-box;display:-webkit-flex;display:flex;text-decoration:none;width:100%;cursor:default;-webkit-box-align:center;-webkit-align-items:center;align-items:center;position:relative;height:26px;display:inline-block;","%menuContainer %_item %_link %_text-wrapper":"position:relative;white-space:nowrap;text-align:right;line-height:100%;display:none;","%menuContainer %_item %_link %_text-wrapper %_label":"cursor:pointer;","%menuContainer %_item %_link %_symbol":"cursor:pointer;-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;height:26px;width:26px;","%menuContainer%_orientation-left %_item %_link":"-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;","%menuContainer%_orientation-right %_item %_link":"-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;","%menuContainer%_text-align-left %_item %_link %_text-wrapper":"text-align:left;","%menuContainer%_text-align-center %_item %_link %_text-wrapper":"text-align:center;","%menuContainer%_text-align-right %_item %_link %_text-wrapper":"text-align:right;","%menuContainer %_line":"display:none;width:1px;height:100%;background-color:[symbolColor];top:10px;position:relative;opacity:.2;","%menuContainer %_item %_link %_symbol circle:nth-child(1)":"stroke:[symbolColor];stroke-width:2;fill:transparent;opacity:0;-webkit-transition:opacity .25s ease;transition:opacity .25s ease;","%menuContainer %_item %_link %_symbol circle:nth-child(2)":"stroke:[symbolColorSelected];stroke-width:2;fill:transparent;","%menuContainer %_item %_link %_symbol circle:nth-child(3)":"fill:[symbolColor];-webkit-transition:all .25s ease;transition:all .25s ease;","%menuContainer %_item%_hover %_link":"cursor:pointer;","%menuContainer %_item%_hover %_symbol circle:nth-child(3)":"opacity:0.7;","%menuContainer %_item%_active %_link":"cursor:pointer;","%menuContainer %_item%_active %_link %_symbol circle:nth-child(1)":"opacity:.75;","%menuContainer %_item%_active %_link %_symbol circle:nth-child(3)":"fill:[symbolColorSelected];","%menuContainer %_item%_light %_link %_symbol circle:nth-child(1),%menuContainer %_active%_item%_light %_link %_symbol circle:nth-child(1)":"stroke:#fff;","%menuContainer %_item%_light %_link %_symbol circle:nth-child(2),%menuContainer %_active%_item%_light %_link %_symbol circle:nth-child(2)":"stroke:#fff;","%menuContainer %_item%_light %_link %_symbol circle:nth-child(3),%menuContainer %_active%_item%_light %_link %_symbol circle:nth-child(3)":"fill:#fff;","%menuContainer %_item%_dark %_link %_symbol circle:nth-child(1),%menuContainer %_active%_item%_dark %_link %_symbol circle:nth-child(1)":"stroke:#000;","%menuContainer %_item%_dark %_link %_symbol circle:nth-child(2),%menuContainer %_active%_item%_dark %_link %_symbol circle:nth-child(2)":"stroke:#000;","%menuContainer %_item%_dark %_link %_symbol circle:nth-child(3),%menuContainer %_active%_item%_dark %_link %_symbol circle:nth-child(3)":"fill:#000;"}},"wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuSymbolSkin":{react:[["ul","menuContainer",[],{}]],exports:{hoverElementClass:"symbol"},params:{symbolColor:"BG_COLOR_ALPHA",symbolColorSelected:"BG_COLOR_ALPHA",symbolAndTextColor:"BG_COLOR_ALPHA",selectedColor:"BG_COLOR_ALPHA"},paramsDefaults:{symbolColor:"color_15",symbolColorSelected:"color_2",symbolAndTextColor:["symbolColor"],selectedColor:["symbolColorSelected"]},css:{"%menuContainer":"display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;","%menuContainer %_item":"position:relative;","%menuContainer %_item %_link":"display:-webkit-box;display:-webkit-flex;display:flex;text-decoration:none;width:100%;cursor:default;-webkit-box-align:center;-webkit-align-items:center;align-items:center;","%menuContainer %_item %_link %_text-wrapper":"position:relative;white-space:nowrap;text-align:right;line-height:100%;display:none;","%menuContainer %_item %_link %_text-wrapper %_label":"cursor:pointer;","%menuContainer %_item %_link %_symbol":"cursor:pointer;-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;fill:transparent;stroke:[symbolColor];stroke-width:4px;","%menuContainer%_orientation-left %_item %_link":"-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;","%menuContainer%_orientation-right %_item %_link":"-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;","%menuContainer%_text-align-left %_item %_link %_text-wrapper":"text-align:left;","%menuContainer%_text-align-center %_item %_link %_text-wrapper":"text-align:center;","%menuContainer%_text-align-right %_item %_link %_text-wrapper":"text-align:right;","%menuContainer %_item%_active %_link %_symbol,%menuContainer %_item%_hover %_link %_symbol":"fill:[symbolColorSelected];stroke:[symbolColorSelected];","%menuContainer %_item%_light %_link %_text-wrapper,%menuContainer %_active%_item%_light %_link %_text-wrapper":"color:#fff;","%menuContainer %_item%_light %_link %_symbol,%menuContainer %_active%_item%_light %_link %_symbol":"stroke:#fff;","%menuContainer %_active%_item%_light %_link %_symbol":"fill:#fff;","%menuContainer %_item%_dark %_link %_text-wrapper,%menuContainer %_active%_item%_dark %_link %_text-wrapper":"color:#000;","%menuContainer %_item%_dark %_link %_symbol,%menuContainer %_active%_item%_dark %_link %_symbol":"stroke:#000;","%menuContainer %_active%_item%_dark %_link %_symbol":"fill:#000;"}},"wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuSymbolWithHiddenTextSkin":{react:[["ul","menuContainer",[],{}]],exports:{hoverElementClass:"symbol",disableClickOnHiddenElement:!0},params:{textFont:"FONT",symbolColor:"BG_COLOR_ALPHA",symbolColorSelected:"TEXT_COLOR",textSpacing:"PADDING_SIZE",symbolAndTextColor:"BG_COLOR_ALPHA",selectedColor:"TEXT_COLOR"},paramsDefaults:{textFont:"font_1",symbolColor:"color_15",symbolColorSelected:"color_2",textSpacing:"14px",symbolAndTextColor:["symbolColor"],selectedColor:["symbolColorSelected"]},css:{"%menuContainer":"display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;","%menuContainer %_item":"position:relative;","%menuContainer %_item %_link":"display:-webkit-box;display:-webkit-flex;display:flex;text-decoration:none;width:100%;cursor:default;-webkit-box-align:center;-webkit-align-items:center;align-items:center;pointer-events:none;","%menuContainer %_item %_link %_text-wrapper":"position:relative;white-space:nowrap;text-align:right;line-height:100%;visibility:hidden;opacity:0;left:10px;[textFont]    color:[symbolColor];width:calc(100% - 15px);-webkit-transition:all 0.3s cubic-bezier(0.23, 1, 0.32, 1);transition:all 0.3s cubic-bezier(0.23, 1, 0.32, 1);","%menuContainer %_item %_link %_text-wrapper %_label":"cursor:pointer;","%menuContainer %_item %_link %_symbol":"cursor:pointer;-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;pointer-events:all;fill:transparent;stroke:[symbolColor];stroke-width:4px;","%menuContainer%_orientation-left %_item %_link":"-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;","%menuContainer%_orientation-right %_item %_link":"-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;","%menuContainer%_text-align-left %_item %_link %_text-wrapper":"text-align:left;","%menuContainer%_text-align-center %_item %_link %_text-wrapper":"text-align:center;","%menuContainer%_text-align-right %_item %_link %_text-wrapper":"text-align:right;","%menuContainer %_item%_active %_link,%menuContainer %_item%_hover %_link":"pointer-events:all;","%menuContainer %_item%_active %_link %_symbol,%menuContainer %_item%_hover %_link %_symbol":"fill:[symbolColorSelected];stroke:[symbolColorSelected];","%menuContainer %_item%_active %_link %_text-wrapper,%menuContainer %_item%_hover %_link %_text-wrapper":"visibility:visible;opacity:1;left:0;color:[symbolColorSelected];","%menuContainer%_text-align-left %_item %_link %_text-wrapper %_label,%menuContainer%_orientation-left%_text-align-center %_item %_link %_text-wrapper %_label":"padding-left:[textSpacing];","%menuContainer%_text-align-right %_item %_link %_text-wrapper %_label,%menuContainer%_orientation-right%_text-align-center %_item %_link %_text-wrapper %_label":"padding-right:[textSpacing];","%menuContainer %_item%_light %_link %_text-wrapper,%menuContainer %_active%_item%_light %_link %_text-wrapper":"color:#fff;","%menuContainer %_item%_light %_link %_symbol,%menuContainer %_active%_item%_light %_link %_symbol":"stroke:#fff;","%menuContainer %_active%_item%_light %_link %_symbol":"fill:#fff;","%menuContainer %_item%_dark %_link %_text-wrapper,%menuContainer %_active%_item%_dark %_link %_text-wrapper":"color:#000;","%menuContainer %_item%_dark %_link %_symbol,%menuContainer %_active%_item%_dark %_link %_symbol":"stroke:#000;","%menuContainer %_active%_item%_dark %_link %_symbol":"fill:#000;"}},"wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuSymbolWithTextSkin":{react:[["ul","menuContainer",[],{}]],exports:{hoverElementClass:"link"},params:{textFont:"FONT",symbolColor:"TEXT_COLOR",symbolColorSelected:"TEXT_COLOR",textSpacing:"PADDING_SIZE",symbolAndTextColor:"TEXT_COLOR",selectedColor:"TEXT_COLOR"},paramsDefaults:{textFont:"font_1",symbolColor:"color_15",symbolColorSelected:"color_2",textSpacing:"14px",symbolAndTextColor:["symbolColor"],selectedColor:["symbolColorSelected"]},css:{"%menuContainer":"display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;","%menuContainer %_item":"position:relative;","%menuContainer %_item %_link":"display:-webkit-box;display:-webkit-flex;display:flex;text-decoration:none;width:100%;cursor:default;-webkit-box-align:center;-webkit-align-items:center;align-items:center;","%menuContainer %_item %_link %_text-wrapper":"position:relative;white-space:nowrap;text-align:right;line-height:100%;[textFont]  color:[symbolColor];width:calc(100% - 15px);-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;","%menuContainer %_item %_link %_text-wrapper %_label":"cursor:pointer;","%menuContainer %_item %_link %_symbol":"cursor:pointer;-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;fill:transparent;stroke:[symbolColor];stroke-width:4px;","%menuContainer%_orientation-left %_item %_link":"-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;","%menuContainer%_orientation-right %_item %_link":"-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;","%menuContainer%_text-align-left %_item %_link %_text-wrapper":"text-align:left;","%menuContainer%_text-align-center %_item %_link %_text-wrapper":"text-align:center;","%menuContainer%_text-align-right %_item %_link %_text-wrapper":"text-align:right;","%menuContainer %_item%_active %_link %_symbol,%menuContainer %_item%_hover %_link %_symbol":"fill:[symbolColorSelected];stroke:[symbolColorSelected];","%menuContainer %_item%_active %_link %_text-wrapper,%menuContainer %_item%_hover %_link %_text-wrapper":"color:[symbolColorSelected];","%menuContainer%_text-align-left %_item %_link %_text-wrapper %_label,%menuContainer%_orientation-left%_text-align-center %_item %_link %_text-wrapper %_label":"padding-left:[textSpacing];","%menuContainer%_text-align-right %_item %_link %_text-wrapper %_label,%menuContainer%_orientation-right%_text-align-center %_item %_link %_text-wrapper %_label":"padding-right:[textSpacing];","%menuContainer %_item%_light %_link %_text-wrapper,%menuContainer %_active%_item%_light %_link %_text-wrapper":"color:#fff;","%menuContainer %_item%_light %_link %_symbol,%menuContainer %_active%_item%_light %_link %_symbol":"stroke:#fff;","%menuContainer %_active%_item%_light %_link %_symbol":"fill:#fff;","%menuContainer %_item%_dark %_link %_text-wrapper,%menuContainer %_active%_item%_dark %_link %_text-wrapper":"color:#000;","%menuContainer %_item%_dark %_link %_symbol,%menuContainer %_active%_item%_dark %_link %_symbol":"stroke:#000;","%menuContainer %_active%_item%_dark %_link %_symbol":"fill:#000;"}},"wysiwyg.common.components.verticalanchorsmenu.viewer.skins.VerticalAnchorsMenuTextSkin":{react:[["ul","menuContainer",[],{}]],exports:{hoverElementClass:"link"},params:{textFont:"FONT",symbolColor:"TEXT_COLOR",symbolColorSelected:"TEXT_COLOR",symbolAndTextColor:"TEXT_COLOR",selectedColor:"TEXT_COLOR"},paramsDefaults:{textFont:"font_1",symbolColor:"color_15",symbolColorSelected:"color_2",symbolAndTextColor:["symbolColor"],selectedColor:["symbolColorSelected"]},css:{"%menuContainer":"display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;","%menuContainer %_item":"position:relative;","%menuContainer %_item %_link":"display:-webkit-box;display:-webkit-flex;display:flex;text-decoration:none;width:100%;cursor:default;-webkit-box-align:center;-webkit-align-items:center;align-items:center;","%menuContainer %_item %_link %_text-wrapper":"position:relative;white-space:nowrap;text-align:right;line-height:100%;[textFont]  color:[symbolColor];width:100%;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;","%menuContainer %_item %_link %_text-wrapper %_label":"cursor:pointer;","%menuContainer %_item %_link %_symbol":"cursor:pointer;-webkit-box-flex:0;-webkit-flex:0 0 auto;flex:0 0 auto;-webkit-transition:all 0.2s ease-in-out;transition:all 0.2s ease-in-out;display:none;","%menuContainer%_orientation-left %_item %_link":"-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;","%menuContainer%_orientation-right %_item %_link":"-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-webkit-flex-direction:row-reverse;flex-direction:row-reverse;","%menuContainer%_text-align-left %_item %_link %_text-wrapper":"text-align:left;","%menuContainer%_text-align-center %_item %_link %_text-wrapper":"text-align:center;","%menuContainer%_text-align-right %_item %_link %_text-wrapper":"text-align:right;","%menuContainer %_item%_active %_link %_text-wrapper,%menuContainer %_item%_hover %_link %_text-wrapper":"color:[symbolColorSelected];","%menuContainer %_item%_light %_link %_text-wrapper,%menuContainer %_active%_item%_light %_link %_text-wrapper":"color:#fff;","%menuContainer %_item%_light %_link %_symbol,%menuContainer %_active%_item%_light %_link %_symbol":"stroke:#fff;","%menuContainer %_active%_item%_light %_link %_symbol":"fill:#fff;","%menuContainer %_item%_dark %_link %_text-wrapper,%menuContainer %_active%_item%_dark %_link %_text-wrapper":"color:#000;","%menuContainer %_item%_dark %_link %_symbol,%menuContainer %_active%_item%_dark %_link %_symbol":"stroke:#000;","%menuContainer %_active%_item%_dark %_link %_symbol":"fill:#000;"}}};return e}.apply(t,[]))||(e.exports=n)},566:function(e,t,i){var n,o;n=[i(2),i(10),i(0),i(4),i(20),i(1),i(1892)],void 0===(o=function(e,t,i,n,o,r,l){"use strict";var s={item:"item",line:"line",link:"link",symbol:"symbol",textWrapper:"text-wrapper",label:"label"};return o({displayName:"VerticalAnchorsMenuItem",propTypes:{anchorLink:n.shape({}).isRequired,anchorData:n.shape({name:n.string,id:n.string}).isRequired,browser:n.shape({ie:n.bool,version:n.string}),styleId:n.string.isRequired,disabled:n.bool,isTablet:n.bool.isRequired,primaryPageId:n.string.isRequired,backgroundBrightness:n.number,colorBrightness:n.number,hoveredOrSelectedColorBrightness:n.number,svgShapeName:n.string.isRequired,hoverElementClass:n.string,isActive:n.bool},getInitialState:function(){return this.elementClasses={},this.anchorLabelId="anchor-label_"+this.props.anchorData.id,{hovered:null}},updateElementClasses:function(){var e=this.props.styleId;i.forEach(s,function(t,i){this.elementClasses[i]=e+"_"+t}.bind(this))},handleOnMouseEnter:function(){this.props.isTablet||this.setState({hovered:!0})},handleOnMouseLeave:function(){this.props.isTablet||this.setState({hovered:!1})},disableClickOnTextWrapper:function(e){var i=t(e.target).find("[class="+this.elementClasses.textWrapper+"]");i&&"hidden"===i.css("visibility")&&(e.preventDefault(),e.stopPropagation())},getLabelProps:function(){return{id:this.anchorLabelId,className:this.elementClasses.label}},getTextWrapperProps:function(){return{className:this.elementClasses.textWrapper,key:"textWrapper"}},getSvgProps:function(){var e=l[this.props.svgShapeName],t=this.elementClasses.symbol,n=i.clone(e.svg);return i.assign(n,{key:"img-"+t+this.props.svgShapeName,className:t,dangerouslySetInnerHTML:{__html:e.content}}),n},getLinkProps:function(){var e={className:this.elementClasses.link,"aria-labelledby":this.anchorLabelId},t=this.props.browser.ie&&this.props.browser.version<=10;return this.props.disabled&&t&&(e.onClick=this.disableClickOnTextWrapper),i.assign(e,this.props.anchorLink),e},getItemProps:function(e){var t=this.props.styleId,n=this.elementClasses.item;this.props.isActive&&(n+=" "+t+"_active"),!this.props.isTablet&&this.state.hovered&&(n+=" "+t+"_hover");var o=this.state.hovered?this.props.hoveredOrSelectedColorBrightness:this.props.colorBrightness,l=this.props.backgroundBrightness,s=i.isFinite(o)&&i.isFinite(l),a=Math.abs(o-l)<r.siteConstants.BRIGHTNESS_DIFF_THRESHOLD;return s&&a&&(n+=l>=50?" "+t+"_dark":" "+t+"_light"),{key:e,className:n,onMouseLeave:this.handleOnMouseLeave}},addMouseEnterEventToSkinExportedClass:function(e){i.some(e,function(e){if(e.className&&!this.props.isTablet&&i.includes(e.className,this.props.hoverElementClass))return e.onMouseEnter=this.handleOnMouseEnter,!0}.bind(this))},render:function(){this.updateElementClasses();var t={itemProps:this.getItemProps(this.props.anchorData.id),linkProps:this.getLinkProps(),svgProps:this.getSvgProps(),textWrapperProps:this.getTextWrapperProps(),labelProps:this.getLabelProps()};return this.addMouseEnterEventToSkinExportedClass(t),e.utils.createReactElement("li",t.itemProps,e.utils.createReactElement("a",t.linkProps,[e.utils.createReactElement("svg",t.svgProps),e.utils.createReactElement("span",t.textWrapperProps,e.utils.createReactElement("span",t.labelProps,this.props.anchorData.name))]))}})}.apply(t,n))||(e.exports=o)}})});
//# sourceMappingURL=verticalAnchorsMenu.min.js.map