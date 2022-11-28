"use strict";
document.addEventListener("DOMContentLoaded", function () {

    var flechaIzq= document.getElementById("f-izq");
    var flechaDer= document.getElementById("f-der");
    let planetas= document.querySelectorAll(".planeta")
    var navbar = document.getElementById("navbarh");
    let i=0
    flechaDer.addEventListener("click", async function () {
        planetas[i].classList.add("off-plan-izq");
        planetas[i].classList.remove("on-plan-izq")
        planetas[i].classList.remove("on-plan-der"); 
        await(delay(500));
        planetas[i].classList.remove("off-plan-izq");
        planetas[i].classList.add("off-plan");
        if (i==planetas.length-1) {
            i=-1
        }
        planetas[i+1].classList.remove("off-plan");
        planetas[i+1].classList.add("on-plan-der");
   
        i++;

    })
    flechaIzq.addEventListener("click", async function () {
        planetas[i].classList.add("off-plan-der");
        planetas[i].classList.remove("on-plan-izq"); 
        planetas[i].classList.remove("on-plan-der")
        await(delay(500));
        planetas[i].classList.remove("off-plan-der");
        planetas[i].classList.add("off-plan");
        if (i==0) {
            i=planetas.length;
        }
        planetas[i-1].classList.remove("off-plan");
        planetas[i-1].classList.add("on-plan-izq");
        i--;

    })
    function delay(time) {
        return new Promise(resolve => setTimeout(resolve, time));
      }

window.addEventListener("scroll", function () {
    let textos = document.querySelectorAll(".texto");
    let imgs = document.querySelectorAll(".img")
    textos.forEach(function (t) {
        t.classList.add("oculto")
      })
      imgs.forEach(function (t) {
        t.classList.add("imgOculta")
      })
      if (scrollY < 1200) {
        textos[0].classList.remove("oculto");
        imgs[0].classList.remove("imgOculta");
        navbar.classList.add("achicar");
      }
      else if (scrollY >= 1200 && scrollY < 1700) {
        textos[1].classList.remove("oculto");
        imgs[1].classList.remove("imgOculta");
        navbar.classList.add("achicar");
      } 
      else if(scrollY < 5500){
        navbar.classList.add("achicar");
      }
    
      else {
        textos[2].classList.remove("oculto")
        imgs[2].classList.remove("imgOculta");
      }
    })
    
    

})

    
