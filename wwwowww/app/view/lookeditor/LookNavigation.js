Ext.define('WWWOWWW.view.lookeditor.LookNavigation', {

    extend: 'Ext.navigation.View',

    xtype: 'looknavigation',

    mixins: {
        usesTabbar: 'WWWOWWW.view.helper.UsesTabbar'
    },

    config: {

        title: i18n.t('newLook.title'),

        usesTabbar: false,


        items: [{
            xtype: 'newlook'
        }],

        navigationBar: {
            backButton: {
                xtype: 'label',
                setText: Ext.emptyFn,
                hidden: true
            },
            height: 30
        }
    }
});