import { StoreState } from '@app-store/store-state.model';
import * as People from '@app-store/actions/people.actions';
import { STORE_MODES_ENUM } from '@app-store/store-modes.enum';

export class PeopleState extends StoreState {
    constructor() {
        super();
    }
}

export function peopleReducer(state = new PeopleState(), action: People.ActionType) {
    switch (action.type) {
        case People.ITEMS_LOADED_SUCCESS: {
            const { payload } = action;
            const { count, next, previous, results } = payload;
            return {
                ...state,
                items: results,
                count,
                mode: STORE_MODES_ENUM.LOADED
            }
        }

        case People.SET_CURRENT_SUCCESS: {
            return {
                ...state
            }
        }

        case People.SET_CURRENT_FAILED: {
            return {
                ...state
            }
        }

        case People.ITEMS_LOADED_FAILED: {
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