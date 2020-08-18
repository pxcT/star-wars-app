import { IMenuItem } from '@app-layout/sidebar-menu/interfaces/menu-item.interface';
import { MAIN_APP_ROUTES } from 'app/app.routes';

export const STANDARD_MENU_CONFIG: IMenuItem[] = [{
    link: `${MAIN_APP_ROUTES.HOME}`,
    text: 'Home',
    icon: '',
    name: 'Home'
}, {
    link: `${MAIN_APP_ROUTES.PLANETS}`,
    text: 'Planets',
    icon: '',
    name: 'Planets'
}, {
    link: `${MAIN_APP_ROUTES.PEOPLE}`,
    text: 'People',
    icon: '',
    name: 'People'
}, {
    link: `${MAIN_APP_ROUTES.VEHICLES}`,
    text: 'Vehicles',
    icon: '',
    name: 'Vehicles'
}, {
    link: `${MAIN_APP_ROUTES.STARSHIPS}`,
    text: 'Starships',
    icon: '',
    name: 'Starships'
}, {
    link: `${MAIN_APP_ROUTES.BATTLEFIELD}`,
    text: 'Battlefield',
    icon: '',
    name: 'Battlefield'
}]