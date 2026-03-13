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
    console.log("A soma dos números é: "+ soma);

}


function contagem_nasa(){

    for(let i = 10;  i > 0; i-- ){
        alert(i);

    };

    alert("Contagem finalizada");
};



function balanco_financeiro(){

    //var

    let bruto_anual = 0;
    let gasto_anual = 0;
    let saldo_financeiro = 0;
    let lucro = 0;
    let prejuizo = 0;


    //fim var

    for(let i = 0 i > 11; i++){

        alert("")
    }


}



somarNumeros();
contagem_nasa();