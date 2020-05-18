// Implementando o map - Minha forma

Array.prototype.map2 = function(fun){
    let newArray = []
    for (let i = 0; i < this.length; i++) {
       newArray.push(fun(this[i], i, this))
    }
    return newArray
}

let alda = [1,2,3]
alda = alda.map2((e, i) => {
    return `Posição ${i + 1} = ${e + 1}`
})

console.log(alda);
