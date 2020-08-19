import { NgModule } from '@angular/core';

// User-defined modules
import { PeopleRoutingModule } from '@app-people/people-routing.module';
import { SharedModule } from '@app-shared/shared.module';

@NgModule({
    imports: [
        PeopleRoutingModule,
        SharedModule
    ],
    exports: [],
    declarations: PeopleRoutingModule.components,
    providers: [],
})
export class PeopleModule { }
