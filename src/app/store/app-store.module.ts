import { NgModule } from '@angular/core';

// Store
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { PlanetsEffects } from '@app-store/effects';
import { planetsReducer } from '@app-store/reducers';

@NgModule({
    imports: [
        StoreModule.forRoot({
            planets: planetsReducer
        }, {
			runtimeChecks: {
				strictStateImmutability: false,
				strictActionImmutability: false
			}
        }),
        EffectsModule.forRoot([
            PlanetsEffects
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
