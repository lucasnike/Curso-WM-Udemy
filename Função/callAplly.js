// O this numa função acessa o escopo global, e não o da função onde está inserido

function getPreco(imposto = 0, moeda = 'R$') {
    return `${moeda} ${this.preco * (1 - this.desc) * (1 + imposto)}`
}

const produto = {
    nome: 'Notebook',
    preco:  4589,
    desc: 0.15,
    getPreco
}
// Se eu quiser chamar a função getPreco diretamente eu devo iniciar as variaveis dessa forma:
global.preco = 120
global.desc = 0.15
console.log(getPreco());
console.log(produto.getPreco());
// Os métodos call e aplly ambos executam a função e dentros dos seus parenteses eu coloco o objeto 
// que será usado como contexto para a execução desta função
const carro = {preco: 100000, desc: 0.2}
console.log(getPreco.call(carro));
console.log(getPreco.apply(carro));

// Passando os parametros do call

// No call primeiro eu passo o contexto da execução, depois os parametros requisitados pela função
console.log(getPreco.call(carro, 0.20, '$'));

// No apply eu passo primeiro o contexto de execução, e depois os parametros num array
console.log(getPreco.apply(carro, [0.20,'%']));