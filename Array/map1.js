let nuns = [1,2,3,4,5]

// O método map modifica cada um dos elementos, e o valor retornado pela função é o que será armazenado 
// na posição onde ele estiver percorrendo

nuns = nuns.map(function (e){
    return e * 2
})

/**
 * Por padrão o método map retorna um novo array com as modificações que eu passei na função
 * e esse novo array sempre terá o mesmo tamanho do array original
 */

console.log('Array com todos os elementos vezes 2: ' , nuns);

/**
 * Diferença entre forEach e map:
 * 
 * forEach:
 *      Só pode percorrer o array sem fazer modificações, e a função passada não precisa de um
 *          return
 * map: 
 *      Percorre um array fazendo modificações, essa modificação é feita a partir do retorno 
 *          da função passada como parâmetro, e retorna um novo array com as modificações feitas
 */

 nuns = nuns.map(function(e){
    if (e != 10) {
        return e * 2
    } else {
        return e * 1
    }
 })
 
console.log('Array com todos os elementos multiplicados por 2 menos o 10: ', nuns);

// ------------------------------

const soma10 = nuns.map(e => e + 10)
const triplo = nuns.map(e => e * 3)
const paraDinhheiro = nuns.map(e => `R$ ${e.toFixed(2).replace('.', ',')}`)
console.log('Array com 10 somado em cada elemento: ' ,soma10);
console.log('Array com todos os elementos multiplicados por 3: ', triplo);
console.log('Array com notação de dinheiro: ', paraDinhheiro);

// Assim como o forEach a função passada com parâmetro paro o método map recebe três parâmetros
// que são (Elemento do array, indice do elemento, o própio array)
