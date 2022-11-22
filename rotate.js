const rotateobj1 = document.querySelector('.box1');
const rotateobj2 = document.querySelector('.box2');
const rotate_btn = document.querySelector('.container2');

let rotateDeg = 0;
rotate_btn.addEventListener('click', () => {
    rotateobj1.style.transform = 'rotate('+rotateDeg+'deg)';
    rotateobj2.style.transform = 'rotate('+rotateDeg+'deg)';

})
