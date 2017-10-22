import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    templateUrl:'app/products/product-detail.component.html'
})

export class ProductDetailComponent implements OnInit{
    pageTitle:string="Product Details"

    constructor(private _route:ActivatedRoute,
        private _router: Router){

    }

    ngOnInit(): void{
        let id = +this._route.snapshot.params['id'];
        this.pageTitle += `:${id}`
    }

    onBack(): void{
        this._router.navigate(['/products']);
    }
    
}