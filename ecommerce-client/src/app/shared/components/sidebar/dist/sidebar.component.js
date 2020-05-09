"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(router, CategoriesSrv) {
        this.router = router;
        this.CategoriesSrv = CategoriesSrv;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    SidebarComponent.prototype.getCategories = function () {
        var _this = this;
        this.CategoriesSrv.getCategories().subscribe(function (Cat) {
            _this.Categories = Cat;
            _this.Categories.forEach(function (category) {
                category.isCollapsed = true;
                _this.checkSubCategory(category);
            });
        });
    };
    SidebarComponent.prototype.getThisCategory = function (category) {
        if (category.isCollapsed) {
            this.Categories.forEach(function (cat) { return cat.isCollapsed = true; });
        }
        category.isCollapsed = !category.isCollapsed;
        this.selectClass = 'selected';
        this.changeCategoryClass(category);
        this.checkSubCategory(category);
    };
    SidebarComponent.prototype.changeCategoryClass = function (cat) {
        this.Categories.forEach(function (category) { return category["class"] = ''; });
        var addClassCat = this.Categories.indexOf(cat);
        this.Categories[addClassCat]["class"] = 'selected';
    };
    SidebarComponent.prototype.checkSubCategory = function (cat) {
        var catIndex = this.Categories.indexOf(cat);
        if (cat.subCategories) {
            this.Categories[catIndex].subCatStatus = true;
        }
        else {
            this.Categories[catIndex].subCatStatus = false;
        }
    };
    SidebarComponent.prototype.getSubCategories = function (subCategory) {
        this.changeSubCategoryClass(subCategory);
    };
    SidebarComponent.prototype.changeSubCategoryClass = function (cat) {
        var CatObj = this.Categories.filter(function (catego) { return catego.id === cat.categoryId; });
        var CatIndex = this.Categories.indexOf(CatObj[0]);
        this.Categories[CatIndex].subCategories.forEach(function (subCat) { return subCat["class"] = ''; });
        var subCatIndex = this.Categories[CatIndex].subCategories.indexOf(cat);
        this.Categories[CatIndex].subCategories[subCatIndex]["class"] = 'subItemSelected';
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.css']
        })
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
