import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Service
import { ApiService } from '@app-core/services/api.service';

// Interfaces & Models
import { IPeople } from '@app-people/interfaces/people.interface';
import { ILoadedItems } from '@app-shared/models/loaded-items.interface';
import { People } from '@app-people/models/people.model';


const peopleUrl = 'people'
@Injectable({ providedIn: 'root' })
export class PeopleService {
    constructor(private apiService: ApiService) { }

    /**
     * https://swapi.dev/api/people/?page=pageNumber
     * @param pageNumber 
     */
    public getPeopleByPage(pageNumber): Observable<ILoadedItems<People>> {
        return this.apiService.getLoading(`${peopleUrl}/?page=${pageNumber}`).pipe(
            map((data) => {
                const parsedResults = data.results.map((people: IPeople) => new People(people));
                data.results = [...parsedResults];

                return data;
            }),
            catchError((err) => {
                console.log('error appeared', err);
                return throwError(err);
            })
        )
    }

    /**
     * https://swapi.dev/api/people/:id
     * @param id 
     */
    public getPeopleById(id): Observable<People> {
        return this.apiService.getLoading(`${peopleUrl}/${id}`).pipe(
            map((people: IPeople) => new People(people)),
            catchError((err) => throwError(err))
        );
    }
}