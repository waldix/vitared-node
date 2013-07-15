Ext.define("WWWOWWW.store.Drawers", {

    extend: "Ext.data.Store",

    config: {

        storeId: "DrawerStore",

        model: "WWWOWWW.model.Drawer",

        data: [
            {
                name: 'my wardrobe'
            },
            {
                name: 'my wish list'
            },
            {
                name: 'presents'
            }
        ]

    }

});
