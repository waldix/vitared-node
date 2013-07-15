Ext.define( 'WWWOWWW.view.lookeditor.ProductSelectorList', {

    extend: 'Ext.List',

    xtype: 'productselectorlist',

    config: {

        itemTpl: '<img width="78" height="104" src="{image.third}" alt="{description}">',

        cls: 'wwwowww-product-selector-list',

        itemCls: 'wwwowww-product-selector-list-item',

        itemHeight: 102,

        mode: 'MULTI'

    }
} );