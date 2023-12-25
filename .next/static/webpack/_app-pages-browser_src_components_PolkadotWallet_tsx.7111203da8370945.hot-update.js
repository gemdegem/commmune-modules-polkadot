"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("_app-pages-browser_src_components_PolkadotWallet_tsx",{

/***/ "(app-pages-browser)/./src/components/PolkadotWallet.tsx":
/*!*******************************************!*\
  !*** ./src/components/PolkadotWallet.tsx ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PolkadotWallet; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _polkadot_extension_dapp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polkadot/extension-dapp */ \"(app-pages-browser)/./node_modules/@polkadot/extension-dapp/bundle.js\");\n/* harmony import */ var _services_ApiCalls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ApiCalls */ \"(app-pages-browser)/./src/services/ApiCalls.ts\");\n\nvar _s = $RefreshSig$();\n\n\n\nfunction PolkadotWallet() {\n    _s();\n    const [accounts, setAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedAccount, setSelectedAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [moduleNames, setModuleNames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function connectWallet() {\n            const extensions = await (0,_polkadot_extension_dapp__WEBPACK_IMPORTED_MODULE_3__.web3Enable)(\"MyApp\");\n            if (extensions.length > 0) {\n                const allAccounts = await (0,_polkadot_extension_dapp__WEBPACK_IMPORTED_MODULE_3__.web3Accounts)();\n                setAccounts(allAccounts);\n            }\n        }\n        connectWallet();\n    }, []);\n    const handleAccountSelection = (accountIndex)=>{\n        setSelectedAccount(accounts[accountIndex]);\n    };\n    const handlePostRequest = ()=>{\n        if (selectedAccount) {\n            (0,_services_ApiCalls__WEBPACK_IMPORTED_MODULE_2__.postRequest)(selectedAccount, (data)=>{\n                console.log(\"Response data:\", data);\n                setModuleNames(data);\n            });\n        }\n    };\n    const ModulesList = ()=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            style: {\n                height: \"200px\",\n                overflowY: \"scroll\"\n            },\n            children: moduleNames.map((name, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: name\n                }, index, false, {\n                    fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/components/PolkadotWallet.tsx\",\n                    lineNumber: 39,\n                    columnNumber: 9\n                }, this))\n        }, void 0, false, {\n            fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/components/PolkadotWallet.tsx\",\n            lineNumber: 37,\n            columnNumber: 5\n        }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{},\n                children: \"Connect\"\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/components/PolkadotWallet.tsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            accounts.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                onChange: (e)=>handleAccountSelection(parseInt(e.target.value, 10)),\n                children: accounts.map((account, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: index,\n                        children: [\n                            account.meta.name,\n                            \" (\",\n                            account.address,\n                            \")\"\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/components/PolkadotWallet.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/components/PolkadotWallet.tsx\",\n                lineNumber: 48,\n                columnNumber: 9\n            }, this),\n            selectedAccount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Account Name: \",\n                            selectedAccount.meta.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/components/PolkadotWallet.tsx\",\n                        lineNumber: 58,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Account Address: \",\n                            selectedAccount.address\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/components/PolkadotWallet.tsx\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/components/PolkadotWallet.tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handlePostRequest,\n                children: \"Send POST request\"\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/components/PolkadotWallet.tsx\",\n                lineNumber: 62,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModulesList, {}, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/components/PolkadotWallet.tsx\",\n                lineNumber: 63,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/components/PolkadotWallet.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(PolkadotWallet, \"X459Xz/NACqM8jC65torAJOgapE=\");\n_c = PolkadotWallet;\nvar _c;\n$RefreshReg$(_c, \"PolkadotWallet\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1BvbGthZG90V2FsbGV0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNpQjtBQUVqQjtBQUVwQyxTQUFTTTs7SUFDdEIsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdOLCtDQUFRQSxDQUE0QixFQUFFO0lBQ3RFLE1BQU0sQ0FBQ08saUJBQWlCQyxtQkFBbUIsR0FBR1IsK0NBQVFBLENBQWlDO0lBQ3ZGLE1BQU0sQ0FBQ1MsYUFBYUMsZUFBZSxHQUFHViwrQ0FBUUEsQ0FBVyxFQUFFO0lBRTNERCxnREFBU0EsQ0FBQztRQUNSLGVBQWVZO1lBQ2IsTUFBTUMsYUFBYSxNQUFNWCxvRUFBVUEsQ0FBQztZQUNwQyxJQUFJVyxXQUFXQyxNQUFNLEdBQUcsR0FBRztnQkFDekIsTUFBTUMsY0FBYyxNQUFNWixzRUFBWUE7Z0JBQ3RDSSxZQUFZUTtZQUNkO1FBQ0Y7UUFFQUg7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNSSx5QkFBeUIsQ0FBQ0M7UUFDOUJSLG1CQUFtQkgsUUFBUSxDQUFDVyxhQUFhO0lBQzNDO0lBRUEsTUFBTUMsb0JBQW9CO1FBQ3hCLElBQUlWLGlCQUFpQjtZQUNuQkosK0RBQVdBLENBQUNJLGlCQUFpQixDQUFDVztnQkFDNUJDLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JGO2dCQUM5QlIsZUFBZVE7WUFDakI7UUFDRjtJQUNGO0lBRUEsTUFBTUcsY0FBYyxrQkFDbEIsOERBQUNDO1lBQUlDLE9BQU87Z0JBQUVDLFFBQVE7Z0JBQVNDLFdBQVc7WUFBUztzQkFDaERoQixZQUFZaUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUN0Qiw4REFBQ047OEJBQWlCSzttQkFBUkM7Ozs7Ozs7Ozs7SUFLaEIscUJBQ0UsOERBQUNOOzswQkFDQyw4REFBQ087Z0JBQU9DLFNBQVMsS0FBTzswQkFBRzs7Ozs7O1lBQzFCekIsU0FBU1EsTUFBTSxHQUFHLG1CQUNqQiw4REFBQ2tCO2dCQUFPQyxVQUFVLENBQUNDLElBQU1sQix1QkFBdUJtQixTQUFTRCxFQUFFRSxNQUFNLENBQUNDLEtBQUssRUFBRTswQkFDdEUvQixTQUFTcUIsR0FBRyxDQUFDLENBQUNXLFNBQVNULHNCQUN0Qiw4REFBQ1U7d0JBQW1CRixPQUFPUjs7NEJBQ3hCUyxRQUFRRSxJQUFJLENBQUNaLElBQUk7NEJBQUM7NEJBQUdVLFFBQVFHLE9BQU87NEJBQUM7O3VCQUQzQlo7Ozs7Ozs7Ozs7WUFNbEJyQixpQ0FDQyw4REFBQ2U7O2tDQUNDLDhEQUFDbUI7OzRCQUFFOzRCQUFlbEMsZ0JBQWdCZ0MsSUFBSSxDQUFDWixJQUFJOzs7Ozs7O2tDQUMzQyw4REFBQ2M7OzRCQUFFOzRCQUFrQmxDLGdCQUFnQmlDLE9BQU87Ozs7Ozs7Ozs7Ozs7MEJBR2hELDhEQUFDWDtnQkFBT0MsU0FBU2I7MEJBQW1COzs7Ozs7MEJBQ3BDLDhEQUFDSTs7Ozs7Ozs7Ozs7QUFHUDtHQTVEd0JqQjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qb2xrYWRvdFdhbGxldC50c3g/NWJkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2ViM0VuYWJsZSwgd2ViM0FjY291bnRzIH0gZnJvbSBcIkBwb2xrYWRvdC9leHRlbnNpb24tZGFwcFwiO1xuaW1wb3J0IHsgSW5qZWN0ZWRBY2NvdW50V2l0aE1ldGEgfSBmcm9tIFwiQHBvbGthZG90L2V4dGVuc2lvbi1pbmplY3QvdHlwZXNcIjtcbmltcG9ydCB7IHBvc3RSZXF1ZXN0IH0gZnJvbSBcIi4uL3NlcnZpY2VzL0FwaUNhbGxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvbGthZG90V2FsbGV0KCkge1xuICBjb25zdCBbYWNjb3VudHMsIHNldEFjY291bnRzXSA9IHVzZVN0YXRlPEluamVjdGVkQWNjb3VudFdpdGhNZXRhW10+KFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQWNjb3VudCwgc2V0U2VsZWN0ZWRBY2NvdW50XSA9IHVzZVN0YXRlPEluamVjdGVkQWNjb3VudFdpdGhNZXRhIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFttb2R1bGVOYW1lcywgc2V0TW9kdWxlTmFtZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RXYWxsZXQoKSB7XG4gICAgICBjb25zdCBleHRlbnNpb25zID0gYXdhaXQgd2ViM0VuYWJsZShcIk15QXBwXCIpO1xuICAgICAgaWYgKGV4dGVuc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBhbGxBY2NvdW50cyA9IGF3YWl0IHdlYjNBY2NvdW50cygpO1xuICAgICAgICBzZXRBY2NvdW50cyhhbGxBY2NvdW50cyBhcyBJbmplY3RlZEFjY291bnRXaXRoTWV0YVtdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0V2FsbGV0KCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVBY2NvdW50U2VsZWN0aW9uID0gKGFjY291bnRJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRBY2NvdW50KGFjY291bnRzW2FjY291bnRJbmRleF0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBvc3RSZXF1ZXN0ID0gKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEFjY291bnQpIHtcbiAgICAgIHBvc3RSZXF1ZXN0KHNlbGVjdGVkQWNjb3VudCwgKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXNwb25zZSBkYXRhOlwiLCBkYXRhKTtcbiAgICAgICAgc2V0TW9kdWxlTmFtZXMoZGF0YSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgTW9kdWxlc0xpc3QgPSAoKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiMjAwcHhcIiwgb3ZlcmZsb3dZOiBcInNjcm9sbFwiIH19PlxuICAgICAge21vZHVsZU5hbWVzLm1hcCgobmFtZSwgaW5kZXgpID0+IChcbiAgICAgICAgPGRpdiBrZXk9e2luZGV4fT57bmFtZX08L2Rpdj5cbiAgICAgICkpfVxuICAgIDwvZGl2PlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge319PkNvbm5lY3Q8L2J1dHRvbj5cbiAgICAgIHthY2NvdW50cy5sZW5ndGggPiAwICYmIChcbiAgICAgICAgPHNlbGVjdCBvbkNoYW5nZT17KGUpID0+IGhhbmRsZUFjY291bnRTZWxlY3Rpb24ocGFyc2VJbnQoZS50YXJnZXQudmFsdWUsIDEwKSl9PlxuICAgICAgICAgIHthY2NvdW50cy5tYXAoKGFjY291bnQsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXtpbmRleH0+XG4gICAgICAgICAgICAgIHthY2NvdW50Lm1ldGEubmFtZX0gKHthY2NvdW50LmFkZHJlc3N9KVxuICAgICAgICAgICAgPC9vcHRpb24+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgKX1cbiAgICAgIHtzZWxlY3RlZEFjY291bnQgJiYgKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwPkFjY291bnQgTmFtZToge3NlbGVjdGVkQWNjb3VudC5tZXRhLm5hbWV9PC9wPlxuICAgICAgICAgIDxwPkFjY291bnQgQWRkcmVzczoge3NlbGVjdGVkQWNjb3VudC5hZGRyZXNzfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVQb3N0UmVxdWVzdH0+U2VuZCBQT1NUIHJlcXVlc3Q8L2J1dHRvbj5cbiAgICAgIDxNb2R1bGVzTGlzdCAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ3ZWIzRW5hYmxlIiwid2ViM0FjY291bnRzIiwicG9zdFJlcXVlc3QiLCJQb2xrYWRvdFdhbGxldCIsImFjY291bnRzIiwic2V0QWNjb3VudHMiLCJzZWxlY3RlZEFjY291bnQiLCJzZXRTZWxlY3RlZEFjY291bnQiLCJtb2R1bGVOYW1lcyIsInNldE1vZHVsZU5hbWVzIiwiY29ubmVjdFdhbGxldCIsImV4dGVuc2lvbnMiLCJsZW5ndGgiLCJhbGxBY2NvdW50cyIsImhhbmRsZUFjY291bnRTZWxlY3Rpb24iLCJhY2NvdW50SW5kZXgiLCJoYW5kbGVQb3N0UmVxdWVzdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiTW9kdWxlc0xpc3QiLCJkaXYiLCJzdHlsZSIsImhlaWdodCIsIm92ZXJmbG93WSIsIm1hcCIsIm5hbWUiLCJpbmRleCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJzZWxlY3QiLCJvbkNoYW5nZSIsImUiLCJwYXJzZUludCIsInRhcmdldCIsInZhbHVlIiwiYWNjb3VudCIsIm9wdGlvbiIsIm1ldGEiLCJhZGRyZXNzIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/PolkadotWallet.tsx\n"));

/***/ })

});