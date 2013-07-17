Ext.define('WWWOWWW.store.AcceptedImports', {
    extend: 'Ext.data.Store',
    requires:['WWWOWWW.model.AcceptedImport'],
    config:{
        storeId: "AcceptedImports",
        model:'WWWOWWW.model.AcceptedImport'
    }
});
