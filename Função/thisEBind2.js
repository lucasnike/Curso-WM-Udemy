// Metodo 1

// Chamar a function Bind(e passar o 'this' como parametro pra essa função)
// na função passada como parametro no set interval que recebe 
// oque fazer(functions) e quando fazer(numero em milisegundos)


function pessoa() {

    this.idade = 0,
    
    setInterval(function(){
    
        this.idade++;
        console.log(this.idade);
        
    }.bind(this), 1000)
}

new pessoa

// Método 2

// Armazenar o this numa constante antes de variar na função setInterval,
// e deois usar essa constante dentro da função setInterval
//             GENIAL!!!!

function person(params) {
    this.idade = 0;

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade);
    }, 1000)
}

new person


// Exemplo pesquisado na internet 1

let jantar = {
    ingredients: 'Bacon'
}

function preCook() {
    console.log(this.ingredients);
}

const cook = preCook.bind(jantar)
cook()

// Fim do exemplo 1

// Exemplo pesquisado na internet 2

// Direcionar o this sem o uso do método bind

let cook2 = function(){
    console.log(this.ingredients2);
}
// Crio a função cook2 e passo ela como parametro do meu atributo
// cook dinner, assim o this de função cook2 criada anteriormente 
// e passada como parametro de um atributo to meu objeto dinner
// vai referenciar o this no meu objeto dinner, onde está meu 
// atributo ingredients2 criado abaixo 
let dinner = {
    cookDinner: cook2,
    ingredients2:'Banana com leite condenado'
}

dinner.cookDinner()