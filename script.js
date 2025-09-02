
                                  /* Select All Sections */

let homeSection = document.querySelector(".main");
let menSection = document.querySelectorAll(".trends")[0]; // men's wear
let womenSection = document.querySelector("#trendsec");   // women's wear
let aboutSection = document.querySelector(".about");
let contactSection = document.querySelector(".contact");
let cartSection = document.querySelector(".cart");
let blogSection = document.querySelectorAll(".trends")[1]; // blogs
let letterSection = document.querySelector(".letter");
let footerSection = document.querySelector(".footer");




                                  /* Function to Hide All Sections */

function hideAll() {
  homeSection.style.display = "none";
  menSection.style.display = "none";
  womenSection.style.display = "none";
  aboutSection.style.display = "none";
  contactSection.style.display = "none";
  cartSection.style.display = "none";
  blogSection.style.display = "none";
  letterSection.style.display = "none";
  footerSection.style.display = "none";
}

                     /* Navbar Functions */

function homes() {
  hideAll();
  homeSection.style.display = "flex";
  menSection.style.display = "block";
  womenSection.style.display = "block";
  letterSection.style.display = "flex";
  footerSection.style.display = "flex";
}

function shops() {
  hideAll();
  menSection.style.display = "block";
  womenSection.style.display = "block";
  letterSection.style.display = "flex";
  footerSection.style.display = "flex";
}

function blogs() {
  hideAll();
  blogSection.style.display = "block";
  letterSection.style.display = "flex";
  footerSection.style.display = "flex";
}

function abouts() {
  hideAll();
  aboutSection.style.display = "block";
  footerSection.style.display = "flex";
}

function contacts() {
  hideAll();
  contactSection.style.display = "block";
  footerSection.style.display = "flex";
}

                       /* Show Product in Cart */
function show(img) {
  hideAll();
  cartSection.style.display = "flex";
  document.getElementById("newImg").src = img.src;
}

             /* Back Button in Cart */
document.querySelector(".back").addEventListener("click", () => {
  homes();
});

                  /* Cart Button Functionality */
function addCart() {
  alert("🛒 Product added to cart successfully!");
}

                      /* Default Load Home */
homes();
