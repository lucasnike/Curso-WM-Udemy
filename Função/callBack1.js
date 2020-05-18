const fabricantes = ['Mercedes', 'BMW', 'Audi']
function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`);
}
function imprimir2(fabricante) {
    console.log(fabricante);
}
fabricantes.forEach(imprimir)
fabricantes.forEach(imprimir2)