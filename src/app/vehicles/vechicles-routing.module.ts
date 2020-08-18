import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VehiclesDashboardComponent } from '@app-vehicles/vehicles-dashboard/vehicles-dashboard.component';
import { VEHICLES_ROUTES } from '@app-vehicles/vehicles.routes';

@NgModule({
    imports: [RouterModule.forChild(VEHICLES_ROUTES)],
    exports: [RouterModule],
})
export class VehiclesRoutingModule { 
    static components = [VehiclesDashboardComponent]
}
