const pilotos = ['Vettel', 'Alonso', 'Hummels', 'Cloney']

pilotos.push('Hamilton') // Adiciona novo elemento ao array

console.log('Hamiltom adicionado: ' ,pilotos);

pilotos.pop() //Remove o último elemento do array

console.log('Hamilton removido: ' ,pilotos);

pilotos.shift() // Remove o primeiro elemento do array

console.log('Vettel removido: ' ,pilotos);

pilotos.unshift('Vettel') // Adiciona um elemento na primeira posição do array

console.log('Vettel adicionado: ' ,pilotos);

/**
 * O método pilostos.splice(A, B, arguments) funciona da seginte maneira: O valor de 'A' representa o número 
 * do indice que eu vou começar a remover; E 'B' representa o número de elementos que vou remover, então caso
 * eu coloque (A = 0, B = 2) significa que vou começar a remover do elemento 0('Vettel') sendo que vai ser dois 
 * elementos no caso ele apagará ('Vettel' e 'Alonso'), e o arguments vai ser os elementos que serão colocados
 *  no lugar dos removidos(posso não passar os arguments então ele só eliminará)
 * 
 * Caso 'B' = 0 o método não remove ningém, mas caso tenha o arguments ele adiciona elementos no meio do array
 * se deletar nada
 * 
 * Caso o meu 'A' seja o ultimo elemento do array e 'B' > 1 o método removerá apenas os ultimo elemento
 */

 pilotos.splice(2, 0, 'Lucas') //Adicionando elementos com splice

 console.log('Lucas adicionado na terceira posição: ' ,pilotos);

 pilotos.splice(2, 2) // Removendo elementos com o splice

 console.log('Lucas e Hummels removidos: ' ,pilotos);

/**
 * O método slice retira uma fatia de um array onde pode receber dois números como parâmetro
 * 
 * 1º Número: indica a partir de qual indice eu quero fatiar meu array, e o elemeto do indice passado como
 * parâmetro entra no novo array
 * 
 * 2º Número: indica até qual elemento eu quero fatiar esse array, e o elemento do indice passado como 
 * parâmetro não entra no novo array () Por Exemplo se eu tenho um array com 5 elementos e eu quero um
 * novo array com o primeiro elemento e o terceiro eu faço vetor.slice(0,3)
 * 
 * E caso eu não passe o segundo número ele cortará o array até o último elemento
 */

const algunsPilotos = pilotos.slice(1) 


console.log('\n',algunsPilotos);

const algunsPilotos2 = pilotos.slice(0,2)

console.log(algunsPilotos2);

