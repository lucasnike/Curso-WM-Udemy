const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

axios.get(url).then(response => {
    const funcionarios = response.data
    const MulheresChinesas = funcionarios.filter((funcionario) => {
        return funcionario.pais == 'China' && funcionario.genero == 'F' ? funcionario : false
    })
    const aMulherChinesaComMenorSalario = MulheresChinesas.reduce((acumuladora, atual) => {
        return acumuladora.salario > atual.salario ? atual : acumuladora
    })
    console.log(aMulherChinesaComMenorSalario);
})