"use strict";
document.addEventListener("DOMContentLoaded", function () {
 let added=0;
 
  document.querySelectorAll(".comprar").forEach(function (element) {
    element.addEventListener("click", function (){
    if (added==0) {
        element.innerHTML="Quitar del <br> Carrito";
        element.classList.add("quitar");
        added=1;
    }
    else if (added==1) {
        element.innerHTML="Agregar al <br> Carrito";
        element.classList.remove("quitar");
        added=0;
    }
    
})
})

});

