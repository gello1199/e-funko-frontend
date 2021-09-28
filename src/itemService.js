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
                price:itemPriceValue,
                description:itemDescriptionValue,
                image:itemImageValue,
                category_id:,
            }
        }
        debugger
        fetch(this.port + `/items`)
        .then(resp => resp.json())
        .then(data => console.log(data))
        
    }
}