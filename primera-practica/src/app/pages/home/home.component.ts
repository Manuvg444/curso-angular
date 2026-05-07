import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from "../../components/title/title.component";
import { CardComponent } from '../../components/card/card.component';
import { FooterComponent } from "../../components/footer/footer.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TitleComponent, CardComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  titulo = 'Primera práctica'
}
