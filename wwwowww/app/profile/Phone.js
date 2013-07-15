Ext.define('WWWOWWW.profile.Phone', {
    extend: 'Ext.app.Profile',
    
    //define any additional classes your Profile needs here
    config: {
        views: ["ProductSelector"],
        models: [],
        stores: [],
        controllers: []
    },
    
    //this profile will be activated if we detect we're running on a Phone
    isActive: function(app) {
        var active = Ext.os.is.Phone;
        console.log('PHONE IS %S', active);
        return active;
    }
});