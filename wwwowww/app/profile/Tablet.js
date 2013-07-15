Ext.define('WWWOWWW.profile.Tablet', {
    extend: 'Ext.app.Profile',
    
    //define any additional classes your Profile needs here
    config: {
        views: [
            "ProductSelector"
        ],
        models: [],
        stores: [],
        controllers: []
    },
    
    //this profile will be activated if we detect we're not running on a phone
    isActive: function(app) {
        var active =  Ext.os.is.Tablet || Ext.os.is.Desktop;
        console.log('TABLET IS %S', active);
        return active;
    }
});