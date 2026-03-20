function atividade_11(){
 
    let salario_bruto = parseFloat(prompt("Digite o salário bruto "));
    let taxa_desconto = 0.08;
    let taxa_desconto2 = 0.085;
    let taxa_desconto3 = 0.09;

   if( salario_bruto <= 1000){
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