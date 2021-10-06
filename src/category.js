// let option = document.createElement(`option`);

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
        // const option = document.createElement(`option`);
        // option
        // option.value = this.id
        // option.innerText = this.name
        // debugger
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