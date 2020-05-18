// Usando o método concat

// O método concat ele concatena dois ou mais arrays, e também items aparte dos arrays, e retorna um novo
//  array com a junção das coisas que passei

const filhas = ['valeska', 'sibalena']
const filhos = ['Lucas', 'Rodrigo']
const todos = filhas.concat(filhos) // Concatenando um array
console.log(todos);

const todos2 = todos.concat('Fulano') // Concatenando um item separado de um array
//porém no caso acima nós geralmente usamos o método push()
console.log(todos2);

const todos3 = todos2.concat(['Alda', 'Geraldo'], 'Cleide') // Concatenando array e elemento independente
console.log(todos3);

const todos4 = todos3.concat([1, 2], [3, 4], 5, 6) // Adicionando n números de arrays e n elementos independentes
console.log(todos4);
const todosNumeros = todos4.filter(e => {
    return e < 100
})
console.log(todosNumeros);
