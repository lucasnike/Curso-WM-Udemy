// Implementando o método filter - Meu Jeito

Array.prototype.filter2 = function(fun){
    let newArray = []
    for (let i = 0; i < this.length; i++) {
        fun(this[i], i, this) ? newArray.push(this[i]) : this
    }
    return newArray
}

const numeros = [12 , 10, 5 ,60, 2]

let novo = numeros.filter2(e => e >= 10)

console.log(novo);