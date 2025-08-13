window.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');

    fetch('data/products.json')
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
                main.appendChild(card);
            });
        })
        .catch(err => console.error(err));
});
