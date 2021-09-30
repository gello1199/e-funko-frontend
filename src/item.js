class Item {
    static all = [];
    static container = document.getElementById(`items-container`)
    constructor({name, id, price, description, image, category_id}) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.description = description;
        this.image = image;
        this.category_id = category_id;
        this.element = document.createElement('div');
        this.element.dataset['id'] = id;
        this.element.id = `item-${id}`;
        this.element.addEventListener(`click`, this.handleClick)


        Item.all.push(this)
        // debugger
    }

    renderToLi() {
        this.element.innerHTML = `
        <div class="item-container" data-id="${this.id}">
        <h3 class="name">Name: ${this.name}</h3>
        <p class="price">Price: $ ${this.price}</p>
        <p class="description">Description: ${this.description}</p>
        <img src="${this.image}" class="image"> <br><br>
        </div>

        <button class="edit" data-id="${this.id}">Edit</button>
        <button class="delete" data-id="${this.id}">Delete</button>
       
        `
        return this.element
    }

    updateItemInfo() {
        // debugger
        this.name = this.element.querySelector(`.edit-name`).value;
        this.price = this.element.querySelector(`.edit-price`).value;
        this.description = this.element.querySelector(`.edit-description`).value;
        this.image = this.element.querySelector(`.edit-image`).value;
        // debugger
        itemCall.updateItem(this)

    }

    // use arrow function to define this on declaration, not execution
    handleClick = (e) => { 
        if(e.target.innerText === "Edit") {
            // console.log(e.target);
            // debugger
            e.target.innerText = "Save Item"
            this.createEditForm()
        } else if(e.target.innerText === "Delete") {
            // console.log(e.target)
            itemCall.deleteItem(e)
        } else if(e.target.innerText === "Save Item") {
            e.target.innerText = "Edit"
            this.updateItemInfo()
            // console.log(e.target)
        }
    }

    createEditForm(){
        const div = this.element.querySelector('div')
        const nameValue = div.children[0].innerText.split(' ')[1]
        div.children[0].outerHTML = `Name: <input class="edit-name" value="${nameValue}">`
        const priceValue = div.children[1].innerText.split(' ')[2]
        div.children[1].outerHTML = `Price: <input class="edit-price" value="${priceValue}">`
        const descriptionValue = div.children[2].innerText.split(':')[1]
        div.children[2].outerHTML = `Description: <input class="edit-description" value="${descriptionValue}">`
        const imageValue = div.children[3].src
        div.children[3].outerHTML = `Image: <input class="edit-image" value="${imageValue}">`
        
    }

    appendToDom() {
        // debugger
        this.renderToLi()
        Item.container.appendChild(this.element)
    }
    
}