"use strict"

class Casillero{
    constructor(x, y,img, ctx){
        this.x=x;
        this.y=y;
        this.ctx=ctx;
        this.widht=45;
        this.height=45;
        this.ocupado=false;
        this.jugadorOcupa;
        this.img= img;
        
    }

    draw(carga){
        let ctx=this.ctx;
        let x=this.x;
        let y=this.y;
        let img=this.img;

        
            this.img.onload = function (){
                ctx.drawImage(img,x,y,50,50);
            }
            
        
    }

}