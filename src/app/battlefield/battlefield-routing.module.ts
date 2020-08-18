import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

// Components
import { BattlefieldDashboardComponent } from '@app-battlefield/features/battlefield-dashboard/battlefield-dashboard.component';

// Configs
import { BATTLEFIELD_ROUTES } from '@app-battlefield/battlefield.routes';


@NgModule({
    imports: [RouterModule.forChild(BATTLEFIELD_ROUTES)],
    exports: [RouterModule],
})
export class BattlefieldRoutingModule { 
    static components = [BattlefieldDashboardComponent];
}
