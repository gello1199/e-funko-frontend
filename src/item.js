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

    // use arrow function to define this on declaration, not execution
    handleClick = (e) => { 
        if(e.target.innerText === "Edit") {
            console.log(e.target);
            // debugger
            this.createEditForm()
        } else if(e.target.innerText === "Delete") {
            console.log(e.target)
            itemCall.deleteItem(e)
        } else if(e.target.innerText === "Save Item") {
            console.log(e.target)
        }
    }

    // handleClick = (e) => {
    //     if(e.target.innerText === "Delete") {
    //         itemCall.deleteItem(e)
    //     }
    // }

    createEditForm(){
        const div = this.element.querySelector('div')
        const nameValue = div.children[0].innerText.split(' ')[1]
        div.children[0].outerHTML = `Name: <input value="${nameValue}">`
        const priceValue = div.children[1].innerText.split(' ')[2]
        div.children[1].outerHTML = `Price: <input value="${priceValue}">`
        const descriptionValue = div.children[2].innerText.split(' ')
        div.children[2].outerHTML = `Description: <input value="${descriptionValue}">`
        const imageValue = div.children[3].innerText.split(' ' )[0]
        div.children[3].outerHTML = `Image: <input value="${imageValue}">`

        // for(const element of div.children) {
            
        //     // let inputValue = element.innerText;
        //     // let name = element.classList[0];
        //     // element.outerHTML = `<input type="text" class="edit"`
            // this.element.querySelector('div').children[0].innerHTML.split(' ')[1]
        // }
        // debugger
    }

    appendToDom() {
        // debugger
        this.renderToLi()
        Item.container.appendChild(this.element)
    }
    
}