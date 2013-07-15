Ext.define('WWWOWWW.view.user.Login', {

    extend: 'Ext.Container',

    xtype: 'login',

    requires: ['Ext.form.FieldSet', 'Ext.field.Password', 'Ext.Img'],

    config: {

        scrollable: true,

        user: null,

        layout: {
            type: 'vbox',
            pack: 'middle'
        },

        items: [
            {
                flex: 1,
                layout: {
                    type: 'vbox',
                    pack: 'top'
                },
                items: [
                    {
                        xtype: 'component',
                        width: '100%',
                        height: 50,
                        cls: 'wwwowww-home'
                    },
                    {
                        xtype: 'component',
                        width: '100%',
                        height: 80,
                        cls: 'wwwowww-diamond-background'
                    }
                ]
            },
            {
                scrollable: true,
                style: 'font-size: 13px;',
                flex: 1,
                items: [
                    {
                        xtype: 'label',
                        html: i18n.t('login.invitation_required'),
                        cls: 'title',
                        height: 30
                    },
                    {
                        xtype: 'textfield',
                        required: true,
                        placeHolder: i18n.t('login.username'),
                        padding: '0px 24px'
                    },
                    {
                        xtype: 'textfield',
                        readOnly: true,
                        placeHolder: i18n.t('login.inviteMail'),
                        id: 'loginInviteEmail',
                        padding: '0px 24px'
                    },
                    {
                        xtype: 'passwordfield',
                        placeHolder: i18n.t('login.password'),
                        required: true,
                        padding: '0px 24px'
                    },
                    {
                        padding: '0px 24px',
                        xtype: 'label',
                        tpl: 'Clicking the register button you are accepting our <a href="#{usage.link}">{usage.text}</a> and <a href="#{privacy.link}">{privacy.text}</a>',
                        data: {
                            usage: {
                                text: 'terms of usage',
                                link: 'terms'
                            },
                            privacy: {
                                text: 'privacy policy',
                                link: 'privacy'
                            }
                        }
                    }
                ]
            },
            {
                xtype: 'tabbar',
                docked: 'bottom',
                items: [
                    {
                        title: i18n.t('login.register'),
                        iconCls: 'wow_OFF',
                        id: 'Login'
                    }
                ]
            }
        ]
    },

    initialize: function () {
        // Initialise the parents, if not called nothing may be rendered.
        this.callParent(arguments);
        var user = this.getUser();
        this.down('#loginInviteEmail').setValue(user);
    }
});