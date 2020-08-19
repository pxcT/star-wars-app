import { StoreState } from '@app-store/store-state.model';
import * as Planets from '@app-store/actions/planets.actions';
import { STORE_MODES_ENUM } from '@app-store/store-modes.enum';

export class PlanetsState extends StoreState {
    constructor() {
        super();
    }
}

export function planetsReducer(state = new PlanetsState(), action: Planets.ActionType) {
    switch (action.type) {
        case Planets.ITEMS_LOADED_SUCCESS: {
            const { payload } = action;
            const { count, next, previous, results } = payload;
            return {
                ...state,
                items: results,
                count,
                mode: STORE_MODES_ENUM.LOADED
            }
        }

        case Planets.SET_CURRENT_SUCCESS: {
            return {
                ...state
            }
        }

        case Planets.SET_CURRENT_FAILED: {
            return {
                ...state
            }
        }

        case Planets.ITEMS_LOADED_FAILED: {
            return {
                ...state
            }
        }

        default:
            return {
                ...state,
                mode: null
            }
    }
}