import { Component, OnInit } from '@angular/core';
import { SobreComponent } from '../sobre/sobre.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SobreComponent,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  constructor(private router: Router) {
  }


  navegarParaIA() {
    this.router.navigate(['/relatorio']).then(() => {
      window.scrollTo(0, 0);
    })
  }
}
