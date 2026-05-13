import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaludoPipe } from '../../pipes/saludo.pipe';
import { DoblePipe } from '../../pipes/doble.pipe';
import { ResaltarPipe } from '../../pipes/resaltar.pipe';
import { EdadPipe } from '../../pipes/edad.pipe';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [CommonModule, SaludoPipe, DoblePipe, ResaltarPipe, EdadPipe],
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.scss'
})


export class PipesDemoComponent {
  nombreUsuario: string = 'Carlos';
  numeroBase: number = 25;
  textoImportante: string = 'Texto en negrita';
  fechaNac: string = '1995-05-15'
  nombre: string = 'Juan Gomez Gil';
  fecha: Date = new Date();
  precio: number = 1250.95;
  progreso: number = 0.856;
  mensaje: string = 'Frase larga para probar el slice'
  usuario = {
    id: 1,
    nombre: 'Juan',
    puesto: 'Developer'
  }
}
