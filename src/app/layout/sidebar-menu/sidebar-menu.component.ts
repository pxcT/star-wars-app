import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'stw-sidebar-menu',
    templateUrl: './sidebar-menu.component.html',
    styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {
    @Input() menuItems;

    constructor() { }

    ngOnInit(): void {
    }

}
