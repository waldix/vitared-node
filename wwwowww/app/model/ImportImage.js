Ext.define('WWWOWWW.model.ImportImage', {
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
        }],
        proxy: {
            type: 'jsonp',
            reader: {
                type: 'json',
                rootProperty: 'images'
            }
        }
    }
});