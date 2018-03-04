import {RouterModule, Routes} from "@angular/router";
import {MessageComponents} from "./message/message.components";
import {AuthenticationComponent} from "./auth/authentication.component";
import {AUTH_ROUTES} from "./auth/auth-routes";

const APP_ROUTES: Routes = [
    {
        path: 'messages',
        component: MessageComponents
    },{
        path: '',
        redirectTo: '/messages',
        pathMatch: 'full'
    },{
        path: 'auth',
        component: AuthenticationComponent,
        children: AUTH_ROUTES
    },
];

export const routing = RouterModule.forRoot(APP_ROUTES);