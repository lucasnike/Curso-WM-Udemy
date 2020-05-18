// Object.preventExtensions()

/*
    O Object.preventExtensions() é uma função usada para que um objeto não possa receber novas propiedades,
    porem pode ser removido e alterado só não adicionado
*/
const produto = Object.preventExtensions({
    name: 'Any', price: '1.99', tag: 'promoção'
});

console.log(produto);
//A função isExtensible testa se o objeto foi criado com a funçao Object.preventExtensions() ou não, se foi o retorno é false e se não o retorno é true
console.log('Extensível: ' ,Object.isExtensible(produto));

produto.name = 'Borracha' // Tentativa de Alterar propiedade - True
produto.descricao = 'Apaga grafith' // Tentativa de adicionar propiedade - False
delete produto.tag // Tentativa de deletar propiedade - True
console.log(produto);
// ---------------------------------

console.log();


// Object.seal()

/**
 * Object.seal() é uma função usada para que os atributos do objeto não possam ser nem removidos e nem
 * adicionados, porem podem ser alterados
 */

const pessoa = {
    nome: 'Lucas',
    idade: 16
}
Object.seal(pessoa)
console.log(pessoa);
console.log('Selado: ', Object.isSealed(pessoa));
pessoa.cpf = 'Meu Cpf' // Tentativa de adicionar propiedades - False
delete pessoa.idade // Tentativa de deletar uma propiedade - False
pessoa.idade = 20 // Tentativa de alterar uma propiedade -True
console.log(pessoa);


// ---------------------------

console.log();



// Object.freeze() = Selado + Propiedades constantes

// Faz com que as propiedades de um objeto não possam ser deletadas, alteradas e nem removidas 

const carro = {
    qtdRodas: 4,
    velMax: 220
}
Object.freeze(carro)
console.log(carro);
console.log('Congelado: ' ,Object.isFrozen(carro));

carro.velMin = 0 // Tentativa de adicionar propiedade - False
carro.qtdRodas = 2 // Tentativa de alterar propiedade - False
delete carro.velMax // Tentativa de deletar propiedade - False

console.log(carro);