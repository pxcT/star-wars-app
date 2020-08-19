import { STORE_STATE_ELEMENTS } from '@app-store/store-state-elements.enum';
import { Action } from '@ngrx/store';

// Models & Interfaces
import { ILoadedItems } from '@app-shared/models/loaded-items.interface';
import { People } from '@app-people/models/people.model';

export const REDUCER = STORE_STATE_ELEMENTS.PEOPLE;

export const ITEMS_LOADED = '[PEOPLE] ITEMS_LOADED';
export const ITEMS_LOADED_SUCCESS = '[PEOPLE] ITEMS_LOADED_SUCCESS';
export const ITEMS_LOADED_FAILED = '[PEOPLE] ITEMS_LOADED_FAILED';

export const SET_CURRENT = '[PEOPLE] SET_CURRENT';
export const SET_CURRENT_SUCCESS = '[PEOPLE] SET_CURRENT_SUCCESS';
export const SET_CURRENT_FAILED = '[PEOPLE] SET_CURRENT_FAILED';


export class ItemsLoaded implements Action {
    readonly type = ITEMS_LOADED;
    constructor(public payload: any) { }
}

export class ItemsLoadedSuccess implements Action {
    readonly type = ITEMS_LOADED_SUCCESS;
    constructor(public payload: ILoadedItems<People>) { }
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
    constructor(public payload: People) { }
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

