// Função normal

let dobro = function(a){
    return 2 * a
}

console.log(dobro(3));

// Arrow Function

dobro3 = (a) => {
    return a * 2
}

console.log(dobro3(6));

// Arrow Function

dobro2 = (a) => a * 2
console.log(dobro2(2));

// Normal Function

let comprimentar = function(){
    return 'Olá'
}

// Arrow function 

comprimentar = () => 'Olá'

// Quando eu não passar nenhum parametro eu posso colocar um _ ao invés de parenteses vazios

comprimentar = _ => 'Olá!'

console.log(comprimentar());