// Minha implementação do forEach

Array.prototype.forEach2 = function(fun){
    for(let i = 0; i < this.length; i++){
        fun(this[i], i, this)
    }
}

const aprovados = ['Lucas', 'Rodrigo']
aprovados.forEach2((nome, indice, arr) => console.log(`Índice ${indice + 1}: ${nome}, [ ${arr} ]`))