// collapsable navigation menu mobile 
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

// fetch all navigation menu links
let navMenus = document.querySelectorAll('.header-nav-menu-link');

// add hover event listener to each navigation menu link
// display respective jumbo menu when navigation menu link is hovered over
navMenus.forEach( menu => {
    console.log(menu.dataset.target)
    hover(menu, e => {
        let jumboMenu = document.querySelector(menu.dataset.target);
        jumboMenu.classList.add('show')
    }, e=> {
        let jumboMenu = document.querySelector(menu.dataset.target);
        jumboMenu.classList.remove('show');
    })
})
  
// add mouseenter/mouseleave event listeners to element
function hover(element, enter, leave){
    element.addEventListener('mouseenter', enter)
    element.addEventListener('mouseleave', leave)
}