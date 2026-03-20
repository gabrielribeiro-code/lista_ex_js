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