Ext.define('WWWOWWW.view.import.UrlFormPanel', {
    extend: 'Ext.form.Panel',
    xtype:'urlformpanel',

    config: {
        title: 'Importing product from Url',
        modal: true,
        centered: true,
        hideOnMaskTap: true,
        width: 400,
        height: 320,
        items: [{
            html:'<p>1. Go to the page where the product is.</p>' +
                '<p>2. Copy the Url.</p>' +
                '<p>3. Paste it down here.</p>'
        },{
            xtype: 'textfield',
            itemId:'urlToScrap',
            margin: '20 0 20 0',
            name: 'url',
            placeHolder: 'Url'
        },{
            xtype:'button',
            text:'Accept',
            ui:'action',
            action:'acceptUrl'
        }]
    }
});