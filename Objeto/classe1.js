class Lancamento{
    constructor(name = 'Genérico', price = 0){
        this.name = name
        this.price = price
    }
}

class CicloFinanceiro{
    constructor(mes, ano) {
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){
        lancamentos.forEach(l => this.lancamentos.push(l))
    }

    sumario(){
        let valorCOnsolidado = 0
        this.lancamentos.forEach(l => {
            valorCOnsolidado += l.price
        })
        return valorCOnsolidado
    }
}

const salario = new Lancamento('Salário', 45000)
const contaDeLuz = new Lancamento('Luz', -220)
const contas = new CicloFinanceiro(3, 2020)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario());