

const btns = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const clear = document.querySelector('.btn-clear');
const equal = document.querySelector('.btn-equal-big');
const del = document.querySelector('.btn-delete');

btns.forEach( btn => {
   btn.addEventListener('click', ()=> {
       let number = btn.getAttribute('data-num');
       screen.value += number
   })
});

equal.addEventListener('click', () => {

    if(screen.value === ''){
        alert('screenvalue is empty')
     }else{
        
     let value = eval(screen.value);
     screen.value = value;
     }
     
});

 clear.addEventListener('click', () => {
     
        screen.value = '';
     
})

 del.addEventListener('click', () => {
    screen.value = screen.value.slice (0, -1)
 })