import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { StarshipsDashboardComponent } from '@app-starships/starships-dashboard/starships-dashboard.component';
import { STARSHIPS_ROUTES } from '@app-starships/starships.routes';

@NgModule({
    imports: [RouterModule.forChild(STARSHIPS_ROUTES)],
    exports: [RouterModule],
})
export class StarshipsRoutingModule { 
    static components = [StarshipsDashboardComponent]
}
