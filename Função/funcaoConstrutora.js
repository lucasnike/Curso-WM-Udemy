function carro(velocidadeMaxima = 200, delta = 5){
    // Atributo privado

    // Pra deixar algum atributo privado, só preciso usar o let
    // assim  ele será visível apenas na minha função, ou classe
    // E se eu quiser deixar publico eu apenas adiciono o this.algo
    let velocidadeAtual = 0

    // metodo público

    // pra deixar um método público só preciso usar this.metodo = function
    // ao usar o this para instanciar algo, esse algo fica público

    this.acelerar = function(){
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }
    this.getVelocidadeAtual = function(){
        return velocidadeAtual
    }
}

// Quando eu instancio está função ela funciona como uma classe, e logo um objeto em Java

const car = new carro(500,20)
car.acelerar()
car.acelerar()
car.acelerar()
console.log(car.getVelocidadeAtual());

// Exemplo

const ferrari = new carro(350,50)
// setInterval(ferrari.acelerar, 2000)