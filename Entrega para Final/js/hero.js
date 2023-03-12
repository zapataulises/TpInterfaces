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

      let imgs = document.querySelectorAll(".img");
      imgs.forEach(function (t) {
        t.classList.add("imgOculta")
        t.classList.remove("posicion");
        t.classList.remove("posicion2")
      })
window.addEventListener("scroll", async function () {
    let textos = document.querySelectorAll(".texto");
    let titulo = document.querySelector(".probando");
  
    textos.forEach(function (t) {
      //  t.classList.add("oculto")
      })
      imgs.forEach(function (t) {
        t.classList.add("imgOculta")
        t.classList.remove("posicion");
        t.classList.remove("posicion2")
      })

      if(scrollY==0){
        navbar.style.height="auto";
        icon.style.height="5.2em";
        icon.style.width="5.2em";
      }
      if(scrollY<100 && scrollY>1){
        titulo.style.opacity= 1;
        titulo.style.top= '210px';
        icon.style.height="3em";
        icon.style.width="3em";
        navbar.style.top='0'
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

      //
      if (scrollY >= 800 && scrollY < 1200) {
        textos[0].classList.remove("oculto");
        imgs[0].classList.remove("imgOculta");
        imgs[0].classList.add("posicion");
      }
      else if (scrollY >= 1200 && scrollY < 1700) {
        textos[1].classList.remove("oculto");
        imgs[1].classList.remove("imgOculta");
        imgs[1].classList.add("posicion");
      } 
      else if (scrollY >= 1700) {
        textos[2].classList.remove("oculto")
        imgs[2].classList.remove("imgOculta");
        titulo.classList.remove("oculto");
        imgs[2].classList.add("posicion2");
      }
        
      
//personajes
let nombre=this.document.querySelectorAll(".nombre")
nombre.forEach(element => {
  if (scrollY >=2800 && scrollY < 2900) {
        element.style.margin='20px';
      }
      else if (scrollY >= 2900 && scrollY < 3000) {
        element.style.margin='10px';
      } 
      else if (scrollY >= 3000) {
        element.style.margin='0px';
      } 
      else{
        element.style.margin='30px';
      }
});
let nombre2=this.document.querySelectorAll(".nombre2")
nombre2.forEach(element => {
  if (scrollY >=3200 && scrollY < 3300) {
        element.style.margin='20px';
      }
      else if (scrollY >= 3300 && scrollY < 3400) {
        element.style.margin='10px';
      } 
      else if (scrollY >= 3400) {
        element.style.margin='0px';
      } 
      else{
        element.style.margin='30px';
      }
});
      
 console.log(scrollY);
 let laterales= document.querySelectorAll(".laterales")
if (scrollY >=3900 && scrollY < 4100) {
  laterales[0].classList.remove("off-plan-izq");
  laterales[0].classList.remove("off-plano");
  laterales[0].classList.add("on-plan-der");
  laterales[1].classList.add("off-plan-izq");
  await(delay(100))
  laterales[1].classList.remove("on-plan-der");
  await(delay(100))
  laterales[1].classList.add("off-plano");

}
else if (scrollY >= 4100 && scrollY < 4300) {
  laterales[1].classList.remove("off-plan-izq");
  laterales[1].classList.remove("off-plano");
  laterales[1].classList.add("on-plan-der");
  laterales[2].classList.add("off-plan-izq");
  await(delay(100))
  laterales[2].classList.remove("on-plan-der");
  await(delay(100))
  laterales[2].classList.add("off-plano");

} 
else if (scrollY >= 4300) {
  laterales[2].classList.remove("off-plan-izq");
  laterales[2].classList.remove("off-plano");
  laterales[2].classList.add("on-plan-der");

}
else if(scrollY <3800){
  laterales[0].classList.add("off-plan-izq");
await(delay(10));
  laterales[0].classList.remove("on-plan-der");
await(delay(100))
  laterales[0].classList.add("off-plano");

  
}
    })


    
})

    
