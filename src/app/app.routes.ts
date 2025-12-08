import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ModelosListComponent } from './features/modelos/modelos-list/modelos-list.component';
import { ModeloDetailComponent } from './features/modelos/modelo-detail/modelo-detail.component';
import { ContactoComponent } from './features/contacto/contacto.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'modelos', component: ModelosListComponent },
  { path: 'modelos/:nombreModelo', component: ModeloDetailComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '**', redirectTo: '/home' }
];
