"use strict";
//Sticky Navbar
window.addEventListener("scroll" , ()=>{
    let headerWrapper = document.querySelector(".navbar_wrapper");
      headerWrapper.classList.toggle("navbar-fixed",scrollY > 0);
  })











