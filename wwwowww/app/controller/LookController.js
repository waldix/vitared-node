Ext.define('WWWOWWW.controller.LookController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
//            importDetailImport: 'importdetail import',
//            exitNewLookButton: '#exitNewLookButton',
//            saveNewLookButton: '#saveNewLookButton',
//            publishNewLookButton: '#publishNewLookButton',
//            main: 'main',
//            lookNavigation: 'looknavigation',
//            productSelectorList: 'productselectorlist',
//            productSelectedList: 'selecteditems',
//            addToLookBookButton: 'lookdetail button#addToLookBookButton',
//            wowButton: 'lookdetail button#wowButton',
//            lookDetail: 'lookdetail look',
//            lookbook: 'lookbook',
//            lookBookDataview: '#LookBookList',
//            lookDetailList: 'lookdetail dataview'

        },
        control: {
//            newLookAddProductsButton: {
//                tap: 'newLookAddProducts'
//            },
//            exitNewLookButton: {
//                tap: 'exitNewLook'
//            },
//            saveNewLookButton: {
//                tap: 'saveNewLook'
//            },
//            publishNewLookButton: {
//                tap: 'publishNewLook'
//            },

//            productSelectorList: {
//                itemtap: 'importPicked'
//            },
//            productSelectedList: {
//                itemtap: 'deleteItemFromNewLook'
//            },
//            addToLookBookButton: {
//                tap: 'addToLookBook'
//            },
//            wowButton: {
//                tap: 'addWow'
//            },
//            lookBookDataview: {
//                itemtap: 'lookbookItemTapped'
//            },
//            lookDetailList: {
//                itemtap: 'lookDetailListItemTap'
//            },
//            importDetailImport: {
//                imagetap: 'importDetailImageTapped'
//            }
        },

        positiveIds: ['ok', 'yes']
    },

    newLookAddProducts: function () {
        var nav = this.getLookNavigation();
        nav.push({
            xtype: 'productselector'
        });
    },

    exitNewLook: function (button) {
        console.log('In exit new look'); // TODO remove after debug.
        var me = this;
        var confirmBox = Ext.Msg.confirm(i18n.t('newLook.clear'), i18n.t('newLook.clearMessage'), function (buttonId, value, opt) {
            if (me.buttonIdIsPositive(buttonId)) {
                // reset the view.
                console.log('positive button'); // TODO remove after debug.
                WWWOWWW.model.NewLook.reset();
                var newLookPage = me.getNewLook();
                newLookPage.setBackgroundImage(null);

                // gohome.
                var lookNavigation = button.up('navigationview'),
                    main = me.getMain();
                lookNavigation.pop();
                main.setActiveItem(0);

            } else {
                // Do nothing for now.
                console.log('Negative button.');// TODO remove after debug.
            }
        });
    },

    saveNewLook: function () {
        //Do nothing.
    },

    publishNewLook: function (button) {

        var newLookPage = this.getNewLook(),
            errors = WWWOWWW.model.NewLook.validate(),
            lookNavigation = this.getLookNavigation(),
            main = this.getMain();

        if (errors.isValid()) {
            WWWOWWW.model.NewLook.set('adds', 0);
            WWWOWWW.model.NewLook.set('wows', 0);
            var lookBookStore = Ext.getStore('LookBookStore');
            var imports = WWWOWWW.model.NewLook.imports().data.all.map(function(record) {return record.data;});
            console.log(imports);
            var data = WWWOWWW.model.NewLook.data;
            data.imports = imports;
            lookBookStore.add(data);

            //clear the image
            newLookPage.setBackgroundImage(null);

            //show the detail.
            lookNavigation.push({
                    xtype: 'lookdetail',
                    record: WWWOWWW.model.NewLook,
                    showUser: true
            });

            // clean up the new look reset...
            WWWOWWW.model.NewLook.reset();

            // Show the lookbook.
//            lookNavigation.pop();
//            main.setActiveItem(3);

        } else {
            Ext.Msg.alert('A picture is required', 'To publish a lookbook you must take a picture or select one first.', Ext.emptyFn);
        }
    },

    buttonIdIsPositive: function (buttonId) {
        var positiveIds = this.getPositiveIds();
        var index = positiveIds.indexOf(buttonId);
        return index != -1;
    },

    importPicked: function (list, index, target, record, e, eOpts) {
        WWWOWWW.model.NewLook.imports().add(record);
    },

    deleteItemFromNewLook: function (list, index, target, record, e, eOpts) {
        // TODO put confirm message.
        console.log('Delete it!!!');
        Ext.Msg.confirm(i18n.t('newLook.deleteConfirmationTitle', i18n.t('newLook.deleteConfirmationBody')), 'Are you sure you want to delete this product from the look?', function (buttonId, value, opt) {
            if (this.buttonIdIsPositive(buttonId)) {
                WWWOWWW.model.NewLook.imports().remove(record);
            }
        }, this)
    },

    /**
     * What to do when the add to look book button is tapped in the detail view.
     */
    addToLookBook: function () {

        var detail = this.getLookDetail();
        var look = detail.getItem();
        var addCount = look.get('adds');
        addCount = addCount + 1;
        look.set('adds', addCount);

        detail.setItem(look);

        var lookBookStore = Ext.getStore('LookBookStore');
        lookBookStore.add(look);
    },

    /**
     * What to do when the wow button is pressed in the detail
     */
    addWow: function () {
        var detail = this.getLookDetail();

        var look = detail.getItem();
        var wowCount = look.get('wows');
        wowCount = wowCount + 1;
        look.set('wows', wowCount);

        detail.setItem(look);
    },

    /**
     * What to do when the look book item is tapped.
     * @param list
     * @param index
     * @param target
     * @param record
     * @param e
     * @param eOpts
     */
    lookbookItemTapped: function (list, index, target, record, e, eOpts) {
        console.log('Should show the detail view here.');
        var nav = this.getLookbook();
        nav.push({
            xtype: 'lookdetail',
            record: record,
            showUser: true
        })
    },

    lookDetailListItemTap: function (list, index, target, record, e, eOpts) {

        var nav = list.up('navigationview');
        nav.push({
            xtype: 'importdetail',
            item: record
        });
    },

    importDetailImageTapped: function (item, record) {
        var link;
        if (record) {
            link = record.get('link');
            link && window.open(link, '_blank');
        }
    }

});