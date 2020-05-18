// Existem três formas de instanciar um objeto em JS
// 1º = Criando uma classe e chamando => new Classe()
// 2º = Criando uma factory function que sempre retorna um objeto, chamando => nomeDaFuncao(params)
/* 3º = Criando uma função construtora, que é uma declaração de função literal
        onde vc pode criar funçoes e atributos dentro dela, usando o this.atributo, so that possa
        ser vista de fora dessa função, chamando=> new NomeDaFunção(params)

*/




// Classe
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
console.log(p1.getNome());
console.log(p1.nome);


// Factory

const criarPessoa = nome => {
    return {
        falar(){
            console.log(`Olá meu nome é ${nome}`);
        }
    }
}
const p2 = criarPessoa('Kalyne')
p2.falar()