function rand([min = 0, max = 100]) {
    if (max < min) {
        [min, max] = [max, min]
    }
    let valor = max - min
    return valor 
}

console.log(rand([30, 20]));
console.log(rand([]));