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
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `item-${id}`;
        Item.all.push(this)
        // debugger
    }

    renderToLi() {
        this.element.innerHTML = `
        <div class="id" data-id="${this.id}">
        <h3 class="name">Name: ${this.name}</h3>
        <p class="price">Price: $ ${this.price}</p>
        <p class="description">Description: ${this.description}</p>
        <img src="${this.image}" class="image"> <br><br>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>

        </div>
        `
        return this.element
    }

    appendToDom() {
        // debugger
        Item.container.appendChild(this.renderToLi())
    }
    
}