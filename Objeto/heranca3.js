const pai = {
    nome: 'pedro',
    corCabelo: 'Preto'
}
const filho1 = Object.create(pai)
filho1.nome = 'Juão'
console.log(filho1.nome,' dos cabelos', filho1.corCabelo);

const filho2 = Object.create(pai, {
    nome: {value: 'Carlos', writable: false, enumerable: true}
})

console.log(filho2.nome);
filho2.nome = 'Lucas'
console.log(filho2.nome, 'de cabelos ', filho2.corCabelo);

/*
    O método Object.keys() retorna um array de propriedades enumeraveis de um determinado objeto, na mesma ordem em que é fornecida por um laço for...in (a diferença é que um laço for-in  enumera propriedades que estejam na cadeia de protótipos).
*/

console.log(Object.keys(filho1));
console.log(Object.keys(filho2));

// Object.getOwnPropertyNames(obj) mostra todas as propriedades de um objeto mesmo que esta não seja enumaravel

console.log(Object.getOwnPropertyNames(filho2));

// O for-in lista todas as propriedades inclusive as dos seus protótipos, só não lista se enumerable = false
console.log("\n");
for (let key in filho2) {
    /*
        O método obj.hasOwnProperty(nomeDaPropiedade) verifica se a propiedade que está sendo passada como parametro é do própio objeto ou se é herdado de seu protótipo
    */
    filho2.hasOwnProperty(key) ?
        console.log(`Propiedade do própio objeto: ${key}`) : console.log('Por herança: ' + key);    
}
