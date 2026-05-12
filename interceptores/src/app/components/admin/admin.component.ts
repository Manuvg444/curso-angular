import { Component, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin',
  imports: [],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss'
})
export class AdminComponent {
  http = inject(HttpClient);

  probarApi() {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe();
  }

  probarError() {
    this.http.get('https://jsonplaceholder.typicode.com/error-forzado').subscribe();
  }
}

