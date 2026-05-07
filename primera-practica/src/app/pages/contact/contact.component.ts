import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { ReactiveFormsModule, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FooterComponent, ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  perfilForm = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    mensaje: new FormControl('')
  });

  enviarFormulario() {
    console.log(this.perfilForm.value);
    alert('Formulario enviado');
  }



}
