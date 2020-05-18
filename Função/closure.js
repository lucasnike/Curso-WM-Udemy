// Closure é um escopo que é criado quando uma função é declarado
// Esse escopo permite que a função acesse variáveis externas à função

// Contexto léxicom em ação

const x = 'Global'

function fora() {
    const x = 'Local'
    function dentro() {
        return x  
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao());
