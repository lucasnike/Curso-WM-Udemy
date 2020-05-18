// ForOf

// Eu posso percorrer elementos de uma String onde o let letra vai ser cada letra, já no for in o let letra seria o indice de um array
for (let letra of 'Cod3r') {
    console.log(letra);
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) { // For in percorre indices
    console.log(i);
}

for (let element of assuntosEcma) { // For of percorre os elementos
    console.log(element);
}

const assuntosAbordadosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

for (let element of assuntosAbordadosMap) { // Percorrendo o map completo
    console.log(element);
}

for (let chave of assuntosAbordadosMap.keys()) { // Percorrendo as chaves
    console.log(chave);
}

for (let value of assuntosAbordadosMap.values()) {// Percorrendo os valores
    console.log(value);
}

for (let [vl, ch] of assuntosAbordadosMap) { // Desestruturando o array no for para usar os dois valores 
    console.log(vl, ch);
}

const letrasSet = new Set(['a', 'b', 'c'])

for (let element of letrasSet) {
    console.log(element);
}