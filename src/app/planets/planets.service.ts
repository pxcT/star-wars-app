import { IPlanet } from '@app-planets/interfaces/planet.interface';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Services
import { ApiService } from '@app-core/services/api.service';

// Models & Interfaces
import { ILoadedItems } from '@app-shared/models/loaded-items.interface';
import { Planet } from '@app-planets/models/planet.model';

const planetsUrl = 'planets'

@Injectable({ providedIn: 'root' })
export class PlanetsService {
    constructor(private apiService: ApiService) { }


    /**
     * https://swapi.dev/api/planets/?page=pageNumber
     * @param pageNumber 
     */
    public getPlanetsByPage(pageNumber): Observable<ILoadedItems<Planet>> {
        return this.apiService.getLoading(`${planetsUrl}/?page=${pageNumber}`).pipe(
            map((data) => {
                const parsedResults = data.results.map((planet: IPlanet) => new Planet(planet));
                data.results = {...parsedResults};

                return data;
            }),
            catchError((err) => {
                console.log('error appeared', err);
                return throwError(err);
            })
        )
    }

    /**
     * https://swapi.dev/api/planets/:id
     * @param id 
     */
    public getPlanetById(id): Observable<Planet> {
        return this.apiService.getLoading(`${planetsUrl}/${id}`).pipe(
            map((planet: IPlanet) => new Planet(planet)),
            catchError((err) => throwError(err))
        );
    }
}