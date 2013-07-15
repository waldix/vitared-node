Ext.define( 'WWWOWWW.view.Main', {

    extend: 'Ext.navigation.View',

    xtype : 'main',

    requires: ['Ext.dataview.List', 'Ext.Label', 'Ext.tab.Bar'],

    config: {

        navigationBar: {

            cls: 'wwwowww-home',


            backButton: {
            }
        },

        items: [
            {
                title  : '',
                xtype  : 'home'
            }
        ]
    },

    initialize: function () {

        // Initialise the parents, if not called nothing may be rendered.
        this.callParent( arguments );

        var me = this;

        this.on({
            back: 'onBackPressed',
            activeitemchange: 'onBackPressed',
            push: 'onPushedView',
            scope: me
        });
    }
} );
