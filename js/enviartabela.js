var contador = {
    cont : 0,
	restricao: 10,
	nomefunc:0,
    Class : function(){
        contador.cont ++
        }
}

	vetorfinal = new Array();


var pontosXY= new Array();
function removerlinha(obj){
var newtb = document.querySelector("#tabela-restricao");
var newtbcoord = document.querySelector("#tabela-coordenada");
	  // Capturamos a referência da TR (linha) pai do objeto
                var objTR = obj.parentNode.parentNode;
                // Capturamos o índice da linha
                var indexTR = objTR.rowIndex;
                // Chamamos o método de remoção de linha nativo do JavaScript, passando como parâmetro o índice da linha  
				
				newtb.deleteRow(indexTR);
			    newtbcoord.deleteRow(indexTR);
			    
				newtb = document.querySelector("#tabela-restricao-f");
				newtbcoord = document.querySelector("#tabela-coordenada-f");
				
				newtb.deleteRow(indexTR);
			    newtbcoord.deleteRow(indexTR);
			    
				contador.cont-=1;
				
}

function organizavetor(linha){
				var i=0;
				var exp='';
				var exp2='';
				var posicao=0;
				var posicaovetor=0;
				var posicaovetorfinal=0;
				var aux2=0;
				var aux= new Array();
				var vetor= new Array();
				
			for (i=0; i < linha.length;i++){
				if((linha.charAt(i) != " ") && (linha.charAt(i) != "  ") &&(linha.charAt(i) != "  ") ){
						exp+=linha.charAt(i);
				}
			}
		// filtra os elementos da expressão regular  e adiciona em um vetor: ex: vetor[1]=-6; vetor[2]= +7 ; cada posicao do vetor representa uma variável.
		
			for (i=0; i < exp.length;i++){
				if(exp.charAt(i).match("[\\<||\\>||\\=]*")==false){
						aux[posicao]= exp.charAt(i);
						if (i==(exp.length-1)){
							for (j=aux2;j<=posicao;j++){
							exp2+=aux[j];
							}	
							vetor[posicaovetor]=exp2;
							exp2='';
							aux2=posicao;
							posicaovetor+=1;
							}
						posicao+=1;
				}
				else {
					for (j=aux2;j<posicao;j++){
						exp2+=aux[j];
					}
					aux2=posicao;
					vetor[posicaovetor]=exp2;
					exp2='';
					posicaovetor+=1;
					
					exp2+=exp.charAt(i)
						if (exp.charAt(i+1).match("[\\<||\\>||\\=]")){
							exp2+=exp.charAt(i+1);
							i=i+1;
						}
					vetor[posicaovetor]=exp2;
					exp2='';
					posicaovetor+=1;
				}
				
			}
			
			//Adiciona as variáveis em um vetor final
		exp='';	
		
			 for (j=0;j<posicaovetor;j++){
				  if (vetor[j].length==1 || vetor[j].match("[\\<||\\>||\\=]{1,2}") || j==(posicaovetor-1)){
							vetorfinal[posicaovetorfinal]=vetor[j];
							//alert(vetor[j]);
							posicaovetorfinal+=1;
						}
				 	else {
						esc='';
						var temp='';
						for (i=0;i<vetor[j].length;i++){
						exp+= vetor[j].charAt(i);
						if (exp.charAt(i).match("[\\<||\\>||\\=]")||i==(vetor[j].length-1)){
									//alert("exp: " +exp);
									for (m=0;m<(exp.length);m++){
										if (exp.charAt(m).match("[A-Za-z]*")==false){
											esc+=exp.charAt(m);
										}
											else {
												//alert("esc" + esc);
												vetorfinal[posicaovetorfinal]=esc;
												posicaovetorfinal+=1;
												esc='';
												if (m<exp.length){
													for(n=m;n<(exp.length);n++){
													if (exp.charAt(n).match("[A-Za-z]*")==false || n ==(exp.length)){
														temp+=exp.charAt(n);
														}
													}
												}
													exp=temp;
													vetorfinal[posicaovetorfinal]=exp;
												    posicaovetorfinal+=1;	
														temp='';
											}
										}
									}
						}
			 }
				}	
				//mostra as informações do vetor
		for (m=0;m<vetorfinal.length;m++){
								if (vetorfinal[m].length==0){
										vetorfinal[m]=0;
								}
									}
			
		
}

function coordenada(){
	if (vetorfinal.length>4){
		alert("Erro: Remova a ultima restricao adicionada!");
	}
	var sinal = new Array();
	var contsinal=0;
	var aux3='';
	var umavar=false;
		for(i=0;i<vetorfinal.length;i++){
			if (vetorfinal[i]!=''){
			if (vetorfinal[i].charAt(0)=='+')
				sinal[contsinal]='+';
		    else if (vetorfinal[i].charAt(0)=='-')
				sinal[contsinal]='-';
			else sinal[contsinal]='+';
			
			contsinal+=1;
		//alert(vetorfinal.length);
		}
		else umavar=true;
			}
			
		for(i=0;i<vetorfinal.length;i++){
			for (j=0;j<vetorfinal[i].length;j++){
				if (vetorfinal[i].charAt(j).match("[\\+||\\-||\\*||\\/]*")==false){
					aux3+=vetorfinal[i].charAt(j);
				}   
			}
			vetorfinal[i]=aux3;
				aux3='';
		}
					
	if (umavar==false){
		if (vetorfinal[0]!=0)
				pontosXY[0]=(parseFloat((vetorfinal[3])/(vetorfinal[0]))).toFixed(2).replace('.','.');  // faz Y=0 para encontrar X
			else pontosXY[0]=0;
			if (vetorfinal[1]!=0)
			pontosXY[1]=(parseFloat((vetorfinal[3])/(vetorfinal[1]))).toFixed(2).replace('.','.'); // faz X=0 para encontrar Y
			else pontosXY[1]=0;
			
			pontosXY[2]=(vetorfinal[2]); //guarda a restricao da variavel
}
else {
	if (vetorfinal[0]!=0)
			pontosXY[0]=(parseFloat((vetorfinal[3])/(vetorfinal[0]))).toFixed(2).replace('.','.');  // faz Y=0 para encontrar X
			else pontosXY[0]=0;
			pontosXY[1]=0;
			pontosXY[2]=(vetorfinal[2]); //guarda a restricao da variavel
			
}
		if (umavar==false){
			if (sinal[0]=='+' && sinal[3]=='-')
				sinal[0]='-';
				else if (sinal[0]=='-' && sinal[3]=='+')
					sinal[0]='-';
					else sinal[0]='';
				
			if (sinal[1]=='+' && sinal[3]=='-')
				sinal[1]='-';
				else if (sinal[1]=='-' && sinal[3]=='+')
					sinal[1]='-';	
					else sinal[1]='';
		}
			else {
				if (sinal[0]=='+' && sinal[2]=='-')
				sinal[0]='-';
				else if (sinal[0]=='-' && sinal[2]=='+')
					sinal[0]='-';
					else sinal[0]='';
				sinal[1]='';
				
			}
		
		pontosXY[0]=sinal[0]+pontosXY[0];
		pontosXY[1]=sinal[1]+pontosXY[1];

}

function enviar1(){
	  
var c_modelo = document.querySelector("#campo-modelo"); // pega tr do campo-atual

if (c_modelo.value != "") {
	
 var novalinha = "<tr> <th>Modelo</th> </tr><tr class='trmodelo'>"+
 "<td class='m1'>"+"Z = "+c_modelo.value+"</td>"+
  "</tr>";

 var newtb = document.querySelector("#tabela-modelo");
 newtb.innerHTML = novalinha;
 	
  novalinha = "<tr><th>Modelo</th></tr><tr class='trmodelo'>"+
 "<td class='m1'>"+"Z = "+c_modelo.value+"</td> <td><input type='submit' value='Enviar' onclick=''></td>"+
  "</tr>"	
 newtb = document.querySelector("#tabela-modelo-f");
 newtb.innerHTML = novalinha;
 
 c_modelo.value="";
  return true;
}
else {
	
	return false;
}
 }

function enviar2(){
	
var c_restricao = document.querySelector("#campo-restricao"); // pega tr do campo-atual
var newtb = document.querySelector("#tabela-restricao");
var newtbcoord = document.querySelector("#tabela-coordenada");

 organizavetor(c_restricao.value);
 coordenada();
if (c_restricao.value != "" && contador.cont<contador.restricao) {
	
 var novalinha = "<tr><td class='m2'>"+"R"+(contador.nomefunc+1)+" : "+c_restricao.value+"</td>"+
   "<td><input type='submit' value='Remover' onclick='removerlinha(this);'></td>" +  
  "</tr>";
 novalinha2= "<tr><td class='m3'>R"+(contador.nomefunc+1)+"-> A"+(contador.nomefunc+1)+""+"("+pontosXY[0]+ " , 0)"+"</td>"+
  "<td>"+"B"+(contador.nomefunc+1)+"(0 , "+ pontosXY[1] +")</td>"
  "</tr>";


 newtb.innerHTML += novalinha;
 newtbcoord.innerHTML += novalinha2;

newtb = document.querySelector("#tabela-restricao-f");
newtbcoord = document.querySelector("#tabela-coordenada-f");

 novalinha = "<tr><td class='m2'>"+"R"+(contador.nomefunc+1)+" : "+c_restricao.value+"</td>"+
   "<td><input type='submit' value='Enviar' onclick=''></td>" +  
  "</tr>";
 novalinha2= "<tr><td class='m3'>A"+(contador.nomefunc+1)+"</td><td>"+"("+pontosXY[0]+ ",0)"+"</td>"+
  "<td>"+"B"+(contador.nomefunc+1)+"</td><td>(0,"+ pontosXY[1]+")</td>"
  "</tr>";

 newtb.innerHTML += novalinha;
 newtbcoord.innerHTML += novalinha2;
  
 c_restricao.value="";
 contador.cont+=1;
 contador.nomefunc+=1;

 return true;
 }
else {
	if (contador.cont>=contador.restricao){
		alert("Limite de restricoes atingido");
	}
 newtb = newtb;
 newtbcoord = novalinha2;
 var c_restricao = document.querySelector("#campo-restricao");
 c_restricao.value="";
 	
	return false;
}
 }
 