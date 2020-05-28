module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ProductList.js":
/*!***********************************!*\
  !*** ./components/ProductList.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "graphql-tag");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "@apollo/react-hooks");
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





const GET_PRODUCTS_BY_ID = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default.a`
    query getProducts($ids:[ID!]!){
    nodes(ids: $ids){
      ... on Product{
        title
        handle
        id
        images(first:1){
          edges{
            node{
              originalSrc
              altText
            }
          }
        }
        variants(first:1){
          edges{
            node{
              price
              id
            }
          }
        }
      }
    }
  }
`;

const ProductList = () => {
  const {
    loading,
    err,
    data
  } = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["useQuery"])(GET_PRODUCTS_BY_ID, {
    variables: {
      ids: store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids')
    }
  });
  if (loading) return __jsx("div", null, "Loading...");
  if (err) return __jsx("div", null, err.message);
  return __jsx("div", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Card"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["ResourceList"], {
    showHeader: true,
    resourceName: {
      singular: "Product",
      plural: "Products"
    },
    items: data.nodes,
    renderItem: item => {
      const media = __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Thumbnail"], {
        source: item.images.edges[0] ? item.images.edges[0].node.originalSrc : '',
        alt: item.images.edges[0] ? item.images.edges[0].altText : ''
      });

      const price = item.variants.edges[0].node.price;
      return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["ResourceList"].Item, {
        id: item.id,
        media: media,
        accessibilityLabel: `View Details for ${item.title}`
      }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"], null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"].Item, {
        fill: true
      }, __jsx("h3", null, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["TextStyle"], {
        variation: "strong"
      }, item.title))), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_2__["Stack"].Item, {
        fill: true
      }, __jsx("p", null, "$", price))));
    }
  }), data.nodes.map(product => __jsx("div", {
    key: product.id
  }, product.title))));
};

/* harmony default export */ __webpack_exports__["default"] = (ProductList);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! store-js */ "store-js");
/* harmony import */ var store_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(store_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_ProductList__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ProductList */ "./components/ProductList.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Index = () => {
  const {
    0: modal,
    1: setModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    open: false
  });
  const emptyState = !store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids');

  const handleSelection = resources => {
    const idsFromResources = resources.selection.map(product => product.id);
    setModal({
      open: false
    });
    store_js__WEBPACK_IMPORTED_MODULE_3___default.a.set('ids', idsFromResources);
    console.log("product ids are " + store_js__WEBPACK_IMPORTED_MODULE_3___default.a.get('ids'));
    const selectedProducts = resources.selection;
    deleteApiData();
    console.log(selectedProducts);
    selectedProducts.map(product => makeApiCall(product));
  };

  function deleteApiData() {
    const url = '/api/products';
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.delete(url);
  }

  async function makeApiCall(products) {
    const url = '/api/products';
    axios__WEBPACK_IMPORTED_MODULE_5___default.a.post(url, products).then(res => console.log(res)).catch(err => console.log(err));
  }

  return __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Page"], null, __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["TitleBar"], {
    primaryAction: {
      content: "Select New Products",
      onAction: () => setModal({
        open: true
      })
    }
  }), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_2__["ResourcePicker"], {
    resourceType: "Product",
    showVariants: false,
    open: modal.open,
    onCancel: () => setModal({
      open: false
    }),
    onSelection: resources => handleSelection(resources)
  }), __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["Layout"], null, emptyState ? __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_1__["EmptyState"], {
    heading: "Manage your inventory transfers",
    action: {
      content: 'Add transfer',
      onAction: () => setModal({
        open: true
      })
    },
    secondaryAction: {
      content: 'Learn more',
      url: 'https://help.shopify.com'
    },
    image: "https://cdn.shopify.com/s/files/1/0757/9955/files/empty-state.svg"
  }, __jsx("p", null, "Track and receive your incoming inventory from suppliers.")) : __jsx(_components_ProductList__WEBPACK_IMPORTED_MODULE_4__["default"], null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andrewperez/Documents/projects/shopify/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "@apollo/react-hooks":
/*!**************************************!*\
  !*** external "@apollo/react-hooks" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/react-hooks");

/***/ }),

/***/ "@shopify/app-bridge-react":
/*!********************************************!*\
  !*** external "@shopify/app-bridge-react" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/app-bridge-react");

/***/ }),

/***/ "@shopify/polaris":
/*!***********************************!*\
  !*** external "@shopify/polaris" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@shopify/polaris");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "graphql-tag":
/*!******************************!*\
  !*** external "graphql-tag" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-tag");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "store-js":
/*!***************************!*\
  !*** external "store-js" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("store-js");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdG9yZS1qc1wiIl0sIm5hbWVzIjpbIkdFVF9QUk9EVUNUU19CWV9JRCIsImdxbCIsIlByb2R1Y3RMaXN0IiwibG9hZGluZyIsImVyciIsImRhdGEiLCJ1c2VRdWVyeSIsInZhcmlhYmxlcyIsImlkcyIsInN0b3JlIiwiZ2V0IiwibWVzc2FnZSIsInNpbmd1bGFyIiwicGx1cmFsIiwibm9kZXMiLCJpdGVtIiwibWVkaWEiLCJpbWFnZXMiLCJlZGdlcyIsIm5vZGUiLCJvcmlnaW5hbFNyYyIsImFsdFRleHQiLCJwcmljZSIsInZhcmlhbnRzIiwiaWQiLCJ0aXRsZSIsIm1hcCIsInByb2R1Y3QiLCJJbmRleCIsIm1vZGFsIiwic2V0TW9kYWwiLCJ1c2VTdGF0ZSIsIm9wZW4iLCJlbXB0eVN0YXRlIiwiaGFuZGxlU2VsZWN0aW9uIiwicmVzb3VyY2VzIiwiaWRzRnJvbVJlc291cmNlcyIsInNlbGVjdGlvbiIsInNldCIsImNvbnNvbGUiLCJsb2ciLCJzZWxlY3RlZFByb2R1Y3RzIiwiZGVsZXRlQXBpRGF0YSIsIm1ha2VBcGlDYWxsIiwidXJsIiwiYXhpb3MiLCJkZWxldGUiLCJwcm9kdWN0cyIsInBvc3Qi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RjVCLEtBSFo7QUFRUSxtQkFBZSxFQUFFO0FBQUNvQixhQUFPLEVBQUUsWUFBVjtBQUF3QlIsU0FBRyxFQUFFO0FBQTdCLEtBUnpCO0FBU1EsU0FBSyxFQUFDO0FBVGQsS0FXUSw2RUFYUixDQURlLEdBY0gsTUFBQywrREFBRCxPQWZaLENBZEosQ0FESjtBQWtDSCxDQWpFRDs7QUFtRWVoQixvRUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFQSxnRDs7Ozs7Ozs7Ozs7QUNBQSxzRDs7Ozs7Ozs7Ozs7QUNBQSw2Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSxxQyIsImZpbGUiOiJzdGF0aWMvZGV2ZWxvcG1lbnQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNCk7XG4iLCJpbXBvcnQgZ3FsIGZyb20gJ2dyYXBocWwtdGFnJ1xuaW1wb3J0IHt1c2VRdWVyeX0gZnJvbSAnQGFwb2xsby9yZWFjdC1ob29rcydcbmltcG9ydCB7Q2FyZCwgUmVzb3VyY2VMaXN0LCBTdGFjaywgVGV4dFN0eWxlLCBUaHVtYm5haWx9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbmNvbnN0IEdFVF9QUk9EVUNUU19CWV9JRCA9IGdxbGBcbiAgICBxdWVyeSBnZXRQcm9kdWN0cygkaWRzOltJRCFdISl7XG4gICAgbm9kZXMoaWRzOiAkaWRzKXtcbiAgICAgIC4uLiBvbiBQcm9kdWN0e1xuICAgICAgICB0aXRsZVxuICAgICAgICBoYW5kbGVcbiAgICAgICAgaWRcbiAgICAgICAgaW1hZ2VzKGZpcnN0OjEpe1xuICAgICAgICAgIGVkZ2Vze1xuICAgICAgICAgICAgbm9kZXtcbiAgICAgICAgICAgICAgb3JpZ2luYWxTcmNcbiAgICAgICAgICAgICAgYWx0VGV4dFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXJpYW50cyhmaXJzdDoxKXtcbiAgICAgICAgICBlZGdlc3tcbiAgICAgICAgICAgIG5vZGV7XG4gICAgICAgICAgICAgIHByaWNlXG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5cbmNvbnN0IFByb2R1Y3RMaXN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IHtsb2FkaW5nLCBlcnIsIGRhdGEgfSA9IHVzZVF1ZXJ5KEdFVF9QUk9EVUNUU19CWV9JRCx7dmFyaWFibGVzOntpZHM6c3RvcmUuZ2V0KCdpZHMnKX19KTtcbiAgICBpZihsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XG4gICAgaWYgKGVycikgcmV0dXJuIDxkaXY+e2Vyci5tZXNzYWdlfTwvZGl2PlxuICAgIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgICAgPENhcmQ+XG4gICAgICAgICAgICA8UmVzb3VyY2VMaXN0IFxuICAgICAgICAgICAgICAgIHNob3dIZWFkZXJcbiAgICAgICAgICAgICAgICByZXNvdXJjZU5hbWU9e3tzaW5ndWxhcjpcIlByb2R1Y3RcIixwbHVyYWw6XCJQcm9kdWN0c1wifX1cbiAgICAgICAgICAgICAgICBpdGVtcz17ZGF0YS5ub2Rlc31cbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVkaWEgPSAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGh1bWJuYWlsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uaW1hZ2VzLmVkZ2VzWzBdID8gaXRlbS5pbWFnZXMuZWRnZXNbMF0ubm9kZS5vcmlnaW5hbFNyYyA6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS5pbWFnZXMuZWRnZXNbMF0gPyBpdGVtLmltYWdlcy5lZGdlc1swXS5hbHRUZXh0IDogJyd9XG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByaWNlID0gaXRlbS52YXJpYW50cy5lZGdlc1swXS5ub2RlLnByaWNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4oXG4gICAgICAgICAgICAgICAgICAgICAgICA8UmVzb3VyY2VMaXN0Lkl0ZW0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2l0ZW0uaWR9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVkaWE9e21lZGlhfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD17YFZpZXcgRGV0YWlscyBmb3IgJHtpdGVtLnRpdGxlfWB9XG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8U3RhY2s+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRTdHlsZSB2YXJpYXRpb249J3N0cm9uZyc+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1RleHRTdHlsZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0YWNrLkl0ZW0gZmlsbD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICR7cHJpY2V9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrLkl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1N0YWNrPlxuICAgICAgICAgICAgICAgICAgICA8L1Jlc291cmNlTGlzdC5JdGVtPlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7ZGF0YS5ub2Rlcy5tYXAocHJvZHVjdCA9PihcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17cHJvZHVjdC5pZH0+e3Byb2R1Y3QudGl0bGV9PC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgPC9DYXJkPlxuICAgIDwvZGl2PiAgXG4gICAgKVxuICAgIH1cblxuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0TGlzdFxuIiwiaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtFbXB0eVN0YXRlLCBMYXlvdXQsIFBhZ2V9IGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMnXG5pbXBvcnQge1Jlc291cmNlUGlja2VyLCBUaXRsZUJhciB9IGZyb20gJ0BzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3QnXG5pbXBvcnQgc3RvcmUgZnJvbSAnc3RvcmUtanMnXG5pbXBvcnQgUHJvZHVjdExpc3QgZnJvbSAnLi4vY29tcG9uZW50cy9Qcm9kdWN0TGlzdCdcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcydcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gICAgY29uc3QgW21vZGFsLCBzZXRNb2RhbF0gPSB1c2VTdGF0ZSh7b3BlbjpmYWxzZX0pXG4gICAgY29uc3QgZW1wdHlTdGF0ZSA9ICFzdG9yZS5nZXQoJ2lkcycpO1xuXG4gICAgY29uc3QgaGFuZGxlU2VsZWN0aW9uID0gcmVzb3VyY2VzID0+IHtcbiAgICAgICAgY29uc3QgaWRzRnJvbVJlc291cmNlcyA9IHJlc291cmNlcy5zZWxlY3Rpb24ubWFwKHByb2R1Y3QgPT4gcHJvZHVjdC5pZClcbiAgICAgICAgc2V0TW9kYWwoe29wZW46ZmFsc2V9KVxuICAgICAgICBzdG9yZS5zZXQoJ2lkcycsaWRzRnJvbVJlc291cmNlcylcbiAgICAgICAgY29uc29sZS5sb2coXCJwcm9kdWN0IGlkcyBhcmUgXCIgKyBzdG9yZS5nZXQoJ2lkcycpIClcblxuICAgICAgICBjb25zdCBzZWxlY3RlZFByb2R1Y3RzID0gcmVzb3VyY2VzLnNlbGVjdGlvbjtcblxuICAgICAgICBkZWxldGVBcGlEYXRhKCk7XG5cbiAgICAgICAgY29uc29sZS5sb2coc2VsZWN0ZWRQcm9kdWN0cylcbiAgICAgICAgc2VsZWN0ZWRQcm9kdWN0cy5tYXAocHJvZHVjdCA9PiBtYWtlQXBpQ2FsbChwcm9kdWN0KSlcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVBcGlEYXRhKCl7XG4gICAgICAgIGNvbnN0IHVybCA9ICcvYXBpL3Byb2R1Y3RzJztcblxuICAgICAgICBheGlvcy5kZWxldGUodXJsKTtcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBtYWtlQXBpQ2FsbChwcm9kdWN0cyl7XG4gICAgICAgIGNvbnN0IHVybCA9ICcvYXBpL3Byb2R1Y3RzJztcbiAgICAgICAgYXhpb3MucG9zdCh1cmwscHJvZHVjdHMpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4gY29uc29sZS5sb2cocmVzKSlcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSlcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8UGFnZT5cbiAgICAgICAgICAgIDxUaXRsZUJhciBcbiAgICAgICAgICAgICAgICBwcmltYXJ5QWN0aW9uPXt7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiU2VsZWN0IE5ldyBQcm9kdWN0c1wiLFxuICAgICAgICAgICAgICAgICAgICBvbkFjdGlvbjogKCkgPT4gc2V0TW9kYWwoe29wZW46dHJ1ZX0pXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8UmVzb3VyY2VQaWNrZXIgXG4gICAgICAgICAgICAgICAgcmVzb3VyY2VUeXBlPVwiUHJvZHVjdFwiXG4gICAgICAgICAgICAgICAgc2hvd1ZhcmlhbnRzPXtmYWxzZX1cbiAgICAgICAgICAgICAgICBvcGVuPXttb2RhbC5vcGVufVxuICAgICAgICAgICAgICAgIG9uQ2FuY2VsPXsoKT0+IHNldE1vZGFsKHtvcGVuOmZhbHNlfSl9XG4gICAgICAgICAgICAgICAgb25TZWxlY3Rpb249eyhyZXNvdXJjZXMpID0+IGhhbmRsZVNlbGVjdGlvbihyZXNvdXJjZXMpfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICAgICAge2VtcHR5U3RhdGUgPyAoXG4gICAgICAgICAgICA8RW1wdHlTdGF0ZVxuICAgICAgICAgICAgICAgICAgICBoZWFkaW5nPVwiTWFuYWdlIHlvdXIgaW52ZW50b3J5IHRyYW5zZmVyc1wiXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbj17XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJ0FkZCB0cmFuc2ZlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25BY3Rpb246ICgpID0+IHNldE1vZGFsKHtvcGVuOnRydWV9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2Vjb25kYXJ5QWN0aW9uPXt7Y29udGVudDogJ0xlYXJuIG1vcmUnLCB1cmw6ICdodHRwczovL2hlbHAuc2hvcGlmeS5jb20nfX1cbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U9XCJodHRwczovL2Nkbi5zaG9waWZ5LmNvbS9zL2ZpbGVzLzEvMDc1Ny85OTU1L2ZpbGVzL2VtcHR5LXN0YXRlLnN2Z1wiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHA+VHJhY2sgYW5kIHJlY2VpdmUgeW91ciBpbmNvbWluZyBpbnZlbnRvcnkgZnJvbSBzdXBwbGllcnMuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8L0VtcHR5U3RhdGU+XG4gICAgICAgICAgICAgICAgICAgICkgOiA8UHJvZHVjdExpc3QgLz59XG4gICAgICAgICAgICA8L0xheW91dD5cbiAgICAgICAgPC9QYWdlPlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXgiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL3JlYWN0LWhvb2tzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L2FwcC1icmlkZ2UtcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNob3BpZnkvcG9sYXJpc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXRhZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9yZS1qc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9