const funcs = []
for (let i = 0; i < 10; i++) {
    funcs[i] = function(){
        console.log(i);
    }
}
funcs[3]()
funcs[6]()