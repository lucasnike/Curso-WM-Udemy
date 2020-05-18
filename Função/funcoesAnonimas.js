const soma = function(a, b){
    return a + b
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a, b));
}

imprimirResultado(3,5)
imprimirResultado(5,5, soma)
imprimirResultado(6,6, function(a,b){
    return a - b
})
imprimirResultado(7,4, (x, y) => x * y)

const pessoa = {
    falar: function(){
        console.log('Hello');
    },

    dizerOi(){
        console.log('Java')
    }
}

pessoa.falar()
pessoa.dizerOi()