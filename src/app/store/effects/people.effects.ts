import { Injectable } from "@angular/core";

// RxJS
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

// Store
import { Effect, ofType, Actions } from '@ngrx/effects';
import * as People from '@app-store/actions/people.actions';

// Services
import { PeopleService } from '@app-people/people.service';

@Injectable()
export class PeopleEffects {
	@Effect()
	loadItems$ = this.actions$.pipe(
		ofType(People.ITEMS_LOADED),
		map((data: People.ItemsLoaded) => data.payload),
		mergeMap(pageNumber => {
			return this.peopleService.getPeopleByPage(pageNumber)
				.pipe(
					map((res) => {
						return new People.ItemsLoadedSuccess(res);
					}),
					catchError((err) => {
						return of(new People.ItemsLoadedFailed(err));
					})
				);
		})
    );
    
    @Effect()
	getPlanet$ = this.actions$.pipe(
		ofType(People.SET_CURRENT),
		map((data: People.SetCurrent) => data.payload),
		mergeMap(id => {
			return this.peopleService.getPeopleById(id)
				.pipe(
					map((res) => {
						return new People.SetCurrentSuccess(res);
					}),
					catchError((err) => {
						return of(new People.SetCurrentFailed(err));
					})
				);
		})
	);

    constructor(
        private actions$: Actions,
        private peopleService: PeopleService
    ) {}
}