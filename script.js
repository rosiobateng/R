document.addEventListener("DOMContentLoaded", function() {
    var currentLocation = window.location.href;
    var navLinks = document.querySelectorAll("nav ul li a");
  
    for (var i = 0; i < navLinks.length; i++) {
      if (navLinks[i].href === currentLocation) {
        navLinks[i].classList.add("active");
      }
    }
  });

  