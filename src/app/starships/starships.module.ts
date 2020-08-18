import { NgModule } from '@angular/core';
import { StarshipsRoutingModule } from '@app-starships/starships-routing.module';

@NgModule({
    imports: [StarshipsRoutingModule],
    exports: [],
    declarations: StarshipsRoutingModule.components,
    providers: [],
})
export class StarshipsModule { }
