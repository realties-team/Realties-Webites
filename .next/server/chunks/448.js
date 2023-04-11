"use strict";
exports.id = 448;
exports.ids = [448];
exports.modules = {

/***/ 7937:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hook_form__WEBPACK_IMPORTED_MODULE_4__]);
react_hook_form__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const EarlyAccessForm = (props)=>{
    const { register , trigger , formState: { errors  }  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_4__.useForm)();
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const [phoneNumber, setPhoneNumber] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)("");
    const nameHandler = (e)=>{
        setName(e.target.value);
    };
    const emailHandler = (e)=>{
        setEmail(e.target.value);
    };
    const addressHandler = (e)=>{
        setAddress(e.target.value);
    };
    const phoneNumberHandler = (e)=>{
        setPhoneNumber(e.target.value);
    };
    const onSubmitHandler = async (e)=>{
        e.preventDefault();
        // trigger() comes from useForm
        const isValid = await trigger();
        if (!isValid) {
            return;
        }
        try {
            const response = await fetch("https://realties.cyclic.app/api/coming-soon", {
                method: "POST",
                body: JSON.stringify({
                    name,
                    email,
                    address,
                    phoneNumber
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await response.json();
            console.log(data);
            setName("");
            setEmail("");
            setAddress("");
            setPhoneNumber("");
        } catch (error) {
            console.log(error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "px-10",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex flex-col items-center justify-center mt-10 mb-20 px-8 ",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "font-urbanist font-bold text-2xl",
                        children: "Be the first to know when"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        className: "font-urbanist font-bold text-2xl",
                        children: "we launch..."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: _assets__WEBPACK_IMPORTED_MODULE_1__/* .rocket */ .fm,
                        alt: "rocket-image",
                        width: 100,
                        className: "mt-6 "
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                        onSubmit: onSubmitHandler,
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex flex-row  gap-8 mt-10 ",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col space-y-1 ",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        htmlFor: "name",
                                                        className: "font-urbanist font-semibold   text-colGray05 ",
                                                        children: "Name"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        value: name,
                                                        className: "border-colGray04 border rounded outline-none py-1 px-2",
                                                        type: "text",
                                                        ...register("name", {
                                                            required: true,
                                                            maxLength: 100
                                                        }),
                                                        onChange: nameHandler
                                                    }),
                                                    errors.name && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "mt-1 text-red-600",
                                                        children: [
                                                            errors.name.type === "required" && "This field is required.",
                                                            errors.name.type === "maxLength" && "Max length is 100 char."
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col space-y-1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        htmlFor: "email",
                                                        className: "font-urbanist font-semibold   text-colGray05 ",
                                                        children: "Email address"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        value: email,
                                                        className: "border-colGray04 border rounded outline-none py-1 px-2",
                                                        type: "email",
                                                        ...register("email", {
                                                            required: true,
                                                            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
                                                        }),
                                                        onChange: emailHandler
                                                    }),
                                                    errors.email && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "mt-1 text-red-600",
                                                        children: [
                                                            errors.email.type === "required" && "This field is required.",
                                                            errors.email.type === "pattern" && "Invalid email address."
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex flex-col space-y-4",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col space-y-1",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        htmlFor: "address",
                                                        className: "font-urbanist font-semibold   text-colGray05 ",
                                                        children: "Address"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        value: address,
                                                        className: "border-colGray04 border rounded outline-none py-1 px-2",
                                                        type: "text",
                                                        ...register("address", {
                                                            required: true,
                                                            maxLength: 100
                                                        }),
                                                        onChange: addressHandler
                                                    }),
                                                    errors.name && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "mt-1 text-red-600",
                                                        children: [
                                                            errors.name.type === "required" && "This field is required.",
                                                            errors.name.type === "maxLength" && "Max length is 100 char."
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "flex flex-col space-y-1 ",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        htmlFor: "phoneNumber",
                                                        className: "font-urbanist font-semibold   text-colGray05 ",
                                                        children: "Phone Number"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        value: phoneNumber,
                                                        className: "border-colGray04 border rounded outline-none py-1 px-2",
                                                        type: "number",
                                                        ...register("phoneNumber", {
                                                            required: true,
                                                            maxLength: 100
                                                        }),
                                                        onChange: phoneNumberHandler
                                                    }),
                                                    errors.name && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                                        className: "mt-1 text-red-600",
                                                        children: [
                                                            errors.name.type === "required" && "This field is required.",
                                                            errors.name.type === "maxLength" && "Max length is 100 char."
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
                                type: "submit",
                                className: "bg-colBlue04 rounded-lg text-white px-8 py-3 gap-2 mt-14 flex flex-row font-urbanist font-bold text-lg  justify-center items-center mx-auto ",
                                children: [
                                    "Get early access",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                        src: _assets__WEBPACK_IMPORTED_MODULE_1__/* .rocket */ .fm,
                                        alt: "rocketLaunchIcon",
                                        width: 20,
                                        className: "mt-1"
                                    }),
                                    " "
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EarlyAccessForm);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const RegistrationModal = ({ isVisible , onClose , children  })=>{
    if (!isVisible) return null;
    const handleClose = (e)=>{
        if (e.target.id === "wrapper") onClose();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "fixed inset-0 bg-black bg-opacity-25 backdrop-blur-none flex justify-center items-center",
        id: "wrapper",
        onClick: handleClose,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "w-[700px] flex flex-col relative",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    className: "text-black text-2xl absolute top-6 right-10   ",
                    onClick: ()=>onClose(),
                    children: "X"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "bg-white p-2 rounded-2xl",
                    children: children
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegistrationModal);


/***/ })

};
;