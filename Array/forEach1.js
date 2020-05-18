const aprovados = ['L. Vinicius', 'Hérick', 'Társis', 'L. Mateus']

/**
 * O método forEach de um array é usado para percorre-lo,onde esse método recebe uma função que,
 *  recebe dois parâmetros:
 * 
 * O primeiro parâmetro representa um valor do array e o segundo representa o indice que está ligado
 * à aquele valor
 * 
 * Esses parâmetros quem passa é o método forEach e começam com o índice 0 e consequentemente o valor
 * que está armazenado nesse índice
 */

aprovados.forEach(function(nome, indice){ 
    console.log(`Indice ${indice + 1}: ${nome}`);
})
console.log();

//-------------------------------------

aprovados.forEach(nome => {console.log(nome);}) // Passando apenas um parâmetro para a funçao
console.log();

// -------------------------------------

const exibirAprovados = nome => console.log(nome, '-');
aprovados.forEach(exibirAprovados) // Passando função que está armezenada numa variável

console.log();

// -------------------------------------

// Na verdade a função passada como parâmetro pro método forEach tem três parâmetro e o terceiro é o própio array, () veja:

aprovados.forEach((nome, indice, array) => {
    console.log(array);
})

// E caso eu passe um quarto parâmetro ele terá valor undefined