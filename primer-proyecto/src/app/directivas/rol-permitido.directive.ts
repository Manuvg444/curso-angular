import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appRolPermitido]'
})
export class RolPermitidoDirective {


  private rolPermitido = 'editor';

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }

  @Input() set appRolPermitido(rolRequerido: string) {
    if (rolRequerido === this.rolPermitido) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
