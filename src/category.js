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

    addListeners() {
        this.element.addEventListener('change', this.catFilter)
    }
    
    catFilter = (e) => {
        let filteredCategory
        // debugger
        for(const c of Category.all) {
            // debugger
            if(c.id === parseInt(e.target.value)){
                // debugger
                filteredCategory = c;
                // debugger
            }
            // debugger 
        }
        // debugger
        Item.filterByCategory(filteredCategory)
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