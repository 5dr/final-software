(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("lodash")) : factory(root["_"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})((typeof self !== 'undefined' ? self : this), function(__WEBPACK_EXTERNAL_MODULE__2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "https://static.parastorage.com/services/wix-ui-santa/1.23.0/";
/******/
/******/
/******/ 	__webpack_require__.p = typeof window !== 'undefined' && window.__STATICS_BASE_URL__ || __webpack_require__.p;
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 789);
/******/ })
/************************************************************************/
/******/ ({

/***/ 100:
/*!***************************************************!*\
  !*** ./components/TimePicker/propertiesSchema.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  TimePickerProperties: {
    type: 'object',
    allOf: [{
      properties: {
        alignment: {
          type: 'string',
          enum: ['left', 'center', 'right'],
          default: 'left'
        },
        useAmPmFormat: {
          type: 'boolean',
          default: false,
          description: 'Should the display format be 12 hours (or 24)'
        },
        controller: {
          type: 'string',
          enum: ['text', 'stepper', 'dropdown'],
          default: 'text',
          description: 'The display of the time picker'
        },
        initialTime: {
          type: 'string',
          enum: ['none', 'current', 'value', 'placeholder'],
          default: 'current',
          description: 'What the time picker should display on load'
        }
      }
    }, {
      $ref: 'InputProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 101:
/*!*****************************************************!*\
  !*** ./components/AddressInput/propertiesSchema.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  AddressInputProperties: {
    type: 'object',
    allOf: [{
      properties: {
        alignment: {
          type: 'string',
          enum: ['left', 'center', 'right'],
          default: 'left'
        },
        iconVisible: {
          type: 'boolean',
          default: false
        },
        dividerVisible: {
          type: 'boolean',
          default: false
        }
      }
    }, {
      $ref: 'InputProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 102:
/*!*****************************************************!*\
  !*** ./components/RatingsInput/propertiesSchema.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  RatingsInputProperties: {
    type: 'object',
    allOf: [{
      properties: {
        showTitle: {
          type: 'boolean',
          default: true
        },
        showLabels: {
          type: 'boolean',
          default: true
        },
        labelPosition: {
          type: 'string',
          enum: ['top', 'bottom', 'side'],
          default: 'top'
        },
        labelAlignment: {
          type: 'string',
          enum: ['left', 'center', 'right'],
          default: 'center'
        },
        shapeSize: {
          type: 'number',
          minimum: 15,
          maximum: 100,
          default: 24
        },
        shapeSpacing: {
          type: 'number',
          minimum: 1,
          maximum: 50,
          default: 5
        },
        direction: {
          type: 'string',
          enum: ['ltr', 'rtl'],
          default: 'ltr'
        },
        required: {
          type: 'boolean',
          default: false
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 103:
/*!*******************************************************!*\
  !*** ./components/RatingsDisplay/propertiesSchema.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  RatingsDisplayProperties: {
    type: 'object',
    allOf: [{
      properties: {
        showReviewsCount: {
          type: 'boolean',
          default: true
        },
        showRating: {
          type: 'boolean',
          default: true
        },
        noReviewsMode: {
          type: 'string',
          enum: ['nothing', 'emptyIcons', 'placeholderText'],
          default: 'emptyIcons'
        },
        ratingPosition: {
          type: 'string',
          enum: ['before', 'after'],
          default: 'before'
        },
        shapeSize: {
          type: 'number',
          minimum: 15,
          maximum: 100,
          default: 24
        },
        shapeSpacing: {
          type: 'number',
          minimum: 1,
          maximum: 50,
          default: 5
        },
        alignment: {
          type: 'string',
          enum: ['left', 'right', 'center'],
          default: 'left'
        },
        direction: {
          type: 'string',
          enum: ['ltr', 'rtl'],
          default: 'ltr'
        },
        renderSeo: {
          type: 'boolean',
          default: true
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 104:
/*!************************************************!*\
  !*** ./components/Tags/ds/propertiesSchema.js ***!
  \************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  TagsProperties: {
    type: 'object',
    allOf: [{
      properties: {
        alignment: {
          type: 'string',
          enum: ['left', 'center', 'right'],
          default: 'center'
        },
        verticalSpacing: {
          type: 'number',
          default: 20,
          minimum: 0,
          maximum: 50
        },
        horizontalSpacing: {
          type: 'number',
          default: 20,
          minimum: 0,
          maximum: 50
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 105:
/*!****************************************************!*\
  !*** ./components/VideoPlayer/propertiesSchema.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  VideoPlayerProperties: {
    type: 'object',
    allOf: [{
      properties: {
        showVideoTitle: {
          type: 'boolean',
          default: true
        },
        autoplay: {
          type: 'boolean',
          default: false,
          description: 'Autoplay video'
        },
        loop: {
          type: 'boolean',
          default: false,
          description: 'Play video on loop'
        },
        share: {
          type: 'boolean',
          default: true,
          description: 'Allow to share video'
        },
        controlsVisibility: {
          type: 'string',
          enum: ['hover', 'never'],
          default: 'hover'
        }
      }
    }, {
      $ref: 'DefaultProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 122:
/*!***************************************************!*\
  !*** ./legacy/components/RichTextBox/ds/index.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 156);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 94);

var _propertiesSchema2 = _interopRequireDefault(_propertiesSchema);

var _dataSchema = __webpack_require__(/*! ../dataSchema */ 157);

var _dataSchema2 = _interopRequireDefault(_dataSchema);

var _metaData = __webpack_require__(/*! ../metaData */ 158);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var componentType = 'wixui.RichTextBox';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: _dataSchema2.default,
  propertiesSchema: _propertiesSchema2.default
};

/***/ }),

/***/ 123:
/*!****************************************************!*\
  !*** ./legacy/components/ToggleSwitch/ds/index.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 159);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 160);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 95);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 161);

var componentType = 'wixui.ToggleSwitch';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 124:
/*!*******************************************!*\
  !*** ./components/TimePicker/ds/index.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 163);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 164);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataSchema = __webpack_require__(/*! ../dataSchema */ 165);

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 100);
var componentType = 'wixui.TimePicker';

module.exports = {
  componentDefinition: _componentDefinition2.default,
  componentType: componentType,
  dataSchema: dataSchema,
  metaData: _metaData2.default,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 125:
/*!*********************************************!*\
  !*** ./components/AddressInput/ds/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 166);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dataSchema = __webpack_require__(/*! ../dataSchema */ 167);
var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 101);
var componentType = 'wixui.AddressInput';
var metaData = __webpack_require__(/*! ../metaData */ 168);

module.exports = {
  componentDefinition: _componentDefinition2.default,
  componentType: componentType,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema,
  metaData: metaData
};

/***/ }),

/***/ 126:
/*!*********************************************!*\
  !*** ./components/RatingsInput/ds/index.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 169);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 170);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 102);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 171);

var componentType = 'wixui.RatingsInput';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 127:
/*!***********************************************!*\
  !*** ./components/RatingsDisplay/ds/index.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 172);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 173);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 103);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 174);

var componentType = 'wixui.RatingsDisplay';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 128:
/*!*************************************!*\
  !*** ./components/Tags/ds/index.js ***!
  \*************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ./componentDefinition */ 175);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ./metaData */ 176);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ./propertiesSchema */ 104);
var dataSchema = __webpack_require__(/*! ./dataSchema */ 177);

var componentType = 'wixui.Tags';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 129:
/*!********************************************!*\
  !*** ./components/VideoPlayer/ds/index.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 178);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _metaData = __webpack_require__(/*! ../metaData */ 179);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 105);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 180);

var componentType = 'wixui.VideoPlayer';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 156:
/*!**************************************************************!*\
  !*** ./legacy/components/RichTextBox/componentDefinition.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.RichTextBox': {
    skins: ['wixui.skins.RichTextBox'],
    dataTypes: ['RichTextBox'],
    propertyType: 'RichTextBoxProperties',
    nickname: 'richTextBox',
    styles: {
      richtextbox1: 'wixui.skins.RichTextBox'
    }
  }
};

/***/ }),

/***/ 157:
/*!*****************************************************!*\
  !*** ./legacy/components/RichTextBox/dataSchema.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var dataSchema = {
  RichTextBox: {
    type: 'object',
    allOf: [{
      properties: {
        maxLength: {
          type: ['number', 'null'],
          description: 'maximum number of characters allowed'
        }
      }
    }, {
      $ref: 'BaseTextInput'
    }]
  }
};

exports.default = dataSchema;

/***/ }),

/***/ 158:
/*!***************************************************!*\
  !*** ./legacy/components/RichTextBox/metaData.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  disableable: true,
  layoutLimits: {
    minHeight: 100,
    minWidth: 200
  }
};

/***/ }),

/***/ 159:
/*!***************************************************************!*\
  !*** ./legacy/components/ToggleSwitch/componentDefinition.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.ToggleSwitch': {
    skins: ['wixui.skins.ToggleSwitch'],
    dataTypes: ['ToggleSwitch'],
    propertyType: 'ToggleSwitchProperties',
    nickname: 'switch',
    styles: {
      ts1: 'wixui.skins.ToggleSwitch'
    }
  }
};

/***/ }),

/***/ 160:
/*!****************************************************!*\
  !*** ./legacy/components/ToggleSwitch/metaData.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  resizableSides: [],
  layoutLimits: {
    minHeight: 24,
    maxHeight: 128,
    minWidth: 48,
    maxWidth: 256,
    aspectRatio: 2
  },
  disableable: true,
  isRepeatable: true
};

/***/ }),

/***/ 161:
/*!******************************************************!*\
  !*** ./legacy/components/ToggleSwitch/dataSchema.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  ToggleSwitch: {
    type: 'object',
    allOf: [{
      properties: {
        checked: {
          type: 'boolean',
          description: 'The checked status of the input'
        }
      }
    }, {
      $ref: 'BaseTextInput'
    }]
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 163:
/*!******************************************************!*\
  !*** ./components/TimePicker/componentDefinition.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.TimePicker': {
    skins: ['wixui.skins.TimePicker'],
    dataTypes: ['TimePickerData'],
    propertyType: 'TimePickerProperties',
    nickname: 'timePicker',
    styles: {
      tp1: 'wixui.skins.TimePicker'
    }
  }
};

/***/ }),

/***/ 164:
/*!*******************************************!*\
  !*** ./components/TimePicker/metaData.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  layoutLimits: {
    minHeight: 42,
    minWidth: 150
  },
  disableable: true,
  isRepeatable: true
};

/***/ }),

/***/ 165:
/*!*********************************************!*\
  !*** ./components/TimePicker/dataSchema.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  TimePickerData: {
    type: 'object',
    allOf: [{
      properties: {
        placeholder: {
          type: 'string',
          description: 'The value of the placeholder if chosen',
          maxLength: 1000
        },
        step: {
          type: 'number',
          minimum: 1,
          maximum: 60,
          default: 1,
          description: 'Increment step in minutes'
        }
      }
    }, {
      $ref: 'BaseTextInput'
    }]
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 166:
/*!********************************************************!*\
  !*** ./components/AddressInput/componentDefinition.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.AddressInput': {
    skins: ['wixui.skins.AddressInput'],
    dataTypes: ['AddressInput'],
    propertyType: 'AddressInputProperties',
    nickname: 'addressInput',
    styles: {
      ai1: 'wixui.skins.AddressInput'
    }
  }
};

/***/ }),

/***/ 167:
/*!***********************************************!*\
  !*** ./components/AddressInput/dataSchema.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  AddressInput: {
    type: 'object',
    properties: {
      locale: { type: 'string', maxLength: 100 },
      googleMapsApiKey: { type: 'string', maxLength: 400 },
      filter: {
        oneOf: [{
          type: 'null'
        }, {
          type: 'object',
          properties: {
            country: { type: 'string', maxLength: 10 }
          }
        }],
        default: null
      },
      sorting: {
        oneOf: [{
          type: 'null'
        }, {
          type: 'object',
          properties: {
            location: {
              type: 'object',
              properties: {
                lat: { type: 'number' },
                lng: { type: 'number' }
              }
            },
            radius: {
              type: 'number',
              default: 100
            },
            formatted: { type: 'string', maxLength: 10 }
          }
        }],
        default: null
      },
      placeholder: {
        type: 'string',
        description: 'The value of the placeholder if chosen',
        maxLength: 1000
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 168:
/*!*********************************************!*\
  !*** ./components/AddressInput/metaData.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var metaData = {
  layoutLimits: {
    minHeight: 40,
    minWidth: 200
  },
  disableable: true
};

module.exports = metaData;

/***/ }),

/***/ 169:
/*!********************************************************!*\
  !*** ./components/RatingsInput/componentDefinition.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.RatingsInput': {
    skins: ['wixui.skins.Rating'],
    dataTypes: ['RatingsInput'],
    propertyType: 'RatingsInputProperties',
    nickname: 'ratingsInput',
    styles: {
      ri1: 'wixui.skins.Rating'
    }
  }
};

/***/ }),

/***/ 170:
/*!*********************************************!*\
  !*** ./components/RatingsInput/metaData.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  defaultMobileProperties: {
    shapeSize: 25,
    shapeSpacing: 5
  },
  isRepeatable: true
};

/***/ }),

/***/ 171:
/*!***********************************************!*\
  !*** ./components/RatingsInput/dataSchema.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  RatingsInput: {
    type: 'object',
    properties: {
      value: {
        type: ['number', 'null'],
        description: 'The rating value currently selected',
        minimum: 0,
        maximum: 5
      },
      titleText: {
        type: 'string',
        description: 'the title before a value is selected',
        maxLength: 300
      },
      labels: {
        type: 'object',
        description: 'contains the labels for the different values. maps 1-5 as keys to strings',
        default: {
          1: 'Bad', 2: 'Fine', 3: 'OK', 4: 'Good', 5: 'Great'
        }
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 172:
/*!**********************************************************!*\
  !*** ./components/RatingsDisplay/componentDefinition.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.RatingsDisplay': {
    skins: ['wixui.skins.Rating'],
    dataTypes: ['RatingsDisplay'],
    propertyType: 'RatingsDisplayProperties',
    nickname: 'ratingsDisplay',
    styles: {
      rd1: 'wixui.skins.Rating'
    }
  }
};

/***/ }),

/***/ 173:
/*!***********************************************!*\
  !*** ./components/RatingsDisplay/metaData.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  defaultMobileProperties: {
    shapeSize: 20,
    shapeSpacing: 5
  },
  isRepeatable: true
};

/***/ }),

/***/ 174:
/*!*************************************************!*\
  !*** ./components/RatingsDisplay/dataSchema.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  RatingsDisplay: {
    type: 'object',
    properties: {
      rating: {
        type: 'number',
        description: 'The rating displayed by the component',
        minimum: 1,
        maximum: 5
      },
      svgId: {
        type: 'string',
        maxLength: 100
      },
      numRatings: {
        type: 'number',
        description: 'The amount of ratings the rating is based on',
        minimum: 0
      },
      reviewsCountLabel: {
        type: 'string',
        default: 'Reviews',
        maxLength: 400,
        description: 'Text that describes the numRatings value'
      },
      noReviewsPlaceholder: {
        type: 'string',
        default: 'Be the first to rate this item',
        maxLength: 1000,
        description: 'Placeholder text when there aren\'t any reviews'
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 175:
/*!***************************************************!*\
  !*** ./components/Tags/ds/componentDefinition.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.Tags': {
    skins: ['wixui.skins.Tags'],
    dataTypes: ['Tags'],
    propertyType: 'TagsProperties',
    nickname: 'tags',
    styles: {
      tags1: 'wixui.skins.Tags'
    }
  }
};

/***/ }),

/***/ 176:
/*!****************************************!*\
  !*** ./components/Tags/ds/metaData.js ***!
  \****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  layoutLimits: {
    minWidth: 60
  }
};

/***/ }),

/***/ 177:
/*!******************************************!*\
  !*** ./components/Tags/ds/dataSchema.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  Tags: {
    type: 'object',
    properties: {
      items: {
        type: ['null', 'array'],
        pseudoType: ['refList']
      }
    }
  },
  TagItem: {
    type: 'object',
    properties: {
      label: {
        type: 'string',
        maxLength: 400
      },
      link: {
        type: ['string', 'null'],
        pseudoType: ['ref']
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 178:
/*!*******************************************************!*\
  !*** ./components/VideoPlayer/componentDefinition.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.VideoPlayer': {
    skins: ['wixui.skins.VideoPlayer'],
    dataTypes: ['VideoPlayer'],
    propertyType: 'VideoPlayerProperties',
    nickname: 'videoPlayer',
    styles: {
      vp1: 'wixui.skins.VideoPlayer'
    }
  }
};

/***/ }),

/***/ 179:
/*!********************************************!*\
  !*** ./components/VideoPlayer/metaData.js ***!
  \********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  layoutLimits: {
    minHeight: 180,
    minWidth: 200
  }
};

/***/ }),

/***/ 180:
/*!**********************************************!*\
  !*** ./components/VideoPlayer/dataSchema.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  VideoPlayer: {
    type: 'object',
    properties: {
      videoRef: {
        type: ['string', 'null'],
        pseudoType: ['ref']
      },
      videoUrl: {
        type: ['string', 'null'],
        default: null
      },
      videoTitle: {
        type: 'string',
        default: '',
        maxLength: 255
      },
      description: {
        type: 'string',
        default: '',
        maxLength: 1000,
        description: 'Video Description'
      },
      logoRef: {
        type: ['string', 'null'],
        pseudoType: ['ref']
      }
    }
  }
};

module.exports = dataSchema;

/***/ }),

/***/ 2:
/*!****************************************************************************************************!*\
  !*** external {"amd":"lodash","umd":"lodash","commonjs":"lodash","commonjs2":"lodash","root":"_"} ***!
  \****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 77:
/*!***********************************************!*\
  !*** ./components/Slider/propertiesSchema.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  SliderProperties: {
    type: 'object',
    allOf: [{
      properties: {
        trackSize: {
          type: 'number',
          default: 25
        },
        orientation: {
          type: 'string',
          enum: ['horizontal', 'vertical'],
          default: 'horizontal'
        },
        thumbShape: {
          type: 'string',
          enum: ['circle', 'square', 'rectangle', 'bar'],
          default: 'circle'
        },
        tickMarksShape: {
          type: 'string',
          enum: ['none', 'line', 'dot'],
          default: 'line'
        },
        tooltipVisibility: {
          type: 'string',
          enum: ['none', 'hover', 'always'],
          default: 'hover'
        },
        tooltipPosition: {
          type: 'string',
          enum: ['normal', 'across'],
          default: 'normal'
        },
        tooltipPrefix: {
          type: 'string',
          maxLength: 30
        },
        tooltipSuffix: {
          type: 'string',
          maxLength: 30
        },
        tickMarksPosition: {
          type: 'string',
          enum: ['normal', 'middle', 'across'],
          default: 'normal'
        },
        dir: {
          type: 'string',
          enum: ['ltr', 'rtl'],
          default: 'ltr'
        }
      }
    }, {
      $ref: 'InputProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 789:
/*!*******************************!*\
  !*** ./componentsMetaData.js ***!
  \*******************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _richTextBox$componen;

var _ds = __webpack_require__(/*! ./legacy/components/RichTextBox/ds */ 122);

var _ds2 = _interopRequireDefault(_ds);

var _ds3 = __webpack_require__(/*! ./legacy/components/ToggleSwitch/ds */ 123);

var _ds4 = _interopRequireDefault(_ds3);

var _ds5 = __webpack_require__(/*! ./components/Slider/ds */ 85);

var _ds6 = _interopRequireDefault(_ds5);

var _ds7 = __webpack_require__(/*! ./components/TimePicker/ds */ 124);

var _ds8 = _interopRequireDefault(_ds7);

var _ds9 = __webpack_require__(/*! ./components/RatingsInput/ds */ 126);

var _ds10 = _interopRequireDefault(_ds9);

var _ds11 = __webpack_require__(/*! ./components/RatingsDisplay/ds */ 127);

var _ds12 = _interopRequireDefault(_ds11);

var _ds13 = __webpack_require__(/*! ./components/Tags/ds */ 128);

var _ds14 = _interopRequireDefault(_ds13);

var _ds15 = __webpack_require__(/*! ./components/VideoPlayer/ds */ 129);

var _ds16 = _interopRequireDefault(_ds15);

var _ds17 = __webpack_require__(/*! ./components/AddressInput/ds */ 125);

var _ds18 = _interopRequireDefault(_ds17);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (_richTextBox$componen = {}, _defineProperty(_richTextBox$componen, _ds2.default.componentType, _ds2.default.metaData), _defineProperty(_richTextBox$componen, _ds4.default.componentType, _ds4.default.metaData), _defineProperty(_richTextBox$componen, _ds6.default.componentType, _ds6.default.metaData), _defineProperty(_richTextBox$componen, _ds8.default.componentType, _ds8.default.metaData), _defineProperty(_richTextBox$componen, _ds10.default.componentType, _ds10.default.metaData), _defineProperty(_richTextBox$componen, _ds12.default.componentType, _ds12.default.metaData), _defineProperty(_richTextBox$componen, _ds16.default.componentType, _ds16.default.metaData), _defineProperty(_richTextBox$componen, _ds18.default.componentType, _ds18.default.metaData), _defineProperty(_richTextBox$componen, _ds14.default.componentType, _ds14.default.metaData), _richTextBox$componen);

/***/ }),

/***/ 85:
/*!***************************************!*\
  !*** ./components/Slider/ds/index.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _componentDefinition = __webpack_require__(/*! ../componentDefinition */ 96);

var _componentDefinition2 = _interopRequireDefault(_componentDefinition);

var _hooks = __webpack_require__(/*! ../hooks */ 97);

var _hooks2 = _interopRequireDefault(_hooks);

var _metaData = __webpack_require__(/*! ../metaData */ 98);

var _metaData2 = _interopRequireDefault(_metaData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var propertiesSchema = __webpack_require__(/*! ../propertiesSchema */ 77);
var dataSchema = __webpack_require__(/*! ../dataSchema */ 99);

var componentType = 'wixui.Slider';

module.exports = {
  componentType: componentType,
  componentDefinition: _componentDefinition2.default,
  hooks: _hooks2.default,
  metaData: _metaData2.default,
  dataSchema: dataSchema,
  propertiesSchema: propertiesSchema
};

/***/ }),

/***/ 94:
/*!***********************************************************!*\
  !*** ./legacy/components/RichTextBox/propertiesSchema.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var propertiesSchema = {
  RichTextBoxProperties: {
    type: 'object',
    allOf: [{
      properties: {
        textAlignment: {
          type: 'string',
          default: 'left',
          enum: ['left', 'right', 'center'],
          description: 'the text alignment',
          maxLength: 100
        },
        textPadding: {
          type: 'number',
          default: 18,
          minimum: 0,
          maximum: 100,
          description: 'the value of the textPadding'
        },
        toolbarPosition: {
          type: 'string',
          default: 'top',
          enum: ['top', 'bottom', 'inline'],
          description: 'the location of the toolbar',
          maxLength: 20
        },
        placeholder: {
          type: 'string',
          description: 'the placeholder',
          default: '',
          maxLength: 4000
        },
        defaultTextType: {
          type: 'string',
          default: 'placeholderText',
          enum: ['none', 'initialText', 'placeholderText', 'placeholderAndInitialText'],
          description: 'the type of the default text for the input',
          maxLength: 100
        },
        allowLinks: {
          type: 'boolean',
          description: 'Are links allowed'
        }
      }
    }, {
      $ref: 'InputProperties'
    }]
  }
};

exports.default = propertiesSchema;

/***/ }),

/***/ 95:
/*!************************************************************!*\
  !*** ./legacy/components/ToggleSwitch/propertiesSchema.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var propertiesSchema = {
  ToggleSwitchProperties: {
    type: 'object',
    allOf: [{
      properties: {
        displayKnobIcons: {
          type: 'boolean'
        },
        trackHeight: {
          type: 'number',
          default: 100
        },
        knobSize: {
          type: 'number',
          default: 90
        },
        alignment: {
          type: 'string',
          enum: ['left', 'right'],
          default: 'left'
        }
      }
    }, {
      $ref: 'InputProperties'
    }]
  }
};

module.exports = propertiesSchema;

/***/ }),

/***/ 96:
/*!**************************************************!*\
  !*** ./components/Slider/componentDefinition.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  'wixui.Slider': {
    skins: ['wixui.skins.Slider'],
    dataTypes: ['Slider'],
    propertyType: 'SliderProperties',
    nickname: 'slider',
    styles: {
      slider1: 'wixui.skins.Slider'
    }
  }
};

/***/ }),

/***/ 97:
/*!************************************!*\
  !*** ./components/Slider/hooks.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = __webpack_require__(/*! lodash */ 2);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function updateOrientationLayout(prevLayout) {
  return _lodash2.default.assign({}, prevLayout, {
    width: prevLayout.height,
    height: prevLayout.width
  });
}

function getTicksSize(tickShape, tickPosition) {
  if (tickPosition === 'middle') {
    return 0;
  }

  switch (tickShape) {
    default:
    case 'line':
      return 22;
    case 'dot':
      return 15;
    case 'none':
      return 0;
  }
}

function shouldShowTicks(data, props) {
  return data.step > 0 && props.tickMarksShape !== 'none';
}

function updateTicksLayout(_ref) {
  var prevLayout = _ref.prevLayout,
      prevProps = _ref.prevProps,
      nextProps = _ref.nextProps,
      prevData = _ref.prevData,
      nextData = _ref.nextData;

  var lastShowTicks = shouldShowTicks(prevData, prevProps);
  var showTicks = shouldShowTicks(nextData, nextProps);
  var lastSize = lastShowTicks ? getTicksSize(prevProps.tickMarksShape, prevProps.tickMarksPosition) : 0;
  var size = showTicks ? getTicksSize(nextProps.tickMarksShape, nextProps.tickMarksPosition) : 0;
  var sizeDiff = size - lastSize;
  var dim = nextProps.orientation === 'horizontal' ? 'height' : 'width';

  return _lodash2.default.assign({}, prevLayout, _defineProperty({}, dim, prevLayout[dim] + sizeDiff));
}

function didOrientationChange(prevProps, nextProps) {
  return nextProps.orientation && prevProps.orientation && nextProps.orientation !== prevProps.orientation;
}

function didTicksChange(prevProps, nextProps, prevData, nextData) {
  var lastShowTicks = shouldShowTicks(prevData, prevProps);
  var nextShowTicks = shouldShowTicks(nextData, nextProps);
  var lastTickMarksShape = prevProps.tickMarksShape;
  var nextTickMarksShape = nextProps.tickMarksShape;
  var lastTickMarksPosition = prevProps.tickMarksPosition;
  var nextTickMarksPosition = nextProps.tickMarksPosition;

  return lastShowTicks !== nextShowTicks || lastTickMarksShape !== nextTickMarksShape || lastTickMarksPosition !== nextTickMarksPosition;
}

var beforeUpdate = function beforeUpdate(_ref2) {
  var compDriver = _ref2.compDriver,
      prevProps = _ref2.prevProps,
      nextProps = _ref2.nextProps,
      prevData = _ref2.prevData,
      nextData = _ref2.nextData;

  var prevLayout = compDriver.layout.get();
  var newLayout = void 0;

  if (didOrientationChange(prevProps, nextProps)) {
    newLayout = updateOrientationLayout(prevLayout);
  } else if (didTicksChange(prevProps, nextProps, prevData, nextData)) {
    newLayout = updateTicksLayout({ prevLayout: prevLayout, prevProps: prevProps, nextProps: nextProps, prevData: prevData, nextData: nextData });
  }

  if (newLayout) {
    compDriver.layout.update(newLayout);
  }
};

var beforeUpdateProperties = function beforeUpdateProperties(compDriver, nextProps) {
  var prevProps = compDriver.properties.get();
  var prevData = compDriver.data.get();
  return beforeUpdate({ compDriver: compDriver, prevProps: prevProps, nextProps: nextProps, prevData: prevData, nextData: prevData });
};

var beforeUpdateData = function beforeUpdateData(compDriver, nextData) {
  var prevProps = compDriver.properties.get();
  var prevData = compDriver.data.get();
  return beforeUpdate({ compDriver: compDriver, prevProps: prevProps, nextProps: prevProps, prevData: prevData, nextData: nextData });
};

var getSize = function getSize(currentLayout, nextLayout) {
  return {
    width: nextLayout.width || currentLayout.width,
    height: nextLayout.height || currentLayout.height
  };
};

var beforeUpdateLayout = function beforeUpdateLayout(compDriver, nextLayout) {
  if (!nextLayout.width && !nextLayout.height) {
    return;
  }

  var currentLayout = compDriver.layout.get();
  var compProperties = compDriver.properties.get();

  var _getSize = getSize(currentLayout, nextLayout),
      width = _getSize.width,
      height = _getSize.height;

  var newLayout = _lodash2.default.cloneDeep(nextLayout);

  if (compProperties.orientation === 'vertical') {
    var minHeight = 4 * width;
    newLayout.height = Math.max(height, minHeight);
  } else if (compProperties.orientation === 'horizontal') {
    var minWidth = 4 * height;
    newLayout.width = Math.max(width, minWidth);
  }

  compDriver.layout.update(newLayout);
};

var hooks = {
  beforeUpdateProperties: beforeUpdateProperties,
  beforeUpdateData: beforeUpdateData,
  beforeUpdateLayout: beforeUpdateLayout
};

exports.default = hooks;

/***/ }),

/***/ 98:
/*!***************************************!*\
  !*** ./components/Slider/metaData.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  rotatable: false,
  isRepeatable: true,
  disableable: true
};

/***/ }),

/***/ 99:
/*!*****************************************!*\
  !*** ./components/Slider/dataSchema.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dataSchema = {
  Slider: {
    type: 'object',
    properties: {
      min: {
        type: 'number',
        default: 0,
        description: 'Minimum value'
      },
      max: {
        type: 'number',
        default: 100,
        description: 'Maximum value'
      },
      value: {
        type: 'number',
        default: 50,
        description: 'Current value'
      },
      step: {
        type: 'number',
        default: 0,
        description: 'Step value'
      },
      stepType: {
        type: 'string',
        default: 'value',
        enum: ['value', 'count'],
        description: 'When set to \'value\', step represents the value of each step. When set to \'count\', step represents the total steps count'
      },
      disabled: {
        type: 'boolean',
        default: false,
        description: 'Determines whether the slider is disabled or not'
      },
      readOnly: {
        type: 'boolean',
        default: false,
        description: 'Determines whether the slider is read-only or not'
      }
    }
  }
};

module.exports = dataSchema;

/***/ })

/******/ });
});
//# sourceMappingURL=componentsMetaData.bundle.js.map