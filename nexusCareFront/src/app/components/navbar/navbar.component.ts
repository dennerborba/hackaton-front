import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  scrollTo(entrada: string) {
    const element = document.getElementById(entrada)
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  }
}
