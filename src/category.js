class Category {
    static all = []

    static catContainer = document.getElementById("category-dropdown")
    
    constructor({name, id}) {
        // debugger
        this.name = name;
        this.id = id;
        Category.all.push(this)
        
        // debugger
    }  

    addListeners() {
        Category.catContainer.addEventListener('change', this.catFilter)
    }
    
    catFilter = (e) => {
        // debugger
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
        dropDown.appendChild(this.setOption())
        // debugger
    }

    addToCatFormDropdown() {
        Category.catContainer.appendChild(this.setOption())
        // debugger 
    }

    setOption = () => {
        const option = document.createElement(`option`);
        option.value = this.id
        option.innerText = this.name 
        return option
    }

}