import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subject } from 'rxjs';

// Store
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';
import { StoreState } from '@app-store/store-state.model';

import * as Planets from '@app-store/actions/planets.actions';

// Configs
import { PLANET_TABLE_CONFIG } from '@app-planets/features/planets-dashboard/planet-table.config';

// Services
import { ActionsListenerService, ActionsListener } from '@app-core/services/actions-listener.service';

// Models
import { Planet } from '@app-planets/models/planet.model';
import { ILoadedItems } from '@app-shared/models/loaded-items.interface';

@Component({
    selector: 'planets-dashboard',
    templateUrl: './planets-dashboard.component.html',
    styleUrls: ['./planets-dashboard.component.scss']
})
export class PlanetsDashboardComponent implements OnInit {
    public config = JSON.parse(JSON.stringify(PLANET_TABLE_CONFIG));
    public data: Array<Planet> = [];

    private destroy$ = new Subject<boolean>();

    constructor(private store$: Store<StoreState>, private actionsListenerService: ActionsListenerService, private actions$: Actions) { }

    ngOnInit(): void {
        this.prepareActionListenerService();
        this.store$.dispatch(new Planets.ItemsLoaded(1));
    }

    private prepareActionListenerService(): void {
        this.actionsListenerService.buildParams(new ActionsListener(this.actions$, this.destroy$));
        this.actionsListenerService.trackStoreAction(Planets.ITEMS_LOADED_SUCCESS, this.onItemsLoadedSucces.bind(this));
    }

    public onPageChange(e: PageEvent) {
        this.store$.dispatch(new Planets.ItemsLoaded(e.pageIndex + 1));
    }

    private onItemsLoadedSucces(storeAction: { type: string, payload: ILoadedItems<Planet> }) {
        const { payload } = storeAction;
        this.data = [...payload.results];
    }

}
