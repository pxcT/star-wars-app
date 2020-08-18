import { IPlanet } from '@app-planets/interfaces/planet.interface';

export class Planet implements IPlanet {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: any;
    edited: any;
    url: string;

    constructor(planet: IPlanet) {
        this.name = planet.name;
        this.rotation_period = planet.rotation_period;
        this.diameter = planet.diameter;
        this.climate = planet.climate;
        this.gravity = planet.gravity;
        this.terrain = planet.terrain;
        this.surface_water = planet.surface_water;
        this.population = planet.population;
        this.residents = planet.residents;
        this.films = planet.films;
        this.created = planet.created && new Date(planet.created);
        this.edited = planet.edited && new Date(planet.edited);
        this.url = planet.url;
    }
}