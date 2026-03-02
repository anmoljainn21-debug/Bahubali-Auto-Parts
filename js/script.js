function filterProducts(category) {
let products = document.querySelectorAll('.product-card');

products.forEach(product => {
if (category === "all") {
product.style.display = "block";
} else {
product.classList.contains(category)
? product.style.display = "block"
: product.style.display = "none";
}
});
}
