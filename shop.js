let shopContainer1 = document.getElementById("shopContainer1");

async function getdata() {
    let response = await fetch("https://project-carts.onrender.com/Gifts");
    let result = await response.json();
    console.log(result);

    let addtocart = addtocartData = JSON.parse(localStorage.getItem("addtocartDetails")) || [];
    result.forEach((val) => {
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
            addtocart.push(val);
            console.log(addtocart);
            localStorage.setItem("addtocartDetails", JSON.stringify(addtocart));
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
        iconContainer.append(icon1, icon2, iconbtn1, iconbtn2);
        parent.classList.add("cart-card");
        iconbtn1.classList.add("icon-btn");
        iconbtn2.classList.add("icon-btn");
        iconbtn1.append(icon1);
        iconbtn2.append(icon2);
        parent.append(image, category, title, price, iconContainer);
        shopContainer1.append(parent);
    });

    shopContainer1.classList.add("cart-grid");
    document.body.append(shopContainer1);
}

getdata();

// Art Gift

let shopContainer2 = document.getElementById("shopContainer2");

async function artGiftData(){
    let response = await fetch("https://json-server-bkjj.onrender.com/Art-gifts");
    let result = await response.json();
    console.log(result);

    let addtocart = addtocartData = JSON.parse(localStorage.getItem("addtocartDetails")) || [];
    result.forEach((val) => {
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
            addtocart.push(val);
            console.log(addtocart);
            localStorage.setItem("addtocartDetails", JSON.stringify(addtocart));
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
        iconContainer.append(icon1, icon2, iconbtn1, iconbtn2);
        parent.classList.add("cart-card");
        iconbtn1.classList.add("icon-btn");
        iconbtn2.classList.add("icon-btn");
        iconbtn1.append(icon1);
        iconbtn2.append(icon2);
        parent.append(image, category, title, price, iconContainer);
        shopContainer2.append(parent);
    });

    shopContainer2.classList.add("cart-grid");
    document.body.append(shopContainer2);
};
artGiftData()

// Couple Gift

let shopContainer3 = document.getElementById("shopContainer3");

async function coupleGiftData(){
    let response = await fetch("https://json-server-bkjj.onrender.com/Couple-gifts");
    let result = await response.json();
    console.log(result);

    let addtocart = addtocartData = JSON.parse(localStorage.getItem("addtocartDetails")) || [];
    result.forEach((val) => {
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
            addtocart.push(val);
            console.log(addtocart);
            localStorage.setItem("addtocartDetails", JSON.stringify(addtocart));
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
        iconContainer.append(icon1, icon2, iconbtn1, iconbtn2);
        parent.classList.add("cart-card");
        iconbtn1.classList.add("icon-btn");
        iconbtn2.classList.add("icon-btn");
        iconbtn1.append(icon1);
        iconbtn2.append(icon2);
        parent.append(image, category, title, price, iconContainer);
        shopContainer3.append(parent);
    });

    shopContainer3.classList.add("cart-grid");
    document.body.append(shopContainer3);
};
coupleGiftData()

function addToCart() {
    window.location.href = "./addtocart.html";
};
