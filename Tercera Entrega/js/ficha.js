"use strict";

class Ficha  {
    posx;
    posy;
    jugador;
    seleccionada;
    turno;
    
    constructor(x,y,jugador,seleccionada){
        this.posx= posx;
        this.posy= posy;
        this.jugador= jugador;
        this.seleccionada= seleccionada;
        this.turno = false;
    }
    getPosx(){
        return this.posx;
    }
    getPosY(){
        return this.posy;
    }
}