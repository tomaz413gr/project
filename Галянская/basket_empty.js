function toggleCartStatus() {
    const cartWrapper = document.querySelector('.basket_content');
    const cartEmptyBadge = document.querySelector('[data-cart-empty]');
    const orderForm = document.querySelector('.orderForm');
    
    if (cartWrapper.children.length > 1) {
        console.log('full');
        cartEmptyBadge.classList.add('none');
        orderForm.classList.remove('none');

    } else {
        console.log('empty');
        cartEmptyBadge.classList.remove('none');
        orderForm.classList.add('none');
    }
}