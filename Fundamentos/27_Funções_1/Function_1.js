// Função sem retorno
function imprimirSoma(nome, sobre){
    console.log(nome + sobre);
}
imprimirSoma(2,5)
//Função com retorno
function somar(a = 0, b = 0) {
    return a + b;
}
console.log(somar(12,8));
console.log(somar(12));