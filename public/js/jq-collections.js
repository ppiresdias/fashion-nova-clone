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
  
  // will add this to the _document.js
  // const topFunction = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // }

  function shiftLeft(carousel) {
    $(carousel).removeClass("gallery__image-container--right");
    $(carousel).addClass("gallery__image-container--left");
  }
  function shiftRight(carousel) {
    $(carousel).removeClass("gallery__image-container--left");
    $(carousel).addClass("gallery__image-container--right");
  }

  // function parentHandler(parent, left=true) {
  //   if(left === true) {
  //     shiftLeft($(parent).find(".gallery__carousel"));
  //   } else {
  //     shiftRight($(parent).find(".gallery__carousel"));
  //   }
  // }

  // GALLERY ARROWS
  $(".gallery__image-container").on({
    mouseenter: function() {
      // let carousel = ;
      // c($(this))
      if($(this).hasClass("gallery__image-container--right")) {
        shiftLeft($(this));
      } else {
        $(this).on("mouseleave", function() {shiftRight($(this));});
        shiftRight($(this));
      }
      // shiftLeft($(this).find(".gallery__carousel"));
      // if($(this).hasClass("gallery__image-container--active")) {}
    },
    mouseleave: function() {
      // c($(this))
      // shiftRight($(this).find(".gallery__carousel"));
      // if($(this).hasClass("gallery__image-container--active")) {
      // }
      
      shiftRight($(this));
      // $(this).off("mouseenter");
      // let carousel = $(".gallery__carousel");
      // $(carousel).removeClass("gallery__carousel--left");
      // $(carousel).addClass("gallery__carousel--right");
    }
  });

  $(".gallery__image-container .gallery__icon--arrow-left").on({
    click: function() {
      // alert('clicked')
      // c($(this).parent())
      // let carousel = ;
      // c(carousel)
      // $(this).parent().off('mouseenter mouseleave');
      shiftRight($(this).parent());
      // $(this).parent().off('mouseleave');
      // $(carousel).off('mouseenter');
      // $(this).parent().off('mouseleave');
      // let parent = $(this).parent();
      // c(parent)
      // $(parent).removeClass("gallery__image-container--active");
      // shiftRight($(parent).find(".gallery__carousel"));
      // shiftLeft($(this).parent().find(".gallery__carousel"));
      // let carousel = 
      // $(carousel).addClass()
    }
  });
  $(".gallery__image-container .gallery__icon--arrow-right").on({
    click: function() {
      // $(this).parent().off('mouseenter');
      // $(this).parent().off('mouseleave');
      // $($(this).parent()).off('mouseenter mouseleave');
      // shiftLeft($(this).parent().find(".gallery__carousel"));
      // let carousel = 
      // $(carousel).addClass()
      // let parent = $(this).parent();
      // $(parent).removeClass("gallery__image-container--active");
      // shiftLeft($(parent).find(".gallery__carousel"));
      $(this).parent().off('mouseleave');
      shiftLeft($(this).parent());
    }
  });
  // $(".gallery__image-container").on({
  //   mouseover: function() {
  //     $(this).find(".gallery__icon--arrow-left").show();
  //     $(this).find(".gallery__icon--arrow-right").hide();
  //   },
  //   mouseleave: function() {
  //     $(this).find(".gallery__icon--arrow-left").hide();
  //     $(this).find(".gallery__icon--arrow-right").show();
  //   }
  // });
  
  // SWATCH ACTIVE
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