//находим элементы для взаимодействия
// const btnMinus = document.querySelector('[data-action="minus"]');
// const btnPlus = document.querySelector('[data-action="plus"]');
// const counter = document.querySelector('[data-counter]');
//отслеживаем клик по минусу
// btnMinus.addEventListener('click', function(){
//проверяем чтобы текст в счетчике был больше единицы
// if (parseInt(counter.innerText) > 1){
//при выполнении условия уменьшаем на единицу
//         counter.innerText = --counter.innerText;
//     }

// });
//отслеживаем клик по плюсу
// btnPlus.addEventListener('click', function(){
//увеличиваем текст при клике на плюс на единицу
//     counter.innerText = ++counter.innerText;
// });
window.addEventListener('click', function (event) {
let counter;
if (event.target.dataset.action === 'minus' || event.target.dataset.action === 'plus'){
    const counterWrapper = event.target.closest('.counter-wrapper');
    counter = counterWrapper.querySelector('[data-counter]');
}
    
    if (event.target.dataset.action === 'plus') {
        counter.innerText = ++counter.innerText;
    }
    if (event.target.dataset.action === 'minus') {
        if (parseInt(counter.innerText) > 1) {
            counter.innerText = --counter.innerText;

             
        }
        // проверка что мы кликнули именно по товару находящемуся в корзине

        else if (event.target.closest('.basket_content') && parseInt(counter.innerText) === 1){
            //удаляем товар из корзины при нажатии на минус
            event.target.closest('.basket').remove();

            //отображение статуса корзины (корзина пуста)
            toggleCartStatus();
        }
       
       
    }
})