Ext.define( 'WWWOWWW.view.import.Import', {

    extend: 'Ext.Container',

    xtype: 'importtab',

    requires: [
        'WWWOWWW.view.import.UrlFormPanel',
        'WWWOWWW.view.import.ImagesDataView'
    ],

    config: {
    	title: i18n.t('importer.title'),
        styleHtmlContent: true,
        //html: 'Install the importer button on your browser and use it to add products from all around the web to your closet.',
        items:[
            {
                xtype:'button',
                text:'Import product from Url',
                ui:'action',
                action:'importProductUrl'
            },
            {
                xtype:'button',
                text:'Take a picture',
                disabled:true
            },
            {
                xtype:'button',
                text:'Select a picture',
                disabled:true
            }
        ]
    }
} );