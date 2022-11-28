"use strict";
document.addEventListener("DOMContentLoaded", function () {

    var flechaIzq= document.getElementById("f-izq");
    var flechaDer= document.getElementById("f-der");
    let planetas= document.querySelectorAll(".planeta")
    var navbar = document.getElementById("navbarh");
    let icon = document.getElementById("icon");
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
        await(delay(10));
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

window.addEventListener("scroll", async function () {
    let textos = document.querySelectorAll(".texto");
    let imgs = document.querySelectorAll(".img");
    let titulo = document.querySelector(".probando");
    
    textos.forEach(function (t) {
        t.classList.add("oculto")
      })
      imgs.forEach(function (t) {
        t.classList.add("imgOculta")
      })

      titulo.style.opacity
      if(scrollY==0){
        navbar.style.transform="scale(1)";
        navbar.style.height="auto";
        icon.style.height="5.2em";
        icon.style.width="5.2em";
      }
      if(scrollY<100 && scrollY>1){
        titulo.style.opacity= 1;
        titulo.style.top= '210px';
        icon.style.height="1.2em";
        icon.style.width="1.2em";
        navbar.style.position="fixed";
      }
      else if(scrollY >= 100 && scrollY < 140){
        titulo.style.opacity=0.8;
        titulo.style.top= '260px';
      }
      else if(scrollY >= 140 && scrollY <190){
        titulo.style.opacity=0.6;
        titulo.style.top= '310px';
      }
      else if(scrollY >= 190 && scrollY < 220){
        titulo.style.opacity=0.4;
        titulo.style.top= '360px';
      }
      else if(scrollY >= 220 && scrollY < 350){
        titulo.style.opacity=0.2;
        titulo.style.top= '410px';
      }
      else if(scrollY >= 350){
        titulo.style.top= '460px';
        titulo.style.opacity=0;
      }
      if (scrollY >= 800 && scrollY < 1200) {
        textos[0].classList.remove("oculto");
        imgs[0].classList.remove("imgOculta");
      }
      else if (scrollY >= 1200 && scrollY < 1700) {
        textos[1].classList.remove("oculto");
        imgs[1].classList.remove("imgOculta");
       // navbar.classList.add("achicar");
        //navbar.classList.remove("desachicar")
      } 
      
    
      else {
        textos[2].classList.remove("oculto")
        imgs[2].classList.remove("imgOculta");
        titulo.classList.remove("oculto");
        //navbar.classLista.remove("achicar");
        //navbar.classList.add("desachicar");
      }
    })
    
  //navbar.classList.add("achicar");
})

    
