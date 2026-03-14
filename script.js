// console.log ("Hello World");


// let nome ="João";
//     console.log(nome);

// const pi = 3.14;
//     console.log(pi);

// let n1 =1;
// let n2 =2;

// console.log(n1 + n2);

// function saudacao(){
//     console.log("Olá meu nome é " + nome);
// };


// function somar(n3,n4){
//     console.log(n3 + n4)

// };

// saudacao();
// somar(1,1);


function somarNumeros(){

    let soma = 0;
    let continuar = true;

    while(continuar){

        let numero = parseFloat(prompt("Digite um número (ou digite '0 para encerrar): "));

        // soma = soma + numero;
        soma += numero


        if (isNaN(numero)){
            alert("Por favor, digite um número válido!");
        } else {
            soma += numero;
            console.log(soma);
        }

        continuar = confirm("Deseja adicionar mais um número.");
        
    }

    alert("A soma dos números é: " + soma);
    console.log("A soma dos númeors é: "+ soma);

}

function contagem_nasa(){
    for(let i = 10; i > 0; i--){
        alert(i);
    };

    alert("Contagem Finalizada")
}


function atividade_3(){

//var
let ganho_anual =0;
let gasto_anual =0;
let saldo_financeiro_anual =0;

//

for(let i = 0; i <= 12; i++){
    let ganho = Number(prompt("Digite o ganho do mes " + i ));
    let gasto = Number(prompt("Digite o gasto do mes " + i ));

    ganho_anual += ganho;
    gasto_anual += gasto;
}

saldo_financeiro_anual = ganho_anual - gasto_anual;

console.log("O ganho anual é: " + ganho_anual);
console.log("O gasto anual é: " + gasto_anual);
console.log("O saldo financeiro anual é " + saldo_financeiro_anual);

if( saldo_financeiro_anual > 0){
 
 alert("A empresa teve Lucro!");
}else if (saldo_financeiro_anual < 0){
    ("A empresa teve prejuizo!");
}else{
    console.log("A empresa ficou no zero!");
 }
}



function atividade_4(){

 //var
    let numero = [];
//
    for( let i= 0; i < 4; i++){
  numero[i] =  Number(prompt("Digite o numero " + i ));
    }

    for(let i =0; i < 4; i++) {
        for(let j = i + 1; j < 4; j++){

            if(numero[i] < numero[j]){

                let guarda = numero[i];
                numero[i] = numero[j];
                numero[j] = guarda;
            }

        }
    }
       
    alert("Ordem descrecente " + numero);
}


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

function atividade_6(){

 let letra = (prompt("Digite uma letra do alfabeto "));

if( letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u"){
    alert("Está letra é uma vogal");
    console.log("Está letra é uma vogal");

}else{
    alert("Está letra é uma consoante");
    console.log("Está letra é uma consoante");
}
}


function atividade_7(){

    let codigo = (prompt)("Digite o código do produto de (a até i)");

    switch(codigo){
case "a":
        console.log("Sabor - Chocolate - R$1,50")
break;

case "b":
        console.log("Sabor - Morango - R$2,50")
break;

case "c":
        console.log("Sabor - Creme - R$2,50")
break;

case "d":
        console.log("Sabor - Manga - R$3,20")
break;

case "e":
        console.log("Sabor - Melancia - R$3,40")
break;

case "f":
        console.log("Sabor - Vanilla Ice - R$3,00")
break;

case "g":
        console.log("Sabor - Céu Azul - R$3,60")
break;

case "h":
        console.log("Sabor - Brownie - R$4,00")
break;

case "i":
        console.log("Sabor - Hawaiano - R$5,00")
break;

    }
}

function atividade_8(){

let n = 10;
let n2 = 20;

alert("O valor da primeira variavel é " + n);
alert("O valor da primeira variavel é " + n2);

let diferenca = n - n2;

alert("A diferença entre as variaveis é " + diferenca);

let dobro = n * 2;
let triplo = n2 * 3;
let operacao_b = dobro + triplo;

alert("O dobro da primeira variavel mais o triplo da segunda é " + operacao_b);

let multi = n * n2;

alert("A multiplicação da primeira varíavel e da segunda é " + multi);
}

function atividade_9(){

let numero1 = 5;
let numero2 = 10;

alert("Valores antes da ordenação" + numero1 + "e" + numero2);

if( numero1 > numero2){
alert("Ordenado " + numero1 + numero2);

}else{
 alert("Ordenado " + numero2 + numero1)
}
}

function atividade_10(){


    let nome_funcionario = (prompt)("Digite o nome do funcionário ");
    let salario_bruto = parseFloat(prompt)("Digite o salário bruto ");
    let taxa_desconto = 0.08;
    let desconto = salario_bruto * taxa_desconto;
    let salario_liquido = salario_bruto - desconto;

        
        alert("A taxa de desconto do INSS é de 8%");
alert("Nome: " + nome_funcionario);
alert("Salario_bruto: " + salario_bruto);
alert("Valor do desconto: " + desconto);
alert("O salario liquido é: " + salario_liquido);
}


function atividade_11(){
 
    let salario_bruto = parseFloat(prompt)("Digite o salário bruto ");
    let taxa_desconto = 0.08;
    let taxa_desconto2 = 0.085;
    let taxa_desconto3 = 0.09;

   if( salario_bruto = 1000){
    let desconto = salario_bruto * taxa_desconto;
        let salario_liquido = salario_bruto - desconto;
            alert("Valor do desconto: " + desconto);
            alert("O salario liquido é: " + salario_liquido);

   }else if (salario_bruto  <= 1500){
    let desconto2 = salario_bruto * taxa_desconto2;
        let salario_liquido = salario_bruto - desconto2;

        alert("Valor do desconto: " + desconto2);
            alert("O salario liquido é: " + salario_liquido);
   }
else{
    let desconto3 = salario_bruto * taxa_desconto3;
        let salario_liquido = salario_bruto - desconto3;

        alert("Valor do desconto: " + desconto3);
            alert("O salario liquido é: " + salario_liquido);

}
}





somarNumeros();
contagem_nasa();
atividade_3();
atividade_4();
atividade_5();
atividade_6();
atividade_7();
atividade_8();
atividade_9();
atividade_10();
atividade_11();

