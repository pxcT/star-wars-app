import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { VehiclesDashboardComponent } from '@app-vehicles/features/vehicles-dashboard/vehicles-dashboard.component';

// Configs
import { VEHICLES_ROUTES } from '@app-vehicles/vehicles.routes';

@NgModule({
    imports: [RouterModule.forChild(VEHICLES_ROUTES)],
    exports: [RouterModule],
})
export class VehiclesRoutingModule { 
    static components = [VehiclesDashboardComponent]
}
