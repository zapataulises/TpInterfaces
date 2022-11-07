"use strict"

let canvas=document.querySelector('#canvas');
let ctx= canvas.getContext('2d');
let btn_modo= document.querySelectorAll(".btn_modo");
let apex = document.querySelector('#apex');
let aj = document.querySelector('#aj');
let gamemode = document.querySelector('#gamemode');
let gamemode2 = document.querySelector('#gamemode2');
aj.style='display:none';
canvas.style='display:none';

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
let ganador;
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
        apex.style='display:none';
        canvas.style='display:block';
        gamemode.style='display:none';
        gamemode2.style='display:none';
        aj.style= 'display:none';
        ctx.clearRect(0,0, canvas.width, canvas.height);
        //fondo
        jugadores.push(jugador1);
        jugadores.push(jugador2);
        jugador1.turno=true;
        ganador= null;
        turnoDe= jugador1;
        modo= Number(btn.value);
        fichasj1=[];
        fichasj2=[];
        casilleros=[];
        tablero= new Tablero(canvas, ctx, casilleros, modo);
        tablero.crearTablero();
        tablero.draw(true);
        genFichas(modo);
        dibujarFichas();
        eventos();

        timer=180;
        //setInterval(contrareloj, 1000)
        

    })
});

function recarga() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    //fondo
    tablero.draw();
    dibujarFichas();
}

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

function turnoSiguiente(){
    if (jugador1.turno) {
        jugador1.turno=false;
        turnoDe= jugador2;
        jugador2.turno=true;
        
    }else if(jugador2.turno){
        jugador1.turno=true;
        turnoDe= jugador1;
        jugador2.turno=false;
    }

}
   
//eventos

function eventos() {
    canvas.addEventListener("mousedown", (e)=>{
        mouseDown(e)
    })
    canvas.addEventListener("mousemove", (e)=>{
        mouseMove(e)
    })
    canvas.addEventListener("mouseup", (e)=>{
        mouseUp();
    })

}

function mouseDown(e) {
    let x = e.pageX-canvas.offsetLeft;
    let y = e.pageY-canvas.offsetTop;
    if (turnoDe==jugador1) {
        fichasj1.forEach(f=>f.select(x,y));
    }else{
        fichasj2.forEach(f=>f.select(x,y));

    }
}
function mouseMove(e) {
    let x = e.pageX-canvas.offsetLeft;
    let y = e.pageY-canvas.offsetTop;
    fichasj1.forEach(f=>f.moverPos(x,y));
    fichasj2.forEach(f=>f.moverPos(x,y));
    recarga();
}
function mouseUp() {
   fichasj1.forEach(f=>tablero.colocar(f));
   fichasj2.forEach(f=>tablero.colocar(f)); 
}
    
function anunciarGanador() {
 if(ganador != null){
    jugador1.turno = false;
    jugador2.turno = false;
    aj.style='display:flex';
    gamemode.style='display:flex';
    gamemode2.style='display:flex';
 }
}