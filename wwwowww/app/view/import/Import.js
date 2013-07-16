Ext.define( 'WWWOWWW.view.import.Import', {

    extend: 'Ext.DataView',

    xtype: 'importtab',

    requires: [
        'WWWOWWW.view.import.UrlFormPanel',
        'WWWOWWW.view.import.ImagesDataView'
    ],

    config:{
        title: i18n.t('importer.title'),
        inline: {
            wrap: true
        },
        /*masked: {
            xtype: 'loadmask',
            message: 'Loading...'
        },*/
        scrollable: 'vertical',
        emptyText: 'No images ...',
        store: 'AcceptedImports',

        items: [
            {
                xtype: 'tabbar',
                docked: 'bottom',
                pack: 'center',
                height: 70,
                items: [
                    {
                        title: 'Import product<br> from Url',
                        action: 'importProductUrl',
                        iconCls: 'create_off'
                    },
                    {
                        title: 'Take a <br>picture',
                        iconCls: 'importer_ON',
                        disabled: true
                    },
                    {
                        title: 'Select a <br>picture',
                        iconCls: 'publish_ON',
                        disabled: true
                    }
                ]
            }
        ],

        itemTpl: '<div class="image-dataview">' +
            '<img src="../../../resources/images/checked.png" class="selected-image" width="24px" height="24px">' +
            '<img src="{src}" width="124" height="124" ><br><p>{alt}</p></div>'
    }
} );