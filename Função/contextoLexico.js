const valor = 'Global'
function minhaFuncao() {
    console.log(valor);
}
minhaFuncao()
// Nesse exemplo nos chamamos minhaFuncao() dentro da funcao exe() e criamos uma const
// com o mesmo nome 'valor' da const do contexto global, mas ela ao executar minha função 
// ele verifica se há aquela const dentro da função minhaFuncao() e depois procura no 
// contexto global, ela não procurara na função onde foi chamada 
function exec() {
    const valor = 'Local'
    minhaFuncao()
}
exec()

// Exemplo 2

const obj = {
    valor: 'Objeto',
    show(){
        console.log(valor);
    }
}
obj.show()