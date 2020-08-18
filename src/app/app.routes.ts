export enum MAIN_APP_ROUTES {
    HOME = 'home',
    PLANETS = 'planets',
    PEOPLE = 'people',
    VEHICLES = 'vehicles',
    STARSHIPS = 'starships',
    BATTLEFIELD = 'battlefield'
}

export const APP_ROUTES_CONFIGURATION = [{
    path: '',
    redirectTo: MAIN_APP_ROUTES.HOME,
    pathMatch: 'full'
}, {
    path: MAIN_APP_ROUTES.HOME,
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
}, {
    path: MAIN_APP_ROUTES.PLANETS,
    loadChildren: () => import('./planets/plantes.module').then(m => m.PlanetsModule),
}, {
    path: MAIN_APP_ROUTES.BATTLEFIELD,
    loadChildren: () => import('./battlefield/battlefield.module').then(m => m.BattlefieldModule), 
}, {
    path: MAIN_APP_ROUTES.PEOPLE,
    loadChildren: () => import('./people/people.module').then(m => m.PeopleModule),
}, {
    path: MAIN_APP_ROUTES.VEHICLES,
    loadChildren: () => import('./vehicles/vehicles.module').then(m => m.VehiclesModule),
}, {
    path: MAIN_APP_ROUTES.STARSHIPS,
    loadChildren: () => import('./starships/starships.module').then(m => m.StarshipsModule),
}];