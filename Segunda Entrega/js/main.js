"use strict";
document.addEventListener("DOMContentLoaded", function () {
    var pantalla = document.querySelector("canvas");
    var pincel = pantalla.getContext("2d");        
    
    function diseniarCircunferencia(x,y,radio){
        pincel.fillStyle = "blue";
        pincel.beginPath();
        pincel.arc(x+10,y,radio,0,2*Math.PI);
        pincel.fill();
    }    
    
    
    var x = 0
    
    function actualizarPantalla(){
        
        diseniarCircunferencia(x,10,10);
        if (x<280) {
           x++; 
        }
        
    }
    
        setInterval(actualizarPantalla,10);
    
    
    

    setTimeout(function carga(params) {
        let home= document.querySelector("#home");
        let carga= document.querySelector("#carga");

        home.classList.remove("completado");
        carga.classList.add("completado");
        
    },/*5000*/);
    


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
})
    

    
    



});

