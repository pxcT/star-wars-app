import { STORE_STATE_ELEMENTS } from '@app-store/store-state-elements.enum';
import { Action } from '@ngrx/store';

// Models & Interfaces
import { ILoadedItems } from '@app-shared/models/loaded-items.interface';
import { Vehicle } from '@app-vehicles/models/vehicle.model';

export const REDUCER = STORE_STATE_ELEMENTS.VEHICLES;

export const ITEMS_LOADED = '[VEHICLES] ITEMS_LOADED';
export const ITEMS_LOADED_SUCCESS = '[VEHICLES] ITEMS_LOADED_SUCCESS';
export const ITEMS_LOADED_FAILED = '[VEHICLES] ITEMS_LOADED_FAILED';

export const SET_CURRENT = '[VEHICLES] SET_CURRENT';
export const SET_CURRENT_SUCCESS = '[VEHICLES] SET_CURRENT_SUCCESS';
export const SET_CURRENT_FAILED = '[VEHICLES] SET_CURRENT_FAILED';


export class ItemsLoaded implements Action {
    readonly type = ITEMS_LOADED;
    constructor(public payload: any) { }
}

export class ItemsLoadedSuccess implements Action {
    readonly type = ITEMS_LOADED_SUCCESS;
    constructor(public payload: ILoadedItems<Vehicle>) { }
}

export class ItemsLoadedFailed implements Action {
    readonly type = ITEMS_LOADED_FAILED;
    constructor(public err) { }
}

export class SetCurrent implements Action {
    readonly type = SET_CURRENT;
    constructor(public payload: string) { }
}

export class SetCurrentSuccess implements Action {
    readonly type = SET_CURRENT_SUCCESS;
    constructor(public payload: Vehicle) { }
}

export class SetCurrentFailed implements Action {
    readonly type = SET_CURRENT_FAILED;
    constructor(public payload) {}
}


export type ActionType = ItemsLoaded |
    ItemsLoadedSuccess |
    ItemsLoadedFailed |
    SetCurrent |
    SetCurrentSuccess |
    SetCurrentFailed;

