let apiData = "https://fakestoreapi.com/products";
let apiCard = document.querySelector(".apicard");
let searchInput = document.querySelector("#searchInput");
let searchButton = document.querySelector("#searchButton");
let categoryButtons = document.querySelector("#categoryButtons");
let lowHigh = document.querySelector("#lowHigh");
let highLow = document.querySelector("#highLow");
let productCount = document.querySelector("#productCount");
let products = [];
// Fetch products from API
fetch(apiData)
.then(function(response) {
    return response.json();
})
.then(function(jsdata) {
    products = jsdata;
    productCount.innerText = "Total Products: " + products.length;
    createCategoryButtons();
    displayProducts(products);
});
function displayProducts(data) {
    apiCard.innerHTML = "";
    data.forEach(function(c) {
        let card = document.createElement("div");
        card.innerHTML = `
            <img src="${c.image}" width="150">
            <h2>${c.title}</h2>
            <h3>${c.category}</h3>
            <p>${c.description}</p>
            <h3>$${c.price}</h3>
            <button>Add to Cart</button>
        `;
        apiCard.append(card);
    });
}
function createCategoryButtons() {
    let allButton = document.createElement("button");
    allButton.innerText = "All";
    allButton.addEventListener("click", function() {
        displayProducts(products);
    });
    categoryButtons.append(allButton);

    let categories = [];
    products.forEach(function(c) {
        if (!categories.includes(c.category)) {
          categories.push(c.category);
    }
    });
    categories.forEach(function(category) {
        let button = document.createElement("button");
        button.innerText = category;
        button.addEventListener("click", function() {
            let filteredProducts = products.filter(function(c) {
                return c.category === category;
            });
            displayProducts(filteredProducts);
        });
        categoryButtons.append(button);
    });
}
searchButton.addEventListener("click", function() {
    let searchText = searchInput.value.toLowerCase();
    let result = products.filter(function(c) {
        return c.title.toLowerCase().includes(searchText);
    });
    displayProducts(result);
});
lowHigh.addEventListener("click", function() {
    let sortedProducts = [...products];
    sortedProducts.sort(function(a, b) {
        return a.price - b.price;
    });
    displayProducts(sortedProducts);
});
highLow.addEventListener("click", function() {
    let sortedProducts = [...products];
    sortedProducts.sort(function(a, b) {
        return b.price - a.price;
    });
    displayProducts(sortedProducts);
});