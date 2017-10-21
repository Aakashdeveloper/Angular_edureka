import {Component,OnChanges,Input,Output,EventEmitter} from '@angular/core';

@Component({
    selector:'edu-star',
    templateUrl:'app/shared/star.component.html',
    styleUrls:['app/shared/star.component.css']
})

export class StarComponent implements OnChanges{
    @Input() rating:number;
    starWidth:number;

    @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void{
        this.starWidth = this.rating*86/5
    }

    onClick(): void{
        this.ratingClicked.emit(`The rating is ${this.rating}`)
    }
}

