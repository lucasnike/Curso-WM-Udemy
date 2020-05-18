function compras(trab1, trab2) {
    const comprarSorvete = trab1 || trab2
    const comprarTv50 = trab1 && trab2
    const comprarTv32 = !!(trab1 ^ trab2)
    return 'Sorvete: ' + comprarSorvete + "\n" + 'Tv 50: ' + comprarTv50 + "\n" + 'Tv 32: ' + comprarTv32
}
console.log(compras(false, false));