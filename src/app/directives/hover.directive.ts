import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';






@Directive({
    // tslint:disable-next-line:directive-selector
    selector: '[hover]'
})
export class HoverDirective {
    defaultStyle = 'white';

    @HostListener('mouseenter') mouseenter() {
        this.defaultStyle = 'red';
        this.triggerColorChange();
    }

    @HostListener('mouseleave') mouseleave() {
        this.defaultStyle = 'white';
        this.triggerColorChange();
    }
    constructor(private elementRef: ElementRef) {

    }

    triggerColorChange() {
        this.elementRef.nativeElement.style.backgroundColor = this.defaultStyle;
    }
}
