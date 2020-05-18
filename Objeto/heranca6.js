function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Welcome', 123)
const aula2 = new Aula('Até Breve', 456)

console.log(aula1, '\n' ,aula2);

// Simulando operador new


// O parâmetro f === Função que será passado como parametro, e ... params são os parâmetros da função f
function novo(f, ...params) {
    const obj = {
        __proto__: f.prototype
    }
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 789)
const aula4 = novo(Aula, 'Até breve', 321)
console.log('\n');
console.log(aula3,'\n' ,aula4);