import {Component} from '@angular/core';

@Component({
    selector:'pm-product',
    templateUrl:'app/products/product-list.component.html',
    //styles:['thead{color:green}','td{color:blue}']
     styleUrls:['app/products/product-list.component.css']
})

export class ProductListComponent{
    pageTitle:string="Product List";
    myhead:boolean=false;
   // products:boolean=true;
    imageWidth:number=50;
    showImages:boolean=false;
    products:any[]=[
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
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
    ]
    toggleImage(): void{
        this.showImages = !this.showImages;
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








