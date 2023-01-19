function exibir(num) {
  console.log('A operação deu: ' + num);
}

function soma(a, b, callback) {
  var op = a + b;
  callback(op);
}

function multiplicacao(a, b, cb) {
  var op = a * b;
  cb(op);
}

soma(2, 2, exibir);

multiplicacao(2, 4, exibir);