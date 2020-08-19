import { IStwTableConfig } from '@app-shared/interfaces/stw-table-config.interface';

export const PEOPLE_TABLE_CONFIG: IStwTableConfig = {
    columns: [{
        columnDef: 'name',
        columnName: 'Name',
        key: 'name'
    }, {
        columnDef: 'height',
        columnName: 'Height',
        key: 'height'
    }, {
        columnDef: 'mass',
        columnName: 'Mass',
        key: 'mass'
    }, {
        columnDef: 'hair_color',
        columnName: 'Hair Color',
        key: 'hair_color'
    }, {
        columnDef: 'skin_color',
        columnName: 'Skin Color',
        key: 'skin_color'
    }, {
        columnDef: 'eye_color',
        columnName: 'Eye Color',
        key: 'eye_color'
    }, {
        columnDef: 'birth_year',
        columnName: 'Birth Year',
        key: 'birth_year'
    }],
    displayedColumns: ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year']
}