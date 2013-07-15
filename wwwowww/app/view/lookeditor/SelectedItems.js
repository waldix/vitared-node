Ext.define( 'WWWOWWW.view.lookeditor.SelectedItems', {

//    extend: 'Ext.List',
    extend: 'WWWOWWW.view.helper.HorizontalList',

    xtype: 'selecteditems',

    config: {

        height: 106,

        //set the itemtpl to show the fields for the store
        itemTpl: '<img src="{image.third}" style="margin: 2px;" alt="{description}">'
    },

    initialize: function () {

        this.callParent(arguments);

        // load the imports as this views store
        this.setStore(WWWOWWW.model.NewLook.imports());
    }

} );