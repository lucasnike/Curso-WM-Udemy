// Foreach manipula os dados do próprio array onde 
//a função foi chamada, já o map manipula os dados 
// do array passado e depois retorna um novo array

let filmes = ["Matrix 1", "Toy Story", "Forest Gump"]
const novoArray = filmes.map(filme => filme.split(" "))
// A função foreach retorna undefined logo eu 
// não posso armazenar seu resultado numa variável
filmes.forEach(filme => filmes[filmes.indexOf(filme)] = filme.replace(' ', 1))
console.log(filmes);
console.log(novoArray);
