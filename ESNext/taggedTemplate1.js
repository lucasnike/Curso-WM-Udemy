// Tagged template - Processar uma template string dentro de uma função

function tag(partes, ...valores) {
    console.log(partes);
    console.log(valores);
    return 'Outra String'
}

const aluno = 'Guilherme'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao} dessa vez`);