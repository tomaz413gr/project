const animCircle = document.querySelector('.anim_circle');
console.log(animCircle);
const clickCircle = document.querySelector('.click_circle');
clickCircle.addEventListener('click', function (){
    if (animCircle.classList.contains('move')){
        animCircle.classList.remove('move');
    } else {
        animCircle.classList.add('move');
    }
})