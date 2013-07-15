Ext.define('WWWOWWW.controller.ClosetController', {

    extend: 'WWWOWWW.controller.ViewManager',

    config: {
        refs: {
            closetMainButton: 'main tab[tal=closetMainButton]',
            closetdrawers: 'closetdrawers',
            closetAddDrawButton: 'image[tal=closetAddDrawerButton]',
            createNewDrawerButton: 'image[tal=addNewDrawerTab]'
        },
        control: {
            closetMainButton: {
                tap: 'openCloset'
            },
            closetdrawers: {
                itemtap: 'openClosetDraw'
            },
            closetAddDrawButton: {
                tap: 'addNewDrawer'
            },
            createNewDrawerButton: {
                tap: 'openDrawers'
            }
        }
    }
});