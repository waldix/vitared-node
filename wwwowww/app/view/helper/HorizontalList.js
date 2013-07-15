Ext.define( 'WWWOWWW.view.helper.HorizontalList', {

    extend: 'Ext.DataView',

    xtype: 'horizontallist',

    config: {

        scrollable: {
            direction: 'horizontal'
        },

        inline: {
            wrap: false
        }
    },

    /**
     *    Intercept the call and get the root of the problem, "Cannot set property 'innerHTML' of undefined".
     */
    onStoreUpdate: function(store, record, newIndex, oldIndex) {
        var me = this,
            container = me.container;

        oldIndex = (typeof oldIndex === 'undefined') ? newIndex : oldIndex;

        if (oldIndex !== newIndex) {
            container.updateAtNewIndex(oldIndex, newIndex, record);
            if (me.isSelected(record)) {
                me.doItemSelect(me, record);
            }
        }
        else {
            /**
             * From the list implementation.
             */
            if (newIndex >= me.topItemIndex && newIndex < me.topItemIndex + me.listItems.length) {
                item = me.getItemAt(newIndex);
                if(item) {
                    me.doUpdateListItem(item, newIndex, me.getListItemInfo());

                    // Bypassing setter because sometimes we pass the same record (different data)
                    //me.updateListItem(me.getItemAt(newIndex), newIndex, me.getListItemInfo());
                    if (me.getVariableHeights() && me.getRefreshHeightOnUpdate()) {
                        me.updatedItems.push(item);
                        me.updateItemHeights();
                        me.refreshScroller(scroller);
                    }
                }
            }
        }
    }

} );