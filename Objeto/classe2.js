class Avo{
    constructor(sobrenome, nome){
        this.sobrenome = sobrenome
        this.nome = nome
    }
}

class Pai extends Avo{
    constructor(sobrenome, nome, profissao = 'professor'){
        super(sobrenome, nome)
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor(){
        super('Silva', 'Lucas', 'WebDeveloper')
    }
}
const filho = new Filho()
console.log(filho);
