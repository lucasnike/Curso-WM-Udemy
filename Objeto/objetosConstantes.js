// Um objeto pode ser armazenado numa constante
// e depois podemos mudar seus atributos pois
// não mudamos o endereço da memoria onde esse 
// objeto aponta, nós só não podemos atribuir outro 
// objeto à essa const
const pessoa = {nome: 'João'}
console.log(pessoa.nome);
pessoa.nome = 'Lucas'
console.log(pessoa.nome);
// pessoa = {nome: 'Lucas', idade: 16}
// console.log(pessoa); => return (error)

// Se eu quiser que um objeto não seja alterado eu posso fazer issso

Object.freeze(pessoa)
pessoa.nome = 'Aldão'
console.log(pessoa.nome);

// Com o Object.freeze, a partir dessa linha de código eu não posso 
// fazer mais nada nesse objeto, a não ser olhar os valores