document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.js-testimonials-slider', {
        grabCursor: true,
        spaceBetween: 30,
        pagination: {
            el: '.js-testimonials-pagination',
            clickable: true,
        },
        breakpoints: {
            767: {
                slidesPerView: 2
            }
        }
    });
});

let menuIcon = document.querySelector("#menuIcon");
let navBar = document.querySelector(".navBar");
let section = document.querySelectorAll("section")
let navLinks = document.querySelectorAll(".home .header nav a")


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector(".home .header nav a[href*=" + id +" ]").classList.add("active")
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navBar.classList.toggle("active");
}   