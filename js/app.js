const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');


// EventListener
btn.addEventListener('click',()=>{
    // console.log('hay');


    search.classList.toggle('active');

    input.focus();
})
