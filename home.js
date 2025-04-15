let container1 = document.getElementById("container1");
let specialOfferContainer = document.getElementById("specialOfferContainer");

async function getdata() {
    let response = await fetch("https://project-carts.onrender.com/Gifts");
    let result = await response.json();

    let addtocart = JSON.parse(localStorage.getItem("addtocartDetails")) || [];
    let wishlist = JSON.parse(localStorage.getItem("wishlistDetails")) || [];

    result.forEach((val) => {
        if ([7, 8, 9, 10, 11, 12].includes(val.id)) {
            let parent = document.createElement("div");
            let title = document.createElement("p");
            let price = document.createElement("p");
            let description = document.createElement("p");
            let category = document.createElement("p");
            let image = document.createElement("img");
            let iconContainer = document.createElement("div");
            let iconbtn1 = document.createElement("button");
            let iconbtn2 = document.createElement("button");

            // Setting content
            image.src = val.image;
            image.classList.add("cart-img");
            title.innerText = val.title;
            price.innerHTML = `$ ${val.price}`;
            category.innerText = val.category;
            description.innerText = val.description;

            iconbtn1.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;
            iconbtn2.innerHTML = `<i class="fa-solid fa-heart"></i>`;

            // Add to Cart
            iconbtn1.addEventListener("click", function () {
                // Get fresh cart data
                let currentCart = JSON.parse(localStorage.getItem("addtocartDetails")) || [];

                let existingProduct = currentCart.find(item => item.id === val.id);

                if (existingProduct) {
                    existingProduct.quantity += 1;
                    existingProduct.subtotal = (existingProduct.quantity * existingProduct.price).toFixed(2);
                } else {
                    let product = { ...val }; // clone to avoid reference issue
                    product.quantity = 1;
                    product.subtotal = product.price.toFixed(2);
                    currentCart.push(product);
                }

                localStorage.setItem("addtocartDetails", JSON.stringify(currentCart));
                alert("Added to cart");
            });

            // Add to Wishlist
            iconbtn2.addEventListener("click", function () {
                if (!wishlist.some(item => item.id === val.id)) {
                    wishlist.push(val);
                    localStorage.setItem("wishlistDetails", JSON.stringify(wishlist));
                    alert("Added to wishlist");
                } else {
                    alert("Already in wishlist");
                }
            });

            // Structure
            iconContainer.classList.add("cart-card-icons");
            iconbtn1.classList.add("icon-btn");
            iconbtn2.classList.add("icon-btn");
            iconContainer.append(iconbtn1, iconbtn2);

            parent.classList.add("cart-card");
            parent.append(image, category, title, price, iconContainer);
            container1.append(parent);
        }
    });

    container1.classList.add("cart-grid");
};

getdata();

async function apidata(){
    let coupleGiftData = await fetch("https://json-server-bkjj.onrender.com/Couple-gifts");
    let coupleGiftResult = await coupleGiftData.json();
    console.log(coupleGiftResult)

    coupleGiftResult.forEach((value)=>{
        if ([22, 23, 24, 25, 26, 27].includes(value.id)) {
            let parent = document.createElement("div");
            let title = document.createElement("p");
            let price = document.createElement("p");
            let description = document.createElement("p");
            let category = document.createElement("p");
            let image = document.createElement("img");
            let iconContainer = document.createElement("div");
            let iconbtn1 = document.createElement("button");
            let iconbtn2 = document.createElement("button");

            // Setting content
            image.src = value.image;
            image.classList.add("cart-img");
            title.innerText = value.title;
            price.innerHTML = `$ ${value.price}`;
            category.innerText = value.category;
            description.innerText = value.description;

            iconbtn1.innerHTML = `<i class="fa-solid fa-cart-shopping"></i>`;
            iconbtn2.innerHTML = `<i class="fa-solid fa-heart"></i>`;

            // Add to Cart
            iconbtn1.addEventListener("click", function () {
                // Get fresh cart data
                let currentCart = JSON.parse(localStorage.getItem("addtocartDetails")) || [];

                let existingProduct = currentCart.find(item => item.id === value.id);

                if (existingProduct) {
                    existingProduct.quantity += 1;
                    existingProduct.subtotal = (existingProduct.quantity * existingProduct.price).toFixed(2);
                } else {
                    let product = { ...value }; // clone to avoid reference issue
                    product.quantity = 1;
                    product.subtotal = product.price.toFixed(2);
                    currentCart.push(product);
                }

                localStorage.setItem("addtocartDetails", JSON.stringify(currentCart));
                alert("Added to cart");
            });

            // Add to Wishlist
            iconbtn2.addEventListener("click", function () {
                if (!wishlist.some(item => item.id === value.id)) {
                    wishlist.push(value);
                    localStorage.setItem("wishlistDetails", JSON.stringify(wishlist));
                    alert("Added to wishlist");
                } else {
                    alert("Already in wishlist");
                }
            });

            // Structure
            iconContainer.classList.add("cart-card-icons");
            iconbtn1.classList.add("icon-btn");
            iconbtn2.classList.add("icon-btn");
            iconContainer.append(iconbtn1, iconbtn2);

            parent.classList.add("cart-card");
            parent.append(image, category, title, price, iconContainer);
            specialOfferContainer.append(parent);
        }
    });
    specialOfferContainer.classList.add("cart-grid");
};

apidata()

function readmoreBtn(){
    window.location.href = "./about.html"
}
