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
                    break
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
            f.posx, f.startx=element[i].x+2;
            f.posy, f.starty=element[i].y+2;
            element[i].ocupado=true;
            element[i].setJugadorOcupa(f.jugador);
            this.victoryRoyale(i, j);
            turnoSiguiente();
            break
        }
        else{
            f.enTablero=false
        }
    }

}

victoryRoyale(i, j){
    if(this.recorrerTablero(i, j)){
        console.log("El " + turnoDe.nombre + " ha ganado");
        ganador = turnoDe.nombre;
        timer = 0;
       setTimeout(anunciarGanador(), 2000);
    }

}

recorrerTablero(i, j){  
    let fila = casilleros[j];

    //Horizzontal y vertical
    let posibleLinea = 1;
    let posibleCol = 1;
    let sentidoDer = i+1;
    let sentidoAbajo = j+1;
    let sentidoIzq = i-1;
    
    //Fila a izq
    while(posibleLinea<this.modo+1 && sentidoIzq>=0 && fila[sentidoIzq].jugadorOcupa){
        if(fila[sentidoIzq].jugadorOcupa.nombre == turnoDe.nombre){
            console.log("MismoIzq");
            posibleLinea++;
            sentidoIzq--;
        }
        else{
            break;
        }
    }
    //Fila a der
    while(posibleLinea<this.modo+1 && sentidoDer<=this.modo+2 && fila[sentidoDer].jugadorOcupa){
        if(fila[sentidoDer].jugadorOcupa.nombre == turnoDe.nombre){
            console.log("MismoDer");
            posibleLinea++;
            sentidoDer++;
        }
        else{
            break;
        }
    }
    //Columna Abajo
   while(posibleCol<this.modo+1 && sentidoAbajo<this.casilleros.length && casilleros[sentidoAbajo][i].jugadorOcupa){
        if(casilleros[sentidoAbajo][i].jugadorOcupa.nombre == turnoDe.nombre){
            console.log("MismoAbajo");
            posibleCol++;
            sentidoAbajo++;
        }
        else{
            break;
        }
    }

    //Diagonales
    //Diagonal A
    let posibleDiagA=1;
    //A Arriba Derecha
    let sentidoDAArriba=j-1;
    let sentidoDADerecha=i+1;
    while(posibleDiagA<this.modo+1 && sentidoDAArriba>=0 && sentidoDADerecha<=this.modo+2 && casilleros[sentidoDAArriba][sentidoDADerecha].jugadorOcupa){
        if(casilleros[sentidoDAArriba][sentidoDADerecha].jugadorOcupa.nombre == turnoDe.nombre){
            console.log("Igual ArribaDer");
            posibleDiagA++;
            sentidoDAArriba--;
            sentidoDADerecha++;
        }
        else{
            break;
        }
    }
    //A Abajo Izquierda
    let sentidoDAAbajo=j+1;
    let sentidoDAIzquierda=i-1;
    while(posibleDiagA<this.modo+1 && sentidoDAAbajo<this.casilleros.length && sentidoDAIzquierda>=0 && casilleros[sentidoDAAbajo][sentidoDAIzquierda].jugadorOcupa){
        if(casilleros[sentidoDAAbajo][sentidoDAIzquierda].jugadorOcupa.nombre == turnoDe.nombre){
            console.log("Igual AbajoIzquierda");
            posibleDiagA++;
            sentidoDAAbajo++;
            sentidoDAIzquierda--;
        }
        else{
            break;
        }
    }

    //Diagonal B
    let posibleDiagB=1;
    //B Arriba Izquierda
    let sentidoDBArriba=j-1;
    let sentidoDBIzquierda=i-1;
    while(posibleDiagB<this.modo+1 && sentidoDBArriba>=0 && sentidoDBIzquierda>=0 && casilleros[sentidoDBArriba][sentidoDBIzquierda].jugadorOcupa){
        if(casilleros[sentidoDBArriba][sentidoDBIzquierda].jugadorOcupa.nombre == turnoDe.nombre){
            console.log("Igual ArribaIzq");
            posibleDiagB++;
            sentidoDBArriba--;
            sentidoDBIzquierda--;
        }
        else{
            break;
        }
    }
    //B Abajo Derecha
    let sentidoDBAbajo=j+1;
    let sentidoDBDerecha=i+1;
    while(posibleDiagA<this.modo+1 && sentidoDBAbajo<this.casilleros.length && sentidoDBDerecha<=this.modo+2 && casilleros[sentidoDBAbajo][sentidoDBDerecha].jugadorOcupa){
        if(casilleros[sentidoDBAbajo][sentidoDBDerecha].jugadorOcupa.nombre == turnoDe.nombre){
            console.log("Igual AbajoDerecha");
            posibleDiagB++;
            sentidoDBAbajo++;
            sentidoDBDerecha++;
        }
        else{
            break;
        }
    }
    if(posibleLinea == this.modo||posibleCol==this.modo||posibleDiagA==this.modo||posibleDiagB==this.modo){
        console.log("ganador")
        return true;
    }
    else{
        return false;
    }

}



}