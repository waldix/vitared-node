Ext.define('WWWOWWW.store.ImportImages', {
    extend: 'Ext.data.Store',
    requires:['WWWOWWW.model.ImportImage'],
    config:{
        storeId: "ImportImages",
        model:'WWWOWWW.model.ImportImage'
    }
});