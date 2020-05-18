// Arrow function

// Fazendo arrow function de única linha com dois ou mais parâmetros
const soma = (a, b) => a + b
console.log(soma(1,2));

// Pra funções de parâmetros únicos não é necessário o uso de pareteses para delimita-los
const saudacao = nome => `Bom dia ${nome}`
console.log(saudacao('Lucas'));

// Arrow function (this)


// Dessa forma dentro de uma arrow function como fora dela o this aponta para o module.exports ou exports
const lexico1 = () => console.log(this === module.exports);
lexico1()

// Mesmo usando o método bind() ou call() as funções arrows sempre apontam para o mesmo lugar: exports
const lexico2 = lexico1.bind({})
lexico2()

// Já nas funções normais o this aponta para o global dessa forma:
function lexico3() {
    console.log(this === global);
}
lexico3()

//E também nas funções normais eu posso mudar pra onde o this aponte por meio das funções bind() e call() 
const lexico4 = lexico3.bind({})
lexico4()


/** OBS:
 * O array function sempre será uma função anônima, assim para usa-la eu tenho que armazenala em uma
 * const ou em uma (var/let)
 */


// Parâmetro default de uma função

// Caso eu não passe parâmetro eu posso setar qual vai ser o parâmetro padrão para aquela função
const anyFunction = (nome = 'Lucas') => console.log('Olá', nome);
anyFunction()
anyFunction('Sou mais forte')


// Operador rest

// Qunado usado como parâmetro de uma função como no exemplo abaixo, ele retornará todos os parâmetros passados dentro de um array, e aí posso manipula-los da maneira que eu quiser
function total(...numbers) {
    let total = 0
    numbers.forEach((n) => total += n)
    return total
}
console.log(total(1,2,3,4,5));