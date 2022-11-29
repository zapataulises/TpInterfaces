"use strict";
document.addEventListener("DOMContentLoaded", function () {

let botonera = document.querySelector(".navbar");
let sticky = botonera.offsetTop;
let burger=0;
let burgerMenu=document.querySelector("#menuVertical");
document.querySelector("#burger").addEventListener("click", function () {
    
    if (burger==0) {

        burgerMenu.classList.add("menu-on");
        burgerMenu.classList.remove("menu-off");
        burger=1;
    }
    else if (burger==1) {
        burgerMenu.classList.remove("menu-on");
        burgerMenu.classList.add("menu-off");
        burger=0;
    }
});

function stickyScroll(){
    if (window.pageYOffset > sticky) {
        botonera.classList.add("sticky");
      } else {
        botonera.classList.remove("sticky");
      }
}

window.onscroll = function() {stickyScroll()};



});