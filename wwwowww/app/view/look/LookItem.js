Ext.define( 'WWWOWWW.view.look.LookItem', {

    extend: 'Ext.dataview.component.DataItem',

    xtype: 'lookitem',

    config: {

        look: {

            imageSize: 'half',

            width: 154,

            height: 236,

            xtype: 'look',

            imageWidth: '154px',

            imageHeight: '205px'
        },

        dataMap: {

            getLook: {
            }

        }
    },

    applyLook: function(config) {

        config.item = this.getRecord();

        return config;
    },

    updateLook: function(newLook, oldLook) {
        if (oldLook) {
            this.remove(oldLook);
        }

        if (newLook) {
            this.add(newLook);
        }
    }
} );