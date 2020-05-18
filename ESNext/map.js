// O map é uma estrutura de dados que simula um objeto, só que mais flexível do que o objeto padrão

const tecnologias = new Map()

// O método set recebe dois parâmetros 1º Chave e o 2º Valor, para formar o comjunto chave e valor 
tecnologias.set('React', {framework: false})
tecnologias.set('Angular', {framework: true})

console.log(tecnologias.react);// Não funciona retorna undefined

console.log(tecnologias.get('Angular'));

// Para passar as chaves e os valores na hora da criação devo passar um array com parametro na instância new Map([]) e dentro desse array eu coloco outros arrays de duas posições onde a primeira posição é a chave e a segunda é o valor, como no exemlo abaixo: 
const chavesVariadas = new Map([
    [function(){}, 'Função'],
    [{}, 'Objeto'],
    [123, 'Numero']
])

// O metodo forEach de uma instância de Map como no exemplo abaixo, recebe dois parâmetros, o valor e depois a chave, daí posso manipula-los como eu quiser os recebendo como parâmetro
chavesVariadas.forEach((value, key) => {
    console.log(key, value);
})

// O método has recebe o valor de uma chave como parâmetro, e retorna se esse valor existe nesse Objeto do tipo Map
console.log(chavesVariadas.has(123));
chavesVariadas.delete(123)// Recebe o valor de uma chave e deleta ela
console.log(chavesVariadas.has(123));

console.log(chavesVariadas.size); // É uma propiedade que armazena a quantidade de elementos do Objeto

// Num objeto map eu posso ter valores iguais mas nunca chaves iguais então caso eu coloque uma chave existente ele substituirá
chavesVariadas.set(123, 'a')
chavesVariadas.set(123, 'b')
console.log(chavesVariadas);