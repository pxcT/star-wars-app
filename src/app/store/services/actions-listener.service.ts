import { Injectable } from '@angular/core';
import { Actions, ofType } from '@ngrx/effects';

//Rxjs
import { Subject, pipe } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export interface IActionsListenerParams {
	actions$: Actions;
	destroy$: Subject<boolean>;
}

export class ActionsListener implements IActionsListenerParams {
    actions$: Actions;
    destroy$: Subject<boolean>;

    constructor(actions$, destroy$) {
        this.actions$ = actions$;
        this.destroy$ = destroy$;
    }
}

/**
 * This service will not be added to the app-store.module because
 * we need a new instance for each time we listen for changes
 * Components use differents store states and also have different destroy time
 */
@Injectable()
export class ActionsListenerService {

	private actions$: Actions;
	private destroy$: Subject<boolean>;

	public buildParams(storeDataParams: ActionsListener): void {
		this.actions$ = storeDataParams.actions$;
		this.destroy$ = storeDataParams.destroy$;
	}

	public trackStoreAction(actionType: string, callback: Function, applyRxjsOperators = () => pipe.apply([])): void {
		this.actions$.pipe(
			ofType(actionType),
			takeUntil(this.destroy$),
			applyRxjsOperators()
		).subscribe((data) => {
			if (data) {
				callback(data);
			}
		});
	}
}
