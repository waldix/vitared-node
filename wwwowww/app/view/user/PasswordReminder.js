Ext.define('WWWOWWW.view.user.PasswordReminder', {

    extend: 'Ext.MessageBox',

    xtype: 'passwordreminder',

    config: {
        ui: 'light',
        title: 'Get New Password',
        items: [
            {
                style: 'background: white; border-radius: 2px;',
                xtype: 'label',
                padding: 3,
                margin: '5px 0px 5px 0px',
                html: 'Please introduce an email address and we will send you a validation mail.'
            },
            {
                layout: 'hbox',
                xtype: 'container',
                margin: 2,
                items: [{
                    xtype: 'textfield',
                    flex: 1,
                    placeHolder: 'email address'
                }, {
                    xtype: 'button',
                    text: 'send mail',
                    ui: 'action',
                    margin: 2,
                    handler: function () {
                        this.up('passwordreminder').hide();
                    }
                }]
            }
        ]
    }
});