const addProduct = () => {
  const productField = document.getElementById("product-name");
  const quantityField = document.getElementById("product-quantity");
  const product = productField.value;
  const quantity = quantityField.value;
  console.log(product, quantity);
  productField.value = "";
  quantityField.value = "";
  console.log(product, quantity);
  displayProduct(product, quantity);
  saveProductToLocalStorage(product, quantity);
};
const displayProduct = (product, quantity) => {
  const productList = document.getElementById("product-list");
  const productContainer = document.createElement("li");
  productContainer.innerText = `${product} : ${quantity}`;
  productList.appendChild(productContainer);
};

//checking whether the local storage empty or not and get object from it
const getLocalStorageElement = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (product, quantity) => {
  const objectCart = getLocalStorageElement();
  objectCart[product] = quantity;
  const stringifiedCart = JSON.stringify(objectCart);
  localStorage.setItem("cart", stringifiedCart);
};

//this will show always stored card info
const displayCartFromLocalStorage = () => {
  const savedCart = getLocalStorageElement();
  for (const product in savedCart) {
    const quantity = savedCart[product];
    displayProduct(product, quantity);
  }
};
displayCartFromLocalStorage();
