// Armazenando uma função em uma variável
const imprimirSoma = function(a , b){
    console.log(a + b);
}
imprimirSoma(2 , 3)
// Armazenando uma função arrow em uma variável
const soma = (a = 0, b = 0) => {
    return a + b;
}
console.log(soma(13));

// Retorno implicito armazenado numa variável

const subtracao = (a = 0, b = 0) => a - b
console.log(subtracao(8, 2));

console.log('A raiz de 4 é = ' + Math.sqrt(4));