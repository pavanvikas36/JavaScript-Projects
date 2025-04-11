let container2 = document.getElementById("container2");
let wishlist = JSON.parse(localStorage.getItem("wishlistDetails")) || [];

wishlist.forEach((val, index) => {
    let parent = document.createElement("div");
    let title = document.createElement("p");
    let price = document.createElement("p");
    let description = document.createElement("p");
    let category = document.createElement("p");
    let image = document.createElement("img");
    let deleteBtn = document.createElement("button");
    let buyBtn = document.createElement("button");

    image.src = val.image;
    image.classList.add("cart-img");
    title.innerText = val.title;
    price.innerHTML = `$ ${val.price}`;
    category.innerText = val.category;
    description.innerText = val.description;

    deleteBtn.innerText = "Delete";
    buyBtn.innerText = "Proceed To Buy";

    deleteBtn.addEventListener("click", function () {
        wishlist.splice(index, 1);
        localStorage.setItem("wishlistDetails", JSON.stringify(wishlist));
        parent.remove();
    });

    buyBtn.addEventListener("click", function () {
        alert(`Proceeding to buy: ${val.title}`);
    });

    deleteBtn.classList.add("cart-delete-btn");
    buyBtn.classList.add("cart-buy-btn");
    parent.classList.add("amazon-cart-card");

    parent.append(image, category, title, price, description, deleteBtn, buyBtn);
    container2.append(parent);
});

container2.classList.add("cart-grid");
