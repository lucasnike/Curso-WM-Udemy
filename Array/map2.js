const carrinho = [
    '{"nome":"Borracha", "preco": 3.45}',
    '{"nome":"caderno", "preco": 10.99}',
    '{"nome":"lapis", "preco": 1.50}',
    '{"nome":"caneta", "preco": 2.30}'
]

const arrayDePrecos = carrinho.map(e => {
    let obj = JSON.parse(e)
    return obj.preco
})

console.log(arrayDePrecos);