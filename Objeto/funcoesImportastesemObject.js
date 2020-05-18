const pessoa = {
    nome: 'Jenifer',
    idade: 25,
    peso: 69
}

// O método Object.keys(obj) retorna um array com todas as chaves do objeto
// isso é: um array com todos os nomes dos atributos

console.log(Object.keys(pessoa));

// O método Object.values(obj) retorna um array com todos os valores dos 
// atributos de um objeto

console.log(Object.values(pessoa));

// O método Object.entries(obj) retorna um array com arrays de duas posições
// representado array[0] = chave && array[1] = valor

console.log(Object.entries(pessoa));

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave} : ${valor}`);
})

// O método defineProperty é usado para definir uma propriedade de um objeto
// eu posso colocar a propriedade diretamente com obj.property = '...'
// Mas com Object.defineProperty eu posso definir algumas regras dessa
// propiedade, como: 
// enumerable : se ela pode ser listada, ou enumerada
// writable : se ela pode ser modificada
// value: passando o seu valor

Object.defineProperty(pessoa, 'dataDeNascimento', {
    enumerable: true,
    writable: false,
    value: '13/05/2003',
})
pessoa.dataDeNascimento = 'Alda'
console.log(Object.keys(pessoa));

// Object.assign() (ECMAScript 2015)

const destino = {a: 1}
const o1 = {b: 1}
const o2 = {a: 4, c: 5}

// O método Object.assign(destino, oj1, obj2, objN), concatena todos os objetos passados como parâmetro
// no primeiro objeto passado como parâmetro, caso haja alguma propiedade repetida, o valor dessa
// propiedade será a do ultimo objeto que tenha essa propiedade, no caso ele será sobescrito

const obj = Object.assign(destino, o1, o2)

console.log(obj);

// Object.freeze congela as propiedades de um objeto, logo torna seus atributos private

Object.freeze(obj)
obj.a = 2
obj.d = 5
obj.t = 8
console.log(obj);