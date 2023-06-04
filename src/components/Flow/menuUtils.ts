export function createNewMenu(id: string){
    return {
        "width": 300,
        "height": 711,
        "id": `menu_${id}`,
        "position": {
            "x": 100.774716455307,
            "y": 400.15148173674334
        },
        "type": "MenuNode",
        "data": {
            "id": `menu_${id}`,
            "label": "Untitled Menu",
            // "name": "welcomeMenu",
            "type": "Menu",
            "category": "Menu",
            "description": "Untitled Menu",
            "inputs": {
                "systemMessagePrompt": "",
                "humanMessagePrompt": "",
                "promptValues": ""
            },
            "inputAnchors": [
                {
                    "label": "Menu Trigger",
                    "name": "menuTrigger",
                    "type": "MenuTrigger",
                    "optional": true,
                    "id": `menu_${id}-anchor-menuTrigger`
                }
            ],
            "inputParams": [
                {
                    "label": "Menu Name",
                    "name": "menuName",
                    "type": "string",
                    "placeholder": "Name of the Menu",
                    "id": `menu_${id}-input-menuName-string`
                },
                {
                    "label": "Menu Header",
                    "name": "menuHeader",
                    "type": "string",
                    "placeholder": "Menu Header",
                    "rows": 3,
                    "id": `menu_${id}-input-menuHeader-string`
                },
                {
                    "label": "Menu Footer",
                    "name": "menuFooter",
                    "type": "string",
                    "placeholder": "Menu Footer",
                    "optional": true,
                    "rows": 3,
                    "id": `menu_${id}-input-menuFooter-string`
                }
            ],
            "menuItems": [
                {
                    "label": "Menu Item 0",
                    "name": "item0",
                    "type": "string",
                    "placeholder": "Menu Item 0",
                    "id": `menu_${id}-input-item_0-string`
                },
                {
                    "label": "Menu Item 1",
                    "name": "item1",
                    "type": "string",
                    "placeholder": "Menu Item 1",
                    "id": `menu_${id}-input-item_1-string`
                },
                {
                    "label": "Menu Item 2",
                    "name": "item2",
                    "type": "string",
                    "placeholder": "Menu Item 2",
                    "id": "menu_${id}-input-item_2-string"
                },
                {
                    "label": "Menu Item 3",
                    "name": "item3",
                    "type": "string",
                    "placeholder": "Menu Item 3",
                    "id": `menu_${id}-input-item_3-string`
                },
                {
                    "label": "Menu Item 4",
                    "name": "item4",
                    "type": "string",
                    "placeholder": "Menu Item 4",
                    "id": `menu_${id}-input-item_4-string`
                }
            ],
            "outputs": {},
            "outputAnchors": [
            ],
            "selected": true
        }
    }
}

export function createInitialNodes() {
    return [
        {
            "width": 300,
            "height": 1162,
            "id": "menu_0",
            "position": {
                "x": -812.1697279891374,
                "y": 113.04037062563225
            },
            "type": "MenuNode",
            "data": {
                "id": "menu_0",
                "label": "Menu",
                "name": "Menu",
                "type": "Menu",
                "category": "Menu",
                "description": "Welcome menu for the bot.",
                "inputs": {
                    "systemMessagePrompt": "",
                    "humanMessagePrompt": "",
                    "promptValues": "",
                    "menuName": "Welcome Menu",
                    "menuHeader": "Welcome to ABC Bank",
                    "item0": "Account Information",
                    "item1": "Loans Information",
                    "item2": "Credit Card Information"
                },
                "inputAnchors": [
                    {
                        "label": "Menu Trigger",
                        "name": "menuTrigger",
                        "type": "MenuTrigger",
                        "optional": true,
                        "id": "menu_0-anchor-menuTrigger"
                    }
                ],
                "inputParams": [
                    {
                        "label": "Menu Name",
                        "name": "menuName",
                        "type": "string",
                        "placeholder": "Name of the Menu",
                        "id": "menu_0-input-menuName-string"
                    },
                    {
                        "label": "Menu Header",
                        "name": "menuHeader",
                        "type": "string",
                        "placeholder": "Menu Header",
                        "rows": 3,
                        "id": "menu_0-input-menuHeader-string"
                    },
                    {
                        "label": "Menu Footer",
                        "name": "menuFooter",
                        "type": "string",
                        "placeholder": "Menu Footer",
                        "optional": true,
                        "rows": 3,
                        "id": "menu_0-input-menuFooter-string"
                    }
                ],
                "menuItems": [
                    {
                        "label": "Menu Item 0",
                        "name": "item0",
                        "type": "string",
                        "placeholder": "Menu Item 0",
                        "id": "menu_0-input-item_0-string"
                    },
                    {
                        "label": "Menu Item 1",
                        "name": "item1",
                        "type": "string",
                        "placeholder": "Menu Item 1",
                        "id": "menu_0-input-item_1-string"
                    },
                    {
                        "label": "Menu Item 2",
                        "name": "item2",
                        "type": "string",
                        "placeholder": "Menu Item 2",
                        "id": "menu_0-input-item_2-string"
                    },
                    {
                        "label": "Menu Item 3",
                        "name": "item3",
                        "type": "string",
                        "placeholder": "Menu Item 3",
                        "id": "menu_0-input-item_3-string"
                    },
                    {
                        "label": "Menu Item 4",
                        "name": "item4",
                        "type": "string",
                        "placeholder": "Menu Item 4",
                        "id": "menu_0-input-item_4-string"
                    }
                ],
                "outputs": {},
                "outputAnchors": [],
                "selected": true
            },
            "selected": false,
            "positionAbsolute": {
                "x": -812.1697279891374,
                "y": 113.04037062563225
            },
            "dragging": false
        },
        {
            "width": 300,
            "height": 1162,
            "id": "menu_80aca9e9-9261-45d5-8932-637607718705",
            "position": {
                "x": 263.38582756641813,
                "y": 114.76259284785442
            },
            "type": "MenuNode",
            "data": {
                "id": "menu_80aca9e9-9261-45d5-8932-637607718705",
                "label": "Untitled Menu",
                "type": "Menu",
                "category": "Menu",
                "description": "Untitled Menu",
                "inputs": {
                    "systemMessagePrompt": "",
                    "humanMessagePrompt": "",
                    "promptValues": "",
                    "menuName": "Account Information Menu",
                    "menuHeader": "We provide multiple times of accounts. \nSelect the account type you want from the list below",
                    "item0": "Savings Accounts",
                    "item1": "Current Accounts",
                    "item2": "Minor Accounts"
                },
                "inputAnchors": [
                    {
                        "label": "Menu Trigger",
                        "name": "menuTrigger",
                        "type": "MenuTrigger",
                        "optional": true,
                        "id": "menu_80aca9e9-9261-45d5-8932-637607718705-anchor-menuTrigger"
                    }
                ],
                "inputParams": [
                    {
                        "label": "Menu Name",
                        "name": "menuName",
                        "type": "string",
                        "placeholder": "Name of the Menu",
                        "id": "menu_80aca9e9-9261-45d5-8932-637607718705-input-menuName-string"
                    },
                    {
                        "label": "Menu Header",
                        "name": "menuHeader",
                        "type": "string",
                        "placeholder": "Menu Header",
                        "rows": 3,
                        "id": "menu_80aca9e9-9261-45d5-8932-637607718705-input-menuHeader-string"
                    },
                    {
                        "label": "Menu Footer",
                        "name": "menuFooter",
                        "type": "string",
                        "placeholder": "Menu Footer",
                        "optional": true,
                        "rows": 3,
                        "id": "menu_80aca9e9-9261-45d5-8932-637607718705-input-menuFooter-string"
                    }
                ],
                "menuItems": [
                    {
                        "label": "Menu Item 0",
                        "name": "item0",
                        "type": "string",
                        "placeholder": "Menu Item 0",
                        "id": "menu_80aca9e9-9261-45d5-8932-637607718705-input-item_0-string"
                    },
                    {
                        "label": "Menu Item 1",
                        "name": "item1",
                        "type": "string",
                        "placeholder": "Menu Item 1",
                        "id": "menu_80aca9e9-9261-45d5-8932-637607718705-input-item_1-string"
                    },
                    {
                        "label": "Menu Item 2",
                        "name": "item2",
                        "type": "string",
                        "placeholder": "Menu Item 2",
                        "id": "menu_${id}-input-item_2-string"
                    },
                    {
                        "label": "Menu Item 3",
                        "name": "item3",
                        "type": "string",
                        "placeholder": "Menu Item 3",
                        "id": "menu_80aca9e9-9261-45d5-8932-637607718705-input-item_3-string"
                    },
                    {
                        "label": "Menu Item 4",
                        "name": "item4",
                        "type": "string",
                        "placeholder": "Menu Item 4",
                        "id": "menu_80aca9e9-9261-45d5-8932-637607718705-input-item_4-string"
                    }
                ],
                "outputs": {},
                "outputAnchors": [],
                "selected": true
            },
            "selected": false,
            "positionAbsolute": {
                "x": 263.38582756641813,
                "y": 114.76259284785442
            },
            "dragging": false
        },
        {
            "width": 300,
            "height": 1162,
            "id": "menu_aad53552-818e-4721-9092-95be7803082d",
            "position": {
                "x": 925.663605344196,
                "y": 121.9848150700767
            },
            "type": "MenuNode",
            "data": {
                "id": "menu_aad53552-818e-4721-9092-95be7803082d",
                "label": "Untitled Menu",
                "type": "Menu",
                "category": "Menu",
                "description": "Untitled Menu",
                "inputs": {
                    "systemMessagePrompt": "",
                    "humanMessagePrompt": "",
                    "promptValues": "",
                    "menuName": "Loan Information Menu",
                    "menuHeader": "Following loans are provided by ABC bank.",
                    "item0": "Personal Loans",
                    "item1": "Property Loans",
                    "item2": "Vehicle Loans"
                },
                "inputAnchors": [
                    {
                        "label": "Menu Trigger",
                        "name": "menuTrigger",
                        "type": "MenuTrigger",
                        "optional": true,
                        "id": "menu_aad53552-818e-4721-9092-95be7803082d-anchor-menuTrigger"
                    }
                ],
                "inputParams": [
                    {
                        "label": "Menu Name",
                        "name": "menuName",
                        "type": "string",
                        "placeholder": "Name of the Menu",
                        "id": "menu_aad53552-818e-4721-9092-95be7803082d-input-menuName-string"
                    },
                    {
                        "label": "Menu Header",
                        "name": "menuHeader",
                        "type": "string",
                        "placeholder": "Menu Header",
                        "rows": 3,
                        "id": "menu_aad53552-818e-4721-9092-95be7803082d-input-menuHeader-string"
                    },
                    {
                        "label": "Menu Footer",
                        "name": "menuFooter",
                        "type": "string",
                        "placeholder": "Menu Footer",
                        "optional": true,
                        "rows": 3,
                        "id": "menu_aad53552-818e-4721-9092-95be7803082d-input-menuFooter-string"
                    }
                ],
                "menuItems": [
                    {
                        "label": "Menu Item 0",
                        "name": "item0",
                        "type": "string",
                        "placeholder": "Menu Item 0",
                        "id": "menu_aad53552-818e-4721-9092-95be7803082d-input-item_0-string"
                    },
                    {
                        "label": "Menu Item 1",
                        "name": "item1",
                        "type": "string",
                        "placeholder": "Menu Item 1",
                        "id": "menu_aad53552-818e-4721-9092-95be7803082d-input-item_1-string"
                    },
                    {
                        "label": "Menu Item 2",
                        "name": "item2",
                        "type": "string",
                        "placeholder": "Menu Item 2",
                        "id": "menu_${id}-input-item_2-string"
                    },
                    {
                        "label": "Menu Item 3",
                        "name": "item3",
                        "type": "string",
                        "placeholder": "Menu Item 3",
                        "id": "menu_aad53552-818e-4721-9092-95be7803082d-input-item_3-string"
                    },
                    {
                        "label": "Menu Item 4",
                        "name": "item4",
                        "type": "string",
                        "placeholder": "Menu Item 4",
                        "id": "menu_aad53552-818e-4721-9092-95be7803082d-input-item_4-string"
                    }
                ],
                "outputs": {},
                "outputAnchors": [],
                "selected": true
            },
            "selected": true,
            "positionAbsolute": {
                "x": 925.663605344196,
                "y": 121.9848150700767
            },
            "dragging": false
        }
    ]
}

export function createInitialEdges(){
    return [
        {
            "animated": true,
            "type": "buttonedge",
            "source": "menu_0",
            "sourceHandle": "menu_0-input-item_0-string",
            "target": "menu_80aca9e9-9261-45d5-8932-637607718705",
            "targetHandle": "menu_80aca9e9-9261-45d5-8932-637607718705-anchor-menuTrigger",
            "id": "menu_0-menu_0-input-item_0-string-menu_80aca9e9-9261-45d5-8932-637607718705-menu_80aca9e9-9261-45d5-8932-637607718705-anchor-menuTrigger",
            "data": {
                "label": ""
            }
        },
        {
            "animated": true,
            "type": "buttonedge",
            "source": "menu_0",
            "sourceHandle": "menu_0-input-item_1-string",
            "target": "menu_aad53552-818e-4721-9092-95be7803082d",
            "targetHandle": "menu_aad53552-818e-4721-9092-95be7803082d-anchor-menuTrigger",
            "id": "menu_0-menu_0-input-item_1-string-menu_aad53552-818e-4721-9092-95be7803082d-menu_aad53552-818e-4721-9092-95be7803082d-anchor-menuTrigger",
            "data": {
                "label": ""
            }
        }
    ]
}