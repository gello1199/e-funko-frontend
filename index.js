const port = `http://localhost:3000`
const categoryCall = new CategoryService(port); // an instance to call methods on
const itemCall = new ItemService(port);
const form = document.getElementById("item-form")

const dropDown = document.getElementById("category-form-dropdown");
const itemNameValue = document.getElementById("item-name");
const itemPriceValue = document.getElementById("item-price");
const itemDescriptionValue = document.getElementById("item-description");
const itemImageValue = document.getElementById("item-image");
const categoryNameValue = document.getElementById("category-name")

const modal = document.querySelector('.hidden');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-modal');
const openModal = document.querySelector('.new-item')

// debugger
categoryCall.getCategories();
itemCall.getItems();

form.addEventListener(`submit`, handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
    itemCall.createItems()
    // debugger
}

openModal.addEventListener(`click`, function(){
    modal.classList.remove('hidden')
    overlay.classList.remove('hidden')
})

closeModal.addEventListener(`click`, function(){
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})

overlay.addEventListener(`click`, function() {
    modal.classList.add('hidden')
    overlay.classList.add('hidden')
})
