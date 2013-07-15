Ext.define('WWWOWWW.model.Image', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            {name: 'full', type: 'string'},
            {name: 'half', type: 'string'},
            {name: 'third', type: 'string'},
            {name: 'quarter', type: 'string'},
            {name: 'small', type: 'string'}
        ]
    }
});