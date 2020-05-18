const obj = {
    a: 1,
    b: 2,
    c: 3,
    soma(){
        return this.a + this.b + this.c
    }
}

console.log(obj.soma());

// JSON.stringify(obj) passa um objeto para o formato JavaScript Object Notation (JSON)

console.log(JSON.stringify(obj));

// console.log(JSON.parse("{a: 1, b: 2, c: 3}")); <- Sintaxe JSON errada

// console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")); <- Sintaxe JSON errada

// JSON.parse(JSON) passa um objeto no formato JSON para um objeto padrão do JavaScript

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'));


// Eu posso passar Números, Strings(entre aspas duplas), Valores booleanos, Objetos(Com a mesma notação do JSON), e Arrays

console.log(JSON.parse('{"a": 1.7, "b": "String de texto", "c": true, "d": {},"e": [1,2,3,4] }'));