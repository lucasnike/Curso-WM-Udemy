// Set - Não aceita repetição e não é indexada

const times = new Set()

times.add('Barcelona')
times.add('Real Madrid').add('Juventus').add('Flamengo')
times.add('PSG')
times.add('Barcelona')

console.log(times);
console.log(times.size); // Propiedade que armazena o tamanho do conjunto
console.log(times.has('Real Madrid')); // Testa se valor passado como parâmetro existe no conjunto
times.delete('Flamengo')
console.log(times.has('Flamengo'));

const nomes = ['Lucas', 'Isabel', 'Marcos', 'Samara']
const nomesSet = new Set(nomes) // Posso passar um array na instância para serem valores iniciais

console.log(nomesSet);

nomesSet.forEach(vl1 => console.log(`Bom dia ${vl1}`))