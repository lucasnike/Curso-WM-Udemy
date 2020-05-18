const fs = require('fs')

const path = __dirname + '/arquivo.json'

// Sincrono:

const conteudo = fs.readFileSync(path, 'utf-8')
console.log(conteudo);

// Assincrono:

fs.readFile(path, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}: ${config.db.port}`)
})

// Caso eu queira ter diretamente o objeto do arquivo JSON eu armazeno numa constante o resultado de [require('caminhoDoArquivoJSON')] o resultado disso será um objeto já convertido, e a extensão JSON sempre tem que ser especificada pois a padrão do JavaScript é a .js, que não precisa ser especificada, como no exemplo abaixo:

const config = require('./arquivo.json')
console.log(config.db);


console.log('\n-------------------------------------\nCaminho do diretório e arquivo atual:\n');
console.log(__dirname);
console.log( __filename);
console.log('\n-------------------------------------\n');

// Assincrono

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta: ');
    console.log(arquivos);
})

// O __dirname é uma constante que existe em todos os módulos do node, que representa o caminho do diretório atual em uma string

// O __filename é uma constante que existe em todos os módulos do node, que representa o caminho do arquivo atual em uma string