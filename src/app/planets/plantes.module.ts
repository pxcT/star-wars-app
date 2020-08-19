import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// User-defined modules
import { PlanetsRoutingModule } from '@app-planets/planets-routing.module';
import { SharedModule } from '@app-shared/shared.module';


@NgModule({
    imports: [
        PlanetsRoutingModule,
        SharedModule
    ],
    exports: [],
    declarations: PlanetsRoutingModule.components,
    providers: [],
})
export class PlanetsModule { }
