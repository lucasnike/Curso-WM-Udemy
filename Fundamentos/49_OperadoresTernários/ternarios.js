const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(resultado(8));
const soma = (a = 0, b = 0) => a > b ? 'A > B' : 'B > A'
console.log(soma(-1,1));
const calcula = (a,b,c) => c == '+' ? a + b : a - b 
console.log(calcula(10,5, '+'));