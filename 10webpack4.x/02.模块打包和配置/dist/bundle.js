/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./02.模块打包和配置/src/index.js":
/*!*********************************!*\
  !*** ./02.模块打包和配置/src/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("//nodejs导入方式,浏览器无法使用\r\nconst name = __webpack_require__(/*! ./module.js */ \"./02.模块打包和配置/src/module.js\");\r\nconsole.log(name);\n\n//# sourceURL=webpack://10webpack4.x/./02.%E6%A8%A1%E5%9D%97%E6%89%93%E5%8C%85%E5%92%8C%E9%85%8D%E7%BD%AE/src/index.js?");

/***/ }),

/***/ "./02.模块打包和配置/src/module.js":
/*!**********************************!*\
  !*** ./02.模块打包和配置/src/module.js ***!
  \**********************************/
/***/ ((module) => {

eval("//导出\r\nmodule.exports = {\r\n    name: 'Mr.Lee'\r\n};\n\n//# sourceURL=webpack://10webpack4.x/./02.%E6%A8%A1%E5%9D%97%E6%89%93%E5%8C%85%E5%92%8C%E9%85%8D%E7%BD%AE/src/module.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./02.模块打包和配置/src/index.js");
/******/ 	
/******/ })()
;