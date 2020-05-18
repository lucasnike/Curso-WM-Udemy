// Implementando o reduce - Minha forma

Array.prototype.reduce2 = function(fun, num){
    const indiceInicial = num !== undefined ? 0 : 1
    let result = num || this[0]
        for(let i = indiceInicial;i < this.length; i++){
            result = fun(result, this[i], i, this)
        }
        return result
}

const nuns = [1, 2, 3]

console.log(nuns.reduce2((acumulador, atual) => {
    return acumulador + atual
}, 20));
