webpackJsonp(["profile.module"],{

/***/ "./src/app/views/profile/profile-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_component__ = __webpack_require__("./src/app/views/profile/profile.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__profile_component__["a" /* ProfileComponent */],
        data: {
            title: 'Profile'
        }
    }
];
var ProfileRoutingModule = /** @class */ (function () {
    function ProfileRoutingModule() {
    }
    ProfileRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]]
        })
    ], ProfileRoutingModule);
    return ProfileRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div  class=\"row\">\n    <div class=\"col-sm-4\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Profile</strong>\n          <small>Picture</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-sm-12\" style=\"text-align: center;\">\n            \t<img src=\"assets/img/avatars/8.jpg\" class=\"img-avatar\" alt=\"Profile Picture\" width=\"200\" height=\"200\"/>\n            </div>\n          </div><!--/.row-->\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"browse\" class=\"btn btn-sm btn-info\"><i class=\"fa fa-ban\"></i> Change Profile Picture </button>\n           <button type=\"submit\" class=\"btn btn-sm btn-primary\" data-toggle=\"modal\" (click)=\"saveProfilePictureModal.show()\" ><i class=\"fa fa-dot-circle-o\"></i> Save Changes</button>\n        </div>\n      </div>\n    </div><!--/.col-->\n    <div class=\"col-sm-8\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Edit</strong>\n          <small>Profile</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-group\">\n            <label for=\"username\">Username</label>\n            <input type=\"text\" class=\"form-control\" id=\"username\" placeholder=\"Enter your user name\" value=\"micheal123\">\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-sm-6\">\n              <label for=\"first-name\">First Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"first-name\" placeholder=\"Enter First Name\" value=\"Micheal\">\n            </div>\n            <div class=\"form-group col-sm-6\">\n              <label for=\"second-name\">Second Name</label>\n              <input type=\"text\" class=\"form-control\" id=\"second-name\" placeholder=\"Second Name\" value=\"Dany Rand\">\n            </div>\n          </div><!--/.row-->\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"Enter your Email\" value=\"micheal123@gmail.com\">\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" data-toggle=\"modal\" (click)=\"savePersonalInfoModal.show()\"><i class=\"fa fa-dot-circle-o\"></i> Save Changes</button>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n\n  <div bsModal #saveProfilePictureModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-info\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Save Profile Picture</h4>\n        <button type=\"button\" class=\"close\" (click)=\"saveProfilePictureModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Click Save to save  <strong>Profile Picture</strong> or <strong>Cancel</strong> to abort this modal&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"saveProfilePictureModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-info\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n\n<div bsModal #savePersonalInfoModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-info\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Save Personal Information</h4>\n        <button type=\"button\" class=\"close\" (click)=\"savePersonalInfoModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Click Save to save <strong>Personal Information</strong> or <strong>Cancel</strong> to abort this modal&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"savePersonalInfoModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-info\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/views/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("./src/app/views/profile/profile.component.html")
        })
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/views/profile/profile.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__profile_component__ = __webpack_require__("./src/app/views/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__profile_routing_module__ = __webpack_require__("./src/app/views/profile/profile-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ProfileModule = /** @class */ (function () {
    function ProfileModule() {
    }
    ProfileModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__profile_routing_module__["a" /* ProfileRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot()
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__profile_component__["a" /* ProfileComponent */]]
        })
    ], ProfileModule);
    return ProfileModule;
}());



/***/ })

});
//# sourceMappingURL=profile.module.chunk.js.map