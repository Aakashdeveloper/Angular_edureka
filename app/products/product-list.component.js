"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
        this.pageTitle = "Product List";
        this.myhead = false;
        // products:boolean=true;
        this.imageWidth = 50;
        this.showImages = false;
        this.products = [
            {
                "productId": 1,
                "productName": "Leaf Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2016",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 3.5,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
            },
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2016",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
            }
        ];
        /*function add(a){
            return a+a
        }
        
        var add = function(a){
            return a+a
        }
        
        var add = (a,b) => {
            a+a
        }*/
    }
    ProductListComponent.prototype.toggleImage = function () {
        this.showImages = !this.showImages;
    };
    ProductListComponent.prototype.ngOnInit = function () {
        console.log("<<<<<<<<<<<<<<<<<<<<<<<<<<<<<this is init>>>>>>>>>>>>>>>>>>");
    };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'pm-product',
            templateUrl: 'app/products/product-list.component.html',
            //styles:['thead{color:green}','td{color:blue}']
            styleUrls: ['app/products/product-list.component.css']
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map