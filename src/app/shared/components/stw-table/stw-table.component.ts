import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { IStwTableConfig } from '@app-shared/interfaces/stw-table-config.interface';
import { MatTableDataSource } from '@angular/material/table';

@Component({
    selector: 'stw-table',
    templateUrl: './stw-table.component.html',
    styleUrls: ['./stw-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StwTableComponent {
    @Input() config: IStwTableConfig;
    @Input() displayedColumns: Array<string>;
    @Input() set data(newData) {
        this.dataSource.data = [...newData];
        this._data = [...newData];
    };

    @Output() pageChange = new EventEmitter<PageEvent>();

    public dataSource = new MatTableDataSource<any>([]);
    private _data = [];

    constructor() { }

    public onPageChange(e: PageEvent): void {
        this.pageChange.emit(e);
    }
}
