Ext.define('WWWOWWW.view.user.Public', {

    extend: 'Ext.Container',

    xtype: 'public',

    requires: ['Ext.form.FieldSet', 'Ext.field.Password', 'Ext.Img'],

    config: {

        fullscreen: true,

        layout: 'vbox',

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
                        placeHolder: i18n.t('login.email'),
                        padding: '0px 24px'
                    },
                    {
                        xtype: 'passwordfield',
                        required: true,
                        placeHolder: i18n.t('login.password'),
                        padding: '0px 24px'
                    },
                    {
                        layout: {
                            type: 'hbox',
                            pack: 'center'
                        },
                        defaults: {
                            margin: 5
                        },
                        items: [
                            {
                                xtype: 'button',
                                text: i18n.t('login.invitation'),
                                id: 'invitation',
                                width: 100
                            },
                            {
                                xtype: 'button',
                                text: i18n.t('login.login'),
                                id: 'Login',
                                width: 100
                            }

                        ]
                    },
                    {
                        xtype: 'label',
                        tpl: '<a href="{link}">{text}</a>',
                        data: {
                            text: i18n.t('login.remember'),
                            link: '#forgot'
                        },
                        style: 'text-align: center;',
                        listeners: {
                            tap: {
                                fn: function () {
                                    console.log('Handle it!');
                                }
                            }
                        }
                    }
                ]
            },
            {
                // Botom tabbar
                xtype: 'tabbar',
                docked: 'bottom',
                items: [

                    {
                        xtype: 'label',
                        html: '<a href="https://twitter.com/wwwowwwme"><img width="30" src="resources/images/default/pictos/twitter.png"></a>'
                    },
                    {
                        title: i18n.t('login.about'),
                        iconCls: 'wow_OFF',
                        handler: function () {
                            window.open('http://wwwowww.me/co', '_blank');
                        }
                    },
                    {
                        xtype: 'label',
                        html: '<a href="https://www.facebook.com/pages/WWWOWWW/134269306749487"><img width="30" src="resources/images/default/pictos/facebook.png"></a>'
                    }
                ]
            }
        ]
    }
})
;