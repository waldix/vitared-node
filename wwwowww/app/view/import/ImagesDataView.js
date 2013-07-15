Ext.define('WWWOWWW.view.import.ImagesDataView',{
    extend: 'Ext.DataView',
    xtype: 'imagesdataview',

    config:{
        inline: {
            wrap: true
        },
        masked: {
            xtype: 'loadmask',
            message: 'Loading...'
        },
        scrollable: 'vertical',
        emptyText: 'No images ...',
        store: 'ImportImages',

        itemTpl: '<div class="image-dataview">' +
            '<img src="../../../resources/images/checked.png" class="selected-image" width="24px" height="24px">' +
            '<img src="{src}" width="250" height="250" ><br><p>{alt}</p></div>'
    }
});