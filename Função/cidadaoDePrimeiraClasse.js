//Função em JS é First-Class Object (Citizens)
// Higher-Order Function 


// Criar função de forma literal

function f1(){
    // Caso eu não chame o return, por padrão será retornado undefined nessa função
    console.log('Executando');
}

// Armazenar numa variável

const f2 = function(){}

// Armazenar num array

const array = [function(a, b){return a + b}, f1, f2]
console.log(array[0](1, 9));

// Armazenar num atributo de um Objeto

const obj = {}
obj.falar = function(nome) {return nome}
console.log(obj.falar('Alda'));

//  passar função como parametro de outra funçao


function f3(fun) {
    fun()
}

f3(function(){console.log('Executando ...');})

// Retornar uma funão numa função

function soma(a, b) {
    return function (c) {
        return a + c + b
    }
}

console.log(soma(3, 4)(3));