let jsData = [];
fetch("https://fakestoreapi.com/products")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    jsData = data;
 // Task 5 
    displayProductCount(jsData.length);
 // Task 8 
    createCategoryButtons(jsData);
  // Task 1
    displayProducts(jsData);
});

// Task 1 
function displayProducts(products) {
    let apiCard = document.querySelector(".apicard");
    apiCard.innerHTML = "";
    products.forEach(function(c) {
        let card = document.createElement("div");
    card.innerHTML = `
            <img src="${c.image}" width="150" height="150">
            <h2>${c.title}</h2>
            <h3>${c.category}</h3>
            <p>Price: $${c.price}</p>
            <p>${c.description}</p>
            <button>View Product</button>
            <hr>
        `;
        apiCard.append(card);
    });
}

// Task 2 
let firstFiveButton = document.createElement("button");
firstFiveButton.innerText = "First 5 Products";
document.body.insertBefore(
    firstFiveButton,
    document.querySelector(".apicard")
);
firstFiveButton.addEventListener("click", function() {
    let firstFive = jsData.slice(0, 5);
    displayProducts(firstFive);
});

// Task 3 
let priceFilterButton = document.createElement("button");
priceFilterButton.innerText = "Price > 50";
document.body.insertBefore(
    priceFilterButton,
    document.querySelector(".apicard")
);
priceFilterButton.addEventListener("click", function() {
    let filteredProducts = jsData.filter(function(c) {
        return c.price > 50;
    });
    displayProducts(filteredProducts);
});

// Task 4 
let menButton = document.createElement("button");
menButton.innerText = "Men's Clothing";
document.body.insertBefore(
    menButton,
    document.querySelector(".apicard")
);
menButton.addEventListener("click", function() {
    let filteredProducts = jsData.filter(function(c) {
        return c.category === "men's clothing";
    });
    displayProducts(filteredProducts);
});

// Task 5
function displayProductCount(count) {
    let totalProducts = document.querySelector("#totalProducts");
    totalProducts.innerText = "Total Products: " + count;
}
// Task 6 
let searchInput = document.querySelector("#searchInput");
let searchBtn = document.querySelector("#searchBtn");
searchBtn.addEventListener("click", function() {
    let searchValue = searchInput.value.toLowerCase();
    let filteredProducts = jsData.filter(function(c) {
        return c.title.toLowerCase().includes(searchValue);
    });
    displayProducts(filteredProducts);
});

// Task 7 
let lowToHigh = document.querySelector("#lowToHigh");
let highToLow = document.querySelector("#highToLow");
lowToHigh.addEventListener("click", function() {
    let sortedProducts = [...jsData];
    sortedProducts.sort(function(a, b) {
        return a.price - b.price;
    });
    displayProducts(sortedProducts);
});

// Task 7 
highToLow.addEventListener("click", function() {
    let sortedProducts = [...jsData];
    sortedProducts.sort(function(a, b) {
        return b.price - a.price;
    });
  displayProducts(sortedProducts);
});

// Task 8 
function createCategoryButtons(data) {
    let categoryButtons = document.querySelector("#categoryButtons");
    categoryButtons.innerHTML = "";
    let categories = ["All"];
    data.forEach(function(c) {
        if (!categories.includes(c.category)) {
            categories.push(c.category);
        }
    });
    categories.forEach(function(category) {
        let button = document.createElement("button");
        button.innerText = category;
        categoryButtons.append(button);
        button.addEventListener("click", function() {
            if (category === "All") {
                displayProducts(jsData);
            } else {
                let filteredProducts = jsData.filter(function(c) {
                    return c.category === category;
                });
                displayProducts(filteredProducts);
            }
        });
    });
}