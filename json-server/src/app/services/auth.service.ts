import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private http = inject(HttpClient);
  private url = 'http://localhost:4000/usuarios';

  login(user: string, pass: string): Observable<boolean> {
    console.log(pass.trim());
    return this.http.get<any[]>(`${this.url}?username=${user.trim()}&password=${pass.trim()}`).pipe(
      map(usuarios => {
        console.log(usuarios.length);
        if (usuarios.length > 0) {
          localStorage.setItem('token', usuarios[0].token);
          return true;
        }
        return false;
      })
    );
  }

  estaLogueado(): boolean {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
  }
}
