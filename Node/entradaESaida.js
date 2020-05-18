const anonimo = process.argv.indexOf('-a') !== -1

if (anonimo) {
    process.stdout.write('Fala Anônimo!\n') // Mostra no console
    process.exit()
}else{
    process.stdout.write('Digite seu nome: ')
    process.stdin.on('data', data => {
        const nome = data.toString().replace('\n', '')
        process.stdout.write(`Fala ${nome}!!\n`)
        //console.log(nome);
        process.exit()
    })
}