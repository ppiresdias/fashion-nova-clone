

let navMobileCollapseMenuIcon = document.querySelector('#nav-collapse-icon');
let collapsedNav = document.querySelector('.navbar-collapsable');
let hamburgerMenuButton = document.querySelector('.navbar-toggler');

hamburgerMenuButton.addEventListener('click', e => {
    console.log("Hello")
    collapsedNav.classList.add('show');
})

navMobileCollapseMenuIcon.addEventListener('click', e => {
    console.log("Goodbye")
    collapsedNav.classList.remove('show');
})