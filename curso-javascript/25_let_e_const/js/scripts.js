let x = 5; // var x = 5;

// o let separa o escopo local em blocos

const y = 10;

console.log('const ' + y)

x = 12;

console.log(x);

if (true) {

  let x = 20;

  console.log(x);

  const y = 50;

  console.log('const if ' + y);

}

console.log(x);

// o let faz com que este x abaixo seja apenas deste for.
for(let x = 0; x <= 10; x++) {

  console.log(x);

}