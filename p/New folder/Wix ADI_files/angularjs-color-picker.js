/*!
 * angularjs-color-picker v2.7.2
 * https://github.com/ruhley/angular-color-picker/
 *
 * Copyright 2016 ruhley
 *
 * 2016-12-23 14:00:20
 *
 */
!function(o,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("tinycolor2")):"function"==typeof define&&define.amd?define(["tinycolor2"],t):o.AngularjsColorPicker=t(o.tinycolor)}(this,function(o){"use strict";function t(){return{restrict:"E",require:["^ngModel"],scope:{ngModel:"=",options:"=?",api:"=?",eventApi:"=?"},bindToController:!0,templateUrl:"template/color-picker/directive.html",controller:r,controllerAs:"AngularColorPickerController",link:function(o,t,e,i){o.control=i,o.init()}}}function e(o){o.put("template/color-picker/directive.html",'<div class="color-picker-wrapper" ng-class="{\'color-picker-disabled\': AngularColorPickerController.options.disabled,\'color-picker-swatch-only\': AngularColorPickerController.options.swatchOnly,\'color-picker-open\': AngularColorPickerController.is_open,\'color-picker-closed\': !AngularColorPickerController.is_open,}">   <div class="color-picker-input-wrapper" ng-class="{\'input-group\': AngularColorPickerController.options.swatchBootstrap && AngularColorPickerController.options.swatch}">       <span ng-if="AngularColorPickerController.options.swatchPos === \'left\'" class="color-picker-swatch" ng-click="AngularColorPickerController.onSwatchClick($event)" ng-show="AngularColorPickerController.options.swatch" ng-class="{\'color-picker-swatch-left\': AngularColorPickerController.options.swatchPos !== \'right\', \'color-picker-swatch-right\': AngularColorPickerController.options.swatchPos === \'right\', \'input-group-addon\': AngularColorPickerController.options.swatchBootstrap}"></span>       <input ng-attr-id="{{AngularColorPickerController.options.id}}" ng-attr-name="{{AngularColorPickerController.options.name}}" class="color-picker-input form-control" type="text" ng-model="AngularColorPickerController.ngModel" ng-readonly="AngularColorPickerController.options.swatchOnly" ng-disabled="AngularColorPickerController.options.disabled" ng-blur="AngularColorPickerController.onBlur($event)" ng-change="AngularColorPickerController.onChange($event)" size="7" ng-focus="AngularColorPickerController.onFocus($event)" ng-class="{\'color-picker-input-swatch\': AngularColorPickerController.options.swatch && !AngularColorPickerController.options.swatchOnly && AngularColorPickerController.options.swatchPos === \'left\'}" placeholder="{{AngularColorPickerController.options.placeholder}}" ng-required="AngularColorPickerController.options.required">       <span ng-if="AngularColorPickerController.options.swatchPos === \'right\'" class="color-picker-swatch" ng-click="AngularColorPickerController.onSwatchClick($event)" ng-show="AngularColorPickerController.options.swatch" ng-class="{\'color-picker-swatch-left\': AngularColorPickerController.options.swatchPos !== \'right\', \'color-picker-swatch-right\': AngularColorPickerController.options.swatchPos === \'right\', \'input-group-addon\': AngularColorPickerController.options.swatchBootstrap}"></span>   </div>   <div class="color-picker-panel" ng-class="{       \'color-picker-panel-top color-picker-panel-right\': AngularColorPickerController.options.pos === \'top right\',       \'color-picker-panel-top color-picker-panel-left\': AngularColorPickerController.options.pos === \'top left\',       \'color-picker-panel-bottom color-picker-panel-right\': AngularColorPickerController.options.pos === \'bottom right\',       \'color-picker-panel-bottom color-picker-panel-left\': AngularColorPickerController.options.pos === \'bottom left\',       \'color-picker-panel-round\': AngularColorPickerController.options.round,       \'color-picker-show-hue\': AngularColorPickerController.options.hue,       \'color-picker-show-saturation\': AngularColorPickerController.options.saturation,       \'color-picker-show-lightness\': AngularColorPickerController.options.lightness,       \'color-picker-show-alpha\': AngularColorPickerController.options.alpha && AngularColorPickerController.options.format !== \'hex\',       \'color-picker-show-inline\': AngularColorPickerController.options.inline,   }">       <div class="color-picker-grid-wrapper">           <div class="color-picker-row">               <div class="color-picker-grid color-picker-sprite">                   <div class="color-picker-grid-inner"></div>                   <div class="color-picker-picker">                       <div></div>                   </div>               </div>               <div class="color-picker-hue color-picker-sprite" ng-show="AngularColorPickerController.options.hue">                   <div class="color-picker-slider"></div>               </div>               <div class="color-picker-saturation" ng-show="AngularColorPickerController.options.saturation">                   <div class="color-picker-slider"></div>               </div>               <div class="color-picker-lightness" ng-show="AngularColorPickerController.options.lightness">                   <div class="color-picker-slider"></div>               </div>               <div class="color-picker-opacity color-picker-sprite" ng-show="AngularColorPickerController.options.alpha && AngularColorPickerController.options.format !== \'hex\'">                   <div class="color-picker-slider"></div>               </div>           </div>       </div>       <div class="color-picker-actions">           <button                type="button"               class="color-picker-action color-picker-action-clear"               tabindex="-1               ng-class="AngularColorPickerController.options.clear.class"               ng-show="AngularColorPickerController.options.clear.show"               ng-click="AngularColorPickerController.api.clear($event)"           >               {{AngularColorPickerController.options.clear.label}}           </button><!--           --><button                type="button"               class="color-picker-action color-picker-action-reset"               tabindex="-1               ng-class="AngularColorPickerController.options.reset.class"               ng-show="AngularColorPickerController.options.reset.show"               ng-click="AngularColorPickerController.api.reset($event)"           >               {{AngularColorPickerController.options.reset.label}}           </button><!--           --><button               type="button"               class="color-picker-action color-picker-action-close"               tabindex="-1               ng-class="AngularColorPickerController.options.close.class"               ng-show="AngularColorPickerController.options.close.show"               ng-click="AngularColorPickerController.api.close($event)"           >               {{AngularColorPickerController.options.close.label}}           </button>       </div>   </div></div>')}o="default"in o?o.default:o;var i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol?"symbol":typeof o},s=function(o,t){if(!(o instanceof t))throw new TypeError("Cannot call a class as a function")},n=function(){function o(o,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(o,i.key,i)}}return function(t,e,i){return e&&o(t.prototype,e),i&&o(t,i),t}}(),r=function(){function t(o,e,i,n,r){s(this,t),this.$scope=o,this.$element=e,this.$document=i,this.$timeout=n,this.ColorPickerOptions=r,this.$scope.init=this.init.bind(this),this.hue=0,this.saturation=void 0,this.lightness=void 0,this.opacity=void 0}return n(t,[{key:"watchNgModel",value:function(t,e){var i=this;if(!this.colorMouse)if(void 0===t||void 0===e||this.hasOwnProperty("initialNgModel")||(this.initialNgModel=t),this.hasOwnProperty("initialNgModel")&&(t===this.initialNgModel?"function"==typeof this.$scope.control[0].$setPristine&&this.$scope.control[0].$setPristine():"function"==typeof this.$scope.control[0].$setDirty&&this.$scope.control[0].$setDirty()),void 0!==t&&null!==t&&t.length>4){var s=o(t);if(s.isValid()){var n;this.options.round?(n=s.toHsl(),this.lightness=100*n.l):(n=s.toHsv(),this.lightness=100*n.v),this.hue=n.h,this.saturation=100*n.s,this.updateModel=!1,this.options.alpha&&(this.opacity=100*n.a),this.$timeout(function(){i.updateModel=!0}),this.isValid=!0}else this.isValid=!1;this.$scope.control[0].$setValidity(this.$element.attr("name"),this.isValid)}else null!==t&&""!==t||(this.hue=0,this.saturation=void 0,this.lightness=void 0,this.opacity=void 0),this.swatchColor=""}},{key:"watchSwatchPos",value:function(o){var t=this;void 0!==o&&(this.initConfig(),this.$timeout(function(){t.updateSwatchBackground()}))}},{key:"setupApi",value:function(){var o=this;this.api||(this.api={}),this.api.open=function(t){return!!o.is_open||(o.is_open=!0,o.hueMouse=!1,o.opacityMouse=!1,o.colorMouse=!1,o.hueUpdate(),o.saturationUpdate(),o.lightnessUpdate(),o.opacityUpdate(),void o.eventApiDispatch("onOpen",[t]))},this.api.close=function(t){o.options.inline||!o.is_open&&null===o.$element[0].querySelector(".color-picker-panel").offsetParent||(o.is_open=!1,o.$scope.$applyAsync(),o.eventApiDispatch("onClose",[t]))},this.api.clear=function(t){""!==o.ngModel&&(o.ngModel="",o.eventApiDispatch("onClear",[t]))},this.api.reset=function(t){o.ngModel!==o.initialNgModel&&(o.ngModel=o.initialNgModel,o.eventApiDispatch("onReset",[t]))},this.api.getElement=function(){return o.$element},this.api.getScope=function(){return o.$scope}}},{key:"reInit",value:function(o){void 0!==o&&this.initConfig()}},{key:"reInitAndUpdate",value:function(o){void 0!==o&&(this.initConfig(),this.update())}},{key:"init",value:function(){var o=this;this.chrome=Boolean(window.chrome);var t=window.navigator.userAgent.match(/Android\s([0-9\.]*)/i);this.android_version=t&&t.length>1?parseFloat(t[1]):NaN;var e={mouseDown:this.onMouseDown.bind(this),mouseUp:this.onMouseUp.bind(this),mouseMove:this.onMouseMove.bind(this),keyUp:this.onKeyUp.bind(this)};this.updateModel=!0,this.$scope.$watch("AngularColorPickerController.ngModel",this.watchNgModel.bind(this)),this.$scope.$watch("AngularColorPickerController.options.swatchPos",this.watchSwatchPos.bind(this)),this.$scope.$watchGroup(["AngularColorPickerController.options.format","AngularColorPickerController.options.alpha","AngularColorPickerController.options.case"],this.reInitAndUpdate.bind(this)),this.$scope.$watchGroup(["AngularColorPickerController.options.disabled","AngularColorPickerController.options.swatchBootstrap","AngularColorPickerController.options.swatchOnly","AngularColorPickerController.options.swatch","AngularColorPickerController.options.pos","AngularColorPickerController.options.inline","AngularColorPickerController.options.placeholder","AngularColorPickerController.options.round"],this.reInit.bind(this)),this.$scope.$watch("AngularColorPickerController.api",this.setupApi.bind(this)),this.$scope.$watch("AngularColorPickerController.swatchColor",this.updateSwatchBackground.bind(this)),this.$scope.$watch("AngularColorPickerController.hue",this.hueUpdate.bind(this)),this.$scope.$watch("AngularColorPickerController.saturation",this.saturationUpdate.bind(this)),this.$scope.$watch("AngularColorPickerController.lightness",this.lightnessUpdate.bind(this)),this.$scope.$watch("AngularColorPickerController.opacity",this.opacityUpdate.bind(this)),this.$scope.$on("$destroy",function(){o.$document.off("mousedown",e.mouseDown),o.$document.off("mouseup",e.mouseUp),o.$document.off("mousemove",e.mouseMove),o.$document.off("touchstart",e.mouseDown),o.$document.off("touchend",e.mouseUp),o.$document.off("touchmove",e.mouseMove),o.$document.off("keyup",e.keyUp),o.eventApiDispatch("onDestroy")}),this.initConfig(),this.$document.on("mousedown",e.mouseDown),this.$document.on("mouseup",e.mouseUp),this.$document.on("mousemove",e.mouseMove),this.$document.on("touchstart",e.mouseDown),this.$document.on("touchend",e.mouseUp),this.$document.on("touchmove",e.mouseMove),this.$document.on("keyup",e.keyUp),this.find(".color-picker-grid").on("click",this.onColorClick.bind(this)),this.find(".color-picker-grid").on("touchend",this.onColorClick.bind(this)),this.find(".color-picker-hue").on("click",this.onHueClick.bind(this)),this.find(".color-picker-hue").on("touchend",this.onHueClick.bind(this)),this.find(".color-picker-saturation").on("click",this.onSaturationClick.bind(this)),this.find(".color-picker-saturation").on("touchend",this.onSaturationClick.bind(this)),this.find(".color-picker-lightness").on("click",this.onLightnessClick.bind(this)),this.find(".color-picker-lightness").on("touchend",this.onLightnessClick.bind(this)),this.find(".color-picker-opacity").on("click",this.onOpacityClick.bind(this)),this.find(".color-picker-opacity").on("touchend",this.onOpacityClick.bind(this))}},{key:"onMouseDown",value:function(o){this.has_moused_moved=!1,!this.options.disabled&&this.find(o.target).length>0&&(o.target.classList.contains("color-picker-grid-inner")||o.target.classList.contains("color-picker-picker")||o.target.parentNode.classList.contains("color-picker-picker")?(this.colorDown(o),this.$scope.$apply()):o.target.classList.contains("color-picker-hue")||o.target.parentNode.classList.contains("color-picker-hue")?(this.hueDown(o),this.$scope.$apply()):o.target.classList.contains("color-picker-saturation")||o.target.parentNode.classList.contains("color-picker-saturation")?(this.saturationDown(o),this.$scope.$apply()):o.target.classList.contains("color-picker-lightness")||o.target.parentNode.classList.contains("color-picker-lightness")?(this.lightnessDown(o),this.$scope.$apply()):(o.target.classList.contains("color-picker-opacity")||o.target.parentNode.classList.contains("color-picker-opacity"))&&(this.opacityDown(o),this.$scope.$apply()))}},{key:"onMouseUp",value:function(o){this.colorMouse||this.hueMouse||this.opacityMouse||0!==this.find(o.target).length?this.colorMouse&&this.has_moused_moved?(this.colorUp(o),this.$scope.$apply(),this.onChange(o)):this.hueMouse&&this.has_moused_moved?(this.hueUp(o),this.$scope.$apply(),this.onChange(o)):this.saturationMouse&&this.has_moused_moved?(this.saturationUp(o),this.$scope.$apply(),this.onChange(o)):this.lightnessMouse&&this.has_moused_moved?(this.lightnessUp(o),this.$scope.$apply(),this.onChange(o)):this.opacityMouse&&this.has_moused_moved&&(this.opacityUp(o),this.$scope.$apply(),this.onChange(o)):(this.setupApi(),this.options.hide.click&&this.api.close(o),this.$scope.$apply())}},{key:"onMouseMove",value:function(o){this.colorMouse?(this.has_moused_moved=!0,this.colorChange(o),this.$scope.$apply()):this.hueMouse?(this.has_moused_moved=!0,this.hueChange(o),this.$scope.$apply()):this.saturationMouse?(this.has_moused_moved=!0,this.saturationChange(o),this.$scope.$apply()):this.lightnessMouse?(this.has_moused_moved=!0,this.lightnessChange(o),this.$scope.$apply()):this.opacityMouse&&(this.has_moused_moved=!0,this.opacityChange(o),this.$scope.$apply())}},{key:"onKeyUp",value:function(o){this.options.hide.escape&&27===o.keyCode&&this.api.close(o)}},{key:"onColorClick",value:function(o){this.options.disabled||this.has_moused_moved||(this.colorChange(o),this.colorUp(o),this.$scope.$apply(),this.onChange(o))}},{key:"onHueClick",value:function(o){this.options.disabled||this.has_moused_moved||(this.hueChange(o),this.hueUp(o),this.$scope.$apply(),this.onChange(o))}},{key:"onSaturationClick",value:function(o){this.options.disabled||this.has_moused_moved||(this.saturationChange(o),this.saturationUp(o),this.$scope.$apply(),this.onChange(o))}},{key:"onLightnessClick",value:function(o){this.options.disabled||this.has_moused_moved||(this.lightnessChange(o),this.lightnessUp(o),this.$scope.$apply(),this.onChange(o))}},{key:"onOpacityClick",value:function(o){this.options.disabled||this.has_moused_moved||(this.opacityChange(o),this.opacityUp(o),this.$scope.$apply(),this.onChange(o))}},{key:"onChange",value:function(o){this.ngModel!==this.onChangeValue&&(this.onChangeValue=this.ngModel,this.eventApiDispatch("onChange",[o]))}},{key:"onBlur",value:function(o){this.ngModel!==this.onChangeValue&&(this.updateModel=!0,this.update()),this.$scope.control[0].$setTouched(),this.eventApiDispatch("onBlur",[o]),this.options.hide.blur&&0===this.find(o.relatedTarget).length&&this.api.close(o)}},{key:"initConfig",value:function(){this.options||(this.options={}),this.mergeOptions(this.options,this.ColorPickerOptions),this.is_open=this.options.inline,this.options.round?this.options.hue=!1:this.options.saturation=!1,this.options.inline&&(this.options.close.show=!1)}},{key:"mergeOptions",value:function(o,t){for(var e in t)t.hasOwnProperty(e)&&(o&&o.hasOwnProperty(e)?"object"===i(t[e])&&this.mergeOptions(o[e],t[e]):o[e]=t[e])}},{key:"onSwatchClick",value:function(o){this.options.show.swatch&&this.api.open(o)}},{key:"onFocus",value:function(o){this.options.show.focus&&this.api.open(o)}},{key:"update",value:function(){if(void 0===this.hue||void 0===this.saturation||void 0===this.lightness)return!1;var t;t=o(this.options.round?{h:this.hue,s:this.saturation,l:this.lightness}:{h:this.hue,s:this.saturation,v:this.lightness}),this.options.alpha&&t.setAlpha(this.opacity/100),this.swatchColor=t.toHslString(),this.updateSaturationBackground(t),this.updateLightnessBackground(t);var e;switch(this.options.format){case"rgb":e=t.toRgbString();break;case"hex":e=t.toHexString(),e="lower"===this.options.case?e.toLowerCase():e.toUpperCase();break;case"hex8":e=t.toHex8String(),e="lower"===this.options.case?e.toLowerCase():e.toUpperCase();break;case"hsv":e=t.toHsvString();break;default:e=t.toHslString()}this.updateModel&&(this.ngModel=e)}},{key:"updateSwatchBackground",value:function(){var o=angular.element(this.$element[0].querySelector(".color-picker-swatch"));o.css({"background-color":this.swatchColor})}},{key:"huePosUpdate",value:function(){var o=this;this.$timeout(function(){var t=o.$element[0].querySelector(".color-picker-hue"),e=angular.element(o.$element[0].querySelector(".color-picker-hue .color-picker-slider")),i=t.getBoundingClientRect();e.css({top:i.height*o.huePos/100+"px"})})}},{key:"saturationPosUpdate",value:function(){var o=this;this.$timeout(function(){var t,e,i;o.options.round||(t=o.$element[0].querySelector(".color-picker-grid"),e=angular.element(o.$element[0].querySelector(".color-picker-grid .color-picker-picker")),i=t.getBoundingClientRect(),e.css({left:i.width*o.saturationPos/100+"px"})),t=o.$element[0].querySelector(".color-picker-saturation"),e=angular.element(o.$element[0].querySelector(".color-picker-saturation .color-picker-slider")),i=t.getBoundingClientRect(),e.css({top:i.height*(100-o.saturationPos)/100+"px"})})}},{key:"lightnessPosUpdate",value:function(){var o=this;this.$timeout(function(){var t,e,i;o.options.round||(t=o.$element[0].querySelector(".color-picker-grid"),e=angular.element(o.$element[0].querySelector(".color-picker-grid .color-picker-picker")),i=t.getBoundingClientRect(),e.css({top:i.height*o.lightnessPos/100+"px"})),t=o.$element[0].querySelector(".color-picker-lightness"),e=angular.element(o.$element[0].querySelector(".color-picker-lightness .color-picker-slider")),i=t.getBoundingClientRect(),e.css({top:i.height*o.lightnessPos/100+"px"})})}},{key:"opacityPosUpdate",value:function(){var o=this;this.$timeout(function(){var t=o.$element[0].querySelector(".color-picker-opacity"),e=angular.element(o.$element[0].querySelector(".color-picker-opacity .color-picker-slider")),i=t.getBoundingClientRect();e.css({top:i.height*o.opacityPos/100+"px"})})}},{key:"gridUpdate",value:function(){var o=angular.element(this.$element[0].querySelector(".color-picker-grid"));o.css({"background-color":this.grid})}},{key:"hueDown",value:function(o){o.stopPropagation(),o.preventDefault(),this.hueMouse=!0}},{key:"hueUp",value:function(o){o.stopPropagation(),o.preventDefault(),this.hueMouse=!1}},{key:"hueChange",value:function(o){o.stopPropagation(),o.preventDefault();var t=this.find(".color-picker-hue"),e=this.getEventPos(o);this.hue=Math.round(360*(1-(e.pageY-this.offset(t).top)/t.prop("offsetHeight"))),this.hue>360?this.hue=360:this.hue<0&&(this.hue=0)}},{key:"hueUpdate",value:function(){void 0!==this.hue&&(this.huePos=100*(1-this.hue/360),this.grid=o({h:this.hue,s:100,v:1}).toHslString(),this.huePos<0?this.huePos=0:this.huePos>100&&(this.huePos=100),this.options.round?(this.getRoundPos(),this.updateRoundPos()):this.gridUpdate(),this.huePosUpdate(),this.update())}},{key:"saturationDown",value:function(o){o.stopPropagation(),o.preventDefault(),this.saturationMouse=!0}},{key:"saturationUp",value:function(o){o.stopPropagation(),o.preventDefault(),this.saturationMouse=!1}},{key:"saturationChange",value:function(o){o.stopPropagation(),o.preventDefault();var t=this.find(".color-picker-saturation"),e=this.getEventPos(o);this.saturation=Math.round(100*(1-(e.pageY-this.offset(t).top)/t.prop("offsetHeight"))),this.saturation>100?this.saturation=100:this.saturation<0&&(this.saturation=0)}},{key:"saturationUpdate",value:function(){void 0!==this.saturation&&(this.options.round&&(this.getRoundPos(),this.updateRoundPos()),this.saturationPos=this.saturation,this.saturationPos<0?this.saturationPos=0:this.saturationPos>100&&(this.saturationPos=100),this.saturationPosUpdate(),this.update())}},{key:"updateSaturationBackground",value:function(o){var t=this.find(".color-picker-saturation"),e=o.clone().saturate(100),i=o.clone().desaturate(100);t.css({background:"linear-gradient(to bottom, "+e.toHexString()+" 0%, "+i.toHexString()+" 100%)"})}},{key:"updateLightnessBackground",value:function(t){var e=this.find(".color-picker-lightness");if(this.options.round){var i=t.toHsl();i.l=50,i=o(i),e.css({background:"linear-gradient(to bottom, #FFFFFF 0%, "+i.toHexString()+" 50%, #000000 100%)"})}else{var s=t.toHsv();s.v=100,s=o(s),e.css({background:"linear-gradient(to bottom, "+s.toHexString()+" 0%, #000000 100%)"})}}},{key:"lightnessDown",value:function(o){o.stopPropagation(),o.preventDefault(),this.lightnessMouse=!0}},{key:"lightnessUp",value:function(o){o.stopPropagation(),o.preventDefault(),this.lightnessMouse=!1}},{key:"lightnessChange",value:function(o){o.stopPropagation(),o.preventDefault();var t=this.find(".color-picker-lightness"),e=this.getEventPos(o);this.lightness=Math.round(100*(1-(e.pageY-this.offset(t).top)/t.prop("offsetHeight"))),this.lightness>100?this.lightness=100:this.lightness<0&&(this.lightness=0)}},{key:"lightnessUpdate",value:function(){void 0!==this.lightness&&(this.lightnessPos=100-this.lightness,this.lightnessPos<0?this.lightnessPos=0:this.lightnessPos>100&&(this.lightnessPos=100),this.lightnessPosUpdate(),this.update())}},{key:"opacityDown",value:function(o){o.stopPropagation(),o.preventDefault(),this.opacityMouse=!0}},{key:"opacityUp",value:function(o){o.stopPropagation(),o.preventDefault(),this.opacityMouse=!1}},{key:"opacityChange",value:function(o){o.stopPropagation(),o.preventDefault();var t=this.find(".color-picker-opacity"),e=this.getEventPos(o);this.opacity=100*(1-(e.pageY-this.offset(t).top)/t.prop("offsetHeight")),this.opacity>100?this.opacity=100:this.opacity<0&&(this.opacity=0)}},{key:"opacityUpdate",value:function(){void 0!==this.opacity&&(this.opacityPos=100*(1-this.opacity/100),this.opacityPos<0?this.opacityPos=0:this.opacityPos>100&&(this.opacityPos=100),this.opacityPosUpdate(),this.update())}},{key:"colorDown",value:function(o){o.stopPropagation(),o.preventDefault(),this.colorMouse=!0}},{key:"colorUp",value:function(o){o.stopPropagation(),o.preventDefault(),this.colorMouse=!1}},{key:"colorChange",value:function(o){o.stopPropagation(),o.preventDefault();var t=this.find(".color-picker-grid-inner"),e=this.getEventPos(o),i=this.offset(t);if(this.options.round){var s=2*(e.pageX-i.left)/t.prop("offsetWidth")-1,n=-(2*(e.pageY-i.top)/t.prop("offsetHeight"))+1,r=Math.atan2(n,s),l=Math.round(57.29577951308233*r);l<0&&(l+=360),this.hue=l;var a=Math.sqrt(s*s+n*n);a>1?a=1:a<0&&(a=0),this.saturation=100*a,void 0===this.lightness&&(this.lightness=50)}else this.saturation=(e.pageX-i.left)/t.prop("offsetWidth")*100,this.lightness=100*(1-(e.pageY-i.top)/t.prop("offsetHeight")),this.saturation>100?this.saturation=100:this.saturation<0&&(this.saturation=0),this.lightness>100?this.lightness=100:this.lightness<0&&(this.lightness=0)}},{key:"getRoundPos",value:function(){var o=.01745329251994*this.hue,t=Math.cos(o)*this.saturation,e=-Math.sin(o)*this.saturation;this.xPos=.5*(t+100),this.yPos=.5*(e+100);var i=50,s=Math.pow(i-this.xPos,2)+Math.pow(i-this.yPos,2),n=Math.pow(i,2);if(s>n){var r=Math.atan2(this.yPos-i,this.xPos-i);this.xPos=Math.cos(r)*i+i,this.yPos=Math.sin(r)*i+i}}},{key:"updateRoundPos",value:function(){var o=this;this.$timeout(function(){var t=o.$element[0].querySelector(".color-picker-grid"),e=angular.element(o.$element[0].querySelector(".color-picker-grid .color-picker-picker")),i=t.getBoundingClientRect();e.css({left:i.width*o.xPos/100+"px",top:i.height*o.yPos/100+"px"})})}},{key:"getEventPos",value:function(o){if(0===o.type.search("touch")){if(o.originalEvent&&o.originalEvent.changedTouches)return o.originalEvent.changedTouches[0];if(o.changedTouches)return o.changedTouches[0]}return o}},{key:"eventApiDispatch",value:function(o,t){this.eventApi&&"function"==typeof this.eventApi[o]&&(t||(t=[]),t.unshift(this.ngModel),t.unshift(this.api),this.eventApi[o].apply(this,t))}},{key:"find",value:function(o){var t,e=this.wrapper?this.wrapper[0]:this.$element[0],i=[];if(!o)return i;if("string"==typeof o){if(1!==(t=e.nodeType)&&9!==t)return[];i=e.querySelectorAll(o)}else e.contains(o)&&i.push(o);return angular.element(i)}},{key:"offset",value:function(o){var t,e,i,s,n=o[0];if(n)return n.getClientRects().length?(i=n.getBoundingClientRect(),i.width||i.height?(s=n.ownerDocument,e=null!==s&&s===s.window?s:9===s.nodeType&&s.defaultView,t=s.documentElement,this.chrome&&this.android_version<6&&screen.width<=768?{top:i.top-t.clientTop,left:i.left-t.clientLeft}:{top:i.top+e.pageYOffset-t.clientTop,left:i.left+e.pageXOffset-t.clientLeft}):i):{top:0,left:0}}}]),t}();r.$inject=["$scope","$element","$document","$timeout","ColorPickerOptions"],e.$inject=["$templateCache"];var l=function o(){return s(this,o),{required:!1,disabled:!1,hue:!0,saturation:!1,lightness:!1,alpha:!0,round:!1,case:"upper",format:"hsl",pos:"bottom left",swatch:!0,swatchOnly:!1,swatchPos:"left",swatchBootstrap:!0,inline:!1,placeholder:"",id:void 0,name:void 0,show:{swatch:!0,focus:!0},hide:{blur:!0,escape:!0,click:!0},close:{show:!1,label:"Close",class:""},clear:{show:!1,label:"Clear",class:""},reset:{show:!1,label:"Reset",class:""}}},a=angular.module("color.picker",[]).service("ColorPickerOptions",l).directive("colorPicker",t).run(e);return a});