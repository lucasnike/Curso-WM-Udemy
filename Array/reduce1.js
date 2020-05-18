const alunos = [
    {nome: 'Lucas', bolsista: true, nota: 99},
    {nome: 'Rodrigo', bolsista: false, nota: 82},
    {nome: 'Helem', bolsista: true, nota: 75},
    {nome: 'Ana', bolsista: false, nota: 92}
]

const resultado = alunos.map(e => e.nota).reduce(function(acumulador, atual){
    console.log('Valor acumulado:', acumulador, ' - Próximo valor do array: ', atual);
    return acumulador + atual
}, 1000);

console.log(resultado);

/**
 * O método reduce recebe uma função callBack que recebe quatro parâmetros:
 *  
 *  1º: O acumulador ou o elemento anterior
 *  2º: O elemento atual onde fará alguma operação com o elemeto anterior que é o 1º primeiro parâmetro
 *  3º: O indice do elemento atual, no caso o indice do 2º parâmetro da função callBack
 *  4º: O própio array onde isso será executado
 */