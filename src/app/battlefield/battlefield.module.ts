import { NgModule } from '@angular/core';
import { BattlefieldRoutingModule } from '@app-battlefield/battlefield-routing.module';

@NgModule({
    imports: [BattlefieldRoutingModule],
    exports: [],
    declarations: BattlefieldRoutingModule.components,
    providers: [],
})
export class BattlefieldModule { }
