const a = 1
const b = 2
const c = 3

// Como era feito antigamente

const obj1 = {a: a, b: b, c: c}

console.log(obj1);

// Como é feito hoje em dia

const obj2 = {a, b, c}

console.log(obj2);

// Os dois console.log vão imprimir a mesma coisa no terminal

// Nessa nova versão do JS eu posso
// criar duas variáveis e depois 
// atribuir essas constantes como sendo
// chave:valor do objeto

const nomeAtrr = 'nota'
const notaAtrr = 10

// Para fazer isso basta chamar obj3[valor1] = valor2
// onde geralmente o valor1 é uma String
const obj3 = {}
obj3[nomeAtrr] = notaAtrr
console.log(obj3);

// Eu posso usar esse método de atribuição acima 
// no momento em que crio o objto
// que vai dar o mesmo resultado do obj3
const obj4 = {[nomeAtrr]: notaAtrr}
console.log(obj4);

// Criar funções dentro de objetos

        // Forma Antiga

            const obj5 = {
                soma: function (){
                    let resultado = 0
                    for(let i in arguments){
                        resultado += arguments[i]
                    }
                    return resultado
                }
            }
            console.log(obj5.soma(1,1,1,1));

        // Forma nova

            const obj6 = {
                soma(){
                    let soma = 0
                    for(let i in arguments){
                        soma += arguments[i]
                    }
                    return soma
                }
            }
            console.log(obj6.soma(5,5,5,4));