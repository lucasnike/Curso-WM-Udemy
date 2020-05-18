const geradorDeAleatoriosNumIntervalo = function (inicial, final){
    let a = Math.random() * (final - inicial) + inicial
    return Math.floor(a)
}

console.log(geradorDeAleatoriosNumIntervalo(10, 20));