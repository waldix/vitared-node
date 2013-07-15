Ext.define('WWWOWWW.model.Item', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {name: 'description', type: 'string'},
            {name: 'wows', type: 'int'},
            {name: 'adds', type: 'int'},
            {name: 'type', type: 'string'},
            {name: 'image', type: 'auto'},
            {name: 'link', type: 'string'},
            {name: 'author', type: 'string'}
        ]
    }
});