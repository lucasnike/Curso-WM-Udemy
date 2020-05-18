// Com Descructuring

function rand({max = 0 , min = 0 }) {
    let valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let obj = {max: 40, min: 30}
console.log(rand(obj));

// Sem Destructuring

function random(max, min) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(random(60, 50));


// Comclusão, achei melhor sem o destructuring, mas não tenho muito conhecimento da lingugem ainda
console.log(Math.random());