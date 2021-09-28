class ItemService {
    constructor(port) {
        this.port = port
    }

    getItems() {
        fetch(this.port + `/items`)
        .then(resp => resp.json())
        .then(data => {
            for(const item of data) {
                let i = new Item(item)
                i.appendToDom()
            }
        })
    }

    createItems() {
        const itemInfo = {
            item: {
                name: itemNameValue.value,
                price:itemPriceValue.value,
                description:itemDescriptionValue.value,
                image:itemImageValue.value,
                category_id: dropDown.value,
            }
        }
        const configObject = {
            method: `POST`,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(itemInfo)
        }

        // debugger
        fetch(this.port + `/items`, configObject)
        .then(resp => resp.json())
        .then(data => {
            const newItem = new Item(data)
            newItem.appendToDom()
        })
        
    }
}