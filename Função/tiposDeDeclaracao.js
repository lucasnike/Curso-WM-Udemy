// Eu posso executar uma function declaration antes de cria-la, pois o JS
// Primeiro carrega as funções e depois executa o código 
console.log('Antes da declaração: ' + soma(5,5));


// Function declaration

function soma(x,y) {
    return x + y
}



// No caso as outras funções não funcionaram antes de suas declarações porque
// elas estão armazenadas em const's, e seu valor só será atribuido no momento 
// da execução



// Function Expression

const soma2 = function(x, y){return x + y}

// Arrow Function 

const soma3 = (x, y) => x / y

// Function named expression

const mult = function mult(x, y) {
    return x * y
}

console.log('Depois da declaração: ' + soma(1,2));
console.log('Depois da declaração: ' +soma2(2,2));
console.log('Depois da declaração: ' + soma3(3,3));