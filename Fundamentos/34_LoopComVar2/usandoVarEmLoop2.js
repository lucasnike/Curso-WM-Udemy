const funcs = []
for (var i = 0; i < 10; i++){
    funcs.push(function(){
        console.log(i);
    })
}
funcs[2]()
funcs[8]()
// Como o var não tem escopo em funções o i será 10 para qualquer função adicionada no array