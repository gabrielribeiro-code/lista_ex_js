function atividade_5(){
//
let transformacao = 0;
let transformacao_2 =0;
//

let n =  Number(prompt("Digite um número "));
 if(n % 2 === 0){
 
    alert("É par mas sera transformado em impar");
    transformacao = n - 1;
alert("Agora o número par é um numero impar = " + transformacao);

}else{
    alert("É impar mas será transformado em par");
    transformacao_2 = n + 1;
alert("Agora o número impar é um numero par = " + transformacao_2);
 }
}