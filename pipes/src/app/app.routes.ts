import { Routes } from '@angular/router';
import { PipesDemoComponent } from './components/pipes-demo/pipes-demo.component';

export const routes: Routes = [
    {
        path: 'pipes',
        component:
            PipesDemoComponent
    },
    {
        path: '',
        redirectTo: 'pipes',
        pathMatch: 'full'
    }
];
