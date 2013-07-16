Ext.define('WWWOWWW.controller.ImportController', {

    extend: 'WWWOWWW.controller.ViewManager',
    
    config: {
        refs: {
            homeImportButton: 'main tab[tal=importMainButton]'
        },
        control: {
            homeImportButton: {
                tap: 'openImportSection'
            },
            'importtab button[action=importProductUrl]':{
                tap: 'onImportProductUrlButtonTap'
            },
            'urlformpanel button[action=acceptUrl]': {
                tap: 'onAcceptUrlButtonTap'
            },
            'imagesdataview':{
                itemtap: 'onImageItemTap'
            },
            'tabbar button[action=useImportedImage]':{
                tap: 'onUseImportedImageButtonTap'
            }
        }
    }
});