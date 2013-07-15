Ext.define('WWWOWWW.view.closet.ClosetDrawers', {

    extend: 'Ext.dataview.DataView',

    xtype: 'closetdrawers',

    config: {

        title: i18n.t('closet.title'),

        id: 'closetDraws',

        inline: {
            wrap: true
        },

        itemTpl: ['<div class="wwwowww-drawer-name" <tpl if="coverImage">style="background-image: url({coverImage.half})"</tpl>> <div class="wwwwowww-drawer-name-text">{name}</div></div>'],

        store: 'DrawerStore',

        items: [
            {
                xtype: 'tabbar',
                docked: 'bottom',
                items: [
                    {
                        layout: {
                            type: 'vbox',
                            align: 'middle'
                        },
                        xtype: 'container',
                        items: [
                            {
                                tal: 'addNewDrawerTab',
                                xtype: 'image',
                                src: 'resources/img/plus.png',
                                width: 33,
                                height: 33
                            },
                            {
                                xtype: 'label',
                                html: i18n.t('closet.newDrawer'),
                                style: 'color: #404040; font-size: 10px;'
                            }
                        ]
                    }
                ]
            }
        ]
    }

});