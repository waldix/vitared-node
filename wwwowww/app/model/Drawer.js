Ext.define('WWWOWWW.model.Drawer', {
    extend: 'Ext.data.Model',
    
    config: {
        fields: [
            {
                name: 'name',
                type: 'string'
            },
            {
                name: 'coverImage',
                type: 'auto'
            }
        ],
        hasMany: {
            model: 'WWWOWWW.model.Import',
            name: 'imports'
        },
        idProperty: 'name'
    }
});