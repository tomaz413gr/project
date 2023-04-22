function basketCalculate() {
    let totalPrice = 0;
    const basket = document.querySelectorAll('.basket');

    //находим элемент итого
    const totalEl = document.querySelector('.totalPrice');

    basket.forEach (function (item){
        const amountEl = item.querySelector('[data-counter]');
        const priceEl = item.querySelector('.price_item');
        const currentPrice = parseInt(amountEl.innerText) * parseInt(priceEl.innerText);
        totalPrice += currentPrice;
    })
    
    //отображаем общую стоимость на странице
    totalEl.innerText = totalPrice;
}