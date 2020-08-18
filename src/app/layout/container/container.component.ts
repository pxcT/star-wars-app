import { Component, OnInit } from '@angular/core';

// Configurations
import { STANDARD_MENU_CONFIG } from '@app-layout/sidebar-menu/configs/standard-menu.configuration';

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.scss']
})

export class ContainerComponent implements OnInit {
    public opened = true;

    // stw-sidebar-menu @Inputs()
    public menuConfiguration = STANDARD_MENU_CONFIG;

    constructor() { }

    ngOnInit() { }
}
