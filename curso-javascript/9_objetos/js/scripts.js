var obj = {
    nome: 'Eber',
    idade: 18,
    profissao: 'estudante'
};

console.log(obj);

console.log(typeof obj);

// como acessar uma propriedade do objeto?
console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);

console.log('O meu nome é ' + obj.nome);

obj.nome = 'Pedro';

console.log(obj.nome);

obj.graduacao = true;

console.log(obj);