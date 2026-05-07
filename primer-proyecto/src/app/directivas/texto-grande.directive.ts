import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTextoGrande]'
})
export class TextoGrandeDirective {

  @Input() tamano: String = '30px';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.cambiarTamaño(this.tamano);
    this.el.nativeElement.style.transition = ' 0.3s';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.cambiarTamaño('16px');
  }



  private cambiarTamaño(tamano: String) {
    this.el.nativeElement.style.fontSize = tamano;

  }
}
