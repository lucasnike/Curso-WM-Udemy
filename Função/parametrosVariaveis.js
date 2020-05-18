function soma() {
    let soma = 0;
    // Arguments é um array que contem tudo que foi passado na função
    // mesmo que eu não requisite nenhum parametro na sua criação, eu
    // ainda posso passar coisas pra essa função e essas coisas serão
    // armazenadas nesse array arguments
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}
console.log(soma());
console.log(soma(1));
console.log(soma(1,2,3,5));
console.log(soma('Olá ', 'meu ', 'nome ', 'é Lucas!!!').substring(1));