/*typing animation*/
var typed = new Typed(".typing", {
  strings: [
    "",
    "Student",
    "Web Developer",
    "Android App Developer",
    "Cloud Enthusiast",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

// Get all the navigation links
const navLinks = document.querySelectorAll(".nav li a");

// Loop through each link and add a click event listener
navLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    // Remove the 'active' class from all links
    navLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Add the 'active' class to the clicked link
    this.classList.add("active");
  });
});

const navToggler = document.querySelector(".nav-toggler");
const asidex = document.getElementsByClassName("aside")[0];

navToggler.style.transform = "translateX(285px)";
asidex.style.transform = "translateX(0%)";

navToggler.addEventListener("click", function () {
  this.classList.toggle("open");
  console.log(asidex.style.transform);
  if(asidex.style.transform=="translateX(0%)"){
    asidex.style.transform = "translateX(-100%)";
    navToggler.style.transform = "translateX(0px)";
    
 
  }
else if(asidex.style.transform=="translateX(-100%)"){
  asidex.style.transform = "translateX(0%)";
  navToggler.style.transform = "translateX(285px)";
}

});