import { Routes } from '@angular/router';
import { AppComponent } from './app.component';



export const routes: Routes = [
  {
    path: 'sign',
    component: AppComponent,
    // Cette ligne est importante - elle dit à Angular de ne pas réécrire l'URL
    runGuardsAndResolvers: 'always'
  },
  {
    path: 'pdf/:any', // Capture tous les chemins après pdf/
    redirectTo: 'pdf' // Redirige vers la route principale
  },
  {
    path: '**',
    redirectTo: 'pdf' // Redirige tout vers pdf au lieu de ''
  }
];