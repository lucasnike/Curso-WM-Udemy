// Uma função factory é uma função que retorna um objeto

// Forma ineficiente

const produto1 = {
    nome: '...',
    preco: 12
}

// Criar um por um é uma forma ineficiente de escrever esse código

const produto2 = {
    nome: '...',
    preco: 20
}

// Função Factory

function geradorDeProdutos(nome , preco) {
    return {
        nome: nome,
        preco: preco
    }
}

const celular = geradorDeProdutos('SmartPhone Galaxy', 1000)
console.log(celular.nome, celular.preco);