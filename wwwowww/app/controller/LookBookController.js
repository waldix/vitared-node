Ext.define('WWWOWWW.controller.LookBookController', {

    extend: 'WWWOWWW.controller.ViewManager',

    config: {
        refs: {
            lookbookMainButton: 'main tab[tal=lookbookMainButton]',
            lookbookList: 'lookbooklist'
        },
        control: {
            lookbookMainButton: {
                tap: 'openLookbook'
            },
            lookbookList: {
                itemtap: 'openLookDetail'
            }
        }
    }
});