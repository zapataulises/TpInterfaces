"use strict";
document.addEventListener("DOMContentLoaded", function () {
    

    setTimeout(function carga(params) {
        let home= document.querySelector("#home");
        let carga= document.querySelector("#carga");

        home.classList.remove("completado");
        carga.classList.add("completado");
    },5000);
    


    //Botones//
  document.querySelectorAll(".comprar").forEach(function (element) {
    let added=0;
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

