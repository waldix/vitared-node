Ext.define( 'WWWOWWW.view.HomeList', {

    extend: 'Ext.dataview.DataView',

    xtype: 'homelist',

    config: {

        inline: {
            wrap: true
        },

        store     : 'LookStore',

        cls       : 'home',

        title     : 'WWWOWWW',

        padding: '12px 0 0 0',

        useComponents: true,

        defaultType: 'lookitem'
    }

} );