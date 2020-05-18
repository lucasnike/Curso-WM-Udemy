console.log(Math.ceil(6.2))
console.log(Math.floor(6.2))
const obj1 = {}
obj1.nome = 'Bottle'
console.log(obj1.nome);

function obj(nome) {
    this.nome = nome
}
const obj2 = new obj('Mesa')
const obj3 = new obj('Cadeira')
console.log(obj3.nome);
console.log(obj2.nome);
