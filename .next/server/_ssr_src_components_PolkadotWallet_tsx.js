"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_ssr_src_components_PolkadotWallet_tsx";
exports.ids = ["_ssr_src_components_PolkadotWallet_tsx"];
exports.modules = {

/***/ "(ssr)/./src/components/PolkadotWallet.tsx":
/*!*******************************************!*\
  !*** ./src/components/PolkadotWallet.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PolkadotWallet)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _polkadot_extension_dapp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polkadot/extension-dapp */ \"(ssr)/./node_modules/@polkadot/extension-dapp/bundle.js\");\n/* harmony import */ var _services_ApiCalls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/ApiCalls */ \"(ssr)/./src/services/ApiCalls.ts\");\n\n\n\n\nfunction PolkadotWallet({ onModulesFetched }) {\n    const [accounts, setAccounts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [selectedAccount, setSelectedAccount] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [moduleNames, setModuleNames] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function connectWallet() {\n            const extensions = await (0,_polkadot_extension_dapp__WEBPACK_IMPORTED_MODULE_3__.web3Enable)(\"MyApp\");\n            if (extensions.length > 0) {\n                const allAccounts = await (0,_polkadot_extension_dapp__WEBPACK_IMPORTED_MODULE_3__.web3Accounts)();\n                setAccounts(allAccounts);\n            }\n        }\n        connectWallet();\n    }, []);\n    const handleAccountSelection = (accountIndex)=>{\n        setSelectedAccount(accounts[accountIndex]);\n    };\n    const handlePostRequest = ()=>{\n        if (selectedAccount) {\n            (0,_services_ApiCalls__WEBPACK_IMPORTED_MODULE_2__.postRequest)(selectedAccount, (data)=>{\n                console.log(\"Response data:\", data);\n                onModulesFetched(data);\n            });\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{},\n                children: \"Connect\"\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/components/PolkadotWallet.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            accounts.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"select\", {\n                onChange: (e)=>handleAccountSelection(parseInt(e.target.value, 10)),\n                children: accounts.map((account, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"option\", {\n                        value: index,\n                        children: [\n                            account.meta.name,\n                            \" (\",\n                            account.address,\n                            \")\"\n                        ]\n                    }, index, true, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/components/PolkadotWallet.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 13\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/components/PolkadotWallet.tsx\",\n                lineNumber: 40,\n                columnNumber: 9\n            }, this),\n            selectedAccount && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Account Name: \",\n                            selectedAccount.meta.name\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/components/PolkadotWallet.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            \"Account Address: \",\n                            selectedAccount.address\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/components/PolkadotWallet.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/components/PolkadotWallet.tsx\",\n                lineNumber: 49,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handlePostRequest,\n                children: \"Send POST request\"\n            }, void 0, false, {\n                fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/components/PolkadotWallet.tsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/bartek/Downloads/Programowanie/Commune-new-nextjs/frontend/src/components/PolkadotWallet.tsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvY29tcG9uZW50cy9Qb2xrYWRvdFdhbGxldC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDaUI7QUFFakI7QUFFcEMsU0FBU00sZUFBZSxFQUFFQyxnQkFBZ0IsRUFBNkM7SUFDcEcsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdQLCtDQUFRQSxDQUE0QixFQUFFO0lBQ3RFLE1BQU0sQ0FBQ1EsaUJBQWlCQyxtQkFBbUIsR0FBR1QsK0NBQVFBLENBQWlDO0lBQ3ZGLE1BQU0sQ0FBQ1UsYUFBYUMsZUFBZSxHQUFHWCwrQ0FBUUEsQ0FBVyxFQUFFO0lBRTNERCxnREFBU0EsQ0FBQztRQUNSLGVBQWVhO1lBQ2IsTUFBTUMsYUFBYSxNQUFNWixvRUFBVUEsQ0FBQztZQUNwQyxJQUFJWSxXQUFXQyxNQUFNLEdBQUcsR0FBRztnQkFDekIsTUFBTUMsY0FBYyxNQUFNYixzRUFBWUE7Z0JBQ3RDSyxZQUFZUTtZQUNkO1FBQ0Y7UUFFQUg7SUFDRixHQUFHLEVBQUU7SUFFTCxNQUFNSSx5QkFBeUIsQ0FBQ0M7UUFDOUJSLG1CQUFtQkgsUUFBUSxDQUFDVyxhQUFhO0lBQzNDO0lBRUEsTUFBTUMsb0JBQW9CO1FBQ3hCLElBQUlWLGlCQUFpQjtZQUNuQkwsK0RBQVdBLENBQUNLLGlCQUFpQixDQUFDVztnQkFDNUJDLFFBQVFDLEdBQUcsQ0FBQyxrQkFBa0JGO2dCQUM5QmQsaUJBQWlCYztZQUNuQjtRQUNGO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0c7OzBCQUNDLDhEQUFDQztnQkFBT0MsU0FBUyxLQUFPOzBCQUFHOzs7Ozs7WUFDMUJsQixTQUFTUSxNQUFNLEdBQUcsbUJBQ2pCLDhEQUFDVztnQkFBT0MsVUFBVSxDQUFDQyxJQUFNWCx1QkFBdUJZLFNBQVNELEVBQUVFLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFOzBCQUN0RXhCLFNBQVN5QixHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCLDhEQUFDQzt3QkFBbUJKLE9BQU9HOzs0QkFDeEJELFFBQVFHLElBQUksQ0FBQ0MsSUFBSTs0QkFBQzs0QkFBR0osUUFBUUssT0FBTzs0QkFBQzs7dUJBRDNCSjs7Ozs7Ozs7OztZQU1sQnpCLGlDQUNDLDhEQUFDYzs7a0NBQ0MsOERBQUNnQjs7NEJBQUU7NEJBQWU5QixnQkFBZ0IyQixJQUFJLENBQUNDLElBQUk7Ozs7Ozs7a0NBQzNDLDhEQUFDRTs7NEJBQUU7NEJBQWtCOUIsZ0JBQWdCNkIsT0FBTzs7Ozs7Ozs7Ozs7OzswQkFHaEQsOERBQUNkO2dCQUFPQyxTQUFTTjswQkFBbUI7Ozs7Ozs7Ozs7OztBQUcxQyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zyb250ZW5kLW5leHQvLi9zcmMvY29tcG9uZW50cy9Qb2xrYWRvdFdhbGxldC50c3g/NWJkMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgd2ViM0VuYWJsZSwgd2ViM0FjY291bnRzIH0gZnJvbSBcIkBwb2xrYWRvdC9leHRlbnNpb24tZGFwcFwiO1xuaW1wb3J0IHsgSW5qZWN0ZWRBY2NvdW50V2l0aE1ldGEgfSBmcm9tIFwiQHBvbGthZG90L2V4dGVuc2lvbi1pbmplY3QvdHlwZXNcIjtcbmltcG9ydCB7IHBvc3RSZXF1ZXN0IH0gZnJvbSBcIi4uL3NlcnZpY2VzL0FwaUNhbGxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvbGthZG90V2FsbGV0KHsgb25Nb2R1bGVzRmV0Y2hlZCB9OiB7IG9uTW9kdWxlc0ZldGNoZWQ6IChkYXRhOiBhbnkpID0+IHZvaWQgfSkge1xuICBjb25zdCBbYWNjb3VudHMsIHNldEFjY291bnRzXSA9IHVzZVN0YXRlPEluamVjdGVkQWNjb3VudFdpdGhNZXRhW10+KFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkQWNjb3VudCwgc2V0U2VsZWN0ZWRBY2NvdW50XSA9IHVzZVN0YXRlPEluamVjdGVkQWNjb3VudFdpdGhNZXRhIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFttb2R1bGVOYW1lcywgc2V0TW9kdWxlTmFtZXNdID0gdXNlU3RhdGU8c3RyaW5nW10+KFtdKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3RXYWxsZXQoKSB7XG4gICAgICBjb25zdCBleHRlbnNpb25zID0gYXdhaXQgd2ViM0VuYWJsZShcIk15QXBwXCIpO1xuICAgICAgaWYgKGV4dGVuc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjb25zdCBhbGxBY2NvdW50cyA9IGF3YWl0IHdlYjNBY2NvdW50cygpO1xuICAgICAgICBzZXRBY2NvdW50cyhhbGxBY2NvdW50cyBhcyBJbmplY3RlZEFjY291bnRXaXRoTWV0YVtdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0V2FsbGV0KCk7XG4gIH0sIFtdKTtcblxuICBjb25zdCBoYW5kbGVBY2NvdW50U2VsZWN0aW9uID0gKGFjY291bnRJbmRleDogbnVtYmVyKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRBY2NvdW50KGFjY291bnRzW2FjY291bnRJbmRleF0pO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZVBvc3RSZXF1ZXN0ID0gKCkgPT4ge1xuICAgIGlmIChzZWxlY3RlZEFjY291bnQpIHtcbiAgICAgIHBvc3RSZXF1ZXN0KHNlbGVjdGVkQWNjb3VudCwgKGRhdGEpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXNwb25zZSBkYXRhOlwiLCBkYXRhKTtcbiAgICAgICAgb25Nb2R1bGVzRmV0Y2hlZChkYXRhKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHt9fT5Db25uZWN0PC9idXR0b24+XG4gICAgICB7YWNjb3VudHMubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgIDxzZWxlY3Qgb25DaGFuZ2U9eyhlKSA9PiBoYW5kbGVBY2NvdW50U2VsZWN0aW9uKHBhcnNlSW50KGUudGFyZ2V0LnZhbHVlLCAxMCkpfT5cbiAgICAgICAgICB7YWNjb3VudHMubWFwKChhY2NvdW50LCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPG9wdGlvbiBrZXk9e2luZGV4fSB2YWx1ZT17aW5kZXh9PlxuICAgICAgICAgICAgICB7YWNjb3VudC5tZXRhLm5hbWV9ICh7YWNjb3VudC5hZGRyZXNzfSlcbiAgICAgICAgICAgIDwvb3B0aW9uPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgICl9XG4gICAgICB7c2VsZWN0ZWRBY2NvdW50ICYmIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cD5BY2NvdW50IE5hbWU6IHtzZWxlY3RlZEFjY291bnQubWV0YS5uYW1lfTwvcD5cbiAgICAgICAgICA8cD5BY2NvdW50IEFkZHJlc3M6IHtzZWxlY3RlZEFjY291bnQuYWRkcmVzc308L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlUG9zdFJlcXVlc3R9PlNlbmQgUE9TVCByZXF1ZXN0PC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIndlYjNFbmFibGUiLCJ3ZWIzQWNjb3VudHMiLCJwb3N0UmVxdWVzdCIsIlBvbGthZG90V2FsbGV0Iiwib25Nb2R1bGVzRmV0Y2hlZCIsImFjY291bnRzIiwic2V0QWNjb3VudHMiLCJzZWxlY3RlZEFjY291bnQiLCJzZXRTZWxlY3RlZEFjY291bnQiLCJtb2R1bGVOYW1lcyIsInNldE1vZHVsZU5hbWVzIiwiY29ubmVjdFdhbGxldCIsImV4dGVuc2lvbnMiLCJsZW5ndGgiLCJhbGxBY2NvdW50cyIsImhhbmRsZUFjY291bnRTZWxlY3Rpb24iLCJhY2NvdW50SW5kZXgiLCJoYW5kbGVQb3N0UmVxdWVzdCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsInNlbGVjdCIsIm9uQ2hhbmdlIiwiZSIsInBhcnNlSW50IiwidGFyZ2V0IiwidmFsdWUiLCJtYXAiLCJhY2NvdW50IiwiaW5kZXgiLCJvcHRpb24iLCJtZXRhIiwibmFtZSIsImFkZHJlc3MiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./src/components/PolkadotWallet.tsx\n");

/***/ }),

/***/ "(ssr)/./src/services/ApiCalls.ts":
/*!**********************************!*\
  !*** ./src/services/ApiCalls.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   postRequest: () => (/* binding */ postRequest)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"(ssr)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _polkadot_extension_dapp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polkadot/extension-dapp */ \"(ssr)/./node_modules/@polkadot/extension-dapp/bundle.js\");\n\n\nconst postRequest = async (selectedAccount, callback)=>{\n    const endpoint = \"http://24.83.20.198:2750/modules\";\n    const currentTimestamp = Math.floor(Date.now() / 1000);\n    const serverData = {\n        args: [],\n        kwargs: {},\n        ip: \"24.83.20.198\",\n        timestamp: currentTimestamp,\n        hash: \"9b44a42788425d19de82f930640e41b2a56f4e3b25eccca50a90b95e79ede994\"\n    };\n    const payloadAsString = JSON.stringify(serverData);\n    try {\n        if (!selectedAccount) {\n            throw new Error(\"No account selected.\");\n        }\n        const injector = await (0,_polkadot_extension_dapp__WEBPACK_IMPORTED_MODULE_0__.web3FromAddress)(selectedAccount.address);\n        const signRaw = injector?.signer?.signRaw;\n        if (signRaw) {\n            const { signature } = await signRaw({\n                address: selectedAccount.address,\n                data: payloadAsString,\n                type: \"bytes\"\n            });\n            const data = {\n                data: payloadAsString,\n                crypto_type: 1,\n                signature,\n                address: selectedAccount.address\n            };\n            const response = await axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].post(endpoint, data);\n            console.log(\"Raw Response:\", response.data);\n            // const jsonResponse = response.data.substring(response.data.indexOf(\"{\"));\n            // const parsedResponse = JSON.parse(jsonResponse);\n            if (response.data && response.data.data) {\n                const nestedData = JSON.parse(response.data.data);\n                console.log(\"Nested Data:\", nestedData);\n                const finalData = nestedData.data;\n                console.log(\"Final Data:\", finalData);\n                callback(finalData); // Wywołanie callback z danymi\n            }\n        } else {\n            throw new Error(\"The method signRaw is not available on the signer\");\n        }\n    } catch (error) {\n        console.error(\"Error:\", error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9zcmMvc2VydmljZXMvQXBpQ2FsbHMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBQ2lDO0FBR3BELE1BQU1FLGNBQWMsT0FBT0MsaUJBQWlEQztJQUNqRixNQUFNQyxXQUFXO0lBRWpCLE1BQU1DLG1CQUFtQkMsS0FBS0MsS0FBSyxDQUFDQyxLQUFLQyxHQUFHLEtBQUs7SUFFakQsTUFBTUMsYUFBYTtRQUNqQkMsTUFBTSxFQUFFO1FBQ1JDLFFBQVEsQ0FBQztRQUNUQyxJQUFJO1FBQ0pDLFdBQVdUO1FBQ1hVLE1BQU07SUFDUjtJQUVBLE1BQU1DLGtCQUFrQkMsS0FBS0MsU0FBUyxDQUFDUjtJQUV2QyxJQUFJO1FBQ0YsSUFBSSxDQUFDUixpQkFBaUI7WUFDcEIsTUFBTSxJQUFJaUIsTUFBTTtRQUNsQjtRQUVBLE1BQU1DLFdBQVcsTUFBTXBCLHlFQUFlQSxDQUFDRSxnQkFBZ0JtQixPQUFPO1FBRTlELE1BQU1DLFVBQVVGLFVBQVVHLFFBQVFEO1FBQ2xDLElBQUlBLFNBQVM7WUFDWCxNQUFNLEVBQUVFLFNBQVMsRUFBRSxHQUFHLE1BQU1GLFFBQVE7Z0JBQ2xDRCxTQUFTbkIsZ0JBQWdCbUIsT0FBTztnQkFDaENJLE1BQU1UO2dCQUNOVSxNQUFNO1lBQ1I7WUFFQSxNQUFNRCxPQUFPO2dCQUNYQSxNQUFNVDtnQkFDTlcsYUFBYTtnQkFDYkg7Z0JBQ0FILFNBQVNuQixnQkFBZ0JtQixPQUFPO1lBQ2xDO1lBRUEsTUFBTU8sV0FBVyxNQUFNN0IsNkNBQUtBLENBQUM4QixJQUFJLENBQUN6QixVQUFVcUI7WUFDNUNLLFFBQVFDLEdBQUcsQ0FBQyxpQkFBaUJILFNBQVNILElBQUk7WUFFMUMsNEVBQTRFO1lBQzVFLG1EQUFtRDtZQUVuRCxJQUFJRyxTQUFTSCxJQUFJLElBQUlHLFNBQVNILElBQUksQ0FBQ0EsSUFBSSxFQUFFO2dCQUN2QyxNQUFNTyxhQUFhZixLQUFLZ0IsS0FBSyxDQUFDTCxTQUFTSCxJQUFJLENBQUNBLElBQUk7Z0JBQ2hESyxRQUFRQyxHQUFHLENBQUMsZ0JBQWdCQztnQkFFNUIsTUFBTUUsWUFBWUYsV0FBV1AsSUFBSTtnQkFDakNLLFFBQVFDLEdBQUcsQ0FBQyxlQUFlRztnQkFFM0IvQixTQUFTK0IsWUFBWSw4QkFBOEI7WUFDckQ7UUFDRixPQUFPO1lBQ0wsTUFBTSxJQUFJZixNQUFNO1FBQ2xCO0lBQ0YsRUFBRSxPQUFPZ0IsT0FBTztRQUNkTCxRQUFRSyxLQUFLLENBQUMsVUFBVUE7SUFDMUI7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZnJvbnRlbmQtbmV4dC8uL3NyYy9zZXJ2aWNlcy9BcGlDYWxscy50cz8wYjgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCB7IHdlYjNGcm9tQWRkcmVzcyB9IGZyb20gXCJAcG9sa2Fkb3QvZXh0ZW5zaW9uLWRhcHBcIjtcbmltcG9ydCB7IEluamVjdGVkQWNjb3VudFdpdGhNZXRhIH0gZnJvbSBcIkBwb2xrYWRvdC9leHRlbnNpb24taW5qZWN0L3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBwb3N0UmVxdWVzdCA9IGFzeW5jIChzZWxlY3RlZEFjY291bnQ6IEluamVjdGVkQWNjb3VudFdpdGhNZXRhIHwgbnVsbCwgY2FsbGJhY2s6IChkYXRhOiBzdHJpbmdbXSkgPT4gdm9pZCkgPT4ge1xuICBjb25zdCBlbmRwb2ludCA9IFwiaHR0cDovLzI0LjgzLjIwLjE5ODoyNzUwL21vZHVsZXNcIjtcblxuICBjb25zdCBjdXJyZW50VGltZXN0YW1wID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5cbiAgY29uc3Qgc2VydmVyRGF0YSA9IHtcbiAgICBhcmdzOiBbXSxcbiAgICBrd2FyZ3M6IHt9LFxuICAgIGlwOiBcIjI0LjgzLjIwLjE5OFwiLFxuICAgIHRpbWVzdGFtcDogY3VycmVudFRpbWVzdGFtcCxcbiAgICBoYXNoOiBcIjliNDRhNDI3ODg0MjVkMTlkZTgyZjkzMDY0MGU0MWIyYTU2ZjRlM2IyNWVjY2NhNTBhOTBiOTVlNzllZGU5OTRcIixcbiAgfTtcblxuICBjb25zdCBwYXlsb2FkQXNTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShzZXJ2ZXJEYXRhKTtcblxuICB0cnkge1xuICAgIGlmICghc2VsZWN0ZWRBY2NvdW50KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhY2NvdW50IHNlbGVjdGVkLlwiKTtcbiAgICB9XG5cbiAgICBjb25zdCBpbmplY3RvciA9IGF3YWl0IHdlYjNGcm9tQWRkcmVzcyhzZWxlY3RlZEFjY291bnQuYWRkcmVzcyk7XG5cbiAgICBjb25zdCBzaWduUmF3ID0gaW5qZWN0b3I/LnNpZ25lcj8uc2lnblJhdztcbiAgICBpZiAoc2lnblJhdykge1xuICAgICAgY29uc3QgeyBzaWduYXR1cmUgfSA9IGF3YWl0IHNpZ25SYXcoe1xuICAgICAgICBhZGRyZXNzOiBzZWxlY3RlZEFjY291bnQuYWRkcmVzcyxcbiAgICAgICAgZGF0YTogcGF5bG9hZEFzU3RyaW5nLFxuICAgICAgICB0eXBlOiBcImJ5dGVzXCIsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgZGF0YTogcGF5bG9hZEFzU3RyaW5nLFxuICAgICAgICBjcnlwdG9fdHlwZTogMSxcbiAgICAgICAgc2lnbmF0dXJlLFxuICAgICAgICBhZGRyZXNzOiBzZWxlY3RlZEFjY291bnQuYWRkcmVzcyxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChlbmRwb2ludCwgZGF0YSk7XG4gICAgICBjb25zb2xlLmxvZyhcIlJhdyBSZXNwb25zZTpcIiwgcmVzcG9uc2UuZGF0YSk7XG5cbiAgICAgIC8vIGNvbnN0IGpzb25SZXNwb25zZSA9IHJlc3BvbnNlLmRhdGEuc3Vic3RyaW5nKHJlc3BvbnNlLmRhdGEuaW5kZXhPZihcIntcIikpO1xuICAgICAgLy8gY29uc3QgcGFyc2VkUmVzcG9uc2UgPSBKU09OLnBhcnNlKGpzb25SZXNwb25zZSk7XG5cbiAgICAgIGlmIChyZXNwb25zZS5kYXRhICYmIHJlc3BvbnNlLmRhdGEuZGF0YSkge1xuICAgICAgICBjb25zdCBuZXN0ZWREYXRhID0gSlNPTi5wYXJzZShyZXNwb25zZS5kYXRhLmRhdGEpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIk5lc3RlZCBEYXRhOlwiLCBuZXN0ZWREYXRhKTtcblxuICAgICAgICBjb25zdCBmaW5hbERhdGEgPSBuZXN0ZWREYXRhLmRhdGE7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmluYWwgRGF0YTpcIiwgZmluYWxEYXRhKTtcblxuICAgICAgICBjYWxsYmFjayhmaW5hbERhdGEpOyAvLyBXeXdvxYJhbmllIGNhbGxiYWNrIHogZGFueW1pXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBtZXRob2Qgc2lnblJhdyBpcyBub3QgYXZhaWxhYmxlIG9uIHRoZSBzaWduZXJcIik7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvcjpcIiwgZXJyb3IpO1xuICB9XG59O1xuIl0sIm5hbWVzIjpbImF4aW9zIiwid2ViM0Zyb21BZGRyZXNzIiwicG9zdFJlcXVlc3QiLCJzZWxlY3RlZEFjY291bnQiLCJjYWxsYmFjayIsImVuZHBvaW50IiwiY3VycmVudFRpbWVzdGFtcCIsIk1hdGgiLCJmbG9vciIsIkRhdGUiLCJub3ciLCJzZXJ2ZXJEYXRhIiwiYXJncyIsImt3YXJncyIsImlwIiwidGltZXN0YW1wIiwiaGFzaCIsInBheWxvYWRBc1N0cmluZyIsIkpTT04iLCJzdHJpbmdpZnkiLCJFcnJvciIsImluamVjdG9yIiwiYWRkcmVzcyIsInNpZ25SYXciLCJzaWduZXIiLCJzaWduYXR1cmUiLCJkYXRhIiwidHlwZSIsImNyeXB0b190eXBlIiwicmVzcG9uc2UiLCJwb3N0IiwiY29uc29sZSIsImxvZyIsIm5lc3RlZERhdGEiLCJwYXJzZSIsImZpbmFsRGF0YSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./src/services/ApiCalls.ts\n");

/***/ })

};
;