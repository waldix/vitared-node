Ext.define('WWWOWWW.model.AcceptedImport', {
    extend: 'Ext.data.Model',

    config: {
        fields: [{
            name: 'url',
            type: 'string'
        }, {
            name: 'src',
            type: 'string'
        }, {
            name: 'alt',
            type: 'string'
        }]
    }
});