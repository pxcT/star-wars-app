import { NgModule } from '@angular/core';
import { PeopleRoutingModule } from '@app-people/people-routing.module';

@NgModule({
    imports: [PeopleRoutingModule],
    exports: [],
    declarations: PeopleRoutingModule.components,
    providers: [],
})
export class PeopleModule { }
