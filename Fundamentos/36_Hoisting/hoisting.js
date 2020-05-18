console.log('a = ', a);
var a = 2
console.log('a = ', a);
// Se eu tentar usar uma variável não instanciada o javaScript não retorna erro mas sim atribui undefined

// Dentro de uma função se aplica a mesma coisa
function test() {
    console.log('b = ', b);
    var b = 4
    console.log('b = ', b);
}
test()

//Com o let isso não pode ser feito, a variável só pode ser usada depois de instânciada

console.log('c = ', c);
let c = 3
console.log('c =', c);