// Cadeia de protótipos

Object.prototype.atbt0 = 'Z' // Não faça isso em casa

const avo = {
    atbt1: 'A'
}
const pai = {
    // __proto__ referencia o prototype desse objeto
    __proto__: avo,
    atbt2: 'B'
}
const filho = {
    __proto__: pai,
    atbt3: 'C'
}

console.log(filho.atbt1);
console.log(filho.atbt2);
console.log(pai.atbt1);
console.log(avo.atbt0);

console.log(avo.__proto__);
console.log(pai.__proto__);
console.log(filho.__proto__);

const carro = {
    velAtual: 0,
    velMax: 220,
    acelerarMais(quant){
        if (quant + this.velAtual > this.velMax) {
            this.velAtual = this.velMax
        }else{
            this.velAtual += quant
        }
    },
    status(){
        return `A velocidade atual é ${this.velAtual} de ${this.velMax}`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 320, // Shadowing - Sobrepor um atributo de um objeto superior na hierarquia
}

const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, carro) // Primeiro coloca o objeto e depois seu prototype
Object.setPrototypeOf(volvo, carro)
ferrari.acelerarMais(70)
console.log(ferrari.status());
volvo.acelerarMais(120)
console.log(volvo.status());