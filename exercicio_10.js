function atividade_10(){


    let nome_funcionario = prompt("Digite o nome do funcionário ");
    let salario_bruto = parseFloat(prompt("Digite o salário bruto "));
    let taxa_desconto = 0.08;
    let desconto = salario_bruto * taxa_desconto;
    let salario_liquido = salario_bruto - desconto;

        
        alert("A taxa de desconto do INSS é de 8%");
alert("Nome: " + nome_funcionario);
alert("Salario_bruto: " + salario_bruto);
alert("Valor do desconto: " + desconto);
alert("O salario liquido é: " + salario_liquido);
}
