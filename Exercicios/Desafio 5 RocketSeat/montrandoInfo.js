var usuarios = [ 
    {nome: "Diego", habilidades: ["Javascript", "ReactJS", "Redux"] }, 
    {nome: "Gabriel", habilidades: ["VueJS", "Ruby on Rails", "Elixir"] }
]

const mostrador = (usuarios) =>{
    for(let usuario of usuarios){
        const habilidades = usuario.habilidades.join(', ')
        console.log(`O ${usuario.nome} possui as habilidades: ${habilidades}`)
    }
}

mostrador(usuarios)