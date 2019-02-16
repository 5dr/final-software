!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.imageClientApi=t():e.imageClientApi=t()}(this,function(){return function(e){var t={};function i(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=9)}([function(e,t,i){"use strict";var a={JPG:"jpg",JPEG:"jpeg",PNG:"png",WEBP:"webp",WIX_ICO_MP:"wix_ico_mp",WIX_MP:"wix_mp",GIF:"gif",SVG:"svg",UNRECOGNIZED:"unrecognized"},r=[a.JPG,a.JPEG,a.PNG,a.GIF,a.WEBP];e.exports={alignTypes:{CENTER:"center",TOP:"top",TOP_LEFT:"top_left",TOP_RIGHT:"top_right",BOTTOM:"bottom",BOTTOM_LEFT:"bottom_left",BOTTOM_RIGHT:"bottom_right",LEFT:"left",RIGHT:"right"},alignTypesMap:{center:"c",top:"t",top_left:"tl",top_right:"tr",bottom:"b",bottom_left:"bl",bottom_right:"br",left:"l",right:"r"},transformTypes:{FIT:"fit",FILL:"fill",FILL_FOCAL:"fill_focal",CROP:"crop",LEGACY_CROP:"legacy_crop",LEGACY_FILL:"legacy_fill"},fittingTypes:{SCALE_TO_FILL:"fill",SCALE_TO_FIT:"fit",STRETCH:"stretch",ORIGINAL_SIZE:"original_size",TILE:"tile",TILE_HORIZONTAL:"tile_horizontal",TILE_VERTICAL:"tile_vertical",FIT_AND_TILE:"fit_and_tile",LEGACY_STRIP_TILE:"legacy_strip_tile",LEGACY_STRIP_TILE_HORIZONTAL:"legacy_strip_tile_horizontal",LEGACY_STRIP_TILE_VERTICAL:"legacy_strip_tile_vertical",LEGACY_STRIP_SCALE_TO_FILL:"legacy_strip_fill",LEGACY_STRIP_SCALE_TO_FIT:"legacy_strip_fit",LEGACY_STRIP_FIT_AND_TILE:"legacy_strip_fit_and_tile",LEGACY_STRIP_ORIGINAL_SIZE:"legacy_strip_original_size",LEGACY_ORIGINAL_SIZE:"actual_size",LEGACY_FIT_WIDTH:"fitWidth",LEGACY_FIT_HEIGHT:"fitHeight",LEGACY_FULL:"full",LEGACY_BG_FIT_AND_TILE:"legacy_tile",LEGACY_BG_FIT_AND_TILE_HORIZONTAL:"legacy_tile_horizontal",LEGACY_BG_FIT_AND_TILE_VERTICAL:"legacy_tile_vertical",LEGACY_BG_NORMAL:"legacy_normal"},htmlTag:{BG:"bg",IMG:"img",SVG:"svg"},upscaleMethods:{AUTO:"auto",CLASSIC:"classic",SUPER:"super"},upscaleMethodsValues:{classic:1,super:2},defaultUSM:{radius:.66,amount:1,threshold:.01},emptyData:{uri:"",css:{img:{},container:{}},attr:{img:{},container:{}}},imageQuality:{HIGH:"HIGH",MEDIUM:"MEDIUM",LOW:"LOW",TINY:"TINY"},imageFilters:{CONTRAST:"contrast",BRIGHTNESS:"brightness",SATURATION:"saturation",HUE:"hue",BLUR:"blur"},imageScaleDefaults:{HIGH:{size:196e4,quality:90,maxUpscale:1},MEDIUM:{size:36e4,quality:85,maxUpscale:1},LOW:{size:16e4,quality:80,maxUpscale:1.2},TINY:{size:0,quality:80,maxUpscale:1.4}},fileType:a,supportedExtensions:r,webp:{LOSSLESS:"lossless",LOSSY:"lossy",ALPHA:"alpha",ANIMATION:"animation"},SAFE_TRANSFORMED_AREA:25e6,SUPER_UPSCALE_MODELS:[1.5,2,4],MAX_DEVICE_PIXEL_RATIO:2,API_VERSION:"v1"}},function(e,t,i){"use strict";var a=i(2),r=i(0),n=i(4);function s(e){var t=new window.Image;t.onload=function(){var i=n.getFeature("isWEBP");i[e]=t.width>0&&t.height>0,n.setFeature("isWEBP",i)},t.src="data:image/webp;base64,"+{lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"}[e]}function o(e){var t=[r.fileType.PNG,r.fileType.JPEG,r.fileType.JPG,r.fileType.WIX_ICO_MP,r.fileType.WIX_MP];return a.includes(t,g(e))}function c(e){return a.includes(["webp"],g(e))}function h(e){return/(^https?)|(^data)|(^\/\/)/.test(e)}function g(e){return(/[.]([^.]+)$/.exec(e)&&/[.]([^.]+)$/.exec(e)[1]||"").toLowerCase()}function u(e,t,i,a,n){return n===r.transformTypes.FILL?function(e,t,i,a){return Math.max(i/e,a/t)}(e,t,i,a):n===r.transformTypes.FIT?function(e,t,i,a){return Math.min(i/e,a/t)}(e,t,i,a):1}function l(e,t){var i=m(e,t);return{optimizedScaleFactor:r.imageScaleDefaults[i].maxUpscale,upscaleMethodValue:r.upscaleMethodsValues.classic,forceUSM:!1}}function p(e,t){var i=m(e,t);return{optimizedScaleFactor:r.imageScaleDefaults[i].maxUpscale,upscaleMethodValue:r.upscaleMethodsValues.classic,forceUSM:!1}}function T(e,t,i){return{optimizedScaleFactor:a.last(r.SUPER_UPSCALE_MODELS),upscaleMethodValue:r.upscaleMethodsValues.super,forceUSM:!(r.SUPER_UPSCALE_MODELS.includes(i)||i>a.last(r.SUPER_UPSCALE_MODELS))}}function m(e,t){var i=e*t;return i>r.imageScaleDefaults[r.imageQuality.HIGH].size?r.imageQuality.HIGH:i>r.imageScaleDefaults[r.imageQuality.MEDIUM].size?r.imageQuality.MEDIUM:i>r.imageScaleDefaults[r.imageQuality.LOW].size?r.imageQuality.LOW:r.imageQuality.TINY}function f(e,t){var i=Math.pow(10,t||0);return(e*i/i).toFixed(parseInt(t,10))}e.exports={populateGlobalFeatureSupport:function(){"undefined"!=typeof window&&(s(r.webp.LOSSY),s(r.webp.LOSSLESS),s(r.webp.ALPHA),s(r.webp.ANIMATION),n.setFeature("isObjectFitBrowser","objectFit"in window.document.documentElement.style))},isWEBPBrowserSupport:function(e){var t=n.getFeature("isWEBP"),i=e===r.fileType.JPG&&t[r.webp.LOSSY],a=e===r.fileType.PNG&&t[r.webp.LOSSLESS],s=e===r.fileType.PNG&&t[r.webp.ALPHA];return i||a&&s},isObjectFitBrowserSupport:function(){return n.getFeature("isObjectFitBrowser")},isImageTransformApplicable:function(e){return o(e)&&!h(e)},isValidRequest:function(e,t,i){return i&&t&&!(!(n=t.id)||!n.trim()||"none"===n.toLowerCase())&&a.includes(r.fittingTypes,e);var n},isImageTypeSupported:o,isExternalUrl:h,isWEBP:c,getFileType:function(e){return function(e){return a.includes(["jpg","jpeg"],g(e))}(e)?r.fileType.JPG:function(e){return a.includes(["png"],g(e))}(e)?r.fileType.PNG:c(e)?r.fileType.WEBP:r.fileType.UNRECOGNIZED},getFileExtension:g,getFileName:function(e,t){var i=/\.([^.]*)$/;if("string"==typeof t&&t.length){var n=["/","\\","?","<",">","|","“",":",'"'].map(encodeURIComponent),s=new RegExp("("+n.concat(["\\.","\\*"]).join("|")+")","g"),o=t,c=t.match(i);return c&&a.includes(r.supportedExtensions,c[1])&&(o=t.replace(i,"")),encodeURIComponent(o).replace(s,"_")}var h=e.match(/\/(.*?)$/);return(h?h[1]:e).replace(i,"")},getAlignedRect:function(e,t,i){var a=void 0,n=void 0;switch(i){case r.alignTypes.CENTER:a=Math.max(0,(e.width-t.width)/2),n=Math.max(0,(e.height-t.height)/2);break;case r.alignTypes.TOP:a=Math.max(0,(e.width-t.width)/2),n=0;break;case r.alignTypes.TOP_LEFT:a=0,n=0;break;case r.alignTypes.TOP_RIGHT:a=Math.max(0,e.width-t.width),n=0;break;case r.alignTypes.BOTTOM:a=Math.max(0,(e.width-t.width)/2),n=Math.max(0,e.height-t.height);break;case r.alignTypes.BOTTOM_LEFT:a=0,n=Math.max(0,e.height-t.height);break;case r.alignTypes.BOTTOM_RIGHT:a=Math.max(0,e.width-t.width),n=Math.max(0,e.height-t.height);break;case r.alignTypes.LEFT:a=0,n=Math.max(0,(e.height-t.height)/2);break;case r.alignTypes.RIGHT:a=Math.max(0,e.width-t.width),n=Math.max(0,(e.height-t.height)/2)}return{x:e.x?e.x+a:a,y:e.y?e.y+n:n,width:Math.min(e.width,t.width),height:Math.min(e.height,t.height)}},getOverlappingRect:function(e,t){var i=Math.max(0,Math.min(e.width,t.x+t.width)-Math.max(0,t.x)),a=Math.max(0,Math.min(e.height,t.y+t.height)-Math.max(0,t.y));return i&&a&&(e.width!==i||e.height!==a)?{x:Math.max(0,t.x),y:Math.max(0,t.y),width:i,height:a}:null},getScaleFactor:u,getTransformData:function(e,t,i,a,n){e=e||i.width,t=t||i.height;var s=function(e){return Math.min(e.pixelAspectRatio||1,r.MAX_DEVICE_PIXEL_RATIO)}(i),o=function(e,t,i,a,n){var s=void 0,o=void 0,c=void 0;if(s=u(e,t,i,a,n),n===r.transformTypes.FILL?(o=i,c=a):n===r.transformTypes.FIT&&(o=e*s,c=t*s),o*c>r.SAFE_TRANSFORMED_AREA){var h=Math.sqrt(r.SAFE_TRANSFORMED_AREA/(o*c));s=u(e,t,o*=h,c*=h,n)}return{scaleFactor:s,width:o,height:c}}(e,t,i.width*s,i.height*s,a),c=o.scaleFactor;return function(e,t,i,a,n,s,o){var c=function(e,t,i,a){return{classic:l,auto:p,super:T}[a](e,t,i)}(e,t,s,n),h=c.optimizedScaleFactor,g=c.upscaleMethodValue,u=c.forceUSM;if(s<=h)return{width:i,height:a,scaleFactor:s,upscaleMethodValue:g,forceUSM:u,cssUpscaleNeeded:!1};var m=void 0,f=void 0;switch(o){case r.transformTypes.FILL:m=i*(h/s),f=a*(h/s);break;case r.transformTypes.FIT:m=e*h,f=t*h}return{width:m,height:f,scaleFactor:h,upscaleMethodValue:g,forceUSM:u,cssUpscaleNeeded:!0}}(e,t,o.width,o.height,n,c,a)},getAlignment:function(e){return r.alignTypesMap[e.alignment]||r.alignTypesMap[r.alignTypes.CENTER]},getPreferredImageQuality:function(e,t){return r.imageScaleDefaults[m(e,t)].quality},getDimension:function(e,t,i,a,r){var n=u(e,t,i,a,r);return{width:Math.round(e*n),height:Math.round(t*n)}},getFocalPoint:function(e){var t=null;return"number"!=typeof e.x||isNaN(e.x)||"number"!=typeof e.y||isNaN(e.y)||(t={x:f(Math.max(0,Math.min(100,e.x))/100,2),y:f(Math.max(0,Math.min(100,e.y))/100,2)}),t},getUpscaleString:function(e){return e&&e.upscaleMethod&&"string"==typeof e.upscaleMethod&&r.upscaleMethods[e.upscaleMethod.toUpperCase()]||r.upscaleMethods.AUTO},roundToFixed:f}},function(e,t,i){"use strict";var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};e.exports={assign:function(){for(var e=arguments[0]||{},t=Array.prototype.slice.call(arguments,1,arguments.length),i=0;i<t.length;i++){var a=t[i];for(var r in a)a.hasOwnProperty(r)&&(e[r]=a[r])}return e},includes:function(e,t){return e.indexOf?e.indexOf(t)>-1:!(!e||"object"!==(void 0===e?"undefined":a(e)))&&Object.keys(e).some(function(i){return e[i]===t})},last:function(e){return e[e.length-1]},template:function(e){return function(t){var i=e;for(var a in t)t.hasOwnProperty(a)&&(i=i.replace(new RegExp("\\${"+a+"}","g"),t[a]));return i}}}},function(e,t,i){"use strict";var a=i(1),r=i(5),n=i(6);e.exports=function(e,t,i,s){var o=a.getFileType(t.id),c={fileName:a.getFileName(t.id,t.name),fileExtension:a.getFileExtension(t.id),fileType:o,isWEBPSupport:a.isWEBPBrowserSupport(o),fittingType:e,src:{id:t.id,width:t.width,height:t.height,isCropped:!1},focalPoint:{x:t.focalPoint&&t.focalPoint.x,y:t.focalPoint&&t.focalPoint.y},parts:[],quality:0,upscaleMethod:a.getUpscaleString(s),progressive:!0,watermark:"",unsharpMask:{},filters:{}};return a.isImageTransformApplicable(t.id)&&(r.setTransformParts(c,t,i),n.setTransformOptions(c,s)),c}},function(e,t,i){"use strict";var a={isWEBP:{lossless:!1,lossy:!1,alpha:!1,animation:!1},isObjectFitBrowser:!0};e.exports={getFeature:function(e){return a[e]},setFeature:function(e,t){a[e]=t}}},function(e,t,i){"use strict";var a=i(2),r=i(0),n=i(1);function s(e,t){var i=n.getTransformData(e.src.width,e.src.height,t,r.transformTypes.FIT,e.upscaleMethod);return{transformType:r.transformTypes.FILL,width:Math.round(i.width),height:Math.round(i.height),alignment:r.alignTypesMap.center,upscale:i.scaleFactor>1,forceUSM:i.forceUSM,scaleFactor:i.scaleFactor,cssUpscaleNeeded:i.cssUpscaleNeeded,upscaleMethodValue:i.upscaleMethodValue}}function o(e){return{transformType:r.transformTypes.CROP,x:Math.round(e.x),y:Math.round(e.y),width:Math.round(e.width),height:Math.round(e.height),upscale:!1,forceUSM:!1,scaleFactor:1,cssUpscaleNeeded:!1}}e.exports={setTransformParts:function(e,t,i){var c=void 0;switch(t.crop&&(c=n.getOverlappingRect(t,t.crop))&&(e.src.width=c.width,e.src.height=c.height,e.src.cropped=!0,e.parts.push(o(c))),e.fittingType){case r.fittingTypes.SCALE_TO_FIT:case r.fittingTypes.LEGACY_FIT_WIDTH:case r.fittingTypes.LEGACY_FIT_HEIGHT:case r.fittingTypes.LEGACY_FULL:case r.fittingTypes.FIT_AND_TILE:case r.fittingTypes.LEGACY_BG_FIT_AND_TILE:case r.fittingTypes.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:case r.fittingTypes.LEGACY_BG_FIT_AND_TILE_VERTICAL:case r.fittingTypes.LEGACY_BG_NORMAL:e.parts.push(s(e,i));break;case r.fittingTypes.SCALE_TO_FILL:e.parts.push(function(e,t){var i=n.getTransformData(e.src.width,e.src.height,t,r.transformTypes.FILL,e.upscaleMethod),a=n.getFocalPoint(e.focalPoint);return{transformType:a?r.transformTypes.FILL_FOCAL:r.transformTypes.FILL,width:Math.round(i.width),height:Math.round(i.height),alignment:n.getAlignment(t),focalPointX:a&&a.x,focalPointY:a&&a.y,upscale:i.scaleFactor>1,forceUSM:i.forceUSM,scaleFactor:i.scaleFactor,cssUpscaleNeeded:i.cssUpscaleNeeded,upscaleMethodValue:i.upscaleMethodValue}}(e,i));break;case r.fittingTypes.STRETCH:e.parts.push(function(e,t){var i=n.getScaleFactor(e.src.width,e.src.height,t.width,t.height,r.transformTypes.FILL),o=a.assign({},t);return o.width=e.src.width*i,o.height=e.src.height*i,s(e,o)}(e,i));break;case r.fittingTypes.TILE_HORIZONTAL:case r.fittingTypes.TILE_VERTICAL:case r.fittingTypes.TILE:case r.fittingTypes.LEGACY_ORIGINAL_SIZE:case r.fittingTypes.ORIGINAL_SIZE:c=n.getAlignedRect(e.src,i,i.alignment),e.src.isCropped?(a.assign(e.parts[0],c),e.src.width=c.width,e.src.height=c.height):e.parts.push(o(c));break;case r.fittingTypes.LEGACY_STRIP_TILE_HORIZONTAL:case r.fittingTypes.LEGACY_STRIP_TILE_VERTICAL:case r.fittingTypes.LEGACY_STRIP_TILE:case r.fittingTypes.LEGACY_STRIP_ORIGINAL_SIZE:e.parts.push(function(e){return{transformType:r.transformTypes.LEGACY_CROP,width:Math.round(e.width),height:Math.round(e.height),alignment:n.getAlignment(e),upscale:!1,forceUSM:!1,scaleFactor:1,cssUpscaleNeeded:!1}}(i));break;case r.fittingTypes.LEGACY_STRIP_SCALE_TO_FIT:case r.fittingTypes.LEGACY_STRIP_FIT_AND_TILE:e.parts.push(function(e){return{transformType:r.transformTypes.FIT,width:Math.round(e.width),height:Math.round(e.height),upscale:!1,forceUSM:!0,scaleFactor:1,cssUpscaleNeeded:!1}}(i));break;case r.fittingTypes.LEGACY_STRIP_SCALE_TO_FILL:e.parts.push(function(e){return{transformType:r.transformTypes.LEGACY_FILL,width:Math.round(e.width),height:Math.round(e.height),alignment:n.getAlignment(e),upscale:!1,forceUSM:!0,scaleFactor:1,cssUpscaleNeeded:!1}}(i))}}}},function(e,t,i){"use strict";var a=i(2),r=i(0),n=i(1);function s(e,t,i){return!isNaN(e)&&"number"==typeof e&&0!==e&&e>=t&&e<=i}e.exports={setTransformOptions:function(e,t){t=t||{},e.quality=function(e,t){var i=a.last(e.parts),r=n.getPreferredImageQuality(i.width,i.height),s=t.quality&&t.quality>=5&&t.quality<=90?t.quality:r;return parseInt(s,10)}(e,t),e.progressive=function(e){return!1!==e.progressive}(t),e.watermark=function(e){return e.watermark}(t),e.unsharpMask=function(e,t){var i=void 0;return!function(e){e=e||{};var t=!isNaN(e.radius)&&"number"==typeof e.radius&&e.radius>=.1&&e.radius<=500,i=!isNaN(e.amount)&&"number"==typeof e.amount&&e.amount>=0&&e.amount<=10,a=!isNaN(e.threshold)&&"number"==typeof e.threshold&&e.threshold>=0&&e.threshold<=255;return t&&i&&a}(t.unsharpMask)?function(e){return e=e||{},!isNaN(e.radius)&&"number"==typeof e.radius&&0===e.radius&&!isNaN(e.amount)&&"number"==typeof e.amount&&0===e.amount&&!isNaN(e.threshold)&&"number"==typeof e.threshold&&0===e.threshold}(t.unsharpMask)||function(e){var t=a.last(e.parts);return!(t.scaleFactor>=1)||t.forceUSM}(e)&&(i=r.defaultUSM):i={radius:t.unsharpMask.radius,amount:t.unsharpMask.amount,threshold:t.unsharpMask.threshold},i&&(i.radius=n.roundToFixed(i.radius,2),i.amount=n.roundToFixed(i.amount,2),i.threshold=n.roundToFixed(i.threshold,2)),i}(e,t),e.filters=function(e){var t=e.filters||{},i={};return s(t[r.imageFilters.CONTRAST],-100,100)&&(i[r.imageFilters.CONTRAST]=t[r.imageFilters.CONTRAST]),s(t[r.imageFilters.BRIGHTNESS],-100,100)&&(i[r.imageFilters.BRIGHTNESS]=t[r.imageFilters.BRIGHTNESS]),s(t[r.imageFilters.SATURATION],-100,100)&&(i[r.imageFilters.SATURATION]=t[r.imageFilters.SATURATION]),s(t[r.imageFilters.HUE],-180,180)&&(i[r.imageFilters.HUE]=t[r.imageFilters.HUE]),s(t[r.imageFilters.BLUR],0,100)&&(i[r.imageFilters.BLUR]=t[r.imageFilters.BLUR]),i}(t)}}},function(e,t,i){"use strict";var a=i(0),r=i(1),n=i(8),s=i(3);e.exports=function(e,t,i,o,c){var h=a.emptyData.uri;return r.isImageTransformApplicable(t.id)?(c=c||s(e,t,i,o,c),h=n.getImageURI(c)):h=t.id,h}},function(e,t,i){"use strict";var a,r=i(2),n=i(0),s=r.template("fit/w_${width},h_${height}"),o=r.template("fill/w_${width},h_${height},al_${alignment}"),c=r.template("fill/w_${width},h_${height},fp_${focalPointX}_${focalPointY}"),h=r.template("crop/x_${x},y_${y},w_${width},h_${height}"),g=r.template("crop/w_${width},h_${height},al_${alignment}"),u=r.template("fill/w_${width},h_${height},al_${alignment}"),l=r.template(",lg_${upscaleMethodValue}"),p=r.template(",q_${quality}"),T=r.template(",usm_${radius}_${amount}_${threshold}"),m=r.template(",bl"),f=r.template(",wm_${watermark}"),d=((a={})[n.imageFilters.CONTRAST]=r.template(",con_${contrast}"),a[n.imageFilters.BRIGHTNESS]=r.template(",br_${brightness}"),a[n.imageFilters.SATURATION]=r.template(",sat_${saturation}"),a[n.imageFilters.HUE]=r.template(",hue_${hue}"),a[n.imageFilters.BLUR]=r.template(",blur_${blur}"),a);e.exports={getImageURI:function(e){var t=[];e.parts.forEach(function(e){switch(e.transformType){case n.transformTypes.CROP:t.push(h(e));break;case n.transformTypes.LEGACY_CROP:t.push(g(e));break;case n.transformTypes.LEGACY_FILL:var i=u(e);e.upscale&&(i+=l(e)),t.push(i);break;case n.transformTypes.FIT:var a=s(e);e.upscale&&(a+=l(e)),t.push(a);break;case n.transformTypes.FILL:var r=o(e);e.upscale&&(r+=l(e)),t.push(r);break;case n.transformTypes.FILL_FOCAL:var p=c(e);e.upscale&&(p+=l(e)),t.push(p)}});var i=t.join("/");return(e.fileType===n.fileType.PNG&&e.isWEBPSupport||e.fileType===n.fileType.JPG)&&(i+=p(e)),e.unsharpMask&&(i+=T(e.unsharpMask)),e.progressive||(i+=m(e)),e.watermark&&(i+=f(e)),e.filters&&(i+=Object.keys(e.filters).map(function(t){return d[t](e.filters)}).join("")),e.src.id+"/"+n.API_VERSION+"/"+i+"/"+e.fileName+"."+(e.isWEBPSupport?"webp":e.fileExtension)}}},function(e,t,i){"use strict";var a=i(2),r=i(0),n=i(1),s=i(10),o=i(3),c=i(7);e.exports={populateGlobalFeatureSupport:n.populateGlobalFeatureSupport,getData:function(e,t,i,h){var g={};if(n.isValidRequest(e,t,i)){var u=o(e,t,i,h);g.uri=c(e,t,i,h,u),a.assign(g,s.getAttributes(u,i))}else g=r.emptyData;return g},fittingTypes:r.fittingTypes,alignTypes:r.alignTypes,htmlTag:r.htmlTag,upscaleMethods:r.upscaleMethods}},function(e,t,i){"use strict";var a=i(0),r=i(1),n=i(11),s=i(12),o=i(13),c=i(14);e.exports={getAttributes:function(e,t){return(t.htmlTag===a.htmlTag.BG?n:t.htmlTag===a.htmlTag.SVG?o:r.isObjectFitBrowserSupport()?s:c).get(e,t)}}},function(e,t,i){"use strict";var a=i(0);e.exports={get:function(e,t){var i={css:{container:{}}},r=i.css,n=a.alignTypes,s=e.fittingType,o=a.fittingTypes;switch(s){case o.ORIGINAL_SIZE:case o.LEGACY_ORIGINAL_SIZE:case o.LEGACY_STRIP_ORIGINAL_SIZE:r.container.backgroundSize="auto",r.container.backgroundRepeat="no-repeat";break;case o.SCALE_TO_FIT:case o.LEGACY_STRIP_SCALE_TO_FIT:r.container.backgroundSize="contain",r.container.backgroundRepeat="no-repeat";break;case o.STRETCH:r.container.backgroundSize="100% 100%",r.container.backgroundRepeat="no-repeat";break;case o.SCALE_TO_FILL:case o.LEGACY_STRIP_SCALE_TO_FILL:r.container.backgroundSize="cover",r.container.backgroundRepeat="no-repeat";break;case o.TILE_HORIZONTAL:case o.LEGACY_STRIP_TILE_HORIZONTAL:r.container.backgroundSize="auto",r.container.backgroundRepeat="repeat-x";break;case o.TILE_VERTICAL:case o.LEGACY_STRIP_TILE_VERTICAL:r.container.backgroundSize="auto",r.container.backgroundRepeat="repeat-y";break;case o.TILE:case o.LEGACY_STRIP_TILE:r.container.backgroundSize="auto",r.container.backgroundRepeat="repeat";break;case o.FIT_AND_TILE:case o.LEGACY_STRIP_FIT_AND_TILE:r.container.backgroundSize="contain",r.container.backgroundRepeat="repeat";break;case o.LEGACY_BG_FIT_AND_TILE:r.container.backgroundSize="auto",r.container.backgroundRepeat="repeat";break;case o.LEGACY_BG_FIT_AND_TILE_HORIZONTAL:r.container.backgroundSize="auto",r.container.backgroundRepeat="repeat-x";break;case o.LEGACY_BG_FIT_AND_TILE_VERTICAL:r.container.backgroundSize="auto",r.container.backgroundRepeat="repeat-y";break;case o.LEGACY_BG_NORMAL:r.container.backgroundSize="auto",r.container.backgroundRepeat="no-repeat"}switch(t.alignment){case n.CENTER:r.container.backgroundPosition="center center";break;case n.LEFT:r.container.backgroundPosition="left center";break;case n.RIGHT:r.container.backgroundPosition="right center";break;case n.TOP:r.container.backgroundPosition="center top";break;case n.BOTTOM:r.container.backgroundPosition="center bottom";break;case n.TOP_RIGHT:r.container.backgroundPosition="right top";break;case n.TOP_LEFT:r.container.backgroundPosition="left top";break;case n.BOTTOM_RIGHT:r.container.backgroundPosition="right bottom";break;case n.BOTTOM_LEFT:r.container.backgroundPosition="left bottom"}return i}}},function(e,t,i){"use strict";var a=i(0);e.exports={get:function(e,t){var i={css:{container:{},img:{}}},r=i.css,n=e.fittingType,s=t.alignment,o=a.fittingTypes,c=a.alignTypes;switch(r.container.position="relative",n){case o.ORIGINAL_SIZE:case o.LEGACY_ORIGINAL_SIZE:e.parts&&e.parts.length?(r.img.width=e.parts[0].width,r.img.height=e.parts[0].height):(r.img.width=e.src.width,r.img.height=e.src.height);break;case o.SCALE_TO_FIT:case o.LEGACY_FIT_WIDTH:case o.LEGACY_FIT_HEIGHT:case o.LEGACY_FULL:r.img.width=t.width,r.img.height=t.height,r.img.objectFit="contain";break;case o.STRETCH:r.img.width=t.width,r.img.height=t.height,r.img.objectFit="fill";break;case o.SCALE_TO_FILL:r.img.width=t.width,r.img.height=t.height,r.img.objectFit="cover"}if(r.img.width!==t.width||r.img.height!==t.height){var h=Math.round((t.height-r.img.height)/2),g=Math.round((t.width-r.img.width)/2);switch(r.img.position="absolute",r.img.top="auto",r.img.right="auto",r.img.bottom="auto",r.img.left="auto",s){default:case c.CENTER:r.img.width=t.width,r.img.height=t.height,r.img.objectFit="none";break;case c.LEFT:r.img.left=0,r.img.top=h;break;case c.RIGHT:r.img.right=0,r.img.top=h;break;case c.TOP:r.img.left=g,r.img.top=0;break;case c.BOTTOM:r.img.left=g,r.img.bottom=0;break;case c.TOP_RIGHT:r.img.right=0,r.img.top=0;break;case c.TOP_LEFT:r.img.left=0,r.img.top=0;break;case c.BOTTOM_RIGHT:r.img.right=0,r.img.bottom=0;break;case c.BOTTOM_LEFT:r.img.left=0,r.img.bottom=0}}return i}}},function(e,t,i){"use strict";var a=i(0),r=i(1);e.exports={get:function(e,t){var i={css:{container:{}},attr:{container:{},img:{}}},n=i.css,s=i.attr,o=e.fittingType,c=a.fittingTypes,h=t.alignment,g=a.alignTypes,u=e.src.width,l=e.src.height,p=void 0;switch(n.container.position="relative",o){case c.ORIGINAL_SIZE:case c.LEGACY_ORIGINAL_SIZE:case c.TILE:e.parts&&e.parts.length?(s.img.width=e.parts[0].width,s.img.height=e.parts[0].height):(s.img.width=u,s.img.height=l),s.img.preserveAspectRatio="xMidYMid slice";break;case c.SCALE_TO_FIT:case c.LEGACY_FIT_WIDTH:case c.LEGACY_FIT_HEIGHT:case c.LEGACY_FULL:s.img.width="100%",s.img.height="100%",s.img.transform="",s.img.preserveAspectRatio="";break;case c.STRETCH:s.img.width=t.width,s.img.height=t.height,s.img.x=0,s.img.y=0,s.img.transform="",s.img.preserveAspectRatio="none";break;case c.SCALE_TO_FILL:r.isImageTransformApplicable(e.src.id)?(s.img.width=t.width,s.img.height=t.height):(p=r.getDimension(u,l,t.width,t.height,a.transformTypes.FILL),s.img.width=p.width,s.img.height=p.height),s.img.x=0,s.img.y=0,s.img.transform="",s.img.preserveAspectRatio="xMidYMid slice"}if(s.img.width!==t.width||s.img.height!==t.height){var T=0,m=0,f=void 0,d=void 0;o===c.TILE?(f=t.width%s.img.width,d=t.height%s.img.height):(f=t.width-s.img.width,d=t.height-s.img.height);var A=Math.round(f/2),_=Math.round(d/2);switch(h){case g.TOP_LEFT:T=0,m=0;break;case g.TOP:T=A,m=0;break;case g.TOP_RIGHT:T=f,m=0;break;case g.LEFT:T=0,m=_;break;case g.CENTER:T=A,m=_;break;case g.RIGHT:T=f,m=_;break;case g.BOTTOM_LEFT:T=0,m=d;break;case g.BOTTOM:T=A,m=d;break;case g.BOTTOM_RIGHT:T=f,m=d}s.img.x=T,s.img.y=m}return s.container.width=t.width,s.container.height=t.height,s.container.viewBox=[0,0,t.width,t.height].join(" "),i}}},function(e,t,i){"use strict";var a=i(2),r=i(0),n=i(1);e.exports={get:function(e,t){var i={css:{container:{},img:{}}},s=i.css,o=e.fittingType,c=r.fittingTypes,h=t.alignment,g=r.alignTypes,u=void 0,l=void 0;e.parts&&e.parts.length?(u=e.parts[0].width,l=e.parts[0].height):(u=e.src.width,l=e.src.height);var p=void 0;switch(s.img.display="block",s.container.position="relative",s.img.position="absolute",s.img.top="auto",s.img.right="auto",s.img.bottom="auto",s.img.left="auto",o){case c.ORIGINAL_SIZE:case c.LEGACY_ORIGINAL_SIZE:s.img.width=u,s.img.height=l;break;case c.SCALE_TO_FIT:case c.LEGACY_FIT_WIDTH:case c.LEGACY_FIT_HEIGHT:case c.LEGACY_FULL:p=n.getDimension(u,l,t.width,t.height,r.transformTypes.FIT),a.assign(s.img,p);break;case c.STRETCH:s.img.width=t.width,s.img.height=t.height;break;case c.SCALE_TO_FILL:var T=e.src.id;n.isImageTypeSupported(T)||n.isExternalUrl(T)?(s.img.width=t.width,s.img.height=t.height):(p=n.getDimension(u,l,t.width,t.height,r.transformTypes.FILL),a.assign(s.img,p),s.container.overflow="hidden")}if(s.img.width!==t.width||s.img.height!==t.height){var m=Math.round((t.height-s.img.height)/2),f=Math.round((t.width-s.img.width)/2);switch(h){default:case g.CENTER:s.img.top=m,s.img.left=f;break;case g.LEFT:s.img.left=0,s.img.top=m;break;case g.RIGHT:s.img.right=0,s.img.top=m;break;case g.TOP:s.img.left=f,s.img.top=0;break;case g.BOTTOM:s.img.left=f,s.img.bottom=0;break;case g.TOP_RIGHT:s.img.right=0,s.img.top=0;break;case g.TOP_LEFT:s.img.left=0,s.img.top=0;break;case g.BOTTOM_RIGHT:s.img.right=0,s.img.bottom=0;break;case g.BOTTOM_LEFT:s.img.left=0,s.img.bottom=0}}return i}}}])});
//# sourceMappingURL=imageClientApi.js.map