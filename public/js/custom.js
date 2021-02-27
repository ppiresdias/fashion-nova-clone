jQuery(function () {
//   let header = document.querySelector(".header-wrapper");
//   let announcement = document.querySelector(".header-announcement-bar");
//   let contentWrapper = document.querySelector(".content-wrapper");

//   document.addEventListener(
//     "scroll",
//     (e) => {
//       let scroll = document.body.scrollTop;

//       if (scroll >= 30) {
//         header.classList.add("fixed-top");
//         announcement.classList.remove("show");
//         contentWrapper.classList.add("offset-margin-top");
//       } else {
//         header.classList.remove("fixed-top");
//         announcement.classList.add("show");
//         contentWrapper.classList.remove("offset-margin-top");
//       }
//     },
//     true /** capture event */
//   );

  // collapsable navigation menu mobile
  let navMobileCollapseMenuIcon = document.querySelector("#nav-collapse-icon");
  let collapsedNav = document.querySelector(".navbar-collapsable");
  let hamburgerMenuButton = document.querySelector(".navbar-toggler");
  let headerSearch = document.querySelector(".header-banner-search");

  hamburgerMenuButton.addEventListener("click", (e) => {
    collapsedNav.classList.add("show");
    // headerSearch.classList.add("show");
  });

  navMobileCollapseMenuIcon.addEventListener("click", (e) => {
    collapsedNav.classList.remove("show");
    // headerSearch.classList.remove("show");
    //$(".header-jumbo-menu").css("display", "none");
  });

});


// shopping cart
let openShoppingBag = document.querySelector('.header-cart');
let closeShoppingBag = document.querySelector('#shopping-cart-close-icon');
let shoppingBag = document.querySelector('#shopping-bag');

openShoppingBag.addEventListener("click", (e) => {
    shoppingBag.classList.add('show');
})

closeShoppingBag.addEventListener("click", (e) => {
  shoppingBag.classList.remove('show');
})


const modalImg = document.getElementById("img01");
const modal = document.getElementById("myModal");
$("#myImg, #myImg2, #myImg3, #myImg4").on("click", function () {
  modal.style.display = "block";
  modalImg.src = this.src;
});

$(".close").on("click", function () {
  modal.style.display = "none";
});
