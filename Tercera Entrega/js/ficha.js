"use strict";

class Ficha  {
    posx;
    posy;
    jugador;
    seleccionada;
    turno;
    startx;
    starty;
    
    constructor(x,y,jugador,seleccionada){
        this.posx= x;
        this.posy= y;
        this.startx= x;
        this.starty= y;
        this.jugador= jugador;
        this.seleccionada= seleccionada;
        this.turno = false;
    }
    toStart(){
        this.posx=this.startx;
        this.posy=this.starty;
    }
    getPosx(){
        return this.posx;
    }
    getPosY(){
        return this.posy;
    }

    draw(){
        let img= this.jugador.img
        x = this.posx;
        y = this.posy;
        ctx.drawImage(img, x, y, 45, 45);
    }
}