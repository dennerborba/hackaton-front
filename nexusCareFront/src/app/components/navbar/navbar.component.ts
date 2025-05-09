import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import {filter} from 'rxjs/operators'
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  
  mostrarMenu = false

  constructor(private router: Router) {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((event: any) => {
      this.mostrarMenu = event.urlAfterRedirects === '/'
    })
    
  }

  scrollTo(entrada: string) {
    const element = document.getElementById(entrada)
    if (element) {
      element.scrollIntoView({behavior: 'smooth'})
    }
  }
}
