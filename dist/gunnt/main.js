(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _under_construct_under_construct_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./under-construct/under-construct.component */ "./src/app/under-construct/under-construct.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");





var routes = [
    { path: '', redirectTo: 'under-construct', pathMatch: 'full' },
    { path: 'under-construct', component: _under_construct_under_construct_component__WEBPACK_IMPORTED_MODULE_3__["UnderConstructComponent"], pathMatch: 'full' },
    { path: '**', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_4__["PageNotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'gunnt';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _under_construct_under_construct_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./under-construct/under-construct.component */ "./src/app/under-construct/under-construct.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_5__["PageNotFoundComponent"],
                _under_construct_under_construct_component__WEBPACK_IMPORTED_MODULE_6__["UnderConstructComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-not-found\">\n  <div class=\"row\">\n    <h1 class=\"col-12\">\n      Page not found\n    </h1>\n    <p class=\"col-12\">redirect to the home page in: {{subscribeTimer}}</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-not-found h1, .page-not-found p {\n  color: white;\n  text-align: center;\n  position: relative; }\n\n.page-not-found h1 {\n  font-size: 10em;\n  line-height: 1em;\n  top: 0.1em; }\n\n@media only screen and (max-width: 426px) {\n    .page-not-found h1 {\n      font-size: 8em; } }\n\n.page-not-found p {\n  font-size: 1.5em; }\n\n@media only screen and (max-width: 426px) {\n    .page-not-found p {\n      font-size: 1em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS1ub3QtZm91bmQvRDpcXENTXFxndW5udC5tZS9zcmNcXGFwcFxccGFnZS1ub3QtZm91bmRcXHBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9EOlxcQ1NcXGd1bm50Lm1lL3NyY1xcYXNzZXRzXFxfdGhlbWUuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUdJLFlDTFE7RURPUixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBTnRCO0VBVUksZUFBZTtFQUNmLGdCQUFnQjtFQUVoQixVQUFVLEVBQUE7O0FBRVY7SUFmSjtNQWdCTSxjQUFjLEVBQUEsRUFFakI7O0FBbEJIO0VBcUJJLGdCQUFnQixFQUFBOztBQUVoQjtJQXZCSjtNQXdCTSxjQUFjLEVBQUEsRUFFakIiLCJmaWxlIjoic3JjL2FwcC9wYWdlLW5vdC1mb3VuZC9wYWdlLW5vdC1mb3VuZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9hc3NldHMvdGhlbWUuc2Nzc1wiO1xyXG5cclxuLnBhZ2Utbm90LWZvdW5kIHtcclxuXHJcbiAgaDEsIHAge1xyXG4gICAgY29sb3I6ICRmb250O1xyXG4gICAgXHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDEwZW07XHJcbiAgICBsaW5lLWhlaWdodDogMWVtO1xyXG5cclxuICAgIHRvcDogMC4xZW07XHJcblxyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MjZweCkge1xyXG4gICAgICBmb250LXNpemU6IDhlbTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG4gIH1cclxufSIsIiRmb250OiB3aGl0ZTtcclxuJGJhY2tncm91bmQ6ICM3ZTBmODU7Il19 */"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent(router) {
        this.router = router;
        this.timeLeft = 4;
        this.subscribeTimer = 5;
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
        this.observableTimer();
    };
    PageNotFoundComponent.prototype.ngOnDestroy = function () {
        this.subscribe.unsubscribe();
    };
    PageNotFoundComponent.prototype.observableTimer = function () {
        var _this = this;
        this.subscribe = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(1000, 1000).subscribe(function (val) {
            _this.subscribeTimer = _this.timeLeft - val;
            if (_this.subscribeTimer === 0) {
                _this.router.navigate(['/']);
            }
        });
    };
    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.scss */ "./src/app/page-not-found/page-not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/under-construct/under-construct.component.html":
/*!****************************************************************!*\
  !*** ./src/app/under-construct/under-construct.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"under-construct\">\n  <div class=\"row\">\n    <h1 class=\"col-12\">\n      Under Construction!\n    </h1>\n    <p class=\"col-12\">\n      the site will be available in next 1,000 years.\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/under-construct/under-construct.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/under-construct/under-construct.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".under-construct h1, .under-construct p {\n  color: white;\n  text-align: center;\n  position: relative; }\n\n.under-construct h1 {\n  font-size: 10em;\n  line-height: 1em;\n  top: 0.1em; }\n\n@media only screen and (max-width: 426px) {\n    .under-construct h1 {\n      font-size: 8em; } }\n\n.under-construct p {\n  font-size: 1.5em; }\n\n@media only screen and (max-width: 426px) {\n    .under-construct p {\n      font-size: 1em; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdW5kZXItY29uc3RydWN0L0Q6XFxDU1xcZ3VubnQubWUvc3JjXFxhcHBcXHVuZGVyLWNvbnN0cnVjdFxcdW5kZXItY29uc3RydWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91bmRlci1jb25zdHJ1Y3QvRDpcXENTXFxndW5udC5tZS9zcmNcXGFzc2V0c1xcX3RoZW1lLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFFSSxZQ0pRO0VETVIsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQUx0QjtFQVNJLGVBQWU7RUFDZixnQkFBZ0I7RUFFaEIsVUFBVSxFQUFBOztBQUVWO0lBZEo7TUFlTSxjQUFjLEVBQUEsRUFFakI7O0FBakJIO0VBb0JJLGdCQUFnQixFQUFBOztBQUVoQjtJQXRCSjtNQXVCTSxjQUFjLEVBQUEsRUFFakIiLCJmaWxlIjoic3JjL2FwcC91bmRlci1jb25zdHJ1Y3QvdW5kZXItY29uc3RydWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2Fzc2V0cy90aGVtZS5zY3NzXCI7XHJcblxyXG4udW5kZXItY29uc3RydWN0IHtcclxuICBoMSwgcCB7XHJcbiAgICBjb2xvcjogJGZvbnQ7XHJcbiAgICBcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMTBlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcblxyXG4gICAgdG9wOiAwLjFlbTtcclxuXHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQyNnB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogOGVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDEuNWVtO1xyXG5cclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDI2cHgpIHtcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICB9XHJcbiAgfVxyXG59IiwiJGZvbnQ6IHdoaXRlO1xyXG4kYmFja2dyb3VuZDogIzdlMGY4NTsiXX0= */"

/***/ }),

/***/ "./src/app/under-construct/under-construct.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/under-construct/under-construct.component.ts ***!
  \**************************************************************/
/*! exports provided: UnderConstructComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnderConstructComponent", function() { return UnderConstructComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var UnderConstructComponent = /** @class */ (function () {
    function UnderConstructComponent() {
    }
    UnderConstructComponent.prototype.ngOnInit = function () {
    };
    UnderConstructComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-under-construct',
            template: __webpack_require__(/*! ./under-construct.component.html */ "./src/app/under-construct/under-construct.component.html"),
            styles: [__webpack_require__(/*! ./under-construct.component.scss */ "./src/app/under-construct/under-construct.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UnderConstructComponent);
    return UnderConstructComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\CS\gunnt.me\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map