import { IOptionColumn } from '@app-layout/sidebar-menu/interfaces/option-column.interface';
import { MAIN_APP_ROUTES } from 'app/app.routes';

export const STANDARD_MENU_CONFIG: IOptionColumn[] = [{
    name: 'Planets',
    icon: '',
    isActive: false,
    route: MAIN_APP_ROUTES.PLANETS
}, {
    name: 'People',
    icon: '',
    isActive: false,
    route: MAIN_APP_ROUTES.PEOPLE
}, {
    name: 'Vehicles',
    icon: '',
    isActive: false,
    route: MAIN_APP_ROUTES.VEHICLES
}, {
    name: 'Starships',
    icon: '',
    isActive: false,
    route: MAIN_APP_ROUTES.STARSHIPS
}, {
    name: 'Battlefield',
    icon: '',
    isActive: false,
    route: MAIN_APP_ROUTES.BATTLEFIELD
}]