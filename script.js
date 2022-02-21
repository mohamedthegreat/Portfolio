let menu = document.querySelector('#menu-btn');
let header = document.querySelector('header');


menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

let themeToggler = document.querySelector('#theme-toggler');

themeToggler.onclick = () =>{
    themeToggler.classList.toggle('fa-sun');
    if(themeToggler.classList.contains('fa-sun')){
        document.body.classList.add('active');
    }else{
          document.body.classList.remove('active');
  }
}

var typed = new Typed(".typing-2", {
    strings: [ "Trucking Company", "Dispatch Services", "Hiring semi-truck drivers", "Hiring box-truck drivers"],
       typeSpeed: 130,
       backSpeed: 60,
       loop: true
});