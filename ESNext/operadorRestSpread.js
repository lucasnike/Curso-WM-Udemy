// Operador rest(Juntar) / spread (Espalhar)
// Usar o operador rest como parâmetro de uma função 

// Usando o operador spread com objetos

// Nesse exemplo usamos o operador spread para espalhar todos os atributos de funcionario para o clone
const funcionario = {nome: 'Lucas', salario: 10600}
const clone = {...funcionario}
console.log(clone);

// Porem podemos colocar outros atributos alem dos que vem do outro objeto dessa forma:
const funcionario2 = {nome: 'Junior', salario: 2000}
const clone2 = {ativo: true, ...funcionario2}
console.log(clone2);

// Usando o spread com array

const groupA = ['Lucas', 'Maria', 'Mario']
const groupB = ['Isabel', ...groupA, 'Rafaela']
console.log(groupB);