// Cada arquivo em node representa um módulo

// Existem três formas para exportar(tornar visível em outros módulos) um código no node


this.ola = 'Fala pessoal' // 1º Forma
// usando o this

exports.bemVindo = 'Welcome to node' // 2º Forma
// usando a palavra exports

module.exports.ateLogo = 'See ya' // 3º Forma
// usando o module.exports

// É melhor usar ou a segunda ou a terceira forma