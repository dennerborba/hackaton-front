import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RelatorioComponent } from './pages/relatorio/relatorio.component';
import { SobreComponent } from './pages/sobre/sobre.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'relatorio',
    component: RelatorioComponent
  },
  {
    path: 'about',
    component: SobreComponent
  }
];
