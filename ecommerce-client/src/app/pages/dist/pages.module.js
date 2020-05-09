"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var intro_component_1 = require("./intro/intro.component");
var shared_module_1 = require("../shared/shared.module");
var products_component_1 = require("./products/products.component");
var app_routing_module_1 = require("../app-routing.module");
var ngx_pagination_1 = require("ngx-pagination");
var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        core_1.NgModule({
            declarations: [intro_component_1.IntroComponent, products_component_1.ProductsComponent],
            imports: [
                common_1.CommonModule,
                shared_module_1.SharedModule,
                app_routing_module_1.AppRoutingModule,
                ngx_pagination_1.NgxPaginationModule
            ],
            exports: [intro_component_1.IntroComponent]
        })
    ], PagesModule);
    return PagesModule;
}());
exports.PagesModule = PagesModule;
