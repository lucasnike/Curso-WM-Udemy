let notas = [7.7,6.5,9.0,8.5,10.0,9.5,5.4]

const imprimir = a => console.log(a);

// Sem callBack

let notasBaixas = []

for(let i in notas){
    if (notas[i] < 7) {
        notasBaixas.push(notas[i])
    }
}

notasBaixas.forEach(imprimir)

// Com callback

notas = [3.4,6.5,9.0,8.5,10.0,9.5,5.4]
console.log('____');
notasBaixas = notas.filter(a => a < 7 ? a : false)

notasBaixas.forEach(imprimir)