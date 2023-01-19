// Hoisting - declara a variável, mas não a inicializa
// Com ele, as funções e as variáveis são inicializadas no topo do código
console.log(sobrenome);

var nome = null;

console.log(nome);

var nome = 'Mateus';

console.log(nome);

var sobrenome;

console.log(sobrenome);
// a variável sobrenoome não possui valor

sobrenome = 'Bruno';

console.log(sobrenome);
