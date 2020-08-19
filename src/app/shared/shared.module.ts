import { NgModule } from '@angular/core';

// Components
import { StwTableComponent } from '@app-shared/components/stw-table/stw-table.component';

// Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        MatTableModule,
        MatPaginatorModule,
        CommonModule
    ],
    exports: [
        StwTableComponent
    ],
    declarations: [StwTableComponent],
    providers: [],
})
export class SharedModule { }
