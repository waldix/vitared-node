Ext.define('WWWOWWW.view.helper.Item', {

    extend: 'Ext.Component',

    xtype: 'item',

    config: {
        item: null,
        imageSize: 'full',
        showUser: true,
        imageWidth: null,
        imageHeight: null,
        authorPrefix: 'By'
    },

    template: [
        {
            children: [
                {
                    cls: 'wwwowww-import',
                    reference: 'itemImageFrame',

                    children: [
                        {
                            tag: 'img',
                            reference: 'image'
                        },
                        {
                            cls: 'details',
                            reference: 'details',
                            children: [
                                {reference: 'wows',
                                    cls: 'wows'
                                },
                                {
                                    reference: 'adds',
                                    cls: 'adds'
                                }
                            ]
                        }
                    ]
                },
                {
                    reference: 'description',
                    cls: 'wwwowww-description',
                    children: [
                        {
                            tag: 'span',
                            reference: 'addedBy',
                            cls: 'wwwowww-author-prefix'
                        },
                        {
                            tag: 'span',
                            cls: 'wwwowww-author',
                            reference: 'authorField'
                        }
                    ]
                }
            ]
        }
    ],

    initialize: function () {
        this.image.on({
            scope: this,
            tap: 'onTap'
        });
    },

    updateAuthorPrefix: function (newAddedBy, oldAddedBy) {
        this.addedBy.setText(newAddedBy);
    },

    onTap: function () {
        var item = this.getItem();
        this.fireEvent('imagetap', this, item);
    },

    applyItem: function (theItem) {

        if (!theItem) {
            return theItem;
        }

        var me = this,
            wows = theItem.get('wows'),
            adds = theItem.get('adds'),
            imageSize = me.getImageSize(),
            src = theItem.get('image')[imageSize],
            showUser = this.getShowUser(),
            username = theItem.get('author');

        me.adds.setText(adds || 0);
        me.wows.setText(wows || 0);
        me.image.dom.src = src;

        if (showUser && username) {
            this.authorField.setText(username);
        }
        return theItem;
    },

    applyImageHeight: function (height) {
        if (height === 0 || height) {
            this.image.setHeight(height);
            this.itemImageFrame.setHeight(height);
        }
        return height;
    },

    applyImageWidth: function (width) {
        if (width === 0 || width) {
            this.image.setWidth(width);
            this.itemImageFrame.setWidth(width);
        }
        return width;
    }
});