import { Component, OnInit, signal, computed } from '@angular/core';
import { UserService } from '../../user.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-acercade',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './acercade.component.html',
  styleUrl: './acercade.component.scss'
})
export class AcercadeComponent implements OnInit {


  listaUsuarios: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(datos => {
      this.listaUsuarios = datos;

    });
  }

}
