class Category {
    static all = []

    static catContainer = document.getElementById("category-dropdown")

    constructor({name, id}) {
        // debugger
        this.name = name;
        this.id = id;

        Category.all.push(this)
    }

    addToDropdown() {
        const option = document.createElement(`option`);
        option.value = this.id
        option.innerText = this.name
        // debugger
        dropDown.appendChild(option)
        // debugger
    }

    addToCatFormDropdown() {
        const option = document.createElement(`option`);
        option.value = this.id
        option.innerText = this.name        
        // debugger
        Category.catContainer.appendChild(option)
        // debugger
    }


}