import { Routes } from '@angular/router';
import { TarjetaInicio } from './components/tarjeta-inicio/tarjeta-inicio';
import { Impostor } from './components/impostor/impostor';

export const routes: Routes = [
    {
        path: '',
        component: TarjetaInicio,
        title: 'Login - Tiara cumple'
    },
    {
        path: 'impostor',
        component: Impostor,
        title: '!Alerta! - Tiara cumple'
    },
    { 
        path: '**',
        redirectTo: '' 
    }
];
