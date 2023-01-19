var x = 1;
var y = 2;

// soma (uma ou mais outra unidade)
console.log(x = x + y);
console.log(x += y);

// subtração
console.log(x -= y);

// multiplicação
console.log( x *= y);

// divisão
console.log(x /= y);

// loops (uma em uma unidade)
console.log(x++);
console.log(x--);

while (x <= 100) {

  console.log(x);

  x *= 2;
}

console.log(x);

while (x > 0) {

  console.log(x);

  x -= 5;

}

console.log(x);