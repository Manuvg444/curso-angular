import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[appContadorClicks]'
})
export class ContadorClicksDirective {

  private contador = 0;


  @Output() contadorClicks = new EventEmitter<number>();

  @HostListener('click') onClick() {
    this.contador++;
    this.contadorClicks.emit(this.contador);
  }

}
