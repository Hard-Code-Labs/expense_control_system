export default {
    "scalars": [
        0,
        1,
        4,
        5,
        6,
        11,
        13
    ],
    "types": {
        "BigDecimal": {},
        "Boolean": {},
        "CategoryInput": {
            "perUUID": [
                4
            ],
            "catName": [
                11
            ],
            "catType": [
                13
            ],
            "catIcon": [
                11
            ],
            "__typename": [
                11
            ]
        },
        "CategoryPageable": {
            "categories": [
                9
            ],
            "totalPages": [
                5
            ],
            "hasNextPage": [
                1
            ],
            "__typename": [
                11
            ]
        },
        "ID": {},
        "Int": {},
        "LocalDateTime": {},
        "Mutation": {
            "addCategory": [
                9,
                {
                    "category": [
                        2,
                        "CategoryInput!"
                    ]
                }
            ],
            "__typename": [
                11
            ]
        },
        "Person": {
            "perUUID": [
                4
            ],
            "perMail": [
                11
            ],
            "perName": [
                11
            ],
            "perLastname": [
                11
            ],
            "isEnabled": [
                1
            ],
            "categories": [
                3,
                {
                    "offset": [
                        5
                    ],
                    "limit": [
                        5
                    ]
                }
            ],
            "__typename": [
                11
            ]
        },
        "PersonCategory": {
            "catId": [
                4
            ],
            "catName": [
                11
            ],
            "catType": [
                13
            ],
            "catIcon": [
                11
            ],
            "isDeleted": [
                1
            ],
            "__typename": [
                11
            ]
        },
        "Query": {
            "personData": [
                8,
                {
                    "perMail": [
                        11,
                        "String!"
                    ]
                }
            ],
            "__typename": [
                11
            ]
        },
        "String": {},
        "Transaction": {
            "uuid": [
                4
            ],
            "date": [
                6
            ],
            "monthReference": [
                5
            ],
            "description": [
                11
            ],
            "amount": [
                0
            ],
            "__typename": [
                11
            ]
        },
        "TypeCategory": {}
    }
}