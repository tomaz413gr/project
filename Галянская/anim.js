const animCircle = document.querySelector('.anim_circle');
const anim_circle2 = document.querySelector('.anim_circle2');
const anim_circle3 = document.querySelector('.anim_circle3');
const anim_circle4 = document.querySelector('.anim_circle4');
const clickCircle = document.querySelector('.click_circle');
clickCircle.addEventListener('click', function (){
    if (animCircle.classList.contains('move') && anim_circle2.classList.contains('move2') && anim_circle3.classList.contains('move3') && anim_circle4.classList.contains('move4')){
        animCircle.classList.remove('move');
        anim_circle2.classList.remove('move2');
        anim_circle3.classList.remove('move3');
        anim_circle4.classList.remove('move4');

    } else {
        animCircle.classList.add('move');
        anim_circle2.classList.add('move2');
        anim_circle3.classList.add('move3');
        anim_circle4.classList.add('move4');
        
    }
})