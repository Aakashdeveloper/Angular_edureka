import {Component} from '@angular/core';

@Component({
    selector:'pm-app',
    template:`
    <div>
        <nav class="navbar navbar-default">
            <div class="container-fluid">
                <a class="navbar-brand">Edureka</a>
                <ul class="nav navbar-nav">
                    <li><a [routerLink]="['/home']">Home</a></li>
                    <li><a [routerLink]="['/products']">Product</a></li>
                </ul>
            </div>

        </nav>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    </div>`
})


export class AppComponent{
    pageTitle:string="Home Page"
}