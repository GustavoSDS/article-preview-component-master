const shareBtn = document.querySelector('.card__content__buttom');
const socailIcons = document.querySelector('.card__content__social-icons');

shareBtn.addEventListener('click', ()=>{
    console.log("Hola");
    socailIcons.classList.toggle('show');
    shareBtn.classList.toggle('rotate');
});