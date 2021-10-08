class ItemService {
    constructor(port) {
        this.port = port
    }

    getItems() {
        fetch(this.port + `/items`)
        .then(resp => resp.json())
        .then(data => {
            // debugger
            for(const item of data) {
                // debugger
                let i = new Item(item)
                i.appendToDom()
                // debugger
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
                category_name: categoryNameValue.value 
                // need to nest itemInfo inside item: for backend to read category_id and category_name 
            }
        }
        // debugger
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
            // debugger
            if(data.error) {
                alert(data.error.join(', '))
            } else {
                const newItem = new Item(data)
                // debugger
                const findCat = Category.all.find(c => c.id === newItem.categoryId)
                // debugger
                if(!findCat) {
                    let catObject = new Category({id: data.category.id, name: data.category.name}) 
                    catObject.addToDropdown()
                    catObject.addToCatFormDropdown()
                    // debugger
                }
                newItem.appendToDom()
                form.reset()
                alert("Added!")
              
            }
         
        })
        .catch(error => console.log(error))
    }

    updateItem(item) {
        const {name, price, description, image, id} = item
        const itemInfo = {
            name,
            price,
            description,
            image,
            id
        }

        const configObject = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }, 
            body: JSON.stringify(itemInfo)
        }
        fetch(this.port + `/items/${id}`, configObject)
        .then(resp => resp.json())
        .then(data => {
            if(data.error){
                alert(data.error.join(', '))
            }else {
                item.renderToLi() 
            alert("Changed!")
        }
        })
        
    }


    deleteItem(e) {
// debugger
        const id = e.target.dataset.id
        e.target.parentElement.remove()

        fetch(this.port + `/items/${id}`, {method: `DELETE`})
        .then(resp => resp.json())
        .then(data => alert(data.message))

    }
}