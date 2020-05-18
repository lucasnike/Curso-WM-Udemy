const alunos = [
    {nome: 'Lucas', bolsista: true, nota: 99},
    {nome: 'Rodrigo', bolsista: false, nota: 82},
    {nome: 'Helem', bolsista: true, nota: 75},
    {nome: 'Ana', bolsista: false, nota: 92}
]

// Desafio 1 -Todos os alunos são bolsistas?

const resultado = alunos.map(e => e.bolsista).reduce(function(acumulador, atual){
    return acumulador && atual
})

console.log(resultado);

// Desafio 2 - Algum aluno é bolsista

const resultado2 = alunos.map(e => e.bolsista).reduce(function(acumulador, atual){
    return acumulador || atual
})

console.log(resultado2);