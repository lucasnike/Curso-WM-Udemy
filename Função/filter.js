const idades = [16,42,40,20,18,20,31]
const test = a => a > 30 ? a : null
const numsMaiores30 = idades.filter(test)
console.log(numsMaiores30);