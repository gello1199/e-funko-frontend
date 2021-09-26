class Item {
    constructor({name, id, price, description, image, category_id}) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.description = description;
        this.image = image;
        this.category_id = category_id;
        this.element = document.createElement('li');
        this.element.dataset['id'] = id;
        this.element.id = `item-${id}`;
        debugger
    }

}