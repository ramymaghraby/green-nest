"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
        this.page = 1;
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.heads = [
            { name: 'Chairs', url: 'https://nerdist.com/wp-content/uploads/2020/04/star-wars-backgrounds-18.jpg' },
            { name: 'Chairs', url: 'https://nerdist.com/wp-content/uploads/2020/04/star-wars-backgrounds-18.jpg' },
            { name: 'Desks', url: 'https://pbs.twimg.com/media/EUnBisEUUAYU2Ya?format=jpg&name=large' },
            { name: 'Bedrooms', url: 'https://fundraising.co.uk/wp-content/uploads/2020/04/neon-rainbow-unsplash-850x600.jpg' },
            { name: 'Chairs', url: 'https://nerdist.com/wp-content/uploads/2020/04/star-wars-backgrounds-18.jpg' },
            { name: 'Desks', url: 'https://pbs.twimg.com/media/EUnBisEUUAYU2Ya?format=jpg&name=large' },
            { name: 'Bedrooms', url: 'https://fundraising.co.uk/wp-content/uploads/2020/04/neon-rainbow-unsplash-850x600.jpg' },
            { name: 'Chairs', url: 'https://nerdist.com/wp-content/uploads/2020/04/star-wars-backgrounds-18.jpg' },
            { name: 'Desks', url: 'https://pbs.twimg.com/media/EUnBisEUUAYU2Ya?format=jpg&name=large' },
            { name: 'Bedrooms', url: 'https://fundraising.co.uk/wp-content/uploads/2020/04/neon-rainbow-unsplash-850x600.jpg' },
            { name: 'Desks', url: 'https://pbs.twimg.com/media/EUnBisEUUAYU2Ya?format=jpg&name=large' },
            { name: 'Bedrooms', url: 'https://fundraising.co.uk/wp-content/uploads/2020/04/neon-rainbow-unsplash-850x600.jpg' },
            { name: 'Chairs', url: 'https://nerdist.com/wp-content/uploads/2020/04/star-wars-backgrounds-18.jpg' },
            { name: 'Desks', url: 'https://pbs.twimg.com/media/EUnBisEUUAYU2Ya?format=jpg&name=large' },
            { name: 'Bedrooms', url: 'https://fundraising.co.uk/wp-content/uploads/2020/04/neon-rainbow-unsplash-850x600.jpg' },
            { name: 'Chairs', url: 'https://nerdist.com/wp-content/uploads/2020/04/star-wars-backgrounds-18.jpg' },
            { name: 'Desks', url: 'https://pbs.twimg.com/media/EUnBisEUUAYU2Ya?format=jpg&name=large' },
            { name: 'Bedrooms', url: 'https://fundraising.co.uk/wp-content/uploads/2020/04/neon-rainbow-unsplash-850x600.jpg' },
        ];
        this.getProducts();
    };
    ProductsComponent.prototype.getProducts = function () {
        this.totalRecords = this.heads.length;
    };
    ProductsComponent = __decorate([
        core_1.Component({
            selector: 'app-products',
            templateUrl: './products.component.html',
            styleUrls: ['./products.component.css']
        })
    ], ProductsComponent);
    return ProductsComponent;
}());
exports.ProductsComponent = ProductsComponent;
