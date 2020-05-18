// Usando notação literal

const obj = {}
console.log(obj);
console.log(typeof Object, typeof new Object);

// Usando notação new 

const obj2 = new Object
console.log(obj2);

// Usando uma função construtora

function Pessoa(nome, idade){
    this.getNome = () => {
        return nome
    }
    this.getIdade = () => {
        return idade
    }
}
const eu = new Pessoa('Lucas', 16)
console.log(eu.getIdade());

// Função Factory

function CriarFuncionario(nome, area){
    return {
        nome, area
    }
}
console.log(CriarFuncionario("Lucas", "TI"));

// Usando o Object.create

const humano = Object.create(null)
humano.nome = 'Alda'
console.log(humano);

// Função Tirada de um JSON

const fromJson = JSON.parse('{"info": "Sou um JSON"}')
console.log(fromJson);

// Diferença entre foreach e map

