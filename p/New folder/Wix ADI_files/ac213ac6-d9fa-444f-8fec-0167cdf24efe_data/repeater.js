define("repeater",["lodash","santa-components","componentsCore","react"],function(e,t,i,n){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=1612)}({0:function(t,i){t.exports=e},1612:function(e,t,i){var n,r;n=[i(1613),i(3)],void 0===(r=function(e,t){"use strict";t.compRegistrar.register("wysiwyg.viewer.components.Repeater",e)}.apply(t,n))||(e.exports=r)},1613:function(e,t,i){var n,r;n=[i(3),i(0),i(21),i(2)],void 0===(r=function(e,t,i,n){"use strict";var r=n.mixins.scrollMixin;function o(e){var i=e.repeaterWidth,n=e.templateWidth,r=e.horizontalGap,o=e.itemCount,s=Math.floor((i+r||0)/(n+r||0));if(s>=o)return null;var a=s-o%s;return t.isNumber(r)?a*(r+n)+"px":"calc("+a+" * "+n+"px +\n            (100% - "+s*n+"px) * "+(a-1)+" / "+(s-1)+")"}function s(e){for(var i=e.selector,n=e.itemCount,r=e.templateWidth,s=e.minWidth,a=e.maxWidth,p=e.horizontalGap,l=e.verticalGap,u=e.dockHorizontalMargin,c=r+(p||0),d=[],m=s;m<a+c;m+=c){var f=o({repeaterWidth:m-u,templateWidth:r,horizontalGap:p,itemCount:n});d.push({w0:m>s?m:null,w1:m<a?m+c:null,css:i+":after {\n                    width: "+(f||0)+";\n                    display: "+(f?"block":"none")+";\n                }"})}return t(d).map(t.size(d)>1?function(e){var i=e.css,n=e.w0,r=e.w1;return"@media screen\n            "+(t.isNumber(n)?"and (min-device-width: "+n+"px)":"")+"\n            "+(t.isNumber(r)?"and (max-device-width: "+r+"px)":"")+" {"+i+"}"}:"css").concat([i+" > li {\n                margin: "+l/2+"px "+(p||0)/2+"px;\n            }\n\n            "+i+":after {\n                content: ' ';\n                visibility: hidden;\n                height: 0;\n                margin: 0;\n            }"]).join("\n")}function a(e){var i=!!t.get(e.structure,"layout.docked");return e.isInSSR&&!e.isMobileView&&i&&!e.isMeshLayoutMechanism}function p(e){return a(e)?null:i.Children.map(e.children,function(e){return n.utils.createReactElement("li",{key:e.props.id},e)})}return{displayName:"Repeater",mixins:[e.mixins.skinBasedComp,r],statics:{compSpecificIsDomOnlyOverride:function(){return!1}},propTypes:{id:n.santaTypesDefinitions.Component.id.isRequired,rootId:n.santaTypesDefinitions.Component.rootId.isRequired,compData:n.santaTypesDefinitions.Component.compData.isRequired,compProp:n.santaTypesDefinitions.Component.compProp.isRequired,templateLayout:n.santaTypesDefinitions.Repeater.templateLayout,isMeshLayoutMechanism:n.santaTypesDefinitions.Layout.isMeshLayoutMechanism,setDisplayedOnlyCompsTemplateId:n.santaTypesDefinitions.Repeater.setDisplayedOnlyCompsTemplateId.isRequired,isMobileView:n.santaTypesDefinitions.isMobileView,isMobileDevice:n.santaTypesDefinitions.Device.isMobileDevice,isTabletDevice:n.santaTypesDefinitions.Device.isTabletDevice,siteWidth:n.santaTypesDefinitions.siteWidth.isRequired,clearDisplayedOnlyCompsTemplateId:n.santaTypesDefinitions.Repeater.clearDisplayedOnlyCompsTemplateId.isRequired,isInSSR:n.santaTypesDefinitions.isInSSR.isRequired,structure:n.santaTypesDefinitions.Component.structure.isRequired},componentWillMount:function(){this.props.setDisplayedOnlyCompsTemplateId(this.props.id,this.props.compData.items[0])},componentWillUnmount:function(){this.props.clearDisplayedOnlyCompsTemplateId(this.props.id)},getMeshSkinProperties:function(){var e=this.props.compProp,i=e.gap,r=e.alignment,o=this.props,a=o.isMobileView,l=o.isMobileDevice,u=o.isTabletDevice,c=o.siteWidth,d=this.props.templateLayout,m=d.repeaterWidth,f=d.docked,y=d.templateWidth,h=d.itemCount,v=f?Math.min(m,c):m,x=!f||u()||l||a?v:1920,D="justify"===r?null:i.horizontal,b=t.get(f,"left.px",0)+t.get(f,"right.px",0),g=i.vertical,M={justify:"space-between",right:"flex-end",left:"flex-start",center:"center"}[r];return{"":{style:{height:"auto"},addChildrenBefore:[n.utils.createReactElement("style",{key:"repeater-placeholder-style",dangerouslySetInnerHTML:{__html:s({selector:"#"+this.props.id+"inlineContent",templateWidth:y,itemCount:h,horizontalGap:D,verticalGap:g,minWidth:v,maxWidth:x,dockHorizontalMargin:b})}})]},inlineContent:{parentConst:n.utils.createReactElement.bind(null,"ul"),style:{display:"flex",justifyContent:M,position:"relative",flexWrap:"wrap",margin:-g/2+"px "+-(D||0)/2+"px "+-g/2+"px "+-(D||0)/2+"px"},children:p(this.props)}}},getSkinProperties:function(){if(this.props.isMeshLayoutMechanism)return this.getMeshSkinProperties();var e={inlineContent:{parentConst:n.utils.createReactElement.bind(null,"ul"),children:p(this.props)}};return a(this.props)&&(e[""]=e[""]||{},e[""]["data-ssrignorediverge"]=!0),e}}}.apply(t,n))||(e.exports=r)},2:function(e,i){e.exports=t},21:function(e,t){e.exports=n},3:function(e,t){e.exports=i}})});
//# sourceMappingURL=repeater.min.js.map