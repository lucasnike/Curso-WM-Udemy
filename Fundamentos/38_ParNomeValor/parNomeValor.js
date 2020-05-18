// Par nome/valor
const saudacao = 'olá' // Contexto léxico 1
console.log(saudacao);
function exec(){
    const saudacao = 'Falaa!' // Contexto léxico 2
    return saudacao
}
console.log(exec());

// Objetos são grupos aninhados de pares nomes/valor

const cliente = {
    nome: 'Lucas',
    idade: 16,
    peso: 90,
    endereco: {
        cep: 59296274,
        rua: 'Estrada do golandim',
        numero: 136
    }
}
console.log(cliente);
console.log(cliente.endereco);