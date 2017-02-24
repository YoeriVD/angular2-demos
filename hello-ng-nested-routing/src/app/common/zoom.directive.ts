import { Directive, HostListener, ElementRef, Input } from '@angular/core'

@Directive({
    selector: '[zoom]'
})
export class ZoomDirective {
    @Input() zoom : number;
    constructor(private element : ElementRef){}
    @HostListener("mouseenter") onMouseEnter() {
        this.element.nativeElement.style.transition = 'all 1s';
        this.element.nativeElement.style.transform = `scale(${this.zoom || 1.4 })`;
    }
    @HostListener("mouseleave") onMouseLeave() {
        this.element.nativeElement.style.transform = '';
    }
}