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
      if((document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)) {
        topButton.classList.add("active");
      } else {
      topButton.classList.remove("active");
    }}
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

});