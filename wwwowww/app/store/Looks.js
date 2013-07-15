Ext.define("WWWOWWW.store.Looks", {

    extend: "Ext.data.Store",

    config: {

        storeId: "LookStore",

        model: "WWWOWWW.model.Look",

        autoLoad: true,

        data: [
            {
                adds: 10,
                wows: 23, type: 'look',
                image: {
                    full: 'resources/server/img/import/full/look00.png',
                    half: 'resources/server/img/import/half/look00.png',
                    third: 'resources/server/img/import/third/look00.png',
                    quarter: 'resources/server/img/import/fourth/look00.png'
                },
                author: 'Àngels',
                imports: [
                    {
                        image: {
                            full: 'resources/server/img/import/full/import00.png',
                            half: 'resources/server/img/import/half/import00.png',
                            third: 'resources/server/img/import/third/import00.png',
                            quarter: 'resources/server/img/import/fourth/import00.png'
                        },
                        description: 'Yellow short sleeved top',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'top',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 4096, adds: 4096
                    },
                    {
                        adds: 3,
                        wows: 34, type: 'look',
                        image: {
                            full: 'resources/server/img/import/full/import01.png',
                            half: 'resources/server/img/import/half/import01.png',
                            third: 'resources/server/img/import/third/import01.png',
                            quarter: 'resources/server/img/import/fourth/import01.png'
                        },
                        description: 'Sky blue slip on shoe',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'accessory',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 2048, adds: 2048
                    }
                ]
            },
            {
                adds: 1,
                wows: 230, type: 'look',
                image: {
                    full: 'resources/server/img/import/full/look01.png',
                    half: 'resources/server/img/import/half/look01.png',
                    third: 'resources/server/img/import/third/look01.png',
                    quarter: 'resources/server/img/import/fourth/look01.png',
                    
                },
                author: 'Carlos',
                imports: [
                    {
                        image: {
                            full: 'resources/server/img/import/full/import04.png',
                            half: 'resources/server/img/import/half/import04.png',
                            third: 'resources/server/img/import/third/import04.png',
                            quarter: 'resources/server/img/import/fourth/import04.png'
                        },
                        description: 'Suede jacket',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'top',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 256, adds: 256
                    },
                    {
                        image: {
                            full: 'resources/server/img/import/full/import05.png',
                            half: 'resources/server/img/import/half/import05.png',
                            third: 'resources/server/img/import/third/import05.png',
                            quarter: 'resources/server/img/import/fourth/import05.png'
                        },
                        description: 'tight jeans',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'bottom',
                        drawer: 'string',
                        closet: 'string',
                        buyable: false,
                        wows: 128, adds: 128
                    },
                    {
                        image: {
                            full: 'resources/server/img/import/full/import06.png',
                            half: 'resources/server/img/import/half/import06.png',
                            third: 'resources/server/img/import/third/import06.png',
                            quarter: 'resources/server/img/import/fourth/import06.png'
                        },
                        description: 'Burgundy Top',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'top',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 32, adds: 32
                    }
                ]
            },
            {   adds: 98,
                wows: 74, type: 'look',
                image: {
                    full: 'resources/server/img/import/full/look02.png',
                    half: 'resources/server/img/import/half/look02.png',
                    third: 'resources/server/img/import/third/look02.png',
                    quarter: 'resources/server/img/import/fourth/look02.png'
                },
                author: 'Mariano',
                imports: [
                    {
                        image: {
                            full: 'resources/server/img/import/full/import05.png',
                            half: 'resources/server/img/import/half/import05.png',
                            third: 'resources/server/img/import/third/import05.png',
                            quarter: 'resources/server/img/import/fourth/import05.png'
                        },
                        description: 'tight jeans',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'bottom',
                        drawer: 'string',
                        closet: 'string',
                        buyable: false,
                        wows: 128, adds: 128
                    },
                    {
                        image: {
                            full: 'resources/server/img/import/full/import06.png',
                            half: 'resources/server/img/import/half/import06.png',
                            third: 'resources/server/img/import/third/import06.png',
                            quarter: 'resources/server/img/import/fourth/import06.png'
                        },
                        description: 'Burgundy Top',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'top',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 32, adds: 32
                    },
                    {
                        image: {
                            full: 'resources/server/img/import/full/import07.png',
                            half: 'resources/server/img/import/half/import07.png',
                            third: 'resources/server/img/import/third/import07.png',
                            quarter: 'resources/server/img/import/fourth/import07.png'
                        },
                        description: 'Wine coloured hot pants',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'bottom',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 10424, adds: 10424
                    }
                ]
            },
            {
                adds: 987,
                wows: 32, type: 'look',
                image: {
                    full: 'resources/server/img/import/full/look03.png',
                    half: 'resources/server/img/import/half/look03.png',
                    third: 'resources/server/img/import/third/look03.png',
                    quarter: 'resources/server/img/import/fourth/look03.png'
                },
                author: 'Jose',
                imports: [
                    {
                        image: {
                            full: 'resources/server/img/import/full/import08.png',
                            half: 'resources/server/img/import/half/import08.png',
                            third: 'resources/server/img/import/third/import08.png',
                            quarter: 'resources/server/img/import/fourth/import08.png'
                        },
                        description: 'A boot',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'accessory',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 16, adds: 16
                    },
                    {
                        image: {
                            full: 'resources/server/img/import/full/import09.png',
                            half: 'resources/server/img/import/half/import09.png',
                            third: 'resources/server/img/import/third/import09.png',
                            quarter: 'resources/server/img/import/fourth/import09.png'
                        },
                        description: 'Violet high heel shoe',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'accessory',
                        drawer: 'string',
                        closet: 'string',
                        buyable: false,
                        wows: 8, adds: 8
                    },
                    {
                        image: {
                            full: 'resources/server/img/import/full/import10.png',
                            half: 'resources/server/img/import/half/import10.png',
                            third: 'resources/server/img/import/third/import10.png',
                            quarter: 'resources/server/img/import/fourth/import10.png'
                        },
                        description: 'Black leather bag',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'accessory',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 4, adds: 4
                    }
                ]
            },
            {
                adds: 10000,
                wows: 232, type: 'look',
                image: {
                    full: 'resources/server/img/import/full/look04.png',
                    half: 'resources/server/img/import/half/look04.png',
                    third: 'resources/server/img/import/third/look04.png',
                    quarter: 'resources/server/img/import/fourth/look04.png'
                },
                author: 'Manuel',
                imports: [
                    {
                        image: {
                            full: 'resources/server/img/import/full/import07.png',
                            half: 'resources/server/img/import/half/import07.png',
                            third: 'resources/server/img/import/third/import07.png',
                            quarter: 'resources/server/img/import/fourth/import07.png'
                        },
                        description: 'Wine coloured hot pants',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'bottom',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 10424, adds: 10424
                    },
                    {
                        image: {
                            full: 'resources/server/img/import/full/import08.png',
                            half: 'resources/server/img/import/half/import08.png',
                            third: 'resources/server/img/import/third/import08.png',
                            quarter: 'resources/server/img/import/fourth/import08.png'
                        },
                        description: 'A boot',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'accessory',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 16, adds: 16
                    }
                ]
            },
            {
                adds: 190,
                wows: 2, type: 'look',
                image: {
                    full: 'resources/server/img/import/full/look05.png',
                    half: 'resources/server/img/import/half/look05.png',
                    third: 'resources/server/img/import/third/look05.png',
                    quarter: 'resources/server/img/import/fourth/look05.png'
                },
                author: 'Felix',
                imports: [
                    {
                        image: {full: 'resources/server/img/import/full/import00.png', half: 'resources/server/img/import/half/import00.png', third: 'resources/server/img/import/third/import00.png', quarter: 'resources/server/img/import/fourth/import00.png'},
                        description: 'Yellow short sleeved top',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'top',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 4096, adds: 4096
                    },
                    {
                        image: {
                            full: 'resources/server/img/import/full/import01.png',
                            half: 'resources/server/img/import/half/import01.png',
                            third: 'resources/server/img/import/third/import01.png',
                            quarter: 'resources/server/img/import/fourth/import01.png'
                        },
                        description: 'Sky blue slip on shoe',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'accessory',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 2048, adds: 2048
                    },
                    {
                        image: {
                            full: 'resources/server/img/import/full/import02.png',
                            half: 'resources/server/img/import/half/import02.png',
                            third: 'resources/server/img/import/third/import02.png',
                            quarter: 'resources/server/img/import/fourth/import02.png'},
                        description: 'grey coat',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'top',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 512, adds: 512
                    },
                    {
                        image: {
                            full: 'resources/server/img/import/full/import03.png',
                            half: 'resources/server/img/import/half/import03.png',
                            third: 'resources/server/img/import/third/import03.png',
                            quarter: 'resources/server/img/import/fourth/import03.png'
                        },
                        description: 'white dress',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'top',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 64, adds: 64
                    },
                    {
                        image: {
                            full: 'resources/server/img/import/full/import04.png',
                            half: 'resources/server/img/import/half/import04.png',
                            third: 'resources/server/img/import/third/import04.png',
                            quarter: 'resources/server/img/import/fourth/import04.png'
                        },
                        description: 'Suede jacket',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'top',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 256, adds: 256
                    },
                    {
                        image: {
                            full: 'resources/server/img/import/full/import05.png',
                            half: 'resources/server/img/import/half/import05.png',
                            third: 'resources/server/img/import/third/import05.png',
                            quarter: 'resources/server/img/import/fourth/import05.png'
                        },
                        description: 'tight jeans',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'bottom',
                        drawer: 'string',
                        closet: 'string',
                        buyable: false,
                        wows: 128, adds: 128
                    }
                ]
            },
            {
                adds: 1,
                wows: 2, type: 'look',
                image: {
                    full: 'resources/server/img/import/full/look06.png',
                    half: 'resources/server/img/import/half/look06.png',
                    third: 'resources/server/img/import/third/look06.png',
                    quarter: 'resources/server/img/import/fourth/look06.png'
                },
                author: 'Jasmine',
                imports: [
                    {
                        image: {
                            full: 'resources/server/img/import/full/import02.png',
                            half: 'resources/server/img/import/half/import02.png',
                            third: 'resources/server/img/import/third/import02.png',
                            quarter: 'resources/server/img/import/fourth/import02.png'},
                        description: 'grey coat',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'top',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 512, adds: 512
                    },
                    {
                        image: {
                            full: 'resources/server/img/import/full/import03.png',
                            half: 'resources/server/img/import/half/import03.png',
                            third: 'resources/server/img/import/third/import03.png',
                            quarter: 'resources/server/img/import/fourth/import03.png'
                        },
                        description: 'white dress',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'top',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 64, adds: 64
                    },
                    {
                        image: {
                            full: 'resources/server/img/import/full/import04.png',
                            half: 'resources/server/img/import/half/import04.png',
                            third: 'resources/server/img/import/third/import04.png',
                            quarter: 'resources/server/img/import/fourth/import04.png'
                        },
                        description: 'Suede jacket',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'top',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 256, adds: 256
                    }
                ]
            },
            {
                adds: 11,
                wows: 675, type: 'look',
                image: {
                    full: 'resources/server/img/import/full/look07.png',
                    half: 'resources/server/img/import/half/look07.png',
                    third: 'resources/server/img/import/third/look07.png',
                    quarter: 'resources/server/img/import/fourth/look07.png'
                },
                author: 'Aijona',
                imports: [
                    {
                        image: {
                            full: 'resources/server/img/import/full/import05.png',
                            half: 'resources/server/img/import/half/import05.png',
                            third: 'resources/server/img/import/third/import05.png',
                            quarter: 'resources/server/img/import/fourth/import05.png'
                        },
                        description: 'tight jeans',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'bottom',
                        drawer: 'string',
                        closet: 'string',
                        buyable: false,
                        wows: 128, adds: 128
                    },
                    {
                        image: {
                            full: 'resources/server/img/import/full/import06.png',
                            half: 'resources/server/img/import/half/import06.png',
                            third: 'resources/server/img/import/third/import06.png',
                            quarter: 'resources/server/img/import/fourth/import06.png'
                        },
                        description: 'Burgundy Top',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'top',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 32, adds: 32
                    },
                    {
                        image: {
                            full: 'resources/server/img/import/full/import07.png',
                            half: 'resources/server/img/import/half/import07.png',
                            third: 'resources/server/img/import/third/import07.png',
                            quarter: 'resources/server/img/import/fourth/import07.png'
                        },
                        description: 'Wine coloured hot pants',
                        link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/', type: 'import', author: 'Carlos Mas',
                        importerId: 'string',
                        category: 'bottom',
                        drawer: 'string',
                        closet: 'string',
                        buyable: true,
                        wows: 10424, adds: 10424
                    }
                ]
            },

            {
                type: 'import', author: 'Carlos Mas',
                image: {full: 'resources/server/img/import/full/import00.png', half: 'resources/server/img/import/half/import00.png', third: 'resources/server/img/import/third/import00.png', quarter: 'resources/server/img/import/fourth/import00.png'},
                description: 'Yellow short sleeved top',
                link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/',
                importerId: 'string',
                category: 'top',
                drawer: 'string',
                closet: 'string',
                buyable: true,
                wows: 4096,
                adds: 4096
            },
            {
                type: 'import', author: 'Carlos Mas',
                image: {
                    full: 'resources/server/img/import/full/import01.png',
                    half: 'resources/server/img/import/half/import01.png',
                    third: 'resources/server/img/import/third/import01.png',
                    quarter: 'resources/server/img/import/fourth/import01.png'
                },
                description: 'Sky blue slip on shoe',
                link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/',
                importerId: 'string',
                category: 'accessory',
                drawer: 'string',
                closet: 'string',
                buyable: true,
                wows: 2048,
                adds: 2048
            },
            {
                type: 'import', author: 'Carlos Mas',
                image: {
                    full: 'resources/server/img/import/full/import02.png',
                    half: 'resources/server/img/import/half/import02.png',
                    third: 'resources/server/img/import/third/import02.png',
                    quarter: 'resources/server/img/import/fourth/import02.png'},
                description: 'grey coat',
                link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/',
                importerId: 'string',
                category: 'top',
                drawer: 'string',
                closet: 'string',
                buyable: true,
                wows: 512,
                adds: 512
            },
            {
                type: 'import', author: 'Carlos Mas',
                image: {
                    full: 'resources/server/img/import/full/import03.png',
                    half: 'resources/server/img/import/half/import03.png',
                    third: 'resources/server/img/import/third/import03.png',
                    quarter: 'resources/server/img/import/fourth/import03.png'
                },
                description: 'white dress',
                link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/',
                importerId: 'string',
                category: 'top',
                drawer: 'string',
                closet: 'string',
                buyable: true,
                wows: 64,
                adds: 64
            },
            {
                type: 'import', author: 'Carlos Mas',
                image: {
                    full: 'resources/server/img/import/full/import04.png',
                    half: 'resources/server/img/import/half/import04.png',
                    third: 'resources/server/img/import/third/import04.png',
                    quarter: 'resources/server/img/import/fourth/import04.png'
                },
                description: 'Suede jacket',
                link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/',
                importerId: 'string',
                category: 'top',
                drawer: 'string',
                closet: 'string',
                buyable: true,
                wows: 256,
                adds: 256
            },
            {
                type: 'import', author: 'Carlos Mas',
                image: {
                    full: 'resources/server/img/import/full/import05.png',
                    half: 'resources/server/img/import/half/import05.png',
                    third: 'resources/server/img/import/third/import05.png',
                    quarter: 'resources/server/img/import/fourth/import05.png'
                },
                description: 'tight jeans',
                link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/',
                importerId: 'string',
                category: 'bottom',
                drawer: 'string',
                closet: 'string',
                buyable: false,
                wows: 128,
                adds: 128
            },
            {
                type: 'import', author: 'Carlos Mas',
                image: {
                    full: 'resources/server/img/import/full/import06.png',
                    half: 'resources/server/img/import/half/import06.png',
                    third: 'resources/server/img/import/third/import06.png',
                    quarter: 'resources/server/img/import/fourth/import06.png'
                },
                description: 'Burgundy Top',
                link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/',
                importerId: 'string',
                category: 'top',
                drawer: 'string',
                closet: 'string',
                buyable: true,
                wows: 32,
                adds: 32
            },
            {
                type: 'import', author: 'Carlos Mas',
                image: {
                    full: 'resources/server/img/import/full/import07.png',
                    half: 'resources/server/img/import/half/import07.png',
                    third: 'resources/server/img/import/third/import07.png',
                    quarter: 'resources/server/img/import/fourth/import07.png'
                },
                description: 'Wine coloured hot pants',
                link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/',
                importerId: 'string',
                category: 'bottom',
                drawer: 'string',
                closet: 'string',
                buyable: true,
                wows: 10424,
                adds: 10424
            },
            {
                type: 'import', author: 'Carlos Mas',
                image: {
                    full: 'resources/server/img/import/full/import08.png',
                    half: 'resources/server/img/import/half/import08.png',
                    third: 'resources/server/img/import/third/import08.png',
                    quarter: 'resources/server/img/import/fourth/import08.png'
                },
                description: 'A boot',
                link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/',
                importerId: 'string',
                category: 'accessory',
                drawer: 'string',
                closet: 'string',
                buyable: true,
                wows: 16,
                adds: 16
            },
            {
                type: 'import', author: 'Carlos Mas',
                image: {
                    full: 'resources/server/img/import/full/import09.png',
                    half: 'resources/server/img/import/half/import09.png',
                    third: 'resources/server/img/import/third/import09.png',
                    quarter: 'resources/server/img/import/fourth/import09.png'
                },
                description: 'Violet high heel shoe',
                link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/',
                importerId: 'string',
                category: 'accessory',
                drawer: 'string',
                closet: 'string',
                buyable: false,
                wows: 8,
                adds: 8
            },
            {
                type: 'import', author: 'Carlos Mas',
                image: {
                    full: 'resources/server/img/import/full/import10.png',
                    half: 'resources/server/img/import/half/import10.png',
                    third: 'resources/server/img/import/third/import10.png',
                    quarter: 'resources/server/img/import/fourth/import10.png'
                },
                description: 'Black leather bag',
                link: 'http://es.burberry.com/store/womens-accessories/sunglasses/spark/prod-38873471-spark-tortoiseshell-cat-eye-sunglasses/',
                importerId: 'string',
                category: 'accessory',
                drawer: 'string',
                closet: 'string',
                buyable: true,
                wows: 4,
                adds: 4
            }
        ]
    }

});
