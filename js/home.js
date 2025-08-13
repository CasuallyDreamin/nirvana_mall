window.addEventListener('DOMContentLoaded', () => {
    const productsSection = document.querySelector('#products'); // Get the products section

    const dataUrl = 'https://raw.githubusercontent.com/CasuallyDreamin/nirvana_mall/refs/heads/purist/data/products.json';

    fetch(dataUrl)
        .then(res => res.text())  // Get response as text first
        .then(text => {
            console.log(text);  // Log the raw response text
            const products = JSON.parse(text);  // Manually parse the JSON
            products.forEach(p => {
                const card = document.createElement('section');
                card.className = 'card';
                card.innerHTML = `
                    <h2>${p.name}</h2>
                    <p>Category: ${p.category}</p>
                    <p>Price: $${p.price.toFixed(2)}</p>
                `;
                productsSection.appendChild(card);
            });
        })
        .catch(err => console.error('Error loading or parsing products:', err));
});
