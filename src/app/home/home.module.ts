import { NgModule } from '@angular/core';

// Components
import { MainDashboardComponent } from '@app-home/main-dashboard/main-dashboard.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule({
    imports: [HomeRoutingModule],
    exports: [],
    declarations: HomeRoutingModule.components,
    providers: [],
})
export class HomeModule { }
