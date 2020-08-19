import { NgModule } from '@angular/core';

// Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { PlanetsEffects, PeopleEffects, VehiclesEffects } from '@app-store/effects';
import { planetsReducer, peopleReducer, vehiclesReducer } from '@app-store/reducers';

@NgModule({
    imports: [
        StoreModule.forRoot({
            planets: planetsReducer,
            people: peopleReducer,
            vehicles: vehiclesReducer
        }, {
			runtimeChecks: {
				strictStateImmutability: false,
				strictActionImmutability: false
			}
        }),
        EffectsModule.forRoot([
            PlanetsEffects,
            PeopleEffects,
            VehiclesEffects
        ]),
		StoreDevtoolsModule.instrument({
			maxAge: 25 //  Retains last 25 states
		}),
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class AppStoreModule { }
