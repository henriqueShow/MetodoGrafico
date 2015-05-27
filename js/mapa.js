function posX() {

    return 550;
}
function posY() {
    return 310;
}   

function reretornJson(vPtsInst,PtOtimo,qtd) {
    var data = null;
// dados de "a" a "o"
    //"o" - ponto viavel
//    alert("ENTREI DADOS: "+qtd);
    if(qtd == 10){
    var data = [
        {
            "ax": vPtsInst[0][0]['x'],
            "ay": vPtsInst[0][0]['y'],
            "bx": vPtsInst[1][0]['x'],
            "by": vPtsInst[1][0]['y'],
            "cx": vPtsInst[2][0]['x'],
            "cy": vPtsInst[2][0]['y'],
            "dx": vPtsInst[3][0]['x'],
            "dy": vPtsInst[3][0]['y'],
            "ex": vPtsInst[4][0]['x'],
            "ey": vPtsInst[4][0]['y'],
            "fx": vPtsInst[5][0]['x'],
            "fy": vPtsInst[5][0]['y'],
            "gx": vPtsInst[6][0]['x'],
            "gy": vPtsInst[6][0]['y'],
            "hx": vPtsInst[7][0]['x'],
            "hy": vPtsInst[7][0]['y'],
            "ix": vPtsInst[8][0]['x'],
            "iy": vPtsInst[8][0]['y'],
            "jx": vPtsInst[9][0]['x'],
            "jy": vPtsInst[9][0]['y'],
            "kx": vPtsInst[10][0]['x'],
            "ky": vPtsInst[10][0]['y'],
            "lx": vPtsInst[11][0]['x'],
            "ly": vPtsInst[11][0]['y'],
            "mx": vPtsInst[12][0]['x'],
            "my": vPtsInst[12][0]['y'],
            "nx": vPtsInst[13][0]['x'],
            "ny": vPtsInst[13][0]['y'],
            "ox": PtOtimo['x'],
            "oy":  PtOtimo['y']
//            
        },
        {
            "ax": vPtsInst[0][1]['x'],
            "ay": vPtsInst[0][1]['y'],
            "bx": vPtsInst[1][1]['x'],
            "by": vPtsInst[1][1]['y'],
            "cx": vPtsInst[2][1]['x'],
            "cy": vPtsInst[2][1]['y'],
            "dx": vPtsInst[3][1]['x'],
            "dy": vPtsInst[3][1]['y'],
            "ex": vPtsInst[4][1]['x'],
            "ey": vPtsInst[4][1]['y'],
            "fx": vPtsInst[5][1]['x'],
            "fy": vPtsInst[5][1]['y'],
            "gx": vPtsInst[6][1]['x'],
            "gy": vPtsInst[6][1]['y'],
            "hx": vPtsInst[7][1]['x'],
            "hy": vPtsInst[7][1]['y'],
            "ix": vPtsInst[8][1]['x'],
            "iy": vPtsInst[8][1]['y'],
            "jx": vPtsInst[9][1]['x'],
            "jy": vPtsInst[9][1]['y'],
            "kx": vPtsInst[10][1]['x'],
            "ky": vPtsInst[10][1]['y'],
            "lx": vPtsInst[11][1]['x'],
            "ly": vPtsInst[11][1]['y'],
            "mx": vPtsInst[12][1]['x'],
            "my": vPtsInst[12][1]['y'],
            "nx": vPtsInst[13][1]['x'],
            "ny": vPtsInst[13][1]['y'],
            "ox": PtOtimo['x'],
            "oy": PtOtimo['y']
            
        }];
    }
    else if(qtd == 9){
    var data = [
        {
            "ax": vPtsInst[0][0]['x'],
            "ay": vPtsInst[0][0]['y'],
            "bx": vPtsInst[1][0]['x'],
            "by": vPtsInst[1][0]['y'],
            "cx": vPtsInst[2][0]['x'],
            "cy": vPtsInst[2][0]['y'],
            "dx": vPtsInst[3][0]['x'],
            "dy": vPtsInst[3][0]['y'],
            "ex": vPtsInst[4][0]['x'],
            "ey": vPtsInst[4][0]['y'],
            "fx": vPtsInst[5][0]['x'],
            "fy": vPtsInst[5][0]['y'],
            "gx": vPtsInst[6][0]['x'],
            "gy": vPtsInst[6][0]['y'],
            "hx": vPtsInst[7][0]['x'],
            "hy": vPtsInst[7][0]['y'],
            "ix": vPtsInst[8][0]['x'],
            "iy": vPtsInst[8][0]['y'],
            "kx": vPtsInst[9][0]['x'],
            "ky": vPtsInst[9][0]['y'],
            "lx": vPtsInst[10][0]['x'],
            "ly": vPtsInst[10][0]['y'],
            "mx": vPtsInst[11][0]['x'],
            "my": vPtsInst[11][0]['y'],
            "nx": vPtsInst[12][0]['x'],
            "ny": vPtsInst[12][0]['y'],
            "ox": PtOtimo['x'],
            "oy":  PtOtimo['y']
//            
        },
        {
            "ax": vPtsInst[0][1]['x'],
            "ay": vPtsInst[0][1]['y'],
            "bx": vPtsInst[1][1]['x'],
            "by": vPtsInst[1][1]['y'],
            "cx": vPtsInst[2][1]['x'],
            "cy": vPtsInst[2][1]['y'],
            "dx": vPtsInst[3][1]['x'],
            "dy": vPtsInst[3][1]['y'],
            "ex": vPtsInst[4][1]['x'],
            "ey": vPtsInst[4][1]['y'],
            "fx": vPtsInst[5][1]['x'],
            "fy": vPtsInst[5][1]['y'],
            "gx": vPtsInst[6][1]['x'],
            "gy": vPtsInst[6][1]['y'],
            "hx": vPtsInst[7][1]['x'],
            "hy": vPtsInst[7][1]['y'],
            "ix": vPtsInst[8][1]['x'],
            "iy": vPtsInst[8][1]['y'],
            "kx": vPtsInst[9][1]['x'],
            "ky": vPtsInst[9][1]['y'],
            "lx": vPtsInst[10][1]['x'],
            "ly": vPtsInst[10][1]['y'],
            "mx": vPtsInst[11][1]['x'],
            "my": vPtsInst[11][1]['y'],
            "nx": vPtsInst[12][1]['x'],
            "ny": vPtsInst[12][1]['y'],
            "ox": PtOtimo['x'],
            "oy": PtOtimo['y']
            
        }];
    }
    else if(qtd == 8){
    var data = [
        {
            "ax": vPtsInst[0][0]['x'],
            "ay": vPtsInst[0][0]['y'],
            "bx": vPtsInst[1][0]['x'],
            "by": vPtsInst[1][0]['y'],
            "cx": vPtsInst[2][0]['x'],
            "cy": vPtsInst[2][0]['y'],
            "dx": vPtsInst[3][0]['x'],
            "dy": vPtsInst[3][0]['y'],
            "ex": vPtsInst[4][0]['x'],
            "ey": vPtsInst[4][0]['y'],
            "fx": vPtsInst[5][0]['x'],
            "fy": vPtsInst[5][0]['y'],
            "gx": vPtsInst[6][0]['x'],
            "gy": vPtsInst[6][0]['y'],
            "hx": vPtsInst[7][0]['x'],
            "hy": vPtsInst[7][0]['y'],
            "kx": vPtsInst[8][0]['x'],
            "ky": vPtsInst[8][0]['y'],
            "lx": vPtsInst[9][0]['x'],
            "ly": vPtsInst[9][0]['y'],
            "mx": vPtsInst[10][0]['x'],
            "my": vPtsInst[10][0]['y'],
            "nx": vPtsInst[11][0]['x'],
            "ny": vPtsInst[11][0]['y'],
            "ox": PtOtimo['x'],
            "oy":  PtOtimo['y']
//            
        },
        {
            "ax": vPtsInst[0][1]['x'],
            "ay": vPtsInst[0][1]['y'],
            "bx": vPtsInst[1][1]['x'],
            "by": vPtsInst[1][1]['y'],
            "cx": vPtsInst[2][1]['x'],
            "cy": vPtsInst[2][1]['y'],
            "dx": vPtsInst[3][1]['x'],
            "dy": vPtsInst[3][1]['y'],
            "ex": vPtsInst[4][1]['x'],
            "ey": vPtsInst[4][1]['y'],
            "fx": vPtsInst[5][1]['x'],
            "fy": vPtsInst[5][1]['y'],
            "gx": vPtsInst[6][1]['x'],
            "gy": vPtsInst[6][1]['y'],
            "hx": vPtsInst[7][1]['x'],
            "hy": vPtsInst[7][1]['y'],
            "kx": vPtsInst[8][1]['x'],
            "ky": vPtsInst[8][1]['y'],
            "lx": vPtsInst[9][1]['x'],
            "ly": vPtsInst[9][1]['y'],
            "mx": vPtsInst[10][1]['x'],
            "my": vPtsInst[10][1]['y'],
            "nx": vPtsInst[11][1]['x'],
            "ny": vPtsInst[11][1]['y'],
            "ox": PtOtimo['x'],
            "oy": PtOtimo['y']
            
        }];
    }
    else if(qtd == 7){
    var data = [
        {
            "ax": vPtsInst[0][0]['x'],
            "ay": vPtsInst[0][0]['y'],
            "bx": vPtsInst[1][0]['x'],
            "by": vPtsInst[1][0]['y'],
            "cx": vPtsInst[2][0]['x'],
            "cy": vPtsInst[2][0]['y'],
            "dx": vPtsInst[3][0]['x'],
            "dy": vPtsInst[3][0]['y'],
            "ex": vPtsInst[4][0]['x'],
            "ey": vPtsInst[4][0]['y'],
            "fx": vPtsInst[5][0]['x'],
            "fy": vPtsInst[5][0]['y'],
            "gx": vPtsInst[6][0]['x'],
            "gy": vPtsInst[6][0]['y'],
            "kx": vPtsInst[7][0]['x'],
            "ky": vPtsInst[7][0]['y'],
            "lx": vPtsInst[8][0]['x'],
            "ly": vPtsInst[8][0]['y'],
            "mx": vPtsInst[9][0]['x'],
            "my": vPtsInst[9][0]['y'],
            "nx": vPtsInst[10][0]['x'],
            "ny": vPtsInst[10][0]['y'],
            "ox": PtOtimo['x'],
            "oy":  PtOtimo['y']
//            
        },
        {
            "ax": vPtsInst[0][1]['x'],
            "ay": vPtsInst[0][1]['y'],
            "bx": vPtsInst[1][1]['x'],
            "by": vPtsInst[1][1]['y'],
            "cx": vPtsInst[2][1]['x'],
            "cy": vPtsInst[2][1]['y'],
            "dx": vPtsInst[3][1]['x'],
            "dy": vPtsInst[3][1]['y'],
            "ex": vPtsInst[4][1]['x'],
            "ey": vPtsInst[4][1]['y'],
            "fx": vPtsInst[5][1]['x'],
            "fy": vPtsInst[5][1]['y'],
            "gx": vPtsInst[6][1]['x'],
            "gy": vPtsInst[6][1]['y'],
            "kx": vPtsInst[7][1]['x'],
            "ky": vPtsInst[7][1]['y'],
            "lx": vPtsInst[8][1]['x'],
            "ly": vPtsInst[8][1]['y'],
            "mx": vPtsInst[9][1]['x'],
            "my": vPtsInst[9][1]['y'],
            "nx": vPtsInst[10][1]['x'],
            "ny": vPtsInst[10][1]['y'],
            "ox": PtOtimo['x'],
            "oy": PtOtimo['y']
            
        }];
    }
    else if(qtd == 6){
    var data = [
        {
            "ax": vPtsInst[0][0]['x'],
            "ay": vPtsInst[0][0]['y'],
            "bx": vPtsInst[1][0]['x'],
            "by": vPtsInst[1][0]['y'],
            "cx": vPtsInst[2][0]['x'],
            "cy": vPtsInst[2][0]['y'],
            "dx": vPtsInst[3][0]['x'],
            "dy": vPtsInst[3][0]['y'],
            "ex": vPtsInst[4][0]['x'],
            "ey": vPtsInst[4][0]['y'],
            "fx": vPtsInst[5][0]['x'],
            "fy": vPtsInst[5][0]['y'],
            "kx": vPtsInst[6][0]['x'],
            "ky": vPtsInst[6][0]['y'],
            "lx": vPtsInst[7][0]['x'],
            "ly": vPtsInst[7][0]['y'],
            "mx": vPtsInst[8][0]['x'],
            "my": vPtsInst[8][0]['y'],
            "nx": vPtsInst[9][0]['x'],
            "ny": vPtsInst[9][0]['y'],
            "ox": PtOtimo['x'],
            "oy":  PtOtimo['y']
//            
        },
        {
            "ax": vPtsInst[0][1]['x'],
            "ay": vPtsInst[0][1]['y'],
            "bx": vPtsInst[1][1]['x'],
            "by": vPtsInst[1][1]['y'],
            "cx": vPtsInst[2][1]['x'],
            "cy": vPtsInst[2][1]['y'],
            "dx": vPtsInst[3][1]['x'],
            "dy": vPtsInst[3][1]['y'],
            "ex": vPtsInst[4][1]['x'],
            "ey": vPtsInst[4][1]['y'],
            "fx": vPtsInst[5][1]['x'],
            "fy": vPtsInst[5][1]['y'],
            "kx": vPtsInst[6][1]['x'],
            "ky": vPtsInst[6][1]['y'],
            "lx": vPtsInst[7][1]['x'],
            "ly": vPtsInst[7][1]['y'],
            "mx": vPtsInst[8][1]['x'],
            "my": vPtsInst[8][1]['y'],
            "nx": vPtsInst[9][1]['x'],
            "ny": vPtsInst[9][1]['y'],
            "ox": PtOtimo['x'],
            "oy": PtOtimo['y']
            
        }];
    }
    else if(qtd == 5){
    var data = [
        {
            "ax": vPtsInst[0][0]['x'],
            "ay": vPtsInst[0][0]['y'],
            "bx": vPtsInst[1][0]['x'],
            "by": vPtsInst[1][0]['y'],
            "cx": vPtsInst[2][0]['x'],
            "cy": vPtsInst[2][0]['y'],
            "dx": vPtsInst[3][0]['x'],
            "dy": vPtsInst[3][0]['y'],
            "ex": vPtsInst[4][0]['x'],
            "ey": vPtsInst[4][0]['y'],
            "kx": vPtsInst[5][0]['x'],
            "ky": vPtsInst[5][0]['y'],
            "lx": vPtsInst[6][0]['x'],
            "ly": vPtsInst[6][0]['y'],
            "mx": vPtsInst[7][0]['x'],
            "my": vPtsInst[7][0]['y'],
            "nx": vPtsInst[8][0]['x'],
            "ny": vPtsInst[8][0]['y'],
            "ox": PtOtimo['x'],
            "oy":  PtOtimo['y']
//            
        },
        {
            "ax": vPtsInst[0][1]['x'],
            "ay": vPtsInst[0][1]['y'],
            "bx": vPtsInst[1][1]['x'],
            "by": vPtsInst[1][1]['y'],
            "cx": vPtsInst[2][1]['x'],
            "cy": vPtsInst[2][1]['y'],
            "dx": vPtsInst[3][1]['x'],
            "dy": vPtsInst[3][1]['y'],
            "ex": vPtsInst[4][1]['x'],
            "ey": vPtsInst[4][1]['y'],
            "kx": vPtsInst[5][1]['x'],
            "ky": vPtsInst[5][1]['y'],
            "lx": vPtsInst[6][1]['x'],
            "ly": vPtsInst[6][1]['y'],
            "mx": vPtsInst[7][1]['x'],
            "my": vPtsInst[7][1]['y'],
            "nx": vPtsInst[8][1]['x'],
            "ny": vPtsInst[8][1]['y'],
            "ox": PtOtimo['x'],
            "oy": PtOtimo['y']
            
        }];
    }
    else if(qtd == 4){
    var data = [
        {
            "ax": vPtsInst[0][0]['x'],
            "ay": vPtsInst[0][0]['y'],
            "bx": vPtsInst[1][0]['x'],
            "by": vPtsInst[1][0]['y'],
            "cx": vPtsInst[2][0]['x'],
            "cy": vPtsInst[2][0]['y'],
            "dx": vPtsInst[3][0]['x'],
            "dy": vPtsInst[3][0]['y'],
            "kx": vPtsInst[4][0]['x'],
            "ky": vPtsInst[4][0]['y'],
            "lx": vPtsInst[5][0]['x'],
            "ly": vPtsInst[5][0]['y'],
            "mx": vPtsInst[6][0]['x'],
            "my": vPtsInst[6][0]['y'],
            "nx": vPtsInst[7][0]['x'],
            "ny": vPtsInst[7][0]['y'],
            "ox": PtOtimo['x'],
            "oy":  PtOtimo['y']
//            
        },
        {
            "ax": vPtsInst[0][1]['x'],
            "ay": vPtsInst[0][1]['y'],
            "bx": vPtsInst[1][1]['x'],
            "by": vPtsInst[1][1]['y'],
            "cx": vPtsInst[2][1]['x'],
            "cy": vPtsInst[2][1]['y'],
            "dx": vPtsInst[3][1]['x'],
            "dy": vPtsInst[3][1]['y'],
            "kx": vPtsInst[4][1]['x'],
            "ky": vPtsInst[4][1]['y'],
            "lx": vPtsInst[5][1]['x'],
            "ly": vPtsInst[5][1]['y'],
            "mx": vPtsInst[6][1]['x'],
            "my": vPtsInst[6][1]['y'],
            "nx": vPtsInst[7][1]['x'],
            "ny": vPtsInst[7][1]['y'],
            "ox": PtOtimo['x'],
            "oy": PtOtimo['y']
            
        }];
    }
    else if(qtd == 3){
//        alert('entrei');
    var data = [
        {
            "ax": vPtsInst[0][0]['x'],
            "ay": vPtsInst[0][0]['y'],
            "bx": vPtsInst[1][0]['x'],
            "by": vPtsInst[1][0]['y'],
            "cx": vPtsInst[2][0]['x'],
            "cy": vPtsInst[2][0]['y'],
//            "kx": vPtsInst[3][0]['x'],
//            "ky": vPtsInst[3][0]['y'],
//            "lx": vPtsInst[4][0]['x'],
//            "ly": vPtsInst[4][0]['y'],
//            "mx": vPtsInst[5][0]['x'],
//            "my": vPtsInst[5][0]['y'],
//            "nx": vPtsInst[6][0]['x'],
//            "ny": vPtsInst[6][0]['y'],
            "ox": PtOtimo['x'],
            "oy": PtOtimo['y']
//            
        },
        {
            "ax": vPtsInst[0][1]['x'],
            "ay": vPtsInst[0][1]['y'],
            "bx": vPtsInst[1][1]['x'],
            "by": vPtsInst[1][1]['y'],
            "cx": vPtsInst[2][1]['x'],
            "cy": vPtsInst[2][1]['y'],
//            "kx": vPtsInst[3][1]['x'],
//            "ky": vPtsInst[3][1]['y'],
//            "lx": vPtsInst[4][1]['x'],
//            "ly": vPtsInst[4][1]['y'],
//            "mx": vPtsInst[5][1]['x'],
//            "my": vPtsInst[5][1]['y'],
//            "nx": vPtsInst[6][1]['x'],
//            "ny": vPtsInst[6][1]['y'],
            "ox": PtOtimo['x'],
            "oy": PtOtimo['y']
            
        }];
    }
    else if(qtd == 2){
    var data = [
        {
            "ax": vPtsInst[0][0]['x'],
            "ay": vPtsInst[0][0]['y'],
            "bx": vPtsInst[1][0]['x'],
            "by": vPtsInst[1][0]['y'],
            "kx": vPtsInst[2][0]['x'],
            "ky": vPtsInst[2][0]['y'],
            "lx": vPtsInst[3][0]['x'],
            "ly": vPtsInst[3][0]['y'],
            "mx": vPtsInst[4][0]['x'],
            "my": vPtsInst[4][0]['y'],
            "nx": vPtsInst[5][0]['x'],
            "ny": vPtsInst[5][0]['y'],
            "ox": PtOtimo['x'],
            "oy":  PtOtimo['y']
//            
        },
        {
            "ax": vPtsInst[0][1]['x'],
            "ay": vPtsInst[0][1]['y'],
            "bx": vPtsInst[1][1]['x'],
            "by": vPtsInst[1][1]['y'],
            "kx": vPtsInst[2][1]['x'],
            "ky": vPtsInst[2][1]['y'],
            "lx": vPtsInst[3][1]['x'],
            "ly": vPtsInst[3][1]['y'],
            "mx": vPtsInst[4][1]['x'],
            "my": vPtsInst[4][1]['y'],
            "nx": vPtsInst[5][1]['x'],
            "ny": vPtsInst[5][1]['y'],
            "ox": PtOtimo['x'],
            "oy": PtOtimo['y']
            
        }];
    }
    else if(qtd == 1){
    var data = [
        {
            "ax": vPtsInst[0][0]['x'],
            "ay": vPtsInst[0][0]['y'],
            "kx": vPtsInst[1][0]['x'],
            "ky": vPtsInst[1][0]['y'],
            "lx": vPtsInst[2][0]['x'],
            "ly": vPtsInst[2][0]['y'],
            "mx": vPtsInst[3][0]['x'],
            "my": vPtsInst[3][0]['y'],
            "nx": vPtsInst[4][0]['x'],
            "ny": vPtsInst[4][0]['y'],
            "ox": PtOtimo['x'],
            "oy":  PtOtimo['y']
//            
        },
        {
            "ax": vPtsInst[0][1]['x'],
            "ay": vPtsInst[0][1]['y'],
            "kx": vPtsInst[1][1]['x'],
            "ky": vPtsInst[1][1]['y'],
            "lx": vPtsInst[2][1]['x'],
            "ly": vPtsInst[2][1]['y'],
            "mx": vPtsInst[3][1]['x'],
            "my": vPtsInst[3][1]['y'],
            "nx": vPtsInst[4][1]['x'],
            "ny": vPtsInst[4][1]['y'],
            "ox": PtOtimo['x'],
            "oy": PtOtimo['y']
            
        }];
    }
    return data;
}
function graficos(vetor,qtd,Vcond,obj) {
    var desenhar = new Array();
    //('')
    for (i = 0; i < qtd; i++) {
        if (Vcond[i] === "<=") {
            if ((vetor[i][0]['x'] == vetor[i][1]['x']) && (vetor[i][0]['y'] != vetor[i][1]['y'])){
                desenhar.push("y");
            }
            else if((vetor[i][0]['x'] != vetor[i][1]['x']) && (vetor[i][0]['y'] == vetor[i][1]['y'])){
                desenhar.push("y");
            }
            else if((vetor[i][0]['x'] < vetor[i][1]['x']) && (vetor[i][0]['y'] > vetor[i][1]['y'])){
                desenhar.push("y");
            }
            else if((vetor[i][0]['x'] > vetor[i][1]['x']) && (vetor[i][0]['y'] > vetor[i][1]['y'])){
                desenhar.push("x");
            }
        }
        else if (Vcond[i] === ">=") {
            if ((vetor[i][0]['x'] == vetor[i][1]['x']) && (vetor[i][0]['y'] != vetor[i][1]['y'])){
                desenhar.push("w");
            }
            else if((vetor[i][0]['x'] != vetor[i][1]['x']) && (vetor[i][0]['y'] == vetor[i][1]['y'])){
                desenhar.push("z");
            }
            else if((vetor[i][0]['x'] < vetor[i][1]['x']) && (vetor[i][0]['y'] > vetor[i][1]['y'])){
                desenhar.push("w");
            }
            else if((vetor[i][0]['x'] > vetor[i][1]['x']) && (vetor[i][0]['y'] > vetor[i][1]['y'])){
                desenhar.push("y");
            }
        }
        else if(Vcond[i] === "="){
            if ((vetor[i][0]['x'] == vetor[i][1]['x']) && (vetor[i][0]['y'] != vetor[i][1]['y'])){
                desenhar.push("");//desenha nada
            }
            else if((vetor[i][0]['x'] != vetor[i][1]['x']) && (vetor[i][0]['y'] == vetor[i][1]['y'])){
                desenhar.push("");//desenha nada
            }
            else if((vetor[i][0]['x'] < vetor[i][1]['x']) && (vetor[i][0]['y'] > vetor[i][1]['y'])){
                desenhar.push("");
            }
            else if((vetor[i][0]['x'] > vetor[i][1]['x']) && (vetor[i][0]['y'] > vetor[i][1]['y'])){
                desenhar.push("");
            }
        }
    }
 //alert("qtd: "+desenhar.length);
 if(qtd==10){
    abc = [{
            "balloonText": "x:[[x]] y:[[y]]",
//                        "fillAlphas": 0.1,
            "lineAlpha": 10,
            "xField": "ax",
            "yField": "ay",
            "fillToAxis": desenhar[0],
            "fillAlphas": 0.1,
            "lineColor": "#FF6600",
            "bullet": "circle",
            "title": "retr-1",
            "valueField": "column-2",
            "plotAreaFillAlphas": 20,
            "plotAreaGradientAngle": 20,
            "plotAreaFillColors": "#FCD202",
            "plotAreaBorderAlpha": 1

        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "lineAlpha": 10,
            "fillToAxis": desenhar[1],
            "fillAlphas": 0.1,
            "xField": "bx",
            "yField": "by",
            "lineColor": "#FCD202",
            "bullet": "circle",
            "title": "retr-2",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.1,
            "fillToAxis": desenhar[2],
            "lineAlpha": 1,
            "xField": "cx",
            "yField": "cy",
            "lineColor": "#abc",
            "bullet": "circle",
            "title": "retr-3",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[3],
            "lineAlpha": 1,
            "xField": "dx",
            "yField": "dy",
            "lineColor": "#00fb2f",
            "bullet": "circle",
            "title": "retr-4",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[4],
            "lineAlpha": 1,
            "xField": "ex",
            "yField": "ey",
            "lineColor": "#392205",
            "bullet": "circle",
            "title": "retr-5",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[5],
            "lineAlpha": 1,
            "xField": "fx",
            "yField": "fy",
            "lineColor": "#00fbf2",
            "bullet": "circle",
            "title": "retr-6",
            "valueField": "column-2"

        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[6],
            "lineAlpha": 1,
            "xField": "gx",
            "yField": "gy",
            "lineColor": "#fb00e0",
            "bullet": "circle",
            "title": "retr-7",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[7],
            "lineAlpha": 1,
            "xField": "hx",
            "yField": "hy",
            "lineColor": "#fb00e0",
            "bullet": "circle",
            "title": "retr-8",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[8],
            "lineAlpha": 1,
            "xField": "ix",
            "yField": "iy",
            "lineColor": "#fb00e0",
            "bullet": "circle",
            "title": "retr-9",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[9],
            "lineAlpha": 1,
            "xField": "jx",
            "yField": "jy",
            "lineColor": "#fb00e0",
            "bullet": "circle",
            "title": "retr-10",
            "valueField": "column-2"
        },
//        {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 1,
//            "xField": "kx",
//            "yField": "ky",
//            "lineColor": "#000cfb",
//            "bullet": "circle",
//            "title": "LIx",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "lx",
//            "yField": "ly",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LSx",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 1,
//            "xField": "mx",
//            "yField": "my",
//            "lineColor": "#9a09f6",
//            "bullet": "circle",
//            "title": "LIy",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 5,
//            "xField": "nx",
//            "yField": "ny",
//            "lineColor": "#000000",
//            "bullet": "circle",
//            "title": "LSy",
//            "valueField": "column-2"
//        }, {
            { "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": "x",
            "lineAlpha": 1,
            "xField": "ox",
            "yField": "oy",
            "lineColor": "#fb00e0",
            "bullet": "triangleUp",
            "title": "PontoÓtimo",
            "valueField": "column-2"
        }

    ];
}
else if(qtd ==9){

    abc =[{
            "balloonText": "x:[[x]] y:[[y]]",
//                        "fillAlphas": 0.1,
            "lineAlpha": 10,
            "xField": "ax",
            "yField": "ay",
            "fillToAxis": desenhar[0],
            "fillAlphas": 0.1,
            "lineColor": "#FF6600",
            "bullet": "circle",
            "title": "retr-1",
            "valueField": "column-2",
            "plotAreaFillAlphas": 20,
            "plotAreaGradientAngle": 20,
            "plotAreaFillColors": "#FCD202",
            "plotAreaBorderAlpha": 1

        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "lineAlpha": 10,
            "fillToAxis": desenhar[1],
            "fillAlphas": 0.1,
            "xField": "bx",
            "yField": "by",
            "lineColor": "#FCD202",
            "bullet": "circle",
            "title": "retr-2",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.1,
            "fillToAxis": desenhar[2],
            "lineAlpha": 1,
            "xField": "cx",
            "yField": "cy",
            "lineColor": "#abc",
            "bullet": "circle",
            "title": "retr-3",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[3],
            "lineAlpha": 1,
            "xField": "dx",
            "yField": "dy",
            "lineColor": "#00fb2f",
            "bullet": "circle",
            "title": "retr-4",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[4],
            "lineAlpha": 1,
            "xField": "ex",
            "yField": "ey",
            "lineColor": "#392205",
            "bullet": "circle",
            "title": "retr-5",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[5],
            "lineAlpha": 1,
            "xField": "fx",
            "yField": "fy",
            "lineColor": "#00fbf2",
            "bullet": "circle",
            "title": "retr-6",
            "valueField": "column-2"

        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[6],
            "lineAlpha": 1,
            "xField": "gx",
            "yField": "gy",
            "lineColor": "#fb00e0",
            "bullet": "circle",
            "title": "retr-7",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[7],
            "lineAlpha": 1,
            "xField": "hx",
            "yField": "hy",
            "lineColor": "#fb00e0",
            "bullet": "circle",
            "title": "retr-8",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[8],
            "lineAlpha": 1,
            "xField": "ix",
            "yField": "iy",
            "lineColor": "#fb00e0",
            "bullet": "circle",
            "title": "retr-9",
            "valueField": "column-2"
        }, 
//        {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "kx",
//            "yField": "ky",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LIx",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "lx",
//            "yField": "ly",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LSx",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 1,
//            "xField": "mx",
//            "yField": "my",
//            "lineColor": "#9a09f6",
//            "bullet": "circle",
//            "title": "LIy",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 5,
//            "xField": "nx",
//            "yField": "ny",
//            "lineColor": "#000000",
//            "bullet": "circle",
//            "title": "LSy",
//            "valueField": "column-2"
//        }, {
        {"balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": "x",
            "lineAlpha": 1,
            "xField": "ox",
            "yField": "oy",
            "lineColor": "#fb00e0",
            "bullet": "triangleUp",
            "title": "PontoÓtimo",
            "valueField": "column-2"
        }

    ];
    }
    else if (qtd == 8){
    abc =[{
            "balloonText": "x:[[x]] y:[[y]]",
//                        "fillAlphas": 0.1,
            "lineAlpha": 10,
            "xField": "ax",
            "yField": "ay",
            "fillToAxis": desenhar[0],
            "fillAlphas": 0.1,
            "lineColor": "#FF6600",
            "bullet": "circle",
            "title": "retr-1",
            "valueField": "column-2",
            "plotAreaFillAlphas": 20,
            "plotAreaGradientAngle": 20,
            "plotAreaFillColors": "#FCD202",
            "plotAreaBorderAlpha": 1

        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "lineAlpha": 10,
            "fillToAxis": desenhar[1],
            "fillAlphas": 0.1,
            "xField": "bx",
            "yField": "by",
            "lineColor": "#FCD202",
            "bullet": "circle",
            "title": "retr-2",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.1,
            "fillToAxis": desenhar[2],
            "lineAlpha": 1,
            "xField": "cx",
            "yField": "cy",
            "lineColor": "#abc",
            "bullet": "circle",
            "title": "retr-3",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[3],
            "lineAlpha": 1,
            "xField": "dx",
            "yField": "dy",
            "lineColor": "#00fb2f",
            "bullet": "circle",
            "title": "retr-4",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[4],
            "lineAlpha": 1,
            "xField": "ex",
            "yField": "ey",
            "lineColor": "#392205",
            "bullet": "circle",
            "title": "retr-5",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[5],
            "lineAlpha": 1,
            "xField": "fx",
            "yField": "fy",
            "lineColor": "#00fbf2",
            "bullet": "circle",
            "title": "retr-6",
            "valueField": "column-2"

        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[6],
            "lineAlpha": 1,
            "xField": "gx",
            "yField": "gy",
            "lineColor": "#fb00e0",
            "bullet": "circle",
            "title": "retr-7",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[7],
            "lineAlpha": 1,
            "xField": "hx",
            "yField": "hy",
            "lineColor": "#fb00e0",
            "bullet": "circle",
            "title": "retr-8",
            "valueField": "column-2"
        },
//        {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "kx",
//            "yField": "ky",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LIx",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "lx",
//            "yField": "ly",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LSx",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 1,
//            "xField": "mx",
//            "yField": "my",
//            "lineColor": "#9a09f6",
//            "bullet": "circle",
//            "title": "LIy",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 5,
//            "xField": "nx",
//            "yField": "ny",
//            "lineColor": "#000000",
//            "bullet": "circle",
//            "title": "LSy",
//            "valueField": "column-2"
//        }, {
       {"balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": "x",
            "lineAlpha": 1,
            "xField": "ox",
            "yField": "oy",
            "lineColor": "#fb00e0",
            "bullet": "triangleUp",
            "title": "PontoÓtimo",
            "valueField": "column-2"
        }

    ];
}
else if(qtd == 7){
    abc =[{
            "balloonText": "x:[[x]] y:[[y]]",
//                        "fillAlphas": 0.1,
            "lineAlpha": 10,
            "xField": "ax",
            "yField": "ay",
            "fillToAxis": desenhar[0],
            "fillAlphas": 0.1,
            "lineColor": "#FF6600",
            "bullet": "circle",
            "title": "retr-1",
            "valueField": "column-2",
            "plotAreaFillAlphas": 20,
            "plotAreaGradientAngle": 20,
            "plotAreaFillColors": "#FCD202",
            "plotAreaBorderAlpha": 1

        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "lineAlpha": 10,
            "fillToAxis": desenhar[1],
            "fillAlphas": 0.1,
            "xField": "bx",
            "yField": "by",
            "lineColor": "#FCD202",
            "bullet": "circle",
            "title": "retr-2",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.1,
            "fillToAxis": desenhar[2],
            "lineAlpha": 1,
            "xField": "cx",
            "yField": "cy",
            "lineColor": "#abc",
            "bullet": "circle",
            "title": "retr-3",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[3],
            "lineAlpha": 1,
            "xField": "dx",
            "yField": "dy",
            "lineColor": "#00fb2f",
            "bullet": "circle",
            "title": "retr-4",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[4],
            "lineAlpha": 1,
            "xField": "ex",
            "yField": "ey",
            "lineColor": "#392205",
            "bullet": "circle",
            "title": "retr-5",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[5],
            "lineAlpha": 1,
            "xField": "fx",
            "yField": "fy",
            "lineColor": "#00fbf2",
            "bullet": "circle",
            "title": "retr-6",
            "valueField": "column-2"

        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[6],
            "lineAlpha": 1,
            "xField": "gx",
            "yField": "gy",
            "lineColor": "#fb00e0",
            "bullet": "circle",
            "title": "retr-7",
            "valueField": "column-2"
        },
//        {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "kx",
//            "yField": "ky",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LIx",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "lx",
//            "yField": "ly",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LSx",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 1,
//            "xField": "mx",
//            "yField": "my",
//            "lineColor": "#9a09f6",
//            "bullet": "circle",
//            "title": "LIy",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 5,
//            "xField": "nx",
//            "yField": "ny",
//            "lineColor": "#000000",
//            "bullet": "circle",
//            "title": "LSy",
//            "valueField": "column-2"
//        }, {
{ "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": "x",
            "lineAlpha": 1,
            "xField": "ox",
            "yField": "oy",
            "lineColor": "#fb00e0",
            "bullet": "triangleUp",
            "title": "PontoÓtimo",
            "valueField": "column-2"
        }

    ];
 }
 else if(qtd == 6){
    abc =[{
            "balloonText": "x:[[x]] y:[[y]]",
//                        "fillAlphas": 0.1,
            "lineAlpha": 10,
            "xField": "ax",
            "yField": "ay",
            "fillToAxis": desenhar[0],
            "fillAlphas": 0.1,
            "lineColor": "#FF6600",
            "bullet": "circle",
            "title": "retr-1",
            "valueField": "column-2",
            "plotAreaFillAlphas": 20,
            "plotAreaGradientAngle": 20,
            "plotAreaFillColors": "#FCD202",
            "plotAreaBorderAlpha": 1

        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "lineAlpha": 10,
            "fillToAxis": desenhar[1],
            "fillAlphas": 0.1,
            "xField": "bx",
            "yField": "by",
            "lineColor": "#FCD202",
            "bullet": "circle",
            "title": "retr-2",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.1,
            "fillToAxis": desenhar[2],
            "lineAlpha": 1,
            "xField": "cx",
            "yField": "cy",
            "lineColor": "#abc",
            "bullet": "circle",
            "title": "retr-3",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[3],
            "lineAlpha": 1,
            "xField": "dx",
            "yField": "dy",
            "lineColor": "#00fb2f",
            "bullet": "circle",
            "title": "retr-4",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[4],
            "lineAlpha": 1,
            "xField": "ex",
            "yField": "ey",
            "lineColor": "#392205",
            "bullet": "circle",
            "title": "retr-5",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[5],
            "lineAlpha": 1,
            "xField": "fx",
            "yField": "fy",
            "lineColor": "#00fbf2",
            "bullet": "circle",
            "title": "retr-6",
            "valueField": "column-2"

        },
//        {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "kx",
//            "yField": "ky",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LIx",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "lx",
//            "yField": "ly",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LSx",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 1,
//            "xField": "mx",
//            "yField": "my",
//            "lineColor": "#9a09f6",
//            "bullet": "circle",
//            "title": "LIy",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 5,
//            "xField": "nx",
//            "yField": "ny",
//            "lineColor": "#000000",
//            "bullet": "circle",
//            "title": "LSy",
//            "valueField": "column-2"
//        }, {
{"balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": "x",
            "lineAlpha": 1,
            "xField": "ox",
            "yField": "oy",
            "lineColor": "#fb00e0",
            "bullet": "triangleUp",
            "title": "PontoÓtimo",
            "valueField": "column-2"
        }

    ];
}
else if(qtd == 5){
    abc =[{
            "balloonText": "x:[[x]] y:[[y]]",
//                        "fillAlphas": 0.1,
            "lineAlpha": 10,
            "xField": "ax",
            "yField": "ay",
            "fillToAxis": desenhar[0],
            "fillAlphas": 0.1,
            "lineColor": "#FF6600",
            "bullet": "circle",
            "title": "retr-1",
            "valueField": "column-2",
            "plotAreaFillAlphas": 20,
            "plotAreaGradientAngle": 20,
            "plotAreaFillColors": "#FCD202",
            "plotAreaBorderAlpha": 1

        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "lineAlpha": 10,
            "fillToAxis": desenhar[1],
            "fillAlphas": 0.1,
            "xField": "bx",
            "yField": "by",
            "lineColor": "#FCD202",
            "bullet": "circle",
            "title": "retr-2",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.1,
            "fillToAxis": desenhar[2],
            "lineAlpha": 1,
            "xField": "cx",
            "yField": "cy",
            "lineColor": "#abc",
            "bullet": "circle",
            "title": "retr-3",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[3],
            "lineAlpha": 1,
            "xField": "dx",
            "yField": "dy",
            "lineColor": "#00fb2f",
            "bullet": "circle",
            "title": "retr-4",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[4],
            "lineAlpha": 1,
            "xField": "ex",
            "yField": "ey",
            "lineColor": "#392205",
            "bullet": "circle",
            "title": "retr-5",
            "valueField": "column-2"
        },
//        {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "kx",
//            "yField": "ky",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LIx",
//            "valueField": "column-2"
//        },{
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "lx",
//            "yField": "ly",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LSx",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 1,
//            "xField": "mx",
//            "yField": "my",
//            "lineColor": "#9a09f6",
//            "bullet": "circle",
//            "title": "LIy",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 5,
//            "xField": "nx",
//            "yField": "ny",
//            "lineColor": "#000000",
//            "bullet": "circle",
//            "title": "LSy",
//            "valueField": "column-2"
//        }, {
{"balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": "x",
            "lineAlpha": 1,
            "xField": "ox",
            "yField": "oy",
            "lineColor": "#fb00e0",
            "bullet": "triangleUp",
            "title": "PontoÓtimo",
            "valueField": "column-2"
        }

    ];
   }
   else if(qtd == 4){
    abc =[{
            "balloonText": "x:[[x]] y:[[y]]",
//                        "fillAlphas": 0.1,
            "lineAlpha": 10,
            "xField": "ax",
            "yField": "ay",
            "fillToAxis": desenhar[0],
            "fillAlphas": 0.1,
            "lineColor": "#FF6600",
            "bullet": "circle",
            "title": "retr-1",
            "valueField": "column-2",
            "plotAreaFillAlphas": 20,
            "plotAreaGradientAngle": 20,
            "plotAreaFillColors": "#FCD202",
            "plotAreaBorderAlpha": 1

        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "lineAlpha": 10,
            "fillToAxis": desenhar[1],
            "fillAlphas": 0.1,
            "xField": "bx",
            "yField": "by",
            "lineColor": "#FCD202",
            "bullet": "circle",
            "title": "retr-2",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.1,
            "fillToAxis": desenhar[2],
            "lineAlpha": 1,
            "xField": "cx",
            "yField": "cy",
            "lineColor": "#abc",
            "bullet": "circle",
            "title": "retr-3",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": desenhar[3],
            "lineAlpha": 1,
            "xField": "dx",
            "yField": "dy",
            "lineColor": "#00fb2f",
            "bullet": "circle",
            "title": "retr-4",
            "valueField": "column-2"
        },
//        {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "kx",
//            "yField": "ky",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LIx",
//            "valueField": "column-2"
//        },{
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "lx",
//            "yField": "ly",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LSx",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 1,
//            "xField": "mx",
//            "yField": "my",
//            "lineColor": "#9a09f6",
//            "bullet": "circle",
//            "title": "LIy",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 5,
//            "xField": "nx",
//            "yField": "ny",
//            "lineColor": "#000000",
//            "bullet": "circle",
//            "title": "LSy",
//            "valueField": "column-2"
//        }, {
{"balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": "x",
            "lineAlpha": 1,
            "xField": "ox",
            "yField": "oy",
            "lineColor": "#fb00e0",
            "bullet": "triangleUp",
            "title": "PontoÓtimo",
            "valueField": "column-2"
        }

    ];
}
else if(qtd == 3){
    abc =[{
            "balloonText": "x:[[x]] y:[[y]]",
//                        "fillAlphas": 0.1,
            "lineAlpha": 10,
            "xField": "ax",
            "yField": "ay",
            "fillToAxis": desenhar[0],
            "fillAlphas": 0.1,
            "lineColor": "#FF6600",
            "bullet": "circle",
            "title": "retr-1",
            "valueField": "column-2",
            "plotAreaFillAlphas": 20,
            "plotAreaGradientAngle": 20,
            "plotAreaFillColors": "#FCD202",
            "plotAreaBorderAlpha": 1

        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "lineAlpha": 10,
            "fillToAxis": desenhar[1],
            "fillAlphas": 0.1,
            "xField": "bx",
            "yField": "by",
            "lineColor": "#FCD202",
            "bullet": "circle",
            "title": "retr-2",
            "valueField": "column-2"
        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.1,
            "fillToAxis": desenhar[2],
            "lineAlpha": 1,
            "xField": "cx",
            "yField": "cy",
            "lineColor": "#abc",
            "bullet": "circle",
            "title": "retr-3",
            "valueField": "column-2"
        },
//        {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "kx",
//            "yField": "ky",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LIx",
//            "valueField": "column-2"
//        },{
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "lx",
//            "yField": "ly",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LSx",
//            "valueField": "column-2"
//        },{
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "lx",
//            "yField": "ly",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LSx",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 1,
//            "xField": "mx",
//            "yField": "my",
//            "lineColor": "#9a09f6",
//            "bullet": "circle",
//            "title": "LIy",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 5,
//            "xField": "nx",
//            "yField": "ny",
//            "lineColor": "#000000",
//            "bullet": "circle",
//            "title": "LSy",
//            "valueField": "column-2"
//        }, {
{"balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": "x",
            "lineAlpha": 1,
            "xField": "ox",
            "yField": "oy",
            "lineColor": "#fb00e0",
            "bullet": "triangleUp",
            "title": "PontoÓtimo "+"Obj:  "+obj,
            "valueField": "column-2"
        }
    ];
}
    else if(qtd == 2){
    abc =[{
            "balloonText": "x:[[x]] y:[[y]]",
//                        "fillAlphas": 0.1,
            "lineAlpha": 10,
            "xField": "ax",
            "yField": "ay",
            "fillToAxis": desenhar[0],
            "fillAlphas": 0.1,
            "lineColor": "#FF6600",
            "bullet": "circle",
            "title": "retr-1",
            "valueField": "column-2",
            "plotAreaFillAlphas": 20,
            "plotAreaGradientAngle": 20,
            "plotAreaFillColors": "#FCD202",
            "plotAreaBorderAlpha": 1

        }, {
            "balloonText": "x:[[x]] y:[[y]]",
            "lineAlpha": 10,
            "fillToAxis": desenhar[1],
            "fillAlphas": 0.1,
            "xField": "bx",
            "yField": "by",
            "lineColor": "#FCD202",
            "bullet": "circle",
            "title": "retr-2",
            "valueField": "column-2"
        }, 
//        {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "kx",
//            "yField": "ky",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LIx",
//            "valueField": "column-2"
//        },{
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "lx",
//            "yField": "ly",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LSx",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 1,
//            "xField": "mx",
//            "yField": "my",
//            "lineColor": "#9a09f6",
//            "bullet": "circle",
//            "title": "LIy",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 5,
//            "xField": "nx",
//            "yField": "ny",
//            "lineColor": "#000000",
//            "bullet": "circle",
//            "title": "LSy",
//            "valueField": "column-2"
//        }, {
{"balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": "x",
            "lineAlpha": 1,
            "xField": "ox",
            "yField": "oy",
            "lineColor": "#fb00e0",
            "bullet": "triangleUp",
            "title": "PontoÓtimo",
            "valueField": "column-2"
        }
    ];
}
else if(qtd == 1){
    abc =[{
            "balloonText": "x:[[x]] y:[[y]]",
//                        "fillAlphas": 0.1,
            "lineAlpha": 10,
            "xField": "ax",
            "yField": "ay",
            "fillToAxis": desenhar[0],
            "fillAlphas": 0.1,
            "lineColor": "#FF6600",
            "bullet": "circle",
            "title": "retr-1",
            "valueField": "column-2",
            "plotAreaFillAlphas": 20,
            "plotAreaGradientAngle": 20,
            "plotAreaFillColors": "#FCD202",
            "plotAreaBorderAlpha": 1

        },
//        {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "kx",
//            "yField": "ky",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LIx",
//            "valueField": "column-2"
//        },{
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "z",
//            "lineAlpha": 1,
//            "xField": "lx",
//            "yField": "ly",
//            "lineColor": "#f7f7fd",
//            "bullet": "circle",
//            "title": "LSx",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 1,
//            "xField": "mx",
//            "yField": "my",
//            "lineColor": "#9a09f6",
//            "bullet": "circle",
//            "title": "LIy",
//            "valueField": "column-2"
//        }, {
//            "balloonText": "x:[[x]] y:[[y]]",
//            "fillAlphas": 0.3,
//            "fillToAxis": "x",
//            "lineAlpha": 5,
//            "xField": "nx",
//            "yField": "ny",
//            "lineColor": "#000000",
//            "bullet": "circle",
//            "title": "LSy",
//            "valueField": "column-2"
//        }, {
{"balloonText": "x:[[x]] y:[[y]]",
            "fillAlphas": 0.3,
            "fillToAxis": "x",
            "lineAlpha": 1,
            "xField": "ox",
            "yField": "oy",
            "lineColor": "#fb00e0",
            "bullet": "triangleUp",
            "title": "obj: ",
            "valueField": "column-2"
        }
    ];
}
   
  
    return  abc;  
    
}
//vetorretas,vetorcondicao,vetorPtsInter,pontoOtimo,vetorPtsViaveis,vetorx1.length CABEÇALHO
//vPtsInst,vCondInst,vPtsInter,PtOtimo,vPtsViaveis,qtdInst
function graficoGera(vPtsInst,vCondInst,vPtsInter,PtOtimo,vPtsViaveis,qtdInst,tipo,obj) {
    var tempo = null;
    //alert('entrei');
if(tipo === "direto");
{
    tempo = 0;
}
if(tipo ==="passo"){
    tempo =5;
}

    var chart2 = AmCharts.makeChart("chartdiv", {
        "guides": [
            {
                "fillAlpha": 0,
                "value": 1,
                "toValue": 6,
                "lineColor": "#FF6600",
                "color": "#FF6600",
                "position": "top"
            }
        ],"legend": {
            "useGraphSettings": true,
            "labelText": "[[title]]"    
        },
        
        "type": "xy",
        "theme": "chalk",
        "path": "http://www.amcharts.com/lib/3/",
//                "dataLoader": {
//                    "url": "data/dataGraph.json",
//                    "format": "json"
//                },
        "dataProvider": reretornJson(vPtsInst,PtOtimo,qtdInst),
        "valueAxes": [{
                "position": "bottom",
                "axisAlpha": 0,
                "dashLength": 1,
                "id": "x",
                "title": "X"
            }, {
                "axisAlpha": 0,
                "dashLength": 1,
                "position": "left",
                "id": "y",
                "title": "Y"
            }, {
                "axisAlpha": 0,
                "dashLength": 1,
                "position": "top",
                "id": "z",
                "title": "Z"
            },
            {
                "axisAlpha": 0,
                "dashLength": 1,
                "position": "right",
                "id": "w",
                "title": "W"
            }
        ],
        "startDuration": tempo,
        "graphs": graficos(vPtsInst,qtdInst,vCondInst,obj),//vetor,qtd,Vcond
        "marginLeft": 10,
        "marginBottom": 10,
//                "chartScrollbar": {},
        "chartCursor": {"oneBalloonOnly": true
        },
        "export": {
            "enabled": true,
            "position": "bottom-right"
        }
        


    });
}