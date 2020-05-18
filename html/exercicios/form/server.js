const express = require('express')
const bodyParser = require('body-parser')
const port = 3003

const app = express()

// O body-parser faz um parse no corpo da requisição transformando do padrão urlencoded para um objeto com chave e valor, onde o chave é vem do que eu passei no atributo name= da minha tag <form> e o valor vem da minha tag <input>
app.use(bodyParser.urlencoded({extended: true}))
// O objeto usando o metodo post vem no body da requisiçao e usando o método get ele vem no query              
app.post('/usuarios' ,(req, res) => {
    console.log(req.body);
    res.send('<h1> Parabéns você foi cadastrado</h1>')
})
app.post('/usuarios/:id' ,(req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    res.send('<h1> Parabéns seu cadastro foi alterado</h1>')
})

app.listen(port)