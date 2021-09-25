class CategoryService {
    constructor(port) {
        this.port = port
    }

    getCategories() {
        fetch(this.port + `/categories`)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
}