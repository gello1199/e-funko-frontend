class Category {
    constructor({name, id, store_id}) {
        // debugger
        this.name = name;
        this.id = id;
        this.store_id = store_id;
    }

    addToDropdown() {
        const option = document.createElement(`option`);
        option.value = this.id
        option.innerText = this.name
        dropDown.appendChild(option)
    }
}