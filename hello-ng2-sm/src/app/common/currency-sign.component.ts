import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'currency-sign',
    template: `<img class="pull-right" 
                    width="40px" 
                    (click)="hideImage()" 
                    [hidden]="!showImage" 
                    [src]="image"
                    alt=""
                >`
})
export class CurrencySignComponent implements OnInit {
    showImage = true;
    image = "https://7icons.files.wordpress.com/2010/08/eurosign256.png?w=256&h=256"
    constructor() { }

    ngOnInit() { }
    hideImage() {
        this.showImage = false;
    }
}