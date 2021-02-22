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
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topButton.classList.add("active");
    } else {
      topButton.classList.remove("active");
    }
  }
  
  window.addEventListener("scroll", scrollFunction);    
  
  // will add this to the _document.js
  // const topFunction = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: 'smooth'
  //   });
  // }

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