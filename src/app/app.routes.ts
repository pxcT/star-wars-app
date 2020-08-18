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
}];