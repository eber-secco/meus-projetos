// length

var nome = 'Mateus';

console.log(nome.length);

// indexOf

// pego a letra correspondente ao index 3
console.log(nome[3]);

var frase = 'O rato roeu a roupa do rei de Roma';

// pego o valor correspondente à palavra rato
console.log(frase.indexOf('rato'));

// slice

var extraiRoeu = frase.slice(7, 11);

console.log(extraiRoeu);

// replace

var novaFrase = frase.replace('rato', 'rata');

console.log(novaFrase);