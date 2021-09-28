class Item {
    static all = [];
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
        <div data-id="${this.id}">
        <h3 class="name">${this.name}</h3>
        <p class="price">${this.price}</p>
        <p class="description">${this.description}</p>
        <p class="image">${this.image}</p>
        </div>
        `
        return this.element
    }
    
}