process.stdin.on('data', data => {
    nome = data.toString()
})

process.exit()