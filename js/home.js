window.addEventListener('DOMContentLoaded', () => {
    const productsSection = document.querySelector('#products'); // Get the products section

    const dataUrl = 'https://raw.githubusercontent.com/your-username/repo-name/main/frontend/data/products.json';

    fetch(dataUrl)
        .then(res => res.json())
        .then(products => {
            products.forEach(p => {
                const card = document.createElement('section');
                card.className = 'card';
                card.innerHTML = `
                    <h2>${p.name}</h2>
                    <p>Category: ${p.category}</p>
                    <p>Price: $${p.price.toFixed(2)}</p>
                `;
                
                // Append the card to the products section
                productsSection.appendChild(card);
            });
        })
        .catch(err => console.error(err));
});
