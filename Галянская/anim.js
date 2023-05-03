const animCircle = document.querySelector('.anim_circle');
const anim_circle2 = document.querySelector('.anim_circle2');
const anim_circle3 = document.querySelector('.anim_circle3');
const anim_circle4 = document.querySelector('.anim_circle4');
const clickCircle = document.querySelector('.click_circle');
clickCircle.addEventListener('click', function () {

    animCircle.classList.toggle('move');
    anim_circle2.classList.toggle('move2');
    anim_circle3.classList.toggle('move3');
    anim_circle4.classList.toggle('move4');
})
document.querySelector('button').addEventListener('click', function(){
    document.querySelector('#SVGmator__c1dux1560067354551').contentWindow.postMessage('play', '*')
  });