import { Component, OnInit, ViewChild } from '@angular/core';

// Store
import { StoreState } from '@app-store/store-state.model';
import { Store } from '@ngrx/store';
import { PlanetsService } from '@app-planets/planets.service';
import { MatTableDataSource } from '@angular/material/table';
import { Planet } from '@app-planets/models/planet.model';
import { MatPaginator, PageEvent } from '@angular/material/paginator';


@Component({
    selector: 'planets-dashboard',
    templateUrl: './planets-dashboard.component.html',
    styleUrls: ['./planets-dashboard.component.scss']
})
export class PlanetsDashboardComponent implements OnInit {

    private data = [];
    public dataSource = new MatTableDataSource<Planet>(this.data);

    @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
    displayedColumns: string[] = ['name', 'rotation_period', 'orbital_period', 'diameter'];

    constructor(private store$: Store<StoreState>, private planetsService: PlanetsService) { }

    ngOnInit(): void {
        this.planetsService.getPlanetsByPage(1).subscribe((data) => {
            const myData = Object.keys(data.results).map(key => {
                return data.results[key];
            })
            this.data = [...myData];
            this.dataSource.data = this.data;
        })
    }

    public changePage(e: PageEvent) {
        this.planetsService.getPlanetsByPage(e.pageIndex + 1).subscribe((data) => {
            const myData = Object.keys(data.results).map(key => {
                return data.results[key];
            })
            this.data = [...myData];
            this.dataSource.data = this.data;
        })
    }

}
