import { NgModule } from '@angular/core';

// User-defined modules
import { PlanetsRoutingModule } from '@app-planets/planets-routing.module';

// Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
@NgModule({
    imports: [
        PlanetsRoutingModule,
        MatTableModule,
        MatPaginatorModule
    ],
    exports: [],
    declarations: PlanetsRoutingModule.components,
    providers: [],
})
export class PlanetsModule { }
