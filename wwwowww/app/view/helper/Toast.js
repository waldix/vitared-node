Ext.define( 'WWWOWWW.view.helper.Toast', {

    extend: 'Ext.MessageBox',

    xtype: 'toast',

    singleton: true,

    config: {


    },

    short: 500,

    toast: function (title, message, timeOut, fn, scope) {
        var me = this;
        var box  = this.show({
            title: title || null,
            message: message || null,
            buttons: null,
            promptConfig: false,
            modal: false,
            fn: function() {
                if (fn) {
                    fn.apply(scope, arguments);
                }
            },

            scope: scope
        });
        setTimeout(function () {
            box.hide();
        }, timeOut || me.short);
        box.buttonsToolbar.hide();
        return box;
    }

} );