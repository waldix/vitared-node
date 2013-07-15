Ext.define( 'WWWOWWW.view.lookbook.LookBookList', {

    extend: 'Ext.dataview.DataView',

    mixins: {
        usesTabbar: 'WWWOWWW.view.helper.UsesTabbar'
    },

    xtype: 'lookbooklist',

    config: {

        title: i18n.t('lookbook.title'),

        usesTabbar: true,

        id: 'LookBookList',

        useComponents: true,

        defaultType: 'lookitem',

        store: 'LookBookStore',

        emptyText: i18n.t('list.empty'),

        inline: {
            wrap: false
        }

    }

} );