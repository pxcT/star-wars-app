import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class AuthService {
    
    constructor() { }

    public isLoogedIn(): boolean {
        const id = window.localStorage.getItem('userId');
        return id ? true: false;
    }
}