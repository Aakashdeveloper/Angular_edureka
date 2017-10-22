import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import { ProductListComponent } from "./product-list.component";
import { ProductFilterPipe } from "./product-filter.pipe";
import { ProductDetailComponent } from "./product-detail.component";
import { ProductDetailGuard } from "./product-gaurd.service";
import { ProductService } from "./product.service";
import { SharedModuel } from "../shared/shared.module";

@NgModule({
    imports:[
        SharedModuel,
        RouterModule.forChild([
            {path:'products',component:ProductListComponent},
            {path:'product/:id',canActivate:[ProductDetailGuard],component:ProductDetailComponent},
        ])

    ],
    declarations:[
        ProductListComponent,
        ProductFilterPipe,
        ProductDetailComponent
    ],
    providers:[ProductDetailGuard,
                ProductService]
})

export class ProductModule{

}