function comparaNumeros(a,b){
    if (a === b){
        console.log(`Os números ${a} e ${b} são iguais. \n`);
    }
    else{
        console.log(`Os números ${a} e ${b} não são iguais. \n`);
    }
    
    let soma = a + b;
    console.log(`Sua soma é ${soma}.\n`);

    if (soma > 20){
        console.log('É maior que 10, e é maior que 20');
    }
    else if(soma <= 20 && soma > 10){
        console.log('É maior que 10, e é menor que 20');
    }
    else{
        console.log('É menor que 10, e é menor que 20');
    }
}

comparaNumeros(10,65);