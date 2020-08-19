import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

// Store
import * as PeopleActions from '@app-store/actions/people.actions';
import { Store } from '@ngrx/store';
import { Actions } from '@ngrx/effects';

// Models & interfaces
import { People } from '@app-people/models/people.model';
import { StoreState } from '@app-store/store-state.model';
import { ILoadedItems } from '@app-shared/models/loaded-items.interface';

// Services
import { ActionsListenerService, ActionsListener } from '@app-store/services/actions-listener.service';

// Configs
import { PEOPLE_TABLE_CONFIG } from '@app-people/configs/people-table.config';

@Component({
    selector: 'people-dashboard',
    templateUrl: './people-dashboard.component.html',
    styleUrls: ['./people-dashboard.component.scss'],
    providers: [ActionsListenerService]
})
export class PeopleDashboardComponent implements OnInit {
    public config = JSON.parse(JSON.stringify(PEOPLE_TABLE_CONFIG));
    public data: ILoadedItems<People>;

    private destroy$ = new Subject<boolean>();

    constructor(private store$: Store<StoreState>, private actionsListenerService: ActionsListenerService, private actions$: Actions) { }

    ngOnInit(): void {
        this.prepareActionListenerService();
        this.store$.dispatch(new PeopleActions.ItemsLoaded(1));
    }

    private prepareActionListenerService(): void {
        this.actionsListenerService.buildParams(new ActionsListener(this.actions$, this.destroy$));
        this.actionsListenerService.trackStoreAction(PeopleActions.ITEMS_LOADED_SUCCESS, this.onItemsLoadedSucces.bind(this));
    }

    public onPageChange(e: PageEvent) {
        this.store$.dispatch(new PeopleActions.ItemsLoaded(e.pageIndex + 1));
    }

    private onItemsLoadedSucces(storeAction: { type: string, payload: ILoadedItems<People> }) {
        const { payload } = storeAction;
        this.data = { ...payload };
    }

}
