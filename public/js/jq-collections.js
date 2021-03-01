// import { tns } from "tiny-slider/dist/tiny-slider";

// simple print function
function c() {
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}

$(window).on("load", function() {

  // GO TO TOP BUTTON
  function scrollFunction() {
    let topButton = document.getElementById("topButton");
    if (topButton !== null) {
      if(document.documentElement.scrollTop > 20) {
        topButton.classList.add("active");
      } else {
        topButton.classList.remove("active");
      }
      
      let scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();
      let bottom = $(".footer-wrapper").height();
      
      if(scrollBottom < bottom) {
        topButton.classList.add("top-button--bottom");
      } else {
        topButton.classList.remove("top-button--bottom");
      }
    } 
  }
  window.addEventListener("scroll", scrollFunction);  
  
  // ADD THIS TO _document.js
  // const topFunction = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // }
  

  // GALLERY ARROWS
  $(".gallery__image-container").on({
    mouseenter: function() {
      // when mouse enters, if carousel is right, move it left; if it's left, move it right
      if($(this).hasClass("gallery__image-container--right")) {
        shiftLeft($(this));
      } else {
        shiftRight($(this));
        // restore right shift upon mouse leave
        $(this).on("mouseleave", function() {shiftRight($(this));});
      }
    },
    mouseleave: function() {
      shiftRight($(this));
    }
  });

  $(".gallery__image-container .gallery__icon--arrow-left").on({
    click: function() {
      shiftRight($(this).parent());
    }
  });
  $(".gallery__image-container .gallery__icon--arrow-right").on({
    click: function() {
      // when right arrow is clicked, temporarily remove the on mouseleave right shift
      shiftLeft($(this).parent());
      $(this).parent().off('mouseleave');
    }
  });

  function shiftLeft(carousel_parent) {
    $(carousel_parent).removeClass("gallery__image-container--right");
    $(carousel_parent).addClass("gallery__image-container--left");
  }

  function shiftRight(carousel_parent) {
    $(carousel_parent).removeClass("gallery__image-container--left");
    $(carousel_parent).addClass("gallery__image-container--right");
  }
  
  // SWATCH HANDLER
  $(".swatch").on({
    click: function() {
      let active = "swatch--active";
      if(!$(this).hasClass(active)) {
        $(this).parent().find("." + active).removeClass(active);
        $(this).addClass(active);
      }
    }
  });

  let collections_modal = $("#collections__modal");
  $("#gallery__filter").on({
    click: function() {
      $(collections_modal).addClass("collections__modal--active");
      // $(collections_modal).style({display: "block"});
    }
  });
  
  $("#collections__modal-close").on({
    click: function() {
      $(collections_modal).removeClass("collections__modal--active");
      // $(collections_modal).style({display: "none"});
    }
  });




    // TINY SLIDER
    let slider = tns({
      // autoplay: true,
      container: '.carousel__slider',
      controls: true,
      controlsPosition: "top",
      // controlsText: ["prev", "next"],
      controlsText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
      // edgePadding: 20,
      gutter: 20,
      items: 5,
      lazyload: false,
      loop: true,
      mode: 'carousel',
      nav: true,
      // navContainer: true,
      navPosition: "top",
      preventScrollOnTouch: "auto",
      responsive: {
        414: {
          items: 1
        },
        640: {
          items: 2
        },
        700: {
          items: 3
        },
        900: {
          items: 5
        }},
      rewind: true,
      slideBy: 'page',
      speed: 750,
      touch: true
    
    });
});