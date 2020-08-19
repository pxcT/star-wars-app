import { Injectable } from "@angular/core";

// RxJS
import { map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

// Store
import { Effect, ofType, Actions } from '@ngrx/effects';
import * as Vehicles from '@app-store/actions/vehicles.actions';

// Services
import { VehiclesService } from '@app-vehicles/vehicles.service';

@Injectable()
export class VehiclesEffects {
	@Effect()
	loadItems$ = this.actions$.pipe(
		ofType(Vehicles.ITEMS_LOADED),
		map((data: Vehicles.ItemsLoaded) => data.payload),
		mergeMap(pageNumber => {
			return this.vehiclesService.getVehicleByPage(pageNumber)
				.pipe(
					map((res) => {
						return new Vehicles.ItemsLoadedSuccess(res);
					}),
					catchError((err) => {
						return of(new Vehicles.ItemsLoadedFailed(err));
					})
				);
		})
    );
    
    @Effect()
	getPlanet$ = this.actions$.pipe(
		ofType(Vehicles.SET_CURRENT),
		map((data: Vehicles.SetCurrent) => data.payload),
		mergeMap(id => {
			return this.vehiclesService.getVehicleById(id)
				.pipe(
					map((res) => {
						return new Vehicles.SetCurrentSuccess(res);
					}),
					catchError((err) => {
						return of(new Vehicles.SetCurrentFailed(err));
					})
				);
		})
	);

    constructor(
        private actions$: Actions,
        private vehiclesService: VehiclesService
    ) {}
}