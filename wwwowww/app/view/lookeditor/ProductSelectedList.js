Ext.define('WWWOWWW.view.lookeditor.ProductSelectedList', {

    extend: 'WWWOWWW.view.helper.HorizontalList',

    xtype: 'productselectedlist',

    config: {

        layout: {
            type: 'vbox',
            pack: 'center'
        },

        itemTpl: '<img src="{image.quarter}" class="wwwowww-product-selected-image"/>',

        height: 100,

        cls: 'wwwowww-product-selected-list',

        onItemDisclosure: true,

        iconMask: true,

        iconCls: 'info',

        scrollable: {
            direction: 'horizontal',
            slotSnapSize: {
                x: 80,
                y:0
            },
            inline: {
                wrap: true
            }
        }

    },

    initialize: function () {
        var me = this;

        me.callParent(arguments);

        me.setStore(WWWOWWW.model.NewLook.imports());
    }

});