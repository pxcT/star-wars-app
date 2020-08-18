import { Injectable } from '@angular/core';
import {
    HttpHeaders,
    HttpClient,
    HttpResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

// Services
import { LoadingService } from '@app-core/services/loading.service';
import { map, catchError, finalize } from 'rxjs/operators';

const baseUrl = 'https://swapi.dev/api/';

@Injectable({ providedIn: 'root' })
export class ApiService {
    constructor(private http: HttpClient, private loadingService: LoadingService) { }

    public get(url: string): Observable<any> {
        return this.http.get(baseUrl + url, {
            headers: this.setHeaders()
        });
    }

    public getLoading(path: string, params?: any, headers?: any): Observable<any> {
        this.loadingService.showLoading();
        return this.http
            .get(`${baseUrl}${path}`, {
                headers: headers || this.setHeaders(),
                params,
            })
            .pipe(
                map((response: HttpResponse<any>) => response),
                catchError(error => {
                    return throwError(error);
                }),
                finalize(() => {
                    this.loadingService.hideLoading();
                })
            );
    }

    public setHeaders(language?: string, customHeders?: {}): HttpHeaders {
        let headers = new HttpHeaders({
            ...customHeders,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        });
        return headers;
    }
}
