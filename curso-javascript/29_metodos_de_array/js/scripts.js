// length

var arr = [1,2,3,4,5,6];

console.log(arr.length);

// push (adiciona)
arr.push(7);

console.log(arr);

// pop (elimina no fim do array)
arr.pop();

console.log(arr);

// unshift (adiciona no começo)
arr.unshift(0);
arr.unshift('teste');

console.log(arr);

// shift (elimina no começo)
arr.shift();

console.log(arr);

// acessar o último elemento
console.log(arr[arr.length - 1]);

// isArray

console.log(Array.isArray(arr));