// product filtering utility (used if nav buttons are moved)
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

// theme toggle logic
(function() {
    const toggle = document.getElementById('theme-toggle');
    const root = document.documentElement;
    const stored = localStorage.getItem('theme');

    const applyTheme = (mode) => {
        if (mode === 'dark') {
            root.classList.add('dark-theme');
        } else {
            root.classList.remove('dark-theme');
        }
        localStorage.setItem('theme', mode);
        // update icon
        if (toggle) {
            toggle.textContent = mode === 'dark' ? '☀️' : '🌙';
        }
    };

    // initialize from storage or system preference
    if (stored) {
        applyTheme(stored);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        applyTheme('dark');
    } else {
        // default light
        applyTheme('light');
    }

    if (toggle) {
        toggle.addEventListener('click', () => {
            const isDark = root.classList.contains('dark-theme');
            applyTheme(isDark ? 'light' : 'dark');
        });
    }
})();
