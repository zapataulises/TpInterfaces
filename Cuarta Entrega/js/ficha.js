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


    select(xM,yM){
        if(!this.seleccionada && xM>this.posx && xM< this.posx+this.diametro && yM> this.posy && yM<this.posy + this.diametro){
            this.seleccionada = true;
        }    
    }

    moverPos(x,y){
        if(this.seleccionada && !this.enTablero){
            this.posx= x-(22);
            this.posy= y-this.diametro/2;
        }
    }
}