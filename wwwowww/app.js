//<debug>
Ext.Loader.setPath({
    'Ext': 'touch/src',
    'WWWOWWW': 'app',
    'Ext.ux.touch': './ux/touch'
});
//</debug>

Ext.application({
    profiles: ["Tablet","Phone"],


    controllers: [
        "ImportController",
        "NewLookController",
        "LookBookController",
        "ClosetController",
        "HomeController",
        "UserController",
        "ViewManager"
    ],

    models: [
        "Item",
        "Drawer",
        "Image",
        "NewLook",
        "Look",
        "Import"
    ],

    name: 'WWWOWWW',

    requires: [
        'Ext.MessageBox',
        'WWWOWWW.view.user.Public'
    ],

    stores: [
        'AccessoryStore',
        'BottomStore',
        'Drawers',
        'Imports',
        'LookBook',
        'Looks',
        'TopStore',
        'ImportImages'
    ],

    views: [
        'closet.ClosetDrawers',
        'closet.Drawer',
        'closet.DrawerList',
        'closet.Drawers',
        'closet.Import',
        'closet.ImportDetail',
        'closet.MyImportDetail',
        'helper.HorizontalList',
        'helper.Item',
        'helper.Toast',
        'helper.UsesTabbar',
        'Home',
        'HomeList',
        'import.Import',
        'look.Look',
        'look.LookItem',
        'lookbook.LookBookList',
        'looktype.Detail',
        'lookeditor.Camera',
        'lookeditor.LookNavigation',
        'lookeditor.NewLook',
        'lookeditor.ProductSelectedList',
        'lookeditor.ProductSelectorList',
        'lookeditor.SelectedItems',
        'Main',
        'user.Login',
        'user.PasswordReminder'
        ],

    viewport: {
        autoMaximize: true
    },

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        var hash = location.hash;
        var userRoute = '#user/(.*)';
        match = hash.match(userRoute);

        if (match) {
            // Initialize the main view
            Ext.Viewport.add(Ext.create('WWWOWWW.view.user.Login', {user: match[1]}));
        } else {
            Ext.Viewport.add(Ext.create('WWWOWWW.view.user.Public'));
        }


    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
