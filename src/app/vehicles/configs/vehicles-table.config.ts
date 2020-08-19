import { IStwTableConfig } from '@app-shared/interfaces/stw-table-config.interface';

export const VEHICLES_TABLE_CONFIG: IStwTableConfig = {
    columns: [{
        columnDef: 'name',
        columnName: 'Name',
        key: 'name'
    }, {
        columnDef: 'model',
        columnName: 'Model',
        key: 'model'
    }, {
        columnDef: 'manufacturer',
        columnName: 'Manufacturer',
        key: 'manufacturer'
    }, {
        columnDef: 'cost_in_credits',
        columnName: 'Hair Color',
        key: 'cost_in_credits'
    }, {
        columnDef: 'length',
        columnName: 'Length',
        key: 'length'
    }, {
        columnDef: 'max_atmosphering_speed',
        columnName: 'Max atmosphering Speed',
        key: 'max_atmosphering_speed'
    }, {
        columnDef: 'crew',
        columnName: 'Crew',
        key: 'crew'
    }],
    displayedColumns: ['name', 'model', 'manufacturer', 'cost_in_credits', 'length', 'max_atmosphering_speed', 'crew']
}