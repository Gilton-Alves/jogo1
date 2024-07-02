alert('Bem vindo ao Jogo do Gilton');
// let é a variavel
let numeroMaximo = 1000; 
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// OPERADOR DE COMPARAÇÃO != (ñ é igual), == (igual), > (maior) )
// while significa enquanto ex.: enquanto o chute não for igual ao n.s
while(chute != numeroSecreto ){
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    // o If na linguaguem é uma condição (se)
    if(chute == numeroSecreto) {
        break;
    } else {
        if(chute > numeroSecreto) {
            alert(`O número é menor que ${chute}`);
    } else{
        alert(`O número é maior que ${chute}`);
        // para somar +1 usa ++, é a mesma coisa que tentativas = tentativas + 1;
        tentativas++;
    }
}
}
// operador ternário
let palavraTentativa = tentativas > 1 ? `tentativas` : `tentativa`;
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa} `);


//if (tentativas > 1){
//alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`)
//} else {
//alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}