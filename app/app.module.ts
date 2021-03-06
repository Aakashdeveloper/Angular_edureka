import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {BookComponent} from './book.component'
import { StarComponent } from "./shared/star.component";
import { HomeComponent } from "./home/home.component";
import { ProductModule } from "./products/product.module";

@NgModule({
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule,
    ProductModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      {path:'',redirectTo:'home',pathMatch:'full'},
      {path:'**',redirectTo:'home',pathMatch:'full'}
    ])
   
  ],
  declarations: [
    AppComponent,
    BookComponent,
    HomeComponent,
  ],
  bootstrap: [AppComponent]
})


export class AppModule { }


