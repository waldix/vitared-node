Ext.define('WWWOWWW.model.Look', {

    extend: 'WWWOWWW.model.Item',

    config: {
        hasMany: {
            model: 'WWWOWWW.model.Import',
            name: 'imports'
        }

    }
});