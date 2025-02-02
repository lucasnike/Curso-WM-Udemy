function MeuObjeto() {}
console.log(MeuObjeto.prototype);

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto

console.log(obj1.__proto__ === obj2.__proto__);
console.log(obj1.__proto__ === MeuObjeto.prototype);

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function(){
    console.log(`Olá meu nome é ${this.nome}`);
}
obj1.falar()

obj2.nome = 'Leitão' // Shadowing
obj2.falar()

const obj3 = {
    __proto__ : MeuObjeto.prototype
    ,nome: 'Obj3'
}  
obj3.falar()

// Resumindo Loucura

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype);
console.log(MeuObjeto.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);
