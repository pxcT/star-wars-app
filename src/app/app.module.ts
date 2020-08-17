import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';

// User-created moduls
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { ContainerComponent } from '@app-layout/container/container.component';
import { TopbarComponent } from '@app-layout/topbar/topbar.component';
import { SidebarMenuComponent } from '@app-layout/sidebar-menu/sidebar-menu.component';

@NgModule({
    declarations: [
        AppComponent,
        ContainerComponent,
        TopbarComponent,
        SidebarMenuComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatSidenavModule,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
