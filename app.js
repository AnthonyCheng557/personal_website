let navbar = document.querySelector('.navbar');
/*login-wrapper*/ 
let loginWrapper = document.querySelector('.login-wrapper');
let loginLink = document.querySelector('.login-link');
let registerLink = document.querySelector('.register-link');
let loginPopup = document.querySelector('.btnLogin');
let iconClose = document.querySelector('.icon-close');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginWrapper.classList.remove('active-popup');
};

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginWrapper.classList.remove('active-popup');
};

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}




/*Login Link and Register Link*/
registerLink.addEventListener('click', ()=> {
    loginWrapper.classList.add('active');
});

loginLink.addEventListener('click', ()=> {
    loginWrapper.classList.remove('active');
});
/*Pop Ups*/
loginPopup.addEventListener('click', ()=> {
    loginWrapper.classList.toggle('active-popup');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
});

iconClose.addEventListener('click', ()=> {
    loginWrapper.classList.remove('active-popup');
});