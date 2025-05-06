let shopContainer1 = document.getElementById("shopContainer1");
let shopContainer2 = document.getElementById("shopContainer2");
let shopContainer3 = document.getElementById("shopContainer3");
let allGiftsBtn = document.getElementById("allGiftsBtn");

function createCard(val, container) {
    let addtocart = JSON.parse(localStorage.getItem("addtocartDetails")) || [];
    let wishlist = JSON.parse(localStorage.getItem("wishlistDetails")) || [];

    let parent = document.createElement("div");
    let title = document.createElement("p");
    let price = document.createElement("p");
    let description = document.createElement("p");
    let category = document.createElement("p");
    let image = document.createElement("img");
    let icon1 = document.createElement("a");
    let icon2 = document.createElement("a");
    let iconContainer = document.createElement("div");
    let iconbtn1 = document.createElement("button");
    let iconbtn2 = document.createElement("button");

    iconbtn1.addEventListener("click", function () {
        if (!addtocart.find(item => item.id === val.id)) {
            addtocart.push(val);
            localStorage.setItem("addtocartDetails", JSON.stringify(addtocart));
            alert("Item added to cart!");
        } else {
            alert("Item is already in the cart!");
        }
    });

    iconbtn2.addEventListener("click", function () {
        if (!wishlist.find(item => item.id === val.id)) {
            wishlist.push(val);
            localStorage.setItem("wishlistDetails", JSON.stringify(wishlist));
            alert("Item added to wishlist!");
        } else {
            alert("Item is already in the wishlist!");
        }
    });

    image.src = val.image;
    image.classList.add("cart-img");
    title.innerText = val.title;
    price.innerHTML = `$ ${val.price}`;
    category.innerText = val.category;
    description.innerText = val.description;
    icon1.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;
    icon2.innerHTML = `<i class="fa-solid fa-heart"></i>`;
    iconContainer.classList.add("cart-card-icons");
    iconContainer.append(iconbtn1, iconbtn2);
    iconbtn1.classList.add("icon-btn");
    iconbtn2.classList.add("icon-btn");
    iconbtn1.append(icon1);
    iconbtn2.append(icon2);
    parent.classList.add("cart-card");
    parent.append(image, category, title, price, iconContainer);
    container.append(parent);
}

async function fetchAndRender(url, container, categoryFilter = '') {
    try {
        let response = await fetch(url);
        let result = await response.json();

        // Filter data if a category filter is applied
        if (categoryFilter) {
            result = result.filter(item => item.category === categoryFilter);
        }

        result.forEach((val) => createCard(val, container));

        container.classList.add("cart-grid");
        document.body.append(container);
    } catch (error) {
        console.error(`Failed to fetch data from ${url}:`, error);
    }
}

// Fetch all gifts data initially
fetchAndRender("https://project-carts.onrender.com/Gifts", shopContainer1);
fetchAndRender("https://json-server-bkjj.onrender.com/Art-gifts", shopContainer2);
fetchAndRender("https://json-server-bkjj.onrender.com/Couple-gifts", shopContainer3);

// Button event listeners
document.getElementById("momBtn").addEventListener("click", function () {
    shopContainer1.innerHTML = '';  // Clear existing items
    shopContainer2.innerHTML = '';
    shopContainer3.innerHTML = '';
    fetchAndRender("https://project-carts.onrender.com/Gifts", shopContainer1, 'Mom');
    fetchAndRender("https://json-server-bkjj.onrender.com/Art-gifts", shopContainer2, 'Mom');
    fetchAndRender("https://json-server-bkjj.onrender.com/Couple-gifts", shopContainer3, 'Mom');
});

document.getElementById("artBtn").addEventListener("click", function () {
    shopContainer1.innerHTML = '';  // Clear existing items
    shopContainer2.innerHTML = '';
    shopContainer3.innerHTML = '';
    fetchAndRender("https://project-carts.onrender.com/Gifts", shopContainer1, 'Art');
    fetchAndRender("https://json-server-bkjj.onrender.com/Art-gifts", shopContainer2, 'Art');
    fetchAndRender("https://json-server-bkjj.onrender.com/Couple-gifts", shopContainer3, 'Art');
});

document.getElementById("coupleBtn").addEventListener("click", function () {
    shopContainer1.innerHTML = '';  // Clear existing items
    shopContainer2.innerHTML = '';
    shopContainer3.innerHTML = '';
    fetchAndRender("https://project-carts.onrender.com/Gifts", shopContainer1, 'Couple');
    fetchAndRender("https://json-server-bkjj.onrender.com/Art-gifts", shopContainer2, 'Couple');
    fetchAndRender("https://json-server-bkjj.onrender.com/Couple-gifts", shopContainer3, 'Couple');
});

// Display all gifts when the "All Gifts" button is clicked
allGiftsBtn.addEventListener("click", function () {
    shopContainer1.innerHTML = '';  // Clear existing items
    shopContainer2.innerHTML = '';
    shopContainer3.innerHTML = '';
    fetchAndRender("https://project-carts.onrender.com/Gifts", shopContainer1);
    fetchAndRender("https://json-server-bkjj.onrender.com/Art-gifts", shopContainer2);
    fetchAndRender("https://json-server-bkjj.onrender.com/Couple-gifts", shopContainer3);
});
