import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Constants
import { PLANETS_ROUTES } from '@app-planets/planets.routes';
import { PlanetsDashboardComponent } from '@app-planets/features/planets-dashboard/planets-dashboard.component';


@NgModule({
  imports: [RouterModule.forChild(PLANETS_ROUTES)],
  exports: [RouterModule]
})
export class PlanetsRoutingModule {
    static components = [PlanetsDashboardComponent];
 }
