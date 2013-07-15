Ext.define( 'WWWOWWW.view.lookeditor.Camera', {

    extend: 'Ext.Component',

    xtype: 'camera',

    config: {
        /**
         * the image config selects the appropriate image from resources/images/default/pictos folder.
         */
        image: null
    },

    cachedConfig: {
        cls: 'wwwowww-camera'
    },

    template: [
        {
            reference: 'fileInput',
            type     : 'file',
            tag      : 'input',
            accept   : 'image/*',
            cls      : 'wwwowww-camera'
        }
    ],

    initialize: function () {

        // Initialise the parents, if not called nothing may be rendered.
        this.callParent( arguments );

        var me = this;

        // Set dynamic properties of the component, re template.
        var fileInput = this.fileInput;
        fileInput.dom.style.backgroundImage = 'url(' + this.getImage() + ')'
        fileInput.setWidth( this.getWidth() );
        fileInput.setHeight( this.getHeight() );

        //setup the onchange handler for the preview.
        me.fileInput.dom.onchange = function ( event ) {
            var files = event.target.files,
                file;
            if ( files && files.length > 0 ) {
                file = files[0];
            }

            var URL = window.URL || window.webkitURL;
            var imgUrl = URL.createObjectURL(file);

            me.fireEvent('snap', imgUrl);

        }
    }

} );