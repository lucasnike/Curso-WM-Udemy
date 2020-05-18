const ferrari = {
    modelo: 'F40',
    velMax: 324
}

const volvo = {
    modelo: 'V40',
    velMax: 200
}

// Por padrão sempre quando eu crio um objeto ele tem um prototype que herda de 
// outro e assim sucessivamente, caso eu não defina de quem ele herda, ele sempre
// herdará de Object.prototype que sempre aponta para null pois o Object.prototype não
// herda nada de ninguém
console.log(ferrari.__proto__);
console.log(ferrari.__proto__ === Object.prototype);
console.log(volvo.__proto__ === Object.prototype);
console.log(Object.prototype.__proto__ === null);

// O atributo .__proto__ retorna o valor do protótipo do objeto, que seria a

// Apenas funções tem o atributo prototype como mostrado abaixo 

function MeuObjeto (){}
console.log(typeof Object, typeof MeuObjeto);
console.log(typeof Object.prototype, typeof MeuObjeto.prototype);