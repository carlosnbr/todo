/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/assets/checked-icon.svg */ \"./src/assets/checked-icon.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n    font-family: \"Poppins\", sans-serif;\r\n}\r\n\r\nbody {\r\n    display: flex;\r\n    height: 100vh;\r\n    background-color: #f4f4f4;\r\n}\r\n\r\naside {\r\n    flex: 0 0 280px;\r\n    background-color: #9575b960;\r\n    font-weight: 700;\r\n    padding: 40px 20px 20px;\r\n    border-radius: 8px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n    margin: 5px auto;\r\n}\r\n\r\nmain {\r\n    width: 100%;\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n\r\nh2 {\r\n    color: #333; /* Adjust color to match your design */\r\n    margin-bottom: 20px; /* Add margin to separate title from form */\r\n}\r\n\r\n.sidebar__section-title {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.sidebar__nav-item {\r\n    display: flex;\r\n    flex-direction: row;\r\n    align-items: center;\r\n    padding-left: 5px;\r\n    height: 35px;\r\n    border-radius: 10px;\r\n\r\n    &:hover {\r\n        background-color: #8f67bd2d;\r\n    }\r\n\r\n    &:hover .delete-project-button{\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.sidebar__nav-item a {\r\n    display: flex;\r\n    align-items: center;\r\n    text-decoration: none;\r\n    color: inherit;\r\n    flex: 1;\r\n}\r\n\r\n.sidebar__nav-item-icon {\r\n    height: 25px;\r\n    width: auto;\r\n}\r\n\r\n.sidebar__nav-item-title {\r\n    margin-left: 10px;\r\n}\r\n\r\n.delete-project-button {\r\n    cursor: pointer;\r\n    background: none;\r\n    border: none;\r\n    border-radius: 15px;\r\n    padding: 0;\r\n    width: 35px;\r\n    height: 35px;\r\n    background-size: cover;\r\n    background-position: center;\r\n    opacity: 0;\r\n    transition: opacity 0.3s ease;\r\n\r\n    &:hover {\r\n        background-color: #d8d6d6d5;\r\n    }\r\n}\r\n\r\n.projects-empty-state {\r\n    margin-top: 20px;\r\n    margin-left: 20px\r\n}\r\n\r\n.tasks-empty-state {\r\n    align-self: center;\r\n    justify-self: center;\r\n    margin-top: 30px\r\n}\r\n\r\n.delete-project-button img {\r\n    max-width: 60%;\r\n    max-height: 60%;\r\n  }\r\n\r\n#filters-section {\r\n    padding-bottom: 15px;\r\n}\r\n\r\nh3 {\r\n    color: #333;\r\n}\r\n\r\np {\r\n    color: #555;\r\n    margin: 5px 0;\r\n}\r\n\r\n#task-list {\r\n    margin-top: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.task-details {\r\n    display: flex;\r\n}\r\n\r\n.task-buttons {\r\n    display: flex;\r\n    align-self: flex-start;\r\n    opacity: 0;\r\n    transition: opacity 0.3s ease;\r\n}\r\n\r\n.task-buttons button {\r\n    cursor: pointer;\r\n    background: none;\r\n    border: none;\r\n    border-radius: 15px;\r\n    padding: 0;\r\n    width: 40px;\r\n    height: 40px;\r\n    background-size: cover;\r\n    background-position: center;\r\n\r\n    &:hover {\r\n        background-color: #a0a0a02c;\r\n    }\r\n}\r\n\r\n.task-buttons button img {\r\n  max-width: 60%;\r\n  max-height: 60%;\r\n}\r\n\r\n.neutral-task-row,\r\n.low-task-row,\r\n.medium-task-row,\r\n.high-task-row {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: space-between;\r\n    border-radius: 8px;\r\n    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15);\r\n    padding: 15px;\r\n    margin-bottom: 10px;\r\n    transition: background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;\r\n    cursor: pointer;\r\n\r\n    &:hover .task-buttons {\r\n        display: flex;\r\n        opacity: 1;\r\n    }\r\n}\r\n\r\n.neutral-task-row {\r\n    background-color: #fff;\r\n\r\n    &:hover {\r\n        background-color: #c4bcbc;\r\n        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\r\n    }\r\n}\r\n\r\n.low-task-row {\r\n    background-color: #4a95b815;\r\n\r\n    &:hover {\r\n        background-color: hsla(199, 44%, 51%, 0.15);\r\n        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\r\n    }\r\n}\r\n\r\n.medium-task-row {\r\n    background-color: hsla(66, 67%, 60%, 0.082);\r\n\r\n    &:hover {\r\n        background-color: hsla(66, 67%, 60%, 0.15);\r\n        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\r\n    }\r\n}\r\n\r\n.high-task-row {\r\n    background-color: hsla(0, 70%, 62%, 0.082);\r\n\r\n    &:hover {\r\n        background-color: hsla(0, 70%, 62%, 0.15);\r\n        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);\r\n    }\r\n}\r\n\r\n.due-date {\r\n    color: #ff5c5c;\r\n    font-weight: bold;\r\n    font-size: 0.8rem;\r\n}\r\n\r\n.project-information {\r\n    display: flex;\r\n    flex-direction: column;\r\n    flex-basis: clamp(400px, 50%, 1200px);\r\n    padding: 20px;\r\n}\r\n\r\n.project-information__header {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n}\r\n\r\n.task-checkbox {\r\n    background-color: #57e79323;\r\n    position: relative;\r\n    align-self: start;\r\n    margin-right: 10px;\r\n    width: 20px;\r\n    height: 20px;\r\n    border: 2px solid #555;\r\n    border-radius: 50%;\r\n    appearance: none;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s, border-color 0.3s;\r\n\r\n    /* Hide the default checkbox visually */\r\n    &::before {\r\n        content: \"\";\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: 100%;\r\n    }\r\n\r\n    &:hover {\r\n        background-color: #4ece8359;\r\n        color: #fff;\r\n\r\n        &::before {\r\n            background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n            background-size: cover;\r\n        }\r\n    }\r\n\r\n    &:checked {\r\n        background-color: #3da368;\r\n        border-color: #348053;\r\n        color: #fff;\r\n\r\n        &::before {\r\n            background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n            background-size: cover;\r\n            filter: brightness(0) invert(1);\r\n        }\r\n    }\r\n}\r\n\r\n.project-name {\r\n    font-size: 30px;\r\n    color: #333;\r\n}\r\n\r\n#add-task-button {\r\n    background-color: #612eb3;\r\n    color: #fff;\r\n    font-size: 16px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    padding: 10px 20px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s, color 0.3s;\r\n}\r\n\r\n#add-task-button:hover {\r\n    background-color: #7a42d4;\r\n}\r\n\r\n.modal {\r\n    display: none;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.5);\r\n    justify-content: center;\r\n    align-items: center;\r\n    z-index: 9999; /* Ensure modal is on top of other content */\r\n}\r\n\r\n.modal-content {\r\n    background-color: #fff;\r\n    padding: 20px;\r\n    border-radius: 8px;\r\n    position: relative;\r\n    max-width: 500px; /* Adjust width as needed */\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\nform div {\r\n    margin-bottom: 15px; /* Add margin between form elements */\r\n}\r\n\r\ninput[type=\"text\"],\r\ninput[type=\"date\"],\r\nselect {\r\n    padding: 8px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    width: 100%;\r\n}\r\n\r\nbutton[type=\"submit\"] {\r\n    background-color: #612eb3; /* Adjust color to match your design */\r\n    color: #fff;\r\n    border: none;\r\n    border-radius: 4px;\r\n    padding: 10px 20px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n}\r\n\r\nbutton[type=\"submit\"]:hover {\r\n    background-color: #7a42d4; /* Adjust hover color */\r\n}\r\n\r\nbutton[type=\"submit\"],\r\nbutton#close-task-modal-button {\r\n    margin-top: 10px; /* Add margin between form elements and buttons */\r\n}\r\n\r\nlabel {\r\n    font-weight: bold;\r\n}\r\n\r\n#close-task-modal-button {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n    color: #555; /* Adjust color to match your design */\r\n}\r\n\r\n.add-project-button {\r\n    background-color: #00000000;\r\n    width: 25px;\r\n    color: #612eb3;\r\n    font-size: 24px;\r\n    margin-right: 12px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    transition: background-color 0.3s;\r\n\r\n    &:hover {\r\n        background-color: #8f67bd2d;\r\n    }\r\n}\r\n\r\n#close-project-modal-button {\r\n    position: absolute;\r\n    top: 10px;\r\n    right: 10px;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://todo/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/native.js":
/*!******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/native.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  randomUUID\n});\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/native.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ rng)\n/* harmony export */ });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\nlet getRandomValues;\nconst rnds8 = new Uint8Array(16);\nfunction rng() {\n  // lazy load so that environments that need to polyfill have a chance to do so\n  if (!getRandomValues) {\n    // getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation.\n    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);\n\n    if (!getRandomValues) {\n      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n    }\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   unsafeStringify: () => (/* binding */ unsafeStringify)\n/* harmony export */ });\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nconst byteToHex = [];\n\nfor (let i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).slice(1));\n}\n\nfunction unsafeStringify(arr, offset = 0) {\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];\n}\n\nfunction stringify(arr, offset = 0) {\n  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (stringify);\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _native_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./native.js */ \"./node_modules/uuid/dist/esm-browser/native.js\");\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\n\nfunction v4(options, buf, offset) {\n  if (_native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID && !buf && !options) {\n    return _native_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].randomUUID();\n  }\n\n  options = options || {};\n  const rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (let i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_2__.unsafeStringify)(rnds);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (v4);\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (validate);\n\n//# sourceURL=webpack://todo/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./src/assets/checked-icon.svg":
/*!*************************************!*\
  !*** ./src/assets/checked-icon.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"01430bf0bbc178d6e311.svg\";\n\n//# sourceURL=webpack://todo/./src/assets/checked-icon.svg?");

/***/ }),

/***/ "./src/assets/default-project-icon.svg":
/*!*********************************************!*\
  !*** ./src/assets/default-project-icon.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"56cb7a8f3723b6be6288.svg\";\n\n//# sourceURL=webpack://todo/./src/assets/default-project-icon.svg?");

/***/ }),

/***/ "./src/DataStore.js":
/*!**************************!*\
  !*** ./src/DataStore.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DataStore)\n/* harmony export */ });\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task.js */ \"./src/Task.js\");\n\r\n\r\n\r\nclass DataStore {\r\n    constructor() {\r\n        this.projects = this.loadProjectsFromLocalStorage() || [];\r\n    }\r\n\r\n    saveProjectsToLocalStorage() {\r\n        localStorage.setItem(\"projects\", JSON.stringify(this.projects));\r\n    }\r\n\r\n    loadProjectsFromLocalStorage() {\r\n        const projectsJson = localStorage.getItem(\"projects\");\r\n        if (projectsJson) {\r\n            const projectsData = JSON.parse(projectsJson);\r\n            return projectsData.map(projectData => {\r\n                const project = new _Project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectData.title);\r\n                project.id = projectData.id;\r\n                project.icon = projectData.icon;\r\n                project.tasks = projectData.tasks.map(taskData => {\r\n                    const task = new _Task_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\r\n                        taskData.title,\r\n                        taskData.description,\r\n                        taskData.dueDate,\r\n                        taskData.priority\r\n                    );\r\n                    task.id = taskData.id;\r\n                    task.isCompleted = taskData.isCompleted;\r\n                    return task;\r\n                });\r\n                return project;\r\n            });\r\n        } else {\r\n            return null;\r\n        }\r\n    }\r\n\r\n    addProject(project) {\r\n        if (!(project instanceof _Project_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])) {\r\n            throw new Error(\"addProject expects an instance of Project.\");\r\n        }\r\n        this.projects.push(project);\r\n        this.saveProjectsToLocalStorage();\r\n    }\r\n\r\n    removeProject(projectId) {\r\n        this.projects = this.projects.filter(\r\n            project => project.getId() !== projectId\r\n        );\r\n        this.saveProjectsToLocalStorage();\r\n    }\r\n\r\n    getProject(projectId) {\r\n        return this.projects.find(project => project.getId() === projectId);\r\n    }\r\n\r\n    updateProject(projectId, newTitle, newIcon) {\r\n        const project = this.findProject(projectId);\r\n        if (project) {\r\n            if (newTitle) project.setTitle(newTitle);\r\n            if (newIcon) project.setIcon(newIcon);\r\n        } else {\r\n            throw new Error(\"Project not found.\");\r\n        }\r\n        this.saveProjectsToLocalStorage();\r\n    }\r\n\r\n    getAllProjects() {\r\n        return this.projects;\r\n    }\r\n\r\n    getTodayTasks() {\r\n        const today = new Date();\r\n        today.setHours(0, 0, 0, 0);\r\n        const todayTasks = [];\r\n\r\n        this.projects.forEach(project => {\r\n            project.getAllTasks().forEach(task => {\r\n                const taskDueDate = task.dueDate;\r\n                if (taskDueDate) {\r\n                    if (\r\n                        taskDueDate.getDate() === today.getDate() &&\r\n                        taskDueDate.getMonth() === today.getMonth() &&\r\n                        taskDueDate.getFullYear() === today.getFullYear()\r\n                    ) {\r\n                        todayTasks.push(task);\r\n                    }\r\n                }\r\n            });\r\n        });\r\n        return todayTasks;\r\n    }\r\n\r\n    getUpcomingTasks() {\r\n        const today = new Date();\r\n        today.setHours(0, 0, 0, 0);\r\n\r\n        const nextWeek = new Date(today);\r\n        nextWeek.setDate(today.getDate() + 7);\r\n\r\n        const upcomingTasks = [];\r\n\r\n        this.projects.forEach(project => {\r\n            project.tasks.forEach(task => {\r\n                const taskDueDate = task.dueDate;\r\n                if (taskDueDate >= today && taskDueDate <= nextWeek) {\r\n                    upcomingTasks.push(task);\r\n                }\r\n            });\r\n        });\r\n\r\n        return upcomingTasks;\r\n    }\r\n\r\n    getTaskById(taskId) {\r\n        for (const project of this.projects) {\r\n            for (const task of project.tasks) {\r\n                if (task.getId() === taskId) {\r\n                    return task;\r\n                }\r\n            }\r\n        }\r\n        return null;\r\n    }\r\n\r\n    updateTaskById(taskId, updatedTaskData) {\r\n        for (const project of this.projects) {\r\n            for (const task of project.tasks) {\r\n                if (task.getId() === taskId) {\r\n                    task.title = updatedTaskData.title;\r\n                    task.description = updatedTaskData.description;\r\n                    if (updatedTaskData.dueDate.trim() === \"\") {\r\n                        task.dueDate = null;\r\n                    } else {\r\n                        task.dueDate = new Date(\r\n                            updatedTaskData.dueDate + \"T00:00:00\"\r\n                        );\r\n                    }\r\n\r\n                    task.priority = updatedTaskData.priority;\r\n                    this.saveProjectsToLocalStorage();\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    addTask(projectId, task) {\r\n        const project = this.getProject(projectId);\r\n        if (!project) {\r\n            throw new Error(\"Project not found.\");\r\n        }\r\n        project.addTask(task);\r\n        console.log(task);\r\n        this.saveProjectsToLocalStorage();\r\n    }\r\n\r\n    toggleTaskCompletion(taskId) {\r\n        let found = false;\r\n\r\n        for (const project of this.projects) {\r\n            for (const task of project.tasks) {\r\n                if (task.getId() === taskId) {\r\n                    task.isCompleted = !task.isCompleted;\r\n                    found = true;\r\n                    this.saveProjectsToLocalStorage();\r\n                    break;\r\n                }\r\n            }\r\n            if (found) break;\r\n        }\r\n\r\n        if (!found) {\r\n            throw new Error(\"Task not found.\");\r\n        }\r\n    }\r\n\r\n    deleteTaskById(taskId) {\r\n        let found = false;\r\n\r\n        for (const project of this.projects) {\r\n            for (const task of project.tasks) {\r\n                if (task.getId() === taskId) {\r\n                    const newArray = project.tasks.filter(task => {\r\n                        return task.getId() !== taskId;\r\n                    });\r\n                    found = true;\r\n                    project.tasks = newArray;\r\n                    this.saveProjectsToLocalStorage();\r\n                    return project;\r\n                }\r\n            }\r\n            if (found) break;\r\n        }\r\n\r\n        if (!found) {\r\n            throw new Error(\"Task not found.\");\r\n        }\r\n    }\r\n\r\n    deleteProjectById(projectId) {\r\n        const newProjects = this.projects.filter(project => {\r\n            return project.getId() !== projectId;\r\n        });\r\n        this.projects = newProjects;\r\n        this.saveProjectsToLocalStorage();\r\n        return newProjects;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/DataStore.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ \"./src/Task.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony import */ var _assets_default_project_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/default-project-icon.svg */ \"./src/assets/default-project-icon.svg\");\n\r\n\r\n\r\n\r\nclass Project {\r\n    id = (0,uuid__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n    title = '';\r\n    icon = _assets_default_project_icon_svg__WEBPACK_IMPORTED_MODULE_1__;\r\n    tasks = [];\r\n    constructor(title) {\r\n        this.title = title;\r\n    }\r\n\r\n    getId() {\r\n        return this.id;\r\n    }\r\n\r\n    getTitle() {\r\n        return this.title;\r\n    }\r\n\r\n    setTitle(newTitle) {\r\n        this.title = newTitle;\r\n    }\r\n\r\n    getIcon() {\r\n        return this.icon;\r\n    }\r\n\r\n    addTask(task) {\r\n        if (!(task instanceof _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])) {\r\n            throw new Error(\"addTask expects an instance of Task.\");\r\n        }\r\n        this.tasks.push(task);\r\n    }\r\n\r\n    removeTask(taskId) {\r\n        this.tasks = this.tasks.filter(task => task.id !== taskId);\r\n        }\r\n\r\n    findTask(taskId) {\r\n        return this.tasks.find(task => task.id === taskId);\r\n    }\r\n\r\n    getAllTasks() {\r\n        return this.tasks;\r\n    }\r\n\r\n    getCompletedTasks() {\r\n        return this.tasks.filter(task => task.isCompleted);\r\n    }\r\n\r\n    getPendingTasks() {\r\n        return this.tasks.filter(task => !task.isCompleted);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/Project.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n\r\n\r\nclass Task {\r\n    id = (0,uuid__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    title = \"\";\r\n    description = \"\";\r\n    dueDate = null;\r\n    priority = \"low\";\r\n    isCompleted = false;\r\n\r\n    constructor(title, description, dueDate = \"\", priority = \"low\") {\r\n        this.title = title;\r\n        this.description = description;\r\n        if (!dueDate || dueDate.trim() === \"\") {\r\n            this.dueDate = null;\r\n        } else {\r\n            if (dueDate.includes(\"T\")) {\r\n                // If in ISO format, extract only the date portion\r\n                const formattedDueDate = new Date(dueDate)\r\n                    .toISOString()\r\n                    .slice(0, 10);\r\n                this.dueDate = new Date(formattedDueDate + \"T00:00:00\");\r\n            } else {\r\n                this.dueDate = new Date(dueDate + \"T00:00:00\");\r\n            }\r\n        }\r\n        this.priority = priority;\r\n    }\r\n\r\n    getId() {\r\n        return this.id;\r\n    }\r\n\r\n    getTitle() {\r\n        return this.title;\r\n    }\r\n\r\n    getDescription() {\r\n        return this.description;\r\n    }\r\n\r\n    getDueDate() {\r\n        return this.dueDate;\r\n    }\r\n\r\n    getFormattedDueDate() {\r\n        const months = [\r\n            \"Jan\",\r\n            \"Feb\",\r\n            \"Mar\",\r\n            \"Apr\",\r\n            \"May\",\r\n            \"Jun\",\r\n            \"Jul\",\r\n            \"Aug\",\r\n            \"Sep\",\r\n            \"Oct\",\r\n            \"Nov\",\r\n            \"Dec\",\r\n        ];\r\n\r\n        if (this.dueDate instanceof Date && !isNaN(this.dueDate)) {\r\n            const monthIndex = this.dueDate.getMonth();\r\n            const day = this.dueDate.getDate();\r\n            const year = this.dueDate.getFullYear();\r\n\r\n            return `${months[monthIndex]} ${day} ${year}`;\r\n        } else {\r\n            return \"\";\r\n        }\r\n    }\r\n\r\n    getPriority() {\r\n        return this.priority;\r\n    }\r\n\r\n    getIsCompleted() {\r\n        return this.isCompleted;\r\n    }\r\n\r\n    setTitle(newTitle) {\r\n        this.title = newTitle;\r\n    }\r\n\r\n    setDescription(newDescription) {\r\n        this.description = newDescription;\r\n    }\r\n\r\n    setDueDate(newDueDate) {\r\n        this.dueDate = new Date(newDueDate);\r\n    }\r\n\r\n    setPriority(newPriority) {\r\n        const validPriorities = [\"high\", \"medium\", \"low\"];\r\n        if (validPriorities.includes(newPriority)) {\r\n            this.priority = newPriority;\r\n        } else {\r\n            throw new Error(\r\n                \"Invalid priority. Valid options are 'high', 'medium', or 'low'.\"\r\n            );\r\n        }\r\n    }\r\n\r\n    toggleCompletion() {\r\n        this.isCompleted = !this.isCompleted;\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/Task.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task.js */ \"./src/Task.js\");\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n// UI.js\r\n\r\n\r\n\r\nclass UI {\r\n    constructor(dataStore) {\r\n        this.dataStore = dataStore;\r\n        this.projectContainer = document.getElementById(\"projects-list\");\r\n        this.taskContainer = document.getElementById(\"task-list\");\r\n    }\r\n\r\n    render() {\r\n        this.renderProjects();\r\n        this.renderTasks({ tasks: this.dataStore.getTodayTasks() });\r\n        this.hideAddTaskButton();\r\n        this.clickNode(document.getElementById(\"today-filter\"));\r\n    }\r\n\r\n    renderProjects() {\r\n        this.projectContainer.innerHTML = \"\";\r\n\r\n        const projects = this.dataStore.getAllProjects();\r\n\r\n        if (projects.length === 0) {\r\n            this.projectContainer.innerHTML = `<div class=\"projects-empty-state\">You have no projects</div>`;\r\n        }\r\n\r\n        projects.forEach(project => {\r\n            const projectTemplate = this.createProjectTemplate(project);\r\n\r\n            // Create a document fragment to hold the template HTML\r\n            const fragment = document.createDocumentFragment();\r\n            const div = document.createElement(\"div\");\r\n            div.innerHTML = projectTemplate;\r\n            fragment.appendChild(div);\r\n\r\n            // Query the delete button within the document fragment\r\n            const projectDeleteButton = fragment.querySelector(\r\n                \".delete-project-button\"\r\n            );\r\n\r\n            // Add event listener to the delete button\r\n            projectDeleteButton.addEventListener(\"click\", event => {\r\n                const projectId = project.getId();\r\n                this.handleProjectDeleteClick(event, projectId);\r\n            });\r\n\r\n            // Append the document fragment to the project container\r\n            this.projectContainer.appendChild(fragment);\r\n        });\r\n\r\n        this.addProjectEventListeners();\r\n    }\r\n\r\n    createProjectTemplate(project) {\r\n        return `\r\n            <div class=\"sidebar__nav-item\">\r\n                <a href=\"#\" data-project-id=\"${project.getId()}\">\r\n                    <img src=\"${project.getIcon()}\" alt=\"Inbox Icon\" class=\"sidebar__nav-item-icon\">\r\n                    <span class=\"sidebar__nav-item-title\">${project.getTitle()}</span>\r\n                </a>\r\n                <button class=\"delete-project-button\">\r\n                    <img src=\"../src/assets/delete-icon.svg\">\r\n                </button>\r\n            </div>\r\n        `;\r\n    }\r\n\r\n    addProjectEventListeners() {\r\n        this.projectContainer.querySelectorAll(\"a\").forEach(anchor => {\r\n            anchor.addEventListener(\"click\", event => {\r\n                event.preventDefault();\r\n\r\n                const projectId = event.currentTarget.dataset.projectId;\r\n                const project = this.dataStore.getProject(projectId);\r\n\r\n                if (project) {\r\n                    document.getElementById(\r\n                        \"project-information\"\r\n                    ).dataset.projectId = projectId;\r\n                    this.renderTasks({\r\n                        projectId: projectId,\r\n                        tasks: project.tasks,\r\n                    });\r\n                    this.showAddTaskButton()\r\n                } else {\r\n                    console.error(\"Project not found.\");\r\n                }\r\n            });\r\n        });\r\n    }\r\n\r\n    renderTasks({ projectId, tasks }) {\r\n        const projectNameHeader = document.querySelector(\".project-name\");\r\n        const project = this.dataStore.getProject(projectId);\r\n        if (project) {\r\n            projectNameHeader.textContent = project.getTitle();\r\n        }\r\n\r\n        this.taskContainer.innerHTML = \"\";\r\n        document.getElementById(\"project-information\").dataset.projectId =\r\n            projectId;\r\n\r\n        if (tasks.length === 0) {\r\n            this.taskContainer.innerHTML = `<div class=\"tasks-empty-state\">Nothing to see here.</div>`;\r\n        } else {\r\n            tasks.forEach(task => {\r\n                const taskElement = this.createTaskElement(task);\r\n                this.taskContainer.appendChild(taskElement);\r\n            });\r\n        }\r\n    }\r\n\r\n    createTaskElement(task) {\r\n        const taskElement = document.createElement(\"div\");\r\n        taskElement.classList.add(`${task.priority}-task-row`);\r\n        taskElement.dataset.taskId = task.getId();\r\n\r\n        taskElement.innerHTML = `\r\n            <div class=\"task-details\">\r\n                <input type=\"checkbox\" class=\"task-checkbox\">\r\n                <div>\r\n                    <h3>${task.getTitle()}</h3>\r\n                    <p>${task.getDescription()}</p>\r\n                    <p class=\"due-date\">${task.getFormattedDueDate()}</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"task-buttons\">\r\n                <button class=\"edit-button\">\r\n                    <img src=\"../src/assets/edit-icon.svg\" alt=\"\">\r\n                </button>\r\n                <button class=\"delete-button\">\r\n                    <img src=\"../src/assets/delete-icon.svg\" alt=\"\">\r\n                </button>\r\n            </div>\r\n        `;\r\n\r\n        const checkbox = taskElement.querySelector(\".task-checkbox\");\r\n        checkbox.addEventListener(\"click\", event => {\r\n            const taskId =\r\n                event.target.closest(\".task-details\").parentNode.dataset.taskId;\r\n            this.handleCheckboxClick(event, taskId);\r\n        });\r\n\r\n        const deleteButton = taskElement.querySelector(\".delete-button\");\r\n        deleteButton.addEventListener(\"click\", event => {\r\n            const taskId =\r\n                event.target.closest(\".task-buttons\").parentNode.dataset.taskId;\r\n            this.handleTaskDeleteClick(event, taskId);\r\n        });\r\n\r\n        taskElement.addEventListener(\"click\", event => {\r\n            this.handleTaskClick(event);\r\n        });\r\n\r\n        return taskElement;\r\n    }\r\n\r\n    handleCheckboxClick(event, taskId) {\r\n        event.stopPropagation();\r\n\r\n        this.dataStore.toggleTaskCompletion(taskId);\r\n    }\r\n\r\n    handleTaskDeleteClick(event, taskId) {\r\n        event.stopPropagation();\r\n\r\n        const updatedProject = this.dataStore.deleteTaskById(taskId);\r\n\r\n        this.renderTasks({\r\n            projectId: updatedProject.getId(),\r\n            tasks: updatedProject.tasks,\r\n        });\r\n    }\r\n\r\n    handleTaskClick(event) {\r\n        const taskId = event.currentTarget.dataset.taskId;\r\n        const taskDetails = this.dataStore.getTaskById(taskId);\r\n\r\n        document.getElementById(\"task-title\").value = taskDetails.title;\r\n        document.getElementById(\"task-description\").value =\r\n            taskDetails.description;\r\n        document.getElementById(\"task-due-date\").value = taskDetails.dueDate\r\n            ? taskDetails.dueDate.toISOString().split(\"T\")[0]\r\n            : \"\";\r\n        document.getElementById(\"task-priority\").value = taskDetails.priority;\r\n\r\n        // Change modal title and submit button text\r\n        document\r\n            .getElementById(\"add-task-modal\")\r\n            .querySelector(\"h2\").textContent = \"Edit Task\";\r\n        document\r\n            .getElementById(\"add-task-form\")\r\n            .querySelector(\"button[type='submit']\").textContent = \"Save\";\r\n        document.getElementById(\"add-task-form\").dataset.taskId = taskId;\r\n\r\n        this.openAddTaskModal();\r\n    }\r\n\r\n    handleProjectDeleteClick(event, projectId) {\r\n        event.stopPropagation();\r\n\r\n        const newProjectsList = this.dataStore.deleteProjectById(projectId);\r\n        this.renderProjects(newProjectsList);\r\n        if (\r\n            projectId ===\r\n            document.getElementById(\"project-information\").dataset.projectId\r\n        ) {\r\n            this.clickNode(document.getElementById(\"today-filter\"));\r\n        }\r\n    }\r\n\r\n    openAddTaskModal() {\r\n        this.toggleModalDisplay(\"add-task-modal\", true);\r\n    }\r\n\r\n    closeAddTaskModal() {\r\n        this.toggleModalDisplay(\"add-task-modal\", false);\r\n    }\r\n\r\n    openAddProjectModal() {\r\n        this.toggleModalDisplay(\"add-project-modal\", true);\r\n    }\r\n\r\n    closeAddProjectModal() {\r\n        this.toggleModalDisplay(\"add-project-modal\", false);\r\n    }\r\n\r\n    toggleModalDisplay(modalId, display) {\r\n        const modal = document.getElementById(modalId);\r\n        modal.style.display = display ? \"flex\" : \"none\";\r\n    }\r\n\r\n    bindEvents() {\r\n        const addTaskButton = document.getElementById(\"add-task-button\");\r\n        addTaskButton.addEventListener(\"click\", event => {\r\n            this.openAddTaskModal();\r\n        });\r\n\r\n        window.addEventListener(\"click\", event => {\r\n            this.handleModalClick(event);\r\n        });\r\n\r\n        const newTaskSubmit = document.getElementById(\"add-task-form\");\r\n        newTaskSubmit.addEventListener(\"submit\", event => {\r\n            this.handleTaskSubmission(event);\r\n        });\r\n\r\n        const addProjectButton = document.getElementById(\"add-project-button\");\r\n        addProjectButton.addEventListener(\"click\", event => {\r\n            this.openAddProjectModal();\r\n        });\r\n\r\n        const newProjectSubmit = document.getElementById(\"add-project-form\");\r\n        newProjectSubmit.addEventListener(\"submit\", event => {\r\n            this.handleProjectSubmission(event);\r\n        });\r\n\r\n        const todayFilterButton = document.getElementById(\"today-filter\");\r\n        todayFilterButton.addEventListener(\"click\", event => {\r\n            this.renderTasks({ tasks: this.dataStore.getTodayTasks() });\r\n            document.querySelector(\".project-name\").textContent = \"Today\";\r\n            this.hideAddTaskButton();\r\n        });\r\n\r\n        const upcomingFilterButton = document.getElementById(\"upcoming-filter\");\r\n        upcomingFilterButton.addEventListener(\"click\", event => {\r\n            this.renderTasks({ tasks: this.dataStore.getUpcomingTasks() });\r\n            document.querySelector(\".project-name\").textContent = \"Upcoming\";\r\n            this.hideAddTaskButton();\r\n        });\r\n    }\r\n\r\n    handleModalClick(event) {\r\n        const taskModal = document.getElementById(\"add-task-modal\");\r\n        const taskModalCloseButton = document.getElementById(\r\n            \"close-task-modal-button\"\r\n        );\r\n        const projectModal = document.getElementById(\"add-project-modal\");\r\n        const projectModalCloseButton = document.getElementById(\r\n            \"close-project-modal-button\"\r\n        );\r\n\r\n        if (\r\n            event.target === taskModal ||\r\n            event.target === taskModalCloseButton\r\n        ) {\r\n            this.closeAddTaskModal();\r\n            document.getElementById(\"add-task-form\").reset();\r\n        } else if (\r\n            event.target === projectModal ||\r\n            event.target === projectModalCloseButton\r\n        ) {\r\n            this.closeAddProjectModal();\r\n            document.getElementById(\"add-project-form\").reset();\r\n        }\r\n    }\r\n\r\n    handleTaskSubmission(event) {\r\n        event.preventDefault();\r\n\r\n        let taskId = event.currentTarget.dataset.taskId;\r\n\r\n        const title = document.getElementById(\"task-title\").value;\r\n        const description = document.getElementById(\"task-description\").value;\r\n        const dueDate = document.getElementById(\"task-due-date\").value;\r\n        const priority = document.getElementById(\"task-priority\").value;\r\n        const projectId = document.getElementById(\"project-information\").dataset\r\n            .projectId;\r\n        const project = this.dataStore.getProject(projectId);\r\n\r\n        if (taskId) {\r\n            try {\r\n                this.dataStore.updateTaskById(taskId, {\r\n                    title,\r\n                    description,\r\n                    dueDate,\r\n                    priority,\r\n                });\r\n                event.currentTarget.reset();\r\n                event.currentTarget.removeAttribute(\"data-task-id\");\r\n                this.closeAddTaskModal();\r\n                this.renderTasks({ tasks: project.tasks });\r\n            } catch (error) {\r\n                console.error(\"Failed to update task:\", error.message);\r\n            }\r\n        } else {\r\n            const newTask = new _Task_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title, description, dueDate, priority);\r\n\r\n            if (projectId) {\r\n                this.dataStore.addTask(projectId, newTask);\r\n                event.currentTarget.reset();\r\n                this.closeAddTaskModal();\r\n                this.renderTasks({ tasks: project.tasks });\r\n            } else {\r\n                console.error(\"Project not found.\");\r\n            }\r\n        }\r\n    }\r\n\r\n    handleProjectSubmission(event) {\r\n        event.preventDefault();\r\n\r\n        const title = document.getElementById(\"project-title\").value;\r\n        const newProject = new _Project_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](title);\r\n\r\n        this.dataStore.addProject(newProject);\r\n        this.closeAddProjectModal();\r\n        this.renderTasks({\r\n            projectId: newProject.getId(),\r\n            tasks: newProject.tasks,\r\n        });\r\n        this.renderProjects();\r\n        this.showAddTaskButton()\r\n    }\r\n\r\n    clickNode(node) {\r\n        const clickEvent = new MouseEvent(\"click\", {\r\n            bubbles: true,\r\n            cancelable: true,\r\n            view: window,\r\n        });\r\n\r\n        node.dispatchEvent(clickEvent);\r\n    }\r\n\r\n    hideAddTaskButton() {\r\n        const addTaskButton = document.getElementById(\"add-task-button\");\r\n        addTaskButton.style.display = \"none\";\r\n    }\r\n\r\n    showAddTaskButton() {\r\n        const addTaskButton = document.getElementById(\"add-task-button\");\r\n        addTaskButton.style.display = \"inline-block\";\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack://todo/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _UI_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UI.js */ \"./src/UI.js\");\n/* harmony import */ var _DataStore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataStore.js */ \"./src/DataStore.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _assets_default_project_icon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/default-project-icon.svg */ \"./src/assets/default-project-icon.svg\");\n/* harmony import */ var _Task_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Task.js */ \"./src/Task.js\");\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n// index.js\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst dataStore = new _DataStore_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]();\r\nconst ui = new _UI_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](dataStore);\r\n\r\n// const project = new Project(\"Personal\", defaultProjectIcon);\r\n// const project1 = new Project(\"Personal 1\", defaultProjectIcon);\r\n// const project2 = new Project(\"Personal 2\", defaultProjectIcon);\r\n\r\n// const task = new Task(\r\n//     \"Complete assignment\",\r\n//     \"Description\",\r\n//     \"2024-02-08\",\r\n//     \"high\",\r\n//     \"Notes\",\r\n//     []\r\n// );\r\n// project.addTask(task);\r\n\r\n// const task2 = new Task(\r\n//     \"New Assignment\",\r\n//     \"Description fffff\",\r\n//     \"2024-01-15\",\r\n//     \"low\",\r\n//     \"Notes wwwww\",\r\n//     []\r\n// );\r\n// project.addTask(task2);\r\n\r\n// dataStore.addProject(project);\r\n// dataStore.addProject(project1);\r\n// dataStore.addProject(project2);\r\n\r\n// Render UI\r\n\r\n\r\n// Additional improvements\r\ndocument.addEventListener(\"DOMContentLoaded\", () => {\r\n    ui.bindEvents();\r\n    ui.render();\r\n});\r\n\n\n//# sourceURL=webpack://todo/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;