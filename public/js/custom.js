

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

let jumboMenu1 = document.querySelector('#header-jumbo-menu-1');


$(".menu .menu-link").on({
    mouseenter: function () {
        console.log( "enter" );
        jumboMenu1.classList.add('show')
    },
    mouseleave: function () {
        console.log( "leave" );
        jumboMenu1.classList.remove('show');
    }
});
  