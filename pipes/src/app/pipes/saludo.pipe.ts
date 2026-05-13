import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'saludo',
  standalone: true
})
export class SaludoPipe implements PipeTransform {

  transform(value: string): string {
    return value ? `!Hola, ${value}!` : '';
  }

}
