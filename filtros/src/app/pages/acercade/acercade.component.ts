import { Component, OnInit, signal, computed } from '@angular/core';
import { UserService } from '../../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-acercade',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterLink],
  templateUrl: './acercade.component.html',
  styleUrl: './acercade.component.scss'
})
export class AcercadeComponent implements OnInit {

  usuariosOriginales = signal<any>([]);
  nombreBusqueda = signal('');
  ciudadBusqueda = signal('');

  usuariosFiltrados = computed(() => {
    const lista = this.usuariosOriginales();
    const nombre = this.nombreBusqueda().toLowerCase().trim();
    const ciudad = this.ciudadBusqueda();

    return lista.filter((u: any) => {

      const coincideNombre = u.name.toLowerCase().includes(nombre);
      const coincideCiudad = ciudad === '' || u.address?.city === ciudad;

      return coincideNombre && coincideCiudad;
    });

  });

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(datos => {
      this.usuariosOriginales.set(datos);
    });
  }


  limpiarFiltros() {
    this.nombreBusqueda.set('');
    this.ciudadBusqueda.set('');

  }



}
