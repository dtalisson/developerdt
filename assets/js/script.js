
    function toggleMenu() {
        var menu = document.querySelector('.menu-mobile ul');
        menu.classList.toggle('show');
    }

    function fecharMenu() {
        var menu = document.querySelector('.menu-mobile ul');
        menu.classList.remove('show');
    }