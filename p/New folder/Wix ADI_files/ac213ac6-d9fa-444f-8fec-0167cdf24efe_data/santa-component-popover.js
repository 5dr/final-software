!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t(require("lodash"),require("coreUtilsLib"),require("prop-types"),require("create-react-class"),require("react"),require("reactDOM"));else if("function"==typeof define&&define.amd)define(["lodash","coreUtilsLib","prop-types","create-react-class","react","reactDOM"],t);else{var o="object"==typeof exports?t(require("lodash"),require("coreUtilsLib"),require("prop-types"),require("create-react-class"),require("react"),require("reactDOM")):t(e.lodash,e.coreUtilsLib,e["prop-types"],e["create-react-class"],e.react,e.reactDOM);for(var n in o)("object"==typeof exports?exports:e)[n]=o[n]}}(this,function(e,t,o,n,i,r){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var i=t[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=113)}({0:function(t,o){t.exports=e},1:function(e,t,o){"use strict";var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=o(0),r=o(3);var s=r.shape({languageCode:r.string,name:r.string,iconUrl:r.string}),a=r.shape({bottom:r.oneOfType([r.string,r.number]),height:r.oneOfType([r.string,r.number]),left:r.oneOfType([r.string,r.number]),position:r.string,right:r.oneOfType([r.string,r.number]),top:r.oneOfType([r.string,r.number]),width:r.oneOfType([r.string,r.number])}),c=r.shape({px:r.number,vw:r.number}),u=r.objectOf(r.shape({id:r.string.isRequired,width:r.number.isRequired,height:r.number.isRequired,alignment:r.number.isRequired}));e.exports=function e(t,o){return i.reduce(t,function(t,r,s){var a,c,u=o?o+"."+s:s;switch(void 0===r?"undefined":n(r)){case"function":return(c=(a=r).bind(null)).isRequired=a.isRequired.bind(null),(r=c).id=u,r.isRequired.id=u,i.set(t,s,r);case"object":return i.set(t,s,e(r,u));default:throw new Error("wtf:"+s)}},{})}({isInSSR:r.bool,isMobileView:r.bool,isDebugMode:r.bool,isQAMode:r.bool,hideComponentsListForQa:r.string,getRootIdsWhichShouldBeRendered:r.func,isExperimentOpen:r.func,setCustomClickOccurred:r.func,reportBI:r.func,currentUrl:r.object,siteWidth:r.number,rootWidth:r.string,animations:r.object,isSiteBusy:r.func,isPreviewMode:r.bool,isCurrentPageLandingPage:r.bool,santaBase:r.string,RendererModel:{multilingual:{isEnabled:r.bool,languages:r.arrayOf(s),currentLanguage:s,setCurrentLanguageCode:r.func,originalLanguage:s},geo:r.string,siteMetaData:{contactInfo:r.object,quickActions:{configuration:r.object,socialLinks:r.string,colorScheme:r.string}},documentType:r.string,siteTitleSEO:r.string,userId:r.string,metaSiteId:r.string,useSandboxInHTMLComp:r.bool,siteId:r.string,clientSpecMap:r.object,languageCode:r.string,siteMediaToken:r.string,mediaAuthToken:r.string,premiumFeatures:r.array,currency:r.string,timeZone:r.string},currentUrlPageId:r.string,Modes:{getActiveModes:r.func,activateModeById:r.func,deactivateModeById:r.func,switchModesByIds:r.func,triggerFakeModeChange:r.func},SiteAspects:{windowScrollEvent:r.object,windowResizeEvent:r.object,actionsAspect:r.object,siteMembers:r.object,siteScrollingBlocker:r.object,svSessionChangeEvent:r.object,siteMetadataChangeAspect:r.object,windowFocusEvents:r.object,windowKeyboardEvent:r.object,windowTouchEvents:r.object,windowClickEventAspect:r.object,viewportChangeAspect:r.object,anchorChangeEvent:r.object,externalScriptLoader:r.object,mediaAspect:r.object,designDataChangeAspect:r.object,tpaComponentsDomAspect:r.object,tpaPageNavigationAspect:r.object,dynamicClientSpecMapAspect:r.object,fontsLoaderAspect:r.object},Media:{shouldRenderSrc:r.bool,imageUrlPreMeasureParams:r.object,registerPlayer:r.func,unregisterPlayer:r.func,updatePlayerState:r.func,globalImageQuality:r.object,mediaQuality:r.string,renderParts:r.object,playbackUrl:r.string,playbackFormat:r.string,playbackConfig:r.object,canVideoPlayInline:r.bool,playerPlaybackState:r.string,playbackState:r.string,fullscreen:r.bool,volume:r.number,muted:r.bool,controlsData:r.object,enableBackgroundVideo:r.bool,SiteBackground:{data:r.object,mediaQuality:r.string,renderParts:r.object,playbackUrl:r.string,playbackFormat:r.string,playbackConfig:r.object},Popup:{data:r.object,mediaQuality:r.string,renderParts:r.object,playbackUrl:r.string,playbackFormat:r.string,playbackConfig:r.object}},NativeComponentSantaTypes:{publicData:r.object,sectionUrls:r.arrayOf(r.object),widgetStyle:r.object,instance:r.string,resizeComponent:r.func,viewMode:r.string,formFactor:r.string,deviceType:r.string,appLoadBI:r.object,getComponent:r.func,loadFonts:r.func},ColumnsContainer:{childrenData:u},Fonts:{fontsMap:r.array},Popover:{open:r.func,close:r.func,rootContentStyle:r.object,onPopoverMouseIn:r.func,onPopoverMouseOut:r.func,onTargetMouseIn:r.func,onTargetMouseOut:r.func,targetBounds:r.object,targetPortal:r.object},DocumentClickEvent:{registerToDocumentClickEvent:r.func,unRegisterToDocumentClickEvent:r.func},Container:{defaultBackgroundStyle:r.object,defaultContentArea:r.object},Component:{isCollapsed:r.bool,isHorizontallyDocked:r.bool,id:r.string,refInParent:r.string,rootId:r.string,pageId:r.string,compActions:r.object,structure:r.shape({componentType:r.string.isRequired,dataQuery:r.oneOfType([r.string,r.object]),propertyQuery:r.oneOfType([r.string,r.object]),designQuery:r.oneOfType([r.string,r.object]),behaviorQuery:r.oneOfType([r.string,r.object]),components:r.array,skin:r.string,styleId:r.string,id:r.string,type:r.string}),styleParam:{textAlignment:r.string,colorScheme:r.string},childrenLayout:r.object,childrenStyle:r.object,fixedChildrenIDs:r.array,pinnedChildrenIDs:r.object,rootNavigationInfo:r.shape({pageId:r.string.isRequired,title:r.string,pageAdditionalData:r.string,pageItemId:r.string,pageItemAdditionalData:r.string,transition:r.string,anchorData:r.string}),currentUrlPageId:r.string,pageStub:r.bool,styleId:r.string,skin:r.string,getStyleData:r.func,compProp:r.object,compData:r.object,compDesign:r.object,renderFixedPosition:r.bool,layout:r.object,style:a,meshParams:r.object,rotationInDegrees:r.number,scale:r.number,currentUrlPageTitle:r.string,dimensions:r.shape({x:r.number.isRequired,y:r.number.isRequired,width:r.number.isRequired,height:r.number.isRequired}),compStaticBehaviors:r.array,theme:r.object,compBehaviors:r.array,trackBehaviorsToExecute:r.func,isHiddenOnStart:r.bool,shouldHideAnimatable:r.bool},Theme:{all:r.object,colors:r.array,colorsMap:r.array,THEME_DATA:r.object},Behaviors:{handleAction:r.func,registerBehaviors:r.func,setBehaviorsForActions:r.func,convertBehaviors:r.func,handleBehavior:r.func},Layout:{reLayoutIfPending:r.func,registerReLayoutPending:r.func,registerLayoutFunc:r.func,isMeshLayoutMechanism:r.bool},Utils:{logging:{performance:{now:r.func}},logger:r.shape({error:r.func.isRequired})},Device:{isTouchDevice:r.bool,isMobileDevice:r.bool,devicePixelRatio:r.number,isTabletDevice:r.func,isDesktopDevice:r.func},Mobile:{cannotHideIframeWithinRoundedCorners:r.bool,siteZoomRatio:r.number,invertedZoomRatio:r.number,orientationZoomFix:r.number,mobileZoom:r.number},RenderFlags:{componentPreviewState:r.string,componentViewMode:r.string,renderFixedPositionContainers:r.bool,shouldResetComponent:r.bool,isPlayingAllowed:r.bool,all:r.object,hideSiteBackground:r.bool,isComponentVisible:r.bool,isZoomAllowed:r.bool,isExternalNavigationAllowed:r.bool,renderFixedPositionBackgrounds:r.bool,isTinyMenuOpenAllowed:r.bool,isSocialInteractionAllowed:r.bool,shouldBlockGoogleMapInteraction:r.bool,shouldResetTinyMenuZIndex:r.bool,shouldResetSlideShowNextPrevButtonsPosition:r.bool,shouldResetSubscribeFormMinMaxWidth:r.bool,isBackToTopButtonAllowed:r.bool,isSlideShowGalleryClickAllowed:r.bool,shouldResetGalleryToOriginalState:r.bool,showControllers:r.bool,siteScale:r.number,isWixAdsAllowed:r.bool,allowShowingFixedComponents:r.bool,showHiddenComponents:r.bool,ignoreComponentCollapsedProperty:r.bool,ignoreComponentHiddenProperty:r.bool},RenderRealtimeConfig:{previewTooltipCallback:r.func,shouldHideTextComponent:r.bool,shouldHideComponent:r.bool,shouldShowComponentOnTop:r.bool,componentOpacity:r.number},RawSvg:{getRawSVG:r.string},Animations:{animationProperties:r.object},ServiceTopology:{scriptsDomainUrl:r.string,staticMediaUrl:r.string,staticVideoUrl:r.string,scriptsLocationMap:r.object,getMediaFullStaticUrl:r.func,adaptiveVideoDomain:r.string,serviceTopology:r.object,getStaticHTMLComponentUrl:r.string,staticHTMLComponentUrl:r.string},Browser:{browser:r.object},BrowserFlags:{cssFiltersSupported:r.bool,ios:r.func,forceOverflowScroll:r.func,animateTinyMenuIcon:r.func,highlightAnchorsInMenu:r.func,positionFixedShouldBeAbsoluteAtPageBottom:r.func,mixBlendModeSupported:r.func,webglCrossOriginSupported:r.func,clipParallaxWithWebkitClipPath:r.func,fixedBackgroundColorBalata:r.bool,fixedSiteBackground:r.bool},Images:{onImageUnmount:r.func},__DangerousSantaTypes:{getRenderedMasterPageHeight:r.func,getWindowSize:r.func,getSliderGalleryMeasures:r.func,getPaginatedGridGalleryMeasures:r.func,getCustomMeasureMap:r.func,getWindowInnerHeight:r.func},DAL:{setCompState:r.func,setCompData:r.func,setCompProps:r.func,removeCompState:r.func},PageGroup:{pagesToRender:r.array,createPageProps:r.func,stubifyPage:r.func},Repeater:{templateLayout:r.shape({repeaterWidth:r.number,templateWidth:r.number,docked:r.shape({left:c,top:c,right:c,bottom:c}),itemCount:r.number}),setDisplayedOnlyCompsTemplateId:r.func,clearDisplayedOnlyCompsTemplateId:r.func},SiteButton:{link:r.object,impliedLink:r.object},Tags:{tagList:r.array},WPhoto:{Link:r.object},WRichText:{Links:r.object},Link:{renderInfo:r.shape({primaryPageId:r.string,currentUrl:r.object,currentUrlPageId:r.string,urlFormat:r.string,mainPageId:r.string,externalBaseUrl:r.string,unicodeExternalBaseUrl:r.string,publicBaseUrl:r.string,isFeedbackEndpoint:r.bool,isSiteHistoryEndpoint:r.bool,isViewerMode:r.bool,isWixSite:r.bool,languageCode:r.string,isTemplate:r.bool,isUsingSlashUrlFormat:r.bool,isPremiumDomain:r.bool,serviceTopology:r.shape({staticDocsUrl:r.string,basePublicUrl:r.string,baseDomain:r.string}),rendererModel:r.shape({runningExperiments:r.object}),cookie:r.string,isAndroidMobileDevice:r.bool,routersConfigMap:r.object,allPageIds:r.array,pagesDataItemsMap:r.object,mapFromPageUriSeoToPageId:r.object,isPermalink:r.func,rootNavigationInfo:r.object})},VectorImage:{svgId:r.string,link:r.object,strokeWidth:r.number,svgString:r.string,svgStringFromCropData:r.string,svgInfo:r.object,legacySvgString:r.string,legacySvgInfo:r.object,svgType:r.string,overrideColorsAsCss:r.array,shapeStyle:r.object,preserveViewBox:r.bool,shouldScaleStroke:r.bool,svgPropsForMemberLoginIconItems:r.object,svgPropsMapForMediaControls:r.object},WixAds:{wixTopAdsHeight:r.number},WixUserSantaTypes:{userLanguage:r.string},JsonLd:{renderer:r.func},Audio:{isPlaying:r.bool,isSoundManagerOnResetup:r.bool,soundManagerReady:r.bool,createAudioObj:r.func,updatePlayingComp:r.func,updatePausingComp:r.func,onHTML5ErrorTryToReloadWithFlash:r.func},TPA:{data:r.shape({isModalOpen:r.bool,queryParams:r.object}),showModal:r.func,removeModal:r.func,showPopup:r.func,removePopup:r.func,removeAllPopups:r.func,deleteCompListeners:r.func,publish:r.func,subscribe:r.func,unsubscribe:r.func,handleTPAMessage:r.func,sendPostMessage:r.func,callHandler:r.func,registerTpaComp:r.func,seoHtmlContent:r.string},AspectComponent:{addComponent:r.func,deleteComponent:r.func},SocialShareHandler:{handleShareRequest:r.func,shortenURL:r.func},VerticalAnchorsMenu:{updateInformation:r.func,updateImageInfo:r.func,registerToMeanColor:r.func,unregisterToMeanColor:r.func,getOverlappingBackgroundBrightness:r.func,activeAnchor:r.object,getAnchorLinkItems:r.func,registerToActiveAnchor:r.func,unregisterToActiveAnchor:r.func},HtmlPostMessage:{registerComponent:r.func,unRegisterComponent:r.func},Pinterest:{data:r.object},MemberLogin:{language:r.string,memberName:r.string,memberAvatar:r.string,memberDefaultAvatar:r.string,isLoggedIn:r.bool,isConnectedToLoginData:r.bool,menuItems:r.array,iconItems:r.array},AnchorChange:{activeAnchorData:r.object,activeAnchorId:r.object},AppController:{isVisible:r.bool,applicativeUIData:r.shape({icon:r.string.isRequired})},Activity:{activityInfo:r.shape({currentUrl:r.object,hubSecurityToken:r.number,metaSiteId:r.string,svSession:r.string,baseUrl:r.string})},mobile:{cannotHideIframeWithinRoundedCorners:r.func,isZoomed:r.func,isZoomedIn:r.func,getInvertedZoomRatio:r.func,isAndroidOldBrowser:r.bool,isPortrait:r.func,mobileZoomByScreen:r.func,isLandscape:r.func,isAndroidMobileDevice:r.func},Navigation:{updateUrlIfNeeded:r.func,href:r.func,navigateToRenderedLink:r.func},CompDesign:{containerStyle:r.object},MediaPlayerDesign:{containerStyle:r.object},Menu:{siteMenuWithRenderForTinyMenu:r.array,siteMenuWithRender:r.array,menuItems:r.array},urlFormat:r.string,getMainPageUrl:r.func,getCurrentUrl:r.func,biData:r.object,biVisitorId:r.string,isViewerMode:r.bool,globalImageQuality:r.object,getScreenWidth:r.func,getScreenHeight:r.func,screenSize:r.object,getScrollBarWidth:r.func,forceBackground:r.func,disableForcedBackground:r.func,currentPopupId:r.string,isTemplate:r.bool,isPremiumUser:r.bool,popupPage:{close:r.func},popup:{open:r.func},NonPageItemZoom:{zoom:r.func,unzoom:r.func,currentItem:r.object},scrollToAnchor:r.func,navigateToPage:r.func,passClickEvent:r.func,RequestModel:{cookie:r.string,language:r.string},PublicModel:{externalBaseUrl:r.string},isZoomOpened:r.bool,isFacebookSite:r.bool,Location:{origin:r.string},primaryPageId:r.string,mainPageId:r.string,reportBeatEvent:r.func,getExistingRootNavigationInfo:r.func,pageUrl:r.string,pageUrlWithHash:r.string,getClientSpecMapEntry:r.func,enterFullScreenMode:r.func,exitFullScreenMode:r.func,enterMediaZoomMode:r.func,exitMediaZoomMode:r.func,ContactFormSantaTypes:{orderedFields:r.array,errorMessage:r.string,validationErrorMessage:r.string,compMasterPageData:r.bool,isDynamicContactForm:r.bool,siteApiForPromoteAnalytics:r.object},SiteMembersSantaTypes:{smSettings:r.object,isSiteMembersDialogsOpenAllowed:r.bool,siteMembersUrl:r.string,forgotPasswordToken:r.string,dialogToDisplay:r.string,isSiteMembersDialogOpen:r.bool,isLoggedIn:r.bool,logout:r.func,showAuthenticationDialog:r.func,getMemberDetails:r.func,memberDetails:r.string,memberDetailsInPreview:r.string,reportSiteMembersBi:r.func,registerToMemberDetailsChange:r.func,unRegisterMemberDetailsChange:r.func},StoreSantaTypes:{loadBatch:r.func},QuickActions:{dynamicActions:r.array,structuredAction:r.object},viewerSessionId:r.string,isSinglePostPage:r.bool,rootPageTitle:r.object,getUniquePageId:r.func,Page:{markVisitedPage:r.func,isPopupPage:r.bool,popupAlignment:r.object},viewportStates:r.bool,isClientAfterSSR:r.bool,isFirstRenderAfterSSR:r.bool,isTpaRenderedInSsr:r.bool,isGoogleBot:r.bool,compFactoryRuntimeState:r.object,resetCustomClickOccurred:r.func,shouldEnableMobileAnimations:r.bool,LoginButton:{language:r.string,actionTitle:r.string,memberTitle:r.string,isReadyToShow:r.bool},Social:{CurrentPageSocialUrl:r.string,MainPageSocialUrl:r.string},VK:{size:r.shape({width:r.number})},SlideShow:{slideStyle:r.object,canAutoPlay:r.bool,slidesIndexes:r.array,startAutoPlayInViewport:r.func,stopAutoPlayInViewport:r.func},pageMinHeightDefault:r.number})},10:function(e,t,o){"use strict";var n=o(0),i=o(8),r=o(3),s=o(2),a=o(11),c=o(12),u=o(1),l=o(15),p={click:"onClick",dblClick:"onDoubleClick",mouseenter:"onMouseEnter",mouseleave:"onMouseLeave"},d=["wysiwyg.viewer.components.SiteBackground"];var g={mixins:[a,s.renderDoneMixin,c],propTypes:{id:u.Component.id.isRequired,className:r.string,structure:u.Component.structure,rotationInDegrees:u.Component.rotationInDegrees,siteWidth:u.siteWidth,style:u.Component.style,registerLayoutFunc:u.Layout.registerLayoutFunc,isCollapsed:u.Component.isCollapsed,compActions:u.Component.compActions,compBehaviors:u.Component.compBehaviors,isHorizontallyDocked:u.Component.isHorizontallyDocked,compProp:u.Component.compProp,registerReLayoutPending:u.Layout.registerReLayoutPending,reLayoutIfPending:u.Layout.reLayoutIfPending,isExperimentOpen:u.isExperimentOpen,animationProperties:u.Animations.animationProperties,isMobileView:u.isMobileView,shouldHideAnimatable:u.Component.shouldHideAnimatable,isMeshLayoutMechanism:u.Layout.isMeshLayoutMechanism},registerReLayout:function(){this.props.registerReLayoutPending&&this.props.registerReLayoutPending(this.props.id)},componentDidUpdate:function(){this.props.reLayoutIfPending&&this.callAfterRenderDone(this.props.reLayoutIfPending)},componentDidMount:function(){n.isFunction(this.measureComponent)&&this.props.registerLayoutFunc(i.findDOMNode(this),this.measureComponent)},shouldComponentUpdate:function(e,t){var o=!this.shouldComponentUpdateAnimatable||this.shouldComponentUpdateAnimatable(e,t),i=e.structure&&n.includes(d,e.structure.componentType),r=!n.isFunction(this.componentSpecificShouldUpdate)||this.componentSpecificShouldUpdate(e,t);return o&&r||i},updateRootRefDataStyles:function(e){if(!n.get(this.props,"compProp.isHidden")&&!this.props.isCollapsed){var t=function(e){var t=n.pick(e,n.values(p));if(n.get(this.props.compProp,"isDisabled"))return t;var o=n(this.props.compActions).pick(n.keys(p)).mapKeys(function(e,t){return p[t]}).mapValues(function(e){return this.handleAction.bind(this,e.name)}.bind(this)).value();return o.onClick&&this.props.setCustomClickOccurred&&(o.onClickCapture=function(e){n.includes(e.target.id,this.props.id)&&this.props.setCustomClickOccurred()}.bind(this)),n.assignWith(o,t,function(e,t){var o=this;return function(){e&&e.apply(o,arguments),t&&t.apply(o,arguments)}}.bind(this))}.call(this,e);n.assign(e,t)}(n.get(this.props,"compProp.isHidden")||this.props.shouldHideAnimatable)&&(e["data-hidden"]=!0),this.props.isCollapsed&&(e["data-collapsed"]=!0),e.style=function(e){var t=!(!n.invoke(this,"isScreenWidth")&&!this.props.isHorizontallyDocked),o=n.isFunction(this.ignoreDimensions)&&this.ignoreDimensions(),i=e.style,r=t&&l(this.props.isMobileView,this.props.siteWidth,n.get(this.props.structure,["layout","docked"])),s=n.omit(this.props.style,o&&["width","height"]),a=n.defaults({},i,r,s);return e["data-hidden"]&&(a.visibility="hidden"),e["data-collapsed"]&&n.assign(a,{visibility:"hidden",position:this.props.isMeshLayoutMechanism?"relative":"absolute",overflow:"hidden",width:0,height:0,top:0,left:0,marginTop:0,marginBottom:0}),!n.get(this.props.compProp,"isDisabled")&&n.has(this.props.compActions,"click")&&(a.cursor="pointer"),a}.call(this,e),e.className=function(e){return n.compact([e,this.props.className]).join(" ")}.call(this,e.className);var o=this.props.rotationInDegrees;o&&(e["data-angle"]=o)}};e.exports={baseComp:g,_testActionsMap:p}},11:function(e,t,o){"use strict";var n=o(8),i=o(0);e.exports={isAnimatable:!0,shouldChildrenUpdate:!0,componentWillMount:function(){this._animatableMixin={animationsCounter:0,deferredStates:[]},this._onAnimationEnded=i.noop},componentDidMount:function(){this._animatableMixin.setStateOrig=this.setState},componentWillUnmount:function(){this._animatableMixin.updateOnAnimationEnded=!1},animationStarted:function(){1==++this._animatableMixin.animationsCounter&&(this.setState=this.setStateDeferred,this.isCurrentlyAnimating=!0),this.shouldChildrenUpdate||i(this.refs).filter("isAnimatable").invokeMap("animationStarted").value()},animationEnded:function(e){e=!1!==e,this.shouldChildrenUpdate||i(this.refs).filter("isAnimatable").invokeMap("animationEnded",!1).value();var t,o,r=this._animatableMixin;if(r.animationsCounter&&0==--r.animationsCounter&&(this.setState=r.setStateOrig,this.isCurrentlyAnimating=!1,i.invoke(this,"_onAnimationEnded")),e)if(r.deferredStates.length){for(var s=r.deferredStates,a=0;a<s.length;a+=2)r.setStateOrig.call(this,s[a],s[a+1]);s.length=0}else r.updateOnAnimationEnded&&this.forceUpdate();r.updateOnAnimationEnded=!1,!0===this.forceRedrawOnAnimationEnded&&(t=n.findDOMNode(this),o=t.style.display,t.style.display="none",t.offsetHeight,t.style.display=o)},setStateDeferred:function(e,t){var o=this._animatableMixin.deferredStates,n=o.length;0===n||o[n-1]||t?(o.push(e),o.push(t)):(i.assign(o[n-2],e),o[n-1]=t)},shouldComponentUpdateAnimatable:function(){var e=0===this._animatableMixin.animationsCounter;return e||(this._animatableMixin.updateOnAnimationEnded=!0),e},registerOnAnimationEnd:function(e){this._onAnimationEnded=e},unregisterOnAnimationEnd:function(){this._onAnimationEnded=i.noop}}},113:function(e,t,o){"use strict";var n=o(114),i=o(117);e.exports={Component:n,Aspect:i}},114:function(e,t,o){"use strict";var n=o(0),i=o(7),r=o(8),s=o(4),a=o(3),c=o(31),u=o(10),l=o(1),p=o(115),d=o(116),g=s({displayName:"Popover",mixins:[u.baseComp],propTypes:{id:l.Component.id.isRequired,compProp:l.Component.compProp.isRequired,style:l.Component.style.isRequired,rootContentStyle:l.Popover.rootContentStyle,open:l.Popover.open.isRequired,close:l.Popover.close.isRequired,onPopoverMouseIn:l.Popover.onPopoverMouseIn.isRequired,onPopoverMouseOut:l.Popover.onPopoverMouseOut.isRequired,onTargetMouseIn:l.Popover.onTargetMouseIn.isRequired,onTargetMouseOut:l.Popover.onTargetMouseOut.isRequired,targetBounds:l.Popover.targetBounds,targetPortal:l.Popover.targetPortal,isQAMode:l.isQAMode,children:a.node},hide:function(e){this.props.close(),n.isFunction(e)&&e()},show:function(e,t){this.props.open(e,{closeMethod:this.props.compProp.closeMethod}),n.isFunction(t)&&t()},onDocumentClick:function(e){var t=this.contentWrapperRef.current.getBoundingClientRect();d.isInBounds(t,e.clientX,e.clientY)||this.props.close()},componentWillMount:function(){this.contentWrapperRef=i.createRef()},render:function(){var e=this.props,t=e.id,o=e.compProp,s=e.structure,a=e.style,c=e.targetBounds,u=e.targetPortal,l=e.children,d=e.rootContentStyle;l&&n.assign(a,{pointerEvents:"none"});var g={id:t,style:a};if(this.props.isQAMode&&n.assign(g,{"data-comp":s.componentType}),this.props.targetBounds){var f=function(e,t,o,r){return i.createElement("div",{style:n.defaults({position:"absolute"},e),onMouseEnter:o,onMouseLeave:r},t)}(c,function(e,t,o,r,s,a,c){var u={ref:r,style:n.assign({position:"absolute",width:"auto",height:"auto"},p(s.position,s.alignment,s.horizontalOffset,s.verticalOffset)),onMouseEnter:function(e){e.stopPropagation(),a()},onMouseLeave:function(e){e.stopPropagation(),c()},"data-aid":e};return i.createElement("div",u,i.cloneElement(t,{style:o}))}(t,l[0],d,this.contentWrapperRef,o,this.props.onPopoverMouseIn,this.props.onPopoverMouseOut),this.props.onTargetMouseIn,this.props.onTargetMouseOut),m=r.createPortal(f,u);return i.createElement("div",g,m)}return i.createElement("div",g,l)}});e.exports=c({hidePopover:{methodName:"hide"},showPopover:{methodName:"show",params:["targetId"]}})(g)},115:function(e,t,o){"use strict";e.exports=function(e,t,o,n){var i={};switch(e){case"left":i.right="calc(100% - "+o+"px)";break;case"right":i.left="calc(100% + "+o+"px)";break;case"top":i.bottom="calc(100% + "+n+"px)";break;case"bottom":i.top="calc(100% - "+n+"px)"}switch(e){case"left":case"right":switch(t){case"start":i.top=-1*n;break;case"center":i.top="calc(50% - "+n+"px)",i.transform="translateY(-50%)";break;case"end":i.bottom=-1*n}break;case"top":case"bottom":switch(t){case"start":i.left=o;break;case"center":i.left="calc(50% + "+o+"px)",i.transform="translateX(-50%)";break;case"end":i.right=o}}return i}},116:function(e,t,o){"use strict";e.exports={isInBounds:function(e,t,o){return t>e.x&&t<e.x+e.width&&o>e.y&&o<e.y+e.height}}},117:function(e,t,o){"use strict";var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}();var i=o(0),r=new WeakMap,s=o(8),a=o(3),c=o(118).CLOSE_METHODS,u={closeMethod:c.OUTER_CLICK},l=function(e,t){var o=e.options[t].closeMethod;e.aspectProps.transaction(function(){e.aspectProps.deactivateMode(t),e.storageAPI.set(t,null),o!==c.MANUAL&&e.aspectProps.unRegisterToDocumentClickEvent(t)}),function(e,t){delete e.closeRequests[t],delete e.options[t]}(e,t)},p=function(e){var t=i.keys(e.storageAPI.getAll());e.aspectProps.transaction(function(){i.forEach(t,function(t){return l(e,t)})})},d=function(e,t){var o=e.closeRequests[t];o&&(clearTimeout(o),delete e.closeRequests[t])},g=function(e,t){e.options[t].closeMethod===c.MOUSE_OUT&&(e.closeRequests[t]=setTimeout(l.bind(null,e,t),500))},f=function(){function e(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new Map;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r.set(this,{storageAPI:o,aspectProps:t,closeRequests:{},options:{}})}return n(e,[{key:"onHostPropsChanged",value:function(e){var t=r.get(this);t.aspectProps.isPopoverAllowed&&!e.isPopoverAllowed&&p(t),e.isPopoverAllowed&&t.aspectProps.isMobileView!==e.isMobileView&&p(t),t.aspectProps=e}},{key:"openPopover",value:function(e,t,o){var n=this.getTargetPortal();if(n){var a=r.get(this);o=i.defaults(o,u),a.aspectProps.transaction(function(){a.options[e]=o,a.aspectProps.activateMode(e),a.storageAPI.set(e,function(e,t,o){var n=e.aspectProps.getComponentByPageAndCompId(t),i=s.findDOMNode(n).getBoundingClientRect(),r=o.getBoundingClientRect();return{top:i.y+e.aspectProps.getScrollPosition().y,left:i.x-r.x,width:i.width,height:i.height}}(a,t,n)),o.closeMethod!==c.MANUAL&&a.aspectProps.registerToDocumentClickEvent(e)})}}},{key:"onPopoverMouseIn",value:function(e){var t=r.get(this);d(t,e)}},{key:"onPopoverMouseOut",value:function(e){var t=r.get(this);g(t,e)}},{key:"onTargetMouseOut",value:function(e){var t=r.get(this);g(t,e)}},{key:"onTargetMouseIn",value:function(e){var t=r.get(this);d(t,e)}},{key:"closePopover",value:function(e){var t=r.get(this);l(t,e)}},{key:"getTargetBounds",value:function(e){return r.get(this).storageAPI.get(e)}},{key:"getTargetPortal",value:function(){return r.get(this).aspectProps.getTargetPortal()}}]),e}();f.aspectName="popoverAspect",f.hostPropTypes={deactivateMode:a.func.isRequired,activateMode:a.func.isRequired,getComponentByPageAndCompId:a.func.isRequired,getScrollPosition:a.func.isRequired,transaction:a.func.isRequired,getTargetPortal:a.func.isRequired,registerToDocumentClickEvent:a.func.isRequired,unRegisterToDocumentClickEvent:a.func.isRequired,isPopoverAllowed:a.bool.isRequired,isMobileView:a.bool.isRequired},e.exports=f},118:function(e,t,o){"use strict";e.exports={CLOSE_METHODS:{MOUSE_OUT:"mouseOut",OUTER_CLICK:"outerClick",MANUAL:"manual"}}},12:function(e,t,o){"use strict";var n=o(0),i=o(1);e.exports={propTypes:{id:i.Component.id,handleAction:i.Behaviors.handleAction,compActions:i.Component.compActions,now:i.Utils.logging.performance.now},handleAction:function(e,t){var o=n.get(this.props.compActions,e);o&&this.props.handleAction(o,function(e){var t={id:n.get(e,"id")||this.props.id,timeStamp:this.props.now()};return e?(t.timeStamp=e.timeStamp||t.timeStamp,n.defaults(t,e)):t}.call(this,t))}}},15:function(e,t,o){"use strict";var n=o(0),i=function(e,t){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"px";return n.get(e,[t,o],0)},r=function(e){return n.hasIn(e,["left"])&&n.hasIn(e,["right"])},s=function(e){return i(e,"left","px")>0||i(e,"right","px")>0},a=function(e){return i(e,"left","vw")>0||i(e,"right","vw")>0},c=function(e){return r(e)&&function(e){return s(e)?i(e,"left")+"px":a(e)?i(e,"left","vw")+"vw":null}(e)||"0"},u=function(e){if(!r(e))return"100%";var t=function(e){return s(e)?i(e,"left")+i(e,"right")+"px":a(e)?i(e,"left","vw")+i(e,"right","vw")+"vw":null}(e);return t?"calc(100% - "+t+")":"100%"};e.exports=function(e,t,o){return e?{left:"0",marginLeft:"0",width:t+"px"}:{left:"0",marginLeft:c(o),width:u(o),minWidth:o?"initial":t+"px"}}},2:function(e,o){e.exports=t},3:function(e,t){e.exports=o},31:function(e,t,o){"use strict";var n=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),i=function e(t,o,n){null===t&&(t=Function.prototype);var i=Object.getOwnPropertyDescriptor(t,o);if(void 0===i){var r=Object.getPrototypeOf(t);return null===r?void 0:e(r,o,n)}if("value"in i)return i.value;var s=i.get;return void 0!==s?s.call(n):void 0};var r=o(0),s=o(1),a=function(e,t,o){r.forEach(t,function(t){var n=o[t.name];if(n&&r.isFunction(e[n.methodName])){var i=function(e,t){var o=r.map(e.params,function(e){return r.isString(e)?t.params[e]:r.get(t.params,e.name,e.defaultValue)});return t.callback?o.concat(t.callback):o}(n,t);e[n.methodName].apply(e,i)}})};e.exports=function(e){return function(t){var o=function(o){function s(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(s.__proto__||Object.getPrototypeOf(s)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(s,t),n(s,[{key:"componentWillMount",value:function(){var t=this;r.isFunction(i(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"componentWillMount",this))&&i(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"componentWillMount",this).call(this),this.dispose=this.props.trackBehaviorsToExecute(function(o){return a(t,o,e)})}},{key:"componentWillUnmount",value:function(){r.isFunction(i(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"componentWillUnmount",this))&&i(s.prototype.__proto__||Object.getPrototypeOf(s.prototype),"componentWillUnmount",this).call(this),this.dispose()}}]),s}();return o.displayName="withBehaviors("+t.displayName+")",o.propTypes=r.assign({trackBehaviorsToExecute:s.Component.trackBehaviorsToExecute.isRequired},t.propTypes),o}}},4:function(e,t){e.exports=n},7:function(e,t){e.exports=i},8:function(e,t){e.exports=r}})});
//# sourceMappingURL=santa-component-popover.prod.js.map