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