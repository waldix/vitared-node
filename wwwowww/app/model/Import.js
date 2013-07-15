Ext.define('WWWOWWW.model.Import', {
    extend: 'WWWOWWW.model.Item',
    
    config: {
        fields: [
            {name: 'link', type: 'string'},
            {name: 'importerId', type: 'string'},
            {name: 'category', type: 'string'},
            {name: 'drawer', type: 'string'},
            {name: 'closet', type: 'string'},
            {name: 'buyable', type: 'bool'}
        ],
        validations: [
            {
                type: 'inclusion',
                field: 'category',
                list: ['top', 'accessory', 'bottom', 'other']
            }
        ]
    }
});