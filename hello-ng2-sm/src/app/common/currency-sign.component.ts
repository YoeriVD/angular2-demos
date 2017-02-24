import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
    selector: 'currency-sign',
    template: `<img class="pull-right" 
                    width="40px" 
                    [hidden]="!showImage" 
                    [src]="image"
                    alt=""
                >`,
    host: { '(document:click)': 'hideImage($event)' }
})
export class CurrencySignComponent implements OnInit {
    showImage = true;
    image = "https://7icons.files.wordpress.com/2010/08/eurosign256.png?w=256&h=256"
    constructor(private eref: ElementRef) { }

    ngOnInit() { }
    hideImage(event) {
        if (!this.eref.nativeElement.contains(event.target)) {
            this.showImage = false;
        }
    }
}