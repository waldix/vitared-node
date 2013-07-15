Ext.define('WWWOWWW.view.looktype.Detail', {

    extend: 'Ext.Container',

    xtype: 'lookdetail',

    mixins: {
        usesTabbar: 'WWWOWWW.view.helper.UsesTabbar'
    },



    config: {

        usesLogo: true,

        usesTabbar: false,

        zIndex: 1,

        record: null,

        layout: 'vbox',

        addPrefix: 'a',

        wowPrefix: 'w',

        scrollable: true,

        padding: '12px 0 0 0',



        items: [
            {
                scrollable: false,
                cls: 'wwwowww-look-detail-import',
                width: 296,
                margin: 'auto',
                xtype: 'dataview',
                itemTpl: '<img width="30" height="30" src="{image.quarter}" style="float:left; margin-right: 5px;"> {description}',
                itemCls: 'wwwoww-look-detail-item'
            },
            {
                xtype: 'tabbar',
                docked: 'bottom',
                items: [
                    {
                        title: i18n.t('lookType.addToLookBook'),
                        id: 'addToLookBookButton',
                        iconCls: 'lookbook_ON'
                    },
                    {
                        title: i18n.t('lookType.wow'),
                        id: 'wowButton',
                        iconCls: 'wow_OFF'
                    }
                ]
            }
        ]
    },

    initialize: function () {
        var me = this;
        me.callParent(arguments);
    },

    applyRecord: function (record) {
        if (record) {
            var me = this;
            var inserted = me.insert(0, {
                xtype: 'look',
                item: record,
                imageSize: 'full',
                margin: 'auto',
                width: 296,
                height: 424,
                imageWidth: '296px',
                imageHeight: '394px',
                zIndex: 2,
                showUser: true
            });

            me.doUpdate(record);
        }
        return record;
    },

    doUpdate: function (record) {
        var me = this,
            imports = record.imports();

        // find the list and set the store.
        me.down('dataview').setStore(imports);

        // set the height
        var dataview = me.down('dataview');
        dataview.setHeight(imports.getAllCount() * 40); // Magic number same as in itemTpl TODO do it better.
    }



});