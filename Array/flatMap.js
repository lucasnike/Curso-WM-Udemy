const escola = [
    {nome: 'Turma M1', alunos: [
        {
            nome: 'Gustavo',
            nota: 8.6
        },
        {
            nome: 'Lucas',
            nota: 9.0
        },
    ]},
    {
        nome: 'Turma M2',
        alunos: [
            {
                nome: 'Cleiton',
                nota: 7.5
            },
            {
                nome: 'Jussara',
                nota: 10
            }
        ]
    }
]

const getNotaDoAluno = e => e.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)
const notas1 = escola.map(getNotasDaTurma)
console.log([].concat(notas1[0], notas1[1]));

// Usando o flatMap

Array.prototype.flatMap(function(callBack){
    return Array.prototype.concat.call([], this.map(callBack))
})

const notas2 = escola.flatMap(getNotasDaTurma)
console.log(notas2);