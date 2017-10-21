import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import { ProductService } from "./product.service";

@Component({
    selector:'pm-product',
    templateUrl:'app/products/product-list.component.html',
    //styles:['thead{color:green}','td{color:blue}']
     styleUrls:['app/products/product-list.component.css']
})

export class ProductListComponent implements OnInit{
    pageTitle:string="Product List";
    myhead:boolean=false;
   // products:boolean=true;
    imageWidth:number=50;
    listFilter:string;
    errorMessage:string;
    showImages:boolean=false;
    products:IProduct[];

    constructor(private _productService:ProductService){

    }

    toggleImage(): void{
        this.showImages = !this.showImages;
    }

    ngOnInit(): void{
        this._productService.getProducts()
            .subscribe(products=>this.products=products,
            error => this.errorMessage =<any>error);
    }

    onRatingClicked(message: string): void{
        this.pageTitle='Product List:'+ message;
    }

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








