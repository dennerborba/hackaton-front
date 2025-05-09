import { Component } from '@angular/core';
import { SobreComponent } from '../sobre/sobre.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SobreComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
