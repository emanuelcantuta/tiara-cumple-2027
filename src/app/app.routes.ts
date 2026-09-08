import { Routes } from '@angular/router';
import { TarjetaInicio } from './components/tarjeta-inicio/tarjeta-inicio';
import { Impostor } from './components/impostor/impostor';
import { Home } from './components/home/home';
import { authGuard } from './guards/auth';

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
        path: 'regalo', 
        canActivate: [authGuard],
        children: [
            { path: '', component: Home, title: 'Tu Regalo - Tiara cumple' },
            // ACA IRÁN LOS FUTUROS COMPONENTES
        ]
    },
    { 
        path: '**',
        redirectTo: '' 
    }
];
