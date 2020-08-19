export interface IStwTableConfig {
    columns: IStwColumnConfig[];
    displayedColumns: Array<string>;
}

export interface IStwColumnConfig {
    columnDef: string;
    columnName: string;
    key: string;
}