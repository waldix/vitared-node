Ext.define( 'WWWOWWW.view.Home', {

    extend: 'Ext.Container',

    xtype : 'home',

    config: {

        usesLogo: true,

        layout: 'fit',

        hideBackButton: true,

        items: [
            {
                xtype: 'homelist',
                id: 'HomeList'
            },
            {
                xtype: 'tabbar',

                cls: 'wwwowww-home-tabbar',

                docked: 'bottom',

                items: [{
                    title: i18n.t('home.closet'),
                    iconCls: 'closet_OFF',
                    tal: 'closetMainButton'
                }, {
                    title: i18n.t('home.import'),
                    iconCls: 'importer_ON',
                    tal: 'importMainButton'
                }, {
                    title: i18n.t('home.lookBook'),
                    iconCls: 'lookbook_ON',
                    tal: 'lookbookMainButton'
                }, {
                    title: i18n.t('home.newLook'),
                    iconCls: 'create_off',
                    tal: 'newlookMainButton'
                }]
            }
        ]

    }
} );