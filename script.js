function openMenu() {
    document.body.classList.add("menu--open");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
}

function openMenu() {
    const navLinks = document.querySelector('nav__links');
    navLinks.classList.toggle('active');
}