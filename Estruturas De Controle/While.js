const array = [1, 2, 3, 4, 5, 6]
let i = 0

while(6 != array[i]){
    console.log(6+ ' é diferente de '+ array[i]);
    i++
    if (6 == array[i]) {
        console.log(6 + ' É IGUAL A ' + array[i]);
    }
}