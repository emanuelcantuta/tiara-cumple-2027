import { Routes } from '@angular/router';
import { authGuard } from '@guards/auth';
import { secretGuard } from '@guards/secret';
import { TarjetaInicio } from '@components/tarjeta-inicio/tarjeta-inicio';
import { Impostor } from '@components/impostor/impostor';
import { Home } from '@components/home/home';
import { DestinationId } from '@components/home/models/destination';

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
            { 
                path: DestinationId.CORTIS, 
                loadComponent: () => import('@components/cortis/cortis').then(m => m.Cortis), 
                title: 'Zona Cortis 🎸- Tiara cumple' 
            },
            { 
                path: DestinationId.PERSONAJES, 
                loadComponent: () => import('@components/personajes/personajes').then(m => m.Personajes), 
                title: 'Personajes - Tiara cumple' 
            },
            { 
                path: DestinationId.PUSHEEN, 
                loadComponent: () => import('@components/mensajes-pusheen/mensajes-pusheen').then(m => m.MensajesPusheen), 
                title: 'Mensajes Pusheen 😽 - Tiara cumple' 
            },
            { 
                path: DestinationId.SECRETO, 
                loadComponent: () => import('@components/secreto/secreto').then(m => m.Secreto), 
                canActivate: [secretGuard], 
                title: 'Regalo Sorpresa 🎁 - Tiara cumple' 
            }
        ]
    },
    { 
        path: '**',
        redirectTo: '' 
    }
];
