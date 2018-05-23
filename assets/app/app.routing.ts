import { AuthenticationComponent } from './auth/authentication.component';
import { Routes, RouterModule } from '@angular/router';
import { MessagesComponent } from './message/messages.component';

const APP_ROUTES: Routes = [
    { path: '' , redirectTo: '/messages', pathMatch: 'full' },
    { path: 'messages' , component: MessagesComponent },
    { path: 'auth' , component: AuthenticationComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);