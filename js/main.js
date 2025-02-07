var navLinks = document.querySelectorAll('.nav_menu-link');
var mainContent = document.querySelectorAll('.main_content-item');


navLinks.forEach((btn, index) => {
    btn.addEventListener('click', ()=> {
        navLinks.forEach(element => {
            element.classList.remove('active');
        });
        btn.classList.add('active');

        mainContent.forEach(element => {
            element.classList.remove('active');
        });
        mainContent[index].classList.add('active');
    });
});