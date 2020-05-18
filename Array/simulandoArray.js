const quaseArray = {
    0: 'Rafael',
    1: 'Ana',
    2: 'Bia',
}

console.log(quaseArray);

console.log(Object.values(quaseArray)); // Mostra os valores das propiedades de um objeto

Object.defineProperty(quaseArray, 'toString', {
    value: function(){
        return Object.values(this)  
    },
    enumerable: false,
    writable: true,
    configurable: true
})

console.log(quaseArray[0]);

const nomes = ['Rafael', 'Ana', 'Bia']

console.log(nomes, quaseArray.toString());
