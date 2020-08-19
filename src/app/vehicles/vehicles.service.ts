import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

// Service
import { ApiService } from '@app-core/services/api.service';

// Interfaces & Models
import { IVehicle } from '@app-vehicles/interfaces/vehicle.interface';
import { ILoadedItems } from '@app-shared/models/loaded-items.interface';
import { Vehicle } from '@app-vehicles/models/vehicle.model';


const vehiclesUrl = 'vehicles'
@Injectable({ providedIn: 'root' })
export class VehiclesService {
    constructor(private apiService: ApiService) { }

    /**
     * https://swapi.dev/api/vehicles/?page=pageNumber
     * @param pageNumber 
     */
    public getVehicleByPage(pageNumber): Observable<ILoadedItems<Vehicle>> {
        return this.apiService.getLoading(`${vehiclesUrl}/?page=${pageNumber}`).pipe(
            map((data) => {
                const parsedResults = data.results.map((vehicle: IVehicle) => new Vehicle(vehicle));
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
     * https://swapi.dev/api/vehicle/:id
     * @param id 
     */
    public getVehicleById(id): Observable<Vehicle> {
        return this.apiService.getLoading(`${vehiclesUrl}/${id}`).pipe(
            map((vehicle: IVehicle) => new Vehicle(vehicle)),
            catchError((err) => throwError(err))
        );
    }
}