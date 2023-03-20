let inputTel = document.querySelector('[data-input-tel]');
console.log(inputTel);
let placeholder = inputTel.placeholder;

inputTel.addEventListener('mouseover', () => {
  inputTel.placeholder = '+7 (999) 999-99-99';
})

inputTel.addEventListener('mouseout', () => {
  inputTel.placeholder = placeholder;
})