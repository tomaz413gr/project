const zone__1 = document.querySelector('.zone__1');
const zone__2 = document.querySelector('.zone__2');
const ufo = document.querySelector('#ufo');
zone__1.ondragover = allowDrop;
zone__2.ondragover = allowDrop;
function allowDrop(event) {
    event.preventDefault();
};
    ufo.ondragstart = drag;
    function drag(event) {
        event.dataTransfer.setData('id', event.target.id);
    };
    zone__1.ondrop = drop;
    zone__2.ondrop = drop;
    function drop(event) {
let itemId = event.dataTransfer.getData('id');
event.target.append(document.getElementById(itemId));
    };

