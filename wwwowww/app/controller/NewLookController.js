Ext.define('WWWOWWW.controller.NewLookController', {

    extend: 'WWWOWWW.controller.ViewManager',

    config: {
        refs: {
            camera: 'camera',
            newlookMainButton: 'main tab[tal=newlookMainButton]',
            newLookAddProductsButton: 'image[tal=newLookAddProductsButton]',
            clearButton: 'button[tal=saveNewLookButton]',
            exitButton: 'button[tal=exitNewLookButton]',
            publishButton: 'button[tal=publishNewLookButton]',
            productSelectorList: 'productselectorlist',
            tabletProductSelectorList: 'tabletproductselector dataview',
            tabletProductSelector: 'tabletproductselector',
            phoneProductSelector: 'phoneproductselector',
            productSelectedList: 'selecteditems'


        },
        control: {
            newlookMainButton: {
                tap: 'openNewlook'
            },
            camera: {
                snap: 'pictureTaken'
            },
            newLookAddProductsButton: {
                tap: 'openAddProductsPage'
            },
            clearButton: {
                tap: 'clearNewLook'
            },
            exitButton: {
                tap: 'exitNewLook'
            },
            publishButton: {
                tap: 'publishNewLook'
            },
            productSelectorList: {
                itemtap: 'productSelected'
            },
            tabletProductSelectorList: {
                itemtap: 'productSelected'
            },
            productSelectedList: {
                itemtap: 'deleteItemFromNewLook'
            }

//            ,
//            tabletProductSelector: {
//                show: 'hideMainTitleBar',
//                hide: 'showMainTitleBar'
//            },
//            phoneProductSelector: {
//                show: 'hideMainTitleBar',
//                hide: 'showMainTitleBar'
//            }

        }
    }
});