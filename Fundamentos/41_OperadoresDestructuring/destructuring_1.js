const pessoa = {
    nome: "Lucas",
    idade: 16,
    endereco: {
        rua: "Estrada do golandim",
        numero: 136,
        bairro: "Amarante"
    }
}

// Destruc o obj e atribuir a variáveis com mesmo nome

let {nome: nm, idade} = pessoa
console.log(nm, idade);

// Destruct o obj pessoa e atribuir em variáveis com nomes diferentes das do objeto

let {nome: n, idade: i} = pessoa
console.log(n, i);

// Destruct algo que não existe no objeto; obs: Retorna undefined

const {sobrenome} = pessoa
console.log(sobrenome);

// Destruct algo que não existe no obj, e atribuindo valores caso não exista

const {finalName = true, nome = false} = pessoa
console.log(finalName, nome);

// Destruct um atributo aninhado como endereco

const {endereco: {rua, numero, cep} } = pessoa
console.log(rua, numero, cep);

// Destruct algo aninhado que não existe; Obs: dá error

const {conta: {ag, num}} = pessoa
// console.log(ag, num); == + == Returns: ERROR