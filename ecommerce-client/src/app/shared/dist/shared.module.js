"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var animations_1 = require("@angular/platform-browser/animations");
var common_1 = require("@angular/common");
var navbar_component_1 = require("./components/navbar/navbar.component");
var sidebar_component_1 = require("./components/sidebar/sidebar.component");
var collapse_1 = require("ngx-bootstrap/collapse");
var ng_select_1 = require("@ng-select/ng-select");
var forms_1 = require("@angular/forms");
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule_1 = SharedModule;
    SharedModule.forRoot = function () {
        return {
            NgModule: SharedModule_1
        };
    };
    var SharedModule_1;
    SharedModule = SharedModule_1 = __decorate([
        core_1.NgModule({
            declarations: [navbar_component_1.NavbarComponent, sidebar_component_1.SidebarComponent],
            imports: [
                common_1.CommonModule,
                animations_1.BrowserAnimationsModule,
                collapse_1.CollapseModule.forRoot(),
                ng_select_1.NgSelectModule,
                forms_1.FormsModule
            ],
            exports: [navbar_component_1.NavbarComponent, sidebar_component_1.SidebarComponent]
        })
    ], SharedModule);
    return SharedModule;
}());
exports.SharedModule = SharedModule;
