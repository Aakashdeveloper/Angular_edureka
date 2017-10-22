import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';

import { StarComponent } from "./star.component";

@NgModule({
    declarations:[
            StarComponent
    ],
    imports:[
        FormsModule,
        CommonModule
    ],
    exports:[
        FormsModule,
        CommonModule,
        StarComponent
    ]
})

export class SharedModuel{

}