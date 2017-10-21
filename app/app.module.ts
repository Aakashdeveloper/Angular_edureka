import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {BookComponent} from './book.component'
import { ProductListComponent } from "./products/product-list.component";
import { ProductFilterPipe } from "./products/product-filter.pipe";
import { StarComponent } from "./shared/star.component";
import { ProductDetailComponent } from "./products/product-detail.component";
import { HomeComponent } from "./home/home.component";



@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule
   
  ],
  declarations: [
    AppComponent,
    BookComponent,
    StarComponent,
    HomeComponent,
    ProductListComponent,
    ProductFilterPipe,
    ProductDetailComponent
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }


