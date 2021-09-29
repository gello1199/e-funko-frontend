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
        <div class="id" data-id="${this.id}">
        <h3 class="name">Name: ${this.name}</h3>
        <p class="price">Price: $ ${this.price}</p>
        <p class="description">Description: ${this.description}</p>
        <img src="${this.image}" class="image"> <br><br>
        <button class="edit" data-id="${this.id}">Edit</button>
        <button class="delete" data-id="${this.id}">Delete</button>

        </div>
        `
        return this.element
    }

    handleClick(e) {
        if(e.target.innerText === "Edit") {
            console.log(e.target);
        } else if(e.target.innerText === "Delete") {
            console.log(e.target)
        } else if(e.target.innerText === "Save Item") {
            console.log(e.target)
        }
    }

    appendToDom() {
        // debugger
        this.renderToLi()
        Item.container.appendChild(this.element)
    }
    
}