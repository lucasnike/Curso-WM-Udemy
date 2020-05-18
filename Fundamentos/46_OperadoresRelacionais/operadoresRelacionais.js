// O operador '==' compara sem levar em consideração a tipagem

console.log('1)', '1' == 1);

// O operador '===' compara levando em cosideração tudo que pode ser considerado diferente

console.log('2)' , '1' === 1);

// '!=' Compara sem considerar o tipo

console.log('3)' , '1' != 1);

// '!==' Compara considerando a tipagem

console.log('4)' , '1' !== 1);

const d1 = new Date(0)
const d2 = new Date(0)
console.log('5)' , d1 === d2);
console.log('6)' , d1 == d2);
console.log('7)' , d1.getTime() === d2.getTime());
console.log('8)' , undefined == null);
console.log('9)' , undefined === null);
console.log(d1.getDate() + '/' + d1.getMonth() + '/' + d1.getFullYear());