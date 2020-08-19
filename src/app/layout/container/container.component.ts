import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Configurations & enums
import { STW_AUTH_ROUTES } from './../../app.routes';
import { STANDARD_MENU_CONFIG } from '@app-layout/sidebar-menu/configs/standard-menu.configuration';

// Service
import { AuthService } from '@app-auth/services/auth.service';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss']
})

export class ContainerComponent implements OnInit {
    public opened = true;
    public isLoggedIn = false;

    // stw-sidebar-menu @Inputs()
    public menuConfiguration = STANDARD_MENU_CONFIG;

    constructor(private authService: AuthService) {  
        this.isLoggedIn = !!window.localStorage.getItem('userId');
    }

    ngOnInit() {  }
}
