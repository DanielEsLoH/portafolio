(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 5093:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/styles/style.css
var style = __webpack_require__(6247);
// EXTERNAL MODULE: external "@reduxjs/toolkit"
var toolkit_ = __webpack_require__(5184);
// EXTERNAL MODULE: ./src/redux/navHeight.ts
var navHeight = __webpack_require__(4666);
;// CONCATENATED MODULE: ./src/redux/store.ts


const store = (0,toolkit_.configureStore)({
    reducer: {
        navHeight: navHeight/* default */.Z
    },
    devTools: "production" !== "production"
});
/* harmony default export */ const redux_store = (store);

// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/pages/_app.tsx





const App = ({ Component , pageProps  })=>{
    (0,external_react_.useEffect)(()=>{
        let devEnv = process && "production" === "development";
        if (!devEnv) {
            window.addEventListener("DOMContentLoaded", function() {
                navigator.serviceWorker.register("../../arc-sw.js").then(function(registration) {
                    console.log("Arc service worker successful with scope: ", registration.scope);
                }, function(err) {
                    console.log("Arc service worker registration failed: ", err);
                });
            });
        }
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.StrictMode, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(external_react_redux_.Provider, {
            store: redux_store,
            children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            })
        })
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 4666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export setNavHeight */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5184);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);

const initialState = 0;
const navHeightSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
    name: "profile",
    initialState,
    reducers: {
        setNavHeight: (state, action)=>{
            return action.payload;
        }
    }
});
const { setNavHeight  } = navHeightSlice.actions;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navHeightSlice.reducer);


/***/ }),

/***/ 6247:
/***/ (() => {



/***/ }),

/***/ 5184:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(5093));
module.exports = __webpack_exports__;

})();