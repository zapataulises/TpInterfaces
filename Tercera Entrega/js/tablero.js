"use strict"

class Tablero{
   constructor(canvas, ctx, casilleros, modo){
    this.canvas = canvas;
    this.ctx = ctx;
    this.casilleros = casilleros;
    this.modo= modo;
   }
   
   crearTablero(){
    let img= new Image();
    img.src="./img/4casillero.png"
    let xInicial;
    let yInicial;
    switch(this.modo){
        case 4:
            xInicial = 425;
            yInicial = 120;
        break;
        case 5:
            xInicial = 400;
            yInicial = 120;
        break;
        case 6:  
            xInicial = 375;
            yInicial = 120;
        break;
        case 7:
            xInicial = 350;
            yInicial = 120;
        break;
    }
    for (let i = this.modo+1; i >= 0; i--) {
        this.casilleros[i] = [];
       for(let j= this.modo+2; j>=0; j--){
            let y =yInicial + i*50;
            let x =xInicial +j*50;
            this.casilleros[i][j]=new Casillero(x, y,img, ctx);
        }
    }
    }
   
    draw() {
        for (let i = this.modo+1; i >= 0; i--) {
           for(let j= this.modo+2; j>=0; j--){
                    this.casilleros[i][j].draw()
            }
                
        }
    }

    

}



