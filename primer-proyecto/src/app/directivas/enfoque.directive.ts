import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appEnfoque]',
  standalone: true
})
export class EnfoqueDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.el.nativeElement.
        focus();
    }, 0);
  }

}
