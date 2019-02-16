((typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp_wix_ui_santa"] || []).push([[28],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/*!***********************************************************************!*\
  !*** ../node_modules/@stylable/runtime/cjs/css-runtime-stylesheet.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function create(root, namespace, locals, css, depth, id) {
    var dataNamespace = 'data-' + namespace.toLowerCase() + '-';
    function cssStates(stateMapping) {
        return stateMapping
            ? Object.keys(stateMapping).reduce(function (states, key) {
                var stateValue = stateMapping[key];
                if (stateValue === undefined ||
                    stateValue === null ||
                    stateValue === false) {
                    return states;
                }
                states[dataNamespace + key.toLowerCase()] = stateValue;
                return states;
            }, {})
            : {};
    }
    function get(localName) {
        return locals[localName];
    }
    function mapClasses(className) {
        return className
            .split(/\s+/g)
            .map(function (className) { return get(className) || className; })
            .join(' ');
    }
    locals.$root = root;
    locals.$namespace = namespace;
    locals.$depth = depth;
    locals.$id = id;
    locals.$css = css;
    locals.$get = get;
    locals.$cssStates = cssStates;
    function stylable_runtime_stylesheet(className, states, inheritedAttributes) {
        className = className ? mapClasses(className) : '';
        var base = cssStates(states);
        if (inheritedAttributes) {
            for (var k in inheritedAttributes) {
                if (k.match(/^data-/)) {
                    base[k] = inheritedAttributes[k];
                }
            }
            if (inheritedAttributes.className) {
                className += ' ' + inheritedAttributes.className;
            }
        }
        if (className) {
            base.className = className;
        }
        return base;
    }
    Object.setPrototypeOf(stylable_runtime_stylesheet, locals);
    return stylable_runtime_stylesheet;
}
exports.create = create;
function createTheme(css, depth, id) {
    return { $css: css, $depth: depth, $id: id, $theme: true };
}
exports.createTheme = createTheme;
//# sourceMappingURL=css-runtime-stylesheet.js.map

/***/ }),
/* 4 */
/*!*********************************************************************!*\
  !*** ../node_modules/@stylable/runtime/cjs/css-runtime-renderer.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cached_node_renderer_1 = __webpack_require__(/*! ./cached-node-renderer */ 35);
var keyed_list_renderer_1 = __webpack_require__(/*! ./keyed-list-renderer */ 36);
var RuntimeRenderer = /** @class */ (function () {
    function RuntimeRenderer() {
        var _this = this;
        this.styles = [];
        this.stylesMap = {};
        this.renderer = null;
        this.window = null;
        this.id = null;
        this.update = function () {
            if (_this.renderer) {
                _this.renderer.render(_this.window.document.head, _this.styles);
            }
        };
    }
    RuntimeRenderer.prototype.init = function (_window) {
        if (this.window || !_window) {
            return;
        }
        _window.__stylable_renderer_global_counter =
            _window.__stylable_renderer_global_counter || 0;
        this.id = _window.__stylable_renderer_global_counter++;
        this.window = _window;
        this.renderer = keyed_list_renderer_1.createDOMListRenderer(new cached_node_renderer_1.CacheStyleNodeRenderer({
            attrKey: 'st-id' + (this.id ? '-' + this.id : ''),
            createElement: _window.document.createElement.bind(_window.document)
        }));
        this.update();
    };
    RuntimeRenderer.prototype.onRegister = function () {
        if (this.window) {
            this.window.requestAnimationFrame(this.update);
        }
    };
    RuntimeRenderer.prototype.register = function (stylesheet) {
        var registered = this.stylesMap[stylesheet.$id];
        if (registered) {
            this.removeStyle(registered);
        }
        var i = this.findDepthIndex(stylesheet.$depth);
        this.styles.splice(i + 1, 0, stylesheet);
        this.stylesMap[stylesheet.$id] = stylesheet;
        this.onRegister();
    };
    RuntimeRenderer.prototype.removeStyle = function (stylesheet) {
        var i = this.styles.indexOf(stylesheet);
        if (~i) {
            this.styles.splice(i, 1);
        }
        delete this.stylesMap[stylesheet.$id];
    };
    RuntimeRenderer.prototype.findDepthIndex = function (depth) {
        var index = this.styles.length;
        while (index--) {
            var stylesheet = this.styles[index];
            if (stylesheet.$depth <= depth) {
                return index;
            }
        }
        return index;
    };
    RuntimeRenderer.prototype.getStyles = function (ids, sortIndexes) {
        var _this = this;
        return this.sortStyles(ids.map(function (id) { return _this.stylesMap[id]; }), sortIndexes);
    };
    RuntimeRenderer.prototype.sortStyles = function (styles, sortIndexes) {
        var _this = this;
        if (sortIndexes === void 0) { sortIndexes = false; }
        var s = styles.slice();
        if (sortIndexes) {
            s.sort(function (a, b) {
                return _this.styles.indexOf(a) - _this.styles.indexOf(b);
            });
        }
        s.sort(function (a, b) {
            return a.$depth - b.$depth;
        });
        return s;
    };
    return RuntimeRenderer;
}());
exports.RuntimeRenderer = RuntimeRenderer;
// The $ export is a convention with the webpack plugin if changed both needs a change
exports.$ = new RuntimeRenderer();
//# sourceMappingURL=css-runtime-renderer.js.map

/***/ }),
/* 5 */,
/* 6 */
/*!*******************************************!*\
  !*** ../node_modules/classnames/index.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/*!*********************************************!*\
  !*** ../node_modules/fbjs/lib/invariant.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 11 */
/*!********************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/Dropdown/Dropdown.st.css ***!
  \********************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })
var $stylesheet = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-stylesheet.js */ 3);
var $renderer = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-renderer.js */ 4).$;
exports.default = $stylesheet.create(
  "root",
  "Dropdown1931977232",
  {"root":"Dropdown1931977232--root","dropdownContent":"Dropdown1931977232--dropdownContent"},
  "",
  3,
  /*! ../node_modules/wix-ui-core/dist/src/components/Dropdown/Dropdown.st.css */ 11
);


/***/ }),
/* 12 */,
/* 13 */,
/* 14 */
/*!**************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/Input/Input.st.css ***!
  \**************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })
var $stylesheet = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-stylesheet.js */ 3);
var $renderer = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-renderer.js */ 4).$;
exports.default = $stylesheet.create(
  "root",
  "Input2813270564",
  {"root":"Input2813270564--root","nativeInput":"Input2813270564--nativeInput"},
  "",
  1,
  /*! ../node_modules/wix-ui-core/dist/src/components/Input/Input.st.css */ 14
);


/***/ }),
/* 15 */,
/* 16 */
/*!********************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/DropdownOption/DropdownOption.st.css ***!
  \********************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })
var $stylesheet = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-stylesheet.js */ 3);
var $renderer = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-renderer.js */ 4).$;
exports.default = $stylesheet.create(
  "root",
  "DropdownOption1944475902",
  {"root":"DropdownOption1944475902--root","highlight":"DropdownOption1944475902--highlight","nonHighlight":"DropdownOption1944475902--nonHighlight","hoverBackgroundColor":"lightgrey","selectedBackgroundColor":"grey","selectedHoverBackgroundColor":"dimgrey","disabledBackgroundColor":"white"},
  "",
  1,
  /*! ../node_modules/wix-ui-core/dist/src/components/DropdownOption/DropdownOption.st.css */ 16
);


/***/ }),
/* 17 */
/*!******************************************!*\
  !*** ../node_modules/tslib/tslib.es6.js ***!
  \******************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ../node_modules/wix-ui-core/dist/src/clients/GoogleMaps/google2address/google2address.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/AddressInput/AddressInput.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/Dropdown/Dropdown.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/DropdownContent/DropdownContent.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/DropdownOption/DropdownOption.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/Input/Input.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/InputWithOptions/InputWithOptions.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/Pagination/PageStrip.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/Pagination/Pagination.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/Popover/Popover.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/Popover/index.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/RadioButton/RadioButton.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/Slider/Slider.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/Slider/Thumb.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/Slider/Ticks.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/TimePicker/Tickers.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/TimePicker/TimePicker.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/Video/Video.js (referenced with cjs require), ../node_modules/wix-ui-core/dist/src/components/deprecated/Divider/Divider.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),
/* 18 */
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 19 */
/*!*****************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/deprecated/Divider/Divider.st.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })
var $stylesheet = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-stylesheet.js */ 3);
var $renderer = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-renderer.js */ 4).$;
exports.default = $stylesheet.create(
  "root",
  "Divider1742990411",
  {"root":"Divider1742990411--root","dividerHeight":"1px","dividerBackgroundColor":"black","dividerOpacity":"initial","dividerMarginTop":"initial","dividerMarginBottom":"initial"},
  "",
  1,
  /*! ../node_modules/wix-ui-core/dist/src/components/deprecated/Divider/Divider.st.css */ 19
);


/***/ }),
/* 20 */
/*!******************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/Popover/Popover.st.css ***!
  \******************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })
var $stylesheet = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-stylesheet.js */ 3);
var $renderer = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-renderer.js */ 4).$;
exports.default = $stylesheet.create(
  "root",
  "Popover3036768003",
  {"root":"Popover3036768003--root","popoverAnimation":"Popover3036768003--popoverAnimation","popoverAnimation-enter":"Popover3036768003--popoverAnimation-enter","popoverAnimation-enter-active":"Popover3036768003--popoverAnimation-enter-active","popoverAnimation-exit":"Popover3036768003--popoverAnimation-exit","popoverAnimation-exit-active":"Popover3036768003--popoverAnimation-exit-active","popoverContent":"Popover3036768003--popoverContent","arrow":"Popover3036768003--arrow","popover":"Popover3036768003--popover","withArrow":"Popover3036768003--withArrow","popoverElement":"Popover3036768003--popoverElement","contentBackgroundColor":"white","contentBorderWidth":"1px","contentBorderStyle":"solid","contentBorderColor":"black","contentBorderRadius":"initial","contentPadding":"initial","contentArrowSize":"5px"},
  "",
  1,
  /*! ../node_modules/wix-ui-core/dist/src/components/Popover/Popover.st.css */ 20
);


/***/ }),
/* 21 */
/*!************************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/InputWithOptions/InputWithOptions.st.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })
var $stylesheet = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-stylesheet.js */ 3);
var $renderer = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-renderer.js */ 4).$;
exports.default = $stylesheet.create(
  "root",
  "InputWithOptions1598587634",
  {"root":"InputWithOptions1598587634--root","inputComponent":"InputWithOptions1598587634--inputComponent"},
  "",
  4,
  /*! ../node_modules/wix-ui-core/dist/src/components/InputWithOptions/InputWithOptions.st.css */ 21
);


/***/ }),
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */
/*!**********************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/DropdownContent/DropdownContent.st.css ***!
  \**********************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })
var $stylesheet = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-stylesheet.js */ 3);
var $renderer = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-renderer.js */ 4).$;
exports.default = $stylesheet.create(
  "root",
  "DropdownContent3497163247",
  {"root":"DropdownContent3497163247--root","optionsContainer":"DropdownContent3497163247--optionsContainer","dropdownOption":"DropdownContent3497163247--dropdownOption"},
  "",
  2,
  /*! ../node_modules/wix-ui-core/dist/src/components/DropdownContent/DropdownContent.st.css */ 27
);


/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */
/*!*************************************************!*\
  !*** ../node_modules/webpack/buildin/global.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 34 */,
/* 35 */
/*!*********************************************************************!*\
  !*** ../node_modules/@stylable/runtime/cjs/cached-node-renderer.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var CacheStyleNodeRenderer = /** @class */ (function () {
    function CacheStyleNodeRenderer(options) {
        var _this = this;
        this.options = options;
        this.create = function (stylesheet, key) {
            var node = _this.options.createElement('style');
            node.textContent = stylesheet.$css || '';
            node.setAttribute(_this.options.attrKey, key);
            node.setAttribute('st-depth', stylesheet.$depth + '');
            return node;
        };
        this.hasKey = function (node) { return node.hasAttribute(_this.options.attrKey); };
        this.update = function (stylesheet, node) {
            if (node.textContent !== stylesheet.$css) {
                node.textContent = stylesheet.$css || '';
            }
            return node;
        };
        this.renderKey = function (stylesheet) { return stylesheet.$id; };
    }
    return CacheStyleNodeRenderer;
}());
exports.CacheStyleNodeRenderer = CacheStyleNodeRenderer;
//# sourceMappingURL=cached-node-renderer.js.map

/***/ }),
/* 36 */
/*!********************************************************************!*\
  !*** ../node_modules/@stylable/runtime/cjs/keyed-list-renderer.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function createDOMListRenderer(nodeRenderer) {
    var first;
    var nodes = {};
    var setNode = function (dataItem, node) {
        return (nodes[nodeRenderer.renderKey(dataItem)] = node);
    };
    var renderNode = function (dataItem) {
        var key = nodeRenderer.renderKey(dataItem);
        var node = nodes[key];
        return node
            ? nodeRenderer.update(dataItem, node)
            : setNode(dataItem, nodeRenderer.create(dataItem, key));
    };
    var render = function (container, data) {
        if (data === void 0) { data = []; }
        var node;
        if (data.length) {
            var next = first;
            // tslint:disable-next-line:prefer-for-of
            for (var i = 0; i < data.length; i++) {
                node = renderNode(data[i]);
                if (node !== next) {
                    container.insertBefore(node, next || null);
                }
                else {
                    next = node.nextElementSibling;
                }
            }
            first = nodes[nodeRenderer.renderKey(data[0])];
            while (node.nextElementSibling) {
                if (nodeRenderer.hasKey(node.nextElementSibling)) {
                    container.removeChild(node.nextElementSibling);
                }
                else {
                    break;
                }
            }
        }
        else {
            while (first) {
                var next = first.nextElementSibling;
                container.removeChild(first);
                first = next && nodeRenderer.hasKey(next) ? next : undefined;
            }
        }
    };
    return { render: render, nodes: nodes };
}
exports.createDOMListRenderer = createDOMListRenderer;
//# sourceMappingURL=keyed-list-renderer.js.map

/***/ }),
/* 37 */
/*!***************************************************!*\
  !*** ../node_modules/create-react-class/index.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var React = __webpack_require__(/*! react */ 0);
var factory = __webpack_require__(/*! ./factory */ 38);

if (typeof React === 'undefined') {
  throw Error(
    'create-react-class could not find the React object. If you are using script tags, ' +
      'make sure that React is being loaded before create-react-class.'
  );
}

// Hack to grab NoopUpdateQueue from isomorphic React
var ReactNoopUpdateQueue = new React.Component().updater;

module.exports = factory(
  React.Component,
  React.isValidElement,
  ReactNoopUpdateQueue
);


/***/ }),
/* 38 */
/*!*****************************************************!*\
  !*** ../node_modules/create-react-class/factory.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var _assign = __webpack_require__(/*! object-assign */ 18);

var emptyObject = __webpack_require__(/*! fbjs/lib/emptyObject */ 39);
var _invariant = __webpack_require__(/*! fbjs/lib/invariant */ 10);

if (false) { var warning; }

var MIXINS_KEY = 'mixins';

// Helper function to allow the creation of anonymous functions which do not
// have .name set to the name of the variable being assigned to.
function identity(fn) {
  return fn;
}

var ReactPropTypeLocationNames;
if (false) {} else {
  ReactPropTypeLocationNames = {};
}

function factory(ReactComponent, isValidElement, ReactNoopUpdateQueue) {
  /**
   * Policies that describe methods in `ReactClassInterface`.
   */

  var injectedMixins = [];

  /**
   * Composite components are higher-level components that compose other composite
   * or host components.
   *
   * To create a new type of `ReactClass`, pass a specification of
   * your new class to `React.createClass`. The only requirement of your class
   * specification is that you implement a `render` method.
   *
   *   var MyComponent = React.createClass({
   *     render: function() {
   *       return <div>Hello World</div>;
   *     }
   *   });
   *
   * The class specification supports a specific protocol of methods that have
   * special meaning (e.g. `render`). See `ReactClassInterface` for
   * more the comprehensive protocol. Any other properties and methods in the
   * class specification will be available on the prototype.
   *
   * @interface ReactClassInterface
   * @internal
   */
  var ReactClassInterface = {
    /**
     * An array of Mixin objects to include when defining your component.
     *
     * @type {array}
     * @optional
     */
    mixins: 'DEFINE_MANY',

    /**
     * An object containing properties and methods that should be defined on
     * the component's constructor instead of its prototype (static methods).
     *
     * @type {object}
     * @optional
     */
    statics: 'DEFINE_MANY',

    /**
     * Definition of prop types for this component.
     *
     * @type {object}
     * @optional
     */
    propTypes: 'DEFINE_MANY',

    /**
     * Definition of context types for this component.
     *
     * @type {object}
     * @optional
     */
    contextTypes: 'DEFINE_MANY',

    /**
     * Definition of context types this component sets for its children.
     *
     * @type {object}
     * @optional
     */
    childContextTypes: 'DEFINE_MANY',

    // ==== Definition methods ====

    /**
     * Invoked when the component is mounted. Values in the mapping will be set on
     * `this.props` if that prop is not specified (i.e. using an `in` check).
     *
     * This method is invoked before `getInitialState` and therefore cannot rely
     * on `this.state` or use `this.setState`.
     *
     * @return {object}
     * @optional
     */
    getDefaultProps: 'DEFINE_MANY_MERGED',

    /**
     * Invoked once before the component is mounted. The return value will be used
     * as the initial value of `this.state`.
     *
     *   getInitialState: function() {
     *     return {
     *       isOn: false,
     *       fooBaz: new BazFoo()
     *     }
     *   }
     *
     * @return {object}
     * @optional
     */
    getInitialState: 'DEFINE_MANY_MERGED',

    /**
     * @return {object}
     * @optional
     */
    getChildContext: 'DEFINE_MANY_MERGED',

    /**
     * Uses props from `this.props` and state from `this.state` to render the
     * structure of the component.
     *
     * No guarantees are made about when or how often this method is invoked, so
     * it must not have side effects.
     *
     *   render: function() {
     *     var name = this.props.name;
     *     return <div>Hello, {name}!</div>;
     *   }
     *
     * @return {ReactComponent}
     * @required
     */
    render: 'DEFINE_ONCE',

    // ==== Delegate methods ====

    /**
     * Invoked when the component is initially created and about to be mounted.
     * This may have side effects, but any external subscriptions or data created
     * by this method must be cleaned up in `componentWillUnmount`.
     *
     * @optional
     */
    componentWillMount: 'DEFINE_MANY',

    /**
     * Invoked when the component has been mounted and has a DOM representation.
     * However, there is no guarantee that the DOM node is in the document.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been mounted (initialized and rendered) for the first time.
     *
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidMount: 'DEFINE_MANY',

    /**
     * Invoked before the component receives new props.
     *
     * Use this as an opportunity to react to a prop transition by updating the
     * state using `this.setState`. Current props are accessed via `this.props`.
     *
     *   componentWillReceiveProps: function(nextProps, nextContext) {
     *     this.setState({
     *       likesIncreasing: nextProps.likeCount > this.props.likeCount
     *     });
     *   }
     *
     * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
     * transition may cause a state change, but the opposite is not true. If you
     * need it, you are probably looking for `componentWillUpdate`.
     *
     * @param {object} nextProps
     * @optional
     */
    componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Invoked while deciding if the component should be updated as a result of
     * receiving new props, state and/or context.
     *
     * Use this as an opportunity to `return false` when you're certain that the
     * transition to the new props/state/context will not require a component
     * update.
     *
     *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
     *     return !equal(nextProps, this.props) ||
     *       !equal(nextState, this.state) ||
     *       !equal(nextContext, this.context);
     *   }
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @return {boolean} True if the component should update.
     * @optional
     */
    shouldComponentUpdate: 'DEFINE_ONCE',

    /**
     * Invoked when the component is about to update due to a transition from
     * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
     * and `nextContext`.
     *
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * NOTE: You **cannot** use `this.setState()` in this method.
     *
     * @param {object} nextProps
     * @param {?object} nextState
     * @param {?object} nextContext
     * @param {ReactReconcileTransaction} transaction
     * @optional
     */
    componentWillUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component's DOM representation has been updated.
     *
     * Use this as an opportunity to operate on the DOM when the component has
     * been updated.
     *
     * @param {object} prevProps
     * @param {?object} prevState
     * @param {?object} prevContext
     * @param {DOMElement} rootNode DOM element representing the component.
     * @optional
     */
    componentDidUpdate: 'DEFINE_MANY',

    /**
     * Invoked when the component is about to be removed from its parent and have
     * its DOM representation destroyed.
     *
     * Use this as an opportunity to deallocate any external resources.
     *
     * NOTE: There is no `componentDidUnmount` since your component will have been
     * destroyed by that point.
     *
     * @optional
     */
    componentWillUnmount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillMount`.
     *
     * @optional
     */
    UNSAFE_componentWillMount: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillReceiveProps`.
     *
     * @optional
     */
    UNSAFE_componentWillReceiveProps: 'DEFINE_MANY',

    /**
     * Replacement for (deprecated) `componentWillUpdate`.
     *
     * @optional
     */
    UNSAFE_componentWillUpdate: 'DEFINE_MANY',

    // ==== Advanced methods ====

    /**
     * Updates the component's currently mounted DOM representation.
     *
     * By default, this implements React's rendering and reconciliation algorithm.
     * Sophisticated clients may wish to override this.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     * @overridable
     */
    updateComponent: 'OVERRIDE_BASE'
  };

  /**
   * Similar to ReactClassInterface but for static methods.
   */
  var ReactClassStaticInterface = {
    /**
     * This method is invoked after a component is instantiated and when it
     * receives new props. Return an object to update state in response to
     * prop changes. Return null to indicate no change to state.
     *
     * If an object is returned, its keys will be merged into the existing state.
     *
     * @return {object || null}
     * @optional
     */
    getDerivedStateFromProps: 'DEFINE_MANY_MERGED'
  };

  /**
   * Mapping from class specification keys to special processing functions.
   *
   * Although these are declared like instance properties in the specification
   * when defining classes using `React.createClass`, they are actually static
   * and are accessible on the constructor instead of the prototype. Despite
   * being static, they must be defined outside of the "statics" key under
   * which all other static methods are defined.
   */
  var RESERVED_SPEC_KEYS = {
    displayName: function(Constructor, displayName) {
      Constructor.displayName = displayName;
    },
    mixins: function(Constructor, mixins) {
      if (mixins) {
        for (var i = 0; i < mixins.length; i++) {
          mixSpecIntoComponent(Constructor, mixins[i]);
        }
      }
    },
    childContextTypes: function(Constructor, childContextTypes) {
      if (false) {}
      Constructor.childContextTypes = _assign(
        {},
        Constructor.childContextTypes,
        childContextTypes
      );
    },
    contextTypes: function(Constructor, contextTypes) {
      if (false) {}
      Constructor.contextTypes = _assign(
        {},
        Constructor.contextTypes,
        contextTypes
      );
    },
    /**
     * Special case getDefaultProps which should move into statics but requires
     * automatic merging.
     */
    getDefaultProps: function(Constructor, getDefaultProps) {
      if (Constructor.getDefaultProps) {
        Constructor.getDefaultProps = createMergedResultFunction(
          Constructor.getDefaultProps,
          getDefaultProps
        );
      } else {
        Constructor.getDefaultProps = getDefaultProps;
      }
    },
    propTypes: function(Constructor, propTypes) {
      if (false) {}
      Constructor.propTypes = _assign({}, Constructor.propTypes, propTypes);
    },
    statics: function(Constructor, statics) {
      mixStaticSpecIntoComponent(Constructor, statics);
    },
    autobind: function() {}
  };

  function validateTypeDef(Constructor, typeDef, location) {
    for (var propName in typeDef) {
      if (typeDef.hasOwnProperty(propName)) {
        // use a warning instead of an _invariant so components
        // don't show up in prod but only in __DEV__
        if (false) {}
      }
    }
  }

  function validateMethodOverride(isAlreadyDefined, name) {
    var specPolicy = ReactClassInterface.hasOwnProperty(name)
      ? ReactClassInterface[name]
      : null;

    // Disallow overriding of base class methods unless explicitly allowed.
    if (ReactClassMixin.hasOwnProperty(name)) {
      _invariant(
        specPolicy === 'OVERRIDE_BASE',
        'ReactClassInterface: You are attempting to override ' +
          '`%s` from your class specification. Ensure that your method names ' +
          'do not overlap with React methods.',
        name
      );
    }

    // Disallow defining methods more than once unless explicitly allowed.
    if (isAlreadyDefined) {
      _invariant(
        specPolicy === 'DEFINE_MANY' || specPolicy === 'DEFINE_MANY_MERGED',
        'ReactClassInterface: You are attempting to define ' +
          '`%s` on your component more than once. This conflict may be due ' +
          'to a mixin.',
        name
      );
    }
  }

  /**
   * Mixin helper which handles policy validation and reserved
   * specification keys when building React classes.
   */
  function mixSpecIntoComponent(Constructor, spec) {
    if (!spec) {
      if (false) { var isMixinValid, typeofSpec; }

      return;
    }

    _invariant(
      typeof spec !== 'function',
      "ReactClass: You're attempting to " +
        'use a component class or function as a mixin. Instead, just use a ' +
        'regular object.'
    );
    _invariant(
      !isValidElement(spec),
      "ReactClass: You're attempting to " +
        'use a component as a mixin. Instead, just use a regular object.'
    );

    var proto = Constructor.prototype;
    var autoBindPairs = proto.__reactAutoBindPairs;

    // By handling mixins before any other properties, we ensure the same
    // chaining order is applied to methods with DEFINE_MANY policy, whether
    // mixins are listed before or after these methods in the spec.
    if (spec.hasOwnProperty(MIXINS_KEY)) {
      RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
    }

    for (var name in spec) {
      if (!spec.hasOwnProperty(name)) {
        continue;
      }

      if (name === MIXINS_KEY) {
        // We have already handled mixins in a special case above.
        continue;
      }

      var property = spec[name];
      var isAlreadyDefined = proto.hasOwnProperty(name);
      validateMethodOverride(isAlreadyDefined, name);

      if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
        RESERVED_SPEC_KEYS[name](Constructor, property);
      } else {
        // Setup methods on prototype:
        // The following member methods should not be automatically bound:
        // 1. Expected ReactClass methods (in the "interface").
        // 2. Overridden methods (that were mixed in).
        var isReactClassMethod = ReactClassInterface.hasOwnProperty(name);
        var isFunction = typeof property === 'function';
        var shouldAutoBind =
          isFunction &&
          !isReactClassMethod &&
          !isAlreadyDefined &&
          spec.autobind !== false;

        if (shouldAutoBind) {
          autoBindPairs.push(name, property);
          proto[name] = property;
        } else {
          if (isAlreadyDefined) {
            var specPolicy = ReactClassInterface[name];

            // These cases should already be caught by validateMethodOverride.
            _invariant(
              isReactClassMethod &&
                (specPolicy === 'DEFINE_MANY_MERGED' ||
                  specPolicy === 'DEFINE_MANY'),
              'ReactClass: Unexpected spec policy %s for key %s ' +
                'when mixing in component specs.',
              specPolicy,
              name
            );

            // For methods which are defined more than once, call the existing
            // methods before calling the new property, merging if appropriate.
            if (specPolicy === 'DEFINE_MANY_MERGED') {
              proto[name] = createMergedResultFunction(proto[name], property);
            } else if (specPolicy === 'DEFINE_MANY') {
              proto[name] = createChainedFunction(proto[name], property);
            }
          } else {
            proto[name] = property;
            if (false) {}
          }
        }
      }
    }
  }

  function mixStaticSpecIntoComponent(Constructor, statics) {
    if (!statics) {
      return;
    }

    for (var name in statics) {
      var property = statics[name];
      if (!statics.hasOwnProperty(name)) {
        continue;
      }

      var isReserved = name in RESERVED_SPEC_KEYS;
      _invariant(
        !isReserved,
        'ReactClass: You are attempting to define a reserved ' +
          'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
          'as an instance property instead; it will still be accessible on the ' +
          'constructor.',
        name
      );

      var isAlreadyDefined = name in Constructor;
      if (isAlreadyDefined) {
        var specPolicy = ReactClassStaticInterface.hasOwnProperty(name)
          ? ReactClassStaticInterface[name]
          : null;

        _invariant(
          specPolicy === 'DEFINE_MANY_MERGED',
          'ReactClass: You are attempting to define ' +
            '`%s` on your component more than once. This conflict may be ' +
            'due to a mixin.',
          name
        );

        Constructor[name] = createMergedResultFunction(Constructor[name], property);

        return;
      }

      Constructor[name] = property;
    }
  }

  /**
   * Merge two objects, but throw if both contain the same key.
   *
   * @param {object} one The first object, which is mutated.
   * @param {object} two The second object
   * @return {object} one after it has been mutated to contain everything in two.
   */
  function mergeIntoWithNoDuplicateKeys(one, two) {
    _invariant(
      one && two && typeof one === 'object' && typeof two === 'object',
      'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'
    );

    for (var key in two) {
      if (two.hasOwnProperty(key)) {
        _invariant(
          one[key] === undefined,
          'mergeIntoWithNoDuplicateKeys(): ' +
            'Tried to merge two objects with the same key: `%s`. This conflict ' +
            'may be due to a mixin; in particular, this may be caused by two ' +
            'getInitialState() or getDefaultProps() methods returning objects ' +
            'with clashing keys.',
          key
        );
        one[key] = two[key];
      }
    }
    return one;
  }

  /**
   * Creates a function that invokes two functions and merges their return values.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createMergedResultFunction(one, two) {
    return function mergedResult() {
      var a = one.apply(this, arguments);
      var b = two.apply(this, arguments);
      if (a == null) {
        return b;
      } else if (b == null) {
        return a;
      }
      var c = {};
      mergeIntoWithNoDuplicateKeys(c, a);
      mergeIntoWithNoDuplicateKeys(c, b);
      return c;
    };
  }

  /**
   * Creates a function that invokes two functions and ignores their return vales.
   *
   * @param {function} one Function to invoke first.
   * @param {function} two Function to invoke second.
   * @return {function} Function that invokes the two argument functions.
   * @private
   */
  function createChainedFunction(one, two) {
    return function chainedFunction() {
      one.apply(this, arguments);
      two.apply(this, arguments);
    };
  }

  /**
   * Binds a method to the component.
   *
   * @param {object} component Component whose method is going to be bound.
   * @param {function} method Method to be bound.
   * @return {function} The bound method.
   */
  function bindAutoBindMethod(component, method) {
    var boundMethod = method.bind(component);
    if (false) { var _bind, componentName; }
    return boundMethod;
  }

  /**
   * Binds all auto-bound methods in a component.
   *
   * @param {object} component Component whose method is going to be bound.
   */
  function bindAutoBindMethods(component) {
    var pairs = component.__reactAutoBindPairs;
    for (var i = 0; i < pairs.length; i += 2) {
      var autoBindKey = pairs[i];
      var method = pairs[i + 1];
      component[autoBindKey] = bindAutoBindMethod(component, method);
    }
  }

  var IsMountedPreMixin = {
    componentDidMount: function() {
      this.__isMounted = true;
    }
  };

  var IsMountedPostMixin = {
    componentWillUnmount: function() {
      this.__isMounted = false;
    }
  };

  /**
   * Add more to the ReactClass base class. These are all legacy features and
   * therefore not already part of the modern ReactComponent.
   */
  var ReactClassMixin = {
    /**
     * TODO: This will be deprecated because state should always keep a consistent
     * type signature and the only use case for this, is to avoid that.
     */
    replaceState: function(newState, callback) {
      this.updater.enqueueReplaceState(this, newState, callback);
    },

    /**
     * Checks whether or not this composite component is mounted.
     * @return {boolean} True if mounted, false otherwise.
     * @protected
     * @final
     */
    isMounted: function() {
      if (false) {}
      return !!this.__isMounted;
    }
  };

  var ReactClassComponent = function() {};
  _assign(
    ReactClassComponent.prototype,
    ReactComponent.prototype,
    ReactClassMixin
  );

  /**
   * Creates a composite component class given a class specification.
   * See https://facebook.github.io/react/docs/top-level-api.html#react.createclass
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  function createClass(spec) {
    // To keep our warnings more understandable, we'll use a little hack here to
    // ensure that Constructor.name !== 'Constructor'. This makes sure we don't
    // unnecessarily identify a class without displayName as 'Constructor'.
    var Constructor = identity(function(props, context, updater) {
      // This constructor gets overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted.

      if (false) {}

      // Wire up auto-binding
      if (this.__reactAutoBindPairs.length) {
        bindAutoBindMethods(this);
      }

      this.props = props;
      this.context = context;
      this.refs = emptyObject;
      this.updater = updater || ReactNoopUpdateQueue;

      this.state = null;

      // ReactClasses doesn't have constructors. Instead, they use the
      // getInitialState and componentWillMount methods for initialization.

      var initialState = this.getInitialState ? this.getInitialState() : null;
      if (false) {}
      _invariant(
        typeof initialState === 'object' && !Array.isArray(initialState),
        '%s.getInitialState(): must return an object or null',
        Constructor.displayName || 'ReactCompositeComponent'
      );

      this.state = initialState;
    });
    Constructor.prototype = new ReactClassComponent();
    Constructor.prototype.constructor = Constructor;
    Constructor.prototype.__reactAutoBindPairs = [];

    injectedMixins.forEach(mixSpecIntoComponent.bind(null, Constructor));

    mixSpecIntoComponent(Constructor, IsMountedPreMixin);
    mixSpecIntoComponent(Constructor, spec);
    mixSpecIntoComponent(Constructor, IsMountedPostMixin);

    // Initialize the defaultProps property after all mixins have been merged.
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    if (false) {}

    _invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    );

    if (false) {}

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactClassInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    return Constructor;
  }

  return createClass;
}

module.exports = factory;


/***/ }),
/* 39 */
/*!***********************************************!*\
  !*** ../node_modules/fbjs/lib/emptyObject.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyObject = {};

if (false) {}

module.exports = emptyObject;

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */
/*!****************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/AddressInput/AddressInput.st.css ***!
  \****************************************************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })
var $stylesheet = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-stylesheet.js */ 3);
var $renderer = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-renderer.js */ 4).$;
exports.default = $stylesheet.create(
  "root",
  "AddressInput2819285371",
  {"root":"AddressInput2819285371--root","option":"AddressInput2819285371--option","iconWrapper":"AddressInput2819285371--iconWrapper","icon":"AddressInput2819285371--icon","optionContent":"AddressInput2819285371--optionContent"},
  "",
  5,
  /*! ../node_modules/wix-ui-core/dist/src/components/AddressInput/AddressInput.st.css */ 48
);


/***/ }),
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */
/*!******************************************!*\
  !*** ../node_modules/warning/browser.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function() {};

if (false) {}

module.exports = warning;


/***/ }),
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */
/*!********************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(/*! ../core-js/object/assign */ 586);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 79 */,
/* 80 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_global.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */
/*!**************************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ 314);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_core.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.0' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 92 */
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_has.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_hide.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ 114);
var createDesc = __webpack_require__(/*! ./_property-desc */ 194);
module.exports = __webpack_require__(/*! ./_descriptors */ 116) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 114 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-dp.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ 141);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 308);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 222);
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ 116) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 115 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_is-object.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 116 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_descriptors.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ 142)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 117 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-iobject.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ 311);
var defined = __webpack_require__(/*! ./_defined */ 223);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 118 */
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_wks.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ 226)('wks');
var uid = __webpack_require__(/*! ./_uid */ 197);
var Symbol = __webpack_require__(/*! ./_global */ 80).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 119 */,
/* 120 */
/*!***************************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 121 */
/*!*********************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/inherits.js ***!
  \*********************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(/*! ../core-js/object/set-prototype-of */ 616);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(/*! ../core-js/object/create */ 620);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(/*! ../helpers/typeof */ 314);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */
/*!*************************************************!*\
  !*** ../node_modules/fbjs/lib/emptyFunction.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 138 */,
/* 139 */,
/* 140 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_export.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 80);
var core = __webpack_require__(/*! ./_core */ 91);
var ctx = __webpack_require__(/*! ./_ctx */ 307);
var hide = __webpack_require__(/*! ./_hide */ 113);
var has = __webpack_require__(/*! ./_has */ 92);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 141 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_an-object.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 115);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 142 */
/*!*********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_fails.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */
/*!**********************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/Input/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Input_1 = __webpack_require__(/*! ./Input */ 154);
exports.Input = Input_1.Input;
//# sourceMappingURL=index.js.map

/***/ }),
/* 154 */
/*!**********************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/Input/Input.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 17);
var React = __webpack_require__(/*! react */ 0);
var Input_st_css_1 = __webpack_require__(/*! ./Input.st.css */ 14);
var Input = /** @class */ (function (_super) {
    tslib_1.__extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            focus: false,
        };
        _this.handleFocus = function (event) {
            _this.setState({ focus: true });
            _this.props.onFocus(event);
        };
        _this.handleBlur = function (event) {
            _this.setState({ focus: false });
            _this.props.onBlur(event);
        };
        return _this;
    }
    Input.prototype.render = function () {
        var _this = this;
        var focus = this.state.focus;
        var _a = this.props, error = _a.error, disabled = _a.disabled, prefix = _a.prefix, suffix = _a.suffix, inlineStyle = _a.style;
        var _b = this.props, errorProp = _b.error, styleProp = _b.style, prefixProps = _b.prefix, suffixProp = _b.suffix, allOtherProps = tslib_1.__rest(_b, ["error", "style", "prefix", "suffix"]);
        return (React.createElement("div", tslib_1.__assign({}, Input_st_css_1.default('root', { disabled: disabled, error: !!error && !disabled, focus: focus }, this.props), { style: inlineStyle }),
            prefix,
            React.createElement("input", tslib_1.__assign({}, allOtherProps, { ref: function (input) { return _this.input = input; }, className: Input_st_css_1.default.nativeInput, onBlur: this.handleBlur, onFocus: this.handleFocus })),
            suffix));
    };
    Input.prototype.focus = function () { this.input.focus(); };
    Input.prototype.blur = function () { this.input.blur(); };
    Input.prototype.select = function () { this.input.select(); };
    Input.prototype.getSelectionStart = function () { return this.input.selectionStart; };
    Input.prototype.getSelectionEnd = function () { return this.input.selectionEnd; };
    Input.prototype.setSelectionRange = function (start, end) { this.input.setSelectionRange(start, end); };
    Input.displayName = 'Input';
    Input.defaultProps = {
        type: 'text',
        onFocus: function () { return null; },
        onBlur: function () { return null; },
        onChange: function () { return null; }
    };
    return Input;
}(React.Component));
exports.Input = Input;
//# sourceMappingURL=Input.js.map

/***/ }),
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_property-desc.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 195 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-keys.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 310);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 227);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 196 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_library.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 197 */
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_uid.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 198 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-pie.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */
/*!****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-primitive.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ 115);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 223 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_defined.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 224 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-integer.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 225 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_shared-key.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ 226)('keys');
var uid = __webpack_require__(/*! ./_uid */ 197);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 226 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_shared.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(/*! ./_core */ 91);
var global = __webpack_require__(/*! ./_global */ 80);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(/*! ./_library */ 196) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 227 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_enum-bug-keys.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 228 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gops.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 229 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iterators.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 230 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-create.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ 141);
var dPs = __webpack_require__(/*! ./_object-dps */ 599);
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ 227);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 225)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ 309)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ 600).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 231 */
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_set-to-string-tag.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ 114).f;
var has = __webpack_require__(/*! ./_has */ 92);
var TAG = __webpack_require__(/*! ./_wks */ 118)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 232 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_wks-ext.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(/*! ./_wks */ 118);


/***/ }),
/* 233 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_wks-define.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ 80);
var core = __webpack_require__(/*! ./_core */ 91);
var LIBRARY = __webpack_require__(/*! ./_library */ 196);
var wksExt = __webpack_require__(/*! ./_wks-ext */ 232);
var defineProperty = __webpack_require__(/*! ./_object-dp */ 114).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 234 */
/*!*******************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/DropdownOption/index.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DropdownOption_1 = __webpack_require__(/*! ./DropdownOption */ 639);
exports.DropdownOption = DropdownOption_1.DropdownOption;
var OptionFactory_1 = __webpack_require__(/*! ./OptionFactory */ 640);
exports.OptionFactory = OptionFactory_1.OptionFactory;
//# sourceMappingURL=index.js.map

/***/ }),
/* 235 */
/*!*****************************************************!*\
  !*** ./components/AddressInput/AddressInput.st.css ***!
  \*****************************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true })
var $stylesheet = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-stylesheet.js */ 3);
var $renderer = __webpack_require__(/*! ../node_modules/@stylable/runtime/cjs/css-runtime-renderer.js */ 4).$;
exports.default = $stylesheet.create(
  "root",
  "AddressInput2783050353",
  {"root":"AddressInput2783050353--root","locationIcon":"AddressInput2783050353--locationIcon","dropdownBackgroundColor":"#ffffff","dropdownLocationIconColor":"#797979","dropdownStrokeColor":"#2cd8d7","dropdownStrokeWidth":"1","dropdownDividerStrokeColor":"#2cd8d7","dropdownDividerStrokeWidth":"1","dropdownBoxShadow":"none","dropdownFont":"font_1","dropdownTextColor":"#000000","dropdownHoverTextColor":"#9b9b9b","dropdownHoverBackgroundColor":"rgba(44, 216, 215, .7)","dropdownOptionPadding":"16px","inputBackgroundColor":"#f7f7f7","inputStrokeColor":"#2cd8d7","inputStrokeWidth":"1","inputBorderRadius":"10px","inputBoxShadow":"0 2px 0 0 #2cd8d7","inputFont":"font_1","inputTextColor":"#000000","inputPlaceholderTextColor":"#000000","inputHoverBackgroundColor":"#fdf3f2","inputHoverStrokeColor":"#2cd8d7","inputHoverStrokeWidth":"1","inputFocusBackgroundColor":"#ffffff","inputFocusStrokeColor":"#2cd8d7","inputFocusStrokeWidth":"1","inputErrorBackgroundColor":"#ffffff","inputErrorStrokeColor":"#d0001b","inputErrorStrokeWidth":"1","inputDisabledBackgroundColor":"#ffffff","inputDisabledStrokeColor":"#9b9b9b","inputDisabledStrokeWidth":"1","inputDisabledTextColor":"#9b9b9b"},
  "",
  7,
  /*! ./components/AddressInput/AddressInput.st.css */ 235
);
exports.default.$skin = {"params":{"dropdownBackgroundColor":"COLOR_ALPHA","dropdownLocationIconColor":"COLOR_ALPHA","dropdownStrokeColor":"BORDER_COLOR_ALPHA","dropdownStrokeWidth":"BORDER_SIZE","dropdownDividerStrokeColor":"BORDER_COLOR_ALPHA","dropdownDividerStrokeWidth":"BORDER_SIZE","dropdownBoxShadow":"BOX_SHADOW","dropdownFont":"FONT","dropdownTextColor":"COLOR","dropdownHoverTextColor":"COLOR","dropdownHoverBackgroundColor":"COLOR_ALPHA","dropdownOptionPadding":"BORDER_SIZE","inputBackgroundColor":"COLOR_ALPHA","inputStrokeColor":"BORDER_COLOR_ALPHA","inputStrokeWidth":"BORDER_SIZE","inputBorderRadius":"BORDER_RADIUS","inputBoxShadow":"BOX_SHADOW","inputFont":"FONT","inputTextColor":"COLOR","inputPlaceholderTextColor":"COLOR","inputHoverBackgroundColor":"COLOR_ALPHA","inputHoverStrokeColor":"BORDER_COLOR_ALPHA","inputHoverStrokeWidth":"BORDER_SIZE","inputFocusBackgroundColor":"COLOR_ALPHA","inputFocusStrokeColor":"BORDER_COLOR_ALPHA","inputFocusStrokeWidth":"BORDER_SIZE","inputErrorBackgroundColor":"COLOR_ALPHA","inputErrorStrokeColor":"BORDER_COLOR_ALPHA","inputErrorStrokeWidth":"BORDER_SIZE","inputDisabledBackgroundColor":"COLOR_ALPHA","inputDisabledStrokeColor":"BORDER_COLOR_ALPHA","inputDisabledStrokeWidth":"BORDER_SIZE","inputDisabledTextColor":"COLOR"},"paramsDefaults":{"dropdownBackgroundColor":"#ffffff","dropdownLocationIconColor":"#797979","dropdownStrokeColor":"#2cd8d7","dropdownStrokeWidth":"1","dropdownDividerStrokeColor":"#2cd8d7","dropdownDividerStrokeWidth":"1","dropdownBoxShadow":"none","dropdownFont":"font_1","dropdownTextColor":"#000000","dropdownHoverTextColor":"#9b9b9b","dropdownHoverBackgroundColor":"rgba(44, 216, 215, .7)","dropdownOptionPadding":"16px","inputBackgroundColor":"#f7f7f7","inputStrokeColor":"#2cd8d7","inputStrokeWidth":"1","inputBorderRadius":"10px","inputBoxShadow":"0 2px 0 0 #2cd8d7","inputFont":"font_1","inputTextColor":"#000000","inputPlaceholderTextColor":"#000000","inputHoverBackgroundColor":"#fdf3f2","inputHoverStrokeColor":"#2cd8d7","inputHoverStrokeWidth":"1","inputFocusBackgroundColor":"#ffffff","inputFocusStrokeColor":"#2cd8d7","inputFocusStrokeWidth":"1","inputErrorBackgroundColor":"#ffffff","inputErrorStrokeColor":"#d0001b","inputErrorStrokeWidth":"1","inputDisabledBackgroundColor":"#ffffff","inputDisabledStrokeColor":"#9b9b9b","inputDisabledStrokeWidth":"1","inputDisabledTextColor":"#9b9b9b"}};
exports.default.$skin.$render = function render_css($id, $params, $functions) {
  return "\n" + $id + " .Divider1742990411--root{}\n" + $id + " .Divider1742990411--root[data-divider1742990411-customdivider]{reset: all}\n" + $id + " .Divider1742990411--root:not([data-divider1742990411-customdivider]){height: 1px;background-color: black;opacity: initial;margin-top: initial;margin-bottom: initial}\n" + $id + " .Divider1742990411--root[data-divider1742990411-vertical]{height: auto;width: 1px}\n" + $id + ".Popover3036768003--root{position: relative;display: inline-block}\n" + $id + " .Popover3036768003--popoverAnimation{}\n" + $id + " .Popover3036768003--popoverAnimation-enter{}\n" + $id + " .Popover3036768003--popoverAnimation-enter.Popover3036768003--popoverAnimation-enter-active{}\n" + $id + " .Popover3036768003--popoverAnimation-exit{}\n" + $id + " .Popover3036768003--popoverAnimation-exit.Popover3036768003--popoverAnimation-exit-active{}\n" + $id + " .Popover3036768003--popoverContent{background-color: white;border-width: 1px;border-style: solid;border-color: black;border-radius: initial;padding: initial}\n" + $id + " .Popover3036768003--arrow{width: 0;height: 0;border-style: solid;position: absolute;margin: 5px}\n" + $id + " .Popover3036768003--popover{z-index: 1000}\n" + $id + " .Popover3036768003--popover[data-placement*=\"right\"].Popover3036768003--withArrow{padding-left: 5px}\n" + $id + " .Popover3036768003--popover[data-placement*=\"right\"].Popover3036768003--withArrow .Popover3036768003--arrow{border-width: 5px 5px 5px 0;left: calc(-1 * 5px);margin-left: 5px;margin-right: 0;border-color: transparent black transparent transparent}\n" + $id + " .Popover3036768003--popover[data-placement*=\"left\"].Popover3036768003--withArrow{padding-right: 5px}\n" + $id + " .Popover3036768003--popover[data-placement*=\"left\"].Popover3036768003--withArrow .Popover3036768003--arrow{border-width: 5px 0 5px 5px;right: calc(-1 * 5px);margin-left: 0;margin-right: 5px;border-color: transparent transparent transparent black}\n" + $id + " .Popover3036768003--popover[data-placement*=\"bottom\"].Popover3036768003--withArrow{padding-top: 5px}\n" + $id + " .Popover3036768003--popover[data-placement*=\"bottom\"].Popover3036768003--withArrow .Popover3036768003--arrow{border-width: 0 5px 5px 5px;top: calc(-1 * 5px);margin-top: 5px;margin-bottom: 0;border-color: transparent transparent black transparent}\n" + $id + " .Popover3036768003--popover[data-placement*=\"top\"].Popover3036768003--withArrow{padding-bottom: 5px}\n" + $id + " .Popover3036768003--popover[data-placement*=\"top\"].Popover3036768003--withArrow .Popover3036768003--arrow{border-width: 5px 5px 0 5px;bottom: calc(-1 * 5px);margin-top: 0;margin-bottom: 5px;border-color: black transparent transparent transparent}\n" + $id + " .Popover3036768003--popoverElement{}\n" + $id + " .Input2813270564--root{position: relative}\n" + $id + " .Input2813270564--nativeInput{}\n" + $id + " .DropdownOption1944475902--root{cursor: pointer}\n" + $id + " .DropdownOption1944475902--root[data-dropdownoption1944475902-hovered]{background-color: lightgrey}\n" + $id + " .DropdownOption1944475902--root[data-dropdownoption1944475902-disabled]{cursor: default;background-color: white}\n" + $id + " .DropdownOption1944475902--root[data-dropdownoption1944475902-selected]{background-color: grey}\n" + $id + " .DropdownOption1944475902--root[data-dropdownoption1944475902-selected][data-dropdownoption1944475902-hovered]{background-color: dimgrey}\n" + $id + " .DropdownOption1944475902--root:not([data-dropdownoption1944475902-selectable]){cursor: default}\n" + $id + " .DropdownOption1944475902--highlight{background-color: transparent;font-weight: bold}\n" + $id + " .DropdownOption1944475902--nonHighlight{}\n" + $id + " .DropdownContent3497163247--root{outline: 0}\n" + $id + " .DropdownContent3497163247--optionsContainer{outline: 0;overflow: auto;max-height: 260px;position: relative}\n" + $id + " .DropdownContent3497163247--dropdownOption{}\n" + $id + ".Dropdown1931977232--root{}\n" + $id + ".Dropdown1931977232--root .Popover3036768003--popover{min-width: 100%}\n" + $id + " .Dropdown1931977232--dropdownContent{}\n" + $id + ".InputWithOptions1598587634--root{}\n" + $id + " .InputWithOptions1598587634--inputComponent{}\n" + $id + ".AddressInput2819285371--root{}\n" + $id + " .AddressInput2819285371--option{display: flex}\n" + $id + " .AddressInput2819285371--iconWrapper{display: flex;align-items: center;padding: 0 6px}\n" + $id + " .AddressInput2819285371--icon{}\n" + $id + " .AddressInput2819285371--optionContent{flex: 1}\n" + $id + ".AddressInput2783050353--root{width: 100%;height: 100%}\n" + $id + ".AddressInput2783050353--root[data-addressinput2783050353-alignment=\"left\"] .InputWithOptions1598587634--inputComponent .Input2813270564--nativeInput, " + $id + ".AddressInput2783050353--root[data-addressinput2783050353-alignment=\"left\"] .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption{text-align: left}\n" + $id + ".AddressInput2783050353--root[data-addressinput2783050353-alignment=\"right\"] .InputWithOptions1598587634--inputComponent .Input2813270564--nativeInput, " + $id + ".AddressInput2783050353--root[data-addressinput2783050353-alignment=\"right\"] .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption{text-align: right}\n" + $id + ".AddressInput2783050353--root[data-addressinput2783050353-alignment=\"center\"] .InputWithOptions1598587634--inputComponent .Input2813270564--nativeInput, " + $id + ".AddressInput2783050353--root[data-addressinput2783050353-alignment=\"center\"] .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption{text-align: center}\n" + $id + ".AddressInput2783050353--root [data-hook=\"popover-element\"]{width: 100%;height: 100%}\n" + $id + ".AddressInput2783050353--root [data-hook=\"popover-content\"]{border: none;width: 100%}\n" + $id + ".AddressInput2783050353--root .InputWithOptions1598587634--inputComponent{height: 100%}\n" + $id + ".AddressInput2783050353--root .InputWithOptions1598587634--inputComponent .Input2813270564--nativeInput{width: 100%;height: 100%;box-sizing: border-box;background-color: " + $params["inputBackgroundColor"] + ";border-color: " + $params["inputStrokeColor"] + ";border-width: " + $params["inputStrokeWidth"] + ";border-style: solid;box-shadow: " + $params["inputBoxShadow"] + ";font: " + $params["inputFont"] + ";color: " + $params["inputTextColor"] + ";border-radius: " + $params["inputBorderRadius"] + ";padding: 10px " + $params["dropdownOptionPadding"] + "}\n" + $id + ".AddressInput2783050353--root[data-addressinput2783050353-mobile] .InputWithOptions1598587634--inputComponent .Input2813270564--nativeInput{font-size: inherit}\n" + $id + ".AddressInput2783050353--root[data-dropdown1931977232-content-visible] .InputWithOptions1598587634--inputComponent .Input2813270564--nativeInput{border-bottom-left-radius: 0;border-bottom-right-radius: 0}\n" + $id + ".AddressInput2783050353--root .InputWithOptions1598587634--inputComponent .Input2813270564--nativeInput:hover, " + $id + ".AddressInput2783050353--root[data-addressinput2783050353-preview-input-hover] .InputWithOptions1598587634--inputComponent .Input2813270564--nativeInput{background-color: " + $params["inputHoverBackgroundColor"] + ";border-color: " + $params["inputHoverStrokeColor"] + ";border-width: " + $params["inputHoverStrokeWidth"] + "}\n" + $id + ".AddressInput2783050353--root .InputWithOptions1598587634--inputComponent .Input2813270564--nativeInput:focus, " + $id + ".AddressInput2783050353--root[data-addressinput2783050353-preview-input-focus] .InputWithOptions1598587634--inputComponent .Input2813270564--nativeInput, " + $id + ".AddressInput2783050353--root[data-addressinput2783050353-preview-list-regular] .InputWithOptions1598587634--inputComponent .Input2813270564--nativeInput, " + $id + ".AddressInput2783050353--root[data-addressinput2783050353-preview-list-hover] .InputWithOptions1598587634--inputComponent .Input2813270564--nativeInput{background-color: " + $params["inputFocusBackgroundColor"] + ";border-color: " + $params["inputFocusStrokeColor"] + ";border-width: " + $params["inputFocusStrokeWidth"] + "}\n" + $id + ".AddressInput2783050353--root[data-addressinput2783050353-error] .InputWithOptions1598587634--inputComponent .Input2813270564--nativeInput, " + $id + ".AddressInput2783050353--root[data-addressinput2783050353-preview-input-error] .InputWithOptions1598587634--inputComponent .Input2813270564--nativeInput{background-color: " + $params["inputErrorBackgroundColor"] + ";border-color: " + $params["inputErrorStrokeColor"] + ";border-width: " + $params["inputErrorStrokeWidth"] + "}\n" + $id + ".AddressInput2783050353--root .InputWithOptions1598587634--inputComponent .Input2813270564--nativeInput:disabled, " + $id + ".AddressInput2783050353--root[data-addressinput2783050353-preview-input-disabled] .InputWithOptions1598587634--inputComponent .Input2813270564--nativeInput{background-color: " + $params["inputDisabledBackgroundColor"] + ";border-color: " + $params["inputDisabledStrokeColor"] + ";border-width: " + $params["inputDisabledStrokeWidth"] + ";color: " + $params["inputDisabledTextColor"] + "}\n" + $id + ".AddressInput2783050353--root .InputWithOptions1598587634--inputComponent .Input2813270564--nativeInput::placeholder{color: " + $params["inputPlaceholderTextColor"] + "}\n" + $id + ".AddressInput2783050353--root .Dropdown1931977232--dropdownContent{background-color: " + $params["dropdownBackgroundColor"] + ";border-color: " + $params["dropdownStrokeColor"] + ";border-width: " + $params["dropdownStrokeWidth"] + ";border-style: solid;box-shadow: " + $params["dropdownBoxShadow"] + ";font: " + $params["dropdownFont"] + ";color: " + $params["dropdownTextColor"] + ";border-top-width: 0;border-radius: " + $params["inputBorderRadius"] + ";border-top-left-radius: 0;border-top-right-radius: 0;overflow: hidden}\n" + $id + ".AddressInput2783050353--root[data-addressinput2783050353-mobile] .Dropdown1931977232--dropdownContent{font-size: inherit}\n" + $id + ".AddressInput2783050353--root .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption .DropdownOption1944475902--highlight{color: " + $params["dropdownTextColor"] + ";opacity: 1}\n" + $id + ".AddressInput2783050353--root .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption .DropdownOption1944475902--nonHighlight{color: " + $params["dropdownTextColor"] + ";opacity: .6}\n" + $id + ".AddressInput2783050353--root .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption{cursor: pointer;padding: 5px " + $params["dropdownOptionPadding"] + "}\n" + $id + ".AddressInput2783050353--root .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption[data-dropdownoption1944475902-hovered]{background-color: lightgrey}\n" + $id + ".AddressInput2783050353--root .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption[data-dropdownoption1944475902-disabled]{cursor: default;background-color: white}\n" + $id + ".AddressInput2783050353--root .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption[data-dropdownoption1944475902-selected]{background-color: " + $params["dropdownBackgroundColor"] + "}\n" + $id + ".AddressInput2783050353--root .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption[data-dropdownoption1944475902-selected][data-dropdownoption1944475902-hovered]{background-color: " + $params["dropdownHoverBackgroundColor"] + "}\n" + $id + ".AddressInput2783050353--root .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption:not([data-dropdownoption1944475902-selectable]){cursor: default}\n" + $id + ".AddressInput2783050353--root .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption .DropdownOption1944475902--highlight{background-color: transparent;font-weight: bold}\n" + $id + ".AddressInput2783050353--root .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption .DropdownOption1944475902--nonHighlight{}\n" + $id + ".AddressInput2783050353--root .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption:first-of-type{padding-top: 10px}\n" + $id + ".AddressInput2783050353--root .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption:last-of-type{padding-bottom: 10px}\n" + $id + ".AddressInput2783050353--root[data-addressinput2783050353-show-dividers] .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption{border-bottom-color: " + $params["dropdownDividerStrokeColor"] + ";border-bottom-width: " + $params["dropdownDividerStrokeWidth"] + ";border-bottom-style: solid;padding-top: 10px;padding-bottom: 10px}\n" + $id + ".AddressInput2783050353--root .AddressInput2819285371--option .AddressInput2819285371--optionContent{overflow: hidden;white-space: nowrap;text-overflow: ellipsis}\n" + $id + ".AddressInput2783050353--root .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption:hover, " + $id + ".AddressInput2783050353--root .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption[data-dropdownoption1944475902-hovered], " + $id + ".AddressInput2783050353--root .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption[data-dropdownoption1944475902-selected]:hover, " + $id + ".AddressInput2783050353--root .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption[data-dropdownoption1944475902-selected][data-dropdownoption1944475902-hovered], " + $id + ".AddressInput2783050353--root[data-addressinput2783050353-preview-list-hover] .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption:first-of-type{background: " + $params["dropdownHoverBackgroundColor"] + ";color: " + $params["dropdownHoverTextColor"] + "}\n" + $id + ".AddressInput2783050353--root .Dropdown1931977232--dropdownContent .DropdownContent3497163247--dropdownOption:last-of-type{border-bottom-width: 0}\n" + $id + " .AddressInput2783050353--locationIcon path{fill: " + $params["dropdownLocationIconColor"] + "}\n" + $id + ".AddressInput2783050353--root .AddressInput2819285371--iconWrapper{padding: 0 8px 0 0}\n" + $id + ".AddressInput2783050353--root[data-addressinput2783050353-alignment=\"right\"] .AddressInput2819285371--iconWrapper{padding: 0 0 0 8px}\n" + $id + ".AddressInput2783050353--root[data-addressinput2783050353-alignment=\"right\"] .AddressInput2819285371--option{flex-direction: row-reverse}\n" + $id + ".AddressInput2783050353--root[data-addressinput2783050353-alignment=\"center\"] .AddressInput2819285371--option{justify-content: center}\n" + $id + ".AddressInput2783050353--root[data-addressinput2783050353-alignment=\"center\"] .AddressInput2819285371--option .AddressInput2819285371--optionContent{flex: inherit}\n";
};

/***/ }),
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */
/*!******************************************!*\
  !*** ../node_modules/lodash/uniqueId.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! lodash */ 2).uniqueId

/***/ }),
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */
/*!****************************************************!*\
  !*** ../node_modules/popper.js/dist/esm/popper.js ***!
  \****************************************************/
/*! exports provided: default */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module uses injected variables (global) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.6
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  data.positionFixed = this.options.positionFixed;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);

  data.offsets.popper.position = this.options.positionFixed ? 'fixed' : 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroys the popper.
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style.left = '';
    this.popper.style.right = '';
    this.popper.style.bottom = '';
    this.popper.style.willChange = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger `onUpdate` callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options.positionFixed);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: options.positionFixed ? 'fixed' : 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Boolean} shouldRound - If the offsets should be rounded at all
 * @returns {Object} The popper's position offsets rounded
 *
 * The tale of pixel-perfect positioning. It's still not 100% perfect, but as
 * good as it can be within reason.
 * Discussion here: https://github.com/FezVrasta/popper.js/pull/715
 *
 * Low DPI screens cause a popper to be blurry if not using full pixels (Safari
 * as well on High DPI screens).
 *
 * Firefox prefers no rounding for positioning and does not have blurriness on
 * high DPI screens.
 *
 * Only horizontal placement and left/right values need to be considered.
 */
function getRoundedOffsets(data, shouldRound) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;


  var isVertical = ['left', 'right'].indexOf(data.placement) !== -1;
  var isVariation = data.placement.indexOf('-') !== -1;
  var sameWidthOddness = reference.width % 2 === popper.width % 2;
  var bothOddWidth = reference.width % 2 === 1 && popper.width % 2 === 1;
  var noRound = function noRound(v) {
    return v;
  };

  var horizontalToInteger = !shouldRound ? noRound : isVertical || isVariation || sameWidthOddness ? Math.round : Math.floor;
  var verticalToInteger = !shouldRound ? noRound : Math.round;

  return {
    left: horizontalToInteger(bothOddWidth && !isVariation && shouldRound ? popper.left - 1 : popper.left),
    top: verticalToInteger(popper.top),
    bottom: verticalToInteger(popper.bottom),
    right: horizontalToInteger(popper.right)
  };
}

var isFirefox = isBrowser && /Firefox/i.test(navigator.userAgent);

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  var offsets = getRoundedOffsets(data, window.devicePixelRatio < 2 || !isFirefox);

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    // when offsetParent is <html> the positioning is relative to the bottom of the screen (excluding the scrollbar)
    // and not the bottom of the html element
    if (offsetParent.nodeName === 'HTML') {
      top = -offsetParent.clientHeight + offsets.bottom;
    } else {
      top = -offsetParentRect.height + offsets.bottom;
    }
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    if (offsetParent.nodeName === 'HTML') {
      left = -offsetParent.clientWidth + offsets.right;
    } else {
      left = -offsetParentRect.width + offsets.right;
    }
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  var _data$offsets$arrow;

  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjunction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css['margin' + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css['border' + sideCapitalized + 'Width'], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ''), _data$offsets$arrow);

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-end` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement, data.positionFixed);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  // NOTE: DOM access here
  // resets the popper's position so that the document size can be calculated excluding
  // the size of the popper element itself
  var transformProp = getSupportedPropertyName('transform');
  var popperStyles = data.instance.popper.style; // assignment to help minification
  var top = popperStyles.top,
      left = popperStyles.left,
      transform = popperStyles[transformProp];

  popperStyles.top = '';
  popperStyles.left = '';
  popperStyles[transformProp] = '';

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement, data.positionFixed);

  // NOTE: DOM access here
  // restores the original style properties after the offsets have been computed
  popperStyles.top = top;
  popperStyles.left = left;
  popperStyles[transformProp] = transform;

  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unit-less, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the `height`.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > You can read more on this at this [issue](https://github.com/FezVrasta/popper.js/issues/373).
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * A scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper. This makes sure the popper always has a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier. Can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near each other
   * without leaving any gap between the two. Especially useful when the arrow is
   * enabled and you want to ensure that it points to its reference element.
   * It cares only about the first axis. You can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjunction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations)
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position.
     * The popper will never be placed outside of the defined boundaries
     * (except if `keepTogether` is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define your own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3D transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the information used by Popper.js.
 * This object is passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow. It expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overridden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass an object with the same
 * structure of the `options` object, as the 3rd argument. For example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement.
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Set this to true if you want popper to position it self in 'fixed' mode
   * @prop {Boolean} positionFixed=false
   */
  positionFixed: false,

  /**
   * Whether events (resize, scroll) are initially enabled.
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated. This callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, it is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js.
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Creates a new Popper.js instance.
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as the popper
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedules an update. It will run on the next UI update available.
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10.
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

/* harmony default export */ __webpack_exports__["a"] = (Popper);
//# sourceMappingURL=popper.js.map

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 33)))

/***/ }),
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */
/*!*************************************************!*\
  !*** ./components/AddressInput/AddressInput.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddressInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getPreviewStateString = getPreviewStateString;
exports.getStyleState = getStyleState;

var _lodash = __webpack_require__(/*! lodash */ 2);

var _lodash2 = _interopRequireDefault(_lodash);

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _AddressInput = __webpack_require__(/*! wix-ui-core/AddressInput */ 576);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _AddressInputSt = __webpack_require__(/*! ./AddressInput.st.css */ 235);

var _AddressInputSt2 = _interopRequireDefault(_AddressInputSt);

var _GoogleMapsIframeClient = __webpack_require__(/*! wix-ui-core/dist/src/clients/GoogleMaps/GoogleMapsIframeClient */ 648);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var exampleOptions = [{ place_id: 0, description: 'Hello World' }, // eslint-disable-line
{ place_id: 1, description: 'Hello World' }, // eslint-disable-line
{ place_id: 2, description: 'Hello World' }, // eslint-disable-line
{ place_id: 3, description: 'Hello World' }, // eslint-disable-line
{ place_id: 4, description: 'Hello World' // eslint-disable-line
}];

var AddressIcon = function AddressIcon(_ref) {
  var className = _ref.className;

  return _react2.default.createElement(
    'svg',
    { width: '10', height: '13', viewBox: '0 0 10 13', className: className, xmlns: 'http://www.w3.org/2000/svg' },
    _react2.default.createElement('path', { d: 'M5.0016685 12.9998169C4.7051828 12.9998169 0 9.2315462 0 5.1286368 0 2.29616891 2.23932328 0 5.0016685 0c2.7623453 0 5.0016692 2.29617531 5.0016686 5.1286368-.000001 4.1029094-4.705183 7.8711801-5.0016686 7.8711801zM5 7c1.1045695 0 2-.8954305 2-2s-.8954305-2-2-2-2 .8954305-2 2 .8954305 2 2 2z' })
  );
};

AddressIcon.propTypes = {
  className: _propTypes.string
};

function getPreviewStateString(previewState) {
  if (typeof previewState !== 'string' || previewState === '') {
    return '';
  } else if (previewState.indexOf('list') !== -1) {
    return 'preview-list-' + previewState.replace('list', '').trim();
  } else {
    return 'preview-input-' + previewState;
  }
}

function getStyleState(props) {
  var result = {};
  if (props.hasError) {
    result.error = true;
  }

  result.alignment = props.alignment;
  result.mobile = props.isMobileView;
  result['show-dividers'] = true;
  if (typeof props.showDividers === 'boolean') {
    result['show-dividers'] = props.showDividers;
  }

  var isPreviewMode = !!props.previewState;
  if (isPreviewMode) {
    result[getPreviewStateString(props.previewState)] = true;
  }

  return result;
}

var AddressInput = exports.AddressInput = function (_React$Component) {
  _inherits(AddressInput, _React$Component);

  function AddressInput(props) {
    _classCallCheck(this, AddressInput);

    var _this = _possibleConstructorReturn(this, (AddressInput.__proto__ || Object.getPrototypeOf(AddressInput)).call(this, props));

    _this.handleChange = function (e) {
      var value = e.target.value;

      _this.props.onChange(value);
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handleSelect = _this.handleSelect.bind(_this);
    return _this;
  }

  _createClass(AddressInput, [{
    key: 'focus',
    value: function focus() {
      this.ref.focus();
    }
  }, {
    key: 'blur',
    value: function blur() {
      this.ref.blur();
    }
  }, {
    key: 'close',
    value: function close() {
      this.ref.close();
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect(e) {
      var newData = { value: e.address };
      this.props.updateData(newData);
      this.props.handleAction('change', newData);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          previewState = _props.previewState,
          value = _props.value,
          restOfProps = _objectWithoutProperties(_props, ['previewState', 'value']);

      var forceContentElementVisibility = !!previewState && previewState.indexOf('list') !== -1;
      var styles = (0, _AddressInputSt2.default)('root', getStyleState(this.props), restOfProps);
      var formatted = _lodash2.default.get(value, 'formatted', '');
      var previewProps = {
        forceContentElementVisibility: forceContentElementVisibility,
        forceOptions: forceContentElementVisibility ? exampleOptions : null
      };

      return _react2.default.createElement(_AddressInput.AddressInput, _extends({}, restOfProps, styles, previewProps, {
        Client: _GoogleMapsIframeClient.GoogleMapsIframeClient,
        locationIcon: this.props.locationIcon ? _react2.default.createElement(AddressIcon, { className: _AddressInputSt2.default.locationIcon }) : null,
        value: formatted,
        onChange: this.handleChange,
        onSelect: this.handleSelect,
        ref: function ref(_ref2) {
          return _this2.ref = _ref2;
        }
      }));
    }
  }]);

  return AddressInput;
}(_react2.default.Component);

AddressInput.displayName = 'AddressInputWixUiSanta';
AddressInput.propTypes = {
  previewState: _propTypes.string,
  locationIcon: _propTypes.bool,
  updateData: _propTypes.func,
  handleAction: _propTypes.func,
  value: _propTypes.object,
  onChange: _propTypes.func,
  hasError: _propTypes.bool
};

AddressInput.defaultProps = {
  previewState: '',
  locationIcon: false,
  updateData: function updateData() {
    return null;
  },
  handleAction: function handleAction() {
    return null;
  },
  onChange: function onChange() {
    return null;
  },
  value: { formatted: '' }
};

/***/ }),
/* 307 */
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_ctx.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ 589);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 308 */
/*!******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_ie8-dom-define.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ 116) && !__webpack_require__(/*! ./_fails */ 142)(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ 309)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 309 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_dom-create.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ 115);
var document = __webpack_require__(/*! ./_global */ 80).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 310 */
/*!************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-keys-internal.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ 92);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 117);
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ 591)(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 225)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 311 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iobject.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ 312);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 312 */
/*!*******************************************************!*\
  !*** ../node_modules/core-js/library/modules/_cof.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 313 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-object.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ 223);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 314 */
/*!*******************************************************!*\
  !*** ../node_modules/babel-runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ 594);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(/*! ../core-js/symbol */ 606);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 315 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-define.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ 196);
var $export = __webpack_require__(/*! ./_export */ 140);
var redefine = __webpack_require__(/*! ./_redefine */ 316);
var hide = __webpack_require__(/*! ./_hide */ 113);
var Iterators = __webpack_require__(/*! ./_iterators */ 229);
var $iterCreate = __webpack_require__(/*! ./_iter-create */ 598);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 231);
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ 601);
var ITERATOR = __webpack_require__(/*! ./_wks */ 118)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 316 */
/*!************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_redefine.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./_hide */ 113);


/***/ }),
/* 317 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gopn.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ 310);
var hiddenKeys = __webpack_require__(/*! ./_enum-bug-keys */ 227).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 318 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gopd.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(/*! ./_object-pie */ 198);
var createDesc = __webpack_require__(/*! ./_property-desc */ 194);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 117);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 222);
var has = __webpack_require__(/*! ./_has */ 92);
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ 308);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(/*! ./_descriptors */ 116) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 319 */
/*!*************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/node_modules/react-transition-group/Transition.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ 1));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ 0));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ 15));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ 320);

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ 321);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the components.
 * It's up to you to give meaning and effect to those states. For example we can
 * add styles to a component when it enters or exits:
 *
 * ```jsx
 * import Transition from 'react-transition-group/Transition';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {(state) => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * As noted the `Transition` component doesn't _do_ anything by itself to its child component.
 * What it does do is track transition states over time so you can update the
 * component (such as by adding styles or classes) when it changes states.
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component begins the
 * "Enter" stage. During this stage, the component will shift from its current transition state,
 * to `'entering'` for the duration of the transition and then to the `'entered'` stage once
 * it's complete. Let's take the following example:
 *
 * ```jsx
 * state = { in: false };
 *
 * toggleEnterState = () => {
 *   this.setState({ in: true });
 * }
 *
 * render() {
 *   return (
 *     <div>
 *       <Transition in={this.state.in} timeout={500} />
 *       <button onClick={this.toggleEnterState}>Click to Enter</button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state and
 * stay there for 500ms (the value of `timeout`) before it finally switches to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from `'exiting'` to `'exited'`.
 *
 * ## Timing
 *
 * Timing is often the trickiest part of animation, mistakes can result in slight delays
 * that are hard to pin down. A common example is when you want to add an exit transition,
 * you should set the desired final styles when the state is `'exiting'`. That's when the
 * transition to those styles will start and, if you matched the `timeout` prop with the
 * CSS Transition duration, it will end exactly when the state changes to `'exited'`.
 *
 * > **Note**: For simpler transitions the `Transition` component might be enough, but
 * > take into account that it's platform-agnostic, while the `CSSTransition` component
 * > [forces reflows](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * > in order to make more complex transitions more predictable. For example, even though
 * > classes `example-enter` and `example-enter-active` are applied immediately one after
 * > another, you can still transition from one to the other because of the forced reflow
 * > (read [this issue](https://github.com/reactjs/react-transition-group/issues/159#issuecomment-322761171)
 * > for more info). Take this into account when choosing between `Transition` and
 * > `CSSTransition`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter;
      appear = timeout.appear;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts(); // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing); // FIXME: appear timeout?


      _this2.onTransitionEnd(node, timeouts.enter, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);

    if (node) {
      if (this.props.addEndListener) {
        this.props.addEndListener(node, this.nextCallback);
      }

      if (timeout != null) {
        setTimeout(this.nextCallback, timeout);
      }
    } else {
      setTimeout(this.nextCallback, 0);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  false ? undefined : {};

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports.default = _default;

/***/ }),
/* 320 */
/*!*****************************************************************************!*\
  !*** ../node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \*****************************************************************************/
/*! exports provided: polyfill */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ../node_modules/wix-ui-core/node_modules/react-transition-group/Transition.js (referenced with cjs require), ../node_modules/wix-ui-core/node_modules/react-transition-group/TransitionGroup.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polyfill", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),
/* 321 */
/*!******************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/node_modules/react-transition-group/utils/PropTypes.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.transitionTimeout = transitionTimeout;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ 1));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;
  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.'); // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var timeoutsShape = _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number
}).isRequired]);

exports.timeoutsShape = timeoutsShape;

var classNamesShape = _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]);

exports.classNamesShape = classNamesShape;

/***/ }),
/* 322 */
/*!******************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/node_modules/react-transition-group/TransitionGroup.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ 1));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ 0));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ 320);

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ 633);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var propTypes =  false ? undefined : {};;
var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    this.setState(function (state) {
      var children = _extends({}, state.children);

      delete children[child.key];
      return {
        children: children
      };
    });
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  false ? undefined : {};
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 323 */
/*!******************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/utils/intersection.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function intersection(array1, array2) {
    if (!Array.isArray(array1) || !Array.isArray(array2)) {
        return [];
    }
    var uniqueArray1 = createUniqueArray(array1);
    var uniqueArray2 = createUniqueArray(array2);
    return uniqueArray1.filter(function (value) { return uniqueArray2.indexOf(value) !== -1; });
}
exports.intersection = intersection;
var createUniqueArray = function (array) { return array.filter(function (elem, index, self) { return index === self.indexOf(elem); }); };
//# sourceMappingURL=intersection.js.map

/***/ }),
/* 324 */
/*!***************************************!*\
  !*** ../node_modules/lodash/first.js ***!
  \***************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! lodash */ 2).first

/***/ }),
/* 325 */
/*!*******************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/clients/GoogleMaps/handlersName.js ***!
  \*******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.autocompleteHandlerName = 'autocomplete';
exports.geocodeHandlerName = 'geocode';
exports.placeDetailsHandlerName = 'placeDetails';
module.exports = {
    autocompleteHandlerName: exports.autocompleteHandlerName, geocodeHandlerName: exports.geocodeHandlerName, placeDetailsHandlerName: exports.placeDetailsHandlerName
};
//# sourceMappingURL=handlersName.js.map

/***/ }),
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */
/*!******************************************!*\
  !*** ./components/AddressInput/index.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var AddressInput = void 0,
    AddressInputSanta = void 0,
    style = void 0;

try {
  AddressInput = __webpack_require__(/*! ./AddressInput */ 306).AddressInput;
  AddressInputSanta = __webpack_require__(/*! ./AddressInput.santa */ 652).default;
  style = __webpack_require__(/*! ./AddressInput.st.css */ 235).default;
} catch (e) {
  AddressInput = function AddressInput() {
    return null;
  };
  AddressInputSanta = function AddressInputSanta() {
    return null;
  };
  style = {};
  console.error('couldn\'t load addressInput', e);
}

exports.default = {
  componentType: 'wixui.AddressInput',
  component: AddressInput,
  santaComponent: AddressInputSanta,
  skin: style.$skin
};

/***/ }),
/* 353 */
/*!*********************************************************!*\
  !*** ../node_modules/create-react-context/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _implementation = __webpack_require__(/*! ./implementation */ 623);

var _implementation2 = _interopRequireDefault(_implementation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createContext || _implementation2.default;
module.exports = exports['default'];

/***/ }),
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */
/*!***************************************************!*\
  !*** ../node_modules/wix-ui-core/AddressInput.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/src/components/AddressInput */ 577);


/***/ }),
/* 577 */
/*!*****************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/AddressInput/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AddressInput_1 = __webpack_require__(/*! ./AddressInput */ 578);
exports.AddressInput = AddressInput_1.AddressInput;
//# sourceMappingURL=index.js.map

/***/ }),
/* 578 */
/*!************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/AddressInput/AddressInput.js ***!
  \************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 17);
var React = __webpack_require__(/*! react */ 0);
var AddressInput_st_css_1 = __webpack_require__(/*! ./AddressInput.st.css */ 48);
var InputWithOptions_1 = __webpack_require__(/*! ../InputWithOptions/InputWithOptions */ 579);
var intersection_1 = __webpack_require__(/*! ../../utils/intersection */ 323);
var DropdownOption_1 = __webpack_require__(/*! ../DropdownOption */ 234);
var types_1 = __webpack_require__(/*! ../../clients/GoogleMaps/types */ 644);
exports.Handler = types_1.Handler;
var google2address_1 = __webpack_require__(/*! ../../clients/GoogleMaps/google2address/google2address */ 645);
var first = __webpack_require__(/*! lodash/first */ 324);
var throttle = __webpack_require__(/*! lodash/throttle */ 646);
var isArray = __webpack_require__(/*! lodash/isArray */ 647);
function filterAddressesByType(addresses, filterTypes) {
    return (filterTypes && filterTypes.length > 0) ? (addresses || []).filter(function (address) { return intersection_1.intersection(address.types, filterTypes).length > 0; }) : addresses;
}
function formatAddressOutput(google, description, rawInputValue) {
    google2address_1.trySetStreetNumberIfNotReceived(google, rawInputValue);
    return {
        originValue: description,
        googleResult: google,
        address: google2address_1.convertToFullAddress(google)
    };
}
function createAutocompleteRequest(input, props) {
    var countryCode = props.countryCode, types = props.types;
    var result = { input: input };
    if (typeof countryCode === 'string') {
        result.componentRestrictions = { country: countryCode.toLowerCase() };
    }
    if (types) {
        result.types = types;
    }
    return result;
}
/**
 * AddressInput
 */
var AddressInput = /** @class */ (function (_super) {
    tslib_1.__extends(AddressInput, _super);
    function AddressInput(props) {
        var _this = _super.call(this, props) || this;
        _this.unmounted = false;
        _this.addressRequestId = 0;
        _this.geocodeRequestId = 0;
        _this.placeDetailsRequestId = 0;
        _this._getAddressOptions = props.throttleInterval === 0 ? _this._getAddressOptions.bind(_this) : throttle(_this._getAddressOptions, props.throttleInterval);
        _this._handleOnChange = _this._handleOnChange.bind(_this);
        _this._handleOnManualInput = _this._handleOnManualInput.bind(_this);
        _this._onSelect = _this._onSelect.bind(_this);
        _this._handleOnBlur = _this._handleOnBlur.bind(_this);
        _this._renderOption = _this._renderOption.bind(_this);
        _this._createOptionFromAddress = _this._createOptionFromAddress.bind(_this);
        _this.currentAddressRequest = Promise.resolve();
        _this.state = { options: [], inputValue: props.value || '', isDirty: false };
        return _this;
    }
    AddressInput.prototype.componentDidMount = function () {
        this.client = new this.props.Client();
        if (this.props.clientId) {
            this.client.useClientId();
        }
    };
    AddressInput.prototype.componentWillUnmount = function () {
        this.unmounted = true;
    };
    AddressInput.prototype.componentWillReceiveProps = function (nextProps) {
        // If user interacted, meaning the value is "dirty",
        // we want to update it in any case.
        if (nextProps.value !== this.props.value || this.state.isDirty) {
            this.setState({ inputValue: nextProps.value, isDirty: false });
        }
    };
    AddressInput.prototype.focus = function () {
        this.inputRef.focus();
    };
    AddressInput.prototype.blur = function () {
        this.inputRef.blur();
    };
    AddressInput.prototype.close = function () {
        this.inputWithOptionsRef.close();
    };
    AddressInput.prototype._getKey = function () {
        return this.props.clientId || this.props.apiKey;
    };
    AddressInput.prototype._getAddressOptions = function (input) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var requestId, resolveCurrentAddressRequest, _a, lang, filterTypes, results, filteredResults, options;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        requestId = ++this.addressRequestId;
                        this.currentAddressRequest = new Promise(function (resolve) { return resolveCurrentAddressRequest = resolve; });
                        _a = this.props, lang = _a.lang, filterTypes = _a.filterTypes;
                        return [4 /*yield*/, this.client.autocomplete(this._getKey(), lang, createAutocompleteRequest(input, this.props))];
                    case 1:
                        results = _b.sent();
                        filteredResults = filterAddressesByType(results, filterTypes) || [];
                        options = filteredResults.map(this._createOptionFromAddress);
                        if (!this.unmounted && requestId === this.addressRequestId) {
                            this.setState({ options: options }, resolveCurrentAddressRequest);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AddressInput.prototype._getGeocode = function (placeId, description, rawInputValue) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var requestId, _a, lang, region, request, geocode;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        requestId = ++this.geocodeRequestId;
                        _a = this.props, lang = _a.lang, region = _a.countryCode;
                        request = placeId ? { placeId: placeId, region: region } : { address: rawInputValue };
                        return [4 /*yield*/, this.client.geocode(this._getKey(), lang, request)];
                    case 1:
                        geocode = _b.sent();
                        if (requestId === this.geocodeRequestId) {
                            this._invokeOnSelect(formatAddressOutput(first(geocode), description, rawInputValue));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AddressInput.prototype._getPlaceDetails = function (placeId, description, rawInputValue) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var requestId, lang, placeDetails;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestId = ++this.placeDetailsRequestId;
                        lang = this.props.lang;
                        return [4 /*yield*/, this.client.placeDetails(this._getKey(), lang, { placeId: placeId })];
                    case 1:
                        placeDetails = _a.sent();
                        if (requestId === this.placeDetailsRequestId) {
                            this._invokeOnSelect(formatAddressOutput(placeDetails, description, rawInputValue));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AddressInput.prototype._invokeOnSelect = function (value) {
        if (!this.unmounted) {
            this.setState({ isDirty: true });
            this.props.onSelect(value);
        }
    };
    AddressInput.prototype._onSelect = function (option) {
        var handler = this.props.handler;
        var inputValue = this.state.inputValue;
        if (!option && !inputValue) {
            this._invokeOnSelect(null);
        }
        else if (!option) {
            this._getGeocode(null, null, inputValue);
        }
        else if (handler === types_1.Handler.geocode && option) {
            this._getGeocode(option.id, option.value, inputValue);
        }
        else if (handler === types_1.Handler.places) {
            this._getPlaceDetails(option.id, option.value, inputValue);
        }
    };
    AddressInput.prototype._handleOnChange = function (e) {
        var onChange = this.props.onChange;
        var value = e.target.value;
        onChange && onChange(e);
        this.setState({ inputValue: value });
        if (value) {
            this._getAddressOptions(value);
        }
        else {
            this.setState({ options: [] });
        }
    };
    AddressInput.prototype._handleOnManualInput = function (value) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, onManualInput, fallbackToManual;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this.props, onManualInput = _a.onManualInput, fallbackToManual = _a.fallbackToManual;
                        onManualInput && onManualInput(value);
                        return [4 /*yield*/, this.currentAddressRequest];
                    case 1:
                        _b.sent();
                        if (fallbackToManual && this.state.options.length === 0) {
                            this._onSelect(null);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AddressInput.prototype._handleOnBlur = function () {
        var _a = this.props, onBlur = _a.onBlur, clearSuggestionsOnBlur = _a.clearSuggestionsOnBlur;
        onBlur && onBlur();
        if (clearSuggestionsOnBlur) {
            this.setState({ options: [] });
        }
    };
    AddressInput.prototype._renderOption = function (val) {
        var locationIcon = this.props.locationIcon;
        return (React.createElement("div", { className: AddressInput_st_css_1.default.option },
            locationIcon && React.createElement("div", { className: AddressInput_st_css_1.default.iconWrapper, "data-hook": "location-icon-wrapper" }, locationIcon),
            React.createElement("div", { className: AddressInput_st_css_1.default.optionContent }, val)));
    };
    AddressInput.prototype._createOptionFromAddress = function (address) {
        return DropdownOption_1.OptionFactory.create({
            id: address.place_id,
            value: address.description,
            render: this._renderOption
        });
    };
    AddressInput.prototype._options = function () {
        var _a = this.props, forceOptions = _a.forceOptions, locationIcon = _a.locationIcon;
        if (isArray(forceOptions) && forceOptions.length > 0) {
            return forceOptions.map(this._createOptionFromAddress);
        }
        else {
            return this.state.options;
        }
    };
    AddressInput.prototype.render = function () {
        var _this = this;
        var _a = this.props, placeholder = _a.placeholder, onKeyDown = _a.onKeyDown, onFocus = _a.onFocus, forceContentElementVisibility = _a.forceContentElementVisibility, readOnly = _a.readOnly, disabled = _a.disabled, inlineStyles = _a.style, prefix = _a.prefix, suffix = _a.suffix, fixedFooter = _a.fixedFooter, id = _a.id;
        var options = this._options();
        var inputProps = {
            'aria-label': this.props['aria-label'],
            onChange: this._handleOnChange,
            onKeyDown: onKeyDown,
            onFocus: onFocus,
            onBlur: this._handleOnBlur,
            placeholder: placeholder,
            readOnly: readOnly,
            disabled: disabled,
            value: this.state.inputValue,
            prefix: prefix,
            suffix: suffix,
            ref: function (ref) { return _this.inputRef = ref; },
            onClick: this.props.onClick,
            onDoubleClick: this.props.onDoubleClick,
            onMouseEnter: this.props.onMouseEnter,
            onMouseLeave: this.props.onMouseLeave
        };
        var states = {};
        var hasOptions = options.length > 0;
        var timeout = hasOptions ? 150 : 0;
        return (React.createElement(InputWithOptions_1.InputWithOptions, tslib_1.__assign({}, AddressInput_st_css_1.default('root', states, this.props), { onSelect: this._onSelect, options: options, inputProps: inputProps, onManualInput: this._handleOnManualInput, timeout: timeout, forceContentElementVisibility: forceContentElementVisibility, style: inlineStyles, fixedFooter: hasOptions && fixedFooter, id: id, ref: function (ref) { return _this.inputWithOptionsRef = ref; }, allowReselect: true, filterPredicate: function () { return true; } })));
    };
    AddressInput.displayName = 'AddressInput';
    AddressInput.defaultProps = {
        handler: types_1.Handler.geocode,
        throttleInterval: 150,
        lang: 'en'
    };
    return AddressInput;
}(React.PureComponent));
exports.AddressInput = AddressInput;
//# sourceMappingURL=AddressInput.js.map

/***/ }),
/* 579 */
/*!********************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/InputWithOptions/InputWithOptions.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 17);
var React = __webpack_require__(/*! react */ 0);
var InputWithOptions_st_css_1 = __webpack_require__(/*! ./InputWithOptions.st.css */ 21);
var Dropdown_1 = __webpack_require__(/*! ../Dropdown */ 580);
var DropdownOption_1 = __webpack_require__(/*! ../DropdownOption */ 234);
var Input_1 = __webpack_require__(/*! ../Input */ 153);
/**
 * InputWithOptions
 */
var InputWithOptions = /** @class */ (function (_super) {
    tslib_1.__extends(InputWithOptions, _super);
    function InputWithOptions() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.isEditing = false;
        _this._onSelect = function (option) {
            _this.isEditing = false;
            var _a = _this.props, onSelect = _a.onSelect, onManualInput = _a.onManualInput, inputProps = _a.inputProps;
            if (option) {
                onSelect(option);
            }
            else {
                onManualInput(inputProps.value);
            }
        };
        _this._onKeyDown = function (event) {
            if (!event.key.startsWith('Arrow')) {
                _this.isEditing = true;
            }
            var onKeyDown = _this.props.inputProps.onKeyDown;
            onKeyDown && onKeyDown(event);
        };
        _this._onFocus = function (event) {
            _this.isEditing = false;
            var onFocus = _this.props.inputProps.onFocus;
            onFocus && onFocus(event);
        };
        return _this;
    }
    InputWithOptions.prototype.open = function () {
        // Using getInstance() is here because closeOutside HOC
        this.dropDownRef.getInstance().open();
    };
    InputWithOptions.prototype.close = function () {
        this.dropDownRef.getInstance().close();
    };
    InputWithOptions.prototype._filterOptions = function () {
        var _a = this.props, highlightMatches = _a.highlightMatches, inputProps = _a.inputProps, options = _a.options, filterPredicate = _a.filterPredicate;
        if (!inputProps.value || !this.isEditing) {
            return options;
        }
        var filteredOptions = options
            .filter(function (option) {
            return (!option.isSelectable && option.value) ||
                (option.isSelectable && option.value && filterPredicate(inputProps.value, option.value));
        });
        if (!highlightMatches) {
            return filteredOptions;
        }
        return filteredOptions.map(function (option) {
            return option.isSelectable && option.value ? DropdownOption_1.OptionFactory.createHighlighted(option, inputProps.value) : option;
        });
    };
    InputWithOptions.prototype.render = function () {
        var _this = this;
        var _a = this.props, placement = _a.placement, openTrigger = _a.openTrigger, initialSelectedIds = _a.initialSelectedIds, onInitialSelectedOptionsSet = _a.onInitialSelectedOptionsSet, multi = _a.multi, fixedFooter = _a.fixedFooter, fixedHeader = _a.fixedHeader, timeout = _a.timeout, onDeselect = _a.onDeselect, inputProps = _a.inputProps, forceContentElementVisibility = _a.forceContentElementVisibility, inlineStyles = _a.style, id = _a.id, allowReselect = _a.allowReselect;
        return (React.createElement(Dropdown_1.Dropdown, tslib_1.__assign({}, InputWithOptions_st_css_1.default('root', {}, this.props), { placement: placement, openTrigger: openTrigger, disabled: inputProps.disabled, onSelect: this._onSelect, fixedFooter: fixedFooter, fixedHeader: fixedHeader, onDeselect: onDeselect, initialSelectedIds: initialSelectedIds, onInitialSelectedOptionsSet: onInitialSelectedOptionsSet, options: this._filterOptions(), timeout: timeout, multi: multi, role: "combobox", forceContentElementVisibility: forceContentElementVisibility, style: inlineStyles, id: id, ref: function (ref) { return _this.dropDownRef = ref; }, allowReselect: allowReselect }),
            React.createElement(Input_1.Input, tslib_1.__assign({ "data-hook": "input" }, inputProps, { onKeyDown: this._onKeyDown, onFocus: this._onFocus, className: InputWithOptions_st_css_1.default.inputComponent }))));
    };
    InputWithOptions.displayName = 'InputWithOptions';
    InputWithOptions.defaultProps = {
        openTrigger: 'click',
        placement: 'bottom-start',
        multi: false,
        initialSelectedIds: [],
        highlightMatches: true,
        onSelect: function () { return null; },
        onDeselect: function () { return null; },
        onManualInput: function () { return null; },
        onInitialSelectedOptionsSet: function () { return null; },
        filterPredicate: function (inputValue, optionValue) { return optionValue.toLowerCase().includes(inputValue.toLowerCase()); }
    };
    return InputWithOptions;
}(React.PureComponent));
exports.InputWithOptions = InputWithOptions;
//# sourceMappingURL=InputWithOptions.js.map

/***/ }),
/* 580 */
/*!*************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/Dropdown/index.js ***!
  \*************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dropdown_1 = __webpack_require__(/*! ./Dropdown */ 581);
exports.Dropdown = Dropdown_1.Dropdown;
//# sourceMappingURL=index.js.map

/***/ }),
/* 581 */
/*!****************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/Dropdown/Dropdown.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 17);
var React = __webpack_require__(/*! react */ 0);
var react_onclickoutside_1 = __webpack_require__(/*! react-onclickoutside */ 582);
var Dropdown_st_css_1 = __webpack_require__(/*! ./Dropdown.st.css */ 11);
var Popover_1 = __webpack_require__(/*! ../Popover */ 583);
var DropdownContent_1 = __webpack_require__(/*! ../DropdownContent */ 637);
var constants_1 = __webpack_require__(/*! ./constants */ 643);
/**
 * Dropdown
 */
var DropdownComponent = /** @class */ (function (_super) {
    tslib_1.__extends(DropdownComponent, _super);
    function DropdownComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.dropdownContentRef = null;
        _this.state = { isOpen: false, selectedIds: [] };
        _this.areSelectedIdsEqual = function (selectedIds1, selectedIds2) {
            if ((selectedIds1 === undefined && selectedIds2 === undefined) || (selectedIds1 === null && selectedIds2 === null)) {
                return true;
            }
            return Array.isArray(selectedIds1) && Array.isArray(selectedIds2) &&
                selectedIds1.length === selectedIds2.length &&
                selectedIds1.every(function (item, index) { return item === selectedIds2[index]; });
        };
        _this.close = _this.close.bind(_this);
        _this.onPopoverClick = _this.onPopoverClick.bind(_this);
        _this.onKeyDown = _this.onKeyDown.bind(_this);
        _this.onOptionClick = _this.onOptionClick.bind(_this);
        return _this;
    }
    DropdownComponent.prototype.componentWillMount = function () {
        this.initializeSelectedOptions(this.props);
    };
    DropdownComponent.prototype.componentWillReceiveProps = function (props) {
        if (!this.areSelectedIdsEqual(props.initialSelectedIds, this.props.initialSelectedIds)) {
            this.initializeSelectedOptions(props);
        }
    };
    DropdownComponent.prototype.initializeSelectedOptions = function (props) {
        var initialSelectedIds = props.initialSelectedIds, options = props.options, onInitialSelectedOptionsSet = props.onInitialSelectedOptionsSet;
        var selectedOptions = (initialSelectedIds || [])
            .map(function (id) { return options.find(function (option) { return id === option.id; }); })
            .filter(function (option) { return option && !option.isDisabled && option.isSelectable; });
        var selectedIds = selectedOptions.map(function (x) { return x && x.id; });
        this.setState({
            selectedIds: selectedIds
        });
        onInitialSelectedOptionsSet && onInitialSelectedOptionsSet(selectedOptions);
    };
    DropdownComponent.prototype.handleClickOutside = function () {
        this.close();
    };
    DropdownComponent.prototype.open = function (onOpen) {
        if (onOpen === void 0) { onOpen = function () { return null; }; }
        if (this.state.isOpen) {
            onOpen && onOpen();
        }
        else {
            this.setState({ isOpen: true }, onOpen);
        }
    };
    DropdownComponent.prototype.onPopoverClick = function () {
        if (this.state.isOpen) {
            this.close();
        }
        else {
            this.open();
        }
    };
    DropdownComponent.prototype.close = function () {
        this.setState({ isOpen: false });
    };
    DropdownComponent.prototype.onKeyboardSelect = function () {
        var selectedOption = this.dropdownContentRef ? this.dropdownContentRef.onKeyboardSelect() : null;
        this.onOptionClick(selectedOption);
    };
    DropdownComponent.prototype.isClosingKey = function (key) {
        return key === 'Tab' || key === 'Enter' || key === 'Escape';
    };
    DropdownComponent.prototype.onKeyDown = function (evt) {
        var _this = this;
        var eventKey = evt.key;
        if (!this.state.isOpen && this.isClosingKey(eventKey)) {
            return;
        }
        this.open(function () {
            _this.dropdownContentRef && _this.dropdownContentRef.onKeyDown(eventKey);
            switch (eventKey) {
                case 'Enter': {
                    _this.onKeyboardSelect();
                    var multi = _this.props.multi;
                    !multi && _this.close();
                    break;
                }
                case 'Tab': {
                    _this.onKeyboardSelect();
                    _this.close();
                    break;
                }
                case 'Escape': {
                    _this.close();
                    break;
                }
                default:
                    break;
            }
        });
    };
    DropdownComponent.prototype.onOptionClick = function (option) {
        var _a = this.props, onSelect = _a.onSelect, onDeselect = _a.onDeselect, multi = _a.multi, allowReselect = _a.allowReselect;
        var selectedIds = this.state.selectedIds;
        var newState = {
            isOpen: multi,
            selectedIds: selectedIds
        };
        var callback = onSelect;
        if (multi) { // Multi select
            if (option) {
                // if option was clicked (could be null when Autocomplete receives a new string)
                if (selectedIds.includes(option.id)) {
                    // if clicked a selected option, unselect it
                    newState.selectedIds = selectedIds.filter(function (x) { return x !== option.id; });
                    callback = onDeselect;
                }
                else {
                    // if clicked a new option, add it to selection
                    newState.selectedIds = selectedIds.concat([option.id]);
                }
            }
        }
        else { // Single select
            if (option) {
                // if option was clicked (could be null when Autocomplete receives a new string)
                if (selectedIds.includes(option.id)) {
                    this.close();
                    if (!allowReselect) {
                        // if clicked on the selected item, exit and do nothing
                        return;
                    }
                }
                else {
                    // if clicked on a new option, make it the selected
                    newState.selectedIds = [option.id];
                }
            }
            else {
                // if non existing option selected, unselect existing ones
                newState.selectedIds = [];
            }
        }
        this.setState(newState, function () { return callback(option); });
    };
    DropdownComponent.prototype.render = function () {
        var _this = this;
        var _a = this.props, openTrigger = _a.openTrigger, placement = _a.placement, options = _a.options, children = _a.children, showArrow = _a.showArrow, fixedFooter = _a.fixedFooter, fixedHeader = _a.fixedHeader, disabled = _a.disabled, timeout = _a.timeout, forceContentElementVisibility = _a.forceContentElementVisibility, inlineStyles = _a.style, id = _a.id;
        var _b = this.state, isOpen = _b.isOpen, selectedIds = _b.selectedIds;
        var hasContent = Boolean((options && options.length) || fixedHeader || fixedFooter);
        var shown = forceContentElementVisibility || (isOpen && !disabled && hasContent);
        return (React.createElement(Popover_1.Popover, tslib_1.__assign({}, Dropdown_st_css_1.default('root', { 'content-visible': shown }, this.props), { placement: placement, shown: shown, showArrow: showArrow, timeout: timeout, onClick: !disabled && openTrigger === constants_1.CLICK ? function () { return _this.onPopoverClick(); } : undefined, onMouseEnter: !disabled && openTrigger === constants_1.HOVER ? function () { return _this.open(); } : undefined, onKeyDown: !disabled ? this.onKeyDown : undefined, onMouseLeave: !disabled && openTrigger === constants_1.HOVER ? this.close : undefined, style: inlineStyles, id: id }),
            React.createElement(Popover_1.Popover.Element, null, children),
            React.createElement(Popover_1.Popover.Content, null,
                React.createElement(DropdownContent_1.DropdownContent, { className: Dropdown_st_css_1.default.dropdownContent, ref: function (dropdownContent) { return _this.dropdownContentRef = dropdownContent; }, options: options, fixedFooter: fixedFooter, fixedHeader: fixedHeader, selectedIds: selectedIds, onOptionClick: this.onOptionClick }))));
    };
    DropdownComponent.displayName = 'Dropdown';
    return DropdownComponent;
}(React.PureComponent));
exports.DropdownComponent = DropdownComponent;
exports.Dropdown = react_onclickoutside_1.default(DropdownComponent);
//# sourceMappingURL=Dropdown.js.map

/***/ }),
/* 582 */
/*!****************************************************************************!*\
  !*** ../node_modules/react-onclickoutside/dist/react-onclickoutside.es.js ***!
  \****************************************************************************/
/*! exports provided: IGNORE_CLASS_NAME, default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ../node_modules/wix-ui-core/dist/src/components/Dropdown/Dropdown.js (referenced with cjs require) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IGNORE_CLASS_NAME", function() { return IGNORE_CLASS_NAME; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ 0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ 15);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);



function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/**
 * Check whether some DOM node is our Component's node.
 */
function isNodeFound(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // SVG <use/> elements do not technically reside in the rendered DOM, so
  // they do not have classList directly, but they offer a link to their
  // corresponding element, which can have classList. This extra check is for
  // that case.
  // See: http://www.w3.org/TR/SVG11/struct.html#InterfaceSVGUseElement
  // Discussion: https://github.com/Pomax/react-onclickoutside/pull/17


  if (current.correspondingElement) {
    return current.correspondingElement.classList.contains(ignoreClass);
  }

  return current.classList.contains(ignoreClass);
}
/**
 * Try to find our node in a hierarchy of nodes, returning the document
 * node as highest node if our node is not found in the path up.
 */

function findHighest(current, componentNode, ignoreClass) {
  if (current === componentNode) {
    return true;
  } // If source=local then this event came from 'somewhere'
  // inside and should be ignored. We could handle this with
  // a layered approach, too, but that requires going back to
  // thinking in terms of Dom node nesting, running counter
  // to React's 'you shouldn't care about the DOM' philosophy.


  while (current.parentNode) {
    if (isNodeFound(current, componentNode, ignoreClass)) {
      return true;
    }

    current = current.parentNode;
  }

  return current;
}
/**
 * Check if the browser scrollbar was clicked
 */

function clickedScrollbar(evt) {
  return document.documentElement.clientWidth <= evt.clientX || document.documentElement.clientHeight <= evt.clientY;
}

// ideally will get replaced with external dep
// when rafrex/detect-passive-events#4 and rafrex/detect-passive-events#5 get merged in
var testPassiveEventSupport = function testPassiveEventSupport() {
  if (typeof window === 'undefined' || typeof window.addEventListener !== 'function') {
    return;
  }

  var passive = false;
  var options = Object.defineProperty({}, 'passive', {
    get: function get() {
      passive = true;
    }
  });

  var noop = function noop() {};

  window.addEventListener('testPassiveEventSupport', noop, options);
  window.removeEventListener('testPassiveEventSupport', noop, options);
  return passive;
};

function autoInc(seed) {
  if (seed === void 0) {
    seed = 0;
  }

  return function () {
    return ++seed;
  };
}

var uid = autoInc();

var passiveEventSupport;
var handlersMap = {};
var enabledInstances = {};
var touchEvents = ['touchstart', 'touchmove'];
var IGNORE_CLASS_NAME = 'ignore-react-onclickoutside';
/**
 * Options for addEventHandler and removeEventHandler
 */

function getEventHandlerOptions(instance, eventName) {
  var handlerOptions = null;
  var isTouchEvent = touchEvents.indexOf(eventName) !== -1;

  if (isTouchEvent && passiveEventSupport) {
    handlerOptions = {
      passive: !instance.props.preventDefault
    };
  }

  return handlerOptions;
}
/**
 * This function generates the HOC function that you'll use
 * in order to impart onOutsideClick listening to an
 * arbitrary component. It gets called at the end of the
 * bootstrapping code to yield an instance of the
 * onClickOutsideHOC function defined inside setupHOC().
 */


function onClickOutsideHOC(WrappedComponent, config) {
  var _class, _temp;

  return _temp = _class =
  /*#__PURE__*/
  function (_Component) {
    _inheritsLoose(onClickOutside, _Component);

    function onClickOutside(props) {
      var _this;

      _this = _Component.call(this, props) || this;

      _this.__outsideClickHandler = function (event) {
        if (typeof _this.__clickOutsideHandlerProp === 'function') {
          _this.__clickOutsideHandlerProp(event);

          return;
        }

        var instance = _this.getInstance();

        if (typeof instance.props.handleClickOutside === 'function') {
          instance.props.handleClickOutside(event);
          return;
        }

        if (typeof instance.handleClickOutside === 'function') {
          instance.handleClickOutside(event);
          return;
        }

        throw new Error('WrappedComponent lacks a handleClickOutside(event) function for processing outside click events.');
      };

      _this.enableOnClickOutside = function () {
        if (typeof document === 'undefined' || enabledInstances[_this._uid]) {
          return;
        }

        if (typeof passiveEventSupport === 'undefined') {
          passiveEventSupport = testPassiveEventSupport();
        }

        enabledInstances[_this._uid] = true;
        var events = _this.props.eventTypes;

        if (!events.forEach) {
          events = [events];
        }

        handlersMap[_this._uid] = function (event) {
          if (_this.props.disableOnClickOutside) return;
          if (_this.componentNode === null) return;

          if (_this.props.preventDefault) {
            event.preventDefault();
          }

          if (_this.props.stopPropagation) {
            event.stopPropagation();
          }

          if (_this.props.excludeScrollbar && clickedScrollbar(event)) return;
          var current = event.target;

          if (findHighest(current, _this.componentNode, _this.props.outsideClickIgnoreClass) !== document) {
            return;
          }

          _this.__outsideClickHandler(event);
        };

        events.forEach(function (eventName) {
          document.addEventListener(eventName, handlersMap[_this._uid], getEventHandlerOptions(_this, eventName));
        });
      };

      _this.disableOnClickOutside = function () {
        delete enabledInstances[_this._uid];
        var fn = handlersMap[_this._uid];

        if (fn && typeof document !== 'undefined') {
          var events = _this.props.eventTypes;

          if (!events.forEach) {
            events = [events];
          }

          events.forEach(function (eventName) {
            return document.removeEventListener(eventName, fn, getEventHandlerOptions(_this, eventName));
          });
          delete handlersMap[_this._uid];
        }
      };

      _this.getRef = function (ref) {
        return _this.instanceRef = ref;
      };

      _this._uid = uid();
      return _this;
    }
    /**
     * Access the WrappedComponent's instance.
     */


    var _proto = onClickOutside.prototype;

    _proto.getInstance = function getInstance() {
      if (!WrappedComponent.prototype.isReactComponent) {
        return this;
      }

      var ref = this.instanceRef;
      return ref.getInstance ? ref.getInstance() : ref;
    };

    /**
     * Add click listeners to the current document,
     * linked to this component's state.
     */
    _proto.componentDidMount = function componentDidMount() {
      // If we are in an environment without a DOM such
      // as shallow rendering or snapshots then we exit
      // early to prevent any unhandled errors being thrown.
      if (typeof document === 'undefined' || !document.createElement) {
        return;
      }

      var instance = this.getInstance();

      if (config && typeof config.handleClickOutside === 'function') {
        this.__clickOutsideHandlerProp = config.handleClickOutside(instance);

        if (typeof this.__clickOutsideHandlerProp !== 'function') {
          throw new Error('WrappedComponent lacks a function for processing outside click events specified by the handleClickOutside config option.');
        }
      }

      this.componentNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(this.getInstance());
      this.enableOnClickOutside();
    };

    _proto.componentDidUpdate = function componentDidUpdate() {
      this.componentNode = Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"])(this.getInstance());
    };
    /**
     * Remove all document's event listeners for this component
     */


    _proto.componentWillUnmount = function componentWillUnmount() {
      this.disableOnClickOutside();
    };
    /**
     * Can be called to explicitly enable event listening
     * for clicks and touches outside of this element.
     */


    /**
     * Pass-through render
     */
    _proto.render = function render() {
      // eslint-disable-next-line no-unused-vars
      var _props = this.props,
          excludeScrollbar = _props.excludeScrollbar,
          props = _objectWithoutProperties(_props, ["excludeScrollbar"]);

      if (WrappedComponent.prototype.isReactComponent) {
        props.ref = this.getRef;
      } else {
        props.wrappedRef = this.getRef;
      }

      props.disableOnClickOutside = this.disableOnClickOutside;
      props.enableOnClickOutside = this.enableOnClickOutside;
      return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(WrappedComponent, props);
    };

    return onClickOutside;
  }(react__WEBPACK_IMPORTED_MODULE_0__["Component"]), _class.displayName = "OnClickOutside(" + (WrappedComponent.displayName || WrappedComponent.name || 'Component') + ")", _class.defaultProps = {
    eventTypes: ['mousedown', 'touchstart'],
    excludeScrollbar: config && config.excludeScrollbar || false,
    outsideClickIgnoreClass: IGNORE_CLASS_NAME,
    preventDefault: false,
    stopPropagation: false
  }, _class.getClass = function () {
    return WrappedComponent.getClass ? WrappedComponent.getClass() : WrappedComponent;
  }, _temp;
}


/* harmony default export */ __webpack_exports__["default"] = (onClickOutsideHOC);


/***/ }),
/* 583 */
/*!************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/Popover/index.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 17);
tslib_1.__exportStar(__webpack_require__(/*! ./Popover */ 584), exports);
//# sourceMappingURL=index.js.map

/***/ }),
/* 584 */
/*!**************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/Popover/Popover.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 17);
var React = __webpack_require__(/*! react */ 0);
var popper_utils_1 = __webpack_require__(/*! popper.js/dist/umd/popper-utils */ 585);
var react_popper_1 = __webpack_require__(/*! react-popper */ 708);
var react_transition_group_1 = __webpack_require__(/*! react-transition-group */ 626);
var react_portal_1 = __webpack_require__(/*! react-portal */ 707);
var Popover_st_css_1 = __webpack_require__(/*! ./Popover.st.css */ 20);
var utils_1 = __webpack_require__(/*! ../../utils */ 634);
var stylableUtils_1 = __webpack_require__(/*! ../../utils/stylableUtils */ 635);
var classNames = __webpack_require__(/*! classnames */ 6);
var isElement = __webpack_require__(/*! lodash/isElement */ 636);
// This is here and not in the test setup because we don't want consumers to need to run it as well
var isTestEnv = "production" === 'test';
if (isTestEnv && typeof document !== 'undefined') {
    if (!document.createRange) {
        document.createRange = function () { return ({
            setStart: function () { return null; },
            setEnd: function () { return null; },
            commonAncestorContainer: document.documentElement.querySelector('body')
        }); };
    }
}
var getArrowShift = function (shift, direction) {
    var _a;
    if (!shift && !isTestEnv) {
        return {};
    }
    return _a = {},
        _a[direction === 'top' || direction === 'bottom' ? 'left' : 'top'] = shift + "px",
        _a;
};
var createModifiers = function (_a) {
    var moveBy = _a.moveBy, appendTo = _a.appendTo;
    var modifiers = {
        offset: {
            offset: (moveBy ? moveBy.x : 0) + "px, " + (moveBy ? moveBy.y : 0) + "px"
        }
    };
    if (isTestEnv) {
        modifiers.computeStyle = { enabled: false };
    }
    if (appendTo) {
        modifiers.preventOverflow = {
            boundariesElement: appendTo
        };
    }
    return modifiers;
};
function getAppendToNode(_a) {
    var appendTo = _a.appendTo, targetRef = _a.targetRef;
    var appendToNode;
    if (appendTo === 'window' || appendTo === 'viewport') {
        appendToNode = document.body;
    }
    else if (appendTo === 'scrollParent') {
        appendToNode = popper_utils_1.getScrollParent(targetRef);
    }
    else if (isElement(appendTo)) {
        appendToNode = appendTo;
    }
    else {
        appendToNode = null;
    }
    return appendToNode;
}
;
var shouldAnimatePopover = function (_a) {
    var timeout = _a.timeout;
    return !!timeout;
};
/**
 * Popover
 */
var Popover = /** @class */ (function (_super) {
    tslib_1.__extends(Popover, _super);
    function Popover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.targetRef = null;
        _this.portalNode = null;
        _this.stylesObj = null;
        _this.appendToNode = null;
        _this.popperScheduleUpdate = null;
        _this.state = {
            isMounted: false
        };
        return _this;
    }
    Popover.prototype.getPopperContentStructure = function (childrenObject) {
        var _this = this;
        var _a = this.props, moveBy = _a.moveBy, appendTo = _a.appendTo, placement = _a.placement, showArrow = _a.showArrow, moveArrowTo = _a.moveArrowTo;
        var modifiers = createModifiers({ moveBy: moveBy, appendTo: appendTo });
        var popper = (React.createElement(react_popper_1.Popper, { modifiers: modifiers, placement: placement }, function (_a) {
            var ref = _a.ref, popperStyles = _a.style, popperPlacement = _a.placement, arrowProps = _a.arrowProps, scheduleUpdate = _a.scheduleUpdate;
            var _b;
            _this.popperScheduleUpdate = scheduleUpdate;
            return (React.createElement("div", { ref: ref, "data-hook": "popover-content", style: popperStyles, "data-placement": popperPlacement || placement, className: classNames(Popover_st_css_1.default.popover, (_b = {}, _b[Popover_st_css_1.default.withArrow] = showArrow, _b[Popover_st_css_1.default.popoverContent] = !showArrow, _b)) }, showArrow ?
                [
                    _this.renderArrow(arrowProps, moveArrowTo, popperPlacement),
                    React.createElement("div", { key: "popover-content", className: Popover_st_css_1.default.popoverContent }, childrenObject.Content)
                ] :
                React.createElement("div", { key: "popover-content" }, childrenObject.Content)));
        }));
        return this.wrapWithAnimations(popper);
    };
    Popover.prototype.applyStylesToPortaledNode = function () {
        var shown = this.props.shown;
        var shouldAnimate = shouldAnimatePopover(this.props);
        if (shouldAnimate || shown) {
            stylableUtils_1.attachStylesToNode(this.portalNode, this.stylesObj);
        }
        else {
            stylableUtils_1.detachStylesFromNode(this.portalNode, this.stylesObj);
        }
    };
    Popover.prototype.wrapWithAnimations = function (popper) {
        var _this = this;
        var _a = this.props, timeout = _a.timeout, shown = _a.shown;
        var shouldAnimate = shouldAnimatePopover(this.props);
        return shouldAnimate ? (React.createElement(react_transition_group_1.CSSTransition, { in: shown, timeout: Number(timeout), unmountOnExit: true, classNames: Popover_st_css_1.default.popoverAnimation, onExited: function () { return stylableUtils_1.detachStylesFromNode(_this.portalNode, _this.stylesObj); } }, popper)) :
            popper;
    };
    Popover.prototype.renderPopperContent = function (childrenObject) {
        var popper = this.getPopperContentStructure(childrenObject);
        return (this.portalNode ? (React.createElement(react_portal_1.Portal, { node: this.portalNode }, popper)) :
            popper);
    };
    Popover.prototype.renderArrow = function (arrowProps, moveArrowTo, placement) {
        return (React.createElement("div", { ref: arrowProps.ref, key: "popover-arrow", "data-hook": "popover-arrow", className: Popover_st_css_1.default.arrow, style: tslib_1.__assign({}, arrowProps.style, getArrowShift(moveArrowTo, placement)) }));
    };
    Popover.prototype.componentDidMount = function () {
        this.initAppendToNode();
        this.setState({ isMounted: true });
    };
    Popover.prototype.initAppendToNode = function () {
        var appendTo = this.props.appendTo;
        this.appendToNode = getAppendToNode({ appendTo: appendTo, targetRef: this.targetRef });
        if (this.appendToNode) {
            this.portalNode = document.createElement('div');
            this.portalNode.setAttribute('data-hook', 'popover-portal');
            /**
             * reset overlay wrapping layer
             * so that styles from copied classnames
             * won't break the overlay:
             * - content is position relative to body
             * - overlay layer is hidden
             */
            Object.assign(this.portalNode.style, {
                position: 'static',
                top: 0,
                left: 0,
                width: 0,
                height: 0
            });
            this.appendToNode.appendChild(this.portalNode);
        }
    };
    Popover.prototype.componentWillUnmount = function () {
        if (this.portalNode) {
            // FIXME: What if component is updated with a different appendTo? It is a far-fetched use-case,
            // but we would need to remove the portaled node, and created another one.
            this.appendToNode.removeChild(this.portalNode);
        }
        this.portalNode = null;
    };
    Popover.prototype.updatePosition = function () {
        if (this.popperScheduleUpdate) {
            this.popperScheduleUpdate();
        }
    };
    Popover.prototype.componentDidUpdate = function () {
        if (this.portalNode) {
            // Re-calculate the portal's styles
            this.stylesObj = Popover_st_css_1.default('root', {}, this.props);
            // Apply the styles to the portal
            this.applyStylesToPortaledNode();
        }
        // Update popper's position
        this.updatePosition();
    };
    Popover.prototype.render = function () {
        var _this = this;
        var _a = this.props, onMouseEnter = _a.onMouseEnter, onMouseLeave = _a.onMouseLeave, onKeyDown = _a.onKeyDown, onClick = _a.onClick, children = _a.children, shown = _a.shown, inlineStyles = _a.style, id = _a.id;
        var isMounted = this.state.isMounted;
        var childrenObject = utils_1.buildChildrenObject(children, { Element: null, Content: null });
        var shouldAnimate = shouldAnimatePopover(this.props);
        var shouldRenderPopper = isMounted && (shouldAnimate || shown);
        return (React.createElement(react_popper_1.Manager, null,
            React.createElement("div", tslib_1.__assign({ style: inlineStyles }, Popover_st_css_1.default('root', {}, this.props), { onMouseEnter: onMouseEnter, onMouseLeave: onMouseLeave, id: id }),
                React.createElement(react_popper_1.Reference, { innerRef: function (r) { return _this.targetRef = r; } }, function (_a) {
                    var ref = _a.ref;
                    return (React.createElement("div", { ref: ref, className: Popover_st_css_1.default.popoverElement, "data-hook": "popover-element", onClick: onClick, onKeyDown: onKeyDown }, childrenObject.Element));
                }),
                shouldRenderPopper && this.renderPopperContent(childrenObject))));
    };
    Popover.displayName = 'Popover';
    Popover.Element = utils_1.createComponentThatRendersItsChildren('Popover.Element');
    Popover.Content = utils_1.createComponentThatRendersItsChildren('Popover.Content');
    return Popover;
}(React.Component));
exports.Popover = Popover;
//# sourceMappingURL=Popover.js.map

/***/ }),
/* 585 */
/*!**********************************************************!*\
  !*** ../node_modules/popper.js/dist/umd/popper-utils.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.6
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function (global, factory) {
	 true ? factory(exports) :
	undefined;
}(this, (function (exports) { 'use strict';

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var window = element.ownerDocument.defaultView;
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element) {
    return document.body;
  }

  switch (element.nodeName) {
    case 'HTML':
    case 'BODY':
      return element.ownerDocument.body;
    case '#document':
      return element.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

var isBrowser = typeof window !== 'undefined' && typeof document !== 'undefined';

var isIE11 = isBrowser && !!(window.MSInputMethodContext && document.documentMode);
var isIE10 = isBrowser && /MSIE 10/.test(navigator.userAgent);

/**
 * Determines if the browser is Internet Explorer
 * @method
 * @memberof Popper.Utils
 * @param {Number} version to check
 * @returns {Boolean} isIE
 */
function isIE(version) {
  if (version === 11) {
    return isIE11;
  }
  if (version === 10) {
    return isIE10;
  }
  return isIE11 || isIE10;
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }

  var noOffsetParent = isIE(10) ? document.body : null;

  // NOTE: 1 DOM access here
  var offsetParent = element.offsetParent || null;
  // Skip hidden elements which don't have an offsetParent
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }

  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }

  // .offsetParent will return the closest TH, TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TH', 'TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return parseFloat(styles['border' + sideA + 'Width'], 10) + parseFloat(styles['border' + sideB + 'Width'], 10);
}

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE(10) ? parseInt(html['offset' + axis]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')]) + parseInt(computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')]) : 0);
}

function getWindowSizes(document) {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {}

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes(element.ownerDocument) : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);

  // In cases where the parent is fixed, we must ignore negative scroll in offset calc
  if (fixedPosition && isHTML) {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, 'left') : 0;

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Finds the first parent of an element that has a transformed property defined
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} first transformed parent or documentElement
 */

function getFixedPositionOffsetParent(element) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, 'transform') === 'none') {
    el = el.parentElement;
  }
  return el || document.documentElement;
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @param {Boolean} fixedPosition - Is in fixed position mode
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

  // NOTE: 1 DOM access here

  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(popper.ownerDocument),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  padding = padding || 0;
  var isPaddingNumber = typeof padding === 'number';
  boundaries.left += isPaddingNumber ? padding : padding.left || 0;
  boundaries.top += isPaddingNumber ? padding : padding.top || 0;
  boundaries.right -= isPaddingNumber ? padding : padding.right || 0;
  boundaries.bottom -= isPaddingNumber ? padding : padding.bottom || 0;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var called = false;
  return function () {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function () {
      called = false;
      fn();
    });
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

var supportsMicroTasks = isBrowser && window.Promise;

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsMicroTasks ? microtaskDebounce : taskDebounce;

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Get the position of the given element, relative to its offset parent
 * @method
 * @memberof Popper.Utils
 * @param {Element} element
 * @return {Object} position - Coordinates of the element and its `scrollTop`
 */
function getOffsetRect(element) {
  var elementRect = void 0;
  if (element.nodeName === 'HTML') {
    var _getWindowSizes = getWindowSizes(element.ownerDocument),
        width = _getWindowSizes.width,
        height = _getWindowSizes.height;

    elementRect = {
      width: width,
      height: height,
      left: 0,
      top: 0
    };
  } else {
    elementRect = {
      width: element.offsetWidth,
      height: element.offsetHeight,
      left: element.offsetLeft,
      top: element.offsetTop
    };
  }

  // position
  return getClientRect(elementRect);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var window = element.ownerDocument.defaultView;
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop || 0) + parseFloat(styles.marginBottom || 0);
  var y = parseFloat(styles.marginLeft || 0) + parseFloat(styles.marginRight || 0);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @param {Element} fixedPosition - is in fixed position mode
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Get the window associated with the element
 * @argument {Element} element
 * @returns {Window}
 */
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  getWindow(reference).removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier['function']) {
      // eslint-disable-line dot-notation
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier['function'] || modifier.fn; // eslint-disable-line dot-notation
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  getWindow(reference).addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

// This is here just for backward compatibility with versions lower than v1.10.3
// you should import the utilities using named exports, if you want them all use:
// ```
// import * as PopperUtils from 'popper-utils';
// ```
// The default export will be removed in the next major version.
var index = {
  computeAutoPlacement: computeAutoPlacement,
  debounce: debounce,
  findIndex: findIndex,
  getBordersSize: getBordersSize,
  getBoundaries: getBoundaries,
  getBoundingClientRect: getBoundingClientRect,
  getClientRect: getClientRect,
  getOffsetParent: getOffsetParent,
  getOffsetRect: getOffsetRect,
  getOffsetRectRelativeToArbitraryNode: getOffsetRectRelativeToArbitraryNode,
  getOuterSizes: getOuterSizes,
  getParentNode: getParentNode,
  getPopperOffsets: getPopperOffsets,
  getReferenceOffsets: getReferenceOffsets,
  getScroll: getScroll,
  getScrollParent: getScrollParent,
  getStyleComputedProperty: getStyleComputedProperty,
  getSupportedPropertyName: getSupportedPropertyName,
  getWindowSizes: getWindowSizes,
  isFixed: isFixed,
  isFunction: isFunction,
  isModifierEnabled: isModifierEnabled,
  isModifierRequired: isModifierRequired,
  isNumeric: isNumeric,
  removeEventListeners: removeEventListeners,
  runModifiers: runModifiers,
  setAttributes: setAttributes,
  setStyles: setStyles,
  setupEventListeners: setupEventListeners
};

exports.computeAutoPlacement = computeAutoPlacement;
exports.debounce = debounce;
exports.findIndex = findIndex;
exports.getBordersSize = getBordersSize;
exports.getBoundaries = getBoundaries;
exports.getBoundingClientRect = getBoundingClientRect;
exports.getClientRect = getClientRect;
exports.getOffsetParent = getOffsetParent;
exports.getOffsetRect = getOffsetRect;
exports.getOffsetRectRelativeToArbitraryNode = getOffsetRectRelativeToArbitraryNode;
exports.getOuterSizes = getOuterSizes;
exports.getParentNode = getParentNode;
exports.getPopperOffsets = getPopperOffsets;
exports.getReferenceOffsets = getReferenceOffsets;
exports.getScroll = getScroll;
exports.getScrollParent = getScrollParent;
exports.getStyleComputedProperty = getStyleComputedProperty;
exports.getSupportedPropertyName = getSupportedPropertyName;
exports.getWindowSizes = getWindowSizes;
exports.isFixed = isFixed;
exports.isFunction = isFunction;
exports.isModifierEnabled = isModifierEnabled;
exports.isModifierRequired = isModifierRequired;
exports.isNumeric = isNumeric;
exports.removeEventListeners = removeEventListeners;
exports.runModifiers = runModifiers;
exports.setAttributes = setAttributes;
exports.setStyles = setStyles;
exports.setupEventListeners = setupEventListeners;
exports['default'] = index;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=popper-utils.js.map


/***/ }),
/* 586 */
/*!**************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/assign.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/assign */ 587), __esModule: true };

/***/ }),
/* 587 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/assign.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.assign */ 588);
module.exports = __webpack_require__(/*! ../../modules/_core */ 91).Object.assign;


/***/ }),
/* 588 */
/*!********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.assign.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(/*! ./_export */ 140);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(/*! ./_object-assign */ 590) });


/***/ }),
/* 589 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_a-function.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 590 */
/*!*****************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-assign.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(/*! ./_object-keys */ 195);
var gOPS = __webpack_require__(/*! ./_object-gops */ 228);
var pIE = __webpack_require__(/*! ./_object-pie */ 198);
var toObject = __webpack_require__(/*! ./_to-object */ 313);
var IObject = __webpack_require__(/*! ./_iobject */ 311);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(/*! ./_fails */ 142)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 591 */
/*!******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_array-includes.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ 117);
var toLength = __webpack_require__(/*! ./_to-length */ 592);
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ 593);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 592 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-length.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ 224);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 593 */
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_to-absolute-index.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 224);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 594 */
/*!****************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/symbol/iterator.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol/iterator */ 595), __esModule: true };

/***/ }),
/* 595 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/fn/symbol/iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.string.iterator */ 596);
__webpack_require__(/*! ../../modules/web.dom.iterable */ 602);
module.exports = __webpack_require__(/*! ../../modules/_wks-ext */ 232).f('iterator');


/***/ }),
/* 596 */
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.string.iterator.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ 597)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ 315)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 597 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_string-at.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ 224);
var defined = __webpack_require__(/*! ./_defined */ 223);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 598 */
/*!***************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-create.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ 230);
var descriptor = __webpack_require__(/*! ./_property-desc */ 194);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 231);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ 113)(IteratorPrototype, __webpack_require__(/*! ./_wks */ 118)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 599 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-dps.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ 114);
var anObject = __webpack_require__(/*! ./_an-object */ 141);
var getKeys = __webpack_require__(/*! ./_object-keys */ 195);

module.exports = __webpack_require__(/*! ./_descriptors */ 116) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 600 */
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_html.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ 80).document;
module.exports = document && document.documentElement;


/***/ }),
/* 601 */
/*!**************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gpo.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ 92);
var toObject = __webpack_require__(/*! ./_to-object */ 313);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ 225)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 602 */
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/web.dom.iterable.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./es6.array.iterator */ 603);
var global = __webpack_require__(/*! ./_global */ 80);
var hide = __webpack_require__(/*! ./_hide */ 113);
var Iterators = __webpack_require__(/*! ./_iterators */ 229);
var TO_STRING_TAG = __webpack_require__(/*! ./_wks */ 118)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 603 */
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.array.iterator.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ 604);
var step = __webpack_require__(/*! ./_iter-step */ 605);
var Iterators = __webpack_require__(/*! ./_iterators */ 229);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 117);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ 315)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 604 */
/*!**********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_add-to-unscopables.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 605 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_iter-step.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 606 */
/*!*******************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/symbol.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/symbol */ 607), __esModule: true };

/***/ }),
/* 607 */
/*!**********************************************************!*\
  !*** ../node_modules/core-js/library/fn/symbol/index.js ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ 608);
__webpack_require__(/*! ../../modules/es6.object.to-string */ 613);
__webpack_require__(/*! ../../modules/es7.symbol.async-iterator */ 614);
__webpack_require__(/*! ../../modules/es7.symbol.observable */ 615);
module.exports = __webpack_require__(/*! ../../modules/_core */ 91).Symbol;


/***/ }),
/* 608 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.symbol.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(/*! ./_global */ 80);
var has = __webpack_require__(/*! ./_has */ 92);
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ 116);
var $export = __webpack_require__(/*! ./_export */ 140);
var redefine = __webpack_require__(/*! ./_redefine */ 316);
var META = __webpack_require__(/*! ./_meta */ 609).KEY;
var $fails = __webpack_require__(/*! ./_fails */ 142);
var shared = __webpack_require__(/*! ./_shared */ 226);
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ 231);
var uid = __webpack_require__(/*! ./_uid */ 197);
var wks = __webpack_require__(/*! ./_wks */ 118);
var wksExt = __webpack_require__(/*! ./_wks-ext */ 232);
var wksDefine = __webpack_require__(/*! ./_wks-define */ 233);
var enumKeys = __webpack_require__(/*! ./_enum-keys */ 610);
var isArray = __webpack_require__(/*! ./_is-array */ 611);
var anObject = __webpack_require__(/*! ./_an-object */ 141);
var isObject = __webpack_require__(/*! ./_is-object */ 115);
var toIObject = __webpack_require__(/*! ./_to-iobject */ 117);
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ 222);
var createDesc = __webpack_require__(/*! ./_property-desc */ 194);
var _create = __webpack_require__(/*! ./_object-create */ 230);
var gOPNExt = __webpack_require__(/*! ./_object-gopn-ext */ 612);
var $GOPD = __webpack_require__(/*! ./_object-gopd */ 318);
var $DP = __webpack_require__(/*! ./_object-dp */ 114);
var $keys = __webpack_require__(/*! ./_object-keys */ 195);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(/*! ./_object-gopn */ 317).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(/*! ./_object-pie */ 198).f = $propertyIsEnumerable;
  __webpack_require__(/*! ./_object-gops */ 228).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(/*! ./_library */ 196)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(/*! ./_hide */ 113)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 609 */
/*!********************************************************!*\
  !*** ../node_modules/core-js/library/modules/_meta.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(/*! ./_uid */ 197)('meta');
var isObject = __webpack_require__(/*! ./_is-object */ 115);
var has = __webpack_require__(/*! ./_has */ 92);
var setDesc = __webpack_require__(/*! ./_object-dp */ 114).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(/*! ./_fails */ 142)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 610 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_enum-keys.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(/*! ./_object-keys */ 195);
var gOPS = __webpack_require__(/*! ./_object-gops */ 228);
var pIE = __webpack_require__(/*! ./_object-pie */ 198);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 611 */
/*!************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_is-array.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(/*! ./_cof */ 312);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 612 */
/*!*******************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_object-gopn-ext.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(/*! ./_to-iobject */ 117);
var gOPN = __webpack_require__(/*! ./_object-gopn */ 317).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 613 */
/*!***********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.to-string.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {



/***/ }),
/* 614 */
/*!****************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es7.symbol.async-iterator.js ***!
  \****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ 233)('asyncIterator');


/***/ }),
/* 615 */
/*!************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es7.symbol.observable.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./_wks-define */ 233)('observable');


/***/ }),
/* 616 */
/*!************************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/set-prototype-of.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ 617), __esModule: true };

/***/ }),
/* 617 */
/*!*********************************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/set-prototype-of.js ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.set-prototype-of */ 618);
module.exports = __webpack_require__(/*! ../../modules/_core */ 91).Object.setPrototypeOf;


/***/ }),
/* 618 */
/*!******************************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.set-prototype-of.js ***!
  \******************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(/*! ./_export */ 140);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(/*! ./_set-proto */ 619).set });


/***/ }),
/* 619 */
/*!*************************************************************!*\
  !*** ../node_modules/core-js/library/modules/_set-proto.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(/*! ./_is-object */ 115);
var anObject = __webpack_require__(/*! ./_an-object */ 141);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(/*! ./_ctx */ 307)(Function.call, __webpack_require__(/*! ./_object-gopd */ 318).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 620 */
/*!**************************************************************!*\
  !*** ../node_modules/babel-runtime/core-js/object/create.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(/*! core-js/library/fn/object/create */ 621), __esModule: true };

/***/ }),
/* 621 */
/*!***********************************************************!*\
  !*** ../node_modules/core-js/library/fn/object/create.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.create */ 622);
var $Object = __webpack_require__(/*! ../../modules/_core */ 91).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 622 */
/*!********************************************************************!*\
  !*** ../node_modules/core-js/library/modules/es6.object.create.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ 140);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(/*! ./_object-create */ 230) });


/***/ }),
/* 623 */
/*!******************************************************************!*\
  !*** ../node_modules/create-react-context/lib/implementation.js ***!
  \******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _react = __webpack_require__(/*! react */ 0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ 1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gud = __webpack_require__(/*! gud */ 624);

var _gud2 = _interopRequireDefault(_gud);

var _warning = __webpack_require__(/*! fbjs/lib/warning */ 625);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MAX_SIGNED_31_BIT_INT = 1073741823;

// Inlined Object.is polyfill.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + (0, _gud2.default)() + '__';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    function Provider() {
      var _temp, _this, _ret;

      _classCallCheck(this, Provider);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.emitter = createEventEmitter(_this.props.value), _temp), _possibleConstructorReturn(_this, _ret);
    }

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    Provider.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits = void 0;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0; // No change
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;
          if (false) {}

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    Provider.prototype.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(_react.Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = _propTypes2.default.object.isRequired, _Provider$childContex);

  var Consumer = function (_Component2) {
    _inherits(Consumer, _Component2);

    function Consumer() {
      var _temp2, _this2, _ret2;

      _classCallCheck(this, Consumer);

      for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, _Component2.call.apply(_Component2, [this].concat(args))), _this2), _this2.state = {
        value: _this2.getValue()
      }, _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;
        if ((observedBits & changedBits) !== 0) {
          _this2.setState({ value: _this2.getValue() });
        }
      }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    Consumer.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }
      var observedBits = this.props.observedBits;

      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT // Subscribe to all changes by default
      : observedBits;
    };

    Consumer.prototype.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    Consumer.prototype.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    Consumer.prototype.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(_react.Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = _propTypes2.default.object, _Consumer$contextType);


  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

exports.default = createReactContext;
module.exports = exports['default'];

/***/ }),
/* 624 */
/*!************************************!*\
  !*** ../node_modules/gud/index.js ***!
  \************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {// @flow


var key = '__global_unique_id__';

module.exports = function() {
  return global[key] = (global[key] || 0) + 1;
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 33)))

/***/ }),
/* 625 */
/*!*******************************************!*\
  !*** ../node_modules/fbjs/lib/warning.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(/*! ./emptyFunction */ 137);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (false) { var printWarning; }

module.exports = warning;

/***/ }),
/* 626 */
/*!********************************************************************************!*\
  !*** ../node_modules/wix-ui-core/node_modules/react-transition-group/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(/*! ./CSSTransition */ 627));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(/*! ./ReplaceTransition */ 632));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ 322));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ 319));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),
/* 627 */
/*!****************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/node_modules/react-transition-group/CSSTransition.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ 1));

var _addClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/addClass */ 628));

var _removeClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/removeClass */ 631));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ 0));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ 319));

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ 321);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};

var propTypes =  false ? undefined : {};;
/**
 * A `Transition` component using CSS transitions and animations.
 * It's inspired by the excellent [ng-animate](http://www.nganimate.org/) library.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` stages of the transition. The first class is applied and then a
 * second "active" class in order to activate the css animation. After the animation,
 * matching `done` class names are applied to persist the animation state.
 *
 * When the `in` prop is toggled to `true` the Component will get
 * the `example-enter` CSS class and the `example-enter-active` CSS class
 * added in the next tick. This is a convention based on the `classNames` prop.
 */

var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node);
      }
    };

    _this.onEntered = function (node, appearing) {
      var _this$getClassNames3 = _this.getClassNames('enter'),
          doneClassName = _this$getClassNames3.doneClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          className = _this$getClassNames4.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames5.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames6 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames6.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var className = typeof classNames !== 'string' ? classNames[type] : classNames + '-' + type;
      var activeClassName = typeof classNames !== 'string' ? classNames[type + 'Active'] : className + '-active';
      var doneClassName = typeof classNames !== 'string' ? classNames[type + 'Done'] : className + '-done';
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames7 = this.getClassNames(type),
        className = _this$getClassNames7.className,
        activeClassName = _this$getClassNames7.activeClassName,
        doneClassName = _this$getClassNames7.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.propTypes =  false ? undefined : {};
var _default = CSSTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 628 */
/*!*****************************************************!*\
  !*** ../node_modules/dom-helpers/class/addClass.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 629);

exports.__esModule = true;
exports.default = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ 630));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),
/* 629 */
/*!************************************************************************************************!*\
  !*** ../node_modules/dom-helpers/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 630 */
/*!*****************************************************!*\
  !*** ../node_modules/dom-helpers/class/hasClass.js ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),
/* 631 */
/*!********************************************************!*\
  !*** ../node_modules/dom-helpers/class/removeClass.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),
/* 632 */
/*!********************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/node_modules/react-transition-group/ReplaceTransition.js ***!
  \********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ 1));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ 0));

var _reactDom = __webpack_require__(/*! react-dom */ 15);

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ 322));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var propTypes =  false ? undefined : {};;
/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */

var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  false ? undefined : {};
var _default = ReplaceTransition;
exports.default = _default;
module.exports = exports["default"];

/***/ }),
/* 633 */
/*!*********************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/node_modules/react-transition-group/utils/ChildMapping.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(/*! react */ 0);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),
/* 634 */
/*!***********************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/utils/index.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
exports.buildChildrenObject = function (children, childrenObject) {
    return React.Children.toArray(children).reduce(function (acc, child) {
        if (!React.isValidElement(child)) {
            return acc;
        }
        if (!child.type || !child.type['displayName']) {
            return acc;
        }
        var name = child.type['displayName'].split('.').pop();
        acc[name] = child;
        return acc;
    }, childrenObject || {});
};
exports.createComponentThatRendersItsChildren = function (displayName) {
    var Element = function (_a) {
        var children = _a.children;
        return typeof children === 'string' ? React.createElement('div', {}, children) : children;
    };
    Element.displayName = displayName;
    return Element;
};
exports.noop = function () { return null; };
exports.isReactElement = function (child, Element) {
    return child && child.type === Element;
};
//# sourceMappingURL=index.js.map

/***/ }),
/* 635 */
/*!*******************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/utils/stylableUtils.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.attachStylesToNode = function (node, stylesObj) {
    if (node) {
        stylesObj.className.split(' ')
            .forEach(function (className) { return node.classList.add(className); });
        Object.keys(stylesObj)
            .filter(function (key) { return key.startsWith('data-'); })
            .forEach(function (key) { return node.setAttribute(key, String(stylesObj[key])); });
    }
};
exports.detachStylesFromNode = function (node, stylesObj) {
    if (node) {
        stylesObj.className.split(' ')
            .forEach(function (className) { return node.classList.remove(className); });
        Object.keys(stylesObj)
            .filter(function (key) { return key.startsWith('data-'); })
            .forEach(function (key) { return node.removeAttribute(key); });
    }
};
//# sourceMappingURL=stylableUtils.js.map

/***/ }),
/* 636 */
/*!*******************************************!*\
  !*** ../node_modules/lodash/isElement.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! lodash */ 2).isElement

/***/ }),
/* 637 */
/*!********************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/DropdownContent/index.js ***!
  \********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DropdownContent_1 = __webpack_require__(/*! ./DropdownContent */ 638);
exports.DropdownContent = DropdownContent_1.DropdownContent;
//# sourceMappingURL=index.js.map

/***/ }),
/* 638 */
/*!******************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/DropdownContent/DropdownContent.js ***!
  \******************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 17);
var React = __webpack_require__(/*! react */ 0);
var DropdownContent_st_css_1 = __webpack_require__(/*! ./DropdownContent.st.css */ 27);
var DropdownOption_1 = __webpack_require__(/*! ../DropdownOption */ 234);
var NOT_HOVERED_INDEX = -1;
/**
 * DropdownContent
 */
var DropdownContent = /** @class */ (function (_super) {
    tslib_1.__extends(DropdownContent, _super);
    function DropdownContent(props) {
        var _this = _super.call(this, props) || this;
        _this.optionsContainerRef = null;
        _this.mouseCoords = { screenX: -1, screenY: -1 };
        _this.state = { hoveredIndex: NOT_HOVERED_INDEX };
        _this.onMouseMove = _this.onMouseMove.bind(_this);
        return _this;
    }
    DropdownContent.prototype.setHoveredIndex = function (index) {
        if (this.state.hoveredIndex !== index) {
            this.setState({
                hoveredIndex: index
            });
        }
    };
    DropdownContent.prototype.isValidOptionForSelection = function (option) {
        return option.isSelectable && !option.isDisabled;
    };
    DropdownContent.prototype.hoverNextItem = function (interval) {
        var options = this.props.options;
        if (!options.find(this.isValidOptionForSelection)) {
            return;
        }
        var hoveredIndex = this.state.hoveredIndex;
        while (true) {
            hoveredIndex += interval;
            if (hoveredIndex === options.length) {
                hoveredIndex = 0;
            }
            else if (hoveredIndex < 0) {
                hoveredIndex = options.length - 1;
            }
            if (this.isValidOptionForSelection(options[hoveredIndex])) {
                break;
            }
        }
        if (this.optionsContainerRef) {
            var hoveredOption = this.optionsContainerRef.childNodes[hoveredIndex];
            var hoveredOptionHeight = hoveredOption.offsetHeight;
            var hoveredOptionTop = hoveredOption.offsetTop - 1;
            var _a = this.optionsContainerRef, optionsContainerScrollTop = _a.scrollTop, optionsContainerClientHeight = _a.clientHeight;
            // If hovered option is not visible
            if (!(optionsContainerScrollTop <= hoveredOptionTop && (optionsContainerScrollTop + optionsContainerClientHeight) > hoveredOptionTop + hoveredOptionHeight)) {
                if (this.optionsContainerRef.scrollTop < hoveredOptionTop) {
                    this.optionsContainerRef.scrollTop = hoveredOptionHeight + hoveredOptionTop - optionsContainerClientHeight;
                }
                else {
                    this.optionsContainerRef.scrollTop = hoveredOptionTop;
                }
            }
        }
        this.setHoveredIndex(hoveredIndex);
    };
    DropdownContent.prototype.onKeyboardSelect = function () {
        var options = this.props.options;
        var hoveredIndex = this.state.hoveredIndex;
        var isValidIndex = hoveredIndex >= 0 && hoveredIndex < options.length;
        return isValidIndex ? options[hoveredIndex] : null;
    };
    DropdownContent.prototype.onKeyDown = function (eventKey) {
        switch (eventKey) {
            case 'ArrowUp': {
                return this.hoverNextItem(-1);
            }
            case 'ArrowDown': {
                return this.hoverNextItem(1);
            }
            case 'ArrowLeft':
            case 'ArrowRight': return;
            default: this.setHoveredIndex(NOT_HOVERED_INDEX);
        }
    };
    DropdownContent.prototype.onMouseMove = function (evt) {
        this.mouseCoords.screenX = evt.screenX;
        this.mouseCoords.screenY = evt.screenY;
    };
    DropdownContent.prototype.onMouseEnter = function (evt, index) {
        if (this.mouseCoords.screenX !== evt.screenX || this.mouseCoords.screenY !== evt.screenY) {
            this.setHoveredIndex(index);
        }
    };
    DropdownContent.prototype.render = function () {
        var _this = this;
        var _a = this.props, fixedHeader = _a.fixedHeader, fixedFooter = _a.fixedFooter, options = _a.options, selectedIds = _a.selectedIds, onOptionClick = _a.onOptionClick;
        var hoveredIndex = this.state.hoveredIndex;
        return (React.createElement("div", tslib_1.__assign({}, DropdownContent_st_css_1.default('root', {}, this.props), { onMouseMove: this.onMouseMove, tabIndex: 1000 }),
            fixedHeader,
            React.createElement("div", { role: "listbox", className: DropdownContent_st_css_1.default.optionsContainer, ref: function (optionsContainer) { return _this.optionsContainerRef = optionsContainer; } }, (options || []).map(function (option, index) { return (React.createElement(DropdownOption_1.DropdownOption, { className: DropdownContent_st_css_1.default.dropdownOption, "data-hook": "option", key: option.id, option: option, isHovered: hoveredIndex === index, isSelected: (selectedIds || []).includes(option.id), onClickHandler: _this.isValidOptionForSelection(option) ? function () { return onOptionClick(option); } : undefined, onMouseEnterHandler: _this.isValidOptionForSelection(option) ? function (evt) { return _this.onMouseEnter(evt, index); } : undefined })); })),
            fixedFooter));
    };
    DropdownContent.displayName = 'DropdownContent';
    return DropdownContent;
}(React.PureComponent));
exports.DropdownContent = DropdownContent;
//# sourceMappingURL=DropdownContent.js.map

/***/ }),
/* 639 */
/*!****************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/DropdownOption/DropdownOption.js ***!
  \****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 17);
var React = __webpack_require__(/*! react */ 0);
var DropdownOption_st_css_1 = __webpack_require__(/*! ./DropdownOption.st.css */ 16);
exports.DropdownOption = function (props) {
    var option = props.option, isSelected = props.isSelected, isHovered = props.isHovered, onClickHandler = props.onClickHandler, onMouseEnterHandler = props.onMouseEnterHandler;
    var disabled = option.isDisabled;
    var selectable = option.isSelectable;
    var hovered = !disabled && isHovered;
    var selected = !disabled && isSelected;
    return (React.createElement("div", tslib_1.__assign({}, DropdownOption_st_css_1.default('root', { disabled: disabled, selectable: selectable, hovered: hovered, selected: selected }, props), { onClick: onClickHandler, title: option.value, onMouseEnter: onMouseEnterHandler, role: "option", "aria-selected": selected }), option.render(option.value)));
};
exports.DropdownOption.displayName = 'DropdownOption';
//# sourceMappingURL=DropdownOption.js.map

/***/ }),
/* 640 */
/*!***************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/DropdownOption/OptionFactory.js ***!
  \***************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(/*! react */ 0);
var Divider_1 = __webpack_require__(/*! ../../components/deprecated/Divider */ 641);
var DropdownOption_st_css_1 = __webpack_require__(/*! ./DropdownOption.st.css */ 16);
var uniqueId = __webpack_require__(/*! lodash/uniqueId */ 239);
var createOption = function (option) {
    if (option === void 0) { option = null; }
    return Object.assign({
        id: option && (option.id || option.id === 0) ? option.id : uniqueId('Option'),
        isDisabled: false,
        isSelectable: true,
        value: null,
        render: function (val) { return val; }
    }, option);
};
var escapeRegExp = function (s) { return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'); };
var hightlightMatches = function (option, searchTerm) {
    var re = new RegExp("(" + escapeRegExp(searchTerm) + ")", 'gi');
    var parts = option.value.split(re).map(function (part, i) {
        return i % 2 ? React.createElement("mark", { className: DropdownOption_st_css_1.default.highlight, key: i }, part) : React.createElement("span", { className: DropdownOption_st_css_1.default.nonHighlight, key: i }, part);
    });
    return createOption({
        id: option.id,
        isDisabled: option.isDisabled,
        isSelectable: option.isSelectable,
        value: option.value,
        render: function () { return option.render(parts); }
    });
};
exports.OptionFactory = {
    create: createOption,
    createDivider: function (_a) {
        var _b = _a === void 0 ? {} : _a, className = _b.className, value = _b.value;
        return createOption({
            id: uniqueId('Divider'),
            isDisabled: false,
            isSelectable: false,
            render: value ? function () { return React.createElement(Divider_1.Divider, { className: className }, value); } : function () { return React.createElement(Divider_1.Divider, { className: className }); }
        });
    },
    createHighlighted: function (option, hightlightValue) {
        return option.value && hightlightValue ? hightlightMatches(option, hightlightValue) : option;
    }
};
//# sourceMappingURL=OptionFactory.js.map

/***/ }),
/* 641 */
/*!***********************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/deprecated/Divider/index.js ***!
  \***********************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Divider_1 = __webpack_require__(/*! ./Divider */ 642);
exports.Divider = Divider_1.Divider;
//# sourceMappingURL=index.js.map

/***/ }),
/* 642 */
/*!*************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/deprecated/Divider/Divider.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 17);
var React = __webpack_require__(/*! react */ 0);
var Divider_st_css_1 = __webpack_require__(/*! ./Divider.st.css */ 19);
/**
 * Divider
 */
exports.Divider = function (props) {
    var children = props.children, vertical = props.vertical;
    var customDivider = !!children;
    return (React.createElement("div", tslib_1.__assign({}, Divider_st_css_1.default('root', { vertical: vertical && !customDivider, customDivider: customDivider }, props)), children));
};
exports.Divider.displayName = 'Divider';
//# sourceMappingURL=Divider.js.map

/***/ }),
/* 643 */
/*!*****************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/components/Dropdown/constants.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CLICK = 'click';
exports.HOVER = 'hover';
//# sourceMappingURL=constants.js.map

/***/ }),
/* 644 */
/*!************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/clients/GoogleMaps/types.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Handler;
(function (Handler) {
    Handler["geocode"] = "geocode";
    Handler["places"] = "places";
})(Handler = exports.Handler || (exports.Handler = {}));
//# sourceMappingURL=types.js.map

/***/ }),
/* 645 */
/*!************************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/clients/GoogleMaps/google2address/google2address.js ***!
  \************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ 17);
/*eslint camelcase: off*/
var intersection_1 = __webpack_require__(/*! ../../../utils/intersection */ 323);
var first = __webpack_require__(/*! lodash/first */ 324);
exports.trySetStreetNumberIfNotReceived = function (google, inputValue) {
    var addressParts = inputValue.match(/^\d+[ -/]*\d*[^\D]/);
    var hasStreetNumber = google.address_components.some(function (address) { return address.types.some(function (t) { return t === 'street_number'; }); });
    if (hasStreetNumber || !addressParts) {
        return google;
    }
    google.address_components.unshift({
        long_name: addressParts.join(),
        short_name: addressParts.join(),
        types: ['street_number']
    });
    return google;
};
var FULL_ADDRESS_ALLOWED_TYPES = [
    'street_number',
    'route',
    'locality',
    'administrative_area_level_4',
    'administrative_area_level_3',
    'administrative_area_level_2',
    'administrative_area_level_1',
    'country',
    'postal_code'
];
var ALLOWED_TYPES_TO_INNER_FIELD = {
    street_number: 'streetNumber',
    administrative_area_level_4: 'adminArea4',
    administrative_area_level_3: 'adminArea3',
    administrative_area_level_2: 'adminArea2',
    administrative_area_level_1: 'adminArea1',
    postal_code: 'postalCode'
};
function getInnerFieldName(type) {
    return ALLOWED_TYPES_TO_INNER_FIELD[type] || type;
}
function convertToFullAddress(googleResponse) {
    var addressComponents = {};
    googleResponse.address_components.forEach(function (addressComponent) {
        var type = first(intersection_1.intersection(addressComponent.types, FULL_ADDRESS_ALLOWED_TYPES));
        if (type) {
            addressComponents[getInnerFieldName(type)] = {
                long: addressComponent.long_name,
                short: addressComponent.short_name
            };
        }
    });
    return tslib_1.__assign({ formatted: googleResponse.formatted_address, location: googleResponse.geometry ? googleResponse.geometry.location : undefined }, addressComponents);
}
exports.convertToFullAddress = convertToFullAddress;
//# sourceMappingURL=google2address.js.map

/***/ }),
/* 646 */
/*!******************************************!*\
  !*** ../node_modules/lodash/throttle.js ***!
  \******************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! lodash */ 2).throttle

/***/ }),
/* 647 */
/*!*****************************************!*\
  !*** ../node_modules/lodash/isArray.js ***!
  \*****************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! lodash */ 2).isArray

/***/ }),
/* 648 */
/*!*****************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/clients/GoogleMaps/GoogleMapsIframeClient.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IframesManager_1 = __webpack_require__(/*! ./IframesManager/IframesManager */ 649);
var handlersName_1 = __webpack_require__(/*! ./handlersName */ 325);
var utils_1 = __webpack_require__(/*! ./utils */ 651);
var GoogleMapsIframeClient = /** @class */ (function () {
    function GoogleMapsIframeClient() {
        var _this = this;
        this._iframesManager = new IframesManager_1.IframesManager();
        this._promisesMap = new Map();
        this._useClientId = false;
        this.handleMessage = function (event) {
            var data = event.data;
            if (data.requestId && _this._promisesMap.has(data.requestId)) {
                var promise = _this._promisesMap.get(data.requestId);
                data.status === 'OK' ? promise.resolve(data.results) : promise.reject();
            }
        };
        window.addEventListener('message', this.handleMessage, false);
    }
    GoogleMapsIframeClient.prototype.useClientId = function () {
        this._useClientId = true;
    };
    GoogleMapsIframeClient.prototype.getOrAddIframe = function (key, lang) {
        if (this._iframesManager.hasIframe(key, lang)) {
            return this._iframesManager.getIframe(key, lang);
        }
        else if (this._useClientId) {
            return this._iframesManager.addIframe({ lang: lang, clientId: key });
        }
        else {
            return this._iframesManager.addIframe({ lang: lang, apiKey: key });
        }
    };
    GoogleMapsIframeClient.prototype.autocomplete = function (key, lang, request) {
        var _this = this;
        var requestIframe = this.getOrAddIframe(key, lang);
        var requestId = utils_1.generateID();
        var requestPromise = new Promise(function (resolve, reject) {
            _this._promisesMap.set(requestId, { requestPromise: requestPromise, resolve: resolve, reject: reject });
        });
        requestIframe.postMessage({ request: request, requestId: requestId, method: handlersName_1.autocompleteHandlerName }, '*');
        return requestPromise;
    };
    GoogleMapsIframeClient.prototype.geocode = function (key, lang, request) {
        var _this = this;
        var requestIframe = this.getOrAddIframe(key, lang);
        var requestId = utils_1.generateID();
        var requestPromise = new Promise(function (resolve, reject) {
            _this._promisesMap.set(requestId, { requestPromise: requestPromise, resolve: resolve, reject: reject });
        });
        requestIframe.postMessage({ request: request, requestId: requestId, method: handlersName_1.geocodeHandlerName }, '*');
        return requestPromise;
    };
    GoogleMapsIframeClient.prototype.placeDetails = function (key, lang, request) {
        var _this = this;
        var requestIframe = this.getOrAddIframe(key, lang);
        var requestId = utils_1.generateID();
        var requestPromise = new Promise(function (resolve, reject) {
            _this._promisesMap.set(requestId, { requestPromise: requestPromise, resolve: resolve, reject: reject });
        });
        requestIframe.postMessage({ request: request, requestId: requestId, method: handlersName_1.placeDetailsHandlerName }, '*');
        return requestPromise;
    };
    return GoogleMapsIframeClient;
}());
exports.GoogleMapsIframeClient = GoogleMapsIframeClient;
//# sourceMappingURL=GoogleMapsIframeClient.js.map

/***/ }),
/* 649 */
/*!************************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/clients/GoogleMaps/IframesManager/IframesManager.js ***!
  \************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GoogleRequestHandler_1 = __webpack_require__(/*! ../GoogleRequestHandler/GoogleRequestHandler */ 650);
var handlerNames = __webpack_require__(/*! ../handlersName */ 325);
var IframesManager = /** @class */ (function () {
    function IframesManager() {
        this._iframeMap = new Map();
    }
    IframesManager.getKey = function (apiKey, lang) {
        return apiKey + "-" + lang;
    };
    IframesManager.prototype.addIframe = function (_a) {
        var apiKey = _a.apiKey, lang = _a.lang, clientId = _a.clientId;
        if (this.hasIframe(apiKey, lang)) {
            return this.getIframe(apiKey, lang);
        }
        var iframeKey = IframesManager.getKey(apiKey, lang);
        var iframe = document.createElement('iframe');
        iframe.setAttribute('data-lang', lang);
        iframe.setAttribute('data-api-key', clientId || apiKey);
        iframe.style.display = 'none';
        document.body.appendChild(iframe);
        this.populateIframe(iframe, apiKey, lang, clientId);
        this._iframeMap.set(iframeKey, iframe);
        return iframe.contentWindow;
    };
    IframesManager.prototype.getIframe = function (key, lang) {
        var iframeKey = IframesManager.getKey(key, lang);
        return this._iframeMap.get(iframeKey).contentWindow;
    };
    IframesManager.prototype.hasIframe = function (key, lang) {
        var iframeKey = IframesManager.getKey(key, lang);
        return this._iframeMap.has(iframeKey);
    };
    IframesManager.prototype.removeAllIframes = function () {
        this._iframeMap.forEach(function (iframe) { return iframe.remove(); });
        this._iframeMap.clear();
    };
    IframesManager.prototype.populateIframe = function (iframe, apiKey, lang, clientId) {
        var iframeBody = iframe.contentWindow.document.body;
        iframeBody.appendChild(this.createInitializationScript());
        iframeBody.appendChild(this.createGoogleMapsScript(apiKey, lang, clientId));
    };
    IframesManager.prototype.createInitializationScript = function () {
        var script = document.createElement('script');
        script.innerText = 'window.initAutoComplete = (' + GoogleRequestHandler_1.googleRequestHandler.toString() + ')(window, ' + JSON.stringify(handlerNames) + '); window.googleReady = () => window.initAutoComplete(window.google);';
        return script;
    };
    IframesManager.prototype.createGoogleMapsScript = function (apiKey, lang, clientId) {
        var script = document.createElement('script');
        script.src = IframesManager.generateUrl({ apiKey: apiKey, lang: lang, clientId: clientId });
        return script;
    };
    IframesManager.generateUrl = function (_a) {
        var apiKey = _a.apiKey, clientId = _a.clientId, lang = _a.lang;
        if (clientId) {
            return "https://maps.googleapis.com/maps/api/js?libraries=places&client=" + clientId + "&language=" + lang + "&callback=googleReady";
        }
        else {
            return "https://maps.googleapis.com/maps/api/js?libraries=places&key=" + apiKey + "&language=" + lang + "&callback=googleReady";
        }
    };
    return IframesManager;
}());
exports.IframesManager = IframesManager;
//# sourceMappingURL=IframesManager.js.map

/***/ }),
/* 650 */
/*!************************************************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/clients/GoogleMaps/GoogleRequestHandler/GoogleRequestHandler.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.googleRequestHandler = function (eventEmitter, handlersName) {
    var context = {
        handleGoogleRequest: handleGoogleRequest,
        requestsQueue: [],
        googleInstance: undefined,
        _autocomplete: undefined,
        _placesServices: undefined,
        _geocoder: undefined
    };
    var handlerMap = {};
    handlerMap[handlersName.autocompleteHandlerName] = autocomplete;
    handlerMap[handlersName.geocodeHandlerName] = geocode;
    handlerMap[handlersName.placeDetailsHandlerName] = getDetails;
    function handleGoogleRequest(event) {
        if (!event.data.method) {
            throw 'no method was supplied';
        }
        var handler = handlerMap[event.data.method];
        handler(event);
    }
    var locationFuncOrValue = function (locationProp) {
        return typeof locationProp === 'function' ? locationProp() : locationProp;
    };
    var serializeResult = function (results) { return Object.assign(results, {
        geometry: {
            location: {
                lat: locationFuncOrValue(results.geometry.location.lat),
                lng: locationFuncOrValue(results.geometry.location.lng)
            }
        }
    }); };
    function autocomplete(event) {
        !context._autocomplete ? addToQueue(event) : handleAutocompleteRequest(event);
    }
    function geocode(event) {
        !context._geocoder ? addToQueue(event) : handleGeocodeRequest(event);
    }
    function getDetails(event) {
        !context._placesServices ? addToQueue(event) : handleGetDetailsRequest(event);
    }
    function addToQueue(event) {
        context.requestsQueue.unshift(event);
    }
    function handleAutocompleteRequest(event) {
        var request = typeof event.data.request === 'string' ? { input: event.data.request } : event.data.request;
        context._autocomplete.getPlacePredictions(request, function (results, status) {
            if ((status !== context.googleInstance.maps.GeocoderStatus.OK) && (status !== context.googleInstance.maps.GeocoderStatus.ZERO_RESULTS)) {
                event.source.postMessage({ results: results, status: 'ERROR', requestId: event.data.requestId }, '*');
            }
            else {
                event.source.postMessage({ results: results, status: 'OK', requestId: event.data.requestId }, '*');
            }
        });
    }
    function handleGeocodeRequest(event) {
        var request = typeof event.data.request === 'string' ? { address: event.data.request } : event.data.request;
        context._geocoder.geocode(request, function (results, status) {
            if ((status !== context.googleInstance.maps.GeocoderStatus.OK) && (status !== context.googleInstance.maps.GeocoderStatus.ZERO_RESULTS)) {
                event.source.postMessage({ results: results, status: 'ERROR', requestId: event.data.requestId }, '*');
            }
            else {
                event.source.postMessage({
                    results: results.map(function (element) {
                        return serializeResult(element);
                    }),
                    status: 'OK', requestId: event.data.requestId
                }, '*');
            }
        });
    }
    function handleGetDetailsRequest(event) {
        var request = typeof event.data.request === 'string' ? { placeId: event.data.request } : event.data.request;
        context._placesServices.getDetails(request, function (results, status) {
            if ((status !== context.googleInstance.maps.GeocoderStatus.OK) && (status !== context.googleInstance.maps.GeocoderStatus.ZERO_RESULTS)) {
                event.source.postMessage({ results: results, status: 'ERROR', requestId: event.data.requestId }, '*');
            }
            else {
                results.photos = {};
                event.source.postMessage({
                    results: serializeResult(results),
                    status: 'OK', requestId: event.data.requestId
                }, '*');
            }
        });
    }
    var initRequestHandler = function (googleInstance) {
        context.googleInstance = googleInstance;
        context._autocomplete = new googleInstance.maps.places.AutocompleteService();
        context._geocoder = new googleInstance.maps.Geocoder();
        var map = new googleInstance.maps.Map(document.createElement('div'));
        context._placesServices = new googleInstance.maps.places.PlacesService(map);
        context.requestsQueue.forEach(function (request) { return handleGoogleRequest(request); });
    };
    eventEmitter.addEventListener('message', context.handleGoogleRequest, false);
    return initRequestHandler;
};
//# sourceMappingURL=GoogleRequestHandler.js.map

/***/ }),
/* 651 */
/*!************************************************************************!*\
  !*** ../node_modules/wix-ui-core/dist/src/clients/GoogleMaps/utils.js ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var s4 = function () { return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1); };
exports.generateID = function () { return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4(); };
//# sourceMappingURL=utils.js.map

/***/ }),
/* 652 */
/*!*******************************************************!*\
  !*** ./components/AddressInput/AddressInput.santa.js ***!
  \*******************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createReactClass = __webpack_require__(/*! create-react-class */ 37);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _santaComponents = __webpack_require__(/*! santa-components */ 25);

var _AddressInput = __webpack_require__(/*! ./AddressInput */ 306);

var _AddressInputSt = __webpack_require__(/*! ./AddressInput.st.css */ 235);

var _AddressInputSt2 = _interopRequireDefault(_AddressInputSt);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapped = function wrapped(props) {
  return _santaComponents.utils.createReactElement(_AddressInput.AddressInput, props);
};
var skinBasedComp = _santaComponents.mixins.skinBasedComp,
    runTimeCompData = _santaComponents.mixins.runTimeCompData,
    inputFocusMixin = _santaComponents.mixins.inputFocusMixin,
    validatableWithSyncMixin = _santaComponents.mixins.validatableWithSyncMixin,
    textScaleMixin = _santaComponents.mixins.textScaleMixin;

var MIN_FONT_SIZE = 6;
var MAX_FONT_SIZE = 176;

var getComponentSkins = function getComponentSkins() {
  return {
    'wixui.skins.AddressInput': _AddressInputSt2.default.$skin
  };
};

var addressInputSanta = (0, _createReactClass2.default)({
  displayName: 'AddressInputSanta',

  mixins: [skinBasedComp(getComponentSkins()), textScaleMixin(getComponentSkins()), runTimeCompData, inputFocusMixin, validatableWithSyncMixin.validatableWithSync],

  statics: {
    getComponentSkins: getComponentSkins,
    behaviors: _extends({}, validatableWithSyncMixin.VALIDATABLE_WITH_SYNC_BEHAVIORS, inputFocusMixin.INPUT_FOCUS_BEHAVIORS)
  },

  propTypes: {
    componentPreviewState: _santaComponents.santaTypesDefinitions.RenderFlags.componentPreviewState,
    styleId: _santaComponents.santaTypesDefinitions.Component.styleId,
    style: _santaComponents.santaTypesDefinitions.Component.style,
    compProp: _santaComponents.santaTypesDefinitions.Component.compProp.isRequired,
    compData: _santaComponents.santaTypesDefinitions.Component.compData.isRequired,
    id: _santaComponents.santaTypesDefinitions.Component.id,
    shouldResetComponent: _santaComponents.santaTypesDefinitions.RenderFlags.shouldResetComponent,
    isMobileView: _santaComponents.santaTypesDefinitions.isMobileView,
    scale: _santaComponents.santaTypesDefinitions.Component.scale
  },

  getInitialState: function getInitialState() {
    return validatableWithSyncMixin.getPublicState();
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    if (this.props.shouldResetComponent && prevProps.shouldResetComponent !== this.props.shouldResetComponent) {
      this.hideValidityIndication();
      this.refs[''].close();
      this.updateData({ value: { formatted: '' } });
    }
  },
  onSelect: function onSelect(value) {
    this.updateData({ value: value });
    this.handleAction('change');
  },
  onFocus: function onFocus() {
    this.handleAction('focus');
  },
  onBlur: function onBlur() {
    this.handleAction('blur');
    this.showValidityIndication();
    this.refs[''].close();
  },
  onChange: function onChange() {
    this.hideValidityIndication();
  },
  focus: function focus() {
    this.refs[''].focus();
  },
  blur: function blur() {
    this.refs[''].blur();
  },
  calcStyle: function calcStyle() {
    var result = _extends({}, this.props.style);
    var doit = parseInt(this.getFontSize('inputFont').fontSize, 10);
    var fontSize = isNaN(doit) ? 16 : doit;

    if (this.props.isMobileView) {
      result.fontSize = Math.min(Math.max(fontSize, MIN_FONT_SIZE), MAX_FONT_SIZE);
    }

    return result;
  },
  getSkinProperties: function getSkinProperties() {
    return {
      '': {
        parentConst: wrapped,
        previewState: this.props.componentPreviewState,
        placeholder: this.props.compData.placeholder,
        styleId: this.props.styleId,
        className: this.props.styleId,
        apiKey: this.props.compData.googleMapsApiKey,
        readOnly: this.props.compProp.readOnly,
        locationIcon: this.props.compProp.iconVisible,
        alignment: this.props.compProp.alignment,
        showDividers: this.props.compProp.dividerVisible,
        updateData: this.updateData,
        handleAction: this.handleAction,
        style: this.calcStyle(),
        value: this.props.compData.value,
        disabled: this.props.compProp.isDisabled,
        id: this.props.id,
        onSelect: this.onSelect,
        onFocus: this.onFocus,
        onBlur: this.onBlur,
        onChange: this.onChange,
        hasError: !this.isValid() && this.shouldShowValidityIndication(),
        lang: this.props.compData.locale,
        isMobileView: this.props.isMobileView,
        countryCode: this.props.compData.filter ? this.props.compData.filter.country : undefined
      }
    };
  }
});

exports.default = addressInputSanta;

/***/ }),
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */
/*!************************************************************!*\
  !*** ../node_modules/react-portal/es/index.js + 5 modules ***!
  \************************************************************/
/*! exports provided: Portal, PortalWithState */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with external {"amd":"prop-types","umd":"prop-types","commonjs":"prop-types","commonjs2":"prop-types","root":"prop-types"} (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external {"amd":"react","umd":"react","commonjs":"react","commonjs2":"react","root":"React"} (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external {"amd":"reactDOM","umd":"react-dom","commonjs":"react-dom","commonjs2":"react-dom","root":"ReactDOM"} (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external {"amd":"reactDOM","umd":"react-dom","commonjs":"react-dom","commonjs2":"react-dom","root":"ReactDOM"}
var external_amd_reactDOM_umd_react_dom_commonjs_react_dom_commonjs2_react_dom_root_ReactDOM_ = __webpack_require__(15);
var external_amd_reactDOM_umd_react_dom_commonjs_react_dom_commonjs2_react_dom_root_ReactDOM_default = /*#__PURE__*/__webpack_require__.n(external_amd_reactDOM_umd_react_dom_commonjs_react_dom_commonjs2_react_dom_root_ReactDOM_);

// EXTERNAL MODULE: external {"amd":"react","umd":"react","commonjs":"react","commonjs2":"react","root":"React"}
var external_amd_react_umd_react_commonjs_react_commonjs2_react_root_React_ = __webpack_require__(0);
var external_amd_react_umd_react_commonjs_react_commonjs2_react_root_React_default = /*#__PURE__*/__webpack_require__.n(external_amd_react_umd_react_commonjs_react_commonjs2_react_root_React_);

// EXTERNAL MODULE: external {"amd":"prop-types","umd":"prop-types","commonjs":"prop-types","commonjs2":"prop-types","root":"prop-types"}
var external_amd_prop_types_umd_prop_types_commonjs_prop_types_commonjs2_prop_types_root_prop_types_ = __webpack_require__(1);
var external_amd_prop_types_umd_prop_types_commonjs_prop_types_commonjs2_prop_types_root_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_amd_prop_types_umd_prop_types_commonjs_prop_types_commonjs2_prop_types_root_prop_types_);

// CONCATENATED MODULE: ../node_modules/react-portal/es/utils.js
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
// CONCATENATED MODULE: ../node_modules/react-portal/es/Portal.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Portal_Portal = function (_React$Component) {
  _inherits(Portal, _React$Component);

  function Portal() {
    _classCallCheck(this, Portal);

    return _possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  _createClass(Portal, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
    }
  }, {
    key: 'render',
    value: function render() {
      if (!canUseDOM) {
        return null;
      }
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }
      return external_amd_reactDOM_umd_react_dom_commonjs_react_dom_commonjs2_react_dom_root_ReactDOM_default.a.createPortal(this.props.children, this.props.node || this.defaultNode);
    }
  }]);

  return Portal;
}(external_amd_react_umd_react_commonjs_react_commonjs2_react_root_React_default.a.Component);

Portal_Portal.propTypes = {
  children: external_amd_prop_types_umd_prop_types_commonjs_prop_types_commonjs2_prop_types_root_prop_types_default.a.node.isRequired,
  node: external_amd_prop_types_umd_prop_types_commonjs_prop_types_commonjs2_prop_types_root_prop_types_default.a.any
};

/* harmony default export */ var es_Portal = (Portal_Portal);
// CONCATENATED MODULE: ../node_modules/react-portal/es/LegacyPortal.js
var LegacyPortal_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function LegacyPortal_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function LegacyPortal_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function LegacyPortal_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This file is a fallback for a consumer who is not yet on React 16
// as createPortal was introduced in React 16





var LegacyPortal_Portal = function (_React$Component) {
  LegacyPortal_inherits(Portal, _React$Component);

  function Portal() {
    LegacyPortal_classCallCheck(this, Portal);

    return LegacyPortal_possibleConstructorReturn(this, (Portal.__proto__ || Object.getPrototypeOf(Portal)).apply(this, arguments));
  }

  LegacyPortal_createClass(Portal, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.renderPortal();
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(props) {
      this.renderPortal();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      external_amd_reactDOM_umd_react_dom_commonjs_react_dom_commonjs2_react_dom_root_ReactDOM_default.a.unmountComponentAtNode(this.defaultNode || this.props.node);
      if (this.defaultNode) {
        document.body.removeChild(this.defaultNode);
      }
      this.defaultNode = null;
      this.portal = null;
    }
  }, {
    key: 'renderPortal',
    value: function renderPortal(props) {
      if (!this.props.node && !this.defaultNode) {
        this.defaultNode = document.createElement('div');
        document.body.appendChild(this.defaultNode);
      }

      var children = this.props.children;
      // https://gist.github.com/jimfb/d99e0678e9da715ccf6454961ef04d1b
      if (typeof this.props.children.type === 'function') {
        children = external_amd_react_umd_react_commonjs_react_commonjs2_react_root_React_default.a.cloneElement(this.props.children);
      }

      this.portal = external_amd_reactDOM_umd_react_dom_commonjs_react_dom_commonjs2_react_dom_root_ReactDOM_default.a.unstable_renderSubtreeIntoContainer(this, children, this.props.node || this.defaultNode);
    }
  }, {
    key: 'render',
    value: function render() {
      return null;
    }
  }]);

  return Portal;
}(external_amd_react_umd_react_commonjs_react_commonjs2_react_root_React_default.a.Component);

/* harmony default export */ var LegacyPortal = (LegacyPortal_Portal);


LegacyPortal_Portal.propTypes = {
  children: external_amd_prop_types_umd_prop_types_commonjs_prop_types_commonjs2_prop_types_root_prop_types_default.a.node.isRequired,
  node: external_amd_prop_types_umd_prop_types_commonjs_prop_types_commonjs2_prop_types_root_prop_types_default.a.any
};
// CONCATENATED MODULE: ../node_modules/react-portal/es/PortalCompat.js





var PortalCompat_Portal = void 0;

if (external_amd_reactDOM_umd_react_dom_commonjs_react_dom_commonjs2_react_dom_root_ReactDOM_default.a.createPortal) {
  PortalCompat_Portal = es_Portal;
} else {
  PortalCompat_Portal = LegacyPortal;
}

/* harmony default export */ var PortalCompat = (PortalCompat_Portal);
// CONCATENATED MODULE: ../node_modules/react-portal/es/PortalWithState.js
var PortalWithState_createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function PortalWithState_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PortalWithState_possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function PortalWithState_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var KEYCODES = {
  ESCAPE: 27
};

var PortalWithState_PortalWithState = function (_React$Component) {
  PortalWithState_inherits(PortalWithState, _React$Component);

  function PortalWithState(props) {
    PortalWithState_classCallCheck(this, PortalWithState);

    var _this = PortalWithState_possibleConstructorReturn(this, (PortalWithState.__proto__ || Object.getPrototypeOf(PortalWithState)).call(this, props));

    _this.portalNode = null;
    _this.state = { active: !!props.defaultOpen };
    _this.openPortal = _this.openPortal.bind(_this);
    _this.closePortal = _this.closePortal.bind(_this);
    _this.wrapWithPortal = _this.wrapWithPortal.bind(_this);
    _this.handleOutsideMouseClick = _this.handleOutsideMouseClick.bind(_this);
    _this.handleKeydown = _this.handleKeydown.bind(_this);
    return _this;
  }

  PortalWithState_createClass(PortalWithState, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      if (this.props.closeOnEsc) {
        document.addEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnOutsideClick) {
        document.addEventListener('click', this.handleOutsideMouseClick);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      if (this.props.closeOnEsc) {
        document.removeEventListener('keydown', this.handleKeydown);
      }
      if (this.props.closeOnOutsideClick) {
        document.removeEventListener('click', this.handleOutsideMouseClick);
      }
    }
  }, {
    key: 'openPortal',
    value: function openPortal(e) {
      if (this.state.active) {
        return;
      }
      if (e && e.nativeEvent) {
        e.nativeEvent.stopImmediatePropagation();
      }
      this.setState({ active: true }, this.props.onOpen);
    }
  }, {
    key: 'closePortal',
    value: function closePortal() {
      if (!this.state.active) {
        return;
      }
      this.setState({ active: false }, this.props.onClose);
    }
  }, {
    key: 'wrapWithPortal',
    value: function wrapWithPortal(children) {
      var _this2 = this;

      if (!this.state.active) {
        return null;
      }
      return external_amd_react_umd_react_commonjs_react_commonjs2_react_root_React_default.a.createElement(
        PortalCompat,
        {
          node: this.props.node,
          key: 'react-portal',
          ref: function ref(portalNode) {
            return _this2.portalNode = portalNode;
          }
        },
        children
      );
    }
  }, {
    key: 'handleOutsideMouseClick',
    value: function handleOutsideMouseClick(e) {
      if (!this.state.active) {
        return;
      }
      var root = this.portalNode.props.node || this.portalNode.defaultNode;
      if (!root || root.contains(e.target) || e.button && e.button !== 0) {
        return;
      }
      this.closePortal();
    }
  }, {
    key: 'handleKeydown',
    value: function handleKeydown(e) {
      if (e.keyCode === KEYCODES.ESCAPE && this.state.active) {
        this.closePortal();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return this.props.children({
        openPortal: this.openPortal,
        closePortal: this.closePortal,
        portal: this.wrapWithPortal,
        isOpen: this.state.active
      });
    }
  }]);

  return PortalWithState;
}(external_amd_react_umd_react_commonjs_react_commonjs2_react_root_React_default.a.Component);

PortalWithState_PortalWithState.propTypes = {
  children: external_amd_prop_types_umd_prop_types_commonjs_prop_types_commonjs2_prop_types_root_prop_types_default.a.func.isRequired,
  defaultOpen: external_amd_prop_types_umd_prop_types_commonjs_prop_types_commonjs2_prop_types_root_prop_types_default.a.bool,
  node: external_amd_prop_types_umd_prop_types_commonjs_prop_types_commonjs2_prop_types_root_prop_types_default.a.any,
  closeOnEsc: external_amd_prop_types_umd_prop_types_commonjs_prop_types_commonjs2_prop_types_root_prop_types_default.a.bool,
  closeOnOutsideClick: external_amd_prop_types_umd_prop_types_commonjs_prop_types_commonjs2_prop_types_root_prop_types_default.a.bool,
  onOpen: external_amd_prop_types_umd_prop_types_commonjs_prop_types_commonjs2_prop_types_root_prop_types_default.a.func,
  onClose: external_amd_prop_types_umd_prop_types_commonjs_prop_types_commonjs2_prop_types_root_prop_types_default.a.func
};

PortalWithState_PortalWithState.defaultProps = {
  onOpen: function onOpen() {},
  onClose: function onClose() {}
};

/* harmony default export */ var es_PortalWithState = (PortalWithState_PortalWithState);
// CONCATENATED MODULE: ../node_modules/react-portal/es/index.js
/* concated harmony reexport Portal */__webpack_require__.d(__webpack_exports__, "Portal", function() { return PortalCompat; });
/* concated harmony reexport PortalWithState */__webpack_require__.d(__webpack_exports__, "PortalWithState", function() { return es_PortalWithState; });





/***/ }),
/* 708 */
/*!*****************************************************************!*\
  !*** ../node_modules/react-popper/lib/esm/index.js + 4 modules ***!
  \*****************************************************************/
/*! exports provided: Popper, placements, Manager, Reference */
/*! all exports used */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/babel-runtime/helpers/classCallCheck.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/babel-runtime/helpers/extends.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/babel-runtime/helpers/inherits.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/babel-runtime/helpers/possibleConstructorReturn.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/create-react-context/lib/index.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/popper.js/dist/esm/popper.js (<- Module uses injected variables (global)) */
/*! ModuleConcatenation bailout: Cannot concat with ../node_modules/warning/browser.js (<- Module is not an ECMAScript module) */
/*! ModuleConcatenation bailout: Cannot concat with external {"amd":"react","umd":"react","commonjs":"react","commonjs2":"react","root":"React"} (<- Module is not an ECMAScript module) */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/extends.js
var helpers_extends = __webpack_require__(78);
var extends_default = /*#__PURE__*/__webpack_require__.n(helpers_extends);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(120);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(87);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ../node_modules/babel-runtime/helpers/inherits.js
var inherits = __webpack_require__(121);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: external {"amd":"react","umd":"react","commonjs":"react","commonjs2":"react","root":"React"}
var external_amd_react_umd_react_commonjs_react_commonjs2_react_root_React_ = __webpack_require__(0);

// EXTERNAL MODULE: ../node_modules/popper.js/dist/esm/popper.js
var popper = __webpack_require__(251);

// EXTERNAL MODULE: ../node_modules/create-react-context/lib/index.js
var lib = __webpack_require__(353);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);

// CONCATENATED MODULE: ../node_modules/react-popper/lib/esm/Manager.js







var ManagerContext = lib_default()({ getReferenceRef: undefined, referenceNode: undefined });

var Manager_Manager = function (_React$Component) {
  inherits_default()(Manager, _React$Component);

  function Manager() {
    classCallCheck_default()(this, Manager);

    var _this = possibleConstructorReturn_default()(this, _React$Component.call(this));

    _this.getReferenceRef = function (referenceNode) {
      return _this.setState(function (_ref) {
        var context = _ref.context;
        return {
          context: extends_default()({}, context, { referenceNode: referenceNode })
        };
      });
    };

    _this.state = {
      context: {
        getReferenceRef: _this.getReferenceRef,
        referenceNode: undefined
      }
    };
    return _this;
  }

  Manager.prototype.render = function render() {
    return external_amd_react_umd_react_commonjs_react_commonjs2_react_root_React_["createElement"](
      ManagerContext.Provider,
      { value: this.state.context },
      this.props.children
    );
  };

  return Manager;
}(external_amd_react_umd_react_commonjs_react_commonjs2_react_root_React_["Component"]);

/* harmony default export */ var esm_Manager = (Manager_Manager);
// CONCATENATED MODULE: ../node_modules/react-popper/lib/esm/utils.js


/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};

/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */
var safeInvoke = function safeInvoke(fn) {
  for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  if (typeof fn === "function") {
    return fn.apply(undefined, args);
  }
};
// CONCATENATED MODULE: ../node_modules/react-popper/lib/esm/Popper.js










var initialStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  opacity: 0,
  pointerEvents: 'none'
};

var initialArrowStyle = {};

var Popper_InnerPopper = function (_React$Component) {
  inherits_default()(InnerPopper, _React$Component);

  function InnerPopper() {
    var _temp, _this, _ret;

    classCallCheck_default()(this, InnerPopper);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.state = {
      data: undefined,
      placement: undefined
    }, _this.popperNode = null, _this.arrowNode = null, _this.setPopperNode = function (popperNode) {
      if (_this.popperNode === popperNode) return;

      safeInvoke(_this.props.innerRef, popperNode);
      _this.popperNode = popperNode;

      _this.updatePopperInstance();
    }, _this.setArrowNode = function (arrowNode) {
      if (_this.arrowNode === arrowNode) return;
      _this.arrowNode = arrowNode;

      if (!_this.popperInstance) _this.updatePopperInstance();
    }, _this.updateStateModifier = {
      enabled: true,
      order: 900,
      fn: function fn(data) {
        var placement = data.placement;

        _this.setState({ data: data, placement: placement }, placement !== _this.state.placement ? _this.scheduleUpdate : undefined);
        return data;
      }
    }, _this.getOptions = function () {
      return {
        placement: _this.props.placement,
        eventsEnabled: _this.props.eventsEnabled,
        positionFixed: _this.props.positionFixed,
        modifiers: extends_default()({}, _this.props.modifiers, {
          arrow: extends_default()({}, _this.props.modifiers && _this.props.modifiers.arrow, {
            enabled: !!_this.arrowNode,
            element: _this.arrowNode
          }),
          applyStyle: { enabled: false },
          updateStateModifier: _this.updateStateModifier
        })
      };
    }, _this.getPopperStyle = function () {
      return !_this.popperNode || !_this.state.data ? initialStyle : extends_default()({
        position: _this.state.data.offsets.popper.position
      }, _this.state.data.styles);
    }, _this.getPopperPlacement = function () {
      return !_this.state.data ? undefined : _this.state.placement;
    }, _this.getArrowStyle = function () {
      return !_this.arrowNode || !_this.state.data ? initialArrowStyle : _this.state.data.arrowStyles;
    }, _this.getOutOfBoundariesState = function () {
      return _this.state.data ? _this.state.data.hide : undefined;
    }, _this.destroyPopperInstance = function () {
      if (!_this.popperInstance) return;

      _this.popperInstance.destroy();
      _this.popperInstance = null;
    }, _this.updatePopperInstance = function () {
      _this.destroyPopperInstance();

      var _this2 = _this,
          popperNode = _this2.popperNode;
      var referenceElement = _this.props.referenceElement;


      if (!referenceElement || !popperNode) return;

      _this.popperInstance = new popper["a" /* default */](referenceElement, popperNode, _this.getOptions());
    }, _this.scheduleUpdate = function () {
      if (_this.popperInstance) {
        _this.popperInstance.scheduleUpdate();
      }
    }, _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  InnerPopper.prototype.componentDidUpdate = function componentDidUpdate(prevProps, prevState) {
    // If the Popper.js options have changed, update the instance (destroy + create)
    if (this.props.placement !== prevProps.placement || this.props.referenceElement !== prevProps.referenceElement || this.props.positionFixed !== prevProps.positionFixed) {
      this.updatePopperInstance();
    } else if (this.props.eventsEnabled !== prevProps.eventsEnabled && this.popperInstance) {
      this.props.eventsEnabled ? this.popperInstance.enableEventListeners() : this.popperInstance.disableEventListeners();
    }

    // A placement difference in state means popper determined a new placement
    // apart from the props value. By the time the popper element is rendered with
    // the new position Popper has already measured it, if the place change triggers
    // a size change it will result in a misaligned popper. So we schedule an update to be sure.
    if (prevState.placement !== this.state.placement) {
      this.scheduleUpdate();
    }
  };

  InnerPopper.prototype.componentWillUnmount = function componentWillUnmount() {
    this.destroyPopperInstance();
  };

  InnerPopper.prototype.render = function render() {
    return unwrapArray(this.props.children)({
      ref: this.setPopperNode,
      style: this.getPopperStyle(),
      placement: this.getPopperPlacement(),
      outOfBoundaries: this.getOutOfBoundariesState(),
      scheduleUpdate: this.scheduleUpdate,
      arrowProps: {
        ref: this.setArrowNode,
        style: this.getArrowStyle()
      }
    });
  };

  return InnerPopper;
}(external_amd_react_umd_react_commonjs_react_commonjs2_react_root_React_["Component"]);

Popper_InnerPopper.defaultProps = {
  placement: 'bottom',
  eventsEnabled: true,
  referenceElement: undefined,
  positionFixed: false
};
var placements = popper["a" /* default */].placements;


function Popper(props) {
  return external_amd_react_umd_react_commonjs_react_commonjs2_react_root_React_["createElement"](
    ManagerContext.Consumer,
    null,
    function (_ref) {
      var referenceNode = _ref.referenceNode;
      return external_amd_react_umd_react_commonjs_react_commonjs2_react_root_React_["createElement"](Popper_InnerPopper, extends_default()({ referenceElement: referenceNode }, props));
    }
  );
}
// EXTERNAL MODULE: ../node_modules/warning/browser.js
var browser = __webpack_require__(70);
var browser_default = /*#__PURE__*/__webpack_require__.n(browser);

// CONCATENATED MODULE: ../node_modules/react-popper/lib/esm/Reference.js









var Reference_InnerReference = function (_React$Component) {
  inherits_default()(InnerReference, _React$Component);

  function InnerReference() {
    var _temp, _this, _ret;

    classCallCheck_default()(this, InnerReference);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = possibleConstructorReturn_default()(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.refHandler = function (node) {
      safeInvoke(_this.props.innerRef, node);
      safeInvoke(_this.props.getReferenceRef, node);
    }, _temp), possibleConstructorReturn_default()(_this, _ret);
  }

  InnerReference.prototype.render = function render() {
    browser_default()(this.props.getReferenceRef, '`Reference` should not be used outside of a `Manager` component.');
    return unwrapArray(this.props.children)({ ref: this.refHandler });
  };

  return InnerReference;
}(external_amd_react_umd_react_commonjs_react_commonjs2_react_root_React_["Component"]);

function Reference(props) {
  return external_amd_react_umd_react_commonjs_react_commonjs2_react_root_React_["createElement"](
    ManagerContext.Consumer,
    null,
    function (_ref) {
      var getReferenceRef = _ref.getReferenceRef;
      return external_amd_react_umd_react_commonjs_react_commonjs2_react_root_React_["createElement"](Reference_InnerReference, extends_default()({ getReferenceRef: getReferenceRef }, props));
    }
  );
}
// CONCATENATED MODULE: ../node_modules/react-popper/lib/esm/index.js
/* concated harmony reexport Popper */__webpack_require__.d(__webpack_exports__, "Popper", function() { return Popper; });
/* concated harmony reexport placements */__webpack_require__.d(__webpack_exports__, "placements", function() { return placements; });
/* concated harmony reexport Manager */__webpack_require__.d(__webpack_exports__, "Manager", function() { return esm_Manager; });
/* concated harmony reexport Reference */__webpack_require__.d(__webpack_exports__, "Reference", function() { return Reference; });


// Public components





// Public types

/***/ })
]]);
//# sourceMappingURL=wixui.AddressInput.chunk.js.map