import { Routes } from '@angular/router';
import { TarjetaInicio } from '@components/tarjeta-inicio/tarjeta-inicio';
import { Impostor } from '@components/impostor/impostor';
import { Home } from '@components/home/home';
import { authGuard } from '@guards/auth';
import { Cortis } from '@components/cortis/cortis';
import { Personajes } from '@components/personajes/personajes';

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
            { path: 'cortis', component: Cortis, title: 'Zona Cortis 🎸- Tiara cumple' },
            { path: 'personajes', component: Personajes, title: 'Personajes - Tiara cumple' }
        ]
    },
    { 
        path: '**',
        redirectTo: '' 
    }
];
