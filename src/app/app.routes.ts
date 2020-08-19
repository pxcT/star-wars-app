import { AuthGuard } from '@app-auth/guards/auth.guard';
import { NoAuthGuard } from '@app-auth/guards/no-auth.guard';

export enum MAIN_APP_ROUTES {
    HOME = 'home',
    PLANETS = 'planets',
    PEOPLE = 'people',
    VEHICLES = 'vehicles',
    STARSHIPS = 'starships',
    BATTLEFIELD = 'battlefield'
}

export enum STW_AUTH_ROUTES {
    LOGIN = 'login'
}

export const APP_ROUTES_CONFIGURATION = [{
    path: '',
    redirectTo: MAIN_APP_ROUTES.HOME,
    pathMatch: 'full'
}, {
    path: MAIN_APP_ROUTES.HOME,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
    canLoad: [AuthGuard]    
}, {
    path: MAIN_APP_ROUTES.PLANETS,
    loadChildren: () => import('./planets/plantes.module').then(m => m.PlanetsModule),
    canLoad: [AuthGuard]
}, {
    path: MAIN_APP_ROUTES.BATTLEFIELD,
    loadChildren: () => import('./battlefield/battlefield.module').then(m => m.BattlefieldModule), 
    canLoad: [AuthGuard]
}, {
    path: MAIN_APP_ROUTES.PEOPLE,
    loadChildren: () => import('./people/people.module').then(m => m.PeopleModule),
    canLoad: [AuthGuard]
}, {
    path: MAIN_APP_ROUTES.VEHICLES,
    loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule),
    canLoad: [AuthGuard]
}, {
    path: MAIN_APP_ROUTES.STARSHIPS,
    loadChildren: () => import('./starships/starships.module').then(m => m.StarshipsModule),
    canLoad: [AuthGuard]
}, {
    path: STW_AUTH_ROUTES.LOGIN, 
    canLoad: [NoAuthGuard],
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
}];