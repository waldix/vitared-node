Ext.define( 'WWWOWWW.view.closet.Drawers', {

    extend: 'Ext.Container',

    xtype: 'drawers',

    config: {

        title: i18n.t('closet.selectDrawers'),

        fullscreen: true,

        layout: 'fit',

           items: [{
              xtype: 'container',
               cls: 'wwwowww-drawer-controls',
               layout: {
                   type: 'hbox',
                   align: 'middle'
               },
               docked: 'top',
               items: [{
                   xtype: 'textfield',
                   flex: 1,
                   id: 'newDrawNameTextField',
                   placeHolder: i18n.t( 'closet.newDrawer' )
               },{
                   xtype: 'image',
                   width: 33,
                   height: 33,
                   src: 'resources/img/plus.png',
                   tal: 'closetAddDrawerButton'
               }]
           }, {
               xtype: 'drawerlist'
           }]
    }
} );