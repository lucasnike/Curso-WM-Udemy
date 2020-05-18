const fs = require('fs')
const path = __dirname + '/euSouFoda.txt'
// Forma assincrona
fs.readFile(path, 'utf-8', (err, cont) => {
    console.log(cont);
    let array = cont.split('\n')
    console.log(array);
})