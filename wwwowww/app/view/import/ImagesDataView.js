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
        store: 'ImportImages',
        mode: 'MULTI',

        itemTpl: '<div class="image-dataview">' +
            '<img src="../../../resources/images/checked.png" class="selected-image" width="16px" height="16px">' +
            '<img src="{src}" width="124" height="124" ><br><p>{alt}</p></div>'
    }
});