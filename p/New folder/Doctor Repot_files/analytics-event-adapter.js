!function(e,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("promote-analytics-adapter",[],n):"object"==typeof exports?exports["promote-analytics-adapter"]=n():e["promote-analytics-adapter"]=n()}("undefined"!=typeof self?self:this,function(){return function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="",n.p="undefined"!=typeof window&&window.__STATICS_BASE_URL__||n.p,n(n.s=32)}([,,,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.paramsMapper=function(e,n){var t=Object.keys(e);return 0===t.length?e:t.reduce(function(t,r){var o=n[r];return o&&(e[r]||0===e[r])&&(t[o]=e[r]),t},{})}},function(e,n,t){"use strict";function r(e,n,t){return"function"==typeof e[n]?e[n](t):{name:n,value:t}}function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"object"===(void 0===e?"undefined":a(e))&&(e instanceof Number||e instanceof Boolean||e instanceof String?e=e.valueOf():null!==e&&(e=JSON.stringify(e))),e}function i(e){return"number"==typeof e?Math.round(1e4*e):e}function c(e){return e&&(""+e).replace(/\s/g,"")}Object.defineProperty(n,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};n.mapParam=r,n.encodeValue=o,n.encodePrice=i,n.removeSpaces=c},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.trackEvent=n.init=void 0;var r=t(8),o=new r.Adapter;n.init=function(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach(o.addChannel)},n.trackEvent=function(e,n,t){o.trackEvent(e,n,t)}},function(e,n,t){"use strict";function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}Object.defineProperty(n,"__esModule",{value:!0}),n.channels=n.channelNames=void 0;var o,i=t(11),c=t(12),a=t(13),u=t(14),s=t(15),p=t(16),d=t(17),f=n.channelNames={FACEBOOK_PIXEL:"facebookPixel",GOOGLE_ANALYTICS:"googleAnalytics",GOOGLE_TAG_MANAGER:"googleTagManager",WIX_ANALYTICS:"wixAnalytics",BI_ANALYTICS:"biAnalytics",GTAG:"gtag",VK_RETARGETING:"vkRetargeting"};n.channels=(o={},r(o,f.FACEBOOK_PIXEL,i.channelEvents),r(o,f.GOOGLE_ANALYTICS,c.channelEvents),r(o,f.GOOGLE_TAG_MANAGER,a.channelEvents),r(o,f.WIX_ANALYTICS,u.channelEvents),r(o,f.BI_ANALYTICS,s.channelEvents),r(o,f.GTAG,p.channelEvents),r(o,f.VK_RETARGETING,d.channelEvents),o)},,function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0}),n.Adapter=void 0;var o=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),i=t(9),c=t(6);n.Adapter=function(){function e(){var n=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];r(this,e),this._channels=[],this.addChannel=function(e){n.isChannelAlreadyInit(e)||(n.isChannelPredefined(e)?n.populateChannelEvents(e):n.registerChannel(e),n.isChannelValid(e)&&n._channels.push(e))},this.trackEvent=function(e,t,r){(0,i.dispatchEvent)(n._channels,e,t,r)},this.isChannelAlreadyInit=function(e){return n._channels.some(function(n){return n.name===e.name})},t.forEach(this.addChannel)}return o(e,[{key:"isChannelPredefined",value:function(e){return c.channels[e.name]}},{key:"populateChannelEvents",value:function(e){e.events=c.channels[e.name]}},{key:"isChannelValid",value:function(e){var n=e.name,t=e.report,r=e.events&&Object.values(e.events).every(function(e){return"function"==typeof e});return n&&t&&r}},{key:"registerChannel",value:function(e){this.isChannelValid(e)&&(c.channels[e.name]=e.events)}}]),e}()},function(e,n,t){"use strict";function r(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.dispatchEvent=void 0;var o=t(10);n.dispatchEvent=function(e,n,t,i){e.forEach(function(e){(0,o.getArgumentsLists)(n,e,t,i).forEach(function(n){return e.report.apply(e,r(n))})})}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.events={},n.getArgumentsLists=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return r.config=n.config,n.events[e]?n.events[e](t,r):[]}},function(e,n,t){"use strict";function r(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}Object.defineProperty(n,"__esModule",{value:!0}),n.channelEvents=void 0;var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i=t(3),c={id:"id",price:"value",value:"value",revenue:"value",name:"content_name",category:"content_category",currency:"currency",content_ids:"content_ids",contents:"contents",type:"content_type",num_items:"num_items",quantity:"quantity",label:"content_name"},a=function(e){return(Number.parseFloat(e.tax)||0)+(Number.parseFloat(e.shipping)||0)+e.contents.reduce(function(e,n){return e+Number.parseFloat(n.item_price)*n.quantity},0)},u=function(e){return e.contents&&e.contents[0].currency},s=function(e){var n=e.type,t=void 0===n?"product":n,o=r(e,["type"]),s=Object.assign({},o,{type:t});return s.contents&&(s.contents=s.contents.map(function(e){return e.quantity=e.quantity||1,e.item_price=e.item_price||e.price||0,e}),s.price||s.value||s.revenue||(s.price=a(s).toString()),s.currency||(s.currency=u(s))),(0,i.paramsMapper)(s,c)},p=function(e){if(e.contents&&!e.num_items){var n=o({},e);return n.num_items=n.contents.reduce(function(e,n){return e+=n.quantity||1},0),n}return e},d={ViewContent:function(e){var n=e.id,t=r(e,["id"]);return[["track","ViewContent",o({},s(t),{content_ids:[n]})]]},AddToCart:function(e){var n=e.id,t=r(e,["id"]);return[["track","AddToCart",o({},s(t),{content_ids:[n]})]]},InitiateCheckout:function(e){return[["track","InitiateCheckout",o({},s(p(e)),{content_ids:e.contents.map(function(e){return e.id})})]]},AddPaymentInfo:function(e){return[["track","AddPaymentInfo",o({},s(p(e)),{content_ids:e.contents.map(function(e){return e.id})})]]},Purchase:function(e){return[["track","Purchase",o({},s(p(e)),{content_ids:e.contents.map(function(e){return e.id})})]]},Lead:function(e){return[["track","Lead",(0,i.paramsMapper)(e,c)]]},CustomEvent:function(e){var n=e.event,t=e.eventAction,o=void 0===t?"customEvent":t,i=r(e,["event","eventAction"]);return[["trackCustom",n||o,i]]}};n.channelEvents=d},function(e,n,t){"use strict";function r(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}Object.defineProperty(n,"__esModule",{value:!0}),n.channelEvents=void 0;var o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i=t(3),c={price:"price",sku:"id",id:"id",currency:"currency",name:"name",category:"category",brand:"brand",variant:"variant",list:"list",quantity:"quantity",step:"step",option:"option",position:"position",coupon:"coupon",affiliation:"affiliation",revenue:"revenue",tax:"tax",shipping:"shipping"};!function(){for(var e=1;e<=200;e++)c["dimension"+e]="dimension"+e,c["metric"+e]="metric"+e}();var a=function(e){return e?"Enhanced Ecommerce - "+e:"Enhanced Ecommerce"},u={AddProductImpression:function(e){return[["require","ec"]].concat((e.contents||[]).map(function(e){return["ec:addImpression",(0,i.paramsMapper)(e,c)]})).concat([["send","event",a(e.origin),"Product Impressions",{nonInteraction:!0}]])},ClickProduct:function(e){var n=e.name?e.name:"(not set)",t=e.list?e.list:"(not set)";return[["require","ec"]].concat([["ec:addProduct",(0,i.paramsMapper)(e,c)]]).concat([["ec:setAction","click",{list:t}]]).concat([["send","event",a(e.origin),"Product Click",n]])},ViewContent:function(e){var n=e.name?e.name:"(not set)";return[["require","ec"]].concat([["ec:addImpression",(0,i.paramsMapper)(e,c)]]).concat([["ec:setAction","detail"]]).concat([["send","event",a(e.origin),"View Content",n,{nonInteraction:!0}]])},AddToCart:function(e){var n=e.name?e.name:"(not set)";return[["require","ec"]].concat([["ec:addProduct",(0,i.paramsMapper)(e,c)]]).concat([["ec:setAction","add"]]).concat([["send","event",a(e.origin),"Add to Cart",n]])},RemoveFromCart:function(e){var n=e.name?e.name:"(not set)";return[["require","ec"]].concat([["ec:addProduct",(0,i.paramsMapper)(e,c)]]).concat([["ec:setAction","remove"]]).concat([["send","event",a(e.origin),"Remove from Cart",n]])},InitiateCheckout:function(e){var n=(e.contents||[]).map(function(e){return["ec:addProduct",(0,i.paramsMapper)(e,c)]}),t=(0,i.paramsMapper)({option:e.option},c);return[["require","ec"]].concat(n).concat([["ec:setAction","checkout",t]]).concat([["send","event",a(e.origin),"Initiate Checkout"]])},StartPayment:function(e){return[["require","ec"]].concat([["ec:setAction","checkout_option",(0,i.paramsMapper)({step:1,option:e.option},c)]]).concat([["send","event",a(e.origin),"Start Payment"]])},AddPaymentInfo:function(e){return[["require","ec"]].concat([["ec:setAction","checkout_option",(0,i.paramsMapper)({step:2,option:e.option},c)]]).concat([["send","event",a(e.origin),"Add Payment Info"]])},CheckoutStep:function(e){var n=(0,i.paramsMapper)({step:e.step||3,option:e.option},c);return[["require","ec"]].concat([["ec:setAction","checkout_option",n]]).concat([["send","event",a(e.origin),"Checkout Step "+n.step]])},Purchase:function(e){var n=(e.contents||[]).map(function(e){return["ec:addProduct",(0,i.paramsMapper)(e,c)]}),t={};return["id","affiliation","revenue","tax","shipping","coupon"].forEach(function(n){return e[n]&&(t[n]=e[n])}),[["require","ec"]].concat(n).concat([["ec:setAction","purchase",(0,i.paramsMapper)(t,c)]]).concat([["send","event",a(e.origin),"Purchase"]])},Lead:function(e){var n=e.category,t=void 0===n?"Leads":n,r=e.action,o=void 0===r?"Submitted":r,i=e.label;return[["send","event",t,o,void 0===i?"New Lead":i]]},CustomEvent:function(e){var n=e.event,t=void 0===n?"customEvent":n,a=e.eventAction,u=r(e,["event","eventAction"]);return"pageview"===t.toLowerCase()?[["send","pageview",(0,i.paramsMapper)(u,c)]]:[["send","event",o({eventAction:a||t},u)]]}};n.channelEvents=u},function(e,n,t){"use strict";function r(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function o(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}Object.defineProperty(n,"__esModule",{value:!0});var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c={AddProductImpression:function(e){var n=e.contents,t=e.origin,r=n;return[[[i({event:"productImpression"},t&&{origin:t},{ecommerce:{impressions:r}})]]]},ClickProduct:function(e){var n=e.list,t=void 0===n?"(not set)":n,r=e.origin,c=o(e,["list","origin"]);return[[[i({event:"productClick"},r&&{origin:r},{ecommerce:{click:{actionField:{list:t},products:[c]}}})]]]},ViewContent:function(e){var n=e.list,t=void 0===n?"(not set)":n,r=e.origin,c=o(e,["list","origin"]);return[[[i({event:"viewContent"},r&&{origin:r},{ecommerce:{detail:{actionField:{list:t},products:[c]}}})]]]},AddToCart:function(e){var n=e.origin,t=o(e,["origin"]);return[[[i({event:"addToCart"},n&&{origin:n},{ecommerce:{add:{products:[t]}}})]]]},RemoveFromCart:function(e){var n=e.origin,t=o(e,["origin"]);return[[[i({event:"removeFromCart"},n&&{origin:n},{ecommerce:{remove:{products:[t]}}})]]]},InitiateCheckout:function(e){var n=e.contents,t=void 0===n?[]:n,o=e.origin,c=e.option,a=[].concat(r(t)),u=Object.assign({},c&&{option:c});return[[[i({event:"checkout"},o&&{origin:o},{ecommerce:{checkout:{actionField:u,products:a}}})]]]},StartPayment:function(e){var n=e.origin,t={step:1};return[[[i({event:"checkoutOption"},n&&{origin:n},{ecommerce:{checkout_option:{actionField:t}}})]]]},AddPaymentInfo:function(e){var n=e.origin,t=e.option,r=Object.assign({step:2},t&&{option:t});return[[[i({event:"checkoutOption"},n&&{origin:n},{ecommerce:{checkout_option:{actionField:r}}})]]]},CheckoutStep:function(e){var n=e.step,t=void 0===n?3:n,r=e.origin,o=e.option,c=Object.assign({step:t},o&&{option:o});return[[[i({event:"checkoutOption"},r&&{origin:r},{ecommerce:{checkout_option:{actionField:c}}})]]]},Purchase:function(e){var n=e.contents,t=void 0===n?[]:n,c=e.origin,a=o(e,["contents","origin"]),u=[].concat(r(t)),s={};return["id","affiliation","revenue","tax","shipping","coupon"].forEach(function(e){return a[e]&&(s[e]=a[e])}),[[[i({event:"purchase"},c&&{origin:c},{ecommerce:{purchase:{actionField:s,products:u}}})]]]},Lead:function(){return[[[{event:"lead"}]]]},CustomEvent:function(e){var n=e.event,t=void 0===n?"customEvent":n,r=o(e,["event"]);return[[[i({event:t},r)]]]}};n.channelEvents=c},function(e,n,t){"use strict";function r(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}function o(e){return Object.keys(e).reduce(function(n,t){return n[t]=(0,u.encodeValue)(e[t]),n},{})}function i(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments[4],c={evt:e,evn:n,data:o(t)};return r.context&&r.context.appDefId&&(c.appId=r.context.appDefId),i&&(c.tbl=i),[[c]]}function c(e,n,t,r){return i("p",e,n,t,r)}function a(e,n,t,r){return i("c",e,n,t,r)}Object.defineProperty(n,"__esModule",{value:!0}),n.channelEvents=void 0;var u=t(4),s={WAPageView:{name:"PageView",table:"page_views"},AddProductImpression:{},ClickProduct:{},ViewContent:{},AddToCart:{},RemoveFromCart:{},InitiateCheckout:{},AddPaymentInfo:{},Purchase:{},Lead:{name:function(e){var n=e.label;return(0,u.removeSpaces)(n)},table:"lead_events"}},p=Object.keys(s).reduce(function(e,n){var t=s[n],r=t.name,o=t.table;return e[n]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments[1];return"function"==typeof r&&(r=r(e)),r=r||n,c(r,e,t,o)},e},{CustomEvent:function(e,n){var t=e.event,o=e.targetTable;return a(t,r(e,["event","targetTable"]),n,o)}});n.channelEvents=p},function(e,n,t){"use strict";function r(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function o(e,n){return e.reduce(function(e,t){var r=(0,c.mapParam)(s,t,n[t]),o=r.name,i=r.value;return e[o]=(0,c.encodeValue)(i),e},{})}Object.defineProperty(n,"__esModule",{value:!0}),n.channelEvents=void 0;var i=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},c=t(4),a={product:["id","sku","name","category","price","currency","brand","variant","list","position"],productList:["contents"],payment:["option"],purchase:["id","affiliation","revenue","tax","shipping","coupon","contents"]},u={AddProductImpression:{params:{evid:1100},fields:a.productList},ClickProduct:{params:{evid:1101},fields:a.product},ViewContent:{params:{evid:1102},fields:a.product},AddToCart:{params:{evid:1103},fields:[].concat(r(a.product),["quantity"])},RemoveFromCart:{params:{evid:1104},fields:[].concat(r(a.product),["quantity"])},InitiateCheckout:{params:{evid:1105},fields:a.productList},AddPaymentInfo:{params:{evid:1106},fields:a.payment},Purchase:{params:{evid:1107},fields:a.purchase},Lead:{params:{evid:1108},fields:[]}},s={price:function(e){return{name:"price",value:(0,c.encodePrice)(e)}},revenue:function(e){return{name:"revenue",value:(0,c.encodePrice)(e)}},tax:function(e){return{name:"tax",value:(0,c.encodePrice)(e)}},shipping:function(e){return{name:"shipping",value:(0,c.encodePrice)(e)}}};n.channelEvents=Object.keys(u).reduce(function(e,n){return e[n]=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=i({src:76},u[n].params,o(u[n].fields,e));return t.context&&t.context.appDefId&&(r.appId=t.context.appDefId),[[r]]},e},{})},function(e,n,t){"use strict";function r(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}Object.defineProperty(n,"__esModule",{value:!0}),n.channelEvents=void 0;var o=t(3),i={GA_TRACKING_ID:"GA_TRACKING_ID",pagePath:"page_path",pageTitle:"page_title"};!function(){for(var e=1;e<=200;e++)i["dimension"+e]="dimension"+e,i["metric"+e]="metric"+e}();var c={PageView:function(e,n){var t=n.config,c=e.GA_TRACKING_ID,a=r(e,["GA_TRACKING_ID"]);return[["config",c||t.trackingId,(0,o.paramsMapper)(a,i)]]}};n.channelEvents=c},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.channelEvents={PageView:function(){return[[]]}}},,,,,,,,,,,,,,,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.channelNames=n.api=void 0;var r=t(5),o=function(e){if(e&&e.__esModule)return e;var n={};if(null!=e)for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(n[t]=e[t]);return n.default=e,n}(r),i=t(6);n.api=o,n.channelNames=i.channelNames}])});
//# sourceMappingURL=analytics-event-adapter.bundle.min.js.map