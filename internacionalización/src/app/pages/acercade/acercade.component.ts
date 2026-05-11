import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { UserService } from '../../user.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterLink } from "@angular/router";
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-acercade',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterLink, TranslateModule],
  templateUrl: './acercade.component.html',
  styleUrl: './acercade.component.scss'
})
export class AcercadeComponent implements OnInit {

  private translate = inject(TranslateService);
  currentLang = signal(localStorage.getItem('lang') || 'es');


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




  constructor(private userService: UserService) {
    this.translate.addLangs(['es', 'en']);
    this.translate.setFallbackLang('es').subscribe();

    const savedLang = localStorage.getItem('lang') || 'es';
    this.currentLang.set(savedLang);
    this.translate.use(savedLang).subscribe();

  }

  changeLanguage(lang: string): void {
    this.currentLang.set(lang);
    this.translate.use(lang).subscribe(() => {
      localStorage.setItem('lang', lang);
    });
  }

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
