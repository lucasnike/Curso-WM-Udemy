// ES8: Object.values/Object.entries

const obj = {a: 1, b: 2, c: 3}
console.log(Object.values(obj)); // Retorna um array com todos os valores do obj
console.log(Object.keys(obj)); // Retorna um array com todos as chaves do obj
console.log(Object.entries(obj)); // Retorna um array com arrays dentro com as chaves e os valores do obj

// Melhorias na notação literal dos objetos

const nome = 'Lucas'
// Caso já exista uma const com o mesmo nome da chave não é mais necessário colocar os dois pontos(:) e o valor, dessa forma: 
// E a função pode ser feita dessa forma abaixo, porque antes era assim: ola: functio(){...}, agora posso apenas colocar o nome dela e abrir parênteses que o JS entende dessa forma: ola(){...} 
const pessoa = {
    nome,
    ola(){
        return console.log(`Olá ${nome}`);
    }
}
pessoa.ola()


// Class

class Animal {
    constructor(especie, nome){
        this.especie = especie
        this.nome = nome
    }

    mostraAnimal(){
        console.log(`Ele é o ${this.nome} da espécie ${this.especie}`);
    }
}

const gato = new Animal('Felino', 'Cat')
gato.mostraAnimal()