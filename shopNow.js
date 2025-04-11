let shopNowContainer = document.getElementById("shopNowContainer");

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
        shopNowContainer.append(parent);
    });

    shopNowContainer.classList.add("cart-grid");
    document.body.append(shopNowContainer);
}

getdata();

function addToCart() {
    window.location.href = "./addtocart.html";
}
