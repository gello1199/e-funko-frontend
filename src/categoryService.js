class CategoryService {
    constructor(port) {
        this.port = port
    }

    getCategories() {
        return fetch(this.port + `/categories`)
        .then(resp => resp.json())
        
    }
}

// move instance methods call to constructor