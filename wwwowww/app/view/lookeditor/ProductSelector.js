Ext.define('WWWOWWW.view.lookeditor.ProductSelector', {

    extend: 'Ext.Container',

    config: {

        title: i18n.t('newLook.title'),

        fullscreen: true,


        defaults: {
            xtype: 'productselectorlist'
        },
        items: [
            {
                store: 'TopStore',
                flex: 1,
                layout: 'fit'
            },
            {
                store: 'BottomStore',
                flex: 1,
                layout: 'fit'
            },
            {
                store: 'AccessoryStore',
                flex: 1,
                layout: 'fit'
            },
            {
                xtype: 'container',
                docked: 'top',
                height: 57,
                layout: 'hbox',
                cls: 'wwwowww-product-selector-header',
                defaults: {
                    flex: 1,
                    width: 80,
                    height: 55,
                    xtype: 'image'
                },
                items: [
                    {
                        src: 'resources/img/80x55_up.png'
                    },
                    {
                        src: 'resources/img/80x55_middle.png'
                    },
                    {
                        src: 'resources/img/80x55_down.png'
                    }
                ]
            },
            {
                xtype: 'tabbar',

                docked: 'bottom',


                items: [
                    {
                        title: 'cancel',
                        iconCls: 'cancel_OFF',
                        id: 'product-selector-cancel',
                        handler: function () {
                            this.up('main').pop();
                        }
                    },
                    {
                        title: 'done',
                        iconCls: 'done_OFF',
                        id: 'product-selector-done',
                        handler: function () {
                            this.up('main').pop();
                        }
                    }
                ]
            }
            ,
            {
                xtype: 'productselectedlist'
            }
        ]
    }
});