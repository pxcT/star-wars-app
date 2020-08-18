import { PlanetsService } from '@app-planets/planets.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'planets-dashboard',
    templateUrl: './planets-dashboard.component.html',
    styleUrls: ['./planets-dashboard.component.scss']
})
export class PlanetsDashboardComponent implements OnInit {

    constructor(private planetsService: PlanetsService) { }

    ngOnInit(): void {
    }

}
