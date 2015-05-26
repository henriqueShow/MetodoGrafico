var quantidade = 0;
vetorPtsInter = new Array();
vetorPtsViaveis = new Array();
vetorTrue = new Array();

var Funcao = {
    setFuncaoObj: function (funcao) {
        this.funcao = funcao;
    },
    setMinimizar: function (minimizar) {
        this.minimizar = minimizar;
    },
    setMaximizar: function (maximizar) {
        this.maximizar = maximizar;
    },
    getFuncaoObj: function () {
        return this.funcao;
    },
    getMinimizar: function () {
        return this.minimizar;
    },
    getMaximizar: function () {
        return this.maximizar;
    },
    ApagarArray: function (a) {
        while (a.length > 0) {
            a.pop();
        }

    },
    limparDados: function () {
        Funcao.ApagarArray(vetorx1);
        Funcao.ApagarArray(vetorx2);
        Funcao.ApagarArray(vetorcondicao);
        Funcao.ApagarArray(vetorresultado);
        Funcao.ApagarArray(pontosA);
        Funcao.ApagarArray(pontosB);
        Funcao.ApagarArray(vetorretas);
        cont = 0;

        alert("Limpou todos os Vetores!");
    },
    mostraRest: function (arrayAux1, arrayAux2, arrayAux3, arrayAux4) {

        for (i = 0; i < arrayAux1.length; i++) {
            alert("r" + i + ": " + arrayAux1[i] + "x +" + arrayAux2[i] + "y " + arrayAux3[i] + " " + arrayAux4[i]);
        }
    },
    //retas=[p1, p2]
    //p1 = [x,y]
    //p2 = [x,y]
    mostraPtsRest: function (retas) {

        for (i = 0; i < retas.length; i++) {
            alert("r" + i + ": " + "P1: (" + retas[i][0]['x'] + "," + retas[i][0]['y'] + ")" + " P2: (" + retas[i][1]['x'] + "," + retas[i][1]['y'] + ")");
        }
    },
    achaIntersercao: function (coefX, coefY, resul) {

//        var xintercept;
//        var yintercept;

//        var auxCoefX_reta1;
//        var auxCoefX_reta2;
//        var auxCoefY_reta1;
//        var auxCoefY_reta2;
//        var auxResul_reta1;
//        var auxResul_reta2;
//
//        var auxCoefX_final;
//        var auxCoefY_final;
//        var auxResul_final;

        for (i = 0; i < coefX.length; i++) {
            for (j = coefX.length - 1; j > i; j--) {
                entrei = false
                PegueiXeY = false;
                //se os sinais do coef x das retas forem de mesmo sinal, multiplica uma delas por -1
                if ((coefX[i] > 0 && coefX[j] > 0) || (coefX[i] < 0 && coefX[j] < 0)) {
                    multreta1 = -1;
                    multreta2 = 1;
                }
                //se os sinais forem diferentes já esta ok.
                else if ((coefX[i] < 0 && coefX[j] > 0) || (coefX[i] > 0 && coefX[j] < 0)) {
                    multreta1 = 1;
                    multreta2 = 1;
                }


//                    a = [0, 2, 4];
//                    b = [3, 0, 6];
//                    c = [9, 12, 20];
//      
                //retriçõe do tipo:
                //2x + 20y = 10
                //3x + 10y = 50
                if (coefX[i] != 0 && coefX[j] != 0 && coefY[i] != 0 && coefY[j] != 0) {
                    entrei = true;

                    auxCoefX_reta1 = coefX[i] * (coefX[j] * (multreta1));
                    auxCoefY_reta1 = coefY[i] * (coefX[j] * (multreta1));
                    auxResul_reta1 = resul[i] * (coefX[j] * (multreta1));

                    auxCoefX_reta2 = coefX[j] * (coefX[i] * (multreta2));
                    auxCoefY_reta2 = coefY[j] * (coefX[i] * (multreta2));
                    auxResul_reta2 = resul[j] * (coefX[i] * (multreta2));

                    auxCoefX_final = auxCoefX_reta1 + auxCoefX_reta2;
                    auxCoefY_final = auxCoefY_reta1 + auxCoefY_reta2;
                    auxResul_final = auxResul_reta1 + auxResul_reta2;
                    //alert('entrei na 1');
                    //alert('auxCoefY_RETA '+i+': '+(auxCoefY_reta1)+' auxCoefY_RETA '+j+': '+(auxCoefY_reta2));
                    if (auxCoefY_final != 0) {
                        yintercept = (auxResul_final / auxCoefY_final) + auxCoefX_final;
                        xintercept = (resul[i] - (coefY[i] * (yintercept))) / coefX[i];
                        PegueiXeY = true;
                    }

                }
                //retriçõe do tipo:
                //2x       = 10
                //3x + 10y = 50
                else if (((coefX[i] != 0 && coefY[i] != 0) && ((coefX[j] == 0 || coefY[j] == 0) && (!(coefX[j] == 0 && coefY[j] == 0)))) || ((coefX[j] != 0 && coefY[j] != 0) && ((coefX[i] == 0 || coefY[i] == 0) && (!(coefX[i] == 0 && coefY[i] == 0))))) {
                    entrei = true;
                    //alert('entrei na 2');
                    if (coefX[i] == 0) {
                        auxCoefY_final = resul[i] / coefY[i];
                        auxCoefX_final = (resul[j] - (coefY[j] * auxCoefY_final)) / coefX[j];

                        yintercept = auxCoefY_final;
                        xintercept = auxCoefX_final;
                        PegueiXeY = true;
                    }
                    else if (coefX[j] == 0) {
                        auxCoefY_final = resul[j] / coefY[j];
                        auxCoefX_final = (resul[i] - (coefY[i] * auxCoefY_final)) / coefX[i];

                        yintercept = auxCoefY_final;
                        xintercept = auxCoefX_final;
                        PegueiXeY = true;
                    }
                    else if (coefY[i] == 0) {
                        auxCoefX_final = resul[i] / coefX[i];
                        auxCoefY_final = (resul[j] - (coefX[j] * auxCoefX_final)) / coefY[j];

                        yintercept = auxCoefY_final;
                        xintercept = auxCoefX_final
                        PegueiXeY = true;
                    }
                    else if (coefY[j] == 0) {
                        auxCoefX_final = resul[j] / coefX[j];
                        auxCoefY_final = (resul[i] - (coefX[i] * auxCoefX_final)) / coefY[i];

                        yintercept = auxCoefY_final;
                        xintercept = auxCoefX_final;
                        PegueiXeY = true;
                    }
                }
                //retriçõe do tipo:
                //2x       = 10
                //     10y = 50
                else if ((coefX[i] != 0 && coefY[j] != 0 && coefX[j] == 0 && coefY[i] == 0) || (coefX[j] != 0 && coefY[i] != 0 && coefX[i] == 0 && coefY[j] == 0)) {
                    entrei = true;
                    //alert('entrei na 3');
                    if (coefX[i] != 0) {
                        auxCoefX_final = resul[i] / coefX[i];
                        auxCoefY_final = resul[j] / coefY[j];

                        yintercept = auxCoefY_final;
                        xintercept = auxCoefX_final;
                        PegueiXeY = true;
                    }
                    else if (coefY[i] != 0) {
                        auxCoefX_final = resul[j] / coefX[j];
                        auxCoefY_final = resul[i] / coefY[i];

                        yintercept = auxCoefY_final;
                        xintercept = auxCoefX_final;
                        PegueiXeY = true;
                    }
                }

                if (entrei && PegueiXeY) {
                    //alert("x: " + xintercept + " y: " + yintercept);
                    p = {x: xintercept, y: yintercept};
                    r1 = i;
                    r2 = j;

                    interserc = [
                        p, r1, r2// p1 é o ponto de Interseção, r1 e r2 são as retas que se cortam no ponto p1.
                    ];

                    vetorPtsInter.push(interserc);
                }
            }
        }
          //Mostrar pontos de Interserção  
//        for (i = 0; i < vetorPtsInter.length; i++)
//            alert("intercerção" + " entre retas " + vetorPtsInter[i][1] + " e " + vetorPtsInter[i][2] + "" + ": (" + vetorPtsInter[i][0]['x'] + "," + vetorPtsInter[i][0]['y'] + ")");
    },
    AnalisaPontos: function (Vx, Vy, Vcond, Vresul, Vretas, VPtsInter, tipo) {
        
        eTrue = 1;
        eFalse = 0;
        var vetorTrue = new Array(); 
        var coef;
        var auxPontos = new Array();
        var X,Y;
        ;
        
        if(tipo==0){
            coef = 2;
        }
        else if(tipo==1){
            coef = 1;
        }
        
        for (i = 0; i < Vx.length; i++) { //Para as restrições 
            
            for (j = 0; j < coef; j++) {//Para os pontos 1 e 2
                
                var guardar = false;
                
                for (k = 0; k < Vx.length; k++) {//Para as retrições de teste
                    
                    if(tipo==0){
                        X = Vretas[i][j]['x'];
                        Y = Vretas[i][j]['y'];
                    }
                    else if(tipo==1){
                        X = VPtsInter[i][j]['x'];
                        Y = VPtsInter[i][j]['y'];
                    }
                    //alert('ponto: ('+X+","+Y+')');
                    
                    if (Vcond[k] == '>=') {
                        
                        //alert(Vx[k] * X + Vy[k] * Y +Vcond[k]+Vresul[k]);
                        if (((Vx[k] * X + Vy[k] * Y) > Vresul[k])|| ((Vx[k] * X + Vy[k] * Y) == Vresul[k])) {
                            
                            vetorTrue.push(eTrue);
                            //alert('maiorIgual');
                            
                        }
                        
                    }
                    else if (Vcond[k] == '<='){
                        
                        //alert(Vx[k] * X + Vy[k] * Y + Vcond[k]+Vresul[k]);
                        if (((Vx[k] * X + Vy[k] * Y) < Vresul[k])||((Vx[k] * X + Vy[k] * Y) == Vresul[k])) {
                           
                            vetorTrue.push(eTrue);
                            //alert('menorIgual');
                        }
                        
                    }
                    else if (Vcond[k] == '=') {
                        
                        //alert(Vx[k] * X + Vy[k] * Y +Vcond[k]+Vresul[k]);
                        if ((Vx[k] * X + Vy[k] * Y) == Vresul[k]){
                            
                            vetorTrue.push(eTrue);
                            //alert('Igual');
                        }
                        
                    }
                }
                
                
                w = {x:X,y:Y};
                auxPontos.push(w);
                
                
                
                 if(vetorTrue.length == Vcond.length){
                     
                    vetorPtsViaveis.push(auxPontos);
                    
                    auxPontos.pop();
                }
                while(vetorTrue.length>0){
                        vetorTrue.pop();
                    }
            }
           
        }
    },
    analisaSolucaoOtima: function (vetorPtsOtimos,xObj,yObj,tipo){
      //vetorPtsInter[ w ] -> w = {x:X,y:Y} 
      var resul = new Array();
      var maior,menor;
      
      var id = 0;

        for (var i=0;i<vetorPtsOtimos;i++){
          resul.push(vetorPtsInter[i][0]['x']*xObj+vetorPtsInter[i][0]['y']*yObj);
        } 
        if(tipo = "Minimizar"){
            for (var j=1;j<resul.length;j++){
                menor = resul[0];
                if(resul[j]<menor){
                    menor = resul[j];
                    id = j;
                }
            }
        }
        else if(tipo == "Maximizar"){
            for (var j=1;j<resul.length;j++){
                
                maior = resul[0];
                if(resul[j]>maior){
                    maior = resul[j];
                    id = j;
                }
            }
        }
          
        alert('Ponto Ótimo: '+"("+vetorPtsInter[id][0]['x']+","+vetorPtsInter[id][0]['y']+")");
    }

};
var Restricao = {
    setRestricao: function (restricao) {
        this.restricao = restricao;
    },
    setContador: function (contador) {
        this.contador = contador;
    },
    getRestricao: function () {
        return this.restricao;
    },
    getContador: function () {
        return this.contador;
    }
};
vetorx1 = new Array();
vetorx2 = new Array();
vetorcondicao = new Array();
vetorresultado = new Array();
a = new Array();
pontosA = new Array();
pontosB = new Array();
cont = 0;
vetorretas = new Array();




// Adicionar função Objetivo na tabela
$(document).ready(function () {
    $(".btavancar").click(function () {
        x1 = $("#Zx1").val(); // x1 da função Z
        x2 = $("#Zx2").val(); // x2 da função Z
        
        var aChk = document.getElementsByName("funcz"); 

        for (var i = 0; i < aChk.length; i++) {

            if (aChk[i].checked == true) {
              tipoOtm = aChk[i].value;  
            }


        }

//        alert('chegado: '+);
        
        Funcao.setFuncaoObj(x1 + "+" + x2);
        Funcao.setMaximizar();
        Funcao.setMinimizar();

        if (x2 === '')
            x2 = 0;
        if (x1 === '')
            x1 = 0;

        var row =
                "<tr><td class='tbfuncaoZ'><strong>Z=</strong></td>" +
                "<td class='valx1'> <strong>" + x1 + "</strong></td>" +
                "<td class='valx2'><strong>" + x2 + "</strong></td><td></td>" +
                "</tr>";
        $(".tbrestricoes").ready(function () {
            $(".tbfuncaoZ").parent().remove(); //tr
            $(".tbrestricoes thead").append(row);
            quantidade = $(".qtRestri option:selected").text(); // pega a quantidade restrições escolhida

            row = "" +
                    "<tr><td></td>" +
                    "<td><input type='text' class='restx1' placeholder='x1'></td><td><input type='text' class='restx2' placeholder='x2'></td> " +
                    "<td><select class='cond'>" +
                    "<option value='>=' class='rest'>>=</option>" +
                    "<option value='<=' class='rest'><=</option>" +
                    "<option value='=' class='rest'>=</option>" +
                    "</select></td>" +
                    "<td><input type='text' class='resultado' placeholder='resul'></td> " +
                    "</tr>";
            $('.tbrestricoes tbody').remove(); // limpa a tabela de restrições

            for (i = 0; i < quantidade; i++) {
                $(".tbrestricoes").append(row);
            }
        });
    });
});

$(document).ready(function () {
    $(".brgerargrafico").click(function () {
        $('.tbrestricoes tbody tr').each(function () {
            $(this).each(function () {
                aux_x = $(this).find('.restx1').val();
                aux_y = $(this).find('.restx2').val();
               
               
                
                if (aux_x == '') {
                    aux_x = 0;


                }
                else if (aux_y == '') {
                    aux_y = 0;

                }



                vetorx1.push(aux_x); // vetorx1 possui o valor de todos os x1
                vetorx2.push(aux_y); // vetorx1 possui o valor de todos os x2
                vetorcondicao.push($(this).find('.cond').val());
                vetorresultado.push($(this).find('.resultado').val());




            });

        });


        for (i = 0; i < vetorresultado.length; i++) { // ponto A: X2= 0, Calcula X1. Ponto B: X =0 , calcula X2a


//                alert(vetorresultado.length+"tamanho");
            //Funcao.mostraRest(vetorx1,vetorx2,vetorcondicao,vetorresultado,"coefRest");

            if (vetorx1[i] != 0 && vetorx2[i] != 0) {


                pontosA[i] = vetorresultado[i] / vetorx1[i]; //encontra valor de x1
                pontosB[i] = vetorresultado[i] / vetorx2[i]; //encontra valor de x2

                p1 = {x: pontosA[i], y: 0};
                p2 = {x: 0, y: pontosB[i]};
                //alert("x1 e x2 diferente de 0");
            }

            else if (vetorx1[i] == 0 && vetorx2[i] != 0) {


                pontosB[i] = vetorresultado[i] / vetorx2[i];


                p1 = {x: 1000, y: pontosB[i]};
                p2 = {x: 1000, y: pontosB[i]};
                //alert("Apenas x2 diferente de 0");
            }

            else if (vetorx1[i] != 0 && vetorx2[i] == 0) {
                pontosA[i] = vetorresultado[i] / vetorx1[i];

                p1 = {x: pontosA[i], y: 1000};
                p2 = {x: pontosA[i], y: 1000};
                //alert("Apenas x1 diferente de 0");
            }
            else if (vetorx1[i] == 0 && vetorx2[i] == 0) {
                //alert("Ambos iguais a 0");
            }

            reta = [
                p1, p2 // ponto1 e ponto2
            ];
            vetorretas[cont] = reta;

//            alert("("+vetorretas[cont][0]['x']+","+vetorretas[cont][0]['y']+")"); //ponto 1
//            alert("("+vetorretas[cont][1]['x']+","+vetorretas[cont][1]['y']+")"); //ponto 2
//            
            //alert('restrição: ' + vetorcondicao[cont]);
            cont = cont + 1;

        }
        //alert(vetorretas.length);
        Funcao.mostraPtsRest(vetorretas);
        var a = new Array();
        var b = new Array();
        var c = new Array();
        var d = new Array();
        var e = new Array();

        a = [0, 2, 4];
        b = [3, 0, 6];
        c = [9, 12, 20];
        d = ['>=', '<=', '='];

        pa1 = {x: 0, y: 3};
        pa2 = {x: 0, y: 3};
        
        z1 = [pa1,pa2];
        

        pb1 = {x: 6, y: 0};
        pb2 = {x: 6, y: 0};
        
        z2 = [pb1,pb2];

        pc1 = {x: 0, y: 3.33333};
        pc2 = {x: 5, y: 0};

        z3 = [pc1,pc2];

        e= [z1,z2,z3];
        
        //alert("Tamanho e: "+e.length);


        Funcao.achaIntersercao(a, b, c);
        Funcao.AnalisaPontos(a, b, d, c, e, vetorPtsInter,0);
        Funcao.AnalisaPontos(a, b, d, c, e, vetorPtsInter,1);
        
        //alert("QuantPontosViaveis: "+vetorPtsViaveis.length);
        Funcao.analisaSolucaoOtima(vetorPtsViaveis,x1,x2,tipoOtm);
        //Vx1,Vx2,Vcond,Vresul,Vretas,VPtsInter


        // é necessário zerar os vetores
        Funcao.limparDados();

        // antes de mandar para o gráfico, o valor de X deve ser ordenado do menor para menor.
        /*
         seiLa = [{x:1,y:2},{x:1,y:2}];
         seiLa[i] = {x:x[i],y:y[i]};
         alert(reta[1]['x1']);
         */
    });
});