// let e const

// O var tem escopo global e de função então ele só será contido caso esteja numa função ou dentro de um modulo qualquer

// Já o let tanto tem escopo global, de função, de blocos, de condicionais if, laços for e até em um bloco solto no código como no exemplo abaixo
{
    var a = 2
    let b = 3
    console.log(b);
}

console.log(a);

// Template String

const produto = 'Ipad'
console.log(`O seu ${produto} custa R$ 5000,00`);

// Destructuring

// Desestruturando array com três postos para pegar todo o resto e colocar num array
const [l, e, ...tras] = 'Cod3r'
console.log(l, e, tras);

// Desestruturando array normalmente
const [x, y] = [1, 2]
console.log(x, y);

// Pulando um indice do array ao desestruturar
const [x1, , z3] = [3, 4, 5]
console.log(x1, z3);

// Quando desestruturando um obj caso as variáves tenham o mesmo nome a sequência de aquisição não importa
const {idade, nome} = {nome: 'Lucas', idade: 16}
console.log(nome, idade);

// Caso eu queira renomear a variável é só colocar dois pontos(:) e o novo nome, assim: {nome: meuNome}
const {idade: i, nome: n} = {nome: 'Alda', idade: 50}
console.log(i, n);