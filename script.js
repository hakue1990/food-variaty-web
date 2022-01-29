// Change hero icons display one after another

const icons = document.querySelectorAll('.section-1-icons i');
let i = 1;

setInterval(() => {
  i++;

  const icon = document.querySelector('.section-1-icons i.change');
  icon.classList.remove('change');

  if (i > icons.length) {
    icons[0].classList.add('change');
    i = 1;
  } else {
    icon.nextElementSibling.classList.add('change');
  }
}, 700);

// burger button class toggle

const burgetBtn = document.querySelector('.burger-button');
const navList = document.querySelector('.nav--links');
const navLinks = document.querySelectorAll('.nav--link');

burgetBtn.addEventListener('click', () => {
  burgetBtn.classList.toggle('active');
  navList.classList.toggle('active');


    navLinks.forEach((navLink, index) => {

        if(navLink.style.animation){
            navLink.style.animation = '';
        }else {
            navLink.style.animation = `fadeLinks 1.5s ease  ${index / 8 + .1}s`;
        }
     
    });
  
});
