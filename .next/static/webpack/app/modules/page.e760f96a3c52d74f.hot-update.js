"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/modules/page",{

/***/ "(app-pages-browser)/./src/app/modules/page.tsx":
/*!**********************************!*\
  !*** ./src/app/modules/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"(app-pages-browser)/./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-pages-browser)/./node_modules/next/dist/shared/lib/app-dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_modules_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/modules-service */ \"(app-pages-browser)/./src/services/modules-service.ts\");\n/* harmony import */ var _modules_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules.module.css */ \"(app-pages-browser)/./src/app/modules/modules.module.css\");\n/* harmony import */ var _modules_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_modules_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _components_search_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/search-bar */ \"(app-pages-browser)/./src/app/modules/components/search-bar.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst PolkadotWallet = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_components_PolkadotWallet_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! @/components/PolkadotWallet */ \"(app-pages-browser)/./src/components/PolkadotWallet.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/app/modules/page.tsx -> \" + \"@/components/PolkadotWallet\"\n        ]\n    },\n    ssr: false\n});\n_c = PolkadotWallet;\nconst DynamicModuleTile = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(()=>__webpack_require__.e(/*! import() */ \"_app-pages-browser_src_app_modules_components_module-tile_module-tile_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./components/module-tile/module-tile */ \"(app-pages-browser)/./src/app/modules/components/module-tile/module-tile.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/app/modules/page.tsx -> \" + \"./components/module-tile/module-tile\"\n        ]\n    },\n    ssr: false\n});\n_c1 = DynamicModuleTile;\nfunction ModulesPage() {\n    _s();\n    const [modulesList, setModulesList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const handleModulesFetched = (modules)=>{\n        setModulesList(modules);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        async function fetchModules() {\n            const modules = await _services_modules_service__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getModulesList();\n            setModulesList(modules);\n        }\n        fetchModules();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: classnames__WEBPACK_IMPORTED_MODULE_1___default()((_modules_module_css__WEBPACK_IMPORTED_MODULE_6___default().content), \"flex flex-col items-center justify-center my-auto\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(PolkadotWallet, {\n                onModulesFetched: handleModulesFetched\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/app/modules/page.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_search_bar__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/app/modules/page.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_modules_module_css__WEBPACK_IMPORTED_MODULE_6___default().modulesList),\n                children: modulesList.map((module, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(DynamicModuleTile, {\n                        ...module\n                    }, index, false, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/app/modules/page.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/app/modules/page.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/app/modules/page.tsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(ModulesPage, \"PbIdevU4SfJsYwUyJfvkUg1id+4=\");\n_c2 = ModulesPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ModulesPage);\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"PolkadotWallet\");\n$RefreshReg$(_c1, \"DynamicModuleTile\");\n$RefreshReg$(_c2, \"ModulesPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbW9kdWxlcy9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUVvQztBQUNEO0FBQ1M7QUFFWTtBQUViO0FBQ0s7QUFFaEQsTUFBTU8saUJBQWlCTixtREFBT0EsQ0FBQyxJQUFNLCtPQUFxQzs7Ozs7O0lBQUlPLEtBQUs7O0tBQTdFRDtBQUNOLE1BQU1FLG9CQUFvQlIsbURBQU9BLENBQUMsSUFBTSxrU0FBOEM7Ozs7OztJQUFJTyxLQUFLOztNQUF6RkM7QUFFTixTQUFTQzs7SUFDUCxNQUFNLENBQUNDLGFBQWFDLGVBQWUsR0FBR1QsK0NBQVFBLENBQVEsRUFBRTtJQUV4RCxNQUFNVSx1QkFBdUIsQ0FBQ0M7UUFDNUJGLGVBQWVFO0lBQ2pCO0lBRUFaLGdEQUFTQSxDQUFDO1FBQ1IsZUFBZWE7WUFDYixNQUFNRCxVQUFVLE1BQU1WLGlFQUFjQSxDQUFDWSxjQUFjO1lBQ25ESixlQUFlRTtRQUNqQjtRQUVBQztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRTtRQUFLQyxXQUFXbEIsaURBQVVBLENBQUNLLG9FQUFlLEVBQUU7OzBCQUMzQyw4REFBQ0U7Z0JBQWVhLGtCQUFrQlA7Ozs7OzswQkFDbEMsOERBQUNQLDhEQUFTQTs7Ozs7MEJBQ1YsOERBQUNlO2dCQUFHSCxXQUFXYix3RUFBbUI7MEJBQy9CTSxZQUFZVyxHQUFHLENBQUMsQ0FBQ0MsUUFBUUMsc0JBQ3hCLDhEQUFDZjt3QkFBK0IsR0FBR2MsTUFBTTt1QkFBakJDOzs7Ozs7Ozs7Ozs7Ozs7O0FBS2xDO0dBM0JTZDtNQUFBQTtBQTZCVCwrREFBZUEsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL21vZHVsZXMvcGFnZS50c3g/OGE4NiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IE1vZHVsZXNTZXJ2aWNlIGZyb20gXCJAL3NlcnZpY2VzL21vZHVsZXMtc2VydmljZVwiO1xuaW1wb3J0IHsgZW5hYmxlUG9sa2Fkb3RFeHRlbnNpb24gfSBmcm9tIFwiQC9zZXJ2aWNlcy9wb2xrYWRvdENsaWVudFwiO1xuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vbW9kdWxlcy5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgU2VhcmNoQmFyIGZyb20gXCIuL2NvbXBvbmVudHMvc2VhcmNoLWJhclwiO1xuXG5jb25zdCBQb2xrYWRvdFdhbGxldCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiQC9jb21wb25lbnRzL1BvbGthZG90V2FsbGV0XCIpLCB7IHNzcjogZmFsc2UgfSk7XG5jb25zdCBEeW5hbWljTW9kdWxlVGlsZSA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KFwiLi9jb21wb25lbnRzL21vZHVsZS10aWxlL21vZHVsZS10aWxlXCIpLCB7IHNzcjogZmFsc2UgfSk7XG5cbmZ1bmN0aW9uIE1vZHVsZXNQYWdlKCkge1xuICBjb25zdCBbbW9kdWxlc0xpc3QsIHNldE1vZHVsZXNMaXN0XSA9IHVzZVN0YXRlPGFueVtdPihbXSk7XG5cbiAgY29uc3QgaGFuZGxlTW9kdWxlc0ZldGNoZWQgPSAobW9kdWxlcykgPT4ge1xuICAgIHNldE1vZHVsZXNMaXN0KG1vZHVsZXMpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hNb2R1bGVzKCkge1xuICAgICAgY29uc3QgbW9kdWxlcyA9IGF3YWl0IE1vZHVsZXNTZXJ2aWNlLmdldE1vZHVsZXNMaXN0KCk7XG4gICAgICBzZXRNb2R1bGVzTGlzdChtb2R1bGVzKTtcbiAgICB9XG5cbiAgICBmZXRjaE1vZHVsZXMoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPXtjbGFzc05hbWVzKGNsYXNzZXMuY29udGVudCwgXCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBteS1hdXRvXCIpfT5cbiAgICAgIDxQb2xrYWRvdFdhbGxldCBvbk1vZHVsZXNGZXRjaGVkPXtoYW5kbGVNb2R1bGVzRmV0Y2hlZH0gLz5cbiAgICAgIDxTZWFyY2hCYXIgLz5cbiAgICAgIDx1bCBjbGFzc05hbWU9e2NsYXNzZXMubW9kdWxlc0xpc3R9PlxuICAgICAgICB7bW9kdWxlc0xpc3QubWFwKChtb2R1bGUsIGluZGV4KSA9PiAoXG4gICAgICAgICAgPER5bmFtaWNNb2R1bGVUaWxlIGtleT17aW5kZXh9IHsuLi5tb2R1bGV9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L21haW4+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1vZHVsZXNQYWdlO1xuIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJkeW5hbWljIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNb2R1bGVzU2VydmljZSIsImNsYXNzZXMiLCJTZWFyY2hCYXIiLCJQb2xrYWRvdFdhbGxldCIsInNzciIsIkR5bmFtaWNNb2R1bGVUaWxlIiwiTW9kdWxlc1BhZ2UiLCJtb2R1bGVzTGlzdCIsInNldE1vZHVsZXNMaXN0IiwiaGFuZGxlTW9kdWxlc0ZldGNoZWQiLCJtb2R1bGVzIiwiZmV0Y2hNb2R1bGVzIiwiZ2V0TW9kdWxlc0xpc3QiLCJtYWluIiwiY2xhc3NOYW1lIiwiY29udGVudCIsIm9uTW9kdWxlc0ZldGNoZWQiLCJ1bCIsIm1hcCIsIm1vZHVsZSIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/modules/page.tsx\n"));

/***/ })

});