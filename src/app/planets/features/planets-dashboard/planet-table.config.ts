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
    }, {
        columnDef: 'climate',
        columnName: 'Climate',
        key: 'climate'
    }, {
        columnDef: 'gravity',
        columnName: 'Gravity',
        key: 'gravity'
    }, {
        columnDef: 'terrain',
        columnName: 'Terrain',
        key: 'terrain'
    }],
    displayedColumns: ['name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity', 'terrain']
}