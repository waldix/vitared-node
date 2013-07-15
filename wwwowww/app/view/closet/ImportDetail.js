Ext.define('WWWOWWW.view.closet.ImportDetail', {

    extend: 'Ext.Container',

    xtype: 'importdetail',

    config: {

        usesLogo: true,

        cls: 'wwwowww-import-detail',


        toolBarConfig: {
            docked: 'bottom',
            items: [
                {
                    title: i18n.t('closet.addToCloset'),
                    tal: 'addToClosetButton',
                    iconCls: 'add1'
                },
                {
                    title: i18n.t('closet.wow'),
                    tal: 'closetWowButton',
                    iconCls: 'wow_OFF'
                },
                {
                    title: i18n.t('closet.link'),
                    tal: 'closetLinkButton',
                    iconCls: 'link1'
                }
            ]
        },

        item: null,

        scrollable: true
    },

    initialize: function () {

        // Initialise the parents, if not called nothing may be rendered.
        this.callParent(arguments);

        var record = this.getItem();

        this.add({
            xtype: 'import',
            item: record,
            imageSize: 'full',
            width: 296,
            height: 394,
            padding: '12px 0 0 0',
            showUser: true,
            margin: 'auto'
        });
    },

    applyToolBarConfig: function (config) {
        console.log('Applying the toolbar...');

        if (!config) {
            // TODO is this needed?
        }


        return Ext.factory(config, Ext.tab.Bar, this.getToolBarConfig());
    },

    updateToolBarConfig: function (newToolBar, oldToolbar) {
        console.log('updating the toolbar');
        if(oldToolbar) {
            this.remove(oldToolbar, true);
        }

        if (newToolBar) {
            this.add(newToolBar);
        }
    }


});