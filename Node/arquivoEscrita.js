const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1500.65,
    desconto: 0.1,
    ano: 2020
}

// O método writeFile() recebe três parâmetros, o caminho com o nome do arquivo que vai ser gerado para a escrita do objeto especificando sua extensão, o conteudo que vai ser escrito, e uma função callBack que tem o parâmetro erro caso ocorra algum

fs.writeFile(__dirname + '/arquivoGeradoPeloNode.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo');
})
