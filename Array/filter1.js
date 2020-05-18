const produtos = [
    {nome: 'notebook', preco: 2999.99, fragil: true},
    {nome: 'IPad Pro', preco: 9500.00, fragil: true},
    {nome: 'Copo de vidro', preco: 5, fragil: true},
    {nome: 'Copo de plastico', preco: 2, fragil: false}
]

// Caso eu retorne false o array vai ficar vazio já que o lógica do filter é a seguinte:

    // Se o resultado da operação lógica === true o filter adiciona no array
        // se for false ele não adiciona

// Então caso eu retorne direto o false sem uma operação logica ele não adiciona nada ao array
// Se retorna true adicionará todos os elementos

console.log(produtos.filter(p =>  false));

console.log(produtos.filter(e => e.preco > 200)); // Preço acima de 200

console.log(produtos.filter(e => e.fragil === false)); // Produtos não frágeis

console.log(produtos.filter(function(e){ // Produtos com preço abaixo de 10 e frágil === true
    return e.preco < 10 && e.fragil === true
}));

console.log(produtos.filter(e => e.preco >= 500 && e.fragil === true)); // Produtos frágeis e caros(> 500)

// Exatamente igual o ForEach, Map, o filter também recebe três parâmetros na função callBack
//  o (elemento do array, o indice daquele elemento, o próprio array)