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
        // Set default values if not present
        val.quantity = val.quantity || 1;
        val.subtotal = (val.quantity * val.price).toFixed(2);

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

    // Update the modified data back into localStorage
    localStorage.setItem("addtocartDetails", JSON.stringify(data));

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
    data[index].quantity = (data[index].quantity || 1) + change;
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

function displayData() {
    let data = JSON.parse(localStorage.getItem("addtocartDetails")) || [];

    if (data.length === 0) {
        addtocartCont.innerHTML = "<p class='empty-cart'>Cart is empty</p>";
        document.getElementById("totalPrice").innerText = "₹0";
        return;
    }

    addtocartCont.innerHTML = "";

    let totalPrice = 0;

    data.forEach((val, index) => {
        val.quantity = val.quantity || 1;
        val.subtotal = (val.quantity * val.price).toFixed(2);
        totalPrice += parseFloat(val.subtotal);

        let item = document.createElement("div");
        item.className = "item cart-header px-5 d-grid grid-template";
        item.innerHTML = `
            <div class="product-cell">
                <button class="remove-item btn btn-sm btn-outline-danger" data-index="${index}">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <img src="${val.image}" alt="${val.title}" style="width: 50px; height: auto;">
                <span class="title">${val.title}</span>
            </div>
            <div class="price-cell">₹${val.price.toFixed(2)}</div>
            <div class="quantity-cell">
                <span class="decrease btn btn-sm btn-outline-secondary" data-index="${index}">-</span>
                <span class="quantity px-2" id="qty-${index}">${val.quantity}</span>
                <span class="increase btn btn-sm btn-outline-secondary" data-index="${index}">+</span>
            </div>
            <div class="subtotal-cell" id="subtotal-${index}">₹${val.subtotal}</div>
        `;
        addtocartCont.appendChild(item);
    });

    // Save updated data
    localStorage.setItem("addtocartDetails", JSON.stringify(data));

    // Update the total price on the page
    document.getElementById("totalPrice").innerText = `₹${totalPrice.toFixed(2)}`;

    addEventListeners();
}

window.addEventListener("DOMContentLoaded", function () {
    let data = JSON.parse(localStorage.getItem("addtocartDetails")) || [];

    const proceedBtn = document.querySelector(".btn-primary.btn-lg");

    // Disable/Enable the Proceed To Buy button based on cart contents
    if (data.length === 0) {
        proceedBtn.setAttribute("disabled", true);
        proceedBtn.classList.add("disabled", "btn-secondary");
        proceedBtn.innerText = "Cart is Empty";
    } else {
        proceedBtn.removeAttribute("disabled");
        proceedBtn.classList.remove("disabled", "btn-secondary");
        proceedBtn.innerText = "Proceed To Buy";
    }

    // Handle the click event for the "Proceed To Buy" button
    proceedBtn.addEventListener("click", function (e) {
        // Check if the cart is empty before proceeding
        if (data.length === 0) {
            e.preventDefault(); // Prevent the default action of button click (navigation)
            alert("Your cart is empty. Please add items before proceeding to payment.");
        } else {
            // Proceed to payment page
            window.location.href = "payment.html";
        }
    });
});

