class Category {
    constructor({name, id}) {
        // debugger
        this.name = name;
        this.id = id;
    }

    addToDropdown() {
        const option = document.createElement(`option`);
        option.value = this.id
        option.innerText = this.name
        dropDown.appendChild(option)
    }
}