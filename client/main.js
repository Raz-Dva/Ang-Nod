(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./async-load/async-load.module": [
		"./src/app/async-load/async-load.module.ts",
		"async-load-async-load-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error('Cannot find module "' + req + '".');
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return __webpack_require__.e(ids[1]).then(function() {
		var module = __webpack_require__(ids[0]);
		return module;
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reactive-form/reactive-form.component */ "./src/app/reactive-form/reactive-form.component.ts");
/* harmony import */ var _table_comands_table_comands_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./table-comands/table-comands.component */ "./src/app/table-comands/table-comands.component.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/colors/colors.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _services_colors_guard_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/colors-guard.service */ "./src/app/services/colors-guard.service.ts");
/* harmony import */ var _services_exit_react_form_guard_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/exit-react-form-guard.service */ "./src/app/services/exit-react-form-guard.service.ts");
/* harmony import */ var _phoneList_phone_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./phoneList/phone-list.component */ "./src/app/phoneList/phone-list.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _input_test_cars_cars_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./input-test/cars/cars.component */ "./src/app/input-test/cars/cars.component.ts");
/* harmony import */ var _test_component_test_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./test-component/test-component */ "./src/app/test-component/test-component.ts");
/* harmony import */ var _cars_pipe_cars_pipe_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./cars-pipe/cars-pipe.component */ "./src/app/cars-pipe/cars-pipe.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var appRoutes = [
    { path: '', component: _table_comands_table_comands_component__WEBPACK_IMPORTED_MODULE_3__["TableComandsComponent"], data: { animation: 'slide1' } },
    { path: 'test', component: _test_component_test_component__WEBPACK_IMPORTED_MODULE_11__["TestComponent"], data: { animation: 'slide2' } },
    { path: 'decorators', component: _input_test_cars_cars_component__WEBPACK_IMPORTED_MODULE_10__["CarsComponent"], data: { animation: 'slide3' } },
    { path: 'services', component: _phoneList_phone_list_component__WEBPACK_IMPORTED_MODULE_8__["PhoneListComponent"], data: { animation: 'slide4' } },
    { path: 'pipe', component: _cars_pipe_cars_pipe_component__WEBPACK_IMPORTED_MODULE_12__["CarsPipeComponent"], data: { animation: 'slide5' } },
    { path: 'colors', component: _colors_colors_component__WEBPACK_IMPORTED_MODULE_4__["ColorsComponent"], data: { animation: 'slide6' },
        canActivate: [_services_colors_guard_service__WEBPACK_IMPORTED_MODULE_6__["ColorsGuardService"]] },
    { path: 'drivenform', component: _form_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"], data: { animation: 'slide7' } },
    { path: 'reactform', component: _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormComponent"], canDeactivate: [_services_exit_react_form_guard_service__WEBPACK_IMPORTED_MODULE_7__["ExitReactFormGuardService"]], data: { animation: 'slide8' } },
    { path: 'lazyRoute', loadChildren: './async-load/async-load.module#AsyncLoadModule', data: { animation: 'slide9' } },
    // canLoad:[] we can add guard  
    { path: 'not-found', component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundComponent"], data: { animation: 'slide10' } },
    { path: '**', redirectTo: 'not-found' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes, {
                    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
                })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"wrap\">\r\n  <main>\r\n    <div class=\"container\">\r\n      <!-- ------------ header --------- -->\r\n      <ul class=\"nav head_nav\">\r\n        <li class=\"nav-item\">\r\n          <a\r\n            class=\"nav-link\"\r\n            [routerLink]=\"''\"\r\n            routerLinkActive=\"active\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n            >npm commands</a\r\n          >\r\n        \r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a\r\n            class=\"nav-link\"\r\n            [routerLink]=\"'/decorators'\"\r\n            routerLinkActive=\"active\"\r\n            >@Input-@Output</a\r\n          >\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/services\" routerLinkActive=\"active\">\r\n            Services</a\r\n          >\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/pipe\" routerLinkActive=\"active\">\r\n            Pipe</a\r\n          >\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/products\">\r\n            Products(Routing)\r\n          </a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/lazyRoute\" routerLinkActive=\"active\"\r\n            >Async load</a\r\n          >\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/drivenform\" routerLinkActive=\"active\"\r\n            >Driven forms</a\r\n          >\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/reactform\" routerLinkActive=\"active\"\r\n            >React Form*</a\r\n          >\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/colors\" routerLinkActive=\"active\"\r\n            >Colors**</a\r\n          >\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" [routerLink]=\"'/test'\" routerLinkActive=\"active\"\r\n            >Unit test</a\r\n          >\r\n        </li>\r\n        <li>\r\n          <button\r\n            type=\"button\"\r\n            class=\"btn vd_bg-red vd_white nav_button\"\r\n            (click)=\"linkFormComponent()\"\r\n          >\r\n            FormComponent\r\n          </button>\r\n        </li>        \r\n      </ul>\r\n      <p>\r\n        <span class=\"help-inline\">* - use Guard canDeactivate</span>\r\n      </p>\r\n      <p>\r\n        <span class=\"help-inline\">** - use Guard CanActivate </span>\r\n      </p>\r\n      <hr />\r\n      <div>\r\n        <div\r\n          [@routeAnimations]=\"prepareRoute(outlet)\"\r\n          id=\"wrap_outlet\"\r\n          style=\"position: relative\"\r\n        >\r\n          <router-outlet #outlet=\"outlet\"></router-outlet>\r\n        </div>\r\n      </div>\r\n      <br/>    \r\n    </div>\r\n  </main>\r\n</div>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(router, route) {
        this.router = router;
        this.route = route;
        this.title = 'App Angular Components';
    }
    ;
    AppComponent.prototype.ngOnInit = function () { };
    AppComponent.prototype.linkFormComponent = function () {
        this.router.navigate(['reactform'], { relativeTo: this.route });
    };
    ;
    AppComponent.prototype.prepareRoute = function (outlet) {
        return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [' ul > li .active{background-color: #C7C7C7; color: #fff; } ul > li{margin-top:5px}'],
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('routeAnimations', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('*=>*', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ position: 'relative' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave .wrap_component, :enter .wrap_component', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%'
                            })
                        ], { optional: true }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["group"])([
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':enter .wrap_component', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ left: '-120%' }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms cubic-bezier(0.470, -0.125, 0.615, 1.120)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                    left: 0
                                }))
                            ], { optional: true }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["query"])(':leave .wrap_component', [
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                    left: 0
                                }),
                                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('700ms cubic-bezier(0.470, -0.125, 0.615, 1.120)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({
                                    left: '120%'
                                }))
                            ], { optional: true })
                        ])
                    ]),
                ])
            ] // end animation
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _dynamic_pipe_dynamic_pipe_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dynamic-pipe/dynamic-pipe.pipe */ "./src/app/dynamic-pipe/dynamic-pipe.pipe.ts");
/* harmony import */ var _cars_pipe_cars_pipe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cars-pipe/cars-pipe.component */ "./src/app/cars-pipe/cars-pipe.component.ts");
/* harmony import */ var _phoneList_phone_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./phoneList/phone-list.component */ "./src/app/phoneList/phone-list.component.ts");
/* harmony import */ var _form_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./form/form.component */ "./src/app/form/form.component.ts");
/* harmony import */ var _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./reactive-form/reactive-form.component */ "./src/app/reactive-form/reactive-form.component.ts");
/* harmony import */ var _colors_colors_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./colors/colors.component */ "./src/app/colors/colors.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _product_product_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./product/product.module */ "./src/app/product/product.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _table_comands_table_comands_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./table-comands/table-comands.component */ "./src/app/table-comands/table-comands.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _services_colors_guard_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/colors-guard.service */ "./src/app/services/colors-guard.service.ts");
/* harmony import */ var _services_exit_react_form_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/exit-react-form-guard.service */ "./src/app/services/exit-react-form-guard.service.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _input_test_cars_cars_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./input-test/cars/cars.component */ "./src/app/input-test/cars/cars.component.ts");
/* harmony import */ var _input_test_car_car_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./input-test/car/car.component */ "./src/app/input-test/car/car.component.ts");
/* harmony import */ var _input_test_form_add_item_form_add_item_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./input-test/form-add-item/form-add-item.component */ "./src/app/input-test/form-add-item/form-add-item.component.ts");
/* harmony import */ var _test_component_test_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./test-component/test-component */ "./src/app/test-component/test-component.ts");
/* harmony import */ var _test_component_test_directive__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./test-component/test.directive */ "./src/app/test-component/test.directive.ts");
/* harmony import */ var _cars_pipe_pow_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./cars-pipe/pow.pipe */ "./src/app/cars-pipe/pow.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// import {LogService} from './services/log-service.service';
// import {DataService} from './services/data-service.service';



// import { ColorsService } from './services/colors.service';
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _dynamic_pipe_dynamic_pipe_pipe__WEBPACK_IMPORTED_MODULE_6__["DynamicPipePipe"],
                _cars_pipe_cars_pipe_component__WEBPACK_IMPORTED_MODULE_7__["CarsPipeComponent"],
                _phoneList_phone_list_component__WEBPACK_IMPORTED_MODULE_8__["PhoneListComponent"],
                _form_form_component__WEBPACK_IMPORTED_MODULE_9__["FormComponent"],
                _reactive_form_reactive_form_component__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormComponent"],
                _colors_colors_component__WEBPACK_IMPORTED_MODULE_11__["ColorsComponent"],
                _table_comands_table_comands_component__WEBPACK_IMPORTED_MODULE_15__["TableComandsComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_16__["NotFoundComponent"],
                _input_test_cars_cars_component__WEBPACK_IMPORTED_MODULE_21__["CarsComponent"],
                _input_test_car_car_component__WEBPACK_IMPORTED_MODULE_22__["CarComponent"],
                _input_test_form_add_item_form_add_item_component__WEBPACK_IMPORTED_MODULE_23__["FormAddItemComponent"],
                _test_component_test_component__WEBPACK_IMPORTED_MODULE_24__["TestComponent"],
                _test_component_test_directive__WEBPACK_IMPORTED_MODULE_25__["TestDirective"],
                _cars_pipe_pow_pipe__WEBPACK_IMPORTED_MODULE_26__["PowPipe"]
            ],
            imports: [
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"],
                _product_product_module__WEBPACK_IMPORTED_MODULE_13__["ProductModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_14__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"]
            ],
            providers: [_services_colors_guard_service__WEBPACK_IMPORTED_MODULE_17__["ColorsGuardService"], _services_exit_react_form_guard_service__WEBPACK_IMPORTED_MODULE_18__["ExitReactFormGuardService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cars-pipe/cars-pipe.component.css":
/*!***************************************************!*\
  !*** ./src/app/cars-pipe/cars-pipe.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bootstrap-switch-criteria {\r\n    width: 88px;\r\n    overflow: hidden;\r\n    margin: 0 15px 10px;\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.bootstrap-switch-criteria .switcher {\r\n    position: relative;\r\n    height: 33px;\r\n}\r\n\r\n.switcher .switch-default {\r\n    position: absolute;\r\n    font-size: 12px;\r\n    color: #fff;\r\n}\r\n\r\n.switcher .switch-on {\r\n    left: 9px;\r\n    top: 5px;\r\n}\r\n\r\n.switcher .switch-off {\r\n    left: auto;\r\n    right: 9px;\r\n    top: 5px;\r\n}\r\n\r\n.switcher .bootstrap-switch-label {\r\n    left: 5px;\r\n    z-index: 1;\r\n    margin-left: 0;\r\n    margin-right: 0;\r\n    cursor: pointer;\r\n    transition: left .6s ease-out;\r\n}\r\n\r\n.switcher .push-left {\r\n    left: 53%;\r\n}\r\n\r\n.bootstrap-switch-criteria.bootstrap-switch-small .bootstrap-switch-label {\r\n    width: 36px;\r\n}"

/***/ }),

/***/ "./src/app/cars-pipe/cars-pipe.component.html":
/*!****************************************************!*\
  !*** ./src/app/cars-pipe/cars-pipe.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap_component\">\r\n    <div class=\"panel widget \">\r\n        <div class=\"panel-heading vd_bg-blue\">\r\n            <h3 class=\"panel-title\"> <span class=\"menu-icon\">\r\n            <fa-icon [icon]=\"faPuzzlePiece\"></fa-icon>\r\n            </span> {{title}}</h3>\r\n        </div>\r\n        <div class=\"panel-body-list pd-15\">\r\n            <div class=\"input-group mgbt-xs-15\">\r\n                <div class=\"panel widget light-widget\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-xl-12\">\r\n                            <h3 style=\"font-weight: 600;\">You can add some item</h3>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <label class=\"control-label\">Name Car</label>\r\n                            <div class=\"controls\">\r\n                                <input type=\"text\" placeholder=\"name of car\" [(ngModel)]=\"itemName\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <label class=\"control-label\">Age Car</label>\r\n                            <div class=\"controls\">\r\n                                <input type=\"number\" placeholder=\"age\" [(ngModel)]=\"itemAge\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-xl-12\">\r\n                            <p class=\"vd_red\">{{errorInput}}</p>\r\n                            <button style=\"margin-top:5px;\" class=\"btn vd_btn vd_bg-green\" (click)=\"addItemCar()\">Add Item Car</button>\r\n                            <hr>\r\n                        </div>\r\n                        <div class=\"col-xl-12\">\r\n                            <strong style=\"margin-right: 10px; vertical-align:super;\" class=\"control-label\">Filter the list</strong>\r\n                            <label style=\"vertical-align:super\" for=\"checkCriteria\">Sorted by</label>\r\n                            <div class=\"bootstrap-switch bootstrap-switch-blue bootstrap-switch-small bootstrap-switch-criteria\">\r\n                                <div class=\"bootstrap-switch-container switcher\">\r\n                                    <span class=\"switch-on switch-default\">name</span>\r\n                                    <label [ngClass]=\"{'push-left':pushing}\" class=\"bootstrap-switch-label switch-default\" for=\"check-name\">&nbsp;</label>\r\n                                    <span class=\"switch-off switch-default\">age</span>\r\n                                    <input id=\"check-name\" class=\"mgr-10\" type=\"checkbox\" data-rel=\"switch\" data-size=\"small\" data-wrapper-class=\"blue\" style=\"display:none\" (change)=\"logCh($event.target.checked)\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"controls col-lg-6\">\r\n                                    <input type=\"text\" placeholder=\"Input name or age of car\" [(ngModel)]=\"findLetter\">\r\n                                    <br>\r\n                                </div>\r\n                            </div>\r\n\r\n                        </div>\r\n                        <div class=\"col-xl-12\">\r\n                            <ul style=\"padding-left: 0;\">\r\n                                <li class=\"mgbt-xs-10\" *ngFor=\"let item of listCar |dynamicPipe:findLetter:searchCriteria; let ind = index \">\r\n                                    <strong>{{ind + 1}}) {{item.name}} ---- {{item.age}}</strong>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- -------------- -->\r\n    <div class=\"panel widget\">\r\n        <div class=\"panel-heading vd_bg-blue\">\r\n          <h3 class=\"panel-title\">\r\n            <span class=\"menu-icon\"> <fa-icon [icon]=\"faBars\"></fa-icon> </span>\r\n            {{ titlePipe }}\r\n          </h3>\r\n        </div>\r\n        <div class=\"panel-body-list pd-15\">\r\n          <div class=\"input-group mgbt-xs-15\">\r\n            <div class=\"panel widget light-widget\">\r\n              <input type=\"text\" [(ngModel)]=\"data\" />\r\n              <strong>number of degree 3 --{{ data | appPow: 3:\",\" }}</strong>\r\n              <br />\r\n              <strong>number of degree 10-- {{ data | appPow: 10:\".\" }}</strong>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n</div>"

/***/ }),

/***/ "./src/app/cars-pipe/cars-pipe.component.ts":
/*!**************************************************!*\
  !*** ./src/app/cars-pipe/cars-pipe.component.ts ***!
  \**************************************************/
/*! exports provided: CarsPipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsPipeComponent", function() { return CarsPipeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


;
var CarsPipeComponent = /** @class */ (function () {
    function CarsPipeComponent() {
        this.faPuzzlePiece = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPuzzlePiece"];
        this.faBars = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faBars"];
        this.title = 'Impure Pipe';
        this.newArr = [];
        this.titlePipe = 'my Pipe';
        this.data = 0;
        this.findLetter = '';
        this.itemName = '';
        this.itemAge = 0;
        this.errorInput = '';
        this.searchCriteria = 'name';
        this.rxObs = '';
        this.pushing = false;
        this.listCar = [
            { name: 'Ford', age: 2011 },
            { name: 'Audi', age: 2011 },
            { name: 'BMW', age: 2002 },
            { name: 'Nisan', age: 1999 },
            { name: 'Mazda', age: 1993 }
        ];
    }
    CarsPipeComponent.prototype.ngOnInit = function () {
    };
    CarsPipeComponent.prototype.addItemCar = function () {
        if (this.itemName === '' || this.itemAge === 0) {
            this.errorInput = 'Incorect name or age of the car';
        }
        else {
            this.listCar.push({ name: this.itemName, age: this.itemAge });
            this.errorInput = '';
        }
    };
    CarsPipeComponent.prototype.logCh = function (event) {
        this.pushing = event;
        this.searchCriteria = event ? 'age' : 'name';
    };
    CarsPipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list-pipe',
            template: __webpack_require__(/*! ./cars-pipe.component.html */ "./src/app/cars-pipe/cars-pipe.component.html"),
            styles: [__webpack_require__(/*! ./cars-pipe.component.css */ "./src/app/cars-pipe/cars-pipe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarsPipeComponent);
    return CarsPipeComponent;
}());



/***/ }),

/***/ "./src/app/cars-pipe/pow.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/cars-pipe/pow.pipe.ts ***!
  \***************************************/
/*! exports provided: PowPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PowPipe", function() { return PowPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PowPipe = /** @class */ (function () {
    function PowPipe() {
    }
    PowPipe.prototype.transform = function (value, powNumber, symb) {
        if (powNumber === void 0) { powNumber = 1; }
        return Math.pow(value, powNumber) + symb;
    };
    PowPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'appPow'
        })
    ], PowPipe);
    return PowPipe;
}());



/***/ }),

/***/ "./src/app/colors/colors.component.html":
/*!**********************************************!*\
  !*** ./src/app/colors/colors.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap_component\">\r\n  <div class=\"panel widget\">\r\n    <div class=\"panel-heading vd_bg-blue\">\r\n      <h3 class=\"panel-title\">\r\n        <span class=\"menu-icon\">\r\n          <fa-icon [icon]=\"faAdjust\"></fa-icon> </span\r\n        >Editable list with colors\r\n      </h3>\r\n    </div>\r\n    <div class=\"panel-body-list pd-15\">\r\n      <div class=\"panel widget light-widget\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h3>Add new color</h3>\r\n          </div>\r\n          <div class=\"col-md-12\">\r\n            <!-- ------ ADD COLOR ------->\r\n            <form #colorForm=\"ngForm\" (ngSubmit)=\"addColor(colorForm)\">\r\n              <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                  <label class=\"control-label\">Color</label>\r\n                  <div class=\"controls\">\r\n                    <input\r\n                      type=\"text\"\r\n                      placeholder=\"White\"\r\n                      name=\"color\"\r\n                      [(ngModel)]=\"formColor.color\"\r\n                      required\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <label class=\"control-label\">rgba(255, 255, 255, 1)</label>\r\n                  <div class=\"controls controls_rgba\" style=\"display: flex\">\r\n                    <input\r\n                      type=\"number\"\r\n                      placeholder=\"255\"\r\n                      name=\"R\"\r\n                      [(ngModel)]=\"formColor.code.red\"\r\n                      #colorR=\"ngModel\"\r\n                      required\r\n                      [class.invalid_val]=\"1000 <= colorR.value\"\r\n                    />\r\n\r\n                    <input\r\n                      type=\"number\"\r\n                      placeholder=\"255\"\r\n                      name=\"G\"\r\n                      [(ngModel)]=\"formColor.code.green\"\r\n                      #colorG=\"ngModel\"\r\n                      required\r\n                      [class.invalid_val]=\"1000 <= colorG.value\"\r\n                    />\r\n\r\n                    <input\r\n                      type=\"number\"\r\n                      placeholder=\"255\"\r\n                      name=\"B\"\r\n                      #colorB=\"ngModel\"\r\n                      [(ngModel)]=\"formColor.code.blue\"\r\n                      required\r\n                      [class.invalid_val]=\"1000 <= colorB.value\"\r\n                    />\r\n\r\n                    <input\r\n                      type=\"number\"\r\n                      placeholder=\"1\"\r\n                      name=\"A\"\r\n                      [(ngModel)]=\"formColor.code.alpha\"\r\n                      required\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                  <label class=\"control-label\">Hex</label>\r\n                  <div class=\"controls\">\r\n                    <input\r\n                      type=\"text\"\r\n                      placeholder=\"#FFF\"\r\n                      name=\"hex\"\r\n                      [(ngModel)]=\"formColor.hex\"\r\n                      required\r\n                    />\r\n                  </div>\r\n                </div>\r\n                <div class=\"col-md-12\">\r\n                  <button\r\n                    style=\"margin-right: 10px\"\r\n                    type=\"submit\"\r\n                    class=\"btn vd_btn vd_bg-green vd_white\"\r\n                    [disabled]=\"colorForm.invalid\"\r\n                  >\r\n                    Submit\r\n                  </button>\r\n                  <button type=\"reset\" class=\"btn vd_btn vd_bg-green vd_white\">\r\n                    Reset\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n            <!-- ------- ADD COLOR end ------ -->\r\n          </div>\r\n        </div>\r\n        <div class=\"help_block_err\">\r\n          <p *ngIf=\"colorForm.invalid && colorForm.touched\" class=\"help-inline\">\r\n            All fields must be filled\r\n          </p>\r\n\r\n          <p\r\n            *ngIf=\"\r\n              1000 <= colorR.value ||\r\n              1000 <= colorG.value ||\r\n              1000 <= colorB.value\r\n            \"\r\n            class=\"help-inline\"\r\n          >\r\n            The number must not exceed 1000\r\n          </p>\r\n        </div>\r\n        <div id=\"color-table\">\r\n          <div\r\n            class=\"change_color_wrap\"\r\n            [style.top]=\"positionTop\"\r\n            *ngIf=\"isVisible\"\r\n          >\r\n            <div>\r\n              <p\r\n                *ngIf=\"changeForm.invalid && changeForm.touched\"\r\n                class=\"help-inline\"\r\n              >\r\n                All fields must be filled\r\n              </p>\r\n              <p\r\n                *ngIf=\"\r\n                  1000 <= changeR.value ||\r\n                  1000 <= changeG.value ||\r\n                  1000 <= changeB.value\r\n                \"\r\n                class=\"help-inline\"\r\n              >\r\n                The number must not exceed 1000\r\n              </p>\r\n            </div>\r\n            <!-- -------------- CHANGE FORM-------------  -->\r\n            <form #changeForm=\"ngForm\" class=\"change_color_form\">\r\n              <input\r\n                type=\"text\"               \r\n                name=\"chColor\"\r\n                [(ngModel)]=\"changeColor.color\"\r\n                placeholder=\"name color\"\r\n                required\r\n              />\r\n              <div class=\"controls controls_rgba\" style=\"display: flex\">\r\n                <input\r\n                  type=\"number\"\r\n                  name=\"chR\"\r\n                  [(ngModel)]=\"changeColor.code.red\"\r\n                  placeholder=\"225\"\r\n                  required\r\n                  #changeR=\"ngModel\"\r\n                  [class.invalid_val]=\"1000 <= changeR.value\"\r\n                />\r\n\r\n                <input\r\n                  type=\"number\"\r\n                  name=\"chG\"\r\n                  [(ngModel)]=\"changeColor.code.green\"\r\n                  placeholder=\"225\"\r\n                  required\r\n                  #changeG=\"ngModel\"\r\n                  [class.invalid_val]=\"1000 <= changeG.value\"\r\n                />\r\n\r\n                <input\r\n                  type=\"number\"\r\n                  name=\"chB\"\r\n                  [(ngModel)]=\"changeColor.code.blue\"\r\n                  placeholder=\"225\"\r\n                  required\r\n                  #changeB=\"ngModel\"\r\n                  [class.invalid_val]=\"1000 <= changeB.value\"\r\n                />\r\n\r\n                <input\r\n                  type=\"number \"\r\n                  name=\"chA \"\r\n                  [(ngModel)]=\"changeColor.code.alpha\"\r\n                  placeholder=\"225 \"\r\n                  required\r\n                />\r\n              </div>\r\n              <input\r\n                type=\"text \"\r\n                style=\"max-width: 150px\"\r\n                name=\"chHex \"\r\n                [(ngModel)]=\"changeColor.hex\"\r\n                placeholder=\"HEX #fff \"\r\n                required\r\n              />\r\n              <div class=\" \">\r\n                <button\r\n                  class=\"btn vd_btn vd_bg-green btn_change_form\"\r\n                  type=\"button\"\r\n                  (click)=\"changeDataColor()\"\r\n                  [disabled]=\"changeForm.invalid\"\r\n                >\r\n                  Change\r\n                </button>\r\n                <a\r\n                  class=\"btn menu-icon vd_bg-grey close_change_form\"\r\n                  (click)=\"isVisible = false\"\r\n                >\r\n                  <i class=\"fa fa-times\"></i>\r\n                </a>\r\n              </div>\r\n            </form>\r\n            <!-- -------- CHANGE FORM  end --------------- -->\r\n          </div>\r\n          <div class=\"background_layer\" *ngIf=\"isVisible\"></div>\r\n          <table class=\"table table-striped table_colors\">\r\n            <thead>\r\n              <tr>\r\n                <th>Color</th>\r\n                <th>RGBA</th>\r\n                <th>HEX</th>\r\n                <th>Action</th>\r\n              </tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr\r\n                class=\"odd gradeX\"\r\n                *ngFor=\"let color of dataColors;\" >\r\n                <td>{{ color.color }}</td>\r\n                <td>{{ color.code.red }}, {{ color.code.green}}, {{ color.code.blue }},\r\n                    {{ color.code.alpha }}</td>\r\n                <td>{{ color.hex }}</td>\r\n                <td class=\"menu-action rounded-btn\">\r\n                  <a\r\n                    class=\"color_wiev menu-icon\"\r\n                    [ngStyle]=\"{ 'background-color': color.hex }\"\r\n                  >\r\n                  </a>\r\n                  <a\r\n                    class=\"btn menu-icon vd_bd-yellow vd_yellow\"\r\n                    (click)=\"openChangeForm(color, $event)\"\r\n                  >\r\n                    <i class=\"fa fa-pencil\"></i>\r\n                  </a>\r\n                  <a\r\n                    class=\"btn menu-icon vd_bd-red vd_red\"\r\n                    (click)=\"removeColor(color._id)\"\r\n                  >\r\n                    <i class=\"fa fa-times\"></i>\r\n                  </a>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <hr />\r\n        <h2>\r\n          You can get some colors here\r\n          <a\r\n            style=\"text-decoration: underline\"\r\n            href=\"https://htmlcolorcodes.com/color-chart/flat-design-color-chart/\"\r\n            >Color list\r\n          </a>\r\n        </h2>\r\n        <span class=\"badge badge-danger badge_error\"> {{ requestError }} </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/colors/colors.component.ts":
/*!********************************************!*\
  !*** ./src/app/colors/colors.component.ts ***!
  \********************************************/
/*! exports provided: ColorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsComponent", function() { return ColorsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/colors.service */ "./src/app/services/colors.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




;
var TemplateObj = /** @class */ (function () {
    function TemplateObj(color, red, green, blue, alpha, hex) {
        color;
        hex;
        this.code = {
            red: red, green: green, blue: blue, alpha: alpha
        };
    }
    ;
    return TemplateObj;
}());
;
var ColorsComponent = /** @class */ (function () {
    function ColorsComponent(colorsServ) {
        this.colorsServ = colorsServ;
        this.faAdjust = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faAdjust"];
        this.isVisible = false;
    }
    ColorsComponent.prototype.ngOnInit = function () {
        this.getColors();
        this.formColor = new TemplateObj('', '', null, null, null, null);
        this.changeColor = new TemplateObj('', '', null, null, null, null);
    };
    ;
    ColorsComponent.prototype.getColors = function () {
        var _this = this;
        this.colorsServ.getItems().subscribe(function (response) {
            _this.dataColors = response;
        }, function (error) {
            _this.requestError = 'ERROR: ' + error.message;
        });
    };
    ;
    ColorsComponent.prototype.addColor = function (form) {
        var _this = this;
        this.colorsServ.addItem(this.formColor).subscribe(function (response) { return _this.dataColors.push(response); });
        form.reset();
        this.getColors();
    };
    ;
    ColorsComponent.prototype.removeColor = function (data) {
        var _this = this;
        this.colorsServ.deleteItem(data).subscribe(function (response) {
            _this.getColors();
            return response;
        });
    };
    ;
    ColorsComponent.prototype.openChangeForm = function (color, ev) {
        this.isVisible = true;
        var obj = ev.target.closest('.gradeX');
        var posX = obj.offsetTop;
        this.positionTop = (posX + obj.offsetHeight) + 'px';
        this.changeColor = JSON.parse(JSON.stringify(color));
        ;
    };
    ;
    ColorsComponent.prototype.changeDataColor = function () {
        var _this = this;
        this.colorsServ.changeItem(this.changeColor).subscribe(function (response) {
            _this.getColors();
            _this.isVisible = false;
            return response;
        });
    };
    ;
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('changeForm'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"])
    ], ColorsComponent.prototype, "changeForm", void 0);
    ColorsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-colors',
            template: __webpack_require__(/*! ./colors.component.html */ "./src/app/colors/colors.component.html")
        }),
        __metadata("design:paramtypes", [_services_colors_service__WEBPACK_IMPORTED_MODULE_1__["ColorsService"]])
    ], ColorsComponent);
    return ColorsComponent;
}());



/***/ }),

/***/ "./src/app/dynamic-pipe/dynamic-pipe.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/dynamic-pipe/dynamic-pipe.pipe.ts ***!
  \***************************************************/
/*! exports provided: DynamicPipePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicPipePipe", function() { return DynamicPipePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DynamicPipePipe = /** @class */ (function () {
    function DynamicPipePipe() {
    }
    DynamicPipePipe.prototype.transform = function (arrCar, letters, name) {
        return arrCar.filter(function (item) { return item[name].toString().toLowerCase().indexOf(letters.toLowerCase()) !== -1; });
    };
    DynamicPipePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'dynamicPipe',
            pure: false
        })
    ], DynamicPipePipe);
    return DynamicPipePipe;
}());



/***/ }),

/***/ "./src/app/form/form.component.html":
/*!******************************************!*\
  !*** ./src/app/form/form.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap_component\">\r\n    <div class=\"panel widget\">\r\n        <div class=\"panel-heading vd_bg-blue\">\r\n            <h3 class=\"panel-title\"> <span class=\"menu-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span> {{title}}</h3>\r\n        </div>\r\n        <div class=\"panel-body-list\">\r\n            <div class=\"form-group col-md\">\r\n                <br>\r\n                <h2 class=\"mgbt-xs-10\">Form Type 1</h2>\r\n                <h4 style=\"text-align: center;\">User Data Json</h4>\r\n                <div style=\"padding: 5px;\">{{user | json}}</div>\r\n            </div>\r\n            <form class=\"form-horizontal\" (ngSubmit)='submitForm(formUser)' #formUser=\"ngForm\">\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-4 control-label\">NAME</label>\r\n                    <div class=\"col-sm-7 controls\">\r\n                        <input [(ngModel)]=\"user.name\" type=\"text\" placeholder=\"name\" name=\"name\" required #userName=\"ngModel\">\r\n                        <span *ngIf=\"userName.invalid && userName.touched\" class=\"help-inline\">Incorect data</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-4 control-label\">PASSWORD</label>\r\n                    <div class=\"col-sm-7 controls\">\r\n                        <input [(ngModel)]=\"user.password\" type=\"password\" placeholder=\"password\" name=\"password\" required #userPass=\"ngModel\">\r\n                        <span *ngIf=\"userPass.invalid && userPass.touched\" class=\"help-inline\">Incorect data</span>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label class=\"col-sm-4 control-label\">Email</label>\r\n                    <div class=\"col-sm-7 controls\">\r\n                        <input [(ngModel)]=\"user.email\" type=\"email\" placeholder=\"email\" name=\"email\" required email #userEmail=\"ngModel\">\r\n                        <span *ngIf=\"userEmail.invalid && userEmail.touched\" class=\"help-inline\">Incorect data</span>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"form-group\" style=\"padding-left: 0\" ngModelGroup=\"formGroup1\">\r\n                    <div class=\"col-sm-7 controls\">\r\n                        <select [(ngModel)]=\"user.choice\" class=\"\" name=\"choice\" required #userSelect=\"ngModel\">\r\n                    <option>Choice 1</option>\r\n                    <option>Choice 2</option>\r\n                    <option>Choice 3</option>\r\n                    <option>Choice 4</option>\r\n                    <option>Choice 5</option>\r\n                </select>\r\n                        <p>Set Choice 5 for select element</p>\r\n                        <button class=\"btn vd_btn vd_bg-green vd_white\" type=\"button\" (click)=\"setVal()\"><i class=\"icon-ok\" ></i> Choice 5</button>\r\n                        <span *ngIf=\"userSelect.invalid && userSelect.touched\" class=\"help-inline\">Incorect data</span>\r\n                    </div>\r\n                    <div class=\"col-sm-12 controls\">\r\n                        <div class=\"vd_radio radio-success\">\r\n                            <input [(ngModel)]=\"user.optionsRadios2\" type=\"radio\" name=\"optionsRadios2\" id=\"optionsRadios3\" value=\"option3\" required>\r\n                            <label for=\"optionsRadios3\"> 3 </label>\r\n                            <input [(ngModel)]=\"user.optionsRadios2\" type=\"radio\" name=\"optionsRadios2\" id=\"optionsRadios4\" value=\"option4\" required>\r\n                            <label for=\"optionsRadios4\"> 4 </label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-sm-12\">\r\n                        <button [disabled]=\"formUser.invalid\" class=\"btn vd_btn vd_bg-green vd_white\" type=\"submit\"><i class=\"icon-ok\" ></i> Submit</button>\r\n                        <!---->\r\n                        <br>\r\n                        <pre *ngIf=\"isSubmited\">{{formUserData | json}}</pre>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/form/form.component.ts":
/*!****************************************!*\
  !*** ./src/app/form/form.component.ts ***!
  \****************************************/
/*! exports provided: User, FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var User = /** @class */ (function () {
    function User(name, password, choice, email, optionsRadios2) {
        this.name = name;
        this.password = password;
        this.choice = choice;
        this.email = email;
        this.optionsRadios2 = optionsRadios2;
    }
    return User;
}());

var FormComponent = /** @class */ (function () {
    function FormComponent() {
        this.choice = [
            { id: 1, name: 'Choice 1', disabled: true },
            { id: 1, name: 'Choice 2', disabled: true }
        ];
        this.title = 'Template Driven';
        this.defaultChoice = this.choice[0].name;
        this.formUserData = {};
        this.isSubmited = false;
    }
    FormComponent.prototype.ngOnInit = function () {
        this.user = {
            name: '',
            password: '',
            email: '',
            choice: 'Choice 1',
            optionsRadios2: 'option3'
        };
    };
    ;
    FormComponent.prototype.submitForm = function (x) {
        this.formUserData = this.formUser.value;
        this.isSubmited = true;
        this.formUser.reset();
    };
    ;
    FormComponent.prototype.setVal = function () {
        this.formUser.form.patchValue({
            formGroup1: { choice: 'Choice 5' }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('formUser'),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"])
    ], FormComponent.prototype, "formUser", void 0);
    FormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form',
            template: __webpack_require__(/*! ./form.component.html */ "./src/app/form/form.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());



/***/ }),

/***/ "./src/app/input-test/car/car.component.html":
/*!***************************************************!*\
  !*** ./src/app/input-test/car/car.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n    <span>MODEL </span>:<strong> {{car.model}}</strong>\r\n    - <span>AGE</span>: <strong>{{car.age}}</strong>\r\n</p>"

/***/ }),

/***/ "./src/app/input-test/car/car.component.ts":
/*!*************************************************!*\
  !*** ./src/app/input-test/car/car.component.ts ***!
  \*************************************************/
/*! exports provided: CarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarComponent", function() { return CarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarComponent = /** @class */ (function () {
    function CarComponent() {
    }
    CarComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('carItem'),
        __metadata("design:type", Object)
    ], CarComponent.prototype, "car", void 0);
    CarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-car',
            template: __webpack_require__(/*! ./car.component.html */ "./src/app/input-test/car/car.component.html"),
        }),
        __metadata("design:paramtypes", [])
    ], CarComponent);
    return CarComponent;
}());



/***/ }),

/***/ "./src/app/input-test/cars/cars.component.html":
/*!*****************************************************!*\
  !*** ./src/app/input-test/cars/cars.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap_component\">\r\n  <div class=\"wrap_input\" #wrap style=\"overflow: hidden\">\r\n    <div class=\"panel widget\">\r\n      <div class=\"panel-heading vd_bg-blue\">\r\n        <h3 class=\"panel-title\">\r\n          <span class=\"menu-icon\">\r\n            <fa-icon [icon]=\"faArrowsAltH\"></fa-icon>\r\n          </span>\r\n          {{ title }}\r\n        </h3>\r\n      </div>\r\n      <div class=\"panel-body-list\" style=\"padding-bottom: 40px\">\r\n        <app-form-add-item (onAddCar)=\"updateCarsList($event)\">\r\n        </app-form-add-item>\r\n        <hr />\r\n        <div class=\"col-sm-10\">\r\n          <h1>app cars</h1>\r\n          <app-car *ngFor=\"let car of cars\" [carItem]=\"car\"></app-car>\r\n        </div>\r\n        <br>\r\n        <hr>\r\n        <div class=\"col-sm-12\">\r\n          <div>\r\n            <h2>In this component I used the @Input() and @Output() directives.</h2>\r\n          </div>\r\n          <a rel=\"nofollow\" target=\"_blank\" href=\"../../../assets/img/Output-Input schema.png\"><img class=\"zoom\" src=\"../../../assets/img/Output-Input schema.png\" alt=\"\"></a>\r\n        </div>        \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/input-test/cars/cars.component.ts":
/*!***************************************************!*\
  !*** ./src/app/input-test/cars/cars.component.ts ***!
  \***************************************************/
/*! exports provided: CarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsComponent", function() { return CarsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarsComponent = /** @class */ (function () {
    function CarsComponent() {
        this.title = 'Input-Output';
        this.faArrowsAltH = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faArrowsAltH"];
        this.animationRun = 'end';
        this.enterLeave = 'selected';
        this.isVisible = true;
        this.cars = [
            { model: 'BMW', age: 2011 },
            { model: 'Reno', age: 2000 }
        ];
    }
    CarsComponent.prototype.ngOnInit = function () { };
    CarsComponent.prototype.updateCarsList = function (car) {
        this.cars.push(car);
    };
    ;
    CarsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cars',
            template: __webpack_require__(/*! ./cars.component.html */ "./src/app/input-test/cars/cars.component.html"),
            styles: [":host(app-form-add-item) { display:block; background:red;}"],
        }),
        __metadata("design:paramtypes", [])
    ], CarsComponent);
    return CarsComponent;
}());



/***/ }),

/***/ "./src/app/input-test/form-add-item/form-add-item.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/input-test/form-add-item/form-add-item.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"col-sm-7\">\r\n       <div class=\"form-cars\">\r\n          <br>\r\n         <p>Add a new car to the list</p>\r\n        <input type=\"text\" [(ngModel)]=\"model\" placeholder=\"model car\">\r\n        <input type=\"number\" [(ngModel)]=\"age\" placeholder=\"age car\">\r\n        <button type=\"button\" class=\"btn vd_bg-green vd_white\" (click)=\"addCar()\">Add car</button>\r\n       </div>\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/input-test/form-add-item/form-add-item.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/input-test/form-add-item/form-add-item.component.ts ***!
  \*********************************************************************/
/*! exports provided: FormAddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormAddItemComponent", function() { return FormAddItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FormAddItemComponent = /** @class */ (function () {
    function FormAddItemComponent() {
        this.carEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    FormAddItemComponent.prototype.ngOnInit = function () {
    };
    FormAddItemComponent.prototype.addCar = function () {
        this.carEmitter.emit({
            model: this.model,
            age: this.age
        });
        this.model = "";
        this.age = null;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('onAddCar'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], FormAddItemComponent.prototype, "carEmitter", void 0);
    FormAddItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-form-add-item',
            template: __webpack_require__(/*! ./form-add-item.component.html */ "./src/app/input-test/form-add-item/form-add-item.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], FormAddItemComponent);
    return FormAddItemComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap_component\">\r\n  <div>\r\n    <img src=\"/assets/img/error-404.png\" alt=\"\" />\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/phoneList/phone-list.component.html":
/*!*****************************************************!*\
  !*** ./src/app/phoneList/phone-list.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap_component\">\r\n    <div class=\"panel widget \">\r\n        <div class=\"panel-heading vd_bg-blue\">\r\n            <h3 class=\"panel-title\"> <span class=\"menu-icon\">\r\n            <fa-icon [icon]=\"faBoxOpen\"></fa-icon>\r\n            </span> {{title}}</h3>\r\n        </div>\r\n        <div class=\"panel-body-list pd-15\">\r\n            <div class=\"input-group mgbt-xs-15\">\r\n                <div class=\"panel widget light-widget\">\r\n                    <div class=\"wrap_alert_hidden\">\r\n                        <div class=\"alert alert-success vd_hidden hint_success\" #hint_success>\r\n                            <span class=\"vd_alert-icon\"><i class=\"fa fa-check-circle vd_green\"></i></span><strong class=\"message_text\"></strong>\r\n                        </div>\r\n                        <div class=\"alert alert-danger vd_hidden hint_error\" #hint_error> <span class=\"vd_alert-icon \"><i class=\"fa fa-exclamation-circle vd_red \"></i></span><strong class=\"message_text\"></strong>\r\n                        </div>\r\n                    </div>\r\n                    <p>In this module used services data-service and log-service</p>\r\n                    <h3 style=\"font-weight: 600; \">Add phone</h3>\r\n                    <div class=\"controls\">\r\n                        <input type=\"text\" placeholder=\"name\" [(ngModel)]=\"namePhone\" name=\"namePhone \" style=\"margin-bottom: 5px;\">\r\n\r\n                        <input type=\"text\" [(ngModel)]=\"modelPhone \" name=\"modelPhone \" style=\"margin-bottom: 5px; \" placeholder=\"model\">\r\n                    </div>\r\n\r\n                    <button class=\"btn vd_btn vd_bg-green \" (click)=\"addPhone([hint_success, hint_error]) \">Add Phone</button>\r\n                    <ul style=\"padding-left: 0; margin-top: 10px; \">\r\n                        <li *ngFor=\"let phone of phoneList; let ind=index \"><strong>{{ind+1}}) {{phone.name}} --- {{phone.model}}</strong> </li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n            <p>Getting, adding a list item and displaying, hiding hints is done using the services</p>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/phoneList/phone-list.component.ts":
/*!***************************************************!*\
  !*** ./src/app/phoneList/phone-list.component.ts ***!
  \***************************************************/
/*! exports provided: PhoneListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneListComponent", function() { return PhoneListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_data_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/data-service.service */ "./src/app/services/data-service.service.ts");
/* harmony import */ var _services_log_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/log-service.service */ "./src/app/services/log-service.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhoneListComponent = /** @class */ (function () {
    function PhoneListComponent(dataservice, logService) {
        this.dataservice = dataservice;
        this.logService = logService;
        this.title = 'Services';
        this.faBoxOpen = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faBoxOpen"];
        this.successText = 'Well done!';
        this.errorText = 'Incorrect data!';
    }
    PhoneListComponent.prototype.ngOnInit = function () {
        this.phoneList = this.dataservice.getList();
    };
    PhoneListComponent.prototype.addPhone = function (element) {
        if (this.namePhone !== '' && this.namePhone !== undefined && this.modelPhone !== '' && this.modelPhone !== undefined) {
            this.dataservice.addItemPhone({ name: this.namePhone, model: this.modelPhone });
            this.logService.showHint(element[0], this.successText);
        }
        else {
            this.logService.showHint(element[1], this.errorText);
        }
        this.namePhone = '';
        this.modelPhone = '';
    };
    PhoneListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-phone-list',
            template: __webpack_require__(/*! ./phone-list.component.html */ "./src/app/phoneList/phone-list.component.html")
        }),
        __metadata("design:paramtypes", [_services_data_service_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _services_log_service_service__WEBPACK_IMPORTED_MODULE_2__["LogService"]])
    ], PhoneListComponent);
    return PhoneListComponent;
}());



/***/ }),

/***/ "./src/app/product/product-description/product.component.html":
/*!********************************************************************!*\
  !*** ./src/app/product/product-description/product.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-6\">\r\n      <div class='wrap-img_product'>\r\n          <img src=\"./assets/img/{{image}}\" alt=\"\">\r\n      </div>\r\n  </div>\r\n  <div class=\"col-6\">\r\n    <h3><strong>ID:</strong>{{ id }}</h3>\r\n    <h3><strong>Title:</strong> {{ title }}</h3>\r\n    <h3><strong>Available:</strong> {{ available }}</h3>\r\n    <h3><strong>Country:</strong> {{ country }}</h3>\r\n    <h3><strong>Img:</strong> {{ image }}</h3>\r\n\r\n    <h5 headColor>Hash : {{ hash }}</h5>\r\n    <hr />\r\n    <p><strong>Popular products</strong></p>\r\n    <a\r\n      [routerLink]=\"['/products', 2, 'B&O TV']\"\r\n      [queryParams]=\"{ available: 'no', country: 'France', image: '5.jpg' }\"\r\n      [fragment]=\"'anchor6'\"\r\n      >B&O TV--2</a\r\n    >\r\n    <br />\r\n    <button type=\"button\" (click)=\"openToshiba()\">Go to Toshiba</button>\r\n  </div>\r\n</div>\r\n<hr />\r\n"

/***/ }),

/***/ "./src/app/product/product-description/product.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/product/product-description/product.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductComponent", function() { return ProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductComponent = /** @class */ (function () {
    function ProductComponent(route, router) {
        var _this = this;
        this.route = route;
        this.router = router;
        this.id = this.route.snapshot.params['id'];
        this.title = this.route.snapshot.params['title'];
        this.available = this.route.snapshot.queryParams['available'];
        this.country = this.route.snapshot.queryParams['country'];
        this.image = this.route.snapshot.queryParams['image'];
        this.hash = this.route.snapshot.fragment;
        //////////////// Dynamic change of parameters /////////////////////
        this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.title = params['title'];
        });
        this.route.queryParams.subscribe(function (params) {
            _this.available = params['available'];
            _this.country = params['country'];
            _this.image = params['image'];
        });
    }
    ProductComponent.prototype.ngOnInit = function () {
    };
    ;
    ProductComponent.prototype.openToshiba = function () {
        this.router.navigate(['/products', 4, 'Toshiba TV'], {
            queryParams: {
                available: 'yes',
                country: 'USA',
                image: '6.jpg'
            },
            fragment: 'anchor7'
        });
    };
    ProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product',
            template: __webpack_require__(/*! ./product.component.html */ "./src/app/product/product-description/product.component.html"),
            styles: ["\n  .wrap-img_product{height:290px}\n  img{max-height: 100%; max-width: 100%}"]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ProductComponent);
    return ProductComponent;
}());



/***/ }),

/***/ "./src/app/product/product-list/product-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap_component\">\r\n  <div class=\"panel widget\">\r\n    <div class=\"panel-heading vd_bg-blue\">\r\n      <!-- <button (click)='postItem()'>GET</button> -->\r\n\r\n      <!-- <button (click)='postItem()'>ttttt</button> -->\r\n      <h3 class=\"panel-title\">\r\n        <span class=\"menu-icon\"> <fa-icon [icon]=\"faCarrot\"></fa-icon> </span\r\n        >{{ title }}\r\n      </h3>\r\n    </div>\r\n    <div class=\"panel-body-list pd-15\">\r\n      <div class=\"input-group mgbt-xs-15\">\r\n        <div class=\"panel widget light-widget\">\r\n          <div class=\"panel-body\" style=\"padding-bottom: 0; padding-top: 0\">\r\n            <router-outlet></router-outlet>\r\n            <h2>Other products:</h2>\r\n            <ul class=\"nav_products\" style=\"padding-inline-start: 0\">\r\n              <li *ngFor=\"let product of products\">\r\n                <!-- [routerLink]=\"[{ outlets: { childOut: ['/products', product._id, product.title] } }]\" -->\r\n\r\n                <a\r\n                [routerLink]=\"['/products', product._id, product.title]\"\r\n                  [queryParams]=\"{\r\n                    available: product.available,\r\n                    country: product.country,\r\n                    image: product.image\r\n                  }\"\r\n                  routerLinkActive=\"active\"\r\n                  [fragment]=\"product.fragment\"\r\n                >\r\n                  <span>Title: </span>\r\n                  <strong>{{ product.title }} </strong>\r\n                  <span>ID: </span>\r\n                  <strong>{{ product._id }}</strong>\r\n                </a>\r\n              </li>\r\n            </ul>\r\n            <p></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductList", function() { return ProductList; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




;
var ProductList = /** @class */ (function () {
    function ProductList(productServ, router) {
        this.productServ = productServ;
        this.router = router;
        this.title = 'Products';
        this.faCarrot = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faCarrot"];
    }
    ProductList.prototype.ngOnInit = function () {
        this.getItem();
        this.router.navigate(['/products', 4, 'Toshiba TV'], {
            queryParams: {
                available: 'yes',
                country: 'USA',
                image: '6.jpg'
            },
            fragment: 'anchor7'
        });
    };
    ;
    ProductList.prototype.getItem = function () {
        var _this = this;
        this.productServ.getItem().subscribe(function (response) {
            _this.products = response;
        });
    };
    ProductList = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product/product-list/product-list.component.html"),
            styles: ["\n  .nav_products >li > a.active{background-color: #C7C7C7;}\n  a{text-decoration: underline;}\n  .panel .widget{width:100%}"]
        }),
        __metadata("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_1__["ProductsService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ProductList);
    return ProductList;
}());



/***/ }),

/***/ "./src/app/product/product-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/product/product-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProductRoutingModul */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductRoutingModul", function() { return ProductRoutingModul; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var _product_description_product_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-description/product.component */ "./src/app/product/product-description/product.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var productsRoutes = [
    {
        path: 'products',
        component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_2__["ProductList"],
        children: [{ path: ':id/:title', component: _product_description_product_component__WEBPACK_IMPORTED_MODULE_3__["ProductComponent"] }],
    }
];
var ProductRoutingModul = /** @class */ (function () {
    function ProductRoutingModul() {
    }
    ProductRoutingModul = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(productsRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], ProductRoutingModul);
    return ProductRoutingModul;
}());



/***/ }),

/***/ "./src/app/product/product.module.ts":
/*!*******************************************!*\
  !*** ./src/app/product/product.module.ts ***!
  \*******************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _product_description_product_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product-description/product.component */ "./src/app/product/product-description/product.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var _product_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-routing.module */ "./src/app/product/product-routing.module.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _product_routing_module__WEBPACK_IMPORTED_MODULE_4__["ProductRoutingModul"],
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"]
            ],
            declarations: [_product_description_product_component__WEBPACK_IMPORTED_MODULE_2__["ProductComponent"], _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_3__["ProductList"]]
        })
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/reactive-form/reactive-form.component.html":
/*!************************************************************!*\
  !*** ./src/app/reactive-form/reactive-form.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap_component\">\r\n    <div class=\"panel widget\">\r\n        <div class=\"panel-heading vd_bg-blue\">\r\n            <h3 class=\"panel-title\"> <span class=\"menu-icon\"> <i class=\"fa fa-bar-chart-o\"></i> </span> {{title}}</h3>\r\n        </div>\r\n        <div class=\"panel-body-list\">\r\n            <div class=\"form-group col-md\">\r\n                <br>\r\n                <h2 class=\"mgbt-xs-10\">Form Type 2</h2>\r\n                <button type=\"button\" class=\"btn vd_btn vd_bg-yellow\" (click)=\"notAsk('user')\">Not ask about exit</button>\r\n                <h4 _ngcontent-c7=\"\" style=\"text-align: center;\">User Data Json</h4>\r\n                <p>{{reactiveForm.value | json}}</p>\r\n            </div>\r\n\r\n            <!-- ------------------ FORM -------------------------- -->\r\n            <form class=\"form-horizontal\" [formGroup]=\"reactiveForm\" (ngSubmit)=\"onSubmit()\">\r\n                <!-- ------------------ NAME -------------------------- -->\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"label-wrapper\">\r\n                            <label class=\"control-label\">First Name</label>\r\n                        </div>\r\n                        <div class=\"vd_input-wrapper\" id=\"first-name-input-wrapper\"> <span class=\"menu-icon\"> <i class=\"fa fa-user\"></i> </span>\r\n                            <input [ngClass]=\"{'vd_bd-red': reactiveForm.get('firstname').invalid && reactiveForm.get('firstname').touched}\" formControlName=\"firstname\" type=\"text\" placeholder=\"John\" class=\"required\" required=\"\" name=\"firstname\" id=\"firstname\">\r\n                        </div>\r\n                        <p class=\"vd_soft-grey\">These names already exist: user, user123, userstaff</p>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"reactiveForm.get('firstname').invalid && reactiveForm.get('firstname').touched\" id=\"vd_login-error\" class=\"alert alert-danger \"><i class=\"fa fa-exclamation-circle fa-fw\"></i> Incorect data</div>\r\n                <!-- ------------------ EMAIL -------------------------- -->\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"label-wrapper\">\r\n                            <label class=\"control-label\">Email </label>\r\n                        </div>\r\n                        <div class=\"vd_input-wrapper\" id=\"email-input-wrapper\"> <span class=\"menu-icon\"> <i class=\"fa fa-envelope\"></i> </span>\r\n                            <input [ngClass]=\"{'vd_bd-red': reactiveForm.get('email').invalid && reactiveForm.get('email').touched}\" formControlName=\"email\" type=\"email\" placeholder=\"Email\" class=\"required\" required=\"\" name=\"email\" id=\"email\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"reactiveForm.get('email').invalid && reactiveForm.get('email').touched\" id=\"vd_login-error\" class=\"alert alert-danger \"><i class=\"fa fa-exclamation-circle fa-fw\"></i> Incorect data</div>\r\n                <!-- ------------------ PHONE NUMBER -------------------------- -->\r\n\r\n                <div class=\"form-group\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"label-wrapper\">\r\n                            <label class=\"control-label\">Phone </label>\r\n                        </div>\r\n                        <div class=\"vd_input-wrapper\"> <span class=\"menu-icon\"> <i class=\"fa fa-envelope\"></i> </span>\r\n                            <input formControlName=\"numberPhone\" [ngClass]=\"{'vd_bd-red': reactiveForm.get('numberPhone').invalid && reactiveForm.get('numberPhone').touched}\" type=\"text\" placeholder=\"Number Phone\" class=\"required\" required=\"\" name=\"numberPhone\">\r\n\r\n                        </div>\r\n                        <span class=\"vd_soft-grey\">+38(044)777-77-77</span>\r\n                    </div>\r\n                </div>\r\n                <div *ngIf=\"reactiveForm.get('numberPhone').invalid && reactiveForm.get('numberPhone').touched\" id=\"vd_login-error\" id=\"vd_login-error\" class=\"alert alert-danger \"><i class=\"fa fa-exclamation-circle fa-fw\"></i> Incorect number phone</div>\r\n                <!-- ------------------ PASSWORD form-group-------------------------- -->\r\n                <div class=\"form-group\" formGroupName=\"inconsequential\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"label-wrapper\">\r\n                            <label class=\"control-label\">Password </label>\r\n                        </div>\r\n                        <div class=\"vd_input-wrapper\" id=\"password-input-wrapper\"> <span class=\"menu-icon\"> <i class=\"fa fa-lock\"></i> </span>\r\n                            <input [ngClass]=\"{'vd_bd-red': reactiveForm.get('inconsequential.password').invalid && reactiveForm.get('inconsequential.password').touched}\" formControlName=\"email\" formControlName=\"password\" type=\"password\" placeholder=\"Password\" class=\"required\" required=\"\"\r\n                                name=\"password\" id=\"password\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"reactiveForm.get('inconsequential.password').invalid && reactiveForm.get('inconsequential.password').touched\" id=\"vd_login-error\" class=\"alert alert-danger \"><i class=\"fa fa-exclamation-circle fa-fw\"></i>\r\n                        <span *ngIf=\"reactiveForm.get('inconsequential.password').errors['required']\">This field must not be empty.</span>\r\n                        <span *ngIf=\"reactiveForm.get('inconsequential.password').errors['lengthError']\">Password must be more than {{charsCount}} characters.</span>\r\n\r\n                    </div>\r\n\r\n                    <!-- ------------------ CHECKBOX -------------------------- -->\r\n                    <div class=\"col-md-12 mgbt-xs-10 mgtp-10\">\r\n                        <div class=\"vd_checkbox\">\r\n                            <input formControlName=\"checkbox\" type=\"checkbox\" id=\"checkbox-2\" name=\"checkbox\" required>\r\n                            <label for=\"checkbox-2\"> I agree with <a href=\"#\">terms of service</a></label>\r\n                        </div>\r\n                    </div>\r\n                    <!-- ------------------ SUBMIT -------------------------- -->\r\n\r\n                    <div class=\"col-md-12 mgbt-xs-5\">\r\n                        <button [disabled]=\"reactiveForm.invalid\" class=\"btn vd_bg-green vd_white\" type=\"submit\" id=\"submit-register\" name=\"submit-register\">Register</button>\r\n\r\n                        <!--  -->\r\n                    </div>\r\n                    <br>\r\n                    <pre *ngIf=\"isSubmited\">{{preForm | json}}</pre>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/reactive-form/reactive-form.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/reactive-form/reactive-form.component.ts ***!
  \**********************************************************/
/*! exports provided: ReactiveFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactiveFormComponent", function() { return ReactiveFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_colors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/colors.service */ "./src/app/services/colors.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReactiveFormComponent = /** @class */ (function () {
    function ReactiveFormComponent(reqUersService) {
        this.reqUersService = reqUersService;
        this.title = "Reactive Form";
        this.preForm = {};
        this.isSubmited = false;
        this.charsCount = 5;
        this.logIn = false;
        this.url = "http://localhost:3000/users/";
        this.usersName = [];
    }
    ReactiveFormComponent.prototype.ngOnInit = function () {
        this.reactiveForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            firstname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                asyncValidators: [this.nameVerification.bind(this)]
            }),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            numberPhone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.validatorNumber.bind(this)]),
            inconsequential: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.validatorPassword.bind(this)]),
                checkbox: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](false)
            })
        });
    };
    ;
    // ---------------------
    ReactiveFormComponent.prototype.onSubmit = function () {
        this.isSubmited = true;
        this.preForm = this.reactiveForm.value;
        this.reactiveForm.reset();
    };
    // --------------- Password Validator -----------
    ReactiveFormComponent.prototype.validatorPassword = function (control) {
        if (control.value) {
            if (control.value.length < this.charsCount) {
                return {
                    'lengthError': true
                };
            }
        }
        return null;
    };
    ;
    // --------------- phone number Validator -----------
    ReactiveFormComponent.prototype.validatorNumber = function (control) {
        var patternNumber = /^\+\d{2}\(\d{3}\)\d{3}-\d{2}-\d{2}$/;
        if (typeof control.value !== 'number' && patternNumber.test(control.value)) {
            return null;
        }
        return {
            'phoneError': true
        };
    };
    ;
    // --------------- Async user name Validator -----------
    ReactiveFormComponent.prototype.nameVerification = function (control) {
        return this.reqUersService.newGetItems(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            // console.log(control.value);
            for (var user in response) {
                if (response[user]['name'] === control.value.replace(/\s/g, '')) {
                    return { 'errorNameValid': true };
                }
            }
            return null;
        }));
    };
    ;
    ReactiveFormComponent.prototype.notAsk = function () {
        this.logIn = true;
    };
    // --------- Guard canDeactivate -------- 
    ReactiveFormComponent.prototype.canDeactivate = function () {
        if (!this.logIn) {
            return confirm("In this URL I use Guard  canDeactivate Guard. Do you want to leave the page?");
        }
        else {
            return true;
        }
        ;
    };
    ;
    ReactiveFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reactive-form',
            template: __webpack_require__(/*! ./reactive-form.component.html */ "./src/app/reactive-form/reactive-form.component.html"),
            styles: ['.vd_bd-red{box-shadow: 0px 0px 3px 1px red;}']
        }),
        __metadata("design:paramtypes", [_services_colors_service__WEBPACK_IMPORTED_MODULE_2__["ColorsService"]])
    ], ReactiveFormComponent);
    return ReactiveFormComponent;
}());



/***/ }),

/***/ "./src/app/services/colors-guard.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/colors-guard.service.ts ***!
  \**************************************************/
/*! exports provided: ColorsGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsGuardService", function() { return ColorsGuardService; });
var ColorsGuardService = /** @class */ (function () {
    function ColorsGuardService() {
    }
    ColorsGuardService.prototype.canActivate = function (route, state) {
        return confirm('In this URL I use Guard CanActivate. Do you really want to go Products?');
    };
    return ColorsGuardService;
}());



/***/ }),

/***/ "./src/app/services/colors.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/colors.service.ts ***!
  \********************************************/
/*! exports provided: ColorsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorsService", function() { return ColorsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ColorsService = /** @class */ (function () {
    function ColorsService(http) {
        this.http = http;
        this.url = 'http://localhost:3000/api/colors/';
        this.delUrl = 'http://localhost:3000/api/delete/';
        this.putUrl = 'http://localhost:3000/api/put/';
    }
    ColorsService.prototype.getItems = function () {
        return this.http.get(this.url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ;
    ColorsService.prototype.addItem = function (data) {
        return this.http.post(this.url, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    ;
    ColorsService.prototype.changeItem = function (data) {
        return this.http.put(this.putUrl + data._id, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }));
    };
    ;
    ColorsService.prototype.deleteItem = function (data) {
        return this.http.delete(this.delUrl + data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { console.log(response); return response; }));
    };
    // ------------------------ test -=--------
    ColorsService.prototype.newGetItems = function (url) {
        return this.http.get(url);
        // .pipe(map(response=>  response), catchError(err => {  
        //   return throwError(err)}));    
    };
    ;
    ColorsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ColorsService);
    return ColorsService;
}());



/***/ }),

/***/ "./src/app/services/data-service.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/data-service.service.ts ***!
  \**************************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = /** @class */ (function () {
    function DataService() {
        this.listPhones = [
            { name: 'Samsung', model: 'sx-132' },
            { name: 'Nokia', model: 'nm-g56' }
        ];
    }
    DataService.prototype.getList = function () {
        return this.listPhones;
    };
    DataService.prototype.addItemPhone = function (item) {
        this.listPhones.push(item);
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/services/exit-react-form-guard.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/exit-react-form-guard.service.ts ***!
  \***********************************************************/
/*! exports provided: ExitReactFormGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExitReactFormGuardService", function() { return ExitReactFormGuardService; });
;
var ExitReactFormGuardService = /** @class */ (function () {
    function ExitReactFormGuardService() {
    }
    ExitReactFormGuardService.prototype.canDeactivate = function (component) {
        return component.canDeactivate ? component.canDeactivate() : true;
    };
    return ExitReactFormGuardService;
}());



/***/ }),

/***/ "./src/app/services/log-service.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/log-service.service.ts ***!
  \*************************************************/
/*! exports provided: LogService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogService", function() { return LogService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogService = /** @class */ (function () {
    function LogService() {
    }
    LogService.prototype.showHint = function (element, textHint) {
        jquery__WEBPACK_IMPORTED_MODULE_1__(element).find('.message_text').text(textHint);
        jquery__WEBPACK_IMPORTED_MODULE_1__(element).css('display', 'block');
        setTimeout(function () { return jquery__WEBPACK_IMPORTED_MODULE_1__(element).css('display', 'none'); }, 2000);
    };
    LogService.prototype.hideHint = function (element) {
        jquery__WEBPACK_IMPORTED_MODULE_1__(element).css('display', 'none');
    };
    LogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], LogService);
    return LogService;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
    }
    ProductsService.prototype.getItem = function () {
        return this.http.get('http://localhost:3000/api/products/').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) { return response; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err); }));
    };
    ProductsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/shared/shared.directive.ts":
/*!********************************************!*\
  !*** ./src/app/shared/shared.directive.ts ***!
  \********************************************/
/*! exports provided: ColorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorDirective", function() { return ColorDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColorDirective = /** @class */ (function () {
    function ColorDirective() {
        this.color = 'grey';
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('style.color'),
        __metadata("design:type", Object)
    ], ColorDirective.prototype, "color", void 0);
    ColorDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[headColor]'
        })
    ], ColorDirective);
    return ColorDirective;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.directive */ "./src/app/shared/shared.directive.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// import { ColorDirective } from '/shared.derective';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_shared_directive__WEBPACK_IMPORTED_MODULE_1__["ColorDirective"]],
            exports: [_shared_directive__WEBPACK_IMPORTED_MODULE_1__["ColorDirective"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/table-comands/table-comands.component.html":
/*!************************************************************!*\
  !*** ./src/app/table-comands/table-comands.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap_component\">\r\n    <div class=\"wrap_component\">\r\n        <div class=\"panel widget\">\r\n            <div class=\"panel-heading vd_bg-grey\">\r\n                <h3 class=\"panel-title\"> <span class=\"menu-icon\"> <i class=\"fa fa-dot-circle-o\"></i> </span> {{title}} </h3>\r\n            </div>\r\n            <div class=\"panel-body table-responsive\">\r\n                <div id=\"data-tables_wrapper\" class=\"dataTables_wrapper form-inline no-footer\">\r\n                    <table class=\"table table-striped dataTable no-footer\">\r\n                        <thead>\r\n                            <tr role=\"row\">\r\n                                <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"data-tables\" rowspan=\"1\" colspan=\"1\">NPM</th>\r\n                                <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"data-tables\" rowspan=\"1\" colspan=\"1\">Description</th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr class=\"gradeA\" role=\"row\">\r\n                                <td class=\"center\">ng g module my-module</td>\r\n                                <td class=\"center\">create new module</td>\r\n                            </tr>\r\n                            <tr class=\"gradeA\" role=\"row\">\r\n                                <td class=\"center\">ng g enum my-enum</td>\r\n                                <td class=\"center\">create new enum</td>\r\n                            </tr>\r\n                            <tr class=\"gradeA\" role=\"row\">\r\n                                <td class=\"center\">ng g interface my-interface</td>\r\n                                <td class=\"center\">create new interface</td>\r\n                            </tr>\r\n                            <tr class=\"gradeA\" role=\"row\">\r\n                                <td class=\"center\">ng g guard my-guard</td>\r\n                                <td class=\"center\">create new guard</td>\r\n                            </tr>\r\n                            <tr class=\"gradeA\" role=\"row\">\r\n                                <td class=\"center\">ng g class new-class</td>\r\n                                <td class=\"center\">create new class</td>\r\n                            </tr>\r\n                            <tr class=\"gradeA\" role=\"row\">\r\n                                <td class=\"center\">ng g service my-service</td>\r\n                                <td class=\"center\">create new service</td>\r\n                            </tr>\r\n                            <tr class=\"gradeA\" role=\"row\">\r\n                                <td class=\"center\">ng g pipe my-pipe</td>\r\n                                <td class=\"center\">create new pipe</td>\r\n                            </tr>\r\n                            <tr class=\"gradeA\" role=\"row\">\r\n                                <td class=\"center\">ng g directive my-directive</td>\r\n                                <td class=\"center\">create new directive</td>\r\n                            </tr>\r\n\r\n                            <tr class=\"gradeA\" role=\"row\">\r\n                                <td class=\"center\">ng g component my-component</td>\r\n                                <td class=\"center\">create new component</td>\r\n                            </tr>\r\n                            <tr class=\"gradeA\" role=\"row\">\r\n                                <td class=\"center\">npm install webpack webpack-dev-server typescript -g</td>\r\n                                <td class=\"center\">it is recommended to avoid mistakes</td>\r\n                            </tr>\r\n                            <tr class=\"gradeA\" role=\"row\">\r\n                                <td class=\"center\">npm install -g @angular/cli or npm i @angular/cli@6.0.0</td>\r\n                                <td class=\"center\">install global angular or need version</td>\r\n                            </tr>\r\n                            <tr class=\"gradeA \" role=\"row\">\r\n                                <td class=\"center\">ng serve or npm run start</td>\r\n                                <td class=\"center\">run angular server</td>\r\n                            </tr>\r\n                            <tr class=\"gradeA \" role=\"row\">\r\n                                <td class=\"center\">npm uninstall -g angular-cli</td>\r\n                                <td class=\"center\">uninstall global angular</td>\r\n                            </tr>\r\n                            <tr class=\"gradeA \" role=\"row\">\r\n                                <td class=\"center\">npm cache clean </td>\r\n                                <td class=\"center\">clean cache</td>\r\n                            </tr>\r\n                            <tr class=\"gradeA \" role=\"row\">\r\n                                <td class=\"center\">ng serve --port 5000 </td>\r\n                                <td class=\"center\">run server on localhost port 5000</td>\r\n                            </tr>\r\n                            <tr class=\"gradeA \" role=\"row\">\r\n                                <td class=\"center\">npm install --save bootstrap jquery</td>\r\n                                <td class=\"center\">install bootstrap and jquery after need to register the paths in the file angular.json </td>\r\n                            </tr>\r\n                            <tr class=\"gradeA \" role=\"row\">\r\n                                <td class=\"center\">ng --version</td>\r\n                                <td class=\"center\">current version</td>\r\n                            </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/table-comands/table-comands.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/table-comands/table-comands.component.ts ***!
  \**********************************************************/
/*! exports provided: TableComandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableComandsComponent", function() { return TableComandsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TableComandsComponent = /** @class */ (function () {
    function TableComandsComponent() {
        this.title = "NPM COMMANDS";
    }
    TableComandsComponent.prototype.ngOnInit = function () {
    };
    TableComandsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-table-comands',
            template: __webpack_require__(/*! ./table-comands.component.html */ "./src/app/table-comands/table-comands.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], TableComandsComponent);
    return TableComandsComponent;
}());



/***/ }),

/***/ "./src/app/test-component/test-component.html":
/*!****************************************************!*\
  !*** ./src/app/test-component/test-component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"wrap_component\">\r\n    <h1>{{title}}</h1>\r\n    <h2>Test Service</h2>\r\n    <p>\r\n        Display text using the 'TestService'\r\n    </p>\r\n    <button (click)=\"changeText()\">{{serviceVisible}}</button>\r\n    <br>\r\n    <div class=\"alert alert-primary\" role=\"alert\" *ngIf=\"serviceVisible\">This Item is Visible</div>\r\n    <div class=\"alert alert-success\" role=\"alert\" *ngIf=\"!serviceVisible\">Nothing to show</div>\r\n    <h3 class=\"text-primary\">{{serviceObservable}}</h3>\r\n    <hr>\r\n\r\n    <h2>Test Directive</h2>\r\n    <p>Change class for Attribute Directives </p>\r\n\r\n\r\n    <div [app-test]=\"testVar === true ? 'bg-warning' : 'bg-info'\">\r\n        <p>'TestDirective' Attribute Directives\r\n        </p>\r\n        <div>\r\n            <span>Select class </span>\r\n            <button style=\"min-width:90px;\" (click)=\"testVar=!testVar\">{{testVar === false ? 'bg-warning' : 'bg-info'}}</button>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/test-component/test-component.ts":
/*!**************************************************!*\
  !*** ./src/app/test-component/test-component.ts ***!
  \**************************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _test_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test-service */ "./src/app/test-component/test-service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TestComponent = /** @class */ (function () {
    function TestComponent(testService) {
        this.testService = testService;
        this.title = 'Unit test Component';
        this.testVar = false;
    }
    TestComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.serviceVisible = this.testService.getVisible();
        this.testService.getObservable().subscribe(function (text) {
            _this.serviceObservable = text;
        });
    };
    TestComponent.prototype.changeText = function () {
        this.serviceVisible == false ? this.testService.showItem() : this.testService.hideItem();
        this.serviceVisible = this.testService.getVisible();
    };
    TestComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-test-component',
            template: __webpack_require__(/*! ./test-component.html */ "./src/app/test-component/test-component.html")
        }),
        __metadata("design:paramtypes", [_test_service__WEBPACK_IMPORTED_MODULE_1__["TestService"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/test-component/test-service.ts":
/*!************************************************!*\
  !*** ./src/app/test-component/test-service.ts ***!
  \************************************************/
/*! exports provided: TestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestService", function() { return TestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TestService = /** @class */ (function () {
    function TestService() {
        this.isVisible = false;
    }
    TestService.prototype.showItem = function () {
        this.isVisible = true;
    };
    TestService.prototype.hideItem = function () {
        this.isVisible = false;
    };
    TestService.prototype.getVisible = function () {
        return this.isVisible;
    };
    TestService.prototype.getObservable = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])('Hello from TestService  with a 3s delay').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(3000));
    };
    TestService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], TestService);
    return TestService;
}());



/***/ }),

/***/ "./src/app/test-component/test.directive.ts":
/*!**************************************************!*\
  !*** ./src/app/test-component/test.directive.ts ***!
  \**************************************************/
/*! exports provided: TestDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestDirective", function() { return TestDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestDirective = /** @class */ (function () {
    function TestDirective(element) {
        this.element = element;
        this.bgClass = 'bg-success';
    }
    TestDirective.prototype.ngOnInit = function () {
        this.element.nativeElement.setAttribute("style", "color:white; border: 2px solid black; padding:5px 15px");
    };
    TestDirective.prototype.ngOnChanges = function (changes) {
        var change = changes['appTest'];
        var currentClass = change.currentValue;
        var previousClass = change.previousValue;
        if (change.firstChange) {
            this.element.nativeElement.classList.add(currentClass);
        }
        else {
            this.element.nativeElement.classList.add(currentClass);
            this.element.nativeElement.classList.remove(previousClass);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('app-test'),
        __metadata("design:type", Object)
    ], TestDirective.prototype, "appTest", void 0);
    TestDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[app-test]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], TestDirective);
    return TestDirective;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\WEB\Ang-elements\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map