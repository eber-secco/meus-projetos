console.log(this);

let pessoa = {
  nome: 'Eber',
  idade: 18,
  falar: function() {
    console.log('Olá pessoal!');
  },
  dizerNome: function() {
    console.log("O meu nome é " + this.nome);
  },
  aniversario: function() {
    this.idade += 1;
    return this.idade;
  },
  saudacao: function() {
    return 'Sr. ' + this.nome;
  }
};

pessoa.dizerNome();

console.log(pessoa.aniversario());

var sdc = pessoa.saudacao();

console.log("Olá " + sdc);