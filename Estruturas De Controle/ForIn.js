const notas = [8.6, 5.4, 9.9, 7.8, 8.1]
// Percorrer Vetores
for(let i in notas){
    console.log(`i = ${i}`);
}

const pessoa = {
    nome: 'Lucas',
    idade: 16,
    cpf: '70019003463'
}
// Percorrer objetos
for(let atributos in pessoa){
    console.log(`${atributos} = ${pessoa[atributos]}`);
}
console.log(pessoa['nome']);