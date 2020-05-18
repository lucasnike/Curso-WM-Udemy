const Pessoa = function(nome, idade){
    this.nome = nome
    this.idade = idade
}

const p1 = new Pessoa('Lucas', 16)
console.log(p1.nome, 'tem', p1.idade, 'anos');

console.log(p1.__proto__);

const Pessoa2 = {
    nome: 'Pessoa',
    idade: 16
}


const Pessoa3 = (nome, idade) => {
    return {
        nome: nome,
        idade: idade
    }
}

const p3 = Pessoa3('Rodrigo', 16)

console.log(typeof p3);
