import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { EnfoqueDirective } from "../../directivas/enfoque.directive";
import { RolPermitidoDirective } from "../../directivas/rol-permitido.directive";
import { ContadorClicksDirective } from "../../directivas/contador-clicks.directive";
import { TextoGrandeDirective } from '../../directivas/texto-grande.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule, NgClass, EnfoqueDirective, RolPermitidoDirective, ContadorClicksDirective, TextoGrandeDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})


export class HomeComponent {
  // <!-- EJERCICIO 1 - En resumen hay tres tipos de directivas -->

  //  <!-- 1 - Por una parte están las directivas estructurales -->
  //<!-- @if (logueado) {
  //<p>¡Bienvenido!</p>
  // } @else {
  //<p>Por favor inicia sesión</p>
  //}
  //-->

  //<!-- @for (fruta of frutas; track fruta) {
  //...
  //}

  //-->

  //<!-- @switch (estadoPedido) {
  //@case ('pendiente') {
  // <p>Tu pedido está en espera.</p>
  // }
  //@case ('en_camino') {
  // <p>¡El repartidor está cerca!</p>
  //}
  // @case ('entregado') {
  // <p>Pedido completado con éxito.</p>
  //}
  //@default {
  // <p>Estado del pedido desconocido.</p>
  // }
  //}
  //-->

  //<!-- 2 - Por otra parte están las directivas de atributo -->


  //<!-- <div [ngClass]="{'text-success': isValid, 'text-danger': !isValid}">
  // Estado de la validación
  //</div>


  //Si valid es true devuelve la clase text-sucess.
  //Si valid no es true devlueve la clase text-danger.

  //-->

  //<!-- <div [ngStyle]="{'color': isError ? 'red' : 'blue'}">
  // Este texto cambia de color y tamaño.
  //</div>

  //Si la variable isError es verdadera, devuelve el color rojo, sino, el azul

  //-->

  //<!-- <input [(ngModel)]="userName">
  // <p>Hola, {{ userName }}</p>

  //Permite que el usuario pueda actualizar el valor de username cuando escriba en el cuuadro de texto.
  //Por lo que se debería implementar aparte Forms Module. En resumen sirve para enlazar datos con formularios.
  //-->



  //<!-- EJERCICIO 2 - Muestra o oculta un contenido con if-->
  mayorEdad: boolean = false;

  // EJERCICIO 3 - Mostrar elementos con for

  usuarios = [
    {
      nombre: "Juan",
      apellido: "García"
    },
    {
      nombre: "Mike",
      apellido: "Casas"
    },
    {
      nombre: "Mario",
      apellido: "Gómez"
    }
  ]

  // EJERCICIO 4 - Mostrar contenido con switch

  //EJERCICIO 5 - Mostrar contenido con ngclass, ngstyle y ngmodel

  estaMarcado: boolean = false;

  colorFondo: string = 'red';

  nombreAtributo: string = '';



  //EJERCICIO CLICKS

  escucharClick(numero: number) {
    console.log('Número de clics: ' + numero + 'clics');
  }



  title = 'primer-proyecto';



}
