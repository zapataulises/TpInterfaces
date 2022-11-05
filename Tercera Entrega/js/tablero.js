"use strict"

class Tablero{
   constructor(canvas, ctx, casilleros, modo){
    this.canvas = canvas;
    this.ctx = ctx;
    this.casilleros = casilleros;
    this.modo= modo;
   }
   
   crearTablero(){
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
    for (let i = this.modo+2; i >= 0; i--) {
        this.casilleros[i] = [];
       for(let j= this.modo+2; j>=0; j--){
        let img= new Image();
    img.src="./img/4casillero.png"
            let y =yInicial + (i-1)*50;
            let x =xInicial + j*50;
            this.casilleros[i][j]=new Casillero(x, y,img, ctx);
        }
    }
    }
   
    draw(carga) {
        //La fila 0 no se dibuja para usarla de tirada
        for (let i = this.modo+2; i > 0; i--) {
           for(let j= this.modo+2; j>=0; j--){
                    this.casilleros[i][j].draw(carga)
            }
                
        }
    }

    colocar(f){
        if (!f.enTablero && f.seleccionada) {
            f.seleccionada=false;
            let fila=this.casilleros[0];
            for (let index = 0; index < fila.length; index++) {
                let element = fila[index];
                if (f.posx+22>element.x && element.x+40>f.posx+22 && f.posy+22>element.y && element.y+40>f.posy+22) {
                    f.enTablero=true;
                    this.encasillar(f, index);
                    break;
                }
                
            }
            f.posx=f.startx;
            f.posy=f.starty;
        }
    }
    
encasillar(f, i){
    for (let j =this.casilleros.length-1 ; j >=0 ; j--) {
        const element = this.casilleros[j];
        if (element[i].ocupado==false) {
            f.posx=element[i].x+2;
            f.posy=element[i].y+2;
            element[i].ocupado=true;
            element[i].jugadorOcupa=f.jugador;
            this.victoria(i, j);
            turnoSiguiente();
            break;
        }
        else{
            f.enTablero=false
        }
    }

}

victoria(i, j){

}


}