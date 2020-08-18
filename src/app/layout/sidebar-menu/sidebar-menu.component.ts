import { Component, OnInit, Input } from '@angular/core';

// Interfaces
import { IMenuItem } from '@app-layout/sidebar-menu/interfaces/menu-item.interface';
@Component({
    selector: 'stw-sidebar-menu',
    templateUrl: './sidebar-menu.component.html',
    styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
    @Input() menuConfiguration: IMenuItem[];

    constructor() { }

    ngOnInit(): void {
       
    }

}
