function myNavFunction() { //makes responsive menu to appear by adding .responsive class to .topNavigation
    var responsiveMenu = document.getElementById("myTopNavigation");
    if (responsiveMenu.className === "topNavigation") {
        responsiveMenu.className += " responsive";
    } else {
        responsiveMenu.className = "topNavigation";
    }
}

$(document).ready(function(){
  $("#hamburgerIcon").click(function(){ //turns hamburger icon to X and back
    $("#line1").toggleClass("active");
    $("#line2").toggleClass("active");
    $("#line3").toggleClass("active");
  });

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
