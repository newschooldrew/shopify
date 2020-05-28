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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@shopify/polaris/locales/en.json":
/*!*******************************************************!*\
  !*** ./node_modules/@shopify/polaris/locales/en.json ***!
  \*******************************************************/
/*! exports provided: Polaris, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Polaris\":{\"Avatar\":{\"label\":\"Avatar\",\"labelWithInitials\":\"Avatar with initials {initials}\"},\"Autocomplete\":{\"spinnerAccessibilityLabel\":\"Loading\"},\"Badge\":{\"PROGRESS_LABELS\":{\"incomplete\":\"Incomplete\",\"partiallyComplete\":\"Partially complete\",\"complete\":\"Complete\"},\"STATUS_LABELS\":{\"info\":\"Info\",\"success\":\"Success\",\"warning\":\"Warning\",\"critical\":\"Critical\",\"attention\":\"Attention\",\"new\":\"New\"}},\"Button\":{\"spinnerAccessibilityLabel\":\"Loading\",\"connectedDisclosureAccessibilityLabel\":\"Related actions\"},\"Common\":{\"checkbox\":\"checkbox\",\"undo\":\"Undo\",\"cancel\":\"Cancel\",\"newWindowAccessibilityHint\":\"(opens a new window)\",\"clear\":\"Clear\",\"close\":\"Close\",\"submit\":\"Submit\",\"more\":\"More\"},\"ContextualSaveBar\":{\"save\":\"Save\",\"discard\":\"Discard\"},\"DataTable\":{\"sortAccessibilityLabel\":\"sort {direction} by\",\"navAccessibilityLabel\":\"Scroll table {direction} one column\",\"totalsRowHeading\":\"Totals\",\"totalRowHeading\":\"Total\"},\"DatePicker\":{\"previousMonth\":\"Show previous month, {previousMonthName} {showPreviousYear}\",\"nextMonth\":\"Show next month, {nextMonth} {nextYear}\",\"today\":\"Today \",\"months\":{\"january\":\"January\",\"february\":\"February\",\"march\":\"March\",\"april\":\"April\",\"may\":\"May\",\"june\":\"June\",\"july\":\"July\",\"august\":\"August\",\"september\":\"September\",\"october\":\"October\",\"november\":\"November\",\"december\":\"December\"},\"daysAbbreviated\":{\"monday\":\"Mo\",\"tuesday\":\"Tu\",\"wednesday\":\"We\",\"thursday\":\"Th\",\"friday\":\"Fr\",\"saturday\":\"Sa\",\"sunday\":\"Su\"}},\"DiscardConfirmationModal\":{\"title\":\"Discard all unsaved changes\",\"message\":\"If you discard changes, you’ll delete any edits you made since you last saved.\",\"primaryAction\":\"Discard changes\",\"secondaryAction\":\"Continue editing\"},\"DropZone\":{\"overlayTextFile\":\"Drop file to upload\",\"overlayTextImage\":\"Drop image to upload\",\"errorOverlayTextFile\":\"File type is not valid\",\"errorOverlayTextImage\":\"Image type is not valid\",\"FileUpload\":{\"actionTitleFile\":\"Add file\",\"actionTitleImage\":\"Add image\",\"actionHintFile\":\"or drop files to upload\",\"actionHintImage\":\"or drop images to upload\",\"label\":\"Upload file\"}},\"EmptySearchResult\":{\"altText\":\"Empty search results\"},\"Frame\":{\"skipToContent\":\"Skip to content\",\"Navigation\":{\"closeMobileNavigationLabel\":\"Close navigation\"}},\"Icon\":{\"backdropWarning\":\"The {color} icon doesn’t accept backdrops. The icon colors that have backdrops are: {colorsWithBackDrops}\"},\"ActionMenu\":{\"RollupActions\":{\"rollupButton\":\"Actions\"}},\"Filters\":{\"moreFilters\":\"More filters\",\"moreFiltersWithCount\":\"More filters ({count})\",\"filter\":\"Filter {resourceName}\",\"noFiltersApplied\":\"No filters applied\",\"cancel\":\"Cancel\",\"done\":\"Done\",\"clearAllFilters\":\"Clear all filters\",\"clear\":\"Clear\",\"clearLabel\":\"Clear {filterName}\"},\"Modal\":{\"iFrameTitle\":\"body markup\",\"modalWarning\":\"These required properties are missing from Modal: {missingProps}\"},\"Pagination\":{\"previous\":\"Previous\",\"next\":\"Next\",\"pagination\":\"Pagination\"},\"ProgressBar\":{\"negativeWarningMessage\":\"Values passed to the progress prop shouldn’t be negative. Resetting {progress} to 0.\",\"exceedWarningMessage\":\"Values passed to the progress prop shouldn’t exceed 100. Setting {progress} to 100.\"},\"ResourceList\":{\"sortingLabel\":\"Sort by\",\"defaultItemSingular\":\"item\",\"defaultItemPlural\":\"items\",\"showing\":\"Showing {itemsCount} {resource}\",\"showingTotalCount\":\"Showing {itemsCount} of {totalItemsCount} {resource}\",\"loading\":\"Loading {resource}\",\"selected\":\"{selectedItemsCount} selected\",\"allItemsSelected\":\"All {itemsLength}+ {resourceNamePlural} in your store are selected.\",\"selectAllItems\":\"Select all {itemsLength}+ {resourceNamePlural} in your store\",\"emptySearchResultTitle\":\"No {resourceNamePlural} found\",\"emptySearchResultDescription\":\"Try changing the filters or search term\",\"selectButtonText\":\"Select\",\"a11yCheckboxDeselectAllSingle\":\"Deselect {resourceNameSingular}\",\"a11yCheckboxSelectAllSingle\":\"Select {resourceNameSingular}\",\"a11yCheckboxDeselectAllMultiple\":\"Deselect all {itemsLength} {resourceNamePlural}\",\"a11yCheckboxSelectAllMultiple\":\"Select all {itemsLength} {resourceNamePlural}\",\"ariaLiveSingular\":\"{itemsLength} item\",\"ariaLivePlural\":\"{itemsLength} items\",\"Item\":{\"actionsDropdownLabel\":\"Actions for {accessibilityLabel}\",\"actionsDropdown\":\"Actions dropdown\",\"viewItem\":\"View details for {itemName}\"},\"BulkActions\":{\"actionsActivatorLabel\":\"Actions\",\"moreActionsActivatorLabel\":\"More actions\",\"warningMessage\":\"To provide a better user experience. There should only be a maximum of {maxPromotedActions} promoted actions.\"},\"FilterCreator\":{\"filterButtonLabel\":\"Filter\",\"selectFilterKeyPlaceholder\":\"Select a filter…\",\"addFilterButtonLabel\":\"Add filter\",\"showAllWhere\":\"Show all {resourceNamePlural} where:\"},\"FilterControl\":{\"textFieldLabel\":\"Search {resourceNamePlural}\"},\"FilterValueSelector\":{\"selectFilterValuePlaceholder\":\"Select a filter…\"},\"DateSelector\":{\"dateFilterLabel\":\"Select a value\",\"dateValueLabel\":\"Date\",\"dateValueError\":\"Match YYYY-MM-DD format\",\"dateValuePlaceholder\":\"YYYY-MM-DD\",\"SelectOptions\":{\"PastWeek\":\"in the last week\",\"PastMonth\":\"in the last month\",\"PastQuarter\":\"in the last 3 months\",\"PastYear\":\"in the last year\",\"ComingWeek\":\"next week\",\"ComingMonth\":\"next month\",\"ComingQuarter\":\"in the next 3 months\",\"ComingYear\":\"in the next year\",\"OnOrBefore\":\"on or before\",\"OnOrAfter\":\"on or after\"},\"FilterLabelForValue\":{\"past_week\":\"in the last week\",\"past_month\":\"in the last month\",\"past_quarter\":\"in the last 3 months\",\"past_year\":\"in the last year\",\"coming_week\":\"next week\",\"coming_month\":\"next month\",\"coming_quarter\":\"in the next 3 months\",\"coming_year\":\"in the next year\",\"on_or_before\":\"before {date}\",\"on_or_after\":\"after {date}\"}}},\"SkeletonPage\":{\"loadingLabel\":\"Page loading\"},\"Spinner\":{\"warningMessage\":\"The color {color} is not meant to be used on {size} spinners. The colors available on large spinners are: {colors}\"},\"Tabs\":{\"toggleTabsLabel\":\"More tabs\"},\"Tag\":{\"ariaLabel\":\"Remove {children}\"},\"TextField\":{\"characterCount\":\"{count} characters\",\"characterCountWithMaxLength\":\"{count} of {limit} characters used\"},\"TopBar\":{\"toggleMenuLabel\":\"Toggle menu\",\"SearchField\":{\"clearButtonLabel\":\"Clear\",\"search\":\"Search\"}},\"MediaCard\":{\"popoverButton\":\"Actions\"},\"VideoThumbnail\":{\"playButtonA11yLabel\":{\"default\":\"Play video\",\"defaultWithDuration\":\"Play video of length {duration}\",\"duration\":{\"hours\":{\"other\":{\"only\":\"{hourCount} hours\",\"andMinutes\":\"{hourCount} hours and {minuteCount} minutes\",\"andMinute\":\"{hourCount} hours and {minuteCount} minute\",\"minutesAndSeconds\":\"{hourCount} hours, {minuteCount} minutes, and {secondCount} seconds\",\"minutesAndSecond\":\"{hourCount} hours, {minuteCount} minutes, and {secondCount} second\",\"minuteAndSeconds\":\"{hourCount} hours, {minuteCount} minute, and {secondCount} seconds\",\"minuteAndSecond\":\"{hourCount} hours, {minuteCount} minute, and {secondCount} second\",\"andSeconds\":\"{hourCount} hours and {secondCount} seconds\",\"andSecond\":\"{hourCount} hours and {secondCount} second\"},\"one\":{\"only\":\"{hourCount} hour\",\"andMinutes\":\"{hourCount} hour and {minuteCount} minutes\",\"andMinute\":\"{hourCount} hour and {minuteCount} minute\",\"minutesAndSeconds\":\"{hourCount} hour, {minuteCount} minutes, and {secondCount} seconds\",\"minutesAndSecond\":\"{hourCount} hour, {minuteCount} minutes, and {secondCount} second\",\"minuteAndSeconds\":\"{hourCount} hour, {minuteCount} minute, and {secondCount} seconds\",\"minuteAndSecond\":\"{hourCount} hour, {minuteCount} minute, and {secondCount} second\",\"andSeconds\":\"{hourCount} hour and {secondCount} seconds\",\"andSecond\":\"{hourCount} hour and {secondCount} second\"}},\"minutes\":{\"other\":{\"only\":\"{minuteCount} minutes\",\"andSeconds\":\"{minuteCount} minutes and {secondCount} seconds\",\"andSecond\":\"{minuteCount} minutes and {secondCount} second\"},\"one\":{\"only\":\"{minuteCount} minute\",\"andSeconds\":\"{minuteCount} minute and {secondCount} seconds\",\"andSecond\":\"{minuteCount} minute and {secondCount} second\"}},\"seconds\":{\"other\":\"{secondCount} seconds\",\"one\":\"{secondCount} second\"}}}}}}");

/***/ }),

/***/ "./node_modules/@shopify/polaris/styles.css":
/*!**************************************************!*\
  !*** ./node_modules/@shopify/polaris/styles.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps,
      __N_SSG,
      __N_SSP
    } = this.props;
    return /*#__PURE__*/_react.default.createElement(Component, Object.assign({}, pageProps, // we don't add the legacy URL prop if it's using non-legacy
    // methods like getStaticProps and getServerSideProps
    !(__N_SSG || __N_SSP) ? {
      url: createUrl(router)
    } : {}));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shopify/polaris */ "@shopify/polaris");
/* harmony import */ var _shopify_polaris__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shopify/app-bridge-react */ "@shopify/app-bridge-react");
/* harmony import */ var _shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shopify/polaris/styles.css */ "./node_modules/@shopify/polaris/styles.css");
/* harmony import */ var _shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_shopify_polaris_styles_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json");
var _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! @shopify/polaris/locales/en.json */ "./node_modules/@shopify/polaris/locales/en.json", 1);
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! apollo-boost */ "apollo-boost");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(apollo_boost__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-apollo */ "react-apollo");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_9__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;










const client = new apollo_boost__WEBPACK_IMPORTED_MODULE_8___default.a({
  fetchOptions: {
    credentials: 'include'
  }
});

class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  constructor() {
    super();
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    const config = {
      apiKey: "c89b8fb1655291258b6d10fe55fc5a22",
      shopOrigin: js_cookie__WEBPACK_IMPORTED_MODULE_5___default.a.get('shopOrigin'),
      forceRedirect: true
    };
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, __jsx("title", null, "Drew's App")), __jsx(_shopify_app_bridge_react__WEBPACK_IMPORTED_MODULE_4__["Provider"], {
      config: config
    }, __jsx(_shopify_polaris__WEBPACK_IMPORTED_MODULE_3__["AppProvider"], {
      i18n: _shopify_polaris_locales_en_json__WEBPACK_IMPORTED_MODULE_7__
    }, __jsx(react_apollo__WEBPACK_IMPORTED_MODULE_9__["ApolloProvider"], {
      client: client
    }, __jsx(Component, pageProps)))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


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

/***/ "apollo-boost":
/*!*******************************!*\
  !*** external "apollo-boost" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-boost");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-apollo":
/*!*******************************!*\
  !*** external "react-apollo" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-apollo");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlRGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHNob3BpZnkvYXBwLWJyaWRnZS1yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBzaG9waWZ5L3BvbGFyaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tYm9vc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJqcy1jb29raWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFwb2xsb1wiIl0sIm5hbWVzIjpbIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZXhwb3J0cyIsIl9fZXNNb2R1bGUiLCJDb250YWluZXIiLCJjcmVhdGVVcmwiLCJkZWZhdWx0IiwiX3JlYWN0IiwiX3V0aWxzIiwiQXBwSW5pdGlhbFByb3BzIiwiYXBwR2V0SW5pdGlhbFByb3BzIiwiX3JlZiIsIkNvbXBvbmVudCIsImN0eCIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJBcHAiLCJjb21wb25lbnREaWRDYXRjaCIsImVycm9yIiwiX2Vycm9ySW5mbyIsInJlbmRlciIsInJvdXRlciIsIl9fTl9TU0ciLCJfX05fU1NQIiwicHJvcHMiLCJjcmVhdGVFbGVtZW50IiwiT2JqZWN0IiwiYXNzaWduIiwidXJsIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImdldEluaXRpYWxQcm9wcyIsIndhcm5Db250YWluZXIiLCJ3YXJuVXJsIiwiZXhlY09uY2UiLCJjb25zb2xlIiwid2FybiIsInAiLCJjaGlsZHJlbiIsInBhdGhuYW1lIiwiYXNQYXRoIiwicXVlcnkiLCJiYWNrIiwicHVzaCIsImFzIiwicHVzaFRvIiwiaHJlZiIsInB1c2hSb3V0ZSIsInB1c2hVcmwiLCJyZXBsYWNlIiwicmVwbGFjZVRvIiwicmVwbGFjZVJvdXRlIiwicmVwbGFjZVVybCIsImNsaWVudCIsIkFwb2xsb0NsaWVudCIsImZldGNoT3B0aW9ucyIsImNyZWRlbnRpYWxzIiwiTXlBcHAiLCJjb25zdHJ1Y3RvciIsImNvbmZpZyIsImFwaUtleSIsIkFQSV9LRVkiLCJzaG9wT3JpZ2luIiwiQ29va2llcyIsImdldCIsImZvcmNlUmVkaXJlY3QiLCJ0cmFuc2xhdGlvbnMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlD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Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEseUMiLCJmaWxlIjoic3RhdGljL2RldmVsb3BtZW50L3BhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvcGFnZXMvX2FwcCcpXG4iLCJcInVzZSBzdHJpY3RcIjt2YXIgX2ludGVyb3BSZXF1aXJlRGVmYXVsdD1yZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHRcIik7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5Db250YWluZXI9Q29udGFpbmVyO2V4cG9ydHMuY3JlYXRlVXJsPWNyZWF0ZVVybDtleHBvcnRzLmRlZmF1bHQ9dm9pZCAwO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfdXRpbHM9cmVxdWlyZShcIi4uL25leHQtc2VydmVyL2xpYi91dGlsc1wiKTtleHBvcnRzLkFwcEluaXRpYWxQcm9wcz1fdXRpbHMuQXBwSW5pdGlhbFByb3BzOy8qKlxuICogYEFwcGAgY29tcG9uZW50IGlzIHVzZWQgZm9yIGluaXRpYWxpemUgb2YgcGFnZXMuIEl0IGFsbG93cyBmb3Igb3ZlcndyaXRpbmcgYW5kIGZ1bGwgY29udHJvbCBvZiB0aGUgYHBhZ2VgIGluaXRpYWxpemF0aW9uLlxuICogVGhpcyBhbGxvd3MgZm9yIGtlZXBpbmcgc3RhdGUgYmV0d2VlbiBuYXZpZ2F0aW9uLCBjdXN0b20gZXJyb3IgaGFuZGxpbmcsIGluamVjdGluZyBhZGRpdGlvbmFsIGRhdGEuXG4gKi9hc3luYyBmdW5jdGlvbiBhcHBHZXRJbml0aWFsUHJvcHMoX3JlZil7dmFye0NvbXBvbmVudCxjdHh9PV9yZWY7dmFyIHBhZ2VQcm9wcz1hd2FpdCgwLF91dGlscy5sb2FkR2V0SW5pdGlhbFByb3BzKShDb21wb25lbnQsY3R4KTtyZXR1cm57cGFnZVByb3BzfTt9Y2xhc3MgQXBwIGV4dGVuZHMgX3JlYWN0LmRlZmF1bHQuQ29tcG9uZW50ey8vIEtlcHQgaGVyZSBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkuXG4vLyBXaGVuIHNvbWVvbmUgZW5kZWQgQXBwIHRoZXkgY291bGQgY2FsbCBgc3VwZXIuY29tcG9uZW50RGlkQ2F0Y2hgLlxuLy8gQGRlcHJlY2F0ZWQgVGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gRXJyb3JzIGFyZSBjYXVnaHQgYXQgdGhlIHRvcCBsZXZlbFxuY29tcG9uZW50RGlkQ2F0Y2goZXJyb3IsX2Vycm9ySW5mbyl7dGhyb3cgZXJyb3I7fXJlbmRlcigpe3Zhcntyb3V0ZXIsQ29tcG9uZW50LHBhZ2VQcm9wcyxfX05fU1NHLF9fTl9TU1B9PXRoaXMucHJvcHM7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LE9iamVjdC5hc3NpZ24oe30scGFnZVByb3BzLC8vIHdlIGRvbid0IGFkZCB0aGUgbGVnYWN5IFVSTCBwcm9wIGlmIGl0J3MgdXNpbmcgbm9uLWxlZ2FjeVxuLy8gbWV0aG9kcyBsaWtlIGdldFN0YXRpY1Byb3BzIGFuZCBnZXRTZXJ2ZXJTaWRlUHJvcHNcbiEoX19OX1NTR3x8X19OX1NTUCk/e3VybDpjcmVhdGVVcmwocm91dGVyKX06e30pKTt9fWV4cG9ydHMuZGVmYXVsdD1BcHA7QXBwLm9yaWdHZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO0FwcC5nZXRJbml0aWFsUHJvcHM9YXBwR2V0SW5pdGlhbFByb3BzO3ZhciB3YXJuQ29udGFpbmVyO3ZhciB3YXJuVXJsO2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXt3YXJuQ29udGFpbmVyPSgwLF91dGlscy5leGVjT25jZSkoKCk9Pntjb25zb2xlLndhcm4oXCJXYXJuaW5nOiB0aGUgYENvbnRhaW5lcmAgaW4gYF9hcHBgIGhhcyBiZWVuIGRlcHJlY2F0ZWQgYW5kIHNob3VsZCBiZSByZW1vdmVkLiBodHRwczovL2Vyci5zaC96ZWl0L25leHQuanMvYXBwLWNvbnRhaW5lci1kZXByZWNhdGVkXCIpO30pO3dhcm5Vcmw9KDAsX3V0aWxzLmV4ZWNPbmNlKSgoKT0+e2NvbnNvbGUuZXJyb3IoXCJXYXJuaW5nOiB0aGUgJ3VybCcgcHJvcGVydHkgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvemVpdC9uZXh0LmpzL3VybC1kZXByZWNhdGVkXCIpO30pO30vLyBAZGVwcmVjYXRlZCBub29wIGZvciBub3cgdW50aWwgcmVtb3ZhbFxuZnVuY3Rpb24gQ29udGFpbmVyKHApe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5Db250YWluZXIoKTtyZXR1cm4gcC5jaGlsZHJlbjt9ZnVuY3Rpb24gY3JlYXRlVXJsKHJvdXRlcil7Ly8gVGhpcyBpcyB0byBtYWtlIHN1cmUgd2UgZG9uJ3QgcmVmZXJlbmNlcyB0aGUgcm91dGVyIG9iamVjdCBhdCBjYWxsIHRpbWVcbnZhcntwYXRobmFtZSxhc1BhdGgscXVlcnl9PXJvdXRlcjtyZXR1cm57Z2V0IHF1ZXJ5KCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBxdWVyeTt9LGdldCBwYXRobmFtZSgpe2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTtyZXR1cm4gcGF0aG5hbWU7fSxnZXQgYXNQYXRoKCl7aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiBhc1BhdGg7fSxiYWNrOigpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JvdXRlci5iYWNrKCk7fSxwdXNoOih1cmwsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3JldHVybiByb3V0ZXIucHVzaCh1cmwsYXMpO30scHVzaFRvOihocmVmLGFzKT0+e2lmKHByb2Nlc3MuZW52Lk5PREVfRU5WIT09J3Byb2R1Y3Rpb24nKXdhcm5VcmwoKTt2YXIgcHVzaFJvdXRlPWFzP2hyZWY6Jyc7dmFyIHB1c2hVcmw9YXN8fGhyZWY7cmV0dXJuIHJvdXRlci5wdXNoKHB1c2hSb3V0ZSxwdXNoVXJsKTt9LHJlcGxhY2U6KHVybCxhcyk9PntpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl3YXJuVXJsKCk7cmV0dXJuIHJvdXRlci5yZXBsYWNlKHVybCxhcyk7fSxyZXBsYWNlVG86KGhyZWYsYXMpPT57aWYocHJvY2Vzcy5lbnYuTk9ERV9FTlYhPT0ncHJvZHVjdGlvbicpd2FyblVybCgpO3ZhciByZXBsYWNlUm91dGU9YXM/aHJlZjonJzt2YXIgcmVwbGFjZVVybD1hc3x8aHJlZjtyZXR1cm4gcm91dGVyLnJlcGxhY2UocmVwbGFjZVJvdXRlLHJlcGxhY2VVcmwpO319O30iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQXBwIGZyb20gJ25leHQvYXBwJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHtBcHBQcm92aWRlcn0gZnJvbSAnQHNob3BpZnkvcG9sYXJpcyc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICdAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0J1xuaW1wb3J0IENvb2tpZXMgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0ICdAc2hvcGlmeS9wb2xhcmlzL3N0eWxlcy5jc3MnXG5pbXBvcnQgdHJhbnNsYXRpb25zIGZyb20gJ0BzaG9waWZ5L3BvbGFyaXMvbG9jYWxlcy9lbi5qc29uJ1xuaW1wb3J0IEFwb2xsb0NsaWVudCBmcm9tICdhcG9sbG8tYm9vc3QnXG5pbXBvcnQge0Fwb2xsb1Byb3ZpZGVyfSBmcm9tICdyZWFjdC1hcG9sbG8nXG5cbmNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xuICAgIGZldGNoT3B0aW9uczoge1xuICAgICAgICBjcmVkZW50aWFsczonaW5jbHVkZSdcbiAgICB9XG59KVxuXG5jbGFzcyBNeUFwcCBleHRlbmRzIEFwcCB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgc3VwZXIoKVxuICAgIH1cbiAgICBcbiAgICByZW5kZXIoKXtcbiAgICAgICAgY29uc3Qge0NvbXBvbmVudCwgcGFnZVByb3BzfSA9IHRoaXMucHJvcHNcbiAgICAgICAgY29uc3QgY29uZmlnID0ge2FwaUtleTogQVBJX0tFWSwgc2hvcE9yaWdpbjogQ29va2llcy5nZXQoJ3Nob3BPcmlnaW4nKSwgZm9yY2VSZWRpcmVjdDp0cnVlfVxuICAgIHJldHVybiAoXG4gICAgPD5cbiAgICAgICAgPEhlYWQ+XG4gICAgICAgICAgICA8dGl0bGU+RHJldydzIEFwcDwvdGl0bGU+XG4gICAgICAgIDwvSGVhZD5cbiAgICAgICAgPFByb3ZpZGVyIGNvbmZpZz17Y29uZmlnfT5cbiAgICAgICAgICAgIDxBcHBQcm92aWRlciBpMThuPXt0cmFuc2xhdGlvbnN9PlxuICAgICAgICAgICAgICAgIDxBcG9sbG9Qcm92aWRlciBjbGllbnQ9e2NsaWVudH0+XG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgICAgICAgICAgICA8L0Fwb2xsb1Byb3ZpZGVyPlxuICAgICAgICAgICAgPC9BcHBQcm92aWRlcj5cbiAgICAgICAgPC9Qcm92aWRlcj5cbiAgICA8Lz5cbiAgICAgICAgKVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAc2hvcGlmeS9hcHAtYnJpZGdlLXJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBzaG9waWZ5L3BvbGFyaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLWJvb3N0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYXBvbGxvXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=