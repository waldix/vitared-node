Ext.define('WWWOWWW.view.tablet.ProductSelector', {

    extend: 'Ext.Container',

    xtype: 'tabletproductselector',

    config: {
        title: i18n.t('newLook.title'),

        usesToolBar: false,

        layout: 'hbox',

        items: [
            {
                width: 57,
                layout: {
                    type: 'vbox',
                    pack: 'center'
                },
                defaults: {
                    flex: 1,
                    layout: {
                        type: 'vbox'
                    },
                    xtype: 'container',
                    mode: 'MULTI'
                },
                items: [{
                    items: [{
                        xtype: 'image',
                        src: 'resources/images/default/pictos/TOP_C_ON.png',
                        width: 57,
                        height: 57,
                        margin: '30px 0 0 0'
                    }]
                }, {
                    items: [{
                        xtype: 'image',
                        src: 'resources/images/default/pictos/BOTTOM_C_Off.png',
                        width: 57,
                        height: 57,
                        margin: '30px 0 0 0'
                    }]

                }, {
                    items: [{
                        xtype: 'image',
                        src: 'resources/images/default/pictos/accesories_C_on.png',
                        width: 57,
                        height: 57,
                        margin: '30px 0 0 0'
                    }]

                }]
            },
            {
                flex: 1,
                layout: {
                    type: 'vbox',
                    pack: 'center'
                },
                defaults: {
                    xtype: 'dataview',
                    scrollable: {
                        direction: 'horizontal'
                    },
                    itemTpl: '<div style="margin: auto; padding: 2px;"><img src="{image.third}" alt="{description}"></div>',
                    inline: {
                        wrap: false
                    },
                    flex: 1
                },
                items: [
                    {
                        store: 'TopStore'
//                        style: 'background: #FF00FF'
                    },
                    {
                        store: 'BottomStore'
//                        style: 'background: #FFFF00'
                    },
                    {
                        store: 'AccessoryStore'
//                        style: 'background: #00FFFF'
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
        ]
    },

    initialize: function () {
        // Initialise the parents, if not called nothing may be rendered.
        this.callParent(arguments);
        console.log('Initializing the tablet');
    }

});