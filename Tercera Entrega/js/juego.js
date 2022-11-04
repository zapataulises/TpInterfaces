"use strict"

let canvas=document.querySelector('#canvas');
let ctx= canvas.getContext('2d');
let btn_modo= document.querySelectorAll(".btn_modo");

//Declaracion de jugadores
let jugadores=[];

let imgJ1= new Image();
imgJ1.src= './img/goku.png';
let jugador1= new Jugador("Jugador 1", imgJ1);
let fichasj1;

let imgJ2= new Image();
imgJ2.src= './img/freezer.png';
let jugador2= new Jugador("Jugador 2", imgJ2);
let fichasj2;

//Declaracion variables
let turnoDe;
let modo;
let tablero;
let casilleros;
//Temporizador
let timer;
function contrareloj(){
    if (timer>0) {
        timer--;
        recarga();
    }
}

//Iniciar segun la opcion

btn_modo.forEach(btn => {
    btn.addEventListener("click", cargarJuego=>{
        ctx.clearRect(0,0, canvas.width, canvas.height);
        //fondo
        jugadores.push(jugador1);
        jugadores.push(jugador2);
        jugador1.turno=true;
        turnoDe= jugador1;
        modo= Number(btn.value);
        fichasj1=[];
        fichasj2=[];
        casilleros=[];
        tablero= new Tablero(canvas, ctx, casilleros, modo);
        tablero.crearTablero();
        tablero.draw();
        genFichas(modo);
        dibujarFichas();

        timer=180;
        setInterval(contrareloj, 1000)
        

    })
});

function genFichas(modo){

    let totalCu=((modo+2)*(modo+3))/2
    for (let i = 0; i < totalCu; i++) {
        let x;
        let y;
        if(i<11){
            x = 15;
            y = i*50 + 80;
           
        }else if(i<22){
            x = 65;
            y = (i - 11) * 50 + 80;
           
        }else if(i<33){
           x = 115;
           y = (i-22) * 50 + 80;
        }else if(i<44){
           x = 165;
           y = (i-33) * 50 + 80;
        }
        else{
            x = 215;
            y = (i-39) * 50 + 80;
        }
        fichasj1[i]= new Ficha(x, y, jugador1)
    }

    for (let i = 0; i < totalCu; i++) {
        let x;
        let y;
        if(i<11){
            x = canvas.offsetWidth - 55;
            y = i* 50 + 80;
           
        }else if(i<22){
            x = canvas.offsetWidth - 105;
            y = (i - 11)* 50 + 80;
           
        }else if(i<33){
           x = canvas.offsetWidth - 155;
           y = (i-22)*50 + 80;
        }else if(i<44){
           x = canvas.offsetWidth - 205;
           y = (i-33) * 50 + 80;
        }
        else {
            x = canvas.offsetWidth - 255;
            y = (i-39) * 50 + 80;
         }
        fichasj2[i]= new Ficha(x, y, jugador2)
    }
}
function dibujarFichas() {
    fichasj1.forEach(e=>e.draw(ctx));
    fichasj2.forEach(e=>e.draw(ctx));
 }
   
    
    
