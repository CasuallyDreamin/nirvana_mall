window.addEventListener('DOMContentLoaded', () => {
    const productsSection = document.querySelector('#products');

    const dataUrl = 'https://raw.githubusercontent.com/CasuallyDreamin/nirvana_mall/refs/heads/purist/data/products.json';

    fetch(dataUrl)
        .then(res => res.json())
        .then(products => {
            // Group products by category
            const categories = {};
            products.forEach(p => {
                if (!categories[p.category]) {
                    categories[p.category] = [];
                }
                categories[p.category].push(p);
            });

            // Render each category section
            for (const [categoryName, items] of Object.entries(categories)) {
                const categorySection = document.createElement('div');
                categorySection.className = 'category';

                // Category heading
                const heading = document.createElement('h2');
                heading.textContent = categoryName;
                categorySection.appendChild(heading);

                // Row for products in this category
                const row = document.createElement('div');
                row.className = 'product-row';

                items.forEach(p => {
                    const card = document.createElement('div');
                    card.className = 'card';
                    card.innerHTML = `
                        <img src="${p.image}" alt="${p.name}">
                        <h3>${p.name}</h3>
                        <p>$${p.price.toFixed(2)}</p>
                    `;
                    row.appendChild(card);
                });

                categorySection.appendChild(row);
                productsSection.appendChild(categorySection);
            }
        })
        .catch(err => console.error('Error loading products:', err));
});
