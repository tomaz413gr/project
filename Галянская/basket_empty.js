function toggleCartStatus(){
const cartWrapper = document.querySelector('.basket_content');
const cartEmptyBadge = document.querySelector('[data-cart-empty]');
if (cartWrapper.children.length > 1){
console.log('full');
cartEmptyBadge.classList.add('none');
}else {
console.log('empty');
cartEmptyBadge.classList.remove('none');
}
}