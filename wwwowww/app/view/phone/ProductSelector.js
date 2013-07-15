Ext.define('WWWOWWW.view.phone.ProductSelector', {

    extend: 'WWWOWWW.view.lookeditor.ProductSelector',

    xtype: 'phoneproductselector',

    config: {
        title: i18n.t('newLook.title'),
        usesToolBar: false,
        layout: 'hbox'
    },

    initialize: function () {
        // Initialise the parents, if not called nothing may be rendered.
        this.callParent( arguments );
    }
});