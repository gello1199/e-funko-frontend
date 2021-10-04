class Category {
    static all = []

    static catContainer = document.getElementById("category-dropdown")

    constructor({name, id}) {
        // debugger
        this.name = name;
        this.id = id;
        Category.all.push(this)
        this.element = document.getElementById("category-dropdown")
        
        
        // debugger
    }  
    
    catFilter() {
        let filteredCategory
        Category.all.forEach(c => {
            if(c.element === this.element){
                filteredCategory = c;
                // debugger
            }
            Item.filterByCategory(filteredCategory)
        })
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