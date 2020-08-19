import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

// Services
import { ActionsListenerService, ActionsListener } from '@app-store/services/actions-listener.service';

// Models & Interfaces
import { ILoadedItems } from '@app-shared/models/loaded-items.interface';
import { Vehicle } from '@app-vehicles/models/vehicle.model';
import { StoreState } from '@app-store/store-state.model';

// Store
import { Store } from '@ngrx/store';
import * as Vehicles from '@app-store/actions/vehicles.actions';
import { Actions } from '@ngrx/effects';

// Configs
import { VEHICLES_TABLE_CONFIG } from '@app-vehicles/configs/vehicles-table.config';

@Component({
  selector: 'vehicles-dashboard',
  templateUrl: './vehicles-dashboard.component.html',
  styleUrls: ['./vehicles-dashboard.component.scss'],
  providers: [ActionsListenerService]
})
export class VehiclesDashboardComponent implements OnInit, OnDestroy {
    public config = JSON.parse(JSON.stringify(VEHICLES_TABLE_CONFIG));
    public data: ILoadedItems<Vehicle>;

    private destroy$ = new Subject<boolean>();

    constructor(private store$: Store<StoreState>, private actionsListenerService: ActionsListenerService, private actions$: Actions) { }

    ngOnInit(): void {
        this.prepareActionListenerService();
        this.store$.dispatch(new Vehicles.ItemsLoaded(1));
    }

    private prepareActionListenerService(): void {
        this.actionsListenerService.buildParams(new ActionsListener(this.actions$, this.destroy$));
        this.actionsListenerService.trackStoreAction(Vehicles.ITEMS_LOADED_SUCCESS, this.onItemsLoadedSucces.bind(this));
    }

    public onPageChange(e: PageEvent) {
        this.store$.dispatch(new Vehicles.ItemsLoaded(e.pageIndex + 1));
    }

    private onItemsLoadedSucces(storeAction: { type: string, payload: ILoadedItems<Vehicle> }) {
        const { payload } = storeAction;
        this.data = { ...payload };
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
