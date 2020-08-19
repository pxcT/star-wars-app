import { Injectable } from "@angular/core";

// RxJS
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

// Store
import { Effect, ofType, Actions } from '@ngrx/effects';
import * as Planets from '@app-store/actions/planets.actions';

// Services
import { PlanetsService } from '@app-planets/planets.service';

@Injectable()
export class PlanetsEffects {
	@Effect()
	loadItems$ = this.actions$.pipe(
		ofType(Planets.ITEMS_LOADED),
		map((data: Planets.ItemsLoaded) => data.payload),
		mergeMap(pageNumber => {
			return this.planetsService.getPlanetsByPage(pageNumber)
				.pipe(
					map((res) => {
						return new Planets.ItemsLoadedSuccess(res);
					}),
					catchError((err) => {
						return of(new Planets.ItemsLoadedFailed(err));
					})
				);
		})
    );
    
    @Effect()
	getPlanet$ = this.actions$.pipe(
		ofType(Planets.SET_CURRENT),
		map((data: Planets.SetCurrent) => data.payload),
		mergeMap(id => {
			return this.planetsService.getPlanetById(id)
				.pipe(
					map((res) => {
						return new Planets.SetCurrentSuccess(res);
					}),
					catchError((err) => {
						return of(new Planets.SetCurrentFailed(err));
					})
				);
		})
	);

    constructor(
        private actions$: Actions,
        private planetsService: PlanetsService
    ) {}
}