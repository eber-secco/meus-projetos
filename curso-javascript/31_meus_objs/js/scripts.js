let pessoa = {
  nome: 'Eber',
  idade: 18,
  falar: function() {
    console.log('Olá pessoal!');
  },
  soma: function(a, b) {
    return a + b;
  }
};

console.log(pessoa.idade);

pessoa.falar();

console.log(pessoa.soma(4, 6));