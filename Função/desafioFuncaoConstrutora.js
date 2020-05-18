class Pessoa{

    constructor(nome){
        this.nome = nome
    }

    falar(){
        console.log(`Olá meu nome é ${this.nome}`);
    }

    getNome() {
        return this.nome 
    }
}

const p1 = new Pessoa('Lucas')
p1.falar()


function pessoa2(nome = 'Maria') {
    // Sempre que eu quiser que algo seja visto fora de uma função construtora
    // devo colocar o this.algo para que a visibilidade seja pública
    this.nome = nome
    this.falar = function(){
        console.log(`Olá meu nome é ${nome}`);
    }
}

const p2 = new pessoa2('Gorge')
p2.falar()
console.log(p2.nome);