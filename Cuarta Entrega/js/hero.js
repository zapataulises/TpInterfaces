"use strict";
document.addEventListener("DOMContentLoaded", function () {

    var flechaIzq= document.getElementById("f-izq");
    var flechaDer= document.getElementById("f-der");
    let planetas= document.querySelectorAll(".planeta")
    let i=0
    flechaDer.addEventListener("click", function () {
        planetas[i].classList.add("off-plan");
        planetas[i].classList.remove("on-plan-izq")
        planetas[i].classList.remove("on-plan-der"); 
        if (i==planetas.length-1) {
            i=-1
        }
        planetas[i+1].classList.remove("off-plan");
        planetas[i+1].classList.add("on-plan-der");
   
        i++;

    })
    flechaIzq.addEventListener("click", function () {
       
        planetas[i].classList.add("off-plan");
        planetas[i].classList.remove("on-plan-izq"); 
        planetas[i].classList.remove("on-plan-der")
        if (i==0) {
            i=planetas.length;
        }
        planetas[i-1].classList.remove("off-plan");
        planetas[i-1].classList.add("on-plan-izq");
        i--;

    })
})