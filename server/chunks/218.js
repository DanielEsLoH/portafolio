"use strict";
exports.id = 218;
exports.ids = [218];
exports.modules = {

/***/ 218:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(567);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _redux_reduxHooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4789);
/* harmony import */ var _redux_navHeight__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6666);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3094);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const Nav = ()=>{
    const [animationState, setAnimationState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("notHovered");
    const navRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
    const isTabletOrMobile = (0,react_responsive__WEBPACK_IMPORTED_MODULE_6__.useMediaQuery)({
        query: "(max-width: 1224px)"
    });
    const [hamburgerState, setHamburgerState] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const dispatch = (0,_redux_reduxHooks__WEBPACK_IMPORTED_MODULE_4__/* .useAppDispatch */ .T)();
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (navRef.current) {
            if (false) {}
        }
    }, [
        dispatch
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.nav, {
        className: `flex py-6 px-8 md:px-24 justify-between items-center sticky top-0 bg-bg-surface z-50 overflow-hidden ${isTabletOrMobile ? "flex-col" : "flex-row"}`,
        ref: navRef,
        layout: true,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                className: isTabletOrMobile ? "flex justify-between items-center w-full" : "",
                layout: true,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                        className: "flex space-x-6 items-center",
                        onHoverStart: ()=>{
                            setAnimationState("hovered");
                        },
                        onHoverEnd: ()=>{
                            setAnimationState("notHovered");
                        },
                        onTap: ()=>{
                            setAnimationState("hovered");
                            setTimeout(()=>{
                                setAnimationState("notHovered");
                            }, 2000);
                        },
                        layout: true,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                className: "border border-[#303436] rounded-md flex justify-center items-center overflow-hidden h-12 w-12",
                                layout: true,
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
                                    exitBeforeEnter: true,
                                    children: [
                                        animationState === "notHovered" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.figure, {
                                            animate: {
                                                x: 0,
                                                scale: 1,
                                                rotate: 0
                                            },
                                            initial: {
                                                x: -100
                                            },
                                            exit: {
                                                scale: 0,
                                                rotate: 0,
                                                transition: {
                                                    ease: [
                                                        0.07,
                                                        -0.04,
                                                        1,
                                                        0.4
                                                    ],
                                                    duration: 0.8
                                                }
                                            },
                                            transition: {
                                                duration: 0.5,
                                                type: "spring"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsPerson, {
                                                color: "#C3C1BA",
                                                size: 25
                                            })
                                        }, animationState),
                                        animationState === "hovered" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.figure, {
                                            animate: {
                                                opacity: 1,
                                                y: 0,
                                                scale: 1
                                            },
                                            initial: {
                                                opacity: 0,
                                                y: 0,
                                                scale: 0
                                            },
                                            exit: {
                                                x: 100,
                                                scale: 0
                                            },
                                            transition: {
                                                duration: 0.8,
                                                type: "spring"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_8___default()), {
                                                src: "/fotoPorta.jpeg",
                                                alt: "image",
                                                width: 100,
                                                height: 100,
                                                className: "max-h-full max-w-full object-cover"
                                            })
                                        }, animationState)
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: `font-medium text-xl ${animationState === "hovered" ? "text-sky-400" : "text-white"}`,
                                children: "Daniel Esteban Londo\xf1o Henao"
                            })
                        ]
                    }),
                    isTabletOrMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        onClick: ()=>setHamburgerState(!hamburgerState),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                animate: {
                                    rotate: hamburgerState ? 40 : 0,
                                    transformOrigin: "top left",
                                    marginBottom: hamburgerState ? "20px" : "10px"
                                },
                                className: "bg-white h-0.5 rounded-full w-9"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                                animate: {
                                    rotate: hamburgerState ? -40 : 0,
                                    transformOrigin: "bottom left",
                                    marginTop: hamburgerState ? "20px" : "10px"
                                },
                                className: "bg-white h-0.5 rounded-full w-9"
                            })
                        ]
                    })
                ]
            }),
            !isTabletOrMobile && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-[#FFFFFFFF] flex items-center space-x-16 rounded-md",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Link, {
                        className: "rounded-md border-4 border-sky-700 bg-sky-700",
                        to: "work",
                        activeClass: "active",
                        smooth: true,
                        duration: 200,
                        children: " Proyectos"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Link, {
                        className: "rounded-md border-4 border-sky-700 bg-sky-700",
                        to: "tools",
                        activeClass: "active",
                        smooth: true,
                        duration: 200,
                        children: "Herramientas"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_scroll__WEBPACK_IMPORTED_MODULE_7__.Link, {
                        className: "rounded-md border-4 border-sky-700 bg-sky-700",
                        to: "contact",
                        activeClass: "active",
                        smooth: true,
                        duration: 200,
                        children: "Contacto"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.AnimatePresence, {
                children: isTabletOrMobile && hamburgerState && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.div, {
                    className: "text-white-100 flex items-center flex-col text-xl space-y-4 mt-6",
                    layout: true,
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            onClick: ()=>setHamburgerState(false),
                            href: "#work",
                            children: "Proyectos"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            onClick: ()=>setHamburgerState(false),
                            href: "#tools",
                            children: "Herramientas"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            onClick: ()=>setHamburgerState(false),
                            href: "#contact",
                            children: "Contacto"
                        })
                    ]
                }, `${hamburgerState}`)
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Nav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4666:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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


/***/ })

};
;