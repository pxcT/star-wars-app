import { IVehicle } from '@app-vehicles/interfaces/vehicle.interface';

export class Vehicle implements IVehicle {
    name: string;
    model: string;
    manufacturer: string;
    cost_in_credits: string;
    length: string;
    max_atmosphering_speed: string;
    crew: string;
    passengers: string;
    cargo_capacity: string;
    consumables: string;
    vehicle_class: string;
    pilots: string[];
    films: string[];
    created: any;
    edited: any;
    url: string;

    constructor(vehicle: IVehicle) {
        this.name = vehicle.name;
        this.model = vehicle.model;
        this.manufacturer = vehicle.manufacturer;
        this.cost_in_credits = vehicle.cost_in_credits;
        this.length = vehicle.length;
        this.max_atmosphering_speed = vehicle.max_atmosphering_speed;
        this.crew = vehicle.crew;
        this.passengers = vehicle.passengers;
        this.cargo_capacity = vehicle.cargo_capacity;
        this.consumables = vehicle.consumables;
        this.vehicle_class = vehicle.vehicle_class;
        this.pilots = vehicle.pilots;
        this.films = vehicle.films;
        this.created = vehicle.created && new Date(vehicle.created);
        this.edited = vehicle.edited && new Date(vehicle.edited);
        this.url = vehicle.url;
    }
}