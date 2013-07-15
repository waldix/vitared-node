Ext.define('WWWOWWW.model.NewLook', {

    /**
     * There is only one new look available.
     */
    singleton: true,

    extend: 'WWWOWWW.model.Look',
    
    config: {

        fields: [
            {
                name: 'synched',
                type: 'bool'
            }
        ],

        validations: [
            {
                type: 'presence',
                field: 'image'
            }
        ]
    },

    reset: function () {
        this.set('image', null);
        this.imports().removeAll();
    }
});