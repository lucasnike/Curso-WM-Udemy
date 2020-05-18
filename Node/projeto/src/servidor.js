const port = 3003
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const dataBase = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true})) // O bodyparser vai verificar todas as requisições Caso o padrão do envio das informações seja urleconded, ele vai converter para um objeto para ser usado

app.get('/produtos', (req, res, next) => {
   res.send(dataBase.getProdutos()) // Quando eu mando algum objeto como resposta de uma requisição automaticamente ele é convertido para JSON
})

app.get('/produtos/:id', (req, res, next) => {
    res.send(dataBase.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = dataBase.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = dataBase.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco,
        id: req.params.id
    })
    res.send(produto)
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = dataBase.excluirProduto(req.params.id)
    res.send(produto)
})

app.listen(port, _ => {console.log(`Servidor está executando na porta ${port}`);})