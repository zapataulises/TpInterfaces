"use strict"

class Casillero{
    constructor(x, y,img, ctx){
        this.x=x;
        this.y=y;
        this.ctx=ctx;
        this.ocupado=false;
        this.img= img;
        
    }
    setJugadorOcupa(jugador){
        let jugadorOcupa;
        this.jugadorOcupa=jugador;
    }
    draw(carga){
        let ctx=this.ctx;
        let x=this.x;
        let y=this.y;
        let img=this.img;

        if (carga) {
            this.img.onload = function (){
                ctx.drawImage(img,x,y,50,50);
            }
        }else{
            ctx.drawImage(img,x,y,50,50);
        }
            
            
        
    }

}