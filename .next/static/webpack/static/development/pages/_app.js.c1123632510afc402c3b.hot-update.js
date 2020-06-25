webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./components/Page.js":
/*!****************************!*\
  !*** ./components/Page.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Meta__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Meta */ "./components/Meta.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/Header.js");


var _this = undefined,
    _jsxFileName = "C:\\Users\\ged-it\\rest_countries\\components\\Page.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nhtml {\n    box-sizing: border-box;\n    font-size: 10px;\n  }\n  *, *:before, *:after {\n    box-sizing: inherit;\n  }\n  body {\n    padding: 0;\n    margin: 0;\n    font-size: 1.4rem;\n    line-height: 2;\n    font-family: 'radnika_next';\n  }\n  a {\n    text-decoration: none;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}





var light__theme = {
  bg: "hsl(0, 0%, 98%)",
  //Very Light Gray
  text: "hsl(200, 15%, 8%)",
  //Very Dark Blue
  input: "hsl(0, 0%, 52%)",
  //Dark Gray
  el_bg: "hsl(0, 0%, 100%)",
  //White
  shadow: "hsl(200, 0%, 60%)"
};
var dark__theme = {
  bg: "hsl(207, 26%, 17%)",
  //Very Dark Blue
  el_bg: "hsl(209, 23%, 22%)",
  //Dark Blue
  text: "hsl(0, 0%, 100%)",
  //White
  shadow: "hsl(200, 10%, 10%)"
};
var Inner = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "Page__Inner",
  componentId: "sc-7383ga-0"
})(["min-width:300px;margin:0 auto;padding:2rem;"]);
_c = Inner;
var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"])(_templateObject());
_c2 = GlobalStyle;

var Page = function Page(props) {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("light"),
      theme = _useState[0],
      setTheme = _useState[1];

  var toggleTheme = function toggleTheme() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 5
    }
  }, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_2__["ThemeProvider"], {
    theme: theme === "light" ? light__theme : dark__theme,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }
  }, __jsx(GlobalStyle, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 9
    }
  }), __jsx(_Meta__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }), __jsx(_Header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    toogleTheme: toggleTheme,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), __jsx(Inner, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 9
    }
  }, props.children)));
};

_s(Page, "1NR3O0/bzzhjlLyt740h+JhxH9c=");

_c3 = Page;
/* harmony default export */ __webpack_exports__["default"] = (Page);

var _c, _c2, _c3;

$RefreshReg$(_c, "Inner");
$RefreshReg$(_c2, "GlobalStyle");
$RefreshReg$(_c3, "Page");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL1BhZ2UuanMiXSwibmFtZXMiOlsibGlnaHRfX3RoZW1lIiwiYmciLCJ0ZXh0IiwiaW5wdXQiLCJlbF9iZyIsInNoYWRvdyIsImRhcmtfX3RoZW1lIiwiSW5uZXIiLCJzdHlsZWQiLCJkaXYiLCJHbG9iYWxTdHlsZSIsImNyZWF0ZUdsb2JhbFN0eWxlIiwiUGFnZSIsInByb3BzIiwidXNlU3RhdGUiLCJ0aGVtZSIsInNldFRoZW1lIiwidG9nZ2xlVGhlbWUiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1BLFlBQVksR0FBRztBQUNuQkMsSUFBRSxFQUFFLGlCQURlO0FBQ0k7QUFDdkJDLE1BQUksRUFBRSxtQkFGYTtBQUVRO0FBQzNCQyxPQUFLLEVBQUUsaUJBSFk7QUFHTztBQUMxQkMsT0FBSyxFQUFFLGtCQUpZO0FBSVE7QUFDM0JDLFFBQU0sRUFBRTtBQUxXLENBQXJCO0FBUUEsSUFBTUMsV0FBVyxHQUFHO0FBQ2xCTCxJQUFFLEVBQUUsb0JBRGM7QUFDUTtBQUMxQkcsT0FBSyxFQUFFLG9CQUZXO0FBRVc7QUFDN0JGLE1BQUksRUFBRSxrQkFIWTtBQUdRO0FBQzFCRyxRQUFNLEVBQUU7QUFKVSxDQUFwQjtBQU9BLElBQU1FLEtBQUssR0FBR0MseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxtREFBWDtLQUFNRixLO0FBTU4sSUFBTUcsV0FBVyxHQUFHQywyRUFBSCxtQkFBakI7TUFBTUQsVzs7QUFvQk4sSUFBTUUsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQUEsa0JBQ0lDLHNEQUFRLENBQUMsT0FBRCxDQURaO0FBQUEsTUFDZkMsS0FEZTtBQUFBLE1BQ1JDLFFBRFE7O0FBR3RCLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJGLFNBQUssS0FBSyxPQUFWLEdBQW9CQyxRQUFRLENBQUMsTUFBRCxDQUE1QixHQUF1Q0EsUUFBUSxDQUFDLE9BQUQsQ0FBL0M7QUFDRCxHQUZEOztBQUdBLFNBQ0UsTUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsK0RBQUQ7QUFBZSxTQUFLLEVBQUVELEtBQUssS0FBSyxPQUFWLEdBQW9CZixZQUFwQixHQUFtQ00sV0FBekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRSxNQUFDLDZDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGRixFQUdFLE1BQUMsK0NBQUQ7QUFBUSxlQUFXLEVBQUVXLFdBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIRixFQUlFLE1BQUMsS0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVFKLEtBQUssQ0FBQ0ssUUFBZCxDQUpGLENBREYsQ0FERjtBQVVELENBaEJEOztHQUFNTixJOztNQUFBQSxJO0FBa0JTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xcX2FwcC5qcy5jMTEyMzYzMjUxMGFmYzQwMmMzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBzdHlsZWQsIHsgVGhlbWVQcm92aWRlciwgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IE1ldGEgZnJvbSBcIi4vTWV0YVwiO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCIuL0hlYWRlclwiO1xyXG5jb25zdCBsaWdodF9fdGhlbWUgPSB7XHJcbiAgYmc6IFwiaHNsKDAsIDAlLCA5OCUpXCIsIC8vVmVyeSBMaWdodCBHcmF5XHJcbiAgdGV4dDogXCJoc2woMjAwLCAxNSUsIDglKVwiLCAvL1ZlcnkgRGFyayBCbHVlXHJcbiAgaW5wdXQ6IFwiaHNsKDAsIDAlLCA1MiUpXCIsIC8vRGFyayBHcmF5XHJcbiAgZWxfYmc6IFwiaHNsKDAsIDAlLCAxMDAlKVwiLCAvL1doaXRlXHJcbiAgc2hhZG93OiBcImhzbCgyMDAsIDAlLCA2MCUpXCIsXHJcbn07XHJcblxyXG5jb25zdCBkYXJrX190aGVtZSA9IHtcclxuICBiZzogXCJoc2woMjA3LCAyNiUsIDE3JSlcIiwgLy9WZXJ5IERhcmsgQmx1ZVxyXG4gIGVsX2JnOiBcImhzbCgyMDksIDIzJSwgMjIlKVwiLCAvL0RhcmsgQmx1ZVxyXG4gIHRleHQ6IFwiaHNsKDAsIDAlLCAxMDAlKVwiLCAvL1doaXRlXHJcbiAgc2hhZG93OiBcImhzbCgyMDAsIDEwJSwgMTAlKVwiLFxyXG59O1xyXG5cclxuY29uc3QgSW5uZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMnJlbTtcclxuYDtcclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlID0gY3JlYXRlR2xvYmFsU3R5bGVgXHJcbmh0bWwge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICB9XHJcbiAgKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gICAgYm94LXNpemluZzogaW5oZXJpdDtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgZm9udC1zaXplOiAxLjRyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIGZvbnQtZmFtaWx5OiAncmFkbmlrYV9uZXh0JztcclxuICB9XHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgUGFnZSA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IFt0aGVtZSwgc2V0VGhlbWVdID0gdXNlU3RhdGUoXCJsaWdodFwiKTtcclxuXHJcbiAgY29uc3QgdG9nZ2xlVGhlbWUgPSAoKSA9PiB7XHJcbiAgICB0aGVtZSA9PT0gXCJsaWdodFwiID8gc2V0VGhlbWUoXCJkYXJrXCIpIDogc2V0VGhlbWUoXCJsaWdodFwiKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZSA9PT0gXCJsaWdodFwiID8gbGlnaHRfX3RoZW1lIDogZGFya19fdGhlbWV9PlxyXG4gICAgICAgIDxHbG9iYWxTdHlsZSAvPlxyXG4gICAgICAgIDxNZXRhIC8+XHJcbiAgICAgICAgPEhlYWRlciB0b29nbGVUaGVtZT17dG9nZ2xlVGhlbWV9IC8+XHJcbiAgICAgICAgPElubmVyPntwcm9wcy5jaGlsZHJlbn08L0lubmVyPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9