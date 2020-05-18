const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

// O node faz cach, então como eu importei dois objetos iguais eles receberam o mesmo valor ao serem imcrementados, por exemplo eu incrementei no contadorA e o contadorB também recebeu seu valor

contadorA.incrementar()
contadorA.incrementar()

console.log('Valor do contador B: ' + contadorB.valor);

// Já o contador C e D tem valores diferentes pois eu exportei uma factory function e a excutei quando a importei nese arquivo, assim recebendo objetos diferentes

contadorC.incrementar()

console.log('Valor do contador D: ' + contadorD.valor);
console.log('Valor do contador C: ' + contadorC.valor);