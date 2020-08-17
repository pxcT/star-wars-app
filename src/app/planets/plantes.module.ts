import { NgModule } from '@angular/core';
import { PlanetsRoutingModule } from '@app-planets/planets-routing.module';

@NgModule({
    imports: [
        PlanetsRoutingModule
    ],
    exports: [],
    declarations: [...PlanetsRoutingModule.components],
    providers: [],
})
export class PlanetsModule { }
