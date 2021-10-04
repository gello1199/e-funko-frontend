class CategoryService {
    constructor(port) {
        this.port = port
    }

    getCategories() {
        fetch(this.port + `/categories`)
        .then(resp => resp.json())
        .then(data => {
            for(const cat of data) {
                // debugger
                let c = new Category(cat)
                c.addToDropdown()
                c.addToCatFormDropdown()
                c.catFilter()
                // debugger
            }
        })
    }
}