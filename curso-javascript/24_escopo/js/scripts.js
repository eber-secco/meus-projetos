var x = 1;

var y = 3;

console.log(x, y);

function teste() {

  var z = 0;

  console.log(z);

}

teste();

function testando() {

  var z = 6;

  console.log(z);

}

testando();

// o if não delimita escopo no seu bloco.
if(true) {

  var s = 76;

}

console.log(s);