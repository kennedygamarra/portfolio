window.onscroll = function () {
    var nav = document.getElementById('navbar')
    if (window.pageYOffset > 100) {
        nav.classList.add("scrolled")
    } else {
        nav.classList.remove("scrolled")
    }
}



var btnHamburger = document.getElementById("menu-hamburger");

function toggleMenu() {
    var navbar = document.getElementById("navbar");
    navbar.classList.toggle("active");
}

    btnHamburger.addEventListener('click', toggleMenu);