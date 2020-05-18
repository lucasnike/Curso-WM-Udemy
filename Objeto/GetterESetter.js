// Usando Getter And Setter em JS

const sequencia = {
    // O uso do Underline no JS é uma convenção, isso que dizer que esse atributo 
    // só será acessado internamente pelo Objeto
    _valor: 1 ,
    get valor(){
        return this._valor;
    },
    set valor(valor){
        if (this._valor < valor) {
            this._valor = valor
        }else{
            return 'Insira um valor maior do que o atual';
        }
    }
}

sequencia.valor = 1000
console.log(sequencia.valor);
sequencia.valor = 800
console.log(sequencia.valor);