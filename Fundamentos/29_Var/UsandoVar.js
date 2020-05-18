const p = a => console.log(a);
{
    {
        {
            {
                var sera = 'será ?' 
                p(sera)
            }
        }
    }
}
p(sera)

function test(){
    var local = 123
    p(local)
}
test()
// console.log(local); - não funciona 

// A variável var só tem dois escopos o global e o de uma função, logo um var numa função só existe lá
