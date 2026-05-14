import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule,],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  user: string = '';
  pass: string = '';

  private authService = inject(AuthService);
  private router = inject(Router);

  onSubmit() {
    this.authService.login(this.user, this.pass).subscribe({
      next: (esValido) => {
        console.log(esValido);
        if (esValido) {
          console.log('Login correcto');

          this.router.navigate(['/admin']);

        } else {
          alert('Usuario o contraseña no encontrados en el servidor');
        }
      },
      error: (err) => {
        console.error('Error de conexión', err);
        alert('No se pudo conectar con el servidor (¿Está encendido json-server?)');
      }
    });
  }
}
