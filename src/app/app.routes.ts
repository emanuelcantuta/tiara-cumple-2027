import { Routes } from '@angular/router';
import { TarjetaInicio } from './components/tarjeta-inicio/tarjeta-inicio';

export const routes: Routes = [
    {
        path: '',
        component: TarjetaInicio
    },
    { 
        path: '**',
         redirectTo: '' 
    }
];
