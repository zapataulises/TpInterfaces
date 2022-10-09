"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");        
    pincel.fillStyle = "lightgrey";
    pincel.fillRect(0,0,600,400); 
    
    function diseniarCircunferencia(x,y,radio){
        pincel.fillStyle = "blue";
        pincel.beginPath();
        pincel.arc(x,y,radio,0,2*Math.PI);
        pincel.fill();
    }    
    
    function limpiarPantalla(){
        pincel.clearRect(0,0,600,400);
    }
    
    var x = 0
    
    function actualizarPantalla(){
    
        limpiarPantalla();
        diseniarCircunferencia(x,20,10);
        x++;
    }
    
    setInterval(actualizarPantalla,(10/1.1123));
    

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

