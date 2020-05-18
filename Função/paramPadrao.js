// Estratégia 1 para gerar valor padrão

// Essa estratégia é ruim pois caso eu passe 0 como parametro ele considera como false e não true
// e depois seta o valor 1 neles retornando 1+1+1 == 3 intead of 0+0+0 == 0
function f(a, b, c) {
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(f(), f(3), f(1, 2, 3), f(0,0,0));

//Estratégia 2, 3, 4 para gerar valor padrão

function f2(a, b, c) {
    a = a !== undefined ? a : 1
    b = 1 in arguments ? b : 1
    // isNaN() é uma função que retorna um valor booleano, que true significa que não é um número e 
    // false significa que é um número, pois NaN = Not a Number
    c = isNaN(c) ? 1 : c
    return a + b + c
}
console.log(f2(), f2(3), f2(1, 2, 3), f2(0,0,0));

// Valor padrão do Ecma Script 2015 /// Obs: Use essa Lucas

function f3(a = 1, b = 1, c = 1) {
    return a + b + c
}
console.log(f3(), f3(3), f3(1, 2, 3), f3(0,0,0));
