// Padrão de projeto MiddleWare ou Chain of responsability

const passo1 = (ctx, next) => { // Função MiddleWare
    ctx.valor1 = 'Mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'Mid2'
    next()
}

const passo3 = ctx => {
    ctx.valor3 = 'mid3'
}

const exec = (ctx, ...middleWares) => {
    const execPasso = indice => {
        middleWares && indice < middleWares.length &&
            middleWares[indice](ctx, _ => execPasso(indice + 1))
    }
    execPasso(0)
}
const ctx = {}
exec(ctx, passo1, passo2, passo3)
console.log(ctx);