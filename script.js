const open=document.querySelector('.toggle-bar1')
const close=document.querySelector('.toggle-bar2')
const navbar=document.querySelector('.navbar')

open.addEventListener('click',
()=>{
    open.style.display='none'
    close.style.display='block'
    navbar.style.right='0rem'
    console.log('open');
})

close.addEventListener('click',
()=>{
    close.style.display='none'
    open.style.display='block'
    console.log('close');
    navbar.style.right='-18.2rem'

})