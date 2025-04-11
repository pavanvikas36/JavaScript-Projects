let addtocartCont = document.getElementById("addtocartCont");

window.addEventListener("DOMContentLoaded", function () {
    displayData();
});

function displayData() {
    let data = JSON.parse(localStorage.getItem("addtocartDetails")) || [];

    if (data.length === 0) {
        addtocartCont.innerHTML = "<p class='empty-cart'>Cart is empty</p>";
        return;
    }

    addtocartCont.innerHTML = "";

    data.forEach((val, index) => {
        let item = document.createElement("div");
        item.className = "item";
        item.innerHTML = `
            <div class="product-cell">
                <button class="remove-item" data-index="${index}"><i class="fa-solid fa-xmark"></i></button>
                <img src="${val.image}" alt="${val.title}">
                <span class="title">${val.title}</span>
            </div>
            <div class="price-cell">$${val.price.toFixed(2)}</div>
            <div class="quantity-cell">
                <span class="decrease" data-index="${index}">-</span>
                <span class="quantity" id="qty-${index}">${val.quantity}</span>
                <span class="increase" data-index="${index}">+</span>
            </div>
            <div class="subtotal-cell" id="subtotal-${index}">$${val.subtotal}</div>
        `;
        addtocartCont.append(item);
    });

    addEventListeners();
}

function addEventListeners() {
    document.querySelectorAll(".increase").forEach(btn => {
        btn.addEventListener("click", () => {
            let index = btn.getAttribute("data-index");
            updateQuantity(index, 1);
        });
    });

    document.querySelectorAll(".decrease").forEach(btn => {
        btn.addEventListener("click", () => {
            let index = btn.getAttribute("data-index");
            updateQuantity(index, -1);
        });
    });

    document.querySelectorAll(".remove-item").forEach(btn => {
        btn.addEventListener("click", () => {
            let index = btn.getAttribute("data-index");
            removeItem(index);
        });
    });
}

function updateQuantity(index, change) {
    let data = JSON.parse(localStorage.getItem("addtocartDetails"));
    data[index].quantity += change;
    if (data[index].quantity < 1) data[index].quantity = 1;

    data[index].subtotal = (data[index].quantity * data[index].price).toFixed(2);

    localStorage.setItem("addtocartDetails", JSON.stringify(data));
    displayData(); // Re-render UI
}

function removeItem(index) {
    let data = JSON.parse(localStorage.getItem("addtocartDetails"));
    data.splice(index, 1);
    localStorage.setItem("addtocartDetails", JSON.stringify(data));
    displayData(); // Re-render UI
}
