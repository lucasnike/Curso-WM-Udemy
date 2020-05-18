// Ao usar a função arrow, o this não varia e aponta para a função pessoa onde foi criado

function pessoa() {
    this.idade = 0

    this.fazerAlgoACadaSegundo = function(){
        setInterval(() => {
            this.idade++
            console.log(this.idade);
        }, 1000)
    }
}
const a = new pessoa
a.fazerAlgoACadaSegundo()