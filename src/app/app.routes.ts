export const APP_ROUTES = [{
    path: 'planets',
    loadChildren: () => import('./planets/plantes.module').then(m => m.PlanetsModule),
}];
