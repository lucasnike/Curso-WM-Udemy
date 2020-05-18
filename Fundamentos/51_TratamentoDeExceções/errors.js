function tratarErrorELancar(error) {
    throw new Error('Algo deu errado')
}

function tratarErrorELancar2(error){
    // throw 10
    // throw 'mensagem'
    // throw true || false
    // throw 
    const obj = {
        name: 'Error',
        date: new Date
    }
    throw obj
}

function imprimirErroGritado(obj){
    try {
        return obj.nome.toUpperCase() + "!!!"        
    } catch (e) {
        tratarErrorELancar2()
    }finally{
        console.log('Final');
    }
}
const obj = {name: 'Lucas Vinicius'}
console.log(imprimirErroGritado(obj));