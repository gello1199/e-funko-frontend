const port = `http://localhost:3000`
const categoryCall = new CategoryService(port) // an instance to call methods on
const storeCall = new StoreService(port)
const itemCall = new ItemService(port)
const form = document.getElementById("item-form")
const dropDown = document.getElementById("category-dropdown")
const itemNameValue = document.getElementById("item-name");


// categoryCall.getCategories();
itemCall.getItems();
// storeCall.getStores();

form.addEventListener(`submit`, handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    itemCall.createItems()
    // debugger
}