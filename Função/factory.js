function criarProduto(nome, valor) {
    return {
        nome,
        valor,
        cont: 0,
        darDesconto(){
            if (this.cont === 0) {
                this.valor = this.valor * (1 - 0.1)
                this.cont++
                return this.valor 
            }else{
                return 'O desconto só pode ser dado uma vez, preco = ' + this.valor
            }
        }
    }
}

const b = criarProduto('Brinquedo', 100)
console.log(b.valor, b.nome );
console.log(b.darDesconto());
console.log(b.darDesconto());

