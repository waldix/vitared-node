Ext.define('WWWOWWW.controller.UserController', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            forgot: 'forgotPassword',
            terms: 'termsAndConditions',
            privacy: 'privacy'
        },

        refs: {
            loginButton: '#Login',
            reminderButton: '#Reminder',
            invitation: '#invitation'

        },
        control: {
            loginButton: {
                tap: 'login'
            },
            reminderButton: {
                tap: 'remind'
            },
            invitation: {
                tap: 'invite'
            }
        }
    },

    login: function (loginButton) {
        Ext.Viewport.animateActiveItem({xtype: 'main'}, {type: 'slide', direction: 'left'});
    },

    remind: function (remindButton) {
        Ext.Msg.alert('Reminded', 'You have been sent a mail to get you back WWWOWWWing.', Ext.emptyFn);
    },

    invite: function (inviteButton) {
        Ext.Msg.show({
            title: i18n.t('login.inviteTitle'),
            msg: null,
            style: 'font-size: 13px;',
            cls: 'wwwowww-invite-dialog',
            buttons: [
                {
                    itemId: 'ok',
                    text: 'cancel'
                },
                {
                    itemId: 'submit',
                    text: 'submit'
                }
            ],
            prompt: { maxlength: 180, autocapitalize: false },
            fn: function (text, btn) {
                // do some stuff
            },
            items: [
                {
                    xtype: 'container',
                    getValue: function () {
                        // Dummy method to override default as default expects an input here.
                    },
                    setValue: function () {
                        // Dummy method to override default as default expects an input here.
                    },
                    items: [
                        {
                            xtype: 'textfield',
                            placeHolder: 'Name'
                        },
                        {
                            xtype: 'textfield',
                            placeHolder: 'Last Name'
                        },
                        {
                            xtype: 'passwordfield',
                            placeHolder: 'password'
                        }
                    ]
                }
            ]
        });
    },

    forgotPassword: function () {
        Ext.Msg.show({
            title: i18n.t('login.newPassword'),
            style: 'font-size: 13px',
            message: i18n.t('login.introduceEmail'),
            width: 300,
            buttons: [
                {
                    itemId: 'ok',
                    text: i18n.t('login.cancel')
                },
                {
                    itemId: 'submit',
                    text: i18n.t('login.submit')
                }
            ],
            prompt : { maxlength : 180, autocapitalize : true, placeHolder: i18n.t('login.email') },
            fn: function(buttonId) {
                // do some stuff.
            }
        });
//        Ext.Msg.prompt(
//            style: 'font-size: 13px',
//            i18n.t('login.newPassword'),
//            i18n.t('login.introduceEmail'),
//            function (buttonId, value) {
//                console.log(value);
//            },
//            null,
//            false,
//            null,
//            {
//                placeHolder: i18n.t('login.email')
//            }
//        );
    },

    termsAndConditions: function () {
        Ext.Msg.alert('Terms of use', 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.', Ext.emptyFn);
    },

    privacy: function () {
        Ext.Msg.alert('Privacy', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', Ext.emptyFn);
    }

});