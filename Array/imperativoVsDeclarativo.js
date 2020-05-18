const alunos = [
    {nome: 'Lucas', nota: 90},
    {nome: 'Juão', nota: 83}
]

// Abordagem imperativa

let total = 0
for(let i = 0; i < alunos.length; i++){
    total += alunos[i].nota
}
console.log(total / alunos.length);

// Abordagem declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
let total1 = alunos.map(getNota).reduce(soma) / alunos.length
console.log(total1);