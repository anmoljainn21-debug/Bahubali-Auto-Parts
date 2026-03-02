const products = [
    { name: "Brake Pads", category: "car" },
    { name: "Truck Clutch Plate", category: "truck" },
    { name: "New Holland Tractor Parts", category: "tractor" },
    { name: "Engine Oil", category: "oil" },
    { name: "JCB Hydraulic Pump", category: "jcb" }
];

const productContainer = document.querySelector(".product-grid");

function displayProducts(filter) {
    productContainer.innerHTML = "";

    products
        .filter(p => filter === "all" || p.category === filter)
        .forEach(product => {
            productContainer.innerHTML += `
                <div class="product-card">
                    <h3>${product.name}</h3>
                    <p>High Quality ${product.category} parts available.</p>
                </div>
            `;
        });
}

// show all by default
displayProducts("all");
