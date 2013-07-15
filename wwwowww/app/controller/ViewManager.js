Ext.define('WWWOWWW.controller.ViewManager', {

    extend: 'Ext.app.Controller',

    config: {

        homeClass: 'wwwowww-home',

        refs: {
            main: 'main',
            importDetail: 'importdetail',
            newLook: 'newlook',
            newDrawNameTextField: '#newDrawNameTextField',
            urlTextField: 'urlformpanel #urlToScrap'
        },

        control: {
            main: {
                push: 'tweakOnPush',
                pop: 'tweakOnPop'
            }
        },

        positiveIds: ['ok', 'yes']
    },

    /**
     * Open the look related to the record.
     * @param list
     * @param index
     * @param target
     * @param record
     * @param e
     * @param eOpts
     */
    openLookDetail: function (list, index, target, record, e, eOpts) {
        var nav = this.getMain();
        nav.push({
            xtype: 'lookdetail',
            record: record
//            title: record.get('author')
        });
    },

    /**
     * Open the import detail related to the record.
     * @param list
     * @param index
     * @param target
     * @param record
     * @param e
     * @param eOpts
     */
    openImportDetail: function (list, index, target, record, e, eOpts) {
        var nav = this.getMain();
        console.log('Open import detail'); // TODO remove after debug.
        console.log(nav.getItems());
        var nav = this.getMain();
        if (record) {
            var title = record.get('description');
//            title && (title = title.substring(0, 15));
            nav.push({
                xtype: 'importdetail',
                item: record
//                ,
//                title: title
            });
        }
    },

    /**
     * Adds a new empty drawer to the closet using the supplied name.
     * @param button
     */
    addNewDrawer: function (button) {
        var textField = this.getNewDrawNameTextField(),
            text = textField.getValue();
        if (text) {
            var drawStore = Ext.getStore('DrawerStore');
            var exists = drawStore.find('name', text);
            if (exists === -1) { // there is no draw with the given name.
                var added = drawStore.add({
                    name: text
                });
            } else { // There is a draw with the given name
                var title = i18n.t('closet.warning') ,
                    body = i18n.t('closet.drawNameExists'),
                    timeout = 2 * 1000;
                WWWOWWW.view.helper.Toast.toast(title, body, timeout);
            }

        }
        textField.setValue(''); //clear the text field.
    },

    /**
     * Open the closet view of drawers.
     *
     * @param button
     */
    openDrawers: function (button) {
        var nav = this.getMain();
        nav.push({
            xtype: 'drawers'
        });
    },

    /**
     * How to wow a detail.
     * @param button
     */
    wowImportDetail: function (button) {
        console.log('WOW');
        if (button) {
            var importDetail = button.up('importdetail'),
                item = importDetail.getItem();
            if (item) {
                var wows = item.get('wows');
                wows = wows + 1;
                item.set('wows', wows);
                importDetail.down('import').setItem(item);
            }
        }
    },

    wowLookDetail: function (button) {
        console.log('WOW');
        if (button) {
            var lookDetail = button.up('lookdetail'),
                item = lookDetail.getRecord();
            if (item) {
                var wows = item.get('wows');
                wows = wows + 1;
                item.set('wows', wows);
                lookDetail.down('look').setItem(item);
            }
        }
    },

    /**
     * Open the selected records link in a new tab
     * @param button
     */
    openImportDetailUrlInNewTab: function (button) {
        console.log('Open link...');
        var importDetail = button.up('importdetail'),
            item = importDetail.getItem(),
            link;

        if (item) {
            link = item.get('link');
            link && window.open(link, '_blank');
        } else {
            console.warn && console.warn('Wot no link...')
        }
    },

    /**
     * When a draw is selected from the list add the current import to it.
     * @param list
     * @param index
     * @param target
     * @param record
     * @param e
     * @param eOpts
     */
    addImportToDrawer: function (list, index, target, record, e, eOpts) {

        var importDetail = this.getImportDetail(),
            item = importDetail && importDetail.getItem(),
            nav = this.getMain();

        if (item) {
            record.imports().add(item);

            var coverImage = record.get('coverImage');
            if (!coverImage) {
                var image = item.get('image');
                console.log(image);
                record.set('coverImage', image);
            }

            nav.pop();
        }

    },

    /**
     * Add current look to look book.
     * @param button
     */
    addToLookBook: function (button) {
        var lookDetails,
            look,
            lookbookStore;
        if (button) {
            lookDetails = button.up('lookdetail');
            look = lookDetails.getRecord();
            lookbookStore = Ext.getStore('LookBookStore');
            lookbookStore.add(look);
        }
    },

    /**
     * open the import section.
     */
    openImportSection: function () {
        var nav = this.getMain();
        nav.push({
            xtype: 'importtab'
        });
    },

    /**
     * Open the main section for the closet.
     */
    openCloset: function () {
        var nav = this.getMain();
        nav.push({
            xtype: 'closetdrawers'
        });
    },

    /**
     * Open the closet draw.
     * @param list
     * @param index
     * @param target
     * @param record
     * @param e
     * @param eOpts
     */
    openClosetDraw: function (list, index, target, record, e, eOpts) {
        var nav = this.getMain();
        record.imports().each(function (record) {
            record.getData(true)
        }); // This is a hack so that the template will work, I hate sencha sometimes.
        nav.push({
            xtype: 'drawer',
            store: record.imports(),
            title: record.get('name')
        });
    },

    /**
     * Open the look book
     * @param button
     */
    openLookbook: function (button) {
        var nav = this.getMain();
        nav.push({
            xtype: 'lookbooklist'
        });
    },

    /**
     * Open the new look page.
     * @param button
     */
    openNewlook: function (button) {

        var nav = this.getMain();

        nav.push({
            xtype: 'newlook'
        });

    },

    pictureTaken: function (imageUrl) {

        var newLook = WWWOWWW.model.NewLook;

        var image = {
            full: imageUrl,
            half: imageUrl,
            third: imageUrl,
            quarter: imageUrl,
            small: imageUrl
        };
        newLook.set('image', image);

        var newLookPage = this.getNewLook();
        newLookPage.setBackgroundImage(imageUrl);
        WWWOWWW.model.NewLook.set('synched', false);
    },

    /**
     * Open the add products page.
     * @param button
     */
    openAddProductsPage: function (button) {
        var nav = this.getMain();
        nav.push({
//            xtype: Ext.os.is.Phone ? 'phoneproductselector' : 'tabletproductselector'
            xtype: 'phoneproductselector'
        });
    },

    /**
     * clear the new look.
     * @param button
     */
    clearNewLook: function (button) {
        var me = this;
        var confirmBox = Ext.Msg.confirm(i18n.t('newLook.clear'), i18n.t('newLook.clearMessage'), function (buttonId, value, opt) {
            if (me.buttonIdIsPositive(buttonId)) {
                // reset the view.
                WWWOWWW.model.NewLook.reset();
                var newLookPage = me.getNewLook();
                newLookPage.setBackgroundImage(null);

            } else {
                // Do nothing for now.
            }
        });
    },

    /**
     * Exit the new look.
     * @param button
     */
    exitNewLook: function (button) {
        console.log(WWWOWWW.model.NewLook.modified);// TODO remove after debug.
        console.log(WWWOWWW.model.NewLook.dirty);// TODO remove after debug.

        var me = this,
            nav = me.getMain(),
            toastDurationInMillis = 2000;

        nav.pop();

        if (WWWOWWW.model.NewLook.get('synched') == false) {
            WWWOWWW.view.helper.Toast.toast(i18n.t('newLook.exit'), i18n.t('newLook.lose-changes'), toastDurationInMillis);
            WWWOWWW.model.NewLook.set('synched', true); // Fake Save.
        }


    },

    /**
     * Publish the new look.
     * @param button
     */
    publishNewLook: function (button) {
        var newLookPage = this.getNewLook(),
            errors = WWWOWWW.model.NewLook.validate(),
            nav = this.getMain(),
            main = this.getMain();

        if (errors.isValid()) {
            WWWOWWW.model.NewLook.set('adds', 0);
            WWWOWWW.model.NewLook.set('wows', 0);
            WWWOWWW.model.NewLook.set('author', 'you');
            var copy = WWWOWWW.model.NewLook.copy();
            var lookBookStore = Ext.getStore('LookBookStore');
            lookBookStore.add(copy);

            //copy the imports
            copy.imports().add(WWWOWWW.model.NewLook.imports().data.all.map(function (record) {
                return record.data
            }));

            //clear the image
            newLookPage.setBackgroundImage(null);

            //show the detail.
            nav.push({
                xtype: 'lookdetail',
                record: copy,
                showUser: true
            });

            // clean up the new look reset...
            WWWOWWW.model.NewLook.reset();

        } else {
            Ext.Msg.alert('A picture is required', 'To publish a lookbook you must take a picture or select one first.', Ext.emptyFn);
        }
    },

    buttonIdIsPositive: function (buttonId) {
        var positiveIds = this.getPositiveIds();
        var index = positiveIds.indexOf(buttonId);
        return index != -1;
    },

    productSelected: function (list, index, target, record, e, eOpts) {
        WWWOWWW.model.NewLook.set('synched', false);
        WWWOWWW.model.NewLook.imports().add(record);
    },

    /**
     * apply view specific alterations on pop.
     * @param main
     * @param poppedView
     * @param activeIndex
     * @param eOpts
     * @param event
     */
    tweakOnPop: function (main, poppedView, activeIndex, eOpts, event) {
        var me = this;

        var backedIntoView = main.getActiveItem(),
            useToolBar = true;

        // Logo
        var navBar = main.getNavigationBar();
        var homeClass = this.getHomeClass();
        var usesLogo = backedIntoView.getUsesLogo && backedIntoView.getUsesLogo();

        usesLogo ? navBar.addCls(homeClass) : navBar.removeCls(homeClass);

        // backButton
        var backButton = navBar.getBackButton();
        var hideBackButton = backedIntoView.getHideBackButton && backedIntoView.getHideBackButton();
        hideBackButton ? backButton.hide() : backButton.show();

        // navBar
        if (backedIntoView && backedIntoView.getUsesToolBar) {
            backedIntoView.getUsesToolBar() ? this.showNavigationBar() : this.hideNavigationBar();
        }

    },

    /**
     * apply view specific alterations on push.
     * @param main
     * @param pushedView
     * @param eOpts
     */
    tweakOnPush: function (main, pushedView, eOpts) {

        //nav bar
        var main = this.getMain(),
            navBar = main.getNavigationBar();
        if (pushedView && pushedView.getUsesToolBar) {
            pushedView.getUsesToolBar() ? this.showNavigationBar() : this.hideNavigationBar();
        }

        // Back Button
        var backButton = navBar.getBackButton();
        var hideBackButton = pushedView.getHideBackButton && pushedView.getHideBackButton();
        hideBackButton ? backButton.hide() : backButton.show();

        // Logo
        var homeClass = this.getHomeClass();
        var navBar = main.getNavigationBar();
        var usesLogo = pushedView.getUsesLogo && pushedView.getUsesLogo();
        usesLogo ? navBar.addCls(homeClass) : navBar.removeCls(homeClass);

    },

    showNavigationBar: function () {
        var main = this.getMain(),
            navBar = main.getNavigationBar();
        navBar.show();
    },

    hideNavigationBar: function () {
        var main = this.getMain(),
            navBar = main.getNavigationBar();
        navBar.hide();
    },

    deleteItemFromNewLook: function (list, index, target, record, e, eOpts) {
        Ext.Msg.confirm(i18n.t('newLook.deleteConfirmationTitle', i18n.t('newLook.deleteConfirmationBody')), 'Are you sure you want to delete this product from the look?', function (buttonId, value, opt) {
            if (this.buttonIdIsPositive(buttonId)) {
                WWWOWWW.model.NewLook.imports().remove(record);
                WWWOWWW.model.NewLook.set('synched', false);
            }
        }, this)
    },

    getImportDetailToolbar: function () {
        var nav = this.getMain();
    },

    onImportProductUrlButtonTap: function (b, e) {
        var urlFormPanel = Ext.create('WWWOWWW.view.import.UrlFormPanel', {
            listeners: {
                hide: function (t) {
                    t.destroy();
                }
            }
        });

        Ext.Viewport.add(urlFormPanel);
        urlFormPanel.show('');
    },

    onAcceptUrlButtonTap: function (b, e) {
        var me = this,
            url = me.getUrlTextField().getValue();

        if (me.validateURL(url)) { //If is a url valid
            me.getUrlTextField().up('urlformpanel').destroy(); //destroy the container o the options
            Ext.getStore('ImportImages').removeAll();
            me.getMain().push({//Push new view
                xtype: 'container',
                layout: 'fit',
                items: [
                    {
                        xtype: 'imagesdataview'
                    },
                    {
                        xtype: 'tabbar',
                        docked: 'bottom',
                        pack: 'center',
                        items: [
                            {
                                title: 'Use',
                                action: 'useImportedImage',
                                iconCls: 'publish_ON'
                            }
                        ]
                    }
                ]
            });
            socket.emit('urltoscrap', url); //Emit the url to scraping
        } else {
            alert('invalida');
        }
    },

    validateURL: function (url) {
        var regex = /^(ht|f)tps?:\/\/\w+([\.\-\w]+)?\.([a-z]{2,4}|travel)(:\d{2,5})?(\/.*)?$/i;
        return regex.test(url);
    },

    init: function () {
        this.configureSocket();
    },

    configureSocket: function () {
        var me = this;
        socket = io.connect('http://wwwowww.herokuapp.com:8080');
        socket.on('imagestostore', function (images) {
            Ext.getStore('ImportImages').setData(images);
        });
    },

    onImageItemTap: function(dataview, index, target, record, e, eOpts){
        var node = target.child('.image-dataview'),
            selectedImage = node.child('.selected-image');

        if(!selectedImage.hasCls('active')){
           selectedImage.addCls('active');
        } else {
            selectedImage.removeCls('active');
        }
    }

});