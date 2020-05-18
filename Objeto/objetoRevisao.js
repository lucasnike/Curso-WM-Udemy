// Coleção dinamica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
// Caso eu use esse metodo de instanciar um atributo só poderei acessalo dessa mesma forma
produto['marca do produto'] = 'LG'
console.log(produto.nome);
console.log(produto['marca do produto']);
produto.preco = 120
console.log(produto.preco);
console.log(produto);

// Como excluir um atributo de um objeto

delete produto['marca do produto']
console.log(produto);

const carro = {
    modelo: 'Gol',
    idade: 3,
    endereco: {
        rua: 'Estrada do golandim',
        numero: 136
    },
    condutor: [
        {
            nome: 'Lucas',
            cpf: 70019003463
        },
        {
            nome: 'ana',
            cpf: 85263541873
        }
    ],
    calcularValorDoSeguro(){
        return 'alda'
    }  
}
console.log(carro);
console.log("------------------------");
console.log();