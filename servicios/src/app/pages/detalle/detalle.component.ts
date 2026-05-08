import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { UserService } from '../../user.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-detalle',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './detalle.component.html',
  styleUrl: './detalle.component.scss'
})
export class DetalleComponent implements OnInit {

  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.userService.getUserById(+id).subscribe(datos => {
        this.user = datos;
      });

      console.log('Datos del usuario: ', this.user);
    }
  }

}
