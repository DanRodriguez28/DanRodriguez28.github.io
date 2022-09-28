/* MENU INDICATOR */

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('ul a');

window.onscroll = () => {

    section.forEach(sec => {

        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('ul a[href*=' + id + ']').classList.add('active');
            });
        };

    });

};

/* SHOW MENU */

document.querySelector(".show__menu").addEventListener("click", () => {
    document.querySelector(".nav ul").classList.toggle("show");
});