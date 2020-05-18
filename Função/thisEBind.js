const saudacao = 'Bom dia!'
const pessoa = {
    saudacao: 'Bom dia',
    falar(){
        console.log(this.saudacao);
    }
}
pessoa.falar()
const falar = pessoa.falar
// A partir desse momento minha const falar, não reconhece o this do meu objeto pessoa, logo ele não en
//contrará meu atributo de saudaçao bom dia pois ele armazena apenas a função // return 'undefined'
falar()
// Ao usar o bind e passo o objeto pessoa como parametro eu digo que a função está relacionada com
// aquele objeto
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()
