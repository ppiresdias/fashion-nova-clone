
jQuery(function () {

    let header = document.querySelector('.header-wrapper');
    let announcement = document.querySelector('.header-announcement-bar')
    let new__collection = document.querySelector('.new__collection')

    document.addEventListener('scroll', e => {
        let scroll = document.body.scrollTop

        if (scroll >= 30){
            header.classList.add('fixed-top')
            announcement.classList.remove('show')
            new__collection.classList.add('offset-margin-top')
        }else{
            header.classList.remove('fixed-top')
            announcement.classList.add('show')
            new__collection.classList.remove('offset-margin-top')
        }
    }, true /** capture event */)

    // collapsable navigation menu mobile 
    let navMobileCollapseMenuIcon = document.querySelector('#nav-collapse-icon');
    let collapsedNav = document.querySelector('.navbar-collapsable');
    let hamburgerMenuButton = document.querySelector('.navbar-toggler');

    hamburgerMenuButton.addEventListener('click', e => {
        collapsedNav.classList.add('show');
    })

    navMobileCollapseMenuIcon.addEventListener('click', e => {
        collapsedNav.classList.remove('show');
        $('.header-jumbo-menu').css('display', 'none')
    })

    // fetch all navigation menu links
    let navMenus = document.querySelectorAll('.header-nav-menu-link');

    if ($("#navbar-toggle").is(':visible')){
        // enable click listener
        navMenus.forEach( menu => {
            menu.addEventListener('click', e => {
                let rect = menu.getBoundingClientRect();
                // console.log(menu.id)
                // console.log(menu.id.substr(-1, 1))
                // console.log(rect.top, rect.right, rect.bottom, rect.left)
                // console.log('' + (rect.top + rect.bottom) + '')
                let navJumboMenu = $('#header-jumbo-menu-' + menu.id.substr(-1, 1))

                if(!navJumboMenu.is(':visible')){
                    navJumboMenu.css('top', '' + (rect.bottom) + 'px')
                    navJumboMenu.slideDown('fast')
                }else{
                    navJumboMenu.slideUp('fast')
                }
            })
        })
    }else{
        // enable hover listener
        // add hover event listener to each navigation menu link
        // display respective jumbo menu when navigation menu link is hovered over
        navMenus.forEach( menu => {
            menu.addEventListener('mouseenter', e => {
                let jumboMenu = document.querySelector(menu.dataset.target)
                hideSubMenus(navMenus, menu.dataset.target)
                jumboMenu.classList.add('show')
            })
        })
    
        header.addEventListener('mouseleave', e => {
            navMenus.forEach( menu => {
                let jumboMenu = document.querySelector(menu.dataset.target)
                jumboMenu.classList.remove('show')
            })
        })
    }

    // hide unselected (non-target) submenus
    function hideSubMenus(navMenus, target){
        navMenus.forEach( menu => {
            if (menu.dataset.target !== target){
                let jumboMenu = document.querySelector(menu.dataset.target)           
                jumboMenu.classList.remove('show')
            }
        })
    }   

    // add mouseenter/mouseleave event listeners to element
    function hover(element, enter, leave){
        element.addEventListener('mouseenter', enter)
        element.addEventListener('mouseleave', leave)
    }

});
