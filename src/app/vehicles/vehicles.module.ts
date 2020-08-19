import { NgModule } from '@angular/core';

// User-defined modules
import { SharedModule } from '@app-shared/shared.module';
import { VehiclesRoutingModule } from '@app-vehicles/vechicles-routing.module';

@NgModule({
    imports: [
        VehiclesRoutingModule,
        SharedModule
    ],
    exports: [],
    declarations: VehiclesRoutingModule.components,
    providers: [],
})
export class VehiclesModule { }
