Ext.define('WWWOWWW.view.lookeditor.NewLook', {

    extend: 'Ext.Container',

    requires: ['WWWOWWW.view.lookeditor.Camera'],

    xtype: 'newlook',


    config: {

        title: i18n.t('newLook.title'),

        cls: 'wwwowww-newlook',

        layout: {
            type: 'vbox'
        },

        hideBackButton: true,

        usesToolBar: true,

        fullscreen: true,

        items: [

            {
                flex: 1,
                xtype: 'container',
                cls: 'wwwowww-newlook-camera-container',
                items: [
                    {
                        xtype: 'camera',
                        /**
                         * the image config selects the appropriate image from resources/images/default/pictos folder.
                         */
                        image: 'resources/img/80x55_camera.png',
                        width: 80,
                        height: 55,
                        centered: true

                    }
                ]
            },
            {
                xtype: 'container',
                cls: 'wwwowww-newlook-selected-products-container',
                layout: {
                    type: 'hbox',
                    align: 'middle'
                },
                height: 116,
                items: [
                    {
                        xtype: 'image',
                        iconCls: 'add',
                        src: 'resources/img/plus.png',
                        tal: 'newLookAddProductsButton',
                        width: 33,
                        height: 33,
                        margin: 10
                    },
                    {
                        xtype: 'selecteditems',
                        flex: 1,
                        height: 106,
                        margin: 10
                    }
                ]
            }
            ,
            {
                xtype: 'tabbar',
                docked: 'bottom',
                pack: 'center',
                items: [
                    {
                        title: 'clear',
                        tal: 'saveNewLookButton',
                        iconCls: 'trash'
                    },
                    {
                        title: 'exit',
                        tal: 'exitNewLookButton',
                        iconCls: 'exit_OFF'
                    },
                    {
                        title: 'publish',
                        tal: 'publishNewLookButton',
                        iconCls: 'publish_OFF'
                    }
                ]
            }
        ]
    },

    setBackgroundImage: function (imgUrl) {
        this.down('container[cls=wwwowww-newlook-camera-container]').innerElement.dom.style.backgroundImage = 'url(' + imgUrl + ')';
    },

    initialize: function () {
        // Initialise the parents, if not called nothing may be rendered.
        this.callParent(arguments);
        var image = WWWOWWW.model.NewLook.get('image');

        if (image) {
            this.setBackgroundImage(image.full);
        }
    }
})
;