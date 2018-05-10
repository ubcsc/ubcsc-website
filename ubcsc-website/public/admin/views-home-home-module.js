(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-home-home-module"],{

/***/ "./src/app/views/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/views/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/views/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        data: {
            title: 'Home'
        }
    }
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/views/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"animated fadeIn\">\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Home Page</strong>\n          <small>Pictures</small>\n        </div>\n          <div class=\"card-body\">\n            <ul class=\"picturelist\">\n              <li *ngFor=\"let homepicture of homePagePic\" class=\"picturelist\">\n                <div class=\"col-sm-6 \">\n                  <img src={{homepicture.pic}} class=\"\" alt=\"Home page Picture\" width=\"250\" height=\"250\" style=\"padding-bottom: 100px;\" />\n                </div>\n\n                <button type=\"delete\" class=\"btn btn-sm btn-danger\" data-toggle=\"modal\" (click)=\"dangerModal.show()\"><i class=\"fa fa-ban\"></i> Delete </button>\n             </li>\n            </ul>\n          </div>\n          <div class=\"card-footer\">\n             <button type=\"browse\" class=\"btn btn-sm btn-info\"><i class=\"fa fa-ban\"></i> Upload HomePage Image </button>\n          </div>\n        </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Announcement</strong>\n          <small>list</small>\n        </div>\n        <div class=\"card-body\">\n          <li *ngFor=\"let annc of announcements\" class=\"listannc\">\n            <div class=\"row\">\n              <div class=\"col-sm-8\">\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" id=\"announcements\" value={{annc.news}}>\n                </div>\n              </div>\n              <div class=\"col-sm-2\">\n                <button type=\"submit\" class=\"btn btn-sm btn-primary\" data-toggle=\"modal\" (click)=\"saveAnnouncementModal.show()\"><i class=\"fa fa-dot-circle-o\"></i> Save Changes</button>\n              </div>\n              <div class=\"col-sm-2\">\n                 <button type=\"browse\" class=\"btn btn-sm btn-danger\" data-toggle=\"modal\" (click)=\"deleteAnnouncementModal.show()\"><i class=\"fa fa-ban\"></i> Delete</button>\n              </div>\n            </div>\n          </li>\n        </div>\n        <div class=\"card-footer\">\n           <button type=\"browse\" class=\"btn btn-sm btn-info\"><i class=\"fa fa-ban\"></i> Upload Announcement </button>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>HOD</strong>\n          <small>Message</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"form-group\">\n              <label for=\"hodmessage\">HOD Message</label>\n              <input type=\"text\" class=\"form-control\" id=\"hodmessage\" value=\"{{ hodmessage }}\" style=\"padding-bottom: 50px;\">\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" data-toggle=\"modal\" (click)=\"saveHODMessageModal.show()\" ><i class=\"fa fa-dot-circle-o\"></i> Save Changes</button>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n  <div class=\"row\">\n    <div class=\"col-sm-12\">\n      <div class=\"card\">\n        <div class=\"card-header\">\n          <strong>Contact</strong>\n          <small>Info</small>\n        </div>\n        <div class=\"card-body\">\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"contactNumber\">Contact Number</label>\n              <input type=\"text\" class=\"form-control\" id=\"contactusnumber\" value=\"{{contactus.number}}\">\n            </div>\n          </div><!--/.col-->\n          <div class=\"col-sm-6\">\n            <div class=\"form-group\">\n              <label for=\"contactEmail\">Contact Email</label>\n              <input type=\"text\" class=\"form-control\" id=\"hodmessage\" value=\"{{contactus.email}}\">\n            </div><!--/.col-->\n          </div>\n        </div>\n        <div class=\"card-footer\">\n          <button type=\"submit\" class=\"btn btn-sm btn-primary\" data-toggle=\"modal\" (click)=\"saveContactUSModal.show()\"><i class=\"fa fa-dot-circle-o\"></i> Save Changes</button>\n        </div>\n      </div>\n    </div><!--/.col-->\n  </div><!--/.row-->\n</div>\n\n\n\n\n\n<div bsModal #dangerModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-danger\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Delete Picture</h4>\n        <button type=\"button\" class=\"close\" (click)=\"dangerModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Click delete to <strong>delete</strong> current <strong>picture</strong> or <strong>Cancel</strong> to abort this modal&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"dangerModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-danger\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n\n<div bsModal #deleteAnnouncementModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-danger\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Delete Announcement</h4>\n        <button type=\"button\" class=\"close\" (click)=\"deleteAnnouncementModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Click delete to <strong>delete</strong> current <strong>Announcement</strong> or <strong>Cancel</strong> to abort this modal&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"deleteAnnouncementModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-danger\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n\n<div bsModal #saveAnnouncementModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-info\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Save Announcement</h4>\n        <button type=\"button\" class=\"close\" (click)=\"saveAnnouncementModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Click Save to save current <strong>Announcement</strong> or <strong>Cancel</strong> to abort this modal&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"saveAnnouncementModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-info\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n\n<div bsModal #saveHODMessageModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-info\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Save HOD Message</h4>\n        <button type=\"button\" class=\"close\" (click)=\"saveHODMessageModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Click Save to save <strong>HOD Message</strong>  or <strong>Cancel</strong> to abort this modal&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"saveHODMessageModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-info\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n\n\n<div bsModal #saveContactUSModal=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-info\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Save Contact Information</h4>\n        <button type=\"button\" class=\"close\" (click)=\"saveContactUSModal.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <p>Click Save to save current <strong>Contact Information</strong> or <strong>Cancel</strong> to abort this modal&hellip;</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"saveContactUSModal.hide()\">Close</button>\n        <button type=\"button\" class=\"btn btn-info\">Save changes</button>\n      </div>\n    </div><!-- /.modal-content -->\n  </div><!-- /.modal-dialog -->\n</div><!-- /.modal -->\n"

/***/ }),

/***/ "./src/app/views/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/views/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.homePagePic = [
            { pic: 'assets/img/avatars/pic1.jpg' },
            { pic: 'assets/img/avatars/pic3.jpg' },
            { pic: 'assets/img/avatars/pic4.jpg' }
        ];
        this.announcements = [
            { news: 'Departmental Calender' },
            { news: 'CA TimeTable ' },
            { news: 'List of Graduating students' }
        ];
        this.hodmessage = 'This is the HOD message.';
        this.contactus = { number: '785857445', email: 'ubcss@gmail.com' };
    }
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/views/home/home.component.html")
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.component */ "./src/app/views/home/home.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/views/home/home-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_2__["ModalModule"].forRoot()
            ],
            declarations: [_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ })

}]);
//# sourceMappingURL=views-home-home-module.js.map