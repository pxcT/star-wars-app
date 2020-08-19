import { NgModule } from '@angular/core';

// Components
import { StwTableComponent } from '@app-shared/components/stw-table/stw-table.component';

// Material
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        MatTableModule,
        MatPaginatorModule,
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        StwTableComponent,
        MatButtonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [StwTableComponent],
    providers: [],
})
export class SharedModule { }
