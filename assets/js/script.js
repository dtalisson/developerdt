

document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".menu-hamburger");
    const navMenu = document.querySelector(".navegacao ul");
    const menuItems = document.querySelectorAll(".navegacao ul li a");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener("click", function () {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        });
    });
});
