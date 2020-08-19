import { StoreState } from '@app-store/store-state.model';
import * as Vehicles from '@app-store/actions/vehicles.actions';
import { STORE_MODES_ENUM } from '@app-store/store-modes.enum';

export class VehiclesState extends StoreState {
    constructor() {
        super();
    }
}

export function vehiclesReducer(state = new VehiclesState(), action: Vehicles.ActionType) {
    switch (action.type) {
        case Vehicles.ITEMS_LOADED_SUCCESS: {
            const { payload } = action;
            const { count, next, previous, results } = payload;
            return {
                ...state,
                items: results,
                count,
                mode: STORE_MODES_ENUM.LOADED
            }
        }

        case Vehicles.SET_CURRENT_SUCCESS: {
            return {
                ...state
            }
        }

        case Vehicles.SET_CURRENT_FAILED: {
            return {
                ...state
            }
        }

        case Vehicles.ITEMS_LOADED_FAILED: {
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