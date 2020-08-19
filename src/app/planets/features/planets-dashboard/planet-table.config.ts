import { IStwTableConfig } from '@app-shared/interfaces/stw-table-config.interface';

export const PLANET_TABLE_CONFIG: IStwTableConfig = {
    columns: [{
        columnDef: 'name',
        columnName: 'Name',
        key: 'name'
    }, {
        columnDef: 'rotation_period',
        columnName: 'Rotation Period',
        key: 'rotation_period'
    }, {
        columnDef: 'orbital_period',
        columnName: 'Orbital Period',
        key: 'orbital_period'
    }, {
        columnDef: 'diameter',
        columnName: 'Diameter',
        key: 'diameter'
    }],
    displayedColumns: ['name', 'rotation_period', 'orbital_period', 'diameter']
}