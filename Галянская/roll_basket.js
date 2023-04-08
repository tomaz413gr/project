window.addEventListener('click', function (event) {
    if (event.target.hasAttribute('data-cart')) {
        const card = event.target.closest('.cont');
        const productInfo = {
            id: card.dataset.id,
            imgSrc: card.querySelector('.product-image').getAttribute('src'),
            title: card.querySelector('.item-title').innerText,
            itensInBox: card.querySelector('[data-itens-in-box]').innerText,
            weight: card.querySelector('.price_weight').innerText,
            price: card.querySelector('.price_currency').innerText,
            counter: card.querySelector('[data-counter]').innerText,
        };
        console.log(productInfo);
        console.log('gjnkgj');
    }
})
