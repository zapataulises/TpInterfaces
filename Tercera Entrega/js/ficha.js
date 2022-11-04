"use strict";

class Ficha  {
    
    constructor(x,y,jugador){
        this.posx= x;
        this.posy= y;
        this.startx= x;
        this.starty= y;
        this.jugador= jugador;
        this.seleccionada= false;
        this.diametro=45;
        this.enTablero=false;
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

    draw(ctx){
        let img= this.jugador.img
        let x = this.posx;
        let y = this.posy;
        ctx.drawImage(img, x, y, this.diametro, this.diametro);
    }


    verificarSelect(x,y){
        if(!this.seleccionada && (x>this.x && x< this.x+this.diametro && y> this.y && y<this.y + this.diametro)){
            this.seleccionada = true;
        }    
    }

    moverPos(x,y){
        if(this.seleccionada && !this.enTablero){
            this.posx= x-this.diametro/2;
            this.posy= y-this.diametro/2;
        }
    }
}