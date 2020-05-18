// Fazer o destructuring em arrays

// Relembrando a fazer arrays
let a = []
//console.log(a.length);
a.push('Lucas')
//console.log(a.length);
//console.log(a[0]);
//------------------------------

// O destructuring com arrays, usa-se o simbolo de arrays para declarar as variáveis dentro dele
// e depois o simbolo de atribuição sequido do array, nesse caso a 'const' 'num' vai receber o p-
//rimeiro elemento do array que no case é o 10

const [num] = [10]
console.log(num) ;

// Se houver mais de um elemento na area de declaração de variáveis esses elementos receberão o que
// tem no array na sequência de o à 'n'

const [num1, num2] = ['lucas', 120]
console.log(num1, num2 );

// Caso na área de declaração haja por exemplo 2 elementos e no array tenha apenas um ou nenhum
// o retorno vai ser 'undefined' para as variáveis que estão fora da sequencia como exemplo a variável
// num4 que não tem um elemento correspondente no código abaixo

const [num3, num4] = [120]
console.log(num3, num4 );

//Se vc não houver elementos o sulficiente no vetor e vc não quiser um retorno undefined vc pode setar
// um valor padrão para esses elementos

const [nu1, nu2 = 0] = [12]
console.log(nu1, nu2 );

// Você também pode pular elementos colando virgula e não colocando nada entre essa virgular e apenas 
// pular para o próximo elemento e será armazenado apenas os elementos que vc declarou na ordem do
// array 

const [n1, , n3, , n5, n6 = 0] = [12, 2, 34, 5]
console.log(n1, n3, n5, n6);
// return: [ 12  34  undefined  0 ]


// Vc também pode desestruturar um aninhamento de arrays no caso uma matriz

const [, , [,[, , alda]]] = [20, 53, [[34 ,67 ,53],[24, 36, 72]]]
console.log(alda);
// return: [ 72 ]