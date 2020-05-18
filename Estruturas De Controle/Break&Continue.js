const v = [1, 2, 3, 4, 5, 6,7,8,9,10]

for(let i in v){
    if (i == 6) {
        break
    }
    //console.log(`${i} = ${v[i]}`);
}
console.log('\n' + "-=-=-=-=-=-=" + '\n');
for(let x in v){
    if(x == 6) continue
    //console.log(`${x} = ${v[x]}`);
}
let b = 0
for(a in v){ 
    if (b == 3) break
    for(b in v){
        if (a == 2 && b == 3) {
            break
        }
        console.log(a + ', ' + b);
    }
}
console.log('Fim');