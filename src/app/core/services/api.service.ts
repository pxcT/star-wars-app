import { Injectable } from '@angular/core';
import {
    HttpHeaders,
    HttpClient,
    HttpResponse,
} from '@angular/common/http';

const baseUrl = 'https://swapi.dev/api/';

@Injectable({ providedIn: 'root' })
export class ApiService {
    constructor(private http: HttpClient) { }

}
