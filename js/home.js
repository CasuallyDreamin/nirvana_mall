window.addEventListener('DOMContentLoaded', () => {
    const productsSection = document.querySelector('#products'); // Main container

    const dataUrl = 'https://raw.githubusercontent.com/CasuallyDreamin/nirvana_mall/refs/heads/purist/data/products.json';

    fetch(dataUrl)
        .then(res => res.text())
        .then(text => {
            const products = JSON.parse(text);

            // Group products by category
            const categories = {};
            products.forEach(p => {
                if (!categories[p.category]) categories[p.category] = [];
                categories[p.category].push(p);
            });

            // For each category, create a row and append cards
            for (const [categoryName, items] of Object.entries(categories)) {
                const row = document.createElement('div');
                row.className = 'product-row';

                const title = document.createElement('h2');
                title.textContent = categoryName;
                row.appendChild(title);

                const rowContainer = document.createElement('div');
                rowContainer.className = 'row-container';
                items.forEach(p => {
                    const card = document.createElement('section');
                    card.className = 'card';
                    card.innerHTML = `
                        <img src="${p.image}" alt="${p.name}" />
                        <div class="card-details">
                            <h3>${p.name}</h3>
                            <p>Price: $${p.price.toFixed(2)}</p>
                            <p>${p.detail}</p>
                        </div>
                    `;
            rowContainer.appendChild(card);
        });

                row.appendChild(rowContainer);
                productsSection.appendChild(row);
            }
        })
        .catch(err => console.error('Error loading or parsing products:', err));
});

const toggleBtn = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

toggleBtn.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});
