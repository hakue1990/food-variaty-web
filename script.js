const  icons = document.querySelectorAll('.section-1-icons i');
let i = 1;

setInterval(() => {
    i++;
    const icon = document.querySelector('.section-1-icons i.change');

if(i > icons.length){
    i = 1;
   icons[0].classList.add('change');
}else {
    icon.nextElementSibling.classList.add('change')
}

    icon.classList.remove('change');
},2000)