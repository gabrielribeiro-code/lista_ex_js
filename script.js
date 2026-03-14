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
somarNumeros();
contagem_nasa();
atividade_3();


