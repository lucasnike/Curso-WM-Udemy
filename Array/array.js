// 1º Forma de criar um array

let aprovados = new Array('Vitória', 'Rodrigo', 'Lucas')
console.log(aprovados);

// 2º Forma de criar um array

aprovados = ['Vinicius', 'Renan', 'Claudio']
console.log(aprovados);
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // Se o elemento não existir ele retorna undefined

aprovados[3] = 'Hey jude'
aprovados.push('Dont Make it bad')

console.log(aprovados.length);

aprovados[9] = 'Rafael'//Caso eu coloque algo em um elemento posterior os indices entre eles ficam undefined

console.log(aprovados.length);
console.log(aprovados);
aprovados.sort() // array.sort() Altera o array o deixando ordenado
console.log(aprovados);

delete aprovados[0] // Quando algo é deletado de um array a posição recebe undefined e o array não é reordenado, assim o array terá um valor vazio no meio

console.log(aprovados);

aprovados = ['Bia', 'Carlos', 'Ana']
/**
 * O método aprovados.splice(A, B, arguments) funciona da seginte maneira: O valor de 'A' representa o número 
 * do indice que eu vou começar a remover; E 'B' representa o número de elementos que vou remover, então caso
 * eu coloque (A = 0, B = 2) significa que vou começar a remover do elemento 0('Bia') sendo que vai ser dois 
 * elementos no caso ele apagará ('Bia' e 'Carlos'), e o arguments vai ser os elementos que serão colocados no 
 * lugar dos removidos(posso não passar os arguments então ele só eliminará)
 * 
 * Caso 'B' = 0 o método não remove ningém, mas caso tenha o arguments ele adiciona elementos no meio do array
 * se deletar nada
 * 
 * Caso o meu 'A' seja o ultimo elemento do array e 'B' > 1 o método removerá apenas os ultimo elemento
 */
aprovados.splice(1, 1, 'Lucas', 'Bolsonaro') 
console.log(aprovados);