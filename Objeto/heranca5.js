console.log(typeof String);
console.log(typeof Array);
console.log(typeof Object);

/*
    Toda função tem um atributo fun.prototype que aponta para um objeto que por padrão aponta para Object.prototype e toda função tambem tem seu protótipo que é acessado dessa forma: fun.__proto__ que aponta  para Function.prototype que aponta para Object.prototype;

    Dessa forma tudo que é função também terá essas características acima, logo Strings, Arrays e Objects vão possuir protótipos
*/
console.log(Function.prototype.__proto__ === Object.prototype); // Prova da explicação do comentário acima

// Adicionando uma função à função String

Function.prototype.reverse = function(arg){
    let a = arg.split('').reverse().join('')
    return a
}

String.prototype.reverter = function(){
    return this.split('').reverse().join('')
}

console.log(String.reverse('Lucas'));
console.log('Java'.reverter());

// ------------------

// Adicionando função à Função Array

Array.prototype.showFirst = function(){
    return this[3]
}
let arr = [0,1,2,4]
console.log(arr.showFirst());