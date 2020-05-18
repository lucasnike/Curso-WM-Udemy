let comparadorComThis = function(params){
    return console.log(params === this);
}
comparadorComThis(global)

// Nesse exemplo com o método bind mudamos a referencia do this de global para o obj

const obj = {}
comparadorComThis = comparadorComThis.bind(obj)
comparadorComThis(global)
comparadorComThis(obj)

let comparadorComThisArrow = param => console.log(param === this);
comparadorComThisArrow(global)
comparadorComThisArrow(module.exports)

// O bind não muda a referência do this numa arrowFunction, o bind só funciona 
// com uma função normal
comparadorComThisArrow = comparadorComThisArrow.bind(obj)
comparadorComThisArrow(obj)
comparadorComThisArrow(module.exports)