/**
 * Used for SWAPI requests
 * (when making a request for multiple entities, like 'https://swapi.dev/api/planets/?page=5', the 
 * request always comes, for all entities, in the same manner)
 */
export interface ILoadedItems<T> {
    count: number;
    next: string;
    previous: string;
    results: Array<T>
}