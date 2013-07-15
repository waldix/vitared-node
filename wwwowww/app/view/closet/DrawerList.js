Ext.define( 'WWWOWWW.view.closet.DrawerList', {

    extend: 'Ext.dataview.List',
    
    xtype: 'drawerlist',
    
    config: {

        cls: 'wwwowww-drawer-list',
        flex: 1,
        itemTpl: '<div>{name}</div>',
        store: 'DrawerStore',
        itemHeight: 20
        
    }

} );