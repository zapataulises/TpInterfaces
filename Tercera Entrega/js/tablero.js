"use strict"

class Tablero{
   constructor(canvas, ctx, casillero, ocupado){
    this.canvas = canvas;
    this.ctx = ctx;
    this.casillero = casillero;
    this.ocupado = ocupado;
   }
   
   crearTablero(cantFilas){
    let xInicial;
    let yInicial;
    if(cantFilas ==5){
        xInicial = 280;
        yInicial = 200;
    }
    else if(cantFilas ==6){
        xInicial = 250;
        yInicial = 200;
    }
    else if(cantFilas == 7){
        xInicial = 230;
        yInicial = 200;
    }
    else if(cantFilas == 8){
        xInicial = 205;
        yInicial = 200;
    }
    
    for (let i = cantFilas; i > -1; i--) {
        this.casillero[i] = [];
        for(let j= cantFilas+1; j>=0; j--){
            let y =yInicial + j*50;
            le ty 
        }
        
    }
    }
   }
