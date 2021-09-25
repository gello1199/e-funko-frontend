const port = `http://localhost:3000`
const categoryCall = new CategoryService(port) // an instance to call methods on


categoryCall.getCategories();