Ext.define('WWWOWWW.controller.HomeController', {

    extend: 'WWWOWWW.controller.ViewManager',

    
    config: {
        refs: {

            //home
            homeList: 'homelist',

            //Look detail
            lookDetailImportList: 'lookdetail dataview',
            lookDetailWow: 'lookdetail #wowButton',
            addToLookBookButton: 'lookdetail #addToLookBookButton',

            // ImportDetail
            addToCloset: 'importdetail tab[tal=addToClosetButton]',
            importDetailWow: 'importdetail tab[tal=closetWowButton]',
            importDetailLink: 'importdetail tab[tal=closetLinkButton]',
            importDetailImport: 'importdetail import',

            //drawers
            drawerList: 'drawers list'
        },
        control: {
            homeList: {
                itemtap: 'openItemDetailView'
            },
            lookDetailImportList: {
                itemtap: 'openImportDetail'
            },
            addToCloset: {
                tap: 'openDrawers'
            },
            importDetailWow: {
                tap: 'wowImportDetail'
            },
            importDetailLink: {
                tap: 'openImportDetailUrlInNewTab'
            },
            importDetailImport: {
                imagetap: 'openImportDetailUrlInNewTab'
            },
            drawerList: {
                itemtap: 'addImportToDrawer'
            },
            lookDetailWow: {
                tap: 'wowLookDetail'
            },
            addToLookBookButton: {
                tap: 'addToLookBook'
            }
        }
    },

    /**
     * open the detail of the item be it an import or a look
     * @param list
     * @param index
     * @param target
     * @param record
     * @param e
     * @param eOpts
     */
    openItemDetailView: function (list , index, target, record, e, eOpts) {
        var type = record.get('type');

        if (type === 'look') {
            this.openLookDetail(list, index, target, record, e, eOpts);
        }

        if (type === 'import') {
            this.openImportDetail(list , index, target, record, e, eOpts);
        }
    }

});