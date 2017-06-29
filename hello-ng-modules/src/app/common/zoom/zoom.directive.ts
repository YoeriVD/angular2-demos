import { Directive, ElementRef, HostListener, Input } from '@angular/core'

@Directive({
    selector : '[zoom]'
})
export class ZoomDirective{
    @Input()zoom : number;
    constructor(private el : ElementRef){
        console.log("attached to element", el);
    }

    @HostListener('mouseover')
    whateverYouWantToNameThis(){
        let zoomLevel = this.zoom || "1.1";
        this.el.nativeElement.style.transition = 'all 1s';
        this.el.nativeElement.style.transform = `scale(${zoomLevel})`;        
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        this.el.nativeElement.style.transform = "";     
    }

};