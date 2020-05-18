console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);

function fazerAlgo(){
    console.log('Dentro de uma função   ...');
    console.log(this === exports);
    console.log(this === module.exports);
    console.log(this === global);
}

fazerAlgo()