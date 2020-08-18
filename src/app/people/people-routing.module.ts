import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PeopleDashboardComponent } from '@app-people/features/people-dashboard/people-dashboard.component';
import { PEOPLE_ROUTES } from '@app-people/people.routes';
@NgModule({
    imports: [RouterModule.forChild(PEOPLE_ROUTES)],
    exports: [RouterModule]
})
export class PeopleRoutingModule { 
    static components = [PeopleDashboardComponent];
}
