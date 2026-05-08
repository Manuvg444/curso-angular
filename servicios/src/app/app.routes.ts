import { Routes } from '@angular/router';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { DetalleComponent } from './pages/detalle/detalle.component';

export const routes: Routes = [
    { path: 'acercade', component: AcercadeComponent },
    { path: 'detalle/:id', component: DetalleComponent },
    { path: '', redirectTo: 'acercade', pathMatch: 'full' }
];
