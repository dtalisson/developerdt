document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".menu-hamburger");
    const navMenu = document.querySelector(".navegacao ul");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
});
