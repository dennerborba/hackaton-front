import { Component } from '@angular/core';

@Component({
  selector: 'app-relatorio',
  standalone: true,
  imports: [],
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.css']
})
export class RelatorioComponent {

  toggleDropdown(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.classList.toggle('hidden');
    }
  }

  selecionar(nome: string): void {
    alert(`Selecionado: ${nome}`);
  }

}
