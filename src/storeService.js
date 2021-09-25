class StoreService {
    constructor(port) {
        this.port = port
    }

    getStores() {
        fetch(this.port + `/stores`)
        .then(resp => resp.json())
        .then(data => console.log(data))
    }
}