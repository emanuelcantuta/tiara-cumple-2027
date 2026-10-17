import { Routes } from '@angular/router';
import { TarjetaInicio } from '@components/tarjeta-inicio/tarjeta-inicio';
import { Impostor } from '@components/impostor/impostor';
import { Home } from '@components/home/home';
import { authGuard } from '@guards/auth';
import { Cortis } from '@components/cortis/cortis';
import { Personajes } from '@components/personajes/personajes';
import { MensajesPusheen } from '@components/mensajes-pusheen/mensajes-pusheen';
import { DestinationId } from '@components/home/models/destination';
import { Secreto } from '@components/secreto/secreto';

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
            { path: DestinationId.CORTIS, component: Cortis, title: 'Zona Cortis 🎸- Tiara cumple' },
            { path: DestinationId.PERSONAJES, component: Personajes, title: 'Personajes - Tiara cumple' },
            { path: DestinationId.PUSHEEN, component: MensajesPusheen, title: 'Mensajes Pusheen 😽 - Tiara cumple' },
            { path: DestinationId.SECRETO, component: Secreto, title: 'Regalo Sorpresa 🎁 - Tiara cumple' }
        ]
    },
    { 
        path: '**',
        redirectTo: '' 
    }
];
